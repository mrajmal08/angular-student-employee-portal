import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from 'shared/models/case-model';
import { Student } from 'shared/models/student-model';
import { ApiClientService } from 'shared/services/api-client.service';
import { AppService } from 'shared/services/app-service.service';

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.scss'],
})
export class StudentsViewComponent implements OnInit {
  studentData: Student | null = null;
  caseData: Case[] | null = null;
  dataForEdit: any;
  studentId: number = 0;

  ngOnInit(): void {
    this.dataForEdit = history.state;
    if (!!this.dataForEdit.studentId) {
      this.studentId = this.dataForEdit.studentId;
    }
    this.getSingleStudent();
    this.getCase();
  }

  getSingleStudent() {
    this.apiClient
      .get(`student/single/${this.studentId}`, {})
      .subscribe((resp: any) => {
        this.studentData = resp.result;
      });
  }

  getCase() {
    this.apiClient
      .get(`case/single/${this.studentId}`, {})
      .subscribe((resp: any) => {
        this.caseData = resp.result;
      });
  }

  columns = [
    { name: 'Case Id', prop: 'id' },
    { name: 'Course', prop: 'course.name' },
    { name: 'Agent', prop: 'agent.name' },
    { name: 'Session', prop: 'session.name' },
    { name: 'Created By', prop: 'created_by' },
    { name: 'Updated By', prop: 'updated_by' },
  ];

  studentInformation = {
    first_name: 'John',
    middle_name: 'A',
    last_name: 'Doe',
    date_of_birth: new Date(1978, 5, 20), // June 20, 1978
    address: '123 Main St, Apt 4B, Springfield, IL 62704',
    suite_no: 'Apt 4B',
    ssn: '123-45-6789',
    home_phone_no: '5551234567',
    city: 'Springfield',
    state: 'IL',
    zip: '62704',
    cell_phone_no: '5559876543',
    work_phone_no: '5557654321',
    phone_extension: '101',
    email: 'john.doe@example.com',
    emergency_contact: '5551112222',
  };

  page = {
    perPage: 25,
    page: 1,
    total: 100,
  };

  constructor(
    private router: Router,
    private apiClient: ApiClientService,
    private appService: AppService
  ) {}

  extractStreetAddress(address: any): string {
    if (!address) {
      return 'N/A';
    }

    return address.split(',')[0];
  }

  addNewCase() {
    let url = '/case/add/info';
    this.router.navigateByUrl(url);

    this.appService.updateBreadCrumbData({
      studentId: this.studentId,
      caseId: null,
    });
  }

  onEditCaseClick(row: any) {
    let url = `/case/edit/${row.id}/info`;
    this.router.navigateByUrl(url, { state: { row } });
    this.appService.updateBreadCrumbData({
      studentId: this.studentId,
      caseId: row.id,
    });
  }

  setPage(pageInfo: any) {
    this.page.page = pageInfo.offset + 1;
  }

  GetYears(date: string | undefined): number {
    const dateObj = new Date(date!);
    const today = new Date();

    const years = today.getFullYear() - dateObj.getFullYear();
    const m = today.getMonth() - dateObj.getMonth();
    const d = today.getDate() - dateObj.getDate();
    const finalYears = m < 0 || (m === 0 && d < 0) ? years - 1 : years;
    return finalYears;
  }

  GetDOB(date: string | undefined): string {
    const dateObj = new Date(date!);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = dateObj.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
}
