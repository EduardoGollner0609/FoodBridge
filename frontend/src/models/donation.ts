import { UserDTO } from "./User";

export type DonationMinDTO = {
  id: number;
  userName: string;
  description: string;
  city?: string;
  state?: string;
};


export type DonationDTO = DonationMinDTO & {
  user: UserDTO;
}