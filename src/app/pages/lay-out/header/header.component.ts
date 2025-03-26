import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from 'shared/services/api-client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private apiClient: ApiClientService, private router: Router) {}
  userName = 'Guest'; // Replace with actual authentication logic

  logout() {
    this.apiClient.logout('logout').subscribe((resp) => {
      // this.router.navigateByUrl('/auth/login', { replaceUrl: true });
      this.router.navigate(['/auth/login']).then(() => {
        window.history.pushState(null, '', window.location.href);
      });
    });
  }
}
