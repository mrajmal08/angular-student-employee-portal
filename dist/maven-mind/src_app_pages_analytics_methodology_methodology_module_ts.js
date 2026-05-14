"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_analytics_methodology_methodology_module_ts"],{

/***/ 9530:
/*!***************************************************************************!*\
  !*** ./src/app/pages/analytics/methodology/methodology-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MethodologyRoutingModule": () => (/* binding */ MethodologyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _methodology_view_methodology_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methodology-view/methodology-view.component */ 987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'view', component: _methodology_view_methodology_view_component__WEBPACK_IMPORTED_MODULE_0__.MethodologyViewComponent },
];
class MethodologyRoutingModule {
}
MethodologyRoutingModule.ɵfac = function MethodologyRoutingModule_Factory(t) { return new (t || MethodologyRoutingModule)(); };
MethodologyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MethodologyRoutingModule });
MethodologyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MethodologyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 987:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/analytics/methodology/methodology-view/methodology-view.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MethodologyViewComponent": () => (/* binding */ MethodologyViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function MethodologyViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const filter_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", filter_r4.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r4.value);
} }
function MethodologyViewComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5);
} }
function MethodologyViewComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r6.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r6.value);
} }
function MethodologyViewComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7.meaning);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7.usedIn);
} }
class MethodologyViewComponent {
    constructor() {
        this.filters = [
            { label: 'Academic Year', value: '2025/26' },
            { label: 'Mode', value: 'All' },
            { label: 'Level', value: 'All' },
            { label: 'Faculty', value: 'All' },
            { label: 'Partner', value: 'All' },
            { label: 'Characteristic', value: 'All' },
        ];
        this.logicDefinitions = [
            'Continuation = in-scope starters who are still studying or have already achieved a qualification in the continuation window.',
            'Completion = in-scope starters who achieve the intended award, an exit award, or are still validly continuing in the completion window.',
            'Progression = positive outcomes among qualifying leavers, always shown with contactability and response-rate context.',
            'Thresholds are applied by mode and level. Mixed-threshold views trigger warnings or require a narrower filter.',
        ];
        this.versionRows = [
            { field: 'Rules version', value: '2.4' },
            { field: 'Effective from', value: '01 Jan 2026' },
            { field: 'Previous version', value: '2.3' },
            {
                field: 'Snapshot frequency',
                value: 'Monthly frozen snapshot + daily operational refresh',
            },
            { field: 'Small-number caution', value: 'Denominator < 50' },
        ];
        this.coreFieldRows = [
            {
                field: 'student_id',
                meaning: 'Stable student identifier',
                source: 'Student Records',
                usedIn: 'All drill-down pages',
            },
            {
                field: 'course_instance_id',
                meaning: 'Unique study instance key',
                source: 'Student Records',
                usedIn: 'Continuation, completion, programme views',
            },
            {
                field: 'registration_status',
                meaning: 'Current and historical status',
                source: 'Student Records',
                usedIn: 'Continuation and risk logic',
            },
        ];
    }
}
MethodologyViewComponent.ɵfac = function MethodologyViewComponent_Factory(t) { return new (t || MethodologyViewComponent)(); };
MethodologyViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MethodologyViewComponent, selectors: [["app-methodology-view"]], decls: 48, vars: 4, consts: [[1, "methodology-page"], [1, "page-heading"], ["aria-label", "Methodology filters", 1, "filter-bar"], ["class", "filter-pill", 4, "ngFor", "ngForOf"], [1, "content-grid", "content-grid--top"], [1, "dashboard-panel"], [1, "panel-header"], [1, "logic-list"], [4, "ngFor", "ngForOf"], [1, "table-wrapper"], [1, "content-grid"], [1, "dashboard-panel", "dashboard-panel--full"], [1, "filter-pill"]], template: function MethodologyViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Methodology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "B3 & Student Outcomes / Compliance Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MethodologyViewComponent_div_7_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4)(9, "article", 5)(10, "div", 6)(11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logic and definitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MethodologyViewComponent_li_14_Template, 2, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "article", 5)(16, "div", 6)(17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Version control and assumptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9)(20, "table")(21, "thead")(22, "tr")(23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MethodologyViewComponent_tr_28_Template, 5, 2, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 10)(30, "article", 11)(31, "div", 6)(32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Core fields used across the module");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9)(35, "table")(36, "thead")(37, "tr")(38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Meaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Used in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MethodologyViewComponent_tr_47_Template, 9, 4, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logicDefinitions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.versionRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.coreFieldRows);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".methodology-page[_ngcontent-%COMP%] {\n  padding: 10px 8px 24px;\n  background: #f5f7fb;\n  color: #1e2c46;\n}\n\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 18px;\n  margin-bottom: 12px;\n}\n\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 800;\n  line-height: 1.05;\n  color: #1d2942;\n}\n\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #8190a9;\n}\n\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 14px;\n  padding: 10px 12px;\n  background: #ffffff;\n  border: 1px solid #dde5f0;\n  border-radius: 16px;\n  box-shadow: 0 6px 16px rgba(18, 40, 78, 0.04);\n}\n\n.filter-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 30px;\n  padding: 6px 14px;\n  border: 1px solid #d5deea;\n  border-radius: 999px;\n  background: #f8fbff;\n  color: #5c6c84;\n  font-size: 0.85rem;\n  line-height: 1;\n}\n\n.filter-pill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #3d4c65;\n  font-weight: 700;\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n\n.content-grid--top[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin-bottom: 14px;\n}\n\n.dashboard-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dce5f1;\n  border-radius: 18px;\n  box-shadow: 0 10px 22px rgba(19, 40, 72, 0.05);\n  padding: 12px 12px 14px;\n}\n\n.dashboard-panel--full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: #25324b;\n}\n\n.logic-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin: 0;\n  padding: 4px 4px 0 0;\n  list-style: none;\n}\n\n.logic-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 18px;\n  color: #4d5d76;\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: 1.45;\n}\n\n.logic-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0.56rem;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #4e83ff;\n  box-shadow: 0 0 0 3px rgba(78, 131, 255, 0.14);\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: 0.9rem;\n  color: #3b4a63;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  background: #eef4fc;\n  border-top: 1px solid #d7e1ee;\n  border-bottom: 1px solid #d7e1ee;\n  font-weight: 700;\n  text-align: left;\n  white-space: nowrap;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #d7e1ee;\n  border-top-left-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #d7e1ee;\n  border-top-right-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  border-bottom: 1px solid #e3eaf4;\n  border-right: 1px solid #e3eaf4;\n  background: #ffffff;\n  vertical-align: top;\n  font-weight: 500;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #e3eaf4;\n  font-weight: 600;\n  color: #516177;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child {\n  border-bottom-left-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 10px;\n}\n\n@media (max-width: 900px) {\n  .page-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n    align-items: flex-start;\n  }\n  .content-grid--top[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGhvZG9sb2d5LXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUdFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBREo7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUZGOztBQUtBO0VBQ0UsZ0RBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7QUFGRjs7QUFJRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FBSko7O0FBUUE7RUFDRSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFMRjs7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBUUU7RUFDRSw4QkFBQTtFQUNBLDRCQUFBO0FBTko7O0FBU0U7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FBUEo7O0FBVUU7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFSSjs7QUFXRTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBVEo7O0FBWUU7RUFDRSwrQkFBQTtBQVZKOztBQWFFO0VBQ0UsZ0NBQUE7QUFYSjs7QUFlQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxRQUFBO0lBQ0EsdUJBQUE7RUFaRjtFQWVBO0lBQ0UsMEJBQUE7RUFiRjtBQUNGIiwiZmlsZSI6Im1ldGhvZG9sb2d5LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWV0aG9kb2xvZ3ktcGFnZSB7XG4gIHBhZGRpbmc6IDEwcHggOHB4IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmI7XG4gIGNvbG9yOiAjMWUyYzQ2O1xufVxuXG4ucGFnZS1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBsaW5lLWhlaWdodDogMS4wNTtcbiAgICBjb2xvcjogIzFkMjk0MjtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzgxOTBhOTtcbiAgfVxufVxuXG4uZmlsdGVyLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGU1ZjA7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSgxOCwgNDAsIDc4LCAwLjA0KTtcbn1cblxuLmZpbHRlci1waWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA2cHggMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZGVlYTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICNmOGZiZmY7XG4gIGNvbG9yOiAjNWM2Yzg0O1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuXG4gIHN0cm9uZyB7XG4gICAgY29sb3I6ICMzZDRjNjU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxufVxuXG4uY29udGVudC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxNHB4O1xufVxuXG4uY29udGVudC1ncmlkLS10b3Age1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbi5kYXNoYm9hcmQtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNlNWYxO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMjJweCByZ2JhKDE5LCA0MCwgNzIsIDAuMDUpO1xuICBwYWRkaW5nOiAxMnB4IDEycHggMTRweDtcbn1cblxuLmRhc2hib2FyZC1wYW5lbC0tZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFuZWwtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS40NXJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiAjMjUzMjRiO1xuICB9XG59XG5cbi5sb2dpYy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDRweCA0cHggMCAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuXG4gIGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICAgIGNvbG9yOiAjNGQ1ZDc2O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICB9XG5cbiAgbGk6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMC41NnJlbTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICM0ZTgzZmY7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNzgsIDEzMSwgMjU1LCAwLjE0KTtcbiAgfVxufVxuXG4udGFibGUtd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICMzYjRhNjM7XG5cbiAgdGhlYWQgdGgge1xuICAgIHBhZGRpbmc6IDExcHggMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWVmNGZjO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDdlMWVlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDdlMWVlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgdGhlYWQgdGg6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Q3ZTFlZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgdGhlYWQgdGg6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q3ZTFlZTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgfVxuXG4gIHRib2R5IHRkIHtcbiAgICBwYWRkaW5nOiAxMXB4IDE0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2VhZjQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UzZWFmNDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIHRib2R5IHRkOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlM2VhZjQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzUxNjE3NztcbiAgfVxuXG4gIHRib2R5IHRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICB0Ym9keSB0cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAucGFnZS1oZWFkaW5nIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgLmNvbnRlbnQtZ3JpZC0tdG9wIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 3405:
/*!*******************************************************************!*\
  !*** ./src/app/pages/analytics/methodology/methodology.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MethodologyModule": () => (/* binding */ MethodologyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _methodology_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methodology-routing.module */ 9530);
/* harmony import */ var _methodology_view_methodology_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methodology-view/methodology-view.component */ 987);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);









class MethodologyModule {
}
MethodologyModule.ɵfac = function MethodologyModule_Factory(t) { return new (t || MethodologyModule)(); };
MethodologyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MethodologyModule });
MethodologyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _methodology_routing_module__WEBPACK_IMPORTED_MODULE_0__.MethodologyRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MethodologyModule, { declarations: [_methodology_view_methodology_view_component__WEBPACK_IMPORTED_MODULE_1__.MethodologyViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _methodology_routing_module__WEBPACK_IMPORTED_MODULE_0__.MethodologyRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_analytics_methodology_methodology_module_ts.js.map