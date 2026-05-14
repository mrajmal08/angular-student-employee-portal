import { Component } from '@angular/core';

@Component({
  selector: 'app-interventions-view',
  templateUrl: './interventions-view.component.html',
  styleUrls: ['./interventions-view.component.scss'],
})
export class InterventionsViewComponent {
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
      label: 'Open',
      value: '18',
      detail: 'Requiring owner updates',
      tone: 'open',
    },
    {
      label: 'Active',
      value: '26',
      detail: 'Currently in progress',
      tone: 'active',
    },
    {
      label: 'Overdue',
      value: '7',
      detail: 'Past the agreed due date',
      tone: 'overdue',
    },
    {
      label: 'Closed',
      value: '42',
      detail: 'Completed interventions logged',
      tone: 'closed',
    },
  ];

  readonly registerRows = [
    {
      actionId: 'ACT-1004',
      metricArea: 'Continuation',
      action: 'Business Yr1 attendance recovery plan',
      owner: 'Dean Business',
      dueDate: '14 Feb 2026',
      status: 'Active',
      evidence: 'Evidence link',
    },
    {
      actionId: 'ACT-1009',
      metricArea: 'Completion',
      action: 'Resolve 19 unresolved board outcomes',
      owner: 'Registry',
      dueDate: '10 Feb 2026',
      status: 'Active',
      evidence: 'Evidence link',
    },
    {
      actionId: 'ACT-1013',
      metricArea: 'Progression',
      action: 'Improve contactability for 2025 qualifiers',
      owner: 'Careers',
      dueDate: '28 Feb 2026',
      status: 'Open',
      evidence: 'Evidence link',
    },
    {
      actionId: 'ACT-1019',
      metricArea: 'Data Quality',
      action: 'Mandate withdrawal reason coding',
      owner: 'Registry Systems',
      dueDate: '07 Feb 2026',
      status: 'Escalated',
      evidence: 'Evidence link',
    },
  ];

  readonly behaviourNotes = [
    'Actions can be linked to a metric, a course, a student group, or a single student case.',
    'Only authorised users can edit ownership, due date, and status changes.',
    'Closed actions remain visible as evidence for governance and regulatory review.',
  ];
}
