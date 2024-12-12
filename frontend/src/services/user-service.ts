import { UserInsertDTO } from "../models/User";
import { requestBackend } from "../utils/request";
import { AxiosRequestConfig } from "axios";

export function insert(userInsert: UserInsertDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/users",
    data: userInsert,
  };

  return requestBackend(config);
}
