"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_master_designations_designations_module_ts"],{

/***/ 7007:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/master/designations/designations-form/designations-form.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignationsFormComponent": () => (/* binding */ DesignationsFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/services/api-client.service */ 9228);





function DesignationsFormComponent_sup_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DesignationsFormComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter your name!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DesignationsFormComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Maximum characters should be 25!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DesignationsFormComponent_sup_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "sup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DesignationsFormComponent_small_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter your description!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DesignationsFormComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Maximum characters should be 25!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class DesignationsFormComponent {
    constructor(fb, location, apiClient) {
        this.fb = fb;
        this.location = location;
        this.apiClient = apiClient;
        this.displayValidation = true;
    }
    ngOnInit() {
        this.designationForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
        this.dataForEdit = history.state;
        if (!!this.dataForEdit.row) {
            this.designationForm.patchValue({
                name: this.dataForEdit.row.name,
                description: this.dataForEdit.row.description,
            });
        }
    }
    onFileChange(event, field) {
        if (event.target.files.length > 0) {
            this.designationForm.patchValue({ [field]: event.target.files[0] });
        }
    }
    onSubmit() {
        if (this.designationForm.valid) {
            if (!!this.dataForEdit.row) {
                this.apiClient
                    .post(`designation/update?id=${this.dataForEdit.row.id}&name=${this.designationForm.controls['name'].value}&description=${this.designationForm.controls['description'].value}`)
                    .subscribe((resp) => {
                    if (resp.status) {
                        this.location.back();
                    }
                });
            }
            else {
                this.apiClient
                    .post(`designation/insert?name=${this.designationForm.controls['name'].value}&description=${this.designationForm.controls['description'].value}`)
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
DesignationsFormComponent.ɵfac = function DesignationsFormComponent_Factory(t) { return new (t || DesignationsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_0__.ApiClientService)); };
DesignationsFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DesignationsFormComponent, selectors: [["app-designations-form"]], decls: 32, vars: 9, consts: [[1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "position-absolute", 2, "right", "10px", "cursor", "pointer", "color", "white"], [1, "fa", "fa-times", 3, "click"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "row", "mt-3"], [1, "col-md-4"], [1, "form-group"], ["for", "firstName"], [4, "ngIf"], ["type", "text", "name", "name", "formControlName", "name", "alphaOnly", "", 1, "form-control"], ["class", "form-text text-muted danger", 4, "ngIf"], ["for", "lastName"], ["type", "text", "formControlName", "description", "id", "description", 1, "form-control"], [1, "form-buttons", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", "submit-button", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-secondary", "cancel-button", 3, "click"], [1, "form-text", "text-muted", "danger"]], template: function DesignationsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4)(7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DesignationsFormComponent_Template_i_click_7_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DesignationsFormComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DesignationsFormComponent_sup_15_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DesignationsFormComponent_small_17_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DesignationsFormComponent_small_18_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9)(20, "div", 10)(21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DesignationsFormComponent_sup_23_Template, 2, 0, "sup", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, DesignationsFormComponent_small_25_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, DesignationsFormComponent_small_26_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17)(28, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DesignationsFormComponent_Template_button_click_28_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DesignationsFormComponent_Template_button_click_30_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        let tmp_3_0;
        let tmp_4_0;
        let tmp_6_0;
        let tmp_7_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", !!ctx.dataForEdit.row ? "Edit" : "Add", " Designation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.designationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.designationForm.get("name")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]) && (((tmp_3_0 = ctx.designationForm.get("name")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.designationForm.get("name")) == null ? null : tmp_3_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.designationForm.get("name")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["maxlength"]) && ((tmp_4_0 = ctx.designationForm.get("name")) == null ? null : tmp_4_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.designationForm.get("description")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["required"]) && (((tmp_6_0 = ctx.designationForm.get("description")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.designationForm.get("description")) == null ? null : tmp_6_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.designationForm.get("description")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["maxlength"]) && ((tmp_7_0 = ctx.designationForm.get("description")) == null ? null : tmp_7_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.designationForm.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".form-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: auto;\n  padding: 20px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n}\n\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n\nng-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  background-color: #05a853;\n  color: #ffffff;\n  border: #05a853;\n  width: 110px;\n}\n\n.cancel-button[_ngcontent-%COMP%]:hover {\n  background-color: #08783e;\n  border: #08783e;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  background-color: #00b5e9;\n  color: #ffffff;\n  border: #00b5e9;\n  width: 110px;\n}\n\n.submit-button[_ngcontent-%COMP%]:hover {\n  background-color: #0681a2;\n  border: #0681a2;\n}\n\n.submit-button[_ngcontent-%COMP%]:disabled {\n  background-color: #8f8f8f;\n  border-color: #8f8f8f;\n  color: #5a4e4e !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbmF0aW9ucy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFBRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBSUE7RUFDRSxXQUFBO0FBREY7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBSEY7O0FBUUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBTEY7O0FBUUE7RUFDQyx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFMRCIsImZpbGUiOiJkZXNpZ25hdGlvbnMtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbmg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG59XG5cbi5yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG5cbm5nLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cblxuLmNhbmNlbC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhODUzO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAjMDVhODUzO1xuICB3aWR0aDogMTEwcHg7XG59XG5cbi5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NzgzZTtcbiAgYm9yZGVyOiAjMDg3ODNlO1xufVxuXG5cblxuLnN1Ym1pdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMGI1ZTk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6ICMwMGI1ZTk7XG4gIHdpZHRoOiAxMTBweDtcbn1cblxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY4MWEyO1xuICBib3JkZXI6ICMwNjgxYTI7XG59XG5cbi5zdWJtaXQtYnV0dG9uOmRpc2FibGVkIHtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY4ZjhmO1xuIGJvcmRlci1jb2xvcjojOGY4ZjhmIDtcbiBjb2xvcjogIzVhNGU0ZSAhaW1wb3J0YW50XG59Il19 */"] });


/***/ }),

