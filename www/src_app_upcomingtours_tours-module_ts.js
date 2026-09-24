"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_upcomingtours_tours-module_ts"],{

/***/ 7960
/*!***********************************************!*\
  !*** ./src/app/upcomingtours/tours-module.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToursModule: () => (/* binding */ ToursModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _tours_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tours.component */ 9302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: '',
  component: _tours_component__WEBPACK_IMPORTED_MODULE_1__.ToursComponent
}];
class ToursModule {
  static #_ = _staticBlock = () => (this.ɵfac = function ToursModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ToursModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ToursModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _tours_component__WEBPACK_IMPORTED_MODULE_1__.ToursComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ToursModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _tours_component__WEBPACK_IMPORTED_MODULE_1__.ToursComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ },

/***/ 9302
/*!**************************************************!*\
  !*** ./src/app/upcomingtours/tours.component.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToursComponent: () => (/* binding */ ToursComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _upcomingtours__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upcomingtours */ 9565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 5430);
/* harmony import */ var _core_public_route_id_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/public-route-id.service */ 2440);
/* harmony import */ var _core_media_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/media.service */ 6657);
var _staticBlock;
// tours.component.ts - UPDATED with API integration













const _c0 = (a0, a1, a2, a3) => ({
  "status-available": a0,
  "status-fast": a1,
  "status-last": a2,
  "status-soldout": a3
});
function ToursComponent_span_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " trips ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.trekCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.allTreks.length);
  }
}
function ToursComponent_span_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loading treks\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ToursComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 64)(1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ToursComponent_div_80_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.loadTreks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Retry");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function ToursComponent_button_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ToursComponent_button_82_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.changeYear("prev"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u2190 ", ctx_r0.previousYear);
  }
}
function ToursComponent_button_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ToursComponent_button_85_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.changeYear("next"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.nextYear, " \u2192");
  }
}
function ToursComponent_div_86_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const y_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", y_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](y_r6);
  }
}
function ToursComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 69)(1, "select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ToursComponent_div_86_Template_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r0.selectedYear, $event) || (ctx_r0.selectedYear = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ToursComponent_div_86_Template_select_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.loadTreks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ToursComponent_div_86_option_2_Template, 2, 2, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.selectedYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.years);
  }
}
function ToursComponent_span_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.allTreks.length);
  }
}
function ToursComponent_button_91_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getMonthCount(month_r8));
  }
}
function ToursComponent_button_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ToursComponent_button_91_Template_button_click_0_listener() {
      const month_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.selectMonth(month_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ToursComponent_button_91_span_2_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.selectedMonth === month_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", month_r8, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.getMonthCount(month_r8) > 0);
  }
}
function ToursComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 74)(1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 76)(3, "div", 76)(4, "div", 76)(5, "div", 76)(6, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Loading Expeditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ToursComponent_div_93_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "All Upcoming Treks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ToursComponent_div_93_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.selectedMonth);
  }
}
function ToursComponent_div_93_div_17_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ToursComponent_div_93_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ToursComponent_div_93_div_17_Template_div_click_0_listener() {
      const trek_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.viewDetails(trek_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 88)(2, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 93)(10, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 96)(13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 100)(21, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 102)(24, "div")(25, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Per Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ToursComponent_div_93_div_17_Template_button_click_30_listener($event) {
      const trek_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.viewDetails(trek_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, ToursComponent_div_93_div_17_span_32_Template, 2, 0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const trek_r10 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("sold-out", trek_r10.status === "sold-out");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](trek_r10.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](trek_r10.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](trek_r10.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.resolveImageUrl(trek_r10.image, trek_r10.cacheKey), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", trek_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](trek_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](trek_r10.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](trek_r10.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction4"](23, _c0, trek_r10.status === "available", trek_r10.status === "selling-fast", trek_r10.status === "last-seat", trek_r10.status === "sold-out"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getStatusText(trek_r10.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](27, 20, trek_r10.price, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("available", trek_r10.status !== "sold-out")("soldout", trek_r10.status === "sold-out");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", trek_r10.status === "sold-out");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", trek_r10.status === "sold-out" ? "Sold Out" : "View", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", trek_r10.status !== "sold-out");
  }
}
function ToursComponent_div_93_div_18_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("No upcoming treks found for ", ctx_r0.selectedYear);
  }
}
function ToursComponent_div_93_div_18_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("No treks in ", ctx_r0.selectedMonth, " ", ctx_r0.selectedYear);
  }
}
function ToursComponent_div_93_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 108)(1, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ToursComponent_div_93_div_18_h3_3_Template, 2, 1, "h3", 81)(4, ToursComponent_div_93_div_18_h3_4_Template, 2, 2, "h3", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Try switching to \"All Treks\" or selecting a different year.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.selectedMonth === "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.selectedMonth !== "All");
  }
}
function ToursComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 78)(1, "div", 79)(2, "h2", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ToursComponent_div_93_span_3_Template, 2, 0, "span", 81)(4, ToursComponent_div_93_span_4_Template, 2, 1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 83)(9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Date & Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Trek Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ToursComponent_div_93_div_17_Template, 33, 28, "div", 85)(18, ToursComponent_div_93_div_18_Template, 7, 2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.selectedMonth === "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.selectedMonth !== "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedYear, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r0.trekCount, " departure", ctx_r0.trekCount !== 1 ? "s" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.currentMonthTreks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.trekCount === 0);
  }
}
class ToursComponent {
  constructor(router, trekService, location, publicRouteId, media) {
    this.router = router;
    this.trekService = trekService;
    this.location = location;
    this.publicRouteId = publicRouteId;
    this.media = media;
    this.mediaBaseUrl = (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.mediaBaseUrl || '').replace(/\/?$/, '/');
    this.fallbackImage = "assets/default-trek.jpg";
    this.selectedYear = new Date().getFullYear();
    this.selectedMonth = 'All';
    this.years = [];
    this.availableYears = []; // Years with actual trek data
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.allTreks = [];
    this.monthTreksData = {};
    this.isLoading = false;
    this.errorMessage = '';
  }
  ngOnInit() {
    this.initializeYears();
    this.setInitialMonth();
    this.loadAvailableYears();
    this.loadTreks();
  }
  /**
   * Initialize years array dynamically
   * Shows current year ± 2 years
   */
  initializeYears() {
    const currentYear = new Date().getFullYear();
    // Generate years: current year - 1, current year, current year + 1, current year + 2
    this.years = [currentYear - 1, currentYear, currentYear + 1, currentYear + 2];
    // Set selected year to current year or next year if current month is December
    const currentMonth = new Date().getMonth();
    if (currentMonth === 11) {
      // December
      this.selectedYear = currentYear + 1;
    } else {
      this.selectedYear = currentYear;
    }
  }
  /**
   * Set initial month to show all treks by default
   */
  setInitialMonth() {
    this.selectedMonth = 'All';
  }
  /**
   * Load years that have trek data from backend
   */
  loadAvailableYears() {
    this.trekService.getAvailableYears().subscribe({
      next: response => {
        if (response.success && response.years) {
          this.availableYears = response.years;
          // Update years array to include all available years
          this.updateYearsWithAvailable(response.years);
        }
      },
      error: error => {
        console.error('Load available years error:', error);
        // Continue with default years if API fails
      }
    });
  }
  loadTreks() {
    this.isLoading = true;
    this.errorMessage = '';
    this.trekService.getAllTreksFormatted(this.selectedYear).subscribe({
      next: treks => {
        this.allTreks = (treks || []).sort((a, b) => {
          return new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
        });
        this.groupTreksByMonth();
        this.isLoading = false;
      },
      error: error => {
        console.error('Load treks error:', error);
        this.errorMessage = 'Failed to load treks. Please try again.';
        this.allTreks = [];
        this.isLoading = false;
      }
    });
  }
  destroy$(destroy$) {
    throw new Error('Method not implemented.');
  }
  /**
   * Update years array to include years from database
   */
  updateYearsWithAvailable(availableYears) {
    if (availableYears.length === 0) return;
    const minYear = Math.min(...availableYears);
    const maxYear = Math.max(...availableYears);
    const currentYear = new Date().getFullYear();
    // Create range from min available year to max(current year + 2, max available year)
    const startYear = Math.min(minYear, currentYear - 1);
    const endYear = Math.max(maxYear, currentYear + 2);
    this.years = [];
    for (let year = startYear; year <= endYear; year++) {
      this.years.push(year);
    }
    // Ensure selected year is valid
    if (!this.years.includes(this.selectedYear)) {
      this.selectedYear = currentYear;
    }
  }
  /**
   * Load all treks for the selected year
   */
  /**
   * Group treks by month
   */
  groupTreksByMonth() {
    this.monthTreksData = {};
    this.allTreks.forEach(trek => {
      const trekDate = new Date(trek.start_date);
      const monthName = this.months[trekDate.getMonth()];
      if (!this.monthTreksData[monthName]) {
        this.monthTreksData[monthName] = [];
      }
      this.monthTreksData[monthName].push(trek);
    });
    // Sort treks within each month by start date
    Object.keys(this.monthTreksData).forEach(month => {
      this.monthTreksData[month].sort((a, b) => {
        return new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
      });
    });
  }
  /**
   * Get treks for selected month
   */
  get monthTreks() {
    return this.monthTreksData;
  }
  /**
   * Get current displayed treks (all or filtered by month)
   */
  get currentMonthTreks() {
    if (!this.selectedMonth || this.selectedMonth === 'All' || this.selectedMonth === 'all') {
      return this.allTreks;
    }
    return this.monthTreksData[this.selectedMonth] || [];
  }
  /**
   * Get trek count for current month
   */
  get trekCount() {
    return this.currentMonthTreks.length;
  }
  /**
   * Change year
   */
  changeYear(direction) {
    const currentIndex = this.years.indexOf(this.selectedYear);
    if (direction === 'prev' && currentIndex > 0) {
      this.selectedYear = this.years[currentIndex - 1];
      this.loadTreks();
    } else if (direction === 'next' && currentIndex < this.years.length - 1) {
      this.selectedYear = this.years[currentIndex + 1];
      this.loadTreks();
    }
  }
  /**
   * Check if year has data
   */
  yearHasData(year) {
    return this.availableYears.includes(year);
  }
  /**
   * Get previous year
   */
  get previousYear() {
    const currentIndex = this.years.indexOf(this.selectedYear);
    return currentIndex > 0 ? this.years[currentIndex - 1] : null;
  }
  /**
   * Get next year
   */
  get nextYear() {
    const currentIndex = this.years.indexOf(this.selectedYear);
    return currentIndex < this.years.length - 1 ? this.years[currentIndex + 1] : null;
  }
  /**
   * Check if previous year button should be disabled
   */
  get isPrevYearDisabled() {
    return this.previousYear === null || this.isLoading;
  }
  /**
   * Check if next year button should be disabled
   */
  get isNextYearDisabled() {
    return this.nextYear === null || this.isLoading;
  }
  /**
   * Change month
   */
  selectMonth(month) {
    this.selectedMonth = month;
  }
  /**
   * Get status color (for badge)
   */
  getStatusColor(status) {
    switch (status) {
      case 'available':
        return 'success';
      case 'selling-fast':
        return 'warning';
      case 'last-seat':
        return 'danger';
      case 'sold-out':
        return 'medium';
      default:
        return 'medium';
    }
  }
  /**
   * Get status text
   */
  getStatusText(status) {
    switch (status) {
      case 'available':
        return 'Available';
      case 'selling-fast':
        return 'Selling fast';
      case 'last-seat':
        return 'Last seat';
      case 'sold-out':
        return 'SOLD OUT';
      default:
        return status;
    }
  }
  /**
   * Navigate to trek details
   */
  viewDetails(trek) {
    const rawId = String(trek.batch_public_ref || trek.trek_uuid || trek.id || '');
    const publicRef = this.publicRouteId.encode(rawId) || rawId;
    this.router.navigate(['/tour-details', publicRef]);
  }
  /**
   * Parse duration string to minutes for comparison
   */
  parseDuration(duration) {
    const match = duration.match(/(\d+)\s*(Day|Days|Hour|Hours|Minute|Minutes)/i);
    if (!match) return 0;
    const value = parseInt(match[1]);
    const unit = match[2].toLowerCase();
    if (unit.includes('day')) {
      return value * 24 * 60; // Convert to minutes
    } else if (unit.includes('hour')) {
      return value * 60;
    } else {
      return value;
    }
  }
  /**
   * Get count for a specific month or all treks
   */
  getMonthCount(month) {
    if (month === 'All') {
      return this.allTreks.length;
    }
    return this.monthTreksData[month]?.length || 0;
  }
  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }
  resolveImageUrl(imagePath, cacheKey) {
    return this.media.resolve(imagePath || null, cacheKey);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ToursComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ToursComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_upcomingtours__WEBPACK_IMPORTED_MODULE_8__.Upcomingtours), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_public_route_id_service__WEBPACK_IMPORTED_MODULE_10__.PublicRouteIdService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_media_service__WEBPACK_IMPORTED_MODULE_11__.MediaService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ToursComponent,
    selectors: [["app-tours"]],
    decls: 107,
    vars: 19,
    consts: [[1, "page-enter"], [1, "hero"], [1, "hero-media"], ["loading", "eager", "fetchpriority", "high", "decoding", "async", "src", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85", "alt", "Western Ghats Trekking Expeditions Banner", 1, "hero-img"], [1, "hero-overlay"], [1, "hero-top"], ["aria-label", "Breadcrumb", 1, "hero-breadcrumb-pill"], ["type", "button", "title", "Back to Home", 1, "hero-crumb-btn", 3, "click"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "hero-crumb-home"], ["d", "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"], [1, "hero-crumb-sep"], [1, "hero-crumb-item"], [1, "hero-crumb-active"], [1, "hero-season-pill"], [1, "season-dot"], [1, "hero-body"], [1, "hero-content"], [1, "hero-badges"], [1, "hero-badge", "badge-featured"], [1, "badge-dot"], [1, "hero-badge", "badge-trail"], [1, "bi", "bi-shield-check", "me-1"], [1, "hero-badge", "badge-permits"], [1, "bi", "bi-patch-check-fill", "me-1"], [1, "hero-title"], [1, "hero-meta-chips"], [1, "hero-chip"], ["viewBox", "0 0 20 20", "fill", "currentColor"], ["fill-rule", "evenodd", "d", "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z", "clip-rule", "evenodd"], [1, "hero-stat-card"], [1, "hero-stat-pulse"], [1, "stat-pulse-ring"], [1, "stat-pulse-core"], [1, "stat-pulse-label"], [1, "hero-stat-number"], [1, "hero-stat-desc"], [1, "hero-stat-perks"], [1, "perk-item"], [1, "bi", "bi-check2", "text-success", "me-1"], [1, "control-bar"], [1, "control-left"], ["class", "trek-count-label", 4, "ngIf"], [1, "divider-v"], [1, "control-month"], ["class", "error-alert", 4, "ngIf"], [1, "year-nav"], ["class", "year-btn", 3, "disabled", "click", 4, "ngIf"], [1, "year-current"], ["class", "year-dropdown-wrap", 4, "ngIf"], [1, "month-tabs"], [1, "month-tab", 3, "click", "disabled"], ["class", "month-count", 4, "ngIf"], ["class", "month-tab", 3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "loader-wrapper", 4, "ngIf"], ["class", "content", 4, "ngIf"], [1, "bottom-cta"], [1, "cta-card"], [1, "cta-eyebrow"], [1, "cta-heading"], [1, "cta-body"], ["routerLink", "/contact", 1, "cta-btn"], [1, "trek-count-label"], [1, "error-alert"], [1, "alert-inner"], [1, "bi", "bi-exclamation-triangle-fill", "text-warning", "me-1"], [1, "retry-btn", 3, "click"], [1, "year-btn", 3, "click", "disabled"], [1, "year-dropdown-wrap"], [1, "sort-select", 3, "ngModelChange", "change", "ngModel", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "month-count"], [1, "loader-wrapper"], [1, "loader-bars"], [1, "loader-bar"], [1, "loader-text"], [1, "content"], [1, "month-header"], [1, "month-heading"], [4, "ngIf"], [1, "month-sub"], [1, "table-header"], [2, "text-align", "right"], ["class", "trek-row", 3, "sold-out", "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "trek-row", 3, "click"], [1, "col-date"], [1, "date-main"], [1, "date-time"], [1, "duration-tag"], [1, "bi", "bi-clock", "me-1"], [1, "col-trek"], [1, "trek-thumb"], ["loading", "lazy", "decoding", "async", "onerror", "this.src='assets/default-trek.jpg'", 3, "src", "alt"], [1, "trek-info-text"], [1, "trek-location"], [1, "bi", "bi-geo-alt-fill", "me-1", "text-success"], [1, "category-tag"], [1, "col-status"], [1, "status-badge", 3, "ngClass"], [1, "col-price"], [1, "price-amount"], [1, "price-per"], [1, "view-btn", 3, "click", "disabled"], ["class", "btn-arrow", 4, "ngIf"], [1, "btn-arrow"], [1, "empty-state"], [1, "empty-icon"], [1, "bi", "bi-compass"]],
    template: function ToursComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5)(6, "nav", 6)(7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ToursComponent_Template_button_click_7_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\u203A");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\u203A");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "strong", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Upcoming Treks & Expeditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Western Ghats Active Season");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " 2025\u20132026 Batch Calendar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " Eco Certified Trails ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " Forest Permits Handled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Upcoming Treks");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "& Wilderness Expeditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 25)(41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Karnataka & Western Ghats");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Weekend & Extended Departures");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 31)(57, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "span", 33)(59, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Live Departures");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Scheduled Karnataka Expeditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 38)(67, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, " Certified Trek Leads");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, " Instant Digital Pass");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 41)(74, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, ToursComponent_span_75_Template, 8, 2, "span", 43)(76, ToursComponent_span_76_Template, 2, 0, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](77, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, ToursComponent_div_80_Template, 6, 1, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](82, ToursComponent_button_82_Template, 2, 2, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](85, ToursComponent_button_85_Template, 2, 2, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, ToursComponent_div_86_Template, 3, 3, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 51)(88, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ToursComponent_Template_button_click_88_listener() {
          return ctx.selectMonth("All");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, " All Treks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](90, ToursComponent_span_90_Template, 2, 1, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](91, ToursComponent_button_91_Template, 3, 5, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](92, ToursComponent_div_92_Template, 9, 0, "div", 55)(93, ToursComponent_div_93_Template, 19, 7, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 57)(95, "div", 58)(96, "div")(97, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "Custom Expeditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "h2", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, "Can't find what you're looking for?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, "We organise tailored group treks, corporate outings, and private expeditions. Tell us where you want to go.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "Get in Touch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](106, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.selectedMonth, " ", ctx.selectedYear, " Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.allTreks.length || "35+");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.selectedMonth === "All" ? "All Expeditions" : ctx.selectedMonth, " ", ctx.selectedYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.previousYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.selectedYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.nextYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.years.length > 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.selectedMonth === "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.allTreks.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.months);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
    styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #f7f3ec;\n  color: #1c2533;\n  font-family: \"Outfit\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\n.page-enter[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pageIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n\n@keyframes _ngcontent-%COMP%_pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 460px;\n  height: clamp(460px, 50vh, 560px);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  color: #ffffff;\n  background-color: #08150c;\n  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.3);\n}\n\n.hero-media[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.hero-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 36%;\n  display: block;\n  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;\n}\n\n.hero[_ngcontent-%COMP%]:hover   .hero-img[_ngcontent-%COMP%] {\n  transform: scale(1.035);\n}\n\n.hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(6, 16, 10, 0.72) 0%, rgba(6, 16, 10, 0.18) 28%, rgba(5, 14, 8, 0.45) 58%, rgba(4, 12, 7, 0.95) 100%), radial-gradient(circle at 85% 15%, rgba(34, 197, 94, 0.12), transparent 55%);\n  transition: background 0.4s ease;\n}\n\n.hero-top[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 26px clamp(20px, 5vw, 64px);\n  gap: 16px;\n}\n\n.hero-breadcrumb-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(10, 22, 14, 0.62);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 999px;\n  padding: 6px 16px;\n  font: 500 13px \"Barlow\", sans-serif;\n  color: rgba(255, 255, 255, 0.85);\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);\n}\n\n.hero-crumb-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: 0;\n  background: none;\n  color: inherit;\n  padding: 0;\n  cursor: pointer;\n  font: inherit;\n  transition: color 0.2s ease;\n}\n.hero-crumb-btn[_ngcontent-%COMP%]:hover {\n  color: #4ade80;\n}\n\n.hero-crumb-home[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  color: #4ade80;\n}\n\n.hero-crumb-sep[_ngcontent-%COMP%] {\n  color: rgba(74, 222, 128, 0.75);\n  font-weight: 700;\n  font-size: 13px;\n  line-height: 1;\n}\n\n.hero-crumb-item[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.82);\n}\n\n.hero-crumb-active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: 700;\n}\n\n.hero-season-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: rgba(10, 22, 14, 0.62);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border: 1px solid rgba(74, 222, 128, 0.35);\n  border-radius: 999px;\n  padding: 6px 14px;\n  font: 600 12px \"Barlow Condensed\", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #bbf7d0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n\n.season-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #22c55e;\n  box-shadow: 0 0 8px #22c55e;\n}\n\n.hero-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 36px;\n  align-items: flex-end;\n  padding: 0 clamp(20px, 5vw, 64px) 34px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.hero-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 9px;\n  margin-bottom: 14px;\n}\n\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 999px;\n  font: 700 11px/1 \"Barlow Condensed\", sans-serif;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);\n}\n\n.badge-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n  box-shadow: 0 0 6px currentColor;\n}\n\n.badge-featured[_ngcontent-%COMP%] {\n  background: rgba(22, 101, 52, 0.88);\n  border: 1px solid rgba(74, 222, 128, 0.45);\n  color: #bbf7d0;\n}\n\n.badge-trail[_ngcontent-%COMP%] {\n  background: rgba(4, 120, 87, 0.45);\n  border: 1px solid rgba(52, 211, 153, 0.35);\n  color: #6ee7b7;\n}\n\n.badge-permits[_ngcontent-%COMP%] {\n  background: rgba(15, 25, 18, 0.65);\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  color: #f3f4f6;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font: 800 clamp(32px, 4.4vw, 54px)/1.06 \"Playfair Display\", Georgia, serif;\n  letter-spacing: -0.02em;\n  color: #ffffff;\n  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.7), 0 2px 6px rgba(0, 0, 0, 0.85);\n  max-width: 900px;\n}\n\n.hero-meta-chips[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.hero-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 6px 14px;\n  border-radius: 999px;\n  background: rgba(10, 24, 15, 0.58);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  color: rgba(255, 255, 255, 0.92);\n  font: 500 13px \"Barlow\", sans-serif;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);\n  transition: all 0.2s ease;\n}\n.hero-chip[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  flex-shrink: 0;\n  color: #4ade80;\n}\n.hero-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(15, 35, 22, 0.75);\n  border-color: rgba(255, 255, 255, 0.28);\n  transform: translateY(-1px);\n}\n\n.hero-stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 18px 22px;\n  border-radius: 18px;\n  background: rgba(10, 28, 16, 0.8);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(74, 222, 128, 0.32);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n  min-width: 240px;\n  flex-shrink: 0;\n}\n\n.hero-stat-pulse[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  position: relative;\n}\n\n.stat-pulse-ring[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #22c55e;\n  opacity: 0.45;\n  animation: _ngcontent-%COMP%_tdPulsePing 2s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n\n.stat-pulse-core[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #22c55e;\n  box-shadow: 0 0 8px #22c55e;\n  position: absolute;\n  left: 2.5px;\n}\n\n.stat-pulse-label[_ngcontent-%COMP%] {\n  font: 700 11px \"Barlow Condensed\", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #4ade80;\n}\n\n@keyframes _ngcontent-%COMP%_tdPulsePing {\n  75%, 100% {\n    transform: scale(2.4);\n    opacity: 0;\n  }\n}\n.hero-stat-number[_ngcontent-%COMP%] {\n  font: 800 36px/1 \"Playfair Display\", Georgia, serif;\n  color: #ffffff;\n  margin: 6px 0 2px;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);\n}\n\n.hero-stat-desc[_ngcontent-%COMP%] {\n  font: 600 12px \"Barlow Condensed\", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #bbf7d0;\n}\n\n.hero-stat-perks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  margin-top: 10px;\n  font: 500 11px \"Barlow\", sans-serif;\n  color: rgba(255, 255, 255, 0.78);\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n  padding-top: 8px;\n  width: 100%;\n}\n\n.control-bar[_ngcontent-%COMP%] {\n  background: #0f2417;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 6vw;\n  gap: 16px;\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n\n.control-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 14px 0;\n}\n\n.trek-count-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #a4b8c8;\n}\n.trek-count-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f0e8d8;\n  font-weight: 600;\n}\n\n.control-month[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: #e07a52;\n}\n\n.divider-v[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 16px;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.control-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.sort-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #6e8398;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n\n.sort-select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #f8b42c;\n  font-family: \"Outfit\", sans-serif;\n  font-size: 0.78rem;\n  padding: 6px 28px 6px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  outline: none;\n  -webkit-appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23a4b8c8' d='M6 8L1 3h10z'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 8px center;\n}\n\n.error-alert[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 16px auto;\n  padding: 0 6vw;\n}\n\n.alert-inner[_ngcontent-%COMP%] {\n  background: rgba(168, 50, 50, 0.08);\n  border: 1px solid rgba(168, 50, 50, 0.2);\n  border-radius: 6px;\n  padding: 14px 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.85rem;\n  color: #a83232;\n}\n\n.retry-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: transparent;\n  border: 1px solid #a83232;\n  color: #a83232;\n  font-family: \"Outfit\", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 5px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background: #a83232;\n  color: #fff;\n}\n\n.year-nav[_ngcontent-%COMP%] {\n  background: #14281d;\n  padding: 20px 6vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 28px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n\n.year-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: #a4b8c8;\n  font-family: \"Syne\", sans-serif;\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  padding: 8px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.year-btn[_ngcontent-%COMP%]:hover:not([disabled]) {\n  border-color: rgba(255, 255, 255, 0.3);\n  color: #f0e8d8;\n  background: rgba(255, 255, 255, 0.05);\n}\n.year-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: default;\n}\n\n.year-current[_ngcontent-%COMP%] {\n  font-family: \"Syne\", sans-serif;\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #f0e8d8;\n  letter-spacing: 0.06em;\n  position: relative;\n  padding: 0 16px;\n}\n.year-current[_ngcontent-%COMP%]::before, .year-current[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  width: 20px;\n  height: 1px;\n  background: rgba(240, 232, 216, 0.18);\n}\n.year-current[_ngcontent-%COMP%]::before {\n  right: 100%;\n}\n.year-current[_ngcontent-%COMP%]::after {\n  left: 100%;\n}\n\n.year-dropdown-wrap[_ngcontent-%COMP%] {\n  background: #2c3d33;\n  display: flex;\n  justify-content: center;\n  padding: 12px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n}\n\n.month-tabs[_ngcontent-%COMP%] {\n  background: #2c3d33;\n  padding: 0 6vw;\n  display: flex;\n  gap: 2px;\n  overflow-x: auto;\n  scrollbar-width: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.04);\n}\n.month-tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.month-tab[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: transparent;\n  border: none;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  padding: 14px 16px;\n  color: rgb(255, 255, 255);\n  font-family: \"Outfit\", sans-serif;\n  font-size: 0.78rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: color 0.2s, border-color 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  white-space: nowrap;\n}\n.month-tab[_ngcontent-%COMP%]:hover:not([disabled]) {\n  color: #a4b8c8;\n}\n.month-tab.active[_ngcontent-%COMP%] {\n  color: #f5b22d;\n  border-bottom-color: #c2603a;\n}\n.month-tab[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.4;\n}\n\n.month-count[_ngcontent-%COMP%] {\n  background: rgba(194, 96, 58, 0.2);\n  color: #e07a52;\n  font-size: 0.62rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 10px;\n}\n.active[_ngcontent-%COMP%]   .month-count[_ngcontent-%COMP%] {\n  background: #c2603a;\n  color: #fff;\n}\n\n.content[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 0 6vw 80px;\n}\n\n.month-header[_ngcontent-%COMP%] {\n  padding: 40px 0 20px;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(28, 37, 51, 0.08);\n  margin-bottom: 4px;\n}\n\n.month-heading[_ngcontent-%COMP%] {\n  font-family: \"Syne\", sans-serif;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #1c2533;\n  letter-spacing: -0.01em;\n}\n.month-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #c2603a;\n}\n\n.month-sub[_ngcontent-%COMP%] {\n  color: #6e8398;\n  font-size: 0.75rem;\n  letter-spacing: 0.08em;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr 130px 160px;\n  gap: 16px;\n  padding: 10px 0;\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #6e8398;\n  border-bottom: 1px solid rgba(28, 37, 51, 0.08);\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .table-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.trek-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr 130px 160px;\n  gap: 16px;\n  align-items: center;\n  padding: 20px 0;\n  border-bottom: 1px solid rgba(28, 37, 51, 0.08);\n  cursor: pointer;\n  transition: padding-left 0.25s cubic-bezier(0.23, 1, 0.32, 1);\n  position: relative;\n}\n.trek-row[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: -6vw;\n  right: -6vw;\n  top: 0;\n  bottom: 0;\n  background: rgba(240, 232, 216, 0.52);\n  opacity: 0;\n  transition: opacity 0.2s;\n  pointer-events: none;\n  z-index: -1;\n}\n.trek-row[_ngcontent-%COMP%]:hover {\n  padding-left: 8px;\n}\n.trek-row[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.trek-row[_ngcontent-%COMP%]:hover   .trek-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.trek-row[_ngcontent-%COMP%]:hover   .btn-arrow[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.trek-row.sold-out[_ngcontent-%COMP%] {\n  opacity: 0.48;\n  cursor: default;\n}\n.trek-row.sold-out[_ngcontent-%COMP%]:hover {\n  padding-left: 0;\n}\n.trek-row.sold-out[_ngcontent-%COMP%]:hover::before {\n  opacity: 0;\n}\n@media (max-width: 768px) {\n  .trek-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n    padding: 18px 0;\n  }\n  .trek-row[_ngcontent-%COMP%]   .col-date[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 12px;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n  .trek-row[_ngcontent-%COMP%]   .col-date[_ngcontent-%COMP%]   .duration-tag[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .trek-row[_ngcontent-%COMP%]   .col-price[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding-top: 12px;\n    border-top: 1px solid rgba(28, 37, 51, 0.08);\n  }\n}\n\n.col-date[_ngcontent-%COMP%]   .date-main[_ngcontent-%COMP%] {\n  font-family: \"Syne\", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #1c2533;\n  line-height: 1.3;\n}\n.col-date[_ngcontent-%COMP%]   .date-time[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #6e8398;\n  margin-top: 2px;\n}\n.col-date[_ngcontent-%COMP%]   .duration-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #1c2533;\n  color: #a4b8c8;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  padding: 3px 8px;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n\n.col-trek[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n}\n\n.trek-thumb[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 82px;\n  height: 66px;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.trek-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  display: block;\n}\n\n.trek-info-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Syne\", sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1c2533;\n  line-height: 1.3;\n  margin-bottom: 5px;\n}\n\n.trek-location[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #6e8398;\n  margin-bottom: 6px;\n}\n\n.category-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(28, 37, 51, 0.07);\n  color: #3d4f63;\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 3px 8px;\n  border-radius: 4px;\n}\n\n.col-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 6px 12px;\n  border-radius: 4px;\n}\n\n.status-available[_ngcontent-%COMP%] {\n  background: rgba(45, 106, 79, 0.1);\n  color: #2d6a4f;\n  border: 1px solid rgba(45, 106, 79, 0.22);\n}\n\n.status-fast[_ngcontent-%COMP%] {\n  background: rgba(212, 145, 58, 0.1);\n  color: #b8732a;\n  border: 1px solid rgba(212, 145, 58, 0.22);\n}\n\n.status-last[_ngcontent-%COMP%] {\n  background: rgba(168, 50, 50, 0.1);\n  color: #a83232;\n  border: 1px solid rgba(168, 50, 50, 0.22);\n}\n\n.status-soldout[_ngcontent-%COMP%] {\n  background: rgba(110, 131, 152, 0.08);\n  color: #6e8398;\n  border: 1px solid rgba(110, 131, 152, 0.18);\n}\n\n.col-price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 8px;\n}\n\n.price-amount[_ngcontent-%COMP%] {\n  font-family: \"Syne\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1c2533;\n  line-height: 1;\n}\n\n.price-per[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  color: #6e8398;\n  margin-top: -4px;\n}\n\n.view-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-family: \"Outfit\", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s;\n}\n.view-btn.available[_ngcontent-%COMP%] {\n  background: #c2603a;\n  color: #fff;\n}\n.view-btn.available[_ngcontent-%COMP%]:hover {\n  background: #e07a52;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(194, 96, 58, 0.3);\n}\n.view-btn.soldout[_ngcontent-%COMP%] {\n  background: rgba(110, 131, 152, 0.1);\n  color: #6e8398;\n  cursor: default;\n}\n.view-btn[_ngcontent-%COMP%]   .btn-arrow[_ngcontent-%COMP%] {\n  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.loader-wrapper[_ngcontent-%COMP%] {\n  min-height: 55vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n\n.loader-bars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  align-items: flex-end;\n  height: 38px;\n}\n\n.loader-bar[_ngcontent-%COMP%] {\n  width: 4px;\n  border-radius: 2px;\n  background: #c2603a;\n  animation: _ngcontent-%COMP%_barBounce 1s ease-in-out infinite;\n}\n.loader-bar[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0s;\n  height: 16px;\n}\n.loader-bar[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.12s;\n  height: 28px;\n}\n.loader-bar[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.24s;\n  height: 20px;\n}\n.loader-bar[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.36s;\n  height: 34px;\n}\n.loader-bar[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.48s;\n  height: 22px;\n}\n\n@keyframes _ngcontent-%COMP%_barBounce {\n  0%, 100% {\n    opacity: 0.2;\n    transform: scaleY(0.6);\n  }\n  50% {\n    opacity: 1;\n    transform: scaleY(1);\n  }\n}\n.loader-text[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #6e8398;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  opacity: 0.15;\n  line-height: 1;\n  margin-bottom: 20px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Syne\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1c2533;\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6e8398;\n  font-size: 0.85rem;\n}\n\n.bottom-cta[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto 80px;\n  padding: 0 6vw;\n}\n\n.cta-card[_ngcontent-%COMP%] {\n  background: #14281d;\n  border-radius: 6px;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  gap: 32px;\n  padding: 40px 48px;\n  position: relative;\n}\n.cta-card[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -40px;\n  top: -40px;\n  width: 240px;\n  height: 240px;\n  border-radius: 50%;\n  border: 40px solid rgba(255, 255, 255, 0.025);\n  pointer-events: none;\n}\n@media (max-width: 640px) {\n  .cta-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 32px 24px;\n    gap: 24px;\n  }\n}\n\n.cta-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #e07a52;\n  margin-bottom: 10px;\n}\n\n.cta-heading[_ngcontent-%COMP%] {\n  font-family: \"Syne\", sans-serif;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #f0e8d8;\n  margin-bottom: 8px;\n  line-height: 1.2;\n}\n\n.cta-body[_ngcontent-%COMP%] {\n  color: #a4b8c8;\n  font-size: 0.85rem;\n  font-weight: 300;\n  line-height: 1.7;\n}\n\n.cta-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  background: #c2603a;\n  color: #fff;\n  font-family: \"Outfit\", sans-serif;\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 14px 28px;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: background 0.2s, transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s;\n}\n.cta-btn[_ngcontent-%COMP%]:hover {\n  background: #e07a52;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(194, 96, 58, 0.4);\n}\n@media (max-width: 640px) {\n  .cta-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n\n@media (max-width: 900px) {\n  .hero-top[_ngcontent-%COMP%] {\n    padding: 20px 4vw;\n  }\n  .hero-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n    padding: 0 4vw 28px;\n  }\n  .hero-stat-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .control-bar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    padding: 6px 4vw;\n  }\n  .control-left[_ngcontent-%COMP%], \n   .control-right[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .year-nav[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 16px;\n    padding: 16px 4vw;\n  }\n  .year-current[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .content[_ngcontent-%COMP%] {\n    padding: 0 4vw 64px;\n  }\n  .month-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 6px;\n  }\n}\n@media (max-width: 600px) {\n  .hero[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 480px;\n  }\n  .hero-top[_ngcontent-%COMP%] {\n    padding: 16px 4vw;\n    gap: 10px;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .hero-breadcrumb-pill[_ngcontent-%COMP%] {\n    max-width: 100%;\n    font-size: 11px;\n    padding: 5px 12px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: clamp(26px, 8vw, 36px);\n  }\n  .hero-body[_ngcontent-%COMP%] {\n    padding: 0 4vw 24px;\n    gap: 20px;\n  }\n  .control-left[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n  .control-right[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: flex-start;\n  }\n  .sort-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sort-select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .year-current[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .year-btn[_ngcontent-%COMP%] {\n    padding: 7px 14px;\n  }\n  .bottom-cta[_ngcontent-%COMP%] {\n    margin: 0 auto 60px;\n    padding: 0 4vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXBjb21pbmd0b3Vycy90b3Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUF5QixzQkFBQTtBQUV6Qjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7QUFHRjs7QUFDQTtFQUNFLDBEQUFBO0FBRUY7O0FBQ0E7RUFDRTtJQUFPLFVBQUE7SUFBWSwyQkFBQTtFQUluQjtFQUhBO0lBQU8sVUFBQTtJQUFZLHdCQUFBO0VBT25CO0FBQ0Y7QUFKQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7QUFNRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsMEVBQUE7QUFNRjs7QUFIQTtFQUNFLHVCQUFBO0FBTUY7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyTkFDRTtFQVlGLGdDQUFBO0FBTkY7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsU0FBQTtBQVBGOztBQVVBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMENBQUE7QUFQRjs7QUFVQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Es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SUFBZ0IsaUJBQUE7RUFnQ2hCO0VBOUJBO0lBQVcsbUJBQUE7RUFpQ1g7RUEvQkE7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsUUFBQTtFQWlDRjtBQUNGO0FBOUJBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsaUJBQUE7RUFnQ0Y7RUE5QkE7SUFDRSxpQkFBQTtJQUNBLFNBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0VBZ0NGO0VBOUJBO0lBQ0UsZUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQWdDRjtFQTlCQTtJQUNFLGlDQUFBO0VBZ0NGO0VBOUJBO0lBQ0UsbUJBQUE7SUFDQSxTQUFBO0VBZ0NGO0VBN0JBO0lBQWdCLGVBQUE7SUFBaUIsU0FBQTtFQWlDakM7RUFoQ0E7SUFBaUIsZUFBQTtJQUFpQiwyQkFBQTtFQW9DbEM7RUFuQ0E7SUFBYyxhQUFBO0VBc0NkO0VBckNBO0lBQWUsV0FBQTtFQXdDZjtFQXRDQTtJQUFnQixpQkFBQTtFQXlDaEI7RUF4Q0E7SUFBWSxpQkFBQTtFQTJDWjtFQXpDQTtJQUFjLG1CQUFBO0lBQXFCLGNBQUE7RUE2Q25DO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogI2Y3ZjNlYzs7XG4gIGNvbG9yOiAjMWMyNTMzO1xuICBmb250LWZhbWlseTogJ091dGZpdCcsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4vLyBQQUdFIEVOVEVSXG4ucGFnZS1lbnRlciB7XG4gIGFuaW1hdGlvbjogcGFnZUluIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgcGFnZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNHB4KTsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBDSU5FTUFUSUMgSEVSTyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5oZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDYwcHg7XG4gIGhlaWdodDogY2xhbXAoNDYwcHgsIDUwdmgsIDU2MHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MTUwYztcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQ4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uaGVyby1tZWRpYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZXJvLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlciAzNiU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4ycyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKSwgZmlsdGVyIDAuOHMgZWFzZTtcbn1cblxuLmhlcm86aG92ZXIgLmhlcm8taW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzNSk7XG59XG5cbi5oZXJvLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOlxuICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE4MGRlZyxcbiAgICAgIHJnYmEoNiwgMTYsIDEwLCAwLjcyKSAwJSxcbiAgICAgIHJnYmEoNiwgMTYsIDEwLCAwLjE4KSAyOCUsXG4gICAgICByZ2JhKDUsIDE0LCA4LCAwLjQ1KSA1OCUsXG4gICAgICByZ2JhKDQsIDEyLCA3LCAwLjk1KSAxMDAlXG4gICAgKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoXG4gICAgICBjaXJjbGUgYXQgODUlIDE1JSxcbiAgICAgIHJnYmEoMzQsIDE5NywgOTQsIDAuMTIpLFxuICAgICAgdHJhbnNwYXJlbnQgNTUlXG4gICAgKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzIGVhc2U7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBIRVJPIFRPUCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5oZXJvLXRvcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNnB4IGNsYW1wKDIwcHgsIDV2dywgNjRweCk7XG4gIGdhcDogMTZweDtcbn1cblxuLmhlcm8tYnJlYWRjcnVtYi1waWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwLCAyMiwgMTQsIDAuNjIpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTRweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE0cHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIGZvbnQ6IDUwMCAxM3B4ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4uaGVyby1jcnVtYi1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udDogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjNGFkZTgwO1xuICB9XG59XG5cbi5oZXJvLWNydW1iLWhvbWUge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBjb2xvcjogIzRhZGU4MDtcbn1cblxuLmhlcm8tY3J1bWItc2VwIHtcbiAgY29sb3I6IHJnYmEoNzQsIDIyMiwgMTI4LCAwLjc1KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLmhlcm8tY3J1bWItaXRlbSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODIpO1xufVxuXG4uaGVyby1jcnVtYi1hY3RpdmUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmhlcm8tc2Vhc29uLXBpbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAsIDIyLCAxNCwgMC42Mik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNHB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTRweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzQsIDIyMiwgMTI4LCAwLjM1KTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHBhZGRpbmc6IDZweCAxNHB4O1xuICBmb250OiA2MDAgMTJweCAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIGNvbG9yOiAjYmJmN2QwO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnNlYXNvbi1kb3Qge1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMjJjNTVlO1xuICBib3gtc2hhZG93OiAwIDAgOHB4ICMyMmM1NWU7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBIRVJPIE1BSU4gQk9EWSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5oZXJvLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgYXV0bztcbiAgZ2FwOiAzNnB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDAgY2xhbXAoMjBweCwgNXZ3LCA2NHB4KSAzNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmhlcm8tY29udGVudCB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEJBREdFUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5oZXJvLWJhZGdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA5cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbi5oZXJvLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBwYWRkaW5nOiA2cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQ6IDcwMCAxMXB4LzEgJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5iYWRnZS1kb3Qge1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XG4gIGJveC1zaGFkb3c6IDAgMCA2cHggY3VycmVudENvbG9yO1xufVxuXG4uYmFkZ2UtZmVhdHVyZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyLCAxMDEsIDUyLCAwLjg4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NCwgMjIyLCAxMjgsIDAuNDUpO1xuICBjb2xvcjogI2JiZjdkMDtcbn1cblxuLmJhZGdlLXRyYWlsIHtcbiAgYmFja2dyb3VuZDogcmdiYSg0LCAxMjAsIDg3LCAwLjQ1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1MiwgMjExLCAxNTMsIDAuMzUpO1xuICBjb2xvcjogIzZlZTdiNztcbn1cblxuLmJhZGdlLXBlcm1pdHMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyNSwgMTgsIDAuNjUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjIpO1xuICBjb2xvcjogI2YzZjRmNjtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFRJVExFIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmhlcm8tdGl0bGUge1xuICBtYXJnaW46IDAgMCAxNnB4O1xuICBmb250OiA4MDAgY2xhbXAoMzJweCwgNC40dncsIDU0cHgpIC8gMS4wNiAnUGxheWZhaXIgRGlzcGxheScsIEdlb3JnaWEsIHNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtc2hhZG93OiAwIDRweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC43KSwgMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gIG1heC13aWR0aDogOTAwcHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBNRVRBIENISVBTIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmhlcm8tbWV0YS1jaGlwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaGVyby1jaGlwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogN3B4O1xuICBwYWRkaW5nOiA2cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAsIDI0LCAxNSwgMC41OCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNik7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpO1xuICBmb250OiA1MDAgMTNweCAnQmFybG93Jywgc2Fucy1zZXJpZjtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGNvbG9yOiAjNGFkZTgwO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNSwgMzUsIDIyLCAwLjc1KTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yOCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBIRVJPIFNUQVQgQ0FSRCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5oZXJvLXN0YXQtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxOHB4IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAsIDI4LCAxNiwgMC44KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NCwgMjIyLCAxMjgsIDAuMzIpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uaGVyby1zdGF0LXB1bHNlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zdGF0LXB1bHNlLXJpbmcge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyMmM1NWU7XG4gIG9wYWNpdHk6IDAuNDU7XG4gIGFuaW1hdGlvbjogdGRQdWxzZVBpbmcgMnMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSkgaW5maW5pdGU7XG59XG5cbi5zdGF0LXB1bHNlLWNvcmUge1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMjJjNTVlO1xuICBib3gtc2hhZG93OiAwIDAgOHB4ICMyMmM1NWU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMi41cHg7XG59XG5cbi5zdGF0LXB1bHNlLWxhYmVsIHtcbiAgZm9udDogNzAwIDExcHggJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICBjb2xvcjogIzRhZGU4MDtcbn1cblxuQGtleWZyYW1lcyB0ZFB1bHNlUGluZyB7XG4gIDc1JSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjQpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLmhlcm8tc3RhdC1udW1iZXIge1xuICBmb250OiA4MDAgMzZweC8xICdQbGF5ZmFpciBEaXNwbGF5JywgR2VvcmdpYSwgc2VyaWY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDZweCAwIDJweDtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uaGVyby1zdGF0LWRlc2Mge1xuICBmb250OiA2MDAgMTJweCAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGNvbG9yOiAjYmJmN2QwO1xufVxuXG4uaGVyby1zdGF0LXBlcmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQ6IDUwMCAxMXB4ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4KTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQ09OVFJPTCBCQVIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uY29udHJvbC1iYXIge1xuICBiYWNrZ3JvdW5kOiAjMGYyNDE3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgNnZ3O1xuICBnYXA6IDE2cHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbn1cblxuLmNvbnRyb2wtbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogMTRweCAwO1xufVxuXG4udHJlay1jb3VudC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgY29sb3I6ICNhNGI4Yzg7XG5cbiAgc3Ryb25nIHsgY29sb3I6ICNmMGU4ZDg7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbn1cblxuLmNvbnRyb2wtbW9udGgge1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIGNvbG9yOiAjZTA3YTUyO1xufVxuXG4uZGl2aWRlci12IHtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG59XG5cbi5jb250cm9sLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uc29ydC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBjb2xvcjogIzZlODM5ODtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnNvcnQtc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICBjb2xvcjogI2Y4YjQyYztcbiAgZm9udC1mYW1pbHk6ICdPdXRmaXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIHBhZGRpbmc6IDZweCAyOHB4IDZweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PScwIDAgMTIgMTInJTNFJTNDcGF0aCBmaWxsPSclMjNhNGI4YzgnIGQ9J002IDhMMSAzaDEweicvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgOHB4IGNlbnRlcjtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEVSUk9SIEFMRVJUIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmVycm9yLWFsZXJ0IHtcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gIG1hcmdpbjogMTZweCBhdXRvO1xuICBwYWRkaW5nOiAwIDZ2dztcbn1cblxuLmFsZXJ0LWlubmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxNjgsNTAsNTAsMC4wOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY4LDUwLDUwLDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6ICNhODMyMzI7XG59XG5cbi5yZXRyeS1idG4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhODMyMzI7XG4gIGNvbG9yOiAjYTgzMjMyO1xuICBmb250LWZhbWlseTogJ091dGZpdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiA1cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycywgY29sb3IgMC4ycztcblxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2E4MzIzMjsgY29sb3I6ICNmZmY7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFlFQVIgTkFWIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnllYXItbmF2IHtcbiAgYmFja2dyb3VuZDogIzE0MjgxZDtcbiAgcGFkZGluZzogMjBweCA2dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDI4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xufVxuXG4ueWVhci1idG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEyKTtcbiAgY29sb3I6ICNhNGI4Yzg7XG4gIGZvbnQtZmFtaWx5OiAnU3luZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG4gICY6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcbiAgICBjb2xvcjogI2YwZThkODtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICB9XG5cbiAgJltkaXNhYmxlZF0geyBvcGFjaXR5OiAwLjM1OyBjdXJzb3I6IGRlZmF1bHQ7IH1cbn1cblxuLnllYXItY3VycmVudCB7XG4gIGZvbnQtZmFtaWx5OiAnU3luZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogI2YwZThkODtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDE2cHg7XG5cbiAgJjo6YmVmb3JlLCAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAyMHB4OyBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MCwyMzIsMjE2LDAuMTgpO1xuICB9XG5cbiAgJjo6YmVmb3JlIHsgcmlnaHQ6IDEwMCU7IH1cbiAgJjo6YWZ0ZXIgIHsgbGVmdDogIDEwMCU7IH1cbn1cblxuLnllYXItZHJvcGRvd24td3JhcCB7XG4gIGJhY2tncm91bmQ6ICMyYzNkMzM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIE1PTlRIIFRBQlMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubW9udGgtdGFicyB7XG4gIGJhY2tncm91bmQ6ICMyYzNkMzM7XG4gIHBhZGRpbmc6IDAgNnZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7IGRpc3BsYXk6IG5vbmU7IH1cbn1cblxuLm1vbnRoLXRhYiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgZm9udC1mYW1pbHk6ICdPdXRmaXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycywgYm9yZGVyLWNvbG9yIDAuMnM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICY6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHsgY29sb3I6ICNhNGI4Yzg7IH1cblxuICAmLmFjdGl2ZSB7XG4gICAgY29sb3I6ICNmNWIyMmQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2MyNjAzYTtcbiAgfVxuXG4gICZbZGlzYWJsZWRdIHsgY3Vyc29yOiBkZWZhdWx0OyBvcGFjaXR5OiAwLjQ7IH1cbn1cblxuLm1vbnRoLWNvdW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSgxOTQsOTYsNTgsMC4yKTtcbiAgY29sb3I6ICNlMDdhNTI7XG4gIGZvbnQtc2l6ZTogMC42MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAuYWN0aXZlICYge1xuICAgIGJhY2tncm91bmQ6ICNjMjYwM2E7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIENPTlRFTlQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uY29udGVudCB7XG4gIG1heC13aWR0aDogMTEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCA2dncgODBweDtcbn1cblxuLm1vbnRoLWhlYWRlciB7XG4gIHBhZGRpbmc6IDQwcHggMCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjgsIDM3LCA1MSwgMC4wOCk7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLm1vbnRoLWhlYWRpbmcge1xuICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxYzI1MzM7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuXG4gIHNwYW4geyBjb2xvcjogI2MyNjAzYTsgfVxufVxuXG4ubW9udGgtc3ViIHtcbiAgY29sb3I6ICM2ZTgzOTg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbn1cblxuLy8gVEFCTEUgSEVBREVSXG4udGFibGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNjBweCAxZnIgMTMwcHggMTYwcHg7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDAuNjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE2ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjNmU4Mzk4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyOCwgMzcsIDUxLCAwLjA4KTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHsgZGlzcGxheTogbm9uZTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgVFJFSyBST1cgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udHJlay1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2MHB4IDFmciAxMzBweCAxNjBweDtcbiAgZ2FwOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI4LCAzNywgNTEsIDAuMDgpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHBhZGRpbmctbGVmdCAwLjI1cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtNnZ3OyByaWdodDogLTZ2dztcbiAgICB0b3A6IDA7IGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MCwyMzIsMjE2LDAuNTIpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG5cbiAgICAmOjpiZWZvcmUgeyBvcGFjaXR5OiAxOyB9XG5cbiAgICAudHJlay10aHVtYiBpbWcgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpOyB9XG4gICAgLmJ0bi1hcnJvdyB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpOyB9XG4gIH1cblxuICAmLnNvbGQtb3V0IHtcbiAgICBvcGFjaXR5OiAwLjQ4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAmOmhvdmVyIHsgcGFkZGluZy1sZWZ0OiAwOyAmOjpiZWZvcmUgeyBvcGFjaXR5OiAwOyB9IH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMTJweDtcbiAgICBwYWRkaW5nOiAxOHB4IDA7XG5cbiAgICAuY29sLWRhdGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAuZHVyYXRpb24tdGFnIHsgbWFyZ2luLXRvcDogMDsgfVxuICAgIH1cblxuICAgIC5jb2wtcHJpY2Uge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI4LCAzNywgNTEsIDAuMDgpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBEQVRFIENPTFxuLmNvbC1kYXRlIHtcbiAgLmRhdGUtbWFpbiB7XG4gICAgZm9udC1mYW1pbHk6ICdTeW5lJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzFjMjUzMztcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICB9XG5cbiAgLmRhdGUtdGltZSB7XG4gICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgIGNvbG9yOiAjNmU4Mzk4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgfVxuXG4gIC5kdXJhdGlvbi10YWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA0cHg7XG4gICAgYmFja2dyb3VuZDogIzFjMjUzMztcbiAgICBjb2xvcjogI2E0YjhjODtcbiAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxufVxuXG4vLyBUUkVLIElORk8gQ09MXG4uY29sLXRyZWsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50cmVrLXRodW1iIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiA4MnB4O1xuICBoZWlnaHQ6IDY2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNDVzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4udHJlay1pbmZvLXRleHQge1xuICBoMyB7XG4gICAgZm9udC1mYW1pbHk6ICdTeW5lJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzFjMjUzMztcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuXG4udHJlay1sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC43NHJlbTtcbiAgY29sb3I6ICM2ZTgzOTg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLmNhdGVnb3J5LXRhZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogcmdiYSgyOCwzNyw1MSwwLjA3KTtcbiAgY29sb3I6ICMzZDRmNjM7XG4gIGZvbnQtc2l6ZTogMC42MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi8vIFNUQVRVUyBDT0xcbi5jb2wtc3RhdHVzIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uc3RhdHVzLWJhZGdlIHtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5zdGF0dXMtYXZhaWxhYmxlIHsgYmFja2dyb3VuZDogcmdiYSg0NSwxMDYsNzksMC4xKTsgIGNvbG9yOiAjMmQ2YTRmOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ1LDEwNiw3OSwwLjIyKTsgIH1cbi5zdGF0dXMtZmFzdCAgICAgIHsgYmFja2dyb3VuZDogcmdiYSgyMTIsMTQ1LDU4LDAuMSk7IGNvbG9yOiAjYjg3MzJhOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwxNDUsNTgsMC4yMik7IH1cbi5zdGF0dXMtbGFzdCAgICAgIHsgYmFja2dyb3VuZDogcmdiYSgxNjgsNTAsNTAsMC4xKTsgIGNvbG9yOiAjYTgzMjMyOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2OCw1MCw1MCwwLjIyKTsgIH1cbi5zdGF0dXMtc29sZG91dCAgIHsgYmFja2dyb3VuZDogcmdiYSgxMTAsMTMxLDE1MiwwLjA4KTsgY29sb3I6ICM2ZTgzOTg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTEwLDEzMSwxNTIsMC4xOCk7IH1cblxuLy8gUFJJQ0UgQ09MXG4uY29sLXByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBnYXA6IDhweDtcbn1cblxuLnByaWNlLWFtb3VudCB7XG4gIGZvbnQtZmFtaWx5OiAnU3luZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzFjMjUzMztcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5wcmljZS1wZXIge1xuICBmb250LXNpemU6IDAuNjZyZW07XG4gIGNvbG9yOiAjNmU4Mzk4O1xuICBtYXJnaW4tdG9wOiAtNHB4O1xufVxuXG4udmlldy1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG4gIGZvbnQtZmFtaWx5OiAnT3V0Zml0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycywgdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBib3gtc2hhZG93IDAuMnM7XG5cbiAgJi5hdmFpbGFibGUge1xuICAgIGJhY2tncm91bmQ6ICNjMjYwM2E7XG4gICAgY29sb3I6ICNmZmY7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMDdhNTI7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTk0LDk2LDU4LDAuMyk7XG4gICAgfVxuICB9XG5cbiAgJi5zb2xkb3V0IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExMCwxMzEsMTUyLDAuMSk7XG4gICAgY29sb3I6ICM2ZTgzOTg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG5cbiAgLmJ0bi1hcnJvdyB7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgTE9BREVSIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmxvYWRlci13cmFwcGVyIHtcbiAgbWluLWhlaWdodDogNTV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuLmxvYWRlci1iYXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuXG4ubG9hZGVyLWJhciB7XG4gIHdpZHRoOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogI2MyNjAzYTtcbiAgYW5pbWF0aW9uOiBiYXJCb3VuY2UgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG5cbiAgJjpudGgtY2hpbGQoMSkgeyBhbmltYXRpb24tZGVsYXk6IDBzOyAgICBoZWlnaHQ6IDE2cHg7IH1cbiAgJjpudGgtY2hpbGQoMikgeyBhbmltYXRpb24tZGVsYXk6IDAuMTJzOyBoZWlnaHQ6IDI4cHg7IH1cbiAgJjpudGgtY2hpbGQoMykgeyBhbmltYXRpb24tZGVsYXk6IDAuMjRzOyBoZWlnaHQ6IDIwcHg7IH1cbiAgJjpudGgtY2hpbGQoNCkgeyBhbmltYXRpb24tZGVsYXk6IDAuMzZzOyBoZWlnaHQ6IDM0cHg7IH1cbiAgJjpudGgtY2hpbGQoNSkgeyBhbmltYXRpb24tZGVsYXk6IDAuNDhzOyBoZWlnaHQ6IDIycHg7IH1cbn1cblxuQGtleWZyYW1lcyBiYXJCb3VuY2Uge1xuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDAuMjsgdHJhbnNmb3JtOiBzY2FsZVkoMC42KTsgfVxuICA1MCUgICAgICAgeyBvcGFjaXR5OiAxOyAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7IH1cbn1cblxuLmxvYWRlci10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjY4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4yMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzZlODM5ODtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEVNUFRZIFNUQVRFIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmVtcHR5LXN0YXRlIHtcbiAgcGFkZGluZzogODBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLmVtcHR5LWljb24ge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBvcGFjaXR5OiAwLjE1O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1mYW1pbHk6ICdTeW5lJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMWMyNTMzO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gIHAgeyBjb2xvcjogIzZlODM5ODsgZm9udC1zaXplOiAwLjg1cmVtOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBCT1RUT00gQ1RBIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmJvdHRvbS1jdGEge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiAwIGF1dG8gODBweDtcbiAgcGFkZGluZzogMCA2dnc7XG59XG5cbi5jdGEtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICMxNDI4MWQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzMnB4O1xuICBwYWRkaW5nOiA0MHB4IDQ4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtNDBweDsgdG9wOiAtNDBweDtcbiAgICB3aWR0aDogMjQwcHg7IGhlaWdodDogMjQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogNDBweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDI1KTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIHBhZGRpbmc6IDMycHggMjRweDtcbiAgICBnYXA6IDI0cHg7XG4gIH1cbn1cblxuLmN0YS1leWVicm93IHtcbiAgZm9udC1zaXplOiAwLjY4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZTA3YTUyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY3RhLWhlYWRpbmcge1xuICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmMGU4ZDg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmN0YS1ib2R5IHtcbiAgY29sb3I6ICNhNGI4Yzg7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbn1cblxuLmN0YS1idG4ge1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZDogI2MyNjAzYTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiAnT3V0Zml0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDE0cHggMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMsIHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgYm94LXNoYWRvdyAwLjJzO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlMDdhNTI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI4cHggcmdiYSgxOTQsOTYsNTgsMC40KTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkgeyB3aWR0aDogMTAwJTsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5oZXJvLXRvcCB7IHBhZGRpbmc6IDIwcHggNHZ3OyB9XG4gIC5oZXJvLWJvZHkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMjRweDtcbiAgICBwYWRkaW5nOiAwIDR2dyAyOHB4O1xuICB9XG4gIC5oZXJvLXN0YXQtY2FyZCB7IHdpZHRoOiAxMDAlOyB9XG5cbiAgLmNvbnRyb2wtYmFyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogNnB4IDR2dztcbiAgfVxuXG4gIC5jb250cm9sLWxlZnQsXG4gIC5jb250cm9sLXJpZ2h0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAueWVhci1uYXYge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDE2cHg7XG4gICAgcGFkZGluZzogMTZweCA0dnc7XG4gIH1cblxuICAueWVhci1jdXJyZW50IHsgZm9udC1zaXplOiAxLjNyZW07IH1cblxuICAuY29udGVudCB7IHBhZGRpbmc6IDAgNHZ3IDY0cHg7IH1cblxuICAubW9udGgtaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogNnB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVybyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDQ4MHB4O1xuICB9XG4gIC5oZXJvLXRvcCB7XG4gICAgcGFkZGluZzogMTZweCA0dnc7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLmhlcm8tYnJlYWRjcnVtYi1waWxsIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICB9XG4gIC5oZXJvLXRpdGxlIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDI2cHgsIDh2dywgMzZweCk7XG4gIH1cbiAgLmhlcm8tYm9keSB7XG4gICAgcGFkZGluZzogMCA0dncgMjRweDtcbiAgICBnYXA6IDIwcHg7XG4gIH1cblxuICAuY29udHJvbC1sZWZ0IHsgZmxleC13cmFwOiB3cmFwOyBnYXA6IDEwcHg7IH1cbiAgLmNvbnRyb2wtcmlnaHQgeyBmbGV4LXdyYXA6IHdyYXA7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAuc29ydC1sYWJlbCB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLnNvcnQtc2VsZWN0IHsgd2lkdGg6IDEwMCU7IH1cblxuICAueWVhci1jdXJyZW50IHsgZm9udC1zaXplOiAxLjFyZW07IH1cbiAgLnllYXItYnRuIHsgcGFkZGluZzogN3B4IDE0cHg7IH1cblxuICAuYm90dG9tLWN0YSB7IG1hcmdpbjogMCBhdXRvIDYwcHg7IHBhZGRpbmc6IDAgNHZ3OyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ },

