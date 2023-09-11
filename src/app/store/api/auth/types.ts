export type SignInRequestBody = {
  email: string;
  password: string;
};

export type SignUpRequestBody = {
  last_name: string;
  first_name: string;
  email: string;
  password: string;
};

export type SignUpResponse = {
  id: number;
};
