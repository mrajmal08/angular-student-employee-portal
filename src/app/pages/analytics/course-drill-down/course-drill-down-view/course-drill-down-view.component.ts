import { Component } from '@angular/core';

@Component({
  selector: 'app-course-drill-down-view',
  templateUrl: './course-drill-down-view.component.html',
  styleUrls: ['./course-drill-down-view.component.scss'],
})
export class CourseDrillDownViewComponent {
  readonly filters = [
    { label: 'Academic Year', value: '2025/26' },
    { label: 'Mode', value: 'All' },
    { label: 'Level', value: 'All' },
    { label: 'Faculty', value: 'All' },
    { label: 'Partner', value: 'All' },
    { label: 'Characteristic', value: 'All' },
  ];

  readonly programmeBadges = [
    { label: 'Mode', value: 'Full-time' },
    { label: 'Level', value: 'First degree' },
    { label: 'Partner', value: 'Direct delivery' },
    { label: 'Students in scope', value: '184' },
    { label: 'Continuation', value: '81.2%' },
    { label: 'Completion', value: '76.9%' },
    { label: 'Progression', value: '68.1%' },
  ];

  readonly trendYears = ['2021/22', '2022/23', '2023/24', '2024/25', '2025/26'];
  readonly trendTicks = [40, 60, 80];
  readonly trendSeries = [
    {
      label: 'Continuation',
      color: '#3c76f3',
      values: [86, 84, 83, 82, 80],
    },
    {
      label: 'Completion',
      color: '#2fb36e',
      values: [79, 78, 77, 76, 75],
    },
    {
      label: 'Progression',
      color: '#e48926',
      values: [71, 70, 69, 68, 68],
    },
  ];

  readonly trendChartWidth = 420;
  readonly trendChartHeight = 220;
  readonly trendChartPadding = {
    top: 20,
    right: 18,
    bottom: 42,
    left: 44,
  };

  readonly riskComposition = [
    { label: 'attendance', value: 43 },
    { label: 'assessment', value: 29 },
    { label: 'engagement', value: 18 },
    { label: 'personal withdrawal', value: 9 },
    { label: 'unknown', value: 6 },
  ];

  readonly riskChartWidth = 420;
  readonly riskChartHeight = 220;
  readonly riskChartPadding = {
    top: 16,
    right: 18,
    bottom: 62,
    left: 44,
  };
  readonly riskTicks = [0, 10, 20, 30, 40];

  readonly relatedStudents = [
    {
      studentId: 'ST24018',
      stage: 'Year 1',
      attendance: '61%',
      primaryIssue: 'Missed 5 classes + no tutorial',
      status: 'Open',
    },
    {
      studentId: 'ST24122',
      stage: 'Year 2',
      attendance: '67%',
      primaryIssue: '2 failed modules',
      status: 'Open',
    },
  ];

  readonly linkedActions = [
    {
      action: 'Business Yr1 attendance recovery plan',
      owner: 'Dean Business',
      due: '14 Feb 2026',
      status: 'Active',
    },
    {
      action: 'Resolve 19 unresolved board outcomes',
      owner: 'Registry',
      due: '10 Feb 2026',
      status: 'Active',
    },
  ];

  getTrendX(index: number): number {
    const usableWidth =
      this.trendChartWidth -
      this.trendChartPadding.left -
      this.trendChartPadding.right;

    if (this.trendYears.length === 1) {
      return this.trendChartPadding.left + usableWidth / 2;
    }

    return (
      this.trendChartPadding.left +
      (usableWidth / (this.trendYears.length - 1)) * index
    );
  }

  getTrendY(value: number): number {
    const chartFloor = this.trendChartHeight - this.trendChartPadding.bottom;
    const usableHeight =
      chartFloor - this.trendChartPadding.top;
    const minValue = 40;
    const maxValue = 90;

    return (
      chartFloor - ((value - minValue) / (maxValue - minValue)) * usableHeight
    );
  }

  getTrendPoints(values: number[]): string {
    return values
      .map((value, index) => `${this.getTrendX(index)},${this.getTrendY(value)}`)
      .join(' ');
  }

  getRiskTickY(tick: number): number {
    const chartFloor = this.riskChartHeight - this.riskChartPadding.bottom;
    const usableHeight = chartFloor - this.riskChartPadding.top;
    const maxValue = 45;

    return chartFloor - (tick / maxValue) * usableHeight;
  }

  getRiskBarWidth(): number {
    const usableWidth =
      this.riskChartWidth -
      this.riskChartPadding.left -
      this.riskChartPadding.right;

    return (usableWidth / this.riskComposition.length) * 0.72;
  }

  getRiskBarX(index: number): number {
    const usableWidth =
      this.riskChartWidth -
      this.riskChartPadding.left -
      this.riskChartPadding.right;
    const slotWidth = usableWidth / this.riskComposition.length;
    const barWidth = this.getRiskBarWidth();

    return this.riskChartPadding.left + slotWidth * index + (slotWidth - barWidth) / 2;
  }

  getRiskBarY(value: number): number {
    return this.getRiskTickY(value);
  }

  getRiskBarHeight(value: number): number {
    const chartFloor = this.riskChartHeight - this.riskChartPadding.bottom;

    return chartFloor - this.getRiskBarY(value);
  }
}
