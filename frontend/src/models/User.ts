export type UserDTO = {
  id: number;
  name: string;
  email: string;
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
