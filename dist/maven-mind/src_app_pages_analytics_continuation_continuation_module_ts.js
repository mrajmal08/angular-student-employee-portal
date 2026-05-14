"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_analytics_continuation_continuation_module_ts"],{

/***/ 5103:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/analytics/continuation/continuation-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContinuationRoutingModule": () => (/* binding */ ContinuationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _continuation_view_continuation_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuation-view/continuation-view.component */ 2295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'view', component: _continuation_view_continuation_view_component__WEBPACK_IMPORTED_MODULE_0__.ContinuationViewComponent },
];
class ContinuationRoutingModule {
}
ContinuationRoutingModule.ɵfac = function ContinuationRoutingModule_Factory(t) { return new (t || ContinuationRoutingModule)(); };
ContinuationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContinuationRoutingModule });
ContinuationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContinuationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2295:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/analytics/continuation/continuation-view/continuation-view.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContinuationViewComponent": () => (/* binding */ ContinuationViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ContinuationViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const filter_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", filter_r11.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r11.value);
} }
function ContinuationViewComponent_article_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 34)(1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const card_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", card_r12.tone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r12.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r12.detail);
} }
function ContinuationViewComponent__svg_line_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "line");
} if (rf & 2) {
    const tick_r13 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r2.chartPadding.left)("x2", ctx_r2.chartWidth - ctx_r2.chartPadding.right)("y1", ctx_r2.getTrendY(tick_r13))("y2", ctx_r2.getTrendY(tick_r13));
} }
function ContinuationViewComponent__svg_text_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tick_r14 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r3.chartPadding.left - 10)("y", ctx_r3.getTrendY(tick_r14) + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tick_r14, " ");
} }
function ContinuationViewComponent__svg_circle_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 37);
} if (rf & 2) {
    const value_r15 = ctx.$implicit;
    const index_r16 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r4.getTrendX(index_r16))("cy", ctx_r4.getTrendY(value_r15));
} }
function ContinuationViewComponent__svg_text_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r17 = ctx.$implicit;
    const index_r18 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r5.getTrendX(index_r18))("y", ctx_r5.chartHeight - 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", year_r17, " ");
} }
function ContinuationViewComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39)(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r19.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r6.getCourseBarWidth(item_r19.value));
} }
function ContinuationViewComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tick_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tick_r20);
} }
function ContinuationViewComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tick_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tick_r21);
} }
function ContinuationViewComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const driver_r22 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r9.getRiskBarHeight(driver_r22.count));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r22.label);
} }
function ContinuationViewComponent_tr_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td")(8, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const student_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r23.studentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r23.course);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r23.cohort);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", student_r23.status.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", student_r23.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r23.attendance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r23.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r23.owner);
} }
const _c0 = function () { return [0, 100, 200, 300, 400]; };
class ContinuationViewComponent {
    constructor() {
        this.filters = [
            { label: 'Academic Year', value: '2025/26' },
            { label: 'Mode', value: 'All' },
            { label: 'Level', value: 'All' },
            { label: 'Faculty', value: 'All' },
            { label: 'Partner', value: 'All' },
            { label: 'Characteristic', value: 'All' },
        ];
        this.metricCards = [
            {
                label: 'Rate',
                value: '84.6%',
                detail: 'Denominator 720',
                tone: 'rate',
            },
            {
                label: 'Threshold',
                value: '87.0%',
                detail: 'By mode + level',
                tone: 'threshold',
            },
            {
                label: 'Gap',
                value: '-2.4 pts',
                detail: 'Worse than prior year by 1.5 pts',
                tone: 'gap',
            },
            {
                label: 'At-risk list',
                value: '120',
                detail: '92 active + 28 interrupted',
                tone: 'risk',
            },
        ];
        this.trendYears = ['2021/22', '2022/23', '2023/24', '2024/25', '2025/26'];
        this.trendValues = [90.4, 89.6, 88.1, 86.2, 84.6];
        this.trendTicks = [40, 60, 80, 100];
        this.chartWidth = 470;
        this.chartHeight = 205;
        this.chartPadding = { top: 18, right: 28, bottom: 34, left: 34 };
        this.continuationByCourse = [
            { label: 'Engineering', value: 87 },
            { label: 'Hospitality', value: 79 },
            { label: 'Health & Social Care', value: 88 },
            { label: 'Computing', value: 83 },
            { label: 'Business Management', value: 80 },
        ];
        this.courseAxisTicks = [70, 75, 80, 85, 90, 95];
        this.courseAxisMin = 70;
        this.courseAxisMax = 95;
        this.riskDrivers = [
            { label: '<50%', count: 18 },
            { label: '50-59%', count: 42 },
            { label: '60-69%', count: 82 },
            { label: '70-79%', count: 96 },
            { label: '80%+', count: 401 },
        ];
        this.atRiskStudents = [
            {
                studentId: 'ST24018',
                course: 'BSc Business',
                cohort: '2025/26',
                status: 'Active',
                attendance: '61%',
                reason: 'Attendance < 70%',
                owner: 'J. Khan',
            },
            {
                studentId: 'ST25107',
                course: 'BA Hospitality',
                cohort: '2025/26',
                status: 'Interrupted',
                attendance: '54%',
                reason: 'Repeated non-attendance',
                owner: 'S. Patel',
            },
            {
                studentId: 'ST23991',
                course: 'BSc Computing',
                cohort: '2024/25',
                status: 'Active',
                attendance: '68%',
                reason: '3 missed submissions',
                owner: 'A. Lewis',
            },
        ];
    }
    getTrendX(index) {
        const availableWidth = this.chartWidth - this.chartPadding.left - this.chartPadding.right;
        if (this.trendYears.length === 1) {
            return this.chartPadding.left + availableWidth / 2;
        }
        return (this.chartPadding.left +
            (availableWidth / (this.trendYears.length - 1)) * index);
    }
    getTrendY(value) {
        const min = 40;
        const max = 100;
        const availableHeight = this.chartHeight - this.chartPadding.top - this.chartPadding.bottom;
        return (this.chartPadding.top +
            ((max - value) / (max - min)) * availableHeight);
    }
    getTrendPoints() {
        return this.trendValues
            .map((value, index) => `${this.getTrendX(index)},${this.getTrendY(value)}`)
            .join(' ');
    }
    getCourseBarWidth(value) {
        const range = this.courseAxisMax - this.courseAxisMin;
        const scaledValue = ((value - this.courseAxisMin) / range) * 100;
        return `${Math.max(scaledValue, 0)}%`;
    }
    getRiskBarHeight(count) {
        const maxCount = Math.max(...this.riskDrivers.map((item) => item.count));
        return `${(count / maxCount) * 100}%`;
    }
}
ContinuationViewComponent.ɵfac = function ContinuationViewComponent_Factory(t) { return new (t || ContinuationViewComponent)(); };
ContinuationViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContinuationViewComponent, selectors: [["app-continuation-view"]], decls: 73, vars: 14, consts: [[1, "continuation-page"], [1, "page-heading"], [1, "filter-bar"], ["class", "filter-pill", 4, "ngFor", "ngForOf"], [1, "summary-grid"], ["class", "summary-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "content-grid", "content-grid--top"], [1, "dashboard-panel"], [1, "panel-header"], [1, "trend-chart"], ["preserveAspectRatio", "xMidYMid meet"], [1, "grid-lines"], [4, "ngFor", "ngForOf"], [1, "axis-labels", "axis-labels--y"], ["text-anchor", "end", 4, "ngFor", "ngForOf"], [1, "trend-line-group"], [1, "trend-line"], ["r", "5", 4, "ngFor", "ngForOf"], [1, "axis-labels", "axis-labels--x"], ["text-anchor", "middle", 4, "ngFor", "ngForOf"], [1, "chart-legend"], [1, "legend-dot"], [1, "course-chart"], [1, "course-chart__rows"], ["class", "course-row", 4, "ngFor", "ngForOf"], [1, "course-chart__axis"], [1, "content-grid", "content-grid--bottom"], [1, "risk-chart"], [1, "risk-chart__plot"], ["class", "risk-chart__grid-line", 4, "ngFor", "ngForOf"], [1, "risk-chart__bars"], ["class", "risk-bar", 4, "ngFor", "ngForOf"], [1, "table-wrapper"], [1, "filter-pill"], [1, "summary-card", 3, "ngClass"], [1, "summary-card__badge"], ["text-anchor", "end"], ["r", "5"], ["text-anchor", "middle"], [1, "course-row"], [1, "course-row__label"], [1, "course-row__plot"], [1, "course-row__bar"], [1, "risk-chart__grid-line"], [1, "risk-bar"], [1, "risk-bar__column"], [1, "risk-bar__label"], [1, "status-pill", 3, "ngClass"]], template: function ContinuationViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Continuation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "B3 & Student Outcomes / Compliance Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContinuationViewComponent_div_7_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ContinuationViewComponent_article_9_Template, 7, 4, "article", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 6)(11, "article", 7)(12, "div", 8)(13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Continuation trend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 10)(17, "g", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ContinuationViewComponent__svg_line_18_Template, 1, 4, "line", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ContinuationViewComponent__svg_text_20_Template, 2, 3, "text", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "polyline", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ContinuationViewComponent__svg_circle_23_Template, 1, 2, "circle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ContinuationViewComponent__svg_text_25_Template, 2, 3, "text", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "continuation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "article", 7)(31, "div", 8)(32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Continuation by course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22)(35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ContinuationViewComponent_div_36_Template, 5, 3, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ContinuationViewComponent_span_38_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 26)(40, "article", 7)(41, "div", 8)(42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "At-risk drivers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27)(45, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ContinuationViewComponent_div_46_Template, 3, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ContinuationViewComponent_div_48_Template, 4, 3, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "article", 7)(50, "div", 8)(51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "At-risk student list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32)(54, "table")(55, "thead")(56, "tr")(57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Student ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Cohort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Attendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Risk reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ContinuationViewComponent_tr_72_Template, 16, 8, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.metricCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", "0 0 " + ctx.chartWidth + " " + ctx.chartHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("points", ctx.getTrendPoints());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendYears);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.continuationByCourse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courseAxisTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.riskDrivers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.atRiskStudents);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".continuation-page[_ngcontent-%COMP%] {\n  padding: 10px 8px 24px;\n  background: #f5f7fb;\n  color: #1b2740;\n}\n\n.page-heading[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 800;\n  line-height: 1.05;\n  color: #1c2741;\n}\n\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  text-align: center;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #7f8ca6;\n}\n\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 14px;\n  padding: 10px 12px;\n  background: #ffffff;\n  border: 1px solid #dce4f0;\n  border-radius: 16px;\n}\n\n.filter-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 28px;\n  padding: 6px 14px;\n  border: 1px solid #d8e0ec;\n  border-radius: 999px;\n  background: #f9fbff;\n  color: #53627b;\n  font-size: 0.84rem;\n  line-height: 1;\n}\n\n.filter-pill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #394760;\n  font-weight: 700;\n}\n\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.summary-card[_ngcontent-%COMP%], .dashboard-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dce5f1;\n  border-radius: 16px;\n  box-shadow: 0 8px 20px rgba(18, 40, 78, 0.06);\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  min-height: 128px;\n  padding: 14px 16px 12px;\n}\n\n.summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 6px;\n  font-size: 2.15rem;\n  font-weight: 800;\n  line-height: 1;\n  color: #1b2740;\n}\n\n.summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.94rem;\n  color: #8c9ab0;\n}\n\n.summary-card__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 28px;\n  padding: 5px 14px;\n  border-radius: 999px;\n  font-size: 0.98rem;\n  font-weight: 800;\n  line-height: 1;\n}\n\n.summary-card.rate[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #e95f55;\n  background: #ffe7e4;\n}\n\n.summary-card.threshold[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #ec9a10;\n  background: #fff0d8;\n}\n\n.summary-card.gap[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #e85662;\n  background: #ffe6eb;\n}\n\n.summary-card.risk[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #5581ff;\n  background: #edf2ff;\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n\n.content-grid--top[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1.2fr;\n  margin-bottom: 14px;\n}\n\n.content-grid--bottom[_ngcontent-%COMP%] {\n  grid-template-columns: 0.95fr 1.9fr;\n}\n\n.dashboard-panel[_ngcontent-%COMP%] {\n  padding: 10px 12px 12px;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #25324b;\n}\n\n.trend-chart[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.trend-chart[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.grid-lines[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  stroke: #d8dfeb;\n  stroke-width: 1;\n}\n\n.axis-labels[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  fill: #6c7b92;\n  font-size: 11px;\n  font-weight: 600;\n}\n\n.trend-line[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #4b86ff;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.trend-line-group[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: #4b86ff;\n}\n\n.chart-legend[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 2px;\n  margin-left: auto;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #61718a;\n}\n\n.legend-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 999px;\n  background: #4b86ff;\n}\n\n.course-chart[_ngcontent-%COMP%] {\n  padding: 8px 8px 4px 0;\n}\n\n.course-chart__rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-bottom: 8px;\n}\n\n.course-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 132px minmax(0, 1fr);\n  gap: 10px;\n  align-items: center;\n}\n\n.course-row__label[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: #64748b;\n  text-align: right;\n}\n\n.course-row__plot[_ngcontent-%COMP%] {\n  position: relative;\n  height: 28px;\n  border-left: 1px solid #6f7886;\n  border-bottom: 1px solid #6f7886;\n  background-image: repeating-linear-gradient(to right, transparent, transparent calc(20% - 1px), #e7edf6 calc(20% - 1px), #e7edf6 20%);\n}\n\n.course-row__bar[_ngcontent-%COMP%] {\n  height: 18px;\n  margin-top: 5px;\n  background: #e4312f;\n}\n\n.course-chart__axis[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  gap: 0;\n  align-items: center;\n  margin-left: 142px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #6e7c93;\n}\n\n.course-chart__axis[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n.risk-chart[_ngcontent-%COMP%] {\n  padding: 2px 2px 0;\n}\n\n.risk-chart__plot[_ngcontent-%COMP%] {\n  position: relative;\n  height: 235px;\n  padding-left: 30px;\n}\n\n.risk-chart__grid-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 30px;\n  right: 6px;\n  border-top: 1px solid #e3e8f1;\n}\n\n.risk-chart__grid-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -28px;\n  top: -8px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #7b879b;\n}\n\n.risk-chart__grid-line[_ngcontent-%COMP%]:nth-child(1) {\n  top: 100%;\n}\n\n.risk-chart__grid-line[_ngcontent-%COMP%]:nth-child(2) {\n  top: 75%;\n}\n\n.risk-chart__grid-line[_ngcontent-%COMP%]:nth-child(3) {\n  top: 50%;\n}\n\n.risk-chart__grid-line[_ngcontent-%COMP%]:nth-child(4) {\n  top: 25%;\n}\n\n.risk-chart__grid-line[_ngcontent-%COMP%]:nth-child(5) {\n  top: 0;\n}\n\n.risk-chart__bars[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 36px;\n  right: 8px;\n  bottom: 0;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 12px;\n  align-items: end;\n}\n\n.risk-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 8px;\n  height: 100%;\n}\n\n.risk-bar__column[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 48px;\n  min-height: 12px;\n  background: #e4312f;\n  border-radius: 0;\n}\n\n.risk-bar__label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #596883;\n  transform: rotate(-18deg);\n  white-space: nowrap;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  color: #30435f;\n  font-size: 0.85rem;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 9px;\n  background: #eaf1fb;\n  border-top: 1px solid #d6e0ec;\n  border-bottom: 1px solid #d6e0ec;\n  font-weight: 800;\n  text-align: left;\n  white-space: nowrap;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #d6e0ec;\n  border-top-left-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #d6e0ec;\n  border-top-right-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 9px;\n  background: #ffffff;\n  border-bottom: 1px solid #e2e9f3;\n  white-space: nowrap;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #e2e9f3;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #e2e9f3;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child {\n  border-bottom-left-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 10px;\n}\n\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 24px;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 800;\n}\n\n.status-pill.active[_ngcontent-%COMP%] {\n  background: #edf8f0;\n  color: #2b8a57;\n}\n\n.status-pill.interrupted[_ngcontent-%COMP%] {\n  background: #fff0e8;\n  color: #c86b38;\n}\n\n@media (max-width: 1200px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .content-grid--top[_ngcontent-%COMP%], .content-grid--bottom[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 768px) {\n  .continuation-page[_ngcontent-%COMP%] {\n    padding: 8px 0 20px;\n  }\n  .page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .course-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .course-row__label[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .course-chart__axis[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, 1fr);\n    margin-left: 0;\n  }\n  table[_ngcontent-%COMP%] {\n    min-width: 760px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRpbnVhdGlvbi12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUdFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBREo7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTs7RUFFRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFGSjs7QUFLRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFISjs7QUFPQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLG1C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LDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFkSjs7QUFpQkU7RUFDRSw4QkFBQTtFQUNBLDRCQUFBO0FBZko7O0FBa0JFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQWhCSjs7QUFtQkU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQWpCSjs7QUFvQkU7RUFDRSw4QkFBQTtBQWxCSjs7QUFxQkU7RUFDRSwrQkFBQTtBQW5CSjs7QUFzQkU7RUFDRSwrQkFBQTtBQXBCSjs7QUF1QkU7RUFDRSxnQ0FBQTtBQXJCSjs7QUF5QkE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXRCRjs7QUF5QkE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBdEJGOztBQXlCQTtFQUNFO0lBQ0UsZ0RBQUE7RUF0QkY7RUF5QkE7O0lBRUUsMEJBQUE7RUF2QkY7QUFDRjs7QUEwQkE7RUFDRTtJQUNFLG1CQUFBO0VBeEJGO0VBMkJBO0lBQ0UsZ0JBQUE7RUF6QkY7RUE0QkE7SUFDRSwwQkFBQTtFQTFCRjtFQTZCQTtJQUNFLDBCQUFBO0VBM0JGO0VBOEJBO0lBQ0UsZ0JBQUE7RUE1QkY7RUErQkE7SUFDRSxxQ0FBQTtJQUNBLGNBQUE7RUE3QkY7RUFnQ0E7SUFDRSxnQkFBQTtFQTlCRjtBQUNGIiwiZmlsZSI6ImNvbnRpbnVhdGlvbi12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRpbnVhdGlvbi1wYWdlIHtcbiAgcGFkZGluZzogMTBweCA4cHggMjRweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYjtcbiAgY29sb3I6ICMxYjI3NDA7XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMDU7XG4gICAgY29sb3I6ICMxYzI3NDE7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDRweCAwIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM3ZjhjYTY7XG4gIH1cbn1cblxuLmZpbHRlci1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNlNGYwO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uZmlsdGVyLXBpbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIG1pbi1oZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmc6IDZweCAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhlMGVjO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogI2Y5ZmJmZjtcbiAgY29sb3I6ICM1MzYyN2I7XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgc3Ryb25nIHtcbiAgICBjb2xvcjogIzM5NDc2MDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG59XG5cbi5zdW1tYXJ5LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLnN1bW1hcnktY2FyZCxcbi5kYXNoYm9hcmQtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNlNWYxO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMTgsIDQwLCA3OCwgMC4wNik7XG59XG5cbi5zdW1tYXJ5LWNhcmQge1xuICBtaW4taGVpZ2h0OiAxMjhweDtcbiAgcGFkZGluZzogMTRweCAxNnB4IDEycHg7XG5cbiAgaDIge1xuICAgIG1hcmdpbjogMTBweCAwIDZweDtcbiAgICBmb250LXNpemU6IDIuMTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogIzFiMjc0MDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDAuOTRyZW07XG4gICAgY29sb3I6ICM4YzlhYjA7XG4gIH1cbn1cblxuLnN1bW1hcnktY2FyZF9fYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMjhweDtcbiAgcGFkZGluZzogNXB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBmb250LXNpemU6IDAuOThyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uc3VtbWFyeS1jYXJkLnJhdGUgLnN1bW1hcnktY2FyZF9fYmFkZ2Uge1xuICBjb2xvcjogI2U5NWY1NTtcbiAgYmFja2dyb3VuZDogI2ZmZTdlNDtcbn1cblxuLnN1bW1hcnktY2FyZC50aHJlc2hvbGQgLnN1bW1hcnktY2FyZF9fYmFkZ2Uge1xuICBjb2xvcjogI2VjOWExMDtcbiAgYmFja2dyb3VuZDogI2ZmZjBkODtcbn1cblxuLnN1bW1hcnktY2FyZC5nYXAgLnN1bW1hcnktY2FyZF9fYmFkZ2Uge1xuICBjb2xvcjogI2U4NTY2MjtcbiAgYmFja2dyb3VuZDogI2ZmZTZlYjtcbn1cblxuLnN1bW1hcnktY2FyZC5yaXNrIC5zdW1tYXJ5LWNhcmRfX2JhZGdlIHtcbiAgY29sb3I6ICM1NTgxZmY7XG4gIGJhY2tncm91bmQ6ICNlZGYyZmY7XG59XG5cbi5jb250ZW50LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEycHg7XG59XG5cbi5jb250ZW50LWdyaWQtLXRvcCB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuMmZyO1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4uY29udGVudC1ncmlkLS1ib3R0b20ge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuOTVmciAxLjlmcjtcbn1cblxuLmRhc2hib2FyZC1wYW5lbCB7XG4gIHBhZGRpbmc6IDEwcHggMTJweCAxMnB4O1xufVxuXG4ucGFuZWwtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gIGgzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6ICMyNTMyNGI7XG4gIH1cbn1cblxuLnRyZW5kLWNoYXJ0IHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cblxuLmdyaWQtbGluZXMgbGluZSB7XG4gIHN0cm9rZTogI2Q4ZGZlYjtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xufVxuXG4uYXhpcy1sYWJlbHMgdGV4dCB7XG4gIGZpbGw6ICM2YzdiOTI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRyZW5kLWxpbmUge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICM0Yjg2ZmY7XG4gIHN0cm9rZS13aWR0aDogMztcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xufVxuXG4udHJlbmQtbGluZS1ncm91cCBjaXJjbGUge1xuICBmaWxsOiAjNGI4NmZmO1xufVxuXG4uY2hhcnQtbGVnZW5kIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNjE3MThhO1xufVxuXG4ubGVnZW5kLWRvdCB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAjNGI4NmZmO1xufVxuXG4uY291cnNlLWNoYXJ0IHtcbiAgcGFkZGluZzogOHB4IDhweCA0cHggMDtcbn1cblxuLmNvdXJzZS1jaGFydF9fcm93cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uY291cnNlLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTMycHggbWlubWF4KDAsIDFmcik7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvdXJzZS1yb3dfX2xhYmVsIHtcbiAgZm9udC1zaXplOiAwLjc0cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jb3Vyc2Utcm93X19wbG90IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzZmNzg4NjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2Zjc4ODY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgdHJhbnNwYXJlbnQgY2FsYygyMCUgLSAxcHgpLFxuICAgICNlN2VkZjYgY2FsYygyMCUgLSAxcHgpLFxuICAgICNlN2VkZjYgMjAlXG4gICk7XG59XG5cbi5jb3Vyc2Utcm93X19iYXIge1xuICBoZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYmFja2dyb3VuZDogI2U0MzEyZjtcbn1cblxuLmNvdXJzZS1jaGFydF9fYXhpcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTQycHg7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICM2ZTdjOTM7XG5cbiAgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuXG4ucmlzay1jaGFydCB7XG4gIHBhZGRpbmc6IDJweCAycHggMDtcbn1cblxuLnJpc2stY2hhcnRfX3Bsb3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjM1cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnJpc2stY2hhcnRfX2dyaWQtbGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzBweDtcbiAgcmlnaHQ6IDZweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlM2U4ZjE7XG5cbiAgc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0yOHB4O1xuICAgIHRvcDogLThweDtcbiAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzdiODc5YjtcbiAgfVxufVxuXG4ucmlzay1jaGFydF9fZ3JpZC1saW5lOm50aC1jaGlsZCgxKSB7XG4gIHRvcDogMTAwJTtcbn1cblxuLnJpc2stY2hhcnRfX2dyaWQtbGluZTpudGgtY2hpbGQoMikge1xuICB0b3A6IDc1JTtcbn1cblxuLnJpc2stY2hhcnRfX2dyaWQtbGluZTpudGgtY2hpbGQoMykge1xuICB0b3A6IDUwJTtcbn1cblxuLnJpc2stY2hhcnRfX2dyaWQtbGluZTpudGgtY2hpbGQoNCkge1xuICB0b3A6IDI1JTtcbn1cblxuLnJpc2stY2hhcnRfX2dyaWQtbGluZTpudGgtY2hpbGQoNSkge1xuICB0b3A6IDA7XG59XG5cbi5yaXNrLWNoYXJ0X19iYXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzNnB4O1xuICByaWdodDogOHB4O1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG59XG5cbi5yaXNrLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yaXNrLWJhcl9fY29sdW1uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDhweDtcbiAgbWluLWhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZDogI2U0MzEyZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnJpc2stYmFyX19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzU5Njg4MztcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4ZGVnKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnRhYmxlLXdyYXBwZXIge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICMzMDQzNWY7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcblxuICB0aGVhZCB0aCB7XG4gICAgcGFkZGluZzogMTBweCA5cHg7XG4gICAgYmFja2dyb3VuZDogI2VhZjFmYjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q2ZTBlYztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q2ZTBlYztcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIHRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkNmUwZWM7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgfVxuXG4gIHRoZWFkIHRoOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkNmUwZWM7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICB0Ym9keSB0ZCB7XG4gICAgcGFkZGluZzogMTBweCA5cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZTlmMztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgdGJvZHkgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UyZTlmMztcbiAgfVxuXG4gIHRib2R5IHRyIHRkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMmU5ZjM7XG4gIH1cblxuICB0Ym9keSB0cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgdGJvZHkgdHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgfVxufVxuXG4uc3RhdHVzLXBpbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5zdGF0dXMtcGlsbC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWRmOGYwO1xuICBjb2xvcjogIzJiOGE1Nztcbn1cblxuLnN0YXR1cy1waWxsLmludGVycnVwdGVkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjBlODtcbiAgY29sb3I6ICNjODZiMzg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnN1bW1hcnktZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICB9XG5cbiAgLmNvbnRlbnQtZ3JpZC0tdG9wLFxuICAuY29udGVudC1ncmlkLS1ib3R0b20ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGludWF0aW9uLXBhZ2Uge1xuICAgIHBhZGRpbmc6IDhweCAwIDIwcHg7XG4gIH1cblxuICAucGFnZS1oZWFkaW5nIHAge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAuc3VtbWFyeS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5jb3Vyc2Utcm93IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5jb3Vyc2Utcm93X19sYWJlbCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5jb3Vyc2UtY2hhcnRfX2F4aXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgbWluLXdpZHRoOiA3NjBweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 8540:
/*!*********************************************************************!*\
  !*** ./src/app/pages/analytics/continuation/continuation.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContinuationModule": () => (/* binding */ ContinuationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _continuation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuation-routing.module */ 5103);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _continuation_view_continuation_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuation-view/continuation-view.component */ 2295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);









class ContinuationModule {
}
ContinuationModule.ɵfac = function ContinuationModule_Factory(t) { return new (t || ContinuationModule)(); };
ContinuationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ContinuationModule });
ContinuationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        // MaterialModule,
        _continuation_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContinuationRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContinuationModule, { declarations: [_continuation_view_continuation_view_component__WEBPACK_IMPORTED_MODULE_1__.ContinuationViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        // MaterialModule,
        _continuation_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContinuationRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_analytics_continuation_continuation_module_ts.js.map