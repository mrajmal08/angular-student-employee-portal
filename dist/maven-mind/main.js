"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["main"],{

/***/ 8975:
/*!*******************************************************************!*\
  !*** ./shared/dialogs/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);





function ConfirmDialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onNo()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onYes()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@popInAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.message);
} }
class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onConfirm() {
        this.dialogRef.close(true);
    }
    onCancel() {
        this.dialogRef.close(false);
    }
    onNo() {
        this.dialogRef.close(false);
    }
    onYes() {
        this.dialogRef.close(true);
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 1, vars: 1, consts: [["class", "dialog-container", 4, "ngIf"], [1, "dialog-container"], [1, "dialog-content"], [1, "title"], [1, "msg"], [1, "modal-footer"], [3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmDialogComponent_div_0_Template, 11, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type === "warning");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".dialog-container[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  min-width: 400px;\n  max-width: 400px;\n  align-items: center;\n  justify-content: center;\n}\n\n.dialog-content[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  padding-top: 15px;\n}\n\n.dialog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  color: #333;\n  padding: 10px 20px;\n}\n\n.dialog-content[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%] {\n  font-size: 22px;\n  padding: 10px 25px;\n  margin-bottom: 20px;\n  text-align: left;\n}\n\n.dialog-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.dialog-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-bottom-left-radius: 12px;\n}\n\n.dialog-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 12px;\n}\n\n.dialog-icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 70px; \n  height: 70px;\n  border-radius: 50%;\n  border: 3px solid; \n}\n\n\n\n.warning-icon[_ngcontent-%COMP%] {\n  color: orange;\n  border-color: orange;\n}\n\n\n\n.error-icon[_ngcontent-%COMP%] {\n  color: red;\n  border-color: red;\n}\n\n.exclamation[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: bold;\n}\n\n.dialog-message[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 10px 0;\n}\n\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n}\n\n.confirm-btn[_ngcontent-%COMP%] {\n  background: #d32f2f;\n  color: white;\n}\n\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  width: 300px;\n  text-align: center;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n\n.modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 20px 0 10px;\n  color: black;\n}\n\n.modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0 20px 20px;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  border-top: 1px solid #ddd;\n}\n\n.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 15px 0;\n  border: none;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 14px;\n  background: white;\n}\n\n.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  color: #555;\n  border-right: 1px solid #ddd;\n}\n\n.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child:hover {\n  background-color: #555;\n  color: white;\n}\n\n.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  color: red;\n}\n\n.modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child:hover {\n  background-color: red;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBRUEsa0JBQUE7RUFLQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUpKOztBQVdFO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBUko7O0FBV0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFUTjs7QUFhSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFYTjs7QUFzQkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFwQk47O0FBd0JJO0VBQ0UsK0JBQUE7QUF0Qk47O0FBd0JJO0VBQ0UsZ0NBQUE7QUF0Qk47O0FBNEJFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUEsRUFBQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBLEVBQUEseUNBQUE7QUF6Qko7O0FBNEJBLGtCQUFBOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0FBekJKOztBQTRCQSxnQkFBQTs7QUFDQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQXpCSjs7QUE0QkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUF6Qko7O0FBOEJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUEzQko7O0FBOEJFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQTNCSjs7QUE4QkU7RUFDRSxtQkFBQTtBQTNCSjs7QUE4QkU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUEzQko7O0FBa0RFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7QUEvQ0o7O0FBa0RFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQS9DSjs7QUFrREU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUEvQ0o7O0FBa0RFO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0FBL0NKOztBQWtERTtFQUNFLE9BQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQS9DSjs7QUFrREU7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7QUEvQ0o7O0FBaURFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBOUNKOztBQWlERTtFQUNFLFVBQUE7QUE5Q0o7O0FBaURFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBOUNKIiwiZmlsZSI6ImNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAvLyBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBwYWRkaW5nOiAyNXB4O1xuICAgIC8vIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvLyB0b3A6IDUwJTtcbiAgICAvLyBsZWZ0OiA1MCU7XG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cblxuICAuZGlhbG9nLWNvbnRlbnR7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcblxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgfVxuXG5cbiAgICAubXNne1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgcGFkZGluZzogMTBweCAyNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7IFxuICAgIH1cblxuXG4gICAgLy8gLm1vZGFsLWZvb3RlciB7XG4gICAgLy8gICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vICAgYm9yZGVyOiAzcHggc29saWQgI2RkZDtcbiAgICAvLyAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgLy8gfVxuXG5cbiAgICAubW9kYWwtZm9vdGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAvLyBib3JkZXItdG9wOiAzcHggc29saWQgI2RkZDsgLyogT25seSB0b3AgYm9yZGVyICovXG4gICAgICAvLyBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbiAgICAubW9kYWwtZm9vdGVyIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xuICAgIH1cbiAgICAubW9kYWwtZm9vdGVyIGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xuICAgIH1cbiAgXG5cbiAgfVxuICBcbiAgLmRpYWxvZy1pY29uIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNzBweDsgIC8qIEFkanVzdCBzaXplIGFzIG5lZWRlZCAqL1xuICAgIGhlaWdodDogNzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQ7ICAvKiBCb3JkZXIgY29sb3Igd2lsbCBjaGFuZ2UgZHluYW1pY2FsbHkgKi9cbn1cblxuLyogV2FybmluZyBzdHlsZSAqL1xuLndhcm5pbmctaWNvbiB7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICBib3JkZXItY29sb3I6IG9yYW5nZTtcbn1cblxuLyogRXJyb3Igc3R5bGUgKi9cbi5lcnJvci1pY29uIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xufVxuICBcbiAgLmV4Y2xhbWF0aW9uIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cblxuICB9XG4gIFxuICAuZGlhbG9nLW1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuICBcbiAgLmRpYWxvZy1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgfVxuICBcbiAgLmNhbmNlbC1idG4ge1xuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIH1cbiAgXG4gIC5jb25maXJtLWJ0biB7XG4gICAgYmFja2dyb3VuZDogI2QzMmYyZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAubW9kYWwge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5tb2RhbCBoMiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMjBweCAwIDEwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLm1vZGFsIHAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDAgMjBweCAyMHB4O1xuICB9XG5cbiAgLm1vZGFsLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgfVxuXG4gIC5tb2RhbC1mb290ZXIgYnV0dG9uIHtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuXG4gIC5tb2RhbC1mb290ZXIgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xuICB9XG4gIC5tb2RhbC1mb290ZXIgYnV0dG9uOmZpcnN0LWNoaWxkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5tb2RhbC1mb290ZXIgYnV0dG9uOmxhc3QtY2hpbGQge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICAubW9kYWwtZm9vdGVyIGJ1dHRvbjpsYXN0LWNoaWxkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9Il19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('popInAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('0.2s ease-out', // Faster duration (0.2s)
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.keyframes)([
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                            transform: 'scale3d(0.7, 0.7, 0.7)',
                            opacity: 0,
                            offset: 0,
                        }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                            transform: 'scale3d(1.15, 1.15, 1.15)',
                            opacity: 1,
                            offset: 0.5,
                        }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ transform: 'scale3d(1, 1, 1)', opacity: 1, offset: 1 }), // Settle back to normal
                    ])),
                ]),
            ]),
        ] } });


/***/ }),

