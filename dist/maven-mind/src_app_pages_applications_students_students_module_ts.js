"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_applications_students_students_module_ts"],{

/***/ 6155:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/applications/students/students-create/students-create.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsCreateComponent": () => (/* binding */ StudentsCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/services/api-client.service */ 9228);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);






function StudentsCreateComponent_sup_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter the student's name! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_sup_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter the student's surname! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_sup_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_small_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter the student's email! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_sup_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_small_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter the student's nationality! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_sup_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_small_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter the student's birth date! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_sup_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_small_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter the student's birth place! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_sup_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_small_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter the passport start date! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_sup_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_small_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter the passport expiry date! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_sup_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_small_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter the student's passport status! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_sup_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_small_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter the student's phone no! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_sup_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function StudentsCreateComponent_small_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter the student's gender! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class StudentsCreateComponent {
    constructor(fb, location, apiClient, toastr) {
        this.fb = fb;
        this.location = location;
        this.apiClient = apiClient;
        this.toastr = toastr;
        this.displayValidation = true;
        this.studentForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            nationality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            date_of_birth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            place_of_birth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            passport_start_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            passport_expiry_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            passport_status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            phone_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
    }
    ngOnInit() {
        this.dataForEdit = history.state;
        if (!!this.dataForEdit.row) {
            this.studentForm.patchValue({
                name: this.dataForEdit.row.name,
                surname: this.dataForEdit.row.surname,
                email: this.dataForEdit.row.email,
                nationality: this.dataForEdit.row.nationality,
                date_of_birth: this.dataForEdit.row.date_of_birth,
                place_of_birth: this.dataForEdit.row.place_of_birth,
                passport_start_date: this.dataForEdit.row.passport_start_date,
                passport_expiry_date: this.dataForEdit.row.passport_expiry_date,
                passport_status: this.dataForEdit.row.passport_status,
                phone_no: this.dataForEdit.row.phone_no,
                gender: this.dataForEdit.row.gender,
            });
        }
    }
    onSubmit() {
        if (this.studentForm.valid) {
            if (!!this.dataForEdit.row) {
                const queryParams = new URLSearchParams({
                    id: this.dataForEdit.row.id,
                    ...this.studentForm.value,
                }).toString();
                this.apiClient
                    .post(`student/update?${queryParams}`)
                    .subscribe((resp) => {
                    if (resp.status) {
                        this.location.back();
                    }
                    else {
                    }
                });
            }
            else {
                const queryParams = new URLSearchParams({
                    ...this.studentForm.value,
                }).toString();
                this.apiClient
                    .post(`student/insert?${queryParams}`)
                    .toPromise()
                    .then((resp) => {
                    if (resp.status) {
                        this.location.back();
                    }
                })
                    .catch((error) => {
                    console.log('Error:', error);
                    this.toastr.error(`<span title="${this.getErrorMessageFromResponse(error.error)}">${this.getErrorMessageFromResponse(error.error)}</span>`, 'Error', { enableHtml: true });
                })
                    .catch((error) => { });
            }
        }
        else {
            console.log('Form is invalid');
        }
    }
    getErrorMessageFromResponse(resp) {
        const firstKey = Object.keys(resp.error)[0];
        const firstErrorMessage = resp.error[firstKey][0];
        return firstErrorMessage;
    }
    closeForm() {
        this.location.back();
    }
}
StudentsCreateComponent.ɵfac = function StudentsCreateComponent_Factory(t) { return new (t || StudentsCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_0__.ApiClientService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService)); };
StudentsCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StudentsCreateComponent, selectors: [["app-students-create"]], decls: 93, vars: 25, consts: [[1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "position-absolute", 2, "right", "10px", "cursor", "pointer", "color", "white"], [1, "fa", "fa-times", 3, "click"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "row", "mt-3"], [1, "col-md-4"], [1, "form-group"], [4, "ngIf"], ["type", "text", "formControlName", "name", 1, "form-control"], ["class", "form-text text-muted danger", 4, "ngIf"], ["type", "text", "formControlName", "surname", 1, "form-control"], ["type", "text", "formControlName", "email", 1, "form-control"], ["type", "text", "formControlName", "nationality", 1, "form-control"], ["type", "date", "formControlName", "date_of_birth", 1, "form-control"], ["type", "text", "formControlName", "place_of_birth", 1, "form-control"], ["type", "date", "formControlName", "passport_start_date", 1, "form-control"], ["type", "date", "formControlName", "passport_expiry_date", 1, "form-control"], ["type", "text", "formControlName", "passport_status", 1, "form-control"], ["type", "text", "formControlName", "phone_no", 1, "form-control"], ["type", "text", "formControlName", "gender", 1, "form-control"], [1, "form-buttons", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", "submit-button", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", "cancel-button", 3, "click"], [1, "form-text", "text-muted", "danger"]], template: function StudentsCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4)(7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StudentsCreateComponent_Template_i_click_7_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function StudentsCreateComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, StudentsCreateComponent_sup_15_Template, 2, 0, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, StudentsCreateComponent_small_17_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9)(19, "div", 10)(20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Surname:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, StudentsCreateComponent_sup_22_Template, 2, 0, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, StudentsCreateComponent_small_24_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9)(26, "div", 10)(27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, StudentsCreateComponent_sup_29_Template, 2, 0, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, StudentsCreateComponent_small_31_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9)(33, "div", 10)(34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Nationality:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, StudentsCreateComponent_sup_36_Template, 2, 0, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, StudentsCreateComponent_small_38_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 9)(40, "div", 10)(41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Date of Birth:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, StudentsCreateComponent_sup_43_Template, 2, 0, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, StudentsCreateComponent_small_45_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 9)(47, "div", 10)(48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Place of Birth:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, StudentsCreateComponent_sup_50_Template, 2, 0, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, StudentsCreateComponent_small_52_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 9)(54, "div", 10)(55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Passport Start Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, StudentsCreateComponent_sup_57_Template, 2, 0, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, StudentsCreateComponent_small_59_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 9)(61, "div", 10)(62, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Passport Expiry Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, StudentsCreateComponent_sup_64_Template, 2, 0, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, StudentsCreateComponent_small_66_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 9)(68, "div", 10)(69, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Passport Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, StudentsCreateComponent_sup_71_Template, 2, 0, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, StudentsCreateComponent_small_73_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 9)(75, "div", 10)(76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Phone No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, StudentsCreateComponent_sup_78_Template, 2, 0, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, StudentsCreateComponent_small_80_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 9)(82, "div", 10)(83, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, StudentsCreateComponent_sup_85_Template, 2, 0, "sup", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, StudentsCreateComponent_small_87_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 24)(89, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StudentsCreateComponent_Template_button_click_89_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StudentsCreateComponent_Template_button_click_91_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        let tmp_3_0;
        let tmp_5_0;
        let tmp_7_0;
        let tmp_9_0;
        let tmp_11_0;
        let tmp_13_0;
        let tmp_15_0;
        let tmp_17_0;
        let tmp_19_0;
        let tmp_21_0;
        let tmp_23_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", !!ctx.dataForEdit.row ? "Edit" : "Add", " Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.studentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.studentForm.get("name")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]) && ((tmp_3_0 = ctx.studentForm.get("name")) == null ? null : tmp_3_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.studentForm.get("surname")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]) && ((tmp_5_0 = ctx.studentForm.get("surname")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.studentForm.get("email")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]) && ((tmp_7_0 = ctx.studentForm.get("email")) == null ? null : tmp_7_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.studentForm.get("nationality")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["required"]) && ((tmp_9_0 = ctx.studentForm.get("nationality")) == null ? null : tmp_9_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.studentForm.get("date_of_birth")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]) && ((tmp_11_0 = ctx.studentForm.get("date_of_birth")) == null ? null : tmp_11_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.studentForm.get("place_of_birth")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors["required"]) && ((tmp_13_0 = ctx.studentForm.get("place_of_birth")) == null ? null : tmp_13_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx.studentForm.get("passport_start_date")) == null ? null : tmp_15_0.errors == null ? null : tmp_15_0.errors["required"]) && ((tmp_15_0 = ctx.studentForm.get("passport_start_date")) == null ? null : tmp_15_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_17_0 = ctx.studentForm.get("passport_expiry_date")) == null ? null : tmp_17_0.errors == null ? null : tmp_17_0.errors["required"]) && ((tmp_17_0 = ctx.studentForm.get("passport_expiry_date")) == null ? null : tmp_17_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_19_0 = ctx.studentForm.get("passport_status")) == null ? null : tmp_19_0.errors == null ? null : tmp_19_0.errors["required"]) && ((tmp_19_0 = ctx.studentForm.get("passport_status")) == null ? null : tmp_19_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_21_0 = ctx.studentForm.get("phone_no")) == null ? null : tmp_21_0.errors == null ? null : tmp_21_0.errors["required"]) && ((tmp_21_0 = ctx.studentForm.get("phone_no")) == null ? null : tmp_21_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_23_0 = ctx.studentForm.get("gender")) == null ? null : tmp_23_0.errors == null ? null : tmp_23_0.errors["required"]) && ((tmp_23_0 = ctx.studentForm.get("gender")) == null ? null : tmp_23_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.studentForm.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".form-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: auto;\n  padding: 20px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n}\n\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n\nng-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  background-color: #05a853;\n  color: #ffffff;\n  border: #05a853;\n  width: 110px;\n}\n\n.cancel-button[_ngcontent-%COMP%]:hover {\n  background-color: #08783e;\n  border: #08783e;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  background-color: #00b5e9;\n  color: #ffffff;\n  border: #00b5e9;\n  width: 110px;\n}\n\n.submit-button[_ngcontent-%COMP%]:hover {\n  background-color: #0681a2;\n  border: #0681a2;\n}\n\n.submit-button[_ngcontent-%COMP%]:disabled {\n  background-color: #8f8f8f;\n  border-color: #8f8f8f;\n  color: #5a4e4e !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnRzLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBQUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUlBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQURGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBSEYiLCJmaWxlIjoic3R1ZGVudHMtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAuZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbn1cblxuLnJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cblxubmctc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYW5jZWwtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTg1MztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogIzA1YTg1MztcbiAgd2lkdGg6IDExMHB4O1xufVxuXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODc4M2U7XG4gIGJvcmRlcjogIzA4NzgzZTtcbn1cblxuXG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojMDBiNWU5O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAjMDBiNWU5O1xuICB3aWR0aDogMTEwcHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2ODFhMjtcbiAgYm9yZGVyOiAjMDY4MWEyO1xufVxuXG4uc3VibWl0LWJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZjhmOGY7XG4gIGJvcmRlci1jb2xvcjojOGY4ZjhmIDtcbiAgY29sb3I6ICM1YTRlNGUgIWltcG9ydGFudFxuIH0iXX0= */"] });


