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





















function DashboardComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function DashboardComponent_div_0_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 38)(1, "strong");
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
function DashboardComponent_div_0_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 38)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 39);
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
function DashboardComponent_div_0_div_26_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 38)(1, "strong");
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
function DashboardComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DashboardComponent_div_0_div_26_div_1_Template, 5, 1, "div", 37)(2, DashboardComponent_div_0_div_26_div_2_Template, 7, 4, "div", 37)(3, DashboardComponent_div_0_div_26_div_3_Template, 5, 1, "div", 37);
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
function DashboardComponent_div_0_section_27_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_section_27_button_1_Template_button_click_0_listener() {
      const filter_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.setFilter(filter_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filter_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r1.selectedFilter === filter_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", filter_r4.label, " ");
  }
}
function DashboardComponent_div_0_section_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DashboardComponent_div_0_section_27_button_1_Template, 2, 3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.filters);
  }
}
function DashboardComponent_div_0_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", option_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", option_r5.label, " ");
  }
}
function DashboardComponent_div_0_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_button_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.clearDiscoveryFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Reset Filters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_0_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_button_39_Template_button_click_0_listener() {
      const collection_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.setCollection(collection_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const collection_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r1.selectedCollection === collection_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", collection_r8.label, " ");
  }
}
function DashboardComponent_div_0_ng_container_40_ng_template_8_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 56)(1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "ion-spinner", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Loading referral perks\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
}
function DashboardComponent_div_0_ng_container_40_ng_template_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 59)(1, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Refer & Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Share the wild. Save together.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Sign in to unlock your personal referral code and gift instant discounts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_container_40_ng_template_8_div_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.openReferralLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Sign in to earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_0_ng_container_40_ng_template_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 63)(1, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Refer & Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Referral details unavailable.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_container_40_ng_template_8_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.refreshReferralSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Try again");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.referralError);
  }
}
function DashboardComponent_div_0_ng_container_40_ng_template_8_div_3_p_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.referralCopyFeedback);
  }
}
function DashboardComponent_div_0_ng_container_40_ng_template_8_div_3_p_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Referral discounts are temporarily paused, but you can still share your code. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_0_ng_container_40_ng_template_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 65)(1, "div", 66)(2, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Refer & Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 68)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_container_40_ng_template_8_div_3_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.copyReferralCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 70)(18, "div")(19, "p");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 71)(29, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_container_40_ng_template_8_div_3_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.shareReferral());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "Share Invite");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_container_40_ng_template_8_div_3_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.refreshReferralSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](32, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, DashboardComponent_div_0_ng_container_40_ng_template_8_div_3_p_33_Template, 2, 1, "p", 75)(34, DashboardComponent_div_0_ng_container_40_ng_template_8_div_3_p_34_Template, 2, 0, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("paused", !ctx_r1.referralSummary.programActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("paused", !ctx_r1.referralSummary.programActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.referralSummary.programActive ? "Active" : "Paused", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" Give \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](8, 14, ctx_r1.referralSummary.discountTiers.base || 0, "1.0-0"), ", get \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](9, 17, ctx_r1.referralSummary.discountTiers.bonus || ctx_r1.referralSummary.discountTiers.base || 0, "1.0-0"), " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.referralSummary.programActive);
  }
}
function DashboardComponent_div_0_ng_container_40_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, DashboardComponent_div_0_ng_container_40_ng_template_8_div_0_Template, 5, 0, "div", 52)(1, DashboardComponent_div_0_ng_container_40_ng_template_8_div_1_Template, 9, 0, "div", 53)(2, DashboardComponent_div_0_ng_container_40_ng_template_8_div_2_Template, 9, 1, "div", 54)(3, DashboardComponent_div_0_ng_container_40_ng_template_8_div_3_Template, 35, 20, "div", 55);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.referralLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.referralLoading && ctx_r1.referralRequiresAuth);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.referralLoading && !ctx_r1.referralRequiresAuth && !ctx_r1.referralSummary && ctx_r1.referralError);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.referralLoading && !ctx_r1.referralRequiresAuth && ctx_r1.referralSummary);
  }
}
function DashboardComponent_div_0_ng_container_40_div_13_span_21_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const trek_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" (", trek_r13.reviews, ")");
  }
}
function DashboardComponent_div_0_ng_container_40_div_13_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, DashboardComponent_div_0_ng_container_40_div_13_span_21_ng_container_4_Template, 2, 1, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trek_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](3, 2, trek_r13.rating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", trek_r13.reviews > 0);
  }
}
function DashboardComponent_div_0_ng_container_40_div_13_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](h_r14);
  }
}
function DashboardComponent_div_0_ng_container_40_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 79)(1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 84)(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 87)(14, "div", 88)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](21, DashboardComponent_div_0_ng_container_40_div_13_span_21_Template, 5, 5, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, DashboardComponent_div_0_ng_container_40_div_13_span_26_Template, 2, 1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "div", 95)(28, "div", 96)(29, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "/ person");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "div", 99)(34, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_container_40_div_13_Template_button_click_34_listener() {
      const trek_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.viewDetails(trek_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_container_40_div_13_Template_button_click_38_listener() {
      const trek_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.toggleCompare(trek_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_container_40_div_13_Template_button_click_40_listener() {
      const trek_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.openTrekEnquiry(trek_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, " WhatsApp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const trek_r13 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", trek_r13.image, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("alt", trek_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](trek_r13.difficulty.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", trek_r13.difficulty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx_r1.getAvailabilityClass(trek_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.getAvailabilityLabel(trek_r13), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r13.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r13.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r13.groupSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", trek_r13.rating > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", trek_r13.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", trek_r13.highlights);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u20B9", trek_r13.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r1.isCompared(trek_r13.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r1.canAddToCompare(trek_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.isCompared(trek_r13.id) ? "Compared" : !ctx_r1.canAddToCompare(trek_r13) ? "Max 3" : "Compare", " ");
  }
}
function DashboardComponent_div_0_ng_container_40_div_14_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_container_40_div_14_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.showMoreTreks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Show More Treks");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\u2193");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_0_ng_container_40_div_14_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_container_40_div_14_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.showLessTreks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Show Less");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\u2191");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_0_ng_container_40_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 106)(1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, DashboardComponent_div_0_ng_container_40_div_14_button_3_Template, 5, 0, "button", 108)(4, DashboardComponent_div_0_ng_container_40_div_14_button_4_Template, 5, 0, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" Showing ", ctx_r1.filteredTreks.length, " of ", ctx_r1.totalFilteredCount, " treks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.hasMoreTreks);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.hasMoreTreks && ctx_r1.totalFilteredCount > ctx_r1.initialVisibleCount);
  }
}
function DashboardComponent_div_0_ng_container_40_ng_container_15_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function DashboardComponent_div_0_ng_container_40_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "aside", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, DashboardComponent_div_0_ng_container_40_ng_container_15_ng_container_2_Template, 1, 0, "ng-container", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const referralCardStack_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", referralCardStack_r17);
  }
}
function DashboardComponent_div_0_ng_container_40_ng_container_16_div_12_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function DashboardComponent_div_0_ng_container_40_ng_container_16_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_container_40_ng_container_16_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.closeReferralDrawer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "section", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_container_40_ng_container_16_div_12_Template_section_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "header", 123)(3, "div")(4, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Refer & Earn");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Unlock instant savings");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_container_40_ng_container_16_div_12_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.closeReferralDrawer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, DashboardComponent_div_0_ng_container_40_ng_container_16_div_12_ng_container_11_Template, 1, 0, "ng-container", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    const referralCardStack_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", referralCardStack_r17);
  }
}
function DashboardComponent_div_0_ng_container_40_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_container_40_ng_container_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.toggleReferralDrawer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 117)(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Invite pals. Unlock slots.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, DashboardComponent_div_0_ng_container_40_ng_container_16_div_12_Template, 12, 1, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("active", ctx_r1.isReferralDrawerOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("aria-expanded", ctx_r1.isReferralDrawerOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u20B9", (ctx_r1.referralSummary == null ? null : ctx_r1.referralSummary.discountTiers == null ? null : ctx_r1.referralSummary.discountTiers.base) || 200, " OFF");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.isReferralDrawerOpen);
  }
}
function DashboardComponent_div_0_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 44)(2, "h2", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Upcoming ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Treks");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, DashboardComponent_div_0_ng_container_40_ng_template_8_Template, 4, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 47)(11, "div", 48)(12, "section", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, DashboardComponent_div_0_ng_container_40_div_13_Template, 42, 19, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, DashboardComponent_div_0_ng_container_40_div_14_Template, 5, 4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, DashboardComponent_div_0_ng_container_40_ng_container_15_Template, 3, 1, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, DashboardComponent_div_0_ng_container_40_ng_container_16_Template, 13, 5, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx_r1.filteredTreks.length, " expeditions available");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.filteredTreks)("ngForTrackBy", ctx_r1.trackByTrek);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.totalFilteredCount > ctx_r1.initialVisibleCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.referralRequiresAuth);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.referralRequiresAuth);
  }
}
function DashboardComponent_div_0_aside_41_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.compareNotice);
  }
}
function DashboardComponent_div_0_aside_41_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 135)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_aside_41_div_7_Template_button_click_3_listener() {
      const trek_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.removeCompared(trek_r22.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const trek_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](trek_r22.name);
  }
}
function DashboardComponent_div_0_aside_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "aside", 127)(1, "div", 128)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " selected for compare ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, DashboardComponent_div_0_aside_41_div_5_Template, 2, 1, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, DashboardComponent_div_0_aside_41_div_7_Template, 5, 1, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 132)(9, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_aside_41_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.openComparePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Compare Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_aside_41_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.clearCompare());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_0_aside_41_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.openCompareInWhatsApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Compare with Expert");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", ctx_r1.compareTreks.length, "/", ctx_r1.maxCompareCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.compareNotice);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.compareTreks);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r1.compareTreks.length < 2);
  }
}
function DashboardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DashboardComponent_div_0_div_1_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "section", 7)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "div", 9)(5, "div", 10)(6, "div", 11)(7, "div", 12)(8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "div", 14)(10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 16)(12, "div", 17)(13, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Explore the");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Wild Ghats");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Weekend escapes through ancient forests,");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "misty ridgelines & hidden waterfalls.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, " View All Treks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, DashboardComponent_div_0_div_26_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, DashboardComponent_div_0_section_27_Template, 2, 1, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "section", 22)(29, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](30, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function DashboardComponent_div_0_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 26)(33, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "Sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function DashboardComponent_div_0_Template_select_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r1.sortBy, $event) || (ctx_r1.sortBy = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, DashboardComponent_div_0_option_36_Template, 2, 2, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, DashboardComponent_div_0_button_37_Template, 2, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](39, DashboardComponent_div_0_button_39_Template, 2, 3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, DashboardComponent_div_0_ng_container_40_Template, 17, 6, "ng-container", 33)(41, DashboardComponent_div_0_aside_41_Template, 15, 5, "aside", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.activeRoutes > 0 || ctx_r1.averageRating > 0 || ctx_r1.trekkersThisYear > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.filters.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.sortBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.sortOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.hasActiveDiscoveryFilters);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.collections);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.filteredTreks.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.compareTreks.length);
  }
}
function DashboardComponent_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Loading latest trek details for comparison... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_1_div_8_article_1_li_44_Template(rf, ctx) {
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
function DashboardComponent_div_1_div_8_article_1_li_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Not available");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_1_div_8_article_1_li_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r27);
  }
}
function DashboardComponent_div_1_div_8_article_1_li_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Not available");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_1_div_8_article_1_li_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r28);
  }
}
function DashboardComponent_div_1_div_8_article_1_li_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Not available");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_1_div_8_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "article", 145)(1, "div", 146)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_1_div_8_article_1_Template_button_click_4_listener() {
      const trek_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.removeCompared(trek_r25.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "p", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ul", 149)(10, "li")(11, "span");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "li")(36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "Availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "div", 150)(41, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "Highlights");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, DashboardComponent_div_1_div_8_article_1_li_44_Template, 2, 1, "li", 151)(45, DashboardComponent_div_1_div_8_article_1_li_45_Template, 2, 0, "li", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "div", 150)(47, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "Included");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](50, DashboardComponent_div_1_div_8_article_1_li_50_Template, 2, 1, "li", 151)(51, DashboardComponent_div_1_div_8_article_1_li_51_Template, 2, 0, "li", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "div", 153)(53, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54, "Excluded");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](56, DashboardComponent_div_1_div_8_article_1_li_56_Template, 2, 1, "li", 151)(57, DashboardComponent_div_1_div_8_article_1_li_57_Template, 2, 0, "li", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "div", 154)(59, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_1_div_8_article_1_Template_button_click_59_listener() {
      const trek_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.viewDetails(trek_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](60, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_1_div_8_article_1_Template_button_click_61_listener() {
      const trek_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.openTrekEnquiry(trek_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](62, "Ask on WhatsApp");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !trek_r25.highlights.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", trek_r25.inclusions);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !trek_r25.inclusions.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", trek_r25.exclusions);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !trek_r25.exclusions.length);
  }
}
function DashboardComponent_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DashboardComponent_div_1_div_8_article_1_Template, 63, 14, "article", 144);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.closeComparePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "section", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_1_Template_section_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "header", 139)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Trek Comparison");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DashboardComponent_div_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.closeComparePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, DashboardComponent_div_1_div_7_Template, 2, 0, "div", 140)(8, DashboardComponent_div_1_div_8_Template, 2, 1, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.isCompareLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r1.isCompareLoading);
  }
}
function DashboardComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 156)(1, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Loading Expeditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 160)(1, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "No Treks Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Try adjusting your filters.");
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
    this.mediaBaseUrl = (src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.mediaBaseUrl || '').replace(/\/?$/, '/');
    this.referralShareBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment?.referralShareBaseUrl ? String(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.referralShareBaseUrl).replace(/\/$/, '') : 'https://gowildkarunadu.com';
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
    this.filters = [];
    this.collections = [];
    this.collectionRuleById = {};
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
      console.error('Dashboard data load failed:', error);
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
    // Keep sort options local until backend exposes a stable dropdown key for this.
    this.sortOptions = fallback;
    if (!this.sortOptions.some(option => option.value === this.sortBy)) {
      this.sortBy = this.sortOptions[0]?.value || 'recommended';
    }
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
    const fallback = [];
    this.dropdownService.getOptions('trek-collections', fallback).subscribe(collectionOptions => {
      if (collectionOptions.length) {
        this.applyCollectionOptions(collectionOptions);
        return;
      }
      // Backend currently exposes trek-category, so use it when trek-collections is unavailable.
      this.dropdownService.getOptions('trek-category', fallback).subscribe(categoryOptions => {
        this.applyCollectionOptions(categoryOptions);
      });
    });
  }
  applyCollectionOptions(options) {
    const mapped = options.map(option => {
      const ruleKey = this.inferCollectionRule(option.value, option.label);
      return {
        id: option.value,
        label: option.label,
        ruleKey
      };
    });
    const hasAll = mapped.some(item => item.ruleKey === 'all');
    this.collections = hasAll ? mapped : [{
      id: 'all',
      label: 'All',
      ruleKey: 'all'
    }, ...mapped];
    this.collectionRuleById = this.collections.reduce((acc, collection) => {
      acc[collection.id] = collection.ruleKey;
      return acc;
    }, {});
    if (!this.collections.some(collection => collection.id === this.selectedCollection)) {
      this.selectedCollection = 'all';
    }
  }
  inferCollectionRule(id, label) {
    const token = `${id} ${label}`.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
    if (/\ball\b/.test(token)) return 'all';
    if (/\bbeginner\b|\bnewbie\b|\beasy\b/.test(token)) return 'beginner';
    if (/\bweekend\b|\bshort\b|\bquick\b|\bone day\b|\b1 day\b|\btwo day\b|\b2 day\b/.test(token)) return 'weekend';
    if (/\bbudget\b|\bvalue\b|\bafford\b|\bcheap\b|\blow cost\b/.test(token)) return 'budget';
    if (/\bscenic\b|\bviews?\b|\bnature\b|\bwaterfall\b|\bsunrise\b|\blake\b/.test(token)) return 'scenic';
    return 'custom';
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
    const ruleKey = this.collectionRuleById[collectionId] || this.inferCollectionRule(collectionId, collectionId);
    if (ruleKey === 'all') return true;
    if (ruleKey === 'beginner') return trek.difficulty?.toLowerCase() === 'easy';
    if (ruleKey === 'weekend') return trek.durationDays > 0 && trek.durationDays <= 2;
    if (ruleKey === 'budget') return trek.price <= 1999;
    if (ruleKey === 'scenic') {
      return trek.highlights.some(highlight => /waterfall|sunrise|sunset|forest|ridge|lake|view/i.test(highlight));
    }
    if (ruleKey === 'custom') {
      const selected = this.collections.find(collection => collection.id === collectionId);
      const selectedKey = this.toSlug(selected?.label || collectionId);
      const trekCategoryKey = this.toSlug(trek.category || '');
      return !!selectedKey && trekCategoryKey === selectedKey;
    }
    return true;
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
  toggleCompare(trek) {
    const exists = this.compareTreks.some(item => item.id === trek.id);
    if (exists) {
      this.compareTreks = this.compareTreks.filter(item => item.id !== trek.id);
      if (this.compareTreks.length < 2) {
        this.showComparePanel = false;
      }
      return;
    }
    if (this.compareTreks.length >= this.maxCompareCount) {
      this.compareNotice = `You can compare up to ${this.maxCompareCount} treks at a time.`;
      return;
    }
    this.compareNotice = '';
    this.compareTreks = [...this.compareTreks, trek];
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
    this.router.navigate(['/tour-details', publicRef]);
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
    const base = this.referralShareBaseUrl || 'https://gowildkarunadu.com';
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
    consts: [["referralCardStack", ""], ["class", "page-wrapper", 4, "ngIf"], ["class", "compare-overlay", 3, "click", 4, "ngIf"], ["class", "loader-wrapper", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "page-wrapper"], ["class", "dashboard-error-banner", 4, "ngIf"], [1, "hero-section"], [1, "hero-slides"], [1, "hero-slide", "slide-1"], [1, "hero-slide", "slide-2"], [1, "hero-slide", "slide-3"], [1, "hero-slide", "slide-4"], [1, "hero-slide", "slide-5"], [1, "hero-overlay"], [1, "hero-grain"], [1, "hero-content"], [1, "hero-text"], ["routerLink", "upcomingtours", 1, "hero-button"], [1, "btn-icon"], ["class", "hero-stats", 4, "ngIf"], ["class", "filter-section", 4, "ngIf"], [1, "discovery-tools"], [1, "search-wrap"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Search by trek name, location, or highlight", "aria-label", "Search treks", 3, "ngModelChange", "ngModel"], [1, "sort-wrap"], ["for", "sortBy"], ["id", "sortBy", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "clear-filters-btn", 3, "click", 4, "ngIf"], [1, "collection-chips", "mt-1"], [3, "active", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "compare-bar", 4, "ngIf"], [1, "dashboard-error-banner"], [1, "hero-stats"], ["class", "stat-item", 4, "ngIf"], [1, "stat-item"], [1, "bi", "bi-star-fill", "text-warning", 2, "font-size", "0.85rem"], [1, "filter-section"], [3, "click"], [3, "value"], [1, "clear-filters-btn", 3, "click"], [1, "content-header"], [1, "content-title"], [1, "content-meta"], [1, "dashboard-grid"], [1, "dashboard-main"], [1, "trek-grid"], ["class", "trek-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "load-more-wrapper", 4, "ngIf"], ["class", "referral-card", 4, "ngIf"], ["class", "referral-card referral-auth", 4, "ngIf"], ["class", "referral-card referral-error-card", 4, "ngIf"], ["class", "referral-card referral-compact", 3, "paused", 4, "ngIf"], [1, "referral-card"], [1, "referral-loading"], ["name", "crescent"], [1, "referral-card", "referral-auth"], [1, "eyebrow"], [1, "referral-footnote"], [1, "primary", 3, "click"], [1, "referral-card", "referral-error-card"], [1, "ghost", 3, "click"], [1, "referral-card", "referral-compact"], [1, "referral-card-header"], [1, "program-pill"], [1, "referral-code-pill"], ["type", "button", 3, "click"], [1, "referral-mini-stats"], [1, "referral-actions"], [1, "primary", 3, "click", "disabled"], ["aria-label", "Refresh referral summary", 1, "ghost", 3, "click"], [1, "bi", "bi-arrow-repeat"], ["class", "referral-feedback", 4, "ngIf"], ["class", "referral-note", 4, "ngIf"], [1, "referral-feedback"], [1, "referral-note"], [1, "trek-card"], [1, "trek-image-container"], ["loading", "lazy", 3, "src", "alt"], [1, "difficulty-badge"], [1, "availability-badge", 3, "ngClass"], [1, "trek-header"], [1, "location"], [1, "bi", "bi-geo-alt-fill", "text-success", "me-1"], [1, "trek-content"], [1, "trek-details"], [1, "bi", "bi-clock", "me-1"], [1, "bi", "bi-people-fill", "me-1"], [1, "trek-date"], [1, "bi", "bi-calendar3", "me-1"], [1, "highlights"], ["class", "chip", 4, "ngFor", "ngForOf"], [1, "trek-footer"], [1, "price"], [1, "price-amount"], [1, "price-label"], [1, "card-actions"], [1, "book-btn", 3, "click"], [1, "btn-arrow"], [1, "secondary-btn", 3, "click", "disabled"], [1, "secondary-btn", 3, "click"], [1, "bi", "bi-star-fill", "text-warning", "me-1"], [1, "chip"], [1, "load-more-wrapper"], [1, "load-more-meta"], ["class", "load-more-btn", 3, "click", 4, "ngIf"], [1, "load-more-btn", 3, "click"], [1, "load-more-label"], [1, "load-more-icon"], [1, "referral-sidebar"], [4, "ngTemplateOutlet"], ["type", "button", "aria-label", "Open referral perks", 1, "referral-fab", 3, "click"], [1, "referral-fab-icon"], [1, "bi", "bi-gift"], [1, "referral-fab-copy"], [1, "referral-fab-cta"], [1, "bi", "bi-arrow-up-right"], ["class", "referral-drawer", 3, "click", 4, "ngIf"], [1, "referral-drawer", 3, "click"], [1, "referral-drawer-panel", 3, "click"], [1, "referral-drawer-header"], ["type", "button", "aria-label", "Close referral details", 1, "drawer-close-btn", 3, "click"], [1, "bi", "bi-x-lg"], [1, "referral-drawer-content"], [1, "compare-bar"], [1, "compare-meta"], ["class", "compare-note", 4, "ngIf"], [1, "compare-list"], ["class", "compare-item", 4, "ngFor", "ngForOf"], [1, "compare-actions"], [1, "book-btn", 3, "click", "disabled"], [1, "compare-note"], [1, "compare-item"], ["aria-label", "Remove from compare", 3, "click"], [1, "compare-overlay", 3, "click"], [1, "compare-panel", 3, "click"], [1, "compare-panel-header"], ["class", "compare-loading", 4, "ngIf"], ["class", "compare-columns", 4, "ngIf"], [1, "compare-loading"], [1, "compare-columns"], ["class", "compare-column", 4, "ngFor", "ngForOf"], [1, "compare-column"], [1, "compare-title-row"], [1, "remove-btn", 3, "click"], [1, "compare-location"], [1, "compare-points"], [1, "compare-rich-section"], [4, "ngFor", "ngForOf"], ["class", "empty-line", 4, "ngIf"], [1, "compare-rich-section", "danger"], [1, "compare-column-actions"], [1, "empty-line"], [1, "loader-wrapper"], [1, "loader-icon"], [1, "bi", "bi-compass"], [1, "custom-loader"], [1, "empty-state"], [1, "empty-state-icon"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 42, 10, "div", 1)(1, DashboardComponent_div_1_Template, 9, 2, "div", 2)(2, DashboardComponent_div_2_Template, 6, 0, "div", 3)(3, DashboardComponent_div_3_Template, 7, 0, "div", 4);
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
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.RouterLinkDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
    styles: ["@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0[_ngcontent-%COMP%], 600[_ngcontent-%COMP%];0[_ngcontent-%COMP%], 700[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 400[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 600&family=Jost[_ngcontent-%COMP%]:wght@300;400[_ngcontent-%COMP%];500[_ngcontent-%COMP%];600&display=swap)[_ngcontent-%COMP%];[_ngcontent-%COMP%]:root {\n  --radius-card: 4px;\n  --40px: 40px;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #faf7f2;\n  color: #1a1f1b;\n  font-family: \"Jost\", system-ui, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pageReveal 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n\n.dashboard-error-banner[_ngcontent-%COMP%] {\n  margin: 1rem 1rem 0;\n  padding: 0.85rem 1rem;\n  border-radius: 12px;\n  background: rgba(255, 77, 79, 0.12);\n  color: #8a1f1f;\n  border: 1px solid rgba(255, 77, 79, 0.22);\n  font-size: 0.95rem;\n  line-height: 1.4;\n}\n\n@keyframes _ngcontent-%COMP%_pageReveal {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  height: 75vh;\n  min-height: 300px;\n  overflow: hidden;\n}\n\n.hero-slides[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n}\n\n.hero-slide[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transform: scale(1.08);\n  animation: _ngcontent-%COMP%_slideShow 30s ease-in-out infinite;\n}\n.hero-slide.slide-1[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/hero-slide-1.jpg\"), url(\"/assets/images/hero-slide-1.svg\");\n  animation-delay: 0s;\n}\n.hero-slide.slide-2[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/hero-slide-2.jpg\"), url(\"/assets/images/hero-slide-2.svg\");\n  animation-delay: 6s;\n}\n.hero-slide.slide-3[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/hero-slide-3.jpg\"), url(\"/assets/images/hero-slide-3.svg\");\n  animation-delay: 12s;\n}\n.hero-slide.slide-4[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/hero-slide-4.jpg\"), url(\"/assets/images/hero-slide-4.svg\");\n  animation-delay: 18s;\n}\n.hero-slide.slide-5[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/hero-slide-5.jpg\"), url(\"/assets/images/hero-slide-5.svg\");\n  animation-delay: 24s;\n}\n\n@media (min-resolution: 144dpi) {\n  .hero-slide.slide-1[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/images/hero-slide-1.jpg\"), url(\"/assets/images/hero-slide-1.svg\");\n  }\n  .hero-slide.slide-2[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/images/hero-slide-2.jpg\"), url(\"/assets/images/hero-slide-2.svg\");\n  }\n  .hero-slide.slide-3[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/images/hero-slide-3.jpg\"), url(\"/assets/images/hero-slide-3.svg\");\n  }\n  .hero-slide.slide-4[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/images/hero-slide-4.jpg\"), url(\"/assets/images/hero-slide-4.svg\");\n  }\n  .hero-slide.slide-5[_ngcontent-%COMP%] {\n    background-image: url(\"/assets/images/hero-slide-5.jpg\"), url(\"/assets/images/hero-slide-5.svg\");\n  }\n}\n@keyframes _ngcontent-%COMP%_slideShow {\n  0% {\n    opacity: 0;\n    transform: scale(1.08);\n  }\n  4.6666666667% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  15.3333333333% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  20% {\n    opacity: 0;\n    transform: scale(1.04);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.08);\n  }\n}\n.hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  background: linear-gradient(to top, rgba(14, 22, 16, 0.92) 0%, rgba(14, 22, 16, 0.3) 55%, transparent 100%);\n  pointer-events: none;\n}\n\n.hero-grain[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 2;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23g)' opacity='.045'/%3E%3C/svg%3E\");\n  pointer-events: none;\n}\n\n.hero-indicators[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 28px;\n  right: 7vw;\n  z-index: 4;\n  display: flex;\n  gap: 6px;\n}\n.hero-indicators[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 28px;\n  height: 2px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 2px;\n  overflow: hidden;\n}\n.hero-indicators[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  height: 100%;\n  width: 0%;\n  background: #7fb896;\n  border-radius: 2px;\n  animation: _ngcontent-%COMP%_indicatorFill 6s linear infinite;\n}\n.hero-indicators[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1)::after {\n  animation-delay: 0s;\n}\n.hero-indicators[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2)::after {\n  animation-delay: 6s;\n}\n.hero-indicators[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3)::after {\n  animation-delay: 12s;\n}\n.hero-indicators[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4)::after {\n  animation-delay: 18s;\n}\n.hero-indicators[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5)::after {\n  animation-delay: 24s;\n}\n\n@keyframes _ngcontent-%COMP%_indicatorFill {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0 7vw 72px;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: flex-end;\n  gap: 24px;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%] {\n  max-width: 700px;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #ffffff;\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  margin-bottom: 18px;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-eyebrow[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 32px;\n  height: 1px;\n  background: #7fb896;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: clamp(3rem, 7vw, 6.5rem);\n  font-weight: 700;\n  line-height: 0.95;\n  color: #f5f0e8;\n  letter-spacing: -0.01em;\n  -webkit-text-stroke: 0.1px white;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #7fb896;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 20px 0 36px;\n  color: rgba(245, 240, 232, 0.65);\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: 0.03em;\n  line-height: 1.7;\n  max-width: 420px;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border-left: 1px solid rgba(245, 240, 232, 0.12);\n  padding-left: 32px;\n  margin-bottom: 4px;\n}\n.hero-content[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  padding: 18px 0;\n  border-bottom: 1px solid rgba(245, 240, 232, 0.08);\n}\n.hero-content[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.hero-content[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: 2.2rem;\n  font-weight: 600;\n  color: #f5f0e8;\n  line-height: 1;\n}\n.hero-content[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #8a9b8e;\n  font-size: 0.7rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  margin-top: 4px;\n  display: block;\n}\n\n.hero-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  background: #f5f0e8;\n  color: #1a1f1b;\n  font-family: \"Jost\", system-ui, sans-serif;\n  font-size: 0.82rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 14px 26px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.2s, transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s;\n}\n.hero-button[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  background: #3a6349;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  transition: transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.hero-button[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n  transform: translateY(-2px);\n}\n.hero-button[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n\n.filter-section[_ngcontent-%COMP%] {\n  background: #2e3b30;\n  padding: 0 7vw;\n  display: flex;\n  gap: 6px;\n  overflow-x: auto;\n  scrollbar-width: none;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.filter-section[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.filter-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 16px 20px;\n  background: transparent;\n  border: none;\n  border-bottom: 2px solid transparent;\n  color: rgb(255, 255, 255);\n  font-family: \"Jost\", system-ui, sans-serif;\n  font-size: 0.78rem;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: color 0.2s, border-color 0.2s;\n  white-space: nowrap;\n}\n.filter-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #f5f0e8;\n}\n.filter-section[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #7fb896;\n  border-bottom-color: #7fb896;\n}\n\n.discovery-tools[_ngcontent-%COMP%] {\n  padding: 20px 7vw 12px;\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  gap: 12px;\n  align-items: center;\n  background: #faf7f2;\n  border-bottom: 1px solid rgba(58, 99, 73, 0.12);\n}\n.discovery-tools[_ngcontent-%COMP%]   .search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fff;\n  border: 1px solid rgba(58, 99, 73, 0.2);\n  border-radius: 40px;\n  padding: 10px 16px;\n  color: #3a6349;\n}\n.discovery-tools[_ngcontent-%COMP%]   .search-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  width: 100%;\n  background: transparent;\n  font-family: \"Jost\", system-ui, sans-serif;\n  font-size: 0.9rem;\n  color: #1a1f1b;\n}\n.discovery-tools[_ngcontent-%COMP%]   .sort-wrap[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid rgba(58, 99, 73, 0.2);\n  border-radius: 40px;\n  background: #fff;\n  padding: 8px 14px;\n}\n.discovery-tools[_ngcontent-%COMP%]   .sort-wrap[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6a7b6e;\n  margin: 0;\n}\n.discovery-tools[_ngcontent-%COMP%]   .sort-wrap[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: \"Jost\", system-ui, sans-serif;\n  color: #1a1f1b;\n  cursor: pointer;\n}\n\n.clear-filters-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(58, 99, 73, 0.24);\n  border-radius: 40px;\n  background: #fff;\n  color: #3a6349;\n  font-family: \"Jost\", system-ui, sans-serif;\n  font-size: 0.76rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 12px 18px;\n  cursor: pointer;\n}\n\n.collection-chips[_ngcontent-%COMP%] {\n  padding: 0 7vw 4px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  border-bottom: 1px solid rgba(58, 99, 73, 0.12);\n}\n.collection-chips[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid rgba(58, 99, 73, 0.2);\n  background: #fff;\n  color: #3a6349;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  padding: 8px 14px;\n  border-radius: 40px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.collection-chips[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], .collection-chips[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #3a6349;\n  border-color: #3a6349;\n  color: #fff;\n}\n\n.content-header[_ngcontent-%COMP%] {\n  padding: 56px 7vw 32px;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n.content-header[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: 2.6rem;\n  font-weight: 600;\n  color: #1a1f1b;\n  letter-spacing: -0.01em;\n}\n.content-header[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #3a6349;\n}\n.content-header[_ngcontent-%COMP%]   .content-meta[_ngcontent-%COMP%] {\n  color: #8a9b8e;\n  font-size: 0.82rem;\n  letter-spacing: 0.06em;\n}\n\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 320px;\n  gap: 32px;\n  padding: 0 7vw 20px;\n  align-items: flex-start;\n}\n\n.dashboard-main[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.referral-sidebar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 120px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.trek-grid[_ngcontent-%COMP%] {\n  padding: 0 0 40px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 28px;\n}\n\n.referral-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 14px;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n  padding: 18px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.referral-card.referral-auth[_ngcontent-%COMP%], .referral-card.referral-error[_ngcontent-%COMP%] {\n  gap: 12px;\n}\n.referral-card.referral-compact.paused[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fff8f0, #ffeedd);\n  border-color: rgba(249, 115, 22, 0.25);\n}\n\n.referral-card[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.35em;\n  font-size: 0.68rem;\n  color: rgba(31, 44, 36, 0.7);\n  margin: 0;\n}\n\n.referral-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #1f3324;\n}\n\n.referral-card[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%], \n.referral-card[_ngcontent-%COMP%]   .ghost[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  padding: 10px 16px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n}\n\n.referral-card[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background: #1f3324;\n  color: #fff;\n}\n\n.referral-card[_ngcontent-%COMP%]   .ghost[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.04);\n  border: 1px solid rgba(15, 23, 42, 0.1);\n  color: #1f3324;\n}\n\n.referral-card[_ngcontent-%COMP%]   .program-pill[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: rgba(16, 185, 129, 0.12);\n  color: #047857;\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.referral-card[_ngcontent-%COMP%]   .program-pill.paused[_ngcontent-%COMP%] {\n  background: rgba(249, 115, 22, 0.15);\n  color: #b45309;\n}\n\n.referral-code-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 8px 14px;\n  border-radius: 999px;\n  background: rgba(31, 44, 36, 0.05);\n  font-weight: 600;\n  letter-spacing: 0.25em;\n  font-size: 0.95rem;\n}\n.referral-code-pill[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  font-weight: 600;\n  color: #256f47;\n  cursor: pointer;\n}\n\n.referral-footnote[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(31, 44, 36, 0.85);\n  margin: 0;\n}\n\n.referral-mini-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.referral-mini-stats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n  background: rgba(31, 44, 36, 0.05);\n  border-radius: 10px;\n  padding: 8px 10px;\n}\n.referral-mini-stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n  font-size: 0.65rem;\n  letter-spacing: 0.2em;\n  color: rgba(31, 44, 36, 0.7);\n}\n.referral-mini-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2px;\n  font-size: 1.1rem;\n  color: #1f3324;\n}\n\n.referral-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.referral-actions[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.referral-actions[_ngcontent-%COMP%]   .ghost[_ngcontent-%COMP%] {\n  width: 44px;\n  min-width: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.referral-feedback[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #256f47;\n  margin: 0;\n}\n\n.referral-note[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #b45309;\n}\n\n.referral-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #1f2c24;\n}\n\n.referral-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 35px;\n  right: 18px;\n  z-index: 105;\n  display: none;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-radius: 18px;\n  border: none;\n  background: linear-gradient(135deg, #122015, #27452d);\n  color: #f5f0e8;\n  font-size: 0.85rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  box-shadow: 0 18px 30px rgba(6, 12, 9, 0.35);\n  cursor: pointer;\n  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;\n}\n.referral-fab[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.referral-fab.active[_ngcontent-%COMP%] {\n  box-shadow: 0 12px 22px rgba(6, 12, 9, 0.28);\n  background: linear-gradient(135deg, #1b3724, #3b6a46);\n}\n\n.referral-fab-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  line-height: 1.1;\n}\n.referral-fab-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: 1.1rem;\n  letter-spacing: 0.02em;\n}\n.referral-fab-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  letter-spacing: 0.3em;\n  text-transform: uppercase;\n  opacity: 0.8;\n}\n\n.referral-fab-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.15rem;\n}\n\n.referral-fab-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.14);\n  color: #f5f0e8;\n  font-size: 0.65rem;\n  letter-spacing: 0.2em;\n}\n\n.referral-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(14, 20, 17, 0.65);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  padding: 0 16px 16px;\n  z-index: 140;\n}\n\n.referral-drawer-panel[_ngcontent-%COMP%] {\n  width: min(520px, 100%);\n  background: #fffdf7;\n  border-radius: 18px 18px 10px 10px;\n  box-shadow: 0 -10px 30px rgba(8, 12, 10, 0.25);\n  padding: 18px 20px 24px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n\n.referral-drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.referral-drawer-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #1f3324;\n}\n\n.drawer-close-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(31, 51, 36, 0.2);\n  background: #fff;\n  color: #1f3324;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  font-size: 0.95rem;\n  cursor: pointer;\n}\n\n.referral-drawer-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.trek-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 4px;\n  border: 1px solid rgba(58, 99, 73, 0.14);\n  transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.35s;\n  display: flex;\n  flex-direction: column;\n}\n.trek-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 32px 64px rgba(30, 50, 35, 0.14);\n  border-color: rgba(58, 99, 73, 0.28);\n}\n.trek-card[_ngcontent-%COMP%]:hover   .trek-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.trek-card[_ngcontent-%COMP%]:hover   .book-btn[_ngcontent-%COMP%]   .btn-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n\n.trek-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 230px;\n  overflow: hidden;\n  border-radius: 4px 4px 0 0;\n}\n.trek-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.55s cubic-bezier(0.23, 1, 0.32, 1);\n  display: block;\n}\n.trek-image-container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 50%);\n  pointer-events: none;\n}\n.trek-image-container[_ngcontent-%COMP%]   .difficulty-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  left: 14px;\n  z-index: 1;\n  font-size: 0.67rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  padding: 5px 12px;\n  border-radius: 40px;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n.trek-image-container[_ngcontent-%COMP%]   .difficulty-badge.easy[_ngcontent-%COMP%] {\n  background: rgba(26, 71, 49, 0.88);\n  color: #6ee7b7;\n}\n.trek-image-container[_ngcontent-%COMP%]   .difficulty-badge.moderate[_ngcontent-%COMP%] {\n  background: rgba(61, 42, 10, 0.88);\n  color: #fbbf24;\n}\n.trek-image-container[_ngcontent-%COMP%]   .difficulty-badge.hard[_ngcontent-%COMP%] {\n  background: rgba(59, 18, 18, 0.88);\n  color: #f87171;\n}\n.trek-image-container[_ngcontent-%COMP%]   .difficulty-badge[_ngcontent-%COMP%]:not(.easy):not(.moderate):not(.hard) {\n  background: rgba(58, 99, 73, 0.88);\n  color: #d1fae5;\n}\n.trek-image-container[_ngcontent-%COMP%]   .card-rating[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  right: 14px;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 30px;\n  padding: 4px 10px;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.trek-image-container[_ngcontent-%COMP%]   .card-rating[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  font-size: 0.75rem;\n}\n.trek-image-container[_ngcontent-%COMP%]   .availability-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  right: 14px;\n  z-index: 1;\n  font-size: 0.66rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 6px 10px;\n  border-radius: 30px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.trek-image-container[_ngcontent-%COMP%]   .availability-badge.is-open[_ngcontent-%COMP%] {\n  background: rgba(21, 101, 52, 0.78);\n  color: #d9ffe7;\n}\n.trek-image-container[_ngcontent-%COMP%]   .availability-badge.is-low[_ngcontent-%COMP%] {\n  background: rgba(183, 119, 14, 0.85);\n  color: #fff5e2;\n}\n.trek-image-container[_ngcontent-%COMP%]   .availability-badge.is-sold[_ngcontent-%COMP%] {\n  background: rgba(136, 28, 28, 0.85);\n  color: #ffdede;\n}\n.trek-image-container[_ngcontent-%COMP%]   .availability-badge.is-unknown[_ngcontent-%COMP%] {\n  background: rgba(42, 52, 65, 0.82);\n  color: #eff4ff;\n}\n\n.trek-header[_ngcontent-%COMP%] {\n  padding: 20px 20px 16px;\n  border-bottom: 1px solid #ede8df;\n}\n.trek-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: 1.4rem;\n  font-weight: 600;\n  line-height: 1.2;\n  color: #1a1f1b;\n  margin: 0 0 6px;\n  letter-spacing: -0.01em;\n}\n.trek-header[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  color: #5a8a6a;\n  font-size: 0.8rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n}\n\n.trek-content[_ngcontent-%COMP%] {\n  padding: 16px 20px 20px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.trek-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.trek-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: #ede8df;\n  color: #2e3b30;\n  font-size: 0.75rem;\n  font-weight: 500;\n  padding: 5px 10px;\n  border-radius: 6px;\n  flex: 1;\n  justify-content: center;\n}\n\n.trek-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #8a9b8e;\n  font-size: 0.8rem;\n  margin-bottom: 14px;\n  padding-bottom: 14px;\n  border-bottom: 1px dashed rgba(58, 99, 73, 0.15);\n}\n\n.highlights[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.highlights[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid rgba(58, 99, 73, 0.25);\n  color: #3a6349;\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  padding: 4px 10px;\n  border-radius: 30px;\n  transition: background 0.2s, color 0.2s;\n}\n.highlights[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%]:hover {\n  background: #3a6349;\n  color: #fff;\n}\n\n.trek-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: auto;\n  padding-top: 16px;\n  border-top: 1px solid #ede8df;\n}\n.trek-footer[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.trek-footer[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: 1.9rem;\n  font-weight: 700;\n  color: #3a6349;\n  line-height: 1;\n}\n.trek-footer[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%] {\n  color: #8a9b8e;\n  font-size: 0.75rem;\n}\n\n.book-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #1a1f1b;\n  color: #f5f0e8;\n  font-family: \"Jost\", system-ui, sans-serif;\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 10px 18px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.book-btn[_ngcontent-%COMP%]   .btn-arrow[_ngcontent-%COMP%] {\n  transition: transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);\n  font-size: 0.85rem;\n}\n.book-btn[_ngcontent-%COMP%]:hover {\n  background: #3a6349;\n}\n.book-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  background: #44584a;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 8px;\n  margin-top: 14px;\n}\n\n.secondary-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(58, 99, 73, 0.25);\n  background: #fff;\n  color: #304c3a;\n  font-size: 0.74rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  border-radius: 30px;\n  padding: 10px 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.secondary-btn[_ngcontent-%COMP%]:hover, .secondary-btn.active[_ngcontent-%COMP%] {\n  background: #e8f0ea;\n  border-color: #3a6349;\n}\n.secondary-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  background: #f3f5f3;\n  border-color: rgba(58, 99, 73, 0.18);\n}\n\n.loader-wrapper[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n  background: #faf7f2;\n}\n.loader-wrapper[_ngcontent-%COMP%]   .loader-icon[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: 4rem;\n  animation: _ngcontent-%COMP%_breathe 1.8s ease-in-out infinite;\n}\n.loader-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 500;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: #8a9b8e;\n  animation: _ngcontent-%COMP%_breathe 1.8s ease-in-out infinite;\n}\n\n.custom-loader[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@keyframes _ngcontent-%COMP%_breathe {\n  0%, 100% {\n    opacity: 0.4;\n    transform: scale(0.97);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  text-align: center;\n  padding: 40px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  color: #2e3b30;\n  opacity: 0.35;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: 2rem;\n  font-weight: 600;\n  color: #2e3b30;\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8a9b8e;\n  font-size: 0.9rem;\n  letter-spacing: 0.04em;\n}\n\n.compare-bar[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 16px;\n  margin: 0 7vw 50px;\n  background: rgba(23, 34, 27, 0.95);\n  border: 1px solid rgba(126, 167, 107, 0.28);\n  border-radius: 16px;\n  box-shadow: 0 22px 35px rgba(14, 20, 17, 0.3);\n  padding: 14px;\n  color: #f4f8f4;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  z-index: 11;\n}\n\n.compare-meta[_ngcontent-%COMP%] {\n  font-size: 0.86rem;\n  color: rgba(255, 255, 255, 0.88);\n  margin-bottom: 8px;\n}\n\n.compare-note[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #ffd8a8;\n  margin-bottom: 8px;\n}\n\n.compare-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.compare-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 30px;\n  padding: 6px 10px;\n  font-size: 0.76rem;\n}\n.compare-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n}\n\n.compare-actions[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  gap: 8px;\n}\n\n.compare-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(14, 20, 17, 0.72);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  z-index: 120;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n\n.compare-panel[_ngcontent-%COMP%] {\n  width: min(1100px, 100%);\n  max-height: 88vh;\n  overflow: auto;\n  background: #fefcf8;\n  border: 1px solid rgba(58, 99, 73, 0.22);\n  border-radius: 16px;\n  box-shadow: 0 26px 44px rgba(14, 20, 17, 0.35);\n  padding: 18px;\n}\n\n.compare-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.compare-panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: 2rem;\n  color: #233629;\n  margin: 0;\n}\n\n.compare-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 12px;\n}\n\n.compare-loading[_ngcontent-%COMP%] {\n  padding: 18px;\n  border: 1px dashed rgba(58, 99, 73, 0.28);\n  border-radius: 10px;\n  color: #3a6349;\n  font-size: 0.86rem;\n}\n\n.compare-column[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid rgba(58, 99, 73, 0.16);\n  border-radius: 12px;\n  padding: 14px;\n}\n\n.compare-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n}\n.compare-title-row[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: 1.4rem;\n  line-height: 1.1;\n  color: #1a1f1b;\n  margin: 0;\n}\n\n.remove-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(58, 99, 73, 0.2);\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #fff;\n  color: #304c3a;\n  cursor: pointer;\n}\n\n.compare-location[_ngcontent-%COMP%] {\n  margin: 6px 0 12px;\n  color: #6d7d70;\n  font-size: 0.8rem;\n}\n\n.compare-points[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  border-top: 1px dashed rgba(58, 99, 73, 0.25);\n}\n.compare-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 10px 0;\n  border-bottom: 1px dashed rgba(58, 99, 73, 0.2);\n  font-size: 0.8rem;\n  color: #304c3a;\n}\n.compare-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1b2e22;\n  text-align: right;\n}\n\n.compare-column-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.compare-rich-section[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 10px 12px;\n  background: #f4f8f5;\n  border: 1px solid rgba(58, 99, 73, 0.14);\n  border-radius: 10px;\n}\n.compare-rich-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 0.74rem;\n  color: #2f4f3d;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.compare-rich-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 16px;\n}\n.compare-rich-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  color: #355342;\n  font-size: 0.78rem;\n  line-height: 1.4;\n}\n.compare-rich-section[_ngcontent-%COMP%]   .empty-line[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-left: -16px;\n  color: #7b8a80;\n  font-style: italic;\n}\n\n.compare-rich-section.danger[_ngcontent-%COMP%] {\n  background: #fff6f3;\n  border-color: rgba(164, 72, 35, 0.2);\n}\n.compare-rich-section.danger[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #8b3b1b;\n}\n.compare-rich-section.danger[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #70412d;\n}\n\n@media (max-width: 1080px) {\n  .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .referral-sidebar[_ngcontent-%COMP%] {\n    position: static;\n    width: 100%;\n  }\n}\n@media (max-width: 900px) {\n  .hero-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding-bottom: 56px;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .trek-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .content-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n  .discovery-tools[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 16px 4vw 10px;\n  }\n  .collection-chips[_ngcontent-%COMP%] {\n    padding: 0 4vw 14px;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .compare-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .referral-sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .referral-fab[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n}\n@media (max-width: 600px) {\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.8rem;\n  }\n  .trek-grid[_ngcontent-%COMP%] {\n    padding: 0 4vw 60px;\n  }\n  .filter-section[_ngcontent-%COMP%] {\n    padding: 0 4vw;\n  }\n  .content-header[_ngcontent-%COMP%] {\n    padding: 40px 4vw 24px;\n  }\n  .hero-indicators[_ngcontent-%COMP%] {\n    right: 4vw;\n  }\n}\n.load-more-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 0 7vw 0px;\n}\n.load-more-wrapper[_ngcontent-%COMP%]   .load-more-meta[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #8a9b8e;\n  letter-spacing: 0.06em;\n}\n\n.load-more-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  background: transparent;\n  border: 1.5px solid rgba(58, 99, 73, 0.35);\n  color: #3a6349;\n  font-family: \"Jost\", system-ui, sans-serif;\n  font-size: 0.82rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 14px 32px;\n  border-radius: 40px;\n  cursor: pointer;\n  transition: background 0.25s, color 0.25s, border-color 0.25s, transform 0.25s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.25s;\n}\n.load-more-btn[_ngcontent-%COMP%]   .load-more-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  background: rgba(58, 99, 73, 0.1);\n  border-radius: 50%;\n  font-size: 0.9rem;\n  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), background 0.25s;\n}\n.load-more-btn[_ngcontent-%COMP%]:hover {\n  background: #3a6349;\n  color: #fff;\n  border-color: #3a6349;\n  box-shadow: 0 8px 28px rgba(58, 99, 73, 0.25);\n  transform: translateY(-2px);\n}\n.load-more-btn[_ngcontent-%COMP%]:hover   .load-more-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(3px);\n}\n.load-more-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n@media (max-width: 768px) {\n  .trek-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .referral-card[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n.referral-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUpGOztBQVFBO0VBQXlCLHNCQUFBO0VBQXdCLFNBQUE7RUFBVyxVQUFBO0FBRjVEOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtBQURGOztBQUtBO0VBQ0UsOERBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0U7SUFBTyxVQUFBO0lBQVksMkJBQUE7RUFBbkI7RUFDQTtJQUFPLFVBQUE7SUFBWSx3QkFBQTtFQUduQjtBQUNGO0FBZ0JBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWRGOztBQWtCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFmRjs7QUFtQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7QUFoQkY7QUFtQkk7RUFFRSxnR0FBQTtFQUNBLG1CQUFBO0FBbEJOO0FBZUk7RUFFRSxnR0FBQTtFQUNBLG1CQUFBO0FBZE47QUFXSTtFQUVFLGdHQUFBO0VBQ0Esb0JBQUE7QUFWTjtBQU9JO0VBRUUsZ0dBQUE7RUFDQSxvQkFBQTtBQU5OO0FBR0k7RUFFRSxnR0FBQTtFQUNBLG9CQUFBO0FBRk47O0FBUUE7RUFFSTtJQUNFLGdHQUFBO0VBTko7RUFLRTtJQUNFLGdHQUFBO0VBSEo7RUFFRTtJQUNFLGdHQUFBO0VBQUo7RUFERTtJQUNFLGdHQUFBO0VBR0o7RUFKRTtJQUNFLGdHQUFBO0VBTUo7QUFDRjtBQURBO0VB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bUVBO0VBQ0U7SUFDRSwwQkFBQTtFQWhFRjtFQW1FQTtJQUNFLGlCQUFBO0VBakVGO0FBQ0Y7QUFtRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQWpFRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBHT09HTEUgRk9OVFMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5AdXNlICdzYXNzOmxpc3QnO1xuQHVzZSAnc2FzczptYXRoJztcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvcm1vcmFudCtHYXJhbW9uZDppdGFsLHdnaHRAMCw0MDA7MCw2MDA7MCw3MDA7MSw0MDA7MSw2MDAmZmFtaWx5PUpvc3Q6d2dodEAzMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBUT0tFTlMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG46cm9vdCB7XG4gIC0tcmFkaXVzLWNhcmQ6IDRweDtcbiAgLS00MHB4OiA0MHB4O1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUkVTRVQgJiBCQVNFIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgfVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogI2ZhZjdmMjtcbiAgY29sb3I6ICMxYTFmMWI7XG4gIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBQQUdFIFdSQVBQRVIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ucGFnZS13cmFwcGVyIHtcbiAgYW5pbWF0aW9uOiBwYWdlUmV2ZWFsIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIGJvdGg7XG59XG5cbi5kYXNoYm9hcmQtZXJyb3ItYmFubmVyIHtcbiAgbWFyZ2luOiAxcmVtIDFyZW0gMDtcbiAgcGFkZGluZzogMC44NXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgNzcsIDc5LCAwLjEyKTtcbiAgY29sb3I6ICM4YTFmMWY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCA3NywgNzksIDAuMjIpO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbkBrZXlmcmFtZXMgcGFnZVJldmVhbCB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTJweCk7IH1cbiAgdG8gICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgSEVSTyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcblxuLy8gU2xpZGVzaG93IGNvbmZpZ1xuJHNsaWRlLWNvdW50ICAgIDogNTtcbiRzbGlkZS1kdXJhdGlvbiA6IDZzO1xuJGZhZGUtZHVyYXRpb24gIDogMS40cztcbiR0b3RhbCAgICAgICAgICA6ICRzbGlkZS1jb3VudCAqICRzbGlkZS1kdXJhdGlvbjtcblxuLy8gU2xpZGUgYmFja2dyb3VuZCBpbWFnZXMgw6LCgMKUIHVzZSBsb2NhbCBhc3NldHMgKGFkZCBmaWxlcyB0byBgc3JjL2Fzc2V0cy9pbWFnZXMvYClcbiRzbGlkZXM6IChcbiAgJy9hc3NldHMvaW1hZ2VzL2hlcm8tc2xpZGUtMS5qcGcnLFxuICAnL2Fzc2V0cy9pbWFnZXMvaGVyby1zbGlkZS0yLmpwZycsXG4gICcvYXNzZXRzL2ltYWdlcy9oZXJvLXNsaWRlLTMuanBnJyxcbiAgJy9hc3NldHMvaW1hZ2VzL2hlcm8tc2xpZGUtNC5qcGcnLFxuICAnL2Fzc2V0cy9pbWFnZXMvaGVyby1zbGlkZS01LmpwZydcbik7XG5cbi5oZXJvLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNzV2aDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBTbGlkZSBjb250YWluZXJcbi5oZXJvLXNsaWRlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDA7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBJbmRpdmlkdWFsIHNsaWRlXG4uaGVyby1zbGlkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcbiAgYW5pbWF0aW9uOiBzbGlkZVNob3cgI3skdG90YWx9IGVhc2UtaW4tb3V0IGluZmluaXRlO1xuXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJHNsaWRlLWNvdW50IHtcbiAgICAmLnNsaWRlLSN7JGl9IHtcbiAgICAgIC8vIFRyeSBKUEcgZmlyc3QgKHByb2R1Y3Rpb24pLCBmYWxsIGJhY2sgdG8gU1ZHIHBsYWNlaG9sZGVyIGlmIG1pc3NpbmdcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaGVyby1zbGlkZS0jeyRpfS5qcGcnKSwgdXJsKCcvYXNzZXRzL2ltYWdlcy9oZXJvLXNsaWRlLSN7JGl9LnN2ZycpO1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAjeygkaSAtIDEpICogJHNsaWRlLWR1cmF0aW9ufTtcbiAgICB9XG4gIH1cbn1cblxuLy8gSGlnaC1EUEkgLyBSZXRpbmEgZmFsbGJhY2tzOiBzZXJ2ZSBAMnggaW1hZ2VzIHdoZW4gZGV2aWNlIHBpeGVsIHJhdGlvIGlzIGhpZ2hcbkBtZWRpYSAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjUpLCAobWluLXJlc29sdXRpb246IDE0NGRwaSkge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRzbGlkZS1jb3VudCB7XG4gICAgLmhlcm8tc2xpZGUuc2xpZGUtI3skaX0ge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9oZXJvLXNsaWRlLSN7JGl9LmpwZycpLCB1cmwoJy9hc3NldHMvaW1hZ2VzL2hlcm8tc2xpZGUtI3skaX0uc3ZnJyk7XG4gICAgfVxuICB9XG59XG5cbi8vIEVhY2ggc2xpZGUgb2NjdXBpZXMgMS8kc2xpZGUtY291bnQgb2YgdGhlIHRvdGFsIHRpbWVsaW5lXG5Aa2V5ZnJhbWVzIHNsaWRlU2hvdyB7XG4gICRob2xkLWVuZCAgOiBtYXRoLnBlcmNlbnRhZ2UobWF0aC5kaXYoMSwgJHNsaWRlLWNvdW50KSk7XG4gICRmYWRlLWluICAgOiBtYXRoLnBlcmNlbnRhZ2UobWF0aC5kaXYoJGZhZGUtZHVyYXRpb24sICR0b3RhbCkpO1xuICAkZmFkZS1vdXQgIDogJGhvbGQtZW5kIC0gbWF0aC5wZXJjZW50YWdlKG1hdGguZGl2KCRmYWRlLWR1cmF0aW9uLCAkdG90YWwpKTtcblxuICAwJSAgICAgICAgICB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7IH1cbiAgI3skZmFkZS1pbn0geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEuMDApOyB9XG4gICN7JGZhZGUtb3V0fXsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZSgxLjAwKTsgfVxuICAjeyRob2xkLWVuZH17IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7IH1cbiAgMTAwJSAgICAgICAgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBEYXJrIGdyYWRpZW50IG92ZXJsYXkgKHdhcyA6OmJlZm9yZSlcbi5oZXJvLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOlxuICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHRvcCxcbiAgICAgIHJnYmEoMTQsIDIyLCAxNiwgMC45MikgMCUsXG4gICAgICByZ2JhKDE0LCAyMiwgMTYsIDAuMzApIDU1JSxcbiAgICAgIHRyYW5zcGFyZW50ICAgICAgICAgICAgMTAwJVxuICAgICk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vLyDDosKUwoDDosKUwoAgRmlsbS1ncmFpbiB0ZXh0dXJlICh3YXMgOjphZnRlcilcbi5oZXJvLWdyYWluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNTYnIGhlaWdodD0nMjU2JyUzRSUzQ2ZpbHRlciBpZD0nZyclM0UlM0NmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScuOScgbnVtT2N0YXZlcz0nNCcgc3RpdGNoVGlsZXM9J3N0aXRjaCcvJTNFJTNDL2ZpbHRlciUzRSUzQ3JlY3Qgd2lkdGg9JzI1NicgaGVpZ2h0PScyNTYnIGZpbHRlcj0ndXJsKCUyM2cpJyBvcGFjaXR5PScuMDQ1Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLy8gw6LClMKAw6LClMKAIFByb2dyZXNzLWJhciBpbmRpY2F0b3JzIChib3R0b20tcmlnaHQpXG4uaGVyby1pbmRpY2F0b3JzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI4cHg7XG4gIHJpZ2h0OiA3dnc7XG4gIHotaW5kZXg6IDQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNnB4O1xuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjN2ZiODk2O1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgYW5pbWF0aW9uOiBpbmRpY2F0b3JGaWxsICN7JHNsaWRlLWR1cmF0aW9ufSBsaW5lYXIgaW5maW5pdGU7XG4gICAgfVxuXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkc2xpZGUtY291bnQge1xuICAgICAgJjpudGgtY2hpbGQoI3skaX0pOjphZnRlciB7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogI3soJGkgLSAxKSAqICRzbGlkZS1kdXJhdGlvbn07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgaW5kaWNhdG9yRmlsbCB7XG4gIDAlICAgeyB3aWR0aDogMCU7ICAgIH1cbiAgMTAwJSB7IHdpZHRoOiAxMDAlOyAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgSEVSTyBDT05URU5UIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmhlcm8tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMCA3dncgNzJweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBnYXA6IDI0cHg7XG5cbiAgLmhlcm8tdGV4dCB7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgfVxuXG4gIC5oZXJvLWV5ZWJyb3cge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGJhY2tncm91bmQ6ICM3ZmI4OTY7XG4gICAgfVxuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgR2VvcmdpYSwgc2VyaWY7XG4gICAgZm9udC1zaXplOiBjbGFtcCgzcmVtLCA3dncsIDYuNXJlbSk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMC45NTtcbiAgICBjb2xvcjogI2Y1ZjBlODtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjFweCB3aGl0ZTtcbiAgfVxuXG4gIGgxIGVtIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6ICM3ZmI4OTY7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDIwcHggMCAzNnB4O1xuICAgIGNvbG9yOiByZ2JhKDI0NSwgMjQwLCAyMzIsIDAuNjUpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xuICB9XG5cbiAgLy8gUmlnaHQ6IHZlcnRpY2FsIHN0YXQgc3RyaXBcbiAgLmhlcm8tc3RhdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDI0NSwgMjQwLCAyMzIsIDAuMTIpO1xuICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cblxuICAuc3RhdC1pdGVtIHtcbiAgICBwYWRkaW5nOiAxOHB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDAsIDIzMiwgMC4wOCk7XG5cbiAgICAmOmxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG5cbiAgICBzdHJvbmcge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIEdlb3JnaWEsIHNlcmlmO1xuICAgICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICNmNWYwZTg7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG5cbiAgICBzbWFsbCB7XG4gICAgICBjb2xvcjogIzhhOWI4ZTtcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbn1cblxuLmhlcm8tYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjBlODtcbiAgY29sb3I6ICMxYTFmMWI7XG4gIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxNHB4IDI2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycywgdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBib3gtc2hhZG93IDAuMnM7XG5cbiAgLmJ0bi1pY29uIHtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYmFja2dyb3VuZDogIzNhNjM0OTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG5cbiAgICAuYnRuLWljb24geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTsgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBGSUxURVIgU0VDVElPTiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5maWx0ZXItc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMyZTNiMzA7XG4gIHBhZGRpbmc6IDAgN3Z3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDZweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBkaXNwbGF5OiBub25lOyB9XG5cbiAgYnV0dG9uIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICBmb250LWZhbWlseTogJ0pvc3QnLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMsIGJvcmRlci1jb2xvciAwLjJzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAmOmhvdmVyIHsgY29sb3I6ICNmNWYwZTg7IH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjN2ZiODk2O1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzdmYjg5NjtcbiAgICB9XG4gIH1cbn1cblxuLmRpc2NvdmVyeS10b29scyB7XG4gIHBhZGRpbmc6IDIwcHggN3Z3IDEycHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gYXV0bztcbiAgZ2FwOiAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmFmN2YyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg1OCwgOTksIDczLCAwLjEyKTtcblxuICAuc2VhcmNoLXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU4LCA5OSwgNzMsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgY29sb3I6ICMzYTYzNDk7XG5cbiAgICBpbnB1dCB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgY29sb3I6ICMxYTFmMWI7XG4gICAgfVxuICB9XG5cbiAgLnNvcnQtd3JhcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU4LCA5OSwgNzMsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xuXG4gICAgbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgY29sb3I6ICM2YTdiNmU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgc2VsZWN0IHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgICAgIGNvbG9yOiAjMWExZjFiO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4uY2xlYXItZmlsdGVycy1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU4LCA5OSwgNzMsIDAuMjQpO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzNhNjM0OTtcbiAgZm9udC1mYW1pbHk6ICdKb3N0Jywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNzZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDEycHggMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29sbGVjdGlvbi1jaGlwcyB7XG4gIHBhZGRpbmc6IDAgN3Z3IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNTgsIDk5LCA3MywgMC4xMik7XG5cbiAgYnV0dG9uIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU4LCA5OSwgNzMsIDAuMik7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzNhNjM0OTtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAmLmFjdGl2ZSxcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMzYTYzNDk7XG4gICAgICBib3JkZXItY29sb3I6ICMzYTYzNDk7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIENPTlRFTlQgQVJFQSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5jb250ZW50LWhlYWRlciB7XG4gIHBhZGRpbmc6IDU2cHggN3Z3IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIC5jb250ZW50LXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIEdlb3JnaWEsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMxYTFmMWI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG5cbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGNvbG9yOiAjM2E2MzQ5O1xuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50LW1ldGEge1xuICAgIGNvbG9yOiAjOGE5YjhlO1xuICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBUUkVLICsgUkVGRVJSQUwgTEFZT1VUIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmRhc2hib2FyZC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSAzMjBweDtcbiAgZ2FwOiAzMnB4O1xuICBwYWRkaW5nOiAwIDd2dyAyMHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmRhc2hib2FyZC1tYWluIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4ucmVmZXJyYWwtc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFRSRUsgR1JJRCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50cmVrLWdyaWQge1xuICBwYWRkaW5nOiAwIDAgNDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzIwcHgsIDFmcikpO1xuICBnYXA6IDI4cHg7XG59XG5cbi5yZWZlcnJhbC1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDI0cHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiAgcGFkZGluZzogMThweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG5cbiAgJi5yZWZlcnJhbC1hdXRoLFxuICAmLnJlZmVycmFsLWVycm9yIHtcbiAgICBnYXA6IDEycHg7XG4gIH1cblxuICAmLnJlZmVycmFsLWNvbXBhY3QucGF1c2VkIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmOGYwLCAjZmZlZWRkKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjQ5LCAxMTUsIDIyLCAwLjI1KTtcbiAgfVxufVxuXG4ucmVmZXJyYWwtY2FyZCAuZXllYnJvdyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjM1ZW07XG4gIGZvbnQtc2l6ZTogMC42OHJlbTtcbiAgY29sb3I6IHJnYmEoMzEsIDQ0LCAzNiwgMC43KTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucmVmZXJyYWwtY2FyZCBoNCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjMWYzMzI0O1xufVxuXG4ucmVmZXJyYWwtY2FyZCAucHJpbWFyeSxcbi5yZWZlcnJhbC1jYXJkIC5naG9zdCB7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVmZXJyYWwtY2FyZCAucHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMxZjMzMjQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucmVmZXJyYWwtY2FyZCAuZ2hvc3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuMDQpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMSk7XG4gIGNvbG9yOiAjMWYzMzI0O1xufVxuXG4ucmVmZXJyYWwtY2FyZCAucHJvZ3JhbS1waWxsIHtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxODUsIDEyOSwgMC4xMik7XG4gIGNvbG9yOiAjMDQ3ODU3O1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAmLnBhdXNlZCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDksIDExNSwgMjIsIDAuMTUpO1xuICAgIGNvbG9yOiAjYjQ1MzA5O1xuICB9XG59XG5cbi5yZWZlcnJhbC1jb2RlLXBpbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzEsIDQ0LCAzNiwgMC4wNSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1ZW07XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcblxuICBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMjU2ZjQ3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4ucmVmZXJyYWwtZm9vdG5vdGUge1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIGNvbG9yOiByZ2JhKDMxLCA0NCwgMzYsIDAuODUpO1xuICBtYXJnaW46IDA7XG59XG5cbi5yZWZlcnJhbC1taW5pLXN0YXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuXG4gIGRpdiB7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCA0NCwgMzYsIDAuMDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICAgIGNvbG9yOiByZ2JhKDMxLCA0NCwgMzYsIDAuNyk7XG4gIH1cblxuICBzdHJvbmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBjb2xvcjogIzFmMzMyNDtcbiAgfVxufVxuXG4ucmVmZXJyYWwtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcblxuICAucHJpbWFyeSB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5naG9zdCB7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgbWluLXdpZHRoOiA0NHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG4ucmVmZXJyYWwtZmVlZGJhY2sge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICMyNTZmNDc7XG4gIG1hcmdpbjogMDtcbn1cblxuLnJlZmVycmFsLW5vdGUge1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGNvbG9yOiAjYjQ1MzA5O1xufVxuXG4ucmVmZXJyYWwtbG9hZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgY29sb3I6ICMxZjJjMjQ7XG59XG5cbi5yZWZlcnJhbC1mYWIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzVweDtcbiAgcmlnaHQ6IDE4cHg7XG4gIHotaW5kZXg6IDEwNTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEyMjAxNSwgIzI3NDUyZCk7XG4gIGNvbG9yOiAjZjVmMGU4O1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJveC1zaGFkb3c6IDAgMThweCAzMHB4IHJnYmEoNiwgMTIsIDksIDAuMzUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLCBib3gtc2hhZG93IDAuMjVzIGVhc2UsIGJhY2tncm91bmQgMC4yNXMgZWFzZTtcblxuICAmOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gIH1cblxuICAmLmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDIycHggcmdiYSg2LCAxMiwgOSwgMC4yOCk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFiMzcyNCwgIzNiNmE0Nik7XG4gIH1cbn1cblxuLnJlZmVycmFsLWZhYi1jb3B5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG5cbiAgc3Ryb25nIHtcbiAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIEdlb3JnaWEsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIH1cblxuICBzbWFsbCB7XG4gICAgZm9udC1zaXplOiAwLjY2cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjNlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxufVxuXG4ucmVmZXJyYWwtZmFiLWljb24ge1xuICB3aWR0aDogNDZweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xufVxuXG4ucmVmZXJyYWwtZmFiLWN0YSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xuICBjb2xvcjogI2Y1ZjBlODtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG59XG5cbi5yZWZlcnJhbC1kcmF3ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0LCAyMCwgMTcsIDAuNjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxNnB4IDE2cHg7XG4gIHotaW5kZXg6IDE0MDtcbn1cblxuLnJlZmVycmFsLWRyYXdlci1wYW5lbCB7XG4gIHdpZHRoOiBtaW4oNTIwcHgsIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAjZmZmZGY3O1xuICBib3JkZXItcmFkaXVzOiAxOHB4IDE4cHggMTBweCAxMHB4O1xuICBib3gtc2hhZG93OiAwIC0xMHB4IDMwcHggcmdiYSg4LCAxMiwgMTAsIDAuMjUpO1xuICBwYWRkaW5nOiAxOHB4IDIwcHggMjRweDtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnJlZmVycmFsLWRyYXdlci1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICBoNCB7XG4gICAgbWFyZ2luOiA0cHggMCAwO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMxZjMzMjQ7XG4gIH1cbn1cblxuLmRyYXdlci1jbG9zZS1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMxLCA1MSwgMzYsIDAuMik7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMWYzMzI0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVmZXJyYWwtZHJhd2VyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFRSRUsgQ0FSRCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50cmVrLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTgsIDk5LCA3MywgMC4xNCk7XG4gIHRyYW5zaXRpb246XG4gICAgdHJhbnNmb3JtICAgIDAuMzVzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSxcbiAgICBib3gtc2hhZG93ICAgMC4zNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLFxuICAgIGJvcmRlci1jb2xvciAwLjM1cztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XG4gICAgYm94LXNoYWRvdzogMCAzMnB4IDY0cHggcmdiYSgzMCwgNTAsIDM1LCAwLjE0KTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNTgsIDk5LCA3MywgMC4yOCk7XG5cbiAgICAudHJlay1pbWFnZS1jb250YWluZXIgaW1nIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgfVxuICAgIC5ib29rLWJ0biAuYnRuLWFycm93ICAgICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTsgfVxuICB9XG59XG5cbi8vIElNQUdFXG4udHJlay1pbWFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjU1cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwwLDAsMC40KSAwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5kaWZmaWN1bHR5LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNHB4O1xuICAgIGxlZnQ6IDE0cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBmb250LXNpemU6IDAuNjdyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNGVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcblxuICAgICYuZWFzeSAgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDI2LCA3MSwgNDksIDAuODgpOyBjb2xvcjogIzZlZTdiNzsgfVxuICAgICYubW9kZXJhdGUgeyBiYWNrZ3JvdW5kOiByZ2JhKDYxLCA0MiwgMTAsIDAuODgpOyBjb2xvcjogI2ZiYmYyNDsgfVxuICAgICYuaGFyZCAgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDU5LCAxOCwgMTgsIDAuODgpOyBjb2xvcjogI2Y4NzE3MTsgfVxuXG4gICAgJjpub3QoLmVhc3kpOm5vdCgubW9kZXJhdGUpOm5vdCguaGFyZCkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg1OCwgOTksIDczLCAwLjg4KTtcbiAgICAgIGNvbG9yOiAjZDFmYWU1O1xuICAgIH1cbiAgfVxuXG4gIC5jYXJkLXJhdGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTRweDtcbiAgICByaWdodDogMTRweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgIC5zdGFyIHsgY29sb3I6ICNmYmJmMjQ7IGZvbnQtc2l6ZTogMC43NXJlbTsgfVxuICB9XG5cbiAgLmF2YWlsYWJpbGl0eS1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTRweDtcbiAgICByaWdodDogMTRweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGZvbnQtc2l6ZTogMC42NnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cbiAgICAmLmlzLW9wZW4ge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMSwgMTAxLCA1MiwgMC43OCk7XG4gICAgICBjb2xvcjogI2Q5ZmZlNztcbiAgICB9XG5cbiAgICAmLmlzLWxvdyB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4MywgMTE5LCAxNCwgMC44NSk7XG4gICAgICBjb2xvcjogI2ZmZjVlMjtcbiAgICB9XG5cbiAgICAmLmlzLXNvbGQge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMzYsIDI4LCAyOCwgMC44NSk7XG4gICAgICBjb2xvcjogI2ZmZGVkZTtcbiAgICB9XG5cbiAgICAmLmlzLXVua25vd24ge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg0MiwgNTIsIDY1LCAwLjgyKTtcbiAgICAgIGNvbG9yOiAjZWZmNGZmO1xuICAgIH1cbiAgfVxufVxuXG4vLyBIRUFERVJcbi50cmVrLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZThkZjtcblxuICBoMyB7XG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgY29sb3I6ICMxYTFmMWI7XG4gICAgbWFyZ2luOiAwIDAgNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICB9XG5cbiAgLmxvY2F0aW9uIHtcbiAgICBjb2xvcjogIzVhOGE2YTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIH1cbn1cblxuLy8gQ09OVEVOVFxuLnRyZWstY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHggMjBweCAyMHB4O1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vLyBNRVRBIFJPV1xuLnRyZWstZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWRlOGRmO1xuICAgIGNvbG9yOiAjMmUzYjMwO1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi8vIERBVEVcbi50cmVrLWRhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgY29sb3I6ICM4YTliOGU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCByZ2JhKDU4LCA5OSwgNzMsIDAuMTUpO1xufVxuXG4vLyBISUdITElHSFRTXG4uaGlnaGxpZ2h0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgLmNoaXAge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTgsIDk5LCA3MywgMC4yNSk7XG4gICAgY29sb3I6ICMzYTYzNDk7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzLCBjb2xvciAwLjJzO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjM2E2MzQ5O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG59XG5cbi8vIEZPT1RFUlxuLnRyZWstZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZGU4ZGY7XG5cbiAgLnByaWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBnYXA6IDRweDtcbiAgfVxuXG4gIC5wcmljZS1hbW91bnQge1xuICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgR2VvcmdpYSwgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjlyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzNhNjM0OTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuXG4gIC5wcmljZS1sYWJlbCB7XG4gICAgY29sb3I6ICM4YTliOGU7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG5cbi5ib29rLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYmFja2dyb3VuZDogIzFhMWYxYjtcbiAgY29sb3I6ICNmNWYwZTg7XG4gIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMsIHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcblxuICAuYnRuLWFycm93IHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgfVxuXG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjM2E2MzQ5OyB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC41NTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGJhY2tncm91bmQ6ICM0NDU4NGE7XG4gIH1cbn1cblxuLmNhcmQtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuXG4uc2Vjb25kYXJ5LWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTgsIDk5LCA3MywgMC4yNSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMzA0YzNhO1xuICBmb250LXNpemU6IDAuNzRyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICY6aG92ZXIsXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZThmMGVhO1xuICAgIGJvcmRlci1jb2xvcjogIzNhNjM0OTtcbiAgfVxuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNTU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmNWYzO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSg1OCwgOTksIDczLCAwLjE4KTtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgTE9BREVSIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmxvYWRlci13cmFwcGVyIHtcbiAgbWluLWhlaWdodDogODB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjRweDtcbiAgYmFja2dyb3VuZDogI2ZhZjdmMjtcblxuICAubG9hZGVyLWljb24ge1xuICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgR2VvcmdpYSwgc2VyaWY7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGFuaW1hdGlvbjogYnJlYXRoZSAxLjhzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMThlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjOGE5YjhlO1xuICAgIGFuaW1hdGlvbjogYnJlYXRoZSAxLjhzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICB9XG59XG5cbi5jdXN0b20tbG9hZGVyIHsgZGlzcGxheTogbm9uZTsgfVxuXG5Aa2V5ZnJhbWVzIGJyZWF0aGUge1xuICAwJSwgMTAwJSB7IG9wYWNpdHk6IDAuNDsgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTsgfVxuICA1MCUgICAgICAgeyBvcGFjaXR5OiAxOyAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEVNUFRZIFNUQVRFIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmVtcHR5LXN0YXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweDtcblxuICAuZW1wdHktc3RhdGUtaWNvbiB7XG4gICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgY29sb3I6ICMyZTNiMzA7XG4gICAgb3BhY2l0eTogMC4zNTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIEdlb3JnaWEsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMmUzYjMwO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAjOGE5YjhlO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIH1cbn1cblxuLmNvbXBhcmUtYmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAxNnB4O1xuICBtYXJnaW46IDAgN3Z3IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMsIDM0LCAyNywgMC45NSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTI2LCAxNjcsIDEwNywgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgMjJweCAzNXB4IHJnYmEoMTQsIDIwLCAxNywgMC4zKTtcbiAgcGFkZGluZzogMTRweDtcbiAgY29sb3I6ICNmNGY4ZjQ7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmNvbXBhcmUtbWV0YSB7XG4gIGZvbnQtc2l6ZTogMC44NnJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OCk7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmNvbXBhcmUtbm90ZSB7XG4gIGZvbnQtc2l6ZTogMC43NHJlbTtcbiAgY29sb3I6ICNmZmQ4YTg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmNvbXBhcmUtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5jb21wYXJlLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBmb250LXNpemU6IDAuNzZyZW07XG5cbiAgYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmNvbXBhcmUtYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xufVxuXG4uY29tcGFyZS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNCwgMjAsIDE3LCAwLjcyKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gIHotaW5kZXg6IDEyMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jb21wYXJlLXBhbmVsIHtcbiAgd2lkdGg6IG1pbigxMTAwcHgsIDEwMCUpO1xuICBtYXgtaGVpZ2h0OiA4OHZoO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogI2ZlZmNmODtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1OCwgOTksIDczLCAwLjIyKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogMCAyNnB4IDQ0cHggcmdiYSgxNCwgMjAsIDE3LCAwLjM1KTtcbiAgcGFkZGluZzogMThweDtcbn1cblxuLmNvbXBhcmUtcGFuZWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG5cbiAgaDMge1xuICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgR2VvcmdpYSwgc2VyaWY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiAjMjMzNjI5O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4uY29tcGFyZS1jb2x1bW5zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XG4gIGdhcDogMTJweDtcbn1cblxuLmNvbXBhcmUtbG9hZGluZyB7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDU4LCA5OSwgNzMsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogIzNhNjM0OTtcbiAgZm9udC1zaXplOiAwLjg2cmVtO1xufVxuXG4uY29tcGFyZS1jb2x1bW4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU4LCA5OSwgNzMsIDAuMTYpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxNHB4O1xufVxuXG4uY29tcGFyZS10aXRsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDhweDtcblxuICBoNCB7XG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgIGNvbG9yOiAjMWExZjFiO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4ucmVtb3ZlLWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTgsIDk5LCA3MywgMC4yKTtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzMwNGMzYTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tcGFyZS1sb2NhdGlvbiB7XG4gIG1hcmdpbjogNnB4IDAgMTJweDtcbiAgY29sb3I6ICM2ZDdkNzA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uY29tcGFyZS1wb2ludHMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgcmdiYSg1OCwgOTksIDczLCAwLjI1KTtcblxuICBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHJnYmEoNTgsIDk5LCA3MywgMC4yKTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogIzMwNGMzYTtcblxuICAgIHN0cm9uZyB7XG4gICAgICBjb2xvcjogIzFiMmUyMjtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgfVxufVxuXG4uY29tcGFyZS1jb2x1bW4tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmNvbXBhcmUtcmljaC1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZjRmOGY1O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU4LCA5OSwgNzMsIDAuMTQpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gIGg1IHtcbiAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgZm9udC1zaXplOiAwLjc0cmVtO1xuICAgIGNvbG9yOiAjMmY0ZjNkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICB9XG5cbiAgbGkge1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICBjb2xvcjogIzM1NTM0MjtcbiAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgfVxuXG4gIC5lbXB0eS1saW5lIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBjb2xvcjogIzdiOGE4MDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cbn1cblxuLmNvbXBhcmUtcmljaC1zZWN0aW9uLmRhbmdlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY2ZjM7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNjQsIDcyLCAzNSwgMC4yKTtcblxuICBoNSB7XG4gICAgY29sb3I6ICM4YjNiMWI7XG4gIH1cblxuICBsaSB7XG4gICAgY29sb3I6ICM3MDQxMmQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAuZGFzaGJvYXJkLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLnJlZmVycmFsLXNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFJFU1BPTlNJVkUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmhlcm8tY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgcGFkZGluZy1ib3R0b206IDU2cHg7XG5cbiAgICAuaGVyby1zdGF0cyB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgfVxuXG4gIC50cmVrLWdyaWQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuXG4gIC5jb250ZW50LWhlYWRlciB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogNHB4OyB9XG5cbiAgLmRpc2NvdmVyeS10b29scyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgcGFkZGluZzogMTZweCA0dncgMTBweDtcbiAgfVxuXG4gIC5jb2xsZWN0aW9uLWNoaXBzIHtcbiAgICBwYWRkaW5nOiAwIDR2dyAxNHB4O1xuICB9XG5cbiAgLmNhcmQtYWN0aW9ucyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuY29tcGFyZS1hY3Rpb25zIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAucmVmZXJyYWwtc2lkZWJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5yZWZlcnJhbC1mYWIge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVyby1jb250ZW50IGgxIHsgZm9udC1zaXplOiAyLjhyZW07IH1cbiAgLnRyZWstZ3JpZCB7IHBhZGRpbmc6IDAgNHZ3IDYwcHg7IH1cbiAgLmZpbHRlci1zZWN0aW9uIHsgcGFkZGluZzogMCA0dnc7IH1cbiAgLmNvbnRlbnQtaGVhZGVyIHsgcGFkZGluZzogNDBweCA0dncgMjRweDsgfVxuXG4gIC5oZXJvLWluZGljYXRvcnMgeyByaWdodDogNHZ3OyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBMT0FEIE1PUkUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubG9hZC1tb3JlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDAgN3Z3IDBweDtcblxuICAubG9hZC1tb3JlLW1ldGEge1xuICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICBjb2xvcjogIzhhOWI4ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICB9XG59XG5cbi5sb2FkLW1vcmUtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMS41cHggc29saWQgcmdiYSg1OCwgOTksIDczLCAwLjM1KTtcbiAgY29sb3I6ICMzYTYzNDk7XG4gIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDE0cHggMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzLCBjb2xvciAwLjI1cywgYm9yZGVyLWNvbG9yIDAuMjVzLCB0cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBib3gtc2hhZG93IDAuMjVzO1xuXG4gIC5sb2FkLW1vcmUtaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSg1OCwgOTksIDczLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGJhY2tncm91bmQgMC4yNXM7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2E2MzQ5O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogIzNhNjM0OTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAyOHB4IHJnYmEoNTgsIDk5LCA3MywgMC4yNSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuXG4gICAgLmxvYWQtbW9yZS1pY29uIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcHgpO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudHJlay1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5yZWZlcnJhbC1jYXJkIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICB9XG59XG4ucmVmZXJyYWwtY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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