/***/ 2746:
/*!*************************************!*\
  !*** ./shared/guards/auth.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canLoad(route, segments) {
        const token = localStorage.getItem('accessToken');
        if (token) {
            return true;
        }
        else {
            this.router.navigate(['/auth/login']); // Redirect to login route
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared/guards/auth.guard */ 2746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-shared_services_api-client_service_ts-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("src_app_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then((m) => m.AuthModule),
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-shared_services_api-client_service_ts-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("src_app_pages_pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 8950)).then((m) => m.PagesModule),
        canLoad: [shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
    { path: '**', redirectTo: 'auth', pathMatch: 'full' },
    // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' } // Default fallback
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'maven-mind';
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
                const restrictedRoutes = ['/auth/login', '/dashboard']; // Restrict only these
                if (restrictedRoutes.includes(this.router.url)) {
                    setTimeout(() => {
                        window.history.pushState(null, '', window.location.href);
                    }, 0);
                }
            }
        });
        window.onpopstate = () => {
            const restrictedRoutes = ['/auth/login', '/dashboard'];
            if (restrictedRoutes.includes(this.router.url)) {
                window.history.pushState(null, '', window.location.href);
            }
        };
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/dialogs/confirm-dialog/confirm-dialog.component */ 8975);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrModule.forRoot({
            positionClass: 'toast-top-center',
            progressBar: true,
            progressAnimation: 'decreasing',
            timeOut: 5000,
            preventDuplicates: true,
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialogComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map