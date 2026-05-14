"use strict";
(self["webpackChunkmaven_mind"] = self["webpackChunkmaven_mind"] || []).push([["src_app_pages_analytics_interventions_interventions_module_ts"],{

/***/ 4530:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/analytics/interventions/interventions-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterventionsRoutingModule": () => (/* binding */ InterventionsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _interventions_view_interventions_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interventions-view/interventions-view.component */ 415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'view', component: _interventions_view_interventions_view_component__WEBPACK_IMPORTED_MODULE_0__.InterventionsViewComponent },
];
class InterventionsRoutingModule {
}
InterventionsRoutingModule.ɵfac = function InterventionsRoutingModule_Factory(t) { return new (t || InterventionsRoutingModule)(); };
InterventionsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: InterventionsRoutingModule });
InterventionsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InterventionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 415:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/analytics/interventions/interventions-view/interventions-view.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterventionsViewComponent": () => (/* binding */ InterventionsViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function InterventionsViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "span");
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
function InterventionsViewComponent_article_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const card_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", card_r5.tone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r5.detail);
} }
function InterventionsViewComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 16);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td")(14, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r6.actionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r6.metricArea);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r6.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r6.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r6.dueDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r6.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r6.evidence, " ");
} }
function InterventionsViewComponent_li_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r7);
} }
class InterventionsViewComponent {
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
                label: 'Open',
                value: '18',
                detail: 'Requiring owner updates',
                tone: 'open',
            },
            {
                label: 'Active',
                value: '26',
                detail: 'Currently in progress',
                tone: 'active',
            },
            {
                label: 'Overdue',
                value: '7',
                detail: 'Past the agreed due date',
                tone: 'overdue',
            },
            {
                label: 'Closed',
                value: '42',
                detail: 'Completed interventions logged',
                tone: 'closed',
            },
        ];
        this.registerRows = [
            {
                actionId: 'ACT-1004',
                metricArea: 'Continuation',
                action: 'Business Yr1 attendance recovery plan',
                owner: 'Dean Business',
                dueDate: '14 Feb 2026',
                status: 'Active',
                evidence: 'Evidence link',
            },
            {
                actionId: 'ACT-1009',
                metricArea: 'Completion',
                action: 'Resolve 19 unresolved board outcomes',
                owner: 'Registry',
                dueDate: '10 Feb 2026',
                status: 'Active',
                evidence: 'Evidence link',
            },
            {
                actionId: 'ACT-1013',
                metricArea: 'Progression',
                action: 'Improve contactability for 2025 qualifiers',
                owner: 'Careers',
                dueDate: '28 Feb 2026',
                status: 'Open',
                evidence: 'Evidence link',
            },
            {
                actionId: 'ACT-1019',
                metricArea: 'Data Quality',
                action: 'Mandate withdrawal reason coding',
                owner: 'Registry Systems',
                dueDate: '07 Feb 2026',
                status: 'Escalated',
                evidence: 'Evidence link',
            },
        ];
        this.behaviourNotes = [
            'Actions can be linked to a metric, a course, a student group, or a single student case.',
            'Only authorised users can edit ownership, due date, and status changes.',
            'Closed actions remain visible as evidence for governance and regulatory review.',
        ];
    }
}
InterventionsViewComponent.ɵfac = function InterventionsViewComponent_Factory(t) { return new (t || InterventionsViewComponent)(); };
InterventionsViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterventionsViewComponent, selectors: [["app-interventions-view"]], decls: 48, vars: 4, consts: [[1, "interventions-page"], [1, "page-heading"], [1, "filter-bar"], ["class", "filter-pill", 4, "ngFor", "ngForOf"], [1, "summary-grid"], ["class", "summary-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "dashboard-panel"], [1, "panel-header"], [1, "table-wrapper"], [4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "table-filler"], [1, "dashboard-panel", "behaviour-panel"], [1, "behaviour-list"], [1, "filter-pill"], [1, "summary-card", 3, "ngClass"], [1, "summary-card__badge"], [1, "action-cell"], ["type", "button", 1, "evidence-link"]], template: function InterventionsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Interventions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "B3 & Student Outcomes / Compliance Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InterventionsViewComponent_div_7_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InterventionsViewComponent_article_9_Template, 7, 4, "article", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 6)(11, "div", 7)(12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Interventions and actions register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "table")(16, "thead")(17, "tr")(18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Action ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Metric area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Due date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Evidence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, InterventionsViewComponent_tr_33_Template, 16, 7, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "td")(36, "td")(37, "td")(38, "td")(39, "td")(40, "td")(41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 11)(43, "div", 7)(44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "How this page behaves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, InterventionsViewComponent_li_47_Template, 2, 1, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.summaryCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.registerRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.behaviourNotes);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".interventions-page[_ngcontent-%COMP%] {\n  padding: 4px 8px 24px;\n  background: #f5f7fb;\n  color: #1c2741;\n}\n\n.page-heading[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n  min-height: 34px;\n}\n\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 800;\n  line-height: 1.05;\n  color: #17233b;\n}\n\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 50%;\n  margin: 0;\n  transform: translateX(-50%);\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #7c8aa2;\n  white-space: nowrap;\n}\n\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 14px;\n  padding: 10px 12px;\n  background: #ffffff;\n  border: 1px solid #dce4f0;\n  border-radius: 16px;\n}\n\n.filter-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  min-height: 30px;\n  padding: 6px 14px;\n  border: 1px solid #d8e0ec;\n  border-radius: 999px;\n  background: #f9fbff;\n  color: #5a6983;\n  font-size: 0.86rem;\n  line-height: 1;\n}\n\n.filter-pill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #394760;\n  font-weight: 700;\n}\n\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.summary-card[_ngcontent-%COMP%], .dashboard-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dce5f1;\n  border-radius: 16px;\n  box-shadow: 0 8px 20px rgba(18, 40, 78, 0.06);\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  min-height: 116px;\n  padding: 14px 16px 12px;\n}\n\n.summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 12px 0 6px;\n  font-size: 2.2rem;\n  font-weight: 800;\n  line-height: 1;\n  color: #17233b;\n}\n\n.summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.92rem;\n  color: #8d9ab0;\n}\n\n.summary-card__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 28px;\n  padding: 5px 14px;\n  border-radius: 999px;\n  font-size: 0.98rem;\n  font-weight: 800;\n  line-height: 1;\n}\n\n.summary-card.open[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #e59a00;\n  background: #fff0c9;\n}\n\n.summary-card.active[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #2e73ff;\n  background: #e8f0ff;\n}\n\n.summary-card.overdue[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #ef5a5a;\n  background: #ffe6e7;\n}\n\n.summary-card.closed[_ngcontent-%COMP%]   .summary-card__badge[_ngcontent-%COMP%] {\n  color: #23b468;\n  background: #dff7e7;\n}\n\n.dashboard-panel[_ngcontent-%COMP%] {\n  padding: 10px 12px 12px;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #25324b;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  color: #30435f;\n  font-size: 0.84rem;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 9px;\n  background: #eaf1fb;\n  border-top: 1px solid #d6e0ec;\n  border-bottom: 1px solid #d6e0ec;\n  font-weight: 800;\n  text-align: left;\n  white-space: nowrap;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #d6e0ec;\n  border-top-left-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #d6e0ec;\n  border-top-right-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 9px;\n  background: #ffffff;\n  border-bottom: 1px solid #e2e9f3;\n  border-right: 1px solid #e2e9f3;\n  vertical-align: top;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #e2e9f3;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child {\n  border-bottom-left-radius: 10px;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 10px;\n}\n\n.action-cell[_ngcontent-%COMP%] {\n  min-width: 230px;\n  white-space: normal;\n}\n\n.evidence-link[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #536fb1;\n  font: inherit;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.table-filler[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 58px;\n  background: #ffffff;\n}\n\n.behaviour-panel[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n\n.behaviour-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.behaviour-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 18px;\n  color: #3d4e69;\n  font-size: 0.98rem;\n  font-weight: 600;\n  line-height: 1.55;\n}\n\n.behaviour-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n\n.behaviour-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 9px;\n  left: 0;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #0d9a8a;\n}\n\n@media (max-width: 1200px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 768px) {\n  .interventions-page[_ngcontent-%COMP%] {\n    padding: 8px 0 20px;\n  }\n  .page-heading[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n  .page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    position: static;\n    display: block;\n    margin-top: 4px;\n    transform: none;\n    white-space: normal;\n  }\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  table[_ngcontent-%COMP%] {\n    min-width: 820px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVydmVudGlvbnMtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBOztFQUVFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FBRkY7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU9BO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLHVCQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtBQUpGOztBQU1FO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSko7O0FBUUE7RUFDRSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFPRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBUUU7RUFDRSw4QkFBQTtFQUNBLDRCQUFBO0FBTko7O0FBU0U7RUFDRSwrQkFBQTtFQUNBLDZCQUFBO0FBUEo7O0FBVUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FBUko7O0FBV0U7RUFDRSw4QkFBQTtBQVRKOztBQVlFO0VBQ0UsK0JBQUE7QUFWSjs7QUFhRTtFQUNFLGdDQUFBO0FBWEo7O0FBZUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBWkY7O0FBZUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFaRjs7QUFlQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQVpGOztBQWVBO0VBQ0UsZ0JBQUE7QUFaRjs7QUFlQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFaRjs7QUFjRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBWko7O0FBZUU7RUFDRSxlQUFBO0FBYko7O0FBZ0JFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFkSjs7QUFrQkE7RUFDRTtJQUNFLGdEQUFBO0VBZkY7QUFDRjs7QUFrQkE7RUFDRTtJQUNFLG1CQUFBO0VBaEJGO0VBbUJBO0lBQ0UsZ0JBQUE7RUFqQkY7RUFtQkU7SUFDRSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBakJKO0VBcUJBO0lBQ0UsMEJBQUE7RUFuQkY7RUFzQkE7SUFDRSxnQkFBQTtFQXBCRjtBQUNGIiwiZmlsZSI6ImludGVydmVudGlvbnMtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRlcnZlbnRpb25zLXBhZ2Uge1xuICBwYWRkaW5nOiA0cHggOHB4IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmI7XG4gIGNvbG9yOiAjMWMyNzQxO1xufVxuXG4ucGFnZS1oZWFkaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtaW4taGVpZ2h0OiAzNHB4O1xuXG4gIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMDU7XG4gICAgY29sb3I6ICMxNzIzM2I7XG4gIH1cblxuICBwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbjogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM3YzhhYTI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxufVxuXG4uZmlsdGVyLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2U0ZjA7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cbi5maWx0ZXItcGlsbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGUwZWM7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAjZjlmYmZmO1xuICBjb2xvcjogIzVhNjk4MztcbiAgZm9udC1zaXplOiAwLjg2cmVtO1xuICBsaW5lLWhlaWdodDogMTtcblxuICBzdHJvbmcge1xuICAgIGNvbG9yOiAjMzk0NzYwO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbn1cblxuLnN1bW1hcnktZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uc3VtbWFyeS1jYXJkLFxuLmRhc2hib2FyZC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2U1ZjE7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgxOCwgNDAsIDc4LCAwLjA2KTtcbn1cblxuLnN1bW1hcnktY2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDExNnB4O1xuICBwYWRkaW5nOiAxNHB4IDE2cHggMTJweDtcblxuICBoMiB7XG4gICAgbWFyZ2luOiAxMnB4IDAgNnB4O1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6ICMxNzIzM2I7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjkycmVtO1xuICAgIGNvbG9yOiAjOGQ5YWIwO1xuICB9XG59XG5cbi5zdW1tYXJ5LWNhcmRfX2JhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmc6IDVweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC1zaXplOiAwLjk4cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLnN1bW1hcnktY2FyZC5vcGVuIC5zdW1tYXJ5LWNhcmRfX2JhZGdlIHtcbiAgY29sb3I6ICNlNTlhMDA7XG4gIGJhY2tncm91bmQ6ICNmZmYwYzk7XG59XG5cbi5zdW1tYXJ5LWNhcmQuYWN0aXZlIC5zdW1tYXJ5LWNhcmRfX2JhZGdlIHtcbiAgY29sb3I6ICMyZTczZmY7XG4gIGJhY2tncm91bmQ6ICNlOGYwZmY7XG59XG5cbi5zdW1tYXJ5LWNhcmQub3ZlcmR1ZSAuc3VtbWFyeS1jYXJkX19iYWRnZSB7XG4gIGNvbG9yOiAjZWY1YTVhO1xuICBiYWNrZ3JvdW5kOiAjZmZlNmU3O1xufVxuXG4uc3VtbWFyeS1jYXJkLmNsb3NlZCAuc3VtbWFyeS1jYXJkX19iYWRnZSB7XG4gIGNvbG9yOiAjMjNiNDY4O1xuICBiYWNrZ3JvdW5kOiAjZGZmN2U3O1xufVxuXG4uZGFzaGJvYXJkLXBhbmVsIHtcbiAgcGFkZGluZzogMTBweCAxMnB4IDEycHg7XG59XG5cbi5wYW5lbC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogIzI1MzI0YjtcbiAgfVxufVxuXG4udGFibGUtd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzMwNDM1ZjtcbiAgZm9udC1zaXplOiAwLjg0cmVtO1xuXG4gIHRoZWFkIHRoIHtcbiAgICBwYWRkaW5nOiAxMHB4IDlweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWFmMWZiO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDZlMGVjO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDZlMGVjO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgdGhlYWQgdGg6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Q2ZTBlYztcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgdGhlYWQgdGg6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q2ZTBlYztcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgfVxuXG4gIHRib2R5IHRkIHtcbiAgICBwYWRkaW5nOiAxMHB4IDlweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOWYzO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMmU5ZjM7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuXG4gIHRib2R5IHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMmU5ZjM7XG4gIH1cblxuICB0Ym9keSB0cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgdGJvZHkgdHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgfVxufVxuXG4uYWN0aW9uLWNlbGwge1xuICBtaW4td2lkdGg6IDIzMHB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uZXZpZGVuY2UtbGluayB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNTM2ZmIxO1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWJsZS1maWxsZXIgdGQge1xuICBoZWlnaHQ6IDU4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5iZWhhdmlvdXItcGFuZWwge1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuXG4uYmVoYXZpb3VyLWxpc3Qge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gICAgY29sb3I6ICMzZDRlNjk7XG4gICAgZm9udC1zaXplOiAwLjk4cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTU7XG4gIH1cblxuICBsaSArIGxpIHtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gIH1cblxuICBsaTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA5cHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogOXB4O1xuICAgIGhlaWdodDogOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMGQ5YThhO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnN1bW1hcnktZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW50ZXJ2ZW50aW9ucy1wYWdlIHtcbiAgICBwYWRkaW5nOiA4cHggMCAyMHB4O1xuICB9XG5cbiAgLnBhZ2UtaGVhZGluZyB7XG4gICAgbWluLWhlaWdodDogYXV0bztcblxuICAgIHAge1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB9XG4gIH1cblxuICAuc3VtbWFyeS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIHRhYmxlIHtcbiAgICBtaW4td2lkdGg6IDgyMHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 8427:
/*!***********************************************************************!*\
  !*** ./src/app/pages/analytics/interventions/interventions.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterventionsModule": () => (/* binding */ InterventionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _interventions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interventions-routing.module */ 4530);
/* harmony import */ var _interventions_view_interventions_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interventions-view/interventions-view.component */ 415);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 7070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ 3366);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);









class InterventionsModule {
}
InterventionsModule.ɵfac = function InterventionsModule_Factory(t) { return new (t || InterventionsModule)(); };
InterventionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InterventionsModule });
InterventionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _interventions_routing_module__WEBPACK_IMPORTED_MODULE_0__.InterventionsRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InterventionsModule, { declarations: [_interventions_view_interventions_view_component__WEBPACK_IMPORTED_MODULE_1__.InterventionsViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _interventions_routing_module__WEBPACK_IMPORTED_MODULE_0__.InterventionsRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__.CollapseModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_analytics_interventions_interventions_module_ts.js.map