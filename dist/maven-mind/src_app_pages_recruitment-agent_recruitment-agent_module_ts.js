"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_recruitment-agent_recruitment-agent_module_ts"],{

/***/ 6840:
/*!****************************************************************************!*\
  !*** ./src/app/pages/recruitment-agent/agent-form/agent-form.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgentFormComponent": () => (/* binding */ AgentFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);





function AgentFormComponent_sup_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your first name!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maximum characters should be 25!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_sup_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your last Name!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maximum characters should be 25!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_sup_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your email address!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maximum characters should be 25!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_sup_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your company Name!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maximum characters should be 25!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_sup_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your contactNumber!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maximum characters should be 25!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_sup_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your VAT Registration Number!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maximum characters should be 25!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_sup_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your first UK Address!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maximum characters should be 25!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_sup_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your Non Uk Address Company address!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maximum characters should be 25!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_sup_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your Compliance Check / Refferer!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maximum characters should be 25!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_sup_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter your first restrictedCountries!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_small_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Maximum characters should be 25!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_sup_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentFormComponent_sup_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AgentFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.displayValidation = true;
        this.ukInstitutions = [
            { id: 1, name: 'University of London' },
            { id: 2, name: 'Oxford University' },
            { id: 3, name: 'Imperial College London' },
            // Add more UK institutions here
        ];
        // List of institutions outside the UK
        this.outsideUkInstitutions = [
            { id: 1, name: 'Harvard University' },
            { id: 2, name: 'Stanford University' },
            { id: 3, name: 'University of Sydney' },
            // Add more outside UK institutions here
        ];
        // Selected values for UK institutions
        this.selectedUkInstitutions = [];
        // Selected values for institutions outside the UK
        this.selectedOutsideUkInstitutions = [];
    }
    ngOnInit() {
        this.agentForm = this.fb.group({
            agentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            registrationDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            contactNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            vatRegistrationNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            ukAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            nonUkAddress: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
            complianceCheck: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            restrictedCountries: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            dbsCheckFile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            agentListFile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            institutionsUK: [[]],
            institutionsOutsideUK: [[]]
        });
    }
    onFileChange(event, field) {
        if (event.target.files.length > 0) {
            this.agentForm.patchValue({ [field]: event.target.files[0] });
        }
    }
    onSubmit() {
        if (this.agentForm.valid) {
            console.log('Form Submitted:', this.agentForm.value);
        }
        else {
            console.log('Form is invalid');
        }
    }
    closeForm() { }
}
AgentFormComponent.ɵfac = function AgentFormComponent_Factory(t) { return new (t || AgentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
AgentFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgentFormComponent, selectors: [["app-agent-form"]], decls: 111, vars: 38, consts: [[1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "position-absolute", 2, "top", "2px", "right", "10px", "cursor", "pointer", "color", "white"], [1, "fa", "fa-times", 3, "click"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "row", "mt-3"], [1, "col-md-4"], [1, "form-group"], ["for", "firstName"], [4, "ngIf"], ["type", "text", "name", "firstName", "formControlName", "firstName", "alphaOnly", "", 1, "form-control"], ["class", "form-text text-muted danger", 4, "ngIf"], ["for", "lastName"], ["type", "text", "formControlName", "lastName", "id", "lastName", 1, "form-control"], ["for", "email"], ["type", "text", "name", "email", "formControlName", "email", 1, "form-control"], ["for", "companyName"], ["type", "text", "name", "companyName", "formControlName", "companyName", "alphaOnly", "", 1, "form-control"], ["for", "contactNumber"], ["type", "text", "name", "contactNumber", "formControlName", "contactNumber", 1, "form-control"], ["for", "vatRegistrationNumber"], ["type", "text", "formControlName", "vatRegistrationNumber", "id", "vatRegistrationNumber", 1, "form-control"], ["for", "ukAddress"], ["type", "text", "name", "ukAddress", "formControlName", "ukAddress", "alphaOnly", "", 1, "form-control"], ["for", "nonUkAddress"], ["type", "text", "name", "nonUkAddress", "formControlName", "nonUkAddress", 1, "form-control"], ["for", "complianceCheck"], ["type", "text", "formControlName", "complianceCheck", "id", "complianceCheck", 1, "form-control"], ["for", "restrictedCountries"], ["type", "text", "name", "restrictedCountries", "formControlName", "restrictedCountries", "alphaOnly", "", 1, "form-control"], ["for", "institutionsUK"], ["bindLabel", "name", "bindValue", "id", "formControlName", "institutionsUK", "placeholder", "Select institutions in the UK", 3, "items", "multiple"], ["for", "institutionsOutsideUK"], ["bindLabel", "name", "bindValue", "id", "formControlName", "institutionsOutsideUK", "placeholder", "Select institutions outside the UK", 3, "items", "multiple"], [1, "form-buttons", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary"], [1, "form-text", "text-muted", "danger"]], template: function AgentFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4)(7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgentFormComponent_Template_i_click_7_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AgentFormComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "First Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AgentFormComponent_sup_15_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AgentFormComponent_small_17_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AgentFormComponent_small_18_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9)(20, "div", 10)(21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AgentFormComponent_sup_23_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AgentFormComponent_small_25_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AgentFormComponent_small_26_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9)(28, "div", 10)(29, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AgentFormComponent_sup_31_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AgentFormComponent_small_33_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AgentFormComponent_small_34_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8)(36, "div", 9)(37, "div", 10)(38, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Company Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AgentFormComponent_sup_40_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AgentFormComponent_small_42_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AgentFormComponent_small_43_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9)(45, "div", 10)(46, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Contact Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AgentFormComponent_sup_48_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AgentFormComponent_small_50_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AgentFormComponent_small_51_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9)(53, "div", 10)(54, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "VAT Registration Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AgentFormComponent_sup_56_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AgentFormComponent_small_58_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AgentFormComponent_small_59_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8)(61, "div", 9)(62, "div", 10)(63, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "UK Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AgentFormComponent_sup_65_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AgentFormComponent_small_67_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, AgentFormComponent_small_68_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 9)(70, "div", 10)(71, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Non Uk Company Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, AgentFormComponent_sup_73_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AgentFormComponent_small_75_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, AgentFormComponent_small_76_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 9)(78, "div", 10)(79, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Compliance Check / Refferer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, AgentFormComponent_sup_81_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, AgentFormComponent_small_83_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, AgentFormComponent_small_84_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 8)(86, "div", 9)(87, "div", 10)(88, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Restricted Countries:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, AgentFormComponent_sup_90_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, AgentFormComponent_small_92_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, AgentFormComponent_small_93_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 9)(95, "div", 10)(96, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Institutions that you work with in the UK:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, AgentFormComponent_sup_98_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "ng-select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 9)(101, "div", 10)(102, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Institutions that you work with outside the UK:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, AgentFormComponent_sup_104_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "ng-select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 37)(107, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_11_0;
        let tmp_12_0;
        let tmp_14_0;
        let tmp_15_0;
        let tmp_17_0;
        let tmp_18_0;
        let tmp_20_0;
        let tmp_21_0;
        let tmp_23_0;
        let tmp_24_0;
        let tmp_26_0;
        let tmp_27_0;
        let tmp_29_0;
        let tmp_30_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.agentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.agentForm.get("firstName")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]) && (((tmp_2_0 = ctx.agentForm.get("firstName")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.agentForm.get("firstName")) == null ? null : tmp_2_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.agentForm.get("firstName")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["maxlength"]) && ((tmp_3_0 = ctx.agentForm.get("firstName")) == null ? null : tmp_3_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.agentForm.get("lastName")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]) && (((tmp_5_0 = ctx.agentForm.get("lastName")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.agentForm.get("lastName")) == null ? null : tmp_5_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.agentForm.get("lastName")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["maxlength"]) && ((tmp_6_0 = ctx.agentForm.get("lastName")) == null ? null : tmp_6_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.agentForm.get("email")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["required"]) && (((tmp_8_0 = ctx.agentForm.get("email")) == null ? null : tmp_8_0.dirty) || ((tmp_8_0 = ctx.agentForm.get("email")) == null ? null : tmp_8_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.agentForm.get("email")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["maxlength"]) && ((tmp_9_0 = ctx.agentForm.get("email")) == null ? null : tmp_9_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.agentForm.get("companyName")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]) && (((tmp_11_0 = ctx.agentForm.get("companyName")) == null ? null : tmp_11_0.dirty) || ((tmp_11_0 = ctx.agentForm.get("companyName")) == null ? null : tmp_11_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.agentForm.get("companyName")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["maxlength"]) && ((tmp_12_0 = ctx.agentForm.get("companyName")) == null ? null : tmp_12_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.agentForm.get("contactNumber")) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors["required"]) && (((tmp_14_0 = ctx.agentForm.get("contactNumber")) == null ? null : tmp_14_0.dirty) || ((tmp_14_0 = ctx.agentForm.get("contactNumber")) == null ? null : tmp_14_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx.agentForm.get("contactNumber")) == null ? null : tmp_15_0.errors == null ? null : tmp_15_0.errors["maxlength"]) && ((tmp_15_0 = ctx.agentForm.get("contactNumber")) == null ? null : tmp_15_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_17_0 = ctx.agentForm.get("vatRegistrationNumber")) == null ? null : tmp_17_0.errors == null ? null : tmp_17_0.errors["required"]) && (((tmp_17_0 = ctx.agentForm.get("vatRegistrationNumber")) == null ? null : tmp_17_0.dirty) || ((tmp_17_0 = ctx.agentForm.get("vatRegistrationNumber")) == null ? null : tmp_17_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_18_0 = ctx.agentForm.get("vatRegistrationNumber")) == null ? null : tmp_18_0.errors == null ? null : tmp_18_0.errors["maxlength"]) && ((tmp_18_0 = ctx.agentForm.get("vatRegistrationNumber")) == null ? null : tmp_18_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_20_0 = ctx.agentForm.get("ukAddress")) == null ? null : tmp_20_0.errors == null ? null : tmp_20_0.errors["required"]) && (((tmp_20_0 = ctx.agentForm.get("ukAddress")) == null ? null : tmp_20_0.dirty) || ((tmp_20_0 = ctx.agentForm.get("ukAddress")) == null ? null : tmp_20_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_21_0 = ctx.agentForm.get("ukAddress")) == null ? null : tmp_21_0.errors == null ? null : tmp_21_0.errors["maxlength"]) && ((tmp_21_0 = ctx.agentForm.get("ukAddress")) == null ? null : tmp_21_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_23_0 = ctx.agentForm.get("nonUkAddress")) == null ? null : tmp_23_0.errors == null ? null : tmp_23_0.errors["required"]) && (((tmp_23_0 = ctx.agentForm.get("nonUkAddress")) == null ? null : tmp_23_0.dirty) || ((tmp_23_0 = ctx.agentForm.get("nonUkAddress")) == null ? null : tmp_23_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_24_0 = ctx.agentForm.get("nonUkAddress")) == null ? null : tmp_24_0.errors == null ? null : tmp_24_0.errors["maxlength"]) && ((tmp_24_0 = ctx.agentForm.get("nonUkAddress")) == null ? null : tmp_24_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_26_0 = ctx.agentForm.get("complianceCheck")) == null ? null : tmp_26_0.errors == null ? null : tmp_26_0.errors["required"]) && (((tmp_26_0 = ctx.agentForm.get("complianceCheck")) == null ? null : tmp_26_0.dirty) || ((tmp_26_0 = ctx.agentForm.get("complianceCheck")) == null ? null : tmp_26_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_27_0 = ctx.agentForm.get("complianceCheck")) == null ? null : tmp_27_0.errors == null ? null : tmp_27_0.errors["maxlength"]) && ((tmp_27_0 = ctx.agentForm.get("complianceCheck")) == null ? null : tmp_27_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_29_0 = ctx.agentForm.get("restrictedCountries")) == null ? null : tmp_29_0.errors == null ? null : tmp_29_0.errors["required"]) && (((tmp_29_0 = ctx.agentForm.get("restrictedCountries")) == null ? null : tmp_29_0.dirty) || ((tmp_29_0 = ctx.agentForm.get("restrictedCountries")) == null ? null : tmp_29_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_30_0 = ctx.agentForm.get("restrictedCountries")) == null ? null : tmp_30_0.errors == null ? null : tmp_30_0.errors["maxlength"]) && ((tmp_30_0 = ctx.agentForm.get("restrictedCountries")) == null ? null : tmp_30_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.ukInstitutions)("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.outsideUkInstitutions)("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.agentForm.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__.NgSelectComponent], styles: [".form-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: auto;\n  padding: 20px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n}\n\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n\nng-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW50LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUFFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFJQTtFQUNFLFdBQUE7QUFERiIsImZpbGUiOiJhZ2VudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAuZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbn1cblxuLnJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cblxubmctc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 2788:
/*!****************************************************************************!*\
  !*** ./src/app/pages/recruitment-agent/agent-list/agent-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgentListComponent": () => (/* binding */ AgentListComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);







function AgentListComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 32);
} }
function AgentListComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
function AgentListComponent_option_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6)("selected", option_r6 === ctx_r2.page.perPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r6);
} }
function AgentListComponent_ngx_datatable_column_70_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r10 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r10.name);
} }
function AgentListComponent_ngx_datatable_column_70_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r11 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r11);
} }
function AgentListComponent_ngx_datatable_column_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable-column", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AgentListComponent_ngx_datatable_column_70_ng_template_1_Template, 2, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AgentListComponent_ngx_datatable_column_70_ng_template_2_Template, 2, 1, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", col_r7.name)("prop", col_r7.prop)("sortable", false);
} }
function AgentListComponent_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AgentListComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39)(1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgentListComponent_ng_template_73_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const row_r14 = restoredCtx.row; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.editAgent(row_r14)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgentListComponent_ng_template_73_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const row_r14 = restoredCtx.row; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.deleteAgent(row_r14)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class AgentListComponent {
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
}
AgentListComponent.ɵfac = function AgentListComponent_Factory(t) { return new (t || AgentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AgentListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgentListComponent, selectors: [["app-agent-list"]], decls: 74, vars: 24, consts: [[1, "d-flex", "mt-3", "mb-3", "justify-content-end"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["autocomplete", "off", "novalidate", "", 1, "form", "w-100", 2, "margin", "20px 0px", 3, "formGroup", "ngSubmit"], [1, "form-content", "search-filter-block", "position-relative"], [1, "sub-title", "search-agent-title"], ["aria-controls", "collapseBasic", "type", "button", 1, "btn", "plus-btn", "position-absolute", 2, "max-width", "42px", "top", "42px", "right", "20px", "min-width", "unset", "background-color", "#05a853", "border", "#05a853", 3, "click"], ["class", "bi bi-plus", 4, "ngIf"], ["class", "bi bi-dash", 4, "ngIf"], [1, "row"], [1, "field-block", "w-100"], [1, "col-12", 2, "color", "#808382"], [1, "row", 2, "padding-right", "100px"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "form-group"], ["for", "agent_id"], ["type", "text", "id", "agent_id", "formControlName", "agent_id", 1, "form-control"], ["id", "collapseBasic"], [1, "row", 2, "padding-right", "100px", "margin-top", "20px"], ["for", "created_by"], ["type", "text", "id", "created_by", "formControlName", "created_by", 1, "form-control"], [1, "d-flex", "justify-content-center", "mt-3"], ["type", "submit", 1, "btn", "btn-primary", "mx-2", 2, "background-color", "#05a853", "border", "#05a853"], ["type", "button", 1, "btn", "btn-default", "mx-2", 3, "disabled", "click"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], ["for", "perPageSelect", 1, "me-2"], ["id", "perPageSelect", 1, "form-select", "me-2", 2, "width", "auto", "display", "inline-block", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "bootstrap", "custom-table", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarH", "limit", "count", "offset", "externalPaging", "page"], [3, "name", "prop", "sortable", 4, "ngFor", "ngForOf"], ["name", "Action", 3, "width"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], [1, "bi", "bi-plus"], [1, "bi", "bi-dash"], [3, "value", "selected"], [3, "name", "prop", "sortable"], [1, "mgx-header"], [1, "text-center"], [1, "mgx-header", "text-center"], [1, "d-flex", "justify-content-center", "gap-2"], [1, "btn", "btn-sm", "btn-primary", 2, "min-width", "60px", "padding", "5px 10px", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-sm", "btn-danger", 2, "min-width", "60px", "padding", "5px 10px", 3, "click"], [1, "bi", "bi-trash"]], template: function AgentListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgentListComponent_Template_button_click_1_listener() { return ctx.addNewAgent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+ Add new agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AgentListComponent_Template_form_ngSubmit_3_listener() { return ctx.onSelectFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "strong", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Search Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgentListComponent_Template_button_click_7_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AgentListComponent_i_8_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AgentListComponent_i_9_Template, 1, 0, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "agent Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12)(25, "div", 13)(26, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12)(30, "div", 13)(31, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Preffered Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16)(35, "div", 17)(36, "div", 12)(37, "div", 13)(38, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12)(42, "div", 13)(43, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12)(47, "div", 13)(48, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12)(52, "div", 13)(53, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Created By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20)(57, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgentListComponent_Template_button_click_59_listener() { return ctx.onResetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23)(62, "div")(63, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AgentListComponent_Template_select_change_65_listener($event) { return ctx.updatePerPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AgentListComponent_option_66_Template, 2, 3, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ngx-datatable", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function AgentListComponent_Template_ngx_datatable_page_69_listener($event) { return ctx.setPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AgentListComponent_ngx_datatable_column_70_Template, 3, 3, "ngx-datatable-column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ngx-datatable-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, AgentListComponent_ng_template_72_Template, 2, 0, "ng-template", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, AgentListComponent_ng_template_73_Template, 5, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnCellDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: [".search-agent-title[_ngcontent-%COMP%] {\n  color: #00b5e9;\n  position: absolute;\n  top: 0;\n  left: 73px;\n  transform: translate(-50%, -50%);\n  background: white;\n  padding: 0 10px;\n  font-size: 16px;\n  font: 400 1rem/19px \"Poppins\", Arial, Helvetica, sans-serif;\n  text-transform: capitalize;\n  background: #fff;\n  position: absolute;\n  padding: 0 15px;\n  color: #00b5e9;\n}\n\n.plus-btn[_ngcontent-%COMP%] {\n  top: 10px;\n  right: 15px;\n}\n\n.form-content[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 20px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.mat-date-picker-custom[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton.btn-primary[_ngcontent-%COMP%], button.btn-default[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n\n.clickable-text[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  cursor: pointer;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW50LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDJEQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFRiIsImZpbGUiOiJhZ2VudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1hZ2VudC10aXRsZSB7XG4gIGNvbG9yOiAjMDBiNWU5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNzNweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udDogNDAwIDFyZW0gLyAxOXB4IFwiUG9wcGluc1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGNvbG9yOiAjMDBiNWU5O1xufVxuXG4ucGx1cy1idG4ge1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxNXB4O1xufVxuXG4uZm9ybS1jb250ZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXQtZGF0ZS1waWNrZXItY3VzdG9tIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbi5idG4tcHJpbWFyeSxcbmJ1dHRvbi5idG4tZGVmYXVsdCB7XG4gIG1pbi13aWR0aDogMTEwcHg7XG59XG4uY2xpY2thYmxlLXRleHQge1xuICBjb2xvcjogIzJlN2QzMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuIl19 */"], data: { animation: [
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

/***/ 2164:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/recruitment-agent/recruitment-agent-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecruitmentAgentRoutingModule": () => (/* binding */ RecruitmentAgentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _agent_list_agent_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agent-list/agent-list.component */ 2788);
/* harmony import */ var _agent_form_agent_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agent-form/agent-form.component */ 6840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _agent_list_agent_list_component__WEBPACK_IMPORTED_MODULE_0__.AgentListComponent },
    { path: 'add', component: _agent_form_agent_form_component__WEBPACK_IMPORTED_MODULE_1__.AgentFormComponent },
    { path: 'edit/:id', component: _agent_form_agent_form_component__WEBPACK_IMPORTED_MODULE_1__.AgentFormComponent },
];
class RecruitmentAgentRoutingModule {
}
RecruitmentAgentRoutingModule.ɵfac = function RecruitmentAgentRoutingModule_Factory(t) { return new (t || RecruitmentAgentRoutingModule)(); };
RecruitmentAgentRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RecruitmentAgentRoutingModule });
RecruitmentAgentRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RecruitmentAgentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 2197:
/*!************************************************************************!*\
  !*** ./src/app/pages/recruitment-agent/recruitment-agent.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecruitmentAgentComponent": () => (/* binding */ RecruitmentAgentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class RecruitmentAgentComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecruitmentAgentComponent.ɵfac = function RecruitmentAgentComponent_Factory(t) { return new (t || RecruitmentAgentComponent)(); };
RecruitmentAgentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecruitmentAgentComponent, selectors: [["app-recruitment-agent"]], decls: 2, vars: 0, template: function RecruitmentAgentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "recruitment-agent works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNydWl0bWVudC1hZ2VudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3193:
/*!*********************************************************************!*\
  !*** ./src/app/pages/recruitment-agent/recruitment-agent.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecruitmentAgentModule": () => (/* binding */ RecruitmentAgentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _recruitment_agent_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recruitment-agent-routing.module */ 2164);
/* harmony import */ var _recruitment_agent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recruitment-agent.component */ 2197);
/* harmony import */ var _agent_list_agent_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agent-list/agent-list.component */ 2788);
/* harmony import */ var _agent_form_agent_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agent-form/agent-form.component */ 6840);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);











class RecruitmentAgentModule {
}
RecruitmentAgentModule.ɵfac = function RecruitmentAgentModule_Factory(t) { return new (t || RecruitmentAgentModule)(); };
RecruitmentAgentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RecruitmentAgentModule });
RecruitmentAgentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _recruitment_agent_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecruitmentAgentRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RecruitmentAgentModule, { declarations: [_recruitment_agent_component__WEBPACK_IMPORTED_MODULE_1__.RecruitmentAgentComponent,
        _agent_list_agent_list_component__WEBPACK_IMPORTED_MODULE_2__.AgentListComponent,
        _agent_form_agent_form_component__WEBPACK_IMPORTED_MODULE_3__.AgentFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _recruitment_agent_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecruitmentAgentRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__.CollapseModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_recruitment-agent_recruitment-agent_module_ts.js.map