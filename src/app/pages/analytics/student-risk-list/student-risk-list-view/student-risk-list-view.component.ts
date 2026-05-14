import { ChangeDetectionStrategy, Component } from '@angular/core';

interface RiskFilter {
  label: string;
  value: string;
}

interface RiskSummaryCard {
  label: string;
  value: number;
  tone: 'open' | 'overdue' | 'interrupted' | 'escalated';
}

interface OperationalRiskRow {
  studentId: string;
  programme: string;
  cohort: string;
  status: string;
  attendance: string;
  primaryRisk: string;
  lastAction: string;
  owner: string;
  queueStatus: string;
}

@Component({
  selector: 'app-student-risk-list-view',
  templateUrl: './student-risk-list-view.component.html',
  styleUrls: ['./student-risk-list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentRiskListViewComponent {
  readonly primaryFilters: RiskFilter[] = [
    { label: 'Academic Year', value: '2025/26' },
    { label: 'Mode', value: 'All' },
    { label: 'Level', value: 'All' },
    { label: 'Faculty', value: 'All' },
    { label: 'Partner', value: 'All' },
    { label: 'Characteristic', value: 'All' },
  ];

  readonly summaryCards: RiskSummaryCard[] = [
    { label: 'Open cases', value: 120, tone: 'open' },
    { label: 'Overdue', value: 37, tone: 'overdue' },
    { label: 'Interrupted', value: 28, tone: 'interrupted' },
    { label: 'Escalated', value: 9, tone: 'escalated' },
  ];

  readonly secondaryFilters: RiskFilter[] = [
    { label: 'Risk reason', value: 'Attendance / Assessment / Registration' },
    { label: 'Owner', value: 'All' },
    { label: 'Export', value: 'Enabled for authorised users' },
  ];

  readonly operationalRiskRows: OperationalRiskRow[] = [
    {
      studentId: 'ST24018',
      programme: 'BSc Business',
      cohort: '2025/26',
      status: 'Active',
      attendance: '61%',
      primaryRisk: 'Attendance < 70%',
      lastAction: '01 Feb 2026',
      owner: 'J. Khan',
      queueStatus: 'Open',
    },
    {
      studentId: 'ST25107',
      programme: 'BA Hospitality',
      cohort: '2025/26',
      status: 'Interrupted',
      attendance: '54%',
      primaryRisk: 'Repeated non-attendance',
      lastAction: '30 Jan 2026',
      owner: 'S. Patel',
      queueStatus: 'Escalated',
    },
    {
      studentId: 'ST23991',
      programme: 'BSc Computing',
      cohort: '2024/25',
      status: 'Active',
      attendance: '68%',
      primaryRisk: '3 missed submissions',
      lastAction: '31 Jan 2026',
      owner: 'A. Lewis',
      queueStatus: 'Open',
    },
    {
      studentId: 'ST24653',
      programme: 'BSc Engineering',
      cohort: '2025/26',
      status: 'At risk',
      attendance: '72%',
      primaryRisk: 'Registration not completed',
      lastAction: '02 Feb 2026',
      owner: 'R. Shah',
      queueStatus: 'Pending',
    },
    {
      studentId: 'ST23344',
      programme: 'FdA Business',
      cohort: '2024/25',
      status: 'Active',
      attendance: '65%',
      primaryRisk: 'Assessment fail + low engagement',
      lastAction: '29 Jan 2026',
      owner: 'J. Khan',
      queueStatus: 'Open',
    },
    {
      studentId: 'ST23817',
      programme: 'BSc Nursing',
      cohort: '2024/25',
      status: 'Active',
      attendance: '74%',
      primaryRisk: 'Safeguarding support review',
      lastAction: '28 Jan 2026',
      owner: 'D. Green',
      queueStatus: 'Closed',
    },
  ];
}
