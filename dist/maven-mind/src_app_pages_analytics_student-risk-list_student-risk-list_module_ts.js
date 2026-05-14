"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_analytics_student-risk-list_student-risk-list_module_ts"],{

/***/ 4547:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/analytics/student-risk-list/student-risk-list-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentRiskListRoutingModule": () => (/* binding */ StudentRiskListRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _student_risk_list_view_student_risk_list_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-risk-list-view/student-risk-list-view.component */ 2603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'view', component: _student_risk_list_view_student_risk_list_view_component__WEBPACK_IMPORTED_MODULE_0__.StudentRiskListViewComponent },
];
class StudentRiskListRoutingModule {
}
StudentRiskListRoutingModule.ɵfac = function StudentRiskListRoutingModule_Factory(t) { return new (t || StudentRiskListRoutingModule)(); };
StudentRiskListRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StudentRiskListRoutingModule });
StudentRiskListRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StudentRiskListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2603:
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/analytics/student-risk-list/student-risk-list-view/student-risk-list-view.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentRiskListViewComponent": () => (/* binding */ StudentRiskListViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function StudentRiskListViewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const filter_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", filter_r4.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r4.value);
} }
function StudentRiskListViewComponent_article_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 19)(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const card_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", card_r5.tone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r5.value);
} }
function StudentRiskListViewComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22)(4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const filter_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", filter_r6.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r6.value);
} }
function StudentRiskListViewComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7.studentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7.programme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7.cohort);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7.attendance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7.primaryRisk);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7.lastAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r7.queueStatus);
} }
class StudentRiskListViewComponent {
    constructor() {
        this.primaryFilters = [
            { label: 'Academic Year', value: '2025/26' },
            { label: 'Mode', value: 'All' },
            { label: 'Level', value: 'All' },
            { label: 'Faculty', value: 'All' },
            { label: 'Partner', value: 'All' },
            { label: 'Characteristic', value: 'All' },
        ];
        this.summaryCards = [
            { label: 'Open cases', value: 120, tone: 'open' },
            { label: 'Overdue', value: 37, tone: 'overdue' },
            { label: 'Interrupted', value: 28, tone: 'interrupted' },
            { label: 'Escalated', value: 9, tone: 'escalated' },
        ];
        this.secondaryFilters = [
            { label: 'Risk reason', value: 'Attendance / Assessment / Registration' },
            { label: 'Owner', value: 'All' },
            { label: 'Export', value: 'Enabled for authorised users' },
        ];
        this.operationalRiskRows = [
            {
                studentId: 'ST24018',
                programme: 'BSc Business',
                cohort: '2025/26',
                status: 'Active',
                attendance: '61%',
                primaryRisk: 'Attendance < 70%',
                lastAction: '01 Feb 2026',
                owner: 'J. Khan',
                queueStatus: 'Open',
            },
            {
                studentId: 'ST25107',
                programme: 'BA Hospitality',
                cohort: '2025/26',
                status: 'Interrupted',
                attendance: '54%',
                primaryRisk: 'Repeated non-attendance',
                lastAction: '30 Jan 2026',
                owner: 'S. Patel',
                queueStatus: 'Escalated',
            },
            {
                studentId: 'ST23991',
                programme: 'BSc Computing',
                cohort: '2024/25',
                status: 'Active',
                attendance: '68%',
                primaryRisk: '3 missed submissions',
                lastAction: '31 Jan 2026',
                owner: 'A. Lewis',
                queueStatus: 'Open',
            },
            {
                studentId: 'ST24653',
                programme: 'BSc Engineering',
                cohort: '2025/26',
                status: 'At risk',
                attendance: '72%',
                primaryRisk: 'Registration not completed',
                lastAction: '02 Feb 2026',
                owner: 'R. Shah',
                queueStatus: 'Pending',
            },
            {
                studentId: 'ST23344',
                programme: 'FdA Business',
                cohort: '2024/25',
                status: 'Active',
                attendance: '65%',
                primaryRisk: 'Assessment fail + low engagement',
                lastAction: '29 Jan 2026',
                owner: 'J. Khan',
                queueStatus: 'Open',
            },
            {
                studentId: 'ST23817',
                programme: 'BSc Nursing',
                cohort: '2024/25',
                status: 'Active',
                attendance: '74%',
                primaryRisk: 'Safeguarding support review',
                lastAction: '28 Jan 2026',
                owner: 'D. Green',
                queueStatus: 'Closed',
            },
        ];
    }
}
StudentRiskListViewComponent.ɵfac = function StudentRiskListViewComponent_Factory(t) { return new (t || StudentRiskListViewComponent)(); };
StudentRiskListViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentRiskListViewComponent, selectors: [["app-student-risk-list-view"]], decls: 47, vars: 4, consts: [[1, "student-risk-list-page"], [1, "page-heading"], [1, "page-heading__copy"], ["aria-label", "Primary filters", 1, "filter-bar"], ["class", "filter-pill", 4, "ngFor", "ngForOf"], ["aria-label", "Risk summary", 1, "summary-grid"], ["class", "summary-card", 3, "ngClass", 4, "ngFor", "ngForOf"], ["aria-label", "Operational filters", 1, "toolbar-card"], [1, "toolbar-item", "toolbar-item--search"], [1, "toolbar-item__label"], [1, "toolbar-item__value"], [4, "ngFor", "ngForOf"], [1, "queue-panel"], [1, "queue-panel__header"], [1, "table-shell"], [1, "table-wrapper"], [1, "filter-pill"], [1, "filter-pill__label"], [1, "filter-pill__value"], [1, "summary-card", 3, "ngClass"], [1, "summary-card__badge"], ["aria-hidden", "true", 1, "toolbar-divider"], [1, "toolbar-item"]], template: function StudentRiskListViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Student Risk List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "B3 & Student Outcomes / Compliance Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StudentRiskListViewComponent_div_8_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StudentRiskListViewComponent_article_10_Template, 5, 3, "article", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7)(12, "div", 8)(13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Search:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ST24...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, StudentRiskListViewComponent_ng_container_17_Template, 8, 2, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 12)(19, "div", 13)(20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Operational risk queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14)(23, "div", 15)(24, "table")(25, "thead")(26, "tr")(27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Student ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Programme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cohort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Attend.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Primary risk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Last action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Queue status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, StudentRiskListViewComponent_tr_46_Template, 19, 9, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.primaryFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.summaryCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.secondaryFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.operationalRiskRows);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".student-risk-list-page[_ngcontent-%COMP%] {\n  padding: 14px 12px 28px;\n  background: #f6f8fb;\n  color: #1c2741;\n}\n\n.page-heading[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.page-heading__copy[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.page-heading__copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2.1rem;\n  font-weight: 800;\n  line-height: 1.08;\n  letter-spacing: -0.02em;\n  color: #1d2942;\n}\n\n.page-heading__copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.98rem;\n  font-weight: 600;\n  color: #7c8aa0;\n}\n\n.filter-bar[_ngcontent-%COMP%], .toolbar-card[_ngcontent-%COMP%], .queue-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dde5f0;\n  border-radius: 16px;\n  box-shadow: 0 10px 28px rgba(23, 43, 77, 0.05);\n}\n\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 10px 12px;\n  margin-bottom: 14px;\n}\n\n.filter-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 30px;\n  padding: 5px 12px;\n  border: 1px solid #d5deea;\n  border-radius: 999px;\n  background: #f9fbfd;\n  font-size: 0.87rem;\n  font-weight: 700;\n  color: #34445f;\n}\n\n.filter-pill__label[_ngcontent-%COMP%], .toolbar-item__label[_ngcontent-%COMP%] {\n  color: #65748a;\n}\n\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n  margin-bottom: 14px;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  min-height: 102px;\n  padding: 14px 14px 12px;\n  background: #ffffff;\n  border: 1px solid #dde5f0;\n  border-radius: 18px;\n  box-shadow: 0 10px 28px rgba(23, 43, 77, 0.05);\n}\n\n.summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  font-size: 2.55rem;\n  font-weight: 800;\n  line-height: 1;\n  color: #1b2740;\n}\n\n.summary-card__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 28px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 0.88rem;\n  font-weight: 800;\n}\n\n.summary-card.open[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #e25a55;\n  background: #fff0ef;\n}\n\n.summary-card.overdue[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #d79614;\n  background: #fff7df;\n}\n\n.summary-card.interrupted[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #d18612;\n  background: #fff4dd;\n}\n\n.summary-card.escalated[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #4d7de4;\n  background: #edf3ff;\n}\n\n.toolbar-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 10px 12px;\n  margin-bottom: 14px;\n}\n\n.toolbar-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #50607c;\n}\n\n.toolbar-item--search[_ngcontent-%COMP%] {\n  padding-right: 4px;\n}\n\n.toolbar-item__value[_ngcontent-%COMP%] {\n  color: #8b96a8;\n}\n\n.toolbar-divider[_ngcontent-%COMP%] {\n  color: #97a3b5;\n  font-weight: 700;\n}\n\n.queue-panel[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n\n.queue-panel__header[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.queue-panel__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: #24324d;\n}\n\n.table-shell[_ngcontent-%COMP%] {\n  border: 1px solid #dbe3ef;\n  border-radius: 14px;\n  overflow: hidden;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: 0.9rem;\n  color: #334662;\n}\n\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 10px;\n  background: #eef4fb;\n  border-bottom: 1px solid #d6e0ec;\n  border-right: 1px solid #d6e0ec;\n  font-weight: 800;\n  text-align: left;\n  white-space: nowrap;\n}\n\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 10px;\n  border-bottom: 1px solid #e4ebf4;\n  border-right: 1px solid #edf2f8;\n  white-space: nowrap;\n}\n\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2), tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n  white-space: normal;\n}\n\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n\n@media (max-width: 1080px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 640px) {\n  .student-risk-list-page[_ngcontent-%COMP%] {\n    padding-inline: 8px;\n  }\n  .page-heading__copy[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .toolbar-card[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .toolbar-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtcmlzay1saXN0LXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFJQTs7O0VBR0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7O0VBRUUsY0FBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUFERjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBREo7O0FBS0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0FBRkY7O0FBSUU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFNQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTs7RUFFRSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFO0lBQ0UsZ0RBQUE7RUFIRjtBQUNGOztBQU1BO0VBQ0U7SUFDRSxtQkFBQTtFQUpGO0VBT0E7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsUUFBQTtFQUxGO0VBUUE7SUFDRSwwQkFBQTtFQU5GO0VBU0E7SUFDRSx1QkFBQTtFQVBGO0VBVUE7SUFDRSxhQUFBO0VBUkY7QUFDRiIsImZpbGUiOiJzdHVkZW50LXJpc2stbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0dWRlbnQtcmlzay1saXN0LXBhZ2Uge1xuICBwYWRkaW5nOiAxNHB4IDEycHggMjhweDtcbiAgYmFja2dyb3VuZDogI2Y2ZjhmYjtcbiAgY29sb3I6ICMxYzI3NDE7XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ucGFnZS1oZWFkaW5nX19jb3B5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMDg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgY29sb3I6ICMxZDI5NDI7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjk4cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM3YzhhYTA7XG4gIH1cbn1cblxuLmZpbHRlci1iYXIsXG4udG9vbGJhci1jYXJkLFxuLnF1ZXVlLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZTVmMDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI4cHggcmdiYSgyMywgNDMsIDc3LCAwLjA1KTtcbn1cblxuLmZpbHRlci1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4uZmlsdGVyLXBpbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkZWVhO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogI2Y5ZmJmZDtcbiAgZm9udC1zaXplOiAwLjg3cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzM0NDQ1Zjtcbn1cblxuLmZpbHRlci1waWxsX19sYWJlbCxcbi50b29sYmFyLWl0ZW1fX2xhYmVsIHtcbiAgY29sb3I6ICM2NTc0OGE7XG59XG5cbi5zdW1tYXJ5LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLnN1bW1hcnktY2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMnB4O1xuICBwYWRkaW5nOiAxNHB4IDE0cHggMTJweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZTVmMDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI4cHggcmdiYSgyMywgNDMsIDc3LCAwLjA1KTtcblxuICBoMiB7XG4gICAgbWFyZ2luOiAxMnB4IDAgMDtcbiAgICBmb250LXNpemU6IDIuNTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogIzFiMjc0MDtcbiAgfVxufVxuXG4uc3VtbWFyeS1jYXJkX19iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnN1bW1hcnktY2FyZC5vcGVuIC5zdW1tYXJ5LWNhcmRfX2JhZGdlIHtcbiAgY29sb3I6ICNlMjVhNTU7XG4gIGJhY2tncm91bmQ6ICNmZmYwZWY7XG59XG5cbi5zdW1tYXJ5LWNhcmQub3ZlcmR1ZSAuc3VtbWFyeS1jYXJkX19iYWRnZSB7XG4gIGNvbG9yOiAjZDc5NjE0O1xuICBiYWNrZ3JvdW5kOiAjZmZmN2RmO1xufVxuXG4uc3VtbWFyeS1jYXJkLmludGVycnVwdGVkIC5zdW1tYXJ5LWNhcmRfX2JhZGdlIHtcbiAgY29sb3I6ICNkMTg2MTI7XG4gIGJhY2tncm91bmQ6ICNmZmY0ZGQ7XG59XG5cbi5zdW1tYXJ5LWNhcmQuZXNjYWxhdGVkIC5zdW1tYXJ5LWNhcmRfX2JhZGdlIHtcbiAgY29sb3I6ICM0ZDdkZTQ7XG4gIGJhY2tncm91bmQ6ICNlZGYzZmY7XG59XG5cbi50b29sYmFyLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4udG9vbGJhci1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBmb250LXNpemU6IDAuOTJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNTA2MDdjO1xufVxuXG4udG9vbGJhci1pdGVtLS1zZWFyY2gge1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG5cbi50b29sYmFyLWl0ZW1fX3ZhbHVlIHtcbiAgY29sb3I6ICM4Yjk2YTg7XG59XG5cbi50b29sYmFyLWRpdmlkZXIge1xuICBjb2xvcjogIzk3YTNiNTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnF1ZXVlLXBhbmVsIHtcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLnF1ZXVlLXBhbmVsX19oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gIGgzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjQ1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6ICMyNDMyNGQ7XG4gIH1cbn1cblxuLnRhYmxlLXNoZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZTNlZjtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhYmxlLXdyYXBwZXIge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjMzM0NjYyO1xufVxuXG50aGVhZCB0aCB7XG4gIHBhZGRpbmc6IDEycHggMTBweDtcbiAgYmFja2dyb3VuZDogI2VlZjRmYjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNmUwZWM7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkNmUwZWM7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbnRoZWFkIHRoOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG5cbnRib2R5IHRkIHtcbiAgcGFkZGluZzogMTRweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZWJmNDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VkZjJmODtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxudGJvZHkgdGQ6bnRoLWNoaWxkKDIpLFxudGJvZHkgdGQ6bnRoLWNoaWxkKDYpIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxudGJvZHkgdGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cblxudGJvZHkgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgLnN1bW1hcnktZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuc3R1ZGVudC1yaXNrLWxpc3QtcGFnZSB7XG4gICAgcGFkZGluZy1pbmxpbmU6IDhweDtcbiAgfVxuXG4gIC5wYWdlLWhlYWRpbmdfX2NvcHkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiA0cHg7XG4gIH1cblxuICAuc3VtbWFyeS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC50b29sYmFyLWNhcmQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgLnRvb2xiYXItZGl2aWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 8879:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/analytics/student-risk-list/student-risk-list.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentRiskListModule": () => (/* binding */ StudentRiskListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _student_risk_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-risk-list-routing.module */ 4547);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _student_risk_list_view_student_risk_list_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-risk-list-view/student-risk-list-view.component */ 2603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);









class StudentRiskListModule {
}
StudentRiskListModule.ɵfac = function StudentRiskListModule_Factory(t) { return new (t || StudentRiskListModule)(); };
StudentRiskListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: StudentRiskListModule });
StudentRiskListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        // MaterialModule,
        _student_risk_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentRiskListRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StudentRiskListModule, { declarations: [_student_risk_list_view_student_risk_list_view_component__WEBPACK_IMPORTED_MODULE_1__.StudentRiskListViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        // MaterialModule,
        _student_risk_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentRiskListRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_analytics_student-risk-list_student-risk-list_module_ts.js.map