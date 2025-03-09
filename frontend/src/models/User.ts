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

export type UserSimpleDTO = {
  id: number;
  name: string;
  address: string;
  state: string;
};

export type UserMinDTO = {
  id: number;
  name: string;
  phone: string;
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

export type CollectorId = {
  id: number | undefined;
};
