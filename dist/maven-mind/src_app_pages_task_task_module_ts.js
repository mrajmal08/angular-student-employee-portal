"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_task_task_module_ts"],{

/***/ 9720:
/*!*****************************************************************!*\
  !*** ./src/app/pages/task/create-task/create-task.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTaskComponent": () => (/* binding */ CreateTaskComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);







function CreateTaskComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", task_r8.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", task_r8.count, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r8.label);
} }
function CreateTaskComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", task_r9.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", task_r9.count, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r9.label);
} }
function CreateTaskComponent_i_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 41);
} }
function CreateTaskComponent_i_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 42);
} }
function CreateTaskComponent_option_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r10)("selected", option_r10 === ctx_r4.page.perPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r10);
} }
function CreateTaskComponent_ngx_datatable_column_84_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r14 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r14.name);
} }
function CreateTaskComponent_ngx_datatable_column_84_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r15 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r15);
} }
function CreateTaskComponent_ngx_datatable_column_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable-column", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateTaskComponent_ngx_datatable_column_84_ng_template_1_Template, 2, 1, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateTaskComponent_ngx_datatable_column_84_ng_template_2_Template, 2, 1, "ng-template", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", col_r11.name)("prop", col_r11.prop)("sortable", false);
} }
function CreateTaskComponent_ng_template_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateTaskComponent_ng_template_87_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48)(1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTaskComponent_ng_template_87_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const row_r18 = restoredCtx.row; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.editAgent(row_r18)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTaskComponent_ng_template_87_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const row_r18 = restoredCtx.row; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.deleteAgent(row_r18)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class CreateTaskComponent {
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
        this.generalTasks = [
            { label: 'Assigned', count: 1, color: 'blue' },
            { label: 'Pending', count: 1, color: 'black' },
            { label: 'Closed', count: 0, color: 'black' },
            { label: 'Not Closed', count: 1, color: 'red' }
        ];
        this.verificationTasks = [
            { label: 'Assigned', count: 0, color: 'blue' },
            { label: 'Pending', count: 0, color: 'black' },
            { label: 'Approved', count: 0, color: 'green' },
            { label: 'Not Approved', count: 0, color: 'red' },
            { label: 'Closed', count: 0, color: 'black' }
        ];
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
        this.router.navigateByUrl(`/status/${agentId}`);
    }
    addNewAgent() {
        this.router.navigateByUrl(`/status/add`);
    }
    editAgent(row) {
        console.log('Edit Status:', row);
        this.router.navigateByUrl(`/status/edit/${row.id}`);
        // Implement edit logic (e.g., open a modal, navigate to edit page)
    }
    deleteAgent(row) {
        if (confirm('Are you sure you want to delete this agent?')) {
            console.log('Delete Agent:', row);
            // Implement delete logic (e.g., call API to remove the agent)
        }
    }
}
CreateTaskComponent.ɵfac = function CreateTaskComponent_Factory(t) { return new (t || CreateTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
CreateTaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateTaskComponent, selectors: [["app-create-task"]], decls: 88, vars: 26, consts: [[1, "container", "my-tasks"], [1, "task-wrapper"], [1, "task-section", "general-task"], [1, "task-header"], [1, "task-cards"], ["class", "task-card", 4, "ngFor", "ngForOf"], [1, "task-section", "verification-task"], [1, "d-flex", "mt-3", "mb-3", "justify-content-end"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["autocomplete", "off", "novalidate", "", 1, "form", "w-100", 2, "margin", "20px 0px", 3, "formGroup", "ngSubmit"], [1, "form-content", "search-filter-block", "position-relative"], [1, "sub-title", "search-agent-title"], ["aria-controls", "collapseBasic", "type", "button", 1, "btn", "plus-btn", "position-absolute", 2, "max-width", "42px", "top", "42px", "right", "20px", "min-width", "unset", "background-color", "#05a853", "border", "#05a853", 3, "click"], ["class", "bi bi-plus", 4, "ngIf"], ["class", "bi bi-dash", 4, "ngIf"], [1, "row"], [1, "field-block", "w-100"], [1, "col-12", 2, "color", "#808382"], [1, "row", 2, "padding-right", "100px"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "form-group"], ["for", "agent_id"], ["type", "text", "id", "agent_id", "formControlName", "agent_id", 1, "form-control"], ["id", "collapseBasic"], [1, "row", 2, "padding-right", "100px", "margin-top", "20px"], ["for", "created_by"], ["type", "text", "id", "created_by", "formControlName", "created_by", 1, "form-control"], [1, "d-flex", "justify-content-center", "mt-3"], ["type", "submit", 1, "btn", "btn-primary", "mx-2", 2, "background-color", "#05a853", "border", "#05a853"], ["type", "button", 1, "btn", "btn-default", "mx-2", 3, "disabled", "click"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], ["for", "perPageSelect", 1, "me-2"], ["id", "perPageSelect", 1, "form-select", "me-2", 2, "width", "auto", "display", "inline-block", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "bootstrap", "custom-table", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarH", "limit", "count", "offset", "externalPaging", "page"], [3, "name", "prop", "sortable", 4, "ngFor", "ngForOf"], ["name", "Action", 3, "width"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], [1, "task-card"], [1, "count", 3, "ngClass"], [1, "bi", "bi-plus"], [1, "bi", "bi-dash"], [3, "value", "selected"], [3, "name", "prop", "sortable"], [1, "mgx-header"], [1, "text-center"], [1, "mgx-header", "text-center"], [1, "d-flex", "justify-content-center", "gap-2"], [1, "btn", "btn-sm", "btn-primary", 2, "min-width", "60px", "padding", "5px 10px", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-sm", "btn-danger", 2, "min-width", "60px", "padding", "5px 10px", 3, "click"], [1, "bi", "bi-trash"]], template: function CreateTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "General Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateTaskComponent_div_8_Template, 5, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Verification Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateTaskComponent_div_13_Template, 5, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7)(15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTaskComponent_Template_button_click_15_listener() { return ctx.addNewAgent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+ Add new task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateTaskComponent_Template_form_ngSubmit_17_listener() { return ctx.onSelectFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10)(19, "strong", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Search Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTaskComponent_Template_button_click_21_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CreateTaskComponent_i_22_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CreateTaskComponent_i_23_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 20)(30, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "user Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19)(34, "div", 20)(35, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19)(39, "div", 20)(40, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19)(44, "div", 20)(45, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Preffered Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23)(49, "div", 24)(50, "div", 19)(51, "div", 20)(52, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19)(56, "div", 20)(57, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19)(61, "div", 20)(62, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19)(66, "div", 20)(67, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 27)(71, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTaskComponent_Template_button_click_73_listener() { return ctx.onResetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 30)(76, "div")(77, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateTaskComponent_Template_select_change_79_listener($event) { return ctx.updatePerPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, CreateTaskComponent_option_80_Template, 2, 3, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ngx-datatable", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function CreateTaskComponent_Template_ngx_datatable_page_83_listener($event) { return ctx.setPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, CreateTaskComponent_ngx_datatable_column_84_Template, 3, 3, "ngx-datatable-column", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ngx-datatable-column", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, CreateTaskComponent_ng_template_86_Template, 2, 0, "ng-template", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, CreateTaskComponent_ng_template_87_Template, 5, 0, "ng-template", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.generalTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.verificationTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.perPageOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("columns", ctx.columns)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("scrollbarH", true)("limit", ctx.page.perPage)("count", ctx.page.total)("offset", ctx.page.page - 1)("externalPaging", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnCellDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: [".search-agent-title[_ngcontent-%COMP%] {\n  color: #00b5e9;\n  position: absolute;\n  top: 0;\n  left: 73px;\n  transform: translate(-50%, -50%);\n  background: white;\n  padding: 0 10px;\n  font-size: 16px;\n  font: 400 1rem/19px \"Poppins\", Arial, Helvetica, sans-serif;\n  text-transform: capitalize;\n  background: #fff;\n  position: absolute;\n  padding: 0 15px;\n  color: #00b5e9;\n}\n\n.plus-btn[_ngcontent-%COMP%] {\n  top: 10px;\n  right: 15px;\n}\n\n.form-content[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 20px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.mat-date-picker-custom[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton.btn-primary[_ngcontent-%COMP%], button.btn-default[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n\n.clickable-text[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  cursor: pointer;\n  text-align: center;\n}\n\n.my-tasks[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px;\n}\n\n.my-tasks[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n  margin-left: 55px;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 40px;\n  padding: 20px;\n  border-radius: 0px;\n  margin-left: -50px;\n  margin-right: -100px;\n  margin-top: -20px;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px;\n  border: 2px solid #007bff;\n  border-radius: 0px;\n  background: #fff;\n  height: 220px;\n  margin-left: 10px;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.2rem;\n  margin-bottom: 15px;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-cards[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%] {\n  width: 100px;\n  padding: 15px;\n  text-align: center;\n  border-radius: 8px;\n  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  transition: transform 0.3s;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-cards[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-cards[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-cards[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .count.blue[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-cards[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .count.red[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-cards[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .count.green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-cards[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .count.black[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS10YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwyREFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxTQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQUVFOztFQUVFLGdCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNOOztBQUVJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUFOOztBQUVNO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFBUjs7QUFFUTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUFWOztBQUdRO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQURWOztBQUdVO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBRFo7O0FBR1k7RUFDRSxzQkFBQTtBQURkOztBQUlZO0VBQ0UsaUJBQUE7QUFGZDs7QUFJYztFQUNFLFdBQUE7QUFGaEI7O0FBS2M7RUFDRSxVQUFBO0FBSGhCOztBQU1jO0VBQ0UsWUFBQTtBQUpoQjs7QUFPYztFQUNFLFlBQUE7QUFMaEIiLCJmaWxlIjoiY3JlYXRlLXRhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWFnZW50LXRpdGxlIHtcbiAgICBjb2xvcjogIzAwYjVlOTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDczcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250OiA0MDAgMXJlbSAvIDE5cHggXCJQb3BwaW5zXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGNvbG9yOiAjMDBiNWU5O1xuICB9XG4gIFxuICAucGx1cy1idG4ge1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTVweDtcbiAgfVxuICBcbiAgLmZvcm0tY29udGVudCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5tYXQtZGF0ZS1waWNrZXItY3VzdG9tIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgYnV0dG9uLmJ0bi1wcmltYXJ5LFxuICBidXR0b24uYnRuLWRlZmF1bHQge1xuICAgIG1pbi13aWR0aDogMTEwcHg7XG4gIH1cbiAgLmNsaWNrYWJsZS10ZXh0IHtcbiAgICBjb2xvcjogIzJlN2QzMjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gIFxuICAubXktdGFza3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHg7XG4gIFxuICAgIGg0IHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OjU1cHg7XG4gICAgfVxuICBcbiAgICAudGFzay13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBnYXA6IDQwcHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6LTUwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6LTEwMHB4O1xuICAgICAgbWFyZ2luLXRvcDotMjBweDtcbiAgXG4gICAgICAudGFzay1zZWN0aW9uIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwN2JmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBoZWlnaHQ6MjIwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gIFxuICAgICAgICAudGFzay1oZWFkZXIge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC50YXNrLWNhcmRzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gICAgICAgICAgLnRhc2stY2FyZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgLmNvdW50IHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIFxuICAgICAgICAgICAgICAmLmJsdWUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICAmLnJlZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgJi5ncmVlbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICAmLmJsYWNrIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIl19 */"], data: { animation: [
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


/***/ }),

/***/ 1729:
/*!*************************************************************!*\
  !*** ./src/app/pages/task/task-list/task-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskListComponent": () => (/* binding */ TaskListComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);







function TaskListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", task_r8.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", task_r8.count, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r8.label);
} }
function TaskListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", task_r9.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", task_r9.count, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r9.label);
} }
function TaskListComponent_i_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 41);
} }
function TaskListComponent_i_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 42);
} }
function TaskListComponent_option_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r10)("selected", option_r10 === ctx_r4.page.perPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r10);
} }
function TaskListComponent_ngx_datatable_column_84_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r14 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r14.name);
} }
function TaskListComponent_ngx_datatable_column_84_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r15 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r15);
} }
function TaskListComponent_ngx_datatable_column_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable-column", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskListComponent_ngx_datatable_column_84_ng_template_1_Template, 2, 1, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskListComponent_ngx_datatable_column_84_ng_template_2_Template, 2, 1, "ng-template", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", col_r11.name)("prop", col_r11.prop)("sortable", false);
} }
function TaskListComponent_ng_template_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskListComponent_ng_template_87_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48)(1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_ng_template_87_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const row_r18 = restoredCtx.row; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.editAgent(row_r18)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_ng_template_87_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const row_r18 = restoredCtx.row; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.deleteAgent(row_r18)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class TaskListComponent {
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
        this.generalTasks = [
            { label: 'Assigned', count: 1, color: 'blue' },
            { label: 'Pending', count: 1, color: 'black' },
            { label: 'Closed', count: 0, color: 'black' },
            { label: 'Not Closed', count: 1, color: 'red' }
        ];
        this.verificationTasks = [
            { label: 'Assigned', count: 0, color: 'blue' },
            { label: 'Pending', count: 0, color: 'black' },
            { label: 'Approved', count: 0, color: 'green' },
            { label: 'Not Approved', count: 0, color: 'red' },
            { label: 'Closed', count: 0, color: 'black' }
        ];
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
        this.router.navigateByUrl(`/status/${agentId}`);
    }
    addNewAgent() {
        this.router.navigateByUrl(`/status/add`);
    }
    editAgent(row) {
        console.log('Edit Status:', row);
        this.router.navigateByUrl(`/status/edit/${row.id}`);
        // Implement edit logic (e.g., open a modal, navigate to edit page)
    }
    deleteAgent(row) {
        if (confirm('Are you sure you want to delete this agent?')) {
            console.log('Delete Agent:', row);
            // Implement delete logic (e.g., call API to remove the agent)
        }
    }
}
TaskListComponent.ɵfac = function TaskListComponent_Factory(t) { return new (t || TaskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
TaskListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskListComponent, selectors: [["app-task-list"]], decls: 88, vars: 26, consts: [[1, "container", "my-tasks"], [1, "task-wrapper"], [1, "task-section", "general-task"], [1, "task-header"], [1, "task-cards"], ["class", "task-card", 4, "ngFor", "ngForOf"], [1, "task-section", "verification-task"], [1, "d-flex", "mt-3", "mb-3", "justify-content-end"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["autocomplete", "off", "novalidate", "", 1, "form", "w-100", 2, "margin", "20px 0px", 3, "formGroup", "ngSubmit"], [1, "form-content", "search-filter-block", "position-relative"], [1, "sub-title", "search-agent-title"], ["aria-controls", "collapseBasic", "type", "button", 1, "btn", "plus-btn", "position-absolute", 2, "max-width", "42px", "top", "42px", "right", "20px", "min-width", "unset", "background-color", "#05a853", "border", "#05a853", 3, "click"], ["class", "bi bi-plus", 4, "ngIf"], ["class", "bi bi-dash", 4, "ngIf"], [1, "row"], [1, "field-block", "w-100"], [1, "col-12", 2, "color", "#808382"], [1, "row", 2, "padding-right", "100px"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "form-group"], ["for", "agent_id"], ["type", "text", "id", "agent_id", "formControlName", "agent_id", 1, "form-control"], ["id", "collapseBasic"], [1, "row", 2, "padding-right", "100px", "margin-top", "20px"], ["for", "created_by"], ["type", "text", "id", "created_by", "formControlName", "created_by", 1, "form-control"], [1, "d-flex", "justify-content-center", "mt-3"], ["type", "submit", 1, "btn", "btn-primary", "mx-2", 2, "background-color", "#05a853", "border", "#05a853"], ["type", "button", 1, "btn", "btn-default", "mx-2", 3, "disabled", "click"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], ["for", "perPageSelect", 1, "me-2"], ["id", "perPageSelect", 1, "form-select", "me-2", 2, "width", "auto", "display", "inline-block", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "bootstrap", "custom-table", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarH", "limit", "count", "offset", "externalPaging", "page"], [3, "name", "prop", "sortable", 4, "ngFor", "ngForOf"], ["name", "Action", 3, "width"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], [1, "task-card"], [1, "count", 3, "ngClass"], [1, "bi", "bi-plus"], [1, "bi", "bi-dash"], [3, "value", "selected"], [3, "name", "prop", "sortable"], [1, "mgx-header"], [1, "text-center"], [1, "mgx-header", "text-center"], [1, "d-flex", "justify-content-center", "gap-2"], [1, "btn", "btn-sm", "btn-primary", 2, "min-width", "60px", "padding", "5px 10px", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-sm", "btn-danger", 2, "min-width", "60px", "padding", "5px 10px", 3, "click"], [1, "bi", "bi-trash"]], template: function TaskListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "General Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskListComponent_div_8_Template, 5, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Verification Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TaskListComponent_div_13_Template, 5, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7)(15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_15_listener() { return ctx.addNewAgent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+ Add new task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TaskListComponent_Template_form_ngSubmit_17_listener() { return ctx.onSelectFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10)(19, "strong", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Search Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_21_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TaskListComponent_i_22_Template, 1, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TaskListComponent_i_23_Template, 1, 0, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 20)(30, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "user Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19)(34, "div", 20)(35, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19)(39, "div", 20)(40, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19)(44, "div", 20)(45, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Preffered Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23)(49, "div", 24)(50, "div", 19)(51, "div", 20)(52, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19)(56, "div", 20)(57, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19)(61, "div", 20)(62, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19)(66, "div", 20)(67, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 27)(71, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_73_listener() { return ctx.onResetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 30)(76, "div")(77, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskListComponent_Template_select_change_79_listener($event) { return ctx.updatePerPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, TaskListComponent_option_80_Template, 2, 3, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ngx-datatable", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function TaskListComponent_Template_ngx_datatable_page_83_listener($event) { return ctx.setPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, TaskListComponent_ngx_datatable_column_84_Template, 3, 3, "ngx-datatable-column", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ngx-datatable-column", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, TaskListComponent_ng_template_86_Template, 2, 0, "ng-template", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, TaskListComponent_ng_template_87_Template, 5, 0, "ng-template", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.generalTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.verificationTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.perPageOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("columns", ctx.columns)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("scrollbarH", true)("limit", ctx.page.perPage)("count", ctx.page.total)("offset", ctx.page.page - 1)("externalPaging", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnCellDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: [".search-agent-title[_ngcontent-%COMP%] {\n  color: #00b5e9;\n  position: absolute;\n  top: 0;\n  left: 73px;\n  transform: translate(-50%, -50%);\n  background: white;\n  padding: 0 10px;\n  font-size: 16px;\n  font: 400 1rem/19px \"Poppins\", Arial, Helvetica, sans-serif;\n  text-transform: capitalize;\n  background: #fff;\n  position: absolute;\n  padding: 0 15px;\n  color: #00b5e9;\n}\n\n.plus-btn[_ngcontent-%COMP%] {\n  top: 10px;\n  right: 15px;\n}\n\n.form-content[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 20px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.mat-date-picker-custom[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton.btn-primary[_ngcontent-%COMP%], button.btn-default[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n\n.clickable-text[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  cursor: pointer;\n  text-align: center;\n}\n\n.my-tasks[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px;\n}\n\n.my-tasks[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n  margin-left: 55px;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 40px;\n  padding: 20px;\n  border-radius: 0px;\n  margin-left: -50px;\n  margin-right: -100px;\n  margin-top: -20px;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px;\n  border: 2px solid #007bff;\n  border-radius: 0px;\n  background: #fff;\n  height: 220px;\n  margin-left: 10px;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.2rem;\n  margin-bottom: 15px;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-cards[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%] {\n  width: 100px;\n  padding: 15px;\n  text-align: center;\n  border-radius: 8px;\n  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  transition: transform 0.3s;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-cards[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-cards[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-cards[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .count.blue[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-cards[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .count.red[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-cards[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .count.green[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.my-tasks[_ngcontent-%COMP%]   .task-wrapper[_ngcontent-%COMP%]   .task-section[_ngcontent-%COMP%]   .task-cards[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]   .count.black[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMkRBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFFRTs7RUFFRSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0k7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDTjs7QUFFSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFBTjs7QUFFTTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQVI7O0FBRVE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBVjs7QUFHUTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFEVjs7QUFHVTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQURaOztBQUdZO0VBQ0Usc0JBQUE7QUFEZDs7QUFJWTtFQUNFLGlCQUFBO0FBRmQ7O0FBSWM7RUFDRSxXQUFBO0FBRmhCOztBQUtjO0VBQ0UsVUFBQTtBQUhoQjs7QUFNYztFQUNFLFlBQUE7QUFKaEI7O0FBT2M7RUFDRSxZQUFBO0FBTGhCIiwiZmlsZSI6InRhc2stbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYWdlbnQtdGl0bGUge1xuICAgIGNvbG9yOiAjMDBiNWU5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogNzNweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQ6IDQwMCAxcmVtIC8gMTlweCBcIlBvcHBpbnNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgY29sb3I6ICMwMGI1ZTk7XG4gIH1cbiAgXG4gIC5wbHVzLWJ0biB7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICB9XG4gIFxuICAuZm9ybS1jb250ZW50IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLm1hdC1kYXRlLXBpY2tlci1jdXN0b20gaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBidXR0b24uYnRuLXByaW1hcnksXG4gIGJ1dHRvbi5idG4tZGVmYXVsdCB7XG4gICAgbWluLXdpZHRoOiAxMTBweDtcbiAgfVxuICAuY2xpY2thYmxlLXRleHQge1xuICAgIGNvbG9yOiAjMmU3ZDMyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgXG4gIC5teS10YXNrcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweDtcbiAgXG4gICAgaDQge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6NTVweDtcbiAgICB9XG4gIFxuICAgIC50YXNrLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGdhcDogNDBweDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICBtYXJnaW4tbGVmdDotNTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDotMTAwcHg7XG4gICAgICBtYXJnaW4tdG9wOi0yMHB4O1xuICBcbiAgICAgIC50YXNrLXNlY3Rpb24ge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA3YmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGhlaWdodDoyMjBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgXG4gICAgICAgIC50YXNrLWhlYWRlciB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLnRhc2stY2FyZHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBcbiAgICAgICAgICAudGFzay1jYXJkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAuY291bnQge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgXG4gICAgICAgICAgICAgICYuYmx1ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgICYucmVkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICAmLmdyZWVuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgICYuYmxhY2sge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAiXX0= */"], data: { animation: [
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


/***/ }),

/***/ 6474:
/*!***************************************************!*\
  !*** ./src/app/pages/task/task-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskRoutingModule": () => (/* binding */ TaskRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-list/task-list.component */ 1729);
/* harmony import */ var _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task/create-task.component */ 9720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_0__.TaskListComponent },
    { path: 'add', component: _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_1__.CreateTaskComponent },
    { path: 'edit/:id', component: _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_1__.CreateTaskComponent },
];
class TaskRoutingModule {
}
TaskRoutingModule.ɵfac = function TaskRoutingModule_Factory(t) { return new (t || TaskRoutingModule)(); };
TaskRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TaskRoutingModule });
TaskRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TaskRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 7465:
/*!*******************************************!*\
  !*** ./src/app/pages/task/task.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskModule": () => (/* binding */ TaskModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _task_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-routing.module */ 6474);
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-list/task-list.component */ 1729);
/* harmony import */ var _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-task/create-task.component */ 9720);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);










class TaskModule {
}
TaskModule.ɵfac = function TaskModule_Factory(t) { return new (t || TaskModule)(); };
TaskModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TaskModule });
TaskModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _task_routing_module__WEBPACK_IMPORTED_MODULE_0__.TaskRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TaskModule, { declarations: [_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_1__.TaskListComponent,
        _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_2__.CreateTaskComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _task_routing_module__WEBPACK_IMPORTED_MODULE_0__.TaskRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__.CollapseModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_task_task_module_ts.js.map