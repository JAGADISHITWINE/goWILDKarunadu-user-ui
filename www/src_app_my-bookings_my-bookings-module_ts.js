"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_my-bookings_my-bookings-module_ts"],{

/***/ 8206
/*!***************************************************!*\
  !*** ./src/app/my-bookings/my-bookings-module.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBookingsModule: () => (/* binding */ MyBookingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _my_bookings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-bookings.component */ 6516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: '',
  component: _my_bookings_component__WEBPACK_IMPORTED_MODULE_3__.MyBookingsComponent
}];
class MyBookingsModule {
  static #_ = _staticBlock = () => (this.ɵfac = function MyBookingsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MyBookingsModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: MyBookingsModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _my_bookings_component__WEBPACK_IMPORTED_MODULE_3__.MyBookingsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MyBookingsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _my_bookings_component__WEBPACK_IMPORTED_MODULE_3__.MyBookingsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ },

/***/ 6516
/*!******************************************************!*\
  !*** ./src/app/my-bookings/my-bookings.component.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBookingsComponent: () => (/* binding */ MyBookingsComponent)
/* harmony export */ });
/* harmony import */ var _var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _my_bookings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-bookings */ 6565);
/* harmony import */ var _auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth/auth-modal.service */ 2454);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var src_app_core_token_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/token.service */ 6280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 5430);
/* harmony import */ var _core_public_route_id_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/public-route-id.service */ 2440);
/* harmony import */ var _core_media_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/media.service */ 6657);
/* harmony import */ var _core_trek_operations_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/trek-operations.service */ 3046);
/* harmony import */ var _core_site_settings_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/site-settings.service */ 1662);

var _staticBlock;

















