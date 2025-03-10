import { AxiosRequestConfig } from "axios";
import {
  AccessTokenPayloadDTO,
  CredentialsDTO,
  RoleEnum,
} from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import QueryString from "qs";
import { requestBackend } from "../utils/request";
import * as accessTokenRepository from "../localstorage/access-token-repository";
import jwtDecode from "jwt-decode";
import { EmailMinDTO, NewPasswordDTO } from "../models/recover-password";

export function loginRequest(loginData: CredentialsDTO) {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  const requestBody = QueryString.stringify({
    ...loginData,
    grant_type: "password",
  });

  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/oauth2/token",
    data: requestBody,
    headers: headers,
  };

  return requestBackend(config);
}

export function recoverToken(requestBody: EmailMinDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/auth/recover-token",
    data: requestBody,
  };

  return requestBackend(config);
}

export function saveNewPassword(requestBody: NewPasswordDTO) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: "/auth/new-password",
    data: requestBody,
  };

  return requestBackend(config);
}

export function logout() {
  accessTokenRepository.remove();
}

export function saveAccessToken(token: string) {
  accessTokenRepository.save(token);
}

export function getAccessToken() {
  return accessTokenRepository.get();
}

export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
  try {
    const token = accessTokenRepository.get();
    return token == null
      ? undefined
      : (jwtDecode(token) as AccessTokenPayloadDTO);
  } catch {
    return undefined;
  }
}

export function isAuthenticated(): boolean {
  const tokenPayload = getAccessTokenPayload();
  return tokenPayload && tokenPayload.exp * 1000 > Date.now() ? true : false;
}

export function hasAnyRoles(roles: RoleEnum[]): boolean {
  if (roles.length === 0) {
    return true;
  }
  const tokenPayload = getAccessTokenPayload();

  if (tokenPayload !== undefined) {
    for (let i = 0; i < roles.length; i++) {
      if (tokenPayload.authorities.includes(roles[i])) {
        return true;
      }
    }
  }
  return false;
}
