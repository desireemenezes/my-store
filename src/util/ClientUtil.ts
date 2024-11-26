import axios, { AxiosInstance } from "axios";

export class ClientUtil {
  static createAxiosUtil(): AxiosInstance {
    return axios.create({
      baseURL: "https://api.escuelajs.co/api/v1",
      headers: {
        Accept: "application/json",
        "x-rapidapi-host": "famous-quotes4.p.rapidapi.com",
        "x-rapidapi-key": "<your-key-here>",
      },
    });
  }
}
