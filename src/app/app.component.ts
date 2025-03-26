import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'maven-mind';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const restrictedRoutes = ['/auth/login', '/dashboard']; // Restrict only these
        if (restrictedRoutes.includes(this.router.url)) {
          setTimeout(() => {
            window.history.pushState(null, '', window.location.href);
          }, 0);
        }
      }
    });

    window.onpopstate = () => {
      const restrictedRoutes = ['/auth/login', '/dashboard'];
      if (restrictedRoutes.includes(this.router.url)) {
        window.history.pushState(null, '', window.location.href);
      }
    };
  }
}
