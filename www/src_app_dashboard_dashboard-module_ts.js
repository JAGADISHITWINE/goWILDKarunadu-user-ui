"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_dashboard_dashboard-module_ts"],{

/***/ 8018
/*!******************************************!*\
  !*** ./src/app/core/referral.service.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReferralService: () => (/* binding */ ReferralService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _encryption_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./encryption.service */ 3242);
var _staticBlock;





class ReferralService {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
  }
  getSummary(userId) {
    return this.http.get(`${this.API}/referrals/${userId}/summary`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      if (!res?.data) {
        return {
          success: res?.success !== false,
          data: null,
          message: res?.message
        };
      }
      const decrypted = this.crypto.decrypt(res.data);
      return {
        success: res?.success !== false,
        data: decrypted,
        message: res?.message
      };
    }));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ReferralService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ReferralService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_encryption_service__WEBPACK_IMPORTED_MODULE_4__.EncryptionService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ReferralService,
    factory: ReferralService.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 5722
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard-module.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ 2320);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent
}];
class DashboardModule {
  static #_ = _staticBlock = () => (this.ɵfac = function DashboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: DashboardModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DashboardModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ },

/***/ 2320
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard */ 2625);
/* harmony import */ var _core_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/dropdown.service */ 4222);
/* harmony import */ var _core_public_route_id_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/public-route-id.service */ 2440);
/* harmony import */ var _core_referral_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/referral.service */ 8018);
/* harmony import */ var _core_token_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/token.service */ 6280);
/* harmony import */ var _auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../auth/auth-modal.service */ 2454);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/auth */ 2964);
/* harmony import */ var _core_media_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/media.service */ 6657);
/* harmony import */ var _core_site_settings_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../core/site-settings.service */ 1662);

var _staticBlock;





















