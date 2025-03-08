import { UserDTO } from "../models/User";
import { USER_LOGGED_KEY } from "../utils/system";

export function save(user: UserDTO) {
  localStorage.setItem(USER_LOGGED_KEY, JSON.stringify(user));
}

export function get(): UserDTO | null {
  const userLogged = localStorage.getItem(USER_LOGGED_KEY);
  return userLogged ? JSON.parse(userLogged) : null;
}

export function remove() {
  localStorage.removeItem(USER_LOGGED_KEY);
}