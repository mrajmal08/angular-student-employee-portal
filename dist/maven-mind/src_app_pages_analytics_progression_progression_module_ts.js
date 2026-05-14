"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_analytics_progression_progression_module_ts"],{

/***/ 9804:
/*!***************************************************************************!*\
  !*** ./src/app/pages/analytics/progression/progression-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressionRoutingModule": () => (/* binding */ ProgressionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _progression_view_progression_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progression-view/progression-view.component */ 4961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'view', component: _progression_view_progression_view_component__WEBPACK_IMPORTED_MODULE_0__.ProgressionViewComponent },
];
class ProgressionRoutingModule {
}
ProgressionRoutingModule.ɵfac = function ProgressionRoutingModule_Factory(t) { return new (t || ProgressionRoutingModule)(); };
ProgressionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProgressionRoutingModule });
ProgressionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProgressionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4961:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/analytics/progression/progression-view/progression-view.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressionViewComponent": () => (/* binding */ ProgressionViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ProgressionViewComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28)(1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const filter_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", filter_r12.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r12.value);
} }
function ProgressionViewComponent_article_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 31)(1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const card_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", card_r13.tone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r13.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r13.detail);
} }
function ProgressionViewComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const stage_r14 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r2.getFunnelWidth(stage_r14.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", stage_r14.label, ": ", stage_r14.value, "");
} }
function ProgressionViewComponent__svg_line_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "line");
} if (rf & 2) {
    const tick_r15 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r3.trendChartPadding.left)("x2", ctx_r3.trendChartWidth - ctx_r3.trendChartPadding.right)("y1", ctx_r3.getTrendY(tick_r15))("y2", ctx_r3.getTrendY(tick_r15));
} }
function ProgressionViewComponent__svg_text_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tick_r16 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r4.trendChartPadding.left - 8)("y", ctx_r4.getTrendY(tick_r16) + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tick_r16, " ");
} }
function ProgressionViewComponent__svg_ng_container_38__svg_circle_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 38);
} if (rf & 2) {
    const value_r19 = ctx.$implicit;
    const index_r20 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r18.getTrendX(index_r20))("cy", ctx_r18.getTrendY(value_r19));
} }
function ProgressionViewComponent__svg_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "polyline", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProgressionViewComponent__svg_ng_container_38__svg_circle_3_Template, 1, 2, "circle", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const series_r17 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", series_r17.colorClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("points", ctx_r5.getTrendPoints(series_r17.values));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", series_r17.colorClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", series_r17.values);
} }
function ProgressionViewComponent__svg_text_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r21 = ctx.$implicit;
    const index_r22 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r6.getTrendX(index_r22))("y", ctx_r6.trendChartHeight - 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", year_r21, " ");
} }
function ProgressionViewComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const series_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", series_r23.colorClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](series_r23.label);
} }
function ProgressionViewComponent__svg_line_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "line");
} if (rf & 2) {
    const tick_r24 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r8.breakdownChartPadding.left)("x2", ctx_r8.breakdownChartWidth - ctx_r8.breakdownChartPadding.right)("y1", ctx_r8.getBreakdownTickY(tick_r24))("y2", ctx_r8.getBreakdownTickY(tick_r24));
} }
function ProgressionViewComponent__svg_text_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tick_r25 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r9.breakdownChartPadding.left - 7)("y", ctx_r9.getBreakdownTickY(tick_r25) + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tick_r25, " ");
} }
function ProgressionViewComponent__svg_g_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "text", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const index_r27 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r10.getBreakdownBarX(index_r27))("y", ctx_r10.getBreakdownBarY(item_r26.value))("width", ctx_r10.getBreakdownBarWidth())("height", ctx_r10.getBreakdownBarHeight(item_r26.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r10.getBreakdownBarX(index_r27) + ctx_r10.getBreakdownBarWidth() / 2)("y", ctx_r10.breakdownChartHeight - 10)("transform", "rotate(-28 " + (ctx_r10.getBreakdownBarX(index_r27) + ctx_r10.getBreakdownBarWidth() / 2) + " " + (ctx_r10.breakdownChartHeight - 10) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.label, " ");
} }
function ProgressionViewComponent_tr_75_Template(rf, ctx) { if (rf & 1) {
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
    const row_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r28.outcomeCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r28.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r28.share);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r28.cohort);
} }
class ProgressionViewComponent {
    constructor() {
        this.reportDate = '31 Jan 2026';
        this.reportRules = 'Rules v2.4';
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
                label: 'Positive outcome',
                value: '72.4%',
                detail: '379 positive / 523 known',
                tone: 'positive',
            },
            {
                label: 'Threshold',
                value: '72.0%',
                detail: 'Internal management benchmark',
                tone: 'threshold',
            },
            {
                label: 'Response rate',
                value: '61.8%',
                detail: '481 responded / 778 eligible',
                tone: 'response-rate',
            },
            {
                label: 'Contactability',
                value: '78.7%',
                detail: '612 contactable / 778 eligible',
                tone: 'contactability',
            },
        ];
        this.funnelStages = [
            { label: 'Eligible', value: 670 },
            { label: 'Contactable', value: 612 },
            { label: 'Responded', value: 481 },
            { label: 'Positive', value: 379 },
        ];
        this.trendYears = ['2021/22', '2022/23', '2023/24', '2024/25', '2025/26'];
        this.trendTicks = [40, 60, 80, 100];
        this.trendMin = 40;
        this.trendMax = 100;
        this.trendChartWidth = 430;
        this.trendChartHeight = 190;
        this.trendChartPadding = { top: 18, right: 18, bottom: 34, left: 34 };
        this.trendSeries = [
            {
                label: 'Progression',
                colorClass: 'progression',
                values: [73.2, 72.8, 72.0, 71.2, 72.4],
            },
            {
                label: 'Response rate',
                colorClass: 'response',
                values: [69.6, 69.0, 66.2, 64.8, 61.8],
            },
        ];
        this.outcomeBreakdown = [
            { label: 'Professional employment', value: 262 },
            { label: 'Further study', value: 86 },
            { label: 'Other positive', value: 31 },
            { label: 'Caring', value: 38 },
            { label: 'Unknown', value: 52 },
            { label: 'Not known', value: 201 },
        ];
        this.breakdownTicks = [0, 100, 200, 300];
        this.breakdownChartWidth = 320;
        this.breakdownChartHeight = 180;
        this.breakdownChartPadding = { top: 16, right: 12, bottom: 58, left: 34 };
        this.breakdownMaxValue = 300;
        this.detailRows = [
            {
                outcomeCategory: 'Professional employment',
                count: 262,
                share: '39.1%',
                cohort: '2025 qualifiers',
            },
            {
                outcomeCategory: 'Further study',
                count: 86,
                share: '12.8%',
                cohort: '2025 qualifiers',
            },
            {
                outcomeCategory: 'Other positive',
                count: 31,
                share: '4.6%',
                cohort: '2025 qualifiers',
            },
        ];
    }
    getFunnelWidth(value) {
        const maxValue = this.funnelStages[0]?.value ?? 1;
        const width = 32 + (value / maxValue) * 50;
        return `${width}%`;
    }
    getTrendX(index) {
        const usableWidth = this.trendChartWidth -
            this.trendChartPadding.left -
            this.trendChartPadding.right;
        if (this.trendYears.length === 1) {
            return this.trendChartPadding.left + usableWidth / 2;
        }
        return (this.trendChartPadding.left +
            (usableWidth / (this.trendYears.length - 1)) * index);
    }
    getTrendY(value) {
        const usableHeight = this.trendChartHeight -
            this.trendChartPadding.top -
            this.trendChartPadding.bottom;
        return (this.trendChartPadding.top +
            ((this.trendMax - value) / (this.trendMax - this.trendMin)) * usableHeight);
    }
    getTrendPoints(values) {
        return values
            .map((value, index) => `${this.getTrendX(index)},${this.getTrendY(value)}`)
            .join(' ');
    }
    getBreakdownBarWidth() {
        const usableWidth = this.breakdownChartWidth -
            this.breakdownChartPadding.left -
            this.breakdownChartPadding.right;
        return usableWidth / this.outcomeBreakdown.length - 12;
    }
    getBreakdownBarX(index) {
        const usableWidth = this.breakdownChartWidth -
            this.breakdownChartPadding.left -
            this.breakdownChartPadding.right;
        const step = usableWidth / this.outcomeBreakdown.length;
        return this.breakdownChartPadding.left + index * step + 6;
    }
    getBreakdownBarY(value) {
        const usableHeight = this.breakdownChartHeight -
            this.breakdownChartPadding.top -
            this.breakdownChartPadding.bottom;
        return (this.breakdownChartHeight -
            this.breakdownChartPadding.bottom -
            (value / this.breakdownMaxValue) * usableHeight);
    }
    getBreakdownBarHeight(value) {
        const usableHeight = this.breakdownChartHeight -
            this.breakdownChartPadding.top -
            this.breakdownChartPadding.bottom;
        return (value / this.breakdownMaxValue) * usableHeight;
    }
    getBreakdownTickY(value) {
        const usableHeight = this.breakdownChartHeight -
            this.breakdownChartPadding.top -
            this.breakdownChartPadding.bottom;
        return (this.breakdownChartHeight -
            this.breakdownChartPadding.bottom -
            (value / this.breakdownMaxValue) * usableHeight);
    }
}
ProgressionViewComponent.ɵfac = function ProgressionViewComponent_Factory(t) { return new (t || ProgressionViewComponent)(); };
ProgressionViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressionViewComponent, selectors: [["app-progression-view"]], decls: 76, vars: 32, consts: [[1, "progression-page"], [1, "module-bar"], [1, "module-bar__meta"], [1, "page-heading"], [1, "filter-bar"], ["class", "filter-pill", 4, "ngFor", "ngForOf"], [1, "summary-grid"], ["class", "summary-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "content-grid", "content-grid--top"], [1, "dashboard-panel"], [1, "panel-header"], [1, "funnel-chart"], ["class", "funnel-stage", 3, "width", 4, "ngFor", "ngForOf"], [1, "trend-chart"], ["preserveAspectRatio", "xMidYMid meet"], [1, "grid-lines"], [4, "ngFor", "ngForOf"], [1, "axis-lines"], [1, "axis-labels", "axis-labels--y"], ["text-anchor", "end", 4, "ngFor", "ngForOf"], [1, "axis-labels", "axis-labels--x"], ["text-anchor", "middle", 4, "ngFor", "ngForOf"], [1, "chart-legend"], ["class", "legend-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "content-grid", "content-grid--bottom"], [1, "chart-frame", "chart-frame--breakdown"], [1, "dashboard-panel", "dashboard-panel--table"], [1, "table-wrapper"], [1, "filter-pill"], [1, "filter-label"], [1, "filter-value"], [1, "summary-card", 3, "ngClass"], [1, "summary-card__badge"], [1, "funnel-stage"], ["text-anchor", "end"], [1, "trend-line", 3, "ngClass"], [1, "trend-point-group", 3, "ngClass"], ["r", "4", 4, "ngFor", "ngForOf"], ["r", "4"], ["text-anchor", "middle"], [1, "legend-item", 3, "ngClass"], [1, "legend-line"], [1, "breakdown-bar"], ["text-anchor", "end", 1, "axis-labels", "axis-labels--x"]], template: function ProgressionViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "B3 Compliance Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Progression");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "B3 & Student Outcomes / Compliance Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProgressionViewComponent_div_15_Template, 5, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProgressionViewComponent_article_17_Template, 7, 4, "article", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 8)(19, "article", 9)(20, "div", 10)(21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Eligible -> responded -> positive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProgressionViewComponent_div_24_Template, 3, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "article", 9)(26, "div", 10)(27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Progression trend + response rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 14)(31, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProgressionViewComponent__svg_line_32_Template, 1, 4, "line", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "g", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "line")(35, "line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ProgressionViewComponent__svg_text_37_Template, 2, 3, "text", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProgressionViewComponent__svg_ng_container_38_Template, 4, 4, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "g", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProgressionViewComponent__svg_text_40_Template, 2, 3, "text", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProgressionViewComponent_div_42_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 24)(44, "article", 9)(45, "div", 10)(46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Outcome breakdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "svg", 14)(50, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ProgressionViewComponent__svg_line_51_Template, 1, 4, "line", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "g", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "line")(54, "line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ProgressionViewComponent__svg_text_56_Template, 2, 3, "text", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ProgressionViewComponent__svg_g_57_Template, 4, 8, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "article", 26)(59, "div", 10)(60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Progression detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 27)(63, "table")(64, "thead")(65, "tr")(66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Outcome category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Cohort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, ProgressionViewComponent_tr_75_Template, 9, 4, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("As at: ", ctx.reportDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reportRules);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.summaryCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.funnelStages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", "0 0 " + ctx.trendChartWidth + " " + ctx.trendChartHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.trendChartPadding.left)("x2", ctx.trendChartPadding.left)("y1", ctx.trendChartPadding.top)("y2", ctx.trendChartHeight - ctx.trendChartPadding.bottom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.trendChartPadding.left)("x2", ctx.trendChartWidth - ctx.trendChartPadding.right)("y1", ctx.trendChartHeight - ctx.trendChartPadding.bottom)("y2", ctx.trendChartHeight - ctx.trendChartPadding.bottom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendSeries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendYears);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendSeries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", "0 0 " + ctx.breakdownChartWidth + " " + ctx.breakdownChartHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breakdownTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.breakdownChartPadding.left)("x2", ctx.breakdownChartPadding.left)("y1", ctx.breakdownChartPadding.top)("y2", ctx.breakdownChartHeight - ctx.breakdownChartPadding.bottom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.breakdownChartPadding.left)("x2", ctx.breakdownChartWidth - ctx.breakdownChartPadding.right)("y1", ctx.breakdownChartHeight - ctx.breakdownChartPadding.bottom)("y2", ctx.breakdownChartHeight - ctx.breakdownChartPadding.bottom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breakdownTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.outcomeBreakdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.detailRows);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".progression-page[_ngcontent-%COMP%] {\n  padding: 4px 8px 24px;\n  background: #f5f7fb;\n  color: #1b2740;\n}\n\n.module-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 8px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #dde6f2;\n}\n\n.module-bar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 800;\n  line-height: 1.1;\n  color: #1b2740;\n}\n\n.module-bar__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  color: #7f8ba1;\n  font-size: 0.95rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 26px;\n  margin-bottom: 10px;\n}\n\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2.05rem;\n  font-weight: 800;\n  line-height: 1.05;\n  color: #1b2740;\n}\n\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #8390a6;\n  font-size: 0.94rem;\n  font-weight: 600;\n}\n\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 14px;\n  padding: 10px 12px;\n  background: #ffffff;\n  border: 1px solid #dce5f1;\n  border-radius: 16px;\n  box-shadow: 0 6px 18px rgba(18, 40, 78, 0.05);\n}\n\n.filter-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 30px;\n  padding: 6px 14px;\n  border: 1px solid #d8e1ed;\n  border-radius: 999px;\n  background: #f9fbff;\n  color: #55647d;\n  font-size: 0.84rem;\n  line-height: 1;\n}\n\n.filter-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.filter-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #394760;\n}\n\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 14px;\n}\n\n.summary-card[_ngcontent-%COMP%], .dashboard-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dce5f1;\n  border-radius: 16px;\n  box-shadow: 0 8px 20px rgba(18, 40, 78, 0.06);\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  min-height: 120px;\n  padding: 12px 14px 10px;\n}\n\n.summary-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 6px;\n  font-size: 2.05rem;\n  font-weight: 800;\n  line-height: 1;\n  color: #16233b;\n}\n\n.summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.92rem;\n  font-weight: 600;\n  color: #8997ac;\n}\n\n.summary-card__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 28px;\n  padding: 5px 14px;\n  border-radius: 999px;\n  font-size: 0.98rem;\n  font-weight: 800;\n  line-height: 1;\n}\n\n.summary-card.positive[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%], .summary-card.threshold[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #2cb44c;\n  background: #e5f8e8;\n}\n\n.summary-card.response-rate[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%], .summary-card.contactability[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #f09a0d;\n  background: #fff0cf;\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n\n.content-grid--top[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1.45fr;\n  margin-bottom: 12px;\n}\n\n.content-grid--bottom[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1.4fr;\n}\n\n.dashboard-panel[_ngcontent-%COMP%] {\n  padding: 10px 12px 12px;\n}\n\n.dashboard-panel--table[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.03rem;\n  font-weight: 800;\n  color: #24324d;\n}\n\n.funnel-chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  min-height: 200px;\n  padding: 14px 10px 8px;\n}\n\n.funnel-stage[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 32px;\n  min-width: 180px;\n  background: linear-gradient(180deg, #4b7ff0 0%, #2f62dd 100%);\n  clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);\n}\n\n.funnel-stage[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.01em;\n}\n\n.trend-chart[_ngcontent-%COMP%], .chart-frame[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.trend-chart[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .chart-frame[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.trend-chart[_ngcontent-%COMP%] {\n  max-width: 430px;\n}\n\n.chart-frame--breakdown[_ngcontent-%COMP%] {\n  max-width: 320px;\n}\n\n.grid-lines[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  stroke: #e3e8f1;\n  stroke-width: 1;\n}\n\n.axis-lines[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  stroke: #8b93a1;\n  stroke-width: 1.1;\n}\n\n.axis-labels[_ngcontent-%COMP%] {\n  fill: #6d7b92;\n  font-size: 10px;\n  font-weight: 700;\n}\n\n.trend-line[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 2.5;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n}\n\n.trend-line.progression[_ngcontent-%COMP%] {\n  stroke: #f39c12;\n}\n\n.trend-line.response[_ngcontent-%COMP%] {\n  stroke: #3f6df3;\n}\n\n.trend-point-group.progression[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: #f39c12;\n}\n\n.trend-point-group.response[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: #3f6df3;\n}\n\n.chart-legend[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 4px;\n  color: #67758c;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n\n.legend-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.legend-line[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 3px;\n  border-radius: 999px;\n  background: currentColor;\n}\n\n.legend-item.progression[_ngcontent-%COMP%] {\n  color: #f39c12;\n}\n\n.legend-item.response[_ngcontent-%COMP%] {\n  color: #3f6df3;\n}\n\n.breakdown-bar[_ngcontent-%COMP%] {\n  fill: #3f6df3;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: 0.86rem;\n  color: #30435f;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  background: #edf3fb;\n  border-top: 1px solid #d7e1ef;\n  border-bottom: 1px solid #d7e1ef;\n  text-align: left;\n  font-weight: 800;\n  color: #44546f;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #d7e1ef;\n  border-top-left-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #d7e1ef;\n  border-top-right-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  background: #ffffff;\n  border-bottom: 1px solid #e6edf7;\n  color: #40516b;\n  font-weight: 600;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #e6edf7;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #e6edf7;\n}\n\n@media (max-width: 1100px) {\n  .summary-grid[_ngcontent-%COMP%], .content-grid--top[_ngcontent-%COMP%], .content-grid--bottom[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (max-width: 768px) {\n  .module-bar[_ngcontent-%COMP%], .page-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .module-bar__meta[_ngcontent-%COMP%] {\n    gap: 12px;\n    flex-wrap: wrap;\n    white-space: normal;\n  }\n  .summary-grid[_ngcontent-%COMP%], .content-grid--top[_ngcontent-%COMP%], .content-grid--bottom[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .trend-chart[_ngcontent-%COMP%], .chart-frame--breakdown[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzaW9uLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUFGRjs7QUFLQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBOztFQUVFLG1CQUFBO0VBQ0EseUJBQUE7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QUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUFkRjtFQWlCQTs7O0lBR0UsMEJBQUE7RUFmRjtFQWtCQTs7SUFFRSxlQUFBO0VBaEJGO0FBQ0YiLCJmaWxlIjoicHJvZ3Jlc3Npb24tdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzc2lvbi1wYWdlIHtcbiAgcGFkZGluZzogNHB4IDhweCAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZjVmN2ZiO1xuICBjb2xvcjogIzFiMjc0MDtcbn1cblxuLm1vZHVsZS1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZTZmMjtcblxuICBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgY29sb3I6ICMxYjI3NDA7XG4gIH1cbn1cblxuLm1vZHVsZS1iYXJfX21ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDI0cHg7XG4gIGNvbG9yOiAjN2Y4YmExO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDI2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDIuMDVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBsaW5lLWhlaWdodDogMS4wNTtcbiAgICBjb2xvcjogIzFiMjc0MDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogNHB4IDAgMDtcbiAgICBjb2xvcjogIzgzOTBhNjtcbiAgICBmb250LXNpemU6IDAuOTRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuXG4uZmlsdGVyLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2U1ZjE7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDE4cHggcmdiYSgxOCwgNDAsIDc4LCAwLjA1KTtcbn1cblxuLmZpbHRlci1waWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA2cHggMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZTFlZDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICNmOWZiZmY7XG4gIGNvbG9yOiAjNTU2NDdkO1xuICBmb250LXNpemU6IDAuODRyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uZmlsdGVyLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZpbHRlci12YWx1ZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMzk0NzYwO1xufVxuXG4uc3VtbWFyeS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbi5zdW1tYXJ5LWNhcmQsXG4uZGFzaGJvYXJkLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTVmMTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDE4LCA0MCwgNzgsIDAuMDYpO1xufVxuXG4uc3VtbWFyeS1jYXJkIHtcbiAgbWluLWhlaWdodDogMTIwcHg7XG4gIHBhZGRpbmc6IDEycHggMTRweCAxMHB4O1xuXG4gIGgzIHtcbiAgICBtYXJnaW46IDEwcHggMCA2cHg7XG4gICAgZm9udC1zaXplOiAyLjA1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6ICMxNjIzM2I7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjkycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM4OTk3YWM7XG4gIH1cbn1cblxuLnN1bW1hcnktY2FyZF9fYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMjhweDtcbiAgcGFkZGluZzogNXB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBmb250LXNpemU6IDAuOThyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uc3VtbWFyeS1jYXJkLnBvc2l0aXZlIC5zdW1tYXJ5LWNhcmRfX2JhZGdlLFxuLnN1bW1hcnktY2FyZC50aHJlc2hvbGQgLnN1bW1hcnktY2FyZF9fYmFkZ2Uge1xuICBjb2xvcjogIzJjYjQ0YztcbiAgYmFja2dyb3VuZDogI2U1ZjhlODtcbn1cblxuLnN1bW1hcnktY2FyZC5yZXNwb25zZS1yYXRlIC5zdW1tYXJ5LWNhcmRfX2JhZGdlLFxuLnN1bW1hcnktY2FyZC5jb250YWN0YWJpbGl0eSAuc3VtbWFyeS1jYXJkX19iYWRnZSB7XG4gIGNvbG9yOiAjZjA5YTBkO1xuICBiYWNrZ3JvdW5kOiAjZmZmMGNmO1xufVxuXG4uY29udGVudC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uY29udGVudC1ncmlkLS10b3Age1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjQ1ZnI7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5jb250ZW50LWdyaWQtLWJvdHRvbSB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNGZyO1xufVxuXG4uZGFzaGJvYXJkLXBhbmVsIHtcbiAgcGFkZGluZzogMTBweCAxMnB4IDEycHg7XG59XG5cbi5kYXNoYm9hcmQtcGFuZWwtLXRhYmxlIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5wYW5lbC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuMDNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogIzI0MzI0ZDtcbiAgfVxufVxuXG4uZnVubmVsLWNoYXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogMTRweCAxMHB4IDhweDtcbn1cblxuLmZ1bm5lbC1zdGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDMycHg7XG4gIG1pbi13aWR0aDogMTgwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0YjdmZjAgMCUsICMyZjYyZGQgMTAwJSk7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1JSAwLCAxMDAlIDAsIDk1JSAxMDAlLCAwIDEwMCUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG5cbiAgc3BhbiB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgfVxufVxuXG4udHJlbmQtY2hhcnQsXG4uY2hhcnQtZnJhbWUge1xuICB3aWR0aDogMTAwJTtcblxuICBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuXG4udHJlbmQtY2hhcnQge1xuICBtYXgtd2lkdGg6IDQzMHB4O1xufVxuXG4uY2hhcnQtZnJhbWUtLWJyZWFrZG93biB7XG4gIG1heC13aWR0aDogMzIwcHg7XG59XG5cbi5ncmlkLWxpbmVzIGxpbmUge1xuICBzdHJva2U6ICNlM2U4ZjE7XG4gIHN0cm9rZS13aWR0aDogMTtcbn1cblxuLmF4aXMtbGluZXMgbGluZSB7XG4gIHN0cm9rZTogIzhiOTNhMTtcbiAgc3Ryb2tlLXdpZHRoOiAxLjE7XG59XG5cbi5heGlzLWxhYmVscyB7XG4gIGZpbGw6ICM2ZDdiOTI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRyZW5kLWxpbmUge1xuICBmaWxsOiBub25lO1xuICBzdHJva2Utd2lkdGg6IDIuNTtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xufVxuXG4udHJlbmQtbGluZS5wcm9ncmVzc2lvbiB7XG4gIHN0cm9rZTogI2YzOWMxMjtcbn1cblxuLnRyZW5kLWxpbmUucmVzcG9uc2Uge1xuICBzdHJva2U6ICMzZjZkZjM7XG59XG5cbi50cmVuZC1wb2ludC1ncm91cC5wcm9ncmVzc2lvbiBjaXJjbGUge1xuICBmaWxsOiAjZjM5YzEyO1xufVxuXG4udHJlbmQtcG9pbnQtZ3JvdXAucmVzcG9uc2UgY2lyY2xlIHtcbiAgZmlsbDogIzNmNmRmMztcbn1cblxuLmNoYXJ0LWxlZ2VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBjb2xvcjogIzY3NzU4YztcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubGVnZW5kLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5sZWdlbmQtbGluZSB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcbn1cblxuLmxlZ2VuZC1pdGVtLnByb2dyZXNzaW9uIHtcbiAgY29sb3I6ICNmMzljMTI7XG59XG5cbi5sZWdlbmQtaXRlbS5yZXNwb25zZSB7XG4gIGNvbG9yOiAjM2Y2ZGYzO1xufVxuXG4uYnJlYWtkb3duLWJhciB7XG4gIGZpbGw6ICMzZjZkZjM7XG59XG5cbi50YWJsZS13cmFwcGVyIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMC44NnJlbTtcbiAgY29sb3I6ICMzMDQzNWY7XG5cbiAgdGhlYWQgdGgge1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2ZiO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDdlMWVmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDdlMWVmO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogIzQ0NTQ2ZjtcbiAgfVxuXG4gIHRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkN2UxZWY7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgfVxuXG4gIHRoZWFkIHRoOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkN2UxZWY7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICB0Ym9keSB0ZCB7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmVkZjc7XG4gICAgY29sb3I6ICM0MDUxNmI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIHRib2R5IHRkOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlNmVkZjc7XG4gIH1cblxuICB0Ym9keSB0ZDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTZlZGY3O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLnN1bW1hcnktZ3JpZCxcbiAgLmNvbnRlbnQtZ3JpZC0tdG9wLFxuICAuY29udGVudC1ncmlkLS1ib3R0b20ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZHVsZS1iYXIsXG4gIC5wYWdlLWhlYWRpbmcge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAubW9kdWxlLWJhcl9fbWV0YSB7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG5cbiAgLnN1bW1hcnktZ3JpZCxcbiAgLmNvbnRlbnQtZ3JpZC0tdG9wLFxuICAuY29udGVudC1ncmlkLS1ib3R0b20ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLnRyZW5kLWNoYXJ0LFxuICAuY2hhcnQtZnJhbWUtLWJyZWFrZG93biB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 3077:
/*!*******************************************************************!*\
  !*** ./src/app/pages/analytics/progression/progression.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressionModule": () => (/* binding */ ProgressionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _progression_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progression-routing.module */ 9804);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _progression_view_progression_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progression-view/progression-view.component */ 4961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);









class ProgressionModule {
}
ProgressionModule.ɵfac = function ProgressionModule_Factory(t) { return new (t || ProgressionModule)(); };
ProgressionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProgressionModule });
ProgressionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        // MaterialModule,
        _progression_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProgressionRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProgressionModule, { declarations: [_progression_view_progression_view_component__WEBPACK_IMPORTED_MODULE_1__.ProgressionViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        // MaterialModule,
        _progression_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProgressionRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_analytics_progression_progression_module_ts.js.map