const _c0 = (a0, a1, a2) => ({
  "bi-info-circle-fill": a0,
  "bi-check-circle-fill": a1,
  "bi-exclamation-triangle-fill": a2
});
function DashboardComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function DashboardComponent_div_0_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 55)(1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "ion-spinner", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Loading referral perks\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
}
function DashboardComponent_div_0_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 58)(1, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Refer & Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Share the wild. Save together.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Sign in to unlock your personal referral code and gift instant discounts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_2_div_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.openReferralLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Sign in to earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_0_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 62)(1, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Refer & Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Referral details unavailable.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_2_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.refreshReferralSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Try again");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.referralError);
  }
}
function DashboardComponent_div_0_ng_template_2_div_3_p_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.referralCopyFeedback);
  }
}
function DashboardComponent_div_0_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 64)(1, "div", 65)(2, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Refer & Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 67)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_2_div_3_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.copyReferralCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 69)(18, "div")(19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Referrals");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div")(24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "Free slots");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 70)(29, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_2_div_3_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.shareReferral());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "Share Invite");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_2_div_3_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.refreshReferralSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](32, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, DashboardComponent_div_0_ng_template_2_div_3_p_33_Template, 2, 1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("paused", !ctx_r1.referralSummary.programActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("paused", !ctx_r1.referralSummary.programActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.referralSummary.programActive ? "Active" : "Paused", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" Give \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](8, 13, ctx_r1.referralSummary.discountTiers.base || 0, "1.0-0"), ", get \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](9, 16, ctx_r1.referralSummary.discountTiers.bonus || ctx_r1.referralSummary.discountTiers.base || 0, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.referralSummary.referralCode || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.referralNextRewardLabel || "Bring " + (ctx_r1.referralSummary.discountTiers.bonusParticipantThreshold || 5) + " friends to unlock bonus savings.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.referralSummary.successfulReferrals || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.referralSummary.freeSlotsAvailable || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r1.referralSummary.referralCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.referralCopyFeedback);
  }
}
function DashboardComponent_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, DashboardComponent_div_0_ng_template_2_div_0_Template, 5, 0, "div", 51)(1, DashboardComponent_div_0_ng_template_2_div_1_Template, 9, 0, "div", 52)(2, DashboardComponent_div_0_ng_template_2_div_2_Template, 9, 1, "div", 53)(3, DashboardComponent_div_0_ng_template_2_div_3_Template, 34, 19, "div", 54);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.referralLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.referralLoading && ctx_r1.referralRequiresAuth);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.referralLoading && !ctx_r1.referralRequiresAuth && !ctx_r1.referralSummary && ctx_r1.referralError);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.referralLoading && !ctx_r1.referralRequiresAuth && ctx_r1.referralSummary);
  }
}
function DashboardComponent_div_0_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 78)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Active Routes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.activeRoutes);
  }
}
function DashboardComponent_div_0_div_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 78)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Avg Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](3, 1, ctx_r1.averageRating, "1.1-1"), " ");
  }
}
function DashboardComponent_div_0_div_28_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 78)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Trekkers / yr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.trekkersThisYear);
  }
}
function DashboardComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DashboardComponent_div_0_div_28_div_1_Template, 5, 1, "div", 77)(2, DashboardComponent_div_0_div_28_div_2_Template, 7, 4, "div", 77)(3, DashboardComponent_div_0_div_28_div_3_Template, 5, 1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.activeRoutes > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.averageRating > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.trekkersThisYear > 0);
  }
}
function DashboardComponent_div_0_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.searchQuery = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_0_div_35_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_div_35_button_3_Template_button_click_0_listener() {
      const filter_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.setFilter(filter_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filter_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r1.selectedFilter === filter_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", filter_r8.label, " ");
  }
}
function DashboardComponent_div_0_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 82)(1, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Difficulty:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, DashboardComponent_div_0_div_35_button_3_Template, 2, 3, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.filters);
  }
}
function DashboardComponent_div_0_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", option_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", option_r9.label, " ");
  }
}
function DashboardComponent_div_0_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_button_42_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.clearDiscoveryFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_0_div_43_button_9_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const collection_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinterpolate1"]("bi ", collection_r12.icon || "bi-tag", " me-1"));
  }
}
function DashboardComponent_div_0_div_43_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_div_43_button_9_Template_button_click_0_listener() {
      const collection_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.setCollection(collection_r12.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DashboardComponent_div_0_div_43_button_9_i_1_Template, 1, 3, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collection_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r1.selectedCollection === collection_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", collection_r12.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", collection_r12.label, " ");
  }
}
function DashboardComponent_div_0_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 89)(1, "div", 90)(2, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " Curated Themes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Swipe themes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, DashboardComponent_div_0_div_43_button_9_Template, 3, 4, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.collections);
  }
}
function DashboardComponent_div_0_main_44_article_14_div_30_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const trek_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" (", trek_r14.reviews, ")");
  }
}
function DashboardComponent_div_0_main_44_article_14_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, DashboardComponent_div_0_main_44_article_14_div_30_ng_container_5_Template, 2, 1, "ng-container", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const trek_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](4, 2, trek_r14.rating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", trek_r14.reviews > 0);
  }
}
function DashboardComponent_div_0_main_44_article_14_div_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", h_r15, " ");
  }
}
function DashboardComponent_div_0_main_44_article_14_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DashboardComponent_div_0_main_44_article_14_div_31_span_1_Template, 2, 1, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trek_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", trek_r14.highlights);
  }
}
function DashboardComponent_div_0_main_44_article_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "article", 113)(1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_main_44_article_14_Template_div_click_1_listener() {
      const trek_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.viewDetails(trek_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 115)(3, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 117)(5, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 122)(14, "div", 123)(15, "h3", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_main_44_article_14_Template_h3_click_15_listener() {
      const trek_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.viewDetails(trek_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 127)(22, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, DashboardComponent_div_0_main_44_article_14_div_30_Template, 6, 5, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, DashboardComponent_div_0_main_44_article_14_div_31_Template, 2, 1, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 132)(33, "div", 133)(34, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](36, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "/ person \u2022 permits incl.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "div", 136)(40, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_main_44_article_14_Template_button_click_40_listener() {
      const trek_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.toggleCompare(trek_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](41, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_main_44_article_14_Template_button_click_44_listener() {
      const trek_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.openTrekEnquiry(trek_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](45, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_main_44_article_14_Template_button_click_46_listener() {
      const trek_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.viewDetails(trek_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](49, "i", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const trek_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", trek_r14.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", trek_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](trek_r14.difficulty.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", trek_r14.difficulty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r1.getAvailabilityClass(trek_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.getAvailabilityLabel(trek_r14), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r14.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r14.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r14.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r14.groupSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", trek_r14.rating > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", trek_r14.highlights == null ? null : trek_r14.highlights.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](36, 21, trek_r14.price, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r1.isCompared(trek_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r1.canAddToCompare(trek_r14))("title", ctx_r1.isCompared(trek_r14.id) ? "In comparison (click to remove)" : "Compare this trek");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r1.isCompared(trek_r14.id) ? "bi-check-circle-fill" : "bi-shuffle");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.isCompared(trek_r14.id) ? "Compared" : "Compare");
  }
}
function DashboardComponent_div_0_main_44_div_15_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_main_44_div_15_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.showMoreTreks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Show More Treks");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_0_main_44_div_15_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_main_44_div_15_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.showLessTreks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Show Less");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "i", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_0_main_44_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 148)(1, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, DashboardComponent_div_0_main_44_div_15_button_4_Template, 4, 0, "button", 151)(5, DashboardComponent_div_0_main_44_div_15_button_5_Template, 4, 0, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "a", 152)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "View Full Schedule (All Treks)");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" Showing ", ctx_r1.filteredTreks.length, " of ", ctx_r1.totalFilteredCount, " expeditions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.hasMoreTreks);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.hasMoreTreks && ctx_r1.totalFilteredCount > ctx_r1.initialVisibleCount);
  }
}
function DashboardComponent_div_0_main_44_div_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function DashboardComponent_div_0_main_44_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DashboardComponent_div_0_main_44_div_16_ng_container_1_Template, 1, 0, "ng-container", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    const referralCardStack_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", referralCardStack_r18);
  }
}
function DashboardComponent_div_0_main_44_ng_container_17_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function DashboardComponent_div_0_main_44_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "aside", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, DashboardComponent_div_0_main_44_ng_container_17_ng_container_2_Template, 1, 0, "ng-container", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    const referralCardStack_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", referralCardStack_r18);
  }
}
function DashboardComponent_div_0_main_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "main", 99)(1, "div", 100)(2, "div", 101)(3, "div")(4, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " Live Departures ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "h2", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Upcoming Western Ghats Treks");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 106)(12, "div", 107)(13, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, DashboardComponent_div_0_main_44_article_14_Template, 50, 24, "article", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, DashboardComponent_div_0_main_44_div_15_Template, 10, 4, "div", 110)(16, DashboardComponent_div_0_main_44_div_16_Template, 2, 1, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, DashboardComponent_div_0_main_44_ng_container_17_Template, 3, 1, "ng-container", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" Showing ", ctx_r1.filteredTreks.length, " of ", ctx_r1.totalFilteredCount, " scheduled departures. Handcrafted routes with certified leads. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.filteredTreks)("ngForTrackBy", ctx_r1.trackByTrek);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.totalFilteredCount > ctx_r1.initialVisibleCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.referralRequiresAuth);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.referralRequiresAuth);
  }
}
function DashboardComponent_div_0_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 160)(1, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "button", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_div_83_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.compareToastMessage = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r1.compareToastType);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](3, _c0, ctx_r1.compareToastType === "info", ctx_r1.compareToastType === "success", ctx_r1.compareToastType === "warning"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.compareToastMessage);
  }
}
function DashboardComponent_div_0_aside_84_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Select 1 more trek to compare specs side-by-side ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_0_aside_84_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Ready for side-by-side comparison! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_0_aside_84_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 184)(1, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_aside_84_div_12_Template_button_click_3_listener() {
      const trek_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.removeCompared(trek_r22.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const trek_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", trek_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r22.name);
  }
}
function DashboardComponent_div_0_aside_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "aside", 164)(1, "div", 165)(2, "div", 166)(3, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, DashboardComponent_div_0_aside_84_span_9_Template, 3, 0, "span", 170)(10, DashboardComponent_div_0_aside_84_span_10_Template, 3, 0, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, DashboardComponent_div_0_aside_84_div_12_Template, 5, 2, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 174)(14, "button", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_aside_84_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.openComparePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "i", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_aside_84_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.clearCompare());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "i", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_aside_84_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.openCompareInWhatsApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, " Chat Expert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("pulse-attention", ctx_r1.justAddedToCompare);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r1.compareTreks.length, "/", ctx_r1.maxCompareCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.compareTreks.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.compareTreks.length >= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.compareTreks);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r1.compareTreks.length < 2)("title", ctx_r1.compareTreks.length < 2 ? "Select at least 2 treks to compare" : "Open comparison modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Compare Now (", ctx_r1.compareTreks.length, ") ");
  }
}
function DashboardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DashboardComponent_div_0_div_1_Template, 4, 1, "div", 6)(2, DashboardComponent_div_0_ng_template_2_Template, 4, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "section", 7)(5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "div", 9)(7, "div", 10)(8, "div", 11)(9, "div", 12)(10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "div", 14)(12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 16)(14, "div", 17)(15, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Explore the");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Wild Ghats");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Weekend escapes through ancient forests,");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "misty ridgelines & hidden waterfalls.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, " View All Treks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](28, DashboardComponent_div_0_div_28_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "section", 21)(30, "div", 22)(31, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](32, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function DashboardComponent_div_0_Template_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, DashboardComponent_div_0_button_34_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, DashboardComponent_div_0_div_35_Template, 4, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 28)(37, "div", 29)(38, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "Sort By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function DashboardComponent_div_0_Template_select_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.sortBy, $event) || (ctx_r1.sortBy = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](41, DashboardComponent_div_0_option_41_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, DashboardComponent_div_0_button_42_Template, 4, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, DashboardComponent_div_0_div_43_Template, 10, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, DashboardComponent_div_0_main_44_Template, 18, 7, "main", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "section", 36)(46, "div", 37)(47, "div", 38)(48, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, "The goWILD Guarantee");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, "Why Trekkers Choose goWILD Karunadu");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53, "Uncompromising focus on wilderness safety, forest permit compliance, and small-batch intimacy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "div", 40)(55, "div", 41)(56, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](57, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59, "Forest Permits Handled");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61, "Official Karnataka Forest Department trekking permits and wildlife sanctuary fees are pre-secured. Zero paperwork at entry check-posts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "div", 41)(63, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](64, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](65, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](66, "Certified Mountain Leads");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](68, "Wilderness First Aid (WFA) certified leaders with satellite GPS communication on every batch. Safety is our primary non-negotiable.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "div", 41)(70, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](71, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](73, "Small Batch Immersion");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](75, "Capped at 15\u201320 trekkers per departure. No overcrowded bus groups. Genuine wilderness connection with like-minded outdoor lovers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "div", 41)(77, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](78, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](80, "100% Leave-No-Trace");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](82, "Strict zero-plastic trail protocols. We support indigenous Western Ghats homestay hosts and local village economies responsibly.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](83, DashboardComponent_div_0_div_83_Template, 7, 7, "div", 47)(84, DashboardComponent_div_0_aside_84_Template, 23, 10, "aside", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.activeRoutes > 0 || ctx_r1.averageRating > 0 || ctx_r1.trekkersThisYear > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.filters.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.sortBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.sortOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.hasActiveDiscoveryFilters);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.collections.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.filteredTreks.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.compareToastMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.compareTreks.length && !ctx_r1.showComparePanel);
  }
}
function DashboardComponent_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "p", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Loading detailed trek specs for comparison...");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_1_div_13_article_1_li_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r26);
  }
}
function DashboardComponent_div_1_div_13_article_1_li_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Standard Western Ghats trail");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_1_div_13_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "article", 204)(1, "div", 205)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_1_div_13_article_1_Template_button_click_4_listener() {
      const trek_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.removeCompared(trek_r25.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "i", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "p", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "i", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ul", 209)(10, "li")(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "li")(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "li")(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "Difficulty");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "li")(26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Group Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "li")(31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "Departure");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "li")(36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "div", 210)(41, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "Trail Highlights");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, DashboardComponent_div_1_div_13_article_1_li_44_Template, 2, 1, "li", 211)(45, DashboardComponent_div_1_div_13_article_1_li_45_Template, 2, 0, "li", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "div", 213)(47, "button", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_1_div_13_article_1_Template_button_click_47_listener() {
      const trek_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.viewDetails(trek_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "View Full Itinerary");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "button", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_1_div_13_article_1_Template_button_click_49_listener() {
      const trek_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.openTrekEnquiry(trek_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](50, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, " Ask on WhatsApp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const trek_r25 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r25.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u20B9", trek_r25.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r25.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r25.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r25.groupSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r25.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.getAvailabilityLabel(trek_r25));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", trek_r25.highlights);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(trek_r25.highlights == null ? null : trek_r25.highlights.length));
  }
}
function DashboardComponent_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DashboardComponent_div_1_div_13_article_1_Template, 52, 10, "article", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.compareTreks);
  }
}
function DashboardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.closeComparePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "section", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_1_Template_section_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "span", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "header", 192)(5, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Trek Side-by-Side Comparison");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.closeComparePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "i", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, DashboardComponent_div_1_div_12_Template, 4, 0, "div", 197)(13, DashboardComponent_div_1_div_13_Template, 2, 1, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.isCompareLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.isCompareLoading);
  }
}
function DashboardComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Discovering Western Ghats Expeditions...");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 219)(1, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "No Treks Match Your Selection");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Try resetting filters or adjusting your search term.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_3_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.clearDiscoveryFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Reset Filters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
class DashboardComponent {
  constructor(router, dashboardService, dropdownService, publicRouteId, referralService, tokenService, authModal, authService, media, siteSettings) {
    this.router = router;
    this.dashboardService = dashboardService;
    this.dropdownService = dropdownService;
    this.publicRouteId = publicRouteId;
    this.referralService = referralService;
    this.tokenService = tokenService;
    this.authModal = authModal;
    this.authService = authService;
    this.media = media;
    this.siteSettings = siteSettings;
    this.treks = [];
    this.selectedFilter = 'all';
    this.selectedCollection = 'all';
    this.searchQuery = '';
    this.sortBy = 'recommended';
    this.isLoading = false;
    this.errorMessage = '';
    this.initialVisibleCount = 8;
    this.visibleStep = 4;
    this.visibleCount = this.initialVisibleCount;
    this.compareTreks = [];
    this.maxCompareCount = 3;
    this.compareToastMessage = null;
    this.compareToastType = 'info';
    this.compareToastTimer = null;
    this.mediaBaseUrl = (src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.mediaBaseUrl || '').replace(/\/?$/, '/');
    this.referralShareBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment?.referralShareBaseUrl ? String(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.referralShareBaseUrl).replace(/\/$/, '') : 'https://gowildkarunadu.online';
    this.sortOptions = [];
    this.showComparePanel = false;
    this.compareNotice = '';
    this.isCompareLoading = false;
    this.averageRating = 0;
    this.trekkersThisYear = 0;
    this.activeRoutes = 0;
    this.referralSummary = null;
    this.referralLoading = false;
    this.referralError = '';
    this.referralRequiresAuth = false;
    this.referralShareLink = '';
    this.referralCopyFeedback = '';
    this.isReferralDrawerOpen = false;
    this.referralFeedbackTimeout = null;
    this.justAddedToCompare = false;
    this.attentionTimer = null;
    this.filters = [];
    this.collections = [{
      id: 'all',
      label: 'All',
      icon: 'bi-compass',
      ruleKey: 'all'
    }, {
      id: 'hill-trek',
      label: 'Hill Trek',
      icon: 'bi-signpost-2',
      ruleKey: 'hill'
    }, {
      id: 'peak-trek',
      label: 'Peak Trek',
      icon: 'bi-triangle-half',
      ruleKey: 'peak'
    }, {
      id: 'mountain-trek',
      label: 'Mountain Trek',
      icon: 'bi-geo-alt',
      ruleKey: 'mountain'
    }, {
      id: 'forest-trek',
      label: 'Forest Trek',
      icon: 'bi-tree',
      ruleKey: 'forest'
    }];
    this.collectionRuleById = {
      'all': 'all',
      'hill-trek': 'hill',
      'peak-trek': 'peak',
      'mountain-trek': 'mountain',
      'forest-trek': 'forest'
    };
  }
  get supportPhone() {
    return this.siteSettings?.currentSettings?.supportPhone || '+91 98765 43210';
  }
  get supportPhoneRaw() {
    return this.siteSettings?.currentSettings?.supportPhoneRaw || '+919876543210';
  }
  ngOnInit() {
    this.loadSortOptions();
    this.loadDifficultyFilters();
    this.loadCollectionOptions();
    this.isLoading = true;
    this.dashboardService.loadDashboardData().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
      this.errorMessage = 'Unable to load dashboard data right now.';
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => {
      this.isLoading = false;
    })).subscribe(data => {
      if (!data) {
        return;
      }
      if (data.success === true) {
        this.errorMessage = '';
        const payload = data?.data || {};
        const trekRows = Array.isArray(payload?.treks) ? payload.treks : Array.isArray(payload) ? payload : [];
        this.treks = trekRows.map(trek => this.mapTourData(trek));
        const summary = payload?.summary || {};
        this.averageRating = Number(summary.averageRating || 0);
        this.trekkersThisYear = Number(summary.trekkersThisYear || 0);
        this.activeRoutes = Number(summary.activeRoutes || 0);
        return;
      }
      this.errorMessage = data?.message || 'Unable to load dashboard data right now.';
    });
    this.authStatusSub = this.authService.authStatus$.subscribe(loggedIn => {
      if (loggedIn) {
        this.loadReferralSummary();
      } else {
        this.isReferralDrawerOpen = false;
        this.referralSummary = null;
        this.referralShareLink = '';
        this.referralCopyFeedback = '';
        this.referralError = '';
        this.referralRequiresAuth = true;
        this.referralLoading = false;
      }
    });
  }
  loadSortOptions() {
    const fallback = [{
      value: 'recommended',
      label: 'Recommended'
    }, {
      value: 'price_low',
      label: 'Price: Low to High'
    }, {
      value: 'price_high',
      label: 'Price: High to Low'
    }, {
      value: 'duration_short',
      label: 'Duration: Shortest'
    }];
    this.dropdownService.getOptions('trekSortOptions', fallback).subscribe(options => {
      if (options.length > 0) {
        this.sortOptions = options;
        if (!this.sortOptions.some(option => option.value === this.sortBy)) {
          this.sortBy = this.sortOptions[0]?.value || 'recommended';
        }
      }
    });
  }
  loadDifficultyFilters() {
    const fallback = [];
    this.dropdownService.getOptions('trek-filters', fallback).subscribe(options => {
      const mapped = options.filter(option => !!option.value).map(option => ({
        id: String(option.value).toLowerCase(),
        label: option.label
      }));
      this.filters = mapped;
      if (!this.filters.some(filter => filter.id === this.selectedFilter)) {
        this.selectedFilter = 'all';
      }
    });
  }
  loadCollectionOptions() {
    // Keep the curated themes list as requested: All, Hill Trek, Peak Trek, Mountain Trek, Forest Trek.
    if (!this.collections.some(collection => collection.id === this.selectedCollection)) {
      this.selectedCollection = 'all';
    }
  }
  mapTourData(result) {
    const primaryBatch = this.extractPrimaryBatch(result);
    const baseAvailableSlots = primaryBatch?.availableSlots ?? primaryBatch?.available_slots ?? result?.availableSlots ?? result?.available_slots ?? null;
    const bookedSlots = primaryBatch?.bookedSlots ?? primaryBatch?.booked_slots ?? 0;
    const computedSlots = typeof baseAvailableSlots === 'number' ? Math.max(baseAvailableSlots - bookedSlots, 0) : null;
    return {
      id: String(result.public_ref || result.uuid || result.id || result.trekId || ''),
      name: result.name,
      category: result.category || '',
      location: result.location,
      duration: primaryBatch?.duration || result.duration || 'N/A',
      durationDays: this.getDurationInDays(primaryBatch?.duration || result.duration || ''),
      difficulty: result.difficulty,
      price: Number(primaryBatch?.price || result.price || 0),
      groupSize: `${result.min_participants} - ${result.max_participants}`,
      image: this.resolveImageUrl(result.cover_image),
      date: this.formatDateRange(primaryBatch?.startDate || result.startDate, primaryBatch?.endDate || result.endDate),
      highlights: Array.isArray(result.highlights) ? result.highlights : (result.highlights || '').split(',').map(item => item.trim()).filter(Boolean),
      inclusions: this.resolveList([primaryBatch, ...(Array.isArray(result?.batches) ? result.batches : []), result], ['inclusions', 'inclusion', 'included', 'includes', 'included_items']),
      exclusions: this.resolveList([primaryBatch, ...(Array.isArray(result?.batches) ? result.batches : []), result], ['exclusions', 'exclusion', 'excluded', 'excludes', 'excluded_items']),
      availableSlots: computedSlots,
      rating: Number(result.rating || 0),
      reviews: Number(result.reviews || 0)
    };
  }
  computeAverageRating(list) {
    const rated = list.filter(item => item.rating > 0);
    if (!rated.length) return 0;
    const total = rated.reduce((sum, item) => sum + item.rating, 0);
    return Number((total / rated.length).toFixed(1));
  }
  computeActiveRoutes(list) {
    const unique = new Set(list.map(item => item.id));
    return unique.size;
  }
  resolveList(sources, keys) {
    for (const source of sources) {
      if (!source || typeof source !== 'object') continue;
      for (const key of keys) {
        const parsed = this.normalizeList(source[key]);
        if (parsed.length) return parsed;
      }
    }
    return [];
  }
  normalizeList(value) {
    if (value == null) return [];
    if (Array.isArray(value)) {
      return value.map(item => String(item).trim()).filter(Boolean);
    }
    if (typeof value === 'string') {
      const raw = value.trim();
      if (!raw) return [];
      if (raw.startsWith('[') || raw.startsWith('{')) {
        try {
          const parsed = JSON.parse(raw);
          return this.normalizeList(parsed);
        } catch {
          // Fallback to delimiter split below
        }
      }
      return raw.split(/\r?\n|,|;|\|/).map(item => item.replace(/^[\-\u2022]\s*/, '').trim()).filter(Boolean);
    }
    if (typeof value === 'object') {
      if (Array.isArray(value.items)) return this.normalizeList(value.items);
      return Object.values(value).map(item => String(item).trim()).filter(Boolean);
    }
    return [];
  }
  extractPrimaryBatch(result) {
    if (Array.isArray(result?.batches) && result.batches.length) {
      return result.batches[0];
    }
    if (result?.batch) {
      return result.batch;
    }
    return null;
  }
  getDurationInDays(duration) {
    const dayMatch = duration?.toLowerCase().match(/(\d+)\s*day/);
    if (dayMatch) {
      return Number(dayMatch[1]);
    }
    const fallback = duration?.match(/\d+/);
    return fallback ? Number(fallback[0]) : 0;
  }
  formatDateRange(start, end) {
    if (!start || !end) return '';
    const s = new Date(start);
    const e = new Date(end);
    const sDay = s.getDate().toString().padStart(2, '0');
    const eDay = e.getDate().toString().padStart(2, '0');
    const sMonth = s.toLocaleString('en-GB', {
      month: 'short'
    });
    const eMonth = e.toLocaleString('en-GB', {
      month: 'short'
    });
    const sYear = s.getFullYear();
    const eYear = e.getFullYear();
    // same day
    if (s.toDateString() === e.toDateString()) {
      return `${sDay} ${sMonth} ${sYear}`;
    }
    // same month & year
    if (sMonth === eMonth && sYear === eYear) {
      return `${sDay}-${eDay} ${sMonth} ${sYear}`;
    }
    // different month or year
    if (sYear === eYear) {
      return `${sDay} ${sMonth} - ${eDay} ${eMonth} ${sYear}`;
    }
    // different year
    return `${sDay} ${sMonth} ${sYear} - ${eDay} ${eMonth} ${eYear}`;
  }
  get filteredTreks() {
    const list = this.getProcessedTreks();
    return list.slice(0, this.visibleCount);
  }
  get totalFilteredCount() {
    return this.getProcessedTreks().length;
  }
  get hasMoreTreks() {
    return this.visibleCount < this.totalFilteredCount;
  }
  get hasActiveDiscoveryFilters() {
    return this.selectedFilter !== 'all' || this.selectedCollection !== 'all' || !!this.searchQuery.trim();
  }
  getProcessedTreks() {
    const search = this.searchQuery.trim().toLowerCase();
    let list = this.treks.filter(trek => {
      const difficultyMatch = this.selectedFilter === 'all' || trek.difficulty?.toLowerCase() === this.selectedFilter;
      const collectionMatch = this.matchesCollection(trek, this.selectedCollection);
      const searchMatch = !search || trek.name.toLowerCase().includes(search) || trek.location.toLowerCase().includes(search) || trek.highlights.some(highlight => highlight.toLowerCase().includes(search));
      return difficultyMatch && collectionMatch && searchMatch;
    });
    list = [...list].sort((a, b) => {
      if (this.sortBy === 'price_low') return a.price - b.price;
      if (this.sortBy === 'price_high') return b.price - a.price;
      if (this.sortBy === 'duration_short') return a.durationDays - b.durationDays;
      return 0;
    });
    return list;
  }
  matchesCollection(trek, collectionId) {
    if (!collectionId || collectionId === 'all') return true;
    const targetSlug = this.toSlug(collectionId);
    const categorySlug = this.toSlug(trek.category || '');
    const nameLower = (trek.name || '').toLowerCase();
    const highlightsText = (trek.highlights || []).join(' ').toLowerCase();
    if (targetSlug === 'hill-trek' || targetSlug === 'hill') {
      return categorySlug.includes('hill') || nameLower.includes('hill') || highlightsText.includes('hill');
    }
    if (targetSlug === 'peak-trek' || targetSlug === 'peak') {
      return categorySlug.includes('peak') || nameLower.includes('peak') || highlightsText.includes('peak') || nameLower.includes('summit');
    }
    if (targetSlug === 'mountain-trek' || targetSlug === 'mountain') {
      return categorySlug.includes('mountain') || nameLower.includes('mountain') || categorySlug.includes('ghat') || nameLower.includes('ridge');
    }
    if (targetSlug === 'forest-trek' || targetSlug === 'forest') {
      return categorySlug.includes('forest') || nameLower.includes('forest') || highlightsText.includes('forest') || highlightsText.includes('shola') || highlightsText.includes('jungle');
    }
    return categorySlug === targetSlug || categorySlug.includes(targetSlug);
  }
  toSlug(value) {
    return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  resolveImageUrl(imagePath) {
    return this.media.resolve(imagePath || null);
  }
  setFilter(filterId) {
    this.selectedFilter = filterId;
    this.visibleCount = this.initialVisibleCount;
  }
  setCollection(collectionId) {
    this.selectedCollection = collectionId;
    this.visibleCount = this.initialVisibleCount;
  }
  clearDiscoveryFilters() {
    this.selectedFilter = 'all';
    this.selectedCollection = 'all';
    this.searchQuery = '';
    this.sortBy = 'recommended';
    this.visibleCount = this.initialVisibleCount;
  }
  showMoreTreks() {
    this.visibleCount = Math.min(this.visibleCount + this.visibleStep, this.totalFilteredCount);
    setTimeout(() => {
      const header = document.querySelector('.content-header');
      if (header) {
        header.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 30);
  }
  showLessTreks() {
    this.visibleCount = this.initialVisibleCount;
    setTimeout(() => {
      const header = document.querySelector('.content-header');
      if (header) {
        header.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 30);
  }
  showCompareToast(message, type = 'info', duration = 3800) {
    this.compareToastMessage = message;
    this.compareToastType = type;
    if (this.compareToastTimer) {
      clearTimeout(this.compareToastTimer);
    }
    this.compareToastTimer = setTimeout(() => {
      this.compareToastMessage = null;
    }, duration);
  }
  toggleCompare(trek) {
    const exists = this.compareTreks.some(item => item.id === trek.id);
    if (exists) {
      this.compareTreks = this.compareTreks.filter(item => item.id !== trek.id);
      if (this.compareTreks.length < 2) {
        this.showComparePanel = false;
      }
      this.showCompareToast(`Removed "${trek.name}" from comparison`, 'info');
      return;
    }
    if (this.compareTreks.length >= this.maxCompareCount) {
      this.compareNotice = `You can compare up to ${this.maxCompareCount} treks at a time.`;
      this.showCompareToast(`Maximum ${this.maxCompareCount} treks allowed for comparison. Remove one to add another.`, 'warning');
      return;
    }
    this.compareNotice = '';
    this.compareTreks = [...this.compareTreks, trek];
    this.justAddedToCompare = false;
    clearTimeout(this.attentionTimer);
    setTimeout(() => this.justAddedToCompare = true, 0);
    this.attentionTimer = setTimeout(() => this.justAddedToCompare = false, 2500);
    if (this.compareTreks.length === 1) {
      this.showCompareToast(`📌 "${trek.name}" added (1 of ${this.maxCompareCount}). Select another trek to compare side-by-side!`, 'info', 4500);
    } else {
      this.showCompareToast(`⚡ "${trek.name}" added! ${this.compareTreks.length} treks ready to compare. Click "Compare Now" below!`, 'success', 4000);
    }
  }
  isCompared(trekId) {
    return this.compareTreks.some(item => item.id === trekId);
  }
  canAddToCompare(trek) {
    return this.isCompared(trek.id) || this.compareTreks.length < this.maxCompareCount;
  }
  removeCompared(trekId) {
    this.compareTreks = this.compareTreks.filter(item => item.id !== trekId);
    if (this.compareTreks.length < 2) {
      this.showComparePanel = false;
    }
  }
  clearCompare() {
    this.compareTreks = [];
    this.showComparePanel = false;
    this.compareNotice = '';
  }
  openComparePanel() {
    if (this.compareTreks.length < 2) {
      this.compareNotice = 'Select at least 2 treks to compare.';
      return;
    }
    this.compareNotice = '';
    this.isCompareLoading = true;
    const requests = this.compareTreks.map(trek => this.dashboardService.getTrekByIdOrUuid(trek.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null))));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)(requests).subscribe({
      next: responses => {
        this.compareTreks = this.compareTreks.map((trek, index) => {
          const detailResponse = responses[index];
          const detailTrek = this.extractDetailTrek(detailResponse);
          if (!detailTrek) return trek;
          return this.mergeCompareData(trek, detailTrek);
        });
        this.showComparePanel = true;
        this.isCompareLoading = false;
      },
      error: () => {
        this.compareNotice = 'Could not load full compare details. Showing available data.';
        this.showComparePanel = true;
        this.isCompareLoading = false;
      }
    });
  }
  closeComparePanel() {
    this.showComparePanel = false;
  }
  extractDetailTrek(response) {
    if (!response) return null;
    const data = response.data;
    if (!data) return null;
    if (data?.trek) return data.trek;
    if (data?.result) return data.result;
    if (Array.isArray(data) && data.length) return data[0];
    if (typeof data === 'object') return data;
    return null;
  }
  mergeCompareData(base, detail) {
    const sources = [detail?.batch, ...(Array.isArray(detail?.batches) ? detail.batches : []), detail];
    const mergedHighlights = base.highlights?.length ? base.highlights : this.resolveList(sources, ['highlights', 'highlight', 'top_highlights']);
    const mergedInclusions = base.inclusions?.length ? base.inclusions : this.resolveList(sources, ['inclusions', 'inclusion', 'included', 'includes', 'included_items']);
    const mergedExclusions = base.exclusions?.length ? base.exclusions : this.resolveList(sources, ['exclusions', 'exclusion', 'excluded', 'excludes', 'excluded_items']);
    return {
      ...base,
      highlights: mergedHighlights,
      inclusions: mergedInclusions,
      exclusions: mergedExclusions
    };
  }
  openCompareInWhatsApp() {
    if (!this.compareTreks.length) return;
    const message = ['Hi, I want help comparing these treks:', ...this.compareTreks.map((trek, index) => `${index + 1}. ${trek.name} (${trek.location}) - ₹${trek.price} - ${trek.duration}`), 'Please suggest the best option based on my fitness and budget.'].join('\n');
    const num = (this.siteSettings?.currentSettings?.whatsappNumberRaw || this.supportPhoneRaw).replace(/[^0-9]/g, '');
    const url = `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  openTrekEnquiry(trek) {
    const brand = this.siteSettings?.currentSettings?.brandName || 'goWILD Karunadu';
    const message = `Hi ${brand}, I want details for ${trek.name} trek (${trek.date}).`;
    const num = (this.siteSettings?.currentSettings?.whatsappNumberRaw || this.supportPhoneRaw).replace(/[^0-9]/g, '');
    const url = `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  getAvailabilityLabel(trek) {
    if (trek.availableSlots === null) return 'Check Availability';
    if (trek.availableSlots <= 0) return 'Sold Out';
    if (trek.availableSlots <= 5) return `Only ${trek.availableSlots} left`;
    return `${trek.availableSlots} slots open`;
  }
  getAvailabilityClass(trek) {
    if (trek.availableSlots === null) return 'is-unknown';
    if (trek.availableSlots <= 0) return 'is-sold';
    if (trek.availableSlots <= 5) return 'is-low';
    return 'is-open';
  }
  trackByTrek(_, trek) {
    return trek.id;
  }
  viewDetails(trek) {
    const publicRef = this.publicRouteId.encode(trek.id) || trek.id;
    this.router.navigate(['/trek-details', publicRef]);
  }
  get referralNextRewardLabel() {
    if (!this.referralSummary || !this.referralSummary.freeSlotThreshold) {
      return '';
    }
    if (!Number.isFinite(this.referralSummary.nextRewardIn)) {
      return '';
    }
    if (this.referralSummary.nextRewardIn === 0) {
      return 'You just unlocked a free trek slot!';
    }
    return `${this.referralSummary.nextRewardIn} more referral${this.referralSummary.nextRewardIn === 1 ? '' : 's'} unlock a free slot`;
  }
  refreshReferralSummary() {
    this.loadReferralSummary();
  }
  copyReferralCode() {
    var _this = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.referralSummary?.referralCode) return;
      try {
        yield _this.copyToClipboard(_this.referralSummary.referralCode);
        _this.setReferralFeedback('Referral code copied');
      } catch {
        _this.setReferralFeedback('Copy failed. Long press to copy manually.');
      }
    })();
  }
  copyReferralLink() {
    var _this2 = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.referralSummary?.referralCode) return;
      const link = _this2.referralShareLink || _this2.buildShareLink(_this2.referralSummary.referralCode);
      if (!link) return;
      try {
        yield _this2.copyToClipboard(link);
        _this2.setReferralFeedback('Invite link copied');
      } catch {
        _this2.setReferralFeedback('Unable to copy link right now.');
      }
    })();
  }
  shareReferral() {
    var _this3 = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.referralSummary?.referralCode) return;
      const link = _this3.referralShareLink || _this3.buildShareLink(_this3.referralSummary.referralCode);
      const shareText = `Join me on a Go Wild Karunadu trek and use my code ${_this3.referralSummary.referralCode} for instant savings.`;
      if (link && typeof navigator !== 'undefined' && navigator.share) {
        try {
          yield navigator.share({
            title: 'Go Wild Karunadu Treks',
            text: shareText,
            url: link
          });
          _this3.setReferralFeedback('Invite shared');
          return;
        } catch (err) {
          if (err?.name === 'AbortError') {
            return;
          }
        }
      }
      yield _this3.copyReferralLink();
    })();
  }
  openReferralLogin() {
    this.authModal.openLogin().then(() => this.loadReferralSummary()).catch(() => void 0);
  }
  toggleReferralDrawer() {
    this.isReferralDrawerOpen = !this.isReferralDrawerOpen;
  }
  openReferralDrawer() {
    this.isReferralDrawerOpen = true;
  }
  closeReferralDrawer() {
    this.isReferralDrawerOpen = false;
  }
  loadReferralSummary() {
    const userId = this.tokenService.getUserId();
    if (!userId) {
      this.referralRequiresAuth = true;
      this.referralSummary = null;
      this.referralShareLink = '';
      return;
    }
    this.referralRequiresAuth = false;
    this.referralLoading = true;
    this.referralError = '';
    this.referralService.getSummary(userId).subscribe({
      next: res => {
        this.referralLoading = false;
        if (res?.data) {
          this.referralSummary = res.data;
          this.referralShareLink = this.buildShareLink(res.data.referralCode);
          if (res.data.programActive) {
            this.referralError = '';
          }
        } else {
          this.referralSummary = null;
          this.referralShareLink = '';
          this.referralError = res?.message || 'Referral details are unavailable right now.';
        }
      },
      error: () => {
        this.referralLoading = false;
        this.referralSummary = null;
        this.referralShareLink = '';
        this.referralError = 'Unable to load referral details. Please try again.';
      }
    });
  }
  buildShareLink(code) {
    if (!code) return '';
    const base = this.referralShareBaseUrl || 'https://gowildkarunadu.online';
    return `${base}?ref=${encodeURIComponent(code)}`;
  }
  setReferralFeedback(message) {
    this.referralCopyFeedback = message;
    if (this.referralFeedbackTimeout) {
      clearTimeout(this.referralFeedbackTimeout);
    }
    this.referralFeedbackTimeout = setTimeout(() => {
      this.referralCopyFeedback = '';
      this.referralFeedbackTimeout = null;
    }, 4000);
  }
  copyToClipboard(value) {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      return navigator.clipboard.writeText(value);
    }
    return new Promise((resolve, reject) => {
      try {
        const tempInput = document.createElement('textarea');
        tempInput.value = value;
        tempInput.style.position = 'fixed';
        tempInput.style.opacity = '0';
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
  ngOnDestroy() {
    this.authStatusSub?.unsubscribe();
    if (this.referralFeedbackTimeout) {
      clearTimeout(this.referralFeedbackTimeout);
      this.referralFeedbackTimeout = null;
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_dashboard__WEBPACK_IMPORTED_MODULE_13__.Dashboard), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_dropdown_service__WEBPACK_IMPORTED_MODULE_14__.DropdownService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_public_route_id_service__WEBPACK_IMPORTED_MODULE_15__.PublicRouteIdService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_referral_service__WEBPACK_IMPORTED_MODULE_16__.ReferralService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_token_service__WEBPACK_IMPORTED_MODULE_17__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_18__.AuthModalService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_auth__WEBPACK_IMPORTED_MODULE_19__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_media_service__WEBPACK_IMPORTED_MODULE_20__.MediaService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_site_settings_service__WEBPACK_IMPORTED_MODULE_21__.SiteSettingsService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 4,
    vars: 4,
    consts: [["referralCardStack", ""], ["class", "page-wrapper", 4, "ngIf"], ["class", "compare-overlay", 3, "click", 4, "ngIf"], ["class", "loader-wrapper", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "page-wrapper"], ["class", "dashboard-error-banner", 4, "ngIf"], [1, "hero-section"], [1, "hero-slides"], [1, "hero-slide", "slide-1"], [1, "hero-slide", "slide-2"], [1, "hero-slide", "slide-3"], [1, "hero-slide", "slide-4"], [1, "hero-slide", "slide-5"], [1, "hero-overlay"], [1, "hero-grain"], [1, "hero-content"], [1, "hero-text"], ["routerLink", "/upcoming-treks", 1, "hero-button"], [1, "btn-icon"], ["class", "hero-stats", 4, "ngIf"], [1, "discovery-dock-section"], [1, "discovery-dock"], [1, "dock-search-wrap"], [1, "bi", "bi-search", "search-icon"], ["type", "text", "placeholder", "Search treks by name, region, or highlight...", "aria-label", "Search treks", 1, "dock-search-input", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "clear-search-btn", "aria-label", "Clear search", "title", "Clear search", 3, "click", 4, "ngIf"], ["class", "dock-filter-pills", 4, "ngIf"], [1, "dock-controls"], [1, "dock-sort-wrap"], ["for", "sortBy", 1, "sort-label"], ["id", "sortBy", 1, "dock-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", "class", "dock-reset-btn", "title", "Reset all filters", 3, "click", 4, "ngIf"], ["class", "collection-chips-bar", 4, "ngIf"], ["class", "expeditions-main", 4, "ngIf"], [1, "trust-features-section"], [1, "trust-container"], [1, "trust-header"], [1, "badge-mini"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon-wrap"], [1, "bi", "bi-shield-check"], [1, "bi", "bi-award-fill"], [1, "bi", "bi-people-fill"], [1, "bi", "bi-tree-fill"], ["class", "compare-live-toast", 3, "ngClass", 4, "ngIf"], ["class", "compare-bar", "role", "region", "aria-label", "Trek Comparison Dock", 3, "pulse-attention", 4, "ngIf"], [1, "dashboard-error-banner"], [1, "bi", "bi-exclamation-triangle-fill", "me-2"], ["class", "referral-card", 4, "ngIf"], ["class", "referral-card referral-auth", 4, "ngIf"], ["class", "referral-card referral-error-card", 4, "ngIf"], ["class", "referral-card referral-compact", 3, "paused", 4, "ngIf"], [1, "referral-card"], [1, "referral-loading"], ["name", "crescent"], [1, "referral-card", "referral-auth"], [1, "eyebrow"], [1, "referral-footnote"], [1, "primary", 3, "click"], [1, "referral-card", "referral-error-card"], [1, "ghost", 3, "click"], [1, "referral-card", "referral-compact"], [1, "referral-card-header"], [1, "program-pill"], [1, "referral-code-pill"], ["type", "button", 3, "click"], [1, "referral-mini-stats"], [1, "referral-actions"], [1, "primary", 3, "click", "disabled"], ["aria-label", "Refresh referral summary", 1, "ghost", 3, "click"], [1, "bi", "bi-arrow-repeat"], ["class", "referral-feedback", 4, "ngIf"], [1, "referral-feedback"], [1, "hero-stats"], ["class", "stat-item", 4, "ngIf"], [1, "stat-item"], [1, "bi", "bi-star-fill", "text-warning", 2, "font-size", "0.85rem"], ["type", "button", "aria-label", "Clear search", "title", "Clear search", 1, "clear-search-btn", 3, "click"], [1, "bi", "bi-x-circle-fill"], [1, "dock-filter-pills"], [1, "pill-group-label"], ["type", "button", "class", "filter-pill", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "filter-pill", 3, "click"], [3, "value"], ["type", "button", "title", "Reset all filters", 1, "dock-reset-btn", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], [1, "collection-chips-bar"], [1, "collection-header"], [1, "collection-label"], [1, "bi", "bi-stars", "text-warning", "me-1"], [1, "collection-hint"], [1, "bi", "bi-arrow-left-right", "me-1"], ["role", "tablist", "aria-label", "Curated trek themes", 1, "chips-scroll"], ["type", "button", "class", "collection-chip", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "collection-chip", 3, "click"], [3, "class", 4, "ngIf"], [1, "expeditions-main"], [1, "main-container"], [1, "section-title-wrap"], [1, "section-eyebrow"], [1, "bi", "bi-lightning-charge-fill", "me-1"], [1, "section-heading"], [1, "section-sub"], [1, "dashboard-grid"], [1, "dashboard-main"], [1, "trek-grid"], ["class", "modern-trek-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "load-more-wrapper", 4, "ngIf"], ["class", "mobile-referral-block", 4, "ngIf"], [4, "ngIf"], [1, "modern-trek-card"], [1, "card-media-wrap", 3, "click"], ["loading", "lazy", "onerror", "this.src='assets/default-trek.jpg'", 1, "card-img", 3, "src", "alt"], [1, "media-overlay"], [1, "card-badges-top"], [1, "diff-badge"], [1, "avail-badge", 3, "ngClass"], [1, "card-date-badge"], [1, "bi", "bi-calendar3"], [1, "card-body"], [1, "card-header-info"], [1, "card-title", 3, "click"], [1, "card-location"], [1, "bi", "bi-geo-alt-fill", "text-success"], [1, "card-specs-row"], [1, "spec-item"], [1, "bi", "bi-clock-history"], ["class", "spec-item", 4, "ngIf"], ["class", "card-highlights", 4, "ngIf"], [1, "card-footer-pricing"], [1, "price-block"], [1, "price-value"], [1, "price-sub"], [1, "action-buttons-group"], ["type", "button", 1, "btn-compare", 3, "click", "disabled", "title"], [1, "bi", 3, "ngClass"], [1, "compare-btn-label"], ["type", "button", "title", "Chat on WhatsApp", 1, "btn-wa-inquire", 3, "click"], [1, "bi", "bi-whatsapp"], ["type", "button", 1, "btn-book-now", 3, "click"], [1, "bi", "bi-arrow-right"], [1, "bi", "bi-star-fill", "text-warning"], [1, "card-highlights"], ["class", "highlight-chip", 4, "ngFor", "ngForOf"], [1, "highlight-chip"], [1, "load-more-wrapper"], [1, "load-more-meta"], [1, "load-more-actions"], ["class", "load-more-btn", 3, "click", 4, "ngIf"], ["routerLink", "/upcoming-treks", 1, "btn-all-calendar"], [1, "bi", "bi-calendar-event"], [1, "load-more-btn", 3, "click"], [1, "bi", "bi-chevron-down"], [1, "bi", "bi-chevron-up"], [1, "mobile-referral-block"], [4, "ngTemplateOutlet"], [1, "referral-sidebar"], [1, "compare-live-toast", 3, "ngClass"], [1, "toast-content"], ["type", "button", 1, "btn-toast-dismiss", 3, "click"], [1, "bi", "bi-x"], ["role", "region", "aria-label", "Trek Comparison Dock", 1, "compare-bar"], [1, "compare-dock-inner"], [1, "compare-meta-block"], [1, "compare-badge-pill"], [1, "pulse-indicator"], [1, "compare-prompt"], ["class", "prompt-hint", 4, "ngIf"], ["class", "prompt-ready", 4, "ngIf"], [1, "compare-list"], ["class", "compare-item", 4, "ngFor", "ngForOf"], [1, "compare-actions"], ["type", "button", 1, "book-btn", 3, "click", "disabled", "title"], [1, "bi", "bi-columns-gap", "me-1"], ["type", "button", "title", "Clear selection", 1, "secondary-btn", 3, "click"], [1, "bi", "bi-trash3", "me-1"], ["type", "button", "title", "Ask on WhatsApp", 1, "wa-btn", 3, "click"], [1, "prompt-hint"], [1, "bi", "bi-plus-circle", "me-1"], [1, "prompt-ready"], [1, "bi", "bi-lightning-charge-fill", "me-1", "text-warning"], [1, "compare-item"], [1, "compare-item-name", 3, "title"], ["type", "button", "aria-label", "Remove from compare", "title", "Remove", 3, "click"], [1, "bi", "bi-x-lg"], [1, "compare-overlay", 3, "click"], [1, "compare-panel", 3, "click"], [1, "compare-floating-handle-bar"], [1, "compare-floating-handle"], [1, "compare-panel-header"], [1, "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-arrow-left-right", "text-success", 2, "font-size", "1.25rem"], [1, "secondary-btn", 3, "click"], [1, "bi", "bi-x-lg", "me-1"], ["class", "compare-loading", 4, "ngIf"], ["class", "compare-columns", 4, "ngIf"], [1, "compare-loading"], ["role", "status", 1, "spinner-border", "text-success"], [1, "mt-2"], [1, "compare-columns"], ["class", "compare-column", 4, "ngFor", "ngForOf"], [1, "compare-column"], [1, "compare-title-row"], [1, "remove-btn", 3, "click"], [1, "compare-location"], [1, "bi", "bi-geo-alt-fill", "text-success", "me-1"], [1, "compare-points"], [1, "compare-rich-section"], [4, "ngFor", "ngForOf"], ["class", "empty-line", 4, "ngIf"], [1, "compare-column-actions"], [1, "book-btn", 3, "click"], [1, "wa-btn", 3, "click"], [1, "empty-line"], [1, "loader-wrapper"], [1, "custom-loader"], [1, "empty-state"], [1, "empty-state-icon"], [1, "bi", "bi-compass"], ["type", "button", 1, "btn-hero-primary", "mt-3", 3, "click"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 85, 12, "div", 1)(1, DashboardComponent_div_1_Template, 14, 2, "div", 2)(2, DashboardComponent_div_2_Template, 4, 0, "div", 3)(3, DashboardComponent_div_3_Template, 9, 0, "div", 4);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showComparePanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isLoading && (!ctx.filteredTreks || !ctx.filteredTreks.length));
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.RouterLinkDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHrefDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
    styles: ["@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0[_ngcontent-%COMP%], 600[_ngcontent-%COMP%];0[_ngcontent-%COMP%], 700[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 400[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 600&family=Jost[_ngcontent-%COMP%]:wght@300;400[_ngcontent-%COMP%];500[_ngcontent-%COMP%];600&display=swap)[_ngcontent-%COMP%];@import url(https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700[_ngcontent-%COMP%];800&family=Fraunces[_ngcontent-%COMP%]:ital, opsz[_ngcontent-%COMP%], wght@0[_ngcontent-%COMP%], 9..144[_ngcontent-%COMP%], 600[_ngcontent-%COMP%];0[_ngcontent-%COMP%], 9..144[_ngcontent-%COMP%], 700[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 9..144[_ngcontent-%COMP%], 400[_ngcontent-%COMP%];1,9..144,700&display=swap)[_ngcontent-%COMP%];[_ngcontent-%COMP%]:root {\n  --radius-card: 4px;\n  --40px: 40px;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family: \"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  color: #1e293b;\n  background-color: #f8fafc;\n  --primary-deep: #07170f;\n  --primary-forest: #102e1f;\n  --emerald-accent: #10b981;\n  --emerald-glow: rgba(16, 185, 129, 0.25);\n  --gold-accent: #f59e0b;\n  --ease: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_pageReveal 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n\n.dashboard-error-banner[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-left: 4px solid #ef4444;\n  color: #991b1b;\n  padding: 12px 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n\n@keyframes _ngcontent-%COMP%_pageReveal {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  height: 75vh;\n  min-height: 480px;\n  overflow: hidden;\n}\n\n.hero-slides[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n}\n\n.hero-slide[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transform: scale(1.08);\n  animation: _ngcontent-%COMP%_slideShow 30s ease-in-out infinite;\n}\n.hero-slide.slide-1[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/hero-slide-1.jpg\"), url(\"/assets/images/hero-slide-1.svg\");\n  animation-delay: 0s;\n}\n.hero-slide.slide-2[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/hero-slide-2.jpg\"), url(\"/assets/images/hero-slide-2.svg\");\n  animation-delay: 6s;\n}\n.hero-slide.slide-3[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/hero-slide-3.jpg\"), url(\"/assets/images/hero-slide-3.svg\");\n  animation-delay: 12s;\n}\n.hero-slide.slide-4[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/hero-slide-4.jpg\"), url(\"/assets/images/hero-slide-4.svg\");\n  animation-delay: 18s;\n}\n.hero-slide.slide-5[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/hero-slide-5.jpg\"), url(\"/assets/images/hero-slide-5.svg\");\n  animation-delay: 24s;\n}\n\n@media (min-resolution: 144dpi) {\n  .hero-slide.slide-1[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/images/hero-slide-1.jpg\"), url(\"/assets/images/hero-slide-1.svg\");\n  }\n  .hero-slide.slide-2[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/images/hero-slide-2.jpg\"), url(\"/assets/images/hero-slide-2.svg\");\n  }\n  .hero-slide.slide-3[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/images/hero-slide-3.jpg\"), url(\"/assets/images/hero-slide-3.svg\");\n  }\n  .hero-slide.slide-4[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/images/hero-slide-4.jpg\"), url(\"/assets/images/hero-slide-4.svg\");\n  }\n  .hero-slide.slide-5[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/images/hero-slide-5.jpg\"), url(\"/assets/images/hero-slide-5.svg\");\n  }\n}\n@keyframes _ngcontent-%COMP%_slideShow {\n  0% {\n    opacity: 0;\n    transform: scale(1.08);\n  }\n  4.6666666667% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  15.3333333333% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  20% {\n    opacity: 0;\n    transform: scale(1.04);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.08);\n  }\n}\n.hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  background: linear-gradient(to top, rgba(14, 22, 16, 0.92) 0%, rgba(14, 22, 16, 0.3) 55%, transparent 100%);\n  pointer-events: none;\n}\n\n.hero-grain[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 2;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23g)' opacity='.045'/%3E%3C/svg%3E\");\n  pointer-events: none;\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0 7vw 72px;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: flex-end;\n  gap: 24px;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%] {\n  max-width: 700px;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #ffffff;\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  margin-bottom: 18px;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-eyebrow[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 32px;\n  height: 1px;\n  background: #7fb896;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: clamp(3rem, 7vw, 6.5rem);\n  font-weight: 700;\n  line-height: 0.95;\n  color: #f5f0e8;\n  letter-spacing: -0.01em;\n  -webkit-text-stroke: 0.1px white;\n  margin: 0;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #7fb896;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 20px 0 36px;\n  color: rgba(245, 240, 232, 0.75);\n  font-size: 1.05rem;\n  font-weight: 300;\n  letter-spacing: 0.03em;\n  line-height: 1.7;\n  max-width: 460px;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border-left: 1px solid rgba(245, 240, 232, 0.18);\n  padding-left: 32px;\n  margin-bottom: 4px;\n}\n.hero-content[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  padding: 16px 0;\n  border-bottom: 1px solid rgba(245, 240, 232, 0.1);\n}\n.hero-content[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.hero-content[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: 2.2rem;\n  font-weight: 600;\n  color: #f5f0e8;\n  line-height: 1;\n}\n.hero-content[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-left: 4px;\n}\n.hero-content[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #8a9b8e;\n  font-size: 0.7rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  margin-top: 4px;\n  display: block;\n}\n\n.hero-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  background: #f5f0e8;\n  color: #1a1f1b;\n  font-family: \"Jost\", system-ui, sans-serif;\n  font-size: 0.85rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 14px 28px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.2s, transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s;\n}\n.hero-button[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  background: #3a6349;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  transition: transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.hero-button[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n  transform: translateY(-2px);\n}\n.hero-button[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n\n@media (max-width: 768px) {\n  .hero-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 0 20px 48px;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n    flex-direction: row;\n    border-left: none;\n    border-top: 1px solid rgba(245, 240, 232, 0.15);\n    padding-left: 0;\n    padding-top: 16px;\n    gap: 24px;\n  }\n  .hero-content[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n    padding: 0;\n    border-bottom: none;\n  }\n}\n.discovery-dock-section[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 1200px;\n  margin: -44px auto 36px;\n  padding: 0 24px;\n  z-index: 10;\n}\n\n.discovery-dock[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-search-wrap[_ngcontent-%COMP%] {\n  flex: 1.3;\n  min-width: 280px;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  color: #94a3b8;\n  font-size: 1.05rem;\n  pointer-events: none;\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-search-wrap[_ngcontent-%COMP%]   .dock-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 46px;\n  padding: 12px 42px 12px 42px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  font-size: 0.9375rem;\n  color: #1e293b;\n  outline: none;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-search-wrap[_ngcontent-%COMP%]   .dock-search-input[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: #10b981;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-search-wrap[_ngcontent-%COMP%]   .dock-search-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-search-wrap[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4px;\n  width: 40px;\n  height: 40px;\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  font-size: 1.05rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  transition: color 0.15s ease, background 0.15s ease;\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-search-wrap[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  background: rgba(239, 68, 68, 0.08);\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-filter-pills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-filter-pills[_ngcontent-%COMP%]   .pill-group-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-filter-pills[_ngcontent-%COMP%]   .filter-pill[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 9999px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  color: #64748b;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  min-height: 38px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-filter-pills[_ngcontent-%COMP%]   .filter-pill[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  color: #1e293b;\n  background: #f8fafc;\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-filter-pills[_ngcontent-%COMP%]   .filter-pill.active[_ngcontent-%COMP%] {\n  background: #102e1f;\n  border-color: #102e1f;\n  color: #ffffff;\n  box-shadow: 0 2px 8px rgba(16, 46, 31, 0.25);\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-controls[_ngcontent-%COMP%]   .dock-sort-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-controls[_ngcontent-%COMP%]   .dock-sort-wrap[_ngcontent-%COMP%]   .sort-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  white-space: nowrap;\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-controls[_ngcontent-%COMP%]   .dock-sort-wrap[_ngcontent-%COMP%]   .dock-select[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  min-height: 40px;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  color: #1e293b;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  outline: none;\n  cursor: pointer;\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-controls[_ngcontent-%COMP%]   .dock-sort-wrap[_ngcontent-%COMP%]   .dock-select[_ngcontent-%COMP%]:focus {\n  border-color: #10b981;\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-controls[_ngcontent-%COMP%]   .dock-reset-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 14px;\n  min-height: 40px;\n  border-radius: 10px;\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  color: #475569;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.discovery-dock[_ngcontent-%COMP%]   .dock-controls[_ngcontent-%COMP%]   .dock-reset-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n\n.collection-chips-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-top: 14px;\n  padding: 0 4px;\n}\n.collection-chips-bar[_ngcontent-%COMP%]   .collection-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.collection-chips-bar[_ngcontent-%COMP%]   .collection-header[_ngcontent-%COMP%]   .collection-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n}\n.collection-chips-bar[_ngcontent-%COMP%]   .collection-header[_ngcontent-%COMP%]   .collection-hint[_ngcontent-%COMP%] {\n  display: none;\n}\n.collection-chips-bar[_ngcontent-%COMP%]   .chips-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  overflow-x: auto;\n  scrollbar-width: none;\n  -webkit-overflow-scrolling: touch;\n  flex: 1;\n  min-width: 0;\n  padding: 2px 0;\n}\n.collection-chips-bar[_ngcontent-%COMP%]   .chips-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.collection-chips-bar[_ngcontent-%COMP%]   .chips-scroll[_ngcontent-%COMP%]   .collection-chip[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 9999px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  color: #475569;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  min-height: 38px;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.collection-chips-bar[_ngcontent-%COMP%]   .chips-scroll[_ngcontent-%COMP%]   .collection-chip[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #1e293b;\n  border-color: #cbd5e1;\n}\n.collection-chips-bar[_ngcontent-%COMP%]   .chips-scroll[_ngcontent-%COMP%]   .collection-chip.active[_ngcontent-%COMP%] {\n  background: #102e1f;\n  border-color: #102e1f;\n  color: #ffffff;\n  font-weight: 700;\n  box-shadow: 0 3px 10px rgba(16, 46, 31, 0.25);\n}\n.collection-chips-bar[_ngcontent-%COMP%]   .chips-scroll[_ngcontent-%COMP%]   .collection-chip.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fbbf24 !important;\n}\n\n.expeditions-main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px 24px 64px;\n}\n.expeditions-main[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.section-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 20px;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n}\n.section-title-wrap[_ngcontent-%COMP%]   .section-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #059669;\n  margin-bottom: 4px;\n}\n.section-title-wrap[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", serif;\n  font-size: clamp(1.6rem, 3vw, 2.2rem);\n  font-weight: 700;\n  color: #0f241a;\n  margin: 0 0 6px;\n}\n.section-title-wrap[_ngcontent-%COMP%]   .section-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.9375rem;\n}\n.section-title-wrap[_ngcontent-%COMP%]   .btn-view-calendar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: 10px;\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  color: #0f241a;\n  font-size: 0.875rem;\n  font-weight: 700;\n  text-decoration: none;\n  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);\n  transition: all 0.2s ease;\n}\n.section-title-wrap[_ngcontent-%COMP%]   .btn-view-calendar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n}\n.section-title-wrap[_ngcontent-%COMP%]   .btn-view-calendar[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #94a3b8;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 14px rgba(15, 23, 42, 0.08);\n}\n.section-title-wrap[_ngcontent-%COMP%]   .btn-view-calendar[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 28px;\n  align-items: flex-start;\n}\n.dashboard-grid[_ngcontent-%COMP%]   .dashboard-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.trek-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));\n  gap: 24px;\n  margin-bottom: 36px;\n}\n\n.modern-trek-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.modern-trek-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.1);\n  border-color: #cbd5e1;\n}\n.modern-trek-card[_ngcontent-%COMP%]:hover   .card-media-wrap[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-media-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-media-wrap[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-media-wrap[_ngcontent-%COMP%]   .media-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, transparent 40%, rgba(0, 0, 0, 0.6) 100%);\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-media-wrap[_ngcontent-%COMP%]   .card-badges-top[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  right: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-media-wrap[_ngcontent-%COMP%]   .card-badges-top[_ngcontent-%COMP%]   .diff-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-media-wrap[_ngcontent-%COMP%]   .card-badges-top[_ngcontent-%COMP%]   .diff-badge.easy[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.9);\n  color: #ffffff;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-media-wrap[_ngcontent-%COMP%]   .card-badges-top[_ngcontent-%COMP%]   .diff-badge.moderate[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.9);\n  color: #ffffff;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-media-wrap[_ngcontent-%COMP%]   .card-badges-top[_ngcontent-%COMP%]   .diff-badge.difficult[_ngcontent-%COMP%], .modern-trek-card[_ngcontent-%COMP%]   .card-media-wrap[_ngcontent-%COMP%]   .card-badges-top[_ngcontent-%COMP%]   .diff-badge.challenging[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.9);\n  color: #ffffff;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-media-wrap[_ngcontent-%COMP%]   .card-badges-top[_ngcontent-%COMP%]   .avail-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-media-wrap[_ngcontent-%COMP%]   .card-badges-top[_ngcontent-%COMP%]   .avail-badge.available[_ngcontent-%COMP%] {\n  background: rgba(5, 150, 105, 0.9);\n  color: #ffffff;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-media-wrap[_ngcontent-%COMP%]   .card-badges-top[_ngcontent-%COMP%]   .avail-badge.selling-fast[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.9);\n  color: #ffffff;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-media-wrap[_ngcontent-%COMP%]   .card-badges-top[_ngcontent-%COMP%]   .avail-badge.last-seat[_ngcontent-%COMP%] {\n  background: rgba(225, 29, 72, 0.9);\n  color: #ffffff;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-media-wrap[_ngcontent-%COMP%]   .card-badges-top[_ngcontent-%COMP%]   .avail-badge.sold-out[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.9);\n  color: #ffffff;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-media-wrap[_ngcontent-%COMP%]   .card-date-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: 8px;\n  background: rgba(0, 0, 0, 0.65);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: #ffffff;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-media-wrap[_ngcontent-%COMP%]   .card-date-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 18px 20px 20px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-header-info[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-header-info[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f241a;\n  margin: 0 0 4px;\n  line-height: 1.3;\n  cursor: pointer;\n  transition: color 0.2s ease;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-header-info[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]:hover {\n  color: #059669;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-header-info[_ngcontent-%COMP%]   .card-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.8125rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-specs-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 10px 0;\n  border-top: 1px solid #f1f5f9;\n  border-bottom: 1px solid #f1f5f9;\n  margin-bottom: 12px;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-specs-row[_ngcontent-%COMP%]   .spec-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #475569;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-specs-row[_ngcontent-%COMP%]   .spec-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-highlights[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 16px;\n  flex-grow: 1;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-highlights[_ngcontent-%COMP%]   .highlight-chip[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  border-radius: 6px;\n  background: #f1f5f9;\n  color: #475569;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-pricing[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding-top: 14px;\n  border-top: 1px solid #f1f5f9;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-pricing[_ngcontent-%COMP%]   .price-block[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", serif;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #0f241a;\n  line-height: 1;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-pricing[_ngcontent-%COMP%]   .price-block[_ngcontent-%COMP%]   .price-sub[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #64748b;\n  margin-top: 2px;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-pricing[_ngcontent-%COMP%]   .action-buttons-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-pricing[_ngcontent-%COMP%]   .action-buttons-group[_ngcontent-%COMP%]   .btn-compare[_ngcontent-%COMP%] {\n  height: 36px;\n  padding: 0 10px;\n  border-radius: 8px;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  color: #64748b;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  white-space: nowrap;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-pricing[_ngcontent-%COMP%]   .action-buttons-group[_ngcontent-%COMP%]   .btn-compare[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-pricing[_ngcontent-%COMP%]   .action-buttons-group[_ngcontent-%COMP%]   .btn-compare[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #1e293b;\n  border-color: #94a3b8;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-pricing[_ngcontent-%COMP%]   .action-buttons-group[_ngcontent-%COMP%]   .btn-compare.active[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border-color: #10b981;\n  color: #059669;\n  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-pricing[_ngcontent-%COMP%]   .action-buttons-group[_ngcontent-%COMP%]   .btn-compare.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-pricing[_ngcontent-%COMP%]   .action-buttons-group[_ngcontent-%COMP%]   .btn-wa-inquire[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  background: #dcfce7;\n  border: 1px solid #bbf7d0;\n  color: #16a34a;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-pricing[_ngcontent-%COMP%]   .action-buttons-group[_ngcontent-%COMP%]   .btn-wa-inquire[_ngcontent-%COMP%]:hover {\n  background: #25D366;\n  color: #ffffff;\n  border-color: #25D366;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-pricing[_ngcontent-%COMP%]   .action-buttons-group[_ngcontent-%COMP%]   .btn-book-now[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 8px;\n  background: #102e1f;\n  border: none;\n  color: #ffffff;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.modern-trek-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-footer-pricing[_ngcontent-%COMP%]   .action-buttons-group[_ngcontent-%COMP%]   .btn-book-now[_ngcontent-%COMP%]:hover {\n  background: #059669;\n  transform: translateY(-1px);\n}\n\n.load-more-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px 0 12px;\n}\n.load-more-wrapper[_ngcontent-%COMP%]   .load-more-meta[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin-bottom: 16px;\n}\n.load-more-wrapper[_ngcontent-%COMP%]   .load-more-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.load-more-wrapper[_ngcontent-%COMP%]   .load-more-actions[_ngcontent-%COMP%]   .load-more-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 22px;\n  border-radius: 10px;\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  color: #1e293b;\n  font-size: 0.875rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);\n  transition: all 0.2s ease;\n}\n.load-more-wrapper[_ngcontent-%COMP%]   .load-more-actions[_ngcontent-%COMP%]   .load-more-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #94a3b8;\n  transform: translateY(-2px);\n}\n.load-more-wrapper[_ngcontent-%COMP%]   .load-more-actions[_ngcontent-%COMP%]   .btn-all-calendar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 22px;\n  border-radius: 10px;\n  background: #102e1f;\n  border: 1px solid #102e1f;\n  color: #ffffff;\n  font-size: 0.875rem;\n  font-weight: 700;\n  text-decoration: none;\n  box-shadow: 0 4px 12px rgba(16, 46, 31, 0.2);\n  transition: all 0.2s ease;\n}\n.load-more-wrapper[_ngcontent-%COMP%]   .load-more-actions[_ngcontent-%COMP%]   .btn-all-calendar[_ngcontent-%COMP%]:hover {\n  background: #059669;\n  transform: translateY(-2px);\n}\n\n.trust-features-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-top: 1px solid #e2e8f0;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 64px 24px;\n}\n.trust-features-section[_ngcontent-%COMP%]   .trust-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.trust-features-section[_ngcontent-%COMP%]   .trust-header[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 640px;\n  margin: 0 auto 48px;\n}\n.trust-features-section[_ngcontent-%COMP%]   .trust-header[_ngcontent-%COMP%]   .badge-mini[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 6px;\n  background: #ecfdf5;\n  color: #065f46;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 10px;\n}\n.trust-features-section[_ngcontent-%COMP%]   .trust-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", serif;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0f241a;\n  margin: 0 0 10px;\n}\n.trust-features-section[_ngcontent-%COMP%]   .trust-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.95rem;\n}\n.trust-features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n@media (max-width: 992px) {\n  .trust-features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .trust-features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.trust-features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 28px 24px;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.25s ease;\n}\n.trust-features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);\n  border-color: #cbd5e1;\n}\n.trust-features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon-wrap[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: #ecfdf5;\n  color: #059669;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  margin-bottom: 18px;\n}\n.trust-features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 8px;\n}\n.trust-features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.55;\n  color: #64748b;\n}\n\n.referral-sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  flex-shrink: 0;\n}\n@media (max-width: 1024px) {\n  .referral-sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.mobile-referral-block[_ngcontent-%COMP%] {\n  display: none;\n  margin-top: 28px;\n  width: 100%;\n}\n@media (max-width: 1024px) {\n  .mobile-referral-block[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.referral-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 24px;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);\n}\n.referral-card[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #059669;\n  margin-bottom: 4px;\n}\n.referral-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f241a;\n  margin: 0 0 8px;\n}\n.referral-card[_ngcontent-%COMP%]   .referral-footnote[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n  margin-bottom: 14px;\n}\n.referral-card[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 16px;\n  border-radius: 8px;\n  background: #102e1f;\n  border: none;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.referral-card[_ngcontent-%COMP%]   .referral-code-pill[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f1f5f9;\n  border: 1px dashed #cbd5e1;\n  border-radius: 8px;\n  padding: 8px 12px;\n  margin-bottom: 12px;\n}\n.referral-card[_ngcontent-%COMP%]   .referral-code-pill[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f241a;\n  letter-spacing: 0.05em;\n}\n.referral-card[_ngcontent-%COMP%]   .referral-code-pill[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  padding: 4px 10px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.referral-card[_ngcontent-%COMP%]   .referral-mini-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 14px;\n  padding-top: 10px;\n  border-top: 1px solid #f1f5f9;\n}\n.referral-card[_ngcontent-%COMP%]   .referral-mini-stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.72rem;\n  color: #64748b;\n}\n.referral-card[_ngcontent-%COMP%]   .referral-mini-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #0f241a;\n}\n.referral-card[_ngcontent-%COMP%]   .referral-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.referral-card[_ngcontent-%COMP%]   .referral-actions[_ngcontent-%COMP%]   button.primary[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.referral-card[_ngcontent-%COMP%]   .referral-actions[_ngcontent-%COMP%]   button.ghost[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  color: #475569;\n  cursor: pointer;\n}\n\n.referral-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  left: 24px;\n  z-index: 990;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 9999px;\n  padding: 8px 18px 8px 10px;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.referral-fab[_ngcontent-%COMP%]   .referral-fab-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #ecfdf5;\n  color: #059669;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n}\n.referral-fab[_ngcontent-%COMP%]   .referral-fab-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n.referral-fab[_ngcontent-%COMP%]   .referral-fab-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #0f241a;\n  line-height: 1.2;\n}\n.referral-fab[_ngcontent-%COMP%]   .referral-fab-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #64748b;\n}\n.referral-fab[_ngcontent-%COMP%]   .referral-fab-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #059669;\n  padding-left: 6px;\n  border-left: 1px solid #e2e8f0;\n}\n.referral-fab[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);\n}\n\n.referral-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  z-index: 1050;\n  display: flex;\n  justify-content: flex-end;\n}\n.referral-drawer[_ngcontent-%COMP%]   .referral-drawer-panel[_ngcontent-%COMP%] {\n  width: min(90vw, 380px);\n  height: 100%;\n  background: #ffffff;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n.referral-drawer[_ngcontent-%COMP%]   .referral-drawer-panel[_ngcontent-%COMP%]   .referral-drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.referral-drawer[_ngcontent-%COMP%]   .referral-drawer-panel[_ngcontent-%COMP%]   .referral-drawer-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f241a;\n}\n.referral-drawer[_ngcontent-%COMP%]   .referral-drawer-panel[_ngcontent-%COMP%]   .referral-drawer-header[_ngcontent-%COMP%]   .drawer-close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 1.25rem;\n  cursor: pointer;\n}\n\n.compare-live-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 84px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1060;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  border-radius: 999px;\n  background: rgba(15, 36, 26, 0.95);\n  -webkit-backdrop-filter: blur(16px);\n          backdrop-filter: blur(16px);\n  border: 1px solid rgba(16, 185, 129, 0.4);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35), 0 0 20px rgba(16, 185, 129, 0.2);\n  color: #f8fafc;\n  font-size: 0.875rem;\n  font-weight: 500;\n  animation: _ngcontent-%COMP%_toastDrop 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n  max-width: min(92vw, 600px);\n}\n.compare-live-toast[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.compare-live-toast[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.compare-live-toast.info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #38bdf8;\n}\n.compare-live-toast.success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.compare-live-toast.warning[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n.compare-live-toast[_ngcontent-%COMP%]   .btn-toast-dismiss[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  font-size: 1.1rem;\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n.compare-live-toast[_ngcontent-%COMP%]   .btn-toast-dismiss[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n\n@keyframes _ngcontent-%COMP%_toastDrop {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -12px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, 0) scale(1);\n  }\n}\n.compare-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: min(94vw, 1020px);\n  background: linear-gradient(135deg, rgba(10, 26, 18, 0.96) 0%, rgba(14, 38, 26, 0.98) 100%);\n  border: 1.5px solid rgba(16, 185, 129, 0.45);\n  border-radius: 18px;\n  color: #ffffff;\n  padding: 12px 20px;\n  z-index: 1050;\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45), 0 0 24px rgba(16, 185, 129, 0.15);\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  animation: _ngcontent-%COMP%_compareBounceIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n.compare-bar[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: -2px;\n  border-radius: 20px;\n  padding: 2px;\n  background: linear-gradient(135deg, rgba(16, 185, 129, 0.6), rgba(52, 211, 153, 0));\n  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n  mask-composite: exclude;\n  animation: _ngcontent-%COMP%_borderGlowPulse 2.4s ease-in-out infinite;\n  pointer-events: none;\n}\n.compare-bar.pulse-attention[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_compareBounceIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, _ngcontent-%COMP%_attentionRing 1.1s ease-out 0.5s 2;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-dock-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-meta-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-meta-block[_ngcontent-%COMP%]   .compare-badge-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 5px 12px;\n  border-radius: 999px;\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.35);\n  color: #34d399;\n  font-size: 0.8125rem;\n  font-weight: 700;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-meta-block[_ngcontent-%COMP%]   .compare-badge-pill[_ngcontent-%COMP%]   .pulse-indicator[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #10b981;\n  box-shadow: 0 0 8px #10b981;\n  animation: _ngcontent-%COMP%_pulseDot 1.8s infinite;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-meta-block[_ngcontent-%COMP%]   .compare-prompt[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #94a3b8;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-meta-block[_ngcontent-%COMP%]   .compare-prompt[_ngcontent-%COMP%]   .prompt-hint[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-meta-block[_ngcontent-%COMP%]   .compare-prompt[_ngcontent-%COMP%]   .prompt-hint[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #38bdf8;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-meta-block[_ngcontent-%COMP%]   .compare-prompt[_ngcontent-%COMP%]   .prompt-ready[_ngcontent-%COMP%] {\n  color: #6ee7b7;\n  font-weight: 600;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-list[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-list[_ngcontent-%COMP%]   .compare-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 12px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 8px;\n  font-size: 0.8125rem;\n  max-width: 200px;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-list[_ngcontent-%COMP%]   .compare-item[_ngcontent-%COMP%]   .compare-item-name[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 500;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-list[_ngcontent-%COMP%]   .compare-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #f87171;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  transition: color 0.15s ease;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-list[_ngcontent-%COMP%]   .compare-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-actions[_ngcontent-%COMP%]   .book-btn[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n  border: none;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.84rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);\n  transition: all 0.2s ease;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-actions[_ngcontent-%COMP%]   .book-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.5);\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-actions[_ngcontent-%COMP%]   .book-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-actions[_ngcontent-%COMP%]   .secondary-btn[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: #cbd5e1;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-actions[_ngcontent-%COMP%]   .secondary-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  color: #ffffff;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-actions[_ngcontent-%COMP%]   .wa-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 14px;\n  border-radius: 10px;\n  background: #25D366;\n  border: none;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.compare-bar[_ngcontent-%COMP%]   .compare-actions[_ngcontent-%COMP%]   .wa-btn[_ngcontent-%COMP%]:hover {\n  background: #20bd5a;\n  transform: translateY(-1px);\n}\n\n@keyframes _ngcontent-%COMP%_compareBounceIn {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, 60px) scale(0.9);\n  }\n  60% {\n    opacity: 1;\n    transform: translate(-50%, -8px) scale(1.02);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, 0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_borderGlowPulse {\n  0%, 100% {\n    opacity: 0.5;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_attentionRing {\n  0% {\n    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45), 0 0 0 0 rgba(16, 185, 129, 0.6);\n  }\n  70% {\n    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45), 0 0 0 16px rgba(16, 185, 129, 0);\n  }\n  100% {\n    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45), 0 0 0 0 rgba(16, 185, 129, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulseDot {\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);\n  }\n  70% {\n    transform: scale(1.15);\n    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);\n  }\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);\n  }\n}\n.compare-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(10, 26, 18, 0.65);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  z-index: 1100;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  padding: 0 20px 24px 20px;\n  animation: _ngcontent-%COMP%_compareFadeIn 0.25s ease;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid rgba(16, 185, 129, 0.3);\n  border-radius: 24px;\n  width: min(96vw, 1140px);\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4), 0 0 32px rgba(16, 185, 129, 0.15);\n  animation: _ngcontent-%COMP%_compareFloatUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-floating-handle-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 10px;\n  padding-bottom: 2px;\n  background: #ffffff;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-floating-handle-bar[_ngcontent-%COMP%]   .compare-floating-handle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 4px;\n  border-radius: 999px;\n  background: #cbd5e1;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-panel-header[_ngcontent-%COMP%] {\n  padding: 14px 24px 16px;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f241a;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-panel-header[_ngcontent-%COMP%]   .secondary-btn[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  background: #f8fafc;\n  color: #334155;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 0.85rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.2s ease;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-panel-header[_ngcontent-%COMP%]   .secondary-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-loading[_ngcontent-%COMP%] {\n  padding: 48px 24px;\n  text-align: center;\n  color: #64748b;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 16px;\n  padding: 20px 24px 24px;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 6px;\n  gap: 10px;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-title-row[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #0f241a;\n  margin: 0;\n  line-height: 1.3;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-title-row[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 4px;\n  font-size: 0.95rem;\n  line-height: 1;\n  transition: color 0.2s;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-title-row[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-location[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n  margin-bottom: 12px;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-points[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 14px;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 7px 0;\n  border-bottom: 1px dashed #e2e8f0;\n  font-size: 0.8125rem;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f241a;\n  font-weight: 700;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-rich-section[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  background: #ffffff;\n  padding: 10px 12px;\n  border-radius: 10px;\n  border: 1px solid #f1f5f9;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-rich-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #15803d;\n  margin-bottom: 6px;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-rich-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-rich-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #475569;\n  padding: 2px 0;\n  line-height: 1.4;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-column-actions[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 14px;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-column-actions[_ngcontent-%COMP%]   .book-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #102e1f, #15803d);\n  color: #ffffff;\n  border: none;\n  font-weight: 700;\n  font-size: 0.82rem;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(16, 46, 31, 0.2);\n  transition: all 0.2s ease;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-column-actions[_ngcontent-%COMP%]   .book-btn[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #15803d, #166534);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(16, 46, 31, 0.3);\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-column-actions[_ngcontent-%COMP%]   .wa-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 14px;\n  border-radius: 10px;\n  background: #25D366;\n  color: #ffffff;\n  border: none;\n  font-weight: 700;\n  font-size: 0.82rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.2);\n  transition: all 0.2s ease;\n}\n.compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%]   .compare-column-actions[_ngcontent-%COMP%]   .wa-btn[_ngcontent-%COMP%]:hover {\n  background: #22c35e;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.3);\n}\n\n@keyframes _ngcontent-%COMP%_compareFloatUp {\n  0% {\n    opacity: 0;\n    transform: translateY(60px) scale(0.97);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_compareFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.loader-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 120px 24px;\n  gap: 16px;\n  color: #64748b;\n}\n.loader-wrapper[_ngcontent-%COMP%]   .custom-loader[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  border: 3px solid #e2e8f0;\n  border-top-color: #10b981;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n  max-width: 480px;\n  margin: 0 auto;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #ecfdf5;\n  color: #059669;\n  font-size: 2rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", serif;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #0f241a;\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\n\n@media (max-width: 1024px) {\n  .dashboard-grid[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0;\n  }\n  .referral-sidebar[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .mobile-referral-block[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .discovery-dock-section[_ngcontent-%COMP%] {\n    margin-top: -32px;\n    padding: 0 20px;\n  }\n  .discovery-dock[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 14px;\n    padding: 16px;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-search-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-search-wrap[_ngcontent-%COMP%]   .dock-search-input[_ngcontent-%COMP%] {\n    min-height: 48px;\n    font-size: 0.95rem;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-filter-pills[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: auto;\n    flex-wrap: nowrap;\n    -webkit-overflow-scrolling: touch;\n    scrollbar-width: none;\n    padding-bottom: 2px;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-filter-pills[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-filter-pills[_ngcontent-%COMP%]   .filter-pill[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    white-space: nowrap;\n    min-height: 40px;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-controls[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-controls[_ngcontent-%COMP%]   .dock-sort-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-controls[_ngcontent-%COMP%]   .dock-sort-wrap[_ngcontent-%COMP%]   .dock-select[_ngcontent-%COMP%] {\n    min-height: 44px;\n    width: 100%;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-controls[_ngcontent-%COMP%]   .dock-reset-btn[_ngcontent-%COMP%] {\n    min-height: 44px;\n    min-width: 44px;\n  }\n  .collection-chips-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .collection-chips-bar[_ngcontent-%COMP%]   .collection-header[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .collection-chips-bar[_ngcontent-%COMP%]   .collection-header[_ngcontent-%COMP%]   .collection-hint[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n    font-size: 0.72rem;\n    color: #10b981;\n    font-weight: 600;\n  }\n  .collection-chips-bar[_ngcontent-%COMP%]   .chips-scroll[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 2px 0 6px;\n  }\n  .collection-chips-bar[_ngcontent-%COMP%]   .chips-scroll[_ngcontent-%COMP%]   .collection-chip[_ngcontent-%COMP%] {\n    min-height: 40px;\n  }\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .hero-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 0 16px 40px;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2rem, 6vw, 2.75rem);\n    line-height: 1.15;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n    margin: 16px 0 28px;\n    line-height: 1.6;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-button[_ngcontent-%COMP%] {\n    padding: 12px 24px;\n    font-size: 0.8125rem;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n    flex-direction: row;\n    border-left: none;\n    border-top: 1px solid rgba(245, 240, 232, 0.15);\n    padding-left: 0;\n    padding-top: 16px;\n    gap: 16px;\n    justify-content: space-between;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n    padding: 0;\n    border-bottom: none;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n  .discovery-dock-section[_ngcontent-%COMP%] {\n    margin-top: -24px;\n    padding: 0 16px;\n  }\n  .discovery-dock[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding: 14px 14px;\n    border-radius: 16px;\n    gap: 12px;\n    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-search-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    max-width: 100%;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n    left: 14px;\n    font-size: 1.1rem;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-search-wrap[_ngcontent-%COMP%]   .dock-search-input[_ngcontent-%COMP%] {\n    min-height: 48px;\n    font-size: 16px;\n    padding: 12px 42px 12px 42px;\n    border-radius: 12px;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-search-wrap[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 44px;\n    right: 0;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-filter-pills[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: auto;\n    flex-wrap: nowrap;\n    -webkit-overflow-scrolling: touch;\n    scrollbar-width: none;\n    padding-bottom: 2px;\n    gap: 6px;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-filter-pills[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-filter-pills[_ngcontent-%COMP%]   .pill-group-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-filter-pills[_ngcontent-%COMP%]   .filter-pill[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    white-space: nowrap;\n    min-height: 40px;\n    padding: 8px 14px;\n    font-size: 0.8125rem;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-controls[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-controls[_ngcontent-%COMP%]   .dock-sort-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    min-width: 0;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-controls[_ngcontent-%COMP%]   .dock-sort-wrap[_ngcontent-%COMP%]   .sort-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-controls[_ngcontent-%COMP%]   .dock-sort-wrap[_ngcontent-%COMP%]   .dock-select[_ngcontent-%COMP%] {\n    min-height: 44px;\n    width: 100%;\n    font-size: 0.85rem;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-controls[_ngcontent-%COMP%]   .dock-reset-btn[_ngcontent-%COMP%] {\n    min-height: 44px;\n    min-width: 44px;\n    padding: 8px 14px;\n    font-size: 0.8125rem;\n  }\n  .collection-chips-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n    margin-top: 12px;\n    padding: 0 2px;\n  }\n  .collection-chips-bar[_ngcontent-%COMP%]   .collection-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n  }\n  .collection-chips-bar[_ngcontent-%COMP%]   .collection-header[_ngcontent-%COMP%]   .collection-label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .collection-chips-bar[_ngcontent-%COMP%]   .collection-header[_ngcontent-%COMP%]   .collection-hint[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n    font-size: 0.7rem;\n    color: #059669;\n    font-weight: 600;\n  }\n  .collection-chips-bar[_ngcontent-%COMP%]   .chips-scroll[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: auto;\n    flex-wrap: nowrap;\n    -webkit-overflow-scrolling: touch;\n    scrollbar-width: none;\n    padding: 2px 0 6px;\n    gap: 6px;\n  }\n  .collection-chips-bar[_ngcontent-%COMP%]   .chips-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .collection-chips-bar[_ngcontent-%COMP%]   .chips-scroll[_ngcontent-%COMP%]   .collection-chip[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    white-space: nowrap;\n    min-height: 42px;\n    padding: 8px 14px;\n    font-size: 0.8125rem;\n    border-radius: 9999px;\n  }\n  .expeditions-main[_ngcontent-%COMP%] {\n    padding: 16px 16px 40px;\n  }\n  .section-title-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .trek-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 18px;\n  }\n  .load-more-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .load-more-actions[_ngcontent-%COMP%]   .load-more-btn[_ngcontent-%COMP%], \n   .load-more-actions[_ngcontent-%COMP%]   .btn-all-calendar[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    min-height: 46px;\n  }\n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    gap: 14px;\n  }\n  .features-grid[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .compare-bar[_ngcontent-%COMP%] {\n    bottom: 14px;\n    width: calc(100vw - 24px);\n    max-width: 540px;\n    padding: 12px 14px;\n    border-radius: 14px;\n  }\n  .compare-bar[_ngcontent-%COMP%]   .compare-dock-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 10px;\n  }\n  .compare-bar[_ngcontent-%COMP%]   .compare-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    gap: 6px;\n  }\n  .compare-bar[_ngcontent-%COMP%]   .compare-actions[_ngcontent-%COMP%]   .book-btn[_ngcontent-%COMP%] {\n    flex: 1.4;\n    justify-content: center;\n    min-height: 44px;\n  }\n  .compare-bar[_ngcontent-%COMP%]   .compare-actions[_ngcontent-%COMP%]   .secondary-btn[_ngcontent-%COMP%], \n   .compare-bar[_ngcontent-%COMP%]   .compare-actions[_ngcontent-%COMP%]   .wa-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n    min-height: 44px;\n  }\n  .compare-overlay[_ngcontent-%COMP%] {\n    padding: 0 8px 12px 8px;\n  }\n  .compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 88vh;\n    border-radius: 20px;\n  }\n  .compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%] {\n    display: flex;\n    overflow-x: auto;\n    scroll-snap-type: x mandatory;\n    -webkit-overflow-scrolling: touch;\n    padding: 14px;\n    gap: 12px;\n  }\n  .compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%] {\n    flex: 0 0 calc(85% - 6px);\n    min-width: 260px;\n    scroll-snap-align: start;\n  }\n  .compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-column-actions[_ngcontent-%COMP%]   .book-btn[_ngcontent-%COMP%], \n   .compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-column-actions[_ngcontent-%COMP%]   .wa-btn[_ngcontent-%COMP%] {\n    min-height: 44px;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .hero-content[_ngcontent-%COMP%] {\n    padding: 0 12px 32px;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.15rem;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    margin: 12px 0 22px;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    min-height: 46px;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 8px;\n    padding-top: 14px;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    letter-spacing: 0.04em;\n  }\n  .discovery-dock-section[_ngcontent-%COMP%] {\n    padding: 0 10px;\n    margin-top: -20px;\n  }\n  .discovery-dock[_ngcontent-%COMP%] {\n    padding: 12px 10px;\n    border-radius: 14px;\n    gap: 10px;\n    width: 100%;\n    max-width: 400px;\n    margin: 0 auto;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-search-wrap[_ngcontent-%COMP%]   .dock-search-input[_ngcontent-%COMP%] {\n    min-height: 46px;\n    font-size: 15px;\n    padding: 10px 38px 10px 38px;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n    left: 12px;\n    font-size: 1rem;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-filter-pills[_ngcontent-%COMP%] {\n    gap: 5px;\n  }\n  .discovery-dock[_ngcontent-%COMP%]   .dock-filter-pills[_ngcontent-%COMP%]   .filter-pill[_ngcontent-%COMP%] {\n    padding: 7px 12px;\n    font-size: 0.78rem;\n    min-height: 38px;\n  }\n  .collection-chips-bar[_ngcontent-%COMP%] {\n    padding: 0 2px;\n    margin-top: 10px;\n  }\n  .collection-chips-bar[_ngcontent-%COMP%]   .chips-scroll[_ngcontent-%COMP%] {\n    gap: 6px;\n    width: 100%;\n    max-width: 390px;\n    overflow-x: auto;\n  }\n  .collection-chips-bar[_ngcontent-%COMP%]   .chips-scroll[_ngcontent-%COMP%]   .collection-chip[_ngcontent-%COMP%] {\n    padding: 7px 12px;\n    font-size: 0.78rem;\n    min-height: 40px;\n  }\n  .card-footer-pricing[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch !important;\n    gap: 12px;\n  }\n  .card-footer-pricing[_ngcontent-%COMP%]   .price-block[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n  }\n  .card-footer-pricing[_ngcontent-%COMP%]   .action-buttons-group[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n    gap: 6px;\n  }\n  .card-footer-pricing[_ngcontent-%COMP%]   .action-buttons-group[_ngcontent-%COMP%]   .btn-compare[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n    min-height: 44px;\n    padding: 0 8px;\n  }\n  .card-footer-pricing[_ngcontent-%COMP%]   .action-buttons-group[_ngcontent-%COMP%]   .btn-wa-inquire[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 44px;\n    min-width: 44px;\n    min-height: 44px;\n  }\n  .card-footer-pricing[_ngcontent-%COMP%]   .action-buttons-group[_ngcontent-%COMP%]   .btn-book-now[_ngcontent-%COMP%] {\n    flex: 1.2;\n    justify-content: center;\n    min-height: 44px;\n  }\n  .compare-overlay[_ngcontent-%COMP%] {\n    padding: 0 4px 8px 4px;\n  }\n  .compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%] {\n    border-radius: 18px;\n    max-height: 90vh;\n  }\n  .compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-panel-header[_ngcontent-%COMP%] {\n    padding: 10px 14px;\n  }\n  .compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.05rem;\n  }\n  .compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%] {\n    padding: 10px;\n    gap: 10px;\n  }\n  .compare-overlay[_ngcontent-%COMP%]   .compare-panel[_ngcontent-%COMP%]   .compare-columns[_ngcontent-%COMP%]   .compare-column[_ngcontent-%COMP%] {\n    flex: 0 0 calc(90% - 4px);\n    min-width: 240px;\n    padding: 14px 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLG1HQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0FBSkY7O0FBUUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhEQUFBO0FBTEY7O0FBUUE7RUFDRSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0U7SUFBTyxVQUFBO0lBQVksMkJBQUE7RUFIbkI7RUFJQTtJQUFPLFVBQUE7SUFBWSx3QkFBQTtFQUFuQjtBQUNGO0FBbUJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWpCRjs7QUFxQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBbEJGOztBQXNCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw2Q0FBQTtBQW5CRjtBQXNCSTtFQUVFLGdHQUFBO0VBQ0EsbUJBQUE7QUFyQk47QUFrQkk7RUFFRSxnR0FBQTtFQUNBLG1CQUFBO0FBakJOO0FBY0k7RUFFRSxnR0FBQTtFQUNBLG9CQUFBO0FBYk47QUFVSTtFQUVFLGdHQUFBO0VBQ0Esb0JBQUE7QUFUTjtBQU1JO0VBRUUsZ0dBQUE7RUFDQSxvQkFBQTtBQUxOOztBQVdBO0VBRUk7SUFDRSxnR0FBQTtFQVRKO0VBUUU7SUFDRSxnR0FBQTtFQU5KO0VBS0U7SUFDRSxnR0FBQTtFQUhK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TjtFQXVOSTtJQUNFLFVBQUE7SUFDQSxlQUFBO0VBck5OO0VBeU5FO0lBQ0UsUUFBQTtFQXZOSjtFQXlOSTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQXZOTjtFQTROQTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtFQTFORjtFQTRORTtJQUNJLFFBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQTFOTjtFQTROSTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQTFOTjtFQStOQTtJQUNFLHNCQUFBO0lBQ0EsK0JBQUE7SUFDQSxTQUFBO0VBN05GO0VBK05FO0lBQ0UsYUFBQTtJQUNBLDhCQUFBO0lBQ0EscUJBQUE7RUE3Tko7RUFnT0U7SUFDRSxXQUFBO0lBQ0EsOEJBQUE7SUFDQSxRQUFBO0VBOU5KO0VBZ09JO0lBQ0UsT0FBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBOU5OO0VBaU9JO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUEvTk47RUFrT0k7SUFDRSxTQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtFQWhPTjtFQXFPQTtJQUNFLHNCQUFBO0VBbk9GO0VBcU9FO0lBQ0UsbUJBQUE7SUFDQSxnQkFBQTtFQW5PSjtFQXFPSTtJQUNFLGtCQUFBO0VBbk9OO0VBb09NO0lBQ0Usa0JBQUE7RUFsT1I7RUFzT0k7SUFDRSxhQUFBO0lBQ0EsU0FBQTtFQXBPTjtFQXNPTTtJQUNFLHlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQXBPUjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gw6LClMKAw6LClMKAw6LClMKAIEdPT0dMRSBGT05UUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbkB1c2UgJ3Nhc3M6bGlzdCc7XG5AdXNlICdzYXNzOm1hdGgnO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50K0dhcmFtb25kOml0YWwsd2dodEAwLDQwMDswLDYwMDswLDcwMDsxLDQwMDsxLDYwMCZmYW1pbHk9Sm9zdDp3Z2h0QDMwMDs0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbHVzK0pha2FydGErU2Fuczp3Z2h0QDQwMDs1MDA7NjAwOzcwMDs4MDAmZmFtaWx5PUZyYXVuY2VzOml0YWwsb3Bzeix3Z2h0QDAsOS4uMTQ0LDYwMDswLDkuLjE0NCw3MDA7MSw5Li4xNDQsNDAwOzEsOS4uMTQ0LDcwMCZkaXNwbGF5PXN3YXBcIik7XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBUT0tFTlMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG46cm9vdCB7XG4gIC0tcmFkaXVzLWNhcmQ6IDRweDtcbiAgLS00MHB4OiA0MHB4O1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogJ1BsdXMgSmFrYXJ0YSBTYW5zJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMWUyOTNiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICAtLXByaW1hcnktZGVlcDogIzA3MTcwZjtcbiAgLS1wcmltYXJ5LWZvcmVzdDogIzEwMmUxZjtcbiAgLS1lbWVyYWxkLWFjY2VudDogIzEwYjk4MTtcbiAgLS1lbWVyYWxkLWdsb3c6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjI1KTtcbiAgLS1nb2xkLWFjY2VudDogI2Y1OWUwYjtcbiAgLS1lYXNlOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUEFHRSBXUkFQUEVSIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnBhZ2Utd3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbmltYXRpb246IHBhZ2VSZXZlYWwgMC42cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgYm90aDtcbn1cblxuLmRhc2hib2FyZC1lcnJvci1iYW5uZXIge1xuICBiYWNrZ3JvdW5kOiAjZmVmMmYyO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNlZjQ0NDQ7XG4gIGNvbG9yOiAjOTkxYjFiO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgcGFnZVJldmVhbCB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTJweCk7IH1cbiAgdG8gICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgSEVSTyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcblxuLy8gU2xpZGVzaG93IGNvbmZpZ1xuJHNsaWRlLWNvdW50ICAgIDogNTtcbiRzbGlkZS1kdXJhdGlvbiA6IDZzO1xuJGZhZGUtZHVyYXRpb24gIDogMS40cztcbiR0b3RhbCAgICAgICAgICA6ICRzbGlkZS1jb3VudCAqICRzbGlkZS1kdXJhdGlvbjtcblxuLy8gU2xpZGUgYmFja2dyb3VuZCBpbWFnZXMgw6LCgMKUIHVzZSBsb2NhbCBhc3NldHMgKGFkZCBmaWxlcyB0byBgc3JjL2Fzc2V0cy9pbWFnZXMvYClcbiRzbGlkZXM6IChcbiAgJy9hc3NldHMvaW1hZ2VzL2hlcm8tc2xpZGUtMS5qcGcnLFxuICAnL2Fzc2V0cy9pbWFnZXMvaGVyby1zbGlkZS0yLmpwZycsXG4gICcvYXNzZXRzL2ltYWdlcy9oZXJvLXNsaWRlLTMuanBnJyxcbiAgJy9hc3NldHMvaW1hZ2VzL2hlcm8tc2xpZGUtNC5qcGcnLFxuICAnL2Fzc2V0cy9pbWFnZXMvaGVyby1zbGlkZS01LmpwZydcbik7XG5cbi5oZXJvLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNzV2aDtcbiAgbWluLWhlaWdodDogNDgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBTbGlkZSBjb250YWluZXJcbi5oZXJvLXNsaWRlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDA7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBJbmRpdmlkdWFsIHNsaWRlXG4uaGVyby1zbGlkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcbiAgYW5pbWF0aW9uOiBzbGlkZVNob3cgI3skdG90YWx9IGVhc2UtaW4tb3V0IGluZmluaXRlO1xuXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJHNsaWRlLWNvdW50IHtcbiAgICAmLnNsaWRlLSN7JGl9IHtcbiAgICAgIC8vIFRyeSBKUEcgZmlyc3QgKHByb2R1Y3Rpb24pLCBmYWxsIGJhY2sgdG8gU1ZHIHBsYWNlaG9sZGVyIGlmIG1pc3NpbmdcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaGVyby1zbGlkZS0jeyRpfS5qcGcnKSwgdXJsKCcvYXNzZXRzL2ltYWdlcy9oZXJvLXNsaWRlLSN7JGl9LnN2ZycpO1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAjeygkaSAtIDEpICogJHNsaWRlLWR1cmF0aW9ufTtcbiAgICB9XG4gIH1cbn1cblxuLy8gSGlnaC1EUEkgLyBSZXRpbmEgZmFsbGJhY2tzOiBzZXJ2ZSBAMnggaW1hZ2VzIHdoZW4gZGV2aWNlIHBpeGVsIHJhdGlvIGlzIGhpZ2hcbkBtZWRpYSAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjUpLCAobWluLXJlc29sdXRpb246IDE0NGRwaSkge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRzbGlkZS1jb3VudCB7XG4gICAgLmhlcm8tc2xpZGUuc2xpZGUtI3skaX0ge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9oZXJvLXNsaWRlLSN7JGl9LmpwZycpLCB1cmwoJy9hc3NldHMvaW1hZ2VzL2hlcm8tc2xpZGUtI3skaX0uc3ZnJyk7XG4gICAgfVxuICB9XG59XG5cbi8vIEVhY2ggc2xpZGUgb2NjdXBpZXMgMS8kc2xpZGUtY291bnQgb2YgdGhlIHRvdGFsIHRpbWVsaW5lXG5Aa2V5ZnJhbWVzIHNsaWRlU2hvdyB7XG4gICRob2xkLWVuZCAgOiBtYXRoLnBlcmNlbnRhZ2UobWF0aC5kaXYoMSwgJHNsaWRlLWNvdW50KSk7XG4gICRmYWRlLWluICAgOiBtYXRoLnBlcmNlbnRhZ2UobWF0aC5kaXYoJGZhZGUtZHVyYXRpb24sICR0b3RhbCkpO1xuICAkZmFkZS1vdXQgIDogJGhvbGQtZW5kIC0gbWF0aC5wZXJjZW50YWdlKG1hdGguZGl2KCRmYWRlLWR1cmF0aW9uLCAkdG90YWwpKTtcblxuICAwJSAgICAgICAgICB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7IH1cbiAgI3skZmFkZS1pbn0geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEuMDApOyB9XG4gICN7JGZhZGUtb3V0fXsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZSgxLjAwKTsgfVxuICAjeyRob2xkLWVuZH17IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7IH1cbiAgMTAwJSAgICAgICAgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBEYXJrIGdyYWRpZW50IG92ZXJsYXkgKHdhcyA6OmJlZm9yZSlcbi5oZXJvLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOlxuICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHRvcCxcbiAgICAgIHJnYmEoMTQsIDIyLCAxNiwgMC45MikgMCUsXG4gICAgICByZ2JhKDE0LCAyMiwgMTYsIDAuMzApIDU1JSxcbiAgICAgIHRyYW5zcGFyZW50ICAgICAgICAgICAgMTAwJVxuICAgICk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vLyDDosKUwoDDosKUwoAgRmlsbS1ncmFpbiB0ZXh0dXJlICh3YXMgOjphZnRlcilcbi5oZXJvLWdyYWluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNTYnIGhlaWdodD0nMjU2JyUzRSUzQ2ZpbHRlciBpZD0nZyclM0UlM0NmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScuOScgbnVtT2N0YXZlcz0nNCcgc3RpdGNoVGlsZXM9J3N0aXRjaCcvJTNFJTNDL2ZpbHRlciUzRSUzQ3JlY3Qgd2lkdGg9JzI1NicgaGVpZ2h0PScyNTYnIGZpbHRlcj0ndXJsKCUyM2cpJyBvcGFjaXR5PScuMDQ1Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEhFUk8gQ09OVEVOVCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5oZXJvLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgN3Z3IDcycHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZ2FwOiAyNHB4O1xuXG4gIC5oZXJvLXRleHQge1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gIH1cblxuICAuaGVyby1leWVicm93IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjN2ZiODk2O1xuICAgIH1cbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIEdlb3JnaWEsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgN3Z3LCA2LjVyZW0pO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDAuOTU7XG4gICAgY29sb3I6ICNmNWYwZTg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC4xcHggd2hpdGU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgaDEgZW0ge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogIzdmYjg5NjtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMjBweCAwIDM2cHg7XG4gICAgY29sb3I6IHJnYmEoMjQ1LCAyNDAsIDIzMiwgMC43NSk7XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICBsaW5lLWhlaWdodDogMS43O1xuICAgIG1heC13aWR0aDogNDYwcHg7XG4gIH1cblxuICAvLyBSaWdodDogdmVydGljYWwgc3RhdCBzdHJpcFxuICAuaGVyby1zdGF0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDAsIDIzMiwgMC4xOCk7XG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuXG4gIC5zdGF0LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNDUsIDI0MCwgMjMyLCAwLjEpO1xuXG4gICAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuXG4gICAgc3Ryb25nIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjZjVmMGU4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc21hbGwge1xuICAgICAgY29sb3I6ICM4YTliOGU7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE0ZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG59XG5cbi5oZXJvLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmNWYwZTg7XG4gIGNvbG9yOiAjMWExZjFiO1xuICBmb250LWZhbWlseTogJ0pvc3QnLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMTRweCAyOHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMsIHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgYm94LXNoYWRvdyAwLjJzO1xuXG4gIC5idG4taWNvbiB7XG4gICAgd2lkdGg6IDI2cHg7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIGJhY2tncm91bmQ6ICMzYTYzNDk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXG4gICAgLmJ0bi1pY29uIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7IH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlcm8tY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgcGFkZGluZzogMCAyMHB4IDQ4cHg7XG5cbiAgICAuaGVyby1zdGF0cyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNDUsIDI0MCwgMjMyLCAwLjE1KTtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgZ2FwOiAyNHB4O1xuICAgIH1cblxuICAgIC5zdGF0LWl0ZW0ge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAyLiBGTE9BVElORyBESVNDT1ZFUlkgJiBGSUxURVIgRE9DS1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5kaXNjb3ZlcnktZG9jay1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAtNDRweCBhdXRvIDM2cHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5kaXNjb3ZlcnktZG9jayB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gIGJveC1zaGFkb3c6IDAgMTZweCA0MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAuZG9jay1zZWFyY2gtd3JhcCB7XG4gICAgZmxleDogMS4zO1xuICAgIG1pbi13aWR0aDogMjgwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5zZWFyY2gtaWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxNHB4O1xuICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG5cbiAgICAuZG9jay1zZWFyY2gtaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4taGVpZ2h0OiA0NnB4O1xuICAgICAgcGFkZGluZzogMTJweCA0MnB4IDEycHggNDJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAgICAgY29sb3I6ICMxZTI5M2I7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICMxMGI5ODE7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4xNSk7XG4gICAgICB9XG5cbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNsZWFyLXNlYXJjaC1idG4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDRweDtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogIzk0YTNiODtcbiAgICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2VmNDQ0NDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4wOCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRvY2stZmlsdGVyLXBpbGxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLnBpbGwtZ3JvdXAtbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gICAgfVxuXG4gICAgLmZpbHRlci1waWxsIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG1pbi1oZWlnaHQ6IDM4cHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XG4gICAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxMDJlMWY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzEwMmUxZjtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDE2LCA0NiwgMzEsIDAuMjUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5kb2NrLWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuXG4gICAgLmRvY2stc29ydC13cmFwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgIC5zb3J0LWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgLmRvY2stc2VsZWN0IHtcbiAgICAgICAgcGFkZGluZzogOXB4IDEycHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gICAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzEwYjk4MTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5kb2NrLXJlc2V0LWJ0biB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDZweDtcbiAgICAgIHBhZGRpbmc6IDlweCAxNHB4O1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xuICAgICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNvbGxlY3Rpb24tY2hpcHMtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBwYWRkaW5nOiAwIDRweDtcblxuICAuY29sbGVjdGlvbi1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIC5jb2xsZWN0aW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5jb2xsZWN0aW9uLWhpbnQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuY2hpcHMtc2Nyb2xsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHBhZGRpbmc6IDJweCAwO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgZGlzcGxheTogbm9uZTsgfVxuXG4gICAgLmNvbGxlY3Rpb24tY2hpcCB7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgY29sb3I6ICM0NzU1Njk7XG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBtaW4taGVpZ2h0OiAzOHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgICAgY29sb3I6ICMxZTI5M2I7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTAyZTFmO1xuICAgICAgICBib3JkZXItY29sb3I6ICMxMDJlMWY7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMTYsIDQ2LCAzMSwgMC4yNSk7XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgY29sb3I6ICNmYmJmMjQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gMy4gRVhQRURJVElPTlMgU0hPV0NBU0UgKEdSSUQpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLmV4cGVkaXRpb25zLW1haW4ge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAyNHB4IDI0cHggNjRweDtcblxuICAubWFpbi1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5cbi5zZWN0aW9uLXRpdGxlLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgLnNlY3Rpb24tZXllYnJvdyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gICAgY29sb3I6ICMwNTk2Njk7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG5cbiAgLnNlY3Rpb24taGVhZGluZyB7XG4gICAgZm9udC1mYW1pbHk6ICdGcmF1bmNlcycsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS42cmVtLCAzdncsIDIuMnJlbSk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzBmMjQxYTtcbiAgICBtYXJnaW46IDAgMCA2cHg7XG4gIH1cblxuICAuc2VjdGlvbi1zdWIge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgfVxuXG4gIC5idG4tdmlldy1jYWxlbmRhciB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gICAgY29sb3I6ICMwZjI0MWE7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgxNSwgMjMsIDQyLCAwLjA0KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgaSB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgICAgIGJvcmRlci1jb2xvcjogIzk0YTNiODtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDE0cHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcblxuICAgICAgaSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZGFzaGJvYXJkLWdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDI4cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gIC5kYXNoYm9hcmQtbWFpbiB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDA7XG4gIH1cbn1cblxuLnRyZWstZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KG1pbigxMDAlLCAzMDBweCksIDFmcikpO1xuICBnYXA6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBVTFRSQS1NT0RFUk4gVFJFSyBDQVJEXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLm1vZGVybi10cmVrLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgIGJveC1zaGFkb3c6IDAgMTZweCAzNnB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xKTtcbiAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XG5cbiAgICAuY2FyZC1tZWRpYS13cmFwIC5jYXJkLWltZyB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xuICAgIH1cbiAgfVxuXG4gIC5jYXJkLW1lZGlhLXdyYXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLmNhcmQtaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgIH1cblxuICAgIC5tZWRpYS1vdmVybGF5IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGluc2V0OiAwO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwLjM1KSAwJSwgdHJhbnNwYXJlbnQgNDAlLCByZ2JhKDAsIDAsIDAsIDAuNikgMTAwJSk7XG4gICAgfVxuXG4gICAgLmNhcmQtYmFkZ2VzLXRvcCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDEycHg7XG4gICAgICBsZWZ0OiAxMnB4O1xuICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuXG4gICAgICAuZGlmZi1iYWRnZSB7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG5cbiAgICAgICAgJi5lYXN5IHsgYmFja2dyb3VuZDogcmdiYSgxNiwgMTg1LCAxMjksIDAuOSk7IGNvbG9yOiAjZmZmZmZmOyB9XG4gICAgICAgICYubW9kZXJhdGUgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMTU4LCAxMSwgMC45KTsgY29sb3I6ICNmZmZmZmY7IH1cbiAgICAgICAgJi5kaWZmaWN1bHQsICYuY2hhbGxlbmdpbmcgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjkpOyBjb2xvcjogI2ZmZmZmZjsgfVxuICAgICAgfVxuXG4gICAgICAuYXZhaWwtYmFkZ2Uge1xuICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuXG4gICAgICAgICYuYXZhaWxhYmxlIHsgYmFja2dyb3VuZDogcmdiYSg1LCAxNTAsIDEwNSwgMC45KTsgY29sb3I6ICNmZmZmZmY7IH1cbiAgICAgICAgJi5zZWxsaW5nLWZhc3QgeyBiYWNrZ3JvdW5kOiByZ2JhKDIxNywgMTE5LCA2LCAwLjkpOyBjb2xvcjogI2ZmZmZmZjsgfVxuICAgICAgICAmLmxhc3Qtc2VhdCB7IGJhY2tncm91bmQ6IHJnYmEoMjI1LCAyOSwgNzIsIDAuOSk7IGNvbG9yOiAjZmZmZmZmOyB9XG4gICAgICAgICYuc29sZC1vdXQgeyBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwgMTE2LCAxMzksIDAuOSk7IGNvbG9yOiAjZmZmZmZmOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmQtZGF0ZS1iYWRnZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDEycHg7XG4gICAgICBsZWZ0OiAxMnB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6ICMzNGQzOTk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMThweCAyMHB4IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZ3JvdzogMTtcblxuICAgIC5jYXJkLWhlYWRlci1pbmZvIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogIzBmMjQxYTtcbiAgICAgICAgbWFyZ2luOiAwIDAgNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzA1OTY2OTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY2FyZC1sb2NhdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNXB4O1xuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmQtc3BlY3Mtcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxNHB4O1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY1Zjk7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgICAgIC5zcGVjLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICM0NzU1Njk7XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgY29sb3I6ICMwNTk2Njk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZC1oaWdobGlnaHRzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBnYXA6IDZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAgIC5oaWdobGlnaHQtY2hpcCB7XG4gICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgICAgY29sb3I6ICM0NzU1Njk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZC1mb290ZXItcHJpY2luZyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY1Zjk7XG5cbiAgICAgIC5wcmljZS1ibG9jayB7XG4gICAgICAgIC5wcmljZS12YWx1ZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdGcmF1bmNlcycsIHNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICMwZjI0MWE7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAucHJpY2Utc3ViIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFjdGlvbi1idXR0b25zLWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA2cHg7XG5cbiAgICAgICAgLmJ0bi1jb21wYXJlIHtcbiAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gICAgICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMmU4ZjA7XG4gICAgICAgICAgICBjb2xvcjogIzFlMjkzYjtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzk0YTNiODtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNmZGY1O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTBiOTgxO1xuICAgICAgICAgICAgY29sb3I6ICMwNTk2Njk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgxNiwgMTg1LCAxMjksIDAuMik7XG5cbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICBjb2xvcjogIzEwYjk4MTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYnRuLXdhLWlucXVpcmUge1xuICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2RjZmNlNztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJmN2QwO1xuICAgICAgICAgIGNvbG9yOiAjMTZhMzRhO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI1RDM2NjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjVEMzY2O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5idG4tYm9vay1ub3cge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiA2cHg7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE0cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMxMDJlMWY7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNTk2Njk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIExPQUQgTU9SRSAmIENBTEVOREFSIFBST01PXG4ubG9hZC1tb3JlLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI0cHggMCAxMnB4O1xuXG4gIC5sb2FkLW1vcmUtbWV0YSB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgLmxvYWQtbW9yZS1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAubG9hZC1tb3JlLWJ0biB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjA0KTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgICBib3JkZXItY29sb3I6ICM5NGEzYjg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLWFsbC1jYWxlbmRhciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMTAyZTFmO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzEwMmUxZjtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTYsIDQ2LCAzMSwgMC4yKTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDU5NjY5O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyA0LiBXSFkgVFJFSyBXSVRIIEdPV0lMRCAoVFJVU1QgRkVBVFVSRVMpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLnRydXN0LWZlYXR1cmVzLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XG4gIHBhZGRpbmc6IDY0cHggMjRweDtcblxuICAudHJ1c3QtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC50cnVzdC1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDQ4cHg7XG5cbiAgICAuYmFkZ2UtbWluaSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGJhY2tncm91bmQ6ICNlY2ZkZjU7XG4gICAgICBjb2xvcjogIzA2NWY0NjtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgZm9udC1mYW1pbHk6ICdGcmF1bmNlcycsIHNlcmlmO1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjMGYyNDFhO1xuICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5mZWF0dXJlcy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gICAgZ2FwOiAyNHB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuXG4gICAgLmZlYXR1cmUtY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICBwYWRkaW5nOiAyOHB4IDI0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDEycHggMjhweCByZ2JhKDE1LCAyMywgNDIsIDAuMDYpO1xuICAgICAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XG4gICAgICB9XG5cbiAgICAgIC5mZWF0dXJlLWljb24td3JhcCB7XG4gICAgICAgIHdpZHRoOiA1MnB4O1xuICAgICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlY2ZkZjU7XG4gICAgICAgIGNvbG9yOiAjMDU5NjY5O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU1O1xuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIDUuIFJFRkVSUkFMIFNJREVCQVIgJiBGQUJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4ucmVmZXJyYWwtc2lkZWJhciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLm1vYmlsZS1yZWZlcnJhbC1ibG9jayB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4ucmVmZXJyYWwtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxNSwgMjMsIDQyLCAwLjA0KTtcblxuICAuZXllYnJvdyB7XG4gICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgIGNvbG9yOiAjMDU5NjY5O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzBmMjQxYTtcbiAgICBtYXJnaW46IDAgMCA4cHg7XG4gIH1cblxuICAucmVmZXJyYWwtZm9vdG5vdGUge1xuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIH1cblxuICBidXR0b24ucHJpbWFyeSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjMTAyZTFmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnJlZmVycmFsLWNvZGUtcGlsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjY2JkNWUxO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICMwZjI0MWE7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAucmVmZXJyYWwtbWluaS1zdGF0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjVmOTtcblxuICAgIHAgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMC43MnJlbTsgY29sb3I6ICM2NDc0OGI7IH1cbiAgICBzdHJvbmcgeyBmb250LXNpemU6IDEuMXJlbTsgY29sb3I6ICMwZjI0MWE7IH1cbiAgfVxuXG4gIC5yZWZlcnJhbC1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuXG4gICAgYnV0dG9uLnByaW1hcnkge1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICBidXR0b24uZ2hvc3Qge1xuICAgICAgcGFkZGluZzogMTBweCAxNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gICAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLnJlZmVycmFsLWZhYiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyNHB4O1xuICBsZWZ0OiAyNHB4O1xuICB6LWluZGV4OiA5OTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBwYWRkaW5nOiA4cHggMThweCA4cHggMTBweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuXG4gIC5yZWZlcnJhbC1mYWItaWNvbiB7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZWNmZGY1O1xuICAgIGNvbG9yOiAjMDU5NjY5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuXG4gIC5yZWZlcnJhbC1mYWItY29weSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICBzdHJvbmcge1xuICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgICBjb2xvcjogIzBmMjQxYTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgfVxuXG4gICAgc21hbGwge1xuICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICB9XG4gIH1cblxuICAucmVmZXJyYWwtZmFiLWN0YSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzA1OTY2OTtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMmU4ZjA7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDMwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjE4KTtcbiAgfVxufVxuXG4ucmVmZXJyYWwtZHJhd2VyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgei1pbmRleDogMTA1MDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAucmVmZXJyYWwtZHJhd2VyLXBhbmVsIHtcbiAgICB3aWR0aDogbWluKDkwdncsIDM4MHB4KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgLnJlZmVycmFsLWRyYXdlci1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgaDQgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMS4yNXJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICMwZjI0MWE7IH1cbiAgICAgIC5kcmF3ZXItY2xvc2UtYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyA2LiBGTE9BVElORyBDT01QQVJJU09OIERPQ0sgJiBMSVZFIFRPQVNUXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLmNvbXBhcmUtbGl2ZS10b2FzdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA4NHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgei1pbmRleDogMTA2MDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAzNiwgMjYsIDAuOTUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjQpO1xuICBib3gtc2hhZG93OiAwIDEycHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMzUpLCAwIDAgMjBweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4yKTtcbiAgY29sb3I6ICNmOGZhZmM7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGFuaW1hdGlvbjogdG9hc3REcm9wIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSkgZm9yd2FyZHM7XG4gIG1heC13aWR0aDogbWluKDkydncsIDYwMHB4KTtcblxuICAudG9hc3QtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG4gIH1cblxuICAmLmluZm8gaSB7IGNvbG9yOiAjMzhiZGY4OyB9XG4gICYuc3VjY2VzcyBpIHsgY29sb3I6ICMzNGQzOTk7IH1cbiAgJi53YXJuaW5nIGkgeyBjb2xvcjogI2ZiYmYyNDsgfVxuXG4gIC5idG4tdG9hc3QtZGlzbWlzcyB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICY6aG92ZXIgeyBjb2xvcjogI2ZmZmZmZjsgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgdG9hc3REcm9wIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMnB4KSBzY2FsZSgwLjk2KTsgfVxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApIHNjYWxlKDEpOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBGbG9hdGluZyBjb21wYXJlIGRvY2s6IGJvdW5jZS1pbiBlbnRyYW5jZSArIGlkbGUgZ2xvdyArIGF0dGVudGlvbiBwdWxzZVxuLmNvbXBhcmUtYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDI0cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogbWluKDk0dncsIDEwMjBweCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTAsIDI2LCAxOCwgMC45NikgMCUsIHJnYmEoMTQsIDM4LCAyNiwgMC45OCkgMTAwJSk7XG4gIGJvcmRlcjogMS41cHggc29saWQgcmdiYSgxNiwgMTg1LCAxMjksIDAuNDUpO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICB6LWluZGV4OiAxMDUwO1xuICBib3gtc2hhZG93OiAwIDE2cHggNDhweCByZ2JhKDAsIDAsIDAsIDAuNDUpLCAwIDAgMjRweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4xNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgYW5pbWF0aW9uOiBjb21wYXJlQm91bmNlSW4gMC41cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSkgZm9yd2FyZHM7XG5cbiAgLy8gU29mdCBhbmltYXRlZCBncmFkaWVudCByaW5nIHNvIHRoZSBkb2NrIGRvZXNuJ3QgZ28gdmlzdWFsbHkgZmxhdCBhdCByZXN0XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAtMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjYpLCByZ2JhKDUyLCAyMTEsIDE1MywgMCkpO1xuICAgIC13ZWJraXQtbWFzazogbGluZWFyLWdyYWRpZW50KCNmZmYgMCAwKSBjb250ZW50LWJveCwgbGluZWFyLWdyYWRpZW50KCNmZmYgMCAwKTtcbiAgICAtd2Via2l0LW1hc2stY29tcG9zaXRlOiB4b3I7XG4gICAgbWFzay1jb21wb3NpdGU6IGV4Y2x1ZGU7XG4gICAgYW5pbWF0aW9uOiBib3JkZXJHbG93UHVsc2UgMi40cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC8vIEZpcmVzIGJyaWVmbHkgd2hlbmV2ZXIgYSB0cmVrIGlzIGFkZGVkLCB0byByZWRyYXcgdGhlIGV5ZSB0byB0aGUgZG9ja1xuICAmLnB1bHNlLWF0dGVudGlvbiB7XG4gICAgYW5pbWF0aW9uOiBjb21wYXJlQm91bmNlSW4gMC41cyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSkgZm9yd2FyZHMsXG4gICAgICAgICAgICAgICBhdHRlbnRpb25SaW5nIDEuMXMgZWFzZS1vdXQgMC41cyAyO1xuICB9XG5cbiAgLmNvbXBhcmUtZG9jay1pbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDE2cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLmNvbXBhcmUtbWV0YS1ibG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcblxuICAgIC5jb21wYXJlLWJhZGdlLXBpbGwge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA3cHg7XG4gICAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMTg1LCAxMjksIDAuMTUpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMTg1LCAxMjksIDAuMzUpO1xuICAgICAgY29sb3I6ICMzNGQzOTk7XG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbiAgICAgIC5wdWxzZS1pbmRpY2F0b3Ige1xuICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTBiOTgxO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4ICMxMGI5ODE7XG4gICAgICAgIGFuaW1hdGlvbjogcHVsc2VEb3QgMS44cyBpbmZpbml0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29tcGFyZS1wcm9tcHQge1xuICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgICBjb2xvcjogIzk0YTNiODtcblxuICAgICAgLnByb21wdC1oaW50IHtcbiAgICAgICAgY29sb3I6ICNlMmU4ZjA7XG4gICAgICAgIGkgeyBjb2xvcjogIzM4YmRmODsgfVxuICAgICAgfVxuXG4gICAgICAucHJvbXB0LXJlYWR5IHtcbiAgICAgICAgY29sb3I6ICM2ZWU3Yjc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbXBhcmUtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDhweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5jb21wYXJlLWl0ZW0ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuXG4gICAgICAuY29tcGFyZS1pdGVtLW5hbWUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6ICNmODcxNzE7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZTtcblxuICAgICAgICAmOmhvdmVyIHsgY29sb3I6ICNlZjQ0NDQ7IH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29tcGFyZS1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAuYm9vay1idG4ge1xuICAgICAgcGFkZGluZzogOXB4IDE4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwYjk4MSAwJSwgIzA1OTY2OSAxMDAlKTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgxNiwgMTg1LCAxMjksIDAuMzUpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDE2LCAxODUsIDEyOSwgMC41KTtcbiAgICAgIH1cblxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIG9wYWNpdHk6IDAuNDU7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNlY29uZGFyeS1idG4ge1xuICAgICAgcGFkZGluZzogOXB4IDE0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gICAgICBjb2xvcjogI2NiZDVlMTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLndhLWJ0biB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDZweDtcbiAgICAgIHBhZGRpbmc6IDlweCAxNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6ICMyNUQzNjY7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzIwYmQ1YTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNvbXBhcmVCb3VuY2VJbiB7XG4gIDAlICAgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA2MHB4KSBzY2FsZSgwLjkpOyB9XG4gIDYwJSAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtOHB4KSBzY2FsZSgxLjAyKTsgfVxuICAxMDAlIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCkgc2NhbGUoMSk7IH1cbn1cblxuQGtleWZyYW1lcyBib3JkZXJHbG93UHVsc2Uge1xuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDAuNTsgfVxuICA1MCUgICAgICB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBhdHRlbnRpb25SaW5nIHtcbiAgMCUgICB7IGJveC1zaGFkb3c6IDAgMTZweCA0OHB4IHJnYmEoMCwgMCwgMCwgMC40NSksIDAgMCAwIDAgcmdiYSgxNiwgMTg1LCAxMjksIDAuNik7IH1cbiAgNzAlICB7IGJveC1zaGFkb3c6IDAgMTZweCA0OHB4IHJnYmEoMCwgMCwgMCwgMC40NSksIDAgMCAwIDE2cHggcmdiYSgxNiwgMTg1LCAxMjksIDApOyB9XG4gIDEwMCUgeyBib3gtc2hhZG93OiAwIDE2cHggNDhweCByZ2JhKDAsIDAsIDAsIDAuNDUpLCAwIDAgMCAwIHJnYmEoMTYsIDE4NSwgMTI5LCAwKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlRG90IHtcbiAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjcpOyB9XG4gIDcwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7IGJveC1zaGFkb3c6IDAgMCAwIDZweCByZ2JhKDE2LCAxODUsIDEyOSwgMCk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgxNiwgMTg1LCAxMjksIDApOyB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDT01QQVJFIE1PREFMIE9WRVJMQVkgKEZMT0FUSU5HIEFUIEJPVFRPTSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4uY29tcGFyZS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMCwgMjYsIDE4LCAwLjY1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gIHotaW5kZXg6IDExMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweCAyNHB4IDIwcHg7XG4gIGFuaW1hdGlvbjogY29tcGFyZUZhZGVJbiAwLjI1cyBlYXNlO1xuXG4gIC5jb21wYXJlLXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMS41cHggc29saWQgcmdiYSgxNiwgMTg1LCAxMjksIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICB3aWR0aDogbWluKDk2dncsIDExNDBweCk7XG4gICAgbWF4LWhlaWdodDogODV2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDI0cHggNjRweCByZ2JhKDAsIDAsIDAsIDAuNCksIDAgMCAzMnB4IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjE1KTtcbiAgICBhbmltYXRpb246IGNvbXBhcmVGbG9hdFVwIDAuMzVzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpIGZvcndhcmRzO1xuXG4gICAgLmNvbXBhcmUtZmxvYXRpbmctaGFuZGxlLWJhciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcblxuICAgICAgLmNvbXBhcmUtZmxvYXRpbmctaGFuZGxlIHtcbiAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2NiZDVlMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29tcGFyZS1wYW5lbC1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMTRweCAyNHB4IDE2cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBoMyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogIzBmMjQxYTtcbiAgICAgIH1cblxuICAgICAgLnNlY29uZGFyeS1idG4ge1xuICAgICAgICBwYWRkaW5nOiA2cHggMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgICBjb2xvcjogIzMzNDE1NTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xuICAgICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbXBhcmUtbG9hZGluZyB7XG4gICAgICBwYWRkaW5nOiA0OHB4IDI0cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICB9XG5cbiAgICAuY29tcGFyZS1jb2x1bW5zIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI2MHB4LCAxZnIpKTtcbiAgICAgIGdhcDogMTZweDtcbiAgICAgIHBhZGRpbmc6IDIwcHggMjRweCAyNHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcblxuICAgICAgLmNvbXBhcmUtY29sdW1uIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiAxOHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tcGFyZS10aXRsZS1yb3cge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgICBnYXA6IDEwcHg7XG5cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgY29sb3I6ICMwZjI0MWE7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZW1vdmUtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogI2RjMjYyNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29tcGFyZS1sb2NhdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21wYXJlLXBvaW50cyB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDE0cHg7XG5cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZTJlOGYwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMGYyNDFhO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21wYXJlLXJpY2gtc2VjdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XG5cbiAgICAgICAgICBoNSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgICAgICBjb2xvcjogIzE1ODAzZDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAycHggMDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29tcGFyZS1jb2x1bW4tYWN0aW9ucyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG5cbiAgICAgICAgICAuYm9vay1idG4ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwMmUxZiwgIzE1ODAzZCk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODJyZW07XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTYsIDQ2LCAzMSwgMC4yKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTU4MDNkLCAjMTY2NTM0KTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMTYsIDQ2LCAzMSwgMC4zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud2EtYnRuIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogOXB4IDE0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI1RDM2NjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgzNywgMjExLCAxMDIsIDAuMik7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyYzM1ZTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMzcsIDIxMSwgMTAyLCAwLjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNvbXBhcmVGbG9hdFVwIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYwcHgpIHNjYWxlKDAuOTcpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY29tcGFyZUZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIExPQURJTkcgJiBFTVBUWSBTVEFURVNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4ubG9hZGVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTIwcHggMjRweDtcbiAgZ2FwOiAxNnB4O1xuICBjb2xvcjogIzY0NzQ4YjtcblxuICAuY3VzdG9tLWxvYWRlciB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZTJlOGYwO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICMxMGI5ODE7XG4gICAgYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4uZW1wdHktc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDgwcHggMjRweDtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgLmVtcHR5LXN0YXRlLWljb24ge1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2VjZmRmNTtcbiAgICBjb2xvcjogIzA1OTY2OTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhdW5jZXMnLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMGYyNDFhO1xuICAgIG1hcmdpbjogMCAwIDhweDtcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUkVTUE9OU0lWRSBCUkVBS1BPSU5UUyAoREVTS1RPUCAxMjAwcHgrLCBUQUJMRVQgNzY4LTExOTlweCwgTU9CSUxFIDw3NjhweClcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5kYXNoYm9hcmQtZ3JpZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDA7XG4gIH1cblxuICAucmVmZXJyYWwtc2lkZWJhciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1vYmlsZS1yZWZlcnJhbC1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kaXNjb3ZlcnktZG9jay1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAtMzJweDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cblxuICAuZGlzY292ZXJ5LWRvY2sge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgZ2FwOiAxNHB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAuZG9jay1zZWFyY2gtd3JhcCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcblxuICAgICAgLmRvY2stc2VhcmNoLWlucHV0IHtcbiAgICAgICAgbWluLWhlaWdodDogNDhweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kb2NrLWZpbHRlci1waWxscyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7IGRpc3BsYXk6IG5vbmU7IH1cblxuICAgICAgLmZpbHRlci1waWxsIHtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRvY2stY29udHJvbHMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIC5kb2NrLXNvcnQtd3JhcCB7XG4gICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgLmRvY2stc2VsZWN0IHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kb2NrLXJlc2V0LWJ0biB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIG1pbi13aWR0aDogNDRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29sbGVjdGlvbi1jaGlwcy1iYXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAuY29sbGVjdGlvbi1oZWFkZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIC5jb2xsZWN0aW9uLWhpbnQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgICAgICBjb2xvcjogIzEwYjk4MTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hpcHMtc2Nyb2xsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMnB4IDAgNnB4O1xuXG4gICAgICAuY29sbGVjdGlvbi1jaGlwIHtcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuaGVyby1jb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBwYWRkaW5nOiAwIDE2cHggNDBweDtcblxuICAgIC5oZXJvLXRleHQge1xuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDZ2dywgMi43NXJlbSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICBtYXJnaW46IDE2cHggMCAyOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZXJvLWJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICB9XG5cbiAgICAuaGVyby1zdGF0cyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNDUsIDI0MCwgMjMyLCAwLjE1KTtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgZ2FwOiAxNnB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAuc3RhdC1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcblxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGlzY292ZXJ5LWRvY2stc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICB9XG5cbiAgLmRpc2NvdmVyeS1kb2NrIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIHBhZGRpbmc6IDE0cHggMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGdhcDogMTJweDtcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG5cbiAgICAuZG9jay1zZWFyY2gtd3JhcCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcblxuICAgICAgLnNlYXJjaC1pY29uIHtcbiAgICAgICAgbGVmdDogMTRweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICB9XG5cbiAgICAgIC5kb2NrLXNlYXJjaC1pbnB1dCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcGFkZGluZzogMTJweCA0MnB4IDEycHggNDJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIH1cblxuICAgICAgLmNsZWFyLXNlYXJjaC1idG4ge1xuICAgICAgICB3aWR0aDogNDRweDtcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZG9jay1maWx0ZXItcGlsbHMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7IGRpc3BsYXk6IG5vbmU7IH1cblxuICAgICAgLnBpbGwtZ3JvdXAtbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAuZmlsdGVyLXBpbGwge1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDE0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kb2NrLWNvbnRyb2xzIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBnYXA6IDhweDtcblxuICAgICAgLmRvY2stc29ydC13cmFwIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA2cHg7XG4gICAgICAgIG1pbi13aWR0aDogMDtcblxuICAgICAgICAuc29ydC1sYWJlbCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kb2NrLXNlbGVjdCB7XG4gICAgICAgICAgbWluLWhlaWdodDogNDRweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRvY2stcmVzZXQtYnRuIHtcbiAgICAgICAgbWluLWhlaWdodDogNDRweDtcbiAgICAgICAgbWluLXdpZHRoOiA0NHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbGxlY3Rpb24tY2hpcHMtYmFyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGdhcDogOHB4O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZzogMCAycHg7XG5cbiAgICAuY29sbGVjdGlvbi1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLmNvbGxlY3Rpb24tbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICB9XG5cbiAgICAgIC5jb2xsZWN0aW9uLWhpbnQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIGNvbG9yOiAjMDU5NjY5O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jaGlwcy1zY3JvbGwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAycHggMCA2cHg7XG4gICAgICBnYXA6IDZweDtcbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgZGlzcGxheTogbm9uZTsgfVxuXG4gICAgICAuY29sbGVjdGlvbi1jaGlwIHtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQycHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNHB4O1xuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5leHBlZGl0aW9ucy1tYWluIHtcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggNDBweDtcbiAgfVxuXG4gIC5zZWN0aW9uLXRpdGxlLXdyYXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAudHJlay1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDE4cHg7XG4gIH1cblxuICAubG9hZC1tb3JlLWFjdGlvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAubG9hZC1tb3JlLWJ0bixcbiAgICAuYnRuLWFsbC1jYWxlbmRhciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWluLWhlaWdodDogNDZweDtcbiAgICB9XG4gIH1cblxuICAuZmVhdHVyZXMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcbiAgICBnYXA6IDE0cHg7XG5cbiAgICAuZmVhdHVyZS1jYXJkIHtcbiAgICAgIHBhZGRpbmc6IDIwcHggMTZweDtcbiAgICB9XG4gIH1cblxuICAuY29tcGFyZS1iYXIge1xuICAgIGJvdHRvbTogMTRweDtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDI0cHgpO1xuICAgIG1heC13aWR0aDogNTQwcHg7XG4gICAgcGFkZGluZzogMTJweCAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG5cbiAgICAuY29tcGFyZS1kb2NrLWlubmVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIGdhcDogMTBweDtcbiAgICB9XG5cbiAgICAuY29tcGFyZS1hY3Rpb25zIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogNnB4O1xuXG4gICAgICAuYm9vay1idG4ge1xuICAgICAgICBmbGV4OiAxLjQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICAgICAgfVxuXG4gICAgICAuc2Vjb25kYXJ5LWJ0bixcbiAgICAgIC53YS1idG4ge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWluLWhlaWdodDogNDRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29tcGFyZS1vdmVybGF5IHtcbiAgICBwYWRkaW5nOiAwIDhweCAxMnB4IDhweDtcblxuICAgIC5jb21wYXJlLXBhbmVsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogODh2aDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgICAgIC5jb21wYXJlLWNvbHVtbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICBwYWRkaW5nOiAxNHB4O1xuICAgICAgICBnYXA6IDEycHg7XG5cbiAgICAgICAgLmNvbXBhcmUtY29sdW1uIHtcbiAgICAgICAgICBmbGV4OiAwIDAgY2FsYyg4NSUgLSA2cHgpO1xuICAgICAgICAgIG1pbi13aWR0aDogMjYwcHg7XG4gICAgICAgICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jb21wYXJlLWNvbHVtbi1hY3Rpb25zIHtcbiAgICAgICAgLmJvb2stYnRuLFxuICAgICAgICAud2EtYnRuIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuaGVyby1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwIDEycHggMzJweDtcblxuICAgIC5oZXJvLXRleHQge1xuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDIuMTVyZW07XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBtYXJnaW46IDEycHggMCAyMnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZXJvLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWluLWhlaWdodDogNDZweDtcbiAgICB9XG5cbiAgICAuaGVyby1zdGF0cyB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG5cbiAgICAgIC5zdGF0LWl0ZW0ge1xuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgc21hbGwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGlzY292ZXJ5LWRvY2stc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICB9XG5cbiAgLmRpc2NvdmVyeS1kb2NrIHtcbiAgICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBnYXA6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgIC5kb2NrLXNlYXJjaC13cmFwIHtcbiAgICAgIC5kb2NrLXNlYXJjaC1pbnB1dCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAzOHB4IDEwcHggMzhweDtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1pY29uIHtcbiAgICAgICAgbGVmdDogMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kb2NrLWZpbHRlci1waWxscyB7XG4gICAgICBnYXA6IDVweDtcblxuICAgICAgLmZpbHRlci1waWxsIHtcbiAgICAgICAgcGFkZGluZzogN3B4IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICAgICAgbWluLWhlaWdodDogMzhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29sbGVjdGlvbi1jaGlwcy1iYXIge1xuICAgIHBhZGRpbmc6IDAgMnB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAuY2hpcHMtc2Nyb2xsIHtcbiAgICAgICAgZ2FwOiA2cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDM5MHB4O1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuXG4gICAgICAuY29sbGVjdGlvbi1jaGlwIHtcbiAgICAgICAgcGFkZGluZzogN3B4IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FyZC1mb290ZXItcHJpY2luZyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xuICAgIGdhcDogMTJweDtcblxuICAgIC5wcmljZS1ibG9jayB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIH1cblxuICAgIC5hY3Rpb24tYnV0dG9ucy1ncm91cCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGdhcDogNnB4O1xuXG4gICAgICAuYnRuLWNvbXBhcmUge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWluLWhlaWdodDogNDRweDtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5idG4td2EtaW5xdWlyZSB7XG4gICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIG1pbi13aWR0aDogNDRweDtcbiAgICAgICAgbWluLWhlaWdodDogNDRweDtcbiAgICAgIH1cblxuICAgICAgLmJ0bi1ib29rLW5vdyB7XG4gICAgICAgIGZsZXg6IDEuMjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbXBhcmUtb3ZlcmxheSB7XG4gICAgcGFkZGluZzogMCA0cHggOHB4IDRweDtcblxuICAgIC5jb21wYXJlLXBhbmVsIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgICBtYXgtaGVpZ2h0OiA5MHZoO1xuXG4gICAgICAuY29tcGFyZS1wYW5lbC1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbXBhcmUtY29sdW1ucyB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGdhcDogMTBweDtcblxuICAgICAgICAuY29tcGFyZS1jb2x1bW4ge1xuICAgICAgICAgIGZsZXg6IDAgMCBjYWxjKDkwJSAtIDRweCk7XG4gICAgICAgICAgbWluLXdpZHRoOiAyNDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxNHB4IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ },

/***/ 2625
/*!****************************************!*\
  !*** ./src/app/dashboard/dashboard.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dashboard: () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _core_encryption_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/encryption.service */ 3242);
var _staticBlock;





class Dashboard {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
  }
  loadDashboardData() {
    return this.http.get(`${this.API}/dashData`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  getTrekByIdOrUuid(idOrUuid) {
    return this.http.get(`${this.API}/getTrekByUuid/${idOrUuid}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Dashboard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_encryption_service__WEBPACK_IMPORTED_MODULE_4__.EncryptionService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: Dashboard,
    factory: Dashboard.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_dashboard_dashboard-module_ts.js.map