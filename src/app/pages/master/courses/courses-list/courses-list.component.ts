import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ApiClientService } from 'shared/services/api-client.service';
import { getUKFormatedDate } from 'shared/helpers/common-helper';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from 'shared/dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  animations: [
    trigger('collapseAnimation', [
      state(
        'collapsed',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
          margin: '0',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          opacity: '1',
          margin: '*',
        })
      ),
      transition('collapsed <=> expanded', [animate('300ms ease-out')]),
    ]),
  ],
})
export class CoursesListComponent implements OnInit {
  page = {
    perPage: 25,
    page: 1,
    total: 100,
  };
  perPageOptions = [10, 25, 50, 100];

  isCollapsed = true;
  filterForm!: FormGroup;

  columns = [
    { name: 'Course ID', prop: 'id' },
    { name: 'Course Name', prop: 'name' },
    { name: 'Created At', prop: 'created_at' },
    { name: 'Created By', prop: 'created_by' },
    { name: 'Updated By', prop: 'updated_by' },
  ];

  rows = [
    {
      id: 1,
      name: 'John Doe',
      company: 'ABC Ltd.',
      mobile: '+44 7890 123456',
      registerationNumber: 'VAT123456789',
      UkAddress: '123 Baker Street, London, UK',
      NonUkAddress: '456 Elm Street, New York, USA',
      email: 'john.doe@example.com',
      complianceCheck: 'Passed',
      restrictedCountries: 'None',
      createdBy: 'Admin 2024-01-10',
      updatedBy: 'Admin 2024-01-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      company: 'XYZ Corp.',
      mobile: '+44 7523 987654',
      registerationNumber: 'VAT987654321',
      UkAddress: '78 High Street, Manchester, UK',
      NonUkAddress: '789 Pine Avenue, Toronto, Canada',
      email: 'jane.smith@example.com',
      complianceCheck: 'Pending',
      restrictedCountries: 'Iran, North Korea',
      createdBy: 'Admin 2024-01-12',
      updatedBy: 'Admin 2024-01-18',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      company: 'Global Solutions',
      mobile: '+44 7012 345678',
      registerationNumber: 'VAT654321789',
      UkAddress: '56 King’s Road, Edinburgh, UK',
      NonUkAddress: '123 Ocean Drive, Sydney, Australia',
      email: 'michael.johnson@example.com',
      complianceCheck: 'Failed',
      restrictedCountries: 'Russia, Syria',
      createdBy: 'Admin 2024-01-14',
      updatedBy: 'Admin 2024-01-20',
    },
    {
      id: 4,
      name: 'Emma Brown',
      company: 'Secure Trade Ltd.',
      mobile: '+44 7412 567890',
      registerationNumber: 'VAT111222333',
      UkAddress: '89 Tower Bridge Road, London, UK',
      NonUkAddress: '555 Bay Street, Dubai, UAE',
      email: 'emma.brown@example.com',
      complianceCheck: 'Passed',
      restrictedCountries: 'None',
      createdBy: 'Admin 2024-01-16',
      updatedBy: 'Admin 2024-01-22',
    },
  ];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiClient: ApiClientService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.filterForm.controls['name'].valueChanges.subscribe((value) => {
      this.getCourses(value);
    });
    this.getCourses();
  }

  getCourses(search: string = '') {
    this.apiClient
      .get('courses', {
        pagination: this.page.page,
        per_page: this.page.perPage,
        name: search ? search : '',
      })
      .subscribe((resp: any) => {
        this.rows = resp.result.data.map(
          (row: { created_at: string; updated_at: string }) => ({
            ...row,
            created_at: getUKFormatedDate(row.created_at),
          })
        );
      });
  }

  buildForm() {
    this.filterForm = this.fb.group({
      name: [''],
      // date_of_birth: [''],
      // created_at: [''],
      // updated_at: [''],
      // created_by: [''],
      // updated_by: [''],
      // agent_id: [''],
      // email: [''],
      // cell_phone_no: [''],
      // address: [''],
      // ssn3: ['', [Validators.minLength(3), Validators.maxLength(3)]],
      // ssn2: ['', [Validators.minLength(2), Validators.maxLength(2)]],
      // ssn4: ['', [Validators.minLength(4), Validators.maxLength(4)]],
    });
  }

  setPage(pageInfo: any) {
    this.page.page = pageInfo.offset + 1;
    this.getCourses();
  }

  updatePerPage(event: any) {
    this.page.perPage = event.target.value;
    this.getCourses();
  }

  getTotalPages(): number {
    return Math.ceil(this.page.total / this.page.perPage);
  }

  onSelectFilters(): void {}

  resetForm() {}

  onResetFilters() {}

  onAgentNameClick(agentId: any) {
    this.router.navigateByUrl(`/courses/${agentId}`);
  }

  addNewAgent() {
    this.router.navigateByUrl(`/courses/add`);
  }

  editAgent(row: any): void {
    console.log('Edit Agent:', row);
    this.router.navigateByUrl(`/courses/edit/${row.id}`, { state: { row } });
    // Implement edit logic (e.g., open a modal, navigate to edit page)
  }

  deleteAgent(row: any): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.deleteCourse(row.id);
    }
  }

  showAlert(type: string, message: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
      position: { top: '50%', left: '50%' },
      data: { message: message, type: type },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  deleteCourse(id: number) {
    this.apiClient
      .get(`course/delete/${id}`)
      .toPromise()
      .then((resp) => {
        this.toastr.success('Course Deleted successfully!', 'Success');
        this.getCourses();
      })
      .catch((err) => {
        this.showAlert('error', err.error.message);
      });
  }
}
