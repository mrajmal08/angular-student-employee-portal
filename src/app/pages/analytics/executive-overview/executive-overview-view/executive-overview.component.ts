import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-executive-overview',
  templateUrl: './executive-overview.component.html',
  styleUrls: ['./executive-overview.component.scss'],
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
export class ExecutiveOverviewComponent implements OnInit {
  readonly filters = [
    { label: 'Academic Year', value: '2025/26' },
    { label: 'Mode', value: 'All' },
    { label: 'Level', value: 'All' },
    { label: 'Faculty', value: 'All' },
    { label: 'Partner', value: 'All' },
    { label: 'Characteristic', value: 'All' },
  ];

  readonly summaryCards = [
    {
      label: 'Continuation',
      value: '84.6%',
      threshold: '87.0%',
      detail: '-2.4 pts vs threshold',
      tone: 'continuation',
    },
    {
      label: 'Completion',
      value: '78.8%',
      threshold: '80.0%',
      detail: '-1.2 pts vs threshold',
      tone: 'completion',
    },
    {
      label: 'Progression',
      value: '72.4%',
      threshold: '72.0%',
      detail: '+0.4 pts vs threshold',
      tone: 'progression',
    },
    {
      label: 'Data quality',
      value: '89/100',
      threshold: '3 open high issues',
      detail: 'Last refresh succeeded',
      tone: 'quality',
    },
  ];

  readonly trendYears = ['2021/22', '2022/23', '2023/24', '2024/25', '2025/26'];
  readonly trendTicks = [40, 60, 80, 100];
  readonly trendSeries = [
    {
      name: 'Continuation',
      color: '#2f72f4',
      values: [90.2, 89.4, 87.8, 86.1, 84.6],
    },
    {
      name: 'Completion',
      color: '#f08a1f',
      values: [74.3, 73.8, 73.0, 72.4, 72.0],
    },
    {
      name: 'Progression',
      color: '#32b768',
      values: [84.1, 83.2, 81.7, 80.0, 78.6],
    },
  ];

  readonly cohortSummary = [
    { cohort: '2021/22', denominator: 780, numerator: 703, rate: '90.2%', threshold: '87.0%', gap: '3.2 pts' },
    { cohort: '2022/23', denominator: 765, numerator: 683, rate: '89.4%', threshold: '87.0%', gap: '2.4 pts' },
    { cohort: '2023/24', denominator: 750, numerator: 658, rate: '87.8%', threshold: '87.0%', gap: '0.8 pts' },
    { cohort: '2024/25', denominator: 735, numerator: 632, rate: '86.1%', threshold: '87.0%', gap: '-0.9 pts' },
    { cohort: '2025/26', denominator: 720, numerator: 609, rate: '84.6%', threshold: '87.0%', gap: '-2.4 pts' },
  ];

  readonly riskDrivers = [
    '120 students currently flagged by attendance or engagement rules',
    'Business and Hospitality together account for 43% of current continuation risk',
    '19 completion cases are awaiting board resolution',
  ];

  readonly studentGroupRiskSnapshot = [
    { label: 'No known disability', value: 14 },
    { label: 'Asian students', value: 9 },
    { label: 'Mature 21+', value: 15 },
    { label: 'Disabled students', value: 24 },
    { label: 'Black students', value: 37 },
    { label: 'Level 6 Business', value: 52 },
  ];

  readonly openActions = [
    { ref: 'ACT-1004', owner: 'Dean Business', due: '14 Feb 2026', status: 'Active' },
    { ref: 'ACT-1009', owner: 'Registry', due: '10 Feb 2026', status: 'Active' },
    { ref: 'ACT-1013', owner: 'Careers', due: '28 Feb 2026', status: 'Open' },
    { ref: 'ACT-1019', owner: 'Registry Systems', due: '07 Feb 2026', status: 'Escalated' },
  ];

  readonly chartWidth = 380;
  readonly chartHeight = 190;
  readonly chartPadding = { top: 18, right: 18, bottom: 30, left: 34 };
  readonly chartMin = 40;
  readonly chartMax = 100;
  readonly snapshotMaxValue = 52;

  ngOnInit(): void {}

  getTrendPoints(values: number[]): string {
    return values
      .map((value, index) => `${this.getX(index)},${this.getY(value)}`)
      .join(' ');
  }

  getX(index: number): number {
    const usableWidth =
      this.chartWidth - this.chartPadding.left - this.chartPadding.right;
    const step = usableWidth / (this.trendYears.length - 1);

    return this.chartPadding.left + index * step;
  }

  getY(value: number): number {
    const usableHeight =
      this.chartHeight - this.chartPadding.top - this.chartPadding.bottom;
    const range = this.chartMax - this.chartMin;

    return (
      this.chartPadding.top +
      ((this.chartMax - value) / range) * usableHeight
    );
  }

  getSnapshotWidth(value: number): string {
    return `${(value / this.snapshotMaxValue) * 100}%`;
  }
}
