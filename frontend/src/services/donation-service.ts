import { AxiosRequestConfig } from "axios";
import { DonationDTO } from "../models/donation";
import { requestBackend } from "../utils/request";

export function insertDonation(donation: DonationDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/donations",
    data: donation,
    withCredentials: true,
  };

  return requestBackend(config);
}

export function findAllPaged() {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/donations",
    withCredentials: true,
  };

  return requestBackend(config);
}

export function findById(id: number) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `/donations/${id}`,
    withCredentials: true,
  };

  return requestBackend(config);
}

export function deleteById(id: number) {
  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: `/donations/${id}`,
    withCredentials: true,
  };

  return requestBackend(config);
}