/***/ 9565
/*!************************************************!*\
  !*** ./src/app/upcomingtours/upcomingtours.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Upcomingtours: () => (/* binding */ Upcomingtours)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _core_encryption_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/encryption.service */ 3242);
var _staticBlock;







class Upcomingtours {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.baseUrl}`;
  }
  /**
   * Get all treks with filters
   */
  getTreks(filters) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (filters) {
      if (filters.year) params = params.set('year', filters.year.toString());
      if (filters.month) params = params.set('month', filters.month.toString());
      if (filters.category) params = params.set('category', filters.category);
      if (filters.sort) params = params.set('sort', filters.sort);
      if (filters.status) params = params.set('status', filters.status);
    }
    return this.http.get(this.apiUrl, {
      params
    });
  }
  getTrekById(id) {
    const trekId = String(id ?? "").trim();
    if (!trekId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('Invalid trek ID'));
    }
    return this.http.get(`${this.apiUrl}/${trekId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      try {
        if (res && res.data) {
          const decrypted = this.crypto.decrypt(res.data);
          // Backend now returns { success: true, trek: {...} }
          if (decrypted?.success && decrypted.trek) {
            return {
              success: true,
              data: decrypted.trek
            };
          }
          return decrypted;
        }
        return res;
      } catch (error) {
        console.error('Decryption error in getTrekById:', error);
        throw new Error('Failed to decrypt trek details');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error(`Get trek by ID ${id} error:`, error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  getTreksByMonth(year, month) {
    if (!year || !month || month < 1 || month > 12) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('Invalid year or month'));
    }
    return this.http.get(`${this.apiUrl}/by-month/${year}/${month}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      try {
        if (!response || !response.data) {
          return [];
        }
        const decrypted = this.crypto.decrypt(response.data);
        if (decrypted?.success && Array.isArray(decrypted.treks)) {
          return decrypted.treks.map(trek => this.formatTrekForList(trek)).filter(trek => !!trek);
        }
        return [];
      } catch (error) {
        console.error('Decryption error in getTreksByMonth:', error);
        return [];
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error(`Get treks by month ${year}/${month} error:`, error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  getAllTreksFormatted(year) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('status', 'active');
    if (year) {
      params = params.set('year', year.toString());
    }
    return this.http.get(this.apiUrl, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      const decrypted = this.crypto.decrypt(response.data);
      if (!decrypted?.success || !decrypted.treks) return [];
      const formatted = [];
      decrypted.treks.forEach(trek => {
        if (trek.batches?.length) {
          trek.batches.forEach(batch => {
            const item = this.formatTrekWithBatch(trek, batch);
            if (item) {
              formatted.push(item);
            }
          });
        }
      });
      return formatted;
    }));
  }
  getAvailableYears() {
    return this.http.get(`${this.apiUrl}/meta/available-years`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      try {
        if (res && res.data) {
          const decrypted = this.crypto.decrypt(res.data);
          return {
            success: decrypted?.success || false,
            years: decrypted?.years || [],
            count: decrypted?.count || 0
          };
        }
        return {
          success: false,
          years: [],
          count: 0
        };
      } catch (error) {
        console.error('Decryption error in getAvailableYears:', error);
        throw new Error('Failed to decrypt available years');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Get available years error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  getMonthlyStats(year) {
    if (!year || year < 2000 || year > 2100) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('Invalid year'));
    }
    return this.http.get(`${this.apiUrl}/stats/monthly/${year}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      try {
        if (res && res.data) {
          const decrypted = this.crypto.decrypt(res.data);
          return {
            success: decrypted?.success || false,
            year: decrypted?.year || year,
            months: decrypted?.months || []
          };
        }
        return {
          success: false,
          year,
          months: []
        };
      } catch (error) {
        console.error('Decryption error in getMonthlyStats:', error);
        throw new Error('Failed to decrypt monthly stats');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error(`Get monthly stats for ${year} error:`, error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  getCategories() {
    return this.http.get(`${this.apiUrl}/meta/categories`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      try {
        if (res && res.data) {
          const decrypted = this.crypto.decrypt(res.data);
          return {
            success: decrypted?.success || false,
            categories: decrypted?.categories || [],
            count: decrypted?.count || 0
          };
        }
        return {
          success: false,
          categories: [],
          count: 0
        };
      } catch (error) {
        console.error('Decryption error in getCategories:', error);
        throw new Error('Failed to decrypt categories');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Get categories error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  formatTrekForList(trek) {
    if (!trek || String(trek.status || '').toLowerCase() !== 'active') {
      return null;
    }
    const startDate = new Date(trek.start_date);
    return {
      id: trek.id,
      trek_uuid: trek.uuid || trek.trek_uuid || trek.trekUuid || undefined,
      cacheKey: trek.updated_at || trek.created_at || trek.id,
      name: trek.name,
      location: trek.location,
      date: this.formatDate(startDate),
      time: this.extractTime(trek.start_date),
      duration: trek.duration || this.calculateDuration(trek.start_date, trek.end_date),
      price: parseFloat(trek.price),
      image: trek.cover_image || 'assets/default-trek.jpg',
      status: trek.batch_status,
      category: trek.category,
      batch_id: trek.batch_id,
      batch_public_ref: trek.batch_public_ref || undefined,
      start_date: trek.start_date,
      end_date: trek.end_date
    };
  }
  /**
   * Format trek with batch info
   */
  formatTrekWithBatch(trek, batch) {
    if (!batch || String(batch.status || '').toLowerCase() !== 'active') {
      return null;
    }
    const startDate = new Date(batch.start_date);
    return {
      id: trek.id,
      trek_uuid: trek.uuid || trek.trek_uuid || trek.trekUuid || batch?.trek_uuid || undefined,
      cacheKey: trek.updated_at || trek.created_at || batch.updated_at || batch.created_at || trek.id,
      name: trek.name,
      location: trek.location,
      date: this.formatDate(startDate),
      time: this.extractTime(batch.start_date),
      duration: batch.duration || this.calculateDuration(batch.start_date, batch.end_date),
      price: parseFloat(batch.price),
      image: trek.cover_image || 'assets/default-trek.jpg',
      status: batch.batch_status,
      category: trek.category,
      batch_id: batch.id,
      batch_public_ref: batch.public_ref || undefined,
      start_date: batch.start_date,
      end_date: batch.end_date
    };
  }
  /**
   * Format date as "DD MMM"
   */
  formatDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${date.getDate()} ${months[date.getMonth()]}`;
  }
  /**
   * Extract time from datetime string
   */
  extractTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${displayMinutes} ${period}`;
  }
  /**
   * Calculate duration between two dates
   */
  calculateDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      return '1 Day';
    } else if (diffDays < 1) {
      const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
      return `${diffHours} Hours`;
    } else {
      return `${diffDays} Days`;
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function Upcomingtours_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Upcomingtours)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_encryption_service__WEBPACK_IMPORTED_MODULE_6__.EncryptionService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: Upcomingtours,
    factory: Upcomingtours.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_upcomingtours_tours-module_ts.js.map