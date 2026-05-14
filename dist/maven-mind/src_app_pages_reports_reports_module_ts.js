"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_reports_reports_module_ts"],{

/***/ 9837:
/*!*********************************************************!*\
  !*** ./src/app/pages/reports/reports-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsRoutingModule": () => (/* binding */ ReportsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _student_report_student_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-report/student-report.component */ 7377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'student-report', component: _student_report_student_report_component__WEBPACK_IMPORTED_MODULE_0__.StudentReportComponent },
];
class ReportsRoutingModule {
}
ReportsRoutingModule.ɵfac = function ReportsRoutingModule_Factory(t) { return new (t || ReportsRoutingModule)(); };
ReportsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ReportsRoutingModule });
ReportsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2234:
/*!*************************************************!*\
  !*** ./src/app/pages/reports/reports.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsModule": () => (/* binding */ ReportsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports-routing.module */ 9837);
/* harmony import */ var _student_report_student_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-report/student-report.component */ 7377);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);









class ReportsModule {
}
ReportsModule.ɵfac = function ReportsModule_Factory(t) { return new (t || ReportsModule)(); };
ReportsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ReportsModule });
ReportsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportsRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ReportsModule, { declarations: [_student_report_student_report_component__WEBPACK_IMPORTED_MODULE_1__.StudentReportComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportsRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule] }); })();


/***/ }),

/***/ 7377:
/*!**************************************************************************!*\
  !*** ./src/app/pages/reports/student-report/student-report.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentReportComponent": () => (/* binding */ StudentReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);







function StudentReportComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function StudentReportComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function StudentReportComponent_option_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6)("selected", option_r6 === ctx_r2.page.perPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r6);
} }
function StudentReportComponent_ngx_datatable_column_72_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r10 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r10.name);
} }
function StudentReportComponent_ngx_datatable_column_72_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r11 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r11);
} }
function StudentReportComponent_ngx_datatable_column_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable-column", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentReportComponent_ngx_datatable_column_72_ng_template_1_Template, 2, 1, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudentReportComponent_ngx_datatable_column_72_ng_template_2_Template, 2, 1, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", col_r7.name)("prop", col_r7.prop)("sortable", false);
} }
function StudentReportComponent_ng_template_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentReportComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40)(1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentReportComponent_ng_template_75_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const row_r14 = restoredCtx.row; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.editAgent(row_r14)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentReportComponent_ng_template_75_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const row_r14 = restoredCtx.row; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.deleteAgent(row_r14)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class StudentReportComponent {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.page = {
            perPage: 25,
            page: 1,
            total: 100
        };
        this.perPageOptions = [10, 25, 50, 100];
        this.isCollapsed = true;
        this.columns = [
            { name: 'Agent ID', prop: 'id' },
            { name: 'Agent Name', prop: 'name' },
            { name: 'Company', prop: 'company' },
            { name: 'Mobile', prop: 'mobile' },
            { name: 'VAT registration number', prop: 'registerationNumber' },
            { name: 'Uk Address', prop: 'UkAddress' },
            { name: 'Non UK Company Address', prop: 'NonUkAddress' },
            { name: 'Email', prop: 'email' },
            { name: 'Compliance check / referral', prop: 'complianceCheck' },
            { name: 'Restricted Countries', prop: 'restrictedCountries' },
            { name: 'Created By', prop: 'createdBy' },
            { name: 'Updated By', prop: 'updatedBy' },
        ];
        this.rows = [
            {
                id: 1,
                name: 'John Doe',
                company: 'ABC Ltd.',
                mobile: '+44 7890 123456',
                registerationNumber: 'VAT123456789',
                UkAddress: '123 Baker Street, London, UK',
                NonUkAddress: '456 Elm Street, New York, USA',
                email: 'john.doe@example.com',
                complianceCheck: 'Passed',
                restrictedCountries: 'None',
                createdBy: 'Admin 2024-01-10',
                updatedBy: 'Admin 2024-01-15',
            },
            {
                id: 2,
                name: 'Jane Smith',
                company: 'XYZ Corp.',
                mobile: '+44 7523 987654',
                registerationNumber: 'VAT987654321',
                UkAddress: '78 High Street, Manchester, UK',
                NonUkAddress: '789 Pine Avenue, Toronto, Canada',
                email: 'jane.smith@example.com',
                complianceCheck: 'Pending',
                restrictedCountries: 'Iran, North Korea',
                createdBy: 'Admin 2024-01-12',
                updatedBy: 'Admin 2024-01-18',
            },
            {
                id: 3,
                name: 'Michael Johnson',
                company: 'Global Solutions',
                mobile: '+44 7012 345678',
                registerationNumber: 'VAT654321789',
                UkAddress: '56 King’s Road, Edinburgh, UK',
                NonUkAddress: '123 Ocean Drive, Sydney, Australia',
                email: 'michael.johnson@example.com',
                complianceCheck: 'Failed',
                restrictedCountries: 'Russia, Syria',
                createdBy: 'Admin 2024-01-14',
                updatedBy: 'Admin 2024-01-20',
            },
            {
                id: 4,
                name: 'Emma Brown',
                company: 'Secure Trade Ltd.',
                mobile: '+44 7412 567890',
                registerationNumber: 'VAT111222333',
                UkAddress: '89 Tower Bridge Road, London, UK',
                NonUkAddress: '555 Bay Street, Dubai, UAE',
                email: 'emma.brown@example.com',
                complianceCheck: 'Passed',
                restrictedCountries: 'None',
                createdBy: 'Admin 2024-01-16',
                updatedBy: 'Admin 2024-01-22',
            },
        ];
        this.buildForm();
    }
    ngOnInit() {
    }
    buildForm() {
        this.filterForm = this.fb.group({
            ssn: [''],
            agent_name: [''],
            date_of_birth: [''],
            created_at: [''],
            updated_at: [''],
            created_by: [''],
            updated_by: [''],
            agent_id: [''],
            email: [''],
            cell_phone_no: [''],
            address: [''],
            ssn3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(3)]],
            ssn2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(2)]],
            ssn4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(4)]],
        });
    }
    setPage(pageInfo) {
        this.page.page = pageInfo.offset + 1;
    }
    updatePerPage(event) {
        this.page.perPage = event.target.value;
    }
    getTotalPages() {
        return Math.ceil(this.page.total / this.page.perPage);
    }
    onSelectFilters() {
    }
    resetForm() { }
    onResetFilters() { }
    onAgentNameClick(agentId) {
        this.router.navigateByUrl(`/agents/${agentId}`);
    }
    addNewAgent() {
        this.router.navigateByUrl(`/agents/add`);
    }
    editAgent(row) {
        console.log('Edit Agent:', row);
        this.router.navigateByUrl(`/agents/edit/${row.id}`);
        // Implement edit logic (e.g., open a modal, navigate to edit page)
    }
    deleteAgent(row) {
        if (confirm('Are you sure you want to delete this agent?')) {
            console.log('Delete Agent:', row);
            // Implement delete logic (e.g., call API to remove the agent)
        }
    }
    customizeColumns() { }
    exportToExcel() {
    }
}
StudentReportComponent.ɵfac = function StudentReportComponent_Factory(t) { return new (t || StudentReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
StudentReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentReportComponent, selectors: [["app-student-report"]], decls: 76, vars: 24, consts: [["autocomplete", "off", "novalidate", "", 1, "form", "w-100", 2, "margin", "20px 0px", 3, "formGroup", "ngSubmit"], [1, "form-content", "search-filter-block", "position-relative"], [1, "sub-title", "search-agent-title"], ["aria-controls", "collapseBasic", "type", "button", 1, "btn", "plus-btn", "position-absolute", 2, "max-width", "42px", "top", "42px", "right", "20px", "min-width", "unset", "background-color", "#05a853", "border", "#05a853", 3, "click"], ["class", "bi bi-plus", 4, "ngIf"], ["class", "bi bi-dash", 4, "ngIf"], [1, "row"], [1, "field-block", "w-100"], [1, "col-12", 2, "color", "#808382"], [1, "row", 2, "padding-right", "100px"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "form-group"], ["for", "agent_id"], ["type", "text", "id", "agent_id", "formControlName", "agent_id", 1, "form-control"], ["id", "collapseBasic"], [1, "row", 2, "padding-right", "100px", "margin-top", "20px"], ["for", "created_by"], ["type", "text", "id", "created_by", "formControlName", "created_by", 1, "form-control"], [1, "d-flex", "justify-content-center", "mt-3"], ["type", "submit", 1, "btn", "btn-primary", "mx-2", 2, "background-color", "#05a853", "border", "#05a853"], ["type", "button", 1, "btn", "btn-default", "mx-2", 3, "disabled", "click"], [1, "d-flex", "mt-3", "mb-3", "gap-2", "justify-content-end"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], ["for", "perPageSelect", 1, "me-2"], ["id", "perPageSelect", 1, "form-select", "me-2", 2, "width", "auto", "display", "inline-block", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "bootstrap", "custom-table", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarH", "limit", "count", "offset", "externalPaging", "page"], [3, "name", "prop", "sortable", 4, "ngFor", "ngForOf"], ["name", "Action", 3, "width"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], [1, "bi", "bi-plus"], [1, "bi", "bi-dash"], [3, "value", "selected"], [3, "name", "prop", "sortable"], [1, "mgx-header"], [1, "text-center"], [1, "mgx-header", "text-center"], [1, "d-flex", "justify-content-center", "gap-2"], [1, "btn", "btn-sm", "btn-primary", 2, "min-width", "60px", "padding", "5px 10px", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-sm", "btn-danger", 2, "min-width", "60px", "padding", "5px 10px", 3, "click"], [1, "bi", "bi-trash"]], template: function StudentReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StudentReportComponent_Template_form_ngSubmit_0_listener() { return ctx.onSelectFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "strong", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search Student Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentReportComponent_Template_button_click_4_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StudentReportComponent_i_5_Template, 1, 0, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StudentReportComponent_i_6_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "agent Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10)(17, "div", 11)(18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10)(22, "div", 11)(23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10)(27, "div", 11)(28, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Preffered Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14)(32, "div", 15)(33, "div", 10)(34, "div", 11)(35, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10)(39, "div", 11)(40, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10)(44, "div", 11)(45, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10)(49, "div", 11)(50, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18)(54, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentReportComponent_Template_button_click_56_listener() { return ctx.onResetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21)(59, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentReportComponent_Template_button_click_59_listener() { return ctx.customizeColumns(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Customize Columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentReportComponent_Template_button_click_61_listener() { return ctx.exportToExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Export to Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24)(64, "div")(65, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StudentReportComponent_Template_select_change_67_listener($event) { return ctx.updatePerPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, StudentReportComponent_option_68_Template, 2, 3, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ngx-datatable", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function StudentReportComponent_Template_ngx_datatable_page_71_listener($event) { return ctx.setPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, StudentReportComponent_ngx_datatable_column_72_Template, 3, 3, "ngx-datatable-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, StudentReportComponent_ng_template_74_Template, 2, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, StudentReportComponent_ng_template_75_Template, 5, 0, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-dark", !ctx.isCollapsed)("btn-primary", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@collapseAnimation", ctx.isCollapsed ? "collapsed" : "expanded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.perPageOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("columns", ctx.columns)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("scrollbarH", true)("limit", ctx.page.perPage)("count", ctx.page.total)("offset", ctx.page.page - 1)("externalPaging", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnCellDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: [".search-agent-title[_ngcontent-%COMP%] {\n  color: #00b5e9;\n  position: absolute;\n  top: 0;\n  left: 73px;\n  transform: translate(-50%, -50%);\n  background: white;\n  padding: 0 10px;\n  font-size: 16px;\n  font: 400 1rem/19px \"Poppins\", Arial, Helvetica, sans-serif;\n  text-transform: capitalize;\n  background: #fff;\n  position: absolute;\n  padding: 0 15px;\n  color: #00b5e9;\n}\n\n.plus-btn[_ngcontent-%COMP%] {\n  top: 10px;\n  right: 15px;\n}\n\n.form-content[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 20px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.mat-date-picker-custom[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton.btn-primary[_ngcontent-%COMP%], button.btn-default[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n\n.clickable-text[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  cursor: pointer;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwyREFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxTQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQUVFOztFQUVFLGdCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoic3R1ZGVudC1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWFnZW50LXRpdGxlIHtcbiAgICBjb2xvcjogIzAwYjVlOTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDczcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250OiA0MDAgMXJlbSAvIDE5cHggXCJQb3BwaW5zXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGNvbG9yOiAjMDBiNWU5O1xuICB9XG4gIFxuICAucGx1cy1idG4ge1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTVweDtcbiAgfVxuICBcbiAgLmZvcm0tY29udGVudCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5tYXQtZGF0ZS1waWNrZXItY3VzdG9tIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgYnV0dG9uLmJ0bi1wcmltYXJ5LFxuICBidXR0b24uYnRuLWRlZmF1bHQge1xuICAgIG1pbi13aWR0aDogMTEwcHg7XG4gIH1cbiAgLmNsaWNrYWJsZS10ZXh0IHtcbiAgICBjb2xvcjogIzJlN2QzMjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gICJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('collapseAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    height: '0',
                    overflow: 'hidden',
                    opacity: '0',
                    margin: '0',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    height: '*',
                    opacity: '1',
                    margin: '*',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('collapsed <=> expanded', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('300ms ease-out')
                ]),
            ])
        ] } });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_reports_reports_module_ts.js.map