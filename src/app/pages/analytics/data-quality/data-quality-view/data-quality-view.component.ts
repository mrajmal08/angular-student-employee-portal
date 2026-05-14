import { Component } from '@angular/core';

interface DataQualityFilter {
  label: string;
  value: string;
}

interface DataQualitySummaryCard {
  label: string;
  value: string;
  detail: string;
  tone: 'completeness' | 'accuracy' | 'timeliness' | 'issues';
}

interface FieldCompletenessMetric {
  label: string;
  value: number;
}

interface SourceRefreshRow {
  sourceFeed: string;
  lastRun: string;
  status: string;
  note: string;
  tone?: 'success' | 'warning';
}

interface IssueLogRow {
  issueId: string;
  source: string;
  issueType: string;
  severity: 'High' | 'Medium' | 'Low';
  status: 'Open' | 'In progress' | 'Resolved';
}

@Component({
  selector: 'app-data-quality-view',
  templateUrl: './data-quality-view.component.html',
  styleUrls: ['./data-quality-view.component.scss'],
})
export class DataQualityViewComponent {
  readonly filters: DataQualityFilter[] = [
    { label: 'Academic Year', value: '2025/26' },
    { label: 'Mode', value: 'All' },
    { label: 'Level', value: 'All' },
    { label: 'Faculty', value: 'All' },
    { label: 'Partner', value: 'All' },
    { label: 'Characteristic', value: 'All' },
  ];

  readonly summaryCards: DataQualitySummaryCard[] = [
    {
      label: 'Completeness',
      value: '89%',
      detail: 'Student Records above threshold',
      tone: 'completeness',
    },
    {
      label: 'Accuracy',
      value: '93%',
      detail: 'Validation checks passed',
      tone: 'accuracy',
    },
    {
      label: 'Timeliness',
      value: 'On time',
      detail: 'Refresh SLA 98.5% achieved',
      tone: 'timeliness',
    },
    {
      label: 'High issues',
      value: '3 open',
      detail: 'Priority items pending resolution',
      tone: 'issues',
    },
  ];

  readonly fieldCompleteness: FieldCompletenessMetric[] = [
    { label: 'Withdraw reason', value: 80 },
    { label: 'Board status', value: 92 },
    { label: 'Award class', value: 90 },
    { label: 'Partner code', value: 88 },
    { label: 'GO response', value: 70 },
  ];

  readonly chartTicks: number[] = [80, 40, 0];

  readonly sourceRefreshStatus: SourceRefreshRow[] = [
    {
      sourceFeed: 'Student Records',
      lastRun: '06:05',
      status: 'Success',
      note: '0 blockers',
      tone: 'success',
    },
    {
      sourceFeed: 'Attendance',
      lastRun: '06:07',
      status: 'Success',
      note: '2 warnings',
      tone: 'success',
    },
    {
      sourceFeed: 'Awards',
      lastRun: '06:11',
      status: 'Late',
      note: '1 warning',
      tone: 'warning',
    },
  ];

  readonly issueLog: IssueLogRow[] = [
    {
      issueId: 'DQ-014',
      source: 'Student Records',
      issueType: 'Missing withdrawal reason',
      severity: 'High',
      status: 'Open',
    },
    {
      issueId: 'DQ-021',
      source: 'Awards',
      issueType: 'Late award conferral feed',
      severity: 'Medium',
      status: 'In progress',
    },
  ];

  getBarHeight(value: number): string {
    return `${Math.max(0, Math.min(value, 100))}%`;
  }
}
