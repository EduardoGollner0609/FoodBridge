import axios from "axios";
import { UserInsertDTO } from "../models/User";
import { BASE_URL } from "../utils/system";

export function insert(userInsert: UserInsertDTO) {
  return axios.post(BASE_URL + "/users", userInsert);
}
