export type RoleEnum = "ROLE_USER";

export type CredentialsDTO = {
  username: string;
  password: string;
};

export type AccessTokenPayloadDTO = {
  exp: number;
  username: string;
  authorities: RoleEnum[];
};
