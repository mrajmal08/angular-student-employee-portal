import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  @Input() isCaseRoute = false;

  breadcrumbs: { label: string; url: string }[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.generateBreadcrumbs();
      });

    this.generateBreadcrumbs();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isCaseRoute']) {
      console.log('Route changed, isCaseRoute:', this.isCaseRoute);
    }
  }

  generateBreadcrumbs(): void {
    this.breadcrumbs = [];
    let url = '';
    let currentRoute = this.route.root;

    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
      if (currentRoute.snapshot.url.length) {
        const pathSegment = currentRoute.snapshot.url
          .map((segment) => segment.path)
          .join('/');
        url += `/${pathSegment}`;
        this.breadcrumbs.push({ label: pathSegment, url: url });
      }
    }
  }

  formatBreadcrumb(label: string): string {
    return label
      .split('/')
      .map((word) => this.toTitleCase(word))
      .join(' <span style="padding: 0 8px;">/</span> ');
  }

  toTitleCase(str: string): string {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
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
}
