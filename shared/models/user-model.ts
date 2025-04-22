export interface User {
  id: number;
  name: string;
  email: string;
  phone_no: string;
  email_verified_at: string;
  password: string;
  role_id: number;
  department_id: number;
  designation_id: number;
  session_id: number;
  status: number;
  agency_name: string;
  institute_time: string;
  agent_market_value: string;
  start_date: string;
  end_date: string;
  nationality: string;
  date_of_birth: string;
  remember_token: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  created_by: string;
  updated_by: string;
  role: Role;
  department: Department;
  designation: Designation;
  session: Session;
}

export interface Role {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
}

export interface Department {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  created_by: number;
  updated_by: number;
}

export interface Designation {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  created_by: number;
  updated_by: number;
}

export interface Session {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  created_by: number;
  updated_by: number;
}
