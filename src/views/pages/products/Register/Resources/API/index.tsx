import { AxiosInstance } from "axios";
import { ClientUtil } from "../../../../../../util/ClientUtil";
import { IPostProducts } from "../Types";

export class Api {
    static fakeApi: AxiosInstance = ClientUtil.createAxiosUtil();

    static getCategories = async () => {
        const response = await this.fakeApi.get(`/categories`);
        return response;
    };

    static getProductById = async (id: number) => {
        const response = await this.fakeApi.get(`/products/${id}`,);
        return response;
    };

    static postProducts = async (bodyParams: IPostProducts) => {
        const response = await this.fakeApi.post(`/products`, bodyParams);
        return response;
    };

    static putProducts = async (id: number, bodyParams: IPostProducts) => {
        const response = await this.fakeApi.post(`/products/${id}`, bodyParams);
        return response;
    };
}