/***/ 4939:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/master/designations/designations-list/designations-list.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignationsListComponent": () => (/* binding */ DesignationsListComponent)
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











function DesignationsListComponent_option_26_Template(rf, ctx) { if (rf & 1) {
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
function DesignationsListComponent_ngx_datatable_column_30_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r8 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](column_r8.name);
} }
function DesignationsListComponent_ngx_datatable_column_30_ng_template_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 1, row_r10.created_at, "short"));
} }
function DesignationsListComponent_ngx_datatable_column_30_ng_template_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 1, row_r10.updated_at, "short"));
} }
function DesignationsListComponent_ngx_datatable_column_30_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DesignationsListComponent_ngx_datatable_column_30_ng_template_2_div_2_Template, 4, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DesignationsListComponent_ngx_datatable_column_30_ng_template_2_div_3_Template, 4, 4, "div", 29);
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
function DesignationsListComponent_ngx_datatable_column_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-datatable-column", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DesignationsListComponent_ngx_datatable_column_30_ng_template_1_Template, 2, 1, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DesignationsListComponent_ngx_datatable_column_30_ng_template_2_Template, 4, 4, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", col_r5.name)("prop", col_r5.prop)("sortable", false);
} }
function DesignationsListComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DesignationsListComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31)(1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DesignationsListComponent_ng_template_33_Template_input_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const row_r16 = restoredCtx.row; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.onCheckboxChange($event, row_r16)); })("click", function DesignationsListComponent_ng_template_33_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DesignationsListComponent_ng_template_33_Template_i_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const row_r16 = restoredCtx.row; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.editDesignation(row_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DesignationsListComponent_ng_template_33_Template_i_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const row_r16 = restoredCtx.row; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.onDeleteDesignation(row_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class DesignationsListComponent {
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
            { name: 'Designation ID', prop: 'id' },
            { name: 'Designation Name', prop: 'name' },
            { name: 'Designation Description', prop: 'description' },
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
                this.getDesignations();
            }
        });
        this.getDesignations();
    }
    getDesignations(search = '') {
        this.apiClient
            .get('designations', {
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
        this.getDesignations();
    }
    updatePerPage(event) {
        this.page.perPage = event.target.value;
        this.getDesignations();
    }
    getTotalPages() {
        return Math.ceil(this.page.total / this.page.perPage);
    }
    onResetFilters() {
        this.filterForm.controls['name'].setValue(null);
        this.getDesignations();
    }
    onApplyFilters() {
        this.getDesignations(this.filterForm.controls['name'].value);
    }
    addNewDesignation() {
        this.router.navigateByUrl(`/designations/add`);
    }
    editDesignation(row) {
        this.router.navigateByUrl(`/designations/edit/${row.id}`, {
            state: { row },
        });
    }
    onDeleteDesignation(row) {
        this.showAlert('warning', 'Delete Designation?', 'Do you really want to delete this designation.', row.id);
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
                this.deleteDesignation(id);
            }
        });
    }
    deleteDesignation(id) {
        this.apiClient
            .get(`designation/delete/${id}`)
            .toPromise()
            .then((resp) => {
            this.toastr.success('Designation Deleted successfully!', 'Success');
            this.getDesignations();
        })
            .catch((err) => {
            this.toastr.error(err.error.message, 'Error');
        });
    }
    onCheckboxChange(event, row) {
        console.log('Event and row', event, row);
    }
}
DesignationsListComponent.ɵfac = function DesignationsListComponent_Factory(t) { return new (t || DesignationsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](shared_services_api_client_service__WEBPACK_IMPORTED_MODULE_1__.ApiClientService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
DesignationsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DesignationsListComponent, selectors: [["app-designations-list"]], decls: 34, vars: 17, consts: [[1, "d-flex", "mt-3", "mb-3", "justify-content-end"], ["type", "button", 1, "btn", "btn-secondary", "add-button", 3, "click"], ["autocomplete", "off", "novalidate", "", 1, "form", "w-100", 2, "margin", "20px 0px", 3, "formGroup", "ngSubmit"], [1, "form-content", "search-filter-block", "position-relative"], [1, "sub-title", "search-designation-title"], [1, "position-absolute", "d-flex", 2, "top", "42px", "right", "20px"], ["type", "submit", 1, "btn", "btn-primary", "mx-1", "filter-button", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-outline-secondary", "mx-1", "reset-button", 3, "disabled", "click"], [1, "row"], [1, "field-block", "w-100"], [1, "col-12", 2, "color", "#808382"], [1, "row", 2, "padding-right", "100px"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], ["for", "perPageSelect", 1, "me-2", 2, "padding-bottom", "10px", "color", "#000000"], ["id", "perPageSelect", 1, "form-select", "me-2", 2, "width", "auto", "display", "inline-block", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "bootstrap", "custom-table", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarH", "limit", "count", "offset", "externalPaging", "page"], [3, "name", "prop", "sortable", 4, "ngFor", "ngForOf"], ["name", "Action", 3, "width"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], [3, "value", "selected"], [3, "name", "prop", "sortable"], [1, "mgx-header", 2, "font-weight", "900"], [1, "text-center", 3, "title"], [4, "ngIf"], [1, "mgx-header", "text-center"], [1, "d-flex", "justify-content-center", "gap-2"], ["type", "checkbox", 2, "cursor", "pointer", "margin-right", "12px", 3, "change", "click"], [1, "bi", "bi-pen", 2, "margin-left", "0", "cursor", "pointer", "margin-right", "10px", 3, "click"], [1, "bi", "bi-x-lg", "text-danger", 2, "font-weight", "bold", "cursor", "pointer", 3, "click"]], template: function DesignationsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DesignationsListComponent_Template_button_click_1_listener() { return ctx.addNewDesignation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "+ Add New Designation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function DesignationsListComponent_Template_form_ngSubmit_3_listener() { return ctx.onApplyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "strong", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Search Designation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DesignationsListComponent_Template_button_click_8_listener() { return ctx.onApplyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DesignationsListComponent_Template_button_click_10_listener() { return ctx.onResetFilters(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DesignationsListComponent_Template_select_change_25_listener($event) { return ctx.updatePerPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, DesignationsListComponent_option_26_Template, 2, 3, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ngx-datatable", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("page", function DesignationsListComponent_Template_ngx_datatable_page_29_listener($event) { return ctx.setPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, DesignationsListComponent_ngx_datatable_column_30_Template, 3, 3, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, DesignationsListComponent_ng_template_32_Template, 2, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, DesignationsListComponent_ng_template_33_Template, 4, 0, "ng-template", 24);
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnCellDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".search-designation-title[_ngcontent-%COMP%] {\n  color: #00b5e9;\n  position: absolute;\n  top: 0;\n  left: 73px;\n  transform: translate(-50%, -50%);\n  background: white;\n  padding: 0 10px;\n  font-size: 16px;\n  font: 400 1rem/19px \"Poppins\", Arial, Helvetica, sans-serif;\n  text-transform: capitalize;\n  background: #fff;\n  position: absolute;\n  padding: 0 15px;\n  color: #00b5e9;\n}\n\n.plus-btn[_ngcontent-%COMP%] {\n  top: 10px;\n  right: 15px;\n}\n\n.form-content[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 20px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.mat-date-picker-custom[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton.btn-primary[_ngcontent-%COMP%], button.btn-default[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n\n.clickable-text[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  cursor: pointer;\n  text-align: center;\n}\n\n.filter-button[_ngcontent-%COMP%] {\n  background-color: #05a853;\n  color: #ffffff;\n  border: #05a853;\n  width: 110px;\n}\n\n.filter-button[_ngcontent-%COMP%]:hover {\n  background-color: #08783e;\n  border: #08783e;\n}\n\n.filter-button[_ngcontent-%COMP%]:disabled {\n  background-color: #8f8f8f;\n  border-color: #8f8f8f;\n  color: #5a4e4e !important;\n}\n\n.reset-button[_ngcontent-%COMP%] {\n  background-color: #00b5e9;\n  color: #ffffff;\n  border: #00b5e9;\n  width: 110px;\n}\n\n.reset-button[_ngcontent-%COMP%]:hover {\n  background-color: #0681a2;\n  border: #0681a2;\n}\n\n.reset-button[_ngcontent-%COMP%]:disabled {\n  background-color: #8f8f8f;\n  border-color: #8f8f8f;\n  color: #5a4e4e !important;\n}\n\n.add-button[_ngcontent-%COMP%] {\n  background-color: #05a853;\n  color: #ffffff;\n  border: #05a853;\n}\n\n.add-button[_ngcontent-%COMP%]:hover {\n  background-color: #08783e;\n  border: #08783e;\n}\n\n[_nghost-%COMP%]     .btn {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbmF0aW9ucy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwyREFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBOztFQUVFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBS0E7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0FBRkYiLCJmaWxlIjoiZGVzaWduYXRpb25zLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWRlc2lnbmF0aW9uLXRpdGxlIHtcbiAgY29sb3I6ICMwMGI1ZTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA3M3B4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250OiA0MDAgMXJlbSAvIDE5cHggXCJQb3BwaW5zXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgY29sb3I6ICMwMGI1ZTk7XG59XG5cbi5wbHVzLWJ0biB7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbi5mb3JtLWNvbnRlbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1hdC1kYXRlLXBpY2tlci1jdXN0b20gaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uLmJ0bi1wcmltYXJ5LFxuYnV0dG9uLmJ0bi1kZWZhdWx0IHtcbiAgbWluLXdpZHRoOiAxMTBweDtcbn1cbi5jbGlja2FibGUtdGV4dCB7XG4gIGNvbG9yOiAjMmU3ZDMyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cblxuLmZpbHRlci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhODUzO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAjMDVhODUzO1xuICB3aWR0aDogMTEwcHg7XG59XG5cbi5maWx0ZXItYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NzgzZTtcbiAgYm9yZGVyOiAjMDg3ODNlO1xufVxuLmZpbHRlci1idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY4ZjhmO1xuICBib3JkZXItY29sb3I6IzhmOGY4ZiA7XG4gIGNvbG9yOiAjNWE0ZTRlICFpbXBvcnRhbnRcbiB9XG5cblxuLnJlc2V0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IzAwYjVlOTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogIzAwYjVlOTtcbiAgd2lkdGg6IDExMHB4O1xufVxuXG4ucmVzZXQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2ODFhMjtcbiAgYm9yZGVyOiAjMDY4MWEyO1xufVxuXG4ucmVzZXQtYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhmOGY4ZjtcbiAgYm9yZGVyLWNvbG9yOiM4ZjhmOGYgO1xuICBjb2xvcjogIzVhNGU0ZSAhaW1wb3J0YW50XG4gfVxuXG4uYWRkLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWE4NTM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6ICMwNWE4NTM7XG59XG5cbi5hZGQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NzgzZTtcbiAgYm9yZGVyOiAjMDg3ODNlO1xufVxuXG5cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4ge1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG59Il19 */"], data: { animation: [
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

/***/ 2072:
/*!**************************************************************************!*\
  !*** ./src/app/pages/master/designations/designations-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignationsRoutingModule": () => (/* binding */ DesignationsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _designations_form_designations_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designations-form/designations-form.component */ 7007);
/* harmony import */ var _designations_list_designations_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designations-list/designations-list.component */ 4939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _designations_list_designations_list_component__WEBPACK_IMPORTED_MODULE_1__.DesignationsListComponent },
    { path: 'add', component: _designations_form_designations_form_component__WEBPACK_IMPORTED_MODULE_0__.DesignationsFormComponent },
    { path: 'edit/:id', component: _designations_form_designations_form_component__WEBPACK_IMPORTED_MODULE_0__.DesignationsFormComponent },
];
class DesignationsRoutingModule {
}
DesignationsRoutingModule.ɵfac = function DesignationsRoutingModule_Factory(t) { return new (t || DesignationsRoutingModule)(); };
DesignationsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DesignationsRoutingModule });
DesignationsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DesignationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 2195:
/*!******************************************************************!*\
  !*** ./src/app/pages/master/designations/designations.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignationsModule": () => (/* binding */ DesignationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _designations_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designations-routing.module */ 2072);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _designations_form_designations_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designations-form/designations-form.component */ 7007);
/* harmony import */ var _designations_list_designations_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./designations-list/designations-list.component */ 4939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);










class DesignationsModule {
}
DesignationsModule.ɵfac = function DesignationsModule_Factory(t) { return new (t || DesignationsModule)(); };
DesignationsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DesignationsModule });
DesignationsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        // MaterialModule,
        _designations_routing_module__WEBPACK_IMPORTED_MODULE_0__.DesignationsRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DesignationsModule, { declarations: [_designations_list_designations_list_component__WEBPACK_IMPORTED_MODULE_2__.DesignationsListComponent, _designations_form_designations_form_component__WEBPACK_IMPORTED_MODULE_1__.DesignationsFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        // MaterialModule,
        _designations_routing_module__WEBPACK_IMPORTED_MODULE_0__.DesignationsRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__.CollapseModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_master_designations_designations_module_ts.js.map