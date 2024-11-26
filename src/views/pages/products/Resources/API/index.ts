import { AxiosInstance } from "axios";
import { ClientUtil } from "../../../../../util/ClientUtil";

export class Api {
  static fakeApi: AxiosInstance = ClientUtil.createAxiosUtil();

  static getProducts = async () => {
    const response = await this.fakeApi.get(`/products`);
    return response;
  };
}