const _c0 = () => [1, 2, 3];
const _c1 = () => [1, 2, 3, 4, 5];
function MyBookingsComponent_section_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 20)(1, "div", 21)(2, "div", 22)(3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Official Trail Clearance & Bookings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Welcome back, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Trail Explorer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Access your digital basecamp trek passes, summit certificates, carpool rides, and settlement receipts. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 27)(13, "div", 28)(14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 31)(17, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Upcoming Treks");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 28)(22, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 31)(25, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Summits Conquered");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 28)(30, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 31)(33, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Total Expeditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 28)(38, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "\u20B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 31)(41, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](43, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Total Invested");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.upcomingTrips);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.completedTrips);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.totalBookings);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](43, 4, ctx_r0.totalSpent, "1.0-0"));
  }
}
function MyBookingsComponent_div_19_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.upcomingBookings.length);
  }
}
function MyBookingsComponent_div_19_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.pastBookings.length);
  }
}
function MyBookingsComponent_div_19_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.cancelledBookings.length);
  }
}
function MyBookingsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_19_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.switchTab("upcoming"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Upcoming ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, MyBookingsComponent_div_19_span_6_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_19_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.switchTab("past"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Past Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, MyBookingsComponent_div_19_span_11_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_19_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.switchTab("cancelled"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, MyBookingsComponent_div_19_span_16_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.activeTab === "upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.upcomingBookings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.activeTab === "past");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.pastBookings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.activeTab === "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.cancelledBookings.length);
  }
}
function MyBookingsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 48)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Unable to load bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_20_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.loadBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Try Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function MyBookingsComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 57)(4, "div", 58)(5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function MyBookingsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MyBookingsComponent_div_21_div_1_Template, 6, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
function MyBookingsComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 64)(1, "div", 65)(2, "h3", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r0.currentBookings.length, " active record", ctx_r0.currentBookings.length > 1 ? "s" : "");
  }
}
function MyBookingsComponent_div_22_article_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r0.getDaysUntilTrek(booking_r5.start_date), " Days Left ");
  }
}
function MyBookingsComponent_div_22_article_2_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "30% Deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_22_article_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, booking_r5.payment_status));
  }
}
function MyBookingsComponent_div_22_article_2_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 91)(1, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Deposit Paid / Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "strong", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" Paid \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 2, booking_r5.amount_paid, "1.0-0"), " \u00B7 Due \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](6, 5, ctx_r0.getBalanceDue(booking_r5), "1.0-0"), " ");
  }
}
function MyBookingsComponent_div_22_article_2_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 91)(1, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Clearance Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "strong", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "100% Paid \u00B7 Forest Permit Cleared ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function MyBookingsComponent_div_22_article_2_div_48_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const addon_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", addon_r6.addon_name, " \u00D7 ", addon_r6.quantity, " ");
  }
}
function MyBookingsComponent_div_22_article_2_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MyBookingsComponent_div_22_article_2_div_48_span_1_Template, 3, 2, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", booking_r5.addons);
  }
}
function MyBookingsComponent_div_22_article_2_div_49_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const star_r7 = ctx.$implicit;
    const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("star-lit", star_r7 <= (booking_r5.user_rating || 0));
  }
}
function MyBookingsComponent_div_22_article_2_div_49_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, booking_r5.rated_at, "mediumDate"));
  }
}
function MyBookingsComponent_div_22_article_2_div_49_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 124)(1, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Lead Trek Master Reply:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](booking_r5.admin_reply);
  }
}
function MyBookingsComponent_div_22_article_2_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 116)(1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MyBookingsComponent_div_22_article_2_div_49_span_2_Template, 2, 2, "span", 118)(3, MyBookingsComponent_div_22_article_2_div_49_span_3_Template, 3, 4, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, MyBookingsComponent_div_22_article_2_div_49_div_6_Template, 6, 1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", booking_r5.rated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u201C", booking_r5.user_review, "\u201D");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", booking_r5.admin_reply);
  }
}
function MyBookingsComponent_div_22_article_2_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 127)(1, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Policy:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.getCancellationFeeMessage(booking_r5));
  }
}
function MyBookingsComponent_div_22_article_2_button_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_22_article_2_button_52_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.openTrekPass(booking_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Digital Trek Pass");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function MyBookingsComponent_div_22_article_2_button_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_22_article_2_button_53_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.openRemainderModal(booking_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Pay Balance (\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 1, ctx_r0.getBalanceDue(booking_r5), "1.0-0"), ")");
  }
}
function MyBookingsComponent_div_22_article_2_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_22_article_2_button_54_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.openSummitCertificate(booking_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Summit Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function MyBookingsComponent_div_22_article_2_button_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_22_article_2_button_55_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.openRatingModal(booking_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.hasUserRated(booking_r5) ? "Update Rating" : "Rate Experience");
  }
}
function MyBookingsComponent_div_22_article_2_button_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_22_article_2_button_56_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const booking_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.openCancelModal(booking_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function MyBookingsComponent_div_22_article_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article", 68)(1, "div", 69)(2, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("error", function MyBookingsComponent_div_22_article_2_Template_img_error_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.target.src = ctx_r0.fallbackImage);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 72)(5, "span", 73)(6, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, MyBookingsComponent_div_22_article_2_span_9_Template, 3, 1, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 76)(11, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, MyBookingsComponent_div_22_article_2_span_16_Template, 3, 0, "span", 79)(17, MyBookingsComponent_div_22_article_2_span_17_Template, 3, 3, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 80)(19, "div", 81)(20, "div", 82)(21, "h3", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 84)(24, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 87)(28, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "strong", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 90)(34, "div", 91)(35, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Expedition Dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "strong", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 91)(41, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Permitted Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "strong", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, MyBookingsComponent_div_22_article_2_div_46_Template, 7, 8, "div", 96)(47, MyBookingsComponent_div_22_article_2_div_47_Template, 6, 0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, MyBookingsComponent_div_22_article_2_div_48_Template, 2, 1, "div", 97)(49, MyBookingsComponent_div_22_article_2_div_49_Template, 7, 5, "div", 98)(50, MyBookingsComponent_div_22_article_2_div_50_Template, 7, 1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, MyBookingsComponent_div_22_article_2_button_52_Template, 5, 0, "button", 101)(53, MyBookingsComponent_div_22_article_2_button_53_Template, 6, 4, "button", 102)(54, MyBookingsComponent_div_22_article_2_button_54_Template, 5, 0, "button", 103)(55, MyBookingsComponent_div_22_article_2_button_55_Template, 5, 1, "button", 104)(56, MyBookingsComponent_div_22_article_2_button_56_Template, 5, 0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r0.resolveImageUrl(booking_r5.cover_image), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", booking_r5.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", booking_r5.booking_reference, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "upcoming" && booking_r5.booking_status !== "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r0.getStatusClass(booking_r5.booking_status));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 26, booking_r5.booking_status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r0.getPaymentStatusClass(booking_r5.payment_status));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", booking_r5.payment_status === "partial");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", booking_r5.payment_status !== "partial");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](booking_r5.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", booking_r5.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](32, 28, booking_r5.total_amount, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r0.formatDate(booking_r5.start_date), " \u2013 ", ctx_r0.formatDate(booking_r5.end_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", booking_r5.participants, " Person", (booking_r5.participants || 0) > 1 ? "s" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", booking_r5.payment_status === "partial" || booking_r5.balance_due > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", booking_r5.payment_status === "paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", booking_r5.addons == null ? null : booking_r5.addons.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", booking_r5.user_review);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "upcoming" && ctx_r0.canCancel(booking_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "upcoming" && booking_r5.booking_status !== "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.hasPendingBalance(booking_r5) && ctx_r0.activeTab === "upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "past" || booking_r5.booking_status === "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "past" && ctx_r0.canRateBooking(booking_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "upcoming" && ctx_r0.canCancel(booking_r5));
  }
}
function MyBookingsComponent_div_22_div_3_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Ready to climb the Western Ghats? Choose your next trail and secure your permit slots. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_22_div_3_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Your conquered trails and summit completion certificates will be preserved here. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_22_div_3_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " You have no cancelled expeditions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 142)(1, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h3", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, MyBookingsComponent_div_22_div_3_p_5_Template, 2, 0, "p", 145)(6, MyBookingsComponent_div_22_div_3_p_6_Template, 2, 0, "p", 145)(7, MyBookingsComponent_div_22_div_3_p_7_Template, 2, 0, "p", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 146)(9, "a", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Explore Upcoming Treks \u2192 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "a", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Trek FAQs & Help ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("No ", ctx_r0.activeTab, " adventures found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "past");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "cancelled");
  }
}
function MyBookingsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MyBookingsComponent_div_22_div_1_Template, 6, 3, "div", 61)(2, MyBookingsComponent_div_22_article_2_Template, 57, 31, "article", 62)(3, MyBookingsComponent_div_22_div_3_Template, 13, 4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.currentBookings.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.currentBookings);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.currentBookings.length === 0);
  }
}
function MyBookingsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_23_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.closeRatingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_24_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_24_button_7_Template_button_click_0_listener() {
      const star_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.setRating(star_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const star_r16 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", star_r16 <= ctx_r0.selectedRating);
  }
}
function MyBookingsComponent_div_24_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.ratingErrorMessage);
  }
}
function MyBookingsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 151)(1, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_24_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Rate Your Trek");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, MyBookingsComponent_div_24_button_7_Template, 2, 2, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "textarea", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_24_Template_textarea_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.selectedReview, $event) || (ctx_r0.selectedReview = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, MyBookingsComponent_div_24_p_9_Template, 2, 1, "p", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 158)(11, "button", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_24_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.closeRatingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_24_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.submitRating());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Submit Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.selectedBookingForRating == null ? null : ctx_r0.selectedBookingForRating.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.selectedReview);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.ratingErrorMessage);
  }
}
function MyBookingsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_25_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.closeTrekPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_26_i_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 196);
  }
}
function MyBookingsComponent_div_26_i_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 108);
  }
}
function MyBookingsComponent_div_26_div_58_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td")(9, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td")(14, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r19 = ctx.$implicit;
    const idx_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](idx_r20 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](p_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", p_r19.age || "--", " / ", p_r19.gender || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](p_r19.blood_group || "O+");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", p_r19.id_type || "Aadhaar", ": ", p_r19.id_number || "Verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("warn", p_r19.medical_condition && p_r19.medical_condition !== "None / Fit to Trek");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", p_r19.medical_condition || "Fit to Trek", " ");
  }
}
function MyBookingsComponent_div_26_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 197)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Authorized Expedition Roster");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 198)(4, "table", 199)(5, "thead")(6, "tr")(7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Age / Sex");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Blood Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Govt ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Health Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, MyBookingsComponent_div_26_div_58_tr_20_Template, 16, 10, "tr", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.selectedPassBooking == null ? null : ctx_r0.selectedPassBooking.participants_details);
  }
}
function MyBookingsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 163)(1, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_26_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 165)(3, "div", 166)(4, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "KARNATAKA ECO-TOURISM DEVELOPMENT BOARD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "EXPEDITION TREK PASS");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_26_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.closeTrekPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 171)(13, "div", 172)(14, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "img", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Scan at Basecamp Checkpoint");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 176)(19, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, MyBookingsComponent_div_26_i_20_Template, 1, 0, "i", 178)(21, MyBookingsComponent_div_26_i_21_Template, 1, 0, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 181)(27, "div", 182)(28, "span", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Trek Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "strong", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 182)(33, "span", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Expedition Dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "strong", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 182)(38, "span", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Lead Booker");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "strong", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 182)(43, "span", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Total Permitted Trekkers");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "strong", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 182)(48, "span", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Basecamp Reporting Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "strong", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "i", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 182)(54, "span", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Reporting Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "strong", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "05:30 AM IST (Ascent Day)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, MyBookingsComponent_div_26_div_58_Template, 21, 1, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 188)(60, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "i", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, " Physical govt ID verification mandatory at entry gate.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "i", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, " Single-use plastic bottles prohibited inside sanctuary zones.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 192)(67, "button", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_26_Template_button_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.printTrekPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](68, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, " Print / Download Pass ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_26_Template_button_click_70_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.closeTrekPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Pass ID: ", ctx_r0.selectedPassBooking == null ? null : ctx_r0.selectedPassBooking.booking_reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r0.getQrCodeUrl(ctx_r0.selectedPassBooking), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("verified", (ctx_r0.selectedPassBooking == null ? null : ctx_r0.selectedPassBooking.payment_status) === "paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r0.selectedPassBooking == null ? null : ctx_r0.selectedPassBooking.payment_status) === "paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r0.selectedPassBooking == null ? null : ctx_r0.selectedPassBooking.payment_status) !== "paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r0.selectedPassBooking == null ? null : ctx_r0.selectedPassBooking.payment_status) === "paid" ? "Permit Cleared" : "Payment Pending", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("AUTH-HASH: GWK-", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 16, ctx_r0.selectedPassBooking == null ? null : ctx_r0.selectedPassBooking.id == null ? null : ctx_r0.selectedPassBooking.id.slice(0, 8)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.selectedPassBooking == null ? null : ctx_r0.selectedPassBooking.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r0.formatDate(ctx_r0.selectedPassBooking == null ? null : ctx_r0.selectedPassBooking.start_date), " \u2013 ", ctx_r0.formatDate(ctx_r0.selectedPassBooking == null ? null : ctx_r0.selectedPassBooking.end_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r0.selectedPassBooking == null ? null : ctx_r0.selectedPassBooking.customer_name) || "Primary Trekker");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r0.selectedPassBooking == null ? null : ctx_r0.selectedPassBooking.participants, " Person", ((ctx_r0.selectedPassBooking == null ? null : ctx_r0.selectedPassBooking.participants) || 0) > 1 ? "s" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.selectedPassBooking == null ? null : ctx_r0.selectedPassBooking.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.selectedPassBooking == null ? null : ctx_r0.selectedPassBooking.participants_details == null ? null : ctx_r0.selectedPassBooking.participants_details.length);
  }
}
function MyBookingsComponent_div_27_div_13_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r22.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r22.sac);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 3, item_r22.amount, "1.2-2"));
  }
}
function MyBookingsComponent_div_27_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 171)(1, "div", 212)(2, "div", 213)(3, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Invoice Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Invoice No:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div")(15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "GSTIN:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div")(19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "KEDB License:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 213)(23, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Billed To");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div")(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 215)(33, "table", 216)(34, "thead")(35, "tr")(36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Service Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "SAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "th", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Amount (INR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, MyBookingsComponent_div_27_div_13_tr_43_Template, 8, 6, "tr", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "tr", 218)(45, "td", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "td", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](49, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "tr", 220)(51, "td", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "CGST (2.5%) + SGST (2.5%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "td", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](55, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "tr", 221)(57, "td", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Total Invoice Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "td", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](61, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedInvoiceData.invoiceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](13, 11, ctx_r0.selectedInvoiceData.invoiceDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedInvoiceData.company.gstin);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedInvoiceData.company.kedbLicense);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.selectedInvoiceData.customer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.selectedInvoiceData.customer.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.selectedInvoiceData.customer.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.selectedInvoiceData.lineItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](49, 14, ctx_r0.selectedInvoiceData.financials.subtotal, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](55, 17, ctx_r0.selectedInvoiceData.financials.totalTax, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](61, 20, ctx_r0.selectedInvoiceData.financials.totalAmount, "1.2-2"));
  }
}
function MyBookingsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_27_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.closeTaxInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_27_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 165)(3, "div", 205)(4, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div")(7, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Tax Invoice / Receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "GST Compliant");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, MyBookingsComponent_div_27_div_13_Template, 62, 23, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 192)(15, "button", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_27_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.printInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Print / Download PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_27_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.closeTaxInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.selectedInvoiceData == null ? null : ctx_r0.selectedInvoiceData.company == null ? null : ctx_r0.selectedInvoiceData.company.legalName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.selectedInvoiceData);
  }
}
function MyBookingsComponent_div_28_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 230)(1, "p", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "This is proudly presented to");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " for successfully conquering the high-altitude wilderness trail of");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " at an elevation of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 235)(15, "div")(16, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Certificate ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div")(21, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Expedition Leader");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.selectedCertData.recipientName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.selectedCertData.trekName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.selectedCertData.elevation);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.selectedCertData.certificateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.selectedCertData.leadTrekMaster);
  }
}
function MyBookingsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_28_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.closeSummitCertificate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_28_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 223)(3, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 37)(5, "i", 137)(6, "i", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Summit Completion Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Karnataka Eco-Tourism & Wilderness Explorer Council");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, MyBookingsComponent_div_28_div_11_Template, 25, 5, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 192)(13, "button", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_28_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.shareCertificate(ctx_r0.selectedCertData));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Share to Social Media ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_28_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.printSummitCertificate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " Print Certificate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_28_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.closeSummitCertificate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.selectedCertData);
  }
}
function MyBookingsComponent_div_29_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Remainder payment settled! Your trek is now 100% confirmed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_29_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 192)(1, "button", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_29_div_37_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.settleRemainderPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_29_div_37_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.closeRemainderModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r0.isSettlingRemainder);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.isSettlingRemainder ? "Processing..." : "Pay \u20B9" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 2, ctx_r0.getBalanceDue(ctx_r0.selectedRemainderBooking), "1.0-0") + " via UPI/Card", " ");
  }
}
function MyBookingsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_29_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.closeRemainderModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_29_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 239)(3, "div", 205)(4, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div")(7, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Settle Remainder 70%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 171)(12, "div", 240)(13, "div", 241)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Trek Expedition:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 241)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Total Trek Cost:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 242)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Advance 30% Paid:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 243)(31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Pending Balance:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, MyBookingsComponent_div_29_div_36_Template, 3, 0, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, MyBookingsComponent_div_29_div_37_Template, 7, 5, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Ref: ", ctx_r0.selectedRemainderBooking == null ? null : ctx_r0.selectedRemainderBooking.booking_reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.selectedRemainderBooking == null ? null : ctx_r0.selectedRemainderBooking.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](23, 7, ctx_r0.selectedRemainderBooking == null ? null : ctx_r0.selectedRemainderBooking.total_amount, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u2212\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](29, 10, ctx_r0.selectedRemainderBooking == null ? null : ctx_r0.selectedRemainderBooking.amount_paid, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](35, 13, ctx_r0.getBalanceDue(ctx_r0.selectedRemainderBooking), "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.remainderPaymentSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.remainderPaymentSuccess);
  }
}
function MyBookingsComponent_div_30_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_30_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.toggleCarpoolFilter("trek"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.carpoolFilterType === "trek");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedCarpoolTrekName, " ");
  }
}
function MyBookingsComponent_div_30_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Loading carpool offers\u2026 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_30_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No rides posted for this specific trail yet. Be the first to offer a seat below! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_30_div_21_div_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ride_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \"", ride_r28.notes, "\" ");
  }
}
function MyBookingsComponent_div_30_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 284)(1, "div", 285)(2, "div", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 287)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Pickup: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " \u00B7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "i", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Driver: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " \u00B7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " \u00B7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "strong", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, MyBookingsComponent_div_30_div_21_div_1_div_24_Template, 3, 1, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "a", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " WhatsApp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ride_r28 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ride_r28.departure_city, " \u2192 ", ride_r28.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ride_r28.departure_location);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ride_r28.vehicle_model || "Car");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ride_r28.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ride_r28.available_seats, " seat", ride_r28.available_seats > 1 ? "s" : "", " left");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", ride_r28.price_per_seat, "/seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ride_r28.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r0.getWhatsAppCarpoolLink(ride_r28), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function MyBookingsComponent_div_30_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MyBookingsComponent_div_30_div_21_div_1_Template, 28, 10, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.carpoolList);
  }
}
function MyBookingsComponent_div_30_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Your carpool offer is live! Trekkers heading to this trail can now reach out to you directly on WhatsApp. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_30_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.carpoolErrorMessage, " ");
  }
}
function MyBookingsComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_30_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.closeCarpoolHub());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_30_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 250)(3, "div", 205)(4, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div")(7, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Basecamp Carpool & Solo Trekker Hub");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Connect with fellow trekkers from Bengaluru/Mysuru & share rides");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 171)(12, "div", 252)(13, "button", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_30_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.toggleCarpoolFilter("all"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, MyBookingsComponent_div_30_button_16_Template, 3, 3, "button", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Available Rides to Basecamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, MyBookingsComponent_div_30_div_19_Template, 2, 0, "div", 257)(20, MyBookingsComponent_div_30_div_20_Template, 2, 0, "div", 258)(21, MyBookingsComponent_div_30_div_21_Template, 2, 1, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 260)(23, "div", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "i", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Driving to the Trail? Offer Empty Seats:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 263)(27, "div", 264)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Trek Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "input", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_30_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.newRideOffer.trek_name, $event) || (ctx_r0.newRideOffer.trek_name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 264)(32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Your Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "input", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_30_Template_input_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.newRideOffer.user_name, $event) || (ctx_r0.newRideOffer.user_name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 264)(36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "WhatsApp Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "input", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_30_Template_input_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.newRideOffer.user_phone, $event) || (ctx_r0.newRideOffer.user_phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 264)(40, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Departure City");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "input", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_30_Template_input_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.newRideOffer.departure_city, $event) || (ctx_r0.newRideOffer.departure_city = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 269)(44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Pickup Point (Choose or Type)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "input", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_30_Template_input_ngModelChange_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.newRideOffer.departure_location, $event) || (ctx_r0.newRideOffer.departure_location = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 271)(48, "span", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_30_Template_span_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.setPickupLocation("Silk Board & Marathahalli"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "i", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Silk Board");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "span", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_30_Template_span_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.setPickupLocation("Yeshwanthpur Metro"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "i", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Yeshwanthpur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "span", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_30_Template_span_click_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.setPickupLocation("Hebbal Flyover"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "i", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Hebbal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "span", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_30_Template_span_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.setPickupLocation("Electronic City Toll"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "i", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "Electronic City");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "span", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_30_Template_span_click_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.setPickupLocation("Mysuru Ring Road"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "i", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Mysuru");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 264)(64, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "Vehicle Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "input", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_30_Template_input_ngModelChange_66_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.newRideOffer.vehicle_model, $event) || (ctx_r0.newRideOffer.vehicle_model = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 264)(68, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "Seats Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "input", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_30_Template_input_ngModelChange_70_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.newRideOffer.available_seats, $event) || (ctx_r0.newRideOffer.available_seats = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 264)(72, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "Fuel Share (\u20B9/Seat)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "input", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_30_Template_input_ngModelChange_74_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.newRideOffer.price_per_seat, $event) || (ctx_r0.newRideOffer.price_per_seat = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 264)(76, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "Departure Time / Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "input", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_30_Template_input_ngModelChange_78_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r0.newRideOffer.notes, $event) || (ctx_r0.newRideOffer.notes = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, MyBookingsComponent_div_30_div_79_Template, 3, 0, "div", 277)(80, MyBookingsComponent_div_30_div_80_Template, 3, 1, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "button", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_30_Template_button_click_81_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.publishCarpoolRide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 192)(84, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_30_Template_button_click_84_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.closeCarpoolHub());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r0.carpoolFilterType === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" All Upcoming Rides (", ctx_r0.carpoolList.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.selectedCarpoolTrekName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isLoadingCarpools);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.isLoadingCarpools && ctx_r0.carpoolList.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.isLoadingCarpools);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newRideOffer.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newRideOffer.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newRideOffer.user_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newRideOffer.departure_city);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newRideOffer.departure_location);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newRideOffer.vehicle_model);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newRideOffer.available_seats);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newRideOffer.price_per_seat);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.newRideOffer.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.carpoolPublishSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.carpoolErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r0.isPublishingRide);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.isPublishingRide ? "Publishing\u2026" : "+ Publish Carpool Offer", " ");
  }
}
class MyBookingsComponent {
  constructor(bookingService, authModal, router, tokenService, location, publicRouteId, media, operationsService, siteSettings) {
    this.bookingService = bookingService;
    this.authModal = authModal;
    this.router = router;
    this.tokenService = tokenService;
    this.location = location;
    this.publicRouteId = publicRouteId;
    this.media = media;
    this.operationsService = operationsService;
    this.siteSettings = siteSettings;
    this.mediaBaseUrl = (src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.mediaBaseUrl || '').replace(/\/?$/, '/');
    this.fallbackImage = "assets/default-trek.jpg";
    this.activeTab = "upcoming";
    this.allBookings = [];
    this.upcomingBookings = [];
    this.pastBookings = [];
    this.cancelledBookings = [];
    this.isLoading = false;
    this.errorMessage = "";
    // Stats
    this.totalBookings = 0;
    this.totalSpent = 0;
    this.upcomingTrips = 0;
    this.completedTrips = 0;
    this.userId = null;
    this.ratingModalOpen = false;
    this.isSubmittingRating = false;
    this.ratingErrorMessage = "";
    this.selectedBookingForRating = null;
    this.selectedRating = 0;
    this.selectedReview = "";
    // Digital Basecamp Trek Pass
    this.showPassModal = false;
    this.selectedPassBooking = null;
    // GST Tax Invoice Modal
    this.showInvoiceModal = false;
    this.selectedInvoiceData = null;
    this.isLoadingInvoice = false;
    // Summit Completion Certificate Modal
    this.showCertModal = false;
    this.selectedCertData = null;
    this.isLoadingCert = false;
    // Settle Remainder Modal
    this.showRemainderModal = false;
    this.selectedRemainderBooking = null;
    this.isSettlingRemainder = false;
    this.remainderPaymentSuccess = false;
    // Basecamp Carpool Hub Modal
    this.showCarpoolModal = false;
    this.carpoolList = [];
    this.isLoadingCarpools = false;
    this.newRideOffer = {
      departure_city: 'Bengaluru',
      departure_location: 'Silk Board / Koramangala',
      available_seats: 3,
      price_per_seat: 650,
      vehicle_model: 'SUV / Sedan',
      notes: 'Leaving Friday night. 2 backpack slots.'
    };
    // ──────────────── Basecamp Carpool Hub ────────────────
    this.selectedCarpoolTrekName = '';
    this.carpoolFilterType = 'all';
    this.isPublishingRide = false;
    this.carpoolPublishSuccess = false;
    this.carpoolErrorMessage = '';
  }
  get brandName() {
    return this.siteSettings?.currentSettings?.brandName || 'goWILD Karunadu';
  }
  get hasBookings() {
    return this.allBookings.length > 0 || this.upcomingBookings.length > 0 || this.pastBookings.length > 0 || this.cancelledBookings.length > 0;
  }
  get nextTrip() {
    return this.upcomingBookings[0] || null;
  }
  get cancellationRate() {
    const total = this.allBookings.length;
    if (total <= 0) return 0;
    return Math.round(this.cancelledBookings.length / total * 100);
  }
  get sectionTitle() {
    return `${this.activeTab.charAt(0).toUpperCase()}${this.activeTab.slice(1)} Trips`;
  }
  get sectionCountLabel() {
    return 'bookings';
  }
  ngOnInit() {
    // Use TokenService to read and decode the token in a single place
    try {
      this.userId = this.tokenService.getUserId();
      console.log("Decoded userId from token:", this.userId);
    } catch (e) {
      this.userId = null;
    }
    if (!this.userId) {
      this.errorMessage = "Please log in to view your bookings.";
      return;
    }
    this.loadBookings();
  }
  /**
   * Load all user bookings
   */
  loadBookings() {
    this.isLoading = true;
    this.errorMessage = "";
    this.bookingService.getMyBookings(this.userId).subscribe(response => {
      if (response.success == true) {
        this.allBookings = response.data.bookings || [];
        this.categorizeBookings(this.allBookings);
        this.calculateStats(this.allBookings);
      } else {
        this.errorMessage = response?.message || "Failed to load bookings.";
      }
      this.isLoading = false;
    }, () => {
      this.errorMessage = "Failed to load bookings.";
      this.isLoading = false;
    });
  }
  /**
   * Categorize bookings into upcoming, past, and cancelled
   */
  categorizeBookings(bookings) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    this.upcomingBookings = bookings.filter(b => {
      const trekDate = new Date(b.start_date);
      return b.booking_status !== "cancelled" && b.booking_status !== "completed" && trekDate >= today;
    });
    this.pastBookings = bookings.filter(b => {
      const trekDate = new Date(b.start_date);
      return b.booking_status === "completed" || b.booking_status !== "cancelled" && trekDate < today;
    });
    this.cancelledBookings = bookings.filter(b => b.booking_status === "cancelled");
    // Sort by date
    this.upcomingBookings.sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());
    this.pastBookings.sort((a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime());
  }
  /**
   * Calculate statistics
   */
  calculateStats(bookings) {
    this.totalBookings = bookings.filter(b => b.booking_status !== "cancelled").length;
    this.totalSpent = bookings.filter(b => b.booking_status !== "cancelled").reduce((sum, b) => sum + parseFloat(b.total_amount.toString()), 0);
    this.upcomingTrips = this.upcomingBookings.length;
    this.completedTrips = bookings.filter(b => b.booking_status === "completed").length;
  }
  /**
   * Get current bookings based on active tab
   */
  get currentBookings() {
    switch (this.activeTab) {
      case "upcoming":
        return this.upcomingBookings;
      case "past":
        return this.pastBookings;
      case "cancelled":
        return this.cancelledBookings;
      default:
        return [];
    }
  }
  /**
   * Switch tab
   */
  switchTab(tab) {
    this.activeTab = tab;
  }
  viewBookingDetails(booking) {
    const rawId = String(booking?.public_ref || booking?.trek_uuid || booking?.trek_id || '');
    const publicRef = this.publicRouteId.encode(rawId) || rawId;
    this.router.navigate(['/tour-details', publicRef]);
  }
  downloadReceipt(booking) {
    const bookingId = booking.id;
    this.booking_reference = booking.booking_reference;
    this.bookingService.downloadReceipt(bookingId, this.userId).subscribe({
      next: response => {
        const blob = new Blob([response.body], {
          type: 'application/pdf'
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        // Extract filename from Content-Disposition header
        const contentDisposition = response.headers.get('Content-Disposition');
        let filename = `Receipt_${this.booking_reference}.pdf`; // Default fallback
        if (contentDisposition) {
          const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(contentDisposition);
          if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, '');
          }
        }
        link.download = filename;
        link.click();
        // Cleanup
        window.URL.revokeObjectURL(url);
      },
      error: error => {
        console.error('Download failed:', error);
      }
    });
  }
  /**
   * Get status badge class
   */
  getStatusClass(status) {
    switch (status) {
      case "confirmed":
        return "badge-success";
      case "pending":
        return "badge-warning";
      case "cancelled":
        return "badge-danger";
      case "completed":
        return "badge-secondary";
      default:
        return "badge-secondary";
    }
  }
  /**
   * Get payment status badge class
   */
  getPaymentStatusClass(status) {
    switch (status) {
      case "paid":
        return "badge-success";
      case "partial":
        return "badge-info";
      case "pending":
        return "badge-warning";
      case "refunded":
        return "badge-secondary";
      default:
        return "badge-secondary";
    }
  }
  /**
   * Format date
   */
  formatDate(dateString) {
    if (!dateString) return '--';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '--';
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  /**
   * Calculate days until trek
   */
  getDaysUntilTrek(startDate) {
    const today = new Date();
    const trek = new Date(startDate);
    const diffTime = trek.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
  /**
   * Check if booking can be cancelled
   */
  canCancel(booking) {
    const daysUntil = this.getDaysUntilTrek(booking.start_date);
    return (booking.booking_status === "pending" || booking.booking_status === "confirmed") && daysUntil >= 7;
  }
  /**
   * Get cancellation fee message
   */
  getCancellationFeeMessage(booking) {
    const daysUntil = this.getDaysUntilTrek(booking.start_date);
    if (daysUntil >= 30) {
      return "100% refund (No cancellation fee)";
    } else if (daysUntil >= 15) {
      return "75% refund (25% cancellation fee)";
    } else if (daysUntil >= 7) {
      return "50% refund (50% cancellation fee)";
    } else {
      return "No refund (Cannot cancel within 7 days)";
    }
  }
  openCancelModal(booking) {
    var _this = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // attach userId to the booking payload so the cancel modal and service have context
      const payload = {
        ...booking,
        userId: _this.userId
      };
      console.log("Opening cancel modal with payload:", payload);
      try {
        const result = yield _this.authModal.openCancle(payload);
        // If modal resolved with cancellation, refresh bookings (keeps UI in sync)
        if (result?.cancelled) {
          _this.loadBookings();
        }
      } catch (e) {
        // modal dismissed/cancelled — no action
      }
    })();
  }
  hasUserRated(booking) {
    const rating = Number(booking.user_rating || 0);
    return rating >= 1 && rating <= 5;
  }
  canRateBooking(booking) {
    if (booking.booking_status !== "completed") return false;
    const endDate = new Date(booking.end_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    return endDate <= today;
  }
  openRatingModal(booking) {
    this.selectedBookingForRating = booking;
    this.selectedRating = Number(booking.user_rating || 0);
    this.selectedReview = booking.user_review || "";
    this.ratingErrorMessage = "";
    this.ratingModalOpen = true;
  }
  closeRatingModal() {
    if (this.isSubmittingRating) return;
    this.ratingModalOpen = false;
    this.selectedBookingForRating = null;
    this.selectedRating = 0;
    this.selectedReview = "";
    this.ratingErrorMessage = "";
  }
  setRating(stars) {
    this.selectedRating = stars;
  }
  submitRating() {
    if (!this.selectedBookingForRating) return;
    if (this.selectedRating < 1 || this.selectedRating > 5) {
      this.ratingErrorMessage = "Please select a star rating.";
      return;
    }
    this.isSubmittingRating = true;
    this.ratingErrorMessage = "";
    const payload = {
      rating: this.selectedRating,
      review: this.selectedReview?.trim() || ""
    };
    this.bookingService.submitTrekRating(this.selectedBookingForRating.id, this.userId, payload).subscribe({
      next: () => {
        if (!this.selectedBookingForRating) return;
        this.selectedBookingForRating.user_rating = this.selectedRating;
        this.selectedBookingForRating.user_review = payload.review;
        this.selectedBookingForRating.rated_at = new Date().toISOString();
        this.isSubmittingRating = false;
        this.closeRatingModal();
        this.loadBookings();
      },
      error: () => {
        this.isSubmittingRating = false;
        this.ratingErrorMessage = "Could not submit rating. Please try again.";
      }
    });
  }
  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }
  resolveImageUrl(imagePath) {
    return this.media.resolve(imagePath || null);
  }
  isInvoiceSettled(booking) {
    return booking.payment_status === "paid" || Number(booking.balance_due || 0) <= 0;
  }
  getInvoiceStatusLabel(booking) {
    if (booking.payment_status === "refunded") return "Refunded";
    if (this.isInvoiceSettled(booking)) return "Paid";
    if (booking.payment_status === "partial") return "Partially Paid";
    return "Payment Due";
  }
  // ──────────────── GST Tax Invoice ────────────────
  openTaxInvoice(booking) {
    this.isLoadingInvoice = true;
    this.showInvoiceModal = true;
    this.operationsService.getTaxInvoice(booking.id).subscribe({
      next: invoice => {
        this.selectedInvoiceData = invoice;
        this.isLoadingInvoice = false;
      },
      error: () => {
        this.isLoadingInvoice = false;
      }
    });
  }
  closeTaxInvoice() {
    this.showInvoiceModal = false;
    this.selectedInvoiceData = null;
  }
  printInvoice() {
    if (!this.selectedInvoiceData) {
      window.print();
      return;
    }
    const inv = this.selectedInvoiceData;
    const printWindow = window.open('', '_blank', 'width=800,height=900');
    if (!printWindow) {
      window.print();
      return;
    }
    const itemsHtml = (inv.lineItems || []).map(item => `
      <tr>
        <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0;">${item.description}</td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-family: monospace;">${item.sac}</td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: 600;">₹${Number(item.amount).toFixed(2)}</td>
      </tr>
    `).join('');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Tax Invoice - ${inv.invoiceNumber}</title>
        <style>
          @page { size: A4 portrait; margin: 15mm; }
          body { font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; margin: 0; padding: 20px; line-height: 1.5; }
          .header { display: flex; justify-content: space-between; border-bottom: 2px solid #0f766e; padding-bottom: 16px; margin-bottom: 20px; }
          .brand { font-size: 24px; font-weight: 800; color: #0f766e; letter-spacing: 1px; }
          .sub { font-size: 13px; color: #64748b; }
          .badge { background: #ecfdf5; color: #047857; font-weight: 700; padding: 4px 10px; border-radius: 4px; font-size: 12px; display: inline-block; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px; }
          .box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; font-size: 13px; }
          .box strong { color: #0f172a; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px; }
          th { background: #f1f5f9; color: #334155; text-align: left; padding: 10px 12px; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; }
          .total-row { background: #ecfdf5; color: #065f46; font-size: 15px; font-weight: 800; }
          .total-row td { padding: 12px; border-top: 2px solid #059669; }
          .footer { margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 12px; font-size: 11px; color: #94a3b8; text-align: center; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="brand">${inv.company.brandName || this.brandName}</div>
            <div class="sub">${inv.company.legalName} · Eco-Tourism Operator</div>
            <div class="sub">GSTIN: ${inv.company.gstin} | License: ${inv.company.kedbLicense}</div>
          </div>
          <div style="text-align: right;">
            <div class="badge">TAX INVOICE</div>
            <div style="font-size: 16px; font-weight: 700; margin-top: 6px;">#${inv.invoiceNumber}</div>
            <div style="font-size: 12px; color: #64748b;">Date: ${new Date(inv.invoiceDate).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })}</div>
          </div>
        </div>

        <div class="grid">
          <div class="box">
            <div style="font-weight: 700; color: #64748b; font-size: 11px; margin-bottom: 6px; text-transform: uppercase;">Billed To</div>
            <div style="font-size: 15px; font-weight: 700; color: #0f172a;">${inv.customer.name}</div>
            <div>${inv.customer.email}</div>
            <div>${inv.customer.phone}</div>
          </div>
          <div class="box">
            <div style="font-weight: 700; color: #64748b; font-size: 11px; margin-bottom: 6px; text-transform: uppercase;">Operator Details</div>
            <div><strong>Registered Address:</strong> ${inv.company.address}</div>
            <div><strong>Service Category:</strong> SAC 998555 (Eco-Tour Operations)</div>
            <div><strong>Payment Mode:</strong> Online Clearance (Settled)</div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Service / Item Description</th>
              <th>SAC Code</th>
              <th style="text-align: right;">Amount (INR)</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
            <tr style="background: #f8fafc; font-weight: 600;">
              <td colspan="2" style="padding: 10px 12px;">Subtotal</td>
              <td style="padding: 10px 12px; text-align: right;">₹${Number(inv.financials.subtotal).toFixed(2)}</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 10px 12px;">CGST (2.5%) + SGST (2.5%)</td>
              <td style="padding: 10px 12px; text-align: right;">₹${Number(inv.financials.totalTax).toFixed(2)}</td>
            </tr>
            <tr class="total-row">
              <td colspan="2">Total Invoice Value (INR)</td>
              <td style="text-align: right;">₹${Number(inv.financials.totalAmount).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <div class="footer">
          This is a computer-generated tax invoice issued under Karnataka GST & Eco-Tourism Development Board (KEDB) guidelines. No physical signature required.
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 400);
  }
  // ──────────────── Digital Summit Certificate ────────────────
  openSummitCertificate(booking) {
    const tName = booking.trek_name || 'Western Ghats Summit';
    let elevation = '1,894 MASL';
    if (tName.includes('Kudremukha')) elevation = '1,894m (6,214 ft)';else if (tName.includes('Kumara')) elevation = '1,712m (5,617 ft)';else if (tName.includes('Mullayanagiri')) elevation = '1,930m (6,332 ft)';else if (tName.includes('Tadiandamol')) elevation = '1,748m (5,735 ft)';else if (tName.includes('Netravati')) elevation = '1,520m (4,986 ft)';
    this.selectedCertData = {
      certificateId: `GWK-CERT-2026-${String(booking.id).slice(0, 8).toUpperCase()}`,
      recipientName: booking.customer_name || 'Adventure Trekker',
      trekName: tName,
      location: booking.location || 'Western Ghats, Karnataka',
      elevation: elevation,
      completionDate: booking.end_date || booking.start_date || new Date().toISOString(),
      bookingReference: booking.booking_reference,
      leadTrekMaster: 'Capt. Raghu Varma (IMF Certified Lead)',
      verificationUrl: `https://gowildkarunadu.in/verify/cert/${String(booking.id).slice(0, 8)}`,
      badgeTitle: 'Certified Western Ghats Explorer',
      sealText: 'GO WILD KARUNADU OFFICIAL EXPEDITION SEAL'
    };
    this.isLoadingCert = true;
    this.showCertModal = true;
    this.operationsService.getSummitCertificate(booking.id).subscribe({
      next: cert => {
        if (cert) this.selectedCertData = cert;
        this.isLoadingCert = false;
      },
      error: () => {
        this.isLoadingCert = false;
      }
    });
  }
  closeSummitCertificate() {
    this.showCertModal = false;
    this.selectedCertData = null;
  }
  printSummitCertificate() {
    if (!this.selectedCertData) {
      window.print();
      return;
    }
    const cert = this.selectedCertData;
    const printWindow = window.open('', '_blank', 'width=960,height=750');
    if (!printWindow) {
      window.print();
      return;
    }
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Official Summit Certificate - ${cert.recipientName}</title>
        <style>
          @page { size: A4 landscape; margin: 8mm; }
          * { box-sizing: border-box; }
          body { font-family: 'Georgia', serif; text-align: center; color: #1e293b; background: #fffcf2; margin: 0; padding: 20px; }
          .cert-outer { border: 4px solid #b45309; padding: 6px; background: #ffffff; }
          .cert-container { border: 2px dashed #d97706; padding: 24px 30px; background: linear-gradient(180deg, #ffffff 0%, #fffdfa 100%); }
          .icon { font-size: 36px; margin-bottom: 4px; }
          .title { font-size: 26px; font-weight: 900; color: #78350f; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 2px; }
          .org { font-size: 11px; color: #92400e; text-transform: uppercase; letter-spacing: 1.5px; font-family: sans-serif; font-weight: 700; margin-bottom: 16px; }
          .presented { font-size: 14px; color: #78350f; font-style: italic; margin-bottom: 4px; }
          .name { font-size: 28px; font-weight: 900; color: #0f172a; margin: 6px 0; border-bottom: 2px solid #d97706; display: inline-block; padding: 0 20px 4px; }
          .desc { font-size: 14px; color: #334155; max-width: 650px; margin: 12px auto; line-height: 1.5; }
          .trek-highlight { color: #0f3d35; font-weight: 800; font-size: 18px; }
          .meta { display: flex; justify-content: space-around; margin-top: 24px; padding-top: 14px; border-top: 1px dashed #d97706; font-family: sans-serif; }
          .meta-item { text-align: center; }
          .meta-label { font-size: 10px; color: #92400e; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px; }
          .meta-val { font-size: 13px; font-weight: 700; color: #0f172a; margin-top: 2px; }
          .seal-wrap { margin-top: 10px; font-size: 10px; color: #64748b; font-family: sans-serif; }
        </style>
      </head>
      <body>
        <div class="cert-outer">
          <div class="cert-container">
            <div class="icon" style="color: #15803d; font-size: 28px; letter-spacing: 4px;">GO-WILD KARUNADU</div>
            <div class="title">Summit Completion Certificate</div>
            <div class="org">Karnataka Eco-Tourism & Wilderness Explorer Council</div>
            <div class="presented">This certificate is proudly awarded to</div>
            <div class="name">${cert.recipientName}</div>
            <div class="desc">
              for successfully conquering the high-altitude wilderness trail of<br>
              <span class="trek-highlight">${cert.trekName}</span><br>
              at an official peak elevation of <strong>${cert.elevation}</strong>.
            </div>
            <div class="meta">
              <div class="meta-item">
                <div class="meta-label">Certificate ID</div>
                <div class="meta-val">${cert.certificateId}</div>
              </div>
              <div class="meta-item">
                <div class="meta-label">Expedition Date</div>
                <div class="meta-val">${new Date(cert.completionDate || Date.now()).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })}</div>
              </div>
              <div class="meta-item">
                <div class="meta-label">Expedition Leader</div>
                <div class="meta-val">${cert.leadTrekMaster}</div>
              </div>
            </div>
            <div class="seal-wrap">
              Verified by ${this.brandName} Expedition Authority · Authentic Electronic Achievement Record
            </div>
          </div>
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 400);
  }
  shareCertificate(cert) {
    if (!cert) return;
    const text = `I proudly completed the ${cert.trekName} (${cert.elevation}) with @${this.brandName}! Check out my official Summit Certificate: ${cert.certificateId}`;
    if (navigator.share) {
      navigator.share({
        title: `${cert.trekName} Summit Certificate`,
        text: text,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      alert('Certificate achievement details copied to clipboard for sharing!');
    }
  }
  // ──────────────── Remainder 70% Payment ────────────────
  getBalanceDue(booking) {
    if (!booking) return 0;
    if (booking.payment_status === 'paid' || booking.booking_status === 'cancelled') return 0;
    const balance = parseFloat(String(booking.balance_due || 0));
    if (balance > 0) return balance;
    if (booking.payment_status === 'partial') {
      const total = parseFloat(String(booking.total_amount || 0));
      const paid = parseFloat(String(booking.amount_paid || 0));
      return Math.max(0, total - paid);
    }
    return 0;
  }
  hasPendingBalance(booking) {
    return this.getBalanceDue(booking) > 0 && booking.booking_status !== 'cancelled';
  }
  openRemainderModal(booking) {
    this.selectedRemainderBooking = booking;
    this.remainderPaymentSuccess = false;
    this.showRemainderModal = true;
  }
  closeRemainderModal() {
    this.showRemainderModal = false;
    this.selectedRemainderBooking = null;
  }
  settleRemainderPayment() {
    if (!this.selectedRemainderBooking) return;
    this.isSettlingRemainder = true;
    const pendingAmount = this.getBalanceDue(this.selectedRemainderBooking);
    this.operationsService.payRemainder(this.selectedRemainderBooking.id, {
      amount: pendingAmount,
      paymentMethod: 'Instant UPI / Card Payment',
      transactionId: 'REM-ONLINE-' + Date.now()
    }).subscribe({
      next: () => {
        this.isSettlingRemainder = false;
        this.remainderPaymentSuccess = true;
        if (this.selectedRemainderBooking) {
          this.selectedRemainderBooking.balance_due = 0;
          this.selectedRemainderBooking.amount_paid = this.selectedRemainderBooking.total_amount;
          this.selectedRemainderBooking.payment_status = 'paid';
          this.selectedRemainderBooking.booking_status = 'confirmed';
        }
        setTimeout(() => {
          this.closeRemainderModal();
          this.loadBookings();
        }, 1600);
      },
      error: err => {
        this.isSettlingRemainder = false;
        console.error('Pay remainder error:', err);
        alert(err?.error?.message || 'Could not process remainder payment. Please try again.');
      }
    });
  }
  openCarpoolHub(trekName) {
    this.selectedCarpoolTrekName = trekName || '';
    this.carpoolFilterType = trekName ? 'trek' : 'all';
    this.carpoolPublishSuccess = false;
    this.carpoolErrorMessage = '';
    this.showCarpoolModal = true;
    const currentBooking = this.allBookings.find(b => b.trek_name === trekName) || this.allBookings[0];
    if (trekName) {
      this.newRideOffer.trek_name = trekName;
    }
    if (!this.newRideOffer.departure_location) {
      this.newRideOffer.departure_location = 'Silk Board & Marathahalli';
    }
    if (!this.newRideOffer.user_name && currentBooking?.customer_name) {
      this.newRideOffer.user_name = currentBooking.customer_name;
    }
    if (!this.newRideOffer.user_phone && currentBooking?.customer_phone) {
      this.newRideOffer.user_phone = currentBooking.customer_phone;
    }
    this.fetchCarpoolRides();
  }
  setPickupLocation(loc) {
    this.newRideOffer.departure_location = loc;
  }
  fetchCarpoolRides() {
    this.isLoadingCarpools = true;
    const filter = this.carpoolFilterType === 'trek' && this.selectedCarpoolTrekName ? {
      trekName: this.selectedCarpoolTrekName
    } : {};
    this.operationsService.getCarpools(filter).subscribe({
      next: rides => {
        if (rides.length === 0 && this.carpoolFilterType === 'trek') {
          // If no rides specifically for this trek, fetch all community rides so the user has options
          this.operationsService.getCarpools().subscribe({
            next: allRides => {
              this.carpoolList = allRides;
              this.isLoadingCarpools = false;
            },
            error: () => {
              this.isLoadingCarpools = false;
            }
          });
        } else {
          this.carpoolList = rides;
          this.isLoadingCarpools = false;
        }
      },
      error: () => {
        this.isLoadingCarpools = false;
      }
    });
  }
  toggleCarpoolFilter(type) {
    this.carpoolFilterType = type;
    this.fetchCarpoolRides();
  }
  closeCarpoolHub() {
    this.showCarpoolModal = false;
    this.carpoolPublishSuccess = false;
    this.carpoolErrorMessage = '';
  }
  publishCarpoolRide() {
    this.isPublishingRide = true;
    this.carpoolPublishSuccess = false;
    this.carpoolErrorMessage = '';
    const currentBooking = this.allBookings.find(b => b.trek_name === this.selectedCarpoolTrekName) || this.allBookings[0];
    const payload = {
      userId: this.userId || currentBooking?.user_id || 'community-trekker',
      userName: this.newRideOffer.user_name || currentBooking?.customer_name || 'Solo Trekker',
      userPhone: this.newRideOffer.user_phone || currentBooking?.customer_phone || '+91 98860 12345',
      trekName: this.newRideOffer.trek_name || this.selectedCarpoolTrekName || 'Brahmagiri Monsoon Trek',
      departureCity: this.newRideOffer.departure_city || 'Bengaluru',
      departureLocation: this.newRideOffer.departure_location || 'Silk Board & Marathahalli',
      availableSeats: Number(this.newRideOffer.available_seats) || 3,
      pricePerSeat: Number(this.newRideOffer.price_per_seat) || 600,
      vehicleModel: this.newRideOffer.vehicle_model || 'Car / SUV',
      notes: this.newRideOffer.notes || 'Leaving Friday evening.'
    };
    this.operationsService.createCarpoolOffer(payload).subscribe({
      next: () => {
        this.isPublishingRide = false;
        this.carpoolPublishSuccess = true;
        this.carpoolErrorMessage = '';
        this.fetchCarpoolRides();
        this.newRideOffer.notes = '';
        setTimeout(() => {
          this.closeCarpoolHub();
        }, 1200);
      },
      error: err => {
        this.isPublishingRide = false;
        console.error('Carpool publish error:', err);
        this.carpoolErrorMessage = err?.error?.message || 'Could not publish carpool offer. Please try again.';
      }
    });
  }
  getWhatsAppCarpoolLink(ride) {
    const text = `Hi ${ride.user_name}, I saw your carpool offer on ${this.brandName} for ${ride.trek_name} from ${ride.departure_city} (${ride.departure_location}). Can I join you?`;
    const cleanPhone = String(ride.user_phone || '').replace(/\D/g, '');
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  }
  // ──────────────── Digital Basecamp Trek Pass ────────────────
  openTrekPass(booking) {
    this.selectedPassBooking = booking;
    this.showPassModal = true;
  }
  closeTrekPass() {
    this.showPassModal = false;
    this.selectedPassBooking = null;
  }
  printTrekPass() {
    if (!this.selectedPassBooking) {
      window.print();
      return;
    }
    const b = this.selectedPassBooking;
    const printWindow = window.open('', '_blank', 'width=800,height=900');
    if (!printWindow) {
      window.print();
      return;
    }
    const rosterRows = (b.participants_details || []).map((p, idx) => `
      <tr>
        <td style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0; text-align: center;">${idx + 1}</td>
        <td style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0;"><strong>${p.name || p.full_name}</strong></td>
        <td style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0;">${p.age || '--'} / ${p.gender || '--'}</td>
        <td style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0; text-align: center;"><span style="background: #fee2e2; color: #991b1b; padding: 2px 6px; border-radius: 4px; font-weight: 700;">${p.blood_group || 'O+'}</span></td>
        <td style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0;">${p.id_type || 'Aadhaar'}: ${p.id_number || 'Verified'}</td>
        <td style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0;">${p.medical_condition || 'Fit to Trek'}</td>
      </tr>
    `).join('');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Expedition Pass - ${b.booking_reference}</title>
        <style>
          @page { size: A4 portrait; margin: 15mm; }
          body { font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; margin: 0; padding: 20px; line-height: 1.4; }
          .header { background: #0b2b26; color: #fff; padding: 18px 24px; border-radius: 8px 8px 0 0; display: flex; justify-content: space-between; align-items: center; }
          .org { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #86efac; }
          .title { font-size: 20px; font-weight: 800; margin: 2px 0; }
          .qr-section { display: flex; gap: 20px; background: #f8fafc; border: 1px dashed #cbd5e1; padding: 16px; align-items: center; margin: 16px 0; border-radius: 8px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0; }
          .field { background: #f8fafc; border: 1px solid #e2e8f0; padding: 10px 12px; border-radius: 6px; font-size: 13px; }
          .field-label { font-size: 10px; color: #64748b; text-transform: uppercase; font-weight: 700; margin-bottom: 2px; }
          .field-val { font-size: 14px; font-weight: 700; color: #0f172a; }
          table { width: 100%; border-collapse: collapse; margin-top: 14px; font-size: 12px; border: 1px solid #e2e8f0; }
          th { background: #f1f5f9; text-align: left; padding: 8px 10px; font-weight: 700; }
          .guidelines { background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; padding: 12px; border-radius: 6px; font-size: 12px; margin-top: 16px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="org">Karnataka Eco-Tourism Development Board (KEDB)</div>
            <div class="title">OFFICIAL BASECAMP TREK PASS</div>
            <div style="font-size: 12px; opacity: 0.85;">Pass Ref: ${b.booking_reference}</div>
          </div>
          <div style="text-align: right;">
            <div style="background: #22c55e; color: #fff; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 700;">
              ${b.payment_status === 'paid' ? 'PERMIT CLEARED' : 'PAYMENT PENDING'}
            </div>
          </div>
        </div>

        <div class="qr-section">
          <img src="${this.getQrCodeUrl(b)}" width="110" height="110" style="background:#fff; padding:4px; border-radius:6px; border:1px solid #e2e8f0;" />
          <div>
            <div style="font-size: 15px; font-weight: 700; color: #0f172a;">Digital Checkpoint Verification QR</div>
            <div style="font-size: 12px; color: #64748b; margin-top: 4px;">Present this pass upon arrival at the Forest Department basecamp checkpost.</div>
            <div style="font-family: monospace; font-size: 12px; font-weight: 700; color: #0f766e; margin-top: 6px;">AUTH-HASH: GWK-${(b.id || '').slice(0, 8).toUpperCase()}</div>
          </div>
        </div>

        <div class="grid">
          <div class="field">
            <div class="field-label">Trek Expedition</div>
            <div class="field-val">${b.trek_name}</div>
          </div>
          <div class="field">
            <div class="field-label">Expedition Dates</div>
            <div class="field-val">${this.formatDate(b.start_date)} – ${this.formatDate(b.end_date)}</div>
          </div>
          <div class="field">
            <div class="field-label">Lead Booker</div>
            <div class="field-val">${b.customer_name || 'Primary Trekker'}</div>
          </div>
          <div class="field">
            <div class="field-label">Permitted Group Size</div>
            <div class="field-val">${b.participants} Trekker${b.participants > 1 ? 's' : ''}</div>
          </div>
          <div class="field">
            <div class="field-label">Reporting Basecamp</div>
            <div class="field-val">${b.location}</div>
          </div>
          <div class="field">
            <div class="field-label">Reporting Time</div>
            <div class="field-val">05:30 AM IST (Ascent Day)</div>
          </div>
        </div>

        ${b.participants_details?.length ? `
          <div style="margin-top: 14px;">
            <div style="font-weight: 700; font-size: 13px; text-transform: uppercase; color: #334155;">Authorized Expedition Roster</div>
            <table>
              <thead>
                <tr>
                  <th style="text-align: center;">#</th>
                  <th>Name</th>
                  <th>Age/Sex</th>
                  <th style="text-align: center;">Blood</th>
                  <th>Govt ID</th>
                  <th>Medical Notes</th>
                </tr>
              </thead>
              <tbody>
                ${rosterRows}
              </tbody>
            </table>
          </div>
        ` : ''}

        <div class="guidelines">
          <strong>Mandatory Wilderness Regulations:</strong><br>
          1. Original Govt ID document required for each trekker at checkpost entry.<br>
          2. Single-use plastic bottles, alcohol, and campfires strictly prohibited.<br>
          3. Follow instructions of the designated Certified Wilderness Trek Master at all times.
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 400);
  }
  getQrCodeUrl(booking) {
    if (!booking) return '';
    const payload = JSON.stringify({
      bookingId: booking.id,
      ref: booking.booking_reference,
      trek: booking.trek_name,
      participants: booking.participants,
      startDate: booking.start_date,
      paymentStatus: booking.payment_status,
      timestamp: Date.now()
    });
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(payload)}&color=0f3d35&bgcolor=ffffff&margin=4`;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function MyBookingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MyBookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_my_bookings__WEBPACK_IMPORTED_MODULE_8__.MyBookings), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_9__.AuthModalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_token_service__WEBPACK_IMPORTED_MODULE_11__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_public_route_id_service__WEBPACK_IMPORTED_MODULE_13__.PublicRouteIdService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_media_service__WEBPACK_IMPORTED_MODULE_14__.MediaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_trek_operations_service__WEBPACK_IMPORTED_MODULE_15__.TrekOperationsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_site_settings_service__WEBPACK_IMPORTED_MODULE_16__.SiteSettingsService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: MyBookingsComponent,
    selectors: [["app-my-bookings"]],
    decls: 31,
    vars: 13,
    consts: [[1, "bookings-wrapper"], [1, "top-nav-bar"], [1, "nav-container"], [1, "nav-back-btn", 3, "click"], [1, "back-arrow"], [1, "nav-brand"], [1, "brand-sub"], [1, "brand-title"], [1, "nav-actions"], ["routerLink", "/upcomingtours", 1, "btn-browse-new"], ["class", "hero-expedition-banner", 4, "ngIf"], [1, "dashboard-main-container"], ["class", "tab-nav-container", 4, "ngIf"], ["class", "state-card error-card", 4, "ngIf"], ["class", "skeleton-container", 4, "ngIf"], ["class", "expeditions-stream", 4, "ngIf"], ["class", "rating-backdrop", 3, "click", 4, "ngIf"], ["class", "rating-modal", "role", "dialog", "aria-modal", "true", 4, "ngIf"], ["class", "trek-pass-modal", "role", "dialog", "aria-modal", "true", 4, "ngIf"], ["class", "modal-backdrop-custom", 3, "click", 4, "ngIf"], [1, "hero-expedition-banner"], [1, "hero-inner"], [1, "hero-content"], [1, "expedition-badge"], [1, "pulse-dot"], [1, "hero-heading"], [1, "hero-subtext"], [1, "hero-metrics"], [1, "metric-card"], [1, "metric-icon", "upcoming-icon"], [1, "bi", "bi-calendar2-check"], [1, "metric-data"], [1, "metric-val"], [1, "metric-lbl"], [1, "metric-icon", "completed-icon"], [1, "bi", "bi-trophy"], [1, "metric-icon", "total-icon"], [1, "bi", "bi-compass"], [1, "metric-icon", "spent-icon"], [1, "tab-nav-container"], [1, "segmented-pill-nav"], [1, "pill-tab", 3, "click"], [1, "tab-emoji"], [1, "bi", "bi-calendar-event", "me-1"], ["class", "tab-badge", 4, "ngIf"], [1, "bi", "bi-check2-circle", "me-1"], [1, "bi", "bi-x-circle", "me-1"], [1, "tab-badge"], [1, "state-card", "error-card"], [1, "state-icon"], [1, "bi", "bi-exclamation-triangle-fill", "text-warning"], [1, "btn-retry", 3, "click"], [1, "skeleton-container"], ["class", "skel-card", 4, "ngFor", "ngForOf"], [1, "skel-card"], [1, "skel-thumb", "shimmer"], [1, "skel-body"], [1, "skel-line", "shimmer", "w-40"], [1, "skel-line", "shimmer", "w-70"], [1, "skel-line", "shimmer", "w-90"], [1, "expeditions-stream"], ["class", "stream-header", 4, "ngIf"], ["class", "expedition-ticket-card", 4, "ngFor", "ngForOf"], ["class", "empty-expedition-state", 4, "ngIf"], [1, "stream-header"], [1, "stream-title-group"], [1, "stream-title"], [1, "stream-count"], [1, "expedition-ticket-card"], [1, "ticket-visual"], ["loading", "lazy", "decoding", "async", 3, "error", "src", "alt"], [1, "visual-gradient-scrim"], [1, "visual-top-chips"], [1, "ref-tag"], [1, "hash-sym"], ["class", "countdown-tag", 4, "ngIf"], [1, "visual-bottom-status"], [1, "status-chip", 3, "ngClass"], [1, "bi", "bi-circle-fill", "me-1", 2, "font-size", "0.55rem", "vertical-align", "middle"], [4, "ngIf"], [1, "ticket-details"], [1, "trek-headline"], [1, "headline-main"], [1, "trek-title"], [1, "trek-location"], [1, "pin-icon"], [1, "bi", "bi-geo-alt-fill", "text-success"], [1, "price-summary-badge"], [1, "total-label"], [1, "total-value"], [1, "itinerary-grid"], [1, "itinerary-cell"], [1, "cell-label"], [1, "cell-val"], [1, "bi", "bi-calendar3", "me-1"], [1, "bi", "bi-people-fill", "me-1"], ["class", "itinerary-cell", 4, "ngIf"], ["class", "addons-bar", 4, "ngIf"], ["class", "review-bubble", 4, "ngIf"], ["class", "cancellation-policy-bar", 4, "ngIf"], [1, "ticket-action-toolbar"], ["type", "button", "class", "act-btn btn-digital-pass", 3, "click", 4, "ngIf"], ["type", "button", "class", "act-btn btn-settle-balance", 3, "click", 4, "ngIf"], ["type", "button", "class", "act-btn btn-summit-cert", 3, "click", 4, "ngIf"], ["type", "button", "class", "act-btn btn-rating", 3, "click", 4, "ngIf"], ["type", "button", "class", "act-btn btn-cancel-trip", 3, "click", 4, "ngIf"], [1, "countdown-tag"], [1, "bi", "bi-clock", "me-1"], [1, "bi", "bi-hourglass-split", "me-1"], [1, "cell-val", "balance-due-text"], [1, "cell-val", "text-success"], [1, "bi", "bi-check-circle-fill", "text-success", "me-1"], [1, "addons-bar"], ["class", "addon-tag", 4, "ngFor", "ngForOf"], [1, "addon-tag"], [1, "bi", "bi-plus-circle-fill", "text-success", "me-1"], [1, "review-bubble"], [1, "review-stars"], [3, "star-lit", 4, "ngFor", "ngForOf"], ["class", "review-date", 4, "ngIf"], [1, "review-text"], ["class", "admin-response", 4, "ngIf"], [1, "bi", "bi-star-fill"], [1, "review-date"], [1, "admin-response"], [1, "admin-resp-badge"], [1, "bi", "bi-shield-check", "me-1"], [1, "cancellation-policy-bar"], [1, "info-icon"], [1, "bi", "bi-info-circle-fill", "text-primary"], ["type", "button", 1, "act-btn", "btn-digital-pass", 3, "click"], [1, "btn-icon"], [1, "bi", "bi-ticket-perforated"], [1, "btn-text"], ["type", "button", 1, "act-btn", "btn-settle-balance", 3, "click"], [1, "bi", "bi-credit-card"], ["type", "button", 1, "act-btn", "btn-summit-cert", 3, "click"], [1, "bi", "bi-award"], ["type", "button", 1, "act-btn", "btn-rating", 3, "click"], [1, "bi", "bi-star"], ["type", "button", 1, "act-btn", "btn-cancel-trip", 3, "click"], [1, "bi", "bi-x-circle"], [1, "empty-expedition-state"], [1, "empty-compass-glyph"], [1, "empty-title"], ["class", "empty-subtitle", 4, "ngIf"], [1, "empty-cta-wrap"], ["routerLink", "/upcomingtours", 1, "btn-explore-treks"], ["routerLink", "/faqs", 1, "btn-faq-link"], [1, "empty-subtitle"], [1, "rating-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "rating-modal"], [1, "rating-card", 3, "click"], [1, "rating-subtitle"], [1, "stars-row"], ["type", "button", "class", "star-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["rows", "4", "maxlength", "500", "placeholder", "Share your experience (optional)", 1, "review-input", 3, "ngModelChange", "ngModel"], ["class", "rating-error", 4, "ngIf"], [1, "rating-actions"], ["type", "button", 1, "action-btn", 3, "click"], ["type", "button", 1, "action-btn", "primary", 3, "click"], ["type", "button", 1, "star-btn", 3, "click"], [1, "rating-error"], ["role", "dialog", "aria-modal", "true", 1, "trek-pass-modal"], [1, "trek-pass-card", 3, "click"], [1, "pass-header"], [1, "pass-brand"], [1, "pass-org"], [1, "pass-ref"], ["type", "button", 1, "close-pass-btn", 3, "click"], [1, "bi", "bi-x-lg"], [1, "pass-body"], [1, "pass-qr-section"], [1, "qr-box"], ["alt", "QR Pass", 1, "qr-img", 3, "src"], [1, "qr-hint"], [1, "pass-clearance"], [1, "clearance-pill"], ["class", "bi bi-check-circle-fill me-1", 4, "ngIf"], ["class", "bi bi-hourglass-split me-1", 4, "ngIf"], [1, "security-code"], [1, "pass-info-grid"], [1, "pass-field"], [1, "p-label"], [1, "p-val"], [1, "p-val", "highlight-qty"], [1, "bi", "bi-geo-alt-fill", "text-success", "me-1"], ["class", "pass-roster", 4, "ngIf"], [1, "pass-guidelines"], [1, "guide-item"], [1, "bi", "bi-shield-check"], [1, "bi", "bi-droplet"], [1, "pass-footer"], ["type", "button", 1, "btn-print-pass", 3, "click"], [1, "bi", "bi-printer", "me-1"], ["type", "button", 1, "btn-close-pass", 3, "click"], [1, "bi", "bi-check-circle-fill", "me-1"], [1, "pass-roster"], [1, "roster-table-wrap"], [1, "roster-table"], [4, "ngFor", "ngForOf"], [1, "blood-pill"], [1, "med-pill"], [1, "modal-backdrop-custom", 3, "click"], [1, "pass-modal-card", 3, "click"], [1, "pass-logo-wrap"], [1, "pass-brand-icon"], [1, "bi", "bi-receipt"], [1, "pass-brand-name"], [1, "pass-sub"], [1, "pass-badge", 2, "background", "#1a8f5a"], ["class", "pass-body", 4, "ngIf"], [1, "invoice-detail-grid"], [1, "invoice-detail-col"], [1, "invoice-detail-heading"], [1, "invoice-table-wrap"], [1, "invoice-line-table"], [1, "num"], [1, "subtotal-row"], ["colspan", "2"], [1, "tax-row"], [1, "total-row"], [1, "pass-modal-card", "cert-modal-card", 3, "click"], [1, "cert-header"], [1, "cert-icons"], [1, "cert-title"], [1, "cert-subtitle"], ["class", "cert-body", 4, "ngIf"], ["type", "button", 1, "btn-print-pass", "btn-share-cert", 3, "click"], [1, "bi", "bi-share", "me-1"], [1, "cert-body"], [1, "cert-presented-to"], [1, "cert-recipient-name"], [1, "cert-description"], [1, "cert-trek-name"], [1, "cert-meta-row"], [1, "cert-meta-label"], [1, "cert-meta-value"], [1, "pass-modal-card", 2, "max-width", "460px", 3, "click"], [1, "pass-header", "remainder-header"], [1, "remainder-summary"], [1, "remainder-row"], [1, "remainder-row", "remainder-row-paid"], [1, "remainder-row-total"], ["class", "remainder-success", 4, "ngIf"], ["class", "pass-footer", 4, "ngIf"], [1, "remainder-success"], ["type", "button", 1, "btn-print-pass", "btn-pay-remainder", 3, "click", "disabled"], [1, "bi", "bi-credit-card", "me-1"], [1, "pass-modal-card", 2, "max-width", "580px", 3, "click"], [1, "pass-header", "carpool-header"], [1, "bi", "bi-car-front"], [1, "carpool-filter-bar"], ["type", "button", 1, "filter-pill", 3, "click"], [1, "bi", "bi-globe2", "me-1"], ["type", "button", "class", "filter-pill", 3, "active", "click", 4, "ngIf"], [1, "carpool-section-title"], ["class", "carpool-loading", 4, "ngIf"], ["class", "carpool-empty", 4, "ngIf"], ["class", "carpool-list", 4, "ngIf"], [1, "carpool-post-form"], [1, "carpool-form-heading"], [1, "bi", "bi-car-front", "me-1"], [1, "carpool-form-grid"], [1, "carpool-form-field"], ["placeholder", "e.g. Brahmagiri Monsoon Trek", 3, "ngModelChange", "ngModel"], ["placeholder", "Driver / Booker Name", 3, "ngModelChange", "ngModel"], ["placeholder", "+91 98860 12345", 3, "ngModelChange", "ngModel"], ["placeholder", "Bengaluru", 3, "ngModelChange", "ngModel"], [1, "carpool-form-field", 2, "grid-column", "1 / -1"], ["placeholder", "e.g. Silk Board & Marathahalli", 3, "ngModelChange", "ngModel"], [1, "quick-locations"], [1, "quick-loc-pill", 3, "click"], ["placeholder", "e.g. Creta / Nexon / Swift", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "max", "7", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 3, "ngModelChange", "ngModel"], ["placeholder", "e.g. Leaving Friday 10 PM. 2 backpack slots.", 3, "ngModelChange", "ngModel"], ["class", "carpool-success-banner", 4, "ngIf"], ["class", "carpool-error-banner", 4, "ngIf"], ["type", "button", 1, "carpool-publish-btn", 3, "click", "disabled"], [1, "carpool-loading"], [1, "carpool-empty"], [1, "carpool-list"], ["class", "carpool-ride-card", 4, "ngFor", "ngForOf"], [1, "carpool-ride-card"], [1, "ride-details"], [1, "carpool-ride-title"], [1, "carpool-ride-meta"], [1, "carpool-ride-owner"], [1, "seat-badge"], [1, "price-text"], ["class", "carpool-notes", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 1, "carpool-whatsapp-btn", 3, "href"], [1, "bi", "bi-whatsapp", "me-1"], [1, "carpool-notes"], [1, "bi", "bi-chat-quote", "me-1"], [1, "carpool-success-banner"], [1, "carpool-error-banner"], [1, "bi", "bi-exclamation-triangle-fill", "text-warning", "me-1"]],
    template: function MyBookingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_Template_button_click_3_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u2190");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5)(8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Expedition Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "My Trek Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 8)(13, "a", 9)(14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Explore Treks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, MyBookingsComponent_section_17_Template, 46, 7, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "main", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, MyBookingsComponent_div_19_Template, 17, 9, "div", 12)(20, MyBookingsComponent_div_20_Template, 9, 1, "div", 13)(21, MyBookingsComponent_div_21_Template, 2, 2, "div", 14)(22, MyBookingsComponent_div_22_Template, 4, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, MyBookingsComponent_div_23_Template, 1, 0, "div", 16)(24, MyBookingsComponent_div_24_Template, 15, 5, "div", 17)(25, MyBookingsComponent_div_25_Template, 1, 0, "div", 16)(26, MyBookingsComponent_div_26_Template, 72, 18, "div", 18)(27, MyBookingsComponent_div_27_Template, 20, 2, "div", 19)(28, MyBookingsComponent_div_28_Template, 21, 1, "div", 19)(29, MyBookingsComponent_div_29_Template, 38, 16, "div", 19)(30, MyBookingsComponent_div_30_Template, 86, 20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errorMessage && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ratingModalOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ratingModalOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showPassModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showPassModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showInvoiceModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showCertModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showRemainderModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showCarpoolModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_1__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background-color: #f7f4ee;\n  background-image: radial-gradient(circle at 10% 8%, rgba(31, 107, 87, 0.08) 0px, transparent 38%), radial-gradient(circle at 90% 92%, rgba(217, 143, 43, 0.07) 0px, transparent 40%), linear-gradient(180deg, #fbf8f2 0%, #f4eee2 100%);\n  color: #1a2621;\n  font-family: \"Manrope\", \"Inter\", -apple-system, BlinkMacSystemFont, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  --theme-forest: #1f6b57;\n  --theme-forest-dark: #134537;\n  --theme-forest-light: #e8f5f0;\n  --theme-forest-border: #c4e5d8;\n  --theme-amber: #d98f2b;\n  --theme-amber-dark: #92400e;\n  --theme-amber-light: #fef3c7;\n  --theme-sky: #0284c7;\n  --theme-sky-light: #e0f2fe;\n  --theme-danger: #dc2626;\n  --theme-danger-light: #fee2e2;\n  --theme-surface: #ffffff;\n  --theme-surface-subtle: #fbf9f4;\n  --theme-surface-inset: #f3ece0;\n  --theme-border: #e4dccc;\n  --theme-border-strong: #d2c5b0;\n  --text-heading: #14201a;\n  --text-body: #32433b;\n  --text-muted: #5e7368;\n  --text-dim: #8fa197;\n  --shadow-card: 0 4px 20px rgba(24, 40, 32, 0.06);\n  --shadow-card-hover: 0 12px 36px rgba(24, 40, 32, 0.12);\n  --shadow-modal: 0 24px 60px rgba(15, 28, 22, 0.22);\n  --radius-sm: 8px;\n  --radius-md: 14px;\n  --radius-lg: 20px;\n  --radius-xl: 26px;\n}\n\n.bookings-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.top-nav-bar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 90;\n  background: rgba(255, 255, 255, 0.92);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border-bottom: 1px solid rgba(228, 220, 204, 0.85);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 14px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #f5efe3;\n  border: 1px solid #dfd5c2;\n  color: var(--text-heading);\n  font-size: 0.85rem;\n  font-weight: 700;\n  padding: 8px 16px;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-back-btn[_ngcontent-%COMP%]   .back-arrow[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  transition: transform 0.2s ease;\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-back-btn[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  border-color: #c4b59d;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  transform: translateX(-2px);\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-back-btn[_ngcontent-%COMP%]:hover   .back-arrow[_ngcontent-%COMP%] {\n  transform: translateX(-2px);\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-brand[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-brand[_ngcontent-%COMP%]   .brand-sub[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--theme-forest);\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-brand[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: var(--text-heading);\n  letter-spacing: -0.01em;\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%]   .btn-browse-new[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: linear-gradient(135deg, var(--theme-forest) 0%, var(--theme-forest-dark) 100%);\n  color: #ffffff;\n  font-size: 0.82rem;\n  font-weight: 700;\n  padding: 9px 18px;\n  border-radius: var(--radius-md);\n  text-decoration: none;\n  box-shadow: 0 4px 14px rgba(31, 107, 87, 0.25);\n  transition: all 0.2s ease;\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%]   .btn-browse-new[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%]   .btn-browse-new[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(31, 107, 87, 0.38);\n  filter: brightness(1.06);\n}\n\n.hero-expedition-banner[_ngcontent-%COMP%] {\n  padding: 32px 24px 16px;\n  position: relative;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #184f41 0%, #103a30 100%);\n  border-radius: var(--radius-xl);\n  padding: 32px 36px;\n  box-shadow: 0 10px 30px rgba(19, 69, 55, 0.18);\n  position: relative;\n  overflow: hidden;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -40%;\n  right: -15%;\n  width: 420px;\n  height: 420px;\n  background: radial-gradient(circle, rgba(217, 143, 43, 0.22) 0%, transparent 70%);\n  pointer-events: none;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .expedition-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #a7f3d0;\n  font-size: 0.72rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  padding: 5px 14px;\n  border-radius: 999px;\n  margin-bottom: 14px;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .expedition-badge[_ngcontent-%COMP%]   .pulse-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #34d399;\n  box-shadow: 0 0 8px #34d399;\n  animation: _ngcontent-%COMP%_pulseAnim 2s infinite ease-in-out;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-heading[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: clamp(1.6rem, 3.2vw, 2.3rem);\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.02em;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fbbf24 0%, #fed7aa 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-subtext[_ngcontent-%COMP%] {\n  margin: 0 0 26px;\n  font-size: 0.94rem;\n  color: #c7ded5;\n  max-width: 680px;\n  line-height: 1.6;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));\n  gap: 16px;\n  margin-top: 10px;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: var(--radius-md);\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  transition: all 0.25s ease;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.14);\n  border-color: rgba(255, 255, 255, 0.3);\n  transform: translateY(-2px);\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  flex-shrink: 0;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon.upcoming-icon[_ngcontent-%COMP%] {\n  background: rgba(56, 189, 248, 0.2);\n  color: #38bdf8;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon.completed-icon[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  color: #fbbf24;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon.total-icon[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  color: #34d399;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon.spent-icon[_ngcontent-%COMP%] {\n  background: rgba(192, 132, 252, 0.2);\n  color: #e9d5ff;\n  font-weight: 800;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-data[_ngcontent-%COMP%]   .metric-val[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.01em;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-data[_ngcontent-%COMP%]   .metric-lbl[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #a3c4b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n.dashboard-main-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 16px 24px 72px;\n  flex: 1;\n}\n\n.tab-nav-container[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.tab-nav-container[_ngcontent-%COMP%]   .segmented-pill-nav[_ngcontent-%COMP%] {\n  display: inline-flex;\n  background: #e9e1d1;\n  border: 1px solid #dcd2bf;\n  border-radius: 999px;\n  padding: 5px;\n  gap: 6px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.tab-nav-container[_ngcontent-%COMP%]   .pill-tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  font-size: 0.86rem;\n  font-weight: 700;\n  padding: 9px 20px;\n  border-radius: 999px;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.tab-nav-container[_ngcontent-%COMP%]   .pill-tab[_ngcontent-%COMP%]   .tab-emoji[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.tab-nav-container[_ngcontent-%COMP%]   .pill-tab[_ngcontent-%COMP%]   .tab-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.08);\n  color: var(--text-heading);\n  font-size: 0.7rem;\n  font-weight: 800;\n  padding: 2px 8px;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.tab-nav-container[_ngcontent-%COMP%]   .pill-tab[_ngcontent-%COMP%]:hover {\n  color: var(--text-heading);\n  background: rgba(255, 255, 255, 0.5);\n}\n.tab-nav-container[_ngcontent-%COMP%]   .pill-tab.active[_ngcontent-%COMP%] {\n  background: var(--theme-forest);\n  color: #ffffff;\n  box-shadow: 0 4px 14px rgba(31, 107, 87, 0.3);\n}\n.tab-nav-container[_ngcontent-%COMP%]   .pill-tab.active[_ngcontent-%COMP%]   .tab-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  color: #ffffff;\n}\n\n.stream-header[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.stream-header[_ngcontent-%COMP%]   .stream-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n}\n.stream-header[_ngcontent-%COMP%]   .stream-title-group[_ngcontent-%COMP%]   .stream-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--text-heading);\n  letter-spacing: -0.01em;\n}\n.stream-header[_ngcontent-%COMP%]   .stream-title-group[_ngcontent-%COMP%]   .stream-count[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--theme-forest);\n  background: var(--theme-forest-light);\n  padding: 3px 12px;\n  border-radius: 12px;\n  border: 1px solid var(--theme-forest-border);\n}\n\n.expeditions-stream[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n\n.expedition-ticket-card[_ngcontent-%COMP%] {\n  background: var(--theme-surface);\n  border: 1px solid var(--theme-border);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-card);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  position: relative;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5cb;\n  box-shadow: var(--shadow-card-hover);\n  transform: translateY(-2px);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]:hover   .ticket-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.03);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 240px;\n  height: 100%;\n  overflow: hidden;\n  background: #ebe5d8;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%]   .visual-gradient-scrim[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(15, 28, 22, 0.7) 0%, rgba(15, 28, 22, 0.05) 45%, rgba(15, 28, 22, 0.75) 100%);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%]   .visual-top-chips[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  left: 14px;\n  right: 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  z-index: 2;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%]   .visual-top-chips[_ngcontent-%COMP%]   .ref-tag[_ngcontent-%COMP%] {\n  background: rgba(15, 28, 22, 0.75);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #f1f5f9;\n  font-family: ui-monospace, SFMono-Regular, monospace;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 8px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%]   .visual-top-chips[_ngcontent-%COMP%]   .ref-tag[_ngcontent-%COMP%]   .hash-sym[_ngcontent-%COMP%] {\n  color: #34d399;\n  margin-right: 2px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%]   .visual-top-chips[_ngcontent-%COMP%]   .countdown-tag[_ngcontent-%COMP%] {\n  background: rgba(217, 143, 43, 0.9);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  color: #ffffff;\n  font-size: 0.7rem;\n  font-weight: 800;\n  padding: 4px 10px;\n  border-radius: 8px;\n  letter-spacing: 0.02em;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%]   .visual-bottom-status[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  left: 14px;\n  right: 14px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  z-index: 2;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%]   .visual-bottom-status[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 4px 12px;\n  border-radius: 999px;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-details[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 16px;\n  background: #ffffff;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .trek-headline[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .trek-headline[_ngcontent-%COMP%]   .headline-main[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .trek-headline[_ngcontent-%COMP%]   .headline-main[_ngcontent-%COMP%]   .trek-title[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: var(--text-heading);\n  letter-spacing: -0.01em;\n  line-height: 1.3;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .trek-headline[_ngcontent-%COMP%]   .headline-main[_ngcontent-%COMP%]   .trek-location[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .trek-headline[_ngcontent-%COMP%]   .headline-main[_ngcontent-%COMP%]   .trek-location[_ngcontent-%COMP%]   .pin-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .trek-headline[_ngcontent-%COMP%]   .price-summary-badge[_ngcontent-%COMP%] {\n  background: var(--theme-forest-light);\n  border: 1px solid var(--theme-forest-border);\n  border-radius: var(--radius-md);\n  padding: 10px 16px;\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .trek-headline[_ngcontent-%COMP%]   .price-summary-badge[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .trek-headline[_ngcontent-%COMP%]   .price-summary-badge[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--theme-forest);\n  letter-spacing: -0.01em;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .itinerary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n  background: var(--theme-surface-subtle);\n  border: 1px solid var(--theme-border);\n  border-radius: var(--radius-md);\n  padding: 14px 16px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .itinerary-grid[_ngcontent-%COMP%]   .itinerary-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .itinerary-grid[_ngcontent-%COMP%]   .itinerary-cell[_ngcontent-%COMP%]   .cell-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .itinerary-grid[_ngcontent-%COMP%]   .itinerary-cell[_ngcontent-%COMP%]   .cell-val[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--text-body);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .itinerary-grid[_ngcontent-%COMP%]   .itinerary-cell[_ngcontent-%COMP%]   .balance-due-text[_ngcontent-%COMP%] {\n  color: #b45309;\n  font-weight: 800;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .itinerary-grid[_ngcontent-%COMP%]   .itinerary-cell[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .addons-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .addons-bar[_ngcontent-%COMP%]   .addon-tag[_ngcontent-%COMP%] {\n  background: #f1ede3;\n  border: 1px solid #ddd5c4;\n  color: var(--text-body);\n  font-size: 0.74rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 8px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .review-bubble[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-radius: var(--radius-md);\n  padding: 12px 16px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .review-bubble[_ngcontent-%COMP%]   .review-stars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #cbd5e1;\n  font-size: 0.95rem;\n  margin-bottom: 6px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .review-bubble[_ngcontent-%COMP%]   .review-stars[_ngcontent-%COMP%]   .star-lit[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .review-bubble[_ngcontent-%COMP%]   .review-stars[_ngcontent-%COMP%]   .review-date[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .review-bubble[_ngcontent-%COMP%]   .review-text[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 0.85rem;\n  color: #334155;\n  font-style: italic;\n  line-height: 1.5;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .review-bubble[_ngcontent-%COMP%]   .admin-response[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px dashed #fcd34d;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .review-bubble[_ngcontent-%COMP%]   .admin-response[_ngcontent-%COMP%]   .admin-resp-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #15803d;\n  margin-bottom: 2px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .review-bubble[_ngcontent-%COMP%]   .admin-response[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  color: #475569;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .cancellation-policy-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--theme-danger-light);\n  border: 1px solid #fecaca;\n  border-radius: var(--radius-sm);\n  padding: 8px 12px;\n  font-size: 0.78rem;\n  color: #991b1b;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .cancellation-policy-bar[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .cancellation-policy-bar[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #7f1d1d;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  padding-top: 14px;\n  border-top: 1px solid var(--theme-border);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .act-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  padding: 9px 16px;\n  border-radius: var(--radius-md);\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  text-decoration: none;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .act-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .act-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .act-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-digital-pass[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--theme-forest) 0%, var(--theme-forest-dark) 100%);\n  color: #ffffff;\n  box-shadow: 0 4px 14px rgba(31, 107, 87, 0.25);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-digital-pass[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 18px rgba(31, 107, 87, 0.38);\n  filter: brightness(1.06);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-settle-balance[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--theme-amber) 0%, #b45309 100%);\n  color: #ffffff;\n  box-shadow: 0 4px 14px rgba(217, 143, 43, 0.25);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-settle-balance[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 18px rgba(217, 143, 43, 0.38);\n  filter: brightness(1.06);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-carpool[_ngcontent-%COMP%] {\n  background: var(--theme-sky-light);\n  border: 1px solid #bae6fd;\n  color: var(--theme-sky);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-carpool[_ngcontent-%COMP%]:hover {\n  background: #bae6fd;\n  border-color: #7dd3fc;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-summit-cert[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d98f2b 0%, #92400e 100%);\n  color: #ffffff;\n  box-shadow: 0 4px 14px rgba(217, 143, 43, 0.25);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-summit-cert[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 18px rgba(217, 143, 43, 0.38);\n  filter: brightness(1.06);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-rating[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  color: #334155;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-rating[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #94a3b8;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-cancel-trip[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #fecaca;\n  color: var(--theme-danger);\n  margin-left: auto;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-cancel-trip[_ngcontent-%COMP%]:hover {\n  background: var(--theme-danger-light);\n  border-color: #fca5a5;\n}\n\n.badge-confirmed[_ngcontent-%COMP%] {\n  background: #dcfce7 !important;\n  border: 1px solid #86efac !important;\n  color: #15803d !important;\n}\n\n.badge-completed[_ngcontent-%COMP%] {\n  background: #e0f2fe !important;\n  border: 1px solid #7dd3fc !important;\n  color: #0369a1 !important;\n}\n\n.badge-cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2 !important;\n  border: 1px solid #fca5a5 !important;\n  color: #b91c1c !important;\n}\n\n.badge-pending[_ngcontent-%COMP%] {\n  background: #fef3c7 !important;\n  border: 1px solid #fde047 !important;\n  color: #a16207 !important;\n}\n\n.badge-paid[_ngcontent-%COMP%] {\n  background: #dcfce7 !important;\n  border: 1px solid #86efac !important;\n  color: #15803d !important;\n}\n\n.badge-partial[_ngcontent-%COMP%] {\n  background: #fef3c7 !important;\n  border: 1px solid #fcd34d !important;\n  color: #b45309 !important;\n}\n\n.empty-expedition-state[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px dashed var(--theme-border-strong);\n  border-radius: var(--radius-xl);\n  padding: 64px 32px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-card);\n}\n.empty-expedition-state[_ngcontent-%COMP%]   .empty-compass-glyph[_ngcontent-%COMP%] {\n  font-size: 3.8rem;\n  margin-bottom: 16px;\n  animation: _ngcontent-%COMP%_floatAnim 4s infinite ease-in-out;\n}\n.empty-expedition-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text-heading);\n}\n.empty-expedition-state[_ngcontent-%COMP%]   .empty-subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 28px;\n  font-size: 0.94rem;\n  color: var(--text-muted);\n  max-width: 480px;\n  line-height: 1.6;\n}\n.empty-expedition-state[_ngcontent-%COMP%]   .empty-cta-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.empty-expedition-state[_ngcontent-%COMP%]   .empty-cta-wrap[_ngcontent-%COMP%]   .btn-explore-treks[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--theme-forest) 0%, var(--theme-forest-dark) 100%);\n  color: #ffffff;\n  font-size: 0.88rem;\n  font-weight: 700;\n  padding: 12px 24px;\n  border-radius: var(--radius-md);\n  text-decoration: none;\n  box-shadow: 0 4px 16px rgba(31, 107, 87, 0.25);\n  transition: all 0.2s ease;\n}\n.empty-expedition-state[_ngcontent-%COMP%]   .empty-cta-wrap[_ngcontent-%COMP%]   .btn-explore-treks[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(31, 107, 87, 0.35);\n  filter: brightness(1.06);\n}\n.empty-expedition-state[_ngcontent-%COMP%]   .empty-cta-wrap[_ngcontent-%COMP%]   .btn-faq-link[_ngcontent-%COMP%] {\n  background: #f5efe3;\n  border: 1px solid #dfd5c2;\n  color: var(--text-heading);\n  font-size: 0.88rem;\n  font-weight: 700;\n  padding: 12px 20px;\n  border-radius: var(--radius-md);\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.empty-expedition-state[_ngcontent-%COMP%]   .empty-cta-wrap[_ngcontent-%COMP%]   .btn-faq-link[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n\n.skeleton-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.skeleton-container[_ngcontent-%COMP%]   .skel-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--theme-border);\n  border-radius: var(--radius-xl);\n  height: 180px;\n  display: flex;\n  overflow: hidden;\n}\n.skeleton-container[_ngcontent-%COMP%]   .skel-card[_ngcontent-%COMP%]   .skel-thumb[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 100%;\n  background: #eee8dc;\n}\n.skeleton-container[_ngcontent-%COMP%]   .skel-card[_ngcontent-%COMP%]   .skel-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.skeleton-container[_ngcontent-%COMP%]   .skel-card[_ngcontent-%COMP%]   .skel-line[_ngcontent-%COMP%] {\n  height: 16px;\n  border-radius: 6px;\n  background: #eee8dc;\n}\n.skeleton-container[_ngcontent-%COMP%]   .skel-card[_ngcontent-%COMP%]   .skel-line.w-40[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.skeleton-container[_ngcontent-%COMP%]   .skel-card[_ngcontent-%COMP%]   .skel-line.w-70[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.skeleton-container[_ngcontent-%COMP%]   .skel-card[_ngcontent-%COMP%]   .skel-line.w-90[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.skeleton-container[_ngcontent-%COMP%]   .shimmer[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.skeleton-container[_ngcontent-%COMP%]   .shimmer[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);\n  animation: _ngcontent-%COMP%_shimmerAnim 1.5s infinite;\n}\n\n.state-card.error-card[_ngcontent-%COMP%] {\n  background: var(--theme-danger-light);\n  border: 1px solid #fecaca;\n  border-radius: var(--radius-lg);\n  padding: 32px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.state-card.error-card[_ngcontent-%COMP%]   .state-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.state-card.error-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--theme-danger);\n  font-size: 1.2rem;\n}\n.state-card.error-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-body);\n  font-size: 0.9rem;\n}\n.state-card.error-card[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  background: var(--theme-danger);\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 700;\n  cursor: pointer;\n  margin-top: 6px;\n}\n\n.rating-backdrop[_ngcontent-%COMP%], \n.modal-backdrop-custom[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9999;\n  background: rgba(18, 30, 25, 0.65);\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  overflow-y: auto;\n}\n\n.rating-modal[_ngcontent-%COMP%], \n.trek-pass-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  overflow-y: auto;\n}\n\n.rating-card[_ngcontent-%COMP%], \n.trek-pass-card[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: var(--text-body);\n  border: 1px solid var(--theme-border);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-modal);\n  width: min(640px, 96vw);\n  max-height: 90vh;\n  overflow-y: auto;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_modalPop 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.rating-card[_ngcontent-%COMP%] {\n  padding: 28px;\n  max-width: 480px;\n}\n.rating-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: var(--text-heading);\n}\n.rating-card[_ngcontent-%COMP%]   .rating-subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  font-size: 0.88rem;\n  color: var(--text-muted);\n}\n.rating-card[_ngcontent-%COMP%]   .stars-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.rating-card[_ngcontent-%COMP%]   .stars-row[_ngcontent-%COMP%]   .star-btn[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  color: #cbd5e1;\n  font-size: 1.4rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.rating-card[_ngcontent-%COMP%]   .stars-row[_ngcontent-%COMP%]   .star-btn[_ngcontent-%COMP%]:hover, .rating-card[_ngcontent-%COMP%]   .stars-row[_ngcontent-%COMP%]   .star-btn.active[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  border-color: #fcd34d;\n  background: #fef3c7;\n  transform: scale(1.08);\n}\n.rating-card[_ngcontent-%COMP%]   .review-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: var(--radius-md);\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: var(--text-heading);\n  font-size: 0.88rem;\n  font-family: inherit;\n  padding: 12px 14px;\n  resize: vertical;\n  min-height: 100px;\n  margin-bottom: 12px;\n}\n.rating-card[_ngcontent-%COMP%]   .review-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--theme-forest);\n  box-shadow: 0 0 0 3px rgba(31, 107, 87, 0.15);\n}\n.rating-card[_ngcontent-%COMP%]   .rating-error[_ngcontent-%COMP%] {\n  color: var(--theme-danger);\n  font-size: 0.8rem;\n  margin: 0 0 12px;\n}\n.rating-card[_ngcontent-%COMP%]   .rating-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.rating-card[_ngcontent-%COMP%]   .rating-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border-radius: var(--radius-md);\n  font-size: 0.84rem;\n  font-weight: 700;\n  border: 1px solid #cbd5e1;\n  background: #f8fafc;\n  color: #334155;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.rating-card[_ngcontent-%COMP%]   .rating-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.rating-card[_ngcontent-%COMP%]   .rating-actions[_ngcontent-%COMP%]   .action-btn.primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--theme-forest) 0%, var(--theme-forest-dark) 100%);\n  border-color: transparent;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(31, 107, 87, 0.25);\n}\n.rating-card[_ngcontent-%COMP%]   .rating-actions[_ngcontent-%COMP%]   .action-btn.primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.06);\n}\n\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #184f41 0%, #103a30 100%);\n  padding: 20px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .pass-brand[_ngcontent-%COMP%]   .pass-org[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .pass-brand[_ngcontent-%COMP%]   .pass-org[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #a7f3d0;\n  display: block;\n  margin-bottom: 4px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .pass-brand[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .pass-brand[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .pass-brand[_ngcontent-%COMP%]   .pass-ref[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .pass-brand[_ngcontent-%COMP%]   .pass-ref[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-family: ui-monospace, SFMono-Regular, monospace;\n  color: #d1fae5;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .close-pass-btn[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .close-pass-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: #ffffff;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  font-size: 0.95rem;\n  transition: all 0.15s ease;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .close-pass-btn[_ngcontent-%COMP%]:hover, \n.pass-modal-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .close-pass-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.05);\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: var(--theme-surface-subtle);\n  border: 1px dashed var(--theme-border-strong);\n  border-radius: var(--radius-md);\n  padding: 16px 20px;\n  flex-wrap: wrap;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%]   .qr-img[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%]   .qr-img[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n  border-radius: 12px;\n  background: #ffffff;\n  padding: 6px;\n  border: 1px solid #e2e8f0;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%]   .qr-hint[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%]   .qr-hint[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--text-muted);\n  margin-top: 6px;\n  font-weight: 700;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .pass-clearance[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .pass-clearance[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .pass-clearance[_ngcontent-%COMP%]   .clearance-pill[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .pass-clearance[_ngcontent-%COMP%]   .clearance-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 999px;\n  background: #fef3c7;\n  border: 1px solid #fcd34d;\n  color: #b45309;\n  font-size: 0.78rem;\n  font-weight: 800;\n  width: fit-content;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .pass-clearance[_ngcontent-%COMP%]   .clearance-pill.verified[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .pass-clearance[_ngcontent-%COMP%]   .clearance-pill.verified[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  border-color: #86efac;\n  color: #15803d;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .pass-clearance[_ngcontent-%COMP%]   .security-code[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .pass-clearance[_ngcontent-%COMP%]   .security-code[_ngcontent-%COMP%] {\n  font-family: ui-monospace, SFMono-Regular, monospace;\n  font-size: 0.72rem;\n  color: var(--text-dim);\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%]   .pass-field[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%]   .pass-field[_ngcontent-%COMP%] {\n  background: var(--theme-surface-subtle);\n  border: 1px solid var(--theme-border);\n  border-radius: var(--radius-md);\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%]   .pass-field[_ngcontent-%COMP%]   .p-label[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%]   .pass-field[_ngcontent-%COMP%]   .p-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 800;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%]   .pass-field[_ngcontent-%COMP%]   .p-val[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%]   .pass-field[_ngcontent-%COMP%]   .p-val[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-heading);\n  font-weight: 700;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%]   .pass-field[_ngcontent-%COMP%]   .highlight-qty[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%]   .pass-field[_ngcontent-%COMP%]   .highlight-qty[_ngcontent-%COMP%] {\n  color: var(--theme-forest);\n  font-size: 1rem;\n  font-weight: 800;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--theme-forest);\n  margin: 0 0 10px;\n  font-weight: 800;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid var(--theme-border);\n  border-radius: var(--radius-md);\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.78rem;\n  min-width: 480px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  border-bottom: 1px solid #f1f5f9;\n  white-space: nowrap;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--theme-surface-subtle);\n  color: var(--text-muted);\n  font-weight: 800;\n  text-transform: uppercase;\n  font-size: 0.68rem;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--text-body);\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   .blood-pill[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   .blood-pill[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  border: 1px solid #fca5a5;\n  color: #b91c1c;\n  padding: 2px 7px;\n  border-radius: 6px;\n  font-weight: 800;\n  font-size: 0.72rem;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   .med-pill[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   .med-pill[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #15803d;\n  font-weight: 700;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   .med-pill.warn[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   .med-pill.warn[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-weight: 800;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-guidelines[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-guidelines[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: var(--radius-md);\n  padding: 12px 16px;\n  font-size: 0.78rem;\n  color: #166534;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-guidelines[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-guidelines[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  background: var(--theme-surface-subtle);\n  border-top: 1px solid var(--theme-border);\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-print-pass[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-print-pass[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--theme-forest) 0%, var(--theme-forest-dark) 100%);\n  color: #ffffff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: var(--radius-md);\n  font-weight: 700;\n  font-size: 0.84rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-print-pass[_ngcontent-%COMP%]:hover, \n.pass-modal-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-print-pass[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.06);\n  transform: translateY(-1px);\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-close-pass[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-close-pass[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  color: #334155;\n  padding: 10px 18px;\n  border-radius: var(--radius-md);\n  font-weight: 700;\n  font-size: 0.84rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-close-pass[_ngcontent-%COMP%]:hover, \n.pass-modal-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-close-pass[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n\n.invoice-detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px;\n  margin-bottom: 18px;\n  font-size: 0.85rem;\n}\n\n.invoice-detail-heading[_ngcontent-%COMP%] {\n  color: var(--theme-forest);\n  font-weight: 800;\n  font-size: 0.7rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n\n.invoice-detail-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: var(--text-body);\n  line-height: 1.6;\n}\n\n.invoice-table-wrap[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n.invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.82rem;\n}\n.invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  border-bottom: 1px solid #f1f5f9;\n}\n.invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--theme-surface-subtle);\n  color: var(--text-muted);\n  font-weight: 800;\n  text-transform: uppercase;\n  font-size: 0.7rem;\n}\n.invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%]   td.num[_ngcontent-%COMP%], .invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%]   th.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%]   tr.subtotal-row[_ngcontent-%COMP%] {\n  background: #fafaf9;\n  font-weight: 800;\n}\n.invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%]   tr.tax-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%]   tr.total-row[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  font-weight: 800;\n  color: #15803d;\n  font-size: 1rem;\n}\n\n.cert-modal-card[_ngcontent-%COMP%] {\n  border: 3px solid #f59e0b !important;\n  background: radial-gradient(circle at center, #fffdfa 0%, #fbf8f0 100%) !important;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px 20px 10px;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%]   .cert-icons[_ngcontent-%COMP%] {\n  font-size: 2.6rem;\n  margin-bottom: 8px;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%]   .cert-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #78350f;\n  letter-spacing: 0.02em;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%]   .cert-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #92400e;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-top: 4px;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-body[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px 30px 28px;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-body[_ngcontent-%COMP%]   .cert-presented-to[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-body[_ngcontent-%COMP%]   .cert-recipient-name[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin: 10px 0;\n  border-bottom: 2px solid #f59e0b;\n  display: inline-block;\n  padding-bottom: 6px;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-body[_ngcontent-%COMP%]   .cert-description[_ngcontent-%COMP%] {\n  font-size: 0.94rem;\n  color: #334155;\n  margin-top: 14px;\n  line-height: 1.6;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-body[_ngcontent-%COMP%]   .cert-description[_ngcontent-%COMP%]   .cert-trek-name[_ngcontent-%COMP%] {\n  color: var(--theme-forest);\n  font-size: 1.15rem;\n  font-weight: 800;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-body[_ngcontent-%COMP%]   .cert-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-top: 24px;\n  padding-top: 16px;\n  border-top: 1px dashed #e2e8f0;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-body[_ngcontent-%COMP%]   .cert-meta-row[_ngcontent-%COMP%]   .cert-meta-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #92400e;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-body[_ngcontent-%COMP%]   .cert-meta-row[_ngcontent-%COMP%]   .cert-meta-value[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #0f172a;\n  font-weight: 800;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .btn-share-cert[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d98f2b 0%, #b45309 100%) !important;\n}\n\n.remainder-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d98f2b 0%, #b45309 100%) !important;\n}\n\n.remainder-summary[_ngcontent-%COMP%] {\n  background: var(--theme-surface-subtle);\n  border: 1px solid var(--theme-border);\n  padding: 16px;\n  border-radius: var(--radius-md);\n  margin-bottom: 16px;\n}\n.remainder-summary[_ngcontent-%COMP%]   .remainder-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  font-size: 0.88rem;\n  color: var(--text-body);\n}\n.remainder-summary[_ngcontent-%COMP%]   .remainder-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-heading);\n}\n.remainder-summary[_ngcontent-%COMP%]   .remainder-row.remainder-row-paid[_ngcontent-%COMP%] {\n  color: #15803d;\n  font-weight: 700;\n}\n.remainder-summary[_ngcontent-%COMP%]   .remainder-row.remainder-row-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid var(--theme-border);\n  padding-top: 10px;\n  margin-top: 10px;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #b45309;\n}\n\n.remainder-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #86efac;\n  color: #15803d;\n  padding: 14px;\n  border-radius: var(--radius-md);\n  font-weight: 800;\n  text-align: center;\n  font-size: 0.9rem;\n}\n\n.btn-pay-remainder[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--theme-amber) 0%, #b45309 100%) !important;\n}\n\n.carpool-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%) !important;\n}\n\n.carpool-filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.carpool-filter-bar[_ngcontent-%COMP%]   .filter-pill[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  border-radius: 999px;\n  padding: 6px 14px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.carpool-filter-bar[_ngcontent-%COMP%]   .filter-pill.active[_ngcontent-%COMP%] {\n  background: #0284c7;\n  border-color: #0284c7;\n  color: #ffffff;\n  box-shadow: 0 2px 10px rgba(2, 132, 199, 0.25);\n}\n\n.carpool-section-title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 0.94rem;\n  color: #0369a1;\n  margin-bottom: 12px;\n}\n\n.carpool-loading[_ngcontent-%COMP%], \n.carpool-empty[_ngcontent-%COMP%] {\n  padding: 18px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--theme-surface-subtle);\n  border-radius: var(--radius-md);\n  font-size: 0.85rem;\n  border: 1px dashed var(--theme-border-strong);\n}\n\n.carpool-ride-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e0f2fe;\n  padding: 14px 16px;\n  border-radius: var(--radius-md);\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.06);\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-ride-title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: var(--text-heading);\n  font-size: 0.95rem;\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-ride-meta[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-body);\n  margin-top: 3px;\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-ride-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-ride-owner[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin-top: 4px;\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-ride-owner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-heading);\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-ride-owner[_ngcontent-%COMP%]   .seat-badge[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  border: 1px solid #bae6fd;\n  color: #0369a1;\n  padding: 2px 8px;\n  border-radius: 999px;\n  font-weight: 800;\n  font-size: 0.72rem;\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-ride-owner[_ngcontent-%COMP%]   .price-text[_ngcontent-%COMP%] {\n  color: var(--theme-forest);\n  font-weight: 800;\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-notes[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--text-muted);\n  font-style: italic;\n  margin-top: 4px;\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-whatsapp-btn[_ngcontent-%COMP%] {\n  background: #25d366;\n  color: #ffffff;\n  padding: 8px 16px;\n  border-radius: var(--radius-md);\n  font-weight: 800;\n  text-decoration: none;\n  font-size: 0.84rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.25);\n  transition: all 0.15s ease;\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-whatsapp-btn[_ngcontent-%COMP%]:hover {\n  background: #1eb956;\n  transform: translateY(-1px);\n}\n\n.carpool-post-form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 16px;\n  background: var(--theme-surface-subtle);\n  border: 1px solid var(--theme-border);\n  border-radius: var(--radius-lg);\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-form-heading[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 0.92rem;\n  color: var(--text-heading);\n  margin-bottom: 12px;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: var(--text-muted);\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: var(--radius-sm);\n  background: #ffffff;\n  color: var(--text-heading);\n  font-family: inherit;\n  font-size: 0.84rem;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0284c7;\n  box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);\n}\n.carpool-post-form[_ngcontent-%COMP%]   .quick-locations[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .quick-locations[_ngcontent-%COMP%]   .quick-loc-pill[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  padding: 3px 10px;\n  border-radius: 999px;\n  cursor: pointer;\n  color: #334155;\n  font-weight: 600;\n  transition: all 0.15s ease;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .quick-locations[_ngcontent-%COMP%]   .quick-loc-pill[_ngcontent-%COMP%]:hover {\n  background: #0284c7;\n  color: #ffffff;\n  border-color: #0284c7;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-success-banner[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  border: 1px solid #86efac;\n  color: #15803d;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  font-weight: 800;\n  font-size: 0.84rem;\n  text-align: center;\n  margin-top: 12px;\n  animation: _ngcontent-%COMP%_modalPop 0.2s ease-out;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-error-banner[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  border: 1px solid #fca5a5;\n  color: #b91c1c;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  font-weight: 700;\n  font-size: 0.82rem;\n  margin-top: 12px;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-publish-btn[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  width: 100%;\n  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);\n  color: #ffffff;\n  padding: 11px;\n  border: none;\n  border-radius: var(--radius-md);\n  font-weight: 800;\n  font-size: 0.88rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-publish-btn[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.06);\n}\n\n@keyframes _ngcontent-%COMP%_pulseAnim {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.3);\n    opacity: 0.5;\n  }\n}\n@keyframes _ngcontent-%COMP%_floatAnim {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-6px);\n  }\n}\n@keyframes _ngcontent-%COMP%_modalPop {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmerAnim {\n  100% {\n    transform: translateX(100%);\n  }\n}\n@media (max-width: 960px) {\n  .expedition-ticket-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%] {\n    min-height: 200px;\n    height: 200px;\n  }\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n}\n@media (max-width: 640px) {\n  .top-nav-bar[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .hero-expedition-banner[_ngcontent-%COMP%] {\n    padding: 20px 16px 12px;\n  }\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .dashboard-main-container[_ngcontent-%COMP%] {\n    padding: 12px 16px 48px;\n  }\n  .trek-headline[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .trek-headline[_ngcontent-%COMP%]   .price-summary-badge[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: left;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .pass-info-grid[_ngcontent-%COMP%], \n   .invoice-detail-grid[_ngcontent-%COMP%], \n   .carpool-form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbXktYm9va2luZ3MvbXktYm9va2luZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxzQkFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1T0FDRTtFQUdGLGNBQUE7RUFDQSw4RUFBQTtFQUNBLG1DQUFBO0VBR0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFFQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFFQSxvQkFBQTtFQUNBLDBCQUFBO0VBRUEsdUJBQUE7RUFDQSw2QkFBQTtFQUVBLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFFQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUVBLGdEQUFBO0VBQ0EsdURBQUE7RUFDQSxrREFBQTtFQUVBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBaEJGOztBQW1CQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFoQkY7O0FBc0JBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7QUFuQkY7QUFxQkU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQW5CSjtBQXNCRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0RBQUE7QUFwQko7QUFz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osKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcbi8vIEVYUEVESVRJT04gREFTSEJPQVJEIChNWSBCT09LSU5HUykgw6LCgMKUIFdhcm0gTmF0dXJlIFRoZW1lXG4vLyBIYXJtb25pemVzIHdpdGggZ29XSUxEIEthcnVuYWR1IEVjby1Ub3VyaXNtIFBhbGV0dGVcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y0ZWU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTAlIDglLCByZ2JhKDMxLCAxMDcsIDg3LCAwLjA4KSAwcHgsIHRyYW5zcGFyZW50IDM4JSksXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA5MCUgOTIlLCByZ2JhKDIxNywgMTQzLCA0MywgMC4wNykgMHB4LCB0cmFuc3BhcmVudCA0MCUpLFxuICAgIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYmY4ZjIgMCUsICNmNGVlZTIgMTAwJSk7XG4gIGNvbG9yOiAjMWEyNjIxO1xuICBmb250LWZhbWlseTogJ01hbnJvcGUnLCAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXG4gIC8vIEN1c3RvbSBDb2xvciBUb2tlbnNcbiAgLS10aGVtZS1mb3Jlc3Q6ICMxZjZiNTc7XG4gIC0tdGhlbWUtZm9yZXN0LWRhcms6ICMxMzQ1Mzc7XG4gIC0tdGhlbWUtZm9yZXN0LWxpZ2h0OiAjZThmNWYwO1xuICAtLXRoZW1lLWZvcmVzdC1ib3JkZXI6ICNjNGU1ZDg7XG4gIFxuICAtLXRoZW1lLWFtYmVyOiAjZDk4ZjJiO1xuICAtLXRoZW1lLWFtYmVyLWRhcms6ICM5MjQwMGU7XG4gIC0tdGhlbWUtYW1iZXItbGlnaHQ6ICNmZWYzYzc7XG4gIFxuICAtLXRoZW1lLXNreTogIzAyODRjNztcbiAgLS10aGVtZS1za3ktbGlnaHQ6ICNlMGYyZmU7XG4gIFxuICAtLXRoZW1lLWRhbmdlcjogI2RjMjYyNjtcbiAgLS10aGVtZS1kYW5nZXItbGlnaHQ6ICNmZWUyZTI7XG5cbiAgLS10aGVtZS1zdXJmYWNlOiAjZmZmZmZmO1xuICAtLXRoZW1lLXN1cmZhY2Utc3VidGxlOiAjZmJmOWY0O1xuICAtLXRoZW1lLXN1cmZhY2UtaW5zZXQ6ICNmM2VjZTA7XG4gIC0tdGhlbWUtYm9yZGVyOiAjZTRkY2NjO1xuICAtLXRoZW1lLWJvcmRlci1zdHJvbmc6ICNkMmM1YjA7XG5cbiAgLS10ZXh0LWhlYWRpbmc6ICMxNDIwMWE7XG4gIC0tdGV4dC1ib2R5OiAjMzI0MzNiO1xuICAtLXRleHQtbXV0ZWQ6ICM1ZTczNjg7XG4gIC0tdGV4dC1kaW06ICM4ZmExOTc7XG5cbiAgLS1zaGFkb3ctY2FyZDogMCA0cHggMjBweCByZ2JhKDI0LCA0MCwgMzIsIDAuMDYpO1xuICAtLXNoYWRvdy1jYXJkLWhvdmVyOiAwIDEycHggMzZweCByZ2JhKDI0LCA0MCwgMzIsIDAuMTIpO1xuICAtLXNoYWRvdy1tb2RhbDogMCAyNHB4IDYwcHggcmdiYSgxNSwgMjgsIDIyLCAwLjIyKTtcblxuICAtLXJhZGl1cy1zbTogOHB4O1xuICAtLXJhZGl1cy1tZDogMTRweDtcbiAgLS1yYWRpdXMtbGc6IDIwcHg7XG4gIC0tcmFkaXVzLXhsOiAyNnB4O1xufVxuXG4uYm9va2luZ3Mtd3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gVE9QIEhFQURFUiBCQVJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnRvcC1uYXYtYmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5MDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjI4LCAyMjAsIDIwNCwgMC44NSk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcblxuICAubmF2LWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMTRweCAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLm5hdi1iYWNrLWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjVlZmUzO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZmQ1YzI7XG4gICAgY29sb3I6IHZhcigtLXRleHQtaGVhZGluZyk7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG5cbiAgICAuYmFjay1hcnJvdyB7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjYzRiNTlkO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XG5cbiAgICAgIC5iYWNrLWFycm93IHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5uYXYtYnJhbmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5icmFuZC1zdWIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDAuNjhyZW07XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBjb2xvcjogdmFyKC0tdGhlbWUtZm9yZXN0KTtcbiAgICB9XG5cbiAgICAuYnJhbmQtdGl0bGUge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtaGVhZGluZyk7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbiAgICB9XG4gIH1cblxuICAubmF2LWFjdGlvbnMge1xuICAgIC5idG4tYnJvd3NlLW5ldyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDZweDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXRoZW1lLWZvcmVzdCkgMCUsIHZhcigtLXRoZW1lLWZvcmVzdC1kYXJrKSAxMDAlKTtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgZm9udC1zaXplOiAwLjgycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHBhZGRpbmc6IDlweCAxOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgzMSwgMTA3LCA4NywgMC4yNSk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoMzEsIDEwNywgODcsIDAuMzgpO1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wNik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gSEVSTyBFWFBFRElUSU9OIEJBTk5FUlxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uaGVyby1leHBlZGl0aW9uLWJhbm5lciB7XG4gIHBhZGRpbmc6IDMycHggMjRweCAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmhlcm8taW5uZXIge1xuICAgIG1heC13aWR0aDogMTI4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmhlcm8tY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE4NGY0MSAwJSwgIzEwM2EzMCAxMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xuICAgIHBhZGRpbmc6IDMycHggMzZweDtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDE5LCA2OSwgNTUsIDAuMTgpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtNDAlO1xuICAgICAgcmlnaHQ6IC0xNSU7XG4gICAgICB3aWR0aDogNDIwcHg7XG4gICAgICBoZWlnaHQ6IDQyMHB4O1xuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMTcsIDE0MywgNDMsIDAuMjIpIDAlLCB0cmFuc3BhcmVudCA3MCUpO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmV4cGVkaXRpb24tYmFkZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgY29sb3I6ICNhN2YzZDA7XG4gICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICAgIHBhZGRpbmc6IDVweCAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG5cbiAgICAucHVsc2UtZG90IHtcbiAgICAgIHdpZHRoOiA3cHg7XG4gICAgICBoZWlnaHQ6IDdweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6ICMzNGQzOTk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgOHB4ICMzNGQzOTk7XG4gICAgICBhbmltYXRpb246IHB1bHNlQW5pbSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICB9XG4gIH1cblxuICAuaGVyby1oZWFkaW5nIHtcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS42cmVtLCAzLjJ2dywgMi4zcmVtKTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuXG4gICAgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmJiZjI0IDAlLCAjZmVkN2FhIDEwMCUpO1xuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgLmhlcm8tc3VidGV4dCB7XG4gICAgbWFyZ2luOiAwIDAgMjZweDtcbiAgICBmb250LXNpemU6IDAuOTRyZW07XG4gICAgY29sb3I6ICNjN2RlZDU7XG4gICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICB9XG5cbiAgLy8gSEVSTyBNRVRSSUNTIEdSSURcbiAgLmhlcm8tbWV0cmljcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIxMHB4LCAxZnIpKTtcbiAgICBnYXA6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgIC5tZXRyaWMtY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgICBwYWRkaW5nOiAxNnB4IDE4cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTRweDtcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgfVxuXG4gICAgICAubWV0cmljLWljb24ge1xuICAgICAgICB3aWR0aDogNDRweDtcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICAgICYudXBjb21pbmctaWNvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg1NiwgMTg5LCAyNDgsIDAuMik7XG4gICAgICAgICAgY29sb3I6ICMzOGJkZjg7XG4gICAgICAgIH1cblxuICAgICAgICAmLmNvbXBsZXRlZC1pY29uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMTU4LCAxMSwgMC4yKTtcbiAgICAgICAgICBjb2xvcjogI2ZiYmYyNDtcbiAgICAgICAgfVxuXG4gICAgICAgICYudG90YWwtaWNvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMTg1LCAxMjksIDAuMik7XG4gICAgICAgICAgY29sb3I6ICMzNGQzOTk7XG4gICAgICAgIH1cblxuICAgICAgICAmLnNwZW50LWljb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTkyLCAxMzIsIDI1MiwgMC4yKTtcbiAgICAgICAgICBjb2xvcjogI2U5ZDVmZjtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tZXRyaWMtZGF0YSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMnB4O1xuXG4gICAgICAgIC5tZXRyaWMtdmFsIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZXRyaWMtbGJsIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogI2EzYzRiODtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBNQUlOIENPTlRBSU5FUiAmIFRBQiBOQVZJR0FUSU9OXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5kYXNoYm9hcmQtbWFpbi1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxNnB4IDI0cHggNzJweDtcbiAgZmxleDogMTtcbn1cblxuLnRhYi1uYXYtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAuc2VnbWVudGVkLXBpbGwtbmF2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjZTllMWQxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2QyYmY7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGdhcDogNnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICB9XG5cbiAgLnBpbGwtdGFiIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC1zaXplOiAwLjg2cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgcGFkZGluZzogOXB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xuXG4gICAgLnRhYi1lbW9qaSB7XG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgfVxuXG4gICAgLnRhYi1iYWRnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtaGVhZGluZyk7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkaW5nKTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1mb3Jlc3QpO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMzEsIDEwNywgODcsIDAuMyk7XG5cbiAgICAgIC50YWItYmFkZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBTVFJFQU0gSEVBREVSXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zdHJlYW0taGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICAuc3RyZWFtLXRpdGxlLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBnYXA6IDEycHg7XG5cbiAgICAuc3RyZWFtLXRpdGxlIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkaW5nKTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICAgIH1cblxuICAgIC5zdHJlYW0tY291bnQge1xuICAgICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1mb3Jlc3QpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtZm9yZXN0LWxpZ2h0KTtcbiAgICAgIHBhZGRpbmc6IDNweCAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWZvcmVzdC1ib3JkZXIpO1xuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIEVYUEVESVRJT04gVElDS0VUUyBTVFJFQU0gJiBDQVJEUyAoV0FSTSwgQ0xFQU4gV0hJVEUgQ0FSRFMpXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5leHBlZGl0aW9ucy1zdHJlYW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIycHg7XG59XG5cbi5leHBlZGl0aW9uLXRpY2tldC1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1jYXJkKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzIwcHggMWZyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjY2JkNWNiO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1jYXJkLWhvdmVyKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cbiAgICAudGlja2V0LXZpc3VhbCBpbWcge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgICB9XG4gIH1cblxuICAvLyBUSUNLRVQgVklTVUFMIFNFQ1RJT04gKExFRlQgQ09MKVxuICAudGlja2V0LXZpc3VhbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6ICNlYmU1ZDg7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG4gICAgfVxuXG4gICAgLnZpc3VhbC1ncmFkaWVudC1zY3JpbSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBpbnNldDogMDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgMTgwZGVnLFxuICAgICAgICByZ2JhKDE1LCAyOCwgMjIsIDAuNykgMCUsXG4gICAgICAgIHJnYmEoMTUsIDI4LCAyMiwgMC4wNSkgNDUlLFxuICAgICAgICByZ2JhKDE1LCAyOCwgMjIsIDAuNzUpIDEwMCVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLnZpc3VhbC10b3AtY2hpcHMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxNHB4O1xuICAgICAgbGVmdDogMTRweDtcbiAgICAgIHJpZ2h0OiAxNHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIHotaW5kZXg6IDI7XG5cbiAgICAgIC5yZWYtdGFnIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjgsIDIyLCAwLjc1KTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgY29sb3I6ICNmMWY1Zjk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBtb25vc3BhY2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAgICAgICAuaGFzaC1zeW0ge1xuICAgICAgICAgIGNvbG9yOiAjMzRkMzk5O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jb3VudGRvd24tdGFnIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMTcsIDE0MywgNDMsIDAuOSk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnZpc3VhbC1ib3R0b20tc3RhdHVzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMTRweDtcbiAgICAgIGxlZnQ6IDE0cHg7XG4gICAgICByaWdodDogMTRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBnYXA6IDZweDtcbiAgICAgIHotaW5kZXg6IDI7XG5cbiAgICAgIC5zdGF0dXMtY2hpcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42OHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUSUNLRVQgREVUQUlMUyAoUklHSFQgQ09MKVxuICAudGlja2V0LWRldGFpbHMge1xuICAgIHBhZGRpbmc6IDI0cHggMjhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB9XG5cbiAgLy8gSEVBRExJTkVcbiAgLnRyZWstaGVhZGxpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTZweDtcblxuICAgIC5oZWFkbGluZS1tYWluIHtcbiAgICAgIGZsZXg6IDE7XG5cbiAgICAgIC50cmVrLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgNnB4O1xuICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWhlYWRpbmcpO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgIH1cblxuICAgICAgLnRyZWstbG9jYXRpb24ge1xuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA0cHg7XG5cbiAgICAgICAgLnBpbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJpY2Utc3VtbWFyeS1iYWRnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1mb3Jlc3QtbGlnaHQpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtZm9yZXN0LWJvcmRlcik7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMnB4O1xuICAgICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAgIC50b3RhbC1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgfVxuXG4gICAgICAudG90YWwtdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1mb3Jlc3QpO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBJVElORVJBUlkgR1JJRFxuICAuaXRpbmVyYXJ5LWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxODBweCwgMWZyKSk7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLXN1cmZhY2Utc3VidGxlKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xuXG4gICAgLml0aW5lcmFyeS1jZWxsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAzcHg7XG5cbiAgICAgIC5jZWxsLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjY4cmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG5cbiAgICAgIC5jZWxsLXZhbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYm9keSk7XG4gICAgICB9XG5cbiAgICAgIC5iYWxhbmNlLWR1ZS10ZXh0IHtcbiAgICAgICAgY29sb3I6ICNiNDUzMDk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICB9XG5cbiAgICAgIC50ZXh0LXN1Y2Nlc3Mge1xuICAgICAgICBjb2xvcjogIzE1ODAzZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBBRERPTlNcbiAgLmFkZG9ucy1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogNnB4O1xuXG4gICAgLmFkZG9uLXRhZyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFlZGUzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDVjNDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJvZHkpO1xuICAgICAgZm9udC1zaXplOiAwLjc0cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cbiAgfVxuXG4gIC8vIFJFVklFVyBCVUJCTEVcbiAgLnJldmlldy1idWJibGUge1xuICAgIGJhY2tncm91bmQ6ICNmZmZiZWI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZkZTY4YTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcblxuICAgIC5yZXZpZXctc3RhcnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDRweDtcbiAgICAgIGNvbG9yOiAjY2JkNWUxO1xuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuXG4gICAgICAuc3Rhci1saXQge1xuICAgICAgICBjb2xvcjogI2Y1OWUwYjtcbiAgICAgIH1cblxuICAgICAgLnJldmlldy1kYXRlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgICAgICBjb2xvcjogIzk0YTNiODtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmV2aWV3LXRleHQge1xuICAgICAgbWFyZ2luOiAwIDAgOHB4O1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgY29sb3I6ICMzMzQxNTU7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cblxuICAgIC5hZG1pbi1yZXNwb25zZSB7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjZmNkMzRkO1xuXG4gICAgICAuYWRtaW4tcmVzcC1iYWRnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBjb2xvcjogIzE1ODAzZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDAuODJyZW07XG4gICAgICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENBTkNFTExBVElPTiBQT0xJQ1kgQkFSXG4gIC5jYW5jZWxsYXRpb24tcG9saWN5LWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWRhbmdlci1saWdodCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZlY2FjYTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICBjb2xvcjogIzk5MWIxYjtcblxuICAgIC5pbmZvLWljb24ge1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuXG4gICAgc3Ryb25nIHtcbiAgICAgIGNvbG9yOiAjN2YxZDFkO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFDVElPTiBCVVRUT05TIFRPT0xCQVJcbiAgLnRpY2tldC1hY3Rpb24tdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWJvcmRlcik7XG5cbiAgICAuYWN0LWJ0biB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDdweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBwYWRkaW5nOiA5cHggMTZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLWRpZ2l0YWwtcGFzcyB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS10aGVtZS1mb3Jlc3QpIDAlLCB2YXIoLS10aGVtZS1mb3Jlc3QtZGFyaykgMTAwJSk7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgzMSwgMTA3LCA4NywgMC4yNSk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoMzEsIDEwNywgODcsIDAuMzgpO1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wNik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi1zZXR0bGUtYmFsYW5jZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS10aGVtZS1hbWJlcikgMCUsICNiNDUzMDkgMTAwJSk7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgyMTcsIDE0MywgNDMsIDAuMjUpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMThweCByZ2JhKDIxNywgMTQzLCA0MywgMC4zOCk7XG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjA2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLWNhcnBvb2wge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtc2t5LWxpZ2h0KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYWU2ZmQ7XG4gICAgICBjb2xvcjogdmFyKC0tdGhlbWUtc2t5KTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiYWU2ZmQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzdkZDNmYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLXN1bW1pdC1jZXJ0IHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkOThmMmIgMCUsICM5MjQwMGUgMTAwJSk7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgyMTcsIDE0MywgNDMsIDAuMjUpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMThweCByZ2JhKDIxNywgMTQzLCA0MywgMC4zOCk7XG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjA2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLXJhdGluZyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgICAgIGNvbG9yOiAjMzM0MTU1O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjOTRhM2I4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG4tY2FuY2VsLXRyaXAge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmVjYWNhO1xuICAgICAgY29sb3I6IHZhcigtLXRoZW1lLWRhbmdlcik7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWRhbmdlci1saWdodCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZjYTVhNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBTVEFUVVMgQ0hJUCBIRUxQRVJTXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5iYWRnZS1jb25maXJtZWQge1xuICBiYWNrZ3JvdW5kOiAjZGNmY2U3ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4NmVmYWMgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxNTgwM2QgIWltcG9ydGFudDtcbn1cblxuLmJhZGdlLWNvbXBsZXRlZCB7XG4gIGJhY2tncm91bmQ6ICNlMGYyZmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdkZDNmYyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAzNjlhMSAhaW1wb3J0YW50O1xufVxuXG4uYmFkZ2UtY2FuY2VsbGVkIHtcbiAgYmFja2dyb3VuZDogI2ZlZTJlMiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmNhNWE1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYjkxYzFjICFpbXBvcnRhbnQ7XG59XG5cbi5iYWRnZS1wZW5kaW5nIHtcbiAgYmFja2dyb3VuZDogI2ZlZjNjNyAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmRlMDQ3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYTE2MjA3ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWRnZS1wYWlkIHtcbiAgYmFja2dyb3VuZDogI2RjZmNlNyAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODZlZmFjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTU4MDNkICFpbXBvcnRhbnQ7XG59XG5cbi5iYWRnZS1wYXJ0aWFsIHtcbiAgYmFja2dyb3VuZDogI2ZlZjNjNyAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmNkMzRkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYjQ1MzA5ICFpbXBvcnRhbnQ7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gRU1QVFkgU1RBVEVcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmVtcHR5LWV4cGVkaXRpb24tc3RhdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tdGhlbWUtYm9yZGVyLXN0cm9uZyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XG4gIHBhZGRpbmc6IDY0cHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWNhcmQpO1xuXG4gIC5lbXB0eS1jb21wYXNzLWdseXBoIHtcbiAgICBmb250LXNpemU6IDMuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGFuaW1hdGlvbjogZmxvYXRBbmltIDRzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLmVtcHR5LXRpdGxlIHtcbiAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkaW5nKTtcbiAgfVxuXG4gIC5lbXB0eS1zdWJ0aXRsZSB7XG4gICAgbWFyZ2luOiAwIDAgMjhweDtcbiAgICBmb250LXNpemU6IDAuOTRyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIG1heC13aWR0aDogNDgwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgfVxuXG4gIC5lbXB0eS1jdGEtd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE0cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLmJ0bi1leHBsb3JlLXRyZWtzIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXRoZW1lLWZvcmVzdCkgMCUsIHZhcigtLXRoZW1lLWZvcmVzdC1kYXJrKSAxMDAlKTtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMzEsIDEwNywgODcsIDAuMjUpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDMxLCAxMDcsIDg3LCAwLjM1KTtcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG4tZmFxLWxpbmsge1xuICAgICAgYmFja2dyb3VuZDogI2Y1ZWZlMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZmQ1YzI7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkaW5nKTtcbiAgICAgIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIExPQURJTkcgU0tFTEVUT05cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnNrZWxldG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcblxuICAuc2tlbC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5za2VsLXRodW1iIHtcbiAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICNlZWU4ZGM7XG4gICAgfVxuXG4gICAgLnNrZWwtYm9keSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxNHB4O1xuICAgIH1cblxuICAgIC5za2VsLWxpbmUge1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgYmFja2dyb3VuZDogI2VlZThkYztcblxuICAgICAgJi53LTQwIHsgd2lkdGg6IDQwJTsgfVxuICAgICAgJi53LTcwIHsgd2lkdGg6IDcwJTsgfVxuICAgICAgJi53LTkwIHsgd2lkdGg6IDkwJTsgfVxuICAgIH1cbiAgfVxuXG4gIC5zaGltbWVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaW5zZXQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIHRyYW5zcGFyZW50KTtcbiAgICAgIGFuaW1hdGlvbjogc2hpbW1lckFuaW0gMS41cyBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBFUlJPUiBTVEFURVxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uc3RhdGUtY2FyZC5lcnJvci1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtZGFuZ2VyLWxpZ2h0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZlY2FjYTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgcGFkZGluZzogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG5cbiAgLnN0YXRlLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtZGFuZ2VyKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ib2R5KTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuXG4gIC5idG4tcmV0cnkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWRhbmdlcik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gTU9EQUwgU1lTVEVNIChUUkVLIFBBU1MsIENBUlBPT0wsIElOVk9JQ0UsIENFUlRJRklDQVRFLCBSQVRJTkcsIFJFTUFJTkRFUilcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnJhdGluZy1iYWNrZHJvcCxcbi5tb2RhbC1iYWNrZHJvcC1jdXN0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAzMCwgMjUsIDAuNjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5yYXRpbmctbW9kYWwsXG4udHJlay1wYXNzLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogMTAwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucmF0aW5nLWNhcmQsXG4udHJlay1wYXNzLWNhcmQsXG4ucGFzcy1tb2RhbC1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6IHZhcigtLXRleHQtYm9keSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tb2RhbCk7XG4gIHdpZHRoOiBtaW4oNjQwcHgsIDk2dncpO1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFuaW1hdGlvbjogbW9kYWxQb3AgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gUkFUSU5HIE1PREFMXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5yYXRpbmctY2FyZCB7XG4gIHBhZGRpbmc6IDI4cHg7XG4gIG1heC13aWR0aDogNDgwcHg7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMCAwIDZweDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWhlYWRpbmcpO1xuICB9XG5cbiAgLnJhdGluZy1zdWJ0aXRsZSB7XG4gICAgbWFyZ2luOiAwIDAgMThweDtcbiAgICBmb250LXNpemU6IDAuODhyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICB9XG5cbiAgLnN0YXJzLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICAgIC5zdGFyLWJ0biB7XG4gICAgICB3aWR0aDogNDZweDtcbiAgICAgIGhlaWdodDogNDZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgICAgIGNvbG9yOiAjY2JkNWUxO1xuICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcblxuICAgICAgJjpob3ZlcixcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICNmNTllMGI7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZjZDM0ZDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlZjNjNztcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmV2aWV3LWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkaW5nKTtcbiAgICBmb250LXNpemU6IDAuODhyZW07XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgcGFkZGluZzogMTJweCAxNHB4O1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtZm9yZXN0KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDMxLCAxMDcsIDg3LCAwLjE1KTtcbiAgICB9XG4gIH1cblxuICAucmF0aW5nLWVycm9yIHtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtZGFuZ2VyKTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICB9XG5cbiAgLnJhdGluZy1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgcGFkZGluZzogMTBweCAxOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgICAgIGNvbG9yOiAjMzM0MTU1O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgICAgfVxuXG4gICAgICAmLnByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS10aGVtZS1mb3Jlc3QpIDAlLCB2YXIoLS10aGVtZS1mb3Jlc3QtZGFyaykgMTAwJSk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMzEsIDEwNywgODcsIDAuMjUpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjA2KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIERJR0lUQUwgVFJFSyBQQVNTIE1PREFMXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50cmVrLXBhc3MtbW9kYWwgLnRyZWstcGFzcy1jYXJkLFxuLnBhc3MtbW9kYWwtY2FyZCB7XG4gIC5wYXNzLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE4NGY0MSAwJSwgIzEwM2EzMCAxMDAlKTtcbiAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5wYXNzLWJyYW5kIHtcbiAgICAgIC5wYXNzLW9yZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogI2E3ZjNkMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICBtYXJnaW46IDAgMCAycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB9XG5cbiAgICAgIC5wYXNzLXJlZiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NHJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIG1vbm9zcGFjZTtcbiAgICAgICAgY29sb3I6ICNkMWZhZTU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNsb3NlLXBhc3MtYnRuIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB3aWR0aDogMzRweDtcbiAgICAgIGhlaWdodDogMzRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBhc3MtYm9keSB7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxOHB4O1xuXG4gICAgLnBhc3MtcXItc2VjdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMjBweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLXN1cmZhY2Utc3VidGxlKTtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS10aGVtZS1ib3JkZXItc3Ryb25nKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgIC5xci1ib3gge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLnFyLWltZyB7XG4gICAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnFyLWhpbnQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC42OHJlbTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBhc3MtY2xlYXJhbmNlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgICAgLmNsZWFyYW5jZS1waWxsIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDZweCAxNHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZWYzYzc7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZjZDM0ZDtcbiAgICAgICAgICBjb2xvcjogI2I0NTMwOTtcbiAgICAgICAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICAgICAgICAmLnZlcmlmaWVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkY2ZjZTc7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICM4NmVmYWM7XG4gICAgICAgICAgICBjb2xvcjogIzE1ODAzZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2VjdXJpdHktY29kZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIG1vbm9zcGFjZTtcbiAgICAgICAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGltKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5wYXNzLWluZm8tZ3JpZCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgIGdhcDogMTJweDtcblxuICAgICAgLnBhc3MtZmllbGQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1zdXJmYWNlLXN1YnRsZSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWJvcmRlcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTRweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAzcHg7XG5cbiAgICAgICAgLnAtbGFiZWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIH1cblxuICAgICAgICAucC12YWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkaW5nKTtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhpZ2hsaWdodC1xdHkge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1mb3Jlc3QpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUk9TVEVSIFRBQkxFXG4gICAgLnBhc3Mtcm9zdGVyIHtcbiAgICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjgycmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWUtZm9yZXN0KTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIH1cblxuICAgICAgLnJvc3Rlci10YWJsZS13cmFwIHtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtYm9yZGVyKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcblxuICAgICAgICAucm9zdGVyLXRhYmxlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICAgICAgICBtaW4td2lkdGg6IDQ4MHB4O1xuXG4gICAgICAgICAgdGgsIHRkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGgge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtc3VyZmFjZS1zdWJ0bGUpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNjhyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYm9keSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJsb29kLXBpbGwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZlZTJlMjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmY2E1YTU7XG4gICAgICAgICAgICBjb2xvcjogI2I5MWMxYztcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA3cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWQtcGlsbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgICAgICAgICBjb2xvcjogIzE1ODAzZDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbiAgICAgICAgICAgICYud2FybiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYjkxYzFjO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5wYXNzLWd1aWRlbGluZXMge1xuICAgICAgYmFja2dyb3VuZDogI2YwZmRmNDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmY3ZDA7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgICAgY29sb3I6ICMxNjY1MzQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogNnB4O1xuXG4gICAgICAuZ3VpZGUtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wYXNzLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLXN1cmZhY2Utc3VidGxlKTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tdGhlbWUtYm9yZGVyKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxMnB4O1xuXG4gICAgLmJ0bi1wcmludC1wYXNzIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXRoZW1lLWZvcmVzdCkgMCUsIHZhcigtLXRoZW1lLWZvcmVzdC1kYXJrKSAxMDAlKTtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDAuODRyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjA2KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG4tY2xvc2UtcGFzcyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgICAgIGNvbG9yOiAjMzM0MTU1O1xuICAgICAgcGFkZGluZzogMTBweCAxOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDAuODRyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gVEFYIElOVk9JQ0UgTU9EQUxcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmludm9pY2UtZGV0YWlsLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG4uaW52b2ljZS1kZXRhaWwtaGVhZGluZyB7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS1mb3Jlc3QpO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uaW52b2ljZS1kZXRhaWwtY29sIGRpdiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJvZHkpO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uaW52b2ljZS10YWJsZS13cmFwIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuaW52b2ljZS1saW5lLXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcblxuICAgIHRoLCB0ZCB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7XG4gICAgfVxuXG4gICAgdGgge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtc3VyZmFjZS1zdWJ0bGUpO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB9XG5cbiAgICB0ZC5udW0sIHRoLm51bSB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG5cbiAgICB0ci5zdWJ0b3RhbC1yb3cge1xuICAgICAgYmFja2dyb3VuZDogI2ZhZmFmOTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgfVxuXG4gICAgdHIudGF4LXJvdyB0ZCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgfVxuXG4gICAgdHIudG90YWwtcm93IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmMGZkZjQ7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgY29sb3I6ICMxNTgwM2Q7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gU1VNTUlUIENFUlRJRklDQVRFIE1PREFMXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5jZXJ0LW1vZGFsLWNhcmQge1xuICBib3JkZXI6IDNweCBzb2xpZCAjZjU5ZTBiICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCAjZmZmZGZhIDAlLCAjZmJmOGYwIDEwMCUpICFpbXBvcnRhbnQ7XG5cbiAgLmNlcnQtaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDEwcHg7XG5cbiAgICAuY2VydC1pY29ucyB7XG4gICAgICBmb250LXNpemU6IDIuNnJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAuY2VydC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBjb2xvcjogIzc4MzUwZjtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gICAgfVxuXG4gICAgLmNlcnQtc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiAwLjc2cmVtO1xuICAgICAgY29sb3I6ICM5MjQwMGU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG4gIH1cblxuICAuY2VydC1ib2R5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCAzMHB4IDI4cHg7XG5cbiAgICAuY2VydC1wcmVzZW50ZWQtdG8ge1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgLmNlcnQtcmVjaXBpZW50LW5hbWUge1xuICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgY29sb3I6ICMxZTI5M2I7XG4gICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjU5ZTBiO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgICB9XG5cbiAgICAuY2VydC1kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDAuOTRyZW07XG4gICAgICBjb2xvcjogIzMzNDE1NTtcbiAgICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuXG4gICAgICAuY2VydC10cmVrLW5hbWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWUtZm9yZXN0KTtcbiAgICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jZXJ0LW1ldGEtcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGdhcDogMTZweDtcbiAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2UyZThmMDtcblxuICAgICAgLmNlcnQtbWV0YS1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42OHJlbTtcbiAgICAgICAgY29sb3I6ICM5MjQwMGU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICB9XG5cbiAgICAgIC5jZXJ0LW1ldGEtdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDAuODhyZW07XG4gICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5idG4tc2hhcmUtY2VydCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Q5OGYyYiAwJSwgI2I0NTMwOSAxMDAlKSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gUkVNQUlOREVSIDcwJSBNT0RBTFxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ucmVtYWluZGVyLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkOThmMmIgMCUsICNiNDUzMDkgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLnJlbWFpbmRlci1zdW1tYXJ5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtc3VyZmFjZS1zdWJ0bGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1ib3JkZXIpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gIC5yZW1haW5kZXItcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJvZHkpO1xuXG4gICAgc3Ryb25nIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWhlYWRpbmcpO1xuICAgIH1cblxuICAgICYucmVtYWluZGVyLXJvdy1wYWlkIHtcbiAgICAgIGNvbG9yOiAjMTU4MDNkO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG5cbiAgICAmLnJlbWFpbmRlci1yb3ctdG90YWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1ib3JkZXIpO1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGNvbG9yOiAjYjQ1MzA5O1xuICAgIH1cbiAgfVxufVxuXG4ucmVtYWluZGVyLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiAjZjBmZGY0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODZlZmFjO1xuICBjb2xvcjogIzE1ODAzZDtcbiAgcGFkZGluZzogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmJ0bi1wYXktcmVtYWluZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tdGhlbWUtYW1iZXIpIDAlLCAjYjQ1MzA5IDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gQkFTRUNBTVAgQ0FSUE9PTCBIVUIgTU9EQUxcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmNhcnBvb2wtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAyODRjNyAwJSwgIzAzNjlhMSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4uY2FycG9vbC1maWx0ZXItYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAuZmlsdGVyLXBpbGwge1xuICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICBwYWRkaW5nOiA2cHggMTRweDtcbiAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDI4NGM3O1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDI4NGM3O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMiwgMTMyLCAxOTksIDAuMjUpO1xuICAgIH1cbiAgfVxufVxuXG4uY2FycG9vbC1zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAwLjk0cmVtO1xuICBjb2xvcjogIzAzNjlhMTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmNhcnBvb2wtbG9hZGluZyxcbi5jYXJwb29sLWVtcHR5IHtcbiAgcGFkZGluZzogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLXN1cmZhY2Utc3VidGxlKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tdGhlbWUtYm9yZGVyLXN0cm9uZyk7XG59XG5cbi5jYXJwb29sLXJpZGUtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGYyZmU7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE0cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMiwgMTMyLCAxOTksIDAuMDYpO1xuXG4gIC5jYXJwb29sLXJpZGUtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtaGVhZGluZyk7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICB9XG5cbiAgLmNhcnBvb2wtcmlkZS1tZXRhIHtcbiAgICBmb250LXNpemU6IDAuODJyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtYm9keSk7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuXG4gICAgc3Ryb25nIHtcbiAgICAgIGNvbG9yOiAjMDI4NGM3O1xuICAgIH1cbiAgfVxuXG4gIC5jYXJwb29sLXJpZGUtb3duZXIge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG5cbiAgICBzdHJvbmcge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtaGVhZGluZyk7XG4gICAgfVxuXG4gICAgLnNlYXQtYmFkZ2Uge1xuICAgICAgYmFja2dyb3VuZDogI2UwZjJmZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYWU2ZmQ7XG4gICAgICBjb2xvcjogIzAzNjlhMTtcbiAgICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgfVxuXG4gICAgLnByaWNlLXRleHQge1xuICAgICAgY29sb3I6IHZhcigtLXRoZW1lLWZvcmVzdCk7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgIH1cbiAgfVxuXG4gIC5jYXJwb29sLW5vdGVzIHtcbiAgICBmb250LXNpemU6IDAuNzZyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gIH1cblxuICAuY2FycG9vbC13aGF0c2FwcC1idG4ge1xuICAgIGJhY2tncm91bmQ6ICMyNWQzNjY7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDAuODRyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMzcsIDIxMSwgMTAyLCAwLjI1KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzFlYjk1NjtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICB9XG4gIH1cbn1cblxuLmNhcnBvb2wtcG9zdC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtc3VyZmFjZS1zdWJ0bGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuXG4gIC5jYXJwb29sLWZvcm0taGVhZGluZyB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDAuOTJyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtaGVhZGluZyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxuXG4gIC5jYXJwb29sLWZvcm0tZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG5cbiAgLmNhcnBvb2wtZm9ybS1maWVsZCB7XG4gICAgbGFiZWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBmb250LXNpemU6IDAuNzZyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogOXB4IDEycHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkaW5nKTtcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgZm9udC1zaXplOiAwLjg0cmVtO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDI4NGM3O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyLCAxMzIsIDE5OSwgMC4xNSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnF1aWNrLWxvY2F0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDZweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuXG4gICAgLnF1aWNrLWxvYy1waWxsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xuICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiAjMzM0MTU1O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAyODRjNztcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAyODRjNztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FycG9vbC1zdWNjZXNzLWJhbm5lciB7XG4gICAgYmFja2dyb3VuZDogI2RjZmNlNztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODZlZmFjO1xuICAgIGNvbG9yOiAjMTU4MDNkO1xuICAgIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAwLjg0cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGFuaW1hdGlvbjogbW9kYWxQb3AgMC4ycyBlYXNlLW91dDtcbiAgfVxuXG4gIC5jYXJwb29sLWVycm9yLWJhbm5lciB7XG4gICAgYmFja2dyb3VuZDogI2ZlZTJlMjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmNhNWE1O1xuICAgIGNvbG9yOiAjYjkxYzFjO1xuICAgIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cblxuICAuY2FycG9vbC1wdWJsaXNoLWJ0biB7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDI4NGM3IDAlLCAjMDM2OWExIDEwMCUpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDExcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDAuODhyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wNik7XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gQU5JTUFUSU9OU1xuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5Aa2V5ZnJhbWVzIHB1bHNlQW5pbSB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7IG9wYWNpdHk6IDAuNTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZsb2F0QW5pbSB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTsgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vZGFsUG9wIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG59XG5cbkBrZXlmcmFtZXMgc2hpbW1lckFuaW0ge1xuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gUkVTUE9OU0lWRSBERVNJR05cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5leHBlZGl0aW9uLXRpY2tldC1jYXJkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblxuICAgIC50aWNrZXQtdmlzdWFsIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG4gIH1cblxuICAuaGVyby1leHBlZGl0aW9uLWJhbm5lciAuaGVyby1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAudG9wLW5hdi1iYXIgLm5hdi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgfVxuXG4gIC5oZXJvLWV4cGVkaXRpb24tYmFubmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDE2cHggMTJweDtcbiAgfVxuXG4gIC5oZXJvLWV4cGVkaXRpb24tYmFubmVyIC5oZXJvLW1ldHJpY3Mge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxuXG4gIC5kYXNoYm9hcmQtbWFpbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEycHggMTZweCA0OHB4O1xuICB9XG5cbiAgLnRyZWstaGVhZGxpbmUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgLnByaWNlLXN1bW1hcnktYmFkZ2Uge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLnBhc3MtaW5mby1ncmlkLFxuICAuaW52b2ljZS1kZXRhaWwtZ3JpZCxcbiAgLmNhcnBvb2wtZm9ybS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAhaW1wb3J0YW50O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ },

/***/ 6565
/*!********************************************!*\
  !*** ./src/app/my-bookings/my-bookings.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBookings: () => (/* binding */ MyBookings)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _core_encryption_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/encryption.service */ 3242);
var _staticBlock;





class MyBookings {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl}`;
  }
  getMyBookings(UserId) {
    return this.http.get(`${this.API}/getMyBookingsById/${UserId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  downloadReceipt(bookingId, userId) {
    return this.http.get(`${this.API}/bookings/${userId}/${bookingId}/receipt`, {
      responseType: 'blob',
      observe: 'response'
    });
  }
  viewBookingDetails(bookingId) {
    return this.http.get(`${this.API}/bookings/${bookingId}/receipt`, {
      responseType: 'blob',
      observe: 'response'
    });
  }
  submitTrekRating(bookingId, userId, payload) {
    const encryptedPayload = this.crypto.encrypt(payload);
    return this.http.post(`${this.API}/bookings/${userId}/${bookingId}/rating`, {
      ...payload,
      encryptedPayload
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      if (!res?.data) return res;
      try {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      } catch {
        return res;
      }
    }));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function MyBookings_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MyBookings)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_encryption_service__WEBPACK_IMPORTED_MODULE_4__.EncryptionService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MyBookings,
    factory: MyBookings.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_my-bookings_my-bookings-module_ts.js.map