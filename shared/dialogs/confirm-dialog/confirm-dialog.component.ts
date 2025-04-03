import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  // imports:[MatDialogModule,CommonModule],
  //   template: `
  //   <h2 mat-dialog-title>{{ data.title }}</h2>
  //   <mat-dialog-content>{{ data.message }}</mat-dialog-content>
  //   <mat-dialog-actions align="end">
  //     <button mat-button (click)="onCancel()">Cancel</button>
  //     <button mat-raised-button color="warn" (click)="onConfirm()">OK</button>
  //   </mat-dialog-actions>
  // `,

  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  animations: [
    trigger('popInAnimation', [
      transition(':enter', [
        animate(
          '0.2s ease-out', // Faster duration (0.2s)
          keyframes([
            style({
              transform: 'scale3d(0.7, 0.7, 0.7)',
              opacity: 0,
              offset: 0,
            }), // Start small
            style({
              transform: 'scale3d(1.15, 1.15, 1.15)',
              opacity: 1,
              offset: 0.5,
            }), // Quick overshoot
            style({ transform: 'scale3d(1, 1, 1)', opacity: 1, offset: 1 }), // Settle back to normal
          ])
        ),
      ]),
    ]),
  ],
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
