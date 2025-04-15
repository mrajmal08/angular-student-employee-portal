import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from 'shared/services/api-client.service';
import { ConfirmDialogComponent } from 'shared/dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { title } from 'process';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  open = false;
  searchForm: FormGroup;

  constructor(
    private apiClient: ApiClientService,
    private router: Router,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      patientName: [''],
      caseId: [''],
    });
  }

  toggleDropdown() {
    this.open = !this.open;
  }

  closeDropdown() {
    this.open = false;
  }

  onSearch() {
    console.log(this.searchForm.value);
    this.closeDropdown();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.search-container');
    if (!clickedInside) {
      this.closeDropdown();
    }
  }

  userName = this.apiClient.loginInfo?.result.name; // Replace with actual authentication logic

  logout() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
      position: { top: '50%', left: '50%' },
      data: {
        type: 'warning',
        title: 'Logout?',
        message: 'Are you sure you want to logout.',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiClient.logout('logout').subscribe((resp) => {
          this.router.navigate(['/auth/login']).then(() => {
            window.history.pushState(null, '', window.location.href);
          });
        });
      } else {
      }
    });
  }
}