/***/ }),

/***/ 3597:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/applications/students/students-list/students-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsListComponent": () => (/* binding */ StudentsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/dialogs/confirm-dialog/confirm-dialog.component */ 8975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/api-client.service */ 9228);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);










function StudentsListComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r4)("selected", option_r4 === ctx_r0.page.perPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", option_r4, " ");
} }
function StudentsListComponent_ngx_datatable_column_35_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r8 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](column_r8.name);
} }
function StudentsListComponent_ngx_datatable_column_35_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentsListComponent_ngx_datatable_column_35_ng_template_2_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().row; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.onStudentNameClick(row_r10.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", value_r9, " ");
} }
function StudentsListComponent_ngx_datatable_column_35_ng_template_2_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 1, row_r10.created_at, "short"));
} }
function StudentsListComponent_ngx_datatable_column_35_ng_template_2_ng_template_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 1, row_r10.updated_at, "short"));
} }
function StudentsListComponent_ngx_datatable_column_35_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, StudentsListComponent_ngx_datatable_column_35_ng_template_2_ng_template_1_div_2_Template, 4, 4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, StudentsListComponent_ngx_datatable_column_35_ng_template_2_ng_template_1_div_3_Template, 4, 4, "div", 34);
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const value_r9 = ctx_r23.value;
    const column_r11 = ctx_r23.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](value_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", column_r11.name === "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", column_r11.name === "Updated By");
} }
function StudentsListComponent_ngx_datatable_column_35_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, StudentsListComponent_ngx_datatable_column_35_ng_template_2_div_0_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StudentsListComponent_ngx_datatable_column_35_ng_template_2_ng_template_1_Template, 4, 3, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const column_r11 = ctx.column;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", column_r11.name === "Student Name")("ngIfElse", _r13);
} }
function StudentsListComponent_ngx_datatable_column_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-datatable-column", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StudentsListComponent_ngx_datatable_column_35_ng_template_1_Template, 2, 1, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, StudentsListComponent_ngx_datatable_column_35_ng_template_2_Template, 3, 2, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", col_r5.name)("prop", col_r5.prop)("sortable", false);
} }
function StudentsListComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function StudentsListComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36)(1, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function StudentsListComponent_ng_template_38_Template_input_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const row_r24 = restoredCtx.row; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.onCheckboxChange($event, row_r24)); })("click", function StudentsListComponent_ng_template_38_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentsListComponent_ng_template_38_Template_i_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const row_r24 = restoredCtx.row; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.editStudent(row_r24)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentsListComponent_ng_template_38_Template_i_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const row_r24 = restoredCtx.row; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.onDeleteStudent(row_r24)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class StudentsListComponent {
    constructor(router, fb, apiClient, dialog, toastr) {
        this.router = router;
        this.fb = fb;
        this.apiClient = apiClient;
        this.dialog = dialog;
        this.toastr = toastr;
        this.name = '';
        this.email = '';
        this.page = {
            perPage: 10,
            page: 1,
            total: 0,
        };
        this.perPageOptions = [10, 25, 50, 100];
        this.columns = [
            { name: 'Student ID', prop: 'student_id' },
            { name: 'Student Name', prop: 'name' },
            { name: 'Student Email', prop: 'email' },
            { name: 'Date Of Birth', prop: 'date_of_birth' },
            { name: 'Gender', prop: 'gender' },
            { name: 'Location', prop: 'nationality' },
            { name: 'Created By', prop: 'created_by' },
            { name: 'Updated By', prop: 'updated_by' },
        ];
        this.rows = [];
        this.buildForm();
    }
    buildForm() {
        this.studentForm = this.fb.group({
            name: [''],
            email: [''],
        });
    }
    ngOnInit() {
        this.studentForm.controls['name'].valueChanges.subscribe((value) => {
            if (value === '') {
                this.clearFilterValues();
                this.getStudents();
            }
            else if (!!value) {
                this.studentForm.controls['email'].setValue(null);
            }
        });
        this.studentForm.controls['email'].valueChanges.subscribe((value) => {
            if (value === '') {
                this.clearFilterValues();
                this.getStudents();
            }
            else if (!!value) {
                this.studentForm.controls['name'].setValue(null);
            }
        });
        this.getStudents();
    }
    clearFilterValues() {
        this.name = '';
        this.email = '';
    }
    onApplyFilters() {
        if (!!this.studentForm.controls['name'].value) {
            this.name = this.studentForm.controls['name'].value;
            this.email = '';
        }
        else if (!!this.studentForm.controls['email'].value) {
            this.email = this.studentForm.controls['email'].value;
            this.name = '';
        }
        this.getStudents();
    }
    getStudents() {
        this.apiClient
            .get('students', {
            pagination: 1,
            page: this.page.page,
            per_page: this.page.perPage,
            name: this.name,
            email: this.email,
        })
            .subscribe((resp) => {
            this.page.total = resp.result.total;
            this.rows = resp.result.data;
        });
    }
    addNewStudent() {
        this.router.navigateByUrl(`/applications/students/add`);
    }
    onResetFilters() {
        this.clearFilterValues();
        this.studentForm.controls['name'].setValue(null);
        this.studentForm.controls['email'].setValue(null);
        this.getStudents();
    }
    setPage(pageInfo) {
        this.page.page = pageInfo.offset + 1;
        this.getStudents();
    }
    updatePerPage(event) {
        this.page.perPage = event.target.value;
        this.getStudents();
    }
    getTotalPages() {
        return Math.ceil(this.page.total / this.page.perPage);
    }
    onStudentNameClick(studentId) {
        this.router.navigateByUrl(`/applications/students/view/${studentId}`, {
            state: { studentId },
        });
    }
    editStudent(row) {
        this.router.navigateByUrl(`/applications/students/edit/${row.id}`, {
            state: { row },
        });
    }
    onDeleteStudent(row) {
        this.showAlert('warning', 'Delete Student?', 'Do you really want to delete this student.', row.id);
    }
    showAlert(type, title, message, id) {
        const dialogRef = this.dialog.open(shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent, {
            width: '400px',
            panelClass: 'custom-dialog-container',
            backdropClass: 'custom-dialog-backdrop',
            position: { top: '50%', left: '50%' },
            data: { type: type, title: title, message: message },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.deleteStudent(id);
            }
        });
    }
    deleteStudent(id) {
        this.apiClient
            .get(`student/delete/${id}`)
            .toPromise()
            .then((resp) => {
            this.toastr.success('Student Deleted successfully!', 'Success');
            this.getStudents();
        })
            .catch((err) => {
            this.toastr.error(err.error.message, 'Error');
        });
    }
    onCheckboxChange(event, row) {
        console.log('Event and row', event, row);
    }
}
StudentsListComponent.ɵfac = function StudentsListComponent_Factory(t) { return new (t || StudentsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_1__.ApiClientService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
StudentsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StudentsListComponent, selectors: [["app-students-list"]], decls: 39, vars: 17, consts: [[1, "d-flex", "mt-3", "mb-3", "justify-content-end"], ["type", "button", 1, "btn", "btn-secondary", "add-button", 3, "click"], ["autocomplete", "off", "novalidate", "", 1, "form", "w-100", 2, "margin", "20px 0px", 3, "formGroup"], [1, "form-content", "search-filter-block", "position-relative"], [1, "sub-title", "search-student-title"], [1, "position-absolute", "d-flex", 2, "top", "42px", "right", "20px"], ["type", "submit", 1, "btn", "btn-primary", "mx-1", "filter-button", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-outline-secondary", "mx-1", "reset-button", 3, "disabled", "click"], [1, "row"], [1, "field-block", "w-100"], [1, "col-12", 2, "color", "#808382"], [1, "row", 2, "padding-right", "100px"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["for", "email"], ["type", "text", "id", "email", "formControlName", "email", 1, "form-control"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], ["for", "perPageSelect", 1, "me-2", 2, "padding-bottom", "10px", "color", "#000000"], ["id", "perPageSelect", 1, "form-select", "me-2", 2, "width", "auto", "display", "inline-block", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "bootstrap", "custom-table", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarH", "limit", "count", "offset", "externalPaging", "page"], [3, "name", "prop", "sortable", 4, "ngFor", "ngForOf"], ["name", "Action", 3, "width"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], [3, "value", "selected"], [3, "name", "prop", "sortable"], [1, "mgx-header"], ["class", "clickable-text", 3, "click", 4, "ngIf", "ngIfElse"], ["normalCell", ""], [1, "clickable-text", 3, "click"], [1, "text-center"], [4, "ngIf"], [1, "mgx-header", "text-center"], [1, "d-flex", "justify-content-center", "gap-2"], ["type", "checkbox", 2, "cursor", "pointer", "margin-right", "12px", 3, "change", "click"], [1, "bi", "bi-pen", 2, "margin-left", "0", "cursor", "pointer", "margin-right", "10px", 3, "click"], [1, "bi", "bi-x-lg", "text-danger", 2, "font-weight", "bold", "cursor", "pointer", 3, "click"]], template: function StudentsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentsListComponent_Template_button_click_1_listener() { return ctx.addNewStudent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "+ Add new student");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2)(4, "div", 3)(5, "strong", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Search Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentsListComponent_Template_button_click_8_listener() { return ctx.onApplyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentsListComponent_Template_button_click_10_listener() { return ctx.onResetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12)(22, "div", 13)(23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 18)(27, "div")(28, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function StudentsListComponent_Template_select_change_30_listener($event) { return ctx.updatePerPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, StudentsListComponent_option_31_Template, 2, 3, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ngx-datatable", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function StudentsListComponent_Template_ngx_datatable_page_34_listener($event) { return ctx.setPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, StudentsListComponent_ngx_datatable_column_35_Template, 3, 3, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, StudentsListComponent_ng_template_37_Template, 2, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, StudentsListComponent_ng_template_38_Template, 4, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.studentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.studentForm.controls["name"].value && !ctx.studentForm.controls["email"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.studentForm.controls["name"].value && !ctx.studentForm.controls["email"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.perPageOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("columns", ctx.columns)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("scrollbarH", true)("limit", ctx.page.perPage)("count", ctx.page.total)("offset", ctx.page.page - 1)("externalPaging", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 150);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnCellDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".search-student-title[_ngcontent-%COMP%] {\n  color: #00b5e9;\n  position: absolute;\n  top: 0;\n  left: 73px;\n  transform: translate(-50%, -50%);\n  background: white;\n  padding: 0 10px;\n  font-size: 16px;\n  font: 400 1rem/19px \"Poppins\", Arial, Helvetica, sans-serif;\n  text-transform: capitalize;\n  background: #fff;\n  position: absolute;\n  padding: 0 15px;\n  color: #00b5e9;\n}\n\n.plus-btn[_ngcontent-%COMP%] {\n  top: 10px;\n  right: 15px;\n}\n\n.form-content[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 20px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.mat-date-picker-custom[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton.btn-primary[_ngcontent-%COMP%], button.btn-default[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n\n.clickable-text[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  cursor: pointer;\n  text-align: center;\n}\n\n.filter-button[_ngcontent-%COMP%] {\n  background-color: #05a853;\n  color: #ffffff;\n  border: #05a853;\n  width: 110px;\n}\n\n.filter-button[_ngcontent-%COMP%]:hover {\n  background-color: #08783e;\n  border: #08783e;\n}\n\n.filter-button[_ngcontent-%COMP%]:disabled {\n  background-color: #8f8f8f;\n  border-color: #8f8f8f;\n  color: #5a4e4e !important;\n}\n\n.reset-button[_ngcontent-%COMP%] {\n  background-color: #00b5e9;\n  color: #ffffff;\n  border: #00b5e9;\n  width: 110px;\n}\n\n.reset-button[_ngcontent-%COMP%]:hover {\n  background-color: #0681a2;\n  border: #0681a2;\n}\n\n.reset-button[_ngcontent-%COMP%]:disabled {\n  background-color: #8f8f8f;\n  border-color: #8f8f8f;\n  color: #5a4e4e !important;\n}\n\n.add-button[_ngcontent-%COMP%] {\n  background-color: #05a853;\n  color: #ffffff;\n  border: #05a853;\n}\n\n.add-button[_ngcontent-%COMP%]:hover {\n  background-color: #08783e;\n  border: #08783e;\n}\n\n[_nghost-%COMP%]     .btn {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnRzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDJEQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFLQTtFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7QUFGRiIsImZpbGUiOiJzdHVkZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1zdHVkZW50LXRpdGxlIHtcbiAgY29sb3I6ICMwMGI1ZTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA3M3B4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250OiA0MDAgMXJlbSAvIDE5cHggXCJQb3BwaW5zXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgY29sb3I6ICMwMGI1ZTk7XG59XG5cbi5wbHVzLWJ0biB7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbi5mb3JtLWNvbnRlbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1hdC1kYXRlLXBpY2tlci1jdXN0b20gaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uLmJ0bi1wcmltYXJ5LFxuYnV0dG9uLmJ0bi1kZWZhdWx0IHtcbiAgbWluLXdpZHRoOiAxMTBweDtcbn1cbi5jbGlja2FibGUtdGV4dCB7XG4gIGNvbG9yOiAjMmU3ZDMyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cblxuLmZpbHRlci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhODUzO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAjMDVhODUzO1xuICB3aWR0aDogMTEwcHg7XG59XG5cbi5maWx0ZXItYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NzgzZTtcbiAgYm9yZGVyOiAjMDg3ODNlO1xufVxuLmZpbHRlci1idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY4ZjhmO1xuICBib3JkZXItY29sb3I6IzhmOGY4ZiA7XG4gIGNvbG9yOiAjNWE0ZTRlICFpbXBvcnRhbnRcbiB9XG5cblxuLnJlc2V0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IzAwYjVlOTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogIzAwYjVlOTtcbiAgd2lkdGg6IDExMHB4O1xufVxuXG4ucmVzZXQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2ODFhMjtcbiAgYm9yZGVyOiAjMDY4MWEyO1xufVxuXG4ucmVzZXQtYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhmOGY4ZjtcbiAgYm9yZGVyLWNvbG9yOiM4ZjhmOGYgO1xuICBjb2xvcjogIzVhNGU0ZSAhaW1wb3J0YW50XG4gfVxuXG4uYWRkLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWE4NTM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6ICMwNWE4NTM7XG59XG5cbi5hZGQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NzgzZTtcbiAgYm9yZGVyOiAjMDg3ODNlO1xufVxuXG5cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4ge1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG59XG4iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('collapseAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
                    height: '0',
                    overflow: 'hidden',
                    opacity: '0',
                    margin: '0',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
                    height: '*',
                    opacity: '1',
                    margin: '*',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('collapsed <=> expanded', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('300ms ease-out')]),
            ]),
        ] } });


