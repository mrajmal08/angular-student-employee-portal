"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_master_users_users_module_ts"],{

/***/ 6707:
/*!***********************************************************************!*\
  !*** ./src/app/pages/master/users/users-form/users-form.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersFormComponent": () => (/* binding */ UsersFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/services/api-client.service */ 9228);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);








const _c0 = ["roleSelect"];
const _c1 = ["departmentSelect"];
const _c2 = ["designationSelect"];
const _c3 = ["sessionSelect"];
function UsersFormComponent_sup_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter your name!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Maximum characters should be 25!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_sup_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_sup_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_small_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter your email! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_small_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Maximum characters should be 25! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_sup_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_small_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter password! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_small_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Maximum characters should be 25! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_sup_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_sup_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_sup_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersFormComponent_div_129_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Intake:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ng-select", 65, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UsersFormComponent_div_129_Template_ng_select_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.onDesignationChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r15.designations)("clearable", false);
} }
function UsersFormComponent_div_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Agency Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function UsersFormComponent_div_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Time with the institution:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function UsersFormComponent_div_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Agent Market Value:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class UsersFormComponent {
    constructor(fb, location, apiClient, toastr) {
        this.fb = fb;
        this.location = location;
        this.apiClient = apiClient;
        this.toastr = toastr;
        this.displayValidation = true;
        this.roles = [];
        this.departments = [];
        this.designations = [];
        this.sessions = [];
    }
    ngOnInit() {
        this.userForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            middle_name: [''],
            surname: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            gender: [''],
            date_of_birth: [''],
            nationality: [''],
            // password_confirmation: ['', Validators.required],
            // phone_no: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
            role_id: [null],
            address: [''],
            zipcode: [''],
            city: [''],
            state_id: [null],
            work_phone_no: [''],
            phone_extension: [''],
            phone: [''],
            start_date: [''],
            end_date: [''],
            emergency_phone: [''],
            intake_id: [null],
            designation_id: [null],
            department_id: [null],
            location_id: [null],
            hiring_date: [''],
            employee_type_id: [null],
            // session_id: [null],
            // status: [null],
            agency_name: [null],
            institute_time: [null],
            agent_market_value: [null],
        });
        this.dataForEdit = history.state;
        if (!!this.dataForEdit.row) {
            this.userForm.patchValue({
                name: this.dataForEdit.row.name,
                email: this.dataForEdit.row.email,
                phone_no: this.dataForEdit.row.phone_no,
                role_id: this.dataForEdit.row.role_id,
                department_id: this.dataForEdit.row.department_id,
                designation_id: this.dataForEdit.row.designation_id,
                session_id: this.dataForEdit.row.session_id,
                status: this.dataForEdit.row.status,
                agency_name: this.dataForEdit.row.agency_name,
                institute_time: this.dataForEdit.row.institute_time,
                agent_market_value: this.dataForEdit.row.agent_market_value,
                start_date: this.dataForEdit.row.start_date,
                end_date: this.dataForEdit.row.end_date,
                nationality: this.dataForEdit.row.nationality,
                date_of_birth: this.dataForEdit.row.date_of_birth,
            });
            this.clearValidators(this.userForm.get('password'));
            this.clearValidators(this.userForm.get('password_confirmation'));
        }
        this.getRoles();
        this.getDepartments();
        this.getDesignations();
        this.getSessions();
    }
    getRoles() {
        this.apiClient.get('roles', {}).subscribe((resp) => {
            this.roles = resp.result.map((dep) => ({
                id: dep.id,
                name: dep.name,
            }));
            console.log('roles:', this.roles);
        });
    }
    onRoleChange(selected) {
        console.log('Selected role:', selected);
        setTimeout(() => {
            const input = this.roleSelectRef.nativeElement.querySelector('input');
            if (input) {
                input.blur();
            }
        }, 0);
    }
    getDepartments() {
        this.apiClient.get('departments', {}).subscribe((resp) => {
            this.departments = resp.result.map((dep) => ({
                id: dep.id,
                name: dep.name,
            }));
            console.log('Departments:', this.departments);
        });
    }
    onDepartmentChange(selected) {
        setTimeout(() => {
            const input = this.departmentSelectRef.nativeElement.querySelector('input');
            if (input) {
                input.blur();
            }
        }, 0);
    }
    getDesignations() {
        this.apiClient.get('designations', {}).subscribe((resp) => {
            this.designations = resp.result.map((dep) => ({
                id: dep.id,
                name: dep.name,
            }));
            console.log('designations:', this.designations);
        });
    }
    onDesignationChange(selected) {
        setTimeout(() => {
            const input = this.designationSelectRef.nativeElement.querySelector('input');
            if (input) {
                input.blur();
            }
        }, 0);
    }
    getSessions() {
        this.apiClient.get('sessions', {}).subscribe((resp) => {
            this.sessions = resp.result.map((dep) => ({
                id: dep.id,
                name: dep.name,
            }));
            console.log('designations:', this.designations);
        });
    }
    onSessionChange(selected) {
        setTimeout(() => {
            const input = this.sessionSelectRef.nativeElement.querySelector('input');
            if (input) {
                input.blur();
            }
        }, 0);
    }
    clearValidators(control) {
        control?.clearValidators(); // Remove all validators
        control?.updateValueAndValidity(); // Update the form control validity
        control?.reset();
    }
    onFileChange(event, field) {
        if (event.target.files.length > 0) {
            this.userForm.patchValue({ [field]: event.target.files[0] });
        }
    }
    // onSubmit() {
    //   if (this.userForm.valid) {
    //     if (!!this.dataForEdit.row) {
    //       this.apiClient
    //         .post(
    //           `user/update?id=${this.dataForEdit.row.id}&name=${this.userForm.controls['name'].value}&email=${this.userForm.controls['email'].value}&phone_no=${this.userForm.controls['phone_no'].value}&password=${this.userForm.controls['password'].value}&password_confirmation=${this.userForm.controls['password_confirmation'].value}`
    //         )
    //         .subscribe((resp: any) => {
    //           if (resp.status) {
    //             this.location.back();
    //           } else {
    //           }
    //         });
    //     } else {
    //       this.apiClient
    //         .post(
    //           `user/insert?name=${this.userForm.controls['name'].value}&email=${this.userForm.controls['email'].value}&phone_no=${this.userForm.controls['phone_no'].value}&password=${this.userForm.controls['password'].value}&password_confirmation=${this.userForm.controls['password_confirmation'].value}`
    //         )
    //         .toPromise()
    //         .then((resp: any) => {
    //           if (resp.status) {
    //             this.location.back();
    //           }
    //         })
    //         .catch((error: any) => {
    //           console.log('Error:', error);
    //           this.toastr.error(
    //             `<span title="${this.getErrorMessageFromResponse(
    //               error.error
    //             )}">${this.getErrorMessageFromResponse(error.error)}</span>`,
    //             'Error',
    //             { enableHtml: true }
    //           );
    //         })
    //         .catch((error: any) => {});
    //     }
    //   } else {
    //     console.log('Form is invalid');
    //   }
    // }
    onSubmit() {
        if (this.userForm.valid) {
            if (!!this.dataForEdit.row) {
                const queryParams = new URLSearchParams({
                    id: this.dataForEdit.row.id,
                    ...this.userForm.value,
                }).toString();
                this.apiClient
                    .post(`user/update?${queryParams}`)
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
                    ...this.userForm.value,
                }).toString();
                this.apiClient
                    .post(`user/insert?${queryParams}`)
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
    closeForm() {
        this.location.back();
    }
    getErrorMessageFromResponse(resp) {
        const firstKey = Object.keys(resp.error)[0];
        const firstErrorMessage = resp.error[firstKey][0];
        return firstErrorMessage;
    }
    get IsRecruitmentAgentRole() {
        return this.userForm.get('role_id')?.value === 2;
    }
}
UsersFormComponent.ɵfac = function UsersFormComponent_Factory(t) { return new (t || UsersFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_0__.ApiClientService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService)); };
UsersFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UsersFormComponent, selectors: [["app-users-form"]], viewQuery: function UsersFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.roleSelectRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.departmentSelectRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.designationSelectRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sessionSelectRef = _t.first);
    } }, decls: 167, vars: 32, consts: [[1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "position-absolute", 2, "right", "10px", "cursor", "pointer", "color", "white"], [1, "fa", "fa-times", 2, "cursor", "pointer", "font-size", "24px", "right", "10px", 3, "click"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "row", "mt-3"], [1, "col-md-4"], [1, "form-group"], ["for", "firstName"], [4, "ngIf"], ["type", "text", "name", "name", "formControlName", "name", "alphaOnly", "", 1, "form-control"], ["class", "form-text text-muted danger", 4, "ngIf"], ["for", "middle_name"], ["type", "text", "name", "middle_name", "formControlName", "middle_name", "alphaOnly", "", 1, "form-control"], ["for", "surname"], ["type", "text", "name", "surname", "formControlName", "surname", "alphaOnly", "", 1, "form-control"], ["type", "email", "name", "fake-email", "autocomplete", "nope", 2, "display", "none"], ["type", "password", "name", "fake-password", "autocomplete", "new-password", 2, "display", "none"], ["for", "lastName"], ["type", "email", "formControlName", "email", "autocomplete", "new-email-xyz", 1, "form-control"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control"], [1, "d-flex"], [1, "form-check", "me-3"], ["type", "radio", "name", "gender", "formControlName", "gender", "value", "Male", "id", "male", 1, "form-check-input"], ["for", "male", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "gender", "formControlName", "gender", "value", "Female", "id", "female", 1, "form-check-input"], ["for", "female", 1, "form-check-label"], ["type", "date", "formControlName", "date_of_birth", 1, "form-control"], ["for", "nationality"], ["type", "text", "name", "nationality", "formControlName", "nationality", "alphaOnly", "", 1, "form-control"], ["bindLabel", "name", "bindValue", "id", "formControlName", "role_id", "placeholder", "Select a role", 3, "items", "clearable", "change"], ["roleSelect", ""], ["for", "address"], ["type", "text", "name", "middle_name", "formControlName", "address", "alphaOnly", "", 1, "form-control"], ["for", "zipcode"], ["type", "text", "name", "middle_name", "formControlName", "zipcode", "alphaOnly", "", 1, "form-control"], ["for", "city"], ["type", "text", "name", "middle_name", "formControlName", "city", "alphaOnly", "", 1, "form-control"], ["bindLabel", "name", "bindValue", "id", "formControlName", "state_id", "placeholder", "Select a role", 3, "items", "clearable", "change"], ["for", "work_phone_no"], ["type", "text", "name", "work_phone_no", "formControlName", "work_phone_no", 1, "form-control"], ["for", "phone_extension"], ["type", "text", "name", "phone_extension", "formControlName", "phone_extension", 1, "form-control"], ["for", "phone"], ["type", "text", "name", "phone", "formControlName", "phone", 1, "form-control"], ["type", "date", "formControlName", "start_date", 1, "form-control"], ["type", "date", "formControlName", "end_date", 1, "form-control"], ["class", "col-md-4", 4, "ngIf"], ["bindLabel", "name", "bindValue", "id", "formControlName", "designation_id", "placeholder", "Select a designation", 3, "items", "clearable", "change"], ["designationSelect", ""], ["bindLabel", "name", "bindValue", "id", "formControlName", "department_id", "placeholder", "Select a department", 3, "items", "clearable", "change"], ["departmentSelect", ""], ["bindLabel", "name", "bindValue", "id", "formControlName", "location_id", "placeholder", "Select a session", 3, "items", "clearable", "change"], ["sessionSelect", ""], ["type", "date", "formControlName", "hiring_date", 1, "form-control"], ["bindLabel", "name", "bindValue", "id", "formControlName", "employee_type_id", "placeholder", "Select a session", 3, "items", "clearable", "change"], [1, "form-buttons", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", "submit-button", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", "cancel-button", 3, "click"], [1, "form-text", "text-muted", "danger"], ["bindLabel", "name", "bindValue", "id", "formControlName", "intake_id", "placeholder", "Select a designation", 3, "items", "clearable", "change"], ["for", "agency_name"], ["type", "text", "name", "agency_name", "formControlName", "agency_name", "alphaOnly", "", 1, "form-control"], ["for", "institute_time"], ["type", "text", "name", "institute_time", "formControlName", "institute_time", "alphaOnly", "", 1, "form-control"], ["for", "agent_market_value"], ["type", "text", "name", "agent_market_value", "formControlName", "agent_market_value", "alphaOnly", "", 1, "form-control"]], template: function UsersFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4)(7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersFormComponent_Template_i_click_7_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UsersFormComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "First Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UsersFormComponent_sup_15_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UsersFormComponent_small_17_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UsersFormComponent_small_18_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9)(20, "div", 10)(21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Middle Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9)(25, "div", 10)(26, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Surname:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, UsersFormComponent_sup_28_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9)(31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 19)(33, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, UsersFormComponent_sup_36_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, UsersFormComponent_small_38_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, UsersFormComponent_small_39_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 9)(41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 19)(43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, UsersFormComponent_sup_46_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, UsersFormComponent_small_48_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, UsersFormComponent_small_49_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 9)(51, "div", 10)(52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 25)(55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Female ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 8)(64, "div", 9)(65, "div", 10)(66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "DOB:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 9)(70, "div", 10)(71, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Nationality:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 9)(75, "div", 10)(76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "ng-select", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UsersFormComponent_Template_ng_select_change_78_listener($event) { return ctx.onRoleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 9)(81, "div", 10)(82, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 9)(86, "div", 10)(87, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Zip Code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 9)(91, "div", 10)(92, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "City:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 9)(96, "div", 10)(97, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "State:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "ng-select", 43, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UsersFormComponent_Template_ng_select_change_99_listener($event) { return ctx.onRoleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 9)(102, "div", 10)(103, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Work Phone Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](105, UsersFormComponent_sup_105_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 9)(108, "div", 10)(109, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Phone Extension:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](111, UsersFormComponent_sup_111_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 9)(114, "div", 10)(115, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, UsersFormComponent_sup_117_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 9)(120, "div", 10)(121, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Start Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 9)(125, "div", 10)(126, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "End Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, UsersFormComponent_div_129_Template, 6, 2, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](130, UsersFormComponent_div_130_Template, 5, 0, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](131, UsersFormComponent_div_131_Template, 5, 0, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](132, UsersFormComponent_div_132_Template, 5, 0, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 9)(134, "div", 10)(135, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Designations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "ng-select", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UsersFormComponent_Template_ng_select_change_137_listener($event) { return ctx.onDesignationChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 9)(140, "div", 10)(141, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Departments:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "ng-select", 55, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UsersFormComponent_Template_ng_select_change_143_listener($event) { return ctx.onDepartmentChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 9)(146, "div", 10)(147, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "ng-select", 57, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UsersFormComponent_Template_ng_select_change_149_listener($event) { return ctx.onSessionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 9)(152, "div", 10)(153, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Hiring Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 9)(157, "div", 10)(158, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Employment Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "ng-select", 60, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UsersFormComponent_Template_ng_select_change_160_listener($event) { return ctx.onSessionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 61)(163, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersFormComponent_Template_button_click_163_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersFormComponent_Template_button_click_165_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_10_0;
        let tmp_11_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", !!ctx.dataForEdit.row ? "Edit" : "Add", " User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.userForm.get("name")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]) && (((tmp_3_0 = ctx.userForm.get("name")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.userForm.get("name")) == null ? null : tmp_3_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.userForm.get("name")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["maxlength"]) && ((tmp_4_0 = ctx.userForm.get("name")) == null ? null : tmp_4_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.userForm.get("email")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]) && (((tmp_7_0 = ctx.userForm.get("email")) == null ? null : tmp_7_0.dirty) || ((tmp_7_0 = ctx.userForm.get("email")) == null ? null : tmp_7_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.userForm.get("email")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["maxlength"]) && ((tmp_8_0 = ctx.userForm.get("email")) == null ? null : tmp_8_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.userForm.get("password")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors["required"]) && (((tmp_10_0 = ctx.userForm.get("password")) == null ? null : tmp_10_0.dirty) || ((tmp_10_0 = ctx.userForm.get("password")) == null ? null : tmp_10_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.userForm.get("password")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["maxlength"]) && ((tmp_11_0 = ctx.userForm.get("password")) == null ? null : tmp_11_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.roles)("clearable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.roles)("clearable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.IsRecruitmentAgentRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.IsRecruitmentAgentRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.IsRecruitmentAgentRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.IsRecruitmentAgentRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.designations)("clearable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.departments)("clearable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.sessions)("clearable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.sessions)("clearable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.userForm.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgSelectComponent], styles: [".form-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: auto;\n  padding: 20px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n}\n\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n\nng-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  background-color: #05a853;\n  color: #ffffff;\n  border: #05a853;\n  width: 110px;\n}\n\n.cancel-button[_ngcontent-%COMP%]:hover {\n  background-color: #08783e;\n  border: #08783e;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  background-color: #00b5e9;\n  color: #ffffff;\n  border: #00b5e9;\n  width: 110px;\n}\n\n.submit-button[_ngcontent-%COMP%]:hover {\n  background-color: #0681a2;\n  border: #0681a2;\n}\n\n.submit-button[_ngcontent-%COMP%]:disabled {\n  background-color: #8f8f8f;\n  border-color: #8f8f8f;\n  color: #5a4e4e !important;\n}\n\n  .ng-select.ng-select-single .ng-select-container {\n  max-height: 30px !important;\n  min-height: 12px;\n  padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUFFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFJQTtFQUNFLFdBQUE7QUFERjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUpGOztBQU9DO0VBQ0MsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSkYiLCJmaWxlIjoidXNlcnMtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbmg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG59XG5cbi5yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG5cbm5nLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5jYW5jZWwtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTg1MztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogIzA1YTg1MztcbiAgd2lkdGg6IDExMHB4O1xufVxuXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODc4M2U7XG4gIGJvcmRlcjogIzA4NzgzZTtcbn1cblxuXG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojMDBiNWU5O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAjMDBiNWU5O1xuICB3aWR0aDogMTEwcHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2ODFhMjtcbiAgYm9yZGVyOiAjMDY4MWEyO1xufVxuXG4uc3VibWl0LWJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZjhmOGY7XG4gIGJvcmRlci1jb2xvcjojOGY4ZjhmIDtcbiAgY29sb3I6ICM1YTRlNGUgIWltcG9ydGFudFxuIH1cblxuIDo6bmctZGVlcCAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDEycHggO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 8498:
/*!***********************************************************************!*\
  !*** ./src/app/pages/master/users/users-list/users-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListComponent": () => (/* binding */ UsersListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/dialogs/confirm-dialog/confirm-dialog.component */ 8975);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/api-client.service */ 9228);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);













const _c0 = ["roleSelect"];
const _c1 = ["departmentSelect"];
const _c2 = ["designationSelect"];
function UsersListComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 41);
} }
function UsersListComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 42);
} }
function UsersListComponent_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r9)("selected", option_r9 === ctx_r5.page.perPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", option_r9, " ");
} }
function UsersListComponent_ngx_datatable_column_63_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r13 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](column_r13.name);
} }
function UsersListComponent_ngx_datatable_column_63_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48)(1, "label", 49)(2, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UsersListComponent_ngx_datatable_column_63_ng_template_2_div_0_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().row; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.onStatusToggle(row_r15)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", row_r15.status === 1);
} }
function UsersListComponent_ngx_datatable_column_63_ng_template_2_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 1, row_r15.created_at, "short"));
} }
function UsersListComponent_ngx_datatable_column_63_ng_template_2_ng_template_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 1, row_r15.updated_at, "short"));
} }
function UsersListComponent_ngx_datatable_column_63_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UsersListComponent_ngx_datatable_column_63_ng_template_2_ng_template_1_div_2_Template, 4, 4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, UsersListComponent_ngx_datatable_column_63_ng_template_2_ng_template_1_div_3_Template, 4, 4, "div", 52);
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const value_r14 = ctx_r28.value;
    const column_r16 = ctx_r28.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](value_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", column_r16.name === "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", column_r16.name === "Updated By");
} }
function UsersListComponent_ngx_datatable_column_63_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, UsersListComponent_ngx_datatable_column_63_ng_template_2_div_0_Template, 4, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UsersListComponent_ngx_datatable_column_63_ng_template_2_ng_template_1_Template, 4, 3, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const column_r16 = ctx.column;
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", column_r16.prop === "status")("ngIfElse", _r18);
} }
function UsersListComponent_ngx_datatable_column_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-datatable-column", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UsersListComponent_ngx_datatable_column_63_ng_template_1_Template, 2, 1, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, UsersListComponent_ngx_datatable_column_63_ng_template_2_Template, 3, 2, "ng-template", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", col_r10.name)("prop", col_r10.prop)("sortable", false);
} }
function UsersListComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UsersListComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 54)(1, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UsersListComponent_ng_template_66_Template_input_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const row_r29 = restoredCtx.row; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.onCheckboxChange($event, row_r29)); })("click", function UsersListComponent_ng_template_66_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsersListComponent_ng_template_66_Template_i_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const row_r29 = restoredCtx.row; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.editUser(row_r29)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsersListComponent_ng_template_66_Template_i_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const row_r29 = restoredCtx.row; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r34.onDeleteUser(row_r29)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class UsersListComponent {
    constructor(fb, router, apiClient, dialog, toastr) {
        this.fb = fb;
        this.router = router;
        this.apiClient = apiClient;
        this.dialog = dialog;
        this.toastr = toastr;
        this.page = {
            perPage: 10,
            page: 1,
            total: 100,
        };
        this.perPageOptions = [10, 25, 50, 100];
        this.isCollapsed = true;
        this.name = '';
        this.email = '';
        this.phone_no = '';
        this.role_id = undefined;
        this.department_id = undefined;
        this.designation_id = undefined;
        this.roles = [];
        this.departments = [];
        this.designations = [];
        this.columns = [
            { name: 'User ID', prop: 'id' },
            { name: 'User Name', prop: 'name' },
            { name: 'User Email', prop: 'email' },
            { name: 'Phone No', prop: 'phone_no' },
            { name: 'DOB', prop: 'date_of_birth' },
            { name: 'Role', prop: 'role.name' },
            { name: 'Designation', prop: 'designation.name' },
            { name: 'Department', prop: 'department.name' },
            // { name: 'Created At', prop: 'created_at' },
            { name: 'Status', prop: 'status' },
            { name: 'Created By', prop: 'created_by' },
            { name: 'Updated By', prop: 'updated_by' },
        ];
        this.rows = [];
        this.buildForm();
    }
    ngOnInit() {
        this.filterForm.controls['name'].valueChanges.subscribe((value) => {
            if (value === '') {
                this.name = '';
                // this.clearFilterValues();
                // this.getUsers();
            }
        });
        this.filterForm.controls['email'].valueChanges.subscribe((value) => {
            if (value === '') {
                this.email = '';
                // this.clearFilterValues();
                // this.getUsers();
            }
        });
        this.filterForm.controls['phone_no'].valueChanges.subscribe((value) => {
            if (value === '') {
                this.phone_no = '';
                // this.clearFilterValues();
                // this.getUsers();
            }
        });
        this.getUsers();
        this.getRoles();
        this.getDepartments();
        this.getDesignations();
    }
    getRoles() {
        this.apiClient.get('roles', {}).subscribe((resp) => {
            this.roles = resp.result.map((dep) => ({
                id: dep.id,
                name: dep.name,
            }));
        });
    }
    getDepartments() {
        this.apiClient.get('departments', {}).subscribe((resp) => {
            this.departments = resp.result.map((dep) => ({
                id: dep.id,
                name: dep.name,
            }));
            console.log('Departments:', this.departments);
        });
    }
    getDesignations() {
        this.apiClient.get('designations', {}).subscribe((resp) => {
            this.designations = resp.result.map((dep) => ({
                id: dep.id,
                name: dep.name,
            }));
            console.log('designations:', this.designations);
        });
    }
    getUsers(search = '') {
        this.apiClient
            .get('users', {
            pagination: 1,
            page: this.page.page,
            per_page: this.page.perPage,
            name: this.name,
            email: this.email,
            phone_no: this.phone_no,
            ...(this.role_id && { role_id: this.role_id }),
            ...(this.department_id && { department_id: this.department_id }),
            ...(this.designation_id && { designation_id: this.designation_id }),
        })
            .subscribe((resp) => {
            this.page.total = resp.result.total;
            this.rows = resp.result.data.map((row) => ({
                ...row,
                // created_at: getUKFormatedDate(row.created_at),
            }));
        });
    }
    onApplyFilters() {
        if (!!this.filterForm.controls['name'].value) {
            this.name = this.filterForm.controls['name'].value;
            // this.email = '';
            // this.phone_no = '';
        }
        else if (!!this.filterForm.controls['email'].value) {
            this.email = this.filterForm.controls['email'].value;
            // this.name = '';
            // this.phone_no = '';
        }
        else if (!!this.filterForm.controls['phone_no'].value) {
            this.phone_no = this.filterForm.controls['phone_no'].value;
            // this.name = '';
            // this.email = '';
        }
        this.getUsers();
    }
    clearFilterValues() {
        this.name = '';
        this.email = '';
        this.phone_no = '';
    }
    buildForm() {
        this.filterForm = this.fb.group({
            name: [''],
            email: [''],
            phone_no: [''],
            roles: [null],
            departments: [null],
            designations: [null],
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
    onSelectFilters() { }
    resetForm() { }
    onResetFilters() {
        this.clearFilterValues();
        this.filterForm.controls['name'].setValue(null);
        this.filterForm.controls['email'].setValue(null);
        this.filterForm.controls['phone_no'].setValue(null);
        this.filterForm.controls['roles'].reset();
        this.filterForm.controls['departments'].reset();
        this.filterForm.controls['designations'].reset();
        this.role_id = undefined;
        this.department_id = undefined;
        this.designation_id = undefined;
        this.getUsers();
    }
    onAgentNameClick(agentId) {
        this.router.navigateByUrl(`/users/${agentId}`);
    }
    addNewAgent() {
        this.router.navigateByUrl(`/users/add`);
    }
    editUser(row) {
        console.log('Edit Users:', row);
        this.router.navigateByUrl(`/users/edit/${row.id}`, { state: { row } });
        // Implement edit logic (e.g., open a modal, navigate to edit page)
    }
    onDeleteUser(row) {
        this.showAlert('warning', 'Delete User?', 'Do you really want to delete this user.', row.id);
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
                this.deleteUser(id);
            }
        });
    }
    deleteUser(id) {
        this.apiClient
            .get(`user/delete/${id}`)
            .toPromise()
            .then((resp) => {
            this.toastr.success('User Deleted successfully!', 'Success');
            this.getUsers();
        })
            .catch((err) => {
            this.toastr.error(err.error.message, 'Error');
        });
    }
    onStatusToggle(row) {
        row.status = row.status === 1 ? 0 : 1;
        this.updateUserStatus(row);
    }
    updateUserStatus(user) {
        this.apiClient
            .post(`user/update?id=${user.id}&status=${user.status}`)
            .subscribe((resp) => {
            if (resp.status) {
                this.toastr.success(resp.message, 'Success');
            }
            else {
                this.toastr.error(resp.message, 'Error');
            }
        });
    }
    onCheckboxChange(event, row) {
        console.log('Event and row', event, row);
    }
    onRoleChange(selected) {
        this.role_id = selected.id.toString();
        // console.log('Selected department ID:', selectedId);
        setTimeout(() => {
            const input = this.roleSelectRef.nativeElement.querySelector('input');
            if (input) {
                input.blur();
            }
        }, 0);
    }
    onDepartmentChange(selected) {
        this.department_id = selected.id.toString();
        setTimeout(() => {
            const input = this.departmentSelectRef.nativeElement.querySelector('input');
            if (input) {
                input.blur();
            }
        }, 0);
    }
    onDesignationChange(selected) {
        this.designation_id = selected.id.toString();
        setTimeout(() => {
            const input = this.designationSelectRef.nativeElement.querySelector('input');
            if (input) {
                input.blur();
            }
        }, 0);
    }
    isDisabled() {
        return (!this.filterForm.controls['name'].value &&
            !this.filterForm.controls['email'].value &&
            !this.filterForm.controls['phone_no'].value &&
            !this.role_id &&
            !this.department_id &&
            !this.designation_id);
    }
}
UsersListComponent.ɵfac = function UsersListComponent_Factory(t) { return new (t || UsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_1__.ApiClientService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
UsersListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UsersListComponent, selectors: [["app-users-list"]], viewQuery: function UsersListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.roleSelectRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.departmentSelectRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.designationSelectRef = _t.first);
    } }, decls: 67, vars: 31, consts: [[1, "d-flex", "mt-3", "mb-3", "justify-content-end"], ["type", "button", 1, "btn", "btn-secondary", "add-button", 3, "click"], ["autocomplete", "off", "novalidate", "", 1, "form", "w-100", 2, "margin", "20px 0px", 3, "formGroup", "ngSubmit"], [1, "form-content", "search-filter-block", "position-relative"], [1, "sub-title", "search-user-title"], ["aria-controls", "collapseBasic", "type", "button", 1, "btn", "plus-btn", "position-absolute", "custom-btn", 2, "max-width", "42px", "top", "42px", "right", "20px", "min-width", "unset", 3, "click"], ["class", "bi bi-plus", 4, "ngIf"], ["class", "bi bi-dash", 4, "ngIf"], [1, "row"], [1, "field-block", "w-100"], [1, "col-12", 2, "color", "#808382"], [1, "row", 2, "padding-right", "100px"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["for", "email"], ["type", "text", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "phone_no"], ["type", "text", "id", "phone_no", "formControlName", "phone_no", 1, "form-control"], [1, "col-md-3"], ["bindLabel", "name", "bindValue", "id", "formControlName", "roles", "placeholder", "Select a role", 3, "items", "clearable", "change"], ["roleSelect", ""], ["id", "collapseBasic"], [1, "row", 2, "padding-right", "100px", "margin-top", "12px"], ["bindLabel", "name", "bindValue", "id", "formControlName", "departments", "placeholder", "Select a department", 3, "items", "clearable", "change"], ["departmentSelect", ""], ["bindLabel", "name", "bindValue", "id", "formControlName", "designations", "placeholder", "Select a designation", 3, "items", "clearable", "change"], ["designationSelect", ""], [1, "d-flex", "justify-content-center", "mt-3", 2, "margin-right", "100px"], ["type", "submit", 1, "btn", "btn-primary", "mx-1", "filter-button", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-outline-secondary", "mx-1", "reset-button", 3, "disabled", "click"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], ["for", "perPageSelect", 1, "me-2", 2, "padding-bottom", "10px", "color", "#000000"], ["id", "perPageSelect", 1, "form-select", "me-2", 2, "width", "auto", "display", "inline-block", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "bootstrap", "custom-table", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarH", "limit", "count", "offset", "externalPaging", "page"], [3, "name", "prop", "sortable", 4, "ngFor", "ngForOf"], ["name", "Action", 3, "width"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], [1, "bi", "bi-plus"], [1, "bi", "bi-dash"], [3, "value", "selected"], [3, "name", "prop", "sortable"], [1, "mgx-header"], ["class", "text-center", 4, "ngIf", "ngIfElse"], ["defaultCell", ""], [1, "text-center"], [1, "switch"], ["type", "checkbox", 3, "checked", "change"], [1, "slider", "blue"], [4, "ngIf"], [1, "mgx-header", "text-center"], [1, "d-flex", "justify-content-center", "gap-2"], ["type", "checkbox", 2, "cursor", "pointer", 3, "change", "click"], [1, "bi", "bi-person-fill", "fs-6", 2, "color", "#58aff7", "margin-bottom", "2px", "cursor", "pointer"], [1, "bi", "bi-pen", 2, "margin-left", "0", "cursor", "pointer", 3, "click"], [1, "bi", "bi-x-lg", "text-danger", 2, "font-weight", "bold", "cursor", "pointer", 3, "click"]], template: function UsersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsersListComponent_Template_button_click_1_listener() { return ctx.addNewAgent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "+ Add New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function UsersListComponent_Template_form_ngSubmit_3_listener() { return ctx.onSelectFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "strong", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Search Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsersListComponent_Template_button_click_7_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, UsersListComponent_i_8_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, UsersListComponent_i_9_Template, 1, 0, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 12)(25, "div", 13)(26, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 20)(30, "div", 13)(31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Roles:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ng-select", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UsersListComponent_Template_ng_select_change_33_listener($event) { return ctx.onRoleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 23)(36, "div", 24)(37, "div", 20)(38, "div", 13)(39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Departments:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "ng-select", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UsersListComponent_Template_ng_select_change_41_listener($event) { return ctx.onDepartmentChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 20)(44, "div", 13)(45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Designations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "ng-select", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UsersListComponent_Template_ng_select_change_47_listener($event) { return ctx.onDesignationChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 29)(50, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsersListComponent_Template_button_click_50_listener() { return ctx.onApplyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsersListComponent_Template_button_click_52_listener() { return ctx.onResetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 32)(55, "div")(56, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function UsersListComponent_Template_select_change_58_listener($event) { return ctx.updatePerPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, UsersListComponent_option_59_Template, 2, 3, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "ngx-datatable", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function UsersListComponent_Template_ngx_datatable_page_62_listener($event) { return ctx.setPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, UsersListComponent_ngx_datatable_column_63_Template, 3, 3, "ngx-datatable-column", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "ngx-datatable-column", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, UsersListComponent_ng_template_65_Template, 2, 0, "ng-template", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, UsersListComponent_ng_template_66_Template, 5, 0, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("btn-dark", !ctx.isCollapsed)("btn-primary", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.roles)("clearable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@collapseAnimation", ctx.isCollapsed ? "collapsed" : "expanded");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.departments)("clearable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.designations)("clearable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.perPageOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("columns", ctx.columns)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("scrollbarH", true)("limit", ctx.page.perPage)("count", ctx.page.total)("offset", ctx.page.page - 1)("externalPaging", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 150);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnCellDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".search-user-title[_ngcontent-%COMP%] {\n  color: #00b5e9;\n  position: absolute;\n  top: 0;\n  left: 73px;\n  transform: translate(-50%, -50%);\n  background: white;\n  padding: 0 10px;\n  font-size: 16px;\n  font: 400 1rem/19px \"Poppins\", Arial, Helvetica, sans-serif;\n  text-transform: capitalize;\n  background: #fff;\n  position: absolute;\n  padding: 0 15px;\n  color: #00b5e9;\n}\n\n.plus-btn[_ngcontent-%COMP%] {\n  top: 10px;\n  right: 15px;\n}\n\n.form-content[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 20px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.mat-date-picker-custom[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton.btn-primary[_ngcontent-%COMP%], button.btn-default[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n\n.clickable-text[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  cursor: pointer;\n  text-align: center;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  background-color: #ccc;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: 0.4s;\n  border-radius: 34px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 14px;\n  width: 14px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider.blue[_ngcontent-%COMP%] {\n  background-color: #2196f3; \n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider.blue[_ngcontent-%COMP%]:before {\n  transform: translateX(20px);\n}\n\n.filter-button[_ngcontent-%COMP%] {\n  background-color: #05a853;\n  color: #ffffff;\n  border: #05a853;\n  width: 110px;\n  margin-right: 20px !important;\n}\n\n.filter-button[_ngcontent-%COMP%]:hover {\n  background-color: #08783e;\n  border: #08783e;\n}\n\n.filter-button[_ngcontent-%COMP%]:disabled {\n  background-color: #8f8f8f;\n  border-color: #8f8f8f;\n  color: #5a4e4e !important;\n  margin-right: 20px !important;\n}\n\n.reset-button[_ngcontent-%COMP%] {\n  background-color: #00b5e9;\n  color: #ffffff;\n  border: #00b5e9;\n  width: 110px;\n}\n\n.reset-button[_ngcontent-%COMP%]:hover {\n  background-color: #0681a2;\n  border: #0681a2;\n}\n\n.reset-button[_ngcontent-%COMP%]:disabled {\n  background-color: #8f8f8f;\n  border-color: #8f8f8f;\n  color: #5a4e4e !important;\n}\n\n.add-button[_ngcontent-%COMP%] {\n  background-color: #05a853;\n  color: #ffffff;\n  border: #05a853;\n}\n\n.add-button[_ngcontent-%COMP%]:hover {\n  background-color: #08783e;\n  border: #08783e;\n}\n\n.custom-btn[_ngcontent-%COMP%] {\n  background-color: #4b4b4b; \n  border: 1px solid #4b4b4b;\n  color: white; \n}\n\n.custom-btn[_ngcontent-%COMP%]:hover {\n  background-color: #05a853; \n  border-color: #05a853;\n}\n\n[_nghost-%COMP%]     .btn {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n  .ng-select.ng-select-single .ng-select-container {\n  max-height: 30px !important;\n  min-height: 12px;\n  padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDJEQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQSxFQUFBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSwyQkFBQTtBQUFGOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQUZGOztBQU9BO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBSkY7O0FBUUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBTEY7O0FBUUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFMRjs7QUFTQTtFQUNFLHlCQUFBLEVBQUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUEsRUFBQSxtQ0FBQTtBQU5GOztBQVNBO0VBQ0UseUJBQUEsRUFBQSxtQkFBQTtFQUNBLHFCQUFBO0FBTkY7O0FBVUE7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0FBUEY7O0FBVUE7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFQRiIsImZpbGUiOiJ1c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC11c2VyLXRpdGxlIHtcbiAgY29sb3I6ICMwMGI1ZTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA3M3B4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250OiA0MDAgMXJlbSAvIDE5cHggXCJQb3BwaW5zXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgY29sb3I6ICMwMGI1ZTk7XG59XG5cbi5wbHVzLWJ0biB7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbi5mb3JtLWNvbnRlbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1hdC1kYXRlLXBpY2tlci1jdXN0b20gaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uLmJ0bi1wcmltYXJ5LFxuYnV0dG9uLmJ0bi1kZWZhdWx0IHtcbiAgbWluLXdpZHRoOiAxMTBweDtcbn1cbi5jbGlja2FibGUtdGV4dCB7XG4gIGNvbG9yOiAjMmU3ZDMyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICBsZWZ0OiAzcHg7XG4gIGJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlci5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgLyogQmx1ZSB3aGVuIG9uICovXG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyLmJsdWU6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xufVxuXG5cblxuLmZpbHRlci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhODUzO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAjMDVhODUzO1xuICB3aWR0aDogMTEwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xuXG5cbn1cblxuLmZpbHRlci1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg3ODNlO1xuICBib3JkZXI6ICMwODc4M2U7XG59XG5cbi5maWx0ZXItYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhmOGY4ZjtcbiAgYm9yZGVyLWNvbG9yOiM4ZjhmOGYgO1xuICBjb2xvcjogIzVhNGU0ZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiB9XG5cbi5yZXNldC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMGI1ZTk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6ICMwMGI1ZTk7XG4gIHdpZHRoOiAxMTBweDtcbn1cblxuLnJlc2V0LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjgxYTI7XG4gIGJvcmRlcjogIzA2ODFhMjtcbn1cblxuLnJlc2V0LWJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZjhmOGY7XG4gIGJvcmRlci1jb2xvcjojOGY4ZjhmIDtcbiAgY29sb3I6ICM1YTRlNGUgIWltcG9ydGFudFxuIH1cblxuXG4uYWRkLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWE4NTM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6ICMwNWE4NTM7XG59XG5cbi5hZGQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NzgzZTtcbiAgYm9yZGVyOiAjMDg3ODNlO1xufVxuXG5cbi5jdXN0b20tYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0YjsgLyogRGVmYXVsdCBibGFjayAqL1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGI0YjRiO1xuICBjb2xvcjogd2hpdGU7IC8qIE9wdGlvbmFsOiBtYWtlIGljb24vdGV4dCB3aGl0ZSAqL1xufVxuXG4uY3VzdG9tLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWE4NTM7IC8qIEdyZWVuIG9uIGhvdmVyICovXG4gIGJvcmRlci1jb2xvcjogIzA1YTg1Mztcbn1cblxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0biB7XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuOjpuZy1kZWVwIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMTJweCA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59Il19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('collapseAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
                    height: '0',
                    overflow: 'hidden',
                    opacity: '0',
                    margin: '0',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
                    height: '*',
                    opacity: '1',
                    margin: '*',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('collapsed <=> expanded', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('300ms ease-out')]),
            ]),
        ] } });


/***/ }),

/***/ 334:
/*!************************************************************!*\
  !*** ./src/app/pages/master/users/users-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersRoutingModule": () => (/* binding */ UsersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-form/users-form.component */ 6707);
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-list/users-list.component */ 8498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_1__.UsersListComponent },
    { path: 'add', component: _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_0__.UsersFormComponent },
    { path: 'edit/:id', component: _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_0__.UsersFormComponent },
];
class UsersRoutingModule {
}
UsersRoutingModule.ɵfac = function UsersRoutingModule_Factory(t) { return new (t || UsersRoutingModule)(); };
UsersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UsersRoutingModule });
UsersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UsersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 6424:
/*!****************************************************!*\
  !*** ./src/app/pages/master/users/users.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 334);
/* harmony import */ var _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-form/users-form.component */ 6707);
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-list/users-list.component */ 8498);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);










class UsersModule {
}
UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(); };
UsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_2__.UsersListComponent,
        _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_1__.UsersFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__.CollapseModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_master_users_users_module_ts.js.map