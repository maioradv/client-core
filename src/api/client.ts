import { AccessTokenDto } from "@maioradv/types";

export interface ClientApiI {
  auth: () => Promise<AccessTokenDto>,
  jwt: (accessToken:string) => Promise<AccessTokenDto>,
}