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

export function updateCollectDonation(id: number | undefined) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: `/donations/collect/${id}`,
    withCredentials: true,
  };

  return requestBackend(config);
}

export function findAllPaged(
  page: number,
  size = 5,
  address: string | undefined
) {
  const url = address ? `/donations/list/${address}` : `/donations/list`;
  const config: AxiosRequestConfig = {
    method: "GET",
    url: url,
    params: { page, size },
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
