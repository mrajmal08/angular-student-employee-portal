import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  commentForm!: FormGroup;
  commentTypes: string[] = ['Verification', 'Approval', 'Feedback'];
  comments: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      commentType: ['Verification', Validators.required],
      description: ['', Validators.required]
    });
  }

  submitComment(): void {
    if (this.commentForm.valid) {
      this.comments.push({ text: this.commentForm.value.description });
      this.commentForm.get('description')?.reset();
    }
  }
}
