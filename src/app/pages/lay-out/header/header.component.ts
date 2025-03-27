import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from 'shared/services/api-client.service';
import { ConfirmDialogComponent } from 'shared/dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private apiClient: ApiClientService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  userName = this.apiClient.loginInfo?.result.name; // Replace with actual authentication logic

  logout() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container',
      position: { top: '50%', left: '50%' },
      data: { message: 'Are you sure you want to logout?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiClient.logout('logout').subscribe((resp) => {
          this.router.navigate(['/auth/login']).then(() => {
            window.history.pushState(null, '', window.location.href);
          });
        });
      } else {
        console.log('Cancelled');
      }
    });
  }
}
