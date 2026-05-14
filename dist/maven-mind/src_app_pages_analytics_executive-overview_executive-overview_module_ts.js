"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_analytics_executive-overview_executive-overview_module_ts"],{

/***/ 9273:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/analytics/executive-overview/executive-overview-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExecutiveOverviewRoutingModule": () => (/* binding */ ExecutiveOverviewRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _executive_overview_view_executive_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./executive-overview-view/executive-overview.component */ 9858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'view', component: _executive_overview_view_executive_overview_component__WEBPACK_IMPORTED_MODULE_0__.ExecutiveOverviewComponent },
];
class ExecutiveOverviewRoutingModule {
}
ExecutiveOverviewRoutingModule.ɵfac = function ExecutiveOverviewRoutingModule_Factory(t) { return new (t || ExecutiveOverviewRoutingModule)(); };
ExecutiveOverviewRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExecutiveOverviewRoutingModule });
ExecutiveOverviewRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExecutiveOverviewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9858:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/analytics/executive-overview/executive-overview-view/executive-overview.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExecutiveOverviewComponent": () => (/* binding */ ExecutiveOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



function ExecutiveOverviewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26)(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const filter_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", filter_r10.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r10.value);
} }
function ExecutiveOverviewComponent_article_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 29)(1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const card_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", card_r11.tone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r11.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Threshold ", card_r11.threshold, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r11.detail);
} }
function ExecutiveOverviewComponent__svg_text_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tick_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r2.chartPadding.left - 8)("y", ctx_r2.getY(tick_r12) + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tick_r12, " ");
} }
function ExecutiveOverviewComponent__svg_text_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r13 = ctx.$implicit;
    const index_r14 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r3.getX(index_r14))("y", ctx_r3.chartHeight - 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", year_r13, " ");
} }
function ExecutiveOverviewComponent__svg_g_31__svg_circle_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 37);
} if (rf & 2) {
    const value_r17 = ctx.$implicit;
    const pointIndex_r18 = ctx.index;
    const series_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r16.getX(pointIndex_r18))("cy", ctx_r16.getY(value_r17))("fill", series_r15.color);
} }
function ExecutiveOverviewComponent__svg_g_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "polyline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExecutiveOverviewComponent__svg_g_31__svg_circle_2_Template, 1, 3, "circle", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const series_r15 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("points", ctx_r4.getTrendPoints(series_r15.values))("stroke", series_r15.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", series_r15.values);
} }
function ExecutiveOverviewComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const series_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", series_r20.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](series_r20.name);
} }
function ExecutiveOverviewComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r21.cohort);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r21.denominator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r21.numerator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r21.rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r21.threshold);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r21.gap);
} }
function ExecutiveOverviewComponent_li_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const driver_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](driver_r22);
} }
function ExecutiveOverviewComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40)(1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r23.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r8.getSnapshotWidth(item_r23.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r23.value);
} }
function ExecutiveOverviewComponent_tr_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td")(8, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const action_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](action_r24.ref);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](action_r24.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](action_r24.due);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](action_r24.status);
} }
class ExecutiveOverviewComponent {
    constructor() {
        this.filters = [
            { label: 'Academic Year', value: '2025/26' },
            { label: 'Mode', value: 'All' },
            { label: 'Level', value: 'All' },
            { label: 'Faculty', value: 'All' },
            { label: 'Partner', value: 'All' },
            { label: 'Characteristic', value: 'All' },
        ];
        this.summaryCards = [
            {
                label: 'Continuation',
                value: '84.6%',
                threshold: '87.0%',
                detail: '-2.4 pts vs threshold',
                tone: 'continuation',
            },
            {
                label: 'Completion',
                value: '78.8%',
                threshold: '80.0%',
                detail: '-1.2 pts vs threshold',
                tone: 'completion',
            },
            {
                label: 'Progression',
                value: '72.4%',
                threshold: '72.0%',
                detail: '+0.4 pts vs threshold',
                tone: 'progression',
            },
            {
                label: 'Data quality',
                value: '89/100',
                threshold: '3 open high issues',
                detail: 'Last refresh succeeded',
                tone: 'quality',
            },
        ];
        this.trendYears = ['2021/22', '2022/23', '2023/24', '2024/25', '2025/26'];
        this.trendTicks = [40, 60, 80, 100];
        this.trendSeries = [
            {
                name: 'Continuation',
                color: '#2f72f4',
                values: [90.2, 89.4, 87.8, 86.1, 84.6],
            },
            {
                name: 'Completion',
                color: '#f08a1f',
                values: [74.3, 73.8, 73.0, 72.4, 72.0],
            },
            {
                name: 'Progression',
                color: '#32b768',
                values: [84.1, 83.2, 81.7, 80.0, 78.6],
            },
        ];
        this.cohortSummary = [
            { cohort: '2021/22', denominator: 780, numerator: 703, rate: '90.2%', threshold: '87.0%', gap: '3.2 pts' },
            { cohort: '2022/23', denominator: 765, numerator: 683, rate: '89.4%', threshold: '87.0%', gap: '2.4 pts' },
            { cohort: '2023/24', denominator: 750, numerator: 658, rate: '87.8%', threshold: '87.0%', gap: '0.8 pts' },
            { cohort: '2024/25', denominator: 735, numerator: 632, rate: '86.1%', threshold: '87.0%', gap: '-0.9 pts' },
            { cohort: '2025/26', denominator: 720, numerator: 609, rate: '84.6%', threshold: '87.0%', gap: '-2.4 pts' },
        ];
        this.riskDrivers = [
            '120 students currently flagged by attendance or engagement rules',
            'Business and Hospitality together account for 43% of current continuation risk',
            '19 completion cases are awaiting board resolution',
        ];
        this.studentGroupRiskSnapshot = [
            { label: 'No known disability', value: 14 },
            { label: 'Asian students', value: 9 },
            { label: 'Mature 21+', value: 15 },
            { label: 'Disabled students', value: 24 },
            { label: 'Black students', value: 37 },
            { label: 'Level 6 Business', value: 52 },
        ];
        this.openActions = [
            { ref: 'ACT-1004', owner: 'Dean Business', due: '14 Feb 2026', status: 'Active' },
            { ref: 'ACT-1009', owner: 'Registry', due: '10 Feb 2026', status: 'Active' },
            { ref: 'ACT-1013', owner: 'Careers', due: '28 Feb 2026', status: 'Open' },
            { ref: 'ACT-1019', owner: 'Registry Systems', due: '07 Feb 2026', status: 'Escalated' },
        ];
        this.chartWidth = 380;
        this.chartHeight = 190;
        this.chartPadding = { top: 18, right: 18, bottom: 30, left: 34 };
        this.chartMin = 40;
        this.chartMax = 100;
        this.snapshotMaxValue = 52;
    }
    ngOnInit() { }
    getTrendPoints(values) {
        return values
            .map((value, index) => `${this.getX(index)},${this.getY(value)}`)
            .join(' ');
    }
    getX(index) {
        const usableWidth = this.chartWidth - this.chartPadding.left - this.chartPadding.right;
        const step = usableWidth / (this.trendYears.length - 1);
        return this.chartPadding.left + index * step;
    }
    getY(value) {
        const usableHeight = this.chartHeight - this.chartPadding.top - this.chartPadding.bottom;
        const range = this.chartMax - this.chartMin;
        return (this.chartPadding.top +
            ((this.chartMax - value) / range) * usableHeight);
    }
    getSnapshotWidth(value) {
        return `${(value / this.snapshotMaxValue) * 100}%`;
    }
}
ExecutiveOverviewComponent.ɵfac = function ExecutiveOverviewComponent_Factory(t) { return new (t || ExecutiveOverviewComponent)(); };
ExecutiveOverviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExecutiveOverviewComponent, selectors: [["app-executive-overview"]], decls: 87, vars: 27, consts: [[1, "executive-overview-page"], [1, "page-heading"], [1, "filter-bar"], ["class", "filter-pill", 4, "ngFor", "ngForOf"], [1, "summary-grid"], ["class", "summary-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "alert-banner"], [1, "content-grid", "content-grid--top"], [1, "dashboard-panel"], [1, "panel-header"], [1, "trend-chart"], ["preserveAspectRatio", "xMidYMid meet"], [1, "grid-lines"], [1, "axis-labels"], ["text-anchor", "end", 4, "ngFor", "ngForOf"], [1, "x-axis"], ["text-anchor", "middle", 4, "ngFor", "ngForOf"], ["class", "series-group", 4, "ngFor", "ngForOf"], [1, "chart-legend"], ["class", "legend-item", 4, "ngFor", "ngForOf"], [1, "table-wrapper"], [4, "ngFor", "ngForOf"], [1, "content-grid", "content-grid--bottom"], [1, "risk-list"], [1, "snapshot-chart"], ["class", "snapshot-row", 4, "ngFor", "ngForOf"], [1, "filter-pill"], [1, "filter-label"], [1, "filter-value"], [1, "summary-card", 3, "ngClass"], [1, "summary-card__label"], [1, "summary-card__threshold"], [1, "summary-card__detail"], ["text-anchor", "end"], ["text-anchor", "middle"], [1, "series-group"], ["r", "3.5", 4, "ngFor", "ngForOf"], ["r", "3.5"], [1, "legend-item"], [1, "legend-swatch"], [1, "snapshot-row"], [1, "snapshot-row__label"], [1, "snapshot-row__bar-track"], [1, "snapshot-row__bar-fill"], [1, "snapshot-row__value"], [1, "status-chip"]], template: function ExecutiveOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Executive Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Student Outcomes / Compliance Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExecutiveOverviewComponent_div_8_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExecutiveOverviewComponent_article_10_Template, 9, 5, "article", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 6)(12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Alert:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Level 6 Business continuation is 81.2%, which is below threshold; Graduate Outcomes response rate is also weak at 61.8%. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 7)(16, "article", 8)(17, "div", 9)(18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "5-year trend by metric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 11)(22, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "line")(24, "line")(25, "line")(26, "line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ExecutiveOverviewComponent__svg_text_28_Template, 2, 3, "text", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ExecutiveOverviewComponent__svg_text_30_Template, 2, 3, "text", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ExecutiveOverviewComponent__svg_g_31_Template, 3, 3, "g", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ExecutiveOverviewComponent_div_33_Template, 4, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "article", 8)(35, "div", 9)(36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cohort summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20)(39, "table")(40, "thead")(41, "tr")(42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cohort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Denom.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Numer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Threshold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Gap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ExecutiveOverviewComponent_tr_55_Template, 13, 6, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "section", 22)(57, "article", 8)(58, "div", 9)(59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Top risk drivers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ExecutiveOverviewComponent_li_62_Template, 2, 1, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "article", 8)(64, "div", 9)(65, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Student group risk snapshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ExecutiveOverviewComponent_div_68_Template, 7, 4, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "article", 8)(70, "div", 9)(71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Open actions and data warnings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20)(74, "table")(75, "thead")(76, "tr")(77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Ref");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Due");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, ExecutiveOverviewComponent_tr_86_Template, 10, 4, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.summaryCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", "0 0 " + ctx.chartWidth + " " + ctx.chartHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.chartPadding.left)("x2", ctx.chartWidth - ctx.chartPadding.right)("y1", ctx.chartPadding.top)("y2", ctx.chartPadding.top);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.chartPadding.left)("x2", ctx.chartWidth - ctx.chartPadding.right)("y1", ctx.getY(80))("y2", ctx.getY(80));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.chartPadding.left)("x2", ctx.chartWidth - ctx.chartPadding.right)("y1", ctx.getY(60))("y2", ctx.getY(60));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.chartPadding.left)("x2", ctx.chartWidth - ctx.chartPadding.right)("y1", ctx.chartHeight - ctx.chartPadding.bottom)("y2", ctx.chartHeight - ctx.chartPadding.bottom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendYears);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendSeries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendSeries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cohortSummary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.riskDrivers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.studentGroupRiskSnapshot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.openActions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".executive-overview-page[_ngcontent-%COMP%] {\n  padding: 12px 8px 28px;\n  background: #f6f8fb;\n  color: #17233b;\n}\n\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1.1;\n  color: #1c2741;\n}\n\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.95rem;\n  color: #74829a;\n}\n\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 10px 12px;\n  margin-bottom: 14px;\n  background: #ffffff;\n  border: 1px solid #dbe3ef;\n  border-radius: 18px;\n}\n\n.filter-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 34px;\n  padding: 7px 14px;\n  border: 1px solid #d5deea;\n  border-radius: 999px;\n  background: #f7f9fc;\n  color: #31435f;\n  font-size: 0.87rem;\n  font-weight: 600;\n}\n\n.filter-label[_ngcontent-%COMP%] {\n  color: #5e6f89;\n}\n\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 10px;\n}\n\n.summary-card[_ngcontent-%COMP%], .dashboard-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dce5f0;\n  border-radius: 16px;\n  box-shadow: 0 8px 24px rgba(19, 40, 72, 0.06);\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  min-height: 132px;\n  border-top-width: 5px;\n}\n\n.summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 6px 0 4px;\n  font-size: 2.05rem;\n  font-weight: 800;\n  line-height: 1;\n  color: #1a2740;\n}\n\n.summary-card__label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n}\n\n.summary-card__threshold[_ngcontent-%COMP%], .summary-card__detail[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #62738c;\n}\n\n.summary-card__detail[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.summary-card.continuation[_ngcontent-%COMP%] {\n  border-top-color: #f2635f;\n}\n\n.summary-card.continuation[_ngcontent-%COMP%]   .summary-card__label[_ngcontent-%COMP%] {\n  color: #e4544f;\n}\n\n.summary-card.completion[_ngcontent-%COMP%] {\n  border-top-color: #f1a93b;\n}\n\n.summary-card.completion[_ngcontent-%COMP%]   .summary-card__label[_ngcontent-%COMP%] {\n  color: #e89216;\n}\n\n.summary-card.progression[_ngcontent-%COMP%] {\n  border-top-color: #47c877;\n}\n\n.summary-card.progression[_ngcontent-%COMP%]   .summary-card__label[_ngcontent-%COMP%] {\n  color: #2aad5d;\n}\n\n.summary-card.quality[_ngcontent-%COMP%] {\n  border-top-color: #7aa8ff;\n}\n\n.summary-card.quality[_ngcontent-%COMP%]   .summary-card__label[_ngcontent-%COMP%] {\n  color: #4e7de6;\n}\n\n.alert-banner[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  padding: 12px 16px;\n  border: 1px solid #f0b8b7;\n  border-radius: 14px;\n  background: #fff3f3;\n  color: #d94d4a;\n  font-size: 1rem;\n  font-weight: 600;\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n\n.content-grid--top[_ngcontent-%COMP%] {\n  grid-template-columns: 1.18fr 1fr;\n  margin-bottom: 12px;\n}\n\n.content-grid--bottom[_ngcontent-%COMP%] {\n  grid-template-columns: 1.08fr 1fr 1.1fr;\n}\n\n.dashboard-panel[_ngcontent-%COMP%] {\n  padding: 12px 14px 14px;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.18rem;\n  font-weight: 700;\n  color: #24334f;\n}\n\n.trend-chart[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 110px;\n  gap: 10px;\n  align-items: center;\n}\n\n.trend-chart[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n\n.grid-lines[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  stroke: #d6deea;\n  stroke-width: 1;\n}\n\n.axis-labels[_ngcontent-%COMP%]   text[_ngcontent-%COMP%], .x-axis[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  fill: #607189;\n  font-size: 11px;\n  font-weight: 600;\n}\n\n.series-group[_ngcontent-%COMP%]   polyline[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 3;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n}\n\n.chart-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding-right: 4px;\n}\n\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #384b69;\n}\n\n.legend-swatch[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 4px;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: 0.88rem;\n  color: #30425e;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n  background: #eef4fb;\n  border-top: 1px solid #d6e0ec;\n  border-bottom: 1px solid #d6e0ec;\n  font-weight: 700;\n  text-align: left;\n  white-space: nowrap;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #d6e0ec;\n  border-top-left-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #d6e0ec;\n  border-top-right-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n  border-bottom: 1px solid #e4ebf4;\n  white-space: nowrap;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child {\n  border-bottom-left-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 10px;\n}\n\n.risk-list[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.risk-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  color: #344763;\n  line-height: 1.45;\n}\n\n.risk-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: #e35a53;\n}\n\n.snapshot-chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.snapshot-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 130px minmax(0, 1fr) 36px;\n  gap: 10px;\n  align-items: center;\n}\n\n.snapshot-row__label[_ngcontent-%COMP%], .snapshot-row__value[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #42546f;\n}\n\n.snapshot-row__bar-track[_ngcontent-%COMP%] {\n  position: relative;\n  height: 18px;\n  background: #f4eadf;\n  border-radius: 999px;\n  overflow: hidden;\n}\n\n.snapshot-row__bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(90deg, #ef9f42 0%, #d8770c 100%);\n}\n\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #edf4ff;\n  color: #3e6bc7;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n\n@media (max-width: 1200px) {\n  .summary-grid[_ngcontent-%COMP%], .content-grid--bottom[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .content-grid--top[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 768px) {\n  .executive-overview-page[_ngcontent-%COMP%] {\n    padding: 8px 0 24px;\n  }\n  .summary-grid[_ngcontent-%COMP%], .content-grid--bottom[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .trend-chart[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .snapshot-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 6px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZWN1dGl2ZS1vdmVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7O0VBRUUsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQURGOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFESjs7QUFLQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTs7RUFFRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtBQUZGOztBQUlFO0VBQ0UsY0FBQTtBQUZKOztB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dXRpdmUtb3ZlcnZpZXctcGFnZSB7XG4gIHBhZGRpbmc6IDEycHggOHB4IDI4cHg7XG4gIGJhY2tncm91bmQ6ICNmNmY4ZmI7XG4gIGNvbG9yOiAjMTcyMzNiO1xufVxuXG4ucGFnZS1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgY29sb3I6ICMxYzI3NDE7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDJweCAwIDA7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIGNvbG9yOiAjNzQ4MjlhO1xuICB9XG59XG5cbi5maWx0ZXItYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZTNlZjtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbn1cblxuLmZpbHRlci1waWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBtaW4taGVpZ2h0OiAzNHB4O1xuICBwYWRkaW5nOiA3cHggMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZGVlYTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICNmN2Y5ZmM7XG4gIGNvbG9yOiAjMzE0MzVmO1xuICBmb250LXNpemU6IDAuODdyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5maWx0ZXItbGFiZWwge1xuICBjb2xvcjogIzVlNmY4OTtcbn1cblxuLnN1bW1hcnktZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc3VtbWFyeS1jYXJkLFxuLmRhc2hib2FyZC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2U1ZjA7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxOSwgNDAsIDcyLCAwLjA2KTtcbn1cblxuLnN1bW1hcnktY2FyZCB7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgbWluLWhlaWdodDogMTMycHg7XG4gIGJvcmRlci10b3Atd2lkdGg6IDVweDtcblxuICBoMiB7XG4gICAgbWFyZ2luOiA2cHggMCA0cHg7XG4gICAgZm9udC1zaXplOiAyLjA1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6ICMxYTI3NDA7XG4gIH1cbn1cblxuLnN1bW1hcnktY2FyZF9fbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN1bW1hcnktY2FyZF9fdGhyZXNob2xkLFxuLnN1bW1hcnktY2FyZF9fZGV0YWlsIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICM2MjczOGM7XG59XG5cbi5zdW1tYXJ5LWNhcmRfX2RldGFpbCB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnN1bW1hcnktY2FyZC5jb250aW51YXRpb24ge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZjI2MzVmO1xuXG4gIC5zdW1tYXJ5LWNhcmRfX2xhYmVsIHtcbiAgICBjb2xvcjogI2U0NTQ0ZjtcbiAgfVxufVxuXG4uc3VtbWFyeS1jYXJkLmNvbXBsZXRpb24ge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZjFhOTNiO1xuXG4gIC5zdW1tYXJ5LWNhcmRfX2xhYmVsIHtcbiAgICBjb2xvcjogI2U4OTIxNjtcbiAgfVxufVxuXG4uc3VtbWFyeS1jYXJkLnByb2dyZXNzaW9uIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzQ3Yzg3NztcblxuICAuc3VtbWFyeS1jYXJkX19sYWJlbCB7XG4gICAgY29sb3I6ICMyYWFkNWQ7XG4gIH1cbn1cblxuLnN1bW1hcnktY2FyZC5xdWFsaXR5IHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzdhYThmZjtcblxuICAuc3VtbWFyeS1jYXJkX19sYWJlbCB7XG4gICAgY29sb3I6ICM0ZTdkZTY7XG4gIH1cbn1cblxuLmFsZXJ0LWJhbm5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwYjhiNztcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjNmMztcbiAgY29sb3I6ICNkOTRkNGE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNvbnRlbnQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTJweDtcbn1cblxuLmNvbnRlbnQtZ3JpZC0tdG9wIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjE4ZnIgMWZyO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uY29udGVudC1ncmlkLS1ib3R0b20ge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMDhmciAxZnIgMS4xZnI7XG59XG5cbi5kYXNoYm9hcmQtcGFuZWwge1xuICBwYWRkaW5nOiAxMnB4IDE0cHggMTRweDtcbn1cblxuLnBhbmVsLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuMThyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzI0MzM0ZjtcbiAgfVxufVxuXG4udHJlbmQtY2hhcnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIDExMHB4O1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgc3ZnIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLmdyaWQtbGluZXMgbGluZSB7XG4gIHN0cm9rZTogI2Q2ZGVlYTtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xufVxuXG4uYXhpcy1sYWJlbHMgdGV4dCxcbi54LWF4aXMgdGV4dCB7XG4gIGZpbGw6ICM2MDcxODk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNlcmllcy1ncm91cCBwb2x5bGluZSB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZS13aWR0aDogMztcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xufVxuXG4uY2hhcnQtbGVnZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG5cbi5sZWdlbmQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDAuODhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzg0YjY5O1xufVxuXG4ubGVnZW5kLXN3YXRjaCB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnRhYmxlLXdyYXBwZXIge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBjb2xvcjogIzMwNDI1ZTtcblxuICB0aGVhZCB0aCB7XG4gICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2VlZjRmYjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q2ZTBlYztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q2ZTBlYztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIHRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkNmUwZWM7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgfVxuXG4gIHRoZWFkIHRoOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkNmUwZWM7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICB0Ym9keSB0ZCB7XG4gICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGViZjQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIHRib2R5IHRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICB0Ym9keSB0cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB9XG59XG5cbi5yaXNrLWxpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgbGkge1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgY29sb3I6ICMzNDQ3NjM7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIH1cblxuICBsaTo6bWFya2VyIHtcbiAgICBjb2xvcjogI2UzNWE1MztcbiAgfVxufVxuXG4uc25hcHNob3QtY2hhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi5zbmFwc2hvdC1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEzMHB4IG1pbm1heCgwLCAxZnIpIDM2cHg7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNuYXBzaG90LXJvd19fbGFiZWwsXG4uc25hcHNob3Qtcm93X192YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgY29sb3I6ICM0MjU0NmY7XG59XG5cbi5zbmFwc2hvdC1yb3dfX2Jhci10cmFjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kOiAjZjRlYWRmO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNuYXBzaG90LXJvd19fYmFyLWZpbGwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2VmOWY0MiAwJSwgI2Q4NzcwYyAxMDAlKTtcbn1cblxuLnN0YXR1cy1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogI2VkZjRmZjtcbiAgY29sb3I6ICMzZTZiYzc7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zdW1tYXJ5LWdyaWQsXG4gIC5jb250ZW50LWdyaWQtLWJvdHRvbSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICB9XG5cbiAgLmNvbnRlbnQtZ3JpZC0tdG9wIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmV4ZWN1dGl2ZS1vdmVydmlldy1wYWdlIHtcbiAgICBwYWRkaW5nOiA4cHggMCAyNHB4O1xuICB9XG5cbiAgLnN1bW1hcnktZ3JpZCxcbiAgLmNvbnRlbnQtZ3JpZC0tYm90dG9tIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC50cmVuZC1jaGFydCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuc25hcHNob3Qtcm93IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDZweDtcbiAgfVxufVxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('collapseAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                    height: '0',
                    overflow: 'hidden',
                    opacity: '0',
                    margin: '0',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                    height: '*',
                    opacity: '1',
                    margin: '*',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('collapsed <=> expanded', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('300ms ease-out')]),
            ]),
        ] } });


/***/ }),

/***/ 7913:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/analytics/executive-overview/executive-overview.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExecutiveOverviewModule": () => (/* binding */ ExecutiveOverviewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _executive_overview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./executive-overview-routing.module */ 9273);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _executive_overview_view_executive_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./executive-overview-view/executive-overview.component */ 9858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);









class ExecutiveOverviewModule {
}
ExecutiveOverviewModule.ɵfac = function ExecutiveOverviewModule_Factory(t) { return new (t || ExecutiveOverviewModule)(); };
ExecutiveOverviewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ExecutiveOverviewModule });
ExecutiveOverviewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        // MaterialModule,
        _executive_overview_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExecutiveOverviewRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ExecutiveOverviewModule, { declarations: [_executive_overview_view_executive_overview_component__WEBPACK_IMPORTED_MODULE_1__.ExecutiveOverviewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        // MaterialModule,
        _executive_overview_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExecutiveOverviewRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_analytics_executive-overview_executive-overview_module_ts.js.map