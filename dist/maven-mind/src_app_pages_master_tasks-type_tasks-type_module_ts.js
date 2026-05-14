"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_master_tasks-type_tasks-type_module_ts"],{

/***/ 8916:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/master/tasks-type/tasks-type-form/tasks-type-form.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksTypeFormComponent": () => (/* binding */ TasksTypeFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/services/api-client.service */ 9228);





function TasksTypeFormComponent_sup_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TasksTypeFormComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter your name!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TasksTypeFormComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Maximum characters should be 25!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TasksTypeFormComponent_sup_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TasksTypeFormComponent_small_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter your description!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TasksTypeFormComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Maximum characters should be 25!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class TasksTypeFormComponent {
    constructor(fb, location, apiClient) {
        this.fb = fb;
        this.location = location;
        this.apiClient = apiClient;
        this.displayValidation = true;
    }
    ngOnInit() {
        this.taskTypeForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
        this.dataForEdit = history.state;
        if (!!this.dataForEdit.row) {
            this.taskTypeForm.patchValue({
                name: this.dataForEdit.row.name,
                description: this.dataForEdit.row.description,
            });
        }
    }
    onFileChange(event, field) {
        if (event.target.files.length > 0) {
            this.taskTypeForm.patchValue({ [field]: event.target.files[0] });
        }
    }
    onSubmit() {
        if (this.taskTypeForm.valid) {
            if (!!this.dataForEdit.row) {
                this.apiClient
                    .post(`task_type/update?id=${this.dataForEdit.row.id}&name=${this.taskTypeForm.controls['name'].value}&description=${this.taskTypeForm.controls['description'].value}`)
                    .subscribe((resp) => {
                    if (resp.status) {
                        this.location.back();
                    }
                });
            }
            else {
                this.apiClient
                    .post(`task_type/insert?name=${this.taskTypeForm.controls['name'].value}&description=${this.taskTypeForm.controls['description'].value}`)
                    .subscribe((resp) => {
                    if (resp.status) {
                        this.location.back();
                    }
                });
            }
        }
        else {
        }
    }
    closeForm() {
        this.location.back();
    }
}
TasksTypeFormComponent.ɵfac = function TasksTypeFormComponent_Factory(t) { return new (t || TasksTypeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_0__.ApiClientService)); };
TasksTypeFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TasksTypeFormComponent, selectors: [["app-tasks-type-form"]], decls: 32, vars: 9, consts: [[1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "position-absolute", 2, "right", "10px", "cursor", "pointer", "color", "white"], [1, "fa", "fa-times", 3, "click"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "row", "mt-3"], [1, "col-md-4"], [1, "form-group"], ["for", "firstName"], [4, "ngIf"], ["type", "text", "name", "name", "formControlName", "name", "alphaOnly", "", 1, "form-control"], ["class", "form-text text-muted danger", 4, "ngIf"], ["for", "lastName"], ["type", "text", "formControlName", "description", "id", "description", 1, "form-control"], [1, "form-buttons", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", "submit-button", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", "cancel-button", 3, "click"], [1, "form-text", "text-muted", "danger"]], template: function TasksTypeFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4)(7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TasksTypeFormComponent_Template_i_click_7_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TasksTypeFormComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TasksTypeFormComponent_sup_15_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, TasksTypeFormComponent_small_17_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TasksTypeFormComponent_small_18_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9)(20, "div", 10)(21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, TasksTypeFormComponent_sup_23_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, TasksTypeFormComponent_small_25_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, TasksTypeFormComponent_small_26_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17)(28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TasksTypeFormComponent_Template_button_click_28_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TasksTypeFormComponent_Template_button_click_30_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_6_0;
        let tmp_7_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", !!ctx.dataForEdit.row ? "Edit" : "Add", " Task Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.taskTypeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.taskTypeForm.get("name")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]) && (((tmp_3_0 = ctx.taskTypeForm.get("name")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.taskTypeForm.get("name")) == null ? null : tmp_3_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.taskTypeForm.get("name")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["maxlength"]) && ((tmp_4_0 = ctx.taskTypeForm.get("name")) == null ? null : tmp_4_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.taskTypeForm.get("description")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["required"]) && (((tmp_6_0 = ctx.taskTypeForm.get("description")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.taskTypeForm.get("description")) == null ? null : tmp_6_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.taskTypeForm.get("description")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["maxlength"]) && ((tmp_7_0 = ctx.taskTypeForm.get("description")) == null ? null : tmp_7_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.taskTypeForm.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".form-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: auto;\n  padding: 20px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n}\n\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n\nng-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  background-color: #05a853;\n  color: #ffffff;\n  border: #05a853;\n  width: 110px;\n}\n\n.cancel-button[_ngcontent-%COMP%]:hover {\n  background-color: #08783e;\n  border: #08783e;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  background-color: #00b5e9;\n  color: #ffffff;\n  border: #00b5e9;\n  width: 110px;\n}\n\n.submit-button[_ngcontent-%COMP%]:hover {\n  background-color: #0681a2;\n  border: #0681a2;\n}\n\n.submit-button[_ngcontent-%COMP%]:disabled {\n  background-color: #8f8f8f;\n  border-color: #8f8f8f;\n  color: #5a4e4e !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzLXR5cGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBQUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUlBO0VBQ0UsV0FBQTtBQURGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUhGOztBQVFBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFMRjs7QUFRQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUxGOztBQVFBO0VBQ0MseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBTEQiLCJmaWxlIjoidGFza3MtdHlwZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAuZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbn1cblxuLnJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cblxubmctc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuXG4uY2FuY2VsLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWE4NTM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6ICMwNWE4NTM7XG4gIHdpZHRoOiAxMTBweDtcbn1cblxuLmNhbmNlbC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg3ODNlO1xuICBib3JkZXI6ICMwODc4M2U7XG59XG5cblxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IzAwYjVlOTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogIzAwYjVlOTtcbiAgd2lkdGg6IDExMHB4O1xufVxuXG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjgxYTI7XG4gIGJvcmRlcjogIzA2ODFhMjtcbn1cblxuLnN1Ym1pdC1idXR0b246ZGlzYWJsZWQge1xuIGJhY2tncm91bmQtY29sb3I6ICM4ZjhmOGY7XG4gYm9yZGVyLWNvbG9yOiM4ZjhmOGYgO1xuIGNvbG9yOiAjNWE0ZTRlICFpbXBvcnRhbnRcbn0iXX0= */"] });


