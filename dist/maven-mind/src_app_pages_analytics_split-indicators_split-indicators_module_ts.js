"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_analytics_split-indicators_split-indicators_module_ts"],{

/***/ 3755:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/analytics/split-indicators/split-indicators-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplitIndicatorsRoutingModule": () => (/* binding */ SplitIndicatorsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _split_indicators_view_split_indicators_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./split-indicators-view/split-indicators-view.component */ 9714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'view', component: _split_indicators_view_split_indicators_view_component__WEBPACK_IMPORTED_MODULE_0__.SplitIndicatorsViewComponent },
];
class SplitIndicatorsRoutingModule {
}
SplitIndicatorsRoutingModule.ɵfac = function SplitIndicatorsRoutingModule_Factory(t) { return new (t || SplitIndicatorsRoutingModule)(); };
SplitIndicatorsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SplitIndicatorsRoutingModule });
SplitIndicatorsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SplitIndicatorsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9714:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/analytics/split-indicators/split-indicators-view/split-indicators-view.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplitIndicatorsViewComponent": () => (/* binding */ SplitIndicatorsViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function SplitIndicatorsViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const filter_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", filter_r5.label, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r5.value);
} }
function SplitIndicatorsViewComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r6.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r1.getGapBarWidth(group_r6.value));
} }
function SplitIndicatorsViewComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tick_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tick_r7);
} }
function SplitIndicatorsViewComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.denominator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.numerator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.provider);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.gap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r8.note);
} }
function SplitIndicatorsViewComponent_li_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9);
} }
class SplitIndicatorsViewComponent {
    constructor() {
        this.filters = [
            { label: 'Academic Year', value: '2025/26' },
            { label: 'Mode', value: 'All' },
            { label: 'Level', value: 'All' },
            { label: 'Faculty', value: 'All' },
            { label: 'Partner', value: 'All' },
            { label: 'Characteristic', value: 'All' },
        ];
        this.studentGroups = [
            { label: 'No known disability', value: 2.1 },
            { label: 'White students', value: 1.1 },
            { label: 'Mature 21+', value: 2.2 },
            { label: 'Disabled students', value: 4.1 },
            { label: 'Black students', value: 6.3 },
        ];
        this.gapAxisTicks = [0, 2, 4, 6, 8];
        this.gapAxisMax = 8;
        this.comparisonRows = [
            {
                group: 'Asian students',
                denominator: 164,
                numerator: 141,
                rate: '86.0%',
                provider: '84.6%',
                gap: '+1.4 pts',
                note: 'Stable',
            },
            {
                group: 'Black students',
                denominator: 92,
                numerator: 72,
                rate: '78.4%',
                provider: '84.6%',
                gap: '-6.2 pts',
                note: 'Caution',
            },
            {
                group: 'Mixed ethnicity',
                denominator: 44,
                numerator: 37,
                rate: '84.1%',
                provider: '84.6%',
                gap: '-0.5 pts',
                note: 'Small N',
            },
            {
                group: 'White students',
                denominator: 318,
                numerator: 273,
                rate: '85.8%',
                provider: '84.6%',
                gap: '+1.2 pts',
                note: 'Stable',
            },
        ];
        this.displayLogic = [
            'Suppression applies below denominator 20; caution applies below denominator 50.',
            'Users can switch the measure between continuation, completion and progression.',
            'Gap is always shown against provider aggregate for the same filtered cohort.',
            'Small groups can still appear in table view but receive a caution flag.',
        ];
    }
    getGapBarWidth(value) {
        return `${(value / this.gapAxisMax) * 100}%`;
    }
}
SplitIndicatorsViewComponent.ɵfac = function SplitIndicatorsViewComponent_Factory(t) { return new (t || SplitIndicatorsViewComponent)(); };
SplitIndicatorsViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplitIndicatorsViewComponent, selectors: [["app-split-indicators-view"]], decls: 61, vars: 5, consts: [[1, "split-indicators-page"], [1, "page-heading"], [1, "filter-bar"], ["class", "filter-pill", 4, "ngFor", "ngForOf"], [1, "summary-strip"], [1, "summary-strip__item"], [1, "summary-strip__item", "summary-strip__item--accent"], [1, "summary-strip__item", "summary-strip__item--muted"], [1, "dashboard-grid"], [1, "dashboard-panel"], [1, "panel-header"], [1, "group-chart"], [1, "group-chart__rows"], ["class", "group-row", 4, "ngFor", "ngForOf"], [1, "group-chart__axis"], [4, "ngFor", "ngForOf"], [1, "table-wrapper"], [1, "logic-panel"], [1, "logic-list"], [1, "filter-pill"], [1, "group-row"], [1, "group-row__label"], [1, "group-row__plot"], [1, "group-row__bar"]], template: function SplitIndicatorsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Split Indicators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "B3 & Student Outcomes / Compliance Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SplitIndicatorsViewComponent_div_7_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4)(9, "span", 5)(10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Measure:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Continuation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6)(14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Split:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Ethnicity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 7)(18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Comparator:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Provider overall 84.6% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 8)(22, "article", 9)(23, "div", 10)(24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Risk gap by student group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11)(27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SplitIndicatorsViewComponent_div_28_Template, 5, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SplitIndicatorsViewComponent_span_30_Template, 2, 1, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "article", 9)(32, "div", 10)(33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Detailed comparison table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16)(36, "table")(37, "thead")(38, "tr")(39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Denom.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Numer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Provider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Gap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, SplitIndicatorsViewComponent_tr_54_Template, 15, 7, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 17)(56, "div", 10)(57, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Display logic used on this page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, SplitIndicatorsViewComponent_li_60_Template, 2, 1, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.studentGroups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gapAxisTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comparisonRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayLogic);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".split-indicators-page[_ngcontent-%COMP%] {\n  padding: 10px 8px 24px;\n  background: #f5f7fb;\n  color: #1b2740;\n}\n\n.page-heading[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: end;\n  margin-bottom: 12px;\n}\n\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 800;\n  line-height: 1.05;\n  color: #1c2741;\n}\n\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  justify-self: center;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #8a97ad;\n}\n\n.filter-bar[_ngcontent-%COMP%], .summary-strip[_ngcontent-%COMP%], .dashboard-panel[_ngcontent-%COMP%], .logic-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dce5f1;\n  border-radius: 16px;\n  box-shadow: 0 8px 20px rgba(18, 40, 78, 0.05);\n}\n\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 14px;\n  padding: 10px 12px;\n}\n\n.filter-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 30px;\n  padding: 6px 14px;\n  border: 1px solid #d8e0ec;\n  border-radius: 999px;\n  background: #f9fbff;\n  color: #5b6880;\n  font-size: 0.84rem;\n  line-height: 1;\n}\n\n.filter-pill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #394760;\n  font-weight: 700;\n}\n\n.summary-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 28px;\n  margin-bottom: 14px;\n  padding: 14px 16px;\n}\n\n.summary-strip__item[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1f2d45;\n}\n\n.summary-strip__item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.summary-strip__item--accent[_ngcontent-%COMP%] {\n  color: #3c78f5;\n}\n\n.summary-strip__item--muted[_ngcontent-%COMP%] {\n  color: #7d8aa2;\n}\n\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.95fr 1.05fr;\n  gap: 14px;\n  margin-bottom: 14px;\n}\n\n.dashboard-panel[_ngcontent-%COMP%], .logic-panel[_ngcontent-%COMP%] {\n  padding: 12px 14px 14px;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #25324b;\n}\n\n.group-chart[_ngcontent-%COMP%] {\n  padding: 6px 4px 4px 0;\n}\n\n.group-chart__rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 8px;\n}\n\n.group-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 144px minmax(0, 1fr);\n  gap: 12px;\n  align-items: center;\n}\n\n.group-row__label[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: #6a7588;\n  text-align: right;\n}\n\n.group-row__plot[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  border-left: 1px solid #6f7886;\n  border-bottom: 1px solid #6f7886;\n  background-image: repeating-linear-gradient(to right, transparent, transparent calc(25% - 1px), #e7edf6 calc(25% - 1px), #e7edf6 25%);\n}\n\n.group-row__bar[_ngcontent-%COMP%] {\n  height: 18px;\n  margin-top: 5px;\n  background: #df8100;\n  border-radius: 0 3px 3px 0;\n}\n\n.group-chart__axis[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  margin-left: 156px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #6d7a91;\n}\n\n.group-chart__axis[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: 0.86rem;\n  color: #425169;\n  border: 1px solid #dbe4ef;\n  border-radius: 12px;\n  overflow: hidden;\n}\n\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  background: #edf2f8;\n  border-right: 1px solid #d8e1ed;\n  font-size: 0.78rem;\n  font-weight: 800;\n  text-align: left;\n  color: #46556f;\n  white-space: nowrap;\n}\n\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  border-top: 1px solid #e7edf6;\n  border-right: 1px solid #e7edf6;\n  white-space: nowrap;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: #fbfdff;\n}\n\n.logic-list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n.logic-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 18px;\n  font-size: 0.92rem;\n  font-weight: 600;\n  color: #5f6d86;\n}\n\n.logic-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #3e7bff;\n}\n\n@media (max-width: 1080px) {\n  .page-heading[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 6px;\n  }\n  .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 720px) {\n  .summary-strip[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .group-row[_ngcontent-%COMP%] {\n    grid-template-columns: 120px minmax(0, 1fr);\n  }\n  .group-chart__axis[_ngcontent-%COMP%] {\n    margin-left: 132px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGl0LWluZGljYXRvcnMtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUlBOzs7O0VBSUUsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRkY7O0FBSUU7RUFDRSxpQkFBQTtBQUZKOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7O0VBRUUsdUJBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBS0U7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFISjs7QUFPQTtFQUNFLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFJQUFBO0FBSkY7O0FBYUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFWRjs7QUFhQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFWRjs7QUFZRTtFQUNFLGlCQUFBO0FBVko7O0FBY0E7RUFDRSxnQkFBQTtBQVhGOztBQWNBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVhGOztBQWNBOztFQUVFLGtCQUFBO0FBWEY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQVhGOztBQWNBO0VBQ0UsbUJBQUE7QUFYRjs7QUFjQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBWEY7O0FBYUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFYSjs7QUFjRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBWko7O0FBZ0JBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLFFBQUE7RUFiRjtFQWdCQTtJQUNFLDBCQUFBO0VBZEY7QUFDRjs7QUFpQkE7RUFDRTtJQUNFLFNBQUE7RUFmRjtFQWtCQTtJQUNFLDJDQUFBO0VBaEJGO0VBbUJBO0lBQ0Usa0JBQUE7RUFqQkY7QUFDRiIsImZpbGUiOiJzcGxpdC1pbmRpY2F0b3JzLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BsaXQtaW5kaWNhdG9ycy1wYWdlIHtcbiAgcGFkZGluZzogMTBweCA4cHggMjRweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYjtcbiAgY29sb3I6ICMxYjI3NDA7XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBhbGlnbi1pdGVtczogZW5kO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMDU7XG4gICAgY29sb3I6ICMxYzI3NDE7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzhhOTdhZDtcbiAgfVxufVxuXG4uZmlsdGVyLWJhcixcbi5zdW1tYXJ5LXN0cmlwLFxuLmRhc2hib2FyZC1wYW5lbCxcbi5sb2dpYy1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2U1ZjE7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgxOCwgNDAsIDc4LCAwLjA1KTtcbn1cblxuLmZpbHRlci1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xufVxuXG4uZmlsdGVyLXBpbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDZweCAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhlMGVjO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogI2Y5ZmJmZjtcbiAgY29sb3I6ICM1YjY4ODA7XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgc3Ryb25nIHtcbiAgICBjb2xvcjogIzM5NDc2MDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG59XG5cbi5zdW1tYXJ5LXN0cmlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbn1cblxuLnN1bW1hcnktc3RyaXBfX2l0ZW0ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMWYyZDQ1O1xuXG4gIHN0cm9uZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIH1cbn1cblxuLnN1bW1hcnktc3RyaXBfX2l0ZW0tLWFjY2VudCB7XG4gIGNvbG9yOiAjM2M3OGY1O1xufVxuXG4uc3VtbWFyeS1zdHJpcF9faXRlbS0tbXV0ZWQge1xuICBjb2xvcjogIzdkOGFhMjtcbn1cblxuLmRhc2hib2FyZC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjk1ZnIgMS4wNWZyO1xuICBnYXA6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbi5kYXNoYm9hcmQtcGFuZWwsXG4ubG9naWMtcGFuZWwge1xuICBwYWRkaW5nOiAxMnB4IDE0cHggMTRweDtcbn1cblxuLnBhbmVsLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogIzI1MzI0YjtcbiAgfVxufVxuXG4uZ3JvdXAtY2hhcnQge1xuICBwYWRkaW5nOiA2cHggNHB4IDRweCAwO1xufVxuXG4uZ3JvdXAtY2hhcnRfX3Jvd3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmdyb3VwLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTQ0cHggbWlubWF4KDAsIDFmcik7XG4gIGdhcDogMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdyb3VwLXJvd19fbGFiZWwge1xuICBmb250LXNpemU6IDAuNzRyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNmE3NTg4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmdyb3VwLXJvd19fcGxvdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM2Zjc4ODY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNmY3ODg2O1xuICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgIHRyYW5zcGFyZW50LFxuICAgIHRyYW5zcGFyZW50IGNhbGMoMjUlIC0gMXB4KSxcbiAgICAjZTdlZGY2IGNhbGMoMjUlIC0gMXB4KSxcbiAgICAjZTdlZGY2IDI1JVxuICApO1xufVxuXG4uZ3JvdXAtcm93X19iYXIge1xuICBoZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYmFja2dyb3VuZDogI2RmODEwMDtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG59XG5cbi5ncm91cC1jaGFydF9fYXhpcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIG1pbm1heCgwLCAxZnIpKTtcbiAgbWFyZ2luLWxlZnQ6IDE1NnB4O1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNmQ3YTkxO1xuXG4gIHNwYW46bGFzdC1jaGlsZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cblxuLnRhYmxlLXdyYXBwZXIge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgZm9udC1zaXplOiAwLjg2cmVtO1xuICBjb2xvcjogIzQyNTE2OTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZTRlZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxudGhlYWQgdGgge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNlZGYyZjg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkOGUxZWQ7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM0NjU1NmY7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbnRoZWFkIHRoOmxhc3QtY2hpbGQsXG50Ym9keSB0ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG50Ym9keSB0ZCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2VkZjY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlN2VkZjY7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbnRib2R5IHRyOm50aC1jaGlsZChldmVuKSB0ZCB7XG4gIGJhY2tncm91bmQ6ICNmYmZkZmY7XG59XG5cbi5sb2dpYy1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5cbiAgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gICAgZm9udC1zaXplOiAwLjkycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM1ZjZkODY7XG4gIH1cblxuICBsaTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogOHB4O1xuICAgIGhlaWdodDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjM2U3YmZmO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgLnBhZ2UtaGVhZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogNnB4O1xuICB9XG5cbiAgLmRhc2hib2FyZC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLnN1bW1hcnktc3RyaXAge1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4gIC5ncm91cC1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTIwcHggbWlubWF4KDAsIDFmcik7XG4gIH1cblxuICAuZ3JvdXAtY2hhcnRfX2F4aXMge1xuICAgIG1hcmdpbi1sZWZ0OiAxMzJweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 134:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/analytics/split-indicators/split-indicators.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplitIndicatorsModule": () => (/* binding */ SplitIndicatorsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _split_indicators_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./split-indicators-routing.module */ 3755);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _split_indicators_view_split_indicators_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./split-indicators-view/split-indicators-view.component */ 9714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);









class SplitIndicatorsModule {
}
SplitIndicatorsModule.ɵfac = function SplitIndicatorsModule_Factory(t) { return new (t || SplitIndicatorsModule)(); };
SplitIndicatorsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SplitIndicatorsModule });
SplitIndicatorsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _split_indicators_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplitIndicatorsRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SplitIndicatorsModule, { declarations: [_split_indicators_view_split_indicators_view_component__WEBPACK_IMPORTED_MODULE_1__.SplitIndicatorsViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _split_indicators_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplitIndicatorsRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_analytics_split-indicators_split-indicators_module_ts.js.map