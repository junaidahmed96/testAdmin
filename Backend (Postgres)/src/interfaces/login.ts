export interface Login {
  user: UserDetail;
  token: string;
}

interface UserDetail {
  email: string;
  first_name: string;
  last_name: string;
}
