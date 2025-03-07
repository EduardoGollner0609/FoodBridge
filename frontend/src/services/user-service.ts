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

export function findMe() {
  const config: AxiosRequestConfig = {
    url: "/users/me",
    withCredentials: true,
  };

  return requestBackend(config);
}

export function deleteById(id: number | undefined) {
  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: `/users/${id}`,
    withCredentials: true
  }

  return requestBackend(config);
}
