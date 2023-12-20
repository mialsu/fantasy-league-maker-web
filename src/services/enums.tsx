import http from "./api";

const url = "/enums/";

export const httpGetEnums = () => {
  console.log("httpGetEnums");
  return http({
    url: `${url}`,
    method: "GET",
  });
};
