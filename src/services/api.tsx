import Axios from "axios";
import appConfig from "./config";

const baseUrl = appConfig.apiUrl;

const axios = Axios.create({
  withCredentials: false,
  baseURL: baseUrl,
});

//request interceptor to add the auth token header to requests
axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `jwt ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//response interceptor to refresh token on receiving token expired error
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error?.config;

    if (
      originalRequest?.url === `${baseUrl}/token/refresh/` &&
      error?.response?.status === 401
    ) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    } else {
      const refreshToken = localStorage.getItem("refreshToken");
      if (
        refreshToken &&
        error?.response?.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;

        const requestOptions = {
          url: `${baseUrl}/token/refresh/`,
          method: "POST",
          headers: {},
          data: { refresh: refreshToken },
        };
        return axios(requestOptions).then(
          (res) => {
            if (res.status === 200) {
              localStorage.setItem("accessToken", res.data.access);
              return axios(originalRequest);
            } else if (res.status === 401) {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");
            }
          },
          (errorRefresh) => {
            console.log("errorRefresh", errorRefresh);
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
          }
        );
      }
    }
    // return Promise.reject(error);
    return error?.response;
  }
);

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default axios;
