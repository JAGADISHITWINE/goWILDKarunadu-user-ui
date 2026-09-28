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
function MyBookingsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toastNotice = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("toast-error", ctx_r1.toastType === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.toastType === "error" ? "bi-exclamation-octagon-fill text-danger" : "bi-check-circle-fill text-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.toastNotice);
  }
}
function MyBookingsComponent_section_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 29)(1, "div", 30)(2, "div", 31)(3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Official Trail Clearance & Bookings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Welcome back, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Trail Explorer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Access your digital basecamp trek passes, summit certificates, carpool rides, and settlement receipts. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 36)(13, "div", 37)(14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 40)(17, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Upcoming Treks");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 37)(22, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 40)(25, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Summits Conquered");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 37)(30, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 40)(33, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Total Expeditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 37)(38, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "\u20B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 40)(41, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](43, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Total Invested");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.upcomingTrips);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.completedTrips);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.totalBookings);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](43, 4, ctx_r1.totalSpent, "1.0-0"));
  }
}
function MyBookingsComponent_div_21_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.upcomingBookings.length);
  }
}
function MyBookingsComponent_div_21_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.pastBookings.length);
  }
}
function MyBookingsComponent_div_21_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.cancelledBookings.length);
  }
}
function MyBookingsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_21_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.switchTab("upcoming"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Upcoming ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, MyBookingsComponent_div_21_span_6_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_21_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.switchTab("past"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Past Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, MyBookingsComponent_div_21_span_11_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_21_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.switchTab("cancelled"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, MyBookingsComponent_div_21_span_16_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.activeTab === "upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.upcomingBookings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.activeTab === "past");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.pastBookings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.activeTab === "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.cancelledBookings.length);
  }
}
function MyBookingsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 57)(1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Unable to load bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_22_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.loadBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Try Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function MyBookingsComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 66)(4, "div", 67)(5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function MyBookingsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MyBookingsComponent_div_23_div_1_Template, 6, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
function MyBookingsComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 74)(1, "div", 75)(2, "h3", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.currentBookings.length, " active record", ctx_r1.currentBookings.length > 1 ? "s" : "");
  }
}
function MyBookingsComponent_div_24_article_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const booking_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.getDaysUntilTrek(booking_r6.start_date), " Days Left ");
  }
}
function MyBookingsComponent_div_24_article_2_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "30% Deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_24_article_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const booking_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, booking_r6.payment_status));
  }
}
function MyBookingsComponent_div_24_article_2_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 101)(1, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Deposit Paid / Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "strong", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const booking_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" Paid \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 2, booking_r6.amount_paid, "1.0-0"), " \u00B7 Due \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](6, 5, ctx_r1.getBalanceDue(booking_r6), "1.0-0"), " ");
  }
}
function MyBookingsComponent_div_24_article_2_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 101)(1, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Clearance Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "strong", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "100% Paid \u00B7 Forest Permit Cleared ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function MyBookingsComponent_div_24_article_2_div_48_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const addon_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", addon_r7.addon_name, " \u00D7 ", addon_r7.quantity, " ");
  }
}
function MyBookingsComponent_div_24_article_2_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MyBookingsComponent_div_24_article_2_div_48_span_1_Template, 3, 2, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const booking_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", booking_r6.addons);
  }
}
function MyBookingsComponent_div_24_article_2_div_49_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const star_r8 = ctx.$implicit;
    const booking_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("star-lit", star_r8 <= (booking_r6.user_rating || 0));
  }
}
function MyBookingsComponent_div_24_article_2_div_49_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const booking_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, booking_r6.rated_at, "mediumDate"));
  }
}
function MyBookingsComponent_div_24_article_2_div_49_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 134)(1, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Lead Trek Master Reply:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const booking_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](booking_r6.admin_reply);
  }
}
function MyBookingsComponent_div_24_article_2_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 126)(1, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MyBookingsComponent_div_24_article_2_div_49_span_2_Template, 2, 2, "span", 128)(3, MyBookingsComponent_div_24_article_2_div_49_span_3_Template, 3, 4, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, MyBookingsComponent_div_24_article_2_div_49_div_6_Template, 6, 1, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const booking_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", booking_r6.rated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u201C", booking_r6.user_review, "\u201D");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", booking_r6.admin_reply);
  }
}
function MyBookingsComponent_div_24_article_2_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 137)(1, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Policy:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const booking_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getCancellationFeeMessage(booking_r6));
  }
}
function MyBookingsComponent_div_24_article_2_button_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_24_article_2_button_52_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const booking_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openTrekPass(booking_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Digital Trek Pass");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function MyBookingsComponent_div_24_article_2_button_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_24_article_2_button_53_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const booking_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openRemainderModal(booking_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const booking_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Pay Balance (\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 1, ctx_r1.getBalanceDue(booking_r6), "1.0-0"), ")");
  }
}
function MyBookingsComponent_div_24_article_2_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_24_article_2_button_54_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const booking_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openSummitCertificate(booking_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Summit Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function MyBookingsComponent_div_24_article_2_button_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_24_article_2_button_55_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const booking_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openRatingModal(booking_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const booking_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.hasUserRated(booking_r6) ? "Update Rating" : "Rate Experience");
  }
}
function MyBookingsComponent_div_24_article_2_button_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_24_article_2_button_56_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const booking_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openCancelModal(booking_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function MyBookingsComponent_div_24_article_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article", 78)(1, "div", 79)(2, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("error", function MyBookingsComponent_div_24_article_2_Template_img_error_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.target.src = ctx_r1.fallbackImage);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 82)(5, "span", 83)(6, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, MyBookingsComponent_div_24_article_2_span_9_Template, 3, 1, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 86)(11, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, MyBookingsComponent_div_24_article_2_span_16_Template, 3, 0, "span", 89)(17, MyBookingsComponent_div_24_article_2_span_17_Template, 3, 3, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 90)(19, "div", 91)(20, "div", 92)(21, "h3", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 94)(24, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 97)(28, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "strong", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 100)(34, "div", 101)(35, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Expedition Dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "strong", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 101)(41, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Permitted Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "strong", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, MyBookingsComponent_div_24_article_2_div_46_Template, 7, 8, "div", 106)(47, MyBookingsComponent_div_24_article_2_div_47_Template, 6, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, MyBookingsComponent_div_24_article_2_div_48_Template, 2, 1, "div", 107)(49, MyBookingsComponent_div_24_article_2_div_49_Template, 7, 5, "div", 108)(50, MyBookingsComponent_div_24_article_2_div_50_Template, 7, 1, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, MyBookingsComponent_div_24_article_2_button_52_Template, 5, 0, "button", 111)(53, MyBookingsComponent_div_24_article_2_button_53_Template, 6, 4, "button", 112)(54, MyBookingsComponent_div_24_article_2_button_54_Template, 5, 0, "button", 113)(55, MyBookingsComponent_div_24_article_2_button_55_Template, 5, 1, "button", 114)(56, MyBookingsComponent_div_24_article_2_button_56_Template, 5, 0, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const booking_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.resolveImageUrl(booking_r6.cover_image), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", booking_r6.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", booking_r6.booking_reference, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "upcoming" && booking_r6.booking_status !== "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.getStatusClass(booking_r6.booking_status));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 26, booking_r6.booking_status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.getPaymentStatusClass(booking_r6.payment_status));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", booking_r6.payment_status === "partial");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", booking_r6.payment_status !== "partial");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](booking_r6.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", booking_r6.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](32, 28, booking_r6.total_amount, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.formatDate(booking_r6.start_date), " \u2013 ", ctx_r1.formatDate(booking_r6.end_date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", booking_r6.participants, " Person", (booking_r6.participants || 0) > 1 ? "s" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", booking_r6.payment_status === "partial" || booking_r6.balance_due > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", booking_r6.payment_status === "paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", booking_r6.addons == null ? null : booking_r6.addons.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", booking_r6.user_review);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "upcoming" && ctx_r1.canCancel(booking_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "upcoming" && booking_r6.booking_status !== "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.hasPendingBalance(booking_r6) && ctx_r1.activeTab === "upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "past" || booking_r6.booking_status === "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "past" && ctx_r1.canRateBooking(booking_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "upcoming" && ctx_r1.canCancel(booking_r6));
  }
}
function MyBookingsComponent_div_24_div_3_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_24_div_3_button_17_Template_button_click_0_listener() {
      const page_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.setBookingPage(page_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.bookingCurrentPage === page_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", page_r16, " ");
  }
}
function MyBookingsComponent_div_24_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 151)(1, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " bookings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 153)(13, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_24_div_3_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.setBookingPage(ctx_r1.bookingCurrentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Prev ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, MyBookingsComponent_div_24_div_3_button_17_Template, 2, 3, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_24_div_3_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.setBookingPage(ctx_r1.bookingCurrentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "i", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.bookingPaginationStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.bookingPaginationEnd);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.currentBookings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.bookingCurrentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.bookingPageNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.bookingCurrentPage === ctx_r1.totalBookingPages);
  }
}
function MyBookingsComponent_div_24_div_4_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Ready to climb the Western Ghats? Choose your next trail and secure your permit slots. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_24_div_4_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Your conquered trails and summit completion certificates will be preserved here. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_24_div_4_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " You have no cancelled expeditions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_24_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 161)(1, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h3", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, MyBookingsComponent_div_24_div_4_p_5_Template, 2, 0, "p", 164)(6, MyBookingsComponent_div_24_div_4_p_6_Template, 2, 0, "p", 164)(7, MyBookingsComponent_div_24_div_4_p_7_Template, 2, 0, "p", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 165)(9, "a", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Explore Upcoming Treks \u2192 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "a", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Trek FAQs & Help ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("No ", ctx_r1.activeTab, " adventures found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "past");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "cancelled");
  }
}
function MyBookingsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MyBookingsComponent_div_24_div_1_Template, 6, 3, "div", 70)(2, MyBookingsComponent_div_24_article_2_Template, 57, 31, "article", 71)(3, MyBookingsComponent_div_24_div_3_Template, 21, 6, "div", 72)(4, MyBookingsComponent_div_24_div_4_Template, 13, 4, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.currentBookings.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedBookings);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.currentBookings.length > ctx_r1.bookingPageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.currentBookings.length === 0);
  }
}
function MyBookingsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_25_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeRatingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_26_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_26_button_7_Template_button_click_0_listener() {
      const star_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.setRating(star_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const star_r20 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", star_r20 <= ctx_r1.selectedRating);
  }
}
function MyBookingsComponent_div_26_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.ratingErrorMessage);
  }
}
function MyBookingsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 170)(1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_26_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Rate Your Trek");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, MyBookingsComponent_div_26_button_7_Template, 2, 2, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "textarea", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_26_Template_textarea_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.selectedReview, $event) || (ctx_r1.selectedReview = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, MyBookingsComponent_div_26_p_9_Template, 2, 1, "p", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 177)(11, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_26_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeRatingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_26_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.submitRating());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Submit Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedBookingForRating == null ? null : ctx_r1.selectedBookingForRating.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedReview);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.ratingErrorMessage);
  }
}
function MyBookingsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_27_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeTrekPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_28_i_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 214);
  }
}
function MyBookingsComponent_div_28_i_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 118);
  }
}
function MyBookingsComponent_div_28_div_58_tr_20_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td")(9, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td")(14, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r23 = ctx.$implicit;
    const idx_r24 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](idx_r24 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](p_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", p_r23.age || "--", " / ", p_r23.gender || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](p_r23.blood_group || "O+");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", p_r23.id_type || "Aadhaar", ": ", p_r23.id_number || "Verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("warn", p_r23.medical_condition && p_r23.medical_condition !== "None / Fit to Trek");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", p_r23.medical_condition || "Fit to Trek", " ");
  }
}
function MyBookingsComponent_div_28_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 215)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Authorized Expedition Roster");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 216)(4, "table", 217)(5, "thead")(6, "tr")(7, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, MyBookingsComponent_div_28_div_58_tr_20_Template, 16, 10, "tr", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.selectedPassBooking == null ? null : ctx_r1.selectedPassBooking.participants_details);
  }
}
function MyBookingsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 182)(1, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_28_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 184)(3, "div", 185)(4, "span", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "KARNATAKA ECO-TOURISM DEVELOPMENT BOARD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "EXPEDITION TREK PASS");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_28_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeTrekPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 189)(13, "div", 190)(14, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "img", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Scan at Basecamp Checkpoint");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 194)(19, "span", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, MyBookingsComponent_div_28_i_20_Template, 1, 0, "i", 196)(21, MyBookingsComponent_div_28_i_21_Template, 1, 0, "i", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 199)(27, "div", 200)(28, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Trek Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "strong", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 200)(33, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Expedition Dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "strong", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 200)(38, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Lead Booker");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "strong", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 200)(43, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Total Permitted Trekkers");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "strong", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 200)(48, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Basecamp Reporting Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "strong", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "i", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 200)(54, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Reporting Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "strong", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "05:30 AM IST (Ascent Day)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, MyBookingsComponent_div_28_div_58_Template, 21, 1, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 206)(60, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "i", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, " Physical govt ID verification mandatory at entry gate.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "i", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, " Single-use plastic bottles prohibited inside sanctuary zones.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 210)(67, "button", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_28_Template_button_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.printTrekPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](68, "i", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, " Print / Download Pass ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "button", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_28_Template_button_click_70_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeTrekPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Pass ID: ", ctx_r1.selectedPassBooking == null ? null : ctx_r1.selectedPassBooking.booking_reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.getQrCodeUrl(ctx_r1.selectedPassBooking), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("verified", (ctx_r1.selectedPassBooking == null ? null : ctx_r1.selectedPassBooking.payment_status) === "paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r1.selectedPassBooking == null ? null : ctx_r1.selectedPassBooking.payment_status) === "paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r1.selectedPassBooking == null ? null : ctx_r1.selectedPassBooking.payment_status) !== "paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r1.selectedPassBooking == null ? null : ctx_r1.selectedPassBooking.payment_status) === "paid" ? "Permit Cleared" : "Payment Pending", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("AUTH-HASH: GWK-", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 16, ctx_r1.selectedPassBooking == null ? null : ctx_r1.selectedPassBooking.id == null ? null : ctx_r1.selectedPassBooking.id.slice(0, 8)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedPassBooking == null ? null : ctx_r1.selectedPassBooking.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.formatDate(ctx_r1.selectedPassBooking == null ? null : ctx_r1.selectedPassBooking.start_date), " \u2013 ", ctx_r1.formatDate(ctx_r1.selectedPassBooking == null ? null : ctx_r1.selectedPassBooking.end_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r1.selectedPassBooking == null ? null : ctx_r1.selectedPassBooking.customer_name) || "Primary Trekker");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.selectedPassBooking == null ? null : ctx_r1.selectedPassBooking.participants, " Person", ((ctx_r1.selectedPassBooking == null ? null : ctx_r1.selectedPassBooking.participants) || 0) > 1 ? "s" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedPassBooking == null ? null : ctx_r1.selectedPassBooking.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedPassBooking == null ? null : ctx_r1.selectedPassBooking.participants_details == null ? null : ctx_r1.selectedPassBooking.participants_details.length);
  }
}
function MyBookingsComponent_div_29_div_13_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r26.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r26.sac);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 3, item_r26.amount, "1.2-2"));
  }
}
function MyBookingsComponent_div_29_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 189)(1, "div", 230)(2, "div", 231)(3, "div", 232);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 231)(23, "div", 232);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 233)(33, "table", 234)(34, "thead")(35, "tr")(36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Service Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "SAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "th", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Amount (INR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, MyBookingsComponent_div_29_div_13_tr_43_Template, 8, 6, "tr", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "tr", 236)(45, "td", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "td", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](49, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "tr", 238)(51, "td", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "CGST (2.5%) + SGST (2.5%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "td", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](55, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "tr", 239)(57, "td", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Total Invoice Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "td", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](61, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedInvoiceData.invoiceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](13, 11, ctx_r1.selectedInvoiceData.invoiceDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedInvoiceData.company.gstin);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedInvoiceData.company.kedbLicense);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedInvoiceData.customer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedInvoiceData.customer.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedInvoiceData.customer.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.selectedInvoiceData.lineItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](49, 14, ctx_r1.selectedInvoiceData.financials.subtotal, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](55, 17, ctx_r1.selectedInvoiceData.financials.totalTax, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](61, 20, ctx_r1.selectedInvoiceData.financials.totalAmount, "1.2-2"));
  }
}
function MyBookingsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_29_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeTaxInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_29_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 184)(3, "div", 223)(4, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div")(7, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Tax Invoice / Receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "GST Compliant");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, MyBookingsComponent_div_29_div_13_Template, 62, 23, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 210)(15, "button", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_29_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.printInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Print / Download PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_29_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeTaxInvoice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedInvoiceData == null ? null : ctx_r1.selectedInvoiceData.company == null ? null : ctx_r1.selectedInvoiceData.company.legalName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedInvoiceData);
  }
}
function MyBookingsComponent_div_30_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 248)(1, "p", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "This is proudly presented to");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " for successfully conquering the high-altitude wilderness trail of");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " at an elevation of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 253)(15, "div")(16, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Certificate ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div")(21, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Expedition Leader");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedCertData.recipientName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedCertData.trekName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedCertData.elevation);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedCertData.certificateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedCertData.leadTrekMaster);
  }
}
function MyBookingsComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_30_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeSummitCertificate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_30_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 241)(3, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 46)(5, "i", 146)(6, "i", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Summit Completion Certificate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Karnataka Eco-Tourism & Wilderness Explorer Council");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, MyBookingsComponent_div_30_div_11_Template, 25, 5, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 210)(13, "button", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_30_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.shareCertificate(ctx_r1.selectedCertData));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Share to Social Media ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_30_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.printSummitCertificate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " Print Certificate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_30_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeSummitCertificate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedCertData);
  }
}
function MyBookingsComponent_div_31_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Remainder payment settled! Your trek is now 100% confirmed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_31_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 210)(1, "button", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_31_div_37_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.settleRemainderPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_31_div_37_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeRemainderModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.isSettlingRemainder);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.isSettlingRemainder ? "Processing..." : "Pay \u20B9" + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 2, ctx_r1.getBalanceDue(ctx_r1.selectedRemainderBooking), "1.0-0") + " via UPI/Card", " ");
  }
}
function MyBookingsComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_31_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeRemainderModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_31_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 257)(3, "div", 223)(4, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div")(7, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Settle Remainder 70%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 189)(12, "div", 258)(13, "div", 259)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Trek Expedition:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 259)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Total Trek Cost:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 260)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Advance 30% Paid:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 261)(31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Pending Balance:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, MyBookingsComponent_div_31_div_36_Template, 3, 0, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, MyBookingsComponent_div_31_div_37_Template, 7, 5, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Ref: ", ctx_r1.selectedRemainderBooking == null ? null : ctx_r1.selectedRemainderBooking.booking_reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedRemainderBooking == null ? null : ctx_r1.selectedRemainderBooking.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](23, 7, ctx_r1.selectedRemainderBooking == null ? null : ctx_r1.selectedRemainderBooking.total_amount, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u2212\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](29, 10, ctx_r1.selectedRemainderBooking == null ? null : ctx_r1.selectedRemainderBooking.amount_paid, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](35, 13, ctx_r1.getBalanceDue(ctx_r1.selectedRemainderBooking), "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.remainderPaymentSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.remainderPaymentSuccess);
  }
}
function MyBookingsComponent_div_32_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_32_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleCarpoolFilter("trek"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.carpoolFilterType === "trek");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedCarpoolTrekName, " ");
  }
}
function MyBookingsComponent_div_32_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Loading carpool offers\u2026 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_32_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No rides posted for this specific trail yet. Be the first to offer a seat below! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_32_div_21_div_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ride_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \"", ride_r32.notes, "\" ");
  }
}
function MyBookingsComponent_div_32_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 302)(1, "div", 303)(2, "div", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 305)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Pickup: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " \u00B7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "i", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Driver: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " \u00B7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " \u00B7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "strong", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, MyBookingsComponent_div_32_div_21_div_1_div_24_Template, 3, 1, "div", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "a", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " WhatsApp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ride_r32 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ride_r32.departure_city, " \u2192 ", ride_r32.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ride_r32.departure_location);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ride_r32.vehicle_model || "Car");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ride_r32.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ride_r32.available_seats, " seat", ride_r32.available_seats > 1 ? "s" : "", " left");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", ride_r32.price_per_seat, "/seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ride_r32.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r1.getWhatsAppCarpoolLink(ride_r32), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function MyBookingsComponent_div_32_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MyBookingsComponent_div_32_div_21_div_1_Template, 28, 10, "div", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.carpoolList);
  }
}
function MyBookingsComponent_div_32_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Your carpool offer is live! Trekkers heading to this trail can now reach out to you directly on WhatsApp. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_32_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.carpoolErrorMessage, " ");
  }
}
function MyBookingsComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_32_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeCarpoolHub());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_32_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 268)(3, "div", 223)(4, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div")(7, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Basecamp Carpool & Solo Trekker Hub");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Connect with fellow trekkers from Bengaluru/Mysuru & share rides");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 189)(12, "div", 270)(13, "button", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_32_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleCarpoolFilter("all"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, MyBookingsComponent_div_32_button_16_Template, 3, 3, "button", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Available Rides to Basecamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, MyBookingsComponent_div_32_div_19_Template, 2, 0, "div", 275)(20, MyBookingsComponent_div_32_div_20_Template, 2, 0, "div", 276)(21, MyBookingsComponent_div_32_div_21_Template, 2, 1, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 278)(23, "div", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "i", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Driving to the Trail? Offer Empty Seats:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 281)(27, "div", 282)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Trek Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "input", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_32_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.newRideOffer.trek_name, $event) || (ctx_r1.newRideOffer.trek_name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 282)(32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Your Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "input", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_32_Template_input_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.newRideOffer.user_name, $event) || (ctx_r1.newRideOffer.user_name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 282)(36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "WhatsApp Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "input", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_32_Template_input_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.newRideOffer.user_phone, $event) || (ctx_r1.newRideOffer.user_phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 282)(40, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Departure City");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "input", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_32_Template_input_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.newRideOffer.departure_city, $event) || (ctx_r1.newRideOffer.departure_city = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 287)(44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Pickup Point (Choose or Type)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "input", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_32_Template_input_ngModelChange_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.newRideOffer.departure_location, $event) || (ctx_r1.newRideOffer.departure_location = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 289)(48, "span", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_32_Template_span_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.setPickupLocation("Silk Board & Marathahalli"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "i", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Silk Board");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "span", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_32_Template_span_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.setPickupLocation("Yeshwanthpur Metro"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "i", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Yeshwanthpur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "span", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_32_Template_span_click_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.setPickupLocation("Hebbal Flyover"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "i", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Hebbal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "span", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_32_Template_span_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.setPickupLocation("Electronic City Toll"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "i", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "Electronic City");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "span", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_32_Template_span_click_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.setPickupLocation("Mysuru Ring Road"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "i", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Mysuru");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 282)(64, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "Vehicle Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "input", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_32_Template_input_ngModelChange_66_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.newRideOffer.vehicle_model, $event) || (ctx_r1.newRideOffer.vehicle_model = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 282)(68, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "Seats Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "input", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_32_Template_input_ngModelChange_70_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.newRideOffer.available_seats, $event) || (ctx_r1.newRideOffer.available_seats = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 282)(72, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "Fuel Share (\u20B9/Seat)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "input", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_32_Template_input_ngModelChange_74_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.newRideOffer.price_per_seat, $event) || (ctx_r1.newRideOffer.price_per_seat = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 282)(76, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "Departure Time / Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "input", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_32_Template_input_ngModelChange_78_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.newRideOffer.notes, $event) || (ctx_r1.newRideOffer.notes = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, MyBookingsComponent_div_32_div_79_Template, 3, 0, "div", 295)(80, MyBookingsComponent_div_32_div_80_Template, 3, 1, "div", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "button", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_32_Template_button_click_81_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.publishCarpoolRide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 210)(84, "button", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_div_32_Template_button_click_84_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeCarpoolHub());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.carpoolFilterType === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" All Upcoming Rides (", ctx_r1.carpoolList.length, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedCarpoolTrekName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isLoadingCarpools);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingCarpools && ctx_r1.carpoolList.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isLoadingCarpools);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newRideOffer.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newRideOffer.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newRideOffer.user_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newRideOffer.departure_city);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newRideOffer.departure_location);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newRideOffer.vehicle_model);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newRideOffer.available_seats);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newRideOffer.price_per_seat);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newRideOffer.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.carpoolPublishSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.carpoolErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.isPublishingRide);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.isPublishingRide ? "Publishing\u2026" : "+ Publish Carpool Offer", " ");
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
    this.bookingCurrentPage = 1;
    this.toastNotice = '';
    this.toastType = 'success';
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
  showToast(message, type = 'success') {
    this.toastNotice = message;
    this.toastType = type;
    setTimeout(() => {
      if (this.toastNotice === message) {
        this.toastNotice = '';
      }
    }, 4500);
  }
  get bookingPageSize() {
    return Math.max(1, this.siteSettings?.currentSettings?.bookingsPerPage || 5);
  }
  get totalBookingPages() {
    return Math.max(1, Math.ceil(this.currentBookings.length / this.bookingPageSize));
  }
  get paginatedBookings() {
    const start = (this.bookingCurrentPage - 1) * this.bookingPageSize;
    return this.currentBookings.slice(start, start + this.bookingPageSize);
  }
  get bookingPaginationStart() {
    return this.currentBookings.length ? (this.bookingCurrentPage - 1) * this.bookingPageSize + 1 : 0;
  }
  get bookingPaginationEnd() {
    return Math.min(this.bookingCurrentPage * this.bookingPageSize, this.currentBookings.length);
  }
  setBookingPage(page) {
    if (page >= 1 && page <= this.totalBookingPages) {
      this.bookingCurrentPage = page;
      window.scrollTo({
        top: 320,
        behavior: 'smooth'
      });
    }
  }
  get bookingPageNumbers() {
    const total = this.totalBookingPages;
    const curr = this.bookingCurrentPage;
    const pages = [];
    const start = Math.max(1, curr - 2);
    const end = Math.min(total, curr + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
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
    this.bookingCurrentPage = 1;
  }
  viewBookingDetails(booking) {
    const rawId = String(booking?.public_ref || booking?.trek_uuid || booking?.trek_id || '');
    const publicRef = this.publicRouteId.encode(rawId) || rawId;
    this.router.navigate(['/trek-details', publicRef]);
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
      error: error => {}
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
      this.showToast('Certificate achievement details copied to clipboard for sharing!', 'success');
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
        this.showToast(err?.error?.message || 'Could not process remainder payment. Please try again.', 'error');
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
    decls: 33,
    vars: 14,
    consts: [[1, "bookings-wrapper"], ["class", "booking-toast-wrap", 3, "toast-error", 4, "ngIf"], [1, "top-nav-bar"], [1, "nav-container"], [1, "nav-back-btn", 3, "click"], [1, "back-arrow"], [1, "nav-brand"], [1, "brand-sub"], [1, "brand-title"], [1, "nav-actions"], ["routerLink", "/upcoming-treks", 1, "btn-browse-new"], [1, "plus-icon"], [1, "btn-text"], ["class", "hero-expedition-banner", 4, "ngIf"], [1, "dashboard-main-container"], ["class", "tab-nav-container", 4, "ngIf"], ["class", "state-card error-card", 4, "ngIf"], ["class", "skeleton-container", 4, "ngIf"], ["class", "expeditions-stream", 4, "ngIf"], ["class", "rating-backdrop", 3, "click", 4, "ngIf"], ["class", "rating-modal", "role", "dialog", "aria-modal", "true", 4, "ngIf"], ["class", "trek-pass-modal", "role", "dialog", "aria-modal", "true", 4, "ngIf"], ["class", "modal-backdrop-custom", 3, "click", 4, "ngIf"], [1, "booking-toast-wrap"], [1, "booking-toast-box"], [1, "bi", 3, "ngClass"], [1, "toast-message"], ["type", "button", "aria-label", "Close message", 1, "toast-close-btn", 3, "click"], [1, "bi", "bi-x-lg"], [1, "hero-expedition-banner"], [1, "hero-inner"], [1, "hero-content"], [1, "expedition-badge"], [1, "pulse-dot"], [1, "hero-heading"], [1, "hero-subtext"], [1, "hero-metrics"], [1, "metric-card"], [1, "metric-icon", "upcoming-icon"], [1, "bi", "bi-calendar2-check"], [1, "metric-data"], [1, "metric-val"], [1, "metric-lbl"], [1, "metric-icon", "completed-icon"], [1, "bi", "bi-trophy"], [1, "metric-icon", "total-icon"], [1, "bi", "bi-compass"], [1, "metric-icon", "spent-icon"], [1, "tab-nav-container"], [1, "segmented-pill-nav"], [1, "pill-tab", 3, "click"], [1, "tab-emoji"], [1, "bi", "bi-calendar-event", "me-1"], ["class", "tab-badge", 4, "ngIf"], [1, "bi", "bi-check2-circle", "me-1"], [1, "bi", "bi-x-circle", "me-1"], [1, "tab-badge"], [1, "state-card", "error-card"], [1, "state-icon"], [1, "bi", "bi-exclamation-triangle-fill", "text-warning"], [1, "btn-retry", 3, "click"], [1, "skeleton-container"], ["class", "skel-card", 4, "ngFor", "ngForOf"], [1, "skel-card"], [1, "skel-thumb", "shimmer"], [1, "skel-body"], [1, "skel-line", "shimmer", "w-40"], [1, "skel-line", "shimmer", "w-70"], [1, "skel-line", "shimmer", "w-90"], [1, "expeditions-stream"], ["class", "stream-header", 4, "ngIf"], ["class", "expedition-ticket-card", 4, "ngFor", "ngForOf"], ["class", "expedition-pagination", 4, "ngIf"], ["class", "empty-expedition-state", 4, "ngIf"], [1, "stream-header"], [1, "stream-title-group"], [1, "stream-title"], [1, "stream-count"], [1, "expedition-ticket-card"], [1, "ticket-visual"], ["loading", "lazy", "decoding", "async", 3, "error", "src", "alt"], [1, "visual-gradient-scrim"], [1, "visual-top-chips"], [1, "ref-tag"], [1, "hash-sym"], ["class", "countdown-tag", 4, "ngIf"], [1, "visual-bottom-status"], [1, "status-chip", 3, "ngClass"], [1, "bi", "bi-circle-fill", "me-1", 2, "font-size", "0.55rem", "vertical-align", "middle"], [4, "ngIf"], [1, "ticket-details"], [1, "trek-headline"], [1, "headline-main"], [1, "trek-title"], [1, "trek-location"], [1, "pin-icon"], [1, "bi", "bi-geo-alt-fill", "text-success"], [1, "price-summary-badge"], [1, "total-label"], [1, "total-value"], [1, "itinerary-grid"], [1, "itinerary-cell"], [1, "cell-label"], [1, "cell-val"], [1, "bi", "bi-calendar3", "me-1"], [1, "bi", "bi-people-fill", "me-1"], ["class", "itinerary-cell", 4, "ngIf"], ["class", "addons-bar", 4, "ngIf"], ["class", "review-bubble", 4, "ngIf"], ["class", "cancellation-policy-bar", 4, "ngIf"], [1, "ticket-action-toolbar"], ["type", "button", "class", "act-btn btn-digital-pass", 3, "click", 4, "ngIf"], ["type", "button", "class", "act-btn btn-settle-balance", 3, "click", 4, "ngIf"], ["type", "button", "class", "act-btn btn-summit-cert", 3, "click", 4, "ngIf"], ["type", "button", "class", "act-btn btn-rating", 3, "click", 4, "ngIf"], ["type", "button", "class", "act-btn btn-cancel-trip", 3, "click", 4, "ngIf"], [1, "countdown-tag"], [1, "bi", "bi-clock", "me-1"], [1, "bi", "bi-hourglass-split", "me-1"], [1, "cell-val", "balance-due-text"], [1, "cell-val", "text-success"], [1, "bi", "bi-check-circle-fill", "text-success", "me-1"], [1, "addons-bar"], ["class", "addon-tag", 4, "ngFor", "ngForOf"], [1, "addon-tag"], [1, "bi", "bi-plus-circle-fill", "text-success", "me-1"], [1, "review-bubble"], [1, "review-stars"], [3, "star-lit", 4, "ngFor", "ngForOf"], ["class", "review-date", 4, "ngIf"], [1, "review-text"], ["class", "admin-response", 4, "ngIf"], [1, "bi", "bi-star-fill"], [1, "review-date"], [1, "admin-response"], [1, "admin-resp-badge"], [1, "bi", "bi-shield-check", "me-1"], [1, "cancellation-policy-bar"], [1, "info-icon"], [1, "bi", "bi-info-circle-fill", "text-primary"], ["type", "button", 1, "act-btn", "btn-digital-pass", 3, "click"], [1, "btn-icon"], [1, "bi", "bi-ticket-perforated"], ["type", "button", 1, "act-btn", "btn-settle-balance", 3, "click"], [1, "bi", "bi-credit-card"], ["type", "button", 1, "act-btn", "btn-summit-cert", 3, "click"], [1, "bi", "bi-award"], ["type", "button", 1, "act-btn", "btn-rating", 3, "click"], [1, "bi", "bi-star"], ["type", "button", 1, "act-btn", "btn-cancel-trip", 3, "click"], [1, "bi", "bi-x-circle"], [1, "expedition-pagination"], [1, "pagination-info"], [1, "pagination-controls"], ["type", "button", "aria-label", "Previous Page", 1, "pg-btn", "pg-prev", 3, "click", "disabled"], [1, "bi", "bi-chevron-left", "me-1"], [1, "pg-numbers"], ["type", "button", "class", "pg-num-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Next Page", 1, "pg-btn", "pg-next", 3, "click", "disabled"], [1, "bi", "bi-chevron-right", "ms-1"], ["type", "button", 1, "pg-num-btn", 3, "click"], [1, "empty-expedition-state"], [1, "empty-compass-glyph"], [1, "empty-title"], ["class", "empty-subtitle", 4, "ngIf"], [1, "empty-cta-wrap"], ["routerLink", "/upcoming-treks", 1, "btn-explore-treks"], ["routerLink", "/faqs", 1, "btn-faq-link"], [1, "empty-subtitle"], [1, "rating-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "rating-modal"], [1, "rating-card", 3, "click"], [1, "rating-subtitle"], [1, "stars-row"], ["type", "button", "class", "star-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["rows", "4", "maxlength", "500", "placeholder", "Share your experience (optional)", 1, "review-input", 3, "ngModelChange", "ngModel"], ["class", "rating-error", 4, "ngIf"], [1, "rating-actions"], ["type", "button", 1, "action-btn", 3, "click"], ["type", "button", 1, "action-btn", "primary", 3, "click"], ["type", "button", 1, "star-btn", 3, "click"], [1, "rating-error"], ["role", "dialog", "aria-modal", "true", 1, "trek-pass-modal"], [1, "trek-pass-card", 3, "click"], [1, "pass-header"], [1, "pass-brand"], [1, "pass-org"], [1, "pass-ref"], ["type", "button", 1, "close-pass-btn", 3, "click"], [1, "pass-body"], [1, "pass-qr-section"], [1, "qr-box"], ["alt", "QR Pass", 1, "qr-img", 3, "src"], [1, "qr-hint"], [1, "pass-clearance"], [1, "clearance-pill"], ["class", "bi bi-check-circle-fill me-1", 4, "ngIf"], ["class", "bi bi-hourglass-split me-1", 4, "ngIf"], [1, "security-code"], [1, "pass-info-grid"], [1, "pass-field"], [1, "p-label"], [1, "p-val"], [1, "p-val", "highlight-qty"], [1, "bi", "bi-geo-alt-fill", "text-success", "me-1"], ["class", "pass-roster", 4, "ngIf"], [1, "pass-guidelines"], [1, "guide-item"], [1, "bi", "bi-shield-check"], [1, "bi", "bi-droplet"], [1, "pass-footer"], ["type", "button", 1, "btn-print-pass", 3, "click"], [1, "bi", "bi-printer", "me-1"], ["type", "button", 1, "btn-close-pass", 3, "click"], [1, "bi", "bi-check-circle-fill", "me-1"], [1, "pass-roster"], [1, "roster-table-wrap"], [1, "roster-table"], [4, "ngFor", "ngForOf"], [1, "blood-pill"], [1, "med-pill"], [1, "modal-backdrop-custom", 3, "click"], [1, "pass-modal-card", 3, "click"], [1, "pass-logo-wrap"], [1, "pass-brand-icon"], [1, "bi", "bi-receipt"], [1, "pass-brand-name"], [1, "pass-sub"], [1, "pass-badge", 2, "background", "#1a8f5a"], ["class", "pass-body", 4, "ngIf"], [1, "invoice-detail-grid"], [1, "invoice-detail-col"], [1, "invoice-detail-heading"], [1, "invoice-table-wrap"], [1, "invoice-line-table"], [1, "num"], [1, "subtotal-row"], ["colspan", "2"], [1, "tax-row"], [1, "total-row"], [1, "pass-modal-card", "cert-modal-card", 3, "click"], [1, "cert-header"], [1, "cert-icons"], [1, "cert-title"], [1, "cert-subtitle"], ["class", "cert-body", 4, "ngIf"], ["type", "button", 1, "btn-print-pass", "btn-share-cert", 3, "click"], [1, "bi", "bi-share", "me-1"], [1, "cert-body"], [1, "cert-presented-to"], [1, "cert-recipient-name"], [1, "cert-description"], [1, "cert-trek-name"], [1, "cert-meta-row"], [1, "cert-meta-label"], [1, "cert-meta-value"], [1, "pass-modal-card", 2, "max-width", "460px", 3, "click"], [1, "pass-header", "remainder-header"], [1, "remainder-summary"], [1, "remainder-row"], [1, "remainder-row", "remainder-row-paid"], [1, "remainder-row-total"], ["class", "remainder-success", 4, "ngIf"], ["class", "pass-footer", 4, "ngIf"], [1, "remainder-success"], ["type", "button", 1, "btn-print-pass", "btn-pay-remainder", 3, "click", "disabled"], [1, "bi", "bi-credit-card", "me-1"], [1, "pass-modal-card", 2, "max-width", "580px", 3, "click"], [1, "pass-header", "carpool-header"], [1, "bi", "bi-car-front"], [1, "carpool-filter-bar"], ["type", "button", 1, "filter-pill", 3, "click"], [1, "bi", "bi-globe2", "me-1"], ["type", "button", "class", "filter-pill", 3, "active", "click", 4, "ngIf"], [1, "carpool-section-title"], ["class", "carpool-loading", 4, "ngIf"], ["class", "carpool-empty", 4, "ngIf"], ["class", "carpool-list", 4, "ngIf"], [1, "carpool-post-form"], [1, "carpool-form-heading"], [1, "bi", "bi-car-front", "me-1"], [1, "carpool-form-grid"], [1, "carpool-form-field"], ["placeholder", "e.g. Brahmagiri Monsoon Trek", 3, "ngModelChange", "ngModel"], ["placeholder", "Driver / Booker Name", 3, "ngModelChange", "ngModel"], ["placeholder", "+91 98860 12345", 3, "ngModelChange", "ngModel"], ["placeholder", "Bengaluru", 3, "ngModelChange", "ngModel"], [1, "carpool-form-field", 2, "grid-column", "1 / -1"], ["placeholder", "e.g. Silk Board & Marathahalli", 3, "ngModelChange", "ngModel"], [1, "quick-locations"], [1, "quick-loc-pill", 3, "click"], ["placeholder", "e.g. Creta / Nexon / Swift", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "max", "7", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 3, "ngModelChange", "ngModel"], ["placeholder", "e.g. Leaving Friday 10 PM. 2 backpack slots.", 3, "ngModelChange", "ngModel"], ["class", "carpool-success-banner", 4, "ngIf"], ["class", "carpool-error-banner", 4, "ngIf"], ["type", "button", 1, "carpool-publish-btn", 3, "click", "disabled"], [1, "carpool-loading"], [1, "carpool-empty"], [1, "carpool-list"], ["class", "carpool-ride-card", 4, "ngFor", "ngForOf"], [1, "carpool-ride-card"], [1, "ride-details"], [1, "carpool-ride-title"], [1, "carpool-ride-meta"], [1, "carpool-ride-owner"], [1, "seat-badge"], [1, "price-text"], ["class", "carpool-notes", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 1, "carpool-whatsapp-btn", 3, "href"], [1, "bi", "bi-whatsapp", "me-1"], [1, "carpool-notes"], [1, "bi", "bi-chat-quote", "me-1"], [1, "carpool-success-banner"], [1, "carpool-error-banner"], [1, "bi", "bi-exclamation-triangle-fill", "text-warning", "me-1"]],
    template: function MyBookingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MyBookingsComponent_div_1_Template, 7, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "header", 2)(3, "div", 3)(4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MyBookingsComponent_Template_button_click_4_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u2190");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6)(9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Expedition Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "My Trek Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 9)(14, "a", 10)(15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Explore Treks");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, MyBookingsComponent_section_19_Template, 46, 7, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "main", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, MyBookingsComponent_div_21_Template, 17, 9, "div", 15)(22, MyBookingsComponent_div_22_Template, 9, 1, "div", 16)(23, MyBookingsComponent_div_23_Template, 2, 2, "div", 17)(24, MyBookingsComponent_div_24_Template, 5, 4, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, MyBookingsComponent_div_25_Template, 1, 0, "div", 19)(26, MyBookingsComponent_div_26_Template, 15, 5, "div", 20)(27, MyBookingsComponent_div_27_Template, 1, 0, "div", 19)(28, MyBookingsComponent_div_28_Template, 72, 18, "div", 21)(29, MyBookingsComponent_div_29_Template, 20, 2, "div", 22)(30, MyBookingsComponent_div_30_Template, 21, 1, "div", 22)(31, MyBookingsComponent_div_31_Template, 38, 16, "div", 22)(32, MyBookingsComponent_div_32_Template, 86, 20, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.toastNotice);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
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
    styles: ["@charset \"UTF-8\";\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background-color: #f7f4ee;\n  background-image: radial-gradient(circle at 10% 8%, rgba(31, 107, 87, 0.08) 0px, transparent 38%), radial-gradient(circle at 90% 92%, rgba(217, 143, 43, 0.07) 0px, transparent 40%), linear-gradient(180deg, #fbf8f2 0%, #f4eee2 100%);\n  color: #1a2621;\n  font-family: \"Manrope\", \"Inter\", -apple-system, BlinkMacSystemFont, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  --theme-forest: #1f6b57;\n  --theme-forest-dark: #134537;\n  --theme-forest-light: #e8f5f0;\n  --theme-forest-border: #c4e5d8;\n  --theme-amber: #d98f2b;\n  --theme-amber-dark: #92400e;\n  --theme-amber-light: #fef3c7;\n  --theme-sky: #0284c7;\n  --theme-sky-light: #e0f2fe;\n  --theme-danger: #dc2626;\n  --theme-danger-light: #fee2e2;\n  --theme-surface: #ffffff;\n  --theme-surface-subtle: #fbf9f4;\n  --theme-surface-inset: #f3ece0;\n  --theme-border: #e4dccc;\n  --theme-border-strong: #d2c5b0;\n  --text-heading: #14201a;\n  --text-body: #32433b;\n  --text-muted: #5e7368;\n  --text-dim: #8fa197;\n  --shadow-card: 0 4px 20px rgba(24, 40, 32, 0.06);\n  --shadow-card-hover: 0 12px 36px rgba(24, 40, 32, 0.12);\n  --shadow-modal: 0 24px 60px rgba(15, 28, 22, 0.22);\n  --radius-sm: 8px;\n  --radius-md: 14px;\n  --radius-lg: 20px;\n  --radius-xl: 26px;\n}\n\n.bookings-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.top-nav-bar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 90;\n  background: rgba(255, 255, 255, 0.92);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border-bottom: 1px solid rgba(228, 220, 204, 0.85);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 14px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n@media (max-width: 640px) {\n  .top-nav-bar[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n    gap: 10px;\n  }\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #f5efe3;\n  border: 1px solid #dfd5c2;\n  color: var(--text-heading);\n  font-size: 0.85rem;\n  font-weight: 700;\n  padding: 8px 16px;\n  min-height: 42px;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  white-space: nowrap;\n}\n@media (max-width: 480px) {\n  .top-nav-bar[_ngcontent-%COMP%]   .nav-back-btn[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: 0.8rem;\n    gap: 4px;\n  }\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-back-btn[_ngcontent-%COMP%]   .back-arrow[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  transition: transform 0.2s ease;\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-back-btn[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  border-color: #c4b59d;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  transform: translateX(-2px);\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-back-btn[_ngcontent-%COMP%]:hover   .back-arrow[_ngcontent-%COMP%] {\n  transform: translateX(-2px);\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-brand[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 0;\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-brand[_ngcontent-%COMP%]   .brand-sub[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.68rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--theme-forest);\n}\n@media (max-width: 480px) {\n  .top-nav-bar[_ngcontent-%COMP%]   .nav-brand[_ngcontent-%COMP%]   .brand-sub[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    letter-spacing: 0.06em;\n  }\n}\n@media (max-width: 360px) {\n  .top-nav-bar[_ngcontent-%COMP%]   .nav-brand[_ngcontent-%COMP%]   .brand-sub[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-brand[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: var(--text-heading);\n  letter-spacing: -0.01em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (max-width: 640px) {\n  .top-nav-bar[_ngcontent-%COMP%]   .nav-brand[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n    font-size: 1.05rem;\n  }\n}\n@media (max-width: 420px) {\n  .top-nav-bar[_ngcontent-%COMP%]   .nav-brand[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%]   .btn-browse-new[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: linear-gradient(135deg, var(--theme-forest) 0%, var(--theme-forest-dark) 100%);\n  color: #ffffff;\n  font-size: 0.82rem;\n  font-weight: 700;\n  padding: 9px 18px;\n  min-height: 42px;\n  border-radius: var(--radius-md);\n  text-decoration: none;\n  box-shadow: 0 4px 14px rgba(31, 107, 87, 0.25);\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n@media (max-width: 640px) {\n  .top-nav-bar[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%]   .btn-browse-new[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: 0.78rem;\n  }\n}\n@media (max-width: 380px) {\n  .top-nav-bar[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%]   .btn-browse-new[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%]   .btn-browse-new[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.top-nav-bar[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%]   .btn-browse-new[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(31, 107, 87, 0.38);\n  filter: brightness(1.06);\n}\n\n.hero-expedition-banner[_ngcontent-%COMP%] {\n  padding: 32px 24px 16px;\n  position: relative;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #184f41 0%, #103a30 100%);\n  border-radius: var(--radius-xl);\n  padding: 32px 36px;\n  box-shadow: 0 10px 30px rgba(19, 69, 55, 0.18);\n  position: relative;\n  overflow: hidden;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -40%;\n  right: -15%;\n  width: 420px;\n  height: 420px;\n  background: radial-gradient(circle, rgba(217, 143, 43, 0.22) 0%, transparent 70%);\n  pointer-events: none;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .expedition-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #a7f3d0;\n  font-size: 0.72rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  padding: 5px 14px;\n  border-radius: 999px;\n  margin-bottom: 14px;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .expedition-badge[_ngcontent-%COMP%]   .pulse-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #34d399;\n  box-shadow: 0 0 8px #34d399;\n  animation: _ngcontent-%COMP%_pulseAnim 2s infinite ease-in-out;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-heading[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: clamp(1.6rem, 3.2vw, 2.3rem);\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.02em;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fbbf24 0%, #fed7aa 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-subtext[_ngcontent-%COMP%] {\n  margin: 0 0 26px;\n  font-size: 0.94rem;\n  color: #c7ded5;\n  max-width: 680px;\n  line-height: 1.6;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));\n  gap: 16px;\n  margin-top: 10px;\n}\n@media (max-width: 768px) {\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n}\n@media (max-width: 420px) {\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: var(--radius-md);\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  transition: all 0.25s ease;\n}\n@media (max-width: 420px) {\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n    padding: 10px 8px;\n    gap: 8px;\n    border-radius: 10px;\n  }\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.14);\n  border-color: rgba(255, 255, 255, 0.3);\n  transform: translateY(-2px);\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  flex-shrink: 0;\n}\n@media (max-width: 420px) {\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n    width: 34px;\n    height: 34px;\n    font-size: 1rem;\n    border-radius: 8px;\n  }\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon.upcoming-icon[_ngcontent-%COMP%] {\n  background: rgba(56, 189, 248, 0.2);\n  color: #38bdf8;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon.completed-icon[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  color: #fbbf24;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon.total-icon[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  color: #34d399;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon.spent-icon[_ngcontent-%COMP%] {\n  background: rgba(192, 132, 252, 0.2);\n  color: #e9d5ff;\n  font-weight: 800;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-data[_ngcontent-%COMP%]   .metric-val[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.01em;\n}\n@media (max-width: 420px) {\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-data[_ngcontent-%COMP%]   .metric-val[_ngcontent-%COMP%] {\n    font-size: 1.05rem;\n  }\n}\n.hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-data[_ngcontent-%COMP%]   .metric-lbl[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #a3c4b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n@media (max-width: 420px) {\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-data[_ngcontent-%COMP%]   .metric-lbl[_ngcontent-%COMP%] {\n    font-size: 0.62rem;\n    letter-spacing: 0.02em;\n  }\n}\n\n.dashboard-main-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 16px 24px 72px;\n  flex: 1;\n}\n\n.tab-nav-container[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n  padding-bottom: 4px;\n}\n.tab-nav-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.tab-nav-container[_ngcontent-%COMP%]   .segmented-pill-nav[_ngcontent-%COMP%] {\n  display: inline-flex;\n  background: #e9e1d1;\n  border: 1px solid #dcd2bf;\n  border-radius: 999px;\n  padding: 5px;\n  gap: 6px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  white-space: nowrap;\n  min-width: max-content;\n}\n@media (max-width: 640px) {\n  .tab-nav-container[_ngcontent-%COMP%]   .segmented-pill-nav[_ngcontent-%COMP%] {\n    padding: 4px;\n    gap: 4px;\n  }\n}\n.tab-nav-container[_ngcontent-%COMP%]   .pill-tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  font-size: 0.86rem;\n  font-weight: 700;\n  padding: 9px 20px;\n  min-height: 44px;\n  border-radius: 999px;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n@media (max-width: 640px) {\n  .tab-nav-container[_ngcontent-%COMP%]   .pill-tab[_ngcontent-%COMP%] {\n    padding: 8px 14px;\n    font-size: 0.8rem;\n    gap: 6px;\n  }\n}\n.tab-nav-container[_ngcontent-%COMP%]   .pill-tab[_ngcontent-%COMP%]   .tab-emoji[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.tab-nav-container[_ngcontent-%COMP%]   .pill-tab[_ngcontent-%COMP%]   .tab-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.08);\n  color: var(--text-heading);\n  font-size: 0.7rem;\n  font-weight: 800;\n  padding: 2px 8px;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.tab-nav-container[_ngcontent-%COMP%]   .pill-tab[_ngcontent-%COMP%]:hover {\n  color: var(--text-heading);\n  background: rgba(255, 255, 255, 0.5);\n}\n.tab-nav-container[_ngcontent-%COMP%]   .pill-tab.active[_ngcontent-%COMP%] {\n  background: var(--theme-forest);\n  color: #ffffff;\n  box-shadow: 0 4px 14px rgba(31, 107, 87, 0.3);\n}\n.tab-nav-container[_ngcontent-%COMP%]   .pill-tab.active[_ngcontent-%COMP%]   .tab-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  color: #ffffff;\n}\n\n.stream-header[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.stream-header[_ngcontent-%COMP%]   .stream-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n}\n.stream-header[_ngcontent-%COMP%]   .stream-title-group[_ngcontent-%COMP%]   .stream-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--text-heading);\n  letter-spacing: -0.01em;\n}\n.stream-header[_ngcontent-%COMP%]   .stream-title-group[_ngcontent-%COMP%]   .stream-count[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--theme-forest);\n  background: var(--theme-forest-light);\n  padding: 3px 12px;\n  border-radius: 12px;\n  border: 1px solid var(--theme-forest-border);\n}\n\n.expeditions-stream[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n\n.expedition-ticket-card[_ngcontent-%COMP%] {\n  background: var(--theme-surface);\n  border: 1px solid var(--theme-border);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-card);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  position: relative;\n}\n@media (max-width: 1040px) {\n  .expedition-ticket-card[_ngcontent-%COMP%] {\n    grid-template-columns: 280px 1fr;\n  }\n}\n@media (max-width: 960px) {\n  .expedition-ticket-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    border-radius: var(--radius-lg);\n  }\n}\n@media (max-width: 480px) {\n  .expedition-ticket-card[_ngcontent-%COMP%] {\n    border-radius: 16px;\n  }\n}\n.expedition-ticket-card[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5cb;\n  box-shadow: var(--shadow-card-hover);\n  transform: translateY(-2px);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]:hover   .ticket-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.03);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 240px;\n  height: 100%;\n  overflow: hidden;\n  background: #ebe5d8;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%]   .visual-gradient-scrim[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(15, 28, 22, 0.7) 0%, rgba(15, 28, 22, 0.05) 45%, rgba(15, 28, 22, 0.75) 100%);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%]   .visual-top-chips[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  left: 14px;\n  right: 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  z-index: 2;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%]   .visual-top-chips[_ngcontent-%COMP%]   .ref-tag[_ngcontent-%COMP%] {\n  background: rgba(15, 28, 22, 0.75);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: #f1f5f9;\n  font-family: ui-monospace, SFMono-Regular, monospace;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 8px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%]   .visual-top-chips[_ngcontent-%COMP%]   .ref-tag[_ngcontent-%COMP%]   .hash-sym[_ngcontent-%COMP%] {\n  color: #34d399;\n  margin-right: 2px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%]   .visual-top-chips[_ngcontent-%COMP%]   .countdown-tag[_ngcontent-%COMP%] {\n  background: rgba(217, 143, 43, 0.9);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  color: #ffffff;\n  font-size: 0.7rem;\n  font-weight: 800;\n  padding: 4px 10px;\n  border-radius: 8px;\n  letter-spacing: 0.02em;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%]   .visual-bottom-status[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  left: 14px;\n  right: 14px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  z-index: 2;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%]   .visual-bottom-status[_ngcontent-%COMP%]   .status-chip[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  padding: 4px 12px;\n  border-radius: 999px;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-details[_ngcontent-%COMP%] {\n  padding: 24px 28px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 16px;\n  background: #ffffff;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .trek-headline[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .trek-headline[_ngcontent-%COMP%]   .headline-main[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .trek-headline[_ngcontent-%COMP%]   .headline-main[_ngcontent-%COMP%]   .trek-title[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: var(--text-heading);\n  letter-spacing: -0.01em;\n  line-height: 1.3;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .trek-headline[_ngcontent-%COMP%]   .headline-main[_ngcontent-%COMP%]   .trek-location[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .trek-headline[_ngcontent-%COMP%]   .headline-main[_ngcontent-%COMP%]   .trek-location[_ngcontent-%COMP%]   .pin-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .trek-headline[_ngcontent-%COMP%]   .price-summary-badge[_ngcontent-%COMP%] {\n  background: var(--theme-forest-light);\n  border: 1px solid var(--theme-forest-border);\n  border-radius: var(--radius-md);\n  padding: 10px 16px;\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex-shrink: 0;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .trek-headline[_ngcontent-%COMP%]   .price-summary-badge[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .trek-headline[_ngcontent-%COMP%]   .price-summary-badge[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--theme-forest);\n  letter-spacing: -0.01em;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .itinerary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n  background: var(--theme-surface-subtle);\n  border: 1px solid var(--theme-border);\n  border-radius: var(--radius-md);\n  padding: 14px 16px;\n}\n@media (max-width: 600px) {\n  .expedition-ticket-card[_ngcontent-%COMP%]   .itinerary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n    padding: 10px 12px;\n  }\n}\n@media (max-width: 360px) {\n  .expedition-ticket-card[_ngcontent-%COMP%]   .itinerary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .itinerary-grid[_ngcontent-%COMP%]   .itinerary-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .itinerary-grid[_ngcontent-%COMP%]   .itinerary-cell[_ngcontent-%COMP%]   .cell-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n}\n@media (max-width: 600px) {\n  .expedition-ticket-card[_ngcontent-%COMP%]   .itinerary-grid[_ngcontent-%COMP%]   .itinerary-cell[_ngcontent-%COMP%]   .cell-label[_ngcontent-%COMP%] {\n    font-size: 0.64rem;\n  }\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .itinerary-grid[_ngcontent-%COMP%]   .itinerary-cell[_ngcontent-%COMP%]   .cell-val[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--text-body);\n  word-break: break-word;\n}\n@media (max-width: 600px) {\n  .expedition-ticket-card[_ngcontent-%COMP%]   .itinerary-grid[_ngcontent-%COMP%]   .itinerary-cell[_ngcontent-%COMP%]   .cell-val[_ngcontent-%COMP%] {\n    font-size: 0.82rem;\n  }\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .itinerary-grid[_ngcontent-%COMP%]   .itinerary-cell[_ngcontent-%COMP%]   .balance-due-text[_ngcontent-%COMP%] {\n  color: #b45309;\n  font-weight: 800;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .itinerary-grid[_ngcontent-%COMP%]   .itinerary-cell[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .addons-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .addons-bar[_ngcontent-%COMP%]   .addon-tag[_ngcontent-%COMP%] {\n  background: #f1ede3;\n  border: 1px solid #ddd5c4;\n  color: var(--text-body);\n  font-size: 0.74rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 8px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .review-bubble[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-radius: var(--radius-md);\n  padding: 12px 16px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .review-bubble[_ngcontent-%COMP%]   .review-stars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #cbd5e1;\n  font-size: 0.95rem;\n  margin-bottom: 6px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .review-bubble[_ngcontent-%COMP%]   .review-stars[_ngcontent-%COMP%]   .star-lit[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .review-bubble[_ngcontent-%COMP%]   .review-stars[_ngcontent-%COMP%]   .review-date[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .review-bubble[_ngcontent-%COMP%]   .review-text[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 0.85rem;\n  color: #334155;\n  font-style: italic;\n  line-height: 1.5;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .review-bubble[_ngcontent-%COMP%]   .admin-response[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px dashed #fcd34d;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .review-bubble[_ngcontent-%COMP%]   .admin-response[_ngcontent-%COMP%]   .admin-resp-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #15803d;\n  margin-bottom: 2px;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .review-bubble[_ngcontent-%COMP%]   .admin-response[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  color: #475569;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .cancellation-policy-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--theme-danger-light);\n  border: 1px solid #fecaca;\n  border-radius: var(--radius-sm);\n  padding: 8px 12px;\n  font-size: 0.78rem;\n  color: #991b1b;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .cancellation-policy-bar[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .cancellation-policy-bar[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #7f1d1d;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  padding-top: 14px;\n  border-top: 1px solid var(--theme-border);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .act-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 0.82rem;\n  font-weight: 700;\n  padding: 9px 16px;\n  border-radius: var(--radius-md);\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  text-decoration: none;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .act-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .act-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .act-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-digital-pass[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--theme-forest) 0%, var(--theme-forest-dark) 100%);\n  color: #ffffff;\n  box-shadow: 0 4px 14px rgba(31, 107, 87, 0.25);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-digital-pass[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 18px rgba(31, 107, 87, 0.38);\n  filter: brightness(1.06);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-settle-balance[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--theme-amber) 0%, #b45309 100%);\n  color: #ffffff;\n  box-shadow: 0 4px 14px rgba(217, 143, 43, 0.25);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-settle-balance[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 18px rgba(217, 143, 43, 0.38);\n  filter: brightness(1.06);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-carpool[_ngcontent-%COMP%] {\n  background: var(--theme-sky-light);\n  border: 1px solid #bae6fd;\n  color: var(--theme-sky);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-carpool[_ngcontent-%COMP%]:hover {\n  background: #bae6fd;\n  border-color: #7dd3fc;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-summit-cert[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d98f2b 0%, #92400e 100%);\n  color: #ffffff;\n  box-shadow: 0 4px 14px rgba(217, 143, 43, 0.25);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-summit-cert[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 18px rgba(217, 143, 43, 0.38);\n  filter: brightness(1.06);\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-rating[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  color: #334155;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-rating[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #94a3b8;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-cancel-trip[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #fecaca;\n  color: var(--theme-danger);\n  margin-left: auto;\n}\n.expedition-ticket-card[_ngcontent-%COMP%]   .ticket-action-toolbar[_ngcontent-%COMP%]   .btn-cancel-trip[_ngcontent-%COMP%]:hover {\n  background: var(--theme-danger-light);\n  border-color: #fca5a5;\n}\n\n.badge-confirmed[_ngcontent-%COMP%] {\n  background: #dcfce7 !important;\n  border: 1px solid #86efac !important;\n  color: #15803d !important;\n}\n\n.badge-completed[_ngcontent-%COMP%] {\n  background: #e0f2fe !important;\n  border: 1px solid #7dd3fc !important;\n  color: #0369a1 !important;\n}\n\n.badge-cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2 !important;\n  border: 1px solid #fca5a5 !important;\n  color: #b91c1c !important;\n}\n\n.badge-pending[_ngcontent-%COMP%] {\n  background: #fef3c7 !important;\n  border: 1px solid #fde047 !important;\n  color: #a16207 !important;\n}\n\n.badge-paid[_ngcontent-%COMP%] {\n  background: #dcfce7 !important;\n  border: 1px solid #86efac !important;\n  color: #15803d !important;\n}\n\n.badge-partial[_ngcontent-%COMP%] {\n  background: #fef3c7 !important;\n  border: 1px solid #fcd34d !important;\n  color: #b45309 !important;\n}\n\n.empty-expedition-state[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px dashed var(--theme-border-strong);\n  border-radius: var(--radius-xl);\n  padding: 64px 32px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-card);\n}\n.empty-expedition-state[_ngcontent-%COMP%]   .empty-compass-glyph[_ngcontent-%COMP%] {\n  font-size: 3.8rem;\n  margin-bottom: 16px;\n  animation: _ngcontent-%COMP%_floatAnim 4s infinite ease-in-out;\n}\n.empty-expedition-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text-heading);\n}\n.empty-expedition-state[_ngcontent-%COMP%]   .empty-subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 28px;\n  font-size: 0.94rem;\n  color: var(--text-muted);\n  max-width: 480px;\n  line-height: 1.6;\n}\n.empty-expedition-state[_ngcontent-%COMP%]   .empty-cta-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.empty-expedition-state[_ngcontent-%COMP%]   .empty-cta-wrap[_ngcontent-%COMP%]   .btn-explore-treks[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--theme-forest) 0%, var(--theme-forest-dark) 100%);\n  color: #ffffff;\n  font-size: 0.88rem;\n  font-weight: 700;\n  padding: 12px 24px;\n  border-radius: var(--radius-md);\n  text-decoration: none;\n  box-shadow: 0 4px 16px rgba(31, 107, 87, 0.25);\n  transition: all 0.2s ease;\n}\n.empty-expedition-state[_ngcontent-%COMP%]   .empty-cta-wrap[_ngcontent-%COMP%]   .btn-explore-treks[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(31, 107, 87, 0.35);\n  filter: brightness(1.06);\n}\n.empty-expedition-state[_ngcontent-%COMP%]   .empty-cta-wrap[_ngcontent-%COMP%]   .btn-faq-link[_ngcontent-%COMP%] {\n  background: #f5efe3;\n  border: 1px solid #dfd5c2;\n  color: var(--text-heading);\n  font-size: 0.88rem;\n  font-weight: 700;\n  padding: 12px 20px;\n  border-radius: var(--radius-md);\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.empty-expedition-state[_ngcontent-%COMP%]   .empty-cta-wrap[_ngcontent-%COMP%]   .btn-faq-link[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n\n.skeleton-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.skeleton-container[_ngcontent-%COMP%]   .skel-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--theme-border);\n  border-radius: var(--radius-xl);\n  height: 180px;\n  display: flex;\n  overflow: hidden;\n}\n.skeleton-container[_ngcontent-%COMP%]   .skel-card[_ngcontent-%COMP%]   .skel-thumb[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 100%;\n  background: #eee8dc;\n}\n.skeleton-container[_ngcontent-%COMP%]   .skel-card[_ngcontent-%COMP%]   .skel-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.skeleton-container[_ngcontent-%COMP%]   .skel-card[_ngcontent-%COMP%]   .skel-line[_ngcontent-%COMP%] {\n  height: 16px;\n  border-radius: 6px;\n  background: #eee8dc;\n}\n.skeleton-container[_ngcontent-%COMP%]   .skel-card[_ngcontent-%COMP%]   .skel-line.w-40[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.skeleton-container[_ngcontent-%COMP%]   .skel-card[_ngcontent-%COMP%]   .skel-line.w-70[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.skeleton-container[_ngcontent-%COMP%]   .skel-card[_ngcontent-%COMP%]   .skel-line.w-90[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.skeleton-container[_ngcontent-%COMP%]   .shimmer[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.skeleton-container[_ngcontent-%COMP%]   .shimmer[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);\n  animation: _ngcontent-%COMP%_shimmerAnim 1.5s infinite;\n}\n\n.state-card.error-card[_ngcontent-%COMP%] {\n  background: var(--theme-danger-light);\n  border: 1px solid #fecaca;\n  border-radius: var(--radius-lg);\n  padding: 32px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.state-card.error-card[_ngcontent-%COMP%]   .state-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.state-card.error-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--theme-danger);\n  font-size: 1.2rem;\n}\n.state-card.error-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-body);\n  font-size: 0.9rem;\n}\n.state-card.error-card[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  background: var(--theme-danger);\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-weight: 700;\n  cursor: pointer;\n  margin-top: 6px;\n}\n\n.rating-backdrop[_ngcontent-%COMP%], \n.modal-backdrop-custom[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9999;\n  background: rgba(18, 30, 25, 0.65);\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  overflow-y: auto;\n}\n\n.rating-modal[_ngcontent-%COMP%], \n.trek-pass-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  overflow-y: auto;\n}\n\n.rating-card[_ngcontent-%COMP%], \n.trek-pass-card[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: var(--text-body);\n  border: 1px solid var(--theme-border);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-modal);\n  width: min(640px, 100vw - 20px);\n  max-height: 90vh;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_modalPop 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@media (max-width: 640px) {\n  .rating-card[_ngcontent-%COMP%], \n   .trek-pass-card[_ngcontent-%COMP%], \n   .pass-modal-card[_ngcontent-%COMP%] {\n    border-radius: var(--radius-lg);\n    max-height: 88vh;\n  }\n}\n\n.rating-card[_ngcontent-%COMP%] {\n  padding: 28px;\n  max-width: 480px;\n}\n.rating-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: var(--text-heading);\n}\n.rating-card[_ngcontent-%COMP%]   .rating-subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  font-size: 0.88rem;\n  color: var(--text-muted);\n}\n.rating-card[_ngcontent-%COMP%]   .stars-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.rating-card[_ngcontent-%COMP%]   .stars-row[_ngcontent-%COMP%]   .star-btn[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  color: #cbd5e1;\n  font-size: 1.4rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.rating-card[_ngcontent-%COMP%]   .stars-row[_ngcontent-%COMP%]   .star-btn[_ngcontent-%COMP%]:hover, .rating-card[_ngcontent-%COMP%]   .stars-row[_ngcontent-%COMP%]   .star-btn.active[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  border-color: #fcd34d;\n  background: #fef3c7;\n  transform: scale(1.08);\n}\n.rating-card[_ngcontent-%COMP%]   .review-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: var(--radius-md);\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: var(--text-heading);\n  font-size: 0.88rem;\n  font-family: inherit;\n  padding: 12px 14px;\n  resize: vertical;\n  min-height: 100px;\n  margin-bottom: 12px;\n}\n.rating-card[_ngcontent-%COMP%]   .review-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--theme-forest);\n  box-shadow: 0 0 0 3px rgba(31, 107, 87, 0.15);\n}\n.rating-card[_ngcontent-%COMP%]   .rating-error[_ngcontent-%COMP%] {\n  color: var(--theme-danger);\n  font-size: 0.8rem;\n  margin: 0 0 12px;\n}\n.rating-card[_ngcontent-%COMP%]   .rating-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.rating-card[_ngcontent-%COMP%]   .rating-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border-radius: var(--radius-md);\n  font-size: 0.84rem;\n  font-weight: 700;\n  border: 1px solid #cbd5e1;\n  background: #f8fafc;\n  color: #334155;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.rating-card[_ngcontent-%COMP%]   .rating-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.rating-card[_ngcontent-%COMP%]   .rating-actions[_ngcontent-%COMP%]   .action-btn.primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--theme-forest) 0%, var(--theme-forest-dark) 100%);\n  border-color: transparent;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(31, 107, 87, 0.25);\n}\n.rating-card[_ngcontent-%COMP%]   .rating-actions[_ngcontent-%COMP%]   .action-btn.primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.06);\n}\n\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #184f41 0%, #103a30 100%);\n  padding: 20px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .pass-brand[_ngcontent-%COMP%]   .pass-org[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .pass-brand[_ngcontent-%COMP%]   .pass-org[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #a7f3d0;\n  display: block;\n  margin-bottom: 4px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .pass-brand[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .pass-brand[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 2px;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #ffffff;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .pass-brand[_ngcontent-%COMP%]   .pass-ref[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .pass-brand[_ngcontent-%COMP%]   .pass-ref[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-family: ui-monospace, SFMono-Regular, monospace;\n  color: #d1fae5;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .close-pass-btn[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .close-pass-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: #ffffff;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  font-size: 0.95rem;\n  transition: all 0.15s ease;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .close-pass-btn[_ngcontent-%COMP%]:hover, \n.pass-modal-card[_ngcontent-%COMP%]   .pass-header[_ngcontent-%COMP%]   .close-pass-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.05);\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: var(--theme-surface-subtle);\n  border: 1px dashed var(--theme-border-strong);\n  border-radius: var(--radius-md);\n  padding: 16px 20px;\n  flex-wrap: wrap;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%]   .qr-img[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%]   .qr-img[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n  border-radius: 12px;\n  background: #ffffff;\n  padding: 6px;\n  border: 1px solid #e2e8f0;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%]   .qr-hint[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .qr-box[_ngcontent-%COMP%]   .qr-hint[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--text-muted);\n  margin-top: 6px;\n  font-weight: 700;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .pass-clearance[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .pass-clearance[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .pass-clearance[_ngcontent-%COMP%]   .clearance-pill[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .pass-clearance[_ngcontent-%COMP%]   .clearance-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 999px;\n  background: #fef3c7;\n  border: 1px solid #fcd34d;\n  color: #b45309;\n  font-size: 0.78rem;\n  font-weight: 800;\n  width: fit-content;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .pass-clearance[_ngcontent-%COMP%]   .clearance-pill.verified[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .pass-clearance[_ngcontent-%COMP%]   .clearance-pill.verified[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  border-color: #86efac;\n  color: #15803d;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .pass-clearance[_ngcontent-%COMP%]   .security-code[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-qr-section[_ngcontent-%COMP%]   .pass-clearance[_ngcontent-%COMP%]   .security-code[_ngcontent-%COMP%] {\n  font-family: ui-monospace, SFMono-Regular, monospace;\n  font-size: 0.72rem;\n  color: var(--text-dim);\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%]   .pass-field[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%]   .pass-field[_ngcontent-%COMP%] {\n  background: var(--theme-surface-subtle);\n  border: 1px solid var(--theme-border);\n  border-radius: var(--radius-md);\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%]   .pass-field[_ngcontent-%COMP%]   .p-label[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%]   .pass-field[_ngcontent-%COMP%]   .p-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 800;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%]   .pass-field[_ngcontent-%COMP%]   .p-val[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%]   .pass-field[_ngcontent-%COMP%]   .p-val[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-heading);\n  font-weight: 700;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%]   .pass-field[_ngcontent-%COMP%]   .highlight-qty[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-info-grid[_ngcontent-%COMP%]   .pass-field[_ngcontent-%COMP%]   .highlight-qty[_ngcontent-%COMP%] {\n  color: var(--theme-forest);\n  font-size: 1rem;\n  font-weight: 800;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--theme-forest);\n  margin: 0 0 10px;\n  font-weight: 800;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid var(--theme-border);\n  border-radius: var(--radius-md);\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.78rem;\n  min-width: 480px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  border-bottom: 1px solid #f1f5f9;\n  white-space: nowrap;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--theme-surface-subtle);\n  color: var(--text-muted);\n  font-weight: 800;\n  text-transform: uppercase;\n  font-size: 0.68rem;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--text-body);\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   .blood-pill[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   .blood-pill[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  border: 1px solid #fca5a5;\n  color: #b91c1c;\n  padding: 2px 7px;\n  border-radius: 6px;\n  font-weight: 800;\n  font-size: 0.72rem;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   .med-pill[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   .med-pill[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #15803d;\n  font-weight: 700;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   .med-pill.warn[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-roster[_ngcontent-%COMP%]   .roster-table-wrap[_ngcontent-%COMP%]   .roster-table[_ngcontent-%COMP%]   .med-pill.warn[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-weight: 800;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-guidelines[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-guidelines[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: var(--radius-md);\n  padding: 12px 16px;\n  font-size: 0.78rem;\n  color: #166534;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-guidelines[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-body[_ngcontent-%COMP%]   .pass-guidelines[_ngcontent-%COMP%]   .guide-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  background: var(--theme-surface-subtle);\n  border-top: 1px solid var(--theme-border);\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n@media (max-width: 540px) {\n  .trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%], \n   .pass-modal-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    padding: 12px 16px;\n  }\n  .trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-print-pass[_ngcontent-%COMP%], \n   .trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-close-pass[_ngcontent-%COMP%], \n   .pass-modal-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-print-pass[_ngcontent-%COMP%], \n   .pass-modal-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-close-pass[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 44px;\n    justify-content: center;\n    display: inline-flex;\n    align-items: center;\n  }\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-print-pass[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-print-pass[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--theme-forest) 0%, var(--theme-forest-dark) 100%);\n  color: #ffffff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: var(--radius-md);\n  font-weight: 700;\n  font-size: 0.84rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-print-pass[_ngcontent-%COMP%]:hover, \n.pass-modal-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-print-pass[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.06);\n  transform: translateY(-1px);\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-close-pass[_ngcontent-%COMP%], \n.pass-modal-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-close-pass[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  color: #334155;\n  padding: 10px 18px;\n  border-radius: var(--radius-md);\n  font-weight: 700;\n  font-size: 0.84rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.trek-pass-modal[_ngcontent-%COMP%]   .trek-pass-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-close-pass[_ngcontent-%COMP%]:hover, \n.pass-modal-card[_ngcontent-%COMP%]   .pass-footer[_ngcontent-%COMP%]   .btn-close-pass[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n\n.invoice-detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px;\n  margin-bottom: 18px;\n  font-size: 0.85rem;\n}\n\n.invoice-detail-heading[_ngcontent-%COMP%] {\n  color: var(--theme-forest);\n  font-weight: 800;\n  font-size: 0.7rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n\n.invoice-detail-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: var(--text-body);\n  line-height: 1.6;\n}\n\n.invoice-table-wrap[_ngcontent-%COMP%] {\n  border: 1px solid var(--theme-border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n.invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.82rem;\n}\n.invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  border-bottom: 1px solid #f1f5f9;\n}\n.invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--theme-surface-subtle);\n  color: var(--text-muted);\n  font-weight: 800;\n  text-transform: uppercase;\n  font-size: 0.7rem;\n}\n.invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%]   td.num[_ngcontent-%COMP%], .invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%]   th.num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%]   tr.subtotal-row[_ngcontent-%COMP%] {\n  background: #fafaf9;\n  font-weight: 800;\n}\n.invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%]   tr.tax-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.invoice-table-wrap[_ngcontent-%COMP%]   .invoice-line-table[_ngcontent-%COMP%]   tr.total-row[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  font-weight: 800;\n  color: #15803d;\n  font-size: 1rem;\n}\n\n.cert-modal-card[_ngcontent-%COMP%] {\n  border: 3px solid #f59e0b !important;\n  background: radial-gradient(circle at center, #fffdfa 0%, #fbf8f0 100%) !important;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px 20px 10px;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%]   .cert-icons[_ngcontent-%COMP%] {\n  font-size: 2.6rem;\n  margin-bottom: 8px;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%]   .cert-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #78350f;\n  letter-spacing: 0.02em;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-header[_ngcontent-%COMP%]   .cert-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #92400e;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-top: 4px;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-body[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px 30px 28px;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-body[_ngcontent-%COMP%]   .cert-presented-to[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-body[_ngcontent-%COMP%]   .cert-recipient-name[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin: 10px 0;\n  border-bottom: 2px solid #f59e0b;\n  display: inline-block;\n  padding-bottom: 6px;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-body[_ngcontent-%COMP%]   .cert-description[_ngcontent-%COMP%] {\n  font-size: 0.94rem;\n  color: #334155;\n  margin-top: 14px;\n  line-height: 1.6;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-body[_ngcontent-%COMP%]   .cert-description[_ngcontent-%COMP%]   .cert-trek-name[_ngcontent-%COMP%] {\n  color: var(--theme-forest);\n  font-size: 1.15rem;\n  font-weight: 800;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-body[_ngcontent-%COMP%]   .cert-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-top: 24px;\n  padding-top: 16px;\n  border-top: 1px dashed #e2e8f0;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-body[_ngcontent-%COMP%]   .cert-meta-row[_ngcontent-%COMP%]   .cert-meta-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #92400e;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .cert-body[_ngcontent-%COMP%]   .cert-meta-row[_ngcontent-%COMP%]   .cert-meta-value[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #0f172a;\n  font-weight: 800;\n}\n.cert-modal-card[_ngcontent-%COMP%]   .btn-share-cert[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d98f2b 0%, #b45309 100%) !important;\n}\n\n.remainder-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d98f2b 0%, #b45309 100%) !important;\n}\n\n.remainder-summary[_ngcontent-%COMP%] {\n  background: var(--theme-surface-subtle);\n  border: 1px solid var(--theme-border);\n  padding: 16px;\n  border-radius: var(--radius-md);\n  margin-bottom: 16px;\n}\n.remainder-summary[_ngcontent-%COMP%]   .remainder-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  font-size: 0.88rem;\n  color: var(--text-body);\n}\n.remainder-summary[_ngcontent-%COMP%]   .remainder-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-heading);\n}\n.remainder-summary[_ngcontent-%COMP%]   .remainder-row.remainder-row-paid[_ngcontent-%COMP%] {\n  color: #15803d;\n  font-weight: 700;\n}\n.remainder-summary[_ngcontent-%COMP%]   .remainder-row.remainder-row-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid var(--theme-border);\n  padding-top: 10px;\n  margin-top: 10px;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #b45309;\n}\n\n.remainder-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #86efac;\n  color: #15803d;\n  padding: 14px;\n  border-radius: var(--radius-md);\n  font-weight: 800;\n  text-align: center;\n  font-size: 0.9rem;\n}\n\n.btn-pay-remainder[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--theme-amber) 0%, #b45309 100%) !important;\n}\n\n.carpool-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%) !important;\n}\n\n.carpool-filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.carpool-filter-bar[_ngcontent-%COMP%]   .filter-pill[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  border-radius: 999px;\n  padding: 6px 14px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.carpool-filter-bar[_ngcontent-%COMP%]   .filter-pill.active[_ngcontent-%COMP%] {\n  background: #0284c7;\n  border-color: #0284c7;\n  color: #ffffff;\n  box-shadow: 0 2px 10px rgba(2, 132, 199, 0.25);\n}\n\n.carpool-section-title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 0.94rem;\n  color: #0369a1;\n  margin-bottom: 12px;\n}\n\n.carpool-loading[_ngcontent-%COMP%], \n.carpool-empty[_ngcontent-%COMP%] {\n  padding: 18px;\n  text-align: center;\n  color: var(--text-muted);\n  background: var(--theme-surface-subtle);\n  border-radius: var(--radius-md);\n  font-size: 0.85rem;\n  border: 1px dashed var(--theme-border-strong);\n}\n\n.carpool-ride-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e0f2fe;\n  padding: 14px 16px;\n  border-radius: var(--radius-md);\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.06);\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-ride-title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: var(--text-heading);\n  font-size: 0.95rem;\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-ride-meta[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-body);\n  margin-top: 3px;\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-ride-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-ride-owner[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin-top: 4px;\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-ride-owner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-heading);\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-ride-owner[_ngcontent-%COMP%]   .seat-badge[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  border: 1px solid #bae6fd;\n  color: #0369a1;\n  padding: 2px 8px;\n  border-radius: 999px;\n  font-weight: 800;\n  font-size: 0.72rem;\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-ride-owner[_ngcontent-%COMP%]   .price-text[_ngcontent-%COMP%] {\n  color: var(--theme-forest);\n  font-weight: 800;\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-notes[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: var(--text-muted);\n  font-style: italic;\n  margin-top: 4px;\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-whatsapp-btn[_ngcontent-%COMP%] {\n  background: #25d366;\n  color: #ffffff;\n  padding: 8px 16px;\n  border-radius: var(--radius-md);\n  font-weight: 800;\n  text-decoration: none;\n  font-size: 0.84rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.25);\n  transition: all 0.15s ease;\n}\n.carpool-ride-card[_ngcontent-%COMP%]   .carpool-whatsapp-btn[_ngcontent-%COMP%]:hover {\n  background: #1eb956;\n  transform: translateY(-1px);\n}\n\n.carpool-post-form[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 16px;\n  background: var(--theme-surface-subtle);\n  border: 1px solid var(--theme-border);\n  border-radius: var(--radius-lg);\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-form-heading[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 0.92rem;\n  color: var(--text-heading);\n  margin-bottom: 12px;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: var(--text-muted);\n  font-size: 0.76rem;\n  font-weight: 700;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 12px;\n  border: 1px solid #cbd5e1;\n  border-radius: var(--radius-sm);\n  background: #ffffff;\n  color: var(--text-heading);\n  font-family: inherit;\n  font-size: 0.84rem;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0284c7;\n  box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);\n}\n.carpool-post-form[_ngcontent-%COMP%]   .quick-locations[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .quick-locations[_ngcontent-%COMP%]   .quick-loc-pill[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  padding: 3px 10px;\n  border-radius: 999px;\n  cursor: pointer;\n  color: #334155;\n  font-weight: 600;\n  transition: all 0.15s ease;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .quick-locations[_ngcontent-%COMP%]   .quick-loc-pill[_ngcontent-%COMP%]:hover {\n  background: #0284c7;\n  color: #ffffff;\n  border-color: #0284c7;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-success-banner[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  border: 1px solid #86efac;\n  color: #15803d;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  font-weight: 800;\n  font-size: 0.84rem;\n  text-align: center;\n  margin-top: 12px;\n  animation: _ngcontent-%COMP%_modalPop 0.2s ease-out;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-error-banner[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  border: 1px solid #fca5a5;\n  color: #b91c1c;\n  padding: 10px 14px;\n  border-radius: var(--radius-sm);\n  font-weight: 700;\n  font-size: 0.82rem;\n  margin-top: 12px;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-publish-btn[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  width: 100%;\n  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);\n  color: #ffffff;\n  padding: 11px;\n  border: none;\n  border-radius: var(--radius-md);\n  font-weight: 800;\n  font-size: 0.88rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.carpool-post-form[_ngcontent-%COMP%]   .carpool-publish-btn[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.06);\n}\n\n@keyframes _ngcontent-%COMP%_pulseAnim {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.3);\n    opacity: 0.5;\n  }\n}\n@keyframes _ngcontent-%COMP%_floatAnim {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-6px);\n  }\n}\n@keyframes _ngcontent-%COMP%_modalPop {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmerAnim {\n  100% {\n    transform: translateX(100%);\n  }\n}\n@media (max-width: 1040px) {\n  .expedition-ticket-card[_ngcontent-%COMP%] {\n    grid-template-columns: 280px 1fr;\n  }\n}\n@media (max-width: 960px) {\n  .expedition-ticket-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    border-radius: var(--radius-lg);\n  }\n  .expedition-ticket-card[_ngcontent-%COMP%]   .ticket-visual[_ngcontent-%COMP%] {\n    min-height: 200px;\n    height: 200px;\n  }\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n    padding: 24px;\n    border-radius: var(--radius-lg);\n  }\n}\n@media (max-width: 768px) {\n  .hero-expedition-banner[_ngcontent-%COMP%] {\n    padding: 20px 16px 12px;\n  }\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n  .dashboard-main-container[_ngcontent-%COMP%] {\n    padding: 14px 16px 48px;\n  }\n  .ticket-action-toolbar[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .ticket-action-toolbar[_ngcontent-%COMP%]   .act-btn[_ngcontent-%COMP%] {\n    min-height: 44px;\n  }\n}\n@media (max-width: 640px) {\n  .top-nav-bar[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n    gap: 10px;\n  }\n  .hero-expedition-banner[_ngcontent-%COMP%] {\n    padding: 16px 12px 10px;\n  }\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n    padding: 18px 16px;\n    border-radius: 16px;\n  }\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-heading[_ngcontent-%COMP%] {\n    font-size: clamp(1.35rem, 5vw, 1.8rem);\n  }\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-subtext[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    line-height: 1.5;\n    margin-bottom: 16px;\n  }\n  .dashboard-main-container[_ngcontent-%COMP%] {\n    padding: 12px 12px 48px;\n  }\n  .trek-headline[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .trek-headline[_ngcontent-%COMP%]   .price-summary-badge[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: left;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 8px 14px;\n  }\n  .itinerary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n    padding: 10px 12px;\n  }\n  .itinerary-grid[_ngcontent-%COMP%]   .itinerary-cell[_ngcontent-%COMP%]   .cell-label[_ngcontent-%COMP%] {\n    font-size: 0.64rem;\n  }\n  .itinerary-grid[_ngcontent-%COMP%]   .itinerary-cell[_ngcontent-%COMP%]   .cell-val[_ngcontent-%COMP%] {\n    font-size: 0.82rem;\n  }\n  .pass-info-grid[_ngcontent-%COMP%], \n   .invoice-detail-grid[_ngcontent-%COMP%], \n   .carpool-form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .ticket-action-toolbar[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    align-items: stretch !important;\n    gap: 8px !important;\n  }\n  .ticket-action-toolbar[_ngcontent-%COMP%]   .act-btn[_ngcontent-%COMP%] {\n    width: 100% !important;\n    justify-content: center !important;\n    min-height: 44px !important;\n    margin-left: 0 !important;\n  }\n  .expedition-pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n    text-align: center;\n    padding: 14px;\n  }\n  .expedition-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .carpool-ride-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .carpool-ride-card[_ngcontent-%COMP%]   .carpool-whatsapp-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    min-height: 44px;\n  }\n}\n@media (max-width: 420px) {\n  .top-nav-bar[_ngcontent-%COMP%]   .nav-brand[_ngcontent-%COMP%]   .brand-sub[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .top-nav-bar[_ngcontent-%COMP%]   .nav-brand[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .top-nav-bar[_ngcontent-%COMP%]   .nav-back-btn[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n    font-size: 0.78rem;\n  }\n  .top-nav-bar[_ngcontent-%COMP%]   .btn-browse-new[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n    font-size: 0.78rem;\n  }\n  .top-nav-bar[_ngcontent-%COMP%]   .btn-browse-new[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n    padding: 10px 8px;\n    gap: 8px;\n    border-radius: 10px;\n  }\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n    width: 34px;\n    height: 34px;\n    font-size: 1rem;\n    border-radius: 8px;\n  }\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-data[_ngcontent-%COMP%]   .metric-val[_ngcontent-%COMP%] {\n    font-size: 1.05rem;\n  }\n  .hero-expedition-banner[_ngcontent-%COMP%]   .hero-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-data[_ngcontent-%COMP%]   .metric-lbl[_ngcontent-%COMP%] {\n    font-size: 0.62rem;\n    letter-spacing: 0.02em;\n  }\n  .itinerary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n\n\n.expedition-pagination[_ngcontent-%COMP%] {\n  margin: 32px 0 16px;\n  padding: 16px 20px;\n  background: #ffffff;\n  border: 1px solid var(--theme-border, #e2e8f0);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);\n}\n.expedition-pagination[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #475569;\n}\n.expedition-pagination[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.expedition-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.expedition-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pg-btn[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  font-size: 0.84rem;\n  font-weight: 600;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #1e293b;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.2s ease;\n}\n.expedition-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pg-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f1f5f9;\n  border-color: #94a3b8;\n}\n.expedition-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pg-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.expedition-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pg-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.expedition-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pg-num-btn[_ngcontent-%COMP%] {\n  min-width: 36px;\n  height: 36px;\n  padding: 0 6px;\n  font-size: 0.84rem;\n  font-weight: 600;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  background: #f8fafc;\n  color: #334155;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  transition: all 0.2s ease;\n}\n.expedition-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pg-num-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.expedition-pagination[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%]   .pg-num-btn.active[_ngcontent-%COMP%] {\n  background: var(--theme-forest, #10b981);\n  color: #ffffff;\n  border-color: var(--theme-forest, #10b981);\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.35);\n}\n\n\n\n\n\n.booking-toast-wrap[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 99999;\n  animation: _ngcontent-%COMP%_toastSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n.booking-toast-wrap[_ngcontent-%COMP%]   .booking-toast-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #ffffff;\n  border: 1px solid #86efac;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04);\n  border-radius: 12px;\n  padding: 12px 18px;\n  min-width: 300px;\n  max-width: 450px;\n}\n.booking-toast-wrap[_ngcontent-%COMP%]   .booking-toast-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.booking-toast-wrap[_ngcontent-%COMP%]   .booking-toast-box[_ngcontent-%COMP%]   .toast-message[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #0f172a;\n  line-height: 1.4;\n  flex: 1;\n}\n.booking-toast-wrap[_ngcontent-%COMP%]   .booking-toast-box[_ngcontent-%COMP%]   .toast-close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  font-size: 0.85rem;\n  padding: 4px;\n  display: grid;\n  place-items: center;\n}\n.booking-toast-wrap[_ngcontent-%COMP%]   .booking-toast-box[_ngcontent-%COMP%]   .toast-close-btn[_ngcontent-%COMP%]:hover {\n  color: #1e293b;\n}\n.booking-toast-wrap.toast-error[_ngcontent-%COMP%]   .booking-toast-box[_ngcontent-%COMP%] {\n  border-color: #fca5a5;\n}\n\n@keyframes _ngcontent-%COMP%_toastSlideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbXktYm9va2luZ3MvbXktYm9va2luZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBS2hCO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdU9BQ0U7RUFHRixjQUFBO0VBQ0EsOEVBQUE7RUFDQSxtQ0FBQTtFQUdBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBRUEsc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBRUEsb0JBQUE7RUFDQSwwQkFBQTtFQUVBLHVCQUFBO0VBQ0EsNkJBQUE7RUFFQSx3QkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBRUEsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnREFBQTtFQUNBLHVEQUFBO0VBQ0Esa0RBQUE7RUFFQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQWZGOztBQWtCQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFmRjs7QUFxQkE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtBQWxCRjtBQW9CRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBbEJKO0FBb0JJO0VBVEY7SUFVSSxrQkFBQTtJQUNBLFNBQUE7RUFqQko7QUFDRjtBQW9CRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFB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QXhSRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXG4vLyBFWFBFRElUSU9OIERBU0hCT0FSRCAoTVkgQk9PS0lOR1MpIMOiwoDClCBXYXJtIE5hdHVyZSBUaGVtZVxuLy8gSGFybW9uaXplcyB3aXRoIGdvV0lMRCBLYXJ1bmFkdSBFY28tVG91cmlzbSBQYWxldHRlXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcblxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmNGVlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEwJSA4JSwgcmdiYSgzMSwgMTA3LCA4NywgMC4wOCkgMHB4LCB0cmFuc3BhcmVudCAzOCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgOTAlIDkyJSwgcmdiYSgyMTcsIDE0MywgNDMsIDAuMDcpIDBweCwgdHJhbnNwYXJlbnQgNDAlKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmJmOGYyIDAlLCAjZjRlZWUyIDEwMCUpO1xuICBjb2xvcjogIzFhMjYyMTtcbiAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJywgJ0ludGVyJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblxuICAvLyBDdXN0b20gQ29sb3IgVG9rZW5zXG4gIC0tdGhlbWUtZm9yZXN0OiAjMWY2YjU3O1xuICAtLXRoZW1lLWZvcmVzdC1kYXJrOiAjMTM0NTM3O1xuICAtLXRoZW1lLWZvcmVzdC1saWdodDogI2U4ZjVmMDtcbiAgLS10aGVtZS1mb3Jlc3QtYm9yZGVyOiAjYzRlNWQ4O1xuICBcbiAgLS10aGVtZS1hbWJlcjogI2Q5OGYyYjtcbiAgLS10aGVtZS1hbWJlci1kYXJrOiAjOTI0MDBlO1xuICAtLXRoZW1lLWFtYmVyLWxpZ2h0OiAjZmVmM2M3O1xuICBcbiAgLS10aGVtZS1za3k6ICMwMjg0Yzc7XG4gIC0tdGhlbWUtc2t5LWxpZ2h0OiAjZTBmMmZlO1xuICBcbiAgLS10aGVtZS1kYW5nZXI6ICNkYzI2MjY7XG4gIC0tdGhlbWUtZGFuZ2VyLWxpZ2h0OiAjZmVlMmUyO1xuXG4gIC0tdGhlbWUtc3VyZmFjZTogI2ZmZmZmZjtcbiAgLS10aGVtZS1zdXJmYWNlLXN1YnRsZTogI2ZiZjlmNDtcbiAgLS10aGVtZS1zdXJmYWNlLWluc2V0OiAjZjNlY2UwO1xuICAtLXRoZW1lLWJvcmRlcjogI2U0ZGNjYztcbiAgLS10aGVtZS1ib3JkZXItc3Ryb25nOiAjZDJjNWIwO1xuXG4gIC0tdGV4dC1oZWFkaW5nOiAjMTQyMDFhO1xuICAtLXRleHQtYm9keTogIzMyNDMzYjtcbiAgLS10ZXh0LW11dGVkOiAjNWU3MzY4O1xuICAtLXRleHQtZGltOiAjOGZhMTk3O1xuXG4gIC0tc2hhZG93LWNhcmQ6IDAgNHB4IDIwcHggcmdiYSgyNCwgNDAsIDMyLCAwLjA2KTtcbiAgLS1zaGFkb3ctY2FyZC1ob3ZlcjogMCAxMnB4IDM2cHggcmdiYSgyNCwgNDAsIDMyLCAwLjEyKTtcbiAgLS1zaGFkb3ctbW9kYWw6IDAgMjRweCA2MHB4IHJnYmEoMTUsIDI4LCAyMiwgMC4yMik7XG5cbiAgLS1yYWRpdXMtc206IDhweDtcbiAgLS1yYWRpdXMtbWQ6IDE0cHg7XG4gIC0tcmFkaXVzLWxnOiAyMHB4O1xuICAtLXJhZGl1cy14bDogMjZweDtcbn1cblxuLmJvb2tpbmdzLXdyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIFRPUCBIRUFERVIgQkFSXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50b3AtbmF2LWJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Mik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIyOCwgMjIwLCAyMDQsIDAuODUpO1xuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG5cbiAgLm5hdi1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTI4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDE0cHggMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTZweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgcGFkZGluZzogMTBweCAxNHB4O1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5uYXYtYmFjay1idG4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgYmFja2dyb3VuZDogI2Y1ZWZlMztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGZkNWMyO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWhlYWRpbmcpO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIG1pbi1oZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIGdhcDogNHB4O1xuICAgIH1cblxuICAgIC5iYWNrLWFycm93IHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBib3JkZXItY29sb3I6ICNjNGI1OWQ7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcblxuICAgICAgLmJhY2stYXJyb3cge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5hdi1icmFuZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMDtcblxuICAgIC5icmFuZC1zdWIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDAuNjhyZW07XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBjb2xvcjogdmFyKC0tdGhlbWUtZm9yZXN0KTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnJhbmQtdGl0bGUge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtaGVhZGluZyk7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5hdi1hY3Rpb25zIHtcbiAgICAuYnRuLWJyb3dzZS1uZXcge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS10aGVtZS1mb3Jlc3QpIDAlLCB2YXIoLS10aGVtZS1mb3Jlc3QtZGFyaykgMTAwJSk7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBwYWRkaW5nOiA5cHggMThweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDQycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDMxLCAxMDcsIDg3LCAwLjI1KTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gICAgICAgIC5idG4tdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoMzEsIDEwNywgODcsIDAuMzgpO1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wNik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gSEVSTyBFWFBFRElUSU9OIEJBTk5FUlxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uaGVyby1leHBlZGl0aW9uLWJhbm5lciB7XG4gIHBhZGRpbmc6IDMycHggMjRweCAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLmhlcm8taW5uZXIge1xuICAgIG1heC13aWR0aDogMTI4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmhlcm8tY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE4NGY0MSAwJSwgIzEwM2EzMCAxMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xuICAgIHBhZGRpbmc6IDMycHggMzZweDtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDE5LCA2OSwgNTUsIDAuMTgpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtNDAlO1xuICAgICAgcmlnaHQ6IC0xNSU7XG4gICAgICB3aWR0aDogNDIwcHg7XG4gICAgICBoZWlnaHQ6IDQyMHB4O1xuICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMTcsIDE0MywgNDMsIDAuMjIpIDAlLCB0cmFuc3BhcmVudCA3MCUpO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmV4cGVkaXRpb24tYmFkZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgY29sb3I6ICNhN2YzZDA7XG4gICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICAgIHBhZGRpbmc6IDVweCAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG5cbiAgICAucHVsc2UtZG90IHtcbiAgICAgIHdpZHRoOiA3cHg7XG4gICAgICBoZWlnaHQ6IDdweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6ICMzNGQzOTk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgOHB4ICMzNGQzOTk7XG4gICAgICBhbmltYXRpb246IHB1bHNlQW5pbSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICB9XG4gIH1cblxuICAuaGVyby1oZWFkaW5nIHtcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS42cmVtLCAzLjJ2dywgMi4zcmVtKTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuXG4gICAgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmJiZjI0IDAlLCAjZmVkN2FhIDEwMCUpO1xuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgLmhlcm8tc3VidGV4dCB7XG4gICAgbWFyZ2luOiAwIDAgMjZweDtcbiAgICBmb250LXNpemU6IDAuOTRyZW07XG4gICAgY29sb3I6ICNjN2RlZDU7XG4gICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICB9XG5cbiAgLy8gSEVSTyBNRVRSSUNTIEdSSURcbiAgLmhlcm8tbWV0cmljcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIxMHB4LCAxZnIpKTtcbiAgICBnYXA6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAgICAgZ2FwOiA4cHg7XG4gICAgfVxuXG4gICAgLm1ldHJpYy1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgICAgIHBhZGRpbmc6IDE2cHggMThweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNHB4O1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggOHB4O1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICB9XG5cbiAgICAgIC5tZXRyaWMtaWNvbiB7XG4gICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLnVwY29taW5nLWljb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTYsIDE4OSwgMjQ4LCAwLjIpO1xuICAgICAgICAgIGNvbG9yOiAjMzhiZGY4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5jb21wbGV0ZWQtaWNvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDE1OCwgMTEsIDAuMik7XG4gICAgICAgICAgY29sb3I6ICNmYmJmMjQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLnRvdGFsLWljb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjIpO1xuICAgICAgICAgIGNvbG9yOiAjMzRkMzk5O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zcGVudC1pY29uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5MiwgMTMyLCAyNTIsIDAuMik7XG4gICAgICAgICAgY29sb3I6ICNlOWQ1ZmY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubWV0cmljLWRhdGEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDJweDtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuXG4gICAgICAgIC5tZXRyaWMtdmFsIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5tZXRyaWMtbGJsIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogI2EzYzRiODtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42MnJlbTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gTUFJTiBDT05UQUlORVIgJiBUQUIgTkFWSUdBVElPTlxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZGFzaGJvYXJkLW1haW4tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTZweCAyNHB4IDcycHg7XG4gIGZsZXg6IDE7XG59XG5cbi50YWItbmF2LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zZWdtZW50ZWQtcGlsbC1uYXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGJhY2tncm91bmQ6ICNlOWUxZDE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjZDJiZjtcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZ2FwOiA2cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBnYXA6IDRweDtcbiAgICB9XG4gIH1cblxuICAucGlsbC10YWIge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBmb250LXNpemU6IDAuODZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiA5cHggMjBweDtcbiAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgfVxuXG4gICAgLnRhYi1lbW9qaSB7XG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgfVxuXG4gICAgLnRhYi1iYWRnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtaGVhZGluZyk7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkaW5nKTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1mb3Jlc3QpO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMzEsIDEwNywgODcsIDAuMyk7XG5cbiAgICAgIC50YWItYmFkZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBTVFJFQU0gSEVBREVSXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zdHJlYW0taGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICAuc3RyZWFtLXRpdGxlLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBnYXA6IDEycHg7XG5cbiAgICAuc3RyZWFtLXRpdGxlIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkaW5nKTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICAgIH1cblxuICAgIC5zdHJlYW0tY291bnQge1xuICAgICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1mb3Jlc3QpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtZm9yZXN0LWxpZ2h0KTtcbiAgICAgIHBhZGRpbmc6IDNweCAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWZvcmVzdC1ib3JkZXIpO1xuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIEVYUEVESVRJT04gVElDS0VUUyBTVFJFQU0gJiBDQVJEUyAoV0FSTSwgQ0xFQU4gV0hJVEUgQ0FSRFMpXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5leHBlZGl0aW9ucy1zdHJlYW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIycHg7XG59XG5cbi5leHBlZGl0aW9uLXRpY2tldC1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1jYXJkKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzIwcHggMWZyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwNDBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjgwcHggMWZyO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICNjYmQ1Y2I7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWNhcmQtaG92ZXIpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblxuICAgIC50aWNrZXQtdmlzdWFsIGltZyB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRJQ0tFVCBWSVNVQUwgU0VDVElPTiAoTEVGVCBDT0wpXG4gIC50aWNrZXQtdmlzdWFsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMjQwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogI2ViZTVkODtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcbiAgICB9XG5cbiAgICAudmlzdWFsLWdyYWRpZW50LXNjcmltIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGluc2V0OiAwO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAxODBkZWcsXG4gICAgICAgIHJnYmEoMTUsIDI4LCAyMiwgMC43KSAwJSxcbiAgICAgICAgcmdiYSgxNSwgMjgsIDIyLCAwLjA1KSA0NSUsXG4gICAgICAgIHJnYmEoMTUsIDI4LCAyMiwgMC43NSkgMTAwJVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAudmlzdWFsLXRvcC1jaGlwcyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDE0cHg7XG4gICAgICBsZWZ0OiAxNHB4O1xuICAgICAgcmlnaHQ6IDE0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgLnJlZi10YWcge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyOCwgMjIsIDAuNzUpO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICBjb2xvcjogI2YxZjVmOTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIG1vbm9zcGFjZTtcbiAgICAgICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gICAgICAgIC5oYXNoLXN5bSB7XG4gICAgICAgICAgY29sb3I6ICMzNGQzOTk7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvdW50ZG93bi10YWcge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxNywgMTQzLCA0MywgMC45KTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudmlzdWFsLWJvdHRvbS1zdGF0dXMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAxNHB4O1xuICAgICAgbGVmdDogMTRweDtcbiAgICAgIHJpZ2h0OiAxNHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGdhcDogNnB4O1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgLnN0YXR1cy1jaGlwIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjY4cmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRJQ0tFVCBERVRBSUxTIChSSUdIVCBDT0wpXG4gIC50aWNrZXQtZGV0YWlscyB7XG4gICAgcGFkZGluZzogMjRweCAyOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIH1cblxuICAvLyBIRUFETElORVxuICAudHJlay1oZWFkbGluZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxNnB4O1xuXG4gICAgLmhlYWRsaW5lLW1haW4ge1xuICAgICAgZmxleDogMTtcblxuICAgICAgLnRyZWstdGl0bGUge1xuICAgICAgICBtYXJnaW46IDAgMCA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtaGVhZGluZyk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgfVxuXG4gICAgICAudHJlay1sb2NhdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDRweDtcblxuICAgICAgICAucGluLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5wcmljZS1zdW1tYXJ5LWJhZGdlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWZvcmVzdC1saWdodCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1mb3Jlc3QtYm9yZGVyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAycHg7XG4gICAgICBmbGV4LXNocmluazogMDtcblxuICAgICAgLnRvdGFsLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjY1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG5cbiAgICAgIC50b3RhbC12YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lLWZvcmVzdCk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIElUSU5FUkFSWSBHUklEXG4gIC5pdGluZXJhcnktZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE4MHB4LCAxZnIpKTtcbiAgICBnYXA6IDEycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtc3VyZmFjZS1zdWJ0bGUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuXG4gICAgLml0aW5lcmFyeS1jZWxsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAzcHg7XG5cbiAgICAgIC5jZWxsLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjY4cmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjY0cmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jZWxsLXZhbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYm9keSk7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjgycmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5iYWxhbmNlLWR1ZS10ZXh0IHtcbiAgICAgICAgY29sb3I6ICNiNDUzMDk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICB9XG5cbiAgICAgIC50ZXh0LXN1Y2Nlc3Mge1xuICAgICAgICBjb2xvcjogIzE1ODAzZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBBRERPTlNcbiAgLmFkZG9ucy1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogNnB4O1xuXG4gICAgLmFkZG9uLXRhZyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFlZGUzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDVjNDtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJvZHkpO1xuICAgICAgZm9udC1zaXplOiAwLjc0cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cbiAgfVxuXG4gIC8vIFJFVklFVyBCVUJCTEVcbiAgLnJldmlldy1idWJibGUge1xuICAgIGJhY2tncm91bmQ6ICNmZmZiZWI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZkZTY4YTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcblxuICAgIC5yZXZpZXctc3RhcnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDRweDtcbiAgICAgIGNvbG9yOiAjY2JkNWUxO1xuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuXG4gICAgICAuc3Rhci1saXQge1xuICAgICAgICBjb2xvcjogI2Y1OWUwYjtcbiAgICAgIH1cblxuICAgICAgLnJldmlldy1kYXRlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgICAgICBjb2xvcjogIzk0YTNiODtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmV2aWV3LXRleHQge1xuICAgICAgbWFyZ2luOiAwIDAgOHB4O1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgY29sb3I6ICMzMzQxNTU7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cblxuICAgIC5hZG1pbi1yZXNwb25zZSB7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjZmNkMzRkO1xuXG4gICAgICAuYWRtaW4tcmVzcC1iYWRnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBjb2xvcjogIzE1ODAzZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDAuODJyZW07XG4gICAgICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENBTkNFTExBVElPTiBQT0xJQ1kgQkFSXG4gIC5jYW5jZWxsYXRpb24tcG9saWN5LWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWRhbmdlci1saWdodCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZlY2FjYTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICBjb2xvcjogIzk5MWIxYjtcblxuICAgIC5pbmZvLWljb24ge1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuXG4gICAgc3Ryb25nIHtcbiAgICAgIGNvbG9yOiAjN2YxZDFkO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFDVElPTiBCVVRUT05TIFRPT0xCQVJcbiAgLnRpY2tldC1hY3Rpb24tdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWJvcmRlcik7XG5cbiAgICAuYWN0LWJ0biB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDdweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBwYWRkaW5nOiA5cHggMTZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgLmJ0bi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLWRpZ2l0YWwtcGFzcyB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS10aGVtZS1mb3Jlc3QpIDAlLCB2YXIoLS10aGVtZS1mb3Jlc3QtZGFyaykgMTAwJSk7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgzMSwgMTA3LCA4NywgMC4yNSk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoMzEsIDEwNywgODcsIDAuMzgpO1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wNik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi1zZXR0bGUtYmFsYW5jZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS10aGVtZS1hbWJlcikgMCUsICNiNDUzMDkgMTAwJSk7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgyMTcsIDE0MywgNDMsIDAuMjUpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMThweCByZ2JhKDIxNywgMTQzLCA0MywgMC4zOCk7XG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjA2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLWNhcnBvb2wge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtc2t5LWxpZ2h0KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYWU2ZmQ7XG4gICAgICBjb2xvcjogdmFyKC0tdGhlbWUtc2t5KTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiYWU2ZmQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzdkZDNmYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLXN1bW1pdC1jZXJ0IHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkOThmMmIgMCUsICM5MjQwMGUgMTAwJSk7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgyMTcsIDE0MywgNDMsIDAuMjUpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMThweCByZ2JhKDIxNywgMTQzLCA0MywgMC4zOCk7XG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjA2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLXJhdGluZyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgICAgIGNvbG9yOiAjMzM0MTU1O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjOTRhM2I4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG4tY2FuY2VsLXRyaXAge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmVjYWNhO1xuICAgICAgY29sb3I6IHZhcigtLXRoZW1lLWRhbmdlcik7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWRhbmdlci1saWdodCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZjYTVhNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBTVEFUVVMgQ0hJUCBIRUxQRVJTXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5iYWRnZS1jb25maXJtZWQge1xuICBiYWNrZ3JvdW5kOiAjZGNmY2U3ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4NmVmYWMgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxNTgwM2QgIWltcG9ydGFudDtcbn1cblxuLmJhZGdlLWNvbXBsZXRlZCB7XG4gIGJhY2tncm91bmQ6ICNlMGYyZmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdkZDNmYyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAzNjlhMSAhaW1wb3J0YW50O1xufVxuXG4uYmFkZ2UtY2FuY2VsbGVkIHtcbiAgYmFja2dyb3VuZDogI2ZlZTJlMiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmNhNWE1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYjkxYzFjICFpbXBvcnRhbnQ7XG59XG5cbi5iYWRnZS1wZW5kaW5nIHtcbiAgYmFja2dyb3VuZDogI2ZlZjNjNyAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmRlMDQ3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYTE2MjA3ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWRnZS1wYWlkIHtcbiAgYmFja2dyb3VuZDogI2RjZmNlNyAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODZlZmFjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTU4MDNkICFpbXBvcnRhbnQ7XG59XG5cbi5iYWRnZS1wYXJ0aWFsIHtcbiAgYmFja2dyb3VuZDogI2ZlZjNjNyAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmNkMzRkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYjQ1MzA5ICFpbXBvcnRhbnQ7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gRU1QVFkgU1RBVEVcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmVtcHR5LWV4cGVkaXRpb24tc3RhdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tdGhlbWUtYm9yZGVyLXN0cm9uZyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XG4gIHBhZGRpbmc6IDY0cHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWNhcmQpO1xuXG4gIC5lbXB0eS1jb21wYXNzLWdseXBoIHtcbiAgICBmb250LXNpemU6IDMuOHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGFuaW1hdGlvbjogZmxvYXRBbmltIDRzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLmVtcHR5LXRpdGxlIHtcbiAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkaW5nKTtcbiAgfVxuXG4gIC5lbXB0eS1zdWJ0aXRsZSB7XG4gICAgbWFyZ2luOiAwIDAgMjhweDtcbiAgICBmb250LXNpemU6IDAuOTRyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIG1heC13aWR0aDogNDgwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgfVxuXG4gIC5lbXB0eS1jdGEtd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE0cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLmJ0bi1leHBsb3JlLXRyZWtzIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXRoZW1lLWZvcmVzdCkgMCUsIHZhcigtLXRoZW1lLWZvcmVzdC1kYXJrKSAxMDAlKTtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMzEsIDEwNywgODcsIDAuMjUpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDMxLCAxMDcsIDg3LCAwLjM1KTtcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG4tZmFxLWxpbmsge1xuICAgICAgYmFja2dyb3VuZDogI2Y1ZWZlMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZmQ1YzI7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkaW5nKTtcbiAgICAgIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIExPQURJTkcgU0tFTEVUT05cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnNrZWxldG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcblxuICAuc2tlbC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5za2VsLXRodW1iIHtcbiAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICNlZWU4ZGM7XG4gICAgfVxuXG4gICAgLnNrZWwtYm9keSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxNHB4O1xuICAgIH1cblxuICAgIC5za2VsLWxpbmUge1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgYmFja2dyb3VuZDogI2VlZThkYztcblxuICAgICAgJi53LTQwIHsgd2lkdGg6IDQwJTsgfVxuICAgICAgJi53LTcwIHsgd2lkdGg6IDcwJTsgfVxuICAgICAgJi53LTkwIHsgd2lkdGg6IDkwJTsgfVxuICAgIH1cbiAgfVxuXG4gIC5zaGltbWVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaW5zZXQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIHRyYW5zcGFyZW50KTtcbiAgICAgIGFuaW1hdGlvbjogc2hpbW1lckFuaW0gMS41cyBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBFUlJPUiBTVEFURVxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uc3RhdGUtY2FyZC5lcnJvci1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtZGFuZ2VyLWxpZ2h0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZlY2FjYTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgcGFkZGluZzogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG5cbiAgLnN0YXRlLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtZGFuZ2VyKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ib2R5KTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuXG4gIC5idG4tcmV0cnkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLWRhbmdlcik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gTU9EQUwgU1lTVEVNIChUUkVLIFBBU1MsIENBUlBPT0wsIElOVk9JQ0UsIENFUlRJRklDQVRFLCBSQVRJTkcsIFJFTUFJTkRFUilcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnJhdGluZy1iYWNrZHJvcCxcbi5tb2RhbC1iYWNrZHJvcC1jdXN0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAzMCwgMjUsIDAuNjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5yYXRpbmctbW9kYWwsXG4udHJlay1wYXNzLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogMTAwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucmF0aW5nLWNhcmQsXG4udHJlay1wYXNzLWNhcmQsXG4ucGFzcy1tb2RhbC1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6IHZhcigtLXRleHQtYm9keSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tb2RhbCk7XG4gIHdpZHRoOiBtaW4oNjQwcHgsIGNhbGMoMTAwdncgLSAyMHB4KSk7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbmltYXRpb246IG1vZGFsUG9wIDAuMjVzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gICAgbWF4LWhlaWdodDogODh2aDtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIFJBVElORyBNT0RBTFxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ucmF0aW5nLWNhcmQge1xuICBwYWRkaW5nOiAyOHB4O1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuXG4gIGgzIHtcbiAgICBtYXJnaW46IDAgMCA2cHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkaW5nKTtcbiAgfVxuXG4gIC5yYXRpbmctc3VidGl0bGUge1xuICAgIG1hcmdpbjogMCAwIDE4cHg7XG4gICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgfVxuXG4gIC5zdGFycy1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgICAuc3Rhci1idG4ge1xuICAgICAgd2lkdGg6IDQ2cHg7XG4gICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gICAgICBjb2xvcjogI2NiZDVlMTtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjZjU5ZTBiO1xuICAgICAgICBib3JkZXItY29sb3I6ICNmY2QzNGQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZWYzYzc7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnJldmlldy1pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgY29sb3I6IHZhcigtLXRleHQtaGVhZGluZyk7XG4gICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIHBhZGRpbmc6IDEycHggMTRweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLWZvcmVzdCk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgzMSwgMTA3LCA4NywgMC4xNSk7XG4gICAgfVxuICB9XG5cbiAgLnJhdGluZy1lcnJvciB7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWRhbmdlcik7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5yYXRpbmctYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogMTBweDtcblxuICAgIC5hY3Rpb24tYnRuIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMThweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgICBmb250LXNpemU6IDAuODRyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gICAgICBjb2xvcjogIzMzNDE1NTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgIH1cblxuICAgICAgJi5wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tdGhlbWUtZm9yZXN0KSAwJSwgdmFyKC0tdGhlbWUtZm9yZXN0LWRhcmspIDEwMCUpO1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDMxLCAxMDcsIDg3LCAwLjI1KTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wNik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyBESUdJVEFMIFRSRUsgUEFTUyBNT0RBTFxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udHJlay1wYXNzLW1vZGFsIC50cmVrLXBhc3MtY2FyZCxcbi5wYXNzLW1vZGFsLWNhcmQge1xuICAucGFzcy1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxODRmNDEgMCUsICMxMDNhMzAgMTAwJSk7XG4gICAgcGFkZGluZzogMjBweCAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAucGFzcy1icmFuZCB7XG4gICAgICAucGFzcy1vcmcge1xuICAgICAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICNhN2YzZDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB9XG5cbiAgICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMnB4O1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgfVxuXG4gICAgICAucGFzcy1yZWYge1xuICAgICAgICBmb250LXNpemU6IDAuNzRyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBtb25vc3BhY2U7XG4gICAgICAgIGNvbG9yOiAjZDFmYWU1O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jbG9zZS1wYXNzLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wYXNzLWJvZHkge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMThweDtcblxuICAgIC5wYXNzLXFyLXNlY3Rpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1zdXJmYWNlLXN1YnRsZSk7XG4gICAgICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tdGhlbWUtYm9yZGVyLXN0cm9uZyk7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAucXItYm94IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC5xci1pbWcge1xuICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5xci1oaW50IHtcbiAgICAgICAgICBmb250LXNpemU6IDAuNjhyZW07XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wYXNzLWNsZWFyYW5jZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogOHB4O1xuXG4gICAgICAgIC5jbGVhcmFuY2UtcGlsbCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTRweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmVmM2M3O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmY2QzNGQ7XG4gICAgICAgICAgY29sb3I6ICNiNDUzMDk7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgICAgICAgJi52ZXJpZmllZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGNmY2U3O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjODZlZmFjO1xuICAgICAgICAgICAgY29sb3I6ICMxNTgwM2Q7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNlY3VyaXR5LWNvZGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBtb25vc3BhY2U7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRpbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGFzcy1pbmZvLWdyaWQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICBnYXA6IDEycHg7XG5cbiAgICAgIC5wYXNzLWZpZWxkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtc3VyZmFjZS1zdWJ0bGUpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS1ib3JkZXIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogM3B4O1xuXG4gICAgICAgIC5wLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnAtdmFsIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuODhyZW07XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtaGVhZGluZyk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oaWdobGlnaHQtcXR5IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWUtZm9yZXN0KTtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJPU1RFUiBUQUJMRVxuICAgIC5wYXNzLXJvc3RlciB7XG4gICAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lLWZvcmVzdCk7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICB9XG5cbiAgICAgIC5yb3N0ZXItdGFibGUtd3JhcCB7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWJvcmRlcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG5cbiAgICAgICAgLnJvc3Rlci10YWJsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgICAgICAgbWluLXdpZHRoOiA0ODBweDtcblxuICAgICAgICAgIHRoLCB0ZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLXN1cmZhY2Utc3VidGxlKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjY4cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJvZHkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ibG9vZC1waWxsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZWUyZTI7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmNhNWE1O1xuICAgICAgICAgICAgY29sb3I6ICNiOTFjMWM7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggN3B4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVkLXBpbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgICAgICAgICAgY29sb3I6ICMxNTgwM2Q7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuXG4gICAgICAgICAgICAmLndhcm4ge1xuICAgICAgICAgICAgICBjb2xvcjogI2I5MWMxYztcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGFzcy1ndWlkZWxpbmVzIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmMGZkZjQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJmN2QwO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICAgIGNvbG9yOiAjMTY2NTM0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDZweDtcblxuICAgICAgLmd1aWRlLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucGFzcy1mb290ZXIge1xuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1zdXJmYWNlLXN1YnRsZSk7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWJvcmRlcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogMTJweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuXG4gICAgICAuYnRuLXByaW50LXBhc3MsXG4gICAgICAuYnRuLWNsb3NlLXBhc3Mge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogNDRweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG4tcHJpbnQtcGFzcyB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS10aGVtZS1mb3Jlc3QpIDAlLCB2YXIoLS10aGVtZS1mb3Jlc3QtZGFyaykgMTAwJSk7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAwLjg0cmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wNik7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLWNsb3NlLXBhc3Mge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gICAgICBjb2xvcjogIzMzNDE1NTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMThweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAwLjg0cmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIFRBWCBJTlZPSUNFIE1PREFMXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5pbnZvaWNlLWRldGFpbC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLmludm9pY2UtZGV0YWlsLWhlYWRpbmcge1xuICBjb2xvcjogdmFyKC0tdGhlbWUtZm9yZXN0KTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmludm9pY2UtZGV0YWlsLWNvbCBkaXYge1xuICBjb2xvcjogdmFyKC0tdGV4dC1ib2R5KTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmludm9pY2UtdGFibGUtd3JhcCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmludm9pY2UtbGluZS10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBmb250LXNpemU6IDAuODJyZW07XG5cbiAgICB0aCwgdGQge1xuICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xuICAgIH1cblxuICAgIHRoIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLXN1cmZhY2Utc3VidGxlKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgfVxuXG4gICAgdGQubnVtLCB0aC5udW0ge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgdHIuc3VidG90YWwtcm93IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmYWZhZjk7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgIH1cblxuICAgIHRyLnRheC1yb3cgdGQge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIH1cblxuICAgIHRyLnRvdGFsLXJvdyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmZGY0O1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGNvbG9yOiAjMTU4MDNkO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIFNVTU1JVCBDRVJUSUZJQ0FURSBNT0RBTFxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uY2VydC1tb2RhbC1jYXJkIHtcbiAgYm9yZGVyOiAzcHggc29saWQgI2Y1OWUwYiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgI2ZmZmRmYSAwJSwgI2ZiZjhmMCAxMDAlKSAhaW1wb3J0YW50O1xuXG4gIC5jZXJ0LWhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCAxMHB4O1xuXG4gICAgLmNlcnQtaWNvbnMge1xuICAgICAgZm9udC1zaXplOiAyLjZyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgLmNlcnQtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgY29sb3I6ICM3ODM1MGY7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgIH1cblxuICAgIC5jZXJ0LXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NnJlbTtcbiAgICAgIGNvbG9yOiAjOTI0MDBlO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxuICB9XG5cbiAgLmNlcnQtYm9keSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggMzBweCAyOHB4O1xuXG4gICAgLmNlcnQtcHJlc2VudGVkLXRvIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5jZXJ0LXJlY2lwaWVudC1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y1OWUwYjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gICAgfVxuXG4gICAgLmNlcnQtZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAwLjk0cmVtO1xuICAgICAgY29sb3I6ICMzMzQxNTU7XG4gICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcblxuICAgICAgLmNlcnQtdHJlay1uYW1lIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lLWZvcmVzdCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2VydC1tZXRhLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBnYXA6IDE2cHg7XG4gICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICNlMmU4ZjA7XG5cbiAgICAgIC5jZXJ0LW1ldGEtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDAuNjhyZW07XG4gICAgICAgIGNvbG9yOiAjOTI0MDBlO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgfVxuXG4gICAgICAuY2VydC1tZXRhLXZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYnRuLXNoYXJlLWNlcnQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkOThmMmIgMCUsICNiNDUzMDkgMTAwJSkgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIFJFTUFJTkRFUiA3MCUgTU9EQUxcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnJlbWFpbmRlci1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZDk4ZjJiIDAlLCAjYjQ1MzA5IDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbi5yZW1haW5kZXItc3VtbWFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLXN1cmZhY2Utc3VidGxlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtYm9yZGVyKTtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAucmVtYWluZGVyLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ib2R5KTtcblxuICAgIHN0cm9uZyB7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1oZWFkaW5nKTtcbiAgICB9XG5cbiAgICAmLnJlbWFpbmRlci1yb3ctcGFpZCB7XG4gICAgICBjb2xvcjogIzE1ODAzZDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuXG4gICAgJi5yZW1haW5kZXItcm93LXRvdGFsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tdGhlbWUtYm9yZGVyKTtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBjb2xvcjogI2I0NTMwOTtcbiAgICB9XG4gIH1cbn1cblxuLnJlbWFpbmRlci1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogI2YwZmRmNDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg2ZWZhYztcbiAgY29sb3I6ICMxNTgwM2Q7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5idG4tcGF5LXJlbWFpbmRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXRoZW1lLWFtYmVyKSAwJSwgI2I0NTMwOSAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIEJBU0VDQU1QIENBUlBPT0wgSFVCIE1PREFMXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5jYXJwb29sLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMjg0YzcgMCUsICMwMzY5YTEgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLmNhcnBvb2wtZmlsdGVyLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgLmZpbHRlci1waWxsIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgcGFkZGluZzogNnB4IDE0cHg7XG4gICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICM0NzU1Njk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogIzAyODRjNztcbiAgICAgIGJvcmRlci1jb2xvcjogIzAyODRjNztcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDIsIDEzMiwgMTk5LCAwLjI1KTtcbiAgICB9XG4gIH1cbn1cblxuLmNhcnBvb2wtc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMC45NHJlbTtcbiAgY29sb3I6ICMwMzY5YTE7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5jYXJwb29sLWxvYWRpbmcsXG4uY2FycG9vbC1lbXB0eSB7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1zdXJmYWNlLXN1YnRsZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLXRoZW1lLWJvcmRlci1zdHJvbmcpO1xufVxuXG4uY2FycG9vbC1yaWRlLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBmMmZlO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDIsIDEzMiwgMTk5LCAwLjA2KTtcblxuICAuY2FycG9vbC1yaWRlLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWhlYWRpbmcpO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgfVxuXG4gIC5jYXJwb29sLXJpZGUtbWV0YSB7XG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJvZHkpO1xuICAgIG1hcmdpbi10b3A6IDNweDtcblxuICAgIHN0cm9uZyB7XG4gICAgICBjb2xvcjogIzAyODRjNztcbiAgICB9XG4gIH1cblxuICAuY2FycG9vbC1yaWRlLW93bmVyIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuXG4gICAgc3Ryb25nIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWhlYWRpbmcpO1xuICAgIH1cblxuICAgIC5zZWF0LWJhZGdlIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGYyZmU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmFlNmZkO1xuICAgICAgY29sb3I6ICMwMzY5YTE7XG4gICAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgIH1cblxuICAgIC5wcmljZS10ZXh0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1mb3Jlc3QpO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB9XG4gIH1cblxuICAuY2FycG9vbC1ub3RlcyB7XG4gICAgZm9udC1zaXplOiAwLjc2cmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG5cbiAgLmNhcnBvb2wtd2hhdHNhcHAtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjVkMzY2O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAwLjg0cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA2cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDM3LCAyMTEsIDEwMiwgMC4yNSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMxZWI5NTY7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgfVxuICB9XG59XG5cbi5jYXJwb29sLXBvc3QtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLXN1cmZhY2Utc3VidGxlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcblxuICAuY2FycG9vbC1mb3JtLWhlYWRpbmcge1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAwLjkycmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWhlYWRpbmcpO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH1cblxuICAuY2FycG9vbC1mb3JtLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIC5jYXJwb29sLWZvcm0tZmllbGQge1xuICAgIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC1zaXplOiAwLjc2cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDlweCAxMnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtaGVhZGluZyk7XG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NHJlbTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAyODRjNztcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMiwgMTMyLCAxOTksIDAuMTUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5xdWljay1sb2NhdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA2cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi10b3A6IDhweDtcblxuICAgIC5xdWljay1sb2MtcGlsbCB7XG4gICAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogIzMzNDE1NTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMjg0Yzc7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICMwMjg0Yzc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhcnBvb2wtc3VjY2Vzcy1iYW5uZXIge1xuICAgIGJhY2tncm91bmQ6ICNkY2ZjZTc7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg2ZWZhYztcbiAgICBjb2xvcjogIzE1ODAzZDtcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBhbmltYXRpb246IG1vZGFsUG9wIDAuMnMgZWFzZS1vdXQ7XG4gIH1cblxuICAuY2FycG9vbC1lcnJvci1iYW5uZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZWUyZTI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZjYTVhNTtcbiAgICBjb2xvcjogI2I5MWMxYztcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5cbiAgLmNhcnBvb2wtcHVibGlzaC1idG4ge1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAyODRjNyAwJSwgIzAzNjlhMSAxMDAlKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAxMXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDYpO1xuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIEFOSU1BVElPTlNcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuQGtleWZyYW1lcyBwdWxzZUFuaW0ge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IDE7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjMpOyBvcGFjaXR5OiAwLjU7IH1cbn1cblxuQGtleWZyYW1lcyBmbG9hdEFuaW0ge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7IH1cbn1cblxuQGtleWZyYW1lcyBtb2RhbFBvcCB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNoaW1tZXJBbmltIHtcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIFJFU1BPTlNJVkUgREVTSUdOXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDQwcHgpIHtcbiAgLmV4cGVkaXRpb24tdGlja2V0LWNhcmQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjgwcHggMWZyO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuZXhwZWRpdGlvbi10aWNrZXQtY2FyZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcblxuICAgIC50aWNrZXQtdmlzdWFsIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG4gIH1cblxuICAuaGVyby1leHBlZGl0aW9uLWJhbm5lciAuaGVyby1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvLWV4cGVkaXRpb24tYmFubmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDE2cHggMTJweDtcbiAgfVxuXG4gIC5oZXJvLWV4cGVkaXRpb24tYmFubmVyIC5oZXJvLW1ldHJpY3Mge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICAuZGFzaGJvYXJkLW1haW4tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHggNDhweDtcbiAgfVxuXG4gIC50aWNrZXQtYWN0aW9uLXRvb2xiYXIge1xuICAgIGdhcDogOHB4O1xuXG4gICAgLmFjdC1idG4ge1xuICAgICAgbWluLWhlaWdodDogNDRweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC50b3AtbmF2LWJhciAubmF2LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweCAxNHB4O1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4gIC5oZXJvLWV4cGVkaXRpb24tYmFubmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4IDEycHggMTBweDtcbiAgfVxuXG4gIC5oZXJvLWV4cGVkaXRpb24tYmFubmVyIC5oZXJvLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDE4cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuXG4gICAgLmhlcm8taGVhZGluZyB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKDEuMzVyZW0sIDV2dywgMS44cmVtKTtcbiAgICB9XG5cbiAgICAuaGVyby1zdWJ0ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cbiAgfVxuXG4gIC5kYXNoYm9hcmQtbWFpbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEycHggMTJweCA0OHB4O1xuICB9XG5cbiAgLnRyZWstaGVhZGxpbmUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgLnByaWNlLXN1bW1hcnktYmFkZ2Uge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICB9XG4gIH1cblxuICAuaXRpbmVyYXJ5LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG5cbiAgICAuaXRpbmVyYXJ5LWNlbGwgLmNlbGwtbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAwLjY0cmVtO1xuICAgIH1cblxuICAgIC5pdGluZXJhcnktY2VsbCAuY2VsbC12YWwge1xuICAgICAgZm9udC1zaXplOiAwLjgycmVtO1xuICAgIH1cbiAgfVxuXG4gIC5wYXNzLWluZm8tZ3JpZCxcbiAgLmludm9pY2UtZGV0YWlsLWdyaWQsXG4gIC5jYXJwb29sLWZvcm0tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC50aWNrZXQtYWN0aW9uLXRvb2xiYXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xuICAgIGdhcDogOHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAuYWN0LWJ0biB7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgIG1pbi1oZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLmV4cGVkaXRpb24tcGFnaW5hdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTRweDtcblxuICAgIC5wYWdpbmF0aW9uLWNvbnRyb2xzIHtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5jYXJwb29sLXJpZGUtY2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBnYXA6IDEycHg7XG5cbiAgICAuY2FycG9vbC13aGF0c2FwcC1idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAudG9wLW5hdi1iYXIge1xuICAgIC5uYXYtYnJhbmQgLmJyYW5kLXN1YiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5uYXYtYnJhbmQgLmJyYW5kLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICB9XG5cbiAgICAubmF2LWJhY2stYnRuIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgIH1cblxuICAgIC5idG4tYnJvd3NlLW5ldyB7XG4gICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcblxuICAgICAgLmJ0bi10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaGVyby1leHBlZGl0aW9uLWJhbm5lciAuaGVyby1tZXRyaWNzIHtcbiAgICBnYXA6IDhweDtcblxuICAgIC5tZXRyaWMtY2FyZCB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDhweDtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgICAgLm1ldHJpYy1pY29uIHtcbiAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5tZXRyaWMtZGF0YSAubWV0cmljLXZhbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgICAgIH1cblxuICAgICAgLm1ldHJpYy1kYXRhIC5tZXRyaWMtbGJsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjYycmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5pdGluZXJhcnktZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4gICBQQUdJTkFUSU9OIENPTlRST0xTXG7DosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5leHBlZGl0aW9uLXBhZ2luYXRpb24ge1xuICBtYXJnaW46IDMycHggMCAxNnB4O1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLWJvcmRlciwgI2UyZThmMCk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcblxuICAucGFnaW5hdGlvbi1pbmZvIHtcbiAgICBmb250LXNpemU6IDAuODhyZW07XG4gICAgY29sb3I6ICM0NzU1Njk7XG5cbiAgICBzdHJvbmcge1xuICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbiAgfVxuXG4gIC5wYWdpbmF0aW9uLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAucGctYnRuIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxNHB4O1xuICAgICAgZm9udC1zaXplOiAwLjg0cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgY29sb3I6ICMxZTI5M2I7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjOTRhM2I4O1xuICAgICAgfVxuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC40NTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGctbnVtYmVycyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNHB4O1xuICAgIH1cblxuICAgIC5wZy1udW0tYnRuIHtcbiAgICAgIG1pbi13aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgZm9udC1zaXplOiAwLjg0cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgICAgIGNvbG9yOiAjMzM0MTU1O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2UyZThmMDtcbiAgICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtZm9yZXN0LCAjMTBiOTgxKTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtZm9yZXN0LCAjMTBiOTgxKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjM1KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4gICBJTi1VSSBUT0FTVCBCQU5ORVIgKE5PIEJST1dTRVIgUE9QVVBTKVxuw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uYm9va2luZy10b2FzdC13cmFwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDI0cHg7XG4gIHJpZ2h0OiAyNHB4O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgYW5pbWF0aW9uOiB0b2FzdFNsaWRlRG93biAwLjNzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpIGZvcndhcmRzO1xuXG4gIC5ib29raW5nLXRvYXN0LWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4NmVmYWM7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICB9XG5cbiAgICAudG9hc3QtbWVzc2FnZSB7XG4gICAgICBmb250LXNpemU6IDAuODhyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAudG9hc3QtY2xvc2UtYnRuIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYudG9hc3QtZXJyb3IgLmJvb2tpbmctdG9hc3QtYm94IHtcbiAgICBib3JkZXItY29sb3I6ICNmY2E1YTU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB0b2FzdFNsaWRlRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KSBzY2FsZSgwLjk2KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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