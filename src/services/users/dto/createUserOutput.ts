export interface CreateUserOutputItem {
  id: string;
  username: string;
  password: string;
  role: string;
}

export interface CreateUserOutput {
  result: CreateUserOutputItem;
}
