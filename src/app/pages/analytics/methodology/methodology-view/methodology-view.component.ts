import { Component } from '@angular/core';

@Component({
  selector: 'app-methodology-view',
  templateUrl: './methodology-view.component.html',
  styleUrls: ['./methodology-view.component.scss'],
})
export class MethodologyViewComponent {
  readonly filters = [
    { label: 'Academic Year', value: '2025/26' },
    { label: 'Mode', value: 'All' },
    { label: 'Level', value: 'All' },
    { label: 'Faculty', value: 'All' },
    { label: 'Partner', value: 'All' },
    { label: 'Characteristic', value: 'All' },
  ];

  readonly logicDefinitions = [
    'Continuation = in-scope starters who are still studying or have already achieved a qualification in the continuation window.',
    'Completion = in-scope starters who achieve the intended award, an exit award, or are still validly continuing in the completion window.',
    'Progression = positive outcomes among qualifying leavers, always shown with contactability and response-rate context.',
    'Thresholds are applied by mode and level. Mixed-threshold views trigger warnings or require a narrower filter.',
  ];

  readonly versionRows = [
    { field: 'Rules version', value: '2.4' },
    { field: 'Effective from', value: '01 Jan 2026' },
    { field: 'Previous version', value: '2.3' },
    {
      field: 'Snapshot frequency',
      value: 'Monthly frozen snapshot + daily operational refresh',
    },
    { field: 'Small-number caution', value: 'Denominator < 50' },
  ];

  readonly coreFieldRows = [
    {
      field: 'student_id',
      meaning: 'Stable student identifier',
      source: 'Student Records',
      usedIn: 'All drill-down pages',
    },
    {
      field: 'course_instance_id',
      meaning: 'Unique study instance key',
      source: 'Student Records',
      usedIn: 'Continuation, completion, programme views',
    },
    {
      field: 'registration_status',
      meaning: 'Current and historical status',
      source: 'Student Records',
      usedIn: 'Continuation and risk logic',
    },
  ];
}
