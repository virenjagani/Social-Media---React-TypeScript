import { AxiosResponse } from "axios";
import Axios from "../../../Utils/Axios";

export const requestSignupAuth = async (
  payload: any
): Promise<AxiosResponse<any, any>> => {
  const response = await Axios.post(`/api/auth/register`, payload);
  return response;
};

export const requestLoginAuth = async (
  payload: any
): Promise<AxiosResponse<any, any>> => {
  const response = await Axios.post(`/api/auth/login`, payload);
  return response;
};
