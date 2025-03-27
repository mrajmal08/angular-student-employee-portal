export interface LoginInfo {
  status: boolean;
  message: string;
  token: string;
  result: Result;
}

export interface Result {
  id: number;
  name: string;
  email: string;
  phone_no: any;
  email_verified_at: any;
  password: string;
  role_id: number;
  remember_token: string;
  created_at: any;
  updated_at: any;
  deleted_at: any;
}
