import axios from "axios";
import authToken from "./authToken";

const ServerURL = import.meta.env.VITE_SERVER_PORT;

const Axios = axios.create({
  baseURL: `${ServerURL}`,
});

Axios.interceptors.request.use(
  function (config) {
    if (authToken()) {
      config.headers.Authorization = `${authToken()}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default Axios;
