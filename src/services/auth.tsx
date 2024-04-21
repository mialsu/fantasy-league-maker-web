import http from "./api";

const url = "/auth/";

export const httpLogin = (credentials: { email: string; password: string }) => {
  console.log("httpLogin");
  return http({
    url: `${url}login/`,
    method: "POST",
    data: credentials,
  });
};
