import axios from "axios";

const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
 
});
axiosApi.defaults.headers.common["Authorization"] =
  localStorage.getItem("token") || "";
axiosApi.defaults.headers.common["isAdmin"] = true;

axiosApi.interceptors.response.use(
  (response) => {
    console.log("response", response);
    return response.data;
  },
  (error) => {
    console.log("e", error);
    return Promise.reject(error);
  }
);
const makeRequest = (method, url, config = {}) => {
  let requestConfig = {
    ...config,
    method,
    url: `api${url}`,
  };
  return axiosApi(requestConfig);
};

export const get = (url, config = {}) => makeRequest("get", url, config);
export const post = (url, config = {}) => makeRequest("post", url, config);
export const patch = (url, config = {}) => makeRequest("patch", url, config);
export const del = (url, config = {}) => makeRequest("delete", url, config);
export const put = (url, config = {}) => makeRequest("put", url, config);