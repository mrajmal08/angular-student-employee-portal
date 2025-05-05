import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit, OnChanges {
  isCaseRoute: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkRoute(this.router.url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.urlAfterRedirects);
      }
    });
  }

  private checkRoute(url: string): void {
    this.isCaseRoute = url.includes('/case');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.router.url.includes('/case')) {
      console.log('Inside case');
    } else {
      console.log('Outside case');
    }
  }
}
