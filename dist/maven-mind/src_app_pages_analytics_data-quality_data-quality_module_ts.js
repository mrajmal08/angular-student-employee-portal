"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_analytics_data-quality_data-quality_module_ts"],{

/***/ 5455:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/analytics/data-quality/data-quality-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataQualityRoutingModule": () => (/* binding */ DataQualityRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _data_quality_view_data_quality_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-quality-view/data-quality-view.component */ 5377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'view', component: _data_quality_view_data_quality_view_component__WEBPACK_IMPORTED_MODULE_0__.DataQualityViewComponent },
];
class DataQualityRoutingModule {
}
DataQualityRoutingModule.ɵfac = function DataQualityRoutingModule_Factory(t) { return new (t || DataQualityRoutingModule)(); };
DataQualityRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DataQualityRoutingModule });
DataQualityRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DataQualityRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5377:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/analytics/data-quality/data-quality-view/data-quality-view.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataQualityViewComponent": () => (/* binding */ DataQualityViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function DataQualityViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21)(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const filter_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", filter_r6.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r6.value);
} }
function DataQualityViewComponent_article_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 24)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const card_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", card_r7.tone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r7.detail);
} }
function DataQualityViewComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tick_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tick_r8);
} }
function DataQualityViewComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r3.getBarHeight(item_r9.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", item_r9.label + " " + item_r9.value + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.label);
} }
function DataQualityViewComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td")(6, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r10.sourceFeed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r10.lastRun);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", row_r10.tone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r10.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r10.note);
} }
function DataQualityViewComponent_tr_61_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r11.issueId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r11.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r11.issueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r11.severity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r11.status);
} }
class DataQualityViewComponent {
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
                label: 'Completeness',
                value: '89%',
                detail: 'Student Records above threshold',
                tone: 'completeness',
            },
            {
                label: 'Accuracy',
                value: '93%',
                detail: 'Validation checks passed',
                tone: 'accuracy',
            },
            {
                label: 'Timeliness',
                value: 'On time',
                detail: 'Refresh SLA 98.5% achieved',
                tone: 'timeliness',
            },
            {
                label: 'High issues',
                value: '3 open',
                detail: 'Priority items pending resolution',
                tone: 'issues',
            },
        ];
        this.fieldCompleteness = [
            { label: 'Withdraw reason', value: 80 },
            { label: 'Board status', value: 92 },
            { label: 'Award class', value: 90 },
            { label: 'Partner code', value: 88 },
            { label: 'GO response', value: 70 },
        ];
        this.chartTicks = [80, 40, 0];
        this.sourceRefreshStatus = [
            {
                sourceFeed: 'Student Records',
                lastRun: '06:05',
                status: 'Success',
                note: '0 blockers',
                tone: 'success',
            },
            {
                sourceFeed: 'Attendance',
                lastRun: '06:07',
                status: 'Success',
                note: '2 warnings',
                tone: 'success',
            },
            {
                sourceFeed: 'Awards',
                lastRun: '06:11',
                status: 'Late',
                note: '1 warning',
                tone: 'warning',
            },
        ];
        this.issueLog = [
            {
                issueId: 'DQ-014',
                source: 'Student Records',
                issueType: 'Missing withdrawal reason',
                severity: 'High',
                status: 'Open',
            },
            {
                issueId: 'DQ-021',
                source: 'Awards',
                issueType: 'Late award conferral feed',
                severity: 'Medium',
                status: 'In progress',
            },
        ];
    }
    getBarHeight(value) {
        return `${Math.max(0, Math.min(value, 100))}%`;
    }
}
DataQualityViewComponent.ɵfac = function DataQualityViewComponent_Factory(t) { return new (t || DataQualityViewComponent)(); };
DataQualityViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataQualityViewComponent, selectors: [["app-data-quality-view"]], decls: 69, vars: 6, consts: [[1, "data-quality-page"], [1, "page-heading"], [1, "filter-bar"], ["class", "filter-pill", 4, "ngFor", "ngForOf"], [1, "summary-grid"], ["class", "summary-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "content-grid"], [1, "dashboard-panel"], [1, "panel-header"], [1, "bar-chart"], [1, "bar-chart__y-axis"], [4, "ngFor", "ngForOf"], [1, "bar-chart__plot"], [1, "bar-chart__gridline", "bar-chart__gridline--top"], [1, "bar-chart__gridline", "bar-chart__gridline--middle"], [1, "bar-chart__gridline", "bar-chart__gridline--bottom"], [1, "bar-chart__bars"], ["class", "bar-chart__item", 4, "ngFor", "ngForOf"], [1, "table-wrapper"], [1, "dashboard-panel", "dashboard-panel--full"], [1, "table-row-placeholder"], [1, "filter-pill"], [1, "filter-label"], [1, "filter-value"], [1, "summary-card", 3, "ngClass"], [1, "summary-card__badge"], [1, "bar-chart__item"], [1, "bar-chart__column"], [1, "bar-chart__fill"], [1, "bar-chart__label"], [1, "status-chip", 3, "ngClass"]], template: function DataQualityViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Data Quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "B3 & Student Outcomes / Compliance Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataQualityViewComponent_div_7_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DataQualityViewComponent_article_9_Template, 7, 4, "article", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 6)(11, "article", 7)(12, "div", 8)(13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Field completeness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9)(16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DataQualityViewComponent_span_17_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 13)(20, "div", 14)(21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DataQualityViewComponent_div_23_Template, 5, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "article", 7)(25, "div", 8)(26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Source refresh status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18)(29, "table")(30, "thead")(31, "tr")(32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Source feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Last run");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DataQualityViewComponent_tr_41_Template, 10, 5, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 19)(43, "div", 8)(44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Issue log and reconciliation exceptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18)(47, "table")(48, "thead")(49, "tr")(50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Issue ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Issue type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Severity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, DataQualityViewComponent_tr_61_Template, 11, 5, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr", 20)(63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "td")(66, "td")(67, "td")(68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.summaryCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chartTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fieldCompleteness);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sourceRefreshStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.issueLog);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".data-quality-page[_ngcontent-%COMP%] {\n  padding: 10px 8px 24px;\n  background: #f5f7fb;\n  color: #17233b;\n}\n\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 18px;\n  margin-bottom: 12px;\n}\n\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 800;\n  line-height: 1.05;\n  color: #1b2741;\n}\n\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #7c889d;\n}\n\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 14px;\n  padding: 10px 12px;\n  background: #ffffff;\n  border: 1px solid #dce4f0;\n  border-radius: 16px;\n  box-shadow: 0 6px 18px rgba(18, 40, 78, 0.04);\n}\n\n.filter-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 30px;\n  padding: 6px 14px;\n  border: 1px solid #d8e1ed;\n  border-radius: 999px;\n  background: #f9fbff;\n  color: #5a687f;\n  font-size: 0.83rem;\n  line-height: 1;\n}\n\n.filter-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.filter-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #404d62;\n}\n\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.summary-card[_ngcontent-%COMP%], .dashboard-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dce4f0;\n  border-radius: 16px;\n  box-shadow: 0 8px 22px rgba(18, 40, 78, 0.05);\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  min-height: 122px;\n  padding: 12px 14px 10px;\n}\n\n.summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 8px;\n  font-size: 2.05rem;\n  font-weight: 800;\n  line-height: 1;\n  color: #19253d;\n}\n\n.summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.89rem;\n  font-weight: 600;\n  color: #8491a7;\n}\n\n.summary-card__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 28px;\n  padding: 5px 14px;\n  border-radius: 999px;\n  font-size: 0.98rem;\n  font-weight: 800;\n  line-height: 1;\n}\n\n.summary-card.completeness[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #2f69ea;\n  background: #ebf2ff;\n}\n\n.summary-card.accuracy[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #2dbb62;\n  background: #e9f9ef;\n}\n\n.summary-card.timeliness[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #31bb62;\n  background: #e9f9ef;\n}\n\n.summary-card.issues[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #f0a11a;\n  background: #fff1cf;\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.65fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.dashboard-panel[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n}\n\n.dashboard-panel--full[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #24324d;\n}\n\n.bar-chart[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 34px minmax(0, 1fr);\n  gap: 10px;\n  align-items: end;\n  min-height: 122px;\n  padding: 4px 2px 2px;\n}\n\n.bar-chart__y-axis[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 86px;\n  padding-bottom: 20px;\n  font-size: 0.67rem;\n  font-weight: 700;\n  color: #7a889f;\n}\n\n.bar-chart__plot[_ngcontent-%COMP%] {\n  position: relative;\n  height: 106px;\n  padding: 4px 8px 0 10px;\n  border-left: 1px solid #94a1b6;\n  border-bottom: 1px solid #94a1b6;\n}\n\n.bar-chart__gridline[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-top: 1px solid #e3e8f1;\n}\n\n.bar-chart__gridline--top[_ngcontent-%COMP%] {\n  top: 4px;\n}\n\n.bar-chart__gridline--middle[_ngcontent-%COMP%] {\n  top: 46px;\n}\n\n.bar-chart__gridline--bottom[_ngcontent-%COMP%] {\n  bottom: -1px;\n}\n\n.bar-chart__bars[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 10px;\n  align-items: end;\n  height: 100%;\n}\n\n.bar-chart__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 6px;\n  min-width: 0;\n}\n\n.bar-chart__column[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  width: 100%;\n  max-width: 26px;\n  height: 82px;\n}\n\n.bar-chart__fill[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 10px;\n  border-radius: 0;\n  background: linear-gradient(180deg, #2f69ea 0%, #245bd1 100%);\n}\n\n.bar-chart__label[_ngcontent-%COMP%] {\n  display: block;\n  width: 52px;\n  font-size: 0.5rem;\n  font-weight: 700;\n  line-height: 1.1;\n  text-align: center;\n  color: #5d6980;\n  transform: rotate(-30deg);\n  transform-origin: top center;\n  white-space: nowrap;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: 0.86rem;\n  color: #31425d;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n  background: #eaf1fb;\n  border-top: 1px solid #d6dfec;\n  border-bottom: 1px solid #d6dfec;\n  font-weight: 800;\n  text-align: left;\n  white-space: nowrap;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #d6dfec;\n  border-top-left-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #d6dfec;\n  border-top-right-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n  border-bottom: 1px solid #e3e8f1;\n  border-left: 1px solid #e3e8f1;\n  background: #ffffff;\n  vertical-align: middle;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #e3e8f1;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child {\n  border-bottom-left-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 10px;\n}\n\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 24px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #edf4ff;\n  color: #3567d4;\n  font-size: 0.78rem;\n  font-weight: 800;\n  line-height: 1;\n}\n\n.status-chip.success[_ngcontent-%COMP%] {\n  background: #eaf8ef;\n  color: #279955;\n}\n\n.status-chip.warning[_ngcontent-%COMP%] {\n  background: #fff1d8;\n  color: #cb8522;\n}\n\n.table-row-placeholder[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 20px;\n  padding: 0 10px;\n  background: #ffffff;\n}\n\n@media (max-width: 1100px) {\n  .summary-grid[_ngcontent-%COMP%], .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 720px) {\n  .page-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .summary-grid[_ngcontent-%COMP%], .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .bar-chart__label[_ngcontent-%COMP%] {\n    transform: none;\n    width: auto;\n    white-space: normal;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtcXVhbGl0eS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUFERjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBOztFQUVFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBTUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9C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O0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQWRGO0FBQ0YiLCJmaWxlIjoiZGF0YS1xdWFsaXR5LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YS1xdWFsaXR5LXBhZ2Uge1xuICBwYWRkaW5nOiAxMHB4IDhweCAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZjVmN2ZiO1xuICBjb2xvcjogIzE3MjMzYjtcbn1cblxuLnBhZ2UtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMDU7XG4gICAgY29sb3I6ICMxYjI3NDE7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM3Yzg4OWQ7XG4gIH1cbn1cblxuLmZpbHRlci1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2U0ZjA7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDE4cHggcmdiYSgxOCwgNDAsIDc4LCAwLjA0KTtcbn1cblxuLmZpbHRlci1waWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA2cHggMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZTFlZDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICNmOWZiZmY7XG4gIGNvbG9yOiAjNWE2ODdmO1xuICBmb250LXNpemU6IDAuODNyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uZmlsdGVyLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZpbHRlci12YWx1ZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNDA0ZDYyO1xufVxuXG4uc3VtbWFyeS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5zdW1tYXJ5LWNhcmQsXG4uZGFzaGJvYXJkLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTRmMDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMjJweCByZ2JhKDE4LCA0MCwgNzgsIDAuMDUpO1xufVxuXG4uc3VtbWFyeS1jYXJkIHtcbiAgbWluLWhlaWdodDogMTIycHg7XG4gIHBhZGRpbmc6IDEycHggMTRweCAxMHB4O1xuXG4gIGgyIHtcbiAgICBtYXJnaW46IDEwcHggMCA4cHg7XG4gICAgZm9udC1zaXplOiAyLjA1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6ICMxOTI1M2Q7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjg5cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM4NDkxYTc7XG4gIH1cbn1cblxuLnN1bW1hcnktY2FyZF9fYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMjhweDtcbiAgcGFkZGluZzogNXB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBmb250LXNpemU6IDAuOThyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uc3VtbWFyeS1jYXJkLmNvbXBsZXRlbmVzcyAuc3VtbWFyeS1jYXJkX19iYWRnZSB7XG4gIGNvbG9yOiAjMmY2OWVhO1xuICBiYWNrZ3JvdW5kOiAjZWJmMmZmO1xufVxuXG4uc3VtbWFyeS1jYXJkLmFjY3VyYWN5IC5zdW1tYXJ5LWNhcmRfX2JhZGdlIHtcbiAgY29sb3I6ICMyZGJiNjI7XG4gIGJhY2tncm91bmQ6ICNlOWY5ZWY7XG59XG5cbi5zdW1tYXJ5LWNhcmQudGltZWxpbmVzcyAuc3VtbWFyeS1jYXJkX19iYWRnZSB7XG4gIGNvbG9yOiAjMzFiYjYyO1xuICBiYWNrZ3JvdW5kOiAjZTlmOWVmO1xufVxuXG4uc3VtbWFyeS1jYXJkLmlzc3VlcyAuc3VtbWFyeS1jYXJkX19iYWRnZSB7XG4gIGNvbG9yOiAjZjBhMTFhO1xuICBiYWNrZ3JvdW5kOiAjZmZmMWNmO1xufVxuXG4uY29udGVudC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS42NWZyO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5kYXNoYm9hcmQtcGFuZWwge1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG59XG5cbi5kYXNoYm9hcmQtcGFuZWwtLWZ1bGwge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnBhbmVsLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogIzI0MzI0ZDtcbiAgfVxufVxuXG4uYmFyLWNoYXJ0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNHB4IG1pbm1heCgwLCAxZnIpO1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIG1pbi1oZWlnaHQ6IDEyMnB4O1xuICBwYWRkaW5nOiA0cHggMnB4IDJweDtcbn1cblxuLmJhci1jaGFydF9feS1heGlzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDg2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDAuNjdyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjN2E4ODlmO1xufVxuXG4uYmFyLWNoYXJ0X19wbG90IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwNnB4O1xuICBwYWRkaW5nOiA0cHggOHB4IDAgMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOTRhMWI2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk0YTFiNjtcbn1cblxuLmJhci1jaGFydF9fZ3JpZGxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UzZThmMTtcbn1cblxuLmJhci1jaGFydF9fZ3JpZGxpbmUtLXRvcCB7XG4gIHRvcDogNHB4O1xufVxuXG4uYmFyLWNoYXJ0X19ncmlkbGluZS0tbWlkZGxlIHtcbiAgdG9wOiA0NnB4O1xufVxuXG4uYmFyLWNoYXJ0X19ncmlkbGluZS0tYm90dG9tIHtcbiAgYm90dG9tOiAtMXB4O1xufVxuXG4uYmFyLWNoYXJ0X19iYXJzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJhci1jaGFydF9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogNnB4O1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5iYXItY2hhcnRfX2NvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogODJweDtcbn1cblxuLmJhci1jaGFydF9fZmlsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmY2OWVhIDAlLCAjMjQ1YmQxIDEwMCUpO1xufVxuXG4uYmFyLWNoYXJ0X19sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTJweDtcbiAgZm9udC1zaXplOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1ZDY5ODA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi50YWJsZS13cmFwcGVyIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMC44NnJlbTtcbiAgY29sb3I6ICMzMTQyNWQ7XG5cbiAgdGhlYWQgdGgge1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNlYWYxZmI7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNmRmZWM7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNmRmZWM7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICB0aGVhZCB0aDpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDZkZmVjO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICB0aGVhZCB0aDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDZkZmVjO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgdGJvZHkgdGQge1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlOGYxO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UzZThmMTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICB0Ym9keSB0ZDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTNlOGYxO1xuICB9XG5cbiAgdGJvZHkgdHI6bGFzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgfVxuXG4gIHRib2R5IHRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cblxuLnN0YXR1cy1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogI2VkZjRmZjtcbiAgY29sb3I6ICMzNTY3ZDQ7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5zdGF0dXMtY2hpcC5zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogI2VhZjhlZjtcbiAgY29sb3I6ICMyNzk5NTU7XG59XG5cbi5zdGF0dXMtY2hpcC53YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogI2ZmZjFkODtcbiAgY29sb3I6ICNjYjg1MjI7XG59XG5cbi50YWJsZS1yb3ctcGxhY2Vob2xkZXIgdGQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuc3VtbWFyeS1ncmlkLFxuICAuY29udGVudC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5wYWdlLWhlYWRpbmcge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiA0cHg7XG4gIH1cblxuICAuc3VtbWFyeS1ncmlkLFxuICAuY29udGVudC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5iYXItY2hhcnRfX2xhYmVsIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 9627:
/*!*********************************************************************!*\
  !*** ./src/app/pages/analytics/data-quality/data-quality.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataQualityModule": () => (/* binding */ DataQualityModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _data_quality_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-quality-routing.module */ 5455);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _data_quality_view_data_quality_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-quality-view/data-quality-view.component */ 5377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);









class DataQualityModule {
}
DataQualityModule.ɵfac = function DataQualityModule_Factory(t) { return new (t || DataQualityModule)(); };
DataQualityModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DataQualityModule });
DataQualityModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        // MaterialModule,
        _data_quality_routing_module__WEBPACK_IMPORTED_MODULE_0__.DataQualityRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DataQualityModule, { declarations: [_data_quality_view_data_quality_view_component__WEBPACK_IMPORTED_MODULE_1__.DataQualityViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        // MaterialModule,
        _data_quality_routing_module__WEBPACK_IMPORTED_MODULE_0__.DataQualityRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_analytics_data-quality_data-quality_module_ts.js.map