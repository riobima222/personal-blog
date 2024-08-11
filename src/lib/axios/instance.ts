import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
  Expires: 0,
};

const instance = axios.create({
  baseURL: process.env.URL_BASED,
  headers,
  timeout: 60 * 1000,
});

instance.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (config) => config,
  (error) => Promise.reject(error)
);

export default instance;
