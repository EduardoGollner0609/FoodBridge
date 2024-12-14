export type UserDTO = {
  id: number;
  name: string;
  birthDate: string;
  phone: string;
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
