import { UserDTO, UserInsertDTO } from "../models/User";
import { requestBackend } from "../utils/request";
import { AxiosRequestConfig } from "axios";
import * as userLoggedRepository from "../localstorage/user-logged-repository";

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
    withCredentials: true,
  };

  return requestBackend(config);
}

export function findById(id: number | undefined) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `/users/${id}`,
    withCredentials: true,
  };

  return requestBackend(config);
}

export function saveUserLogged(user: UserDTO) {
  userLoggedRepository.save(user);
}

export function getUserLogged() {
  return userLoggedRepository.get();
}

export function logout() {
  userLoggedRepository.remove();
}
