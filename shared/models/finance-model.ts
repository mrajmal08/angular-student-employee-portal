export interface Finance {
  id: number;
  case_id: number;
  course_id: number;
  course_fees: string;
  first_year_fees: string;
  living_cost_inside_london: string;
  living_cost_outside_london: string;
  total_fund: string;
  living_cost_plan: string;
  other: string;
  education_loan: string;
  loan_doc: any;
  another_education_loan: any;
  another_loan_doc: any;
  fees_deposit: string;
  deposit_doc: any;
  another_deposit: string;
  another_deposit_doc: any;
  funds_amount_paid: string;
  edu_loan_paid: string;
  fees_outstanding: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  created_by: number;
  updated_by: number;
  course: Course;
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
