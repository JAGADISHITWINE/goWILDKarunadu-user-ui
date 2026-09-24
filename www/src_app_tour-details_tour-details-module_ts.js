"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tour-details_tour-details-module_ts"],{

/***/ 2322
/*!*****************************************************!*\
  !*** ./src/app/tour-details/tour-details-module.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TourDetailsModule: () => (/* binding */ TourDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _tour_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tour-details.component */ 1512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: ':uuid',
  component: _tour_details_component__WEBPACK_IMPORTED_MODULE_3__.TourDetailsComponent
}];
class TourDetailsModule {
  static #_ = _staticBlock = () => (this.ɵfac = function TourDetailsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TourDetailsModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: TourDetailsModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _tour_details_component__WEBPACK_IMPORTED_MODULE_3__.TourDetailsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TourDetailsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _tour_details_component__WEBPACK_IMPORTED_MODULE_3__.TourDetailsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ },

/***/ 1512
/*!********************************************************!*\
  !*** ./src/app/tour-details/tour-details.component.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TourDetailsComponent: () => (/* binding */ TourDetailsComponent)
/* harmony export */ });
/* harmony import */ var _var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _tour_details__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tour-details */ 9497);
/* harmony import */ var _auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth/auth-modal.service */ 2454);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 5430);
/* harmony import */ var _core_public_route_id_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/public-route-id.service */ 2440);
/* harmony import */ var _core_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/dropdown.service */ 4222);
/* harmony import */ var _core_site_settings_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/site-settings.service */ 1662);

var _staticBlock;