/***/ }),

/***/ 9524:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/master/tasks-type/tasks-type-list/tasks-type-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksTypeListComponent": () => (/* binding */ TasksTypeListComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/dialogs/confirm-dialog/confirm-dialog.component */ 8975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/api-client.service */ 9228);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);










function TasksTypeListComponent_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r4)("selected", option_r4 === ctx_r0.page.perPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", option_r4, " ");
} }
function TasksTypeListComponent_ngx_datatable_column_30_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r8 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](column_r8.name);
} }
function TasksTypeListComponent_ngx_datatable_column_30_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 1, row_r10.created_at, "short"));
} }
function TasksTypeListComponent_ngx_datatable_column_30_ng_template_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 1, row_r10.updated_at, "short"));
} }
function TasksTypeListComponent_ngx_datatable_column_30_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TasksTypeListComponent_ngx_datatable_column_30_ng_template_2_div_2_Template, 4, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TasksTypeListComponent_ngx_datatable_column_30_ng_template_2_div_3_Template, 4, 4, "div", 29);
} if (rf & 2) {
    const value_r9 = ctx.value;
    const column_r11 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", value_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](value_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", column_r11.name === "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", column_r11.name === "Updated By");
} }
function TasksTypeListComponent_ngx_datatable_column_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-datatable-column", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TasksTypeListComponent_ngx_datatable_column_30_ng_template_1_Template, 2, 1, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TasksTypeListComponent_ngx_datatable_column_30_ng_template_2_Template, 4, 4, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", col_r5.name)("prop", col_r5.prop)("sortable", false);
} }
function TasksTypeListComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TasksTypeListComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31)(1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TasksTypeListComponent_ng_template_33_Template_input_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const row_r16 = restoredCtx.row; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.onCheckboxChange($event, row_r16)); })("click", function TasksTypeListComponent_ng_template_33_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TasksTypeListComponent_ng_template_33_Template_i_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const row_r16 = restoredCtx.row; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.editTaskType(row_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TasksTypeListComponent_ng_template_33_Template_i_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const row_r16 = restoredCtx.row; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.onDeleteTaskType(row_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class TasksTypeListComponent {
    constructor(fb, router, apiClient, toastr, dialog) {
        this.fb = fb;
        this.router = router;
        this.apiClient = apiClient;
        this.toastr = toastr;
        this.dialog = dialog;
        this.page = {
            perPage: 10,
            page: 1,
            total: 0,
        };
        this.perPageOptions = [10, 25, 50, 100];
        this.columns = [
            { name: 'Task Type ID', prop: 'id' },
            { name: 'Task Type Name', prop: 'name' },
            { name: 'Description', prop: 'description' },
            // { name: 'Created At', prop: 'created_at' },
            { name: 'Created By', prop: 'created_by' },
            { name: 'Updated By', prop: 'updated_by' },
        ];
        this.rows = [];
        this.buildForm();
    }
    ngOnInit() {
        this.filterForm.controls['name'].valueChanges.subscribe((value) => {
            if (value === '') {
                this.getTaskTypes();
            }
        });
        this.getTaskTypes();
    }
    getTaskTypes(search = '') {
        this.apiClient
            .get('task_type', {
            pagination: 1,
            page: this.page.page,
            per_page: this.page.perPage,
            name: search ? search : '',
        })
            .subscribe((resp) => {
            this.page.total = resp.result.total;
            this.rows = resp.result.data.map((row) => ({
                ...row,
                // created_at: getUKFormatedDate(row.created_at),
            }));
        });
    }
    buildForm() {
        this.filterForm = this.fb.group({
            name: [''],
            // ssn4: ['', [Validators.minLength(4), Validators.maxLength(4)]],
        });
    }
    setPage(pageInfo) {
        this.page.page = pageInfo.offset + 1;
        this.getTaskTypes();
    }
    updatePerPage(event) {
        this.page.perPage = event.target.value;
        this.getTaskTypes();
    }
    getTotalPages() {
        return Math.ceil(this.page.total / this.page.perPage);
    }
    onResetFilters() {
        this.filterForm.controls['name'].setValue(null);
        this.getTaskTypes();
    }
    onApplyFilters() {
        this.getTaskTypes(this.filterForm.controls['name'].value);
    }
    addNewTaskType() {
        this.router.navigateByUrl(`/tasks-type/add`);
    }
    editTaskType(row) {
        this.router.navigateByUrl(`/tasks-type/edit/${row.id}`, { state: { row } });
    }
    onDeleteTaskType(row) {
        this.showAlert('warning', 'Delete Task Type?', 'Do you really want to delete this Task Type.', row.id);
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
                this.deleteTaskType(id);
            }
        });
    }
    deleteTaskType(id) {
        this.apiClient
            .post(`task_type/delete/${id}`)
            .toPromise()
            .then((resp) => {
            this.toastr.success('Task Type Deleted successfully!', 'Success');
            this.getTaskTypes();
        })
            .catch((err) => {
            this.toastr.error(err.error.message, 'Error');
        });
    }
    onCheckboxChange(event, row) {
        console.log('Event and row', event, row);
    }
}
TasksTypeListComponent.ɵfac = function TasksTypeListComponent_Factory(t) { return new (t || TasksTypeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_1__.ApiClientService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
TasksTypeListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TasksTypeListComponent, selectors: [["app-tasks-type-list"]], decls: 34, vars: 17, consts: [[1, "d-flex", "mt-3", "mb-3", "justify-content-end"], ["type", "button", 1, "btn", "btn-secondary", "add-button", 3, "click"], ["autocomplete", "off", "novalidate", "", 1, "form", "w-100", 2, "margin", "20px 0px", 3, "formGroup", "ngSubmit"], [1, "form-content", "search-filter-block", "position-relative"], [1, "sub-title", "search-session-title"], [1, "position-absolute", "d-flex", 2, "top", "42px", "right", "20px"], ["type", "submit", 1, "btn", "btn-primary", "mx-1", "filter-button", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-outline-secondary", "mx-1", "reset-button", 3, "disabled", "click"], [1, "row"], [1, "field-block", "w-100"], [1, "col-12", 2, "color", "#808382"], [1, "row", 2, "padding-right", "100px"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], ["for", "perPageSelect", 1, "me-2", 2, "padding-bottom", "10px", "color", "#000000"], ["id", "perPageSelect", 1, "form-select", "me-2", 2, "width", "auto", "display", "inline-block", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "bootstrap", "custom-table", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarH", "limit", "count", "offset", "externalPaging", "page"], [3, "name", "prop", "sortable", 4, "ngFor", "ngForOf"], ["name", "Action", 3, "width"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], [3, "value", "selected"], [3, "name", "prop", "sortable"], [1, "mgx-header", 2, "font-weight", "900"], [1, "text-center", 3, "title"], [4, "ngIf"], [1, "mgx-header", "text-center"], [1, "d-flex", "justify-content-center", "gap-2"], ["type", "checkbox", 2, "cursor", "pointer", "margin-right", "12px", 3, "change", "click"], [1, "bi", "bi-pen", 2, "margin-left", "0", "cursor", "pointer", "margin-right", "10px", 3, "click"], [1, "bi", "bi-x-lg", "text-danger", 2, "font-weight", "bold", "cursor", "pointer", 3, "click"]], template: function TasksTypeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TasksTypeListComponent_Template_button_click_1_listener() { return ctx.addNewTaskType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "+ Add New Task Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function TasksTypeListComponent_Template_form_ngSubmit_3_listener() { return ctx.onApplyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "strong", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Search Task Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TasksTypeListComponent_Template_button_click_8_listener() { return ctx.onApplyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TasksTypeListComponent_Template_button_click_10_listener() { return ctx.onResetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16)(22, "div")(23, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TasksTypeListComponent_Template_select_change_25_listener($event) { return ctx.updatePerPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, TasksTypeListComponent_option_26_Template, 2, 3, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ngx-datatable", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function TasksTypeListComponent_Template_ngx_datatable_page_29_listener($event) { return ctx.setPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, TasksTypeListComponent_ngx_datatable_column_30_Template, 3, 3, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, TasksTypeListComponent_ng_template_32_Template, 2, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, TasksTypeListComponent_ng_template_33_Template, 4, 0, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.filterForm.controls["name"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.filterForm.controls["name"].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.perPageOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", ctx.rows)("columns", ctx.columns)("columnMode", "force")("headerHeight", 30)("footerHeight", 30)("rowHeight", "auto")("scrollbarH", true)("limit", ctx.page.perPage)("count", ctx.page.total)("offset", ctx.page.page - 1)("externalPaging", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 150);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnCellDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".search-session-title[_ngcontent-%COMP%] {\n  color: #00b5e9;\n  position: absolute;\n  top: 0;\n  left: 73px;\n  transform: translate(-50%, -50%);\n  background: white;\n  padding: 0 10px;\n  font-size: 16px;\n  font: 400 1rem/19px \"Poppins\", Arial, Helvetica, sans-serif;\n  text-transform: capitalize;\n  background: #fff;\n  position: absolute;\n  padding: 0 15px;\n  color: #00b5e9;\n}\n\n.plus-btn[_ngcontent-%COMP%] {\n  top: 10px;\n  right: 15px;\n}\n\n.form-content[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 20px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.mat-date-picker-custom[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton.btn-primary[_ngcontent-%COMP%], button.btn-default[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n\n.clickable-text[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  cursor: pointer;\n  text-align: center;\n}\n\n.filter-button[_ngcontent-%COMP%] {\n  background-color: #05a853;\n  color: #ffffff;\n  border: #05a853;\n  width: 110px;\n}\n\n.filter-button[_ngcontent-%COMP%]:hover {\n  background-color: #08783e;\n  border: #08783e;\n}\n\n.filter-button[_ngcontent-%COMP%]:disabled {\n  background-color: #8f8f8f;\n  border-color: #8f8f8f;\n  color: #5a4e4e !important;\n}\n\n.reset-button[_ngcontent-%COMP%] {\n  background-color: #00b5e9;\n  color: #ffffff;\n  border: #00b5e9;\n  width: 110px;\n}\n\n.reset-button[_ngcontent-%COMP%]:hover {\n  background-color: #0681a2;\n  border: #0681a2;\n}\n\n.reset-button[_ngcontent-%COMP%]:disabled {\n  background-color: #8f8f8f;\n  border-color: #8f8f8f;\n  color: #5a4e4e !important;\n}\n\n.add-button[_ngcontent-%COMP%] {\n  background-color: #05a853;\n  color: #ffffff;\n  border: #05a853;\n}\n\n.add-button[_ngcontent-%COMP%]:hover {\n  background-color: #08783e;\n  border: #08783e;\n}\n\n[_nghost-%COMP%]     .btn {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzLXR5cGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMkRBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTs7RUFFRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUtBO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtBQUZGIiwiZmlsZSI6InRhc2tzLXR5cGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtc2Vzc2lvbi10aXRsZSB7XG4gIGNvbG9yOiAjMDBiNWU5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNzNweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udDogNDAwIDFyZW0gLyAxOXB4IFwiUG9wcGluc1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGNvbG9yOiAjMDBiNWU5O1xufVxuXG4ucGx1cy1idG4ge1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxNXB4O1xufVxuXG4uZm9ybS1jb250ZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXQtZGF0ZS1waWNrZXItY3VzdG9tIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbi5idG4tcHJpbWFyeSxcbmJ1dHRvbi5idG4tZGVmYXVsdCB7XG4gIG1pbi13aWR0aDogMTEwcHg7XG59XG4uY2xpY2thYmxlLXRleHQge1xuICBjb2xvcjogIzJlN2QzMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5cbi5maWx0ZXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTg1MztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogIzA1YTg1MztcbiAgd2lkdGg6IDExMHB4O1xufVxuXG4uZmlsdGVyLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODc4M2U7XG4gIGJvcmRlcjogIzA4NzgzZTtcbn1cbi5maWx0ZXItYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhmOGY4ZjtcbiAgYm9yZGVyLWNvbG9yOiM4ZjhmOGYgO1xuICBjb2xvcjogIzVhNGU0ZSAhaW1wb3J0YW50XG4gfVxuXG5cbi5yZXNldC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMGI1ZTk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6ICMwMGI1ZTk7XG4gIHdpZHRoOiAxMTBweDtcbn1cblxuLnJlc2V0LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjgxYTI7XG4gIGJvcmRlcjogIzA2ODFhMjtcbn1cblxuLnJlc2V0LWJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZjhmOGY7XG4gIGJvcmRlci1jb2xvcjojOGY4ZjhmIDtcbiAgY29sb3I6ICM1YTRlNGUgIWltcG9ydGFudFxuIH1cblxuLmFkZC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhODUzO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAjMDVhODUzO1xufVxuXG4uYWRkLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODc4M2U7XG4gIGJvcmRlcjogIzA4NzgzZTtcbn1cblxuXG5cbjpob3N0IDo6bmctZGVlcCAuYnRuIHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xufSJdfQ== */"], data: { animation: [
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

/***/ 6515:
/*!**********************************************************************!*\
  !*** ./src/app/pages/master/tasks-type/tasks-type-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksTypeRoutingModule": () => (/* binding */ TasksTypeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tasks_type_form_tasks_type_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-type-form/tasks-type-form.component */ 8916);
/* harmony import */ var _tasks_type_list_tasks_type_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks-type-list/tasks-type-list.component */ 9524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _tasks_type_list_tasks_type_list_component__WEBPACK_IMPORTED_MODULE_1__.TasksTypeListComponent },
    { path: 'add', component: _tasks_type_form_tasks_type_form_component__WEBPACK_IMPORTED_MODULE_0__.TasksTypeFormComponent },
    { path: 'edit/:id', component: _tasks_type_form_tasks_type_form_component__WEBPACK_IMPORTED_MODULE_0__.TasksTypeFormComponent },
];
class TasksTypeRoutingModule {
}
TasksTypeRoutingModule.ɵfac = function TasksTypeRoutingModule_Factory(t) { return new (t || TasksTypeRoutingModule)(); };
TasksTypeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TasksTypeRoutingModule });
TasksTypeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TasksTypeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 1189:
/*!**************************************************************!*\
  !*** ./src/app/pages/master/tasks-type/tasks-type.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksTypeModule": () => (/* binding */ TasksTypeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _tasks_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-type-routing.module */ 6515);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _tasks_type_form_tasks_type_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks-type-form/tasks-type-form.component */ 8916);
/* harmony import */ var _tasks_type_list_tasks_type_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks-type-list/tasks-type-list.component */ 9524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);










class TasksTypeModule {
}
TasksTypeModule.ɵfac = function TasksTypeModule_Factory(t) { return new (t || TasksTypeModule)(); };
TasksTypeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TasksTypeModule });
TasksTypeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        // MaterialModule,
        _tasks_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.TasksTypeRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TasksTypeModule, { declarations: [_tasks_type_list_tasks_type_list_component__WEBPACK_IMPORTED_MODULE_2__.TasksTypeListComponent, _tasks_type_form_tasks_type_form_component__WEBPACK_IMPORTED_MODULE_1__.TasksTypeFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        // MaterialModule,
        _tasks_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.TasksTypeRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__.CollapseModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_master_tasks-type_tasks-type_module_ts.js.map