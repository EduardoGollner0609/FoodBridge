import axios from "axios";

export function validateCep(address: string) {
  axios
    .get(`https://viacep.com.br/ws/${address}/json/`)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}
