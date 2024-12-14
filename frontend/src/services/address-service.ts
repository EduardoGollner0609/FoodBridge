import axios from "axios";

export function findByCep(address: string) {
  return axios.get(`https://viacep.com.br/ws/${address}/json/`);
}

export function setErrorCep(inputs: any, address: string) {
  return {
    ...inputs,
    [address]: {
      ...inputs[address],
      message: "CEP inválido",
      dirty: "true",
      invalid: "true",
    },
  };
}
