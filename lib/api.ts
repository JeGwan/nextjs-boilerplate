import Axios, { AxiosInstance } from "axios";
import { parseCookies } from "./utils";

type ApiSuccessResponse<ResultType = {}> = {
  success: true;
  result: ResultType;
};
type ApiFailResponse = {
  success: false;
  devMsg: string;
  usrMsg: string;
};

export type ApiResponse<ResultType> =
  | ApiSuccessResponse<ResultType>
  | ApiFailResponse;
let api: Api | undefined = undefined;

class Api {
  private axios: AxiosInstance;
  constructor(ctx?: any) {
    const headers: any = { "Content-Type": "application/json" };
    const token = parseCookies(ctx).token;
    if (token) headers["Authorization"] = `Bearer ${token}`;
    this.axios = Axios.create({
      baseURL: process.env.END_POINT as string,
      headers,
    });
  }
  post<ResultType>(route: string, body?: any) {
    return this.axios.post<ApiResponse<ResultType>>(route, body);
  }
  get<ResultType>(route: string, params?: any) {
    return this.axios?.get<ApiResponse<ResultType>>(route, { params });
  }
}
export const renewApi = (ctx?: any) => (api = new Api(ctx));
export const getApi = (ctx?: any) => api || (api = new Api(ctx));
