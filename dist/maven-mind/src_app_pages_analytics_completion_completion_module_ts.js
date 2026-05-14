"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_analytics_completion_completion_module_ts"],{

/***/ 8992:
/*!*************************************************************************!*\
  !*** ./src/app/pages/analytics/completion/completion-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletionRoutingModule": () => (/* binding */ CompletionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _completion_view_completion_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completion-view/completion-view.component */ 6366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'view', component: _completion_view_completion_view_component__WEBPACK_IMPORTED_MODULE_0__.CompletionViewComponent },
];
class CompletionRoutingModule {
}
CompletionRoutingModule.ɵfac = function CompletionRoutingModule_Factory(t) { return new (t || CompletionRoutingModule)(); };
CompletionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CompletionRoutingModule });
CompletionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CompletionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6366:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/analytics/completion/completion-view/completion-view.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletionViewComponent": () => (/* binding */ CompletionViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



function CompletionViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29)(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const filter_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", filter_r13.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r13.value);
} }
function CompletionViewComponent_article_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 32)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const card_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", card_r14.tone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r14.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r14.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r14.detail);
} }
function CompletionViewComponent__svg_line_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "line");
} if (rf & 2) {
    const tick_r15 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r2.pipelineChartPadding.left)("x2", ctx_r2.pipelineChartWidth - ctx_r2.pipelineChartPadding.right)("y1", ctx_r2.getPipelineTickY(tick_r15))("y2", ctx_r2.getPipelineTickY(tick_r15));
} }
function CompletionViewComponent__svg_text_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tick_r16 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r3.pipelineChartPadding.left - 8)("y", ctx_r3.getPipelineTickY(tick_r16) + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tick_r16, " ");
} }
function CompletionViewComponent__svg_g_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const index_r18 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r4.getPipelineBarX(index_r18))("y", ctx_r4.getPipelineBarY(item_r17.value))("width", ctx_r4.getPipelineBarWidth())("height", ctx_r4.getPipelineBarHeight(item_r17.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r4.getPipelineBarX(index_r18) + ctx_r4.getPipelineBarWidth() / 2)("y", ctx_r4.pipelineChartHeight - 10)("transform", "rotate(-24 " + (ctx_r4.getPipelineBarX(index_r18) + ctx_r4.getPipelineBarWidth() / 2) + " " + (ctx_r4.pipelineChartHeight - 10) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r17.label, " ");
} }
function CompletionViewComponent__svg_line_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "line");
} if (rf & 2) {
    const tick_r19 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r5.trendChartPadding.left)("x2", ctx_r5.trendChartWidth - ctx_r5.trendChartPadding.right)("y1", ctx_r5.getTrendY(tick_r19))("y2", ctx_r5.getTrendY(tick_r19));
} }
function CompletionViewComponent__svg_text_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tick_r20 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r6.trendChartPadding.left - 8)("y", ctx_r6.getTrendY(tick_r20) + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tick_r20, " ");
} }
function CompletionViewComponent__svg_circle_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 37);
} if (rf & 2) {
    const value_r21 = ctx.$implicit;
    const index_r22 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r7.getTrendX(index_r22))("cy", ctx_r7.getTrendY(value_r21));
} }
function CompletionViewComponent__svg_text_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r23 = ctx.$implicit;
    const index_r24 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r8.getTrendX(index_r24))("y", ctx_r8.trendChartHeight - 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", year_r23, " ");
} }
function CompletionViewComponent__svg_line_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "line");
} if (rf & 2) {
    const tick_r25 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r9.withdrawalChartPadding.left)("x2", ctx_r9.withdrawalChartWidth - ctx_r9.withdrawalChartPadding.right)("y1", ctx_r9.getWithdrawalTickY(tick_r25))("y2", ctx_r9.getWithdrawalTickY(tick_r25));
} }
function CompletionViewComponent__svg_text_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tick_r26 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r10.withdrawalChartPadding.left - 7)("y", ctx_r10.getWithdrawalTickY(tick_r26) + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tick_r26, " ");
} }
function CompletionViewComponent__svg_g_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const index_r28 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r11.getWithdrawalBarX(index_r28))("y", ctx_r11.getWithdrawalBarY(item_r27.value))("width", ctx_r11.getWithdrawalBarWidth())("height", ctx_r11.getWithdrawalBarHeight(item_r27.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r11.getWithdrawalBarX(index_r28) + ctx_r11.getWithdrawalBarWidth() / 2)("y", ctx_r11.withdrawalChartHeight - 10)("transform", "rotate(-24 " + (ctx_r11.getWithdrawalBarX(index_r28) + ctx_r11.getWithdrawalBarWidth() / 2) + " " + (ctx_r11.withdrawalChartHeight - 10) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r27.label, " ");
} }
function CompletionViewComponent_tr_80_Template(rf, ctx) { if (rf & 1) {
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
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r29.outcomeType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r29.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r29.share);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r29.primaryOwner);
} }
class CompletionViewComponent {
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
                label: 'Rate',
                value: '78.8%',
                detail: 'Denominator 941',
                tone: 'rate',
            },
            {
                label: 'Threshold',
                value: '80.0%',
                detail: 'By mode + level',
                tone: 'threshold',
            },
            {
                label: 'Gap',
                value: '-1.2 pts',
                detail: 'Exit awards + withdrawals driving',
                tone: 'gap',
            },
            {
                label: 'Open cases',
                value: '19',
                detail: 'Board unresolved',
                tone: 'open-cases',
            },
        ];
        this.pipelineItems = [
            { label: 'Completed intended', value: 618 },
            { label: 'Exit awards', value: 47 },
            { label: 'Still valid controls', value: 120 },
            { label: 'Withdrawals', value: 102 },
            { label: 'Interrupted', value: 31 },
            { label: 'Board unresolved', value: 19 },
        ];
        this.trendYears = ['2021/22', '2022/23', '2023/24', '2024/25', '2025/26'];
        this.trendValues = [84.2, 83.6, 82.4, 81.0, 79.8];
        this.trendTicks = [40, 60, 80, 100];
        this.withdrawalReasons = [
            { label: 'Personal', value: 23 },
            { label: 'Academic', value: 35 },
            { label: 'Finance', value: 20 },
            { label: 'Health', value: 17 },
            { label: 'Unknown', value: 12 },
        ];
        this.detailRows = [
            {
                outcomeType: 'Completed intended',
                count: 618,
                share: '65.7%',
                primaryOwner: 'Academic',
            },
            {
                outcomeType: 'Exit',
                count: 47,
                share: '5.0%',
                primaryOwner: 'Academic',
            },
        ];
        this.pipelineChartWidth = 360;
        this.pipelineChartHeight = 170;
        this.pipelineChartPadding = { top: 14, right: 12, bottom: 48, left: 38 };
        this.pipelineMaxValue = 650;
        this.pipelineTicks = [0, 200, 400, 600];
        this.trendChartWidth = 410;
        this.trendChartHeight = 170;
        this.trendChartPadding = { top: 18, right: 22, bottom: 34, left: 34 };
        this.trendMin = 40;
        this.trendMax = 100;
        this.withdrawalChartWidth = 300;
        this.withdrawalChartHeight = 160;
        this.withdrawalChartPadding = { top: 14, right: 12, bottom: 42, left: 30 };
        this.withdrawalMaxValue = 36;
        this.withdrawalTicks = [0, 10, 20, 30];
    }
    ngOnInit() { }
    getPipelineBarWidth() {
        const usableWidth = this.pipelineChartWidth -
            this.pipelineChartPadding.left -
            this.pipelineChartPadding.right;
        return usableWidth / this.pipelineItems.length - 10;
    }
    getPipelineBarX(index) {
        const usableWidth = this.pipelineChartWidth -
            this.pipelineChartPadding.left -
            this.pipelineChartPadding.right;
        const step = usableWidth / this.pipelineItems.length;
        return this.pipelineChartPadding.left + index * step + 5;
    }
    getPipelineBarY(value) {
        const usableHeight = this.pipelineChartHeight -
            this.pipelineChartPadding.top -
            this.pipelineChartPadding.bottom;
        return (this.pipelineChartHeight -
            this.pipelineChartPadding.bottom -
            (value / this.pipelineMaxValue) * usableHeight);
    }
    getPipelineBarHeight(value) {
        const usableHeight = this.pipelineChartHeight -
            this.pipelineChartPadding.top -
            this.pipelineChartPadding.bottom;
        return (value / this.pipelineMaxValue) * usableHeight;
    }
    getPipelineTickY(value) {
        const usableHeight = this.pipelineChartHeight -
            this.pipelineChartPadding.top -
            this.pipelineChartPadding.bottom;
        return (this.pipelineChartHeight -
            this.pipelineChartPadding.bottom -
            (value / this.pipelineMaxValue) * usableHeight);
    }
    getTrendPoints() {
        return this.trendValues
            .map((value, index) => `${this.getTrendX(index)},${this.getTrendY(value)}`)
            .join(' ');
    }
    getTrendX(index) {
        const usableWidth = this.trendChartWidth -
            this.trendChartPadding.left -
            this.trendChartPadding.right;
        const step = usableWidth / (this.trendYears.length - 1);
        return this.trendChartPadding.left + index * step;
    }
    getTrendY(value) {
        const usableHeight = this.trendChartHeight -
            this.trendChartPadding.top -
            this.trendChartPadding.bottom;
        const range = this.trendMax - this.trendMin;
        return (this.trendChartPadding.top +
            ((this.trendMax - value) / range) * usableHeight);
    }
    getWithdrawalBarWidth() {
        const usableWidth = this.withdrawalChartWidth -
            this.withdrawalChartPadding.left -
            this.withdrawalChartPadding.right;
        return usableWidth / this.withdrawalReasons.length - 12;
    }
    getWithdrawalBarX(index) {
        const usableWidth = this.withdrawalChartWidth -
            this.withdrawalChartPadding.left -
            this.withdrawalChartPadding.right;
        const step = usableWidth / this.withdrawalReasons.length;
        return this.withdrawalChartPadding.left + index * step + 6;
    }
    getWithdrawalBarY(value) {
        const usableHeight = this.withdrawalChartHeight -
            this.withdrawalChartPadding.top -
            this.withdrawalChartPadding.bottom;
        return (this.withdrawalChartHeight -
            this.withdrawalChartPadding.bottom -
            (value / this.withdrawalMaxValue) * usableHeight);
    }
    getWithdrawalBarHeight(value) {
        const usableHeight = this.withdrawalChartHeight -
            this.withdrawalChartPadding.top -
            this.withdrawalChartPadding.bottom;
        return (value / this.withdrawalMaxValue) * usableHeight;
    }
    getWithdrawalTickY(value) {
        const usableHeight = this.withdrawalChartHeight -
            this.withdrawalChartPadding.top -
            this.withdrawalChartPadding.bottom;
        return (this.withdrawalChartHeight -
            this.withdrawalChartPadding.bottom -
            (value / this.withdrawalMaxValue) * usableHeight);
    }
}
CompletionViewComponent.ɵfac = function CompletionViewComponent_Factory(t) { return new (t || CompletionViewComponent)(); };
CompletionViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompletionViewComponent, selectors: [["app-completion-view"]], decls: 81, vars: 41, consts: [[1, "completion-page"], [1, "page-heading"], [1, "filter-bar"], ["class", "filter-pill", 4, "ngFor", "ngForOf"], [1, "summary-grid"], ["class", "summary-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "content-grid", "content-grid--top"], [1, "dashboard-panel"], [1, "panel-header"], [1, "chart-frame", "chart-frame--pipeline"], ["preserveAspectRatio", "xMidYMid meet"], [1, "grid-lines"], [4, "ngFor", "ngForOf"], [1, "axis-labels", "axis-labels--y"], ["text-anchor", "end", 4, "ngFor", "ngForOf"], [1, "axis-lines"], [1, "bar-group"], [1, "chart-frame", "chart-frame--trend"], [1, "trend-line"], [1, "trend-point-group"], ["r", "4", 4, "ngFor", "ngForOf"], [1, "axis-labels", "axis-labels--x"], ["text-anchor", "middle", 4, "ngFor", "ngForOf"], [1, "chart-legend"], [1, "legend-dot"], [1, "content-grid", "content-grid--bottom"], [1, "chart-frame", "chart-frame--withdrawal"], [1, "dashboard-panel", "dashboard-panel--table"], [1, "table-wrapper"], [1, "filter-pill"], [1, "filter-label"], [1, "filter-value"], [1, "summary-card", 3, "ngClass"], [1, "summary-card__badge"], ["text-anchor", "end"], [1, "pipeline-bar"], ["text-anchor", "end", 1, "axis-labels", "axis-labels--x"], ["r", "4"], ["text-anchor", "middle"], [1, "withdrawal-bar"]], template: function CompletionViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Completion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "B3 & Student Outcomes / Compliance Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CompletionViewComponent_div_7_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CompletionViewComponent_article_9_Template, 7, 4, "article", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 6)(11, "article", 7)(12, "div", 8)(13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Completion pipeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 10)(17, "g", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CompletionViewComponent__svg_line_18_Template, 1, 4, "line", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CompletionViewComponent__svg_text_20_Template, 2, 3, "text", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "line")(23, "line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CompletionViewComponent__svg_g_25_Template, 4, 8, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "article", 7)(27, "div", 8)(28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Completion trend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "svg", 10)(32, "g", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CompletionViewComponent__svg_line_33_Template, 1, 4, "line", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "line")(36, "line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CompletionViewComponent__svg_text_38_Template, 2, 3, "text", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "polyline", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CompletionViewComponent__svg_circle_41_Template, 1, 2, "circle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CompletionViewComponent__svg_text_43_Template, 2, 3, "text", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Completion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 25)(49, "article", 7)(50, "div", 8)(51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Withdrawal reasons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "svg", 10)(55, "g", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, CompletionViewComponent__svg_line_56_Template, 1, 4, "line", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "line")(59, "line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, CompletionViewComponent__svg_text_61_Template, 2, 3, "text", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, CompletionViewComponent__svg_g_62_Template, 4, 8, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "article", 27)(64, "div", 8)(65, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Completion detail by outcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 28)(68, "table")(69, "thead")(70, "tr")(71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Outcome type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Primary owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, CompletionViewComponent_tr_80_Template, 9, 4, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.summaryCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", "0 0 " + ctx.pipelineChartWidth + " " + ctx.pipelineChartHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pipelineTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pipelineTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.pipelineChartPadding.left)("x2", ctx.pipelineChartPadding.left)("y1", ctx.pipelineChartPadding.top)("y2", ctx.pipelineChartHeight - ctx.pipelineChartPadding.bottom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.pipelineChartPadding.left)("x2", ctx.pipelineChartWidth - ctx.pipelineChartPadding.right)("y1", ctx.pipelineChartHeight - ctx.pipelineChartPadding.bottom)("y2", ctx.pipelineChartHeight - ctx.pipelineChartPadding.bottom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pipelineItems);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("points", ctx.getTrendPoints());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendYears);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", "0 0 " + ctx.withdrawalChartWidth + " " + ctx.withdrawalChartHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.withdrawalTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.withdrawalChartPadding.left)("x2", ctx.withdrawalChartPadding.left)("y1", ctx.withdrawalChartPadding.top)("y2", ctx.withdrawalChartHeight - ctx.withdrawalChartPadding.bottom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.withdrawalChartPadding.left)("x2", ctx.withdrawalChartWidth - ctx.withdrawalChartPadding.right)("y1", ctx.withdrawalChartHeight - ctx.withdrawalChartPadding.bottom)("y2", ctx.withdrawalChartHeight - ctx.withdrawalChartPadding.bottom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.withdrawalTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.withdrawalReasons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.detailRows);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".completion-page[_ngcontent-%COMP%] {\n  padding: 10px 8px 24px;\n  background: #f5f7fb;\n  color: #17233b;\n}\n\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 10px;\n}\n\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 800;\n  line-height: 1.05;\n  color: #1c2741;\n}\n\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #7b889f;\n}\n\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 14px;\n  padding: 10px 12px;\n  background: #ffffff;\n  border: 1px solid #dce5f1;\n  border-radius: 16px;\n}\n\n.filter-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 30px;\n  padding: 6px 14px;\n  border: 1px solid #d8e1ed;\n  border-radius: 999px;\n  background: #f9fbff;\n  color: #55647d;\n  font-size: 0.84rem;\n  line-height: 1;\n}\n\n.filter-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.filter-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #394760;\n}\n\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 14px;\n}\n\n.summary-card[_ngcontent-%COMP%], .dashboard-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dce5f1;\n  border-radius: 16px;\n  box-shadow: 0 8px 20px rgba(18, 40, 78, 0.06);\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  min-height: 124px;\n  padding: 12px 14px 10px;\n}\n\n.summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 6px;\n  font-size: 2.05rem;\n  font-weight: 800;\n  line-height: 1;\n  color: #16233b;\n}\n\n.summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.92rem;\n  font-weight: 600;\n  color: #8694aa;\n}\n\n.summary-card__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 28px;\n  padding: 5px 15px;\n  border-radius: 999px;\n  font-size: 0.98rem;\n  font-weight: 800;\n  line-height: 1;\n}\n\n.summary-card.rate[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #e29a09;\n  background: #fff0c9;\n}\n\n.summary-card.threshold[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #e79a09;\n  background: #fff0c9;\n}\n\n.summary-card.gap[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #e65e63;\n  background: #ffe8eb;\n}\n\n.summary-card.open-cases[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #3a73eb;\n  background: #ecf2ff;\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n\n.content-grid--top[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1.35fr;\n  margin-bottom: 12px;\n}\n\n.content-grid--bottom[_ngcontent-%COMP%] {\n  grid-template-columns: 0.75fr 1.55fr;\n}\n\n.dashboard-panel[_ngcontent-%COMP%] {\n  padding: 10px 12px 12px;\n}\n\n.dashboard-panel--table[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #24324d;\n}\n\n.chart-frame[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.chart-frame[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.chart-frame--pipeline[_ngcontent-%COMP%] {\n  max-width: 360px;\n}\n\n.chart-frame--trend[_ngcontent-%COMP%] {\n  max-width: 410px;\n}\n\n.chart-frame--withdrawal[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n\n.grid-lines[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  stroke: #e3e8f1;\n  stroke-width: 1;\n}\n\n.axis-lines[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  stroke: #8b93a1;\n  stroke-width: 1.1;\n}\n\n.axis-labels[_ngcontent-%COMP%] {\n  fill: #6d7b92;\n  font-size: 10px;\n  font-weight: 700;\n}\n\n.pipeline-bar[_ngcontent-%COMP%] {\n  fill: #1fab4d;\n}\n\n.withdrawal-bar[_ngcontent-%COMP%] {\n  fill: #df7d00;\n}\n\n.trend-line[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #28a35b;\n  stroke-width: 2.6;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n}\n\n.trend-point-group[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: #28a35b;\n}\n\n.chart-legend[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 2px;\n  margin-left: auto;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #65738a;\n}\n\n.legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 999px;\n  background: #28a35b;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: 0.86rem;\n  color: #30435f;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 9px;\n  background: #eaf1fb;\n  border-top: 1px solid #d6e0ec;\n  border-bottom: 1px solid #d6e0ec;\n  font-weight: 800;\n  text-align: left;\n  white-space: nowrap;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #d6e0ec;\n  border-top-left-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #d6e0ec;\n  border-top-right-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 9px;\n  background: #ffffff;\n  border-bottom: 1px solid #e2e9f3;\n  white-space: nowrap;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #e2e9f3;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #e2e9f3;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child {\n  border-bottom-left-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 10px;\n}\n\n@media (max-width: 1200px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .content-grid--top[_ngcontent-%COMP%], .content-grid--bottom[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 768px) {\n  .completion-page[_ngcontent-%COMP%] {\n    padding: 8px 0 20px;\n  }\n  .page-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  table[_ngcontent-%COMP%] {\n    min-width: 560px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXRpb24tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7O0VBRUUsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFNQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUhGOztBQU1BO0VBQ0UsaUNBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0Usb0NBQUE7QUFIRjs7QUFNQTtFQUNFLHVCQUFBO0FBSEY7O0FBTUE7RUFDRSxvQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFLRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU9BO0VBQ0UsV0FBQTtBQUpGOztBQU1FO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSko7O0FBUUE7RUFDRSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0FBTEY7O0FBUUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtBQUxGOztBQVFBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFMRjs7QUFPRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBUUU7RUFDRSw4QkFBQTtFQUNBLDRCQUFBO0FBTko7O0FBU0U7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FBUEo7O0FBVUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQVJKOztBQVdFO0VBQ0UsOEJBQUE7QUFUSjs7QUFZRTtFQUNFLCtCQUFBO0FBVko7O0FBYUU7RUFDRSwrQkFBQTtBQVhKOztBQWNFO0VBQ0UsZ0NBQUE7QUFaSjs7QUFnQkE7RUFDRTtJQUNFLGdEQUFBO0VBYkY7RUFnQkE7O0lBRUUsMEJBQUE7RUFkRjtBQUNGOztBQWlCQTtFQUNFO0lBQ0UsbUJBQUE7RUFmRjtFQWtCQTtJQUNFLHNCQUFBO0lBQ0EsUUFBQTtFQWhCRjtFQW1CQTtJQUNFLDBCQUFBO0VBakJGO0VBb0JBO0lBQ0UsZ0JBQUE7RUFsQkY7QUFDRiIsImZpbGUiOiJjb21wbGV0aW9uLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGxldGlvbi1wYWdlIHtcbiAgcGFkZGluZzogMTBweCA4cHggMjRweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYjtcbiAgY29sb3I6ICMxNzIzM2I7XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMDU7XG4gICAgY29sb3I6ICMxYzI3NDE7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDZweCAwIDA7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM3Yjg4OWY7XG4gIH1cbn1cblxuLmZpbHRlci1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNlNWYxO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uZmlsdGVyLXBpbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDZweCAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhlMWVkO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogI2Y5ZmJmZjtcbiAgY29sb3I6ICM1NTY0N2Q7XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5maWx0ZXItbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZmlsdGVyLXZhbHVlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMzOTQ3NjA7XG59XG5cbi5zdW1tYXJ5LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLnN1bW1hcnktY2FyZCxcbi5kYXNoYm9hcmQtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNlNWYxO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMTgsIDQwLCA3OCwgMC4wNik7XG59XG5cbi5zdW1tYXJ5LWNhcmQge1xuICBtaW4taGVpZ2h0OiAxMjRweDtcbiAgcGFkZGluZzogMTJweCAxNHB4IDEwcHg7XG5cbiAgaDIge1xuICAgIG1hcmdpbjogMTBweCAwIDZweDtcbiAgICBmb250LXNpemU6IDIuMDVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogIzE2MjMzYjtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDAuOTJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzg2OTRhYTtcbiAgfVxufVxuXG4uc3VtbWFyeS1jYXJkX19iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtc2l6ZTogMC45OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5zdW1tYXJ5LWNhcmQucmF0ZSAuc3VtbWFyeS1jYXJkX19iYWRnZSB7XG4gIGNvbG9yOiAjZTI5YTA5O1xuICBiYWNrZ3JvdW5kOiAjZmZmMGM5O1xufVxuXG4uc3VtbWFyeS1jYXJkLnRocmVzaG9sZCAuc3VtbWFyeS1jYXJkX19iYWRnZSB7XG4gIGNvbG9yOiAjZTc5YTA5O1xuICBiYWNrZ3JvdW5kOiAjZmZmMGM5O1xufVxuXG4uc3VtbWFyeS1jYXJkLmdhcCAuc3VtbWFyeS1jYXJkX19iYWRnZSB7XG4gIGNvbG9yOiAjZTY1ZTYzO1xuICBiYWNrZ3JvdW5kOiAjZmZlOGViO1xufVxuXG4uc3VtbWFyeS1jYXJkLm9wZW4tY2FzZXMgLnN1bW1hcnktY2FyZF9fYmFkZ2Uge1xuICBjb2xvcjogIzNhNzNlYjtcbiAgYmFja2dyb3VuZDogI2VjZjJmZjtcbn1cblxuLmNvbnRlbnQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTJweDtcbn1cblxuLmNvbnRlbnQtZ3JpZC0tdG9wIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS4zNWZyO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uY29udGVudC1ncmlkLS1ib3R0b20ge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNzVmciAxLjU1ZnI7XG59XG5cbi5kYXNoYm9hcmQtcGFuZWwge1xuICBwYWRkaW5nOiAxMHB4IDEycHggMTJweDtcbn1cblxuLmRhc2hib2FyZC1wYW5lbC0tdGFibGUge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnBhbmVsLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcblxuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiAjMjQzMjRkO1xuICB9XG59XG5cbi5jaGFydC1mcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIHN2ZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5cbi5jaGFydC1mcmFtZS0tcGlwZWxpbmUge1xuICBtYXgtd2lkdGg6IDM2MHB4O1xufVxuXG4uY2hhcnQtZnJhbWUtLXRyZW5kIHtcbiAgbWF4LXdpZHRoOiA0MTBweDtcbn1cblxuLmNoYXJ0LWZyYW1lLS13aXRoZHJhd2FsIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuLmdyaWQtbGluZXMgbGluZSB7XG4gIHN0cm9rZTogI2UzZThmMTtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xufVxuXG4uYXhpcy1saW5lcyBsaW5lIHtcbiAgc3Ryb2tlOiAjOGI5M2ExO1xuICBzdHJva2Utd2lkdGg6IDEuMTtcbn1cblxuLmF4aXMtbGFiZWxzIHtcbiAgZmlsbDogIzZkN2I5MjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ucGlwZWxpbmUtYmFyIHtcbiAgZmlsbDogIzFmYWI0ZDtcbn1cblxuLndpdGhkcmF3YWwtYmFyIHtcbiAgZmlsbDogI2RmN2QwMDtcbn1cblxuLnRyZW5kLWxpbmUge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICMyOGEzNWI7XG4gIHN0cm9rZS13aWR0aDogMi42O1xuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG59XG5cbi50cmVuZC1wb2ludC1ncm91cCBjaXJjbGUge1xuICBmaWxsOiAjMjhhMzViO1xufVxuXG4uY2hhcnQtbGVnZW5kIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNjU3MzhhO1xufVxuXG4ubGVnZW5kLWRvdCB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAjMjhhMzViO1xufVxuXG4udGFibGUtd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBmb250LXNpemU6IDAuODZyZW07XG4gIGNvbG9yOiAjMzA0MzVmO1xuXG4gIHRoZWFkIHRoIHtcbiAgICBwYWRkaW5nOiAxMHB4IDlweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWFmMWZiO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDZlMGVjO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDZlMGVjO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgdGhlYWQgdGg6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Q2ZTBlYztcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgdGhlYWQgdGg6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q2ZTBlYztcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgfVxuXG4gIHRib2R5IHRkIHtcbiAgICBwYWRkaW5nOiAxMHB4IDlweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOWYzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICB0Ym9keSB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTJlOWYzO1xuICB9XG5cbiAgdGJvZHkgdHIgdGQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UyZTlmMztcbiAgfVxuXG4gIHRib2R5IHRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICB0Ym9keSB0cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnN1bW1hcnktZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICB9XG5cbiAgLmNvbnRlbnQtZ3JpZC0tdG9wLFxuICAuY29udGVudC1ncmlkLS1ib3R0b20ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29tcGxldGlvbi1wYWdlIHtcbiAgICBwYWRkaW5nOiA4cHggMCAyMHB4O1xuICB9XG5cbiAgLnBhZ2UtaGVhZGluZyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbiAgfVxuXG4gIC5zdW1tYXJ5LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgdGFibGUge1xuICAgIG1pbi13aWR0aDogNTYwcHg7XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [
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

/***/ 1196:
/*!*****************************************************************!*\
  !*** ./src/app/pages/analytics/completion/completion.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletionModule": () => (/* binding */ CompletionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _completion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completion-routing.module */ 8992);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _completion_view_completion_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completion-view/completion-view.component */ 6366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);









class CompletionModule {
}
CompletionModule.ɵfac = function CompletionModule_Factory(t) { return new (t || CompletionModule)(); };
CompletionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CompletionModule });
CompletionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        // MaterialModule,
        _completion_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompletionRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CompletionModule, { declarations: [_completion_view_completion_view_component__WEBPACK_IMPORTED_MODULE_1__.CompletionViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        // MaterialModule,
        _completion_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompletionRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_analytics_completion_completion_module_ts.js.map