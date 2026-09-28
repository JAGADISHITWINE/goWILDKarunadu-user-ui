"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_booking_booking-module_ts"],{

/***/ 1157
/*!*******************************************!*\
  !*** ./src/app/booking/booking-module.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingModule: () => (/* binding */ BookingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _booking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking.component */ 2568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: ':id',
  component: _booking_component__WEBPACK_IMPORTED_MODULE_3__.BookingComponent
}];
class BookingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function BookingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BookingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: BookingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _booking_component__WEBPACK_IMPORTED_MODULE_3__.BookingComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BookingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _booking_component__WEBPACK_IMPORTED_MODULE_3__.BookingComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ },

/***/ 2568
/*!**********************************************!*\
  !*** ./src/app/booking/booking.component.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingComponent: () => (/* binding */ BookingComponent)
/* harmony export */ });
/* harmony import */ var _var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _shared_Only_number_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Only number.directive */ 690);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _booking__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./booking */ 1641);
/* harmony import */ var _tour_details_tour_details__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tour-details/tour-details */ 9497);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/auth */ 2964);
/* harmony import */ var _auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../auth/auth-modal.service */ 2454);
/* harmony import */ var src_app_core_token_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/token.service */ 6280);
/* harmony import */ var _auth_sessionexpired_sessionexpired__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../auth/sessionexpired/sessionexpired */ 5762);
/* harmony import */ var _core_dropdown_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/dropdown.service */ 4222);
/* harmony import */ var _core_public_route_id_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/public-route-id.service */ 2440);
/* harmony import */ var _core_media_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/media.service */ 6657);
/* harmony import */ var _core_trek_operations_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/trek-operations.service */ 3046);
/* harmony import */ var _core_site_settings_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/site-settings.service */ 1662);

var _staticBlock;






















const _c0 = a0 => ["/trek-details", a0];
function BookingComponent_aside_1_i_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 36);
  }
}
function BookingComponent_aside_1_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_aside_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 3, ctx_r0.selectedBatch.startDate, "MMM dd"), " \u00B7 ", ctx_r0.booking.participants, " participant", ctx_r0.booking.participants !== 1 ? "s" : "", " ");
  }
}
function BookingComponent_aside_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Choose departure date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_aside_1_i_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 36);
  }
}
function BookingComponent_aside_1_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_aside_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.booking.name);
  }
}
function BookingComponent_aside_1_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Primary contact details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_aside_1_i_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 36);
  }
}
function BookingComponent_aside_1_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_aside_1_div_51_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const addon_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", addon_r2.name, " \u00D7 ", addon_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 3, addon_r2.price * addon_r2.quantity, "1.0-0"));
  }
}
function BookingComponent_aside_1_div_51_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, BookingComponent_aside_1_div_51_ng_container_7_div_1_Template, 6, 6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const addon_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", addon_r2.quantity > 0);
  }
}
function BookingComponent_aside_1_div_51_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Coupon Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u2212\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 1, ctx_r0.couponDiscountAmount, "1.0-0"));
  }
}
function BookingComponent_aside_1_div_51_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Referral Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u2212\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 1, ctx_r0.referralDiscountAmount, "1.0-0"));
  }
}
function BookingComponent_aside_1_div_51_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Free Slot Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u2212\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 1, ctx_r0.referralRewardDiscountAmount, "1.0-0"));
  }
}
function BookingComponent_aside_1_div_51_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 47)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Payable Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 1, ctx_r0.payablePrice, "1.0-0"));
  }
}
function BookingComponent_aside_1_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, BookingComponent_aside_1_div_51_ng_container_7_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 42)(9, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, BookingComponent_aside_1_div_51_div_14_Template, 6, 4, "div", 43)(15, BookingComponent_aside_1_div_51_div_15_Template, 6, 4, "div", 43)(16, BookingComponent_aside_1_div_51_div_16_Template, 6, 4, "div", 43)(17, BookingComponent_aside_1_div_51_div_17_Template, 6, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("Trek (", ctx_r0.booking.participants, " \u00D7 \u20B9", ctx_r0.selectedBatch.price, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](6, 9, ctx_r0.basePrice, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.addOns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](13, 12, ctx_r0.totalPrice, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.couponDiscountAmount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.referralDiscountAmount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.referralRewardDiscountAmount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.couponDiscountAmount || ctx_r0.referralDiscountAmount || ctx_r0.referralRewardDiscountAmount);
  }
}
function BookingComponent_aside_1_div_52_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Loading referral details\u2026 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_aside_1_div_52_div_10_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 57)(1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Savings Earned");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 1, ctx_r0.referralSummary.totalDiscountEarned, "1.0-0"), " ");
  }
}
function BookingComponent_aside_1_div_52_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Your Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 57)(8, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Friends Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 57)(13, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Free Slots");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, BookingComponent_aside_1_div_52_div_10_div_17_Template, 6, 4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.referralSummary.referralCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.referralSummary.successfulReferrals || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.referralSummary.freeSlotsAvailable || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.referralSummary.totalDiscountEarned);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" Invite ", ctx_r0.referralSummary.freeSlotThreshold || 5, " friends to unlock a free trek slot (worth \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](20, 6, ctx_r0.selectedBatch == null ? null : ctx_r0.selectedBatch.price, "1.0-0"), "). ");
  }
}
function BookingComponent_aside_1_div_52_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_aside_1_div_52_div_11_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.loadReferralSummary(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Retry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.referralSummaryError, " ");
  }
}
function BookingComponent_aside_1_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "div")(3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Referral Rewards");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Share & save more");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_aside_1_div_52_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.copyReferralCode(ctx_r0.referralSummary == null ? null : ctx_r0.referralSummary.referralCode));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Copy Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, BookingComponent_aside_1_div_52_div_9_Template, 2, 0, "div", 53)(10, BookingComponent_aside_1_div_52_div_10_Template, 21, 9, "div", 53)(11, BookingComponent_aside_1_div_52_div_11_Template, 4, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !(ctx_r0.referralSummary == null ? null : ctx_r0.referralSummary.referralCode));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isReferralSummaryLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isReferralSummaryLoading && ctx_r0.referralSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isReferralSummaryLoading && !ctx_r0.referralSummary && ctx_r0.referralSummaryError);
  }
}
function BookingComponent_aside_1_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 64)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Referral Rewards");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Log in to access your referral code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function BookingComponent_aside_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "aside", 16)(1, "div", 17)(2, "div", 18)(3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "\u2190 Trek Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 21)(7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "You're booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 27)(16, "div", 28)(17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, BookingComponent_aside_1_i_18_Template, 1, 0, "i", 11)(19, BookingComponent_aside_1_span_19_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 30)(21, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Batch & Dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, BookingComponent_aside_1_div_23_Template, 3, 6, "div", 32)(24, BookingComponent_aside_1_div_24_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 28)(26, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, BookingComponent_aside_1_i_27_Template, 1, 0, "i", 11)(28, BookingComponent_aside_1_span_28_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 30)(30, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, BookingComponent_aside_1_div_32_Template, 2, 1, "div", 32)(33, BookingComponent_aside_1_div_33_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 28)(35, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, BookingComponent_aside_1_i_36_Template, 1, 0, "i", 11)(37, BookingComponent_aside_1_span_37_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 30)(39, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Details for all trekkers");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 28)(44, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 30)(47, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Review & Pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Confirm your booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, BookingComponent_aside_1_div_51_Template, 18, 15, "div", 34)(52, BookingComponent_aside_1_div_52_Template, 12, 4, "div", 35)(53, BookingComponent_aside_1_ng_template_53_Template, 5, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const referralLoginPrompt_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](54);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](32, _c0, ctx_r0.tourDetailsRouteRef));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r0.resolveImageUrl(ctx_r0.trek.cover_image), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", ctx_r0.trek.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.trek.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.trek.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("completed", ctx_r0.currentStep > 1)("active", ctx_r0.currentStep === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.currentStep > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.currentStep <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.selectedBatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.selectedBatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("completed", ctx_r0.currentStep > 2)("active", ctx_r0.currentStep === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.currentStep > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.currentStep <= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.currentStep > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.currentStep <= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("completed", ctx_r0.currentStep > 3)("active", ctx_r0.currentStep === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.currentStep > 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.currentStep <= 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.currentStep === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.selectedBatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isUserLoggedIn)("ngIfElse", referralLoginPrompt_r5);
  }
}
function BookingComponent_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 36);
  }
}
function BookingComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_i_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 36);
  }
}
function BookingComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_i_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 36);
  }
}
function BookingComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Loading trek details\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function BookingComponent_div_30_ng_container_1_label_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 101);
  }
}
function BookingComponent_div_30_ng_container_1_label_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 92)(1, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_1_label_14_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.booking.batchId, $event) || (ctx_r0.booking.batchId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function BookingComponent_div_30_ng_container_1_label_14_Template_input_change_1_listener() {
      const batch_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onBatchSelect(batch_r7.batchId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, BookingComponent_div_30_ng_container_1_label_14_div_3_Template, 1, 0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 96)(5, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const batch_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("selected", ctx_r0.booking.batchId == batch_r7.batchId)("disabled", batch_r7.status !== "active" || batch_r7.availableSlots === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", batch_r7.batchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.booking.batchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", batch_r7.status !== "active" || batch_r7.availableSlots === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.booking.batchId == batch_r7.batchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 20, batch_r7.startDate, "MMM dd"), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](8, 23, batch_r7.endDate, "MMM dd, yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", batch_r7.duration, " \u00B7 ", batch_r7.availableSlots, " slots remaining ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", batch_r7.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("status-ok", batch_r7.availableSlots > 5)("status-few", batch_r7.availableSlots > 0 && batch_r7.availableSlots <= 5)("status-full", batch_r7.availableSlots === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", batch_r7.availableSlots === 0 ? "Full" : batch_r7.availableSlots <= 5 ? "Few Left" : "Open", " ");
  }
}
function BookingComponent_div_30_ng_container_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 102)(1, "div", 103)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Participants ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 104)(7, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_30_ng_container_1_div_15_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.decrementParticipants());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " \u2212 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_30_ng_container_1_div_15_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.incrementParticipants());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 103)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Price per Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.booking.participants);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Max ", ctx_r0.selectedBatch.availableSlots, " available in this batch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "\u20B9" + ctx_r0.selectedBatch.price);
  }
}
function BookingComponent_div_30_ng_container_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Add-ons (Optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_30_ng_container_1_label_18_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const addon_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](addon_r10.category);
  }
}
function BookingComponent_div_30_ng_container_1_label_18_i_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 36);
  }
}
function BookingComponent_div_30_ng_container_1_label_18_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const count_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngValue", count_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", count_r11 === 0 ? "None" : count_r11 + " participant" + (count_r11 > 1 ? "s" : ""), " ");
  }
}
function BookingComponent_div_30_ng_container_1_label_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 110)(1, "div", 111)(2, "div", 112)(3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, BookingComponent_div_30_ng_container_1_label_18_div_5_Template, 2, 1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, BookingComponent_div_30_ng_container_1_label_18_i_7_Template, 1, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 117)(11, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "select", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function BookingComponent_div_30_ng_container_1_label_18_Template_select_ngModelChange_13_listener($event) {
      const addon_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onAddonQuantityChange(addon_r10, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, BookingComponent_div_30_ng_container_1_label_18_option_14_Template, 2, 2, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const addon_r10 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("checked", addon_r10.quantity > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](addon_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", addon_r10.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", addon_r10.quantity > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", addon_r10.price, " / person");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", addon_r10.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.participantCountOptions);
  }
}
function BookingComponent_div_30_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 79)(2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Step 1 of 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h1", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Select Your Batch");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Choose a departure date and set your group size. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 83)(9, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Available Batches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, BookingComponent_div_30_ng_container_1_label_14_Template, 15, 26, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, BookingComponent_div_30_ng_container_1_div_15_Template, 19, 3, "div", 88)(16, BookingComponent_div_30_ng_container_1_div_16_Template, 2, 0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, BookingComponent_div_30_ng_container_1_label_18_Template, 15, 8, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.batches);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.selectedBatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.addOns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.addOns);
  }
}
function BookingComponent_div_30_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 79)(2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Step 2 of 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h1", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Contact Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " This person will be the main point of contact for the booking. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 102)(9, "div", 103)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_2_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.booking.name, $event) || (ctx_r0.booking.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 103)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_2_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.booking.email, $event) || (ctx_r0.booking.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 102)(22, "div", 103)(23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_2_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.booking.phone, $event) || (ctx_r0.booking.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 103)(29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Emergency Contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_2_Template_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.booking.emergencyContact, $event) || (ctx_r0.booking.emergencyContact = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 127)(35, "div", 103)(36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Special Requests / Medical Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "textarea", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_2_Template_textarea_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.booking.specialRequests, $event) || (ctx_r0.booking.specialRequests = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.booking.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.booking.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.booking.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.booking.emergencyContact);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.booking.specialRequests);
  }
}
function BookingComponent_div_30_ng_container_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Please fill all required fields for every participant before continuing. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_30_ng_container_3_div_9_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Primary Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_30_ng_container_3_div_9_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Auto-filled from contact info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_30_ng_container_3_div_9_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const participant_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", participant_r14.ageError, " ");
  }
}
function BookingComponent_div_30_ng_container_3_div_9_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r15.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", option_r15.label, " ");
  }
}
function BookingComponent_div_30_ng_container_3_div_9_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r16.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", option_r16.label, " ");
  }
}
function BookingComponent_div_30_ng_container_3_div_9_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const participant_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", participant_r14.idError, " ");
  }
}
function BookingComponent_div_30_ng_container_3_div_9_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Auto-filled from contact info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_30_ng_container_3_div_9_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const participant_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", participant_r14.phoneError, " ");
  }
}
function BookingComponent_div_30_ng_container_3_div_9_option_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r19.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", option_r19.label, " ");
  }
}
function BookingComponent_div_30_ng_container_3_div_9_option_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r20.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", option_r20.label, " ");
  }
}
function BookingComponent_div_30_ng_container_3_div_9_option_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r21.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", option_r21.label, " ");
  }
}
function BookingComponent_div_30_ng_container_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 133)(1, "div", 134)(2, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, BookingComponent_div_30_ng_container_3_div_9_span_6_Template, 2, 0, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 138)(8, "div", 103)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "input", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_3_div_9_Template_input_ngModelChange_13_listener($event) {
      const participant_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](participant_r14.name, $event) || (participant_r14.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, BookingComponent_div_30_ng_container_3_div_9_div_14_Template, 2, 0, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 103)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Age ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_3_div_9_Template_input_ngModelChange_20_listener($event) {
      const participant_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](participant_r14.age, $event) || (participant_r14.age = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function BookingComponent_div_30_ng_container_3_div_9_Template_input_input_20_listener() {
      const participant_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateAge(participant_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, BookingComponent_div_30_ng_container_3_div_9_div_21_Template, 2, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 103)(23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "select", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_3_div_9_Template_select_ngModelChange_27_listener($event) {
      const participant_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](participant_r14.gender, $event) || (participant_r14.gender = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "option", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Select Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, BookingComponent_div_30_ng_container_3_div_9_option_30_Template, 2, 2, "option", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 103)(32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "ID Proof Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "select", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_3_div_9_Template_select_ngModelChange_36_listener($event) {
      const participant_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](participant_r14.idType, $event) || (participant_r14.idType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function BookingComponent_div_30_ng_container_3_div_9_Template_select_change_36_listener() {
      const participant_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      participant_r14.idNumber = "";
      participant_r14.idError = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateId(participant_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "option", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Select ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, BookingComponent_div_30_ng_container_3_div_9_option_39_Template, 2, 2, "option", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 103)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "ID Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_3_div_9_Template_input_ngModelChange_45_listener($event) {
      const participant_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](participant_r14.idNumber, $event) || (participant_r14.idNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function BookingComponent_div_30_ng_container_3_div_9_Template_input_input_45_listener() {
      const participant_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatIdInput(participant_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, BookingComponent_div_30_ng_container_3_div_9_div_46_Template, 2, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 103)(48, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_3_div_9_Template_input_ngModelChange_50_listener($event) {
      const participant_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](participant_r14.phone, $event) || (participant_r14.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function BookingComponent_div_30_ng_container_3_div_9_Template_input_input_50_listener() {
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const participant_r14 = ctx_r16.$implicit;
      const i_r18 = ctx_r16.index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.validateParticipantPhone(participant_r14, i_r18 === 0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, BookingComponent_div_30_ng_container_3_div_9_div_51_Template, 2, 0, "div", 140)(52, BookingComponent_div_30_ng_container_3_div_9_div_52_Template, 2, 1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 103)(54, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "Blood Group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "select", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_3_div_9_Template_select_ngModelChange_58_listener($event) {
      const participant_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](participant_r14.bloodGroup, $event) || (participant_r14.bloodGroup = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, BookingComponent_div_30_ng_container_3_div_9_option_59_Template, 2, 2, "option", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 103)(61, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "Dietary Preference ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "select", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_3_div_9_Template_select_ngModelChange_65_listener($event) {
      const participant_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](participant_r14.dietaryPreference, $event) || (participant_r14.dietaryPreference = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](66, BookingComponent_div_30_ng_container_3_div_9_option_66_Template, 2, 2, "option", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 148)(68, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "Medical & Health Declaration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "select", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_3_div_9_Template_select_ngModelChange_72_listener($event) {
      const participant_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](participant_r14.medicalCondition, $event) || (participant_r14.medicalCondition = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, BookingComponent_div_30_ng_container_3_div_9_option_73_Template, 2, 2, "option", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "textarea", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_3_div_9_Template_textarea_ngModelChange_74_listener($event) {
      const participant_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](participant_r14.medicalInfo, $event) || (participant_r14.medicalInfo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const participant_r14 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r18 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Participant ", i_r18 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r18 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", participant_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", i_r18 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r18 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", participant_r14.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", participant_r14.ageError);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", participant_r14.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.genderOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", participant_r14.idType);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.idTypeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", participant_r14.idNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("maxlength", ctx_r0.getIdMaxLength(participant_r14.idType));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", participant_r14.idError);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", participant_r14.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", i_r18 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r18 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", participant_r14.phoneError);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", participant_r14.bloodGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bloodGroupOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", participant_r14.dietaryPreference);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.dietaryOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", participant_r14.medicalCondition);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.medicalOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", participant_r14.medicalInfo);
  }
}
function BookingComponent_div_30_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 79)(2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Step 3 of 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h1", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Participant Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, BookingComponent_div_30_ng_container_3_div_8_Template, 3, 0, "div", 129)(9, BookingComponent_div_30_ng_container_3_div_9_Template, 75, 26, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Please provide details for all ", ctx_r0.booking.participants, " participant(s). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.areAllParticipantsValid());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.participants);
  }
}
function BookingComponent_div_30_ng_container_4_tr_86_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_30_ng_container_4_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, BookingComponent_div_30_ng_container_4_tr_86_span_5_Template, 2, 0, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r24 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", p_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r24 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](p_r23.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](p_r23.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](p_r23.idType);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](p_r23.idNumber);
  }
}
function BookingComponent_div_30_ng_container_4_ng_container_94_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 164)(1, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const addon_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", addon_r25.name, " (", addon_r25.quantity, " \u00D7 \u20B9", addon_r25.price, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 4, addon_r25.price * addon_r25.quantity, "1.0-0"));
  }
}
function BookingComponent_div_30_ng_container_4_ng_container_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, BookingComponent_div_30_ng_container_4_ng_container_94_div_1_Template, 6, 7, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const addon_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", addon_r25.quantity > 0);
  }
}
function BookingComponent_div_30_ng_container_4_div_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 208)(1, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Coupon Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u2212\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 1, ctx_r0.couponDiscountAmount, "1.0-0"));
  }
}
function BookingComponent_div_30_ng_container_4_div_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 208)(1, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Referral Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u2212\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 1, ctx_r0.referralDiscountAmount, "1.0-0"));
  }
}
function BookingComponent_div_30_ng_container_4_div_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 208)(1, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Free Slot Credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u2212\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 1, ctx_r0.referralRewardDiscountAmount, "1.0-0"));
  }
}
function BookingComponent_div_30_ng_container_4_div_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 208)(1, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " GoWild Wallet Applied");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u2212\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](6, 1, ctx_r0.walletDeductionAmount, "1.2-2"));
  }
}
function BookingComponent_div_30_ng_container_4_div_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 212)(1, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Balance Due at Basecamp / T-7 Days (70%):");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](6, 1, ctx_r0.remainderPayable, "1.0-0"));
  }
}
function BookingComponent_div_30_ng_container_4_i_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 215);
  }
}
function BookingComponent_div_30_ng_container_4_i_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 216);
  }
}
function BookingComponent_div_30_ng_container_4_div_155_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 217)(1, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div")(4, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "GoWild Trek Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Available Balance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " (incl. bonus)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "label", 222)(13, "input", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_4_div_155_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.applyWalletBalance, $event) || (ctx_r0.applyWalletBalance = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Apply Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](10, 2, ctx_r0.userWallet.totalUsableBalance, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.applyWalletBalance);
  }
}
function BookingComponent_div_30_ng_container_4_div_161_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Validating coupon... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_30_ng_container_4_div_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.couponValidationSuccess, " ");
  }
}
function BookingComponent_div_30_ng_container_4_button_171_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_30_ng_container_4_button_171_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.clearReferralCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_30_ng_container_4_div_172_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Log in to use referral codes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_30_ng_container_4_div_173_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Checking referral code\u2026 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_30_ng_container_4_div_174_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.referralValidationSuccess, " ");
  }
}
function BookingComponent_div_30_ng_container_4_div_175_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.referralValidationError, " ");
  }
}
function BookingComponent_div_30_ng_container_4_div_176_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.referralSummary.freeSlotsAvailable || 0, " slot(s) available ");
  }
}
function BookingComponent_div_30_ng_container_4_div_176_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Invite friends to unlock free treks. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_30_ng_container_4_div_176_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 237)(1, "div", 238)(2, "button", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_30_ng_container_4_div_176_div_10_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.adjustReferralRewardSlots(-1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " \u2212 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_30_ng_container_4_div_176_div_10_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.adjustReferralRewardSlots(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.referralRewardSlotsToUse);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" Each free slot waives \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](10, 3, ctx_r0.selectedBatch == null ? null : ctx_r0.selectedBatch.price, "1.0-0"), ". Savings applied: \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](11, 6, ctx_r0.referralRewardDiscountAmount, "1.0-0"), " ");
  }
}
function BookingComponent_div_30_ng_container_4_div_176_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (ctx_r0.referralSummary == null ? null : ctx_r0.referralSummary.freeSlotsAvailable) ? "Referral code is active. Clear it to use a free slot." : "Invite friends to unlock free trek slots.", " ");
  }
}
function BookingComponent_div_30_ng_container_4_div_176_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 228)(1, "div", 229)(2, "div")(3, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Use Free Trek Slot");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, BookingComponent_div_30_ng_container_4_div_176_div_5_Template, 2, 1, "div", 231)(6, BookingComponent_div_30_ng_container_4_div_176_div_6_Template, 2, 0, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "label", 232)(8, "input", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_4_div_176_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.useReferralReward, $event) || (ctx_r0.useReferralReward = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function BookingComponent_div_30_ng_container_4_div_176_Template_input_change_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onReferralRewardToggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "span", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, BookingComponent_div_30_ng_container_4_div_176_div_10_Template, 12, 9, "div", 235)(11, BookingComponent_div_30_ng_container_4_div_176_div_11_Template, 2, 1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.referralSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.referralSummary && !ctx_r0.isReferralSummaryLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.useReferralReward);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r0.canUseReferralReward);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.useReferralReward);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.canUseReferralReward);
  }
}
function BookingComponent_div_30_ng_container_4_div_177_div_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const coupon_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" \u00B7 Expires ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, coupon_r31.endDate, "MMM dd"));
  }
}
function BookingComponent_div_30_ng_container_4_div_177_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 245)(1, "div", 246)(2, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, BookingComponent_div_30_ng_container_4_div_177_div_4_span_8_Template, 3, 4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_30_ng_container_4_div_177_div_4_Template_button_click_9_listener() {
      const coupon_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.copyCouponCode(coupon_r31.code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const coupon_r31 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("used", coupon_r31.isUsedByUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](coupon_r31.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.getCouponLabel(coupon_r31));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Min booking \u20B9", coupon_r31.minBookingAmount || 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", coupon_r31.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", coupon_r31.isUsedByUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", coupon_r31.isUsedByUser ? "Already used" : "Copy & Apply", " ");
  }
}
function BookingComponent_div_30_ng_container_4_div_177_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 241)(1, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Available Coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, BookingComponent_div_30_ng_container_4_div_177_div_4_Template, 11, 8, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.availableCoupons);
  }
}
function BookingComponent_div_30_ng_container_4_div_178_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.couponListError, " ");
  }
}
function BookingComponent_div_30_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 79)(2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Step 4 of 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h1", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Review Your Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Please verify all details before proceeding to payment. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 154)(9, "div", 155)(10, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Trek Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "a", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_30_ng_container_4_Template_a_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.currentStep = 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 158)(15, "div", 159)(16, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Trek");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 159)(21, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 159)(28, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 159)(33, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 154)(38, "div", 155)(39, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Primary Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "a", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_30_ng_container_4_Template_a_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.currentStep = 2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 158)(44, "div", 159)(45, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 159)(50, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 159)(55, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 159)(60, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "Emergency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div", 154)(65, "div", 155)(66, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "a", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_30_ng_container_4_Template_a_click_68_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.currentStep = 3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "table", 162)(71, "thead")(72, "tr")(73, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "ID Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, "ID Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](86, BookingComponent_div_30_ng_container_4_tr_86_Template, 14, 7, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "div", 163)(88, "div", 164)(89, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](93, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](94, BookingComponent_div_30_ng_container_4_ng_container_94_Template, 2, 1, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "div", 167)(96, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](97, "i", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](101, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "div", 167)(103, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](104, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](108, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "div", 170)(110, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](111, "Total Amount (incl. 5% GST)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](114, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](115, BookingComponent_div_30_ng_container_4_div_115_Template, 6, 4, "div", 171)(116, BookingComponent_div_30_ng_container_4_div_116_Template, 6, 4, "div", 171)(117, BookingComponent_div_30_ng_container_4_div_117_Template, 6, 4, "div", 171)(118, BookingComponent_div_30_ng_container_4_div_118_Template, 7, 4, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "div", 172)(120, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](121, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](124);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](125, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](126, BookingComponent_div_30_ng_container_4_div_126_Template, 7, 4, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](127, "div", 175)(128, "div", 176)(129, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](130, "i", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](131, " Choose Payment Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "div", 178)(133, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_30_ng_container_4_Template_div_click_133_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.paymentPlan = "full");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "div", 180)(135, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](136, "i", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](137, " Full Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](138, BookingComponent_div_30_ng_container_4_i_138_Template, 1, 0, "i", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](139, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](140, "Instant confirmation & guaranteed slots");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](143, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](144, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_30_ng_container_4_Template_div_click_144_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.paymentPlan = "deposit_30");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](145, "div", 180)(146, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](147, "i", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](148, " 30% Advance");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](149, BookingComponent_div_30_ng_container_4_i_149_Template, 1, 0, "i", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](151, "Pay 30% now, 70% before trek / Basecamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](152, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](153);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](154, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](155, BookingComponent_div_30_ng_container_4_div_155_Template, 16, 5, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "div", 189)(157, "div", 103)(158, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](159, "Coupon Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](160, "input", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_4_Template_input_ngModelChange_160_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.couponCode, $event) || (ctx_r0.couponCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function BookingComponent_div_30_ng_container_4_Template_input_ngModelChange_160_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onCouponCodeInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](161, BookingComponent_div_30_ng_container_4_div_161_Template, 2, 0, "div", 140)(162, BookingComponent_div_30_ng_container_4_div_162_Template, 2, 1, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](163, "div", 192)(164, "div", 103)(165, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](166, "Referral Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](167, "div", 193)(168, "input", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_4_Template_input_ngModelChange_168_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.referralCodeInput, $event) || (ctx_r0.referralCodeInput = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function BookingComponent_div_30_ng_container_4_Template_input_ngModelChange_168_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.onReferralCodeInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](169, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_30_ng_container_4_Template_button_click_169_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.applyReferralCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](170, " Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](171, BookingComponent_div_30_ng_container_4_button_171_Template, 2, 0, "button", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](172, BookingComponent_div_30_ng_container_4_div_172_Template, 2, 0, "div", 140)(173, BookingComponent_div_30_ng_container_4_div_173_Template, 2, 0, "div", 140)(174, BookingComponent_div_30_ng_container_4_div_174_Template, 2, 1, "div", 197)(175, BookingComponent_div_30_ng_container_4_div_175_Template, 2, 1, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](176, BookingComponent_div_30_ng_container_4_div_176_Template, 12, 6, "div", 199)(177, BookingComponent_div_30_ng_container_4_div_177_Template, 5, 1, "div", 200)(178, BookingComponent_div_30_ng_container_4_div_178_Template, 2, 1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](179, "label", 201)(180, "input", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_30_ng_container_4_Template_input_ngModelChange_180_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.termsAccepted, $event) || (ctx_r0.termsAccepted = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](181, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](182, " I agree to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](183, "a", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](184, "Terms & Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](185, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](186, "a", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](187, "Cancellation Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](188);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.trek.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](25, 53, ctx_r0.selectedBatch == null ? null : ctx_r0.selectedBatch.startDate, "MMM dd"), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](26, 56, ctx_r0.selectedBatch == null ? null : ctx_r0.selectedBatch.endDate, "MMM dd, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.selectedBatch == null ? null : ctx_r0.selectedBatch.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.booking.participants);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.booking.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.booking.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.booking.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.booking.emergencyContact);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.participants);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("Trek (", ctx_r0.booking.participants, " \u00D7 \u20B9", ctx_r0.selectedBatch == null ? null : ctx_r0.selectedBatch.price, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](93, 59, ctx_r0.basePrice, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.addOns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Forest Dept Permit (", ctx_r0.booking.participants, " \u00D7 \u20B9250)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](101, 62, ctx_r0.forestPermitFeeTotal, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Western Ghats Eco-Cess (", ctx_r0.booking.participants, " \u00D7 \u20B950)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](108, 65, ctx_r0.ecoCessTotal, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](114, 68, ctx_r0.totalPrice, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.couponDiscountAmount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.referralDiscountAmount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.referralRewardDiscountAmount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.walletDeductionAmount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.paymentPlan === "deposit_30" ? "Advance Payable Now (30%)" : "Total Payable Now", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](125, 71, ctx_r0.effectivePayableNow, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.paymentPlan === "deposit_30");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active-full", ctx_r0.paymentPlan === "full");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.paymentPlan === "full");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](143, 74, ctx_r0.payablePrice, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active-deposit", ctx_r0.paymentPlan === "deposit_30");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.paymentPlan === "deposit_30");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](154, 77, ctx_r0.advanceDepositPayable, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.userWallet && ctx_r0.userWallet.totalUsableBalance > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.couponCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isCouponValidating);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isCouponValidating && ctx_r0.couponValidationSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.useReferralReward || ctx_r0.isReferralValidating);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.referralCodeInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r0.referralCodeInput || ctx_r0.useReferralReward || ctx_r0.isReferralValidating);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.referralCodeInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isUserLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isReferralValidating);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isReferralValidating && ctx_r0.referralValidationSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.referralValidationError);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isUserLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.availableCoupons.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.couponListError);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.termsAccepted);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", ctx_r0.termsPdfUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", ctx_r0.termsPdfUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" of ", ctx_r0.siteSettings.currentSettings.brandName, ". ");
  }
}
function BookingComponent_div_30_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_30_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.prevStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " \u2190 Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_30_div_8_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " \u00B7 30% deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_30_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 252)(1, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Total Payable");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, BookingComponent_div_30_div_8_span_8_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 4, ctx_r0.payablePrice, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r0.booking.participants, " ", ctx_r0.booking.participants === 1 ? "trekker" : "trekkers", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.paymentPlan === "deposit_30");
  }
}
function BookingComponent_div_30_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_30_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.nextStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r0.canProceedToNextStep())("title", ctx_r0.getStepIncompleteHint());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.getNextStepButtonText());
  }
}
function BookingComponent_div_30_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_30_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r34);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.proceedToPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.isSubmitting || !ctx_r0.termsAccepted || ctx_r0.isCouponValidating);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Proceed to Pay \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 2, ctx_r0.payablePrice, "1.0-0"));
  }
}
function BookingComponent_div_30_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.getStepIncompleteHint(), " ");
  }
}
function BookingComponent_div_30_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.couponValidationError, " ");
  }
}
function BookingComponent_div_30_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.successMessage, " ");
  }
}
function BookingComponent_div_30_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function BookingComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, BookingComponent_div_30_ng_container_1_Template, 19, 4, "ng-container", 12)(2, BookingComponent_div_30_ng_container_2_Template, 39, 5, "ng-container", 12)(3, BookingComponent_div_30_ng_container_3_Template, 10, 3, "ng-container", 12)(4, BookingComponent_div_30_ng_container_4_Template, 189, 80, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 69)(6, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, BookingComponent_div_30_button_7_Template, 2, 0, "button", 71)(8, BookingComponent_div_30_div_8_Template, 9, 7, "div", 72)(9, BookingComponent_div_30_button_9_Template, 5, 3, "button", 73)(10, BookingComponent_div_30_button_10_Template, 6, 5, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, BookingComponent_div_30_div_11_Template, 3, 1, "div", 75)(12, BookingComponent_div_30_div_12_Template, 2, 1, "div", 76)(13, BookingComponent_div_30_div_13_Template, 3, 1, "div", 77)(14, BookingComponent_div_30_div_14_Template, 3, 1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.currentStep === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.currentStep === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.currentStep === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.currentStep === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.currentStep > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.selectedBatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.currentStep < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.currentStep === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.canProceedToNextStep() && ctx_r0.getStepIncompleteHint());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.currentStep === 4 && ctx_r0.couponValidationError);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.successMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage);
  }
}
function BookingComponent_div_31_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "30% Advance Deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_31_div_35_div_35_div_8_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Simulate Successful QR Scan & Pay \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 1, ctx_r0.payablePrice, "1.0-0"));
  }
}
function BookingComponent_div_31_div_35_div_35_div_8_span_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Verifying with UPI Gateway...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_31_div_35_div_35_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 317)(1, "div", 318)(2, "div", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "svg", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "rect", 321)(5, "rect", 322)(6, "rect", 323)(7, "rect", 324)(8, "rect", 325)(9, "rect", 326)(10, "rect", 327)(11, "rect", 328)(12, "rect", 329)(13, "rect", 330)(14, "rect", 331)(15, "rect", 332)(16, "rect", 333)(17, "rect", 334)(18, "rect", 335)(19, "rect", 336)(20, "rect", 337)(21, "rect", 338)(22, "rect", 339)(23, "rect", 340)(24, "rect", 341)(25, "rect", 342)(26, "rect", 343)(27, "rect", 344)(28, "rect", 345)(29, "rect", 346)(30, "rect", 347)(31, "rect", 348)(32, "rect", 349)(33, "rect", 350)(34, "rect", 351)(35, "rect", 352)(36, "rect", 353)(37, "rect", 354)(38, "rect", 355)(39, "circle", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "text", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "GWK");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "div", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 359)(44, "div", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](45, "span", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, " QR active: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "p", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Scan with any UPI app on your phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 363)(52, "span", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Google Pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "span", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "PhonePe");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "span", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "Paytm");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "span", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "BHIM");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "span", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "CRED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "button", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_div_35_div_8_Template_button_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.completePayment("UPI - Dynamic QR Code"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, BookingComponent_div_31_div_35_div_35_div_8_span_63_Template, 4, 4, "span", 12)(64, BookingComponent_div_31_div_35_div_35_div_8_span_64_Template, 2, 0, "span", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.formatUpiTimer());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.isProcessingPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isProcessingPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isProcessingPayment);
  }
}
function BookingComponent_div_31_div_35_div_35_div_9_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Send Payment Request & Pay \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, ctx_r0.payablePrice, "1.0-0"));
  }
}
function BookingComponent_div_31_div_35_div_35_div_9_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Awaiting UPI Confirmation...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_31_div_35_div_35_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 369)(1, "label", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Enter your Virtual Payment Address (VPA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 371)(4, "input", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_31_div_35_div_35_div_9_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.upiVpa, $event) || (ctx_r0.upiVpa = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 373)(6, "button", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_div_35_div_9_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.appendVpaHandle("@okhdfcbank"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "@okhdfcbank");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_div_35_div_9_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.appendVpaHandle("@okaxis"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "@okaxis");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_div_35_div_9_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.appendVpaHandle("@paytm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "@paytm");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_div_35_div_9_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.appendVpaHandle("@ybl"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "@ybl");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_div_35_div_9_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.completePayment("UPI - " + ctx_r0.upiVpa));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, BookingComponent_div_31_div_35_div_35_div_9_span_15_Template, 3, 4, "span", 12)(16, BookingComponent_div_31_div_35_div_35_div_9_span_16_Template, 2, 0, "span", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.upiVpa);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.isProcessingPayment || !ctx_r0.upiVpa.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isProcessingPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isProcessingPayment);
  }
}
function BookingComponent_div_31_div_35_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 311)(1, "div", 312)(2, "button", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_div_35_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r37);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.upiOption = "qr");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Scan Dynamic QR Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_div_35_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r37);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.upiOption = "vpa");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Enter UPI ID / VPA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, BookingComponent_div_31_div_35_div_35_div_8_Template, 65, 4, "div", 315)(9, BookingComponent_div_31_div_35_div_35_div_9_Template, 17, 4, "div", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.upiOption === "qr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.upiOption === "vpa");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.upiOption === "qr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.upiOption === "vpa");
  }
}
function BookingComponent_div_31_div_35_div_36_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Pay \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 1, ctx_r0.payablePrice, "1.0-0"), " via Card");
  }
}
function BookingComponent_div_31_div_35_div_36_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Authorizing 3D Secure OTP...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_31_div_35_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 311)(1, "div", 375)(2, "div", 376)(3, "label", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Card Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 377)(6, "input", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_31_div_35_div_36_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.cardDetails.number, $event) || (ctx_r0.cardDetails.number = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function BookingComponent_div_31_div_35_div_36_Template_input_input_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatCardNumber($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 376)(10, "label", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Cardholder Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "input", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_31_div_35_div_36_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.cardDetails.name, $event) || (ctx_r0.cardDetails.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 381)(14, "label", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "input", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_31_div_35_div_36_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.cardDetails.expiry, $event) || (ctx_r0.cardDetails.expiry = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function BookingComponent_div_31_div_35_div_36_Template_input_input_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.formatCardExpiry($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 381)(18, "label", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "CVV / CVC");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "input", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_31_div_35_div_36_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.cardDetails.cvv, $event) || (ctx_r0.cardDetails.cvv = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "label", 384)(22, "input", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_31_div_35_div_36_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.cardDetails.saveCard, $event) || (ctx_r0.cardDetails.saveCard = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Save card securely for future Western Ghats expeditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "button", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_div_36_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.completePayment("Card - " + ctx_r0.getCardType(ctx_r0.cardDetails.number) + " ending in " + (ctx_r0.cardDetails.number.slice(-4) || "9876")));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, BookingComponent_div_31_div_35_div_36_span_26_Template, 4, 4, "span", 12)(27, BookingComponent_div_31_div_35_div_36_span_27_Template, 2, 0, "span", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.cardDetails.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.getCardType(ctx_r0.cardDetails.number));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.cardDetails.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.cardDetails.expiry);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.cardDetails.cvv);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.cardDetails.saveCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.isProcessingPayment || !ctx_r0.cardDetails.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isProcessingPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isProcessingPayment);
  }
}
function BookingComponent_div_31_div_35_div_37_span_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("Proceed to ", ctx_r0.selectedBank, " Net Banking (\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 2, ctx_r0.payablePrice, "1.0-0"), ")");
  }
}
function BookingComponent_div_31_div_35_div_37_span_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Connecting to ", ctx_r0.selectedBank, " portal...");
  }
}
function BookingComponent_div_31_div_35_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 311)(1, "p", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Popular Indian Banks");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 385)(4, "button", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_div_37_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.selectedBank = "HDFC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "HDFC Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_div_37_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.selectedBank = "SBI");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "i", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "State Bank of India");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_div_37_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.selectedBank = "ICICI");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "span", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "i", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "ICICI Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "button", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_div_37_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.selectedBank = "AXIS");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "span", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "i", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Axis Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 388)(25, "label", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Or choose from other 40+ banks");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "select", 389);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_31_div_35_div_37_Template_select_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.selectedBank, $event) || (ctx_r0.selectedBank = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "option", 390);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "HDFC Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "option", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "State Bank of India");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "option", 392);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "ICICI Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "option", 393);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Axis Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "option", 394);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Kotak Mahindra Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "option", 395);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Punjab National Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "option", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Canara Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "option", 397);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Bank of Baroda");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "option", 398);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "IndusInd Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "option", 399);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Union Bank of India");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "option", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Karnataka Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "button", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_div_37_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.completePayment("Net Banking - " + ctx_r0.selectedBank));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, BookingComponent_div_31_div_35_div_37_span_51_Template, 3, 5, "span", 12)(52, BookingComponent_div_31_div_35_div_37_span_52_Template, 2, 1, "span", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("selected", ctx_r0.selectedBank === "HDFC");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("selected", ctx_r0.selectedBank === "SBI");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("selected", ctx_r0.selectedBank === "ICICI");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("selected", ctx_r0.selectedBank === "AXIS");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.selectedBank);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.isProcessingPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isProcessingPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isProcessingPayment);
  }
}
function BookingComponent_div_31_div_35_div_38_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("Pay \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 2, ctx_r0.payablePrice, "1.0-0"), " with ", ctx_r0.selectedWallet);
  }
}
function BookingComponent_div_31_div_35_div_38_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Debiting Wallet...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_31_div_35_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 311)(1, "div", 401)(2, "label", 402)(3, "input", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_31_div_35_div_38_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r42);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.selectedWallet, $event) || (ctx_r0.selectedWallet = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 404);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 405);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 218)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Amazon Pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Get 2% instant cashback on Western Ghats treks");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "label", 402)(12, "input", 406);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_31_div_35_div_38_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r42);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.selectedWallet, $event) || (ctx_r0.selectedWallet = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 404);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "i", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 218)(16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Paytm Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Fast checkout with Paytm balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "label", 402)(21, "input", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_31_div_35_div_38_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r42);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.selectedWallet, $event) || (ctx_r0.selectedWallet = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span", 404);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "i", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 218)(25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "PhonePe Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Link your PhonePe account");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "button", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_div_38_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r42);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.completePayment("Wallet - " + ctx_r0.selectedWallet));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, BookingComponent_div_31_div_35_div_38_span_30_Template, 3, 5, "span", 12)(31, BookingComponent_div_31_div_35_div_38_span_31_Template, 2, 0, "span", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("selected", ctx_r0.selectedWallet === "amazonpay");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.selectedWallet);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("selected", ctx_r0.selectedWallet === "paytm");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.selectedWallet);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("selected", ctx_r0.selectedWallet === "phonepe");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.selectedWallet);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.isProcessingPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.isProcessingPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.isProcessingPayment);
  }
}
function BookingComponent_div_31_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 294)(1, "div", 295)(2, "button", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.setPaymentTab("upi"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 299)(6, "span", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "UPI / QR Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Instant & Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.setPaymentTab("card"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "i", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 299)(14, "span", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Credit / Debit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Visa, MC, RuPay");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "button", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.setPaymentTab("netbanking"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "i", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 299)(22, "span", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Net Banking");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "span", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "50+ Indian Banks");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "button", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_div_35_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.setPaymentTab("wallet"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "i", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 299)(30, "span", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Wallets");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "span", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Amazon, Paytm, Mobikwik");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, BookingComponent_div_31_div_35_div_35_Template, 10, 6, "div", 310)(36, BookingComponent_div_31_div_35_div_36_Template, 28, 9, "div", 310)(37, BookingComponent_div_31_div_35_div_37_Template, 53, 12, "div", 310)(38, BookingComponent_div_31_div_35_div_38_Template, 32, 12, "div", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.selectedPaymentTab === "upi");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.selectedPaymentTab === "card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.selectedPaymentTab === "netbanking");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx_r0.selectedPaymentTab === "wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.selectedPaymentTab === "upi");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.selectedPaymentTab === "card");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.selectedPaymentTab === "netbanking");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.selectedPaymentTab === "wallet");
  }
}
function BookingComponent_div_31_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 410)(1, "div", 411);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Payment Confirmed & Verified!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "p", 412);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 413);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Official KEDB Permit Reservation Secured");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p", 414);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Redirecting to your Digital Trek Pass in 2 seconds...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 2, ctx_r0.payablePrice, "1.0-0"), " successfully authorized via ", ctx_r0.selectedPaymentMethodLabel, ".");
  }
}
function BookingComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.closePaymentModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 270)(3, "div", 271)(4, "div", 272)(5, "span", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div")(8, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "256-Bit SSL Encrypted \u2022 Direct Bank & UPI Gateway");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 276)(13, "div", 277)(14, "span", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Amount Payable");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "button", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BookingComponent_div_31_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r0.closePaymentModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "i", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 282)(22, "div", 283)(23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, BookingComponent_div_31_span_34_Template, 2, 0, "span", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, BookingComponent_div_31_div_35_Template, 39, 12, "div", 286)(36, BookingComponent_div_31_div_36_Template, 12, 5, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 288)(38, "div", 289)(39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "i", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, " PCI-DSS Level 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "i", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, " 256-Bit SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "i", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, " Instant Booking Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r0.siteSettings.currentSettings.brandName, " Secure Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](18, 10, ctx_r0.payablePrice, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.isProcessingPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx_r0.trek == null ? null : ctx_r0.trek.name) || "Western Ghats Expedition");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](29, 13, ctx_r0.selectedBatch == null ? null : ctx_r0.selectedBatch.startDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r0.booking.participants, " ", ctx_r0.booking.participants === 1 ? "Trekker" : "Trekkers");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.paymentPlan === "deposit_30");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.paymentSuccessState);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.paymentSuccessState);
  }
}
class BookingComponent {
  constructor(route, bookingService, trekService, auth, authModal, router, tokenService, sessionService, dropdownService, publicRouteId, media, operationsService, siteSettings) {
    this.route = route;
    this.bookingService = bookingService;
    this.trekService = trekService;
    this.auth = auth;
    this.authModal = authModal;
    this.router = router;
    this.tokenService = tokenService;
    this.sessionService = sessionService;
    this.dropdownService = dropdownService;
    this.publicRouteId = publicRouteId;
    this.media = media;
    this.operationsService = operationsService;
    this.siteSettings = siteSettings;
    this.mediaBaseUrl = (src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.mediaBaseUrl || '').replace(/\/?$/, '/');
    this.fallbackImage = "assets/default-trek.jpg";
    this.trekId = "";
    this.routeRef = "";
    this.currentStep = 1;
    this.isLoading = true;
    this.termsAccepted = true;
    this.couponCode = "";
    this.couponValidationError = "";
    this.couponValidationSuccess = "";
    this.couponDiscountAmount = 0;
    this.isCouponValidating = false;
    this.availableCoupons = [];
    this.couponListError = "";
    this.hasLoadedCoupons = false;
    this.couponValidationTimer = null;
    this.referralSummaryLoadedForUser = null;
    this.referralCodeInput = "";
    this.referralValidationError = "";
    this.referralValidationSuccess = "";
    this.referralDiscountAmount = 0;
    this.referralRewardDiscountAmount = 0;
    this.isReferralValidating = false;
    this.useReferralReward = false;
    this.referralRewardSlotsToUse = 1;
    this.referralSummary = null;
    this.referralSummaryError = "";
    this.isReferralSummaryLoading = false;
    this.termsPdfUrl = 'assets/legal/terms-and-conditions.pdf';
    // Trek data from API
    this.trek = null;
    this.batches = [];
    this.selectedBatch = null;
    // Booking form data
    this.booking = {
      batchId: "",
      date: "",
      participants: 1,
      name: "",
      email: "",
      phone: "",
      emergencyContact: "",
      specialRequests: ""
    };
    // Participants array
    this.participants = [];
    // Add-ons
    this.addOns = [];
    this.userId = null;
    this.isSubmitting = false;
    this.successMessageTimer = null;
    this.errorMessageTimer = null;
    this.genderOptions = [];
    this.idTypeOptions = [];
    this.bloodGroupOptions = [];
    this.dietaryOptions = [];
    this.medicalOptions = [];
    // Payment Plan & GoWild Wallet
    this.paymentPlan = 'full';
    this.applyWalletBalance = false;
    this.userWallet = null;
    this.isWalletLoading = false;
    // ── Payment Modal State ──
    this.showPaymentModal = false;
    this.selectedPaymentTab = 'upi';
    this.upiOption = 'qr';
    this.upiVpa = '';
    this.upiTimerSeconds = 720;
    this.upiTimerInterval = null;
    this.cardDetails = {
      number: '',
      name: '',
      expiry: '',
      cvv: '',
      saveCard: true
    };
    this.selectedBank = 'HDFC';
    this.selectedWallet = 'amazonpay';
    this.isProcessingPayment = false;
    this.paymentSuccessState = false;
    this.selectedPaymentMethodLabel = 'Instant UPI / QR Code';
  }
  ngOnInit() {
    this.loadDropdownOptions();
    this.loadUserWallet();
    // Get trek ID from route
    this.route.params.subscribe(params => {
      const ref = String(params["id"] || "");
      this.routeRef = ref;
      const resolvedId = this.publicRouteId.resolve(ref);
      this.trekId = String(resolvedId || "");
      this.hasLoadedCoupons = false;
      this.availableCoupons = [];
      this.couponListError = "";
      if (this.routeRef) {
        this.loadTrekData();
      }
    });
    if (!this.booking.participants) {
      this.booking.participants = 1;
    }
    if (this.tokenService.getUserId()) {
      this.loadReferralSummary();
      this.loadUserWallet();
    }
  }
  loadUserWallet() {
    const uid = this.tokenService.getUserId();
    if (!uid) return;
    this.isWalletLoading = true;
    this.operationsService.getWallet(uid).subscribe({
      next: wallet => {
        this.userWallet = wallet;
        this.isWalletLoading = false;
      },
      error: () => {
        this.isWalletLoading = false;
      }
    });
  }
  get forestPermitFeeTotal() {
    return (this.booking.participants || 1) * 250;
  }
  get ecoCessTotal() {
    return (this.booking.participants || 1) * 50;
  }
  get advanceDepositPayable() {
    return parseFloat((this.payablePrice * 0.30).toFixed(2));
  }
  get remainderPayable() {
    return parseFloat((this.payablePrice - this.advanceDepositPayable).toFixed(2));
  }
  get grossAmountBeforeWallet() {
    return this.paymentPlan === 'deposit_30' ? this.advanceDepositPayable : this.payablePrice;
  }
  get walletDeductionAmount() {
    if (!this.applyWalletBalance || !this.userWallet) return 0;
    const available = Number(this.userWallet.totalUsableBalance || 0);
    return Math.min(available, this.grossAmountBeforeWallet);
  }
  get effectivePayableNow() {
    return Math.max(0, this.grossAmountBeforeWallet - this.walletDeductionAmount);
  }
  ngOnDestroy() {
    this.stopUpiTimer();
    if (this.couponValidationTimer) {
      clearTimeout(this.couponValidationTimer);
      this.couponValidationTimer = null;
    }
    if (this.successMessageTimer) {
      clearTimeout(this.successMessageTimer);
      this.successMessageTimer = null;
    }
    if (this.errorMessageTimer) {
      clearTimeout(this.errorMessageTimer);
      this.errorMessageTimer = null;
    }
  }
  loadDropdownOptions() {
    const genderFallback = [{
      value: 'Male',
      label: 'Male'
    }, {
      value: 'Female',
      label: 'Female'
    }, {
      value: 'Other',
      label: 'Other'
    }];
    const idTypeFallback = [{
      value: 'Aadhaar Card',
      label: 'Aadhaar Card'
    }, {
      value: 'PAN Card',
      label: 'PAN Card'
    }, {
      value: 'Passport',
      label: 'Passport'
    }, {
      value: 'Driving License',
      label: 'Driving License'
    }, {
      value: 'Voter ID Card',
      label: 'Voter ID Card'
    }];
    const bloodGroupFallback = [{
      value: 'A+',
      label: 'A+'
    }, {
      value: 'A-',
      label: 'A-'
    }, {
      value: 'B+',
      label: 'B+'
    }, {
      value: 'B-',
      label: 'B-'
    }, {
      value: 'O+',
      label: 'O+'
    }, {
      value: 'O-',
      label: 'O-'
    }, {
      value: 'AB+',
      label: 'AB+'
    }, {
      value: 'AB-',
      label: 'AB-'
    }];
    const dietaryFallback = [{
      value: 'Vegetarian',
      label: 'Vegetarian'
    }, {
      value: 'Non-Vegetarian',
      label: 'Non-Vegetarian'
    }, {
      value: 'Jain (No Onion/Garlic)',
      label: 'Jain (No Onion/Garlic)'
    }, {
      value: 'Vegan',
      label: 'Vegan'
    }, {
      value: 'Eggitarian',
      label: 'Eggitarian'
    }];
    const medicalFallback = [{
      value: 'None / Fit to Trek',
      label: 'None / Fit to Trek'
    }, {
      value: 'Asthma / Respiratory',
      label: 'Asthma / Respiratory'
    }, {
      value: 'Hypertension / High BP',
      label: 'Hypertension / High BP'
    }, {
      value: 'Cardiac History',
      label: 'Cardiac History'
    }, {
      value: 'Diabetes',
      label: 'Diabetes'
    }, {
      value: 'Dust & Pollen Allergy',
      label: 'Dust & Pollen Allergy'
    }, {
      value: 'Recent Knee/Ankle Surgery',
      label: 'Recent Knee/Ankle Surgery'
    }, {
      value: 'Vertigo / Acrophobia',
      label: 'Vertigo / Acrophobia'
    }];
    this.dropdownService.getOptions('gender', genderFallback).subscribe(options => {
      this.genderOptions = options;
    });
    this.dropdownService.getOptions('id-types', idTypeFallback).subscribe(options => {
      this.idTypeOptions = options;
    });
    this.dropdownService.getOptions('blood-groups', bloodGroupFallback).subscribe(options => {
      this.bloodGroupOptions = options;
    });
    this.dropdownService.getOptions('dietary', dietaryFallback).subscribe(options => {
      this.dietaryOptions = options;
    });
    this.dropdownService.getOptions('medical-conditions', medicalFallback).subscribe(options => {
      this.medicalOptions = options;
    });
  }
  loadTrekData() {
    this.isLoading = true;
    this.trekService.getTrekById(this.routeRef || this.trekId).subscribe({
      next: response => {
        if (response.success) {
          this.trek = response.data || [];
          // Convert single batch to array for consistent handling
          if (this.trek.batch && !Array.isArray(this.trek.batch)) {
            this.batches = [this.trek.batch];
          } else if (this.trek.batches) {
            this.batches = this.trek.batches;
          } else {
            this.batches = [];
          }
          // Find available batch
          const availableBatch = this.batches.find(b => b.status === "active" && b.availableSlots > 0);
          if (availableBatch) {
            const batchIdValue = String(availableBatch.batchId || availableBatch.id || "");
            this.booking.batchId = batchIdValue;
            this.onBatchSelect(batchIdValue);
          }
          // Pre-fill user data from token (centralized)
          const decoded = this.tokenService.decode();
          this.booking.name = decoded?.name || "";
          this.booking.email = decoded?.email || "";
          this.booking.phone = decoded?.phone || "";
          this.userId = this.tokenService.getUserId();
          this.initializeAddOns();
          // Initialize participants array
          this.initializeParticipants();
        }
        this.isLoading = false;
      },
      error: error => {
        this.isLoading = false;
      }
    });
  }
  loadAvailableCoupons() {
    if (!this.trekId || this.hasLoadedCoupons) return;
    this.bookingService.getAvailableCoupons(this.trekId, this.userId).subscribe({
      next: res => {
        this.availableCoupons = Array.isArray(res?.data) ? res.data : [];
        this.couponListError = "";
        this.hasLoadedCoupons = true;
      },
      error: () => {
        this.availableCoupons = [];
        this.couponListError = "Unable to load coupons right now";
      }
    });
  }
  onBatchSelect(batchId) {
    const batchRef = String(batchId ?? "").trim();
    this.selectedBatch = this.batches.find(b => String(b.batchId || b.id || "") === batchRef);
    if (this.selectedBatch) {
      this.booking.date = this.selectedBatch.startDate;
      this.booking.batchId = String(this.selectedBatch.batchId || this.selectedBatch.id || "");
      this.initializeAddOns();
      this.scheduleCouponValidation();
    }
  }
  /**
   * Initialize participants array based on number of participants
   */
  initializeParticipants() {
    this.participants = [];
    for (let i = 0; i < this.booking.participants; i++) {
      if (i === 0) {
        // First participant is the primary contact
        this.participants.push({
          name: this.booking.name,
          age: null,
          gender: "",
          idType: "",
          idNumber: "",
          phone: this.booking.phone,
          bloodGroup: "O+",
          dietaryPreference: "Vegetarian",
          medicalCondition: "None / Fit to Trek",
          medicalInfo: ""
        });
      } else {
        // Additional participants
        this.participants.push({
          name: "",
          age: null,
          gender: "",
          idType: "",
          idNumber: "",
          phone: "",
          bloodGroup: "O+",
          dietaryPreference: "Vegetarian",
          medicalCondition: "None / Fit to Trek",
          medicalInfo: ""
        });
      }
    }
  }
  initializeAddOns() {
    const rawAddOns = this.selectedBatch?.addOns || this.selectedBatch?.addons || this.selectedBatch?.add_ons || this.trek?.addOns || this.trek?.addons || this.trek?.add_ons || [];
    if (Array.isArray(rawAddOns) && rawAddOns.length > 0) {
      this.addOns = rawAddOns.map((item, index) => ({
        id: Number(item.id || item.addon_id || index + 1),
        name: String(item.name || item.addon_name || item.title || "").trim(),
        price: Number(item.price || item.unit_price || 0),
        selected: false,
        quantity: 0
      })).filter(addon => addon.name && addon.price > 0);
      return;
    }
    // Load dynamic gear inventory from backend
    this.dropdownService.getGearRentals().subscribe({
      next: gearItems => {
        if (Array.isArray(gearItems) && gearItems.length > 0) {
          this.addOns = gearItems.map((gear, idx) => ({
            id: gear.id || idx + 1,
            name: gear.name || `${gear.item_name || 'Gear Item'}`,
            category: gear.category || '',
            price: Number(gear.price ?? gear.rental_rate_per_day ?? 150),
            selected: false,
            quantity: 0
          }));
        } else {
          this.addOns = [{
            id: 1,
            name: "Anti-Shock Carbon Trekking Poles (Pair)",
            category: "Trekking Poles & Sticks",
            price: 150,
            selected: false,
            quantity: 0
          }, {
            id: 2,
            name: "Quechua -5°C Expedition Sleeping Bag",
            category: "Sleeping Bags & Mats",
            price: 200,
            selected: false,
            quantity: 0
          }, {
            id: 3,
            name: "Waterproof Monsoon Poncho & Rain Cover",
            category: "Waterproof Ponchos & Rain Covers",
            price: 80,
            selected: false,
            quantity: 0
          }, {
            id: 4,
            name: "450 Lumens Rechargeable LED Headlamp",
            category: "Headlamps & Torches",
            price: 100,
            selected: false,
            quantity: 0
          }, {
            id: 5,
            name: "Wildcraft 60L Rucksack + Rain Cover",
            category: "Expedition Rucksacks (50L-60L)",
            price: 250,
            selected: false,
            quantity: 0
          }];
        }
      },
      error: () => {
        this.addOns = [{
          id: 1,
          name: "Anti-Shock Carbon Trekking Poles (Pair)",
          category: "Trekking Poles & Sticks",
          price: 150,
          selected: false,
          quantity: 0
        }, {
          id: 2,
          name: "Quechua -5°C Expedition Sleeping Bag",
          category: "Sleeping Bags & Mats",
          price: 200,
          selected: false,
          quantity: 0
        }, {
          id: 3,
          name: "Waterproof Monsoon Poncho & Rain Cover",
          category: "Waterproof Ponchos & Rain Covers",
          price: 80,
          selected: false,
          quantity: 0
        }];
      }
    });
  }
  /**
   * Update participants array when number changes
   */
  onParticipantsInput(event) {
    const input = event.target;
    let value = Number(input.value);
    if (!this.selectedBatch) return;
    const max = this.selectedBatch.availableSlots;
    // Clamp to max available
    if (value > max) value = max;
    if (value < 1) value = 1;
    // Update model
    this.booking.participants = value;
    input.value = value.toString();
    // Reinitialize participants array
    this.initializeParticipants();
    this.syncAddOnQuantitiesWithParticipants();
    this.scheduleCouponValidation();
  }
  /**
   * Sync primary contact data to first participant
   */
  syncPrimaryContactToParticipant() {
    if (this.participants.length > 0) {
      this.participants[0].name = this.booking.name;
      this.participants[0].phone = this.booking.phone;
    }
  }
  /**
   * Check if all participants have required fields filled
   */
  areAllParticipantsValid() {
    return this.participants.every((participant, index) => participant.name.trim() !== '' && participant.age !== null && participant.age > 0 && participant.gender !== '' && participant.idType !== '' && participant.idNumber.trim() !== '' && !participant.idError && !participant.ageError && (index === 0 || this.isValidPhone(participant.phone)));
  }
  /**
   * Check if can proceed to next step
   */
  canProceedToNextStep() {
    switch (this.currentStep) {
      case 1:
        return !!this.booking.batchId && this.booking.participants >= 1 && this.selectedBatch !== null;
      case 2:
        return this.booking.name.trim() !== '' && this.booking.email.trim() !== '' && this.booking.phone.length === 10 && this.booking.emergencyContact.length === 10;
      case 3:
        return this.areAllParticipantsValid();
      default:
        return true;
    }
  }
  get basePrice() {
    if (!this.selectedBatch) return 0;
    return (this.selectedBatch.price || 0) * this.booking.participants;
  }
  get addOnsPrice() {
    return this.addOns.reduce((sum, addon) => sum + addon.price * (addon.quantity || 0), 0);
  }
  get totalPrice() {
    return this.basePrice + this.addOnsPrice;
  }
  get payablePrice() {
    const discounts = this.couponDiscountAmount + this.referralDiscountAmount + this.referralRewardDiscountAmount;
    return Math.max(0, this.totalPrice - discounts);
  }
  get isUserLoggedIn() {
    return !!this.tokenService.getUserId();
  }
  get canUseReferralReward() {
    if (!this.isUserLoggedIn || !this.referralSummary) {
      return false;
    }
    return this.referralSummary.freeSlotsAvailable > 0 && this.referralDiscountAmount === 0;
  }
  get referralCodeForShare() {
    return this.referralSummary?.referralCode || this.referralCodeInput || "";
  }
  nextStep() {
    // Validate current step
    if (!this.canProceedToNextStep()) {
      if (this.currentStep === 1) {
        this.showTransientMessage("error", "Please select a batch and number of participants before continuing.", 3000);
      } else if (this.currentStep === 2) {
        this.showTransientMessage("error", "Please fill all required contact information before continuing.", 3000);
      } else if (this.currentStep === 3) {
        this.showTransientMessage("error", "Please fill all required participant details before continuing.", 3000);
      }
      return;
    }
    // Check authentication before step 3
    if (this.currentStep === 2) {
      // Sync primary contact to first participant before moving forward
      this.syncPrimaryContactToParticipant();
      const hasToken = !!this.tokenService.getToken(); // token exists (even if expired)
      const isValid = this.tokenService.isValid(); // token exists AND not expired
      if (hasToken && !isValid) {
        // Token exists but is expired → show session expired modal
        this.sessionService.notifyExpired();
        return;
      }
      if (!hasToken) {
        // No token at all → fresh login flow
        this.authModal.openLogin().then(result => {
          if (result && result.success) {
            this.currentStep++;
          }
        }).catch(() => {
          // User cancelled login
        });
        return;
      }
    }
    if (this.currentStep < 4) {
      this.currentStep++;
      if (this.currentStep === 4) {
        this.loadAvailableCoupons();
        this.scheduleCouponValidation();
        this.loadReferralSummary();
        this.updateReferralRewardDiscount();
      }
    }
  }
  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  proceedToPayment() {
    this.openPaymentModal();
  }
  getNextStepButtonText() {
    switch (this.currentStep) {
      case 1:
        return 'Continue to Contact Details';
      case 2:
        return 'Continue to Trekkers Manifest';
      case 3:
        return 'Review & Confirm Booking';
      default:
        return 'Continue';
    }
  }
  getStepIncompleteHint() {
    switch (this.currentStep) {
      case 1:
        if (!this.selectedBatch) return 'Select a departure batch above';
        if (this.booking.participants < 1) return 'Select at least 1 participant';
        return '';
      case 2:
        if (!this.booking.name?.trim() || !this.booking.email?.trim()) return 'Fill primary contact name & email';
        if (String(this.booking.phone || '').length !== 10) return 'Valid 10-digit mobile number required';
        if (String(this.booking.emergencyContact || '').length !== 10) return '10-digit emergency contact required';
        return '';
      case 3:
        if (!this.areAllParticipantsValid()) return 'Complete all trekker details (ID & Blood group)';
        return '';
      default:
        return '';
    }
  }
  openPaymentModal() {
    if (this.currentStep !== 4) return;
    if (!this.termsAccepted) {
      this.showTransientMessage("error", "Please accept the Terms & Conditions and Cancellation Policy to proceed.", 2500);
      return;
    }
    if (this.isCouponValidating) {
      this.showTransientMessage("error", "Please wait, validating coupon...", 1800);
      return;
    }
    if (this.couponCode.trim() && this.couponValidationError) {
      this.showTransientMessage("error", this.couponValidationError, 2200);
      return;
    }
    this.showPaymentModal = true;
    this.paymentSuccessState = false;
    this.isProcessingPayment = false;
    this.startUpiTimer();
  }
  closePaymentModal() {
    if (this.isProcessingPayment) return;
    this.showPaymentModal = false;
    this.stopUpiTimer();
  }
  setPaymentTab(tab) {
    this.selectedPaymentTab = tab;
  }
  startUpiTimer() {
    this.stopUpiTimer();
    this.upiTimerSeconds = 720;
    this.upiTimerInterval = setInterval(() => {
      if (this.upiTimerSeconds > 0) {
        this.upiTimerSeconds--;
      } else {
        this.stopUpiTimer();
      }
    }, 1000);
  }
  stopUpiTimer() {
    if (this.upiTimerInterval) {
      clearInterval(this.upiTimerInterval);
      this.upiTimerInterval = null;
    }
  }
  formatUpiTimer() {
    const mins = Math.floor(this.upiTimerSeconds / 60);
    const secs = this.upiTimerSeconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
  appendVpaHandle(handle) {
    const raw = (this.upiVpa || '').split('@')[0] || '';
    this.upiVpa = `${raw}${handle}`;
  }
  formatCardNumber(event) {
    const input = event.target;
    let value = (input.value || '').replace(/\D/g, '').substring(0, 16);
    let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
    this.cardDetails.number = formatted;
    input.value = formatted;
  }
  formatCardExpiry(event) {
    const input = event.target;
    let value = (input.value || '').replace(/\D/g, '').substring(0, 4);
    if (value.length >= 2) {
      value = `${value.substring(0, 2)}/${value.substring(2)}`;
    }
    this.cardDetails.expiry = value;
    input.value = value;
  }
  getCardType(num) {
    const clean = String(num || '').replace(/\D/g, '');
    if (clean.startsWith('4')) return 'Visa';
    if (/^5[1-5]/.test(clean)) return 'Mastercard';
    if (/^6(0|5)/.test(clean) || /^35/.test(clean)) return 'RuPay';
    if (/^3[47]/.test(clean)) return 'Amex';
    return 'Card';
  }
  completePayment(paymentMethodLabel) {
    if (this.isProcessingPayment) return;
    this.selectedPaymentMethodLabel = paymentMethodLabel;
    this.isProcessingPayment = true;
    // Simulate authentic bank gateway verification
    setTimeout(() => {
      this.executeBooking(paymentMethodLabel);
    }, 1200);
  }
  executeBooking(paymentMethodLabel) {
    var _this = this;
    this.successMessage = "";
    this.errorMessage = "";
    this.isSubmitting = true;
    // Centralized token handling
    this.userId = this.tokenService.getUserId();
    this.updateReferralRewardDiscount();
    const bookingData = {
      userId: this.userId,
      trekId: this.trekId,
      trekName: this.trek.name,
      batchId: this.selectedBatch.batchId || this.selectedBatch.id,
      startDate: this.selectedBatch.startDate,
      endDate: this.selectedBatch.endDate,
      price: this.selectedBatch.price,
      availableSlots: this.selectedBatch.availableSlots,
      participants: this.booking.participants,
      couponCode: this.couponCode.trim() ? this.couponCode.trim().toUpperCase() : undefined,
      referralCode: this.referralDiscountAmount > 0 ? this.referralCodeInput.trim().toUpperCase() : undefined,
      useReferralReward: this.useReferralReward && this.referralRewardDiscountAmount > 0,
      referralRewardSlots: this.useReferralReward && this.referralRewardDiscountAmount > 0 ? this.referralRewardSlotsToUse : undefined,
      paymentMethod: paymentMethodLabel,
      selectedAddOns: this.addOns.filter(addon => addon.quantity > 0).map(addon => ({
        id: addon.id,
        name: addon.name,
        category: addon.category,
        price: addon.price,
        quantity: addon.quantity,
        selected: true
      })),
      personalInfo: {
        name: this.booking.name,
        email: this.booking.email,
        phone: this.booking.phone,
        emergencyContact: this.booking.emergencyContact,
        specialRequests: this.booking.specialRequests
      },
      participantDetails: this.participants,
      paymentPlan: this.paymentPlan,
      walletAmountApplied: this.walletDeductionAmount,
      referralReward: this.useReferralReward && this.referralRewardDiscountAmount > 0 ? {
        useFreeSlot: true,
        slots: this.referralRewardSlotsToUse
      } : undefined
    };
    // Save to service
    this.bookingService.setBookingData(bookingData).subscribe({
      next: function () {
        var _ref = (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this.isProcessingPayment = false;
          if (res.success == true) {
            _this.paymentSuccessState = true;
            _this.stopUpiTimer();
            setTimeout(() => {
              _this.showPaymentModal = false;
              _this.resetBooking();
              _this.successMessage = "";
              _this.isSubmitting = false;
              _this.router.navigateByUrl("/my-bookings");
            }, 2000);
            return;
          }
          const message = _this.formatBookingErrorMessage(String(res?.message || res?.data?.message || "Booking failed"));
          _this.showTransientMessage("error", message, 2500);
          _this.isSubmitting = false;
          _this.isProcessingPayment = false;
        });
        return function next(_x) {
          return _ref.apply(this, arguments);
        };
      }(),
      error: function () {
        var _ref2 = (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_error) {
          _this.isSubmitting = false;
          _this.isProcessingPayment = false;
          const message = _this.formatBookingErrorMessage(String(_error?.error?.message || _error?.message || "Something went wrong while booking. Please try again."));
          _this.showTransientMessage("error", message, 2500);
        });
        return function error(_x2) {
          return _ref2.apply(this, arguments);
        };
      }()
    });
  }
  formatBookingErrorMessage(message) {
    const text = String(message || "").trim();
    const lower = text.toLowerCase();
    if (lower.includes("active booking for this trek") || lower.includes("multiple simultaneous bookings")) {
      return text;
    }
    if (lower.includes("active booking for this trek in this month") || lower.includes("complete or cancel the current batch")) {
      return "You already have an active booking for this trek. Please complete or cancel your current trip before booking again.";
    }
    if (lower.includes("completed this trek") || lower.includes("duplicate_booking")) {
      return "You have already completed this trek. Each trek can only be booked once.";
    }
    return text || "Something went wrong while booking. Please try again.";
  }
  showTransientMessage(type, message, durationMs = 2500) {
    if (type === "success") {
      this.successMessage = message;
      this.errorMessage = "";
      if (this.successMessageTimer) clearTimeout(this.successMessageTimer);
      this.successMessageTimer = setTimeout(() => {
        this.successMessage = "";
      }, durationMs);
      return;
    }
    this.errorMessage = message;
    this.successMessage = "";
    if (this.errorMessageTimer) clearTimeout(this.errorMessageTimer);
    this.errorMessageTimer = setTimeout(() => {
      this.errorMessage = "";
    }, durationMs);
  }
  resetBooking() {
    this.currentStep = 1;
    this.booking = {
      batchId: "",
      date: "",
      participants: 1,
      name: "",
      email: "",
      phone: "",
      emergencyContact: "",
      specialRequests: ""
    };
    this.participants = [];
    this.initializeParticipants();
    this.addOns = this.addOns.map(addon => ({
      ...addon,
      selected: false,
      quantity: 0
    }));
    this.couponCode = "";
    this.couponValidationError = "";
    this.couponValidationSuccess = "";
    this.couponDiscountAmount = 0;
    this.isCouponValidating = false;
    this.referralCodeInput = "";
    this.referralValidationError = "";
    this.referralValidationSuccess = "";
    this.referralDiscountAmount = 0;
    this.referralRewardDiscountAmount = 0;
    this.isReferralValidating = false;
    this.useReferralReward = false;
    this.referralRewardSlotsToUse = 1;
  }
  decrementParticipants() {
    if (!this.selectedBatch) return;
    if (this.booking.participants > 1) {
      this.booking.participants--;
      this.handleParticipantCountChange();
    }
  }
  incrementParticipants() {
    if (!this.selectedBatch) return;
    if (this.booking.participants < this.selectedBatch.availableSlots) {
      this.booking.participants++;
      this.handleParticipantCountChange();
    }
  }
  handleParticipantCountChange() {
    this.initializeParticipants();
    this.syncAddOnQuantitiesWithParticipants();
    this.scheduleCouponValidation();
    this.onParticipantContextChange();
  }
  onParticipantContextChange() {
    if (this.referralCodeInput.trim()) {
      this.referralDiscountAmount = 0;
      this.referralValidationSuccess = "";
      this.referralValidationError = "Participant count changed. Tap Apply to refresh referral savings.";
    }
    this.updateReferralRewardDiscount();
  }
  get participantCountOptions() {
    return Array.from({
      length: (this.booking.participants || 1) + 1
    }, (_, index) => index);
  }
  resolveImageUrl(imagePath) {
    return this.media.resolve(imagePath || null);
  }
  get tourDetailsRouteRef() {
    return this.routeRef || this.publicRouteId.encode(this.trekId) || String(this.trekId || '');
  }
  onAddonQuantityChange(addon, value) {
    const numericValue = Math.max(0, Math.min(this.booking.participants, Number(value) || 0));
    addon.quantity = numericValue;
    addon.selected = numericValue > 0;
    this.scheduleCouponValidation();
    this.updateReferralRewardDiscount();
  }
  syncAddOnQuantitiesWithParticipants() {
    this.addOns.forEach(addon => {
      if (addon.quantity > this.booking.participants) {
        addon.quantity = this.booking.participants;
      }
      addon.selected = addon.quantity > 0;
    });
    this.scheduleCouponValidation();
    this.updateReferralRewardDiscount();
  }
  isValidPhone(phone) {
    const digits = String(phone || "").replace(/\D/g, "");
    return digits.length === 10;
  }
  validateParticipantPhone(participant, isPrimary = false) {
    participant.phoneError = "";
    // Primary participant phone is auto-filled from contact info in Step 2.
    if (isPrimary) return;
    if (!this.isValidPhone(participant.phone)) {
      participant.phoneError = "Phone number must be exactly 10 digits";
    }
  }
  onCouponCodeInput(value) {
    this.couponCode = String(value || "").toUpperCase().replace(/\s+/g, "");
    this.couponValidationError = "";
    this.couponValidationSuccess = "";
    this.couponDiscountAmount = 0;
    this.scheduleCouponValidation();
    this.updateReferralRewardDiscount();
  }
  scheduleCouponValidation() {
    if (this.couponValidationTimer) {
      clearTimeout(this.couponValidationTimer);
      this.couponValidationTimer = null;
    }
    if (this.currentStep !== 4 || !this.couponCode.trim()) {
      this.isCouponValidating = false;
      if (!this.couponCode.trim()) {
        this.couponValidationError = "";
        this.couponValidationSuccess = "";
        this.couponDiscountAmount = 0;
      }
      return;
    }
    this.couponValidationTimer = setTimeout(() => {
      this.validateCouponRealtime();
    }, 450);
  }
  copyCouponCode(code) {
    var _this2 = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const value = String(code || "").trim().toUpperCase();
      if (!value) return;
      try {
        if (navigator?.clipboard?.writeText) {
          yield navigator.clipboard.writeText(value);
        } else {
          const input = document.createElement("input");
          input.value = value;
          document.body.appendChild(input);
          input.select();
          document.execCommand("copy");
          document.body.removeChild(input);
        }
        _this2.onCouponCodeInput(value);
        _this2.showTransientMessage("success", `Coupon ${value} copied`, 1800);
      } catch {
        _this2.showTransientMessage("error", "Unable to copy coupon", 1800);
      }
    })();
  }
  getCouponLabel(coupon) {
    if (coupon.discountType === "percentage") {
      return `${Number(coupon.discountValue)}% OFF`;
    }
    return `₹${Number(coupon.discountValue)} OFF`;
  }
  validateCouponRealtime() {
    if (!this.selectedBatch || !this.couponCode.trim()) return;
    this.isCouponValidating = true;
    this.couponValidationError = "";
    this.couponValidationSuccess = "";
    const userId = this.tokenService.getUserId();
    const payload = {
      userId,
      trekId: this.trekId,
      participants: this.booking.participants,
      price: Number(this.selectedBatch.price || 0),
      couponCode: this.couponCode.trim().toUpperCase(),
      selectedAddOns: this.addOns.filter(addon => addon.quantity > 0).map(addon => ({
        id: addon.id,
        price: addon.price,
        quantity: addon.quantity,
        selected: addon.quantity > 0
      }))
    };
    this.bookingService.validateCoupon(payload).subscribe({
      next: res => {
        this.isCouponValidating = false;
        const valid = !!res?.data?.valid;
        if (!res?.success || !valid) {
          this.couponDiscountAmount = 0;
          this.couponValidationError = String(res?.data?.message || res?.message || "Invalid coupon");
          return;
        }
        this.couponDiscountAmount = Number(res?.data?.discountAmount || 0);
        this.couponValidationSuccess = this.couponDiscountAmount > 0 ? `Coupon applied. You save ₹${this.couponDiscountAmount.toFixed(0)}` : String(res?.data?.message || "Coupon applied");
        this.couponValidationError = "";
        this.updateReferralRewardDiscount();
      },
      error: () => {
        this.isCouponValidating = false;
        this.couponDiscountAmount = 0;
        this.couponValidationError = "Unable to validate coupon right now";
      }
    });
  }
  ensureUserLoggedInForReferral() {
    if (this.isUserLoggedIn) {
      return true;
    }
    this.showTransientMessage("error", "Please log in to access referral benefits.", 2500);
    return false;
  }
  loadReferralSummary(force = false) {
    const userId = this.tokenService.getUserId();
    if (!userId) {
      this.referralSummary = null;
      this.referralSummaryError = "";
      this.referralSummaryLoadedForUser = null;
      return;
    }
    if (!force && this.referralSummary && this.referralSummaryLoadedForUser === userId) {
      return;
    }
    this.isReferralSummaryLoading = true;
    this.referralSummaryError = "";
    this.bookingService.getReferralSummary(userId).subscribe({
      next: res => {
        this.isReferralSummaryLoading = false;
        if (res?.success && res?.data) {
          this.referralSummary = res.data;
          this.referralSummaryLoadedForUser = userId;
          const available = Math.max(0, this.referralSummary?.freeSlotsAvailable || 0);
          if (available > 0) {
            this.referralRewardSlotsToUse = Math.min(Math.max(1, this.referralRewardSlotsToUse || 1), available);
          } else {
            this.referralRewardSlotsToUse = 1;
          }
          this.updateReferralRewardDiscount();
          return;
        }
        this.referralSummaryError = String(res?.message || "Unable to load referral details");
      },
      error: () => {
        this.isReferralSummaryLoading = false;
        this.referralSummaryError = "Unable to load referral details right now";
      }
    });
  }
  onReferralCodeInputChange(value) {
    this.referralCodeInput = String(value || "").toUpperCase().replace(/\s+/g, "");
    this.referralValidationError = "";
    this.referralValidationSuccess = "";
    this.referralDiscountAmount = 0;
  }
  applyReferralCode() {
    if (!this.ensureUserLoggedInForReferral() || !this.selectedBatch) {
      return;
    }
    const code = this.referralCodeInput.trim().toUpperCase();
    if (!code) {
      this.referralValidationError = "Enter a referral code to apply.";
      return;
    }
    this.isReferralValidating = true;
    this.referralValidationError = "";
    this.referralValidationSuccess = "";
    const payload = {
      referralCode: code,
      userId: this.tokenService.getUserId(),
      participants: this.booking.participants
    };
    this.bookingService.validateReferralCode(payload).subscribe({
      next: res => {
        this.isReferralValidating = false;
        if (!res?.success || !res?.data?.valid) {
          const message = String(res?.data?.message || res?.message || "Invalid referral code");
          this.handleReferralCodeFailure(message);
          return;
        }
        this.referralDiscountAmount = Number(res?.data?.discountAmount || 0);
        this.referralValidationSuccess = this.referralDiscountAmount > 0 ? `Referral applied. You save ₹${this.referralDiscountAmount.toFixed(0)}` : String(res?.data?.message || "Referral applied");
        this.referralValidationError = "";
        if (this.useReferralReward) {
          this.useReferralReward = false;
          this.referralRewardDiscountAmount = 0;
        }
        this.updateReferralRewardDiscount();
      },
      error: () => {
        this.isReferralValidating = false;
        this.handleReferralCodeFailure("Unable to validate referral code right now");
      }
    });
  }
  clearReferralCode(silent = false) {
    this.referralCodeInput = "";
    this.referralDiscountAmount = 0;
    this.referralValidationSuccess = "";
    if (!silent) {
      this.referralValidationError = "";
    }
    this.updateReferralRewardDiscount();
  }
  handleReferralCodeFailure(message) {
    this.referralDiscountAmount = 0;
    this.referralValidationSuccess = "";
    this.referralValidationError = message;
    this.updateReferralRewardDiscount();
  }
  onReferralRewardToggle() {
    if (!this.useReferralReward) {
      this.referralRewardDiscountAmount = 0;
      return;
    }
    if (!this.ensureUserLoggedInForReferral()) {
      this.useReferralReward = false;
      return;
    }
    if (!this.canUseReferralReward) {
      this.useReferralReward = false;
      if (this.referralDiscountAmount > 0) {
        this.showTransientMessage("error", "Remove referral code to use a free slot.", 2500);
      }
      return;
    }
    if (this.referralDiscountAmount > 0) {
      this.clearReferralCode(true);
    }
    this.updateReferralRewardDiscount();
  }
  adjustReferralRewardSlots(delta) {
    if (!this.canUseReferralReward) return;
    this.setReferralRewardSlots(this.referralRewardSlotsToUse + delta);
  }
  setReferralRewardSlots(value) {
    if (!this.referralSummary) return;
    const available = Math.max(0, this.referralSummary.freeSlotsAvailable || 0);
    if (available === 0) {
      this.referralRewardSlotsToUse = 1;
      this.referralRewardDiscountAmount = 0;
      return;
    }
    const normalized = Math.max(1, Math.min(available, Number(value) || 1));
    this.referralRewardSlotsToUse = normalized;
    this.updateReferralRewardDiscount();
  }
  updateReferralRewardDiscount() {
    if (!this.useReferralReward || !this.referralSummary || !this.selectedBatch || !this.canUseReferralReward) {
      this.referralRewardDiscountAmount = 0;
      return;
    }
    const unitPrice = Number(this.selectedBatch?.price || 0);
    if (!unitPrice) {
      this.referralRewardDiscountAmount = 0;
      return;
    }
    const available = Math.max(0, this.referralSummary.freeSlotsAvailable || 0);
    this.referralRewardSlotsToUse = Math.min(Math.max(1, this.referralRewardSlotsToUse || 1), available || 1);
    const rawDiscount = unitPrice * this.referralRewardSlotsToUse;
    const remaining = Math.max(this.totalPrice - this.couponDiscountAmount - this.referralDiscountAmount, 0);
    this.referralRewardDiscountAmount = Math.min(rawDiscount, remaining);
  }
  copyReferralCode(code) {
    var _this3 = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const value = String(code || _this3.referralCodeForShare || "").trim();
      if (!value) return;
      try {
        if (navigator?.clipboard?.writeText) {
          yield navigator.clipboard.writeText(value);
        } else {
          const input = document.createElement("input");
          input.value = value;
          document.body.appendChild(input);
          input.select();
          document.execCommand("copy");
          document.body.removeChild(input);
        }
        _this3.showTransientMessage("success", `Referral code ${value} copied`, 1800);
      } catch {
        _this3.showTransientMessage("error", "Unable to copy referral code", 2000);
      }
    })();
  }
  validateId(participant) {
    participant.idError = '';
    if (!participant.idType || !participant.idNumber) return;
    const raw = participant.idNumber.replace(/\s/g, '');
    const idType = this.normalizeIdType(participant.idType);
    switch (idType) {
      case 'Aadhar':
        if (!/^\d{12}$/.test(raw)) participant.idError = 'Aadhaar must be exactly 12 digits';
        break;
      case 'PAN':
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(raw)) participant.idError = 'Invalid PAN format (e.g. ABCDE1234F)';
        break;
      case 'Passport':
        if (!/^[A-Z][0-9]{7}$/.test(raw)) participant.idError = 'Invalid Passport format (e.g. A1234567)';
        break;
      case 'Driving License':
        if (raw.length < 10) participant.idError = 'Driving License must be at least 10 characters';
        break;
      case 'Voter ID':
        if (!/^[A-Z]{3}[0-9]{7}$/.test(raw)) participant.idError = 'Invalid Voter ID format (e.g. ABC1234567)';
        break;
    }
  }
  formatIdInput(participant) {
    if (!participant.idType) return;
    let value = participant.idNumber || '';
    const idType = this.normalizeIdType(participant.idType);
    switch (idType) {
      case 'Aadhar':
        // Keep only digits, max 12, format as XXXX XXXX XXXX
        const digits = value.replace(/\D/g, '').substring(0, 12);
        participant.idNumber = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
        break;
      case 'PAN':
        participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 10);
        break;
      case 'Passport':
        participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 8);
        break;
      case 'Driving License':
        participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 15);
        break;
      case 'Voter ID':
        participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 10);
        break;
    }
    this.validateId(participant);
  }
  getIdMaxLength(idType) {
    switch (this.normalizeIdType(idType)) {
      case 'Aadhar':
        return 14;
      // 12 digits + 2 spaces
      case 'PAN':
        return 10;
      case 'Passport':
        return 8;
      case 'Driving License':
        return 15;
      case 'Voter ID':
        return 10;
      default:
        return 20;
    }
  }
  normalizeIdType(idType) {
    const value = (idType || '').trim().toLowerCase();
    if (value === 'aadhar' || value === 'aadhaar') return 'Aadhar';
    if (value === 'pan' || value === 'pan card') return 'PAN';
    if (value === 'passport') return 'Passport';
    if (value === 'driving license' || value === 'driving licence') return 'Driving License';
    if (value === 'voter id' || value === 'voterid') return 'Voter ID';
    return idType;
  }
  validateAge(participant) {
    participant.ageError = '';
    if (participant.age === null) return;
    if (participant.age < 12) {
      participant.ageError = 'Minimum age is 12 years';
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function BookingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BookingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_booking__WEBPACK_IMPORTED_MODULE_10__.Booking), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_tour_details_tour_details__WEBPACK_IMPORTED_MODULE_11__.TourDetails), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_auth__WEBPACK_IMPORTED_MODULE_12__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_13__.AuthModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_token_service__WEBPACK_IMPORTED_MODULE_14__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_auth_sessionexpired_sessionexpired__WEBPACK_IMPORTED_MODULE_15__.Sessionexpired), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_dropdown_service__WEBPACK_IMPORTED_MODULE_16__.DropdownService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_public_route_id_service__WEBPACK_IMPORTED_MODULE_17__.PublicRouteIdService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_media_service__WEBPACK_IMPORTED_MODULE_18__.MediaService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_trek_operations_service__WEBPACK_IMPORTED_MODULE_19__.TrekOperationsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_site_settings_service__WEBPACK_IMPORTED_MODULE_20__.SiteSettingsService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: BookingComponent,
    selectors: [["app-booking"]],
    decls: 32,
    vars: 27,
    consts: [["referralLoginPrompt", ""], [1, "checkout-shell"], ["class", "left-panel", 4, "ngIf"], [1, "right-panel"], [1, "mobile-nav"], [1, "mobile-back", 3, "routerLink"], [1, "mobile-title"], [1, "mobile-nav-spacer"], [1, "mobile-steps"], [1, "mob-step"], [1, "mob-num"], ["class", "bi bi-check-lg", 4, "ngIf"], [4, "ngIf"], ["class", "loader-overlay", 4, "ngIf"], ["class", "form-area", 4, "ngIf"], ["class", "payment-modal-backdrop", 3, "click", 4, "ngIf"], [1, "left-panel"], [1, "trek-thumb", 2, "position", "relative"], [1, "panel-nav"], [1, "back-btn", 3, "routerLink"], ["loading", "lazy", "decoding", "async", 3, "src", "alt"], [1, "trek-info"], [1, "trek-label"], [1, "trek-name"], [1, "trek-location"], [1, "bi", "bi-geo-alt-fill", "text-success", "me-1"], [1, "panel-divider"], [1, "stepper"], [1, "step-row"], [1, "step-node"], [1, "step-text"], [1, "step-title"], ["class", "step-sub", 4, "ngIf"], [1, "step-sub"], ["class", "price-summary", 4, "ngIf"], ["class", "referral-summary-card", 4, "ngIf", "ngIfElse"], [1, "bi", "bi-check-lg"], [1, "price-summary"], [1, "price-row"], [1, "price-label"], [1, "price-amt"], [4, "ngFor", "ngForOf"], [1, "price-row", "total"], ["class", "price-row discount", 4, "ngIf"], ["class", "price-row due", 4, "ngIf"], ["class", "price-row", 4, "ngIf"], [1, "price-row", "discount"], [1, "price-row", "due"], [1, "referral-summary-card"], [1, "ref-card-header"], [1, "ref-card-eyebrow"], [1, "ref-card-title"], ["type", "button", 1, "ref-card-copy", 3, "click", "disabled"], ["class", "ref-card-body", 4, "ngIf"], ["class", "ref-card-body error", 4, "ngIf"], [1, "ref-card-body"], [1, "ref-metrics"], [1, "ref-metric"], [1, "ref-metric-label"], [1, "ref-metric-value"], ["class", "ref-metric", 4, "ngIf"], [1, "ref-card-note"], [1, "ref-card-body", "error"], ["type", "button", 1, "ref-card-refresh", 3, "click"], [1, "referral-summary-card", "muted"], [1, "loader-overlay"], [1, "loader-ring"], [1, "loader-text"], [1, "form-area"], [1, "bottom-bar"], [1, "bottom-bar-main"], ["type", "button", "class", "btn-back", 3, "click", 4, "ngIf"], ["class", "bar-price", 4, "ngIf"], ["type", "button", "class", "btn-next", 3, "disabled", "title", "click", 4, "ngIf"], ["type", "button", "class", "btn-next btn-pay", 3, "disabled", "click", 4, "ngIf"], ["class", "bottom-incomplete-hint", 4, "ngIf"], ["class", "bottom-error", 4, "ngIf"], ["class", "bottom-flash success", 4, "ngIf"], ["class", "bottom-flash error", 4, "ngIf"], [1, "step-headline"], [1, "step-eyebrow"], [1, "step-h1"], [1, "step-desc"], [2, "margin-bottom", "28px"], [2, "font-size", "0.75rem", "font-weight", "700", "letter-spacing", "0.04em", "color", "var(--body)", "display", "block", "margin-bottom", "10px"], [1, "req"], [1, "batch-options"], ["class", "batch-option", 3, "selected", "disabled", 4, "ngFor", "ngForOf"], ["class", "form-row", 4, "ngIf"], ["style", "\n            margin-top: 8px;\n            margin-bottom: 12px;\n            font-size: 0.75rem;\n            font-weight: 700;\n            letter-spacing: 0.1em;\n            text-transform: uppercase;\n            color: var(--muted);\n          ", 4, "ngIf"], [1, "addons-grid"], ["class", "addon-card", 3, "checked", 4, "ngFor", "ngForOf"], [1, "batch-option"], ["type", "radio", "name", "batch", "checked", "", 3, "ngModelChange", "change", "value", "ngModel", "disabled"], [1, "batch-radio"], ["style", "\n                    width: 8px;\n                    height: 8px;\n                    border-radius: 50%;\n                    background: #3d6b4a;\n                  ", 4, "ngIf"], [1, "batch-info"], [1, "batch-dates"], [1, "batch-meta"], [1, "batch-price"], [1, "batch-status"], [2, "width", "8px", "height", "8px", "border-radius", "50%", "background", "#3d6b4a"], [1, "form-row"], [1, "field"], [1, "counter-row"], ["type", "button", 1, "counter-btn", 3, "click"], [1, "counter-val"], [1, "field-hint"], ["readonly", "", 1, "form-input", 3, "value"], [2, "margin-top", "8px", "margin-bottom", "12px", "font-size", "0.75rem", "font-weight", "700", "letter-spacing", "0.1em", "text-transform", "uppercase", "color", "var(--muted)"], [1, "addon-card"], [1, "addon-top"], [2, "flex", "1", "padding-right", "8px"], [1, "addon-name"], ["class", "addon-cat-tag", "style", "font-size: 11px; opacity: 0.7; margin-top: 2px;", 4, "ngIf"], [1, "addon-check"], [1, "addon-price"], [1, "field", 2, "margin-top", "10px"], [2, "margin-bottom", "6px"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "addon-cat-tag", 2, "font-size", "11px", "opacity", "0.7", "margin-top", "2px"], [3, "ngValue"], ["placeholder", "Enter full name", "disabled", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "your@email.com", "disabled", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "+91 XXXXX XXXXX", "minlength", "10", "maxlength", "10", "onlyNumber", "", "disabled", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "+91 XXXXX XXXXX", "minlength", "10", "maxlength", "10", "onlyNumber", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-row", "full"], ["placeholder", "Any allergies, dietary restrictions, or special requirements\u2026", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["class", "info-bar", 4, "ngIf"], ["class", "participant-block", 4, "ngFor", "ngForOf"], [1, "info-bar"], [1, "bi", "bi-exclamation-triangle-fill", "text-warning", "me-1"], [1, "participant-block"], [1, "participant-header"], [1, "p-num"], [1, "p-name"], ["class", "p-badge", 4, "ngIf"], [1, "participant-fields"], ["placeholder", "Enter full name", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["class", "field-hint", 4, "ngIf"], ["type", "number", "placeholder", "e.g. 28", "min", "12", "max", "100", 1, "form-input", 3, "ngModelChange", "input", "ngModel"], ["class", "error", 4, "ngIf"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["placeholder", "Enter ID number", 1, "form-input", 3, "ngModelChange", "input", "ngModel", "maxlength"], ["type", "tel", "placeholder", "+91 XXXXX XXXXX", "minlength", "10", "maxlength", "10", "onlyNumber", "", 1, "form-input", 3, "ngModelChange", "input", "ngModel", "disabled"], [1, "field", "full"], [1, "form-select", "mb-2", 3, "ngModelChange", "ngModel"], ["placeholder", "Additional notes: allergies, regular medications, or recent injuries (optional)\u2026", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "p-badge"], [1, "error"], [3, "value"], [1, "review-block"], [1, "review-header"], [1, "review-header-title"], [1, "edit-link", 3, "click"], [1, "review-body"], [1, "review-row"], [1, "review-key"], [1, "review-val"], [1, "p-table"], [1, "price-breakdown"], [1, "pb-row"], [1, "pb-label"], [1, "pb-val"], [1, "pb-row", 2, "font-size", "0.85rem", "color", "#64748b"], [1, "bi", "bi-tree-fill", "text-success", "me-1"], [1, "bi", "bi-shield-check", "text-primary", "me-1"], [1, "pb-row", "total"], ["class", "pb-row discount", 4, "ngIf"], [1, "pb-row", "total", "payable"], [1, "bi", "bi-credit-card", "me-1"], ["class", "pb-row", "style", "font-size: 0.85rem; color: #d97706; background: #fffbeb; padding: 6px 10px; border-radius: 6px; margin-top: 6px;", 4, "ngIf"], [1, "payment-plan-section"], [1, "plan-section-header"], [1, "bi", "bi-credit-card-2-front", "me-1"], [1, "payment-plan-grid"], [1, "plan-card", 3, "click"], [1, "plan-card-top"], [1, "bi", "bi-lightning-charge-fill", "text-success", "me-1"], ["class", "bi bi-check2 text-success fw-bold", 4, "ngIf"], [1, "plan-card-sub"], [1, "plan-card-amount", "amount-full"], [1, "bi", "bi-pie-chart-fill", "text-primary", "me-1"], ["class", "bi bi-check2 text-primary fw-bold", 4, "ngIf"], [1, "plan-card-amount", "amount-deposit"], ["class", "wallet-widget", 4, "ngIf"], [1, "form-row", 2, "margin-top", "16px"], ["placeholder", "Enter coupon code (optional)", 1, "form-input", 2, "text-transform", "uppercase", 3, "ngModelChange", "ngModel"], ["class", "field-hint", "style", "color: #2d7a43", 4, "ngIf"], [1, "form-row", "referral-row"], [1, "referral-input-row"], ["placeholder", "Enter referral code (optional)", 1, "form-input", 2, "text-transform", "uppercase", 3, "ngModelChange", "disabled", "ngModel"], ["type", "button", 1, "btn-apply", 3, "click", "disabled"], ["type", "button", "class", "btn-clear", 3, "click", 4, "ngIf"], ["class", "field-hint success", 4, "ngIf"], ["class", "field-hint error", 4, "ngIf"], ["class", "referral-reward-panel", 4, "ngIf"], ["class", "coupon-list-block", 4, "ngIf"], [1, "terms-check", "mt-2"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "terms-text"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["class", "primary-tag", 4, "ngIf"], [1, "primary-tag"], ["class", "pb-row", 4, "ngIf"], [1, "pb-row", "discount"], [1, "pb-label", 2, "color", "#059669", "font-weight", "600"], [1, "bi", "bi-wallet2", "me-1"], [1, "pb-val", 2, "color", "#059669", "font-weight", "700"], [1, "pb-row", 2, "font-size", "0.85rem", "color", "#d97706", "background", "#fffbeb", "padding", "6px 10px", "border-radius", "6px", "margin-top", "6px"], [1, "bi", "bi-hourglass-split", "me-1"], [1, "pb-val", "font-bold"], [1, "bi", "bi-check2", "text-success", "fw-bold"], [1, "bi", "bi-check2", "text-primary", "fw-bold"], [1, "wallet-widget"], [1, "wallet-info"], [1, "bi", "bi-wallet2", "text-success", "wallet-icon"], [1, "wallet-title"], [1, "wallet-balance"], [1, "wallet-action"], ["type", "checkbox", 1, "wallet-checkbox", 3, "ngModelChange", "ngModel"], [1, "field-hint", 2, "color", "#2d7a43"], ["type", "button", 1, "btn-clear", 3, "click"], [1, "field-hint", "success"], [1, "field-hint", "error"], [1, "referral-reward-panel"], [1, "reward-header"], [1, "reward-title"], ["class", "reward-sub", 4, "ngIf"], [1, "switch"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel", "disabled"], [1, "slider"], ["class", "reward-body", 4, "ngIf"], [1, "reward-sub"], [1, "reward-body"], [1, "slot-stepper"], ["type", "button", 3, "click"], [1, "slot-value"], [1, "coupon-list-block"], [1, "coupon-list-title"], [1, "coupon-list-grid"], ["class", "coupon-chip", 3, "used", 4, "ngFor", "ngForOf"], [1, "coupon-chip"], [1, "coupon-top"], [1, "coupon-code"], [1, "coupon-badge"], [1, "coupon-meta"], ["type", "button", 1, "coupon-copy-btn", 3, "click", "disabled"], ["type", "button", 1, "btn-back", 3, "click"], [1, "bar-price"], [1, "bar-price-label"], [1, "bar-price-amount"], [1, "bar-price-sub"], ["type", "button", 1, "btn-next", 3, "click", "disabled", "title"], [1, "btn-arrow"], ["type", "button", 1, "btn-next", "btn-pay", 3, "click", "disabled"], [1, "btn-pay-icon"], [1, "bi", "bi-shield-lock-fill"], [1, "bottom-incomplete-hint"], [1, "bi", "bi-info-circle-fill", "me-1"], [1, "bottom-error"], [1, "bottom-flash", "success"], [1, "bi", "bi-check-circle-fill", "text-success", "me-1"], [1, "bottom-flash", "error"], [1, "bi", "bi-exclamation-triangle-fill", "text-danger", "me-1"], [1, "payment-modal-backdrop", 3, "click"], [1, "payment-modal-sheet", 3, "click"], [1, "pay-modal-header"], [1, "pay-header-left"], [1, "pay-brand"], [1, "pay-shield-icon"], [1, "pay-title"], [1, "pay-subtitle"], [1, "pay-header-right"], [1, "pay-amount-pill"], [1, "pay-amount-lbl"], [1, "pay-amount-val"], ["type", "button", 1, "btn-close-pay", 3, "click", "disabled"], [1, "bi", "bi-x-lg"], [1, "pay-order-strip"], [1, "pay-order-meta"], [1, "meta-dot"], ["class", "pay-plan-badge", 4, "ngIf"], ["class", "pay-modal-body", 4, "ngIf"], ["class", "pay-success-pane", 4, "ngIf"], [1, "pay-modal-footer"], [1, "trust-icons"], [1, "bi", "bi-shield-check", "me-1"], [1, "bi", "bi-lock-fill", "me-1"], [1, "bi", "bi-lightning-charge-fill", "me-1"], [1, "pay-plan-badge"], [1, "pay-modal-body"], [1, "pay-methods-nav"], ["type", "button", 1, "pay-method-tab", 3, "click"], [1, "tab-icon-wrap", "upi"], [1, "bi", "bi-qr-code"], [1, "tab-copy"], [1, "tab-name"], [1, "tab-badge"], [1, "tab-icon-wrap", "card"], [1, "bi", "bi-credit-card-2-front"], [1, "tab-sub"], [1, "tab-icon-wrap", "netbank"], [1, "bi", "bi-bank"], [1, "tab-icon-wrap", "wallet"], [1, "bi", "bi-wallet2"], [1, "pay-methods-content"], ["class", "pay-tab-pane", 4, "ngIf"], [1, "pay-tab-pane"], [1, "upi-segmented-switch"], [1, "bi", "bi-qr-code-scan", "me-1"], [1, "bi", "bi-phone", "me-1"], ["class", "upi-qr-box", 4, "ngIf"], ["class", "upi-vpa-box", 4, "ngIf"], [1, "upi-qr-box"], [1, "qr-canvas-wrap"], [1, "qr-frame"], ["viewBox", "0 0 200 200", "width", "160", "height", "160", 1, "qr-svg"], ["width", "200", "height", "200", "fill", "#ffffff", "rx", "10"], ["x", "15", "y", "15", "width", "45", "height", "45", "fill", "#162318", "rx", "4"], ["x", "23", "y", "23", "width", "29", "height", "29", "fill", "#ffffff", "rx", "2"], ["x", "29", "y", "29", "width", "17", "height", "17", "fill", "#162318", "rx", "2"], ["x", "140", "y", "15", "width", "45", "height", "45", "fill", "#162318", "rx", "4"], ["x", "148", "y", "23", "width", "29", "height", "29", "fill", "#ffffff", "rx", "2"], ["x", "154", "y", "29", "width", "17", "height", "17", "fill", "#162318", "rx", "2"], ["x", "15", "y", "140", "width", "45", "height", "45", "fill", "#162318", "rx", "4"], ["x", "23", "y", "148", "width", "29", "height", "29", "fill", "#ffffff", "rx", "2"], ["x", "29", "y", "154", "width", "17", "height", "17", "fill", "#162318", "rx", "2"], ["x", "75", "y", "20", "width", "12", "height", "12", "fill", "#162318"], ["x", "95", "y", "20", "width", "12", "height", "12", "fill", "#162318"], ["x", "115", "y", "25", "width", "12", "height", "12", "fill", "#162318"], ["x", "70", "y", "45", "width", "14", "height", "14", "fill", "#162318"], ["x", "100", "y", "45", "width", "14", "height", "14", "fill", "#162318"], ["x", "20", "y", "75", "width", "14", "height", "14", "fill", "#162318"], ["x", "45", "y", "85", "width", "12", "height", "12", "fill", "#162318"], ["x", "70", "y", "75", "width", "20", "height", "20", "fill", "#22c55e"], ["x", "110", "y", "75", "width", "14", "height", "14", "fill", "#162318"], ["x", "140", "y", "75", "width", "12", "height", "12", "fill", "#162318"], ["x", "165", "y", "80", "width", "14", "height", "14", "fill", "#162318"], ["x", "20", "y", "110", "width", "14", "height", "14", "fill", "#162318"], ["x", "50", "y", "110", "width", "12", "height", "12", "fill", "#162318"], ["x", "80", "y", "110", "width", "14", "height", "14", "fill", "#162318"], ["x", "105", "y", "105", "width", "14", "height", "14", "fill", "#162318"], ["x", "135", "y", "115", "width", "16", "height", "16", "fill", "#162318"], ["x", "165", "y", "110", "width", "14", "height", "14", "fill", "#162318"], ["x", "75", "y", "145", "width", "14", "height", "14", "fill", "#162318"], ["x", "100", "y", "145", "width", "14", "height", "14", "fill", "#162318"], ["x", "130", "y", "145", "width", "14", "height", "14", "fill", "#162318"], ["x", "155", "y", "145", "width", "14", "height", "14", "fill", "#162318"], ["x", "75", "y", "170", "width", "14", "height", "14", "fill", "#162318"], ["x", "110", "y", "165", "width", "14", "height", "14", "fill", "#162318"], ["x", "140", "y", "170", "width", "14", "height", "14", "fill", "#162318"], ["x", "165", "y", "165", "width", "14", "height", "14", "fill", "#162318"], ["cx", "100", "cy", "100", "r", "18", "fill", "#162318", "stroke", "#ffffff", "stroke-width", "2"], ["x", "100", "y", "104", "font-size", "10", "font-weight", "bold", "fill", "#22c55e", "text-anchor", "middle", "font-family", "sans-serif"], [1, "qr-scan-line"], [1, "qr-instructions"], [1, "qr-timer-pill"], [1, "timer-dot"], [1, "qr-hint"], [1, "upi-app-badges"], [1, "app-chip"], ["type", "button", 1, "btn-pay-modal", 3, "click", "disabled"], ["class", "spinner-inline", 4, "ngIf"], [1, "bi", "bi-check2", "me-1"], [1, "spinner-inline"], [1, "upi-vpa-box"], [1, "pay-input-label"], [1, "vpa-input-group"], ["type", "text", "placeholder", "username@okhdfcbank or 9876543210@upi", 1, "pay-input", 3, "ngModelChange", "ngModel"], [1, "vpa-quick-chips"], ["type", "button", 1, "vpa-chip", 3, "click"], [1, "card-form-grid"], [1, "pay-field", "full"], [1, "card-input-wrap"], ["type", "text", "placeholder", "4532 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 8892", "maxlength", "19", 1, "pay-input", 3, "ngModelChange", "input", "ngModel"], [1, "card-brand-badge"], ["type", "text", "placeholder", "Name as printed on card", 1, "pay-input", 3, "ngModelChange", "ngModel"], [1, "pay-field", "half"], ["type", "text", "placeholder", "MM / YY", "maxlength", "5", 1, "pay-input", 3, "ngModelChange", "input", "ngModel"], ["type", "password", "placeholder", "\u2022\u2022\u2022", "maxlength", "4", 1, "pay-input", 3, "ngModelChange", "ngModel"], [1, "pay-save-card"], [1, "banks-grid"], ["type", "button", 1, "bank-pill", 3, "click"], [1, "bank-logo-icon"], [1, "pay-field", "full", 2, "margin-top", "14px"], [1, "pay-select", 3, "ngModelChange", "ngModel"], ["value", "HDFC"], ["value", "SBI"], ["value", "ICICI"], ["value", "AXIS"], ["value", "Kotak"], ["value", "PNB"], ["value", "Canara"], ["value", "Bank of Baroda"], ["value", "IndusInd"], ["value", "Union"], ["value", "Karnataka Bank"], [1, "wallets-list"], [1, "wallet-row"], ["type", "radio", "name", "wallet", "value", "amazonpay", 3, "ngModelChange", "ngModel"], [1, "wallet-icon"], [1, "bi", "bi-wallet2", "text-warning"], ["type", "radio", "name", "wallet", "value", "paytm", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-phone", "text-info"], ["type", "radio", "name", "wallet", "value", "phonepe", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-credit-card", "text-primary"], [1, "pay-success-pane"], [1, "pay-success-circle"], [1, "pay-success-lead"], [1, "pay-success-badge"], [1, "pay-redirect-hint"]],
    template: function BookingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, BookingComponent_aside_1_Template, 55, 34, "aside", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 3)(3, "div", 4)(4, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\u2190 Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Book Your Trek");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, BookingComponent_i_12_Template, 1, 0, "i", 11)(13, BookingComponent_span_13_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " Batch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 9)(16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, BookingComponent_i_17_Template, 1, 0, "i", 11)(18, BookingComponent_span_18_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 9)(21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, BookingComponent_i_22_Template, 1, 0, "i", 11)(23, BookingComponent_span_23_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, " Participants ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 9)(26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, " Review ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, BookingComponent_div_29_Template, 4, 0, "div", 13)(30, BookingComponent_div_30_Template, 15, 12, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, BookingComponent_div_31_Template, 48, 16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.trek);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](25, _c0, ctx.tourDetailsRouteRef));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("completed", ctx.currentStep > 1)("active", ctx.currentStep === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currentStep > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currentStep <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("completed", ctx.currentStep > 2)("active", ctx.currentStep === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currentStep > 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currentStep <= 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("completed", ctx.currentStep > 3)("active", ctx.currentStep === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currentStep > 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currentStep <= 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", ctx.currentStep === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showPaymentModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHrefDelegate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _shared_Only_number_directive__WEBPACK_IMPORTED_MODULE_5__.OnlyNumberDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  background: #faf6f0;\n  color: #1a1e1b;\n  -webkit-font-smoothing: antialiased;\n  overflow-x: hidden;\n}\n\n.checkout-shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  min-height: 100vh;\n}\n\n.left-panel[_ngcontent-%COMP%] {\n  background: #162318;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  overflow-y: auto;\n  scrollbar-width: none;\n  display: flex;\n  flex-direction: column;\n}\n.left-panel[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.trek-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  height: 220px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.trek-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  filter: brightness(0.7) saturate(0.8);\n  transition: transform 8s linear;\n}\n.trek-thumb[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to bottom, transparent 30%, #162318 100%);\n}\n\n.panel-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  z-index: 10;\n}\n\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.8);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  padding: 7px 13px;\n  border-radius: 6px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n}\n\n.trek-info[_ngcontent-%COMP%] {\n  padding: 0 28px 24px;\n  margin-top: -20px;\n  position: relative;\n  z-index: 1;\n}\n\n.trek-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: #9dc9aa;\n  margin-bottom: 8px;\n}\n\n.trek-name[_ngcontent-%COMP%] {\n  font-family: \"Clash Display\", sans-serif;\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #fff;\n  line-height: 1.2;\n  letter-spacing: -0.01em;\n  margin-bottom: 6px;\n}\n\n.trek-location[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.45);\n}\n\n.panel-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 0 28px 24px;\n}\n\n.stepper[_ngcontent-%COMP%] {\n  padding: 0 28px;\n  display: flex;\n  flex-direction: column;\n}\n\n.step-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding-bottom: 28px;\n  position: relative;\n}\n.step-row[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n.step-row[_ngcontent-%COMP%]:not(:last-child)::before {\n  content: \"\";\n  position: absolute;\n  left: 13px;\n  top: 28px;\n  bottom: 0;\n  width: 1px;\n  background: rgba(255, 255, 255, 0.08);\n}\n.step-row.completed[_ngcontent-%COMP%]::before {\n  background: rgba(90, 155, 110, 0.35);\n}\n.step-row.active[_ngcontent-%COMP%]::before {\n  background: rgba(90, 155, 110, 0.15);\n}\n\n.step-node[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.25);\n  background: transparent;\n}\n.step-row.completed[_ngcontent-%COMP%]   .step-node[_ngcontent-%COMP%] {\n  background: #5a9b6e;\n  border-color: #5a9b6e;\n  color: #fff;\n}\n.step-row.active[_ngcontent-%COMP%]   .step-node[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: #5a9b6e;\n  color: #5a9b6e;\n  box-shadow: 0 0 0 4px rgba(90, 155, 110, 0.15);\n}\n\n.step-text[_ngcontent-%COMP%] {\n  padding-top: 3px;\n}\n\n.step-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.25);\n  margin-bottom: 2px;\n  transition: color 0.3s;\n}\n.step-row.completed[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.45);\n}\n.step-row.active[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.step-sub[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.18);\n}\n.step-row.active[_ngcontent-%COMP%]   .step-sub[_ngcontent-%COMP%] {\n  color: #9dc9aa;\n}\n\n.price-summary[_ngcontent-%COMP%] {\n  margin: 24px 28px 0;\n  padding: 20px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 10px;\n}\n\n.price-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.4);\n  padding: 6px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  gap: 8px;\n}\n.price-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.price-row.total[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #fff;\n  padding-top: 12px;\n  margin-top: 4px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.price-row.total[_ngcontent-%COMP%]   .price-amt[_ngcontent-%COMP%] {\n  color: #9dc9aa;\n  font-size: 1.15rem;\n}\n.price-row.discount[_ngcontent-%COMP%] {\n  color: #a8d8b7;\n}\n.price-row.discount[_ngcontent-%COMP%]   .price-amt[_ngcontent-%COMP%] {\n  color: #a8d8b7;\n}\n.price-row.due[_ngcontent-%COMP%] {\n  border-top: 1px dashed rgba(255, 255, 255, 0.2);\n  border-bottom: none;\n  margin-top: 4px;\n  padding-top: 10px;\n  font-weight: 600;\n  color: #fff;\n}\n\n.price-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.price-amt[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.65);\n  white-space: nowrap;\n}\n\n.right-panel[_ngcontent-%COMP%] {\n  background: #faf6f0;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.mobile-nav[_ngcontent-%COMP%] {\n  display: none;\n  background: #162318;\n  padding: 12px 20px;\n  align-items: center;\n  justify-content: space-between;\n}\n.mobile-nav[_ngcontent-%COMP%]   .mobile-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  padding: 7px 12px;\n  border-radius: 6px;\n  cursor: pointer;\n  text-decoration: none;\n}\n.mobile-nav[_ngcontent-%COMP%]   .mobile-title[_ngcontent-%COMP%] {\n  font-family: \"Clash Display\", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #fff;\n}\n\n.mobile-steps[_ngcontent-%COMP%] {\n  display: none;\n  background: #ffffff;\n  border-bottom: 1px solid #e4ddd3;\n  padding: 0 20px;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.mobile-steps[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.mob-step[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 14px 16px;\n  border-bottom: 2px solid transparent;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #7e8c80;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  transition: color 0.2s, border-color 0.2s;\n}\n.mob-step[_ngcontent-%COMP%]   .mob-num[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 20px;\n  border-radius: 50%;\n  border: 1.5px solid currentColor;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.65rem;\n  font-weight: 700;\n}\n.mob-step.active[_ngcontent-%COMP%] {\n  color: #3d6b4a;\n  border-bottom-color: #3d6b4a;\n}\n.mob-step.completed[_ngcontent-%COMP%] {\n  color: #5a9b6e;\n  border-bottom-color: #5a9b6e;\n}\n\n.form-area[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 680px;\n  padding-bottom: 30px;\n}\n\n.step-headline[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n\n.step-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #5a9b6e;\n  margin-bottom: 8px;\n}\n\n.step-h1[_ngcontent-%COMP%] {\n  font-family: \"Clash Display\", sans-serif;\n  font-size: clamp(1.5rem, 2.5vw, 2rem);\n  font-weight: 700;\n  color: #1a1e1b;\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n  margin-bottom: 6px;\n}\n\n.step-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #7e8c80;\n  font-weight: 400;\n  line-height: 1.6;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-row.full[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.form-row.three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n.form-row.referral-row[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.field.span2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.field.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  color: #3f4840;\n}\n\n.req[_ngcontent-%COMP%] {\n  color: #d4882c;\n  margin-left: 2px;\n}\n\n.form-input[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 8px;\n  padding: 11px 14px;\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 0.85rem;\n  color: #1a1e1b;\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  width: 100%;\n  appearance: none;\n}\n.form-input[_ngcontent-%COMP%]::placeholder, \n.form-select[_ngcontent-%COMP%]::placeholder, \n.form-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #b8b0a6;\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #3d6b4a;\n  box-shadow: 0 0 0 3px rgba(61, 107, 74, 0.1);\n}\n.form-input[_ngcontent-%COMP%]:disabled, \n.form-select[_ngcontent-%COMP%]:disabled, \n.form-textarea[_ngcontent-%COMP%]:disabled {\n  background: #f3ede4;\n  color: #7e8c80;\n  cursor: not-allowed;\n}\n\n.form-select[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%237e8c80' d='M6 8L1 3h10z'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 12px center;\n  padding-right: 32px;\n}\n\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 88px;\n}\n\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #7e8c80;\n  margin-top: -2px;\n}\n\n.field-hint.success[_ngcontent-%COMP%] {\n  color: #2d7a43;\n  margin-top: 4px;\n}\n\n.field-hint.error[_ngcontent-%COMP%] {\n  color: #c0392b;\n  margin-top: 4px;\n}\n\n.batch-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n.batch-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.batch-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.batch-option.selected[_ngcontent-%COMP%] {\n  border-color: #3d6b4a;\n  box-shadow: 0 0 0 3px rgba(61, 107, 74, 0.08);\n  background: rgba(61, 107, 74, 0.03);\n}\n.batch-option.disabled[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n.batch-radio[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 2px solid #c8bfb3;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: border-color 0.2s;\n}\n.batch-option.selected[_ngcontent-%COMP%]   .batch-radio[_ngcontent-%COMP%] {\n  border-color: #3d6b4a;\n}\n\n.batch-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.batch-dates[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #1a1e1b;\n  margin-bottom: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.batch-meta[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #7e8c80;\n}\n\n.batch-price[_ngcontent-%COMP%] {\n  font-family: \"Clash Display\", sans-serif;\n  font-size: 1.05rem;\n  font-weight: 600;\n  color: #2d5038;\n  white-space: nowrap;\n}\n\n.batch-status[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 4px 8px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n\n.status-ok[_ngcontent-%COMP%] {\n  background: rgba(61, 107, 74, 0.1);\n  color: #3d6b4a;\n}\n\n.status-few[_ngcontent-%COMP%] {\n  background: rgba(212, 136, 44, 0.1);\n  color: #d4882c;\n}\n\n.status-full[_ngcontent-%COMP%] {\n  background: rgba(201, 64, 64, 0.1);\n  color: #c94040;\n}\n\n.counter-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 8px;\n  overflow: hidden;\n  width: fit-content;\n}\n\n.counter-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: transparent;\n  border: none;\n  font-size: 1.1rem;\n  color: #7e8c80;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s, color 0.15s;\n}\n.counter-btn[_ngcontent-%COMP%]:hover {\n  background: #f3ede4;\n  color: #1a1e1b;\n}\n.counter-btn[_ngcontent-%COMP%]:active {\n  background: #e4ddd3;\n}\n\n.counter-val[_ngcontent-%COMP%] {\n  min-width: 48px;\n  text-align: center;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1a1e1b;\n  border-left: 1px solid #e4ddd3;\n  border-right: 1px solid #e4ddd3;\n  line-height: 44px;\n}\n\n.addons-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-bottom: 24px;\n}\n\n.addon-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 10px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  position: relative;\n}\n.addon-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.addon-card.checked[_ngcontent-%COMP%] {\n  border-color: #3d6b4a;\n  box-shadow: 0 0 0 3px rgba(61, 107, 74, 0.08);\n}\n.addon-card.checked[_ngcontent-%COMP%]   .addon-check[_ngcontent-%COMP%] {\n  background: #3d6b4a;\n  border-color: #3d6b4a;\n  color: #fff;\n}\n\n.addon-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 6px;\n}\n\n.addon-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #1a1e1b;\n  line-height: 1.3;\n  flex: 1;\n  margin-right: 8px;\n}\n\n.addon-check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 1.5px solid #c8bfb3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  color: transparent;\n  flex-shrink: 0;\n  transition: all 0.15s;\n}\n\n.addon-price[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #2d5038;\n}\n\n.participant-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n\n.participant-header[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  background: #f3ede4;\n  border-bottom: 1px solid #e4ddd3;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.p-num[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #162318;\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.p-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #1a1e1b;\n}\n\n.p-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  background: rgba(45, 80, 56, 0.1);\n  color: #2d5038;\n  padding: 3px 8px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n\n.participant-fields[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.participant-fields[_ngcontent-%COMP%]   .field.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n\n.info-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: rgba(212, 136, 44, 0.07);\n  border: 1px solid rgba(212, 136, 44, 0.2);\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 20px;\n  font-size: 0.78rem;\n  color: #7a4e14;\n  line-height: 1.5;\n}\n\n.success-bar[_ngcontent-%COMP%], .error-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  margin-bottom: 20px;\n}\n\n.success-bar[_ngcontent-%COMP%] {\n  background: rgba(61, 107, 74, 0.08);\n  border: 1px solid rgba(61, 107, 74, 0.2);\n  color: #2d5038;\n}\n\n.error-bar[_ngcontent-%COMP%] {\n  background: rgba(201, 64, 64, 0.07);\n  border: 1px solid rgba(201, 64, 64, 0.2);\n  color: #c94040;\n}\n\n.alert-close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.5;\n  font-size: 1rem;\n}\n.alert-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.review-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n\n.review-header[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  background: #f3ede4;\n  border-bottom: 1px solid #e4ddd3;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.review-header-title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #7e8c80;\n}\n\n.edit-link[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #3d6b4a;\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.edit-link[_ngcontent-%COMP%]:hover {\n  color: #2d5038;\n}\n\n.review-body[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n}\n\n.review-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 7px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n  font-size: 0.82rem;\n}\n.review-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.review-key[_ngcontent-%COMP%] {\n  color: #7e8c80;\n  font-weight: 400;\n  flex-shrink: 0;\n}\n\n.review-val[_ngcontent-%COMP%] {\n  color: #1a1e1b;\n  font-weight: 600;\n  text-align: right;\n  word-break: break-word;\n}\n\n.p-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.78rem;\n}\n.p-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #7e8c80;\n  padding: 8px 12px;\n  border-bottom: 1px solid #e4ddd3;\n  background: #f3ede4;\n  text-align: left;\n  white-space: nowrap;\n}\n.p-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n  color: #1a1e1b;\n  font-weight: 500;\n  vertical-align: middle;\n}\n.p-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.primary-tag[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  background: rgba(45, 80, 56, 0.1);\n  color: #2d5038;\n  padding: 2px 6px;\n  border-radius: 4px;\n  margin-left: 6px;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n\n.price-breakdown[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n\n.pb-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 1px solid #e4ddd3;\n  font-size: 0.82rem;\n  gap: 12px;\n}\n.pb-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.pb-row.total[_ngcontent-%COMP%] {\n  background: #162318;\n  padding: 16px 20px;\n}\n.pb-row.total[_ngcontent-%COMP%]   .pb-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.55);\n  font-weight: 600;\n}\n.pb-row.total[_ngcontent-%COMP%]   .pb-val[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.1rem;\n  font-weight: 700;\n  font-family: \"Clash Display\", sans-serif;\n}\n.pb-row.discount[_ngcontent-%COMP%] {\n  background: #f5fbf7;\n}\n.pb-row.discount[_ngcontent-%COMP%]   .pb-label[_ngcontent-%COMP%] {\n  color: #24653b;\n}\n.pb-row.discount[_ngcontent-%COMP%]   .pb-val[_ngcontent-%COMP%] {\n  color: #24653b;\n}\n.pb-row.payable[_ngcontent-%COMP%] {\n  background: #eef3ef;\n  font-weight: 700;\n}\n.pb-row.payable[_ngcontent-%COMP%]   .pb-label[_ngcontent-%COMP%] {\n  color: #1a1e1b;\n}\n.pb-row.payable[_ngcontent-%COMP%]   .pb-val[_ngcontent-%COMP%] {\n  color: #1a1e1b;\n}\n\n.pb-label[_ngcontent-%COMP%] {\n  color: #3f4840;\n  font-weight: 500;\n}\n\n.pb-val[_ngcontent-%COMP%] {\n  color: #1a1e1b;\n  font-weight: 700;\n  white-space: nowrap;\n}\n\n.payment-plan-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.plan-section-header[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #4b5563;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n}\n\n.payment-plan-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n\n.plan-card[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-radius: 12px;\n  border: 1.5px solid #e5e7eb;\n  background: #ffffff;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  transition: all 0.2s ease;\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);\n}\n.plan-card.active-full[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #f0fdf4;\n  box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.15);\n}\n.plan-card.active-deposit[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #eff6ff;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);\n}\n.plan-card[_ngcontent-%COMP%]   .plan-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 700;\n  font-size: 0.88rem;\n  color: #1f2937;\n  margin-bottom: 4px;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-card-sub[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #6b7280;\n  line-height: 1.4;\n  margin-bottom: 10px;\n  flex-grow: 1;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-card-amount[_ngcontent-%COMP%] {\n  font-family: \"Clash Display\", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-card-amount.amount-full[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.plan-card[_ngcontent-%COMP%]   .plan-card-amount.amount-deposit[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n\n.wallet-widget[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 14px 16px;\n  background: #f0fdf4;\n  border: 1.5px solid #86efac;\n  border-radius: 12px;\n  margin-bottom: 20px;\n}\n\n.wallet-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n}\n.wallet-info[_ngcontent-%COMP%]   .wallet-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  flex-shrink: 0;\n}\n.wallet-info[_ngcontent-%COMP%]   .wallet-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #166534;\n  line-height: 1.2;\n}\n.wallet-info[_ngcontent-%COMP%]   .wallet-balance[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: #15803d;\n  margin-top: 2px;\n  white-space: normal;\n  word-break: break-word;\n}\n\n.wallet-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #166534;\n  white-space: nowrap;\n  flex-shrink: 0;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.wallet-action[_ngcontent-%COMP%]   .wallet-checkbox[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #16a34a;\n  cursor: pointer;\n}\n\n.mobile-nav-spacer[_ngcontent-%COMP%] {\n  width: 60px;\n  flex-shrink: 0;\n}\n\n.terms-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 20px;\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 10px;\n  cursor: pointer;\n  margin-bottom: 24px;\n  transition: border-color 0.2s;\n}\n.terms-check[_ngcontent-%COMP%]:has(input:checked) {\n  border-color: #3d6b4a;\n}\n.terms-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  accent-color: #3d6b4a;\n  flex-shrink: 0;\n}\n\n.terms-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #3f4840;\n  line-height: 1.6;\n}\n.terms-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3d6b4a;\n  text-decoration: none;\n  font-weight: 600;\n}\n.terms-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.coupon-list-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 12px;\n  padding: 14px;\n  margin-bottom: 16px;\n}\n\n.coupon-list-title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #6a746b;\n  margin-bottom: 10px;\n}\n\n.coupon-list-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.coupon-chip[_ngcontent-%COMP%] {\n  border: 1px dashed #cfd8cf;\n  background: #f7fbf8;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.coupon-chip.used[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.referral-summary-card[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 16px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  background: rgba(255, 255, 255, 0.02);\n  color: #d8f6df;\n}\n.referral-summary-card.muted[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.65);\n  text-align: center;\n}\n.referral-summary-card[_ngcontent-%COMP%]   .ref-card-body[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 0.78rem;\n  line-height: 1.45;\n}\n.referral-summary-card[_ngcontent-%COMP%]   .ref-card-body.error[_ngcontent-%COMP%] {\n  color: #ffd6d6;\n}\n\n.ref-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.ref-card-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.ref-card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #fff;\n  margin-top: 4px;\n}\n\n.ref-card-copy[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  background: transparent;\n  color: #fff;\n  font-size: 0.7rem;\n  padding: 6px 12px;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ref-card-copy[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.ref-card-copy[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.ref-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 10px;\n}\n\n.ref-metric-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.ref-metric-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #fff;\n  margin-top: 2px;\n}\n\n.ref-card-note[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.ref-card-refresh[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  border: none;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  padding: 4px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.referral-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin-top: 8px;\n}\n\n.btn-apply[_ngcontent-%COMP%], \n.btn-clear[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  padding: 10px 16px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.2s;\n  white-space: nowrap;\n}\n\n.btn-apply[_ngcontent-%COMP%] {\n  background: #24653b;\n  color: #fff;\n}\n.btn-apply[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.btn-clear[_ngcontent-%COMP%] {\n  background: #f0f3f0;\n  color: #1a1e1b;\n}\n\n.referral-reward-panel[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border: 1px solid #e0e5e1;\n  border-radius: 12px;\n  padding: 16px;\n  background: #fff;\n}\n\n.reward-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.reward-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1e1b;\n}\n\n.reward-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6a746d;\n}\n\n.slot-stepper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  margin: 12px 0;\n}\n\n.slot-stepper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 1px solid #d4dcd4;\n  background: #fff;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\n.slot-stepper[_ngcontent-%COMP%]   .slot-value[_ngcontent-%COMP%] {\n  min-width: 36px;\n  text-align: center;\n  font-weight: 600;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  inset: 0;\n  background: #d1d9d1;\n  border-radius: 34px;\n  transition: 0.2s;\n}\n\n.switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  top: 3px;\n  background: #fff;\n  border-radius: 50%;\n  transition: 0.2s;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background: #2c7a4b;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]::before {\n  transform: translateX(18px);\n}\n\n.referral-reward-panel[_ngcontent-%COMP%]   .field-hint[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.coupon-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.coupon-code[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  color: #1f3225;\n}\n\n.coupon-badge[_ngcontent-%COMP%] {\n  font-size: 0.64rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  background: #e8f2ea;\n  color: #2f6a43;\n  border-radius: 999px;\n  padding: 3px 7px;\n  white-space: nowrap;\n}\n\n.coupon-meta[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 0.7rem;\n  color: #6a746b;\n}\n\n.coupon-copy-btn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  width: 100%;\n  border: 1px solid #b8c9bb;\n  background: #fff;\n  color: #2a5c3a;\n  border-radius: 7px;\n  padding: 8px 10px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.coupon-copy-btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n\n.bottom-bar[_ngcontent-%COMP%] {\n  position: static;\n  margin-top: 36px;\n  margin-bottom: 24px;\n  width: 100%;\n  max-width: 100%;\n  background: #ffffff;\n  color: #1a1e1b;\n  border: 1.5px solid #e7e2d9;\n  border-radius: 16px;\n  padding: 18px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  box-shadow: 0 4px 20px rgba(22, 35, 24, 0.05);\n  transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n\n.bottom-bar-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  width: 100%;\n}\n\n.bottom-incomplete-hint[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 0.78rem;\n  color: #92400e;\n  background: #fef3c7;\n  border: 1px solid #fde68a;\n  border-radius: 8px;\n  padding: 8px 12px;\n  line-height: 1.4;\n}\n\n.bottom-error[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 0.78rem;\n  color: #b91c1c;\n  background: #fee2e2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 8px 12px;\n}\n\n.bottom-flash[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 0.78rem;\n  border-radius: 8px;\n  padding: 8px 12px;\n  line-height: 1.4;\n}\n\n.bottom-flash.success[_ngcontent-%COMP%] {\n  color: #166534;\n  background: #dcfce7;\n  border: 1px solid #bbf7d0;\n}\n\n.bottom-flash.error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  background: #fee2e2;\n  border: 1px solid #fecaca;\n}\n\n.bar-price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-right: auto;\n  min-width: 120px;\n}\n\n.bar-price-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n\n.bar-price-amount[_ngcontent-%COMP%] {\n  font-family: \"Clash Display\", sans-serif;\n  font-size: 1.45rem;\n  font-weight: 700;\n  color: #15803d;\n  letter-spacing: -0.02em;\n  line-height: 1.1;\n}\n\n.bar-price-sub[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f8fafc;\n  border: 1.5px solid #cbd5e1;\n  color: #334155;\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 0.82rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  padding: 11px 20px;\n  border-radius: 10px;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition: all 0.2s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n  border-color: #94a3b8;\n}\n\n.btn-next[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  background: linear-gradient(135deg, #16a34a, #15803d);\n  color: #ffffff;\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  padding: 13px 26px;\n  border-radius: 12px;\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition: background 0.2s, transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.2s;\n  box-shadow: 0 4px 16px rgba(22, 163, 74, 0.25);\n}\n.btn-next[_ngcontent-%COMP%]   .btn-arrow[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  transition: transform 0.2s ease;\n}\n.btn-next[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #15803d, #166534);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(22, 163, 74, 0.35);\n}\n.btn-next[_ngcontent-%COMP%]:hover:not(:disabled)   .btn-arrow[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.btn-next[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-next[_ngcontent-%COMP%]:disabled {\n  background: #e2e8f0;\n  color: #94a3b8;\n  box-shadow: none;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.btn-pay[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #15803d, #047857);\n  color: #ffffff;\n  box-shadow: 0 4px 20px rgba(4, 120, 87, 0.3);\n  font-weight: 800;\n}\n.btn-pay[_ngcontent-%COMP%]   .btn-pay-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn-pay[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #166534, #065f46);\n  box-shadow: 0 8px 24px rgba(4, 120, 87, 0.4);\n  transform: translateY(-2px);\n}\n\n.payment-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 18, 12, 0.72);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1100;\n  padding: 16px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n\n.payment-modal-sheet[_ngcontent-%COMP%] {\n  background: #ffffff;\n  width: 100%;\n  max-width: 740px;\n  max-height: 90vh;\n  border-radius: 20px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);\n  animation: _ngcontent-%COMP%_modalScaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_modalScaleUp {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.pay-modal-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #132215, #1d3320);\n  color: #ffffff;\n  padding: 18px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.pay-modal-header[_ngcontent-%COMP%]   .pay-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.pay-modal-header[_ngcontent-%COMP%]   .pay-shield-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.pay-modal-header[_ngcontent-%COMP%]   .pay-title[_ngcontent-%COMP%] {\n  font-family: \"Clash Display\", sans-serif;\n  font-size: 1.12rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n.pay-modal-header[_ngcontent-%COMP%]   .pay-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.7);\n  margin-top: 2px;\n}\n.pay-modal-header[_ngcontent-%COMP%]   .pay-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.pay-modal-header[_ngcontent-%COMP%]   .pay-amount-pill[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  padding: 6px 14px;\n  border-radius: 10px;\n  text-align: right;\n}\n.pay-modal-header[_ngcontent-%COMP%]   .pay-amount-lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.62rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: rgba(255, 255, 255, 0.7);\n}\n.pay-modal-header[_ngcontent-%COMP%]   .pay-amount-val[_ngcontent-%COMP%] {\n  font-family: \"Clash Display\", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #4ade80;\n  line-height: 1.1;\n}\n.pay-modal-header[_ngcontent-%COMP%]   .btn-close-pay[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: #fff;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 0.95rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.2s;\n}\n.pay-modal-header[_ngcontent-%COMP%]   .btn-close-pay[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n\n.pay-order-strip[_ngcontent-%COMP%] {\n  background: #f1f5f2;\n  border-bottom: 1px solid #e2e8e3;\n  padding: 10px 24px;\n  font-size: 0.8rem;\n  color: #374151;\n}\n.pay-order-strip[_ngcontent-%COMP%]   .pay-order-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.pay-order-strip[_ngcontent-%COMP%]   .meta-dot[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.pay-order-strip[_ngcontent-%COMP%]   .pay-plan-badge[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n  font-size: 0.68rem;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 6px;\n  margin-left: 6px;\n}\n\n.pay-modal-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  min-height: 380px;\n  background: #fafaf9;\n}\n\n.pay-methods-nav[_ngcontent-%COMP%] {\n  background: #f5f5f4;\n  border-right: 1px solid #e7e5e4;\n  padding: 14px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.pay-method-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 12px;\n  padding: 12px 14px;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pay-method-tab[_ngcontent-%COMP%]   .tab-icon-wrap[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.15rem;\n  background: #e7e5e4;\n}\n.pay-method-tab[_ngcontent-%COMP%]   .tab-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.pay-method-tab[_ngcontent-%COMP%]   .tab-name[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: #292524;\n}\n.pay-method-tab[_ngcontent-%COMP%]   .tab-badge[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #16a34a;\n  font-weight: 600;\n}\n.pay-method-tab[_ngcontent-%COMP%]   .tab-sub[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #78716c;\n}\n.pay-method-tab[_ngcontent-%COMP%]:hover {\n  background: #ecebe9;\n}\n.pay-method-tab.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-color: #d6d3d1;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.pay-method-tab.active[_ngcontent-%COMP%]   .tab-name[_ngcontent-%COMP%] {\n  color: #166534;\n}\n.pay-method-tab.active[_ngcontent-%COMP%]   .tab-icon-wrap[_ngcontent-%COMP%] {\n  background: #dcfce7;\n}\n\n.pay-methods-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.upi-segmented-switch[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f3f4f6;\n  border-radius: 10px;\n  padding: 3px;\n  margin-bottom: 20px;\n}\n.upi-segmented-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  padding: 8px 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #4b5563;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.upi-segmented-switch[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #111827;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n\n.upi-qr-box[_ngcontent-%COMP%]   .qr-canvas-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n@media (max-width: 600px) {\n  .upi-qr-box[_ngcontent-%COMP%]   .qr-canvas-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.upi-qr-box[_ngcontent-%COMP%]   .qr-frame[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px;\n  background: #ffffff;\n  border: 2px solid #e5e7eb;\n  border-radius: 16px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);\n  display: inline-block;\n}\n.upi-qr-box[_ngcontent-%COMP%]   .qr-instructions[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.upi-qr-box[_ngcontent-%COMP%]   .qr-timer-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #fef3c7;\n  color: #92400e;\n  font-size: 0.74rem;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 20px;\n  align-self: flex-start;\n}\n.upi-qr-box[_ngcontent-%COMP%]   .qr-timer-pill[_ngcontent-%COMP%]   .timer-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #f59e0b;\n  animation: pulse 1.5s infinite;\n}\n.upi-qr-box[_ngcontent-%COMP%]   .qr-hint[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #4b5563;\n  margin: 0;\n}\n.upi-qr-box[_ngcontent-%COMP%]   .upi-app-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.upi-qr-box[_ngcontent-%COMP%]   .upi-app-badges[_ngcontent-%COMP%]   .app-chip[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #374151;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n\n.upi-vpa-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.upi-vpa-box[_ngcontent-%COMP%]   .vpa-input-group[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.upi-vpa-box[_ngcontent-%COMP%]   .vpa-quick-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.upi-vpa-box[_ngcontent-%COMP%]   .vpa-quick-chips[_ngcontent-%COMP%]   .vpa-chip[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  border: 1px solid #d1d5db;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #374151;\n  padding: 5px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.upi-vpa-box[_ngcontent-%COMP%]   .vpa-quick-chips[_ngcontent-%COMP%]   .vpa-chip[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  border-color: #9ca3af;\n}\n\n.pay-input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n\n.pay-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid #d1d5db;\n  border-radius: 10px;\n  padding: 11px 14px;\n  font-size: 0.88rem;\n  font-family: inherit;\n  color: #111827;\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.pay-input[_ngcontent-%COMP%]:focus {\n  border-color: #16a34a;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);\n}\n\n.card-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.card-form-grid[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.card-form-grid[_ngcontent-%COMP%]   .half[_ngcontent-%COMP%] {\n  grid-column: span 1;\n}\n.card-form-grid[_ngcontent-%COMP%]   .card-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.card-form-grid[_ngcontent-%COMP%]   .card-input-wrap[_ngcontent-%COMP%]   .card-brand-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: #f3f4f6;\n  color: #1f2937;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n.card-form-grid[_ngcontent-%COMP%]   .pay-save-card[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.78rem;\n  color: #4b5563;\n  cursor: pointer;\n}\n\n.banks-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n.banks-grid[_ngcontent-%COMP%]   .bank-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f9fafb;\n  border: 1.5px solid #e5e7eb;\n  padding: 10px 14px;\n  border-radius: 10px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #1f2937;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.banks-grid[_ngcontent-%COMP%]   .bank-pill[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  background: #f1f5f9;\n}\n.banks-grid[_ngcontent-%COMP%]   .bank-pill.selected[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #f0fdf4;\n  color: #15803d;\n}\n\n.pay-select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid #d1d5db;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 0.85rem;\n  background: #ffffff;\n  outline: none;\n}\n.pay-select[_ngcontent-%COMP%]:focus {\n  border-color: #16a34a;\n}\n\n.wallets-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.wallets-list[_ngcontent-%COMP%]   .wallet-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.wallets-list[_ngcontent-%COMP%]   .wallet-row[_ngcontent-%COMP%]   .wallet-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.wallets-list[_ngcontent-%COMP%]   .wallet-row[_ngcontent-%COMP%]   .wallet-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.wallets-list[_ngcontent-%COMP%]   .wallet-row[_ngcontent-%COMP%]   .wallet-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #111827;\n}\n.wallets-list[_ngcontent-%COMP%]   .wallet-row[_ngcontent-%COMP%]   .wallet-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #6b7280;\n}\n.wallets-list[_ngcontent-%COMP%]   .wallet-row.selected[_ngcontent-%COMP%] {\n  border-color: #16a34a;\n  background: #f0fdf4;\n}\n\n.btn-pay-modal[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 18px;\n  background: linear-gradient(135deg, #16a34a, #15803d);\n  color: #ffffff;\n  border: none;\n  padding: 14px 20px;\n  border-radius: 12px;\n  font-size: 0.92rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 18px rgba(22, 163, 74, 0.35);\n  transition: all 0.2s ease;\n}\n.btn-pay-modal[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #15803d, #166534);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 22px rgba(22, 163, 74, 0.45);\n}\n.btn-pay-modal[_ngcontent-%COMP%]:disabled {\n  background: #9ca3af;\n  box-shadow: none;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.pay-success-pane[_ngcontent-%COMP%] {\n  padding: 48px 24px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.pay-success-pane[_ngcontent-%COMP%]   .pay-success-circle[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #22c55e;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.4);\n  animation: _ngcontent-%COMP%_scaleIn 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.pay-success-pane[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: #111827;\n}\n.pay-success-pane[_ngcontent-%COMP%]   .pay-success-lead[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #4b5563;\n  margin-top: 6px;\n}\n.pay-success-pane[_ngcontent-%COMP%]   .pay-success-badge[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  background: #dcfce7;\n  color: #15803d;\n  font-weight: 700;\n  font-size: 0.78rem;\n  padding: 6px 14px;\n  border-radius: 20px;\n  border: 1px solid #bbf7d0;\n}\n.pay-success-pane[_ngcontent-%COMP%]   .pay-redirect-hint[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 0.74rem;\n  color: #9ca3af;\n}\n\n@keyframes _ngcontent-%COMP%_scaleIn {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.pay-modal-footer[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-top: 1px solid #e5e7eb;\n  padding: 10px 24px;\n}\n.pay-modal-footer[_ngcontent-%COMP%]   .trust-icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  font-size: 0.72rem;\n  color: #6b7280;\n  font-weight: 600;\n}\n\n@media (max-width: 680px) {\n  .pay-modal-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pay-methods-nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n    overflow-x: auto;\n    border-right: none;\n    border-bottom: 1px solid #e7e5e4;\n    padding: 10px;\n  }\n  .pay-method-tab[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    padding: 8px 12px;\n  }\n  .card-form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .card-form-grid[_ngcontent-%COMP%]   .half[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n.loader-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.9);\n  z-index: 1000;\n}\n\n.loader-ring[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 2px solid #e4ddd3;\n  border-top-color: #3d6b4a;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loader-text[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #7e8c80;\n  letter-spacing: 0.08em;\n}\n\n@media (min-width: 1400px) {\n  .checkout-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 420px 1fr;\n  }\n  .left-panel[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .mobile-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-steps[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .trek-thumb[_ngcontent-%COMP%] {\n    height: 260px;\n  }\n  .trek-name[_ngcontent-%COMP%] {\n    font-size: 1.55rem;\n  }\n  .trek-info[_ngcontent-%COMP%] {\n    padding: 0 32px 28px;\n  }\n  .panel-divider[_ngcontent-%COMP%] {\n    margin: 0 32px 28px;\n  }\n  .stepper[_ngcontent-%COMP%] {\n    padding: 0 32px;\n  }\n  .price-summary[_ngcontent-%COMP%] {\n    margin: 28px 32px 0;\n    padding: 22px;\n  }\n  .form-area[_ngcontent-%COMP%] {\n    padding: 56px 72px 56px;\n    max-width: 760px;\n  }\n  .step-h1[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n  .step-desc[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .bottom-bar[_ngcontent-%COMP%] {\n    padding: 20px 32px;\n  }\n  .bar-price-amount[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .btn-next[_ngcontent-%COMP%] {\n    padding: 14px 36px;\n    font-size: 0.82rem;\n  }\n  .btn-back[_ngcontent-%COMP%] {\n    padding: 12px 24px;\n    font-size: 0.82rem;\n  }\n}\n@media (min-width: 1200px) and (max-width: 1399px) {\n  .checkout-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 360px 1fr;\n  }\n  .left-panel[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .mobile-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-steps[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .form-area[_ngcontent-%COMP%] {\n    padding: 48px 56px 48px;\n    max-width: 680px;\n  }\n  .bottom-bar[_ngcontent-%COMP%] {\n    padding: 18px 28px;\n  }\n}\n@media (min-width: 1024px) and (max-width: 1199px) {\n  .checkout-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 320px 1fr;\n  }\n  .left-panel[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .mobile-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-steps[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .trek-name[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .trek-info[_ngcontent-%COMP%] {\n    padding: 0 20px 20px;\n  }\n  .panel-divider[_ngcontent-%COMP%] {\n    margin: 0 20px 20px;\n  }\n  .stepper[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .price-summary[_ngcontent-%COMP%] {\n    margin: 20px 20px 0;\n    padding: 16px;\n  }\n  .form-area[_ngcontent-%COMP%] {\n    padding: 36px 36px 48px;\n    max-width: 100%;\n  }\n  .bottom-bar[_ngcontent-%COMP%] {\n    padding: 16px 24px;\n  }\n  .bar-price-amount[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .btn-next[_ngcontent-%COMP%] {\n    padding: 11px 20px;\n  }\n}\n@media (max-width: 1023px) {\n  .checkout-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    min-height: 100vh;\n  }\n  .left-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-nav[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .mobile-steps[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .form-area[_ngcontent-%COMP%] {\n    max-width: 760px;\n    margin: 0 auto;\n    width: 100%;\n    padding: 32px 28px 48px;\n  }\n  .step-h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .step-headline[_ngcontent-%COMP%] {\n    margin-bottom: 28px;\n  }\n  .bottom-bar[_ngcontent-%COMP%] {\n    margin-top: 32px;\n  }\n}\n@media (max-width: 767px) {\n  .form-area[_ngcontent-%COMP%] {\n    padding: 24px 20px 40px;\n  }\n  .step-h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .step-headline[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 14px;\n    margin-bottom: 14px;\n  }\n  .form-row.three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .addons-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .coupon-list-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .payment-plan-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .participant-fields[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 16px;\n    gap: 14px;\n  }\n  .review-block[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .p-table[_ngcontent-%COMP%] {\n    min-width: 460px;\n  }\n  .review-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .review-row[_ngcontent-%COMP%]   .review-val[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .pb-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .pb-row[_ngcontent-%COMP%]   .pb-label[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .pb-row[_ngcontent-%COMP%]   .pb-val[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n}\n@media (max-width: 639px) {\n  .bottom-bar[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n    margin-top: 24px;\n    border-radius: 14px;\n  }\n  .bottom-bar-main[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: space-between;\n    gap: 12px;\n  }\n  .bar-price[_ngcontent-%COMP%] {\n    order: 1;\n    min-width: auto;\n    margin-right: 0;\n  }\n  .bar-price-amount[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .btn-back[_ngcontent-%COMP%] {\n    order: 2;\n    margin-left: auto;\n    padding: 10px 14px;\n    min-height: 44px;\n  }\n  .btn-next[_ngcontent-%COMP%], .btn-pay[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n    justify-content: center;\n    min-height: 46px;\n    font-size: 0.85rem;\n  }\n  .batch-option[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 20px 1fr auto;\n    grid-template-areas: \"radio info price\" \"radio info status\";\n    gap: 6px 12px;\n    align-items: center;\n    padding: 12px 14px;\n  }\n  .batch-radio[_ngcontent-%COMP%] {\n    grid-area: radio;\n    align-self: center;\n  }\n  .batch-info[_ngcontent-%COMP%] {\n    grid-area: info;\n    min-width: 0;\n  }\n  .batch-dates[_ngcontent-%COMP%] {\n    font-size: 0.84rem;\n  }\n  .batch-meta[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n  }\n  .batch-price[_ngcontent-%COMP%] {\n    grid-area: price;\n    text-align: right;\n    font-size: 1.05rem;\n  }\n  .batch-status[_ngcontent-%COMP%] {\n    grid-area: status;\n    justify-self: end;\n    font-size: 0.6rem;\n    padding: 3px 6px;\n  }\n  .wallet-widget[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .wallet-action[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .payment-modal-backdrop[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .payment-modal-sheet[_ngcontent-%COMP%] {\n    max-height: 94vh;\n    border-radius: 16px;\n  }\n  .pay-modal-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    min-height: auto;\n  }\n  .pay-methods-nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    border-right: none;\n    border-bottom: 1px solid #e7e5e4;\n    padding: 8px 10px;\n    gap: 6px;\n    scrollbar-width: none;\n  }\n  .pay-methods-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .pay-method-tab[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    padding: 8px 12px;\n    border-radius: 10px;\n  }\n  .pay-method-tab[_ngcontent-%COMP%]   .tab-sub[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .pay-methods-content[_ngcontent-%COMP%] {\n    padding: 18px 14px;\n  }\n  .banks-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .card-form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .card-form-grid[_ngcontent-%COMP%]   .half[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .upi-qr-box[_ngcontent-%COMP%]   .qr-canvas-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n  .qr-instructions[_ngcontent-%COMP%] {\n    align-items: center;\n    text-align: center;\n  }\n  .qr-timer-pill[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n}\n@media (max-width: 479px) {\n  .mobile-nav[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n  }\n  .mobile-nav-spacer[_ngcontent-%COMP%] {\n    width: 32px;\n  }\n  .mobile-title[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    max-width: 170px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .mobile-steps[_ngcontent-%COMP%] {\n    padding: 0 4px;\n  }\n  .mob-step[_ngcontent-%COMP%] {\n    padding: 10px 8px;\n    font-size: 0.7rem;\n    gap: 5px;\n  }\n  .mob-step[_ngcontent-%COMP%]   .mob-num[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 18px;\n    font-size: 0.6rem;\n  }\n  .form-area[_ngcontent-%COMP%] {\n    padding: 16px 14px 36px;\n  }\n  .step-headline[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .step-h1[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .step-desc[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n  .counter-row[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .counter-btn[_ngcontent-%COMP%] {\n    width: 46px;\n    height: 46px;\n  }\n  .counter-val[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .participant-fields[_ngcontent-%COMP%] {\n    padding: 14px 12px;\n    gap: 12px;\n  }\n  .participant-header[_ngcontent-%COMP%] {\n    padding: 12px 14px;\n  }\n  .terms-check[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 8px;\n  }\n  .terms-text[_ngcontent-%COMP%] {\n    font-size: 0.76rem;\n  }\n  .referral-input-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n  }\n  .btn-apply[_ngcontent-%COMP%], .btn-clear[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    justify-content: center;\n  }\n  .pay-modal-header[_ngcontent-%COMP%] {\n    padding: 14px;\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n  .pay-header-right[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n  .pay-amount-pill[_ngcontent-%COMP%] {\n    padding: 4px 10px;\n  }\n  .pay-amount-val[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n  .pay-modal-footer[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n  .pay-modal-footer[_ngcontent-%COMP%]   .trust-icons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 6px;\n  }\n}\n@media (max-width: 359px) {\n  .mob-step[_ngcontent-%COMP%] {\n    padding: 8px 6px;\n    font-size: 0.65rem;\n  }\n  .form-area[_ngcontent-%COMP%] {\n    padding: 12px 10px 28px;\n  }\n  .step-h1[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n  .bar-price-amount[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .primary-tag[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-height: 500px) and (orientation: landscape) {\n  .mobile-nav[_ngcontent-%COMP%] {\n    padding: 6px 14px;\n  }\n  .mob-step[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n  }\n  .form-area[_ngcontent-%COMP%] {\n    padding-top: 12px;\n    padding-bottom: 20px;\n  }\n  .step-headline[_ngcontent-%COMP%] {\n    margin-bottom: 14px;\n  }\n  .bottom-bar[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    padding: 10px 14px;\n  }\n  .btn-next[_ngcontent-%COMP%], .btn-back[_ngcontent-%COMP%] {\n    padding: 8px 14px;\n    min-height: 40px;\n  }\n  .bar-price-amount[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n@media (hover: none) and (pointer: coarse) {\n  .counter-btn[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n  }\n  .counter-val[_ngcontent-%COMP%] {\n    line-height: 48px;\n  }\n  .batch-option[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n  }\n  .addon-card[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n  }\n  .btn-next[_ngcontent-%COMP%] {\n    min-height: 48px;\n  }\n  .btn-back[_ngcontent-%COMP%] {\n    min-height: 44px;\n  }\n  .mob-step[_ngcontent-%COMP%] {\n    min-height: 44px;\n  }\n  .btn-next[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n  .plan-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n.error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYm9va2luZy9ib29raW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXlCLHNCQUFBO0FBRXpCOztBQUFBO0VBQ0UsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQUU7RUFBdUIsYUFBQTtBQUd6Qjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUdGO0FBREU7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUNiLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0JBQUE7QUFJSjtBQURFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHFFQUFBO0FBR0o7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFBVyxVQUFBO0VBQ1gsV0FBQTtBQUdGOztBQUFBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSwyQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFHRjtBQUZFO0VBQVUsOEJBQUE7RUFBNkIsV0FBQTtBQU16Qzs7QUFIQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFNRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFB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c0IsZ0JBQUE7SUFBa0Isa0JBQUE7RUE0VHhDO0VBM1RBO0lBQXVCLGlCQUFBO0lBQW1CLGdCQUFBO0VBK1QxQztFQTlUQTtJQUFzQixpQkFBQTtFQWlVdEI7QUFDRjtBQTlUQTtFQUNFO0lBQW1CLFdBQUE7SUFBYSxZQUFBO0VBa1VoQztFQWpVQTtJQUFtQixpQkFBQTtFQW9VbkI7RUFuVUE7SUFBbUIsa0JBQUE7RUFzVW5CO0VBclVBO0lBQW1CLGtCQUFBO0VBd1VuQjtFQXZVQTtJQUFtQixnQkFBQTtFQTBVbkI7RUF6VUE7SUFBbUIsZ0JBQUE7RUE0VW5CO0VBM1VBO0lBQW1CLGdCQUFBO0VBOFVuQjtFQTdVQTtJQUFtQixlQUFBO0VBZ1ZuQjtFQS9VQTtJQUFtQixlQUFBO0VBa1ZuQjtBQUNGO0FBL1VBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWlWRiIsInNvdXJjZXNDb250ZW50IjpbIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIgeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogI2ZhZjZmMDtcbiAgY29sb3I6ICMxYTFlMWI7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBMQVlPVVQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uY2hlY2tvdXQtc2hlbGwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM4MHB4IDFmcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBMRUZUIFBBTkVMIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmxlZnQtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjMTYyMzE4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBkaXNwbGF5OiBub25lOyB9XG59XG5cbi50cmVrLXRodW1iIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LXNocmluazogMDtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNykgc2F0dXJhdGUoMC44KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gOHMgbGluZWFyO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCAzMCUsICMxNjIzMTggMTAwJSk7XG4gIH1cbn1cblxuLnBhbmVsLW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4OyBsZWZ0OiAxNnB4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmJhY2stYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICBmb250LWZhbWlseTogJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICBwYWRkaW5nOiA3cHggMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7IGNvbG9yOiAjZmZmOyB9XG59XG5cbi50cmVrLWluZm8ge1xuICBwYWRkaW5nOiAwIDI4cHggMjRweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnRyZWstbGFiZWwge1xuICBmb250LXNpemU6IDAuNjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjOWRjOWFhO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi50cmVrLW5hbWUge1xuICBmb250LWZhbWlseTogJ0NsYXNoIERpc3BsYXknLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi50cmVrLWxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjQ1KTtcbn1cblxuLnBhbmVsLWRpdmlkZXIge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA3KTtcbiAgbWFyZ2luOiAwIDI4cHggMjRweDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFZFUlRJQ0FMIFNURVBQRVIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uc3RlcHBlciB7XG4gIHBhZGRpbmc6IDAgMjhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnN0ZXAtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDI4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmxhc3QtY2hpbGQgeyBwYWRkaW5nLWJvdHRvbTogMDsgfVxuXG4gICY6bm90KDpsYXN0LWNoaWxkKTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTNweDsgdG9wOiAyOHB4OyBib3R0b206IDA7XG4gICAgd2lkdGg6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICB9XG5cbiAgJi5jb21wbGV0ZWQ6OmJlZm9yZSB7IGJhY2tncm91bmQ6IHJnYmEoOTAsMTU1LDExMCwwLjM1KTsgfVxuICAmLmFjdGl2ZTo6YmVmb3JlICAgIHsgYmFja2dyb3VuZDogcmdiYSg5MCwxNTUsMTEwLDAuMTUpOyB9XG59XG5cbi5zdGVwLW5vZGUge1xuICB3aWR0aDogMjhweDsgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gIGJvcmRlcjogMS41cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjI1KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgLnN0ZXAtcm93LmNvbXBsZXRlZCAmIHsgYmFja2dyb3VuZDogIzVhOWI2ZTsgYm9yZGVyLWNvbG9yOiAjNWE5YjZlOyBjb2xvcjogI2ZmZjsgfVxuICAuc3RlcC1yb3cuYWN0aXZlICYgICAgeyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgYm9yZGVyLWNvbG9yOiAjNWE5YjZlOyBjb2xvcjogIzVhOWI2ZTsgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoOTAsMTU1LDExMCwwLjE1KTsgfVxufVxuXG4uc3RlcC10ZXh0IHsgcGFkZGluZy10b3A6IDNweDsgfVxuXG4uc3RlcC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yNSk7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcblxuICAuc3RlcC1yb3cuY29tcGxldGVkICYgeyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjQ1KTsgfVxuICAuc3RlcC1yb3cuYWN0aXZlICYgICAgeyBjb2xvcjogI2ZmZjsgfVxufVxuXG4uc3RlcC1zdWIge1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTgpO1xuICAuc3RlcC1yb3cuYWN0aXZlICYgeyBjb2xvcjogIzlkYzlhYTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUFJJQ0UgU1VNTUFSWSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5wcmljZS1zdW1tYXJ5IHtcbiAgbWFyZ2luOiAyNHB4IDI4cHggMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA3KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnByaWNlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xuICBwYWRkaW5nOiA2cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gIGdhcDogOHB4O1xuXG4gICY6bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cblxuICAmLnRvdGFsIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgICAucHJpY2UtYW10IHsgY29sb3I6ICM5ZGM5YWE7IGZvbnQtc2l6ZTogMS4xNXJlbTsgfVxuICB9XG5cbiAgJi5kaXNjb3VudCB7XG4gICAgY29sb3I6ICNhOGQ4Yjc7XG4gICAgLnByaWNlLWFtdCB7IGNvbG9yOiAjYThkOGI3OyB9XG4gIH1cblxuICAmLmR1ZSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4ucHJpY2UtbGFiZWwgeyBmb250LXdlaWdodDogNTAwOyB9XG4ucHJpY2UtYW10ICAgeyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjY1KTsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUklHSFQgUEFORUwgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ucmlnaHQtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmFmNmYwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLy8gTW9iaWxlIHRvcCBuYXYgKGhpZGRlbiBvbiBkZXNrdG9wKVxuLm1vYmlsZS1uYXYge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMTYyMzE4O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAubW9iaWxlLWJhY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xuICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gICAgcGFkZGluZzogN3B4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAubW9iaWxlLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ0NsYXNoIERpc3BsYXknLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLy8gTW9iaWxlIHN0ZXAgc3RyaXAgKGhpZGRlbiBvbiBkZXNrdG9wKVxuLm1vYmlsZS1zdGVwcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRkZGQzO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBkaXNwbGF5OiBub25lOyB9XG59XG5cbi5tb2Itc3RlcCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzdlOGM4MDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMsIGJvcmRlci1jb2xvciAwLjJzO1xuXG4gIC5tb2ItbnVtIHtcbiAgICB3aWR0aDogMThweDsgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuICAmLmFjdGl2ZSAgICB7IGNvbG9yOiAjM2Q2YjRhOyBib3JkZXItYm90dG9tLWNvbG9yOiAjM2Q2YjRhOyB9XG4gICYuY29tcGxldGVkIHsgY29sb3I6ICM1YTliNmU7IGJvcmRlci1ib3R0b20tY29sb3I6ICM1YTliNmU7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEZPUk0gQVJFQSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5mb3JtLWFyZWEge1xuICBmbGV4OiAxO1xuICBtYXgtd2lkdGg6IDY4MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLnN0ZXAtaGVhZGxpbmUgeyBtYXJnaW4tYm90dG9tOiAzNnB4OyB9XG5cbi5zdGVwLWV5ZWJyb3cge1xuICBmb250LXNpemU6IDAuNjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM1YTliNmU7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnN0ZXAtaDEge1xuICBmb250LWZhbWlseTogJ0NsYXNoIERpc3BsYXknLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgMi41dncsIDJyZW0pO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzFhMWUxYjtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLnN0ZXAtZGVzYyB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6ICM3ZThjODA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBGT1JNIEVMRU1FTlRTIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZvcm0tcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgJi5mdWxsICB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG4gICYudGhyZWUgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOyB9XG4gICYucmVmZXJyYWwtcm93IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cbn1cblxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA3cHg7XG5cbiAgJi5zcGFuMiB7IGdyaWQtY29sdW1uOiBzcGFuIDI7IH1cbiAgJi5mdWxsICB7IGdyaWQtY29sdW1uOiAxIC8gLTE7IH1cbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIGNvbG9yOiAjM2Y0ODQwO1xufVxuXG4ucmVxIHsgY29sb3I6ICNkNDg4MmM7IG1hcmdpbi1sZWZ0OiAycHg7IH1cblxuLmZvcm0taW5wdXQsXG4uZm9ybS1zZWxlY3QsXG4uZm9ybS10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2U0ZGRkMztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxMXB4IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiAjMWExZTFiO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xuICB3aWR0aDogMTAwJTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcblxuICAmOjpwbGFjZWhvbGRlciB7IGNvbG9yOiAjYjhiMGE2OyB9XG5cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2Q2YjRhO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDYxLDEwNyw3NCwwLjEpO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogI2YzZWRlNDtcbiAgICBjb2xvcjogIzdlOGM4MDtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG59XG5cbi5mb3JtLXNlbGVjdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxMiAxMiclM0UlM0NwYXRoIGZpbGw9JyUyMzdlOGM4MCcgZD0nTTYgOEwxIDNoMTB6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMnB4IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMzJweDtcbn1cblxuLmZvcm0tdGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiA4OHB4O1xufVxuXG4uZmllbGQtaGludCB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBjb2xvcjogIzdlOGM4MDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cbi5maWVsZC1oaW50LnN1Y2Nlc3Mge1xuICBjb2xvcjogIzJkN2E0MztcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLmZpZWxkLWhpbnQuZXJyb3Ige1xuICBjb2xvcjogI2MwMzkyYjtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQkFUQ0ggT1BUSU9OUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5iYXRjaC1vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYmF0Y2gtb3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2U0ZGRkMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xuXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7IGRpc3BsYXk6IG5vbmU7IH1cblxuICAmLnNlbGVjdGVkIHtcbiAgICBib3JkZXItY29sb3I6ICMzZDZiNGE7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNjEsMTA3LDc0LDAuMDgpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNjEsMTA3LDc0LDAuMDMpO1xuICB9XG5cbiAgJi5kaXNhYmxlZCB7IG9wYWNpdHk6IDAuNDU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG59XG5cbi5iYXRjaC1yYWRpbyB7XG4gIHdpZHRoOiAxOHB4OyBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2M4YmZiMztcbiAgZmxleC1zaHJpbms6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcblxuICAuYmF0Y2gtb3B0aW9uLnNlbGVjdGVkICYgeyBib3JkZXItY29sb3I6ICMzZDZiNGE7IH1cbn1cblxuLmJhdGNoLWluZm8geyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cblxuLmJhdGNoLWRhdGVzIHtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzFhMWUxYjtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJhdGNoLW1ldGEgeyBmb250LXNpemU6IDAuNzJyZW07IGNvbG9yOiAjN2U4YzgwOyB9XG5cbi5iYXRjaC1wcmljZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ2xhc2ggRGlzcGxheScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyZDUwMzg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5iYXRjaC1zdGF0dXMge1xuICBmb250LXNpemU6IDAuNjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc3RhdHVzLW9rICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDYxLDEwNyw3NCwwLjEpOyAgY29sb3I6ICMzZDZiNGE7IH1cbi5zdGF0dXMtZmV3ICB7IGJhY2tncm91bmQ6IHJnYmEoMjEyLDEzNiw0NCwwLjEpOyBjb2xvcjogI2Q0ODgyYzsgfVxuLnN0YXR1cy1mdWxsIHsgYmFja2dyb3VuZDogcmdiYSgyMDEsNjQsNjQsMC4xKTsgIGNvbG9yOiAjYzk0MDQwOyB9XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBQQVJUSUNJUEFOVCBDT1VOVEVSIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmNvdW50ZXItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTRkZGQzO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmNvdW50ZXItYnRuIHtcbiAgd2lkdGg6IDQ0cHg7IGhlaWdodDogNDRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjN2U4YzgwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzLCBjb2xvciAwLjE1cztcblxuICAmOmhvdmVyICB7IGJhY2tncm91bmQ6ICNmM2VkZTQ7IGNvbG9yOiAjMWExZTFiOyB9XG4gICY6YWN0aXZlIHsgYmFja2dyb3VuZDogI2U0ZGRkMzsgfVxufVxuXG4uY291bnRlci12YWwge1xuICBtaW4td2lkdGg6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzFhMWUxYjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTRkZGQzO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTRkZGQzO1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEFERC1PTlMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uYWRkb25zLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmFkZG9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNlNGRkZDM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgaW5wdXQgeyBkaXNwbGF5OiBub25lOyB9XG5cbiAgJi5jaGVja2VkIHtcbiAgICBib3JkZXItY29sb3I6ICMzZDZiNGE7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNjEsMTA3LDc0LDAuMDgpO1xuICAgIC5hZGRvbi1jaGVjayB7IGJhY2tncm91bmQ6ICMzZDZiNGE7IGJvcmRlci1jb2xvcjogIzNkNmI0YTsgY29sb3I6ICNmZmY7IH1cbiAgfVxufVxuXG4uYWRkb24tdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uYWRkb24tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxYTFlMWI7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uYWRkb24tY2hlY2sge1xuICB3aWR0aDogMThweDsgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2M4YmZiMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG59XG5cbi5hZGRvbi1wcmljZSB7IGZvbnQtc2l6ZTogMC43OHJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICMyZDUwMzg7IH1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFBBUlRJQ0lQQU5UIEJMT0NLIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnBhcnRpY2lwYW50LWJsb2NrIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTRkZGQzO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ucGFydGljaXBhbnQtaGVhZGVyIHtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjNlZGU0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZGRkMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ucC1udW0ge1xuICB3aWR0aDogMjZweDsgaGVpZ2h0OiAyNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMxNjIzMTg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnAtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxYTFlMWI7XG59XG5cbi5wLWJhZGdlIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDUsODAsNTYsMC4xKTtcbiAgY29sb3I6ICMyZDUwMzg7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnBhcnRpY2lwYW50LWZpZWxkcyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxNnB4O1xuXG4gIC5maWVsZC5mdWxsIHsgZ3JpZC1jb2x1bW46IDEgLyAtMTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQUxFUlRTIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmluZm8tYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTIsMTM2LDQ0LDAuMDcpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwxMzYsNDQsMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgY29sb3I6ICM3YTRlMTQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5zdWNjZXNzLWJhciwgLmVycm9yLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnN1Y2Nlc3MtYmFyIHsgYmFja2dyb3VuZDogcmdiYSg2MSwxMDcsNzQsMC4wOCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjEsMTA3LDc0LDAuMik7IGNvbG9yOiAjMmQ1MDM4OyB9XG4uZXJyb3ItYmFyICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDIwMSw2NCw2NCwwLjA3KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDEsNjQsNjQsMC4yKTsgY29sb3I6ICNjOTQwNDA7IH1cblxuLmFsZXJ0LWNsb3NlIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyOyBjb2xvcjogaW5oZXJpdDtcbiAgb3BhY2l0eTogMC41OyBmb250LXNpemU6IDFyZW07XG4gICY6aG92ZXIgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBSRVZJRVcgQkxPQ0tTIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnJldmlldy1ibG9jayB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2U0ZGRkMztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnJldmlldy1oZWFkZXIge1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmM2VkZTQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRkZGQzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5yZXZpZXctaGVhZGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjN2U4YzgwO1xufVxuXG4uZWRpdC1saW5rIHtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzNkNmI0YTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICY6aG92ZXIgeyBjb2xvcjogIzJkNTAzODsgfVxufVxuXG4ucmV2aWV3LWJvZHkgeyBwYWRkaW5nOiAxNnB4IDIwcHg7IH1cblxuLnJldmlldy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiA3cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wNCk7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxufVxuXG4ucmV2aWV3LWtleSB7IGNvbG9yOiAjN2U4YzgwOyBmb250LXdlaWdodDogNDAwOyBmbGV4LXNocmluazogMDsgfVxuLnJldmlldy12YWwgeyBjb2xvcjogIzFhMWUxYjsgZm9udC13ZWlnaHQ6IDYwMDsgdGV4dC1hbGlnbjogcmlnaHQ7IHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IH1cblxuLy8gUGFydGljaXBhbnRzIHRhYmxlXG4ucC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBmb250LXNpemU6IDAuNzhyZW07XG5cbiAgdGgge1xuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjN2U4YzgwO1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRkZGQzO1xuICAgIGJhY2tncm91bmQ6ICNmM2VkZTQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgdGQge1xuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjA0KTtcbiAgICBjb2xvcjogIzFhMWUxYjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICB0cjpsYXN0LWNoaWxkIHRkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxufVxuXG4ucHJpbWFyeS10YWcge1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZDogcmdiYSg0NSw4MCw1NiwwLjEpO1xuICBjb2xvcjogIzJkNTAzODtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4vLyBQcmljZSBicmVha2Rvd25cbi5wcmljZS1icmVha2Rvd24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNlNGRkZDM7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wYi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGRkZDM7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgZ2FwOiAxMnB4O1xuICAmOmxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG5cbiAgJi50b3RhbCB7XG4gICAgYmFja2dyb3VuZDogIzE2MjMxODtcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgLnBiLWxhYmVsIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41NSk7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgICAucGItdmFsICAgeyBjb2xvcjogI2ZmZjsgZm9udC1zaXplOiAxLjFyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtZmFtaWx5OiAnQ2xhc2ggRGlzcGxheScsIHNhbnMtc2VyaWY7IH1cbiAgfVxuXG4gICYuZGlzY291bnQge1xuICAgIGJhY2tncm91bmQ6ICNmNWZiZjc7XG4gICAgLnBiLWxhYmVsIHsgY29sb3I6ICMyNDY1M2I7IH1cbiAgICAucGItdmFsIHsgY29sb3I6ICMyNDY1M2I7IH1cbiAgfVxuXG4gICYucGF5YWJsZSB7XG4gICAgYmFja2dyb3VuZDogI2VlZjNlZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIC5wYi1sYWJlbCB7IGNvbG9yOiAjMWExZTFiOyB9XG4gICAgLnBiLXZhbCB7IGNvbG9yOiAjMWExZTFiOyB9XG4gIH1cbn1cblxuLnBiLWxhYmVsIHsgY29sb3I6ICMzZjQ4NDA7IGZvbnQtd2VpZ2h0OiA1MDA7IH1cbi5wYi12YWwgICB7IGNvbG9yOiAjMWExZTFiOyBmb250LXdlaWdodDogNzAwOyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBQQVlNRU5UIFBMQU4gU0VMRUNUSU9OIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnBheW1lbnQtcGxhbi1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBsYW4tc2VjdGlvbi1oZWFkZXIge1xuICBmb250LXNpemU6IDAuNzZyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjNGI1NTYzO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGF5bWVudC1wbGFuLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDEycHg7XG59XG5cbi5wbGFuLWNhcmQge1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2U1ZTdlYjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIH1cblxuICAmLmFjdGl2ZS1mdWxsIHtcbiAgICBib3JkZXItY29sb3I6ICMxNmEzNGE7XG4gICAgYmFja2dyb3VuZDogI2YwZmRmNDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgyMiwgMTYzLCA3NCwgMC4xNSk7XG4gIH1cblxuICAmLmFjdGl2ZS1kZXBvc2l0IHtcbiAgICBib3JkZXItY29sb3I6ICMyNTYzZWI7XG4gICAgYmFja2dyb3VuZDogI2VmZjZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgzNywgOTksIDIzNSwgMC4xNSk7XG4gIH1cblxuICAucGxhbi1jYXJkLXRvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgICBjb2xvcjogIzFmMjkzNztcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cblxuICAucGxhbi1jYXJkLXN1YiB7XG4gICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cblxuICAucGxhbi1jYXJkLWFtb3VudCB7XG4gICAgZm9udC1mYW1pbHk6ICdDbGFzaCBEaXNwbGF5Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuXG4gICAgJi5hbW91bnQtZnVsbCB7XG4gICAgICBjb2xvcjogIzE2YTM0YTtcbiAgICB9XG4gICAgJi5hbW91bnQtZGVwb3NpdCB7XG4gICAgICBjb2xvcjogIzI1NjNlYjtcbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEdPV0lMRCBXQUxMRVQgV0lER0VUIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLndhbGxldC13aWRnZXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTRweDtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjBmZGY0O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICM4NmVmYWM7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi53YWxsZXQtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgbWluLXdpZHRoOiAwO1xuXG4gIC53YWxsZXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICAud2FsbGV0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzE2NjUzNDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICB9XG5cbiAgLndhbGxldC1iYWxhbmNlIHtcbiAgICBmb250LXNpemU6IDAuNzZyZW07XG4gICAgY29sb3I6ICMxNTgwM2Q7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgfVxufVxuXG4ud2FsbGV0LWFjdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMTY2NTM0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmbGV4LXNocmluazogMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLndhbGxldC1jaGVja2JveCB7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGFjY2VudC1jb2xvcjogIzE2YTM0YTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLm1vYmlsZS1uYXYtc3BhY2VyIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG5cbi8vIFRlcm1zXG4udGVybXMtY2hlY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNlNGRkZDM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XG5cbiAgJjpoYXMoaW5wdXQ6Y2hlY2tlZCkgeyBib3JkZXItY29sb3I6ICMzZDZiNGE7IH1cblxuICBpbnB1dCB7IG1hcmdpbi10b3A6IDJweDsgYWNjZW50LWNvbG9yOiAjM2Q2YjRhOyBmbGV4LXNocmluazogMDsgfVxufVxuXG4udGVybXMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzNmNDg0MDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcblxuICBhIHsgY29sb3I6ICMzZDZiNGE7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgZm9udC13ZWlnaHQ6IDYwMDsgJjpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9IH1cbn1cblxuLmNvdXBvbi1saXN0LWJsb2NrIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTRkZGQzO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uY291cG9uLWxpc3QtdGl0bGUge1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM2YTc0NmI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jb3Vwb24tbGlzdC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5jb3Vwb24tY2hpcCB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjY2ZkOGNmO1xuICBiYWNrZ3JvdW5kOiAjZjdmYmY4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY291cG9uLWNoaXAudXNlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLnJlZmVycmFsLXN1bW1hcnktY2FyZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMik7XG4gIGNvbG9yOiAjZDhmNmRmO1xuICAmLm11dGVkIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjY1KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnJlZi1jYXJkLWJvZHkge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICAgICYuZXJyb3Ige1xuICAgICAgY29sb3I6ICNmZmQ2ZDY7XG4gICAgfVxuICB9XG59XG5cbi5yZWYtY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTBweDtcbn1cblxuLnJlZi1jYXJkLWV5ZWJyb3cge1xuICBmb250LXNpemU6IDAuNjVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbn1cblxuLnJlZi1jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLnJlZi1jYXJkLWNvcHkge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMjUpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgfVxufVxuXG4ucmVmLW1ldHJpY3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMTIwcHgsMWZyKSk7XG4gIGdhcDogMTBweDtcbn1cblxuLnJlZi1tZXRyaWMtbGFiZWwge1xuICBmb250LXNpemU6IDAuNjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG59XG5cbi5yZWYtbWV0cmljLXZhbHVlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnJlZi1jYXJkLW5vdGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43NSk7XG59XG5cbi5yZWYtY2FyZC1yZWZyZXNoIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVmZXJyYWwtaW5wdXQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5idG4tYXBwbHksXG4uYnRuLWNsZWFyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5idG4tYXBwbHkge1xuICBiYWNrZ3JvdW5kOiAjMjQ2NTNiO1xuICBjb2xvcjogI2ZmZjtcbiAgJjpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNTsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxufVxuXG4uYnRuLWNsZWFyIHtcbiAgYmFja2dyb3VuZDogI2YwZjNmMDtcbiAgY29sb3I6ICMxYTFlMWI7XG59XG5cbi5yZWZlcnJhbC1yZXdhcmQtcGFuZWwge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlNWUxO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ucmV3YXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucmV3YXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxYTFlMWI7XG59XG5cbi5yZXdhcmQtc3ViIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjNmE3NDZkO1xufVxuXG4uc2xvdC1zdGVwcGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luOiAxMnB4IDA7XG59XG5cbi5zbG90LXN0ZXBwZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2Q0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2xvdC1zdGVwcGVyIC5zbG90LXZhbHVlIHtcbiAgbWluLXdpZHRoOiAzNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7IG9wYWNpdHk6IDA7IHdpZHRoOiAwOyBoZWlnaHQ6IDA7IH1cblxuLnN3aXRjaCAuc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZDFkOWQxO1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uc3dpdGNoIC5zbGlkZXI6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgbGVmdDogM3B4O1xuICB0b3A6IDNweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZDogIzJjN2E0Yjtcbn1cblxuLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xufVxuXG4ucmVmZXJyYWwtcmV3YXJkLXBhbmVsIC5maWVsZC1oaW50IHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmNvdXBvbi10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogOHB4O1xufVxuXG4uY291cG9uLWNvZGUge1xuICBmb250LXNpemU6IDAuODZyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIGNvbG9yOiAjMWYzMjI1O1xufVxuXG4uY291cG9uLWJhZGdlIHtcbiAgZm9udC1zaXplOiAwLjY0cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kOiAjZThmMmVhO1xuICBjb2xvcjogIzJmNmE0MztcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHBhZGRpbmc6IDNweCA3cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jb3Vwb24tbWV0YSB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGNvbG9yOiAjNmE3NDZiO1xufVxuXG4uY291cG9uLWNvcHktYnRuIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4YzliYjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMyYTVjM2E7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY291cG9uLWNvcHktYnRuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgRE9DS0VEIElOLVBBR0UgU1RFUCBBQ1RJT04gQkFSIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmJvdHRvbS1iYXIge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBtYXJnaW4tdG9wOiAzNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzFhMWUxYjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTdlMmQ5O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAxOHB4IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDIyLCAzNSwgMjQsIDAuMDUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7XG59XG5cbi5ib3R0b20tYmFyLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3R0b20taW5jb21wbGV0ZS1oaW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgY29sb3I6ICM5MjQwMGU7XG4gIGJhY2tncm91bmQ6ICNmZWYzYzc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZGU2OGE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi5ib3R0b20tZXJyb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBjb2xvcjogI2I5MWMxYztcbiAgYmFja2dyb3VuZDogI2ZlZTJlMjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZlY2FjYTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiA4cHggMTJweDtcbn1cblxuLmJvdHRvbS1mbGFzaCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi5ib3R0b20tZmxhc2guc3VjY2VzcyB7XG4gIGNvbG9yOiAjMTY2NTM0O1xuICBiYWNrZ3JvdW5kOiAjZGNmY2U3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmJmN2QwO1xufVxuXG4uYm90dG9tLWZsYXNoLmVycm9yIHtcbiAgY29sb3I6ICNiOTFjMWM7XG4gIGJhY2tncm91bmQ6ICNmZWUyZTI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWNhY2E7XG59XG5cbi5iYXItcHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6IDEyMHB4O1xufVxuXG4uYmFyLXByaWNlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjY4cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzY0NzQ4Yjtcbn1cblxuLmJhci1wcmljZS1hbW91bnQge1xuICBmb250LWZhbWlseTogJ0NsYXNoIERpc3BsYXknLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNDVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMTU4MDNkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cblxuLmJhci1wcmljZS1zdWIge1xuICBmb250LXNpemU6IDAuNzRyZW07XG4gIGNvbG9yOiAjNjQ3NDhiO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5idG4tYmFjayB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjY2JkNWUxO1xuICBjb2xvcjogIzMzNDE1NTtcbiAgZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgcGFkZGluZzogMTFweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2UyZThmMDtcbiAgICBjb2xvcjogIzBmMTcyYTtcbiAgICBib3JkZXItY29sb3I6ICM5NGEzYjg7XG4gIH1cbn1cblxuLmJ0bi1uZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxNmEzNGEsICMxNTgwM2QpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgcGFkZGluZzogMTNweCAyNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycywgdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpLCBib3gtc2hhZG93IDAuMnM7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgyMiwgMTYzLCA3NCwgMC4yNSk7XG5cbiAgLmJ0bi1hcnJvdyB7XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gIH1cblxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTU4MDNkLCAjMTY2NTM0KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMjJweCByZ2JhKDIyLCAxNjMsIDc0LCAwLjM1KTtcbiAgICAuYnRuLWFycm93IHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xuICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLmJ0bi1wYXkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTU4MDNkLCAjMDQ3ODU3KTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSg0LCAxMjAsIDg3LCAwLjMpO1xuICBmb250LXdlaWdodDogODAwO1xuXG4gIC5idG4tcGF5LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxNjY1MzQsICMwNjVmNDYpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSg0LCAxMjAsIDg3LCAwLjQpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgU0VDVVJFIFBBWU1FTlQgR0FURVdBWSBNT0RBTCBTVFlMRVMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ucGF5bWVudC1tb2RhbC1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAsIDE4LCAxMiwgMC43Mik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTEwMDtcbiAgcGFkZGluZzogMTZweDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBlYXNlO1xufVxuXG4ucGF5bWVudC1tb2RhbC1zaGVldCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDc0MHB4O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAwIDI0cHggNjBweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBhbmltYXRpb246IG1vZGFsU2NhbGVVcCAwLjI1cyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBtb2RhbFNjYWxlVXAge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KSB0cmFuc2xhdGVZKDEycHgpOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi5wYXktbW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEzMjIxNSwgIzFkMzMyMCk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxOHB4IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNnB4O1xuXG4gIC5wYXktYnJhbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gIH1cblxuICAucGF5LXNoaWVsZC1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuXG4gIC5wYXktdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2xhc2ggRGlzcGxheScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjEycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG4gIH1cblxuICAucGF5LXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gIH1cblxuICAucGF5LWhlYWRlci1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTRweDtcbiAgfVxuXG4gIC5wYXktYW1vdW50LXBpbGwge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIHBhZGRpbmc6IDZweCAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cblxuICAucGF5LWFtb3VudC1sYmwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMC42MnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgfVxuXG4gIC5wYXktYW1vdW50LXZhbCB7XG4gICAgZm9udC1mYW1pbHk6ICdDbGFzaCBEaXNwbGF5Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzRhZGU4MDtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICB9XG5cbiAgLmJ0bi1jbG9zZS1wYXkge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgpOyB9XG4gIH1cbn1cblxuLnBheS1vcmRlci1zdHJpcCB7XG4gIGJhY2tncm91bmQ6ICNmMWY1ZjI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGUzO1xuICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzM3NDE1MTtcblxuICAucGF5LW9yZGVyLW1ldGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAubWV0YS1kb3Qge1xuICAgIGNvbG9yOiAjOWNhM2FmO1xuICB9XG5cbiAgLnBheS1wbGFuLWJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGJlYWZlO1xuICAgIGNvbG9yOiAjMWU0MGFmO1xuICAgIGZvbnQtc2l6ZTogMC42OHJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIH1cbn1cblxuLnBheS1tb2RhbC1ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNDBweCAxZnI7XG4gIG1pbi1oZWlnaHQ6IDM4MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmFmYWY5O1xufVxuXG4ucGF5LW1ldGhvZHMtbmF2IHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U3ZTVlNDtcbiAgcGFkZGluZzogMTRweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDZweDtcbn1cblxuLnBheS1tZXRob2QtdGFiIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gIC50YWItaWNvbi13cmFwIHtcbiAgICB3aWR0aDogMzRweDtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgYmFja2dyb3VuZDogI2U3ZTVlNDtcbiAgfVxuXG4gIC50YWItY29weSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnRhYi1uYW1lIHtcbiAgICBmb250LXNpemU6IDAuODRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzI5MjUyNDtcbiAgfVxuXG4gIC50YWItYmFkZ2Uge1xuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICBjb2xvcjogIzE2YTM0YTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLnRhYi1zdWIge1xuICAgIGZvbnQtc2l6ZTogMC42OHJlbTtcbiAgICBjb2xvcjogIzc4NzE2YztcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlY2ViZTk7XG4gIH1cblxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItY29sb3I6ICNkNmQzZDE7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuXG4gICAgLnRhYi1uYW1lIHtcbiAgICAgIGNvbG9yOiAjMTY2NTM0O1xuICAgIH1cblxuICAgIC50YWItaWNvbi13cmFwIHtcbiAgICAgIGJhY2tncm91bmQ6ICNkY2ZjZTc7XG4gICAgfVxuICB9XG59XG5cbi5wYXktbWV0aG9kcy1jb250ZW50IHtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi51cGktc2VnbWVudGVkLXN3aXRjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNmM2Y0ZjY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICBidXR0b24ge1xuICAgIGZsZXg6IDE7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM0YjU1NjM7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBjb2xvcjogIzExMTgyNztcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgIH1cbiAgfVxufVxuXG4udXBpLXFyLWJveCB7XG4gIC5xci1jYW52YXMtd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjRweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAucXItZnJhbWUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2U1ZTdlYjtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAucXItaW5zdHJ1Y3Rpb25zIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICAucXItdGltZXItcGlsbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmVmM2M3O1xuICAgIGNvbG9yOiAjOTI0MDBlO1xuICAgIGZvbnQtc2l6ZTogMC43NHJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcblxuICAgIC50aW1lci1kb3Qge1xuICAgICAgd2lkdGg6IDdweDtcbiAgICAgIGhlaWdodDogN3B4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogI2Y1OWUwYjtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMS41cyBpbmZpbml0ZTtcbiAgICB9XG4gIH1cblxuICAucXItaGludCB7XG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xuICAgIGNvbG9yOiAjNGI1NTYzO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC51cGktYXBwLWJhZGdlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiA2cHg7XG5cbiAgICAuYXBwLWNoaXAge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjRmNjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzM3NDE1MTtcbiAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxuICB9XG59XG5cbi51cGktdnBhLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcblxuICAudnBhLWlucHV0LWdyb3VwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC52cGEtcXVpY2stY2hpcHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogOHB4O1xuXG4gICAgLnZwYS1jaGlwIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2Y0ZjY7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkNWRiO1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzc0MTUxO1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTVlN2ViO1xuICAgICAgICBib3JkZXItY29sb3I6ICM5Y2EzYWY7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5wYXktaW5wdXQtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzc0MTUxO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5wYXktaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZDFkNWRiO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMXB4IDE0cHg7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGNvbG9yOiAjMTExODI3O1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xuXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzE2YTM0YTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgzNCwgMTk3LCA5NCwgMC4xNSk7XG4gIH1cbn1cblxuLmNhcmQtZm9ybS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDE0cHg7XG5cbiAgLmZ1bGwgeyBncmlkLWNvbHVtbjogc3BhbiAyOyB9XG4gIC5oYWxmIHsgZ3JpZC1jb2x1bW46IHNwYW4gMTsgfVxuXG4gIC5jYXJkLWlucHV0LXdyYXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuY2FyZC1icmFuZC1iYWRnZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTJweDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgYmFja2dyb3VuZDogI2YzZjRmNjtcbiAgICAgIGNvbG9yOiAjMWYyOTM3O1xuICAgICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICAgIH1cbiAgfVxuXG4gIC5wYXktc2F2ZS1jYXJkIHtcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgY29sb3I6ICM0YjU1NjM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5iYW5rcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiAxMHB4O1xuXG4gIC5iYW5rLXBpbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2Y5ZmFmYjtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNlNWU3ZWI7XG4gICAgcGFkZGluZzogMTBweCAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgIH1cblxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMTZhMzRhO1xuICAgICAgYmFja2dyb3VuZDogI2YwZmRmNDtcbiAgICAgIGNvbG9yOiAjMTU4MDNkO1xuICAgIH1cbiAgfVxufVxuXG4ucGF5LXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNkMWQ1ZGI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBvdXRsaW5lOiBub25lO1xuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICMxNmEzNGE7XG4gIH1cbn1cblxuLndhbGxldHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICAud2FsbGV0LXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTVlN2ViO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXG4gICAgLndhbGxldC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIH1cblxuICAgIC53YWxsZXQtaW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHN0cm9uZyB7IGZvbnQtc2l6ZTogMC44NXJlbTsgY29sb3I6ICMxMTE4Mjc7IH1cbiAgICAgIHNtYWxsIHsgZm9udC1zaXplOiAwLjcycmVtOyBjb2xvcjogIzZiNzI4MDsgfVxuICAgIH1cblxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMTZhMzRhO1xuICAgICAgYmFja2dyb3VuZDogI2YwZmRmNDtcbiAgICB9XG4gIH1cbn1cblxuLmJ0bi1wYXktbW9kYWwge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE2YTM0YSwgIzE1ODAzZCk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAwLjkycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggcmdiYSgyMiwgMTYzLCA3NCwgMC4zNSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE1ODAzZCwgIzE2NjUzNCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDIycHggcmdiYSgyMiwgMTYzLCA3NCwgMC40NSk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjOWNhM2FmO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnBheS1zdWNjZXNzLXBhbmUge1xuICBwYWRkaW5nOiA0OHB4IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLnBheS1zdWNjZXNzLWNpcmNsZSB7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMjJjNTVlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDM0LCAxOTcsIDk0LCAwLjQpO1xuICAgIGFuaW1hdGlvbjogc2NhbGVJbiAwLjM1cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIH1cblxuICBoMyB7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogIzExMTgyNztcbiAgfVxuXG4gIC5wYXktc3VjY2Vzcy1sZWFkIHtcbiAgICBmb250LXNpemU6IDAuODhyZW07XG4gICAgY29sb3I6ICM0YjU1NjM7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICB9XG5cbiAgLnBheS1zdWNjZXNzLWJhZGdlIHtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICNkY2ZjZTc7XG4gICAgY29sb3I6ICMxNTgwM2Q7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgcGFkZGluZzogNnB4IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJmN2QwO1xuICB9XG5cbiAgLnBheS1yZWRpcmVjdC1oaW50IHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMC43NHJlbTtcbiAgICBjb2xvcjogIzljYTNhZjtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNjYWxlSW4ge1xuICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMCk7IG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IDE7IH1cbn1cblxuLnBheS1tb2RhbC1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjlmYWZiO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgcGFkZGluZzogMTBweCAyNHB4O1xuXG4gIC50cnVzdC1pY29ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgY29sb3I6ICM2YjcyODA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIGxheW91dCBmb3IgcGF5bWVudCBtb2RhbCBvbiBzbWFsbGVyIHNjcmVlbnNcbkBtZWRpYSAobWF4LXdpZHRoOiA2ODBweCkge1xuICAucGF5LW1vZGFsLWJvZHkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLnBheS1tZXRob2RzLW5hdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZTVlNDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLnBheS1tZXRob2QtdGFiIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgfVxuXG4gIC5jYXJkLWZvcm0tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgLmhhbGYgeyBncmlkLWNvbHVtbjogc3BhbiAxOyB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIExPQURFUiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcblxuLmxvYWRlci1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkOyAgICAgIC8vIGNvdmVycyB0aGUgdmlld3BvcnQgcmVnYXJkbGVzcyBvZiBwYXJlbnQgcG9zaXRpb25pbmdcbiAgaW5zZXQ6IDA7ICAgICAgICAgICAgICAvLyB0b3A6MDsgcmlnaHQ6MDsgYm90dG9tOjA7IGxlZnQ6MDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpOyAvLyBhZGp1c3QgdG8gbWF0Y2ggeW91ciB0aGVtZVxuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubG9hZGVyLXJpbmcge1xuICB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTRkZGQzO1xuICBib3JkZXItdG9wLWNvbG9yOiAjM2Q2YjRhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHsgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cblxuLmxvYWRlci10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBjb2xvcjogIzdlOGM4MDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyAgUkVTUE9OU0lWRSBBUkNISVRFQ1RVUkVcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuXG4vLyBMYXJnZSBEZXNrdG9wICjDosKJwqUgMTQwMHB4KVxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xuICAuY2hlY2tvdXQtc2hlbGwgIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MjBweCAxZnI7IH1cbiAgLmxlZnQtcGFuZWwgICAgICB7IGRpc3BsYXk6IGZsZXg7IH1cbiAgLm1vYmlsZS1uYXYgICAgICB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLm1vYmlsZS1zdGVwcyAgICB7IGRpc3BsYXk6IG5vbmU7IH1cblxuICAudHJlay10aHVtYiAgICAgIHsgaGVpZ2h0OiAyNjBweDsgfVxuICAudHJlay1uYW1lICAgICAgIHsgZm9udC1zaXplOiAxLjU1cmVtOyB9XG4gIC50cmVrLWluZm8gICAgICAgeyBwYWRkaW5nOiAwIDMycHggMjhweDsgfVxuICAucGFuZWwtZGl2aWRlciAgIHsgbWFyZ2luOiAwIDMycHggMjhweDsgfVxuICAuc3RlcHBlciAgICAgICAgIHsgcGFkZGluZzogMCAzMnB4OyB9XG4gIC5wcmljZS1zdW1tYXJ5ICAgeyBtYXJnaW46IDI4cHggMzJweCAwOyBwYWRkaW5nOiAyMnB4OyB9XG5cbiAgLmZvcm0tYXJlYSAgICAgICB7IHBhZGRpbmc6IDU2cHggNzJweCA1NnB4OyBtYXgtd2lkdGg6IDc2MHB4OyB9XG4gIC5zdGVwLWgxICAgICAgICAgeyBmb250LXNpemU6IDIuMnJlbTsgfVxuICAuc3RlcC1kZXNjICAgICAgIHsgZm9udC1zaXplOiAwLjlyZW07IH1cblxuICAuYm90dG9tLWJhciAgICAgIHsgcGFkZGluZzogMjBweCAzMnB4OyB9XG4gIC5iYXItcHJpY2UtYW1vdW50eyBmb250LXNpemU6IDEuNXJlbTsgfVxuICAuYnRuLW5leHQgICAgICAgIHsgcGFkZGluZzogMTRweCAzNnB4OyBmb250LXNpemU6IDAuODJyZW07IH1cbiAgLmJ0bi1iYWNrICAgICAgICB7IHBhZGRpbmc6IDEycHggMjRweDsgZm9udC1zaXplOiAwLjgycmVtOyB9XG59XG5cbi8vIFN0YW5kYXJkIERlc2t0b3AgKDEyMDBweCDDosKAwpMgMTM5OXB4KVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge1xuICAuY2hlY2tvdXQtc2hlbGwgIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNjBweCAxZnI7IH1cbiAgLmxlZnQtcGFuZWwgICAgICB7IGRpc3BsYXk6IGZsZXg7IH1cbiAgLm1vYmlsZS1uYXYgICAgICB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLm1vYmlsZS1zdGVwcyAgICB7IGRpc3BsYXk6IG5vbmU7IH1cblxuICAuZm9ybS1hcmVhICAgICAgIHsgcGFkZGluZzogNDhweCA1NnB4IDQ4cHg7IG1heC13aWR0aDogNjgwcHg7IH1cbiAgLmJvdHRvbS1iYXIgICAgICB7IHBhZGRpbmc6IDE4cHggMjhweDsgfVxufVxuXG4vLyBDb21wYWN0IERlc2t0b3AgKDEwMjRweCDDosKAwpMgMTE5OXB4KVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAuY2hlY2tvdXQtc2hlbGwgIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMjBweCAxZnI7IH1cbiAgLmxlZnQtcGFuZWwgICAgICB7IGRpc3BsYXk6IGZsZXg7IH1cbiAgLm1vYmlsZS1uYXYgICAgICB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLm1vYmlsZS1zdGVwcyAgICB7IGRpc3BsYXk6IG5vbmU7IH1cblxuICAudHJlay1uYW1lICAgICAgIHsgZm9udC1zaXplOiAxLjJyZW07IH1cbiAgLnRyZWstaW5mbyAgICAgICB7IHBhZGRpbmc6IDAgMjBweCAyMHB4OyB9XG4gIC5wYW5lbC1kaXZpZGVyICAgeyBtYXJnaW46IDAgMjBweCAyMHB4OyB9XG4gIC5zdGVwcGVyICAgICAgICAgeyBwYWRkaW5nOiAwIDIwcHg7IH1cbiAgLnByaWNlLXN1bW1hcnkgICB7IG1hcmdpbjogMjBweCAyMHB4IDA7IHBhZGRpbmc6IDE2cHg7IH1cblxuICAuZm9ybS1hcmVhICAgICAgIHsgcGFkZGluZzogMzZweCAzNnB4IDQ4cHg7IG1heC13aWR0aDogMTAwJTsgfVxuICAuYm90dG9tLWJhciAgICAgIHsgcGFkZGluZzogMTZweCAyNHB4OyB9XG4gIC5iYXItcHJpY2UtYW1vdW50eyBmb250LXNpemU6IDEuM3JlbTsgfVxuICAuYnRuLW5leHQgICAgICAgIHsgcGFkZGluZzogMTFweCAyMHB4OyB9XG59XG5cbi8vIFRhYmxldCAmIE1vYmlsZSBWaWV3cG9ydHMgKDwgMTAyNHB4KSDDosKAwpQgQ2xlYW4gU2luZ2xlLUNvbHVtbiBTd2l0Y2hcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLmNoZWNrb3V0LXNoZWxsICB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyBtaW4taGVpZ2h0OiAxMDB2aDsgfVxuICAubGVmdC1wYW5lbCAgICAgIHsgZGlzcGxheTogbm9uZTsgfVxuICAubW9iaWxlLW5hdiAgICAgIHsgZGlzcGxheTogZmxleDsgfVxuICAubW9iaWxlLXN0ZXBzICAgIHsgZGlzcGxheTogZmxleDsgfVxuXG4gIC5mb3JtLWFyZWEgICAgICAgeyBtYXgtd2lkdGg6IDc2MHB4OyBtYXJnaW46IDAgYXV0bzsgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IDMycHggMjhweCA0OHB4OyB9XG4gIC5zdGVwLWgxICAgICAgICAgeyBmb250LXNpemU6IDEuNzVyZW07IH1cbiAgLnN0ZXAtaGVhZGxpbmUgICB7IG1hcmdpbi1ib3R0b206IDI4cHg7IH1cbiAgLmJvdHRvbS1iYXIgICAgICB7IG1hcmdpbi10b3A6IDMycHg7IH1cbn1cblxuLy8gVGFibGV0IFBvcnRyYWl0ICYgTWVkaXVtIE1vYmlsZSAoPCA3NjhweClcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9ybS1hcmVhICAgICAgICAgIHsgcGFkZGluZzogMjRweCAyMHB4IDQwcHg7IH1cbiAgLnN0ZXAtaDEgICAgICAgICAgICB7IGZvbnQtc2l6ZTogMS41cmVtOyB9XG4gIC5zdGVwLWhlYWRsaW5lICAgICAgeyBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XG5cbiAgLmZvcm0tcm93ICAgICAgICAgICB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyBnYXA6IDE0cHg7IG1hcmdpbi1ib3R0b206IDE0cHg7IH1cbiAgLmZvcm0tcm93LnRocmVlICAgICB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG4gIC5hZGRvbnMtZ3JpZCAgICAgICAgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICAuY291cG9uLWxpc3QtZ3JpZCAgIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cbiAgLnBheW1lbnQtcGxhbi1ncmlkICB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG4gIC5wYXJ0aWNpcGFudC1maWVsZHMgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgcGFkZGluZzogMTZweDsgZ2FwOiAxNHB4OyB9XG5cbiAgLy8gUmV2aWV3IHRhYmxlIHNjcm9sbFxuICAucmV2aWV3LWJsb2NrICAgICAgIHsgb3ZlcmZsb3cteDogYXV0bzsgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyB9XG4gIC5wLXRhYmxlICAgICAgICAgICAgeyBtaW4td2lkdGg6IDQ2MHB4OyB9XG4gIC5yZXZpZXctcm93ICAgICAgICAgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiA0cHg7IC5yZXZpZXctdmFsIHsgdGV4dC1hbGlnbjogbGVmdDsgfSB9XG4gIC5wYi1yb3cgICAgICAgICAgICAgeyBmbGV4LXdyYXA6IHdyYXA7IC5wYi1sYWJlbCB7IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgfSAucGItdmFsIHsgZmxleC1zaHJpbms6IDA7IH0gfVxufVxuXG4vLyBNb2JpbGUgQnJlYWtwb2ludCAoPCA2NDBweClcbkBtZWRpYSAobWF4LXdpZHRoOiA2MzlweCkge1xuICAuYm90dG9tLWJhciB7XG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgfVxuICAuYm90dG9tLWJhci1tYWluIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTJweDtcbiAgfVxuICAuYmFyLXByaWNlIHtcbiAgICBvcmRlcjogMTtcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIC5iYXItcHJpY2UtYW1vdW50IHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbiAgLmJ0bi1iYWNrIHtcbiAgICBvcmRlcjogMjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgbWluLWhlaWdodDogNDRweDtcbiAgfVxuICAuYnRuLW5leHQsIC5idG4tcGF5IHtcbiAgICBvcmRlcjogMztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA0NnB4O1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgfVxuXG4gIC8vIEJhdGNoIE9wdGlvbiBDYXJkIEdyaWRcbiAgLmJhdGNoLW9wdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMWZyIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgIFwicmFkaW8gaW5mbyBwcmljZVwiXG4gICAgICBcInJhZGlvIGluZm8gc3RhdHVzXCI7XG4gICAgZ2FwOiA2cHggMTJweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEycHggMTRweDtcbiAgfVxuICAuYmF0Y2gtcmFkaW8gIHsgZ3JpZC1hcmVhOiByYWRpbzsgYWxpZ24tc2VsZjogY2VudGVyOyB9XG4gIC5iYXRjaC1pbmZvICAgeyBncmlkLWFyZWE6IGluZm87IG1pbi13aWR0aDogMDsgfVxuICAuYmF0Y2gtZGF0ZXMgIHsgZm9udC1zaXplOiAwLjg0cmVtOyB9XG4gIC5iYXRjaC1tZXRhICAgeyBmb250LXNpemU6IDAuNzJyZW07IH1cbiAgLmJhdGNoLXByaWNlICB7IGdyaWQtYXJlYTogcHJpY2U7IHRleHQtYWxpZ246IHJpZ2h0OyBmb250LXNpemU6IDEuMDVyZW07IH1cbiAgLmJhdGNoLXN0YXR1cyB7IGdyaWQtYXJlYTogc3RhdHVzOyBqdXN0aWZ5LXNlbGY6IGVuZDsgZm9udC1zaXplOiAwLjZyZW07IHBhZGRpbmc6IDNweCA2cHg7IH1cblxuICAvLyBXYWxsZXQgV2lkZ2V0XG4gIC53YWxsZXQtd2lkZ2V0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTJweDtcbiAgfVxuICAud2FsbGV0LWFjdGlvbiB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgfVxuXG4gIC8vIFBheW1lbnQgR2F0ZXdheSBNb2RhbFxuICAucGF5bWVudC1tb2RhbC1iYWNrZHJvcCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAucGF5bWVudC1tb2RhbC1zaGVldCB7XG4gICAgbWF4LWhlaWdodDogOTR2aDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB9XG4gIC5wYXktbW9kYWwtYm9keSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuICAucGF5LW1ldGhvZHMtbmF2IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZTVlNDtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBnYXA6IDZweDtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBkaXNwbGF5OiBub25lOyB9XG4gIH1cbiAgLnBheS1tZXRob2QtdGFiIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC50YWItc3ViIHsgZGlzcGxheTogbm9uZTsgfVxuICB9XG4gIC5wYXktbWV0aG9kcy1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxOHB4IDE0cHg7XG4gIH1cbiAgLmJhbmtzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC5jYXJkLWZvcm0tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgLmhhbGYgeyBncmlkLWNvbHVtbjogc3BhbiAxOyB9XG4gIH1cbiAgLnVwaS1xci1ib3ggLnFyLWNhbnZhcy13cmFwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5xci1pbnN0cnVjdGlvbnMge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5xci10aW1lci1waWxsIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cblxuLy8gU21hbGwgTW9iaWxlICg8IDQ4MHB4KVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3OXB4KSB7XG4gIC5tb2JpbGUtbmF2ICAgICAgICAgeyBwYWRkaW5nOiAxMHB4IDE0cHg7IH1cbiAgLm1vYmlsZS1uYXYtc3BhY2VyICB7IHdpZHRoOiAzMnB4OyB9XG4gIC5tb2JpbGUtdGl0bGUgICAgICAgeyBmb250LXNpemU6IDAuODVyZW07IG1heC13aWR0aDogMTcwcHg7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gIC5tb2JpbGUtc3RlcHMgICAgICAgeyBwYWRkaW5nOiAwIDRweDsgfVxuICAubW9iLXN0ZXAgICAgICAgICAgIHsgcGFkZGluZzogMTBweCA4cHg7IGZvbnQtc2l6ZTogMC43cmVtOyBnYXA6IDVweDsgfVxuICAubW9iLXN0ZXAgLm1vYi1udW0gIHsgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgZm9udC1zaXplOiAwLjZyZW07IH1cblxuICAuZm9ybS1hcmVhICAgICAgICAgIHsgcGFkZGluZzogMTZweCAxNHB4IDM2cHg7IH1cbiAgLnN0ZXAtaGVhZGxpbmUgICAgICB7IG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbiAgLnN0ZXAtaDEgICAgICAgICAgICB7IGZvbnQtc2l6ZTogMS4zcmVtOyB9XG4gIC5zdGVwLWRlc2MgICAgICAgICAgeyBmb250LXNpemU6IDAuNzhyZW07IH1cblxuICAuY291bnRlci1yb3cgICAgICAgIHsgd2lkdGg6IDEwMCU7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAuY291bnRlci1idG4gICAgICAgIHsgd2lkdGg6IDQ2cHg7IGhlaWdodDogNDZweDsgfVxuICAuY291bnRlci12YWwgICAgICAgIHsgZmxleDogMTsgfVxuXG4gIC5wYXJ0aWNpcGFudC1maWVsZHMgeyBwYWRkaW5nOiAxNHB4IDEycHg7IGdhcDogMTJweDsgfVxuICAucGFydGljaXBhbnQtaGVhZGVyIHsgcGFkZGluZzogMTJweCAxNHB4OyB9XG5cbiAgLnRlcm1zLWNoZWNrICAgICAgICB7IHBhZGRpbmc6IDEycHg7IGdhcDogOHB4OyB9XG4gIC50ZXJtcy10ZXh0ICAgICAgICAgeyBmb250LXNpemU6IDAuNzZyZW07IH1cblxuICAucmVmZXJyYWwtaW5wdXQtcm93IHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IGdhcDogOHB4OyB9XG4gIC5idG4tYXBwbHksIC5idG4tY2xlYXIgeyB3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4gIC5wYXktbW9kYWwtaGVhZGVyICAgeyBwYWRkaW5nOiAxNHB4OyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogMTBweDsgfVxuICAucGF5LWhlYWRlci1yaWdodCAgIHsgbWFyZ2luLWxlZnQ6IGF1dG87IH1cbiAgLnBheS1hbW91bnQtcGlsbCAgICB7IHBhZGRpbmc6IDRweCAxMHB4OyB9XG4gIC5wYXktYW1vdW50LXZhbCAgICAgeyBmb250LXNpemU6IDEuMTVyZW07IH1cbiAgLnBheS1tb2RhbC1mb290ZXIgICB7IHBhZGRpbmc6IDEwcHggMTJweDsgLnRydXN0LWljb25zIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA2cHg7IH0gfVxufVxuXG4vLyBFeHRyYSBTbWFsbCBNb2JpbGUgKDwgMzYwcHgpXG5AbWVkaWEgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLm1vYi1zdGVwICAgICAgICAgICB7IHBhZGRpbmc6IDhweCA2cHg7IGZvbnQtc2l6ZTogMC42NXJlbTsgfVxuICAuZm9ybS1hcmVhICAgICAgICAgIHsgcGFkZGluZzogMTJweCAxMHB4IDI4cHg7IH1cbiAgLnN0ZXAtaDEgICAgICAgICAgICB7IGZvbnQtc2l6ZTogMS4xNXJlbTsgfVxuICAuYmFyLXByaWNlLWFtb3VudCAgIHsgZm9udC1zaXplOiAxLjFyZW07IH1cbiAgLnByaW1hcnktdGFnICAgICAgICB7IGRpc3BsYXk6IG5vbmU7IH1cbn1cblxuLy8gTW9iaWxlIExhbmRzY2FwZSAoU2hvcnQgVmlld3BvcnRzKVxuQG1lZGlhIChtYXgtaGVpZ2h0OiA1MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5tb2JpbGUtbmF2ICAgICAgICAgeyBwYWRkaW5nOiA2cHggMTRweDsgfVxuICAubW9iLXN0ZXAgICAgICAgICAgIHsgcGFkZGluZzogOHB4IDEwcHg7IH1cbiAgLmZvcm0tYXJlYSAgICAgICAgICB7IHBhZGRpbmctdG9wOiAxMnB4OyBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxuICAuc3RlcC1oZWFkbGluZSAgICAgIHsgbWFyZ2luLWJvdHRvbTogMTRweDsgfVxuICAuYm90dG9tLWJhciAgICAgICAgIHsgbWFyZ2luLXRvcDogMTZweDsgcGFkZGluZzogMTBweCAxNHB4OyB9XG4gIC5idG4tbmV4dCwgLmJ0bi1iYWNrIHsgcGFkZGluZzogOHB4IDE0cHg7IG1pbi1oZWlnaHQ6IDQwcHg7IH1cbiAgLmJhci1wcmljZS1hbW91bnQgICB7IGZvbnQtc2l6ZTogMS4xcmVtOyB9XG59XG5cbi8vIFRvdWNoIC8gUG9pbnRlciBSZWZpbmVtZW50c1xuQG1lZGlhIChob3Zlcjogbm9uZSkgYW5kIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgLmNvdW50ZXItYnRuICAgICB7IHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7IH1cbiAgLmNvdW50ZXItdmFsICAgICB7IGxpbmUtaGVpZ2h0OiA0OHB4OyB9XG4gIC5iYXRjaC1vcHRpb24gICAgeyBwYWRkaW5nOiAxNHB4IDE2cHg7IH1cbiAgLmFkZG9uLWNhcmQgICAgICB7IHBhZGRpbmc6IDE0cHggMTZweDsgfVxuICAuYnRuLW5leHQgICAgICAgIHsgbWluLWhlaWdodDogNDhweDsgfVxuICAuYnRuLWJhY2sgICAgICAgIHsgbWluLWhlaWdodDogNDRweDsgfVxuICAubW9iLXN0ZXAgICAgICAgIHsgbWluLWhlaWdodDogNDRweDsgfVxuICAuYnRuLW5leHQ6aG92ZXIgIHsgdHJhbnNmb3JtOiBub25lOyB9XG4gIC5wbGFuLWNhcmQ6aG92ZXIgeyB0cmFuc2Zvcm06IG5vbmU7IH1cbn1cblxuLy8gRXJyb3IgLyBWYWxpZGF0aW9uXG4uZXJyb3Ige1xuICBjb2xvcjogI2RjMjYyNjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ },

/***/ 1641
/*!************************************!*\
  !*** ./src/app/booking/booking.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Booking: () => (/* binding */ Booking)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _core_encryption_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/encryption.service */ 3242);
var _staticBlock;





class Booking {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.bookingDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.bookingData$ = this.bookingDataSubject.asObservable();
    this.API = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl}`;
  }
  // Set booking data
  setBookingData(data) {
    const encryptedPayload = this.crypto.encrypt(data);
    return this.http.post(`${this.API}/booking`, {
      encryptedPayload
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      try {
        // Decrypt the response
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      } catch (error) {
        throw error;
      }
    }));
  }
  validateCoupon(payload) {
    const encryptedPayload = this.crypto.encrypt(payload);
    return this.http.post(`${this.API}/coupon/validate`, {
      encryptedPayload
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      try {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      } catch (error) {
        throw error;
      }
    }));
  }
  getAvailableCoupons(trekId, userId) {
    const query = userId ? `?userId=${encodeURIComponent(String(userId))}` : "";
    return this.http.get(`${this.API}/coupons/trek/${trekId}${query}`);
  }
  validateReferralCode(payload) {
    const encryptedPayload = this.crypto.encrypt(payload);
    return this.http.post(`${this.API}/referrals/validate`, {
      encryptedPayload
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      try {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      } catch (error) {
        throw error;
      }
    }));
  }
  getReferralSummary(userId) {
    return this.http.get(`${this.API}/referrals/${userId}/summary`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      if (res?.data) {
        try {
          const decrypted = this.crypto.decrypt(res.data);
          return {
            ...res,
            data: decrypted
          };
        } catch (error) {}
      }
      return res;
    }));
  }
  // Get current booking data
  getBookingData() {
    return this.bookingDataSubject.value;
  }
  // Clear booking data
  clearBookingData() {
    this.bookingDataSubject.next(null);
  }
  // Calculate total price
  calculateTotal(basePrice, participants, addOns) {
    const baseTotal = basePrice * participants;
    const addOnsTotal = addOns.filter(addon => addon.selected || Number(addon.quantity) > 0).reduce((sum, addon) => {
      const quantity = Number(addon.quantity) > 0 ? Number(addon.quantity) : 0;
      return sum + Number(addon.price) * quantity;
    }, 0);
    return baseTotal + addOnsTotal;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function Booking_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Booking)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_encryption_service__WEBPACK_IMPORTED_MODULE_5__.EncryptionService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: Booking,
    factory: Booking.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 690
/*!*************************************************!*\
  !*** ./src/app/shared/Only number.directive.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnlyNumberDirective: () => (/* binding */ OnlyNumberDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;

class OnlyNumberDirective {
  onKeyDown(e) {
    const allowed = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
    if (allowed.includes(e.key)) return;
    // Block anything that isn't a digit
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  }
  onPaste(e) {
    const pasted = e.clipboardData?.getData('text') ?? '';
    if (!/^\d+$/.test(pasted)) {
      e.preventDefault();
    }
  }
  onInput(e) {
    const input = e.target;
    // Strip any non-digit that slipped through (e.g. autofill)
    input.value = input.value.replace(/\D/g, '');
  }
  static #_ = _staticBlock = () => (this.ɵfac = function OnlyNumberDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OnlyNumberDirective)();
  }, this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: OnlyNumberDirective,
    selectors: [["", "onlyNumber", ""]],
    hostBindings: function OnlyNumberDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function OnlyNumberDirective_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        })("paste", function OnlyNumberDirective_paste_HostBindingHandler($event) {
          return ctx.onPaste($event);
        })("input", function OnlyNumberDirective_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
    }
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_booking_booking-module_ts.js.map