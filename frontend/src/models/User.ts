import { DonationMinDTO } from "./donation";

export type UserDTO = {
  id: number;
  name: string;
  email: string;
  birthDate: string;
  phone: string;
  address: string;
  donations: DonationMinDTO[];
  donationsCollected: DonationMinDTO[];
};

export type UserMinDTO = {
  id: number;
  name: string;
};

export type UserInsertDTO = {
  id: number;
  name: string;
  birthDate: string;
  address: string;
  phone: string;
  email: string;
  password: string;
};
