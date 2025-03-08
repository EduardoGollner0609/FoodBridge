export const BASE_URL =
  import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";

export const CLIENT_ID = import.meta.env.VITE_CLIENT_ID ?? "myclientid";

export const CLIENT_SECRET =
  import.meta.env.VITE_CLIENT_SECRET ?? "myclientsecret";

export const TOKEN_KEY =
  import.meta.env.VITE_TOKEN_KEY ?? "com.eduardo.foodbridge/Token";


  export const USER_LOGGED_KEY =
  import.meta.env.VITE_USER_LOGGED_KEY ?? "com.eduardo.foodbridge/UserLogged";
