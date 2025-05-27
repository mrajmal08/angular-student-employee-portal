import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface BreadCrumbData {
  studentId?: number | null;
  caseId?: number | null;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private breadCrumbDataSubject = new BehaviorSubject<BreadCrumbData>({
    studentId: null,
    caseId: null,
  });
  breadCrumbData$ = this.breadCrumbDataSubject.asObservable();
  constructor() {}

  updateBreadCrumbData(data: BreadCrumbData) {
    const currentData = this.breadCrumbDataSubject.value;
    this.breadCrumbDataSubject.next({
      ...currentData,
      ...data,
    });
  }
}
