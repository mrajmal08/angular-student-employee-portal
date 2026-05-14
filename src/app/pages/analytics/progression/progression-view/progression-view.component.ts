import { Component } from '@angular/core';

@Component({
  selector: 'app-progression-view',
  templateUrl: './progression-view.component.html',
  styleUrls: ['./progression-view.component.scss'],
})
export class ProgressionViewComponent {
  readonly reportDate = '31 Jan 2026';
  readonly reportRules = 'Rules v2.4';

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
      label: 'Positive outcome',
      value: '72.4%',
      detail: '379 positive / 523 known',
      tone: 'positive',
    },
    {
      label: 'Threshold',
      value: '72.0%',
      detail: 'Internal management benchmark',
      tone: 'threshold',
    },
    {
      label: 'Response rate',
      value: '61.8%',
      detail: '481 responded / 778 eligible',
      tone: 'response-rate',
    },
    {
      label: 'Contactability',
      value: '78.7%',
      detail: '612 contactable / 778 eligible',
      tone: 'contactability',
    },
  ];

  readonly funnelStages = [
    { label: 'Eligible', value: 670 },
    { label: 'Contactable', value: 612 },
    { label: 'Responded', value: 481 },
    { label: 'Positive', value: 379 },
  ];

  readonly trendYears = ['2021/22', '2022/23', '2023/24', '2024/25', '2025/26'];
  readonly trendTicks = [40, 60, 80, 100];
  readonly trendMin = 40;
  readonly trendMax = 100;
  readonly trendChartWidth = 430;
  readonly trendChartHeight = 190;
  readonly trendChartPadding = { top: 18, right: 18, bottom: 34, left: 34 };
  readonly trendSeries = [
    {
      label: 'Progression',
      colorClass: 'progression',
      values: [73.2, 72.8, 72.0, 71.2, 72.4],
    },
    {
      label: 'Response rate',
      colorClass: 'response',
      values: [69.6, 69.0, 66.2, 64.8, 61.8],
    },
  ];

  readonly outcomeBreakdown = [
    { label: 'Professional employment', value: 262 },
    { label: 'Further study', value: 86 },
    { label: 'Other positive', value: 31 },
    { label: 'Caring', value: 38 },
    { label: 'Unknown', value: 52 },
    { label: 'Not known', value: 201 },
  ];
  readonly breakdownTicks = [0, 100, 200, 300];
  readonly breakdownChartWidth = 320;
  readonly breakdownChartHeight = 180;
  readonly breakdownChartPadding = { top: 16, right: 12, bottom: 58, left: 34 };
  readonly breakdownMaxValue = 300;

  readonly detailRows = [
    {
      outcomeCategory: 'Professional employment',
      count: 262,
      share: '39.1%',
      cohort: '2025 qualifiers',
    },
    {
      outcomeCategory: 'Further study',
      count: 86,
      share: '12.8%',
      cohort: '2025 qualifiers',
    },
    {
      outcomeCategory: 'Other positive',
      count: 31,
      share: '4.6%',
      cohort: '2025 qualifiers',
    },
  ];

  getFunnelWidth(value: number): string {
    const maxValue = this.funnelStages[0]?.value ?? 1;
    const width = 32 + (value / maxValue) * 50;

    return `${width}%`;
  }

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
    const usableHeight =
      this.trendChartHeight -
      this.trendChartPadding.top -
      this.trendChartPadding.bottom;

    return (
      this.trendChartPadding.top +
      ((this.trendMax - value) / (this.trendMax - this.trendMin)) * usableHeight
    );
  }

  getTrendPoints(values: number[]): string {
    return values
      .map((value, index) => `${this.getTrendX(index)},${this.getTrendY(value)}`)
      .join(' ');
  }

  getBreakdownBarWidth(): number {
    const usableWidth =
      this.breakdownChartWidth -
      this.breakdownChartPadding.left -
      this.breakdownChartPadding.right;

    return usableWidth / this.outcomeBreakdown.length - 12;
  }

  getBreakdownBarX(index: number): number {
    const usableWidth =
      this.breakdownChartWidth -
      this.breakdownChartPadding.left -
      this.breakdownChartPadding.right;
    const step = usableWidth / this.outcomeBreakdown.length;

    return this.breakdownChartPadding.left + index * step + 6;
  }

  getBreakdownBarY(value: number): number {
    const usableHeight =
      this.breakdownChartHeight -
      this.breakdownChartPadding.top -
      this.breakdownChartPadding.bottom;

    return (
      this.breakdownChartHeight -
      this.breakdownChartPadding.bottom -
      (value / this.breakdownMaxValue) * usableHeight
    );
  }

  getBreakdownBarHeight(value: number): number {
    const usableHeight =
      this.breakdownChartHeight -
      this.breakdownChartPadding.top -
      this.breakdownChartPadding.bottom;

    return (value / this.breakdownMaxValue) * usableHeight;
  }

  getBreakdownTickY(value: number): number {
    const usableHeight =
      this.breakdownChartHeight -
      this.breakdownChartPadding.top -
      this.breakdownChartPadding.bottom;

    return (
      this.breakdownChartHeight -
      this.breakdownChartPadding.bottom -
      (value / this.breakdownMaxValue) * usableHeight
    );
  }
}
