import request from "supertest";
import { AxiosInstance } from "axios";
import { ClientUtil } from "./ClientUtil";

const axiosInstance: AxiosInstance = ClientUtil.createAxiosUtil();

describe("Testing Client Util", () => {
  it("instancia do axios", () => {
    expect(axiosInstance).not.toBeNull();
  });
});

describe("Testing Request", () => {
  it("retorno de status api get produtos", async () => {
    let response = await request(axiosInstance)
      .get(`/products`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
    expect(response.status).toEqual(200);
  }); // 30 seconds timeout for this test
});
