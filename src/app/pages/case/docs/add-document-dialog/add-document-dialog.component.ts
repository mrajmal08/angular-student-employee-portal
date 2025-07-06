import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { convertTo24HourWithSeconds } from 'shared/helpers/common-helper';
import { ApiClientService } from 'shared/services/api-client.service';
import { AppService } from 'shared/services/app-service.service';

@Component({
  selector: 'app-add-document-dialog',
  templateUrl: './add-document-dialog.component.html',
  styleUrls: ['./add-document-dialog.component.scss'],
})
export class AddDocumentDialogComponent implements OnInit {
  @ViewChild('documentSelect', { read: ElementRef })
  documentSelectRef!: ElementRef;

  @Input() isCompliance: boolean = false;

  documentCategories: any[] = [];
  caseId: number | null = null;

  document_File: File | null = null;
  documentForm!: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private apiClient: ApiClientService,
    private appService: AppService
  ) {}
  ngOnInit(): void {
    this.documentForm = this.fb.group({
      document: [''],
      id: [''],
    });

    this.appService.breadCrumbData$.subscribe((data) => {
      this.caseId = data.caseId ?? null;
      this.getDocuments();
    });
  }

  closeForm() {
    this.activeModal.close();
  }

  onSave() {
    const keyName = 'file';

    let file = {
      [keyName]: this.document_File,
    };

    const formData = new FormData();
    formData.append('case_id', this.caseId ? this.caseId.toString() : '');
    formData.append('category_id', this.documentForm.value.id);
    if (this.document_File) {
      formData.append('file', this.document_File);
    }

    this.addDocument(formData);
  }

  addDocument(formData: any) {
    this.apiClient
      .postForFormData('add/media', formData)
      .subscribe((resp: any) => {
        if (resp.status) {
          this.activeModal.close({ result: true });
        }
      });
  }

  onDocumentUploadFile(event: any) {
    this.document_File = event.target.files[0];
  }

  getDocuments() {
    this.apiClient
      .get(`document/categories?case_id=${this.caseId}`, {})
      .subscribe((resp: any) => {
        if (resp.status) {
          this.documentCategories = resp.result.map((category: any) => ({
            id: category.id,
            name: category.name,
            counter: category.counter,
            documents: [],
          }));
        }
      });
  }

  onDocumentChange($event: any) {
    setTimeout(() => {
      const input: HTMLInputElement | null =
        this.documentSelectRef.nativeElement.querySelector('input');
      if (input) {
        input.blur();
      }
    }, 10);
  }
}
