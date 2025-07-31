import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiClientService } from 'shared/services/api-client.service';
import { AppService } from 'shared/services/app-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddDocumentDialogComponent } from './add-document-dialog/add-document-dialog.component';

interface Document {
  case_media_id: number;
  case_id: number;
  media_category_id: number;
  file_path: string;
  fileName: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
}

interface DocumentCategory {
  id: number;
  name: string;
  counter: number;
  isCollapsed: boolean;
  documents: Document[];
}

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent implements OnInit {
  @ViewChild('downloadIframe', { static: false })
  iframeRef!: ElementRef<HTMLIFrameElement>;

  previewUrl: SafeResourceUrl | null = null;
  caseId: number | null = null;
  documentCategories: DocumentCategory[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private apiClient: ApiClientService,
    private appService: AppService,
    private location: Location,
    private router: Router,
    private modalService: NgbModal
  ) {
    // this.documentCategories=[
    //   {
    //     id: 'category1',
    //     name: 'Category 1',
    //     documents: [
    //       {
    //         name: 'Doc 1',
    //         createdAt: '2024-02-28',
    //         createdBy: 'Admin',
    //         updatedBy: 'Editor',
    //         file: 'assets/sample.pdf',
    //       },
    //       {
    //         name: 'Doc 2',
    //         createdAt: '2024-02-27',
    //         createdBy: 'User',
    //         updatedBy: 'Admin',
    //         file: 'assets/sample.pdf',
    //       },
    //     ],
    //   },
    //   {
    //     id: 'category2',
    //     name: 'Category 2',
    //     documents: [
    //       {
    //         name: 'Doc A',
    //         createdAt: '2024-02-26',
    //         createdBy: 'Admin',
    //         updatedBy: 'Admin',
    //         file: 'assets/sample.pdf',
    //       },
    //     ],
    //   },
    //   {
    //     id: 'category3',
    //     name: 'Category 3',
    //     documents: [
    //       {
    //         name: 'Doc 1',
    //         createdAt: '2024-02-28',
    //         createdBy: 'Admin',
    //         updatedBy: 'Editor',
    //         file: 'assets/sample.pdf',
    //       },
    //       {
    //         name: 'Doc 2',
    //         createdAt: '2024-02-27',
    //         createdBy: 'User',
    //         updatedBy: 'Admin',
    //         file: 'assets/sample.pdf',
    //       },
    //     ],
    //   },
    //   {
    //     id: 'category4',
    //     name: 'Category 4',
    //     documents: [
    //       {
    //         name: 'Doc 1',
    //         createdAt: '2024-02-28',
    //         createdBy: 'Admin',
    //         updatedBy: 'Editor',
    //         file: 'assets/sample.pdf',
    //       },
    //       {
    //         name: 'Doc 2',
    //         createdAt: '2024-02-27',
    //         createdBy: 'User',
    //         updatedBy: 'Admin',
    //         file: 'assets/sample.pdf',
    //       },
    //     ],
    //   },
    //   {
    //     id: 'category5',
    //     name: 'Category 5',
    //     documents: [
    //       {
    //         name: 'Doc 1',
    //         createdAt: '2024-02-28',
    //         createdBy: 'Admin',
    //         updatedBy: 'Editor',
    //         file: 'assets/sample.pdf',
    //       },
    //       {
    //         name: 'Doc 2',
    //         createdAt: '2024-02-27',
    //         createdBy: 'User',
    //         updatedBy: 'Admin',
    //         file: 'assets/sample.pdf',
    //       },
    //     ],
    //   },
    //   {
    //     id: 'category6',
    //     name: 'Category 6',
    //     documents: [
    //       {
    //         name: 'Doc 1',
    //         createdAt: '2024-02-28',
    //         createdBy: 'Admin',
    //         updatedBy: 'Editor',
    //         file: 'assets/sample.pdf',
    //       },
    //       {
    //         name: 'Doc 2',
    //         createdAt: '2024-02-27',
    //         createdBy: 'User',
    //         updatedBy: 'Admin',
    //         file: 'assets/sample.pdf',
    //       },
    //     ],
    //   },
    //   {
    //     id: 'category7',
    //     name: 'Category 7',
    //     documents: [
    //       {
    //         name: 'Doc 1',
    //         createdAt: '2024-02-28',
    //         createdBy: 'Admin',
    //         updatedBy: 'Editor',
    //         file: 'assets/sample.pdf',
    //       },
    //       {
    //         name: 'Doc 2',
    //         createdAt: '2024-02-27',
    //         createdBy: 'User',
    //         updatedBy: 'Admin',
    //         file: 'assets/sample.pdf',
    //       },
    //     ],
    //   },
    //   {
    //     id: 'category8',
    //     name: 'Category 8',
    //     documents: [
    //       {
    //         name: 'Doc 1',
    //         createdAt: '2024-02-28',
    //         createdBy: 'Admin',
    //         updatedBy: 'Editor',
    //         file: 'assets/sample.pdf',
    //       },
    //       {
    //         name: 'Doc 2',
    //         createdAt: '2024-02-27',
    //         createdBy: 'User',
    //         updatedBy: 'Admin',
    //         file: 'assets/sample.pdf',
    //       },
    //     ],
    //   },
    //   {
    //     id: 'category9',
    //     name: 'Category 9',
    //     documents: [
    //       {
    //         name: 'Doc 1',
    //         createdAt: '2024-02-28',
    //         createdBy: 'Admin',
    //         updatedBy: 'Editor',
    //         file: 'assets/sample.pdf',
    //       },
    //       {
    //         name: 'Doc 2',
    //         createdAt: '2024-02-27',
    //         createdBy: 'User',
    //         updatedBy: 'Admin',
    //         file: 'assets/sample.pdf',
    //       },
    //     ],
    //   },
    //   {
    //     id: 'category10',
    //     name: 'Category 10',
    //     documents: [
    //       {
    //         name: 'Doc 1',
    //         createdAt: '2024-02-28',
    //         createdBy: 'Admin',
    //         updatedBy: 'Editor',
    //         file: 'assets/sample.pdf',
    //       },
    //       {
    //         name: 'Doc 2',
    //         createdAt: '2024-02-27',
    //         createdBy: 'User',
    //         updatedBy: 'Admin',
    //         file: 'assets/sample.pdf',
    //       },
    //     ],
    //   },
    //   {
    //     id: 'category11',
    //     name: 'Category 11',
    //     documents: [
    //       {
    //         name: 'Doc 1',
    //         createdAt: '2024-02-28',
    //         createdBy: 'Admin',
    //         updatedBy: 'Editor',
    //         file: 'assets/sample.pdf',
    //       },
    //       {
    //         name: 'Doc 2',
    //         createdAt: '2024-02-27',
    //         createdBy: 'User',
    //         updatedBy: 'Admin',
    //         file: 'assets/sample.pdf',
    //       },
    //     ],
    //   },
    //   {
    //     id: 'category12',
    //     name: 'Category 12',
    //     documents: [
    //       {
    //         name: 'Doc 1',
    //         createdAt: '2024-02-28',
    //         createdBy: 'Admin',
    //         updatedBy: 'Editor',
    //         file: 'assets/sample.pdf',
    //       },
    //       {
    //         name: 'Doc 2',
    //         createdAt: '2024-02-27',
    //         createdBy: 'User',
    //         updatedBy: 'Admin',
    //         file: 'assets/sample.pdf',
    //       },
    //     ],
    //   },
    //   {
    //     id: 'category13',
    //     name: 'Category 13',
    //     documents: [
    //       {
    //         name: 'Doc 1',
    //         createdAt: '2024-02-28',
    //         createdBy: 'Admin',
    //         updatedBy: 'Editor',
    //         file: 'assets/sample.pdf',
    //       },
    //       {
    //         name: 'Doc 2',
    //         createdAt: '2024-02-27',
    //         createdBy: 'User',
    //         updatedBy: 'Admin',
    //         file: 'assets/sample.pdf',
    //       },
    //     ],
    //   },
    // ];
    // this.documentCategories = [
    //   {
    //     id: 1,
    //     name: 'General Documents',
    //     counter: 5,
    //     documents: [],
    //   },
    //   {
    //     id: 2,
    //     name: 'Academic Documents',
    //     counter: 0,
    //     documents: [],
    //   },
    //   {
    //     id: 3,
    //     name: 'Academic Qualification',
    //     counter: 0,
    //     documents: [],
    //   },
    //   {
    //     id: 4,
    //     name: 'English Language Certificate',
    //     counter: 0,
    //     documents: [],
    //   },
    //   {
    //     id: 5,
    //     name: 'English Language Verification Certificate',
    //     counter: 0,
    //     documents: [],
    //   },
    //   {
    //     id: 6,
    //     name: 'Passport',
    //     counter: 0,
    //     documents: [],
    //   },
    //   {
    //     id: 7,
    //     name: 'CV',
    //     counter: 0,
    //     documents: [],
    //   },
    //   {
    //     id: 8,
    //     name: 'Academic Reference Letter',
    //     counter: 0,
    //     documents: [],
    //   },
    //   {
    //     id: 9,
    //     name: 'Work Reference Letter',
    //     counter: 0,
    //     documents: [],
    //   },
    //   {
    //     id: 10,
    //     name: 'Statement Of Purpose',
    //     counter: 0,
    //     documents: [],
    //   },
    //   {
    //     id: 11,
    //     name: 'TB Certificate',
    //     counter: 0,
    //     documents: [],
    //   },
    //   {
    //     id: 12,
    //     name: 'Other Documents',
    //     counter: 0,
    //     documents: [],
    //   },
    // ];
  }

  ngOnInit(): void {
    this.appService.breadCrumbData$.subscribe((data) => {
      this.caseId = data.caseId ?? null;
      this.getDocuments();
    });
  }

  handleCollapseClick(event: Event, category: any): void {
    category.isCollapsed = !category.isCollapsed;
    if (category.counter > 0) {
    }
    console.log('handleCollapseClick', event, category);

    this.apiClient
      .get(
        `case/media?case_id=${this.caseId}&category=${category.id}&page=1&pagination=1&per_page=10`,
        {}
      )
      .subscribe((resp: any) => {
        if (resp.status) {
          console.log('RESPPPP', resp);

          resp.result.data.forEach((item: any) => {
            const filePath = item.file_path;
            const fileName = filePath.split('/').pop();
            item.fileName = fileName;
          });

          let doc = this.documentCategories.find(
            (item) => item.id === category.id
          );
          if (doc) {
            doc.documents = [...resp.result.data];
          }
          // resp.result.data;
        }
      });

    // const targetId = (event.target as HTMLElement).getAttribute(
    //   'data-bs-target'
    // );
    // if (!targetId) return;

    // const element = document.querySelector(targetId) as HTMLElement;

    // if (
    //   element &&
    //   element.classList.contains('collapse') &&
    //   !element.classList.contains('show')
    // ) {
    //   // It is currently collapsed (will expand), trigger your logic
    //   console.log('Collapsed → Expanding:', category);
    //   // Your custom logic here
    // }
  }

  eyeClick(row: any) {
    // const url = 'assets/images/dummy.pdf';
    const url = `https://api.mavenmindconsultants.net/${row.file_path}`;
    console.log('URl', url);

    this.previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  async downloadFile(row: any) {
    // const link = document.createElement('a');
    // link.href = 'assets/images/dummy.pdf'; // Replace with your file path
    // link.download = 'sample.pdf'; // Replace with your desired file name
    // link.click();

    try {
      const handle = await (window as any).showSaveFilePicker({
        suggestedName: 'fileName',
        types: [
          {
            description: 'PDF files',
            accept: { 'application/pdf': ['.pdf'] },
          },
        ],
      });

      const url = `https://api.mavenmindconsultants.net/${row.file_path}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch the PDF file');
      }
      const blob = await response.blob();

      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();

      console.log('File saved successfully');
    } catch (err) {
      console.error('Save canceled or failed', err);
    }
  }

  printFile(row: any) {
    // const iframe = this.iframeRef.nativeElement as HTMLIFrameElement;
    // if (iframe && iframe.contentWindow) {
    //   iframe.contentWindow.focus();
    //   iframe.contentWindow.print();
    // } else {
    //   console.error('Iframe not loaded yet');
    // }

    const url = `https://api.mavenmindconsultants.net/${row.file_path}`;
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
      newWindow.focus();
      newWindow.onload = () => {
        newWindow.print();
      };
    }
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
            isCollapsed: true, // Default to collapsed
            documents: [],
          }));
        }
      });
  }

  uploadDocuments() {
    const modelRef = this.modalService.open(AddDocumentDialogComponent, {
      size: 'lg',
      centered: true,
      backdrop: 'static',
      windowClass: 'custom-modal',
    });

    modelRef.result.then((result) => {
      if (result) {
        this.getDocuments();
      }
    });
  }

  onPrevious() {
    this.location.back();
  }

  onNext() {
    let url = '/case/add';
    this.router.navigateByUrl(url + '/financial-docs');
  }

  columns = [
    { name: 'Name', prop: 'name' },
    { name: 'Created At', prop: 'createdAt' },
    { name: 'Created By', prop: 'createdBy' },
    { name: 'Updated By', prop: 'updatedBy' },
    { name: 'Action' },
  ];

  previewDocument(file: string): void {
    this.previewUrl = file;
  }

  deleteDocument(category: DocumentCategory, document: Document): void {
    category.documents = category.documents.filter((doc) => doc !== document);
  }
}