function TourDetailsComponent_div_10_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.shareMessage);
  }
}
function TourDetailsComponent_div_10_div_65_small_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(", ctx_r1.tour.reviewCount, " reviews)");
  }
}
function TourDetailsComponent_div_10_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 100)(1, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, TourDetailsComponent_div_10_div_65_small_6_Template, 2, 1, "small", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 2, ctx_r1.tour.rating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.reviewCount > 0);
  }
}
function TourDetailsComponent_div_10_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "svg", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "path", 104)(3, "path", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.tour.views, " views");
  }
}
function TourDetailsComponent_div_10_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "All Slots Booked");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function TourDetailsComponent_div_10_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Only ", ctx_r1.tour.availableSlots, " seats left!");
  }
}
function TourDetailsComponent_div_10_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Selling Fast \u00B7 ", ctx_r1.tour.availableSlots, " slots left");
  }
}
function TourDetailsComponent_div_10_div_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.tour.availableSlots, " slots open");
  }
}
function TourDetailsComponent_div_10_div_84_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_div_84_button_3_Template_button_click_0_listener() {
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openGallery(i_r5 + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const photo_r6 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx_r1.tour.name + " photo " + (i_r5 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.getImageUrl(photo_r6, ctx_r1.tour.cacheKey), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ctx_r1.tour.name + " photo " + (i_r5 + 1));
  }
}
function TourDetailsComponent_div_10_div_84_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_div_84_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openGallery(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Photos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("+", ctx_r1.tour.gallery.length - 3);
  }
}
function TourDetailsComponent_div_10_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 110)(1, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_div_84_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openGallery(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TourDetailsComponent_div_10_div_84_button_3_Template, 2, 3, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TourDetailsComponent_div_10_div_84_button_5_Template, 5, 1, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.getImageUrl(ctx_r1.tour.image, ctx_r1.tour.cacheKey), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ctx_r1.tour.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](4, 4, ctx_r1.tour.gallery, 0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.gallery.length > 3);
  }
}
function TourDetailsComponent_div_10_section_131_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 124)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Live Broadcast \u2022 ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 1, ctx_r1.activeAdvisory.created_at, "mediumDate"));
  }
}
function TourDetailsComponent_div_10_section_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 118)(1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Western Ghats Trail Advisory");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 122)(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, TourDetailsComponent_div_10_section_131_div_10_Template, 4, 4, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.activeAdvisory.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.activeAdvisory.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.activeAdvisory.created_at);
  }
}
function TourDetailsComponent_div_10_div_146_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const highlight_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", highlight_r8, " ");
  }
}
function TourDetailsComponent_div_10_div_146_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 130);
  }
}
function TourDetailsComponent_div_10_div_146_div_16_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_div_146_div_16_button_11_Template_button_click_0_listener() {
      const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openGallery(i_r11 + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const photo_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.getImageUrl(photo_r12, ctx_r1.tour.cacheKey), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ctx_r1.tour.name + " gallery image");
  }
}
function TourDetailsComponent_div_10_div_146_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 138)(1, "div", 139)(2, "h2", 127)(3, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\u25A7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Trek Gallery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_div_146_div_16_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openGallery(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " View All Photos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 141)(9, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_div_146_div_16_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openGallery(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, TourDetailsComponent_div_10_div_146_div_16_button_11_Template, 2, 2, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.getImageUrl(ctx_r1.tour.image, ctx_r1.tour.cacheKey), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ctx_r1.tour.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](12, 3, ctx_r1.tour.gallery, 0, 3));
  }
}
function TourDetailsComponent_div_10_div_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 125)(1, "article", 126)(2, "h2", 127)(3, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " About This Trek ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "h2", 127)(10, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Highlights ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ul", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, TourDetailsComponent_div_10_div_146_li_14_Template, 4, 1, "li", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, TourDetailsComponent_div_10_div_146_div_15_Template, 1, 0, "div", 134)(16, TourDetailsComponent_div_10_div_146_div_16_Template, 13, 7, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.tour.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.tour.highlights);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.gallery == null ? null : ctx_r1.tour.gallery.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.gallery == null ? null : ctx_r1.tour.gallery.length);
  }
}
function TourDetailsComponent_div_10_div_147_div_6_div_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 162);
  }
}
function TourDetailsComponent_div_10_div_147_div_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 156)(1, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TourDetailsComponent_div_10_div_147_div_6_div_10_div_5_Template, 1, 0, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const activity_r15 = ctx.$implicit;
    const last_r16 = ctx.last;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.formatTime(activity_r15.activityTime), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !last_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](activity_r15.activityText);
  }
}
function TourDetailsComponent_div_10_div_147_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 147)(1, "button", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_div_147_div_6_Template_button_click_1_listener() {
      const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openDay = ctx_r1.openDay === i_r14 ? -1 : i_r14);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "svg", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "path", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 153)(9, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, TourDetailsComponent_div_10_div_147_div_6_div_10_Template, 8, 3, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const day_r17 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("open", ctx_r1.openDay === i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-expanded", ctx_r1.openDay === i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](day_r17.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](day_r17.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("open", ctx_r1.openDay === i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", day_r17.activities);
  }
}
function TourDetailsComponent_div_10_div_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 125)(1, "article", 144)(2, "h2", 127)(3, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Day-by-Day Itinerary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, TourDetailsComponent_div_10_div_147_div_6_Template, 11, 8, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.tour.itinerary);
  }
}
function TourDetailsComponent_div_10_div_148_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", item_r18, " ");
  }
}
function TourDetailsComponent_div_10_div_148_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", item_r19, " ");
  }
}
function TourDetailsComponent_div_10_div_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 125)(1, "article", 144)(2, "h2", 163)(3, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " What's Included ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ul", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, TourDetailsComponent_div_10_div_148_li_7_Template, 4, 1, "li", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "article", 144)(9, "h2", 166)(10, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " What's Not Included ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ul", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, TourDetailsComponent_div_10_div_148_li_14_Template, 4, 1, "li", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.tour.inclusions);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.tour.exclusions);
  }
}
function TourDetailsComponent_div_10_div_149_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 204)(1, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 206)(4, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Distance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " \u00B7 Elevation: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "i", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r1.selectedWaypoint.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedWaypoint.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.selectedWaypoint.km, " km");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.selectedWaypoint.elevation, "m (", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](13, 7, ctx_r1.selectedWaypoint.elevation * 3.28084, "1.0-0"), " ft)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Trail Note: ", ctx_r1.selectedWaypoint.note, " ");
  }
}
function TourDetailsComponent_div_10_div_149_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 125)(1, "article", 144)(2, "div", 171)(3, "h2", 172)(4, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Western Ghats Elevation Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_div_149_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.downloadGpxFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Download GPS Trail (.GPX) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Interactive trail elevation gradient mapped across key terrain checkpoints from Basecamp to Peak Summit. Click any waypoint to view altitude, water sources, and terrain advisories. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "svg", 178)(14, "defs")(15, "linearGradient", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "stop", 180)(17, "stop", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "line", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "text", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "1,900m");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "line", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "text", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "1,500m");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "line", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "text", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "1,200m");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "line", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "text", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "900m");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "path", 190)(31, "path", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "g", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_div_149_Template_g_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.selectWaypoint(ctx_r1.elevationWaypoints[0]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "circle", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "text", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Basecamp (0km)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "g", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_div_149_Template_g_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.selectWaypoint(ctx_r1.elevationWaypoints[1]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "circle", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "text", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Water Point (3.8km)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "g", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_div_149_Template_g_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.selectWaypoint(ctx_r1.elevationWaypoints[2]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "circle", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "text", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Ridge Saddle (7.2km)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "g", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_div_149_Template_g_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.selectWaypoint(ctx_r1.elevationWaypoints[3]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "circle", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "text", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Peak Summit (11.5km)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "g", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_div_149_Template_g_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.selectWaypoint(ctx_r1.elevationWaypoints[4]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "circle", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "text", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Return (22km)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, TourDetailsComponent_div_10_div_149_div_52_Template, 17, 10, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedWaypoint);
  }
}
function TourDetailsComponent_div_10_div_150_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r21);
  }
}
function TourDetailsComponent_div_10_div_150_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", item_r22, " ");
  }
}
function TourDetailsComponent_div_10_div_150_li_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "span", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const note_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", note_r23, " ");
  }
}
function TourDetailsComponent_div_10_div_150_article_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const point_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](point_r24.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](point_r24.detail);
  }
}
function TourDetailsComponent_div_10_div_150_article_35_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const faq_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", faq_r27.answer, " ");
  }
}
function TourDetailsComponent_div_10_div_150_article_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article", 224)(1, "button", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_div_150_article_35_Template_button_click_1_listener() {
      const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleFaq(i_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, TourDetailsComponent_div_10_div_150_article_35_p_6_Template, 2, 1, "p", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const faq_r27 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-expanded", ctx_r1.openFaqIndex === i_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](faq_r27.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.openFaqIndex === i_r26 ? "\u2212" : "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.openFaqIndex === i_r26);
  }
}
function TourDetailsComponent_div_10_div_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 125)(1, "article", 144)(2, "h2", 127)(3, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Pre-Trek Preparation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ul", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, TourDetailsComponent_div_10_div_150_li_7_Template, 4, 1, "li", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "article", 144)(9, "h2", 127)(10, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Things to Carry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "ul", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, TourDetailsComponent_div_10_div_150_li_14_Template, 4, 1, "li", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "article", 214)(16, "h2", 215)(17, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Important Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "ul", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, TourDetailsComponent_div_10_div_150_li_21_Template, 4, 1, "li", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "article", 144)(23, "h2", 127)(24, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, " Safety Protocol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, TourDetailsComponent_div_10_div_150_article_28_Template, 5, 2, "article", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "article", 144)(30, "h2", 127)(31, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "i", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, " Frequently Asked Questions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, TourDetailsComponent_div_10_div_150_article_35_Template, 7, 4, "article", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.prepChecklist);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.tour.thingsToCarry);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.tour.importantNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.safetyPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.trekFaqs);
  }
}
function TourDetailsComponent_div_10_span_165_small_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("(", ctx_r1.tour.reviewCount, ")");
  }
}
function TourDetailsComponent_div_10_span_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, TourDetailsComponent_div_10_span_165_small_4_Template, 2, 1, "small", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 2, ctx_r1.tour.rating, "1.1-1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.reviewCount > 0);
  }
}
function TourDetailsComponent_div_10_button_168_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_button_168_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.bookTrek(ctx_r1.tour));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Book Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function TourDetailsComponent_div_10_button_169_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_button_169_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openWhatsAppEnquiry(ctx_r1.tour));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Ask Expert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function TourDetailsComponent_div_10_div_170_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Sold Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function TourDetailsComponent_div_10_section_193_article_8_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trek_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 1, trek_r31.rating, "1.1-1"));
  }
}
function TourDetailsComponent_div_10_section_193_article_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_section_193_article_8_Template_article_click_0_listener() {
      const trek_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openRelatedTrek(trek_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 241)(2, "img", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("error", function TourDetailsComponent_div_10_section_193_article_8_Template_img_error_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.target.src = "assets/placeholder-trek.jpg");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 244)(6, "span", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 246)(13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, TourDetailsComponent_div_10_section_193_article_8_span_16_Template, 4, 4, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_section_193_article_8_Template_button_click_20_listener($event) {
      const trek_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openRelatedTrek(trek_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " View Trek ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const trek_r31 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.getImageUrl(trek_r31.image, trek_r31.cacheKey), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", trek_r31.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", trek_r31.availableSlots, " left");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](trek_r31.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](trek_r31.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](trek_r31.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](15, 9, trek_r31.price, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", trek_r31.rating > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](trek_r31.duration);
  }
}
function TourDetailsComponent_div_10_section_193_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 234)(1, "div", 235)(2, "div")(3, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Recommended next");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h2", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "You Might Also Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, TourDetailsComponent_div_10_section_193_article_8_Template, 22, 12, "article", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.relatedTreks);
  }
}
function TourDetailsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12)(1, "section", 13)(2, "div", 14)(3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("error", function TourDetailsComponent_div_10_Template_img_error_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.target.src = "assets/placeholder-trek.jpg");
    })("click", function TourDetailsComponent_div_10_Template_img_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openGallery(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_Template_div_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openGallery(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 17)(6, "nav", 18)(7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\u203A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Treks");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "\u203A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "\u203A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "strong", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 25)(25, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openGallery(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "rect", 28)(28, "circle", 29)(29, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleWishlist());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.shareTrek());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "circle", 35)(40, "circle", 36)(41, "circle", 37)(42, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, TourDetailsComponent_div_10_span_45_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 40)(47, "div", 41)(48, "div", 42)(49, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, " Eco Certified Trail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "h1", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 49)(60, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "svg", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](62, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, TourDetailsComponent_div_10_div_65_Template, 7, 5, "div", 53)(66, TourDetailsComponent_div_10_div_66_Template, 6, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "svg", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 56)(73, "div", 57)(74, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "span", 59)(76, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, TourDetailsComponent_div_10_div_78_Template, 2, 0, "div", 62)(79, TourDetailsComponent_div_10_div_79_Template, 3, 1, "div", 62)(80, TourDetailsComponent_div_10_div_80_Template, 3, 1, "div", 62)(81, TourDetailsComponent_div_10_div_81_Template, 3, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "Instant Digital Pass Included");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](84, TourDetailsComponent_div_10_div_84_Template, 6, 8, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "section", 65)(86, "div", 66)(87, "div", 67)(88, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](89, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div")(91, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](95, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "div", 67)(97, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](98, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "div")(100, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, "Difficulty");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](104, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "div", 67)(106, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](107, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "div")(109, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](110, "Fitness Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](113, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "div", 67)(115, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](116, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "div")(118, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](119, "Age Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](122, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "div", 75)(124, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](125, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "div")(127, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](128, "Best Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](130, "Oct \u2013 Feb");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](131, TourDetailsComponent_div_10_section_131_Template, 11, 3, "section", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "main", 78)(133, "section", 79)(134, "nav", 80)(135, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_Template_button_click_135_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.selectedSegment = "overview");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](136, " Overview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](137, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_Template_button_click_137_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.selectedSegment = "itinerary");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](138, " Itinerary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](139, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_Template_button_click_139_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.selectedSegment = "inclusions");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](140, " Inclusions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](141, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_Template_button_click_141_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.selectedSegment = "trail_map");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](142, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](143, " Trail Elevation & GPX ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_Template_button_click_144_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.selectedSegment = "info");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](145, " Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](146, TourDetailsComponent_div_10_div_146_Template, 17, 4, "div", 83)(147, TourDetailsComponent_div_10_div_147_Template, 7, 1, "div", 83)(148, TourDetailsComponent_div_10_div_148_Template, 15, 2, "div", 83)(149, TourDetailsComponent_div_10_div_149_Template, 53, 1, "div", 83)(150, TourDetailsComponent_div_10_div_150_Template, 36, 5, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](151, "aside", 84)(152, "div", 85)(153, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](154, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](155, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](156, "Book This Trek");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](157, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](158, "Starting from");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](159, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](160);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](161, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](162, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](163, "/ person");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](165, TourDetailsComponent_div_10_span_165_Template, 5, 5, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](166, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](168, TourDetailsComponent_div_10_button_168_Template, 3, 0, "button", 92)(169, TourDetailsComponent_div_10_button_169_Template, 3, 0, "button", 93)(170, TourDetailsComponent_div_10_div_170_Template, 2, 0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](171, "div", 95)(172, "div")(173, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](174, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](175, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](176, "Next batch");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](177, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](178);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](179, "div")(180, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](181, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](182, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](183, "Availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](184, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](185);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](186, "div")(187, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](188, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](189, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](190, "Expert enquiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](191, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](192, "Get batch & preparation guidance");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](193, TourDetailsComponent_div_10_section_193_Template, 9, 1, "section", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.getImageUrl(ctx_r1.tour.image, ctx_r1.tour.cacheKey), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ctx_r1.tour.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.tour.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.tour.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Photos (", ctx_r1.galleryTotal, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.isWishlisted);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx_r1.isWishlisted ? "Saved in wishlist" : "Save to wishlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("fill", ctx_r1.isWishlisted ? "#ef4444" : "none")("stroke", ctx_r1.isWishlisted ? "#ef4444" : "currentColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.isWishlisted ? "Saved" : "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.shareMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("diff-" + ctx_r1.tour.difficulty.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.tour.difficulty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.tour.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.tour.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.tour.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.rating > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.views > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.tour.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("sold", ctx_r1.tour.availableSlots <= 0)("critical", ctx_r1.tour.availableSlots > 0 && ctx_r1.tour.availableSlots <= 3)("warning", ctx_r1.tour.availableSlots > 3 && ctx_r1.tour.availableSlots <= 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.availableSlots <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.availableSlots > 0 && ctx_r1.tour.availableSlots <= 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.availableSlots > 3 && ctx_r1.tour.availableSlots <= 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.availableSlots > 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.gallery == null ? null : ctx_r1.tour.gallery.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.tour.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.tour.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.tour.fitnessLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.tour.minAge, "\u2013", ctx_r1.tour.maxAge, " yrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.activeAdvisory);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.selectedSegment === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.selectedSegment === "itinerary");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.selectedSegment === "inclusions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.selectedSegment === "trail_map");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.selectedSegment === "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedSegment === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedSegment === "itinerary");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedSegment === "inclusions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedSegment === "trail_map");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedSegment === "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](161, 62, ctx_r1.tour.price, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.rating > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.tour.availableSlots > 0 ? ctx_r1.tour.availableSlots + " slots left" : "Sold out");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.availableSlots > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.availableSlots > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.availableSlots <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.tour.nextDates.length ? ctx_r1.tour.nextDates[0] : "Check availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.tour.availableSlots > 0 ? ctx_r1.tour.availableSlots + " slots currently open" : "No slots currently open");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.relatedTreks.length);
  }
}
function TourDetailsComponent_div_11_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_11_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openWhatsAppEnquiry(ctx_r1.tour));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Ask Expert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function TourDetailsComponent_div_11_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_11_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.bookTrek(ctx_r1.tour));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Book Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function TourDetailsComponent_div_11_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Sold Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function TourDetailsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 249)(1, "div", 250)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Starting from");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "/ person");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, TourDetailsComponent_div_11_button_10_Template, 2, 0, "button", 252)(11, TourDetailsComponent_div_11_button_11_Template, 2, 0, "button", 253)(12, TourDetailsComponent_div_11_span_12_Template, 2, 0, "span", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](6, 4, ctx_r1.tour.price, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.availableSlots > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.availableSlots > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour.availableSlots <= 0);
  }
}
function TourDetailsComponent_div_12_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_12_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.previousGallery());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " \u2039 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function TourDetailsComponent_div_12_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_12_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.nextGallery());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " \u203A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function TourDetailsComponent_div_12_div_15_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_12_div_15_button_3_Template_button_click_0_listener() {
      const i_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.galleryIndex = i_r39 + 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const photo_r40 = ctx.$implicit;
    const i_r39 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.galleryIndex === i_r39 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Photo " + (i_r39 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.getImageUrl(photo_r40, ctx_r1.tour.cacheKey), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", "Photo " + (i_r39 + 1));
  }
}
function TourDetailsComponent_div_12_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 273)(1, "button", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_12_div_15_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.galleryIndex = 0);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TourDetailsComponent_div_12_div_15_button_3_Template, 2, 5, "button", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r1.galleryIndex === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.getImageUrl(ctx_r1.tour.image, ctx_r1.tour.cacheKey), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.tour.gallery);
  }
}
function TourDetailsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeGallery());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_12_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 260)(3, "div", 261)(4, "span", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_div_12_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeGallery());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, TourDetailsComponent_div_12_button_11_Template, 2, 0, "button", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 267)(13, "img", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("error", function TourDetailsComponent_div_12_Template_img_error_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.target.src = "assets/placeholder-trek.jpg");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, TourDetailsComponent_div_12_button_14_Template, 2, 0, "button", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, TourDetailsComponent_div_12_div_15_Template, 4, 4, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.tour == null ? null : ctx_r1.tour.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.galleryIndex + 1, " / ", ctx_r1.galleryTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.galleryTotal > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.currentGalleryImage, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ((ctx_r1.tour == null ? null : ctx_r1.tour.name) || "Trek photo") + " " + (ctx_r1.galleryIndex + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.galleryTotal > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.tour && ctx_r1.galleryTotal > 1);
  }
}
function TourDetailsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 279)(1, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "span")(5, "span")(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Loading trek details\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function TourDetailsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 283)(1, "div", 284)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Trek Not Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "The trek you're looking for doesn't exist or may have been removed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Back to Trek List");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
class TourDetailsComponent {
  get supportPhone() {
    return this.siteSettings?.currentSettings?.supportPhone || '+91 98765 43210';
  }
  get supportPhoneRaw() {
    return this.siteSettings?.currentSettings?.supportPhoneRaw || '+919876543210';
  }
  constructor(route, router, tourDetailsService, authModal, location, publicRouteId, dropdownService, siteSettings) {
    this.route = route;
    this.router = router;
    this.tourDetailsService = tourDetailsService;
    this.authModal = authModal;
    this.location = location;
    this.publicRouteId = publicRouteId;
    this.dropdownService = dropdownService;
    this.siteSettings = siteSettings;
    this.tour = null;
    this.isLoading = true;
    this.relatedLoading = false;
    this.tourUuid = '';
    this.routeRef = '';
    this.selectedSegment = 'overview';
    this.openFaqIndex = -1;
    this.openDay = null;
    this.relatedTreks = [];
    this.trailAdvisories = [];
    this.activeAdvisory = null;
    this.galleryOpen = false;
    this.galleryIndex = 0;
    this.isWishlisted = false;
    this.baseUrl = (src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.mediaBaseUrl || '').replace(/\/?$/, '/');
    this.prepChecklist = ['Walk 4-5 km daily for at least 2 weeks before the trek', 'Stay hydrated and avoid heavy meals before ascent day', 'Carry one reusable bottle and avoid single-use plastics', 'Keep emergency contacts saved and accessible offline'];
    this.safetyPoints = [{
      title: 'Certified Trek Leads',
      detail: 'Every batch is led by trained trek captains with wilderness first-aid basics.'
    }, {
      title: 'Emergency Support',
      detail: 'Each route includes evacuation fallback points and nearest hospital mapping.'
    }, {
      title: 'Weather Monitoring',
      detail: 'Route plans are adjusted using live weather windows to reduce risk.'
    }];
    this.trekFaqs = [{
      question: 'Can beginners join this trek?',
      answer: 'Yes, if the fitness level is Easy/Moderate and you complete basic pre-trek walking practice.'
    }, {
      question: 'Will transport be arranged?',
      answer: 'Transport availability depends on the selected batch plan. Please check inclusions for your batch.'
    }, {
      question: 'What if weather conditions are unsafe?',
      answer: 'The route can be modified or postponed for safety. You will be informed in advance.'
    }, {
      question: 'How early should I reach the pickup point?',
      answer: 'Reach at least 20-30 minutes before the reporting time to avoid delays.'
    }];
    this.shareMessage = '';
    // ──────────────── Trail Elevation & GPX ────────────────
    this.elevationWaypoints = [{
      km: 0,
      elevation: 950,
      name: 'Basecamp / Forest Entry Checkpost',
      icon: 'bi bi-compass-fill',
      note: 'Permit & ID Verification'
    }, {
      km: 3.8,
      elevation: 1280,
      name: 'Shola Canopy & Fresh Water Stream',
      icon: 'bi bi-droplet-fill',
      note: 'Natural spring water refill point'
    }, {
      km: 7.2,
      elevation: 1620,
      name: 'Western Ridge Campsite / Viewpoint',
      icon: 'bi bi-flag-fill',
      note: 'Scenic cloud valley panoramic viewpoint'
    }, {
      km: 11.5,
      elevation: 1894,
      name: 'Kudremukha / Peak Summit (1,894m)',
      icon: 'bi bi-triangle-half',
      note: 'Highest summit milestone & photo point'
    }, {
      km: 22.0,
      elevation: 950,
      name: 'Basecamp Return / Certificate Issuance',
      icon: 'bi bi-check-circle-fill',
      note: 'Summit debrief & certificate handover'
    }];
    this.selectedWaypoint = this.elevationWaypoints[3];
  }
  ngOnInit() {
    this.loadTrailAdvisories();
    this.route.paramMap.subscribe(params => {
      const ref = params.get('uuid');
      if (!ref) return;
      const resolvedUuid = this.publicRouteId.resolve(ref);
      if (!resolvedUuid) return;
      this.routeRef = ref;
      this.tourUuid = resolvedUuid;
      this.isLoading = true;
      this.tour = null;
      this.loadTrekDetails();
    });
  }
  loadTrailAdvisories() {
    this.dropdownService.getTrailAdvisories().subscribe(advisories => {
      this.trailAdvisories = advisories || [];
      this.activeAdvisory = this.trailAdvisories[0] || null;
    });
  }
  loadTrekDetails() {
    this.isLoading = true;
    this.tourDetailsService.getTrekByUuid(this.tourUuid).subscribe({
      next: res => {
        if (res?.success) {
          this.mapTourData(res.data);
          this.isLoading = false;
        } else {
          this.tour = null;
          this.isLoading = false;
        }
      },
      error: () => {
        this.tour = null;
        this.isLoading = false;
      }
    });
  }
  mapTourData(result) {
    const firstBatch = result?.batch;
    this.tour = {
      id: firstBatch?.batchId,
      trekId: result.id,
      name: result.name,
      location: result.location,
      category: result.category,
      difficulty: result.difficulty,
      fitnessLevel: result.fitness_level,
      duration: firstBatch?.duration || 'N/A',
      price: firstBatch ? Number(firstBatch.price) : 0,
      rating: Number(result.rating || 0),
      reviewCount: Number(result.reviewCount || 0),
      views: Number(result.views || 0),
      cacheKey: result.updated_at || result.created_at || firstBatch?.updated_at || firstBatch?.created_at || result.id,
      image: result.cover_image,
      gallery: result.galleryImages || [],
      overview: result.description,
      highlights: result.highlights || [],
      thingsToCarry: result.thingsToCarry || [],
      importantNotes: result.importantNotes || [],
      elevationWaypoints: result.elevationWaypoints || [],
      inclusions: firstBatch?.inclusions || [],
      exclusions: firstBatch?.exclusions || [],
      itinerary: firstBatch?.itineraryDays?.map(day => ({
        day: day.day_number,
        title: day.title,
        activities: day.activities || []
      })) || [],
      nextDates: result.batches?.map(b => this.formatDate(b.start_date)) || [],
      availableSlots: Math.max(Number(firstBatch?.availableSlots || 0) - Number(firstBatch?.bookedSlots || 0), 0),
      minAge: firstBatch?.minAge || 0,
      maxAge: firstBatch?.maxAge || 0
    };
    if (Array.isArray(result.elevationWaypoints) && result.elevationWaypoints.length > 0) {
      this.elevationWaypoints = result.elevationWaypoints;
      this.selectedWaypoint = this.elevationWaypoints[Math.min(3, this.elevationWaypoints.length - 1)];
    }
    this.loadRelatedTreks();
  }
  get currentGalleryImage() {
    if (!this.tour) return '';
    const gallery = this.tour.gallery || [];
    if (this.galleryIndex === 0) return this.getImageUrl(this.tour.image, this.tour.cacheKey);
    return this.getImageUrl(gallery[this.galleryIndex - 1] || this.tour.image, this.tour.cacheKey);
  }
  get galleryTotal() {
    return (this.tour?.gallery?.length || 0) + 1;
  }
  openGallery(index = 0) {
    if (!this.tour) return;
    const total = this.galleryTotal;
    this.galleryIndex = Math.max(0, Math.min(index, total - 1));
    this.galleryOpen = true;
    document.body.classList.add('td-no-scroll');
  }
  closeGallery() {
    this.galleryOpen = false;
    document.body.classList.remove('td-no-scroll');
  }
  nextGallery() {
    if (!this.tour) return;
    const total = this.galleryTotal;
    this.galleryIndex = (this.galleryIndex + 1) % total;
  }
  previousGallery() {
    if (!this.tour) return;
    const total = this.galleryTotal;
    this.galleryIndex = (this.galleryIndex - 1 + total) % total;
  }
  handleKeyboardEvent(event) {
    if (!this.galleryOpen) return;
    if (event.key === 'Escape') {
      this.closeGallery();
    } else if (event.key === 'ArrowRight') {
      this.nextGallery();
    } else if (event.key === 'ArrowLeft') {
      this.previousGallery();
    }
  }
  toggleWishlist() {
    this.isWishlisted = !this.isWishlisted;
  }
  shareTrek() {
    var _this = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.tour) return;
      const url = window.location.href;
      const title = _this.tour.name;
      const text = `Check out ${title}`;
      // Native share: works on supported mobile browsers.
      if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
        try {
          yield navigator.share({
            title,
            text,
            url
          });
          return;
        } catch (error) {
          // User closed the native share sheet.
          if (error?.name === 'AbortError') return;
        }
      }
      // Clipboard API requires a secure context in many browsers.
      try {
        if (navigator.clipboard && window.isSecureContext) {
          yield navigator.clipboard.writeText(url);
          _this.showShareMessage('Link copied!');
          return;
        }
      } catch {
        // Use the legacy fallback below.
      }
      // Legacy copy fallback for HTTP / restricted browsers.
      try {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        textarea.style.top = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const copied = document.execCommand('copy');
        document.body.removeChild(textarea);
        if (copied) {
          _this.showShareMessage('Link copied!');
          return;
        }
      } catch {
        // Final fallback below.
      }
      window.open(url, '_blank', 'noopener,noreferrer');
    })();
  }
  showShareMessage(message) {
    this.shareMessage = message;
    window.setTimeout(() => {
      this.shareMessage = '';
    }, 2200);
  }
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }
  formatTime(timeString) {
    const [hours, minutes] = String(timeString || '').split(':');
    const hour = parseInt(hours || '0', 10);
    return `${hour % 12 || 12}:${minutes || '00'} ${hour >= 12 ? 'PM' : 'AM'}`;
  }
  getDifficultyColor(difficulty) {
    const map = {
      Easy: 'bg-success text-white',
      Moderate: 'bg-warning text-dark',
      Difficult: 'bg-danger text-white',
      Challenging: 'bg-dark text-white'
    };
    return map[difficulty] || 'bg-secondary text-white';
  }
  getImageUrl(path, cacheKey) {
    const value = String(path || '').trim();
    if (!value) return '';
    if (/^(https?:)?\/\//i.test(value) || value.startsWith('data:') || value.startsWith('blob:')) return this.appendCacheKey(value, cacheKey);
    return this.appendCacheKey(`${this.baseUrl}${value.replace(/^\/+/, '')}`, cacheKey);
  }
  appendCacheKey(url, cacheKey) {
    const key = String(cacheKey || '').trim();
    if (!key) return url;
    return url.includes('?') ? `${url}&v=${encodeURIComponent(key)}` : `${url}?v=${encodeURIComponent(key)}`;
  }
  openLoginPanel() {
    var _this2 = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.authModal.openLogin();
      } catch {}
    })();
  }
  bookTrek(tour) {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.openLoginPanel();
      return;
    }
    const bookingRef = this.routeRef || this.publicRouteId.encode(tour.id) || String(tour.id);
    this.router.navigate(['/booking', bookingRef]);
  }
  toggleFaq(index) {
    this.openFaqIndex = this.openFaqIndex === index ? -1 : index;
  }
  openWhatsAppEnquiry(tour) {
    const brand = this.siteSettings?.currentSettings?.brandName || 'goWILD Karunadu';
    const message = `Hi ${brand}, I want to know more about ${tour.name} trek. Please share batch options and preparation guidance.`;
    const num = (this.siteSettings?.currentSettings?.whatsappNumberRaw || this.supportPhoneRaw).replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(message)}`, '_blank');
  }
  loadRelatedTreks() {
    if (!this.tour) return;
    this.relatedLoading = true;
    this.tourDetailsService.getAllTreks().subscribe({
      next: res => {
        const payload = res?.data || {};
        const rows = Array.isArray(payload?.treks) ? payload.treks : Array.isArray(payload) ? payload : [];
        const currentTrekId = String(this.tour?.trekId || '').trim();
        const currentCategory = String(this.tour?.category || '').toLowerCase();
        const currentDifficulty = String(this.tour?.difficulty || '').toLowerCase();
        const currentLocation = String(this.tour?.location || '').toLowerCase();
        this.relatedTreks = rows.map(trek => this.mapRelatedTrek(trek)).filter(item => !!item && String(item.trekId) !== currentTrekId && item.availableSlots > 0).map(item => ({
          ...item,
          score: (item.category.toLowerCase() === currentCategory ? 4 : 0) + (item.difficulty.toLowerCase() === currentDifficulty ? 3 : 0) + (item.location.toLowerCase() === currentLocation ? 2 : 0) + Math.min(item.reviewCount, 5) * 0.3 + Math.min(item.rating, 5) * 0.2 + (item.availableSlots <= 5 ? 1 : 0)
        })).sort((a, b) => b.score - a.score).slice(0, 4);
        this.relatedLoading = false;
      },
      error: () => {
        this.relatedTreks = [];
        this.relatedLoading = false;
      }
    });
  }
  mapRelatedTrek(trek) {
    if (!trek) return null;
    const batches = Array.isArray(trek.batches) ? trek.batches : [];
    const primaryBatch = batches.find(batch => String(batch?.status || batch?.batch_status || '').toLowerCase() === 'active' || Number(batch?.remaining_slots ?? (batch?.available_slots ?? batch?.availableSlots ?? 0) - (batch?.booked_slots ?? batch?.bookedSlots ?? 0)) > 0) || batches[0] || null;
    const remaining = primaryBatch ? Number(primaryBatch.remaining_slots ?? (primaryBatch.available_slots ?? primaryBatch.availableSlots ?? 0) - (primaryBatch.booked_slots ?? primaryBatch.bookedSlots ?? 0)) : Number(trek.total_remaining_slots || 0);
    const batchRef = primaryBatch?.public_ref || this.publicRouteId.encode(primaryBatch?.id || '');
    const trekRef = String(trek.id || '').trim();
    const image = this.getImageUrl(trek.cover_image, trek.updated_at || trek.created_at || trek.id);
    if (!trekRef || !batchRef || !image) return null;
    return {
      id: String(batchRef),
      trekId: trekRef,
      cacheKey: trek.updated_at || trek.created_at || primaryBatch?.updated_at || primaryBatch?.created_at || trek.id,
      name: trek.name || '',
      location: trek.location || '',
      category: trek.category || '',
      difficulty: trek.difficulty || '',
      duration: primaryBatch?.duration || trek.duration || 'N/A',
      price: Number(primaryBatch?.price || trek.starting_price || 0),
      image,
      rating: Number(trek.rating || 0),
      reviewCount: Number(trek.reviews || trek.reviewCount || 0),
      availableSlots: Math.max(Number.isFinite(remaining) ? remaining : 0, 0),
      score: 0
    };
  }
  openRelatedTrek(trek) {
    if (trek?.id) this.router.navigate(['/tour-details', trek.id]);
  }
  selectWaypoint(wp) {
    this.selectedWaypoint = wp;
  }
  downloadGpxFile() {
    if (!this.tour) return;
    const trekName = this.tour.name.replace(/[^a-zA-Z0-9_-]/g, '_');
    const gpxContent = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="goWILD Karunadu - Western Ghats Trail System" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>${this.tour.name} Official GPS Trail</name>
    <desc>Verified Wilderness Trail by Karnataka Eco-Tourism &amp; goWILD Karunadu</desc>
    <author><name>goWILD Karunadu Expedition Team</name></author>
    <time>${new Date().toISOString()}</time>
  </metadata>
  <wpt lat="13.1283" lon="75.2678">
    <ele>950.0</ele>
    <name>Basecamp Checkpost</name>
    <sym>Campground</sym>
  </wpt>
  <wpt lat="13.1345" lon="75.2750">
    <ele>1280.0</ele>
    <name>Shola Stream Water Point</name>
    <sym>Water Source</sym>
  </wpt>
  <wpt lat="13.1412" lon="75.2890">
    <ele>1620.0</ele>
    <name>Ridge Saddle</name>
    <sym>Scenic Area</sym>
  </wpt>
  <wpt lat="13.1465" lon="75.2985">
    <ele>1894.0</ele>
    <name>${this.tour.name} Summit Peak</name>
    <sym>Summit</sym>
  </wpt>
  <trk>
    <name>${this.tour.name} Main Ascent</name>
    <trkseg>
      <trkpt lat="13.1283" lon="75.2678"><ele>950</ele></trkpt>
      <trkpt lat="13.1310" lon="75.2710"><ele>1100</ele></trkpt>
      <trkpt lat="13.1345" lon="75.2750"><ele>1280</ele></trkpt>
      <trkpt lat="13.1380" lon="75.2820"><ele>1450</ele></trkpt>
      <trkpt lat="13.1412" lon="75.2890"><ele>1620</ele></trkpt>
      <trkpt lat="13.1440" lon="75.2940"><ele>1760</ele></trkpt>
      <trkpt lat="13.1465" lon="75.2985"><ele>1894</ele></trkpt>
    </trkseg>
  </trk>
</gpx>`;
    const blob = new Blob([gpxContent], {
      type: 'application/gpx+xml;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${trekName}_Trail_Waypoints.gpx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
  goBack() {
    this.router.navigate(['/']);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function TourDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TourDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_tour_details__WEBPACK_IMPORTED_MODULE_9__.TourDetails), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_10__.AuthModalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_public_route_id_service__WEBPACK_IMPORTED_MODULE_12__.PublicRouteIdService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_dropdown_service__WEBPACK_IMPORTED_MODULE_13__.DropdownService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_site_settings_service__WEBPACK_IMPORTED_MODULE_14__.SiteSettingsService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: TourDetailsComponent,
    selectors: [["app-tour-details"]],
    hostBindings: function TourDetailsComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown", function TourDetailsComponent_keydown_HostBindingHandler($event) {
          return ctx.handleKeyboardEvent($event);
        }, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveWindow"]);
      }
    },
    decls: 15,
    vars: 5,
    consts: [["aria-label", "Back navigation", 1, "td-topbar"], [1, "td-topbar-inner"], ["type", "button", "aria-label", "Go back", 1, "td-back-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "aria-hidden", "true"], ["d", "M19 12H5M12 5l-7 7 7 7", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "td-topbar-title"], [1, "td-topbar-spacer"], ["class", "td-page", 4, "ngIf"], ["class", "td-mobile-booking", 4, "ngIf"], ["class", "td-lightbox", "role", "dialog", "aria-modal", "true", "aria-label", "Trek photo gallery", 3, "click", 4, "ngIf"], ["class", "td-loading", "role", "status", 4, "ngIf"], ["class", "td-error", "role", "alert", 4, "ngIf"], [1, "td-page"], [1, "td-hero"], [1, "td-hero-media"], ["loading", "eager", "fetchpriority", "high", "decoding", "async", "title", "Click to view full photo gallery", 1, "td-hero-img", 3, "error", "click", "src", "alt"], [1, "td-hero-overlay", 3, "click"], [1, "td-hero-top"], ["aria-label", "Breadcrumb", 1, "td-breadcrumb-pill"], ["type", "button", "title", "Back to Treks", 1, "td-crumb-btn", 3, "click"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "td-crumb-home"], ["d", "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"], [1, "td-crumb-sep"], [1, "td-crumb-item"], [1, "td-crumb-active"], [1, "td-hero-actions"], ["type", "button", "aria-label", "View full gallery", "title", "View Photos", 1, "td-action-pill", "td-photos-action", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "4"], ["cx", "8.5", "cy", "8.5", "r", "1.5"], ["d", "M21 15l-5-5L5 21"], ["type", "button", "aria-label", "Save trek", 1, "td-action-pill", 3, "click", "title"], ["viewBox", "0 0 24 24", "stroke-width", "2"], ["d", "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"], ["type", "button", "aria-label", "Share trek", "title", "Share trek", 1, "td-action-pill", 3, "click"], ["cx", "18", "cy", "5", "r", "2.5"], ["cx", "6", "cy", "12", "r", "2.5"], ["cx", "18", "cy", "19", "r", "2.5"], ["d", "M8.2 10.8l7.6-4.5M8.2 13.2l7.6 4.5", "stroke-linecap", "round"], ["class", "td-share-message", 4, "ngIf"], [1, "td-hero-body"], [1, "td-hero-main"], [1, "td-hero-badges"], [1, "td-badge", "td-badge-diff"], [1, "td-badge-dot"], [1, "td-badge", "td-badge-category"], [1, "td-badge", "td-badge-certified"], [1, "bi", "bi-shield-check", "me-1"], [1, "td-hero-title"], [1, "td-hero-meta"], [1, "td-meta-chip"], ["viewBox", "0 0 20 20", "fill", "currentColor"], ["fill-rule", "evenodd", "d", "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z", "clip-rule", "evenodd"], ["class", "td-meta-chip td-meta-rating", 4, "ngIf"], ["class", "td-meta-chip", 4, "ngIf"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z", "clip-rule", "evenodd"], [1, "td-hero-aside"], [1, "td-slots-card"], [1, "td-slots-pulse"], [1, "td-pulse-ring"], [1, "td-pulse-dot"], [1, "td-slots-details"], ["class", "td-slots-head", 4, "ngIf"], [1, "td-slots-sub"], ["class", "td-hero-gallery", 4, "ngIf"], ["aria-label", "Trek quick facts", 1, "td-facts-strip"], [1, "td-facts-inner"], [1, "td-fact"], [1, "td-fact-icon"], [1, "bi", "bi-clock"], [1, "td-fact-label"], [1, "td-fact-div"], [1, "bi", "bi-activity"], [1, "bi", "bi-heart-pulse"], [1, "bi", "bi-people"], [1, "td-fact", "td-fact-best-time"], [1, "bi", "bi-calendar-event"], ["class", "td-advisory-strip", 4, "ngIf"], [1, "td-main-layout"], [1, "td-main-column"], ["role", "tablist", "aria-label", "Trek information tabs", 1, "td-tab-bar"], ["role", "tab", 1, "td-tab", 3, "click"], [1, "bi", "bi-graph-up", "me-1"], ["class", "td-tab-panel", 4, "ngIf"], [1, "td-booking-card"], [1, "td-booking-card-head"], [1, "td-section-icon"], [1, "bi", "bi-calendar-check"], [1, "td-price-from"], [1, "td-price-val"], [1, "td-booking-pills"], [4, "ngIf"], ["class", "td-book-btn", "type", "button", 3, "click", 4, "ngIf"], ["class", "td-book-btn td-book-btn--ghost", "type", "button", 3, "click", 4, "ngIf"], ["class", "td-sold-out", 4, "ngIf"], [1, "td-booking-benefits"], [1, "bi", "bi-check2-circle", "text-success"], [1, "bi", "bi-chat-dots"], ["class", "td-related-wrap", 4, "ngIf"], [1, "td-share-message"], [1, "td-meta-chip", "td-meta-rating"], [1, "td-star"], [1, "bi", "bi-star-fill", "text-warning"], [1, "td-rating-num"], ["d", "M10 12a2 2 0 100-4 2 2 0 000 4z"], ["fill-rule", "evenodd", "d", "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z", "clip-rule", "evenodd"], [1, "td-slots-head"], [1, "bi", "bi-fire", "text-danger", "me-1"], [1, "bi", "bi-lightning-charge-fill", "text-warning", "me-1"], [1, "bi", "bi-check-circle-fill", "text-success", "me-1"], [1, "td-hero-gallery"], ["type", "button", "title", "Main cover", 1, "td-gallery-thumb", 3, "click"], ["loading", "lazy", 3, "src", "alt"], ["class", "td-gallery-thumb", "type", "button", 3, "title", "click", 4, "ngFor", "ngForOf"], ["class", "td-gallery-more", "type", "button", "title", "View all photos", 3, "click", 4, "ngIf"], ["type", "button", 1, "td-gallery-thumb", 3, "click", "title"], ["type", "button", "title", "View all photos", 1, "td-gallery-more", 3, "click"], [1, "td-more-num"], [1, "td-advisory-strip"], [1, "advisory-pill"], [1, "pulse-dot"], [1, "advisory-tag"], [1, "advisory-info"], ["class", "advisory-meta", 4, "ngIf"], [1, "advisory-meta"], [1, "td-tab-panel"], [1, "td-card", "td-overview-card"], [1, "td-section-title"], [1, "bi", "bi-info-circle"], [1, "td-body-text"], [1, "td-card-divider"], [1, "bi", "bi-stars"], [1, "td-highlights-list"], [4, "ngFor", "ngForOf"], ["class", "td-card-divider", 4, "ngIf"], ["class", "td-gallery-section", 4, "ngIf"], [1, "td-inc-icon", "in"], [1, "bi", "bi-check2"], [1, "td-gallery-section"], [1, "td-section-heading-row"], ["type", "button", 1, "td-view-all", 3, "click"], [1, "td-content-gallery"], ["type", "button", 1, "td-content-gallery-item", 3, "click"], ["type", "button", "class", "td-content-gallery-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "td-card"], [1, "bi", "bi-calendar3"], ["class", "td-itin-accordion", 4, "ngFor", "ngForOf"], [1, "td-itin-accordion"], ["type", "button", 1, "td-itin-toggle", 3, "click"], [1, "td-itin-day-num"], [1, "td-itin-day-title"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "td-itin-chevron"], ["d", "M4 6l4 4 4-4", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "td-itin-body"], [1, "td-timeline"], ["class", "td-tl-item", 4, "ngFor", "ngForOf"], [1, "td-tl-item"], [1, "td-tl-time"], [1, "td-tl-dot-wrap"], [1, "td-tl-dot"], ["class", "td-tl-line", 4, "ngIf"], [1, "td-tl-content"], [1, "td-tl-line"], [1, "td-section-title", "td-section-title--green"], [1, "bi", "bi-check-circle"], [1, "td-inc-list"], [1, "td-section-title", "td-section-title--red"], [1, "bi", "bi-x-circle"], [1, "bi", "bi-check-lg"], [1, "td-inc-icon", "ex"], [1, "bi", "bi-x-lg"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-bottom", "14px", "flex-wrap", "wrap", "gap", "10px"], [1, "td-section-title", 2, "margin", "0"], [1, "bi", "bi-graph-up-arrow"], ["type", "button", 2, "background", "#0f3d35", "color", "#ffffff", "border", "none", "padding", "8px 16px", "border-radius", "8px", "font-weight", "700", "font-size", "0.85rem", "cursor", "pointer", "display", "flex", "align-items", "center", "gap", "6px", 3, "click"], [1, "bi", "bi-download"], [1, "td-body-text", 2, "margin-bottom", "16px"], [2, "background", "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)", "border", "1px solid #bbf7d0", "border-radius", "12px", "padding", "16px", "position", "relative"], ["viewBox", "0 0 700 240", 2, "width", "100%", "height", "auto", "overflow", "visible"], ["id", "elevationGrad", "x1", "0", "y1", "0", "x2", "0", "y2", "1"], ["offset", "0%", "stop-color", "#22c55e", "stop-opacity", "0.45"], ["offset", "100%", "stop-color", "#15803d", "stop-opacity", "0.05"], ["x1", "50", "y1", "30", "x2", "670", "y2", "30", "stroke", "#e2e8f0", "stroke-dasharray", "4"], ["x", "15", "y", "34", "fill", "#94a3b8", "font-size", "11"], ["x1", "50", "y1", "90", "x2", "670", "y2", "90", "stroke", "#e2e8f0", "stroke-dasharray", "4"], ["x", "15", "y", "94", "fill", "#94a3b8", "font-size", "11"], ["x1", "50", "y1", "150", "x2", "670", "y2", "150", "stroke", "#e2e8f0", "stroke-dasharray", "4"], ["x", "15", "y", "154", "fill", "#94a3b8", "font-size", "11"], ["x1", "50", "y1", "210", "x2", "670", "y2", "210", "stroke", "#cbd5e1"], ["x", "15", "y", "214", "fill", "#94a3b8", "font-size", "11"], ["d", "M 60 210 L 60 200 Q 180 180 220 140 T 380 80 T 520 32 T 660 200 L 660 210 Z", "fill", "url(#elevationGrad)"], ["d", "M 60 200 Q 180 180 220 140 T 380 80 T 520 32 T 660 200", "fill", "none", "stroke", "#15803d", "stroke-width", "3.5", "stroke-linecap", "round"], [2, "cursor", "pointer", 3, "click"], ["cx", "60", "cy", "200", "r", "7", "fill", "#15803d", "stroke", "#ffffff", "stroke-width", "2"], ["x", "60", "y", "228", "text-anchor", "middle", "font-size", "10", "font-weight", "700", "fill", "#0f3d35"], ["cx", "220", "cy", "140", "r", "7", "fill", "#0284c7", "stroke", "#ffffff", "stroke-width", "2"], ["x", "220", "y", "125", "text-anchor", "middle", "font-size", "10", "font-weight", "700", "fill", "#0369a1"], ["cx", "380", "cy", "80", "r", "7", "fill", "#eab308", "stroke", "#ffffff", "stroke-width", "2"], ["x", "380", "y", "65", "text-anchor", "middle", "font-size", "10", "font-weight", "700", "fill", "#a16207"], ["cx", "520", "cy", "32", "r", "9", "fill", "#dc2626", "stroke", "#ffffff", "stroke-width", "2.5"], ["x", "520", "y", "18", "text-anchor", "middle", "font-size", "11", "font-weight", "900", "fill", "#b91c1c"], ["cx", "660", "cy", "200", "r", "7", "fill", "#15803d", "stroke", "#ffffff", "stroke-width", "2"], ["x", "660", "y", "228", "text-anchor", "middle", "font-size", "10", "font-weight", "700", "fill", "#0f3d35"], ["style", "margin-top: 16px; padding: 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; display: flex; align-items: center; gap: 14px;", 4, "ngIf"], [2, "margin-top", "16px", "padding", "14px", "background", "#f8fafc", "border", "1px solid #e2e8f0", "border-radius", "10px", "display", "flex", "align-items", "center", "gap", "14px"], [2, "font-size", "1.8rem", "color", "#15803d", "width", "44px", "height", "44px", "display", "flex", "align-items", "center", "justify-content", "center", "background", "#ecfdf5", "border-radius", "10px"], [2, "flex", "1"], [2, "font-weight", "800", "color", "#0f172a", "font-size", "1rem"], [2, "font-size", "0.85rem", "color", "#64748b", "margin-top", "2px"], [2, "font-size", "0.82rem", "color", "#15803d", "margin-top", "4px", "font-weight", "600"], [1, "bi", "bi-info-circle-fill", "me-1"], [1, "bi", "bi-backpack4"], [1, "td-simple-list"], [1, "bi", "bi-bag-check"], [1, "td-card", "td-card--alert"], [1, "td-section-title", "td-section-title--amber"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "bi", "bi-shield-check"], [1, "td-safety-grid"], [1, "bi", "bi-question-circle"], [1, "td-faq-list"], ["class", "td-faq-item", 4, "ngFor", "ngForOf"], [1, "td-inc-icon", "in", "text-warning"], [1, "bi", "bi-exclamation-circle-fill"], [1, "td-faq-item"], ["type", "button", 1, "td-faq-question", 3, "click"], ["class", "td-faq-answer", 4, "ngIf"], [1, "td-faq-answer"], [1, "bi", "bi-star-fill", "text-warning", "me-1"], ["type", "button", 1, "td-book-btn", 3, "click"], [1, "bi", "bi-ticket-perforated", "me-1"], ["type", "button", 1, "td-book-btn", "td-book-btn--ghost", 3, "click"], [1, "bi", "bi-whatsapp", "me-1"], [1, "td-sold-out"], [1, "td-related-wrap"], [1, "td-related-head"], [1, "td-related-eyebrow"], [1, "td-related-title"], [1, "td-related-grid"], ["class", "td-related-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "td-related-card", 3, "click"], [1, "td-related-image"], ["loading", "lazy", 3, "error", "src", "alt"], [1, "td-related-status"], [1, "td-related-body"], [1, "td-related-category"], [1, "td-related-meta"], [1, "bi", "bi-clock", "me-1"], ["type", "button", 1, "td-related-btn", 3, "click"], [1, "td-mobile-booking"], [1, "td-mobile-price"], [1, "td-mobile-actions"], ["type", "button", "class", "td-mobile-expert", 3, "click", 4, "ngIf"], ["type", "button", "class", "td-mobile-book", 3, "click", 4, "ngIf"], ["class", "td-mobile-sold", 4, "ngIf"], ["type", "button", 1, "td-mobile-expert", 3, "click"], ["type", "button", 1, "td-mobile-book", 3, "click"], [1, "td-mobile-sold"], ["role", "dialog", "aria-modal", "true", "aria-label", "Trek photo gallery", 1, "td-lightbox", 3, "click"], [1, "td-lightbox-modal", 3, "click"], [1, "td-lightbox-header"], [1, "td-lightbox-meta"], [1, "td-lightbox-title"], [1, "td-lightbox-counter"], ["type", "button", "aria-label", "Close gallery", "title", "Close (Esc)", 1, "td-lightbox-close", 3, "click"], [1, "td-lightbox-viewport"], ["class", "td-lightbox-nav prev", "type", "button", "aria-label", "Previous photo", "title", "Previous (Left Arrow)", 3, "click", 4, "ngIf"], [1, "td-lightbox-frame"], [1, "td-lightbox-image", 3, "error", "src", "alt"], ["class", "td-lightbox-nav next", "type", "button", "aria-label", "Next photo", "title", "Next (Right Arrow)", 3, "click", 4, "ngIf"], ["class", "td-lightbox-thumbs", 4, "ngIf"], ["type", "button", "aria-label", "Previous photo", "title", "Previous (Left Arrow)", 1, "td-lightbox-nav", "prev", 3, "click"], ["type", "button", "aria-label", "Next photo", "title", "Next (Right Arrow)", 1, "td-lightbox-nav", "next", 3, "click"], [1, "td-lightbox-thumbs"], ["type", "button", "title", "Cover Photo", 1, "td-lightbox-thumb", 3, "click"], ["alt", "Cover", 3, "src"], ["type", "button", "class", "td-lightbox-thumb", 3, "active", "title", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "td-lightbox-thumb", 3, "click", "title"], [3, "src", "alt"], ["role", "status", 1, "td-loading"], [1, "td-loading-inner"], ["src", "../../assets/assets/Bus vehicle.gif", "width", "150", "alt", "Loading"], [1, "td-loading-dots"], ["role", "alert", 1, "td-error"], [1, "td-error-inner"], ["routerLink", "/treklist"]],
    template: function TourDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TourDetailsComponent_Template_button_click_2_listener() {
          return ctx.goBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Trek Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, TourDetailsComponent_div_10_Template, 194, 65, "div", 7)(11, TourDetailsComponent_div_11_Template, 13, 7, "div", 8)(12, TourDetailsComponent_div_12_Template, 16, 8, "div", 9)(13, TourDetailsComponent_div_13_Template, 9, 0, "div", 10)(14, TourDetailsComponent_div_14_Template, 8, 0, "div", 11);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.tour && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.tour && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.galleryOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.tour);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHrefDelegate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_1__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: ["@import url(https://fonts.googleapis.com/css2?family=Barlow:wght@300;400[_ngcontent-%COMP%];500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700&family=Barlow[_ngcontent-%COMP%] + Condensed[_ngcontent-%COMP%]:wght@500;600[_ngcontent-%COMP%];700&family=Playfair[_ngcontent-%COMP%] + Display[_ngcontent-%COMP%]:wght@600;700&display=swap)[_ngcontent-%COMP%];[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background: #f6f2ec;\n  color: #1d2b18;\n  font-family: \"Barlow\", sans-serif;\n}\n\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.td-no-scroll[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.td-topbar[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.td-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\n\n\n.td-hero[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 520px;\n  height: clamp(520px, 60vh, 660px);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  color: #ffffff;\n  background-color: #08150c;\n  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.3);\n}\n\n.td-hero-media[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.td-hero-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 36%;\n  cursor: pointer;\n  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;\n}\n\n.td-hero[_ngcontent-%COMP%]:hover   .td-hero-img[_ngcontent-%COMP%] {\n  transform: scale(1.035);\n}\n\n.td-hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  cursor: pointer;\n  background: linear-gradient(180deg, rgba(6, 16, 10, 0.72) 0%, rgba(6, 16, 10, 0.18) 28%, rgba(5, 14, 8, 0.45) 60%, rgba(4, 12, 7, 0.94) 100%), radial-gradient(circle at 85% 15%, rgba(34, 197, 94, 0.12), transparent 55%);\n  transition: background 0.4s ease;\n}\n\n\n\n.td-hero-top[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 26px clamp(20px, 4.5vw, 64px);\n  gap: 16px;\n}\n\n.td-breadcrumb-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(10, 22, 14, 0.62);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 999px;\n  padding: 6px 16px;\n  font: 500 13px \"Barlow\", sans-serif;\n  color: rgba(255, 255, 255, 0.85);\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);\n  max-width: calc(100% - 240px);\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.td-crumb-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: 0;\n  background: none;\n  color: inherit;\n  padding: 0;\n  cursor: pointer;\n  font: inherit;\n  transition: color 0.2s ease;\n}\n.td-crumb-btn[_ngcontent-%COMP%]:hover {\n  color: #4ade80;\n}\n\n.td-crumb-home[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  color: #4ade80;\n}\n\n.td-crumb-sep[_ngcontent-%COMP%] {\n  color: rgba(74, 222, 128, 0.75);\n  font-weight: 700;\n  font-size: 13px;\n  line-height: 1;\n}\n\n.td-crumb-item[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.82);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.td-crumb-active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: 700;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 240px;\n}\n\n.td-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.td-action-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: rgba(10, 22, 14, 0.62);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 999px;\n  padding: 7px 16px;\n  color: #ffffff;\n  font: 600 13px \"Barlow\", sans-serif;\n  cursor: pointer;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.td-action-pill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  transition: transform 0.2s ease;\n}\n.td-action-pill[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.35);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);\n}\n.td-action-pill[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.td-action-pill.active[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  border-color: rgba(239, 68, 68, 0.4);\n  color: #fca5a5;\n}\n\n.td-photos-action[_ngcontent-%COMP%] {\n  border-color: rgba(74, 222, 128, 0.35);\n  background: rgba(12, 32, 18, 0.7);\n}\n.td-photos-action[_ngcontent-%COMP%]:hover {\n  background: rgba(21, 56, 30, 0.9);\n  border-color: rgba(74, 222, 128, 0.6);\n}\n\n.td-share-message[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 76px;\n  right: clamp(20px, 4.5vw, 64px);\n  z-index: 5;\n  padding: 8px 14px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.98);\n  color: #14532d;\n  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.3);\n  font: 600 12px \"Barlow\", sans-serif;\n  white-space: nowrap;\n  animation: _ngcontent-%COMP%_tdShareIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  border: 1px solid #bbf7d0;\n}\n\n@keyframes _ngcontent-%COMP%_tdShareIn {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n\n.td-hero-body[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 36px;\n  align-items: flex-end;\n  padding: 0 clamp(20px, 4.5vw, 64px) 34px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.td-hero-main[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n\n\n.td-hero-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 9px;\n  margin-bottom: 14px;\n}\n\n.td-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 999px;\n  font: 700 11px/1 \"Barlow Condensed\", sans-serif;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);\n}\n\n.td-badge-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n  box-shadow: 0 0 6px currentColor;\n}\n\n.td-badge-diff[_ngcontent-%COMP%] {\n  background: rgba(22, 101, 52, 0.88);\n  border: 1px solid rgba(74, 222, 128, 0.45);\n  color: #bbf7d0;\n}\n.td-badge-diff.diff-moderate[_ngcontent-%COMP%] {\n  background: rgba(30, 95, 48, 0.88);\n  border-color: rgba(134, 239, 172, 0.45);\n  color: #dcfce7;\n}\n.td-badge-diff.diff-difficult[_ngcontent-%COMP%], .td-badge-diff.diff-challenging[_ngcontent-%COMP%], .td-badge-diff.diff-hard[_ngcontent-%COMP%] {\n  background: rgba(153, 27, 27, 0.88);\n  border-color: rgba(248, 113, 113, 0.45);\n  color: #fee2e2;\n}\n\n.td-badge-category[_ngcontent-%COMP%] {\n  background: rgba(15, 25, 18, 0.65);\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  color: #f3f4f6;\n}\n\n.td-badge-certified[_ngcontent-%COMP%] {\n  background: rgba(4, 120, 87, 0.45);\n  border: 1px solid rgba(52, 211, 153, 0.35);\n  color: #6ee7b7;\n}\n\n\n\n.td-hero-title[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font: 800 clamp(34px, 4.6vw, 62px)/1.05 \"Playfair Display\", Georgia, serif;\n  letter-spacing: -0.025em;\n  color: #ffffff;\n  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.7), 0 2px 6px rgba(0, 0, 0, 0.85);\n  max-width: 900px;\n}\n\n\n\n.td-hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.td-meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 6px 14px;\n  border-radius: 999px;\n  background: rgba(10, 24, 15, 0.58);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  color: rgba(255, 255, 255, 0.92);\n  font: 500 13px \"Barlow\", sans-serif;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);\n  transition: all 0.2s ease;\n}\n.td-meta-chip[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  flex-shrink: 0;\n  color: #4ade80;\n}\n.td-meta-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(15, 35, 22, 0.75);\n  border-color: rgba(255, 255, 255, 0.28);\n  transform: translateY(-1px);\n}\n\n.td-meta-rating[_ngcontent-%COMP%]   .td-star[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  font-size: 14px;\n}\n.td-meta-rating[_ngcontent-%COMP%]   .td-rating-num[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #ffffff;\n}\n.td-meta-rating[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 11px;\n  margin-left: 2px;\n}\n\n\n\n.td-hero-aside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 14px;\n  flex-shrink: 0;\n}\n\n\n\n.td-slots-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  padding: 11px 18px;\n  border-radius: 16px;\n  background: rgba(10, 28, 16, 0.78);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(74, 222, 128, 0.32);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n  transition: all 0.3s ease;\n}\n.td-slots-card.warning[_ngcontent-%COMP%] {\n  background: rgba(50, 30, 8, 0.85);\n  border-color: rgba(245, 158, 11, 0.45);\n}\n.td-slots-card.warning[_ngcontent-%COMP%]   .td-pulse-ring[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.td-slots-card.warning[_ngcontent-%COMP%]   .td-pulse-dot[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  box-shadow: 0 0 10px #f59e0b;\n}\n.td-slots-card.critical[_ngcontent-%COMP%] {\n  background: rgba(60, 16, 16, 0.88);\n  border-color: rgba(239, 68, 68, 0.45);\n}\n.td-slots-card.critical[_ngcontent-%COMP%]   .td-pulse-ring[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.td-slots-card.critical[_ngcontent-%COMP%]   .td-pulse-dot[_ngcontent-%COMP%] {\n  background: #ef4444;\n  box-shadow: 0 0 10px #ef4444;\n}\n.td-slots-card.sold[_ngcontent-%COMP%] {\n  background: rgba(28, 28, 28, 0.88);\n  border-color: rgba(148, 163, 184, 0.3);\n}\n.td-slots-card.sold[_ngcontent-%COMP%]   .td-pulse-ring[_ngcontent-%COMP%] {\n  display: none;\n}\n.td-slots-card.sold[_ngcontent-%COMP%]   .td-pulse-dot[_ngcontent-%COMP%] {\n  background: #94a3b8;\n  box-shadow: none;\n}\n\n.td-slots-pulse[_ngcontent-%COMP%] {\n  position: relative;\n  width: 14px;\n  height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.td-pulse-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -4px;\n  border-radius: 50%;\n  background: #22c55e;\n  opacity: 0.5;\n  animation: _ngcontent-%COMP%_tdPulsePing 2s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n\n.td-pulse-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #22c55e;\n  box-shadow: 0 0 10px #22c55e;\n}\n\n@keyframes _ngcontent-%COMP%_tdPulsePing {\n  75%, 100% {\n    transform: scale(2.4);\n    opacity: 0;\n  }\n}\n.td-slots-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.td-slots-head[_ngcontent-%COMP%] {\n  font: 700 13px \"Barlow Condensed\", sans-serif;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: #ffffff;\n  line-height: 1.15;\n}\n\n.td-slots-sub[_ngcontent-%COMP%] {\n  font: 500 11px \"Barlow\", sans-serif;\n  color: rgba(255, 255, 255, 0.72);\n  margin-top: 2px;\n}\n\n\n\n.td-hero-gallery[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(0, 0, 0, 0.42);\n  padding: 6px;\n  border-radius: 14px;\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  backdrop-filter: blur(14px);\n  -webkit-backdrop-filter: blur(14px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);\n}\n\n.td-gallery-thumb[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 52px;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1.5px solid rgba(255, 255, 255, 0.32);\n  background: #000;\n  padding: 0;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.td-gallery-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.td-gallery-thumb[_ngcontent-%COMP%]:hover {\n  border-color: #4ade80;\n  transform: translateY(-2px) scale(1.05);\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);\n}\n.td-gallery-thumb[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.12);\n}\n\n.td-gallery-more[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 52px;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1.5px solid rgba(255, 255, 255, 0.28);\n  background: rgba(14, 30, 20, 0.88);\n  color: #ffffff;\n  padding: 0;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.25s ease;\n}\n.td-gallery-more[_ngcontent-%COMP%]   .td-more-num[_ngcontent-%COMP%] {\n  font: 800 14px \"Barlow\", sans-serif;\n  color: #4ade80;\n  line-height: 1;\n}\n.td-gallery-more[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font: 600 10px \"Barlow Condensed\", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: rgba(255, 255, 255, 0.8);\n  margin-top: 2px;\n}\n.td-gallery-more[_ngcontent-%COMP%]:hover {\n  background: rgba(22, 54, 32, 0.95);\n  border-color: #4ade80;\n  transform: translateY(-2px) scale(1.05);\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);\n}\n\n\n\n.td-facts-strip[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom: 1px solid #e4ddd2;\n  box-shadow: 0 2px 10px rgba(40, 60, 30, 0.05);\n}\n\n\n\n.td-advisory-strip[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 16px auto 0;\n  padding: 12px 20px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-left: 4px solid #16a34a;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.08);\n}\n.td-advisory-strip[_ngcontent-%COMP%]   .advisory-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #dcfce7;\n  border: 1px solid #86efac;\n  padding: 4px 12px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.td-advisory-strip[_ngcontent-%COMP%]   .advisory-pill[_ngcontent-%COMP%]   .pulse-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #16a34a;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.3);\n  animation: _ngcontent-%COMP%_pulse 1.8s infinite;\n}\n.td-advisory-strip[_ngcontent-%COMP%]   .advisory-pill[_ngcontent-%COMP%]   .advisory-tag[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: #15803d;\n}\n.td-advisory-strip[_ngcontent-%COMP%]   .advisory-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.td-advisory-strip[_ngcontent-%COMP%]   .advisory-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.88rem;\n  color: #0f172a;\n  font-weight: 700;\n  margin-bottom: 2px;\n}\n.td-advisory-strip[_ngcontent-%COMP%]   .advisory-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  color: #334155;\n  line-height: 1.35;\n}\n.td-advisory-strip[_ngcontent-%COMP%]   .advisory-meta[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #64748b;\n  white-space: nowrap;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.5);\n  }\n  70% {\n    box-shadow: 0 0 0 6px rgba(22, 163, 74, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(22, 163, 74, 0);\n  }\n}\n.td-facts-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: auto;\n  min-height: 86px;\n  display: flex;\n  align-items: stretch;\n}\n\n.td-fact[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 11px;\n  padding: 17px 18px;\n}\n\n.td-fact-icon[_ngcontent-%COMP%] {\n  color: #6d9b5d;\n  font-size: 26px;\n  line-height: 1;\n}\n\n.td-fact-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 3px;\n  font: 700 10px \"Barlow Condensed\";\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #8a9b7d;\n}\n\n.td-fact[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #25301f;\n  white-space: nowrap;\n}\n\n.td-fact-div[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 54px;\n  align-self: center;\n  background: #e5ded4;\n}\n\n\n\n.td-main-layout[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 0 65px;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 340px;\n  gap: 24px;\n}\n\n.td-main-column[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.td-tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  padding: 11px 0 9px;\n  border-bottom: 1px solid #ded7cc;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: #f6f2ec;\n}\n\n.td-tab[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 42px;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  background: transparent;\n  color: #829276;\n  font: 700 12px \"Barlow Condensed\";\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.td-tab[_ngcontent-%COMP%]:hover {\n  background: #eee9e1;\n  color: #2d4a22;\n}\n\n.td-tab.active[_ngcontent-%COMP%] {\n  background: #e8e6df;\n  border-color: #c9c9bf;\n  color: #294623;\n}\n\n.td-tab-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-top: 12px;\n  animation: _ngcontent-%COMP%_tdIn 0.25s ease;\n}\n\n@keyframes _ngcontent-%COMP%_tdIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.td-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5ddd1;\n  border-radius: 14px;\n  padding: 18px 18px;\n  box-shadow: 0 3px 12px rgba(53, 73, 40, 0.045);\n}\n\n.td-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin: 0 0 16px;\n  color: #74856b;\n  font: 700 12px \"Barlow Condensed\";\n  letter-spacing: 0.11em;\n  text-transform: uppercase;\n}\n\n.td-section-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 1;\n  height: 1px;\n  background: #e7dfd3;\n}\n\n.td-section-icon[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  border-radius: 7px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: #edf2ea;\n  color: #3d6333;\n  font: 700 14px \"Barlow\";\n}\n\n.td-section-title--green[_ngcontent-%COMP%] {\n  color: #3d6333;\n}\n\n.td-section-title--red[_ngcontent-%COMP%] {\n  color: #a5483c;\n}\n\n.td-section-title--amber[_ngcontent-%COMP%] {\n  color: #b87918;\n}\n\n.td-body-text[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #5e7054;\n  font-size: 14px;\n  line-height: 1.8;\n}\n\n.td-card-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #e9e1d7;\n  margin: 21px 0;\n}\n\n.td-highlights-list[_ngcontent-%COMP%], \n.td-inc-list[_ngcontent-%COMP%], \n.td-simple-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.td-highlights-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n\n.td-highlights-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  padding: 9px 11px;\n  border: 1px solid #e7e1d7;\n  border-radius: 9px;\n  background: #f8f5f0;\n  color: #5d6f54;\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n.td-highlights-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #5b8c50;\n  font-weight: 700;\n}\n\n.td-section-heading-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.td-section-heading-row[_ngcontent-%COMP%]   .td-section-title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.td-view-all[_ngcontent-%COMP%] {\n  border: 1px solid #b8c5b1;\n  background: #fff;\n  color: #36562e;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font: 700 11px \"Barlow Condensed\";\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.td-view-all[_ngcontent-%COMP%]:hover {\n  background: #f1f5ef;\n}\n\n.td-content-gallery[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n}\n\n.td-content-gallery-item[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n  aspect-ratio: 1.25;\n  border-radius: 9px;\n  overflow: hidden;\n  background: #e8e1d7;\n  cursor: pointer;\n}\n\n.td-content-gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n\n.td-content-gallery-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n\n\n\n.td-booking-card[_ngcontent-%COMP%] {\n  align-self: start;\n  position: sticky;\n  top: 18px;\n  margin-top: 12px;\n  padding: 20px;\n  background: #fff;\n  border: 1px solid #e1d9cd;\n  border-radius: 16px;\n  box-shadow: 0 8px 26px rgba(40, 61, 34, 0.1);\n}\n\n.td-booking-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin-bottom: 22px;\n  color: #36552e;\n  font: 700 13px \"Barlow Condensed\";\n  letter-spacing: 0.11em;\n  text-transform: uppercase;\n}\n\n.td-price-from[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 2px;\n  color: #87967d;\n  font: 700 10px \"Barlow Condensed\";\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.td-price-val[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  color: #1e2c1a;\n  font: 700 33px \"Playfair Display\";\n}\n\n.td-price-val[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #8a987f;\n  font: 400 12px \"Barlow\";\n}\n\n.td-booking-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n  flex-wrap: wrap;\n  margin-bottom: 18px;\n}\n\n.td-booking-pills[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 7px 9px;\n  border-radius: 999px;\n  background: #f4f0e9;\n  border: 1px solid #e3dbd0;\n  color: #3b5735;\n  font-size: 11px;\n}\n\n.td-booking-pills[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #374d31;\n}\n\n.td-book-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 48px;\n  margin-top: 9px;\n  border: 0;\n  border-radius: 11px;\n  background: #295523;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font: 700 13px \"Barlow Condensed\";\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  cursor: pointer;\n  box-shadow: 0 5px 14px rgba(41, 85, 35, 0.2);\n  transition: 0.2s;\n}\n\n.td-book-btn[_ngcontent-%COMP%]:hover {\n  background: #376d2f;\n  transform: translateY(-1px);\n}\n\n.td-book-btn--ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #2f5229;\n  border: 1px solid #b8c5b1;\n  box-shadow: none;\n}\n\n.td-book-btn--ghost[_ngcontent-%COMP%]:hover {\n  background: #f2f6f0;\n}\n\n.td-sold-out[_ngcontent-%COMP%] {\n  margin-top: 9px;\n  padding: 13px;\n  border-radius: 10px;\n  text-align: center;\n  color: #a33d32;\n  background: #fff1ef;\n  border: 1px solid #efcfca;\n  font: 700 12px \"Barlow Condensed\";\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.td-booking-benefits[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid #e8e0d6;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.td-booking-benefits[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 22px 1fr;\n  gap: 8px;\n  color: #65765d;\n  font-size: 12px;\n}\n\n.td-booking-benefits[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  color: #5e8b51;\n  font-size: 16px;\n}\n\n.td-booking-benefits[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2px;\n  color: #293e24;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n\n\n.td-itin-accordion[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e6ded3;\n}\n\n.td-itin-accordion[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n.td-itin-toggle[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 0;\n  border: 0;\n  background: none;\n  text-align: left;\n  cursor: pointer;\n}\n\n.td-itin-day-num[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 31px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: #315b29;\n  color: #fff;\n  font: 700 12px \"Barlow Condensed\";\n  flex-shrink: 0;\n}\n\n.td-itin-toggle.open[_ngcontent-%COMP%]   .td-itin-day-num[_ngcontent-%COMP%] {\n  background: #d38a22;\n}\n\n.td-itin-day-title[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #26351f;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.td-itin-chevron[_ngcontent-%COMP%] {\n  width: 15px;\n  color: #83917b;\n  transition: transform 0.25s;\n}\n\n.td-itin-toggle.open[_ngcontent-%COMP%]   .td-itin-chevron[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.td-itin-body[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  opacity: 0;\n  transition: max-height 0.35s ease, opacity 0.2s;\n}\n\n.td-itin-body.open[_ngcontent-%COMP%] {\n  max-height: 1200px;\n  opacity: 1;\n}\n\n.td-timeline[_ngcontent-%COMP%] {\n  padding: 2px 0 16px;\n}\n\n.td-tl-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 70px 16px 1fr;\n  gap: 11px;\n}\n\n.td-tl-time[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #87957d;\n  font: 600 11px \"Barlow Condensed\";\n  padding-top: 3px;\n}\n\n.td-tl-dot-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.td-tl-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #6f9b62;\n  box-shadow: 0 0 0 2px #dce8d8;\n  margin-top: 3px;\n}\n\n.td-tl-line[_ngcontent-%COMP%] {\n  width: 1px;\n  flex: 1;\n  background: #dce3d8;\n  margin: 5px 0;\n}\n\n.td-tl-content[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  color: #5d7055;\n  font-size: 13px;\n  line-height: 1.55;\n}\n\n\n\n.td-inc-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0 28px;\n}\n\n.td-inc-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.td-simple-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  padding: 10px 0;\n  border-bottom: 1px solid #e9e2d8;\n  color: #5e7056;\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n.td-inc-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-weight: 700;\n}\n\n.td-inc-icon.in[_ngcontent-%COMP%] {\n  background: #eaf2e8;\n  color: #47743c;\n}\n\n.td-inc-icon.ex[_ngcontent-%COMP%] {\n  background: #f9e9e7;\n  color: #a7473c;\n}\n\n.td-simple-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  flex-shrink: 0;\n}\n\n.td-card--alert[_ngcontent-%COMP%] {\n  background: #fffaf1;\n  border-color: #eddcb9;\n}\n\n.td-safety-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n\n.td-safety-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  padding: 14px;\n  border: 1px solid #e6dfd4;\n  border-radius: 11px;\n  background: #fbfaf6;\n}\n\n.td-safety-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 14px;\n  color: #35552e;\n}\n\n.td-safety-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #66765d;\n  font-size: 12px;\n  line-height: 1.55;\n}\n\n.td-faq-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.td-faq-item[_ngcontent-%COMP%] {\n  border: 1px solid #e5ddd2;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.td-faq-question[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px 14px;\n  border: 0;\n  background: #f8f4ee;\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  text-align: left;\n  color: #26371f;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.td-faq-answer[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 12px 14px;\n  color: #65745d;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n\n\n.td-related-wrap[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 0 80px;\n}\n\n.td-related-eyebrow[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  color: #849379;\n  font: 700 10px \"Barlow Condensed\";\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n}\n\n.td-related-title[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  color: #24351e;\n  font: 700 clamp(24px, 3vw, 31px) \"Playfair Display\";\n}\n\n.td-related-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n\n.td-related-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e4dcd0;\n  border-radius: 13px;\n  overflow: hidden;\n  box-shadow: 0 3px 12px rgba(48, 69, 40, 0.05);\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n\n.td-related-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(48, 69, 40, 0.1);\n}\n\n.td-related-image[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1.25;\n  overflow: hidden;\n}\n\n.td-related-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.35s;\n}\n\n.td-related-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n\n.td-related-status[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 5px 8px;\n  border-radius: 999px;\n  background: rgba(42, 91, 36, 0.9);\n  color: #fff;\n  font: 700 10px \"Barlow Condensed\";\n  letter-spacing: 0.05em;\n}\n\n.td-related-body[_ngcontent-%COMP%] {\n  padding: 13px;\n}\n\n.td-related-category[_ngcontent-%COMP%] {\n  color: #e28e23;\n  font: 700 9px \"Barlow Condensed\";\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n\n.td-related-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 5px 0 3px;\n  color: #26371f;\n  font: 700 18px \"Barlow Condensed\";\n}\n\n.td-related-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: #76836e;\n  font-size: 12px;\n}\n\n.td-related-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  align-items: center;\n  color: #35552d;\n  font-size: 11px;\n}\n\n.td-related-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.td-related-btn[_ngcontent-%COMP%] {\n  width: calc(100% - 26px);\n  margin: 0 13px 13px;\n  padding: 9px;\n  border: 1px solid #bac8b4;\n  border-radius: 9px;\n  background: #fff;\n  color: #35552d;\n  font: 700 10px \"Barlow Condensed\";\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n\n\n.td-lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 100000;\n  background: rgba(3, 8, 5, 0.95);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  animation: _ngcontent-%COMP%_lightboxFadeIn 0.2s ease-out;\n}\n\n.td-lightbox-modal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  max-width: 1300px;\n  max-height: 96vh;\n  position: relative;\n}\n\n.td-lightbox-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 12px;\n  color: #fff;\n  z-index: 2;\n  flex-shrink: 0;\n}\n.td-lightbox-header[_ngcontent-%COMP%]   .td-lightbox-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.td-lightbox-header[_ngcontent-%COMP%]   .td-lightbox-meta[_ngcontent-%COMP%]   .td-lightbox-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.1rem;\n  color: #ffffff;\n  letter-spacing: -0.01em;\n}\n.td-lightbox-header[_ngcontent-%COMP%]   .td-lightbox-meta[_ngcontent-%COMP%]   .td-lightbox-counter[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 800;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  padding: 3px 10px;\n  border-radius: 999px;\n  color: #34d399;\n}\n.td-lightbox-header[_ngcontent-%COMP%]   .td-lightbox-close[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  background: rgba(255, 255, 255, 0.12);\n  color: #ffffff;\n  display: grid;\n  place-items: center;\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.td-lightbox-header[_ngcontent-%COMP%]   .td-lightbox-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: scale(1.08);\n}\n\n.td-lightbox-viewport[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  min-height: 0;\n  overflow: hidden;\n  padding: 10px 0;\n}\n\n.td-lightbox-frame[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.td-lightbox-image[_ngcontent-%COMP%] {\n  max-width: min(92vw, 1200px);\n  max-height: calc(96vh - 160px);\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  border-radius: 10px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);\n  animation: modalPop 0.2s ease-out;\n}\n\n.td-lightbox-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  background: rgba(255, 255, 255, 0.14);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  color: #ffffff;\n  display: grid;\n  place-items: center;\n  font-size: 34px;\n  line-height: 1;\n  cursor: pointer;\n  z-index: 5;\n  transition: all 0.2s ease;\n}\n.td-lightbox-nav[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-50%) scale(1.08);\n}\n.td-lightbox-nav.prev[_ngcontent-%COMP%] {\n  left: 12px;\n}\n.td-lightbox-nav.next[_ngcontent-%COMP%] {\n  right: 12px;\n}\n\n.td-lightbox-thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  align-items: center;\n  overflow-x: auto;\n  padding: 10px 0 4px;\n  flex-shrink: 0;\n  max-width: 100%;\n}\n.td-lightbox-thumbs[_ngcontent-%COMP%]   .td-lightbox-thumb[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 42px;\n  border-radius: 6px;\n  overflow: hidden;\n  padding: 0;\n  border: 2px solid transparent;\n  background: #000;\n  opacity: 0.55;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n}\n.td-lightbox-thumbs[_ngcontent-%COMP%]   .td-lightbox-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.td-lightbox-thumbs[_ngcontent-%COMP%]   .td-lightbox-thumb[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n  transform: translateY(-2px);\n}\n.td-lightbox-thumbs[_ngcontent-%COMP%]   .td-lightbox-thumb.active[_ngcontent-%COMP%] {\n  border-color: #34d399;\n  opacity: 1;\n  transform: scale(1.08);\n  box-shadow: 0 0 10px rgba(52, 211, 153, 0.5);\n}\n\n@keyframes _ngcontent-%COMP%_lightboxFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n\n.td-mobile-booking[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n.td-loading[_ngcontent-%COMP%] {\n  min-height: 70vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.td-loading-inner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.td-loading-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 6px;\n  margin: 12px;\n}\n\n.td-loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #6d985f;\n  animation: _ngcontent-%COMP%_tdPulse 1.2s infinite;\n}\n\n.td-loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n\n.td-loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n\n@keyframes _ngcontent-%COMP%_tdPulse {\n  50% {\n    opacity: 0.25;\n    transform: scale(0.7);\n  }\n}\n.td-loading-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #809078;\n  font-size: 13px;\n}\n\n.td-error[_ngcontent-%COMP%] {\n  min-height: 70vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.td-error-inner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 700 26px \"Playfair Display\";\n  margin: 0 0 8px;\n}\n\n.td-error-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #75836e;\n}\n\n.td-error-inner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 10px;\n  padding: 10px 16px;\n  border-radius: 9px;\n  background: #2d5527;\n  color: #fff;\n  text-decoration: none;\n  font: 700 12px \"Barlow Condensed\";\n}\n\n\n\n@media (max-width: 1199px) {\n  .td-main-layout[_ngcontent-%COMP%], \n   .td-related-wrap[_ngcontent-%COMP%] {\n    max-width: calc(100% - 40px);\n  }\n  .td-main-layout[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) 300px;\n    gap: 20px;\n  }\n  .td-hero-top[_ngcontent-%COMP%] {\n    padding: 20px 28px;\n  }\n  .td-hero-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n    padding: 0 28px 28px;\n  }\n  .td-hero-aside[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n  .td-facts-inner[_ngcontent-%COMP%] {\n    max-width: 900px;\n  }\n}\n@media (max-width: 900px) {\n  .td-main-layout[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .td-booking-card[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .td-tab-bar[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 0;\n  }\n  .td-related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .td-related-wrap[_ngcontent-%COMP%] {\n    padding-bottom: 110px;\n  }\n  .td-hero[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 520px;\n  }\n  .td-hero-aside[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n  .td-fact-best-time[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .td-facts-inner[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .td-fact[_ngcontent-%COMP%] {\n    min-width: 150px;\n  }\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%] {\n    padding-bottom: 78px;\n  }\n  .td-topbar[_ngcontent-%COMP%] {\n    display: block;\n    height: 52px;\n    background: #294623;\n    color: #fff;\n  }\n  .td-topbar-inner[_ngcontent-%COMP%] {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 14px;\n  }\n  .td-topbar-title[_ngcontent-%COMP%] {\n    font: 700 13px \"Barlow Condensed\";\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    opacity: 0.8;\n  }\n  .td-topbar-spacer[_ngcontent-%COMP%] {\n    width: 64px;\n  }\n  .td-back-btn[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    padding: 7px 9px;\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    border-radius: 8px;\n    background: none;\n    color: #fff;\n    font: 600 12px \"Barlow Condensed\";\n    text-transform: uppercase;\n  }\n  .td-back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 15px;\n    height: 15px;\n  }\n  .td-hero[_ngcontent-%COMP%] {\n    min-height: 520px;\n    height: auto;\n  }\n  .td-hero-top[_ngcontent-%COMP%] {\n    padding: 16px 14px;\n    gap: 10px;\n  }\n  .td-breadcrumb-pill[_ngcontent-%COMP%] {\n    max-width: 100%;\n    font-size: 11px;\n    padding: 5px 12px;\n  }\n  .td-crumb-active[_ngcontent-%COMP%] {\n    max-width: 120px;\n  }\n  .td-action-pill[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 11px;\n  }\n  .td-hero-body[_ngcontent-%COMP%] {\n    padding: 0 14px 24px;\n    gap: 18px;\n  }\n  .td-hero-title[_ngcontent-%COMP%] {\n    font-size: clamp(28px, 8.2vw, 38px);\n    margin-bottom: 12px;\n  }\n  .td-hero-aside[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 10px;\n  }\n  .td-slots-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .td-hero-gallery[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: auto;\n    justify-content: flex-start;\n    scrollbar-width: none;\n  }\n  .td-hero-gallery[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .td-gallery-thumb[_ngcontent-%COMP%] {\n    flex: 0 0 82px;\n    width: 82px;\n    height: 58px;\n  }\n  .td-gallery-more[_ngcontent-%COMP%] {\n    flex: 0 0 82px;\n    width: 82px;\n    height: 58px;\n  }\n  .td-gallery-more[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .td-facts-inner[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    overflow: visible;\n  }\n  .td-fact[_ngcontent-%COMP%] {\n    min-width: 0;\n    padding: 13px 14px;\n    justify-content: flex-start;\n  }\n  .td-fact-div[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .td-fact-icon[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .td-fact-label[_ngcontent-%COMP%] {\n    font-size: 9px;\n  }\n  .td-fact[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .td-fact-best-time[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    border-top: 1px solid #e5ded4;\n    justify-content: center;\n  }\n  .td-main-layout[_ngcontent-%COMP%], \n   .td-related-wrap[_ngcontent-%COMP%] {\n    max-width: none;\n    margin: 0;\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n  .td-main-layout[_ngcontent-%COMP%] {\n    padding-bottom: 95px;\n  }\n  .td-tab-bar[_ngcontent-%COMP%] {\n    padding: 10px 0 9px;\n    overflow-x: auto;\n  }\n  .td-tab[_ngcontent-%COMP%] {\n    min-width: 82px;\n    font-size: 10px;\n    padding: 8px 10px;\n  }\n  .td-card[_ngcontent-%COMP%] {\n    padding: 17px 14px;\n    border-radius: 13px;\n  }\n  .td-tab-panel[_ngcontent-%COMP%] {\n    padding-top: 14px;\n    gap: 12px;\n  }\n  .td-body-text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    text-align: left;\n  }\n  .td-section-title[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .td-content-gallery[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .td-section-heading-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 0;\n  }\n  .td-view-all[_ngcontent-%COMP%] {\n    margin: -7px 0 10px;\n  }\n  .td-inc-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .td-safety-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .td-related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .td-related-title[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  .td-related-wrap[_ngcontent-%COMP%] {\n    padding-bottom: 100px;\n  }\n  .td-mobile-booking[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 200;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 10px;\n    padding: 10px 12px calc(10px + env(safe-area-inset-bottom));\n    background: #fff;\n    border-top: 1px solid #ded7cc;\n    box-shadow: 0 -8px 25px rgba(31, 51, 27, 0.12);\n  }\n  .td-mobile-price[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .td-mobile-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    color: #87957e;\n    font: 700 9px \"Barlow Condensed\";\n    letter-spacing: 0.08em;\n    text-transform: uppercase;\n  }\n  .td-mobile-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font: 700 23px \"Playfair Display\";\n    color: #1e2c19;\n  }\n  .td-mobile-price[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    color: #8b9883;\n    font-size: 10px;\n  }\n  .td-mobile-actions[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 7px;\n  }\n  .td-mobile-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-height: 44px;\n    padding: 0 13px;\n    border-radius: 9px;\n    font: 700 11px \"Barlow Condensed\";\n    letter-spacing: 0.05em;\n    text-transform: uppercase;\n  }\n  .td-mobile-expert[_ngcontent-%COMP%] {\n    background: #fff;\n    border: 1px solid #b9c7b4;\n    color: #31552c;\n  }\n  .td-mobile-book[_ngcontent-%COMP%] {\n    background: #2c5726;\n    border: 1px solid #2c5726;\n    color: #fff;\n  }\n  .td-mobile-sold[_ngcontent-%COMP%] {\n    padding: 12px;\n    color: #a13e34;\n    font: 700 11px \"Barlow Condensed\";\n    text-transform: uppercase;\n  }\n  .td-lightbox[_ngcontent-%COMP%] {\n    padding: 40px 12px;\n  }\n  .td-lightbox-nav[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .td-lightbox-nav.prev[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n  .td-lightbox-nav.next[_ngcontent-%COMP%] {\n    right: 10px;\n  }\n  .td-lightbox-close[_ngcontent-%COMP%] {\n    top: 10px;\n    right: 10px;\n  }\n}\n@media (max-width: 380px) {\n  .td-mobile-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0 9px;\n  }\n  .td-mobile-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .td-hero[_ngcontent-%COMP%] {\n    height: 535px;\n  }\n  .td-gallery-thumb[_ngcontent-%COMP%], \n   .td-gallery-more[_ngcontent-%COMP%] {\n    flex-basis: 72px;\n    width: 72px;\n  }\n  .td-fact[_ngcontent-%COMP%] {\n    padding: 11px 10px;\n  }\n  .td-main-layout[_ngcontent-%COMP%], \n   .td-related-wrap[_ngcontent-%COMP%] {\n    padding-left: 9px;\n    padding-right: 9px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdG91ci1kZXRhaWxzL3RvdXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FBQUY7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7QUFHRjs7QUFBQTs7K0VBQUE7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsMEVBQUE7QUFHRjs7QUFBQTtFQUNFLHVCQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsMk5BQ0U7RUFZRixnQ0FBQTtBQVRGOztBQVlBLGtDQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EsU0FBQTtBQVRGOztBQVlBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMENBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7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SUFDRSxVQUFBO0VBbURGO0VBakRBO0lBQ0UsV0FBQTtFQW1ERjtFQWpEQTtJQUNFLFNBQUE7SUFDQSxXQUFBO0VBbURGO0FBQ0Y7QUFqREE7RUFDRTtJQUNFLGNBQUE7RUFtREY7RUFqREE7SUFDRSxlQUFBO0VBbURGO0VBakRBO0lBQ0UsYUFBQTtFQW1ERjtFQWpEQTs7SUFFRSxnQkFBQTtJQUNBLFdBQUE7RUFtREY7RUFqREE7SUFDRSxrQkFBQTtFQW1ERjtFQWpEQTs7SUFFRSxpQkFBQTtJQUNBLGtCQUFBO0VBbURGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFybG93OndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9QmFybG93K0NvbmRlbnNlZDp3Z2h0QDUwMDs2MDA7NzAwJmZhbWlseT1QbGF5ZmFpcitEaXNwbGF5OndnaHRANjAwOzcwMCZkaXNwbGF5PXN3YXBcIik7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjZjZmMmVjO1xuICBjb2xvcjogIzFkMmIxODtcbiAgZm9udC1mYW1pbHk6IFwiQmFybG93XCIsIHNhbnMtc2VyaWY7XG59XG46aG9zdCAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi50ZC1uby1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGQtdG9wYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi50ZC1wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBDSU5FTUFUSUMgQURWRU5UVVJFIEhFUk8gU0VDVElPTlxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi50ZC1oZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNTIwcHg7XG4gIGhlaWdodDogY2xhbXAoNTIwcHgsIDYwdmgsIDY2MHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MTUwYztcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQ4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4udGQtaGVyby1tZWRpYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50ZC1oZXJvLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlciAzNiU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuMnMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSksIGZpbHRlciAwLjhzIGVhc2U7XG59XG5cbi50ZC1oZXJvOmhvdmVyIC50ZC1oZXJvLWltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMzUpO1xufVxuXG4udGQtaGVyby1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOlxuICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE4MGRlZyxcbiAgICAgIHJnYmEoNiwgMTYsIDEwLCAwLjcyKSAwJSxcbiAgICAgIHJnYmEoNiwgMTYsIDEwLCAwLjE4KSAyOCUsXG4gICAgICByZ2JhKDUsIDE0LCA4LCAwLjQ1KSA2MCUsXG4gICAgICByZ2JhKDQsIDEyLCA3LCAwLjk0KSAxMDAlXG4gICAgKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoXG4gICAgICBjaXJjbGUgYXQgODUlIDE1JSxcbiAgICAgIHJnYmEoMzQsIDE5NywgOTQsIDAuMTIpLFxuICAgICAgdHJhbnNwYXJlbnQgNTUlXG4gICAgKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzIGVhc2U7XG59XG5cbi8qIFRPUCBOQVZJR0FUSU9OICYgQUNUSU9OIFBJTExTICovXG4udGQtaGVyby10b3Age1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjZweCBjbGFtcCgyMHB4LCA0LjV2dywgNjRweCk7XG4gIGdhcDogMTZweDtcbn1cblxuLnRkLWJyZWFkY3J1bWItcGlsbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMCwgMjIsIDE0LCAwLjYyKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE0cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHBhZGRpbmc6IDZweCAxNnB4O1xuICBmb250OiA1MDAgMTNweCAnQmFybG93Jywgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyNDBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi50ZC1jcnVtYi1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udDogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjNGFkZTgwO1xuICB9XG59XG5cbi50ZC1jcnVtYi1ob21lIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgY29sb3I6ICM0YWRlODA7XG59XG5cbi50ZC1jcnVtYi1zZXAge1xuICBjb2xvcjogcmdiYSg3NCwgMjIyLCAxMjgsIDAuNzUpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4udGQtY3J1bWItaXRlbSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODIpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnRkLWNydW1iLWFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiAyNDBweDtcbn1cblxuLnRkLWhlcm8tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi50ZC1hY3Rpb24tcGlsbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDdweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMCwgMjIsIDE0LCAwLjYyKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE0cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHBhZGRpbmc6IDdweCAxNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udDogNjAwIDEzcHggJ0JhcmxvdycsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG5cbiAgc3ZnIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcblxuICAgIHN2ZyB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjQpO1xuICAgIGNvbG9yOiAjZmNhNWE1O1xuICB9XG59XG5cbi50ZC1waG90b3MtYWN0aW9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDc0LCAyMjIsIDEyOCwgMC4zNSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTIsIDMyLCAxOCwgMC43KTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxLCA1NiwgMzAsIDAuOSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDc0LCAyMjIsIDEyOCwgMC42KTtcbiAgfVxufVxuXG4udGQtc2hhcmUtbWVzc2FnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3NnB4O1xuICByaWdodDogY2xhbXAoMjBweCwgNC41dncsIDY0cHgpO1xuICB6LWluZGV4OiA1O1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk4KTtcbiAgY29sb3I6ICMxNDUzMmQ7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBmb250OiA2MDAgMTJweCAnQmFybG93Jywgc2Fucy1zZXJpZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYW5pbWF0aW9uOiB0ZFNoYXJlSW4gMC4yNXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmY3ZDA7XG59XG5cbkBrZXlmcmFtZXMgdGRTaGFyZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi8qIE1BSU4gSEVSTyBCT1RUT00gQk9EWSAoMi1DT0xVTU4gR1JJRCkgKi9cbi50ZC1oZXJvLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgYXV0bztcbiAgZ2FwOiAzNnB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDAgY2xhbXAoMjBweCwgNC41dncsIDY0cHgpIDM0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udGQtaGVyby1tYWluIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4vKiBCQURHRVMgKi9cbi50ZC1oZXJvLWJhZGdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA5cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbi50ZC1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBmb250OiA3MDAgMTFweC8xICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4udGQtYmFkZ2UtZG90IHtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICBib3gtc2hhZG93OiAwIDAgNnB4IGN1cnJlbnRDb2xvcjtcbn1cblxuLnRkLWJhZGdlLWRpZmYge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyLCAxMDEsIDUyLCAwLjg4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NCwgMjIyLCAxMjgsIDAuNDUpO1xuICBjb2xvcjogI2JiZjdkMDtcblxuICAmLmRpZmYtbW9kZXJhdGUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzAsIDk1LCA0OCwgMC44OCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEzNCwgMjM5LCAxNzIsIDAuNDUpO1xuICAgIGNvbG9yOiAjZGNmY2U3O1xuICB9XG5cbiAgJi5kaWZmLWRpZmZpY3VsdCxcbiAgJi5kaWZmLWNoYWxsZW5naW5nLFxuICAmLmRpZmYtaGFyZCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNTMsIDI3LCAyNywgMC44OCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0OCwgMTEzLCAxMTMsIDAuNDUpO1xuICAgIGNvbG9yOiAjZmVlMmUyO1xuICB9XG59XG5cbi50ZC1iYWRnZS1jYXRlZ29yeSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDI1LCAxOCwgMC42NSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMik7XG4gIGNvbG9yOiAjZjNmNGY2O1xufVxuXG4udGQtYmFkZ2UtY2VydGlmaWVkIHtcbiAgYmFja2dyb3VuZDogcmdiYSg0LCAxMjAsIDg3LCAwLjQ1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1MiwgMjExLCAxNTMsIDAuMzUpO1xuICBjb2xvcjogIzZlZTdiNztcbn1cblxuLyogSEVSTyBUSVRMRSAqL1xuLnRkLWhlcm8tdGl0bGUge1xuICBtYXJnaW46IDAgMCAxNnB4O1xuICBmb250OiA4MDAgY2xhbXAoMzRweCwgNC42dncsIDYycHgpIC8gMS4wNSAnUGxheWZhaXIgRGlzcGxheScsIEdlb3JnaWEsIHNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDI1ZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LXNoYWRvdzogMCA0cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuNyksIDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICBtYXgtd2lkdGg6IDkwMHB4O1xufVxuXG4vKiBIRVJPIE1FVEEgQ0hJUFMgKi9cbi50ZC1oZXJvLW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbn1cblxuLnRkLW1ldGEtY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDdweDtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwLCAyNCwgMTUsIDAuNTgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKTtcbiAgZm9udDogNTAwIDEzcHggJ0JhcmxvdycsIHNhbnMtc2VyaWY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICBzdmcge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBjb2xvcjogIzRhZGU4MDtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTUsIDM1LCAyMiwgMC43NSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgfVxufVxuXG4udGQtbWV0YS1yYXRpbmcge1xuICAudGQtc3RhciB7XG4gICAgY29sb3I6ICNmYmJmMjQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLnRkLXJhdGluZy1udW0ge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICBzbWFsbCB7XG4gICAgb3BhY2l0eTogMC43NTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgfVxufVxuXG4vKiBSSUdIVCBBU0lERTogU0xPVFMgJiBHQUxMRVJZICovXG4udGQtaGVyby1hc2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZ2FwOiAxNHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLyogTElWRSBTTE9UUyBDQVJEICovXG4udGQtc2xvdHMtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTNweDtcbiAgcGFkZGluZzogMTFweCAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwLCAyOCwgMTYsIDAuNzgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDc0LCAyMjIsIDEyOCwgMC4zMik7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAmLndhcm5pbmcge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsIDMwLCA4LCAwLjg1KTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjQ1KTtcblxuICAgIC50ZC1wdWxzZS1yaW5nIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmNTllMGI7XG4gICAgfVxuICAgIC50ZC1wdWxzZS1kb3Qge1xuICAgICAgYmFja2dyb3VuZDogI2Y1OWUwYjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmNTllMGI7XG4gICAgfVxuICB9XG5cbiAgJi5jcml0aWNhbCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg2MCwgMTYsIDE2LCAwLjg4KTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjM5LCA2OCwgNjgsIDAuNDUpO1xuXG4gICAgLnRkLXB1bHNlLXJpbmcge1xuICAgICAgYmFja2dyb3VuZDogI2VmNDQ0NDtcbiAgICB9XG4gICAgLnRkLXB1bHNlLWRvdCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWY0NDQ0O1xuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2VmNDQ0NDtcbiAgICB9XG4gIH1cblxuICAmLnNvbGQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDI4LCAyOCwgMC44OCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0OCwgMTYzLCAxODQsIDAuMyk7XG5cbiAgICAudGQtcHVsc2UtcmluZyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAudGQtcHVsc2UtZG90IHtcbiAgICAgIGJhY2tncm91bmQ6ICM5NGEzYjg7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4udGQtc2xvdHMtcHVsc2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnRkLXB1bHNlLXJpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAtNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyMmM1NWU7XG4gIG9wYWNpdHk6IDAuNTtcbiAgYW5pbWF0aW9uOiB0ZFB1bHNlUGluZyAycyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSBpbmZpbml0ZTtcbn1cblxuLnRkLXB1bHNlLWRvdCB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyMmM1NWU7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICMyMmM1NWU7XG59XG5cbkBrZXlmcmFtZXMgdGRQdWxzZVBpbmcge1xuICA3NSUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMi40KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi50ZC1zbG90cy1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRkLXNsb3RzLWhlYWQge1xuICBmb250OiA3MDAgMTNweCAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBsaW5lLWhlaWdodDogMS4xNTtcbn1cblxuLnRkLXNsb3RzLXN1YiB7XG4gIGZvbnQ6IDUwMCAxMXB4ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKTtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4vKiBHQUxMRVJZIFRIVU1CTkFJTFMgU1RSSVAgKi9cbi50ZC1oZXJvLWdhbGxlcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQyKTtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTRweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE0cHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi50ZC1nYWxsZXJ5LXRodW1iIHtcbiAgd2lkdGg6IDc2cHg7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMik7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogIzRhZGU4MDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCkgc2NhbGUoMS4wNSk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMThweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG5cbiAgICBpbWcge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyKTtcbiAgICB9XG4gIH1cbn1cblxuLnRkLWdhbGxlcnktbW9yZSB7XG4gIHdpZHRoOiA3NnB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0LCAzMCwgMjAsIDAuODgpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG5cbiAgLnRkLW1vcmUtbnVtIHtcbiAgICBmb250OiA4MDAgMTRweCAnQmFybG93Jywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzRhZGU4MDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuXG4gIHNtYWxsIHtcbiAgICBmb250OiA2MDAgMTBweCAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMiwgNTQsIDMyLCAwLjk1KTtcbiAgICBib3JkZXItY29sb3I6ICM0YWRlODA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpIHNjYWxlKDEuMDUpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG59XG5cbi8qIEZBQ1RTICovXG4udGQtZmFjdHMtc3RyaXAge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZGRkMjtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDQwLCA2MCwgMzAsIDAuMDUpO1xufVxuXG4vKiBMSVZFIEFEVklTT1JZIEJBTk5FUiAqL1xuLnRkLWFkdmlzb3J5LXN0cmlwIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMTZweCBhdXRvIDA7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYmFja2dyb3VuZDogI2YwZmRmNDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiZjdkMDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMTZhMzRhO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgyMiwgMTYzLCA3NCwgMC4wOCk7XG5cbiAgLmFkdmlzb3J5LXBpbGwge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgYmFja2dyb3VuZDogI2RjZmNlNztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODZlZmFjO1xuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAucHVsc2UtZG90IHtcbiAgICAgIHdpZHRoOiA4cHg7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6ICMxNmEzNGE7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyMiwgMTYzLCA3NCwgMC4zKTtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMS44cyBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAuYWR2aXNvcnktdGFnIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgICAgIGNvbG9yOiAjMTU4MDNkO1xuICAgIH1cbiAgfVxuXG4gIC5hZHZpc29yeS1pbmZvIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDtcblxuICAgIHN0cm9uZyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgY29sb3I6ICMzMzQxNTU7XG4gICAgICBsaW5lLWhlaWdodDogMS4zNTtcbiAgICB9XG4gIH1cblxuICAuYWR2aXNvcnktbWV0YSB7XG4gICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDIyLCAxNjMsIDc0LCAwLjUpOyB9XG4gIDcwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDZweCByZ2JhKDIyLCAxNjMsIDc0LCAwKTsgfVxuICAxMDAlIHsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDIyLCAxNjMsIDc0LCAwKTsgfVxufVxuLnRkLWZhY3RzLWlubmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLWhlaWdodDogODZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4udGQtZmFjdCB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMTMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDExcHg7XG4gIHBhZGRpbmc6IDE3cHggMThweDtcbn1cbi50ZC1mYWN0LWljb24ge1xuICBjb2xvcjogIzZkOWI1ZDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi50ZC1mYWN0LWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgZm9udDogNzAwIDEwcHggXCJCYXJsb3cgQ29uZGVuc2VkXCI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM4YTliN2Q7XG59XG4udGQtZmFjdCBzdHJvbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzI1MzAxZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi50ZC1mYWN0LWRpdiB7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogNTRweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZTVkZWQ0O1xufVxuXG4vKiBNQUlOICovXG4udGQtbWFpbi1sYXlvdXQge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMCA2NXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIDM0MHB4O1xuICBnYXA6IDI0cHg7XG59XG4udGQtbWFpbi1jb2x1bW4ge1xuICBtaW4td2lkdGg6IDA7XG59XG4udGQtdGFiLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xuICBwYWRkaW5nOiAxMXB4IDAgOXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZDdjYztcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZDogI2Y2ZjJlYztcbn1cbi50ZC10YWIge1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiA0MnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM4MjkyNzY7XG4gIGZvbnQ6IDcwMCAxMnB4IFwiQmFybG93IENvbmRlbnNlZFwiO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50ZC10YWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWVlOWUxO1xuICBjb2xvcjogIzJkNGEyMjtcbn1cbi50ZC10YWIuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U4ZTZkZjtcbiAgYm9yZGVyLWNvbG9yOiAjYzljOWJmO1xuICBjb2xvcjogIzI5NDYyMztcbn1cbi50ZC10YWItcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBhbmltYXRpb246IHRkSW4gMC4yNXMgZWFzZTtcbn1cbkBrZXlmcmFtZXMgdGRJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG4udGQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWRkZDE7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDE4cHggMThweDtcbiAgYm94LXNoYWRvdzogMCAzcHggMTJweCByZ2JhKDUzLCA3MywgNDAsIDAuMDQ1KTtcbn1cbi50ZC1zZWN0aW9uLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA5cHg7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG4gIGNvbG9yOiAjNzQ4NTZiO1xuICBmb250OiA3MDAgMTJweCBcIkJhcmxvdyBDb25kZW5zZWRcIjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi50ZC1zZWN0aW9uLXRpdGxlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZTdkZmQzO1xufVxuLnRkLXNlY3Rpb24taWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgYmFja2dyb3VuZDogI2VkZjJlYTtcbiAgY29sb3I6ICMzZDYzMzM7XG4gIGZvbnQ6IDcwMCAxNHB4IFwiQmFybG93XCI7XG59XG4udGQtc2VjdGlvbi10aXRsZS0tZ3JlZW4ge1xuICBjb2xvcjogIzNkNjMzMztcbn1cbi50ZC1zZWN0aW9uLXRpdGxlLS1yZWQge1xuICBjb2xvcjogI2E1NDgzYztcbn1cbi50ZC1zZWN0aW9uLXRpdGxlLS1hbWJlciB7XG4gIGNvbG9yOiAjYjg3OTE4O1xufVxuLnRkLWJvZHktdGV4dCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM1ZTcwNTQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbn1cbi50ZC1jYXJkLWRpdmlkZXIge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2U5ZTFkNztcbiAgbWFyZ2luOiAyMXB4IDA7XG59XG4udGQtaGlnaGxpZ2h0cy1saXN0LFxuLnRkLWluYy1saXN0LFxuLnRkLXNpbXBsZS1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLnRkLWhpZ2hsaWdodHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogN3B4O1xufVxuLnRkLWhpZ2hsaWdodHMtbGlzdCBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOXB4O1xuICBwYWRkaW5nOiA5cHggMTFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTFkNztcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmNWYwO1xuICBjb2xvcjogIzVkNmY1NDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLnRkLWhpZ2hsaWdodHMtbGlzdCBsaSBzcGFuIHtcbiAgY29sb3I6ICM1YjhjNTA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4udGQtc2VjdGlvbi1oZWFkaW5nLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTRweDtcbn1cbi50ZC1zZWN0aW9uLWhlYWRpbmctcm93IC50ZC1zZWN0aW9uLXRpdGxlIHtcbiAgZmxleDogMTtcbn1cbi50ZC12aWV3LWFsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGM1YjE7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMzY1NjJlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBmb250OiA3MDAgMTFweCBcIkJhcmxvdyBDb25kZW5zZWRcIjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnRkLXZpZXctYWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YxZjVlZjtcbn1cbi50ZC1jb250ZW50LWdhbGxlcnkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IDEwcHg7XG59XG4udGQtY29udGVudC1nYWxsZXJ5LWl0ZW0ge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGFzcGVjdC1yYXRpbzogMS4yNTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZThlMWQ3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGQtY29udGVudC1nYWxsZXJ5LWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xufVxuLnRkLWNvbnRlbnQtZ2FsbGVyeS1pdGVtOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi8qIEJPT0tJTkcgQ0FSRCAqL1xuLnRkLWJvb2tpbmctY2FyZCB7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWQ5Y2Q7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI2cHggcmdiYSg0MCwgNjEsIDM0LCAwLjEpO1xufVxuLnRkLWJvb2tpbmctY2FyZC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA5cHg7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG4gIGNvbG9yOiAjMzY1NTJlO1xuICBmb250OiA3MDAgMTNweCBcIkJhcmxvdyBDb25kZW5zZWRcIjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi50ZC1wcmljZS1mcm9tIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgY29sb3I6ICM4Nzk2N2Q7XG4gIGZvbnQ6IDcwMCAxMHB4IFwiQmFybG93IENvbmRlbnNlZFwiO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnRkLXByaWNlLXZhbCB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGNvbG9yOiAjMWUyYzFhO1xuICBmb250OiA3MDAgMzNweCBcIlBsYXlmYWlyIERpc3BsYXlcIjtcbn1cbi50ZC1wcmljZS12YWwgc21hbGwge1xuICBjb2xvcjogIzhhOTg3ZjtcbiAgZm9udDogNDAwIDEycHggXCJCYXJsb3dcIjtcbn1cbi50ZC1ib29raW5nLXBpbGxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA3cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cbi50ZC1ib29raW5nLXBpbGxzIHNwYW4ge1xuICBwYWRkaW5nOiA3cHggOXB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogI2Y0ZjBlOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UzZGJkMDtcbiAgY29sb3I6ICMzYjU3MzU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi50ZC1ib29raW5nLXBpbGxzIHNwYW46Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogIzM3NGQzMTtcbn1cbi50ZC1ib29rLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgYmFja2dyb3VuZDogIzI5NTUyMztcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgZm9udDogNzAwIDEzcHggXCJCYXJsb3cgQ29uZGVuc2VkXCI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA5ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA1cHggMTRweCByZ2JhKDQxLCA4NSwgMzUsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4udGQtYm9vay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzc2ZDJmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG4udGQtYm9vay1idG4tLWdob3N0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMyZjUyMjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGM1YjE7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4udGQtYm9vay1idG4tLWdob3N0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YyZjZmMDtcbn1cbi50ZC1zb2xkLW91dCB7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgcGFkZGluZzogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2EzM2QzMjtcbiAgYmFja2dyb3VuZDogI2ZmZjFlZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VmY2ZjYTtcbiAgZm9udDogNzAwIDEycHggXCJCYXJsb3cgQ29uZGVuc2VkXCI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4udGQtYm9va2luZy1iZW5lZml0cyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZTBkNjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xufVxuLnRkLWJvb2tpbmctYmVuZWZpdHMgZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMnB4IDFmcjtcbiAgZ2FwOiA4cHg7XG4gIGNvbG9yOiAjNjU3NjVkO1xuICBmb250LXNpemU6IDEycHg7XG59XG4udGQtYm9va2luZy1iZW5lZml0cyBkaXYgPiBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICM1ZThiNTE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi50ZC1ib29raW5nLWJlbmVmaXRzIHN0cm9uZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGNvbG9yOiAjMjkzZTI0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi8qIElUSU5FUkFSWSAqL1xuLnRkLWl0aW4tYWNjb3JkaW9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmRlZDM7XG59XG4udGQtaXRpbi1hY2NvcmRpb246bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG4udGQtaXRpbi10b2dnbGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxNHB4IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRkLWl0aW4tZGF5LW51bSB7XG4gIHdpZHRoOiAzMXB4O1xuICBoZWlnaHQ6IDMxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMzMTViMjk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250OiA3MDAgMTJweCBcIkJhcmxvdyBDb25kZW5zZWRcIjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4udGQtaXRpbi10b2dnbGUub3BlbiAudGQtaXRpbi1kYXktbnVtIHtcbiAgYmFja2dyb3VuZDogI2QzOGEyMjtcbn1cbi50ZC1pdGluLWRheS10aXRsZSB7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiAjMjYzNTFmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udGQtaXRpbi1jaGV2cm9uIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGNvbG9yOiAjODM5MTdiO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XG59XG4udGQtaXRpbi10b2dnbGUub3BlbiAudGQtaXRpbi1jaGV2cm9uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi50ZC1pdGluLWJvZHkge1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOlxuICAgIG1heC1oZWlnaHQgMC4zNXMgZWFzZSxcbiAgICBvcGFjaXR5IDAuMnM7XG59XG4udGQtaXRpbi1ib2R5Lm9wZW4ge1xuICBtYXgtaGVpZ2h0OiAxMjAwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG4udGQtdGltZWxpbmUge1xuICBwYWRkaW5nOiAycHggMCAxNnB4O1xufVxuLnRkLXRsLWl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwcHggMTZweCAxZnI7XG4gIGdhcDogMTFweDtcbn1cbi50ZC10bC10aW1lIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjODc5NTdkO1xuICBmb250OiA2MDAgMTFweCBcIkJhcmxvdyBDb25kZW5zZWRcIjtcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cbi50ZC10bC1kb3Qtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGQtdGwtZG90IHtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzZmOWI2MjtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNkY2U4ZDg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cbi50ZC10bC1saW5lIHtcbiAgd2lkdGg6IDFweDtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogI2RjZTNkODtcbiAgbWFyZ2luOiA1cHggMDtcbn1cbi50ZC10bC1jb250ZW50IHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiAjNWQ3MDU1O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xufVxuXG4vKiBJTkNMVVNJT05TIC8gSU5GTyAqL1xuLnRkLWluYy1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiAwIDI4cHg7XG59XG4udGQtaW5jLWxpc3QgbGksXG4udGQtc2ltcGxlLWxpc3QgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDlweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTJkODtcbiAgY29sb3I6ICM1ZTcwNTY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi50ZC1pbmMtaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi50ZC1pbmMtaWNvbi5pbiB7XG4gIGJhY2tncm91bmQ6ICNlYWYyZTg7XG4gIGNvbG9yOiAjNDc3NDNjO1xufVxuLnRkLWluYy1pY29uLmV4IHtcbiAgYmFja2dyb3VuZDogI2Y5ZTllNztcbiAgY29sb3I6ICNhNzQ3M2M7XG59XG4udGQtc2ltcGxlLWxpc3QgbGkgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLnRkLWNhcmQtLWFsZXJ0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmFmMTtcbiAgYm9yZGVyLWNvbG9yOiAjZWRkY2I5O1xufVxuLnRkLXNhZmV0eS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ2FwOiAxMnB4O1xufVxuLnRkLXNhZmV0eS1ncmlkIGFydGljbGUge1xuICBwYWRkaW5nOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTZkZmQ0O1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBiYWNrZ3JvdW5kOiAjZmJmYWY2O1xufVxuLnRkLXNhZmV0eS1ncmlkIGgzIHtcbiAgbWFyZ2luOiAwIDAgNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzU1NTJlO1xufVxuLnRkLXNhZmV0eS1ncmlkIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNjY3NjVkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xufVxuLnRkLWZhcS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG59XG4udGQtZmFxLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVkZGQyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnRkLWZhcS1xdWVzdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxM3B4IDE0cHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogI2Y4ZjRlZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjYzNzFmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50ZC1mYXEtYW5zd2VyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGNvbG9yOiAjNjU3NDVkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi8qIFJFTEFURUQgKi9cbi50ZC1yZWxhdGVkLXdyYXAge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMCA4MHB4O1xufVxuLnRkLXJlbGF0ZWQtZXllYnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgY29sb3I6ICM4NDkzNzk7XG4gIGZvbnQ6IDcwMCAxMHB4IFwiQmFybG93IENvbmRlbnNlZFwiO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnRkLXJlbGF0ZWQtdGl0bGUge1xuICBtYXJnaW46IDAgMCAxNnB4O1xuICBjb2xvcjogIzI0MzUxZTtcbiAgZm9udDogNzAwIGNsYW1wKDI0cHgsIDN2dywgMzFweCkgXCJQbGF5ZmFpciBEaXNwbGF5XCI7XG59XG4udGQtcmVsYXRlZC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAxNHB4O1xufVxuLnRkLXJlbGF0ZWQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGRjZDA7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEycHggcmdiYSg0OCwgNjksIDQwLCAwLjA1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOlxuICAgIHRyYW5zZm9ybSAwLjJzLFxuICAgIGJveC1zaGFkb3cgMC4ycztcbn1cbi50ZC1yZWxhdGVkLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSg0OCwgNjksIDQwLCAwLjEpO1xufVxuLnRkLXJlbGF0ZWQtaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFzcGVjdC1yYXRpbzogMS4yNTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi50ZC1yZWxhdGVkLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XG59XG4udGQtcmVsYXRlZC1jYXJkOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG4udGQtcmVsYXRlZC1zdGF0dXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDIsIDkxLCAzNiwgMC45KTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQ6IDcwMCAxMHB4IFwiQmFybG93IENvbmRlbnNlZFwiO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xufVxuLnRkLXJlbGF0ZWQtYm9keSB7XG4gIHBhZGRpbmc6IDEzcHg7XG59XG4udGQtcmVsYXRlZC1jYXRlZ29yeSB7XG4gIGNvbG9yOiAjZTI4ZTIzO1xuICBmb250OiA3MDAgOXB4IFwiQmFybG93IENvbmRlbnNlZFwiO1xuICBsZXR0ZXItc3BhY2luZzogMC4xM2VtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnRkLXJlbGF0ZWQtYm9keSBoMyB7XG4gIG1hcmdpbjogNXB4IDAgM3B4O1xuICBjb2xvcjogIzI2MzcxZjtcbiAgZm9udDogNzAwIDE4cHggXCJCYXJsb3cgQ29uZGVuc2VkXCI7XG59XG4udGQtcmVsYXRlZC1ib2R5IHAge1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBjb2xvcjogIzc2ODM2ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnRkLXJlbGF0ZWQtbWV0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzM1NTUyZDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLnRkLXJlbGF0ZWQtbWV0YSBzdHJvbmcge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4udGQtcmVsYXRlZC1idG4ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjZweCk7XG4gIG1hcmdpbjogMCAxM3B4IDEzcHg7XG4gIHBhZGRpbmc6IDlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JhYzhiNDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzM1NTUyZDtcbiAgZm9udDogNzAwIDEwcHggXCJCYXJsb3cgQ29uZGVuc2VkXCI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTElHSFRCT1ggKi9cbi50ZC1saWdodGJveCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDEwMDAwMDtcbiAgYmFja2dyb3VuZDogcmdiYSgzLCA4LCA1LCAwLjk1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGFuaW1hdGlvbjogbGlnaHRib3hGYWRlSW4gMC4ycyBlYXNlLW91dDtcbn1cblxuLnRkLWxpZ2h0Ym94LW1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDk2dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRkLWxpZ2h0Ym94LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiAyO1xuICBmbGV4LXNocmluazogMDtcblxuICAudGQtbGlnaHRib3gtbWV0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcblxuICAgIC50ZC1saWdodGJveC10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICAgIH1cblxuICAgIC50ZC1saWdodGJveC1jb3VudGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgICBjb2xvcjogIzM0ZDM5OTtcbiAgICB9XG4gIH1cblxuICAudGQtbGlnaHRib3gtY2xvc2Uge1xuICAgIHdpZHRoOiAzOHB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcbiAgICB9XG4gIH1cbn1cblxuLnRkLWxpZ2h0Ym94LXZpZXdwb3J0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4udGQtbGlnaHRib3gtZnJhbWUge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGQtbGlnaHRib3gtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IG1pbig5MnZ3LCAxMjAwcHgpO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDk2dmggLSAxNjBweCk7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgYW5pbWF0aW9uOiBtb2RhbFBvcCAwLjJzIGVhc2Utb3V0O1xufVxuXG4udGQtbGlnaHRib3gtbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxLjA4KTtcbiAgfVxuXG4gICYucHJldiB7XG4gICAgbGVmdDogMTJweDtcbiAgfVxuXG4gICYubmV4dCB7XG4gICAgcmlnaHQ6IDEycHg7XG4gIH1cbn1cblxuLnRkLWxpZ2h0Ym94LXRodW1icyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMTBweCAwIDRweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1heC13aWR0aDogMTAwJTtcblxuICAudGQtbGlnaHRib3gtdGh1bWIge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgb3BhY2l0eTogMC41NTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwLjg1O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzM0ZDM5OTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSg1MiwgMjExLCAxNTMsIDAuNSk7XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgbGlnaHRib3hGYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyogTU9CSUxFIEJBUiAqL1xuLnRkLW1vYmlsZS1ib29raW5nIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogTE9BRElORyAvIEVSUk9SICovXG4udGQtbG9hZGluZyB7XG4gIG1pbi1oZWlnaHQ6IDcwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnRkLWxvYWRpbmctaW5uZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGQtbG9hZGluZy1kb3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBtYXJnaW46IDEycHg7XG59XG4udGQtbG9hZGluZy1kb3RzIHNwYW4ge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjNmQ5ODVmO1xuICBhbmltYXRpb246IHRkUHVsc2UgMS4ycyBpbmZpbml0ZTtcbn1cbi50ZC1sb2FkaW5nLWRvdHMgc3BhbjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG4udGQtbG9hZGluZy1kb3RzIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuQGtleWZyYW1lcyB0ZFB1bHNlIHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjI1O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgfVxufVxuLnRkLWxvYWRpbmctaW5uZXIgcCB7XG4gIGNvbG9yOiAjODA5MDc4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4udGQtZXJyb3Ige1xuICBtaW4taGVpZ2h0OiA3MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRkLWVycm9yLWlubmVyIGgzIHtcbiAgZm9udDogNzAwIDI2cHggXCJQbGF5ZmFpciBEaXNwbGF5XCI7XG4gIG1hcmdpbjogMCAwIDhweDtcbn1cbi50ZC1lcnJvci1pbm5lciBwIHtcbiAgY29sb3I6ICM3NTgzNmU7XG59XG4udGQtZXJyb3ItaW5uZXIgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQ6ICMyZDU1Mjc7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQ6IDcwMCAxMnB4IFwiQmFybG93IENvbmRlbnNlZFwiO1xufVxuXG4vKiBSRVNQT05TSVZFICovXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC50ZC1tYWluLWxheW91dCxcbiAgLnRkLXJlbGF0ZWQtd3JhcCB7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgfVxuICAudGQtbWFpbi1sYXlvdXQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgMzAwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG4gIC50ZC1oZXJvLXRvcCB7XG4gICAgcGFkZGluZzogMjBweCAyOHB4O1xuICB9XG4gIC50ZC1oZXJvLWJvZHkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMjRweDtcbiAgICBwYWRkaW5nOiAwIDI4cHggMjhweDtcbiAgfVxuICAudGQtaGVyby1hc2lkZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudGQtZmFjdHMtaW5uZXIge1xuICAgIG1heC13aWR0aDogOTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAudGQtbWFpbi1sYXlvdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC50ZC1ib29raW5nLWNhcmQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnRkLXRhYi1iYXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICB9XG4gIC50ZC1yZWxhdGVkLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbiAgLnRkLXJlbGF0ZWQtd3JhcCB7XG4gICAgcGFkZGluZy1ib3R0b206IDExMHB4O1xuICB9XG4gIC50ZC1oZXJvIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogNTIwcHg7XG4gIH1cbiAgLnRkLWhlcm8tYXNpZGUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnRkLWZhY3QtYmVzdC10aW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC50ZC1mYWN0cy1pbm5lciB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgfVxuICAudGQtZmFjdCB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIDpob3N0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNzhweDtcbiAgfVxuICAudGQtdG9wYmFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgYmFja2dyb3VuZDogIzI5NDYyMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAudGQtdG9wYmFyLWlubmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDE0cHg7XG4gIH1cbiAgLnRkLXRvcGJhci10aXRsZSB7XG4gICAgZm9udDogNzAwIDEzcHggXCJCYXJsb3cgQ29uZGVuc2VkXCI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIC50ZC10b3BiYXItc3BhY2VyIHtcbiAgICB3aWR0aDogNjRweDtcbiAgfVxuICAudGQtYmFjay1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBwYWRkaW5nOiA3cHggOXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250OiA2MDAgMTJweCBcIkJhcmxvdyBDb25kZW5zZWRcIjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC50ZC1iYWNrLWJ0biBzdmcge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgfVxuICAudGQtaGVybyB7XG4gICAgbWluLWhlaWdodDogNTIwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC50ZC1oZXJvLXRvcCB7XG4gICAgcGFkZGluZzogMTZweCAxNHB4O1xuICAgIGdhcDogMTBweDtcbiAgfVxuICAudGQtYnJlYWRjcnVtYi1waWxsIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICB9XG4gIC50ZC1jcnVtYi1hY3RpdmUge1xuICAgIG1heC13aWR0aDogMTIwcHg7XG4gIH1cbiAgLnRkLWFjdGlvbi1waWxsIHtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbiAgLnRkLWhlcm8tYm9keSB7XG4gICAgcGFkZGluZzogMCAxNHB4IDI0cHg7XG4gICAgZ2FwOiAxOHB4O1xuICB9XG4gIC50ZC1oZXJvLXRpdGxlIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDI4cHgsIDguMnZ3LCAzOHB4KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG4gIC50ZC1oZXJvLWFzaWRlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGdhcDogMTBweDtcbiAgfVxuICAudGQtc2xvdHMtY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnRkLWhlcm8tZ2FsbGVyeSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gIC50ZC1nYWxsZXJ5LXRodW1iIHtcbiAgICBmbGV4OiAwIDAgODJweDtcbiAgICB3aWR0aDogODJweDtcbiAgICBoZWlnaHQ6IDU4cHg7XG4gIH1cbiAgLnRkLWdhbGxlcnktbW9yZSB7XG4gICAgZmxleDogMCAwIDgycHg7XG4gICAgd2lkdGg6IDgycHg7XG4gICAgaGVpZ2h0OiA1OHB4O1xuICB9XG4gIC50ZC1nYWxsZXJ5LW1vcmUgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC50ZC1mYWN0cy1pbm5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgLnRkLWZhY3Qge1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBwYWRkaW5nOiAxM3B4IDE0cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIC50ZC1mYWN0LWRpdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAudGQtZmFjdC1pY29uIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgLnRkLWZhY3QtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICB9XG4gIC50ZC1mYWN0IHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC50ZC1mYWN0LWJlc3QtdGltZSB7XG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWRlZDQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLnRkLW1haW4tbGF5b3V0LFxuICAudGQtcmVsYXRlZC13cmFwIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICB9XG4gIC50ZC1tYWluLWxheW91dCB7XG4gICAgcGFkZGluZy1ib3R0b206IDk1cHg7XG4gIH1cbiAgLnRkLXRhYi1iYXIge1xuICAgIHBhZGRpbmc6IDEwcHggMCA5cHg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgfVxuICAudGQtdGFiIHtcbiAgICBtaW4td2lkdGg6IDgycHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICB9XG4gIC50ZC1jYXJkIHtcbiAgICBwYWRkaW5nOiAxN3B4IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgfVxuICAudGQtdGFiLXBhbmVsIHtcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICBnYXA6IDEycHg7XG4gIH1cbiAgLnRkLWJvZHktdGV4dCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLnRkLXNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAudGQtY29udGVudC1nYWxsZXJ5IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG4gIC50ZC1zZWN0aW9uLWhlYWRpbmctcm93IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMDtcbiAgfVxuICAudGQtdmlldy1hbGwge1xuICAgIG1hcmdpbjogLTdweCAwIDEwcHg7XG4gIH1cbiAgLnRkLWluYy1saXN0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAudGQtc2FmZXR5LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC50ZC1yZWxhdGVkLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC50ZC1yZWxhdGVkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbiAgLnRkLXJlbGF0ZWQtd3JhcCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB9XG4gIC50ZC1tb2JpbGUtYm9va2luZyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDIwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEycHggY2FsYygxMHB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVkN2NjO1xuICAgIGJveC1zaGFkb3c6IDAgLThweCAyNXB4IHJnYmEoMzEsIDUxLCAyNywgMC4xMik7XG4gIH1cbiAgLnRkLW1vYmlsZS1wcmljZSB7XG4gICAgbWluLXdpZHRoOiAwO1xuICB9XG4gIC50ZC1tb2JpbGUtcHJpY2Ugc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM4Nzk1N2U7XG4gICAgZm9udDogNzAwIDlweCBcIkJhcmxvdyBDb25kZW5zZWRcIjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLnRkLW1vYmlsZS1wcmljZSBzdHJvbmcge1xuICAgIGZvbnQ6IDcwMCAyM3B4IFwiUGxheWZhaXIgRGlzcGxheVwiO1xuICAgIGNvbG9yOiAjMWUyYzE5O1xuICB9XG4gIC50ZC1tb2JpbGUtcHJpY2Ugc21hbGwge1xuICAgIGNvbG9yOiAjOGI5ODgzO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAudGQtbW9iaWxlLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA3cHg7XG4gIH1cbiAgLnRkLW1vYmlsZS1hY3Rpb25zIGJ1dHRvbiB7XG4gICAgbWluLWhlaWdodDogNDRweDtcbiAgICBwYWRkaW5nOiAwIDEzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGZvbnQ6IDcwMCAxMXB4IFwiQmFybG93IENvbmRlbnNlZFwiO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAudGQtbW9iaWxlLWV4cGVydCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjljN2I0O1xuICAgIGNvbG9yOiAjMzE1NTJjO1xuICB9XG4gIC50ZC1tb2JpbGUtYm9vayB7XG4gICAgYmFja2dyb3VuZDogIzJjNTcyNjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmM1NzI2O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC50ZC1tb2JpbGUtc29sZCB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBjb2xvcjogI2ExM2UzNDtcbiAgICBmb250OiA3MDAgMTFweCBcIkJhcmxvdyBDb25kZW5zZWRcIjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC50ZC1saWdodGJveCB7XG4gICAgcGFkZGluZzogNDBweCAxMnB4O1xuICB9XG4gIC50ZC1saWdodGJveC1uYXYge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuICAudGQtbGlnaHRib3gtbmF2LnByZXYge1xuICAgIGxlZnQ6IDEwcHg7XG4gIH1cbiAgLnRkLWxpZ2h0Ym94LW5hdi5uZXh0IHtcbiAgICByaWdodDogMTBweDtcbiAgfVxuICAudGQtbGlnaHRib3gtY2xvc2Uge1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gIC50ZC1tb2JpbGUtYWN0aW9ucyBidXR0b24ge1xuICAgIHBhZGRpbmc6IDAgOXB4O1xuICB9XG4gIC50ZC1tb2JpbGUtcHJpY2Ugc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLnRkLWhlcm8ge1xuICAgIGhlaWdodDogNTM1cHg7XG4gIH1cbiAgLnRkLWdhbGxlcnktdGh1bWIsXG4gIC50ZC1nYWxsZXJ5LW1vcmUge1xuICAgIGZsZXgtYmFzaXM6IDcycHg7XG4gICAgd2lkdGg6IDcycHg7XG4gIH1cbiAgLnRkLWZhY3Qge1xuICAgIHBhZGRpbmc6IDExcHggMTBweDtcbiAgfVxuICAudGQtbWFpbi1sYXlvdXQsXG4gIC50ZC1yZWxhdGVkLXdyYXAge1xuICAgIHBhZGRpbmctbGVmdDogOXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDlweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_tour-details_tour-details-module_ts.js.map