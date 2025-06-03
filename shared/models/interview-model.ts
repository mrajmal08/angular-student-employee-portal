export interface Interview {
  id: number;
  case_id: number;
  status_id: number;
  interviewer_name: any;
  interview_date: any;
  start_time: any;
  end_time: any;
  referral_date: string;
  student_notified: string;
  sample_questions: any;
  recording1: any;
  recording2: any;
  compliance_interviewer_name: any;
  compliance_interview_date: any;
  compliance_start_time: any;
  compliance_end_time: any;
  compliance_referral_date: any;
  compliance_student_notified: any;
  compliance_sample_questions: any;
  recording3: any;
  recording4: any;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  created_by: string;
  updated_by: string;
  is_scheduled: any;
  status: Status;
}

export interface Status {
  id: number;
  name: string;
  description: any;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  created_by: any;
  updated_by: any;
}