/***/ }),

/***/ 7701:
/*!************************************************************************!*\
  !*** ./src/app/pages/applications/students/students-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsRoutingModule": () => (/* binding */ StudentsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _students_list_students_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./students-list/students-list.component */ 3597);
/* harmony import */ var _students_create_students_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./students-create/students-create.component */ 6155);
/* harmony import */ var _students_view_students_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students-view/students-view.component */ 326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _students_list_students_list_component__WEBPACK_IMPORTED_MODULE_0__.StudentsListComponent },
    { path: 'add', component: _students_create_students_create_component__WEBPACK_IMPORTED_MODULE_1__.StudentsCreateComponent },
    { path: 'edit/:id', component: _students_create_students_create_component__WEBPACK_IMPORTED_MODULE_1__.StudentsCreateComponent },
    { path: 'view/:id', component: _students_view_students_view_component__WEBPACK_IMPORTED_MODULE_2__.StudentsViewComponent },
];
class StudentsRoutingModule {
}
StudentsRoutingModule.ɵfac = function StudentsRoutingModule_Factory(t) { return new (t || StudentsRoutingModule)(); };
StudentsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: StudentsRoutingModule });
StudentsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](StudentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 326:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/applications/students/students-view/students-view.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsViewComponent": () => (/* binding */ StudentsViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/services/api-client.service */ 9228);
/* harmony import */ var shared_services_app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/app-service.service */ 197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);






function StudentsViewComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.studentInformation.home_phone_no, " ");
} }
function StudentsViewComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "N/A");
} }
function StudentsViewComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.studentData == null ? null : ctx_r3.studentData.phone_no, " ");
} }
function StudentsViewComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "N/A");
} }
function StudentsViewComponent_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.studentData == null ? null : ctx_r6.studentData.phone_no, " ");
} }
function StudentsViewComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "N/A");
} }
function StudentsViewComponent_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.studentData == null ? null : ctx_r9.studentData.phone_no, " ");
} }
function StudentsViewComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "N/A");
} }
function StudentsViewComponent_ngx_datatable_column_71_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r16 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](column_r16.name);
} }
function StudentsViewComponent_ngx_datatable_column_71_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentsViewComponent_ngx_datatable_column_71_ng_template_2_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const row_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().row; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.onEditCaseClick(row_r18)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", value_r17, " ");
} }
function StudentsViewComponent_ngx_datatable_column_71_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](value_r17);
} }
function StudentsViewComponent_ngx_datatable_column_71_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, StudentsViewComponent_ngx_datatable_column_71_ng_template_2_div_0_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StudentsViewComponent_ngx_datatable_column_71_ng_template_2_ng_template_1_Template, 2, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const column_r19 = ctx.column;
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", column_r19.name === "Case Id")("ngIfElse", _r21);
} }
function StudentsViewComponent_ngx_datatable_column_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-datatable-column", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StudentsViewComponent_ngx_datatable_column_71_ng_template_1_Template, 2, 1, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, StudentsViewComponent_ngx_datatable_column_71_ng_template_2_Template, 3, 2, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", col_r13.name)("prop", col_r13.prop)("sortable", false);
} }
class StudentsViewComponent {
    constructor(router, apiClient, appService) {
        this.router = router;
        this.apiClient = apiClient;
        this.appService = appService;
        this.studentData = null;
        this.caseData = null;
        this.studentId = 0;
        this.columns = [
            { name: 'Case Id', prop: 'id' },
            { name: 'Course', prop: 'course.name' },
            { name: 'Agent', prop: 'agent.name' },
            { name: 'Session', prop: 'session.name' },
            { name: 'Created By', prop: 'created_by' },
            { name: 'Updated By', prop: 'updated_by' },
        ];
        this.studentInformation = {
            first_name: 'John',
            middle_name: 'A',
            last_name: 'Doe',
            date_of_birth: new Date(1978, 5, 20),
            address: '123 Main St, Apt 4B, Springfield, IL 62704',
            suite_no: 'Apt 4B',
            ssn: '123-45-6789',
            home_phone_no: '5551234567',
            city: 'Springfield',
            state: 'IL',
            zip: '62704',
            cell_phone_no: '5559876543',
            work_phone_no: '5557654321',
            phone_extension: '101',
            email: 'john.doe@example.com',
            emergency_contact: '5551112222',
        };
        this.page = {
            perPage: 25,
            page: 1,
            total: 100,
        };
    }
    ngOnInit() {
        this.dataForEdit = history.state;
        if (!!this.dataForEdit.studentId) {
            this.studentId = this.dataForEdit.studentId;
        }
        this.getSingleStudent();
        this.getCase();
    }
    getSingleStudent() {
        this.apiClient
            .get(`student/single/${this.studentId}`, {})
            .subscribe((resp) => {
            this.studentData = resp.result;
        });
    }
    getCase() {
        this.apiClient
            .get(`case/single/${this.studentId}`, {})
            .subscribe((resp) => {
            this.caseData = resp.result;
        });
    }
    extractStreetAddress(address) {
        if (!address) {
            return 'N/A';
        }
        return address.split(',')[0];
    }
    addNewCase() {
        let url = '/case/add/info';
        this.router.navigateByUrl(url);
        this.appService.updateBreadCrumbData({
            studentId: this.studentId,
            caseId: null,
        });
    }
    onEditCaseClick(row) {
        let url = `/case/edit/${row.id}/info`;
        this.router.navigateByUrl(url, { state: { row } });
        this.appService.updateBreadCrumbData({
            studentId: this.studentId,
            caseId: row.id,
        });
    }
    setPage(pageInfo) {
        this.page.page = pageInfo.offset + 1;
    }
    GetYears(date) {
        const dateObj = new Date(date);
        const today = new Date();
        const years = today.getFullYear() - dateObj.getFullYear();
        const m = today.getMonth() - dateObj.getMonth();
        const d = today.getDate() - dateObj.getDate();
        const finalYears = m < 0 || (m === 0 && d < 0) ? years - 1 : years;
        return finalYears;
    }
    GetDOB(date) {
        const dateObj = new Date(date);
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = dateObj.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }
}
StudentsViewComponent.ɵfac = function StudentsViewComponent_Factory(t) { return new (t || StudentsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_0__.ApiClientService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](shared_services_app_service_service__WEBPACK_IMPORTED_MODULE_1__.AppService)); };
StudentsViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StudentsViewComponent, selectors: [["app-students-view"]], decls: 72, vars: 30, consts: [[1, "profile-block", "pb-3", "mx-2"], [1, "row"], [1, "profile-header", "col-12"], [1, "image-holder"], ["src", "assets/images/profile.jpeg"], [1, "text-hold"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between"], [1, "mt-0", "mb-2", "mb-lg-0"], [1, "row", "mt-3", "mt-lg-2", "padd-lr"], [1, "col-12", "patient-info-box", "px-0"], [1, "list-unstyled"], [1, "mb-0"], [4, "ngIf", "ngIfElse"], ["naBlock", ""], [1, "row", "mt-3", "mb-3"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "box"], [1, "text"], [1, "bootstrap", "custom-table", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarH", "limit", "count", "offset", "externalPaging", "page"], [3, "name", "prop", "sortable", 4, "ngFor", "ngForOf"], [3, "name", "prop", "sortable"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], [1, "mgx-header"], ["class", "clickable-text", 3, "click", 4, "ngIf", "ngIfElse"], ["normalCell", ""], [1, "clickable-text", 3, "click"], [1, "text-center"]], template: function StudentsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "ul", 10)(15, "li")(16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Home Phone No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, StudentsViewComponent_ng_container_19_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, StudentsViewComponent_ng_template_20_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li")(23, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "City:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li")(28, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Country:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li")(33, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Post Code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "li")(38, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Mobile Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, StudentsViewComponent_ng_container_41_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, StudentsViewComponent_ng_template_42_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "li")(45, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "li")(50, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Emergency Contact No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, StudentsViewComponent_ng_container_53_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, StudentsViewComponent_ng_template_54_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "li")(57, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Emergency Contact Person Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, StudentsViewComponent_ng_container_60_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, StudentsViewComponent_ng_template_61_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 14)(64, "div")(65, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentsViewComponent_Template_button_click_65_listener() { return ctx.addNewCase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "+ Add new case");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 16)(68, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Case Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "ngx-datatable", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function StudentsViewComponent_Template_ngx_datatable_page_70_listener($event) { return ctx.setPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, StudentsViewComponent_ngx_datatable_column_71_Template, 3, 3, "ngx-datatable-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 28, (ctx.studentData == null ? null : ctx.studentData.name) ? (ctx.studentData == null ? null : ctx.studentData.name) + ((ctx.studentData == null ? null : ctx.studentData.surname) ? " " + (ctx.studentData == null ? null : ctx.studentData.surname) : "") : "N/A"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ( ", ctx.GetYears(ctx.studentData == null ? null : ctx.studentData.date_of_birth), " Years | ", ctx.GetDOB(ctx.studentData == null ? null : ctx.studentData.date_of_birth), " | ", ctx.studentData == null ? null : ctx.studentData.gender, " ) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.studentInformation.home_phone_no)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.studentInformation.city ? ctx.studentInformation.city : "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.studentData == null ? null : ctx.studentData.nationality) ? ctx.studentData == null ? null : ctx.studentData.nationality : "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.studentInformation.zip ? ctx.studentInformation.zip : "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.studentData == null ? null : ctx.studentData.phone_no)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.studentData == null ? null : ctx.studentData.email) ? ctx.studentData == null ? null : ctx.studentData.email : "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.studentData == null ? null : ctx.studentData.phone_no)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.studentData == null ? null : ctx.studentData.phone_no)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.caseData)("columns", ctx.columns)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("scrollbarH", true)("limit", ctx.page.perPage)("count", ctx.page.total)("offset", ctx.page.page - 1)("externalPaging", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.columns);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnCellDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe], styles: [".profile-block[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.profile-block[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%] {\n  float: left;\n  border-radius: 10px;\n  margin-right: 15px;\n  width: 198px;\n  height: 160px;\n  border: 1px solid #acacac;\n}\n.profile-block[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 10px;\n  width: 196px;\n  height: 158px;\n}\n.profile-block[_ngcontent-%COMP%]   .txt-info-box[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 20px 0 0 20px;\n}\n.profile-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: #05a853;\n  text-transform: capitalize;\n  font: 400 1.25rem/30px \"Poppins\", Arial, Helvetica, sans-serif;\n}\n.profile-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  line-height: 36px;\n  text-transform: initial;\n  font-weight: 500;\n  margin: 0 20px 0 0;\n}\n.profile-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: #05a853;\n  text-transform: capitalize;\n  font: 500 1.563rem/29px \"Poppins\", Arial, Helvetica, sans-serif;\n}\n.profile-block[_ngcontent-%COMP%]   .patient-id[_ngcontent-%COMP%] {\n  float: right;\n  color: #525252;\n  margin: 10px 0 0;\n  text-transform: capitalize;\n  font: 400 1.25rem/14px \"Poppins\", Arial, Helvetica, sans-serif;\n}\n.profile-block[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 9px;\n  color: #4b4b4b;\n  border-color: #acacac;\n  font: 400 1rem/18px \"Poppins\", Arial, Helvetica, sans-serif;\n}\n.profile-block[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4b4b4b;\n}\n.profile-block[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.profile-block[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.profile-block[_ngcontent-%COMP%]   .box-frame[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n  text-align: center;\n  border: 1px solid #acacac;\n}\n.profile-block[_ngcontent-%COMP%]   .box-frame[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 5.625rem;\n  height: 5.625rem;\n  margin: 0 auto 15px;\n}\n.profile-block[_ngcontent-%COMP%]   .box-frame[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n}\n.profile-block[_ngcontent-%COMP%]   .box-frame[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 0.6rem;\n}\n.profile-block[_ngcontent-%COMP%]   .box-frame[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.profile-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: block;\n  color: #4b4b4b;\n  border-color: #acacac;\n  font: 400 0.875rem/20px \"Poppins\", Arial, Helvetica, sans-serif;\n}\n.clickable-text[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  cursor: pointer;\n  text-align: center;\n}\n.profile-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 20px;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.profile-img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n.profile-header[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  color: #2e7d32;\n}\n.profile-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.profile-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n}\n.btn-add-case[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n}\n@media only screen and (min-width: 767.98px) {\n  .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media only screen and (min-width: 1199.98px) {\n  .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media only screen and (min-width: 1399.98px) {\n  .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .delivery-address[_ngcontent-%COMP%] {\n    grid-column: 2/5;\n  }\n}\n.patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 45px;\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.4rem 0.8rem;\n  font-size: 12px;\n  font-weight: 500;\n  color: #4b4b4b;\n  background: rgba(250, 249, 249, 0.9607843137);\n}\n.patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #4b4b4b;\n}\n.patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(13), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(15) {\n  background: #fff;\n}\n.patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(12), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(16) {\n  display: none;\n}\n@media only screen and (min-width: 767.98px) {\n  .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(15) {\n    background: rgba(250, 249, 249, 0.9607843137);\n  }\n  .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(11), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(13) {\n    background: #fff;\n  }\n}\n@media only screen and (min-width: 1199.98px) {\n  .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(16) {\n    display: unset;\n  }\n  .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(14), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(15), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(16) {\n    background: rgba(250, 249, 249, 0.9607843137);\n  }\n  .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10) {\n    background: #fff;\n  }\n}\n@media only screen and (min-width: 1399.98px) {\n  .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(12) {\n    display: unset;\n  }\n  .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(11) {\n    background: rgba(250, 249, 249, 0.9607843137);\n  }\n  .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(14), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(15), .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(16) {\n    background: #fff;\n  }\n}\n@media only screen and (min-width: 1599.98px) {\n  .patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 55%;\n}\n.patient-info-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 45%;\n  font-weight: 400;\n}\n.box[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid lightgray;\n  padding: 20px;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n.box[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  left: 10px;\n  background: white;\n  padding: 0 10px;\n  font-weight: bold;\n  color: #00b5e9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnRzLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUU7RUFFRSxnQkFBQTtBQVpKO0FBZUU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQWhCQSxZQWtCYztFQWpCZCxhQWlCcUI7RUFDckIseUJBQUE7QUFiSjtBQWdCSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQXhCRixZQXlCZ0I7RUF4QmhCLGFBd0J1QjtBQWIzQjtBQWtCRTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7QUFoQko7QUFtQkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLDhEQUFBO0FBakJKO0FBbUJJO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWpCTjtBQXFCRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsK0RBQUE7QUFuQko7QUFzQkU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4REFBQTtBQXBCSjtBQTZCTTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkRBQUE7QUEzQlI7QUE2QlE7RUFDRSxjQUFBO0FBM0JWO0FBOEJRO0VBQ0UsZ0JBQUE7QUE1QlY7QUFrQ0U7RUFDRSxnQkFBQTtBQWhDSjtBQW1DRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFqQ0o7QUFtQ0k7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWxDTjtBQW9DTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7QUFsQ1I7QUFzQ0k7RUFDRSxjQUFBO0VBcEhGLFdBcUhrQjtFQXBIbEIsWUFvSGtCO0VBQ2hCLGVBQUE7QUFuQ047QUFxQ007RUFDRSxxQkFBQTtBQW5DUjtBQXdDRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSwrREFBQTtBQXRDSjtBQTBDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUF2Q0Y7QUEyQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtBQXhDRjtBQTBDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQXZDRjtBQXlDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUF0Q0Y7QUF3Q0E7RUFDRSxXQUFBO0FBckNGO0FBdUNBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBQXBDRjtBQXNDQTtFQUNFLGdCQUFBO0FBbkNGO0FBeUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7QUF0Q0o7QUF1Q0k7RUFMRjtJQU1JLHFDQUFBO0VBcENKO0FBQ0Y7QUFxQ0k7RUFSRjtJQVNJLHFDQUFBO0VBbENKO0FBQ0Y7QUFtQ0k7RUFYRjtJQVlJLHFDQUFBO0VBaENKO0VBaUNJO0lBQ0UsZ0JBQUE7RUEvQk47QUFDRjtBQWlDSTtFQUtFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsNkNBQUE7QUFwQ047QUF1Qk07RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFyQlI7QUFrQ007RUFPRSxnQkFBQTtBQXRDUjtBQXdDTTtFQUVFLGFBQUE7QUF2Q1I7QUF5Q007RUFDRTtJQUtGLDZDQUFBO0VBM0NKO0VBOENNO0lBSUUsZ0JBQUE7RUEvQ1I7QUFDRjtBQWlETTtFQUNFO0lBQ0UsY0FBQTtFQS9DUjtFQWlETTtJQVFGLDZDQUFBO0VBdERKO0VBeURNO0lBR0UsZ0JBQUE7RUF6RFI7QUFDRjtBQTJETTtFQUNFO0lBQ0UsY0FBQTtFQXpEUjtFQTJETTtJQUlGLDZDQUFBO0VBNURKO0VBK0RNO0lBS0UsZ0JBQUE7RUFqRVI7QUFDRjtBQW1FTTtFQXJGRjtJQXNGSSxlQUFBO0VBaEVOO0FBQ0Y7QUFpRU07RUFDRSxVQUFBO0FBL0RSO0FBaUVNO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBL0RSO0FBc0VBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBbkVGO0FBc0VBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQW5FRiIsImZpbGUiOiJzdHVkZW50cy12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucHJvZmlsZS1ibG9jayB7XG5cbiAgQG1peGluIHNpemUoJHdpZHRoLCAkaGVpZ2h0OiAkd2lkdGgpIHtcbiAgICB3aWR0aDogJHdpZHRoO1xuICAgIGhlaWdodDogJGhlaWdodDtcbiAgfVxuXG4gIEBtaXhpbiBzcXVhcmUoJHNpemUpIHtcbiAgICBAaW5jbHVkZSBzaXplKCRzaXplLCAkc2l6ZSk7XG4gIH1cblxuICAucHJvZmlsZS1oZWFkZXIge1xuICAgIC8vIHBhZGRpbmc6IDAgMCAzMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuaW1hZ2UtaG9sZGVyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAvLyBAaW5jbHVkZSBzaXplKDIwMHB4LCBhdXRvKTtcbiAgICBAaW5jbHVkZSBzaXplKDE5OHB4LCAxNjBweCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FjYWNhYztcblxuXG4gICAgaW1nIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIEBpbmNsdWRlIHNpemUoMTk2cHgsIDE1OHB4KTtcbiAgICAgIC8vIEBpbmNsdWRlIHNpemUoMTAwJSwgYXV0byk7XG4gICAgfVxuICB9XG5cbiAgLnR4dC1pbmZvLWJveCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xuICB9XG5cbiAgaDEge1xuICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgY29sb3I6ICMwNWE4NTM7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udDogNDAwIDEuMjVyZW0vMzBweCAnUG9wcGlucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5cbiAgICBzdHJvbmcge1xuICAgICAgZm9udC1zaXplOiAxLjg3NXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbWFyZ2luOiAwIDIwcHggMCAwO1xuICAgIH1cbiAgfVxuXG4gIGgyIHtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgIGNvbG9yOiAjMDVhODUzO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQ6IDUwMCAxLjU2M3JlbS8yOXB4ICdQb3BwaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC5wYXRpZW50LWlkIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICM1MjUyNTI7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250OiA0MDAgMS4yNXJlbS8xNHB4ICdQb3BwaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC50YWJsZSB7XG5cblxuICAgIHRyIHtcblxuXG4gICAgICB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDExcHggOXB4O1xuICAgICAgICBjb2xvcjogIzRiNGI0YjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjYWNhY2FjO1xuICAgICAgICBmb250OiA0MDAgMXJlbS8xOHB4ICdQb3BwaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogIzRiNGI0YjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5idXR0b25zIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmJveC1mcmFtZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhY2FjYWM7XG5cbiAgICAuaWNvbiB7XG4gICAgICAvLyBAaW5jbHVkZSBzcXVhcmUoOTBweCk7XG4gICAgICB3aWR0aDogNS42MjVyZW07XG4gICAgICBoZWlnaHQ6IDUuNjI1cmVtO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMTVweDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgQGluY2x1ZGUgc3F1YXJlKDEwMCUpO1xuICAgICAgcGFkZGluZzogMC42cmVtO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM0YjRiNGI7XG4gICAgYm9yZGVyLWNvbG9yOiAjYWNhY2FjO1xuICAgIGZvbnQ6IDQwMCAwLjg3NXJlbS8yMHB4ICdQb3BwaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgfVxufVxuXG4uY2xpY2thYmxlLXRleHQge1xuICBjb2xvcjogIzJlN2QzMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucHJvZmlsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ucHJvZmlsZS1pbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnByb2ZpbGUtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyZTdkMzI7XG59XG4ucHJvZmlsZS10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByb2ZpbGUtdGFibGUgdGQge1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cbi5idG4tYWRkLWNhc2Uge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5cbi5wYXRpZW50LWluZm8tYm94IHtcblxuICB1bCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExOTkuOThweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzk5Ljk4cHgpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gICAgICAuZGVsaXZlcnktYWRkcmVzcyB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyLyA1O1xuICAgICAgfVxuICAgIH1cbiAgICBsaSB7XG4gICAgICBsYWJlbHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjNGI0YjRiO1xuICAgICAgfVxuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBwYWRkaW5nOiAwLjRyZW0gMC44cmVtO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjNGI0YjRiO1xuICAgICAgLy8gYmFja2dyb3VuZDogI2YyZjJmMmY1O1xuICAgICAgYmFja2dyb3VuZDogI2ZhZjlmOWY1O1xuXG4gICAgICAmOm50aC1jaGlsZCgyKSxcbiAgICAgICY6bnRoLWNoaWxkKDQpLFxuICAgICAgJjpudGgtY2hpbGQoNiksXG4gICAgICAmOm50aC1jaGlsZCg4KSxcbiAgICAgICY6bnRoLWNoaWxkKDEwKSxcbiAgICAgICY6bnRoLWNoaWxkKDEzKSxcbiAgICAgICY6bnRoLWNoaWxkKDE1KSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgxMiksXG4gICAgICAmOm50aC1jaGlsZCgxNikge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjcuOThweCkge1xuICAgICAgICAmOm50aC1jaGlsZCgyKSxcbiAgICAgICAgJjpudGgtY2hpbGQoNiksXG4gICAgICAgICY6bnRoLWNoaWxkKDEwKSxcbiAgICAgICAgJjpudGgtY2hpbGQoMTUpIHtcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZjJmMmYyZjU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmFmOWY5ZjU7XG5cbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZCgzKSxcbiAgICAgICAgJjpudGgtY2hpbGQoNyksXG4gICAgICAgICY6bnRoLWNoaWxkKDExKSxcbiAgICAgICAgJjpudGgtY2hpbGQoMTMpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExOTkuOThweCkge1xuICAgICAgICAmOm50aC1jaGlsZCgxNikge1xuICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgICAgICB9XG4gICAgICAgICY6bnRoLWNoaWxkKDMpLFxuICAgICAgICAmOm50aC1jaGlsZCg3KSxcbiAgICAgICAgJjpudGgtY2hpbGQoOCksXG4gICAgICAgICY6bnRoLWNoaWxkKDkpLFxuICAgICAgICAmOm50aC1jaGlsZCgxNCksXG4gICAgICAgICY6bnRoLWNoaWxkKDE1KSxcbiAgICAgICAgJjpudGgtY2hpbGQoMTYpIHtcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZjJmMmYyZjU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmFmOWY5ZjU7XG5cbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZCg1KSxcbiAgICAgICAgJjpudGgtY2hpbGQoNiksXG4gICAgICAgICY6bnRoLWNoaWxkKDEwKSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzk5Ljk4cHgpIHtcbiAgICAgICAgJjpudGgtY2hpbGQoMTIpIHtcbiAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZCg0KSxcbiAgICAgICAgJjpudGgtY2hpbGQoMTApLFxuICAgICAgICAmOm50aC1jaGlsZCgxMSkge1xuICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICNmMmYyZjJmNTtcbiAgICAgIGJhY2tncm91bmQ6ICNmYWY5ZjlmNTtcblxuICAgICAgICB9XG4gICAgICAgICY6bnRoLWNoaWxkKDcpLFxuICAgICAgICAmOm50aC1jaGlsZCg4KSxcbiAgICAgICAgJjpudGgtY2hpbGQoMTQpLFxuICAgICAgICAmOm50aC1jaGlsZCgxNSksXG4gICAgICAgICY6bnRoLWNoaWxkKDE2KSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTk5Ljk4cHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgICAgbGFiZWwge1xuICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5OyBcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYm94IC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMnB4O1xuICBsZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMGI1ZTk7XG59Il19 */"] });


/***/ }),

