export interface Case {
  id: number;
  student_id: number;
  course_id: number;
  session_id: number;
  agent_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  created_by: number;
  updated_by: number;
  student: Student;
  course: Course;
  session: Session;
  agent: Agent;
}

export interface Student {
  id: number;
  name: string;
  surname: string;
  place_of_birth: string;
  passport_start_date: string;
  passport_expiry_date: string;
  passport_status: string;
  english_test: any;
  english_test_reason: any;
  last_course: any;
  last_course_completion_year: any;
  email: string;
  nationality: string;
  phone_no: string;
  date_of_birth: string;
  gender: string;
  address: any;
  passport: any;
  academic_history: any;
  travel_history: any;
  work_experience: any;
  intake: any;
  notes: any;
  dependant_no: any;
  dependant: any;
  dependant_financial_info: any;
  flag_for_compliance: any;
  travel_outside: any;
  travel_outside_no: any;
  travel_uk: any;
  travel_uk_no: any;
  previous_study_uk: any;
  receive_student_visa: any;
  refusal_from_uk: any;
  course_level_in_uk: any;
  agent_id: any;
  status_id: any;
  stakeholder: any;
  previous_cas: any;
  academic_document: any;
  passport_doc: any;
  brp_doc: any;
  financial_statement_doc: any;
  qualification_doc: any;
  lang_doc: any;
  miscellaneous_doc: any;
  tb_certificate_doc: any;
  previous_cas_doc: any;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  referral: any;
  screened_by: any;
  created_by: number;
  updated_by: number;
  address2: any;
  city: any;
  county: any;
  post_code: any;
  course_id: any;
  preferred_method: any;
  traveling_alone: any;
}

export interface Course {
  id: number;
  name: string;
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

export interface Agent {
  id: number;
  name: string;
  email: string;
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
  gender: any;
  address: any;
  zip_code: any;
  city: any;
  state: any;
  work_phone_no: any;
  phone: any;
  location: any;
  hiring_date: any;
  remember_token: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  created_by: number;
  updated_by: number;
}
