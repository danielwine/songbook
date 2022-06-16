export class User {
  [key: number]: any;
  id?: number;
  first_name?: string;
  last_name?: string;
  username: string = '';
  password: string = '';
  role?: number;
  token?: string;
}