/***/ 1506:
/*!*******************************************************************!*\
  !*** ./src/app/pages/applications/students/students.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsComponent": () => (/* binding */ StudentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class StudentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
StudentsComponent.ɵfac = function StudentsComponent_Factory(t) { return new (t || StudentsComponent)(); };
StudentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentsComponent, selectors: [["app-students"]], decls: 1, vars: 0, template: function StudentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9253:
/*!****************************************************************!*\
  !*** ./src/app/pages/applications/students/students.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsModule": () => (/* binding */ StudentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _students_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./students-routing.module */ 7701);
/* harmony import */ var _students_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./students.component */ 1506);
/* harmony import */ var _students_list_students_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students-list/students-list.component */ 3597);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _students_create_students_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./students-create/students-create.component */ 6155);
/* harmony import */ var _students_view_students_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./students-view/students-view.component */ 326);
/* harmony import */ var _student_info_student_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-info/student-info.component */ 8322);
/* harmony import */ var _add_student_dialog_add_student_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-student-dialog/add-student-dialog.component */ 6281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);














class StudentsModule {
}
StudentsModule.ɵfac = function StudentsModule_Factory(t) { return new (t || StudentsModule)(); };
StudentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: StudentsModule });
StudentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _students_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentsRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](StudentsModule, { declarations: [_students_component__WEBPACK_IMPORTED_MODULE_1__.StudentsComponent,
        _students_list_students_list_component__WEBPACK_IMPORTED_MODULE_2__.StudentsListComponent,
        _students_create_students_create_component__WEBPACK_IMPORTED_MODULE_3__.StudentsCreateComponent,
        _students_view_students_view_component__WEBPACK_IMPORTED_MODULE_4__.StudentsViewComponent,
        _student_info_student_info_component__WEBPACK_IMPORTED_MODULE_5__.StudentInfoComponent,
        _add_student_dialog_add_student_dialog_component__WEBPACK_IMPORTED_MODULE_6__.AddStudentDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _students_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentsRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_12__.CollapseModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_applications_students_students_module_ts.js.map