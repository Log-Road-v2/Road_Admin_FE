import { instance } from "../Axios";
import { LoginRequest, LoginResponse } from "./interface";

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await instance.post("/auth/login", data);
  return response.data;
}; 