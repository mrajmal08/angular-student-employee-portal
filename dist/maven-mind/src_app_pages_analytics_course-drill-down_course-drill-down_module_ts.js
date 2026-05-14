"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_analytics_course-drill-down_course-drill-down_module_ts"],{

/***/ 6204:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/analytics/course-drill-down/course-drill-down-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseDrillDownRoutingModule": () => (/* binding */ CourseDrillDownRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _course_drill_down_view_course_drill_down_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-drill-down-view/course-drill-down-view.component */ 9022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'view', component: _course_drill_down_view_course_drill_down_view_component__WEBPACK_IMPORTED_MODULE_0__.CourseDrillDownViewComponent },
];
class CourseDrillDownRoutingModule {
}
CourseDrillDownRoutingModule.ɵfac = function CourseDrillDownRoutingModule_Factory(t) { return new (t || CourseDrillDownRoutingModule)(); };
CourseDrillDownRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CourseDrillDownRoutingModule });
CourseDrillDownRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CourseDrillDownRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9022:
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/analytics/course-drill-down/course-drill-down-view/course-drill-down-view.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseDrillDownViewComponent": () => (/* binding */ CourseDrillDownViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function CourseDrillDownViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26)(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const filter_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", filter_r12.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r12.value);
} }
function CourseDrillDownViewComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29)(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const badge_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", badge_r13.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r13.value);
} }
function CourseDrillDownViewComponent__svg_line_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "line");
} if (rf & 2) {
    const tick_r14 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r2.trendChartPadding.left)("x2", ctx_r2.trendChartWidth - ctx_r2.trendChartPadding.right)("y1", ctx_r2.getTrendY(tick_r14))("y2", ctx_r2.getTrendY(tick_r14));
} }
function CourseDrillDownViewComponent__svg_text_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tick_r15 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r3.trendChartPadding.left - 8)("y", ctx_r3.getTrendY(tick_r15) + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tick_r15, " ");
} }
function CourseDrillDownViewComponent__svg_g_27__svg_circle_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 36);
} if (rf & 2) {
    const value_r18 = ctx.$implicit;
    const index_r19 = ctx.index;
    const series_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx_r17.getTrendX(index_r19))("cy", ctx_r17.getTrendY(value_r18))("fill", series_r16.color);
} }
function CourseDrillDownViewComponent__svg_g_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "polyline", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CourseDrillDownViewComponent__svg_g_27__svg_circle_2_Template, 1, 3, "circle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const series_r16 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("points", ctx_r4.getTrendPoints(series_r16.values))("stroke", series_r16.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", series_r16.values);
} }
function CourseDrillDownViewComponent__svg_text_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r21 = ctx.$implicit;
    const index_r22 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r5.getTrendX(index_r22))("y", ctx_r5.trendChartHeight - 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", year_r21, " ");
} }
function CourseDrillDownViewComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const series_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", series_r23.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](series_r23.label);
} }
function CourseDrillDownViewComponent__svg_line_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "line");
} if (rf & 2) {
    const tick_r24 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx_r7.riskChartPadding.left)("x2", ctx_r7.riskChartWidth - ctx_r7.riskChartPadding.right)("y1", ctx_r7.getRiskTickY(tick_r24))("y2", ctx_r7.getRiskTickY(tick_r24));
} }
function CourseDrillDownViewComponent__svg_text_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tick_r25 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r8.riskChartPadding.left - 8)("y", ctx_r8.getRiskTickY(tick_r25) + 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tick_r25, " ");
} }
function CourseDrillDownViewComponent__svg_g_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "text", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const index_r27 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r9.getRiskBarX(index_r27))("y", ctx_r9.getRiskBarY(item_r26.value))("width", ctx_r9.getRiskBarWidth())("height", ctx_r9.getRiskBarHeight(item_r26.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx_r9.getRiskBarX(index_r27) + ctx_r9.getRiskBarWidth() / 2)("y", ctx_r9.riskChartHeight - 12)("transform", "rotate(-18 " + (ctx_r9.getRiskBarX(index_r27) + ctx_r9.getRiskBarWidth() / 2) + " " + (ctx_r9.riskChartHeight - 12) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26.label, " ");
} }
function CourseDrillDownViewComponent_tr_66_Template(rf, ctx) { if (rf & 1) {
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
    const row_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r28.studentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r28.stage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r28.attendance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r28.primaryIssue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r28.status);
} }
function CourseDrillDownViewComponent_tr_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td")(8, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r29.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r29.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r29.due);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r29.status);
} }
class CourseDrillDownViewComponent {
    constructor() {
        this.filters = [
            { label: 'Academic Year', value: '2025/26' },
            { label: 'Mode', value: 'All' },
            { label: 'Level', value: 'All' },
            { label: 'Faculty', value: 'All' },
            { label: 'Partner', value: 'All' },
            { label: 'Characteristic', value: 'All' },
        ];
        this.programmeBadges = [
            { label: 'Mode', value: 'Full-time' },
            { label: 'Level', value: 'First degree' },
            { label: 'Partner', value: 'Direct delivery' },
            { label: 'Students in scope', value: '184' },
            { label: 'Continuation', value: '81.2%' },
            { label: 'Completion', value: '76.9%' },
            { label: 'Progression', value: '68.1%' },
        ];
        this.trendYears = ['2021/22', '2022/23', '2023/24', '2024/25', '2025/26'];
        this.trendTicks = [40, 60, 80];
        this.trendSeries = [
            {
                label: 'Continuation',
                color: '#3c76f3',
                values: [86, 84, 83, 82, 80],
            },
            {
                label: 'Completion',
                color: '#2fb36e',
                values: [79, 78, 77, 76, 75],
            },
            {
                label: 'Progression',
                color: '#e48926',
                values: [71, 70, 69, 68, 68],
            },
        ];
        this.trendChartWidth = 420;
        this.trendChartHeight = 220;
        this.trendChartPadding = {
            top: 20,
            right: 18,
            bottom: 42,
            left: 44,
        };
        this.riskComposition = [
            { label: 'attendance', value: 43 },
            { label: 'assessment', value: 29 },
            { label: 'engagement', value: 18 },
            { label: 'personal withdrawal', value: 9 },
            { label: 'unknown', value: 6 },
        ];
        this.riskChartWidth = 420;
        this.riskChartHeight = 220;
        this.riskChartPadding = {
            top: 16,
            right: 18,
            bottom: 62,
            left: 44,
        };
        this.riskTicks = [0, 10, 20, 30, 40];
        this.relatedStudents = [
            {
                studentId: 'ST24018',
                stage: 'Year 1',
                attendance: '61%',
                primaryIssue: 'Missed 5 classes + no tutorial',
                status: 'Open',
            },
            {
                studentId: 'ST24122',
                stage: 'Year 2',
                attendance: '67%',
                primaryIssue: '2 failed modules',
                status: 'Open',
            },
        ];
        this.linkedActions = [
            {
                action: 'Business Yr1 attendance recovery plan',
                owner: 'Dean Business',
                due: '14 Feb 2026',
                status: 'Active',
            },
            {
                action: 'Resolve 19 unresolved board outcomes',
                owner: 'Registry',
                due: '10 Feb 2026',
                status: 'Active',
            },
        ];
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
        const chartFloor = this.trendChartHeight - this.trendChartPadding.bottom;
        const usableHeight = chartFloor - this.trendChartPadding.top;
        const minValue = 40;
        const maxValue = 90;
        return (chartFloor - ((value - minValue) / (maxValue - minValue)) * usableHeight);
    }
    getTrendPoints(values) {
        return values
            .map((value, index) => `${this.getTrendX(index)},${this.getTrendY(value)}`)
            .join(' ');
    }
    getRiskTickY(tick) {
        const chartFloor = this.riskChartHeight - this.riskChartPadding.bottom;
        const usableHeight = chartFloor - this.riskChartPadding.top;
        const maxValue = 45;
        return chartFloor - (tick / maxValue) * usableHeight;
    }
    getRiskBarWidth() {
        const usableWidth = this.riskChartWidth -
            this.riskChartPadding.left -
            this.riskChartPadding.right;
        return (usableWidth / this.riskComposition.length) * 0.72;
    }
    getRiskBarX(index) {
        const usableWidth = this.riskChartWidth -
            this.riskChartPadding.left -
            this.riskChartPadding.right;
        const slotWidth = usableWidth / this.riskComposition.length;
        const barWidth = this.getRiskBarWidth();
        return this.riskChartPadding.left + slotWidth * index + (slotWidth - barWidth) / 2;
    }
    getRiskBarY(value) {
        return this.getRiskTickY(value);
    }
    getRiskBarHeight(value) {
        const chartFloor = this.riskChartHeight - this.riskChartPadding.bottom;
        return chartFloor - this.getRiskBarY(value);
    }
}
CourseDrillDownViewComponent.ɵfac = function CourseDrillDownViewComponent_Factory(t) { return new (t || CourseDrillDownViewComponent)(); };
CourseDrillDownViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseDrillDownViewComponent, selectors: [["app-course-drill-down-view"]], decls: 85, vars: 30, consts: [[1, "course-drill-down-page"], [1, "page-heading"], [1, "filter-bar"], ["class", "filter-pill", 4, "ngFor", "ngForOf"], [1, "programme-card"], [1, "programme-badges"], ["class", "programme-badge", 4, "ngFor", "ngForOf"], [1, "content-grid", "content-grid--charts"], [1, "dashboard-panel"], [1, "panel-header"], [1, "chart-frame", "chart-frame--trend"], ["preserveAspectRatio", "xMidYMid meet"], [1, "grid-lines"], [4, "ngFor", "ngForOf"], [1, "axis-lines"], [1, "axis-labels", "axis-labels--y"], ["text-anchor", "end", 4, "ngFor", "ngForOf"], ["class", "series-group", 4, "ngFor", "ngForOf"], [1, "axis-labels", "axis-labels--x"], ["text-anchor", "middle", 4, "ngFor", "ngForOf"], [1, "chart-legend"], ["class", "legend-item", 4, "ngFor", "ngForOf"], [1, "chart-frame", "chart-frame--risk"], [1, "content-grid", "content-grid--tables"], [1, "dashboard-panel", "dashboard-panel--table"], [1, "table-wrapper"], [1, "filter-pill"], [1, "filter-label"], [1, "filter-value"], [1, "programme-badge"], [1, "programme-badge__label"], [1, "programme-badge__value"], ["text-anchor", "end"], [1, "series-group"], [1, "trend-line"], ["r", "4", 4, "ngFor", "ngForOf"], ["r", "4"], ["text-anchor", "middle"], [1, "legend-item"], [1, "legend-swatch"], [1, "risk-bar"], ["text-anchor", "end", 1, "axis-labels", "axis-labels--x", "axis-labels--x-rotated"], [1, "status-chip"]], template: function CourseDrillDownViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Course Drill-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "B3 & Student Outcomes / Compliance Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CourseDrillDownViewComponent_div_7_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Programme profile: BSc Business Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CourseDrillDownViewComponent_div_12_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 7)(14, "article", 8)(15, "div", 9)(16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Metric trend for this programme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 11)(20, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CourseDrillDownViewComponent__svg_line_21_Template, 1, 4, "line", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "line")(24, "line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CourseDrillDownViewComponent__svg_text_26_Template, 2, 3, "text", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CourseDrillDownViewComponent__svg_g_27_Template, 3, 3, "g", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CourseDrillDownViewComponent__svg_text_29_Template, 2, 3, "text", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CourseDrillDownViewComponent_div_31_Template, 4, 3, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "article", 8)(33, "div", 9)(34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Programme risk composition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 11)(38, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CourseDrillDownViewComponent__svg_line_39_Template, 1, 4, "line", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "line")(42, "line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CourseDrillDownViewComponent__svg_text_44_Template, 2, 3, "text", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CourseDrillDownViewComponent__svg_g_45_Template, 4, 8, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "section", 23)(47, "article", 24)(48, "div", 9)(49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Related student list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25)(52, "table")(53, "thead")(54, "tr")(55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Student ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Stage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Attendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Primary issue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, CourseDrillDownViewComponent_tr_66_Template, 11, 5, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "article", 24)(68, "div", 9)(69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Linked actions for programme owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 25)(72, "table")(73, "thead")(74, "tr")(75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Due");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, CourseDrillDownViewComponent_tr_84_Template, 10, 4, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.programmeBadges);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", "0 0 " + ctx.riskChartWidth + " " + ctx.riskChartHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.riskTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.riskChartPadding.left)("x2", ctx.riskChartPadding.left)("y1", ctx.riskChartPadding.top)("y2", ctx.riskChartHeight - ctx.riskChartPadding.bottom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x1", ctx.riskChartPadding.left)("x2", ctx.riskChartWidth - ctx.riskChartPadding.right)("y1", ctx.riskChartHeight - ctx.riskChartPadding.bottom)("y2", ctx.riskChartHeight - ctx.riskChartPadding.bottom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.riskTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.riskComposition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.relatedStudents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.linkedActions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".course-drill-down-page[_ngcontent-%COMP%] {\n  padding: 10px 8px 26px;\n  background: #f5f7fb;\n  color: #17233b;\n}\n\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 800;\n  line-height: 1.05;\n  color: #1d2943;\n}\n\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #8a97ab;\n}\n\n.filter-bar[_ngcontent-%COMP%], .programme-card[_ngcontent-%COMP%], .dashboard-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dbe4f0;\n  border-radius: 18px;\n  box-shadow: 0 8px 24px rgba(18, 40, 78, 0.06);\n}\n\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 10px 14px;\n  margin-bottom: 14px;\n}\n\n.filter-pill[_ngcontent-%COMP%], .programme-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 31px;\n  padding: 6px 13px;\n  border: 1px solid #d8e1ec;\n  border-radius: 999px;\n  background: #f8faff;\n  font-size: 0.84rem;\n  line-height: 1;\n  color: #5f6f87;\n}\n\n.filter-label[_ngcontent-%COMP%], .programme-badge__label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.filter-value[_ngcontent-%COMP%], .programme-badge__value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #3b4860;\n}\n\n.programme-card[_ngcontent-%COMP%] {\n  padding: 14px 16px 16px;\n  margin-bottom: 14px;\n}\n\n.programme-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 1.85rem;\n  font-weight: 800;\n  line-height: 1.15;\n  color: #1e2942;\n}\n\n.programme-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n\n.content-grid--charts[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin-bottom: 14px;\n}\n\n.content-grid--tables[_ngcontent-%COMP%] {\n  grid-template-columns: 0.95fr 1.45fr;\n}\n\n.dashboard-panel[_ngcontent-%COMP%] {\n  padding: 12px 14px 14px;\n}\n\n.dashboard-panel--table[_ngcontent-%COMP%] {\n  padding-bottom: 12px;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #26334c;\n}\n\n.chart-frame[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.chart-frame[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.chart-frame--trend[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 116px;\n  gap: 8px;\n  align-items: center;\n}\n\n.chart-frame--risk[_ngcontent-%COMP%] {\n  max-width: 430px;\n}\n\n.grid-lines[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  stroke: #e0e7f1;\n  stroke-width: 1;\n}\n\n.axis-lines[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  stroke: #8994a6;\n  stroke-width: 1.1;\n}\n\n.axis-labels[_ngcontent-%COMP%] {\n  fill: #66768f;\n  font-size: 10px;\n  font-weight: 700;\n}\n\n.axis-labels--x-rotated[_ngcontent-%COMP%] {\n  font-size: 9px;\n}\n\n.trend-line[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 2.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.risk-bar[_ngcontent-%COMP%] {\n  fill: #eb3131;\n}\n\n.chart-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-self: end;\n  padding-right: 2px;\n  padding-bottom: 28px;\n}\n\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  color: #42516a;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n\n.legend-swatch[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 3px;\n  border-radius: 999px;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  color: #30435f;\n  font-size: 0.84rem;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 9px;\n  background: #eaf1fb;\n  border-top: 1px solid #d5dfeb;\n  border-bottom: 1px solid #d5dfeb;\n  font-weight: 800;\n  text-align: left;\n  white-space: nowrap;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #d5dfeb;\n  border-top-left-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #d5dfeb;\n  border-top-right-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 9px;\n  background: #ffffff;\n  border-bottom: 1px solid #e3e9f2;\n  white-space: nowrap;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #e3e9f2;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #e3e9f2;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child {\n  border-bottom-left-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 10px;\n}\n\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 24px;\n  padding: 3px 10px;\n  border-radius: 999px;\n  background: #eef4ff;\n  color: #3f69c0;\n  font-size: 0.78rem;\n  font-weight: 800;\n}\n\n@media (max-width: 1200px) {\n  .content-grid--charts[_ngcontent-%COMP%], .content-grid--tables[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 768px) {\n  .course-drill-down-page[_ngcontent-%COMP%] {\n    padding: 8px 0 22px;\n  }\n  .page-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .programme-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .chart-frame--trend[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .chart-legend[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding-bottom: 0;\n  }\n  table[_ngcontent-%COMP%] {\n    min-width: 620px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS1kcmlsbC1kb3duLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFJQTs7O0VBR0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTs7RUFFRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7O0VBRUUsZ0JBQUE7QUFERjs7QUFJQTs7RUFFRSxnQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUZGOztBQUtBO0VBQ0UsZ0RBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0Usb0NBQUE7QUFGRjs7QUFLQTtFQUNFLHVCQUFBO0FBRkY7O0FBS0E7RUFDRSxvQkFBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7QUFGRjs7QUFJRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQU1BO0VBQ0UsV0FBQTtBQUhGOztBQUtFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEo7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSkY7O0FBTUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9FO0VBQ0UsOEJBQUE7RUFDQSw0QkFBQTtBQUxKOztBQVFFO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtBQU5KOztBQVNFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVRTtFQUNFLDhCQUFBO0FBUko7O0FBV0U7RUFDRSwrQkFBQTtBQVRKOztBQVlFO0VBQ0UsK0JBQUE7QUFWSjs7QUFhRTtFQUNFLGdDQUFBO0FBWEo7O0FBZUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVpGOztBQWVBO0VBQ0U7O0lBRUUsMEJBQUE7RUFaRjtBQUNGOztBQWVBO0VBQ0U7SUFDRSxtQkFBQTtFQWJGO0VBZ0JBO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtJQUNBLFFBQUE7RUFkRjtFQWlCQTtJQUNFLGlCQUFBO0VBZkY7RUFrQkE7SUFDRSwwQkFBQTtFQWhCRjtFQW1CQTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VBakJGO0VBb0JBO0lBQ0UsZ0JBQUE7RUFsQkY7QUFDRiIsImZpbGUiOiJjb3Vyc2UtZHJpbGwtZG93bi12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXJzZS1kcmlsbC1kb3duLXBhZ2Uge1xuICBwYWRkaW5nOiAxMHB4IDhweCAyNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjVmN2ZiO1xuICBjb2xvcjogIzE3MjMzYjtcbn1cblxuLnBhZ2UtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBsaW5lLWhlaWdodDogMS4wNTtcbiAgICBjb2xvcjogIzFkMjk0MztcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzhhOTdhYjtcbiAgfVxufVxuXG4uZmlsdGVyLWJhcixcbi5wcm9ncmFtbWUtY2FyZCxcbi5kYXNoYm9hcmQtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGJlNGYwO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMTgsIDQwLCA3OCwgMC4wNik7XG59XG5cbi5maWx0ZXItYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLmZpbHRlci1waWxsLFxuLnByb2dyYW1tZS1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgbWluLWhlaWdodDogMzFweDtcbiAgcGFkZGluZzogNnB4IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGUxZWM7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZmO1xuICBmb250LXNpemU6IDAuODRyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzVmNmY4Nztcbn1cblxuLmZpbHRlci1sYWJlbCxcbi5wcm9ncmFtbWUtYmFkZ2VfX2xhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZpbHRlci12YWx1ZSxcbi5wcm9ncmFtbWUtYmFkZ2VfX3ZhbHVlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMzYjQ4NjA7XG59XG5cbi5wcm9ncmFtbWUtY2FyZCB7XG4gIHBhZGRpbmc6IDE0cHggMTZweCAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuXG4gIGgyIHtcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS44NXJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgIGNvbG9yOiAjMWUyOTQyO1xuICB9XG59XG5cbi5wcm9ncmFtbWUtYmFkZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEwcHg7XG59XG5cbi5jb250ZW50LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDE0cHg7XG59XG5cbi5jb250ZW50LWdyaWQtLWNoYXJ0cyB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLmNvbnRlbnQtZ3JpZC0tdGFibGVzIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjk1ZnIgMS40NWZyO1xufVxuXG4uZGFzaGJvYXJkLXBhbmVsIHtcbiAgcGFkZGluZzogMTJweCAxNHB4IDE0cHg7XG59XG5cbi5kYXNoYm9hcmQtcGFuZWwtLXRhYmxlIHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5wYW5lbC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gIGgzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6ICMyNjMzNGM7XG4gIH1cbn1cblxuLmNoYXJ0LWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cblxuLmNoYXJ0LWZyYW1lLS10cmVuZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgMTE2cHg7XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2hhcnQtZnJhbWUtLXJpc2sge1xuICBtYXgtd2lkdGg6IDQzMHB4O1xufVxuXG4uZ3JpZC1saW5lcyBsaW5lIHtcbiAgc3Ryb2tlOiAjZTBlN2YxO1xuICBzdHJva2Utd2lkdGg6IDE7XG59XG5cbi5heGlzLWxpbmVzIGxpbmUge1xuICBzdHJva2U6ICM4OTk0YTY7XG4gIHN0cm9rZS13aWR0aDogMS4xO1xufVxuXG4uYXhpcy1sYWJlbHMge1xuICBmaWxsOiAjNjY3NjhmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5heGlzLWxhYmVscy0teC1yb3RhdGVkIHtcbiAgZm9udC1zaXplOiA5cHg7XG59XG5cbi50cmVuZC1saW5lIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlLXdpZHRoOiAyLjg7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbn1cblxuLnJpc2stYmFyIHtcbiAgZmlsbDogI2ViMzEzMTtcbn1cblxuLmNoYXJ0LWxlZ2VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAyOHB4O1xufVxuXG4ubGVnZW5kLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDdweDtcbiAgY29sb3I6ICM0MjUxNmE7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubGVnZW5kLXN3YXRjaCB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG59XG5cbi50YWJsZS13cmFwcGVyIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjMzA0MzVmO1xuICBmb250LXNpemU6IDAuODRyZW07XG5cbiAgdGhlYWQgdGgge1xuICAgIHBhZGRpbmc6IDEwcHggOXB4O1xuICAgIGJhY2tncm91bmQ6ICNlYWYxZmI7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNWRmZWI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNWRmZWI7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICB0aGVhZCB0aDpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDVkZmViO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICB0aGVhZCB0aDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDVkZmViO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgdGJvZHkgdGQge1xuICAgIHBhZGRpbmc6IDEwcHggOXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2U5ZjI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIHRib2R5IHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlM2U5ZjI7XG4gIH1cblxuICB0Ym9keSB0ciB0ZDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTNlOWYyO1xuICB9XG5cbiAgdGJvZHkgdHI6bGFzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgfVxuXG4gIHRib2R5IHRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cblxuLnN0YXR1cy1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogI2VlZjRmZjtcbiAgY29sb3I6ICMzZjY5YzA7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY29udGVudC1ncmlkLS1jaGFydHMsXG4gIC5jb250ZW50LWdyaWQtLXRhYmxlcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb3Vyc2UtZHJpbGwtZG93bi1wYWdlIHtcbiAgICBwYWRkaW5nOiA4cHggMCAyMnB4O1xuICB9XG5cbiAgLnBhZ2UtaGVhZGluZyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDRweDtcbiAgfVxuXG4gIC5wcm9ncmFtbWUtY2FyZCBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICAuY2hhcnQtZnJhbWUtLXRyZW5kIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5jaGFydC1sZWdlbmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG5cbiAgdGFibGUge1xuICAgIG1pbi13aWR0aDogNjIwcHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5031:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/analytics/course-drill-down/course-drill-down.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseDrillDownModule": () => (/* binding */ CourseDrillDownModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _course_drill_down_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-drill-down-routing.module */ 6204);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _course_drill_down_view_course_drill_down_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-drill-down-view/course-drill-down-view.component */ 9022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);









class CourseDrillDownModule {
}
CourseDrillDownModule.ɵfac = function CourseDrillDownModule_Factory(t) { return new (t || CourseDrillDownModule)(); };
CourseDrillDownModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CourseDrillDownModule });
CourseDrillDownModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        // MaterialModule,
        _course_drill_down_routing_module__WEBPACK_IMPORTED_MODULE_0__.CourseDrillDownRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CourseDrillDownModule, { declarations: [_course_drill_down_view_course_drill_down_view_component__WEBPACK_IMPORTED_MODULE_1__.CourseDrillDownViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        // MaterialModule,
        _course_drill_down_routing_module__WEBPACK_IMPORTED_MODULE_0__.CourseDrillDownRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_analytics_course-drill-down_course-drill-down_module_ts.js.map