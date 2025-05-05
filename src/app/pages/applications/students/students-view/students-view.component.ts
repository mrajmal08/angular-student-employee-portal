import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from 'shared/models/case-model';
import { Course } from 'shared/models/course-model';
import { Session } from 'shared/models/session-model';
import { Student } from 'shared/models/student-model';
import { User } from 'shared/models/user-model';
import { ApiClientService } from 'shared/services/api-client.service';

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
    // { name: 'Student Name', prop: 'studentName' },
    { name: 'Course', prop: 'course.name' },
    { name: 'Agent', prop: 'agent.name' },
    { name: 'Session', prop: 'session.name' },
    // { name: 'Recruitment Agent', prop: 'recruitmentAgent' },
    // { name: 'Method Of Contact', prop: 'methodOfContact' },
    // { name: 'Verifier', prop: 'verifier' },
    { name: 'Created By', prop: 'created_by' },
    { name: 'Updated By', prop: 'updated_by' },
  ];
  rows = [
    {
      studentId: 10,
      studentName: 'Damon Pickett ajmal',
      courseApplied: 'Mphil',
      intake: 'June',
      dependants: '👁️',
      travelingAlone: 'Yes',
      recruitmentAgent: 'Kathleen Cantrell test update',
      methodOfContact: 'indirect',
      verifier: '',
      createdBy: 'Admin 2024-09-19',
      updatedBy: 'Admin 2024-09-19',
    },
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

  // Other basic details
  age: number = 45;
  studentGender: string = 'Male';

  page = {
    perPage: 25,
    page: 1,
    total: 100,
  };

  // Dummy case information (used in the "Case Info" section)

  caseLimit: number = 10;
  caseOffset: number = 0;
  caseaActivePage: number = 1;

  // Dummy Employer Info
  employerData = [
    { id: 1, employerName: 'Acme Corp', address: '456 Corporate Blvd' },
    { id: 2, employerName: 'Globex Inc', address: '789 Business Rd' },
  ];
  employerTotal: number = this.employerData.length;
  employerOffset: number = 0;

  // Dummy Adjuster Info
  adjusterData = [
    { id: 1, name: 'Adjuster One', email: 'adjuster.one@example.com' },
    { id: 2, name: 'Adjuster Two', email: 'adjuster.two@example.com' },
  ];
  adjusterTotal: number = this.adjusterData.length;
  adjusterOffset: number = 0;

  // Dummy Insurance Info
  insuranceData = [
    { id: 1, company: 'Insurance Co A', policyNo: 'POL12345' },
    { id: 2, company: 'Insurance Co B', policyNo: 'POL67890' },
  ];
  insuranceTotal: number = this.insuranceData.length;
  insuranceOffset: number = 0;

  // Dummy Accident Info (note: HTML uses "acident" which may be a typo)
  acidientData = [
    {
      id: 1,
      accidentDate: new Date(2022, 6, 10),
      description: 'Minor accident',
    },
  ];
  acccidentTotal: number = this.acidientData.length;
  accidientOffset: number = 0;

  // Dummy Associated Cases for "Associated Case Info" section
  associatedCases = [
    { id: 1, caseName: 'Associated Case 1' },
    { id: 2, caseName: 'Associated Case 2' },
  ];

  // Dummy Provider Info for "Provider Info" section
  providerData = [
    {
      id: 1,
      office_name: 'Provider One',
      address: '123 Provider St',
      city: 'Metropolis',
      state: 'NY',
      zip: '10001',
      email: 'provider.one@example.com',
      work_phone_no: '5552223333',
    },
    {
      id: 2,
      office_name: 'Provider Two',
      address: '456 Healthcare Ave',
      city: 'Gotham',
      state: 'NJ',
      zip: '07001',
      email: 'provider.two@example.com',
      work_phone_no: '5554445555',
    },
  ];

  // This variable controls which student info section is displayed.
  // It can be set to values such as 'employer', 'adjuster', 'insurance', 'acident', 'associative', or 'provider'
  studentInfoType: string = 'associative';

  // Dummy variables for the "Add New Case" modal
  dropdownPreviousCaseSettings = {
    singleSelection: true,
    idField: 'id',
    textField: 'name',
    allowSearchFilter: true,
  };
  searchedCaseId = [
    { id: 1, name: 'Case 1' },
    { id: 2, name: 'Case 2' },
    { id: 3, name: 'Case 3' },
  ];
  selectedCases: any[] = [];
  selectedCaseId: any = 'new'; // if 'new', a new case is created; if null, a previous case is selected
  isPreviousCaseSelected: boolean = false;
  isButtonDisabled: boolean = false;

  // For demonstration in the modal (if needed)
  inputfile: string = '';

  constructor(private router: Router, private apiClient: ApiClientService) {}

  // A simple helper function to extract just the street address from a full address string.
  extractStreetAddress(address: any): string {
    if (!address) {
      return 'N/A';
    }
    // Return the part before the first comma
    return address.split(',')[0];
  }

  // Dummy method to open the "Add New Case" modal
  addNewCases(): void {
    console.log('Opening modal to add a new case...');
    // Add your modal open logic here.
  }

  // Dummy method to handle closing the modal
  closedModal(): void {
    console.log('Modal closed.');
  }

  // Dummy cancel method for the modal
  cancel(): void {
    console.log('Modal canceled.');
  }

  // Dummy confirm method for the modal
  confirm(): void {
    console.log('New case confirmed.');
  }

  // Methods to handle selection of new or previous cases in the modal
  onNewCaseSelected(): void {
    console.log('Selected to create a new case.');
    this.isPreviousCaseSelected = false;
  }

  onPreviousCaseSelected(): void {
    console.log('Selected a previous case.');
    this.isPreviousCaseSelected = true;
  }

  onItemSelect(event: any): void {
    console.log('A previous case was selected:', event);
    // Update selectedCases as needed
    this.selectedCases.push(event);
  }

  // Dummy pagination change methods for each list
  casePageChange(event: any): void {
    console.log('Case page changed:', event);
  }

  employerPageChanged(event: any): void {
    console.log('Employer page changed:', event);
  }

  adjusterPageChanged(event: any): void {
    console.log('Adjuster page changed:', event);
  }

  insurancePageChanged(event: any): void {
    console.log('Insurance page changed:', event);
  }

  accidientPageChange(event: any): void {
    console.log('Accident page changed:', event);
  }

  // A method to switch which information is displayed based on a given type.
  getInfo(infoType: string): void {
    this.studentInfoType = infoType;
    console.log('Displaying info for:', infoType);
  }

  addNewCase() {
    let url = '/case/add/info';
    this.router.navigateByUrl(url);
  }

  onEditCaseClick(row: any) {
    let url = `/case/edit/${row.id}/info`;
    this.router.navigateByUrl(url, { state: { row } });
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

    // Get day, month, and year
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = dateObj.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    console.log(formattedDate); // Output: 01/02/2000
    return formattedDate;
  }

  editStudent(row: any): void {
    // this.router.navigateByUrl(`/applications/students/edit/${row.id}`, {
    //   state: { row },
    // });
  }

  onDeleteStudent(row: any): void {
    // this.showAlert(
    //   'warning',
    //   'Delete Student?',
    //   'Do you really want to delete this student.',
    //   row.id
    // );
  }

  showAlert(type: string, title: string, message: string, id: number) {
    // const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    //   width: '400px',
    //   panelClass: 'custom-dialog-container',
    //   backdropClass: 'custom-dialog-backdrop',
    //   position: { top: '50%', left: '50%' },
    //   data: { type: type, title: title, message: message },
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.deleteStudent(id);
    //   }
    // });
  }

  deleteStudent(id: number) {
    // this.apiClient
    //   .get(`student/delete/${id}`)
    //   .toPromise()
    //   .then((resp) => {
    //     this.toastr.success('Student Deleted successfully!', 'Success');
    //     this.getStudents();
    //   })
    //   .catch((err) => {
    //     this.toastr.error(err.error.message, 'Error');
    //   });
  }

  onCheckboxChange(event: Event, row: any) {
    console.log('Event and row', event, row);
  }
}
