import { Component } from '@angular/core';

@Component({
  selector: 'app-split-indicators-view',
  templateUrl: './split-indicators-view.component.html',
  styleUrls: ['./split-indicators-view.component.scss'],
})
export class SplitIndicatorsViewComponent {
  readonly filters = [
    { label: 'Academic Year', value: '2025/26' },
    { label: 'Mode', value: 'All' },
    { label: 'Level', value: 'All' },
    { label: 'Faculty', value: 'All' },
    { label: 'Partner', value: 'All' },
    { label: 'Characteristic', value: 'All' },
  ];

  readonly studentGroups = [
    { label: 'No known disability', value: 2.1 },
    { label: 'White students', value: 1.1 },
    { label: 'Mature 21+', value: 2.2 },
    { label: 'Disabled students', value: 4.1 },
    { label: 'Black students', value: 6.3 },
  ];

  readonly gapAxisTicks = [0, 2, 4, 6, 8];
  readonly gapAxisMax = 8;

  readonly comparisonRows = [
    {
      group: 'Asian students',
      denominator: 164,
      numerator: 141,
      rate: '86.0%',
      provider: '84.6%',
      gap: '+1.4 pts',
      note: 'Stable',
    },
    {
      group: 'Black students',
      denominator: 92,
      numerator: 72,
      rate: '78.4%',
      provider: '84.6%',
      gap: '-6.2 pts',
      note: 'Caution',
    },
    {
      group: 'Mixed ethnicity',
      denominator: 44,
      numerator: 37,
      rate: '84.1%',
      provider: '84.6%',
      gap: '-0.5 pts',
      note: 'Small N',
    },
    {
      group: 'White students',
      denominator: 318,
      numerator: 273,
      rate: '85.8%',
      provider: '84.6%',
      gap: '+1.2 pts',
      note: 'Stable',
    },
  ];

  readonly displayLogic = [
    'Suppression applies below denominator 20; caution applies below denominator 50.',
    'Users can switch the measure between continuation, completion and progression.',
    'Gap is always shown against provider aggregate for the same filtered cohort.',
    'Small groups can still appear in table view but receive a caution flag.',
  ];

  getGapBarWidth(value: number): string {
    return `${(value / this.gapAxisMax) * 100}%`;
  }
}
