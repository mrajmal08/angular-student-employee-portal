import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-completion-view',
  templateUrl: './completion-view.component.html',
  styleUrls: ['./completion-view.component.scss'],
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
export class CompletionViewComponent implements OnInit {
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
      label: 'Rate',
      value: '78.8%',
      detail: 'Denominator 941',
      tone: 'rate',
    },
    {
      label: 'Threshold',
      value: '80.0%',
      detail: 'By mode + level',
      tone: 'threshold',
    },
    {
      label: 'Gap',
      value: '-1.2 pts',
      detail: 'Exit awards + withdrawals driving',
      tone: 'gap',
    },
    {
      label: 'Open cases',
      value: '19',
      detail: 'Board unresolved',
      tone: 'open-cases',
    },
  ];

  readonly pipelineItems = [
    { label: 'Completed intended', value: 618 },
    { label: 'Exit awards', value: 47 },
    { label: 'Still valid controls', value: 120 },
    { label: 'Withdrawals', value: 102 },
    { label: 'Interrupted', value: 31 },
    { label: 'Board unresolved', value: 19 },
  ];

  readonly trendYears = ['2021/22', '2022/23', '2023/24', '2024/25', '2025/26'];
  readonly trendValues = [84.2, 83.6, 82.4, 81.0, 79.8];
  readonly trendTicks = [40, 60, 80, 100];

  readonly withdrawalReasons = [
    { label: 'Personal', value: 23 },
    { label: 'Academic', value: 35 },
    { label: 'Finance', value: 20 },
    { label: 'Health', value: 17 },
    { label: 'Unknown', value: 12 },
  ];

  readonly detailRows = [
    {
      outcomeType: 'Completed intended',
      count: 618,
      share: '65.7%',
      primaryOwner: 'Academic',
    },
    {
      outcomeType: 'Exit',
      count: 47,
      share: '5.0%',
      primaryOwner: 'Academic',
    },
  ];

  readonly pipelineChartWidth = 360;
  readonly pipelineChartHeight = 170;
  readonly pipelineChartPadding = { top: 14, right: 12, bottom: 48, left: 38 };
  readonly pipelineMaxValue = 650;
  readonly pipelineTicks = [0, 200, 400, 600];

  readonly trendChartWidth = 410;
  readonly trendChartHeight = 170;
  readonly trendChartPadding = { top: 18, right: 22, bottom: 34, left: 34 };
  readonly trendMin = 40;
  readonly trendMax = 100;

  readonly withdrawalChartWidth = 300;
  readonly withdrawalChartHeight = 160;
  readonly withdrawalChartPadding = { top: 14, right: 12, bottom: 42, left: 30 };
  readonly withdrawalMaxValue = 36;
  readonly withdrawalTicks = [0, 10, 20, 30];

  ngOnInit(): void {}

  getPipelineBarWidth(): number {
    const usableWidth =
      this.pipelineChartWidth -
      this.pipelineChartPadding.left -
      this.pipelineChartPadding.right;

    return usableWidth / this.pipelineItems.length - 10;
  }

  getPipelineBarX(index: number): number {
    const usableWidth =
      this.pipelineChartWidth -
      this.pipelineChartPadding.left -
      this.pipelineChartPadding.right;
    const step = usableWidth / this.pipelineItems.length;

    return this.pipelineChartPadding.left + index * step + 5;
  }

  getPipelineBarY(value: number): number {
    const usableHeight =
      this.pipelineChartHeight -
      this.pipelineChartPadding.top -
      this.pipelineChartPadding.bottom;

    return (
      this.pipelineChartHeight -
      this.pipelineChartPadding.bottom -
      (value / this.pipelineMaxValue) * usableHeight
    );
  }

  getPipelineBarHeight(value: number): number {
    const usableHeight =
      this.pipelineChartHeight -
      this.pipelineChartPadding.top -
      this.pipelineChartPadding.bottom;

    return (value / this.pipelineMaxValue) * usableHeight;
  }

  getPipelineTickY(value: number): number {
    const usableHeight =
      this.pipelineChartHeight -
      this.pipelineChartPadding.top -
      this.pipelineChartPadding.bottom;

    return (
      this.pipelineChartHeight -
      this.pipelineChartPadding.bottom -
      (value / this.pipelineMaxValue) * usableHeight
    );
  }

  getTrendPoints(): string {
    return this.trendValues
      .map((value, index) => `${this.getTrendX(index)},${this.getTrendY(value)}`)
      .join(' ');
  }

  getTrendX(index: number): number {
    const usableWidth =
      this.trendChartWidth -
      this.trendChartPadding.left -
      this.trendChartPadding.right;
    const step = usableWidth / (this.trendYears.length - 1);

    return this.trendChartPadding.left + index * step;
  }

  getTrendY(value: number): number {
    const usableHeight =
      this.trendChartHeight -
      this.trendChartPadding.top -
      this.trendChartPadding.bottom;
    const range = this.trendMax - this.trendMin;

    return (
      this.trendChartPadding.top +
      ((this.trendMax - value) / range) * usableHeight
    );
  }

  getWithdrawalBarWidth(): number {
    const usableWidth =
      this.withdrawalChartWidth -
      this.withdrawalChartPadding.left -
      this.withdrawalChartPadding.right;

    return usableWidth / this.withdrawalReasons.length - 12;
  }

  getWithdrawalBarX(index: number): number {
    const usableWidth =
      this.withdrawalChartWidth -
      this.withdrawalChartPadding.left -
      this.withdrawalChartPadding.right;
    const step = usableWidth / this.withdrawalReasons.length;

    return this.withdrawalChartPadding.left + index * step + 6;
  }

  getWithdrawalBarY(value: number): number {
    const usableHeight =
      this.withdrawalChartHeight -
      this.withdrawalChartPadding.top -
      this.withdrawalChartPadding.bottom;

    return (
      this.withdrawalChartHeight -
      this.withdrawalChartPadding.bottom -
      (value / this.withdrawalMaxValue) * usableHeight
    );
  }

  getWithdrawalBarHeight(value: number): number {
    const usableHeight =
      this.withdrawalChartHeight -
      this.withdrawalChartPadding.top -
      this.withdrawalChartPadding.bottom;

    return (value / this.withdrawalMaxValue) * usableHeight;
  }

  getWithdrawalTickY(value: number): number {
    const usableHeight =
      this.withdrawalChartHeight -
      this.withdrawalChartPadding.top -
      this.withdrawalChartPadding.bottom;

    return (
      this.withdrawalChartHeight -
      this.withdrawalChartPadding.bottom -
      (value / this.withdrawalMaxValue) * usableHeight
    );
  }
}
