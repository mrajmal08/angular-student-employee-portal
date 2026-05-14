import { Component } from '@angular/core';

@Component({
  selector: 'app-continuation-view',
  templateUrl: './continuation-view.component.html',
  styleUrls: ['./continuation-view.component.scss'],
})
export class ContinuationViewComponent {
  readonly filters = [
    { label: 'Academic Year', value: '2025/26' },
    { label: 'Mode', value: 'All' },
    { label: 'Level', value: 'All' },
    { label: 'Faculty', value: 'All' },
    { label: 'Partner', value: 'All' },
    { label: 'Characteristic', value: 'All' },
  ];

  readonly metricCards = [
    {
      label: 'Rate',
      value: '84.6%',
      detail: 'Denominator 720',
      tone: 'rate',
    },
    {
      label: 'Threshold',
      value: '87.0%',
      detail: 'By mode + level',
      tone: 'threshold',
    },
    {
      label: 'Gap',
      value: '-2.4 pts',
      detail: 'Worse than prior year by 1.5 pts',
      tone: 'gap',
    },
    {
      label: 'At-risk list',
      value: '120',
      detail: '92 active + 28 interrupted',
      tone: 'risk',
    },
  ];

  readonly trendYears = ['2021/22', '2022/23', '2023/24', '2024/25', '2025/26'];
  readonly trendValues = [90.4, 89.6, 88.1, 86.2, 84.6];
  readonly trendTicks = [40, 60, 80, 100];
  readonly chartWidth = 470;
  readonly chartHeight = 205;
  readonly chartPadding = { top: 18, right: 28, bottom: 34, left: 34 };

  readonly continuationByCourse = [
    { label: 'Engineering', value: 87 },
    { label: 'Hospitality', value: 79 },
    { label: 'Health & Social Care', value: 88 },
    { label: 'Computing', value: 83 },
    { label: 'Business Management', value: 80 },
  ];
  readonly courseAxisTicks = [70, 75, 80, 85, 90, 95];
  readonly courseAxisMin = 70;
  readonly courseAxisMax = 95;

  readonly riskDrivers = [
    { label: '<50%', count: 18 },
    { label: '50-59%', count: 42 },
    { label: '60-69%', count: 82 },
    { label: '70-79%', count: 96 },
    { label: '80%+', count: 401 },
  ];

  readonly atRiskStudents = [
    {
      studentId: 'ST24018',
      course: 'BSc Business',
      cohort: '2025/26',
      status: 'Active',
      attendance: '61%',
      reason: 'Attendance < 70%',
      owner: 'J. Khan',
    },
    {
      studentId: 'ST25107',
      course: 'BA Hospitality',
      cohort: '2025/26',
      status: 'Interrupted',
      attendance: '54%',
      reason: 'Repeated non-attendance',
      owner: 'S. Patel',
    },
    {
      studentId: 'ST23991',
      course: 'BSc Computing',
      cohort: '2024/25',
      status: 'Active',
      attendance: '68%',
      reason: '3 missed submissions',
      owner: 'A. Lewis',
    },
  ];

  getTrendX(index: number): number {
    const availableWidth =
      this.chartWidth - this.chartPadding.left - this.chartPadding.right;

    if (this.trendYears.length === 1) {
      return this.chartPadding.left + availableWidth / 2;
    }

    return (
      this.chartPadding.left +
      (availableWidth / (this.trendYears.length - 1)) * index
    );
  }

  getTrendY(value: number): number {
    const min = 40;
    const max = 100;
    const availableHeight =
      this.chartHeight - this.chartPadding.top - this.chartPadding.bottom;

    return (
      this.chartPadding.top +
      ((max - value) / (max - min)) * availableHeight
    );
  }

  getTrendPoints(): string {
    return this.trendValues
      .map((value, index) => `${this.getTrendX(index)},${this.getTrendY(value)}`)
      .join(' ');
  }

  getCourseBarWidth(value: number): string {
    const range = this.courseAxisMax - this.courseAxisMin;
    const scaledValue = ((value - this.courseAxisMin) / range) * 100;

    return `${Math.max(scaledValue, 0)}%`;
  }

  getRiskBarHeight(count: number): string {
    const maxCount = Math.max(...this.riskDrivers.map((item) => item.count));

    return `${(count / maxCount) * 100}%`;
  }
}
