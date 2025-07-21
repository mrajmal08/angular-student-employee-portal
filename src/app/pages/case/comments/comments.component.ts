import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentCategory } from 'shared/models/commentCategory-model';
import { CommentData } from 'shared/models/commentData-model';
import { ApiClientService } from 'shared/services/api-client.service';
import { AppService } from 'shared/services/app-service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  selectedCategoryId: any = '';

  commentCategories: CommentCategory[] = [];
  commentsData: CommentData[] = [];

  commentForm!: FormGroup;
  caseId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private apiClient: ApiClientService,
    private appService: AppService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.appService.breadCrumbData$.subscribe((data) => {
      this.caseId = data.caseId ?? null;
    });

    this.commentForm = this.fb.group({
      commentType: [''],
      comment_category_id: [''],
      message: [''],
    });

    this.commentForm
      .get('comment_category_id')
      ?.valueChanges.subscribe((value) => {
        const messageControl = this.commentForm.get('message');
        if (value) {
          messageControl?.enable();
        } else {
          messageControl?.disable();
        }
      });

    // Initially disable the message field
    this.commentForm.get('message')?.disable();

    this.getCommentsData();
    this.getCommentCategories();
  }

  sendMessage() {
    let payload = this.makePayload();
    this.addComment(payload);
  }

  onFilter() {
    this.getCommentsData();
  }

  onReset() {
    this.selectedCategoryId = '';
    this.getCommentsData();
  }

  getCommentCategories() {
    this.apiClient
      .get(`comment/categories`)
      .toPromise()
      .then((resp: any) => {
        if (resp.status) {
          this.commentCategories = resp.result;
        }
      })
      .catch((error: any) => {})
      .catch((error: any) => {});
  }

  makePayload() {
    const formData = new FormData();
    formData.append('case_id', this.caseId ? this.caseId.toString() : '');
    formData.append(
      'comment_category_id',
      this.commentForm.value.comment_category_id
    );

    formData.append('message', this.commentForm.value.message);

    return formData;
  }

  addComment(formData: FormData) {
    this.apiClient
      .postForFormData(`comment/insert`, formData)
      .toPromise()
      .then((resp: any) => {
        if (resp.status) {
          this.commentForm.patchValue({ message: '' });
          this.getCommentsData();
        }
      })
      .catch((error: any) => {})
      .catch((error: any) => {});
  }

  getCommentsData() {
    let url = `comments?case_id=${this.caseId}`;

    if (this.selectedCategoryId) {
      url += `&comment_category_id=${this.selectedCategoryId}`;
    }
    this.apiClient
      .get(url)
      .toPromise()
      .then((resp: any) => {
        if (resp.status) {
          this.commentsData = resp.result;
        }
      })
      .catch((error: any) => {})
      .catch((error: any) => {});
  }

  close() {
    this.activeModal.close();
  }

  onCategoryChange(selectedId: string) {
    if (!selectedId) return;

    const id = Number(selectedId);
    this.selectedCategoryId = id;
  }
}
