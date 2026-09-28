"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_faqs_faqs-module_ts"],{

/***/ 3170
/*!*************************************!*\
  !*** ./src/app/faqs/faqs-module.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqsModule: () => (/* binding */ FaqsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _faqs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faqs.component */ 8920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: '',
  component: _faqs_component__WEBPACK_IMPORTED_MODULE_3__.FaqsComponent
}];
class FaqsModule {
  static #_ = _staticBlock = () => (this.ɵfac = function FaqsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FaqsModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: FaqsModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _faqs_component__WEBPACK_IMPORTED_MODULE_3__.FaqsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FaqsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _faqs_component__WEBPACK_IMPORTED_MODULE_3__.FaqsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ },

/***/ 8920
/*!****************************************!*\
  !*** ./src/app/faqs/faqs.component.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqsComponent: () => (/* binding */ FaqsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _core_static_pages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/static-pages.service */ 3700);
/* harmony import */ var _core_site_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/site-settings.service */ 1662);
var _staticBlock;








function FaqsComponent_div_0_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.searchQuery = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FaqsComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44)(1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Popular Topics:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_16_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.searchQuery = "permit");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Permits");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_16_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.searchQuery = "cancel");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_16_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.searchQuery = "shoes");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Trekking Shoes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_16_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.searchQuery = "water");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Water & Food");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_16_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.searchQuery = "beginner");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Beginners");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FaqsComponent_div_0_div_19_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_19_button_1_Template_button_click_0_listener() {
      const cat_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.setCategory(cat_r6.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.selectedCategory === cat_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", cat_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cat_r6.label);
  }
}
function FaqsComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FaqsComponent_div_0_div_19_button_1_Template, 4, 4, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
  }
}
function FaqsComponent_div_0_div_20_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selectedCategory);
  }
}
function FaqsComponent_div_0_div_20_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " matching \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.searchQuery);
  }
}
function FaqsComponent_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FaqsComponent_div_0_div_20_span_6_Template, 4, 1, "span", 53)(7, FaqsComponent_div_0_div_20_span_7_Template, 5, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 54)(9, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_20_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.expandAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Expand All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_20_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.collapseAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Collapse All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.filteredFaqs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" of ", ctx_r1.faqs.length, " questions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedCategory !== "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
  }
}
function FaqsComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 59)(1, "div", 60)(2, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Loading trail knowledge base...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FaqsComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 62)(1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 65)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Connection Notice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_22_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.retryLoad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Try Again ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function FaqsComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 68)(1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "No matching answers found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "We couldn't find any questions matching your query. Try a different keyword or reset filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_23_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Show All Questions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FaqsComponent_div_0_div_24_article_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const faq_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", faq_r11.answer, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function FaqsComponent_div_0_div_24_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "article", 75)(1, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_24_article_1_Template_button_click_1_listener() {
      const faq_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleFaq(faq_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 77)(3, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 79)(6, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, FaqsComponent_div_0_div_24_article_1_div_12_Template, 2, 1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const faq_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-expanded", faq_r11.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-expanded", faq_r11.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Q", (ctx_r1.faqCurrentPage - 1) * ctx_r1.faqPageSize + i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](faq_r11.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](faq_r11.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("rotated", faq_r11.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", faq_r11.expanded);
  }
}
function FaqsComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FaqsComponent_div_0_div_24_article_1_Template, 13, 9, "article", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedFaqs);
  }
}
function FaqsComponent_div_0_div_25_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_25_button_17_Template_button_click_0_listener() {
      const page_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.setFaqPage(page_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r15 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.faqCurrentPage === page_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", page_r15, " ");
  }
}
function FaqsComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 87)(1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " questions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 89)(13, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_25_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.setFaqPage(ctx_r1.faqCurrentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Prev ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, FaqsComponent_div_0_div_25_button_17_Template, 2, 3, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_25_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.setFaqPage(ctx_r1.faqCurrentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.faqPaginationStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.faqPaginationEnd);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.filteredFaqs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.faqCurrentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.faqPageNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.faqCurrentPage === ctx_r1.totalFaqPages);
  }
}
function FaqsComponent_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.content, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function FaqsComponent_div_0_a_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Chat on WhatsApp");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const settings_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", settings_r16.whatsappLink, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function FaqsComponent_div_0_a_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const settings_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", settings_r16.telLink, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Call ", settings_r16.supportPhone || "Support");
  }
}
function FaqsComponent_div_0_div_57_div_13_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 129);
  }
}
function FaqsComponent_div_0_div_57_div_13_i_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 130);
  }
}
function FaqsComponent_div_0_div_57_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 113)(1, "form", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function FaqsComponent_div_0_div_57_div_13_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.submitContactInquiry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 115)(3, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Your Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function FaqsComponent_div_0_div_57_div_13_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.contactForm.name, $event) || (ctx_r1.contactForm.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 118)(7, "div", 119)(8, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Phone (WhatsApp)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function FaqsComponent_div_0_div_57_div_13_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.contactForm.phone, $event) || (ctx_r1.contactForm.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 119)(12, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function FaqsComponent_div_0_div_57_div_13_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.contactForm.email, $event) || (ctx_r1.contactForm.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 122)(16, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "What is your question? *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "textarea", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function FaqsComponent_div_0_div_57_div_13_Template_textarea_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.contactForm.question, $event) || (ctx_r1.contactForm.question = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 124)(20, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_57_div_13_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closeContactModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, FaqsComponent_div_0_div_57_div_13_span_23_Template, 1, 0, "span", 127)(24, FaqsComponent_div_0_div_57_div_13_i_24_Template, 1, 0, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.contactForm.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.contactForm.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.contactForm.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.contactForm.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.contactSubmitting || !ctx_r1.contactForm.question.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.contactSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.contactSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.contactSubmitting ? "Transmitting..." : "Submit Inquiry", " ");
  }
}
function FaqsComponent_div_0_div_57_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 131)(1, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Inquiry Received!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Thank you for reaching out. Our expedition coordinators have received your query and will reply via WhatsApp/Email shortly.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_57_div_14_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closeContactModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Back to FAQs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FaqsComponent_div_0_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_57_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closeContactModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_57_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 105)(3, "div", 106)(4, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div")(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Ask our Expedition Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "We typically respond within 15 minutes during trekking hours.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_57_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closeContactModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, FaqsComponent_div_0_div_57_div_13_Template, 26, 8, "div", 111)(14, FaqsComponent_div_0_div_57_div_14_Template, 9, 0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.contactSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.contactSubmitted);
  }
}
function FaqsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Official Knowledge Base & Guide Desk");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Everything you need to know about trekking in Karnataka, permits, trail safety, packing, and payment policies. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8)(12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function FaqsComponent_div_0_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FaqsComponent_div_0_Template_input_ngModelChange_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onSearchChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, FaqsComponent_div_0_button_15_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, FaqsComponent_div_0_div_16_Template, 13, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "main", 14)(18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, FaqsComponent_div_0_div_19_Template, 2, 1, "div", 16)(20, FaqsComponent_div_0_div_20_Template, 15, 4, "div", 17)(21, FaqsComponent_div_0_div_21_Template, 6, 0, "div", 18)(22, FaqsComponent_div_0_div_22_Template, 11, 1, "div", 19)(23, FaqsComponent_div_0_div_23_Template, 10, 0, "div", 20)(24, FaqsComponent_div_0_div_24_Template, 2, 1, "div", 21)(25, FaqsComponent_div_0_div_25_Template, 21, 6, "div", 22)(26, FaqsComponent_div_0_div_26_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "section", 24)(28, "div", 25)(29, "div", 26)(30, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " 24/7 Trekker Assistance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Still have questions or need custom arrangements?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " Our mountain leaders and expedition coordinators are on standby to help with permit slots, physical prep, and group reservations. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, FaqsComponent_div_0_a_38_Template, 4, 1, "a", 30)(39, FaqsComponent_div_0_a_39_Template, 4, 2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openContactModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Send Inquiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 34)(45, "div", 35)(46, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 40)(53, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Verified Guides");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Always zero spam, 100% genuine guidance");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, FaqsComponent_div_0_div_57_Template, 15, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const settings_r16 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.loading && ctx_r1.hasStructuredFaqs);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.loading && ctx_r1.hasStructuredFaqs);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.loading && ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.loading && !ctx_r1.error && ctx_r1.hasStructuredFaqs && ctx_r1.filteredFaqs.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.loading && !ctx_r1.error && ctx_r1.hasStructuredFaqs);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.loading && !ctx_r1.error && ctx_r1.hasStructuredFaqs && ctx_r1.filteredFaqs.length > ctx_r1.faqPageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.loading && !ctx_r1.error && !ctx_r1.hasStructuredFaqs && ctx_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", settings_r16.whatsappLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", settings_r16.telLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.showContactModal);
  }
}
class FaqsComponent {
  constructor(staticPagesService, siteSettings) {
    this.staticPagesService = staticPagesService;
    this.siteSettings = siteSettings;
    this.page = null;
    this.loading = false;
    this.error = '';
    this.searchQuery = '';
    this.selectedCategory = 'all';
    this.categories = [{
      label: 'All Questions',
      value: 'all',
      icon: 'bi-grid-fill'
    }];
    this.faqs = [];
    // Contact Drawer / Modal State (No crude browser alert!)
    this.showContactModal = false;
    this.contactForm = {
      name: '',
      phone: '',
      email: '',
      question: ''
    };
    this.contactSubmitting = false;
    this.contactSubmitted = false;
    this.faqCurrentPage = 1;
    this.settings$ = this.siteSettings.settings$;
  }
  ngOnInit() {
    this.loadPage();
  }
  get title() {
    return this.page?.title || "Frequently Asked Questions";
  }
  get content() {
    return this.page?.content || '';
  }
  get faqPageSize() {
    return Math.max(1, this.siteSettings?.currentSettings?.faqsPerPage || 8);
  }
  get totalFaqPages() {
    return Math.max(1, Math.ceil(this.filteredFaqs.length / this.faqPageSize));
  }
  get paginatedFaqs() {
    const start = (this.faqCurrentPage - 1) * this.faqPageSize;
    return this.filteredFaqs.slice(start, start + this.faqPageSize);
  }
  get faqPaginationStart() {
    return this.filteredFaqs.length ? (this.faqCurrentPage - 1) * this.faqPageSize + 1 : 0;
  }
  get faqPaginationEnd() {
    return Math.min(this.faqCurrentPage * this.faqPageSize, this.filteredFaqs.length);
  }
  setFaqPage(page) {
    if (page >= 1 && page <= this.totalFaqPages) {
      this.faqCurrentPage = page;
      window.scrollTo({
        top: 380,
        behavior: 'smooth'
      });
    }
  }
  get faqPageNumbers() {
    const total = this.totalFaqPages;
    const curr = this.faqCurrentPage;
    const pages = [];
    const start = Math.max(1, curr - 2);
    const end = Math.min(total, curr + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  onSearchChange() {
    this.faqCurrentPage = 1;
  }
  get filteredFaqs() {
    const query = this.searchQuery.trim().toLowerCase();
    return this.faqs.filter(faq => {
      const matchesCategory = this.selectedCategory === 'all' || faq.category === this.selectedCategory;
      const matchesSearch = !query || faq.searchText.includes(query);
      return matchesCategory && matchesSearch;
    });
  }
  get hasStructuredFaqs() {
    return this.faqs.length > 0;
  }
  toggleFaq(faq) {
    faq.expanded = !faq.expanded;
  }
  setCategory(categoryValue) {
    this.selectedCategory = categoryValue;
    this.faqCurrentPage = 1;
  }
  clearSearch() {
    this.searchQuery = '';
    this.selectedCategory = 'all';
    this.faqCurrentPage = 1;
  }
  expandAll() {
    this.filteredFaqs.forEach(f => f.expanded = true);
  }
  collapseAll() {
    this.filteredFaqs.forEach(f => f.expanded = false);
  }
  retryLoad() {
    this.loadPage();
  }
  // Elegant in-UI message handling (no browser alert)
  openContactModal() {
    this.showContactModal = true;
    this.contactSubmitted = false;
  }
  closeContactModal() {
    this.showContactModal = false;
  }
  submitContactInquiry() {
    if (!this.contactForm.question.trim()) return;
    this.contactSubmitting = true;
    setTimeout(() => {
      this.contactSubmitting = false;
      this.contactSubmitted = true;
      this.contactForm = {
        name: '',
        phone: '',
        email: '',
        question: ''
      };
    }, 600);
  }
  loadPage() {
    this.loading = true;
    this.error = '';
    this.staticPagesService.getPage('faqs').subscribe({
      next: page => {
        this.page = page;
        this.loading = false;
        const content = page?.content?.trim() || '';
        this.faqs = this.parseFaqItems(content);
        this.categories = this.buildCategories(this.faqs);
        if (!page) {
          this.error = 'FAQ content is currently unavailable. Please check back shortly.';
        } else if (!content) {
          this.error = 'FAQ guidelines are being updated for upcoming expeditions.';
        }
      },
      error: () => {
        this.loading = false;
        this.error = 'Unable to connect to the knowledge base. Please check your connection.';
      }
    });
  }
  parseFaqItems(content) {
    if (!content.trim() || typeof DOMParser === 'undefined') {
      return [];
    }
    const parser = new DOMParser();
    const doc = parser.parseFromString(`<div>${content}</div>`, 'text/html');
    const root = doc.body.firstElementChild;
    const detailsNodes = Array.from(doc.querySelectorAll('details'));
    const listItems = Array.from(doc.querySelectorAll('ul > li, ol > li'));
    if (detailsNodes.length > 0) {
      return detailsNodes.map((details, index) => {
        const summary = details.querySelector('summary');
        const question = summary?.textContent?.trim() || `Question ${index + 1}`;
        const answer = Array.from(details.children).filter(child => child.tagName.toLowerCase() !== 'summary').map(child => child.outerHTML).join('');
        const category = details.getAttribute('data-category')?.trim() || this.autoCategorize(question, answer);
        return {
          question,
          answer,
          category,
          expanded: index === 0,
          searchText: `${question} ${answer} ${category}`.toLowerCase()
        };
      });
    }
    if (listItems.length > 0) {
      return listItems.map((li, index) => this.parseListFaqItem(li, index));
    }
    if (!root) {
      return [];
    }
    const items = [];
    let currentTitle = '';
    let currentParts = [];
    let counter = 1;
    const flush = () => {
      if (!currentTitle && !currentParts.length) {
        return;
      }
      const question = currentTitle || `Question ${counter}`;
      const answer = currentParts.join('').trim();
      const category = this.autoCategorize(question, answer);
      items.push({
        question,
        answer,
        category,
        expanded: items.length === 0,
        searchText: `${question} ${answer} ${category}`.toLowerCase()
      });
      counter += 1;
      currentTitle = '';
      currentParts = [];
    };
    Array.from(root.childNodes).forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node;
        const tagName = element.tagName.toLowerCase();
        if (/^h[1-6]$/.test(tagName)) {
          flush();
          currentTitle = element.textContent?.trim() || `Question ${counter}`;
          return;
        }
        if (!currentTitle && !currentParts.length) {
          currentTitle = `Question ${counter}`;
        }
        currentParts.push(element.outerHTML);
        return;
      }
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent?.trim();
        if (!text) {
          return;
        }
        if (!currentTitle && !currentParts.length) {
          currentTitle = `Question ${counter}`;
        }
        currentParts.push(`<p>${this.escapeHtml(text)}</p>`);
      }
    });
    flush();
    if (!items.length && content.trim()) {
      items.push({
        question: 'Expedition Guidance',
        answer: content,
        category: 'General',
        expanded: true,
        searchText: content.toLowerCase()
      });
    }
    return items;
  }
  parseListFaqItem(li, index) {
    const titleNode = li.querySelector(':scope > strong, :scope > b, :scope > h3, :scope > h4, :scope > h5, :scope > h6');
    const title = titleNode?.textContent?.trim() || `Question ${index + 1}`;
    const clone = li.cloneNode(true);
    const cloneFirst = clone.firstElementChild;
    if (cloneFirst && ['STRONG', 'B', 'H3', 'H4', 'H5', 'H6'].includes(cloneFirst.tagName)) {
      cloneFirst.remove();
      if (clone.firstElementChild?.tagName === 'BR') {
        clone.firstElementChild.remove();
      }
    }
    const answer = clone.innerHTML.trim() || `<p>${this.escapeHtml(li.textContent || '')}</p>`;
    const category = this.autoCategorize(title, answer);
    return {
      question: title,
      answer,
      category,
      expanded: index === 0,
      searchText: `${title} ${answer} ${category}`.toLowerCase()
    };
  }
  autoCategorize(question, answer) {
    const text = `${question} ${answer}`.toLowerCase();
    if (/cancel|refund|payment|price|package|charge|cost|upi|card|booking|reschedul/.test(text)) {
      return 'Bookings & Payments';
    }
    if (/shoe|wear|cloth|gear|luggage|pack|backpack|raincoat|poncho|fitness|beginner|stamina/.test(text)) {
      return 'Preparation & Gear';
    }
    if (/safety|permit|forest|emergency|doctor|medical|solo|safe|age|kid|weather|rain|first aid/.test(text)) {
      return 'Safety & Permits';
    }
    if (/stay|tent|room|hotel|food|meal|diet|water|drinking|washroom|toilet|network|signal|transport|pickup/.test(text)) {
      return 'Trail Logistics & Stay';
    }
    return 'General Queries';
  }
  buildCategories(items) {
    const categoryIconMap = {
      'Bookings & Payments': 'bi-credit-card-fill',
      'Preparation & Gear': 'bi-backpack2-fill',
      'Safety & Permits': 'bi-shield-check',
      'Trail Logistics & Stay': 'bi-compass-fill',
      'General Queries': 'bi-info-circle-fill'
    };
    const uniqueCategories = Array.from(new Set(items.map(item => item.category).filter(Boolean)));
    return [{
      label: 'All Questions',
      value: 'all',
      icon: 'bi-grid-fill'
    }, ...uniqueCategories.map(cat => ({
      label: cat,
      value: cat,
      icon: categoryIconMap[cat] || 'bi-bookmark-fill'
    }))];
  }
  escapeHtml(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  static #_ = _staticBlock = () => (this.ɵfac = function FaqsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FaqsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_static_pages_service__WEBPACK_IMPORTED_MODULE_5__.StaticPagesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_site_settings_service__WEBPACK_IMPORTED_MODULE_6__.SiteSettingsService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: FaqsComponent,
    selectors: [["app-faqs"]],
    decls: 2,
    vars: 3,
    consts: [["class", "faq-page", 4, "ngIf"], [1, "faq-page"], [1, "faq-hero"], [1, "faq-hero-container"], [1, "faq-badge"], [1, "bi", "bi-patch-question-fill", "text-emerald"], [1, "faq-hero-title"], [1, "faq-hero-subtitle"], [1, "faq-search-wrapper"], [1, "faq-search-box"], [1, "bi", "bi-search", "search-icon"], ["type", "text", "placeholder", "Search questions (e.g. permits, shoes, cancellation, tents)...", "aria-label", "Search frequently asked questions", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "clear-search-btn", "title", "Clear search", 3, "click", 4, "ngIf"], ["class", "faq-search-hints", 4, "ngIf"], [1, "faq-main-content"], [1, "faq-container"], ["class", "faq-category-nav", 4, "ngIf"], ["class", "faq-controls-bar", 4, "ngIf"], ["class", "faq-loading-state", 4, "ngIf"], ["class", "faq-error-card", 4, "ngIf"], ["class", "faq-empty-state", 4, "ngIf"], ["class", "faq-accordion-list", 4, "ngIf"], ["class", "faq-pagination-bar", 4, "ngIf"], ["class", "faq-unstructured-wrap", 4, "ngIf"], [1, "faq-support-section"], [1, "support-card"], [1, "support-content"], [1, "support-badge"], [1, "bi", "bi-headset"], [1, "support-actions"], ["target", "_blank", "rel", "noopener", "class", "btn-support btn-wa", 3, "href", 4, "ngIf"], ["class", "btn-support btn-phone", 3, "href", 4, "ngIf"], ["type", "button", 1, "btn-support", "btn-inquire", 3, "click"], [1, "bi", "bi-envelope-paper-fill"], [1, "support-graphic"], [1, "support-avatar-group"], [1, "mini-avatar"], [1, "bi", "bi-person-fill"], [1, "bi", "bi-shield-check"], [1, "bi", "bi-compass"], [1, "support-stat-note"], ["class", "inquiry-modal-backdrop", 3, "click", 4, "ngIf"], ["type", "button", "title", "Clear search", 1, "clear-search-btn", 3, "click"], [1, "bi", "bi-x-circle-fill"], [1, "faq-search-hints"], [1, "hint-label"], ["type", "button", 1, "hint-tag", 3, "click"], [1, "faq-category-nav"], ["type", "button", "class", "cat-chip", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "cat-chip", 3, "click"], [1, "bi", 3, "ngClass"], [1, "faq-controls-bar"], [1, "results-info"], ["class", "filter-indicator", 4, "ngIf"], [1, "action-toggles"], ["type", "button", 1, "toggle-btn", 3, "click"], [1, "bi", "bi-arrows-expand", "me-1"], [1, "bi", "bi-arrows-collapse", "me-1"], [1, "filter-indicator"], [1, "faq-loading-state"], ["role", "status", 1, "spinner-border", "text-success"], [1, "visually-hidden"], [1, "faq-error-card"], [1, "error-icon-box"], [1, "bi", "bi-wifi-off"], [1, "error-text"], ["type", "button", 1, "btn-retry", 3, "click"], [1, "bi", "bi-arrow-clockwise", "me-1"], [1, "faq-empty-state"], [1, "empty-icon-wrap"], [1, "bi", "bi-search"], ["type", "button", 1, "btn-reset-search", 3, "click"], [1, "bi", "bi-arrow-counterclockwise", "me-1"], [1, "faq-accordion-list"], ["class", "faq-card", 3, "is-expanded", 4, "ngFor", "ngForOf"], [1, "faq-card"], ["type", "button", 1, "faq-question-btn", 3, "click"], [1, "q-left"], [1, "q-num"], [1, "q-text-wrap"], [1, "q-category-tag"], [1, "q-title"], [1, "q-chevron"], [1, "bi", "bi-chevron-down"], ["class", "faq-answer-panel", 4, "ngIf"], [1, "faq-answer-panel"], [1, "answer-content", 3, "innerHTML"], [1, "faq-pagination-bar"], [1, "faq-pagination-meta"], [1, "faq-pagination-nav"], ["type", "button", "aria-label", "Previous Page", 1, "faq-pg-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left", "me-1"], [1, "faq-pg-numbers"], ["type", "button", "class", "faq-num-pill", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Next Page", 1, "faq-pg-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-right", "ms-1"], ["type", "button", 1, "faq-num-pill", 3, "click"], [1, "faq-unstructured-wrap"], [1, "article-body", 3, "innerHTML"], ["target", "_blank", "rel", "noopener", 1, "btn-support", "btn-wa", 3, "href"], [1, "bi", "bi-whatsapp"], [1, "btn-support", "btn-phone", 3, "href"], [1, "bi", "bi-telephone-fill"], [1, "inquiry-modal-backdrop", 3, "click"], [1, "inquiry-modal-card", 3, "click"], [1, "modal-header"], [1, "modal-title-group"], [1, "modal-icon"], [1, "bi", "bi-chat-left-dots-fill"], ["type", "button", "aria-label", "Close", 1, "btn-close-modal", 3, "click"], [1, "bi", "bi-x-lg"], ["class", "modal-body", 4, "ngIf"], ["class", "modal-body success-state", 4, "ngIf"], [1, "modal-body"], [3, "ngSubmit"], [1, "form-group", "mb-3"], [1, "form-label"], ["type", "text", "name", "name", "placeholder", "e.g. Jagadish Kumar", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "row", "g-2", "mb-3"], [1, "col-6"], ["type", "tel", "name", "phone", "placeholder", "10-digit number", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "you@domain.com", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-group", "mb-4"], ["rows", "4", "name", "question", "placeholder", "Ask about Kudremukha permits, difficulty, dates, customized groups, or payment questions...", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", 4, "ngIf"], ["class", "bi bi-send-fill me-1", 4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-send-fill", "me-1"], [1, "modal-body", "success-state"], [1, "success-icon-box"], [1, "bi", "bi-check-circle-fill"], ["type", "button", 1, "btn-submit", "w-100", "mt-3", 3, "click"]],
    template: function FaqsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FaqsComponent_div_0_Template, 58, 15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.settings$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe],
    styles: [".faq-page[_ngcontent-%COMP%] {\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  color: #1e293b;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  padding-bottom: 80px;\n}\n\n.faq-hero[_ngcontent-%COMP%] {\n  background: radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.12) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(20, 83, 45, 0.08) 0%, transparent 45%), linear-gradient(180deg, #092615 0%, #0d3820 100%);\n  color: #ffffff;\n  padding: 64px 20px 48px;\n  position: relative;\n  overflow: hidden;\n}\n.faq-hero[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 32px;\n  background: linear-gradient(to bottom, transparent, #f8fafc);\n  pointer-events: none;\n}\n\n.faq-hero-container[_ngcontent-%COMP%] {\n  max-width: 860px;\n  margin: 0 auto;\n  text-align: center;\n  position: relative;\n  z-index: 2;\n}\n\n.faq-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  padding: 6px 14px;\n  border-radius: 9999px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  color: #a7f3d0;\n  margin-bottom: 16px;\n}\n.faq-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #34d399;\n}\n\n.faq-hero-title[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", \"Outfit\", Georgia, serif;\n  font-size: clamp(2rem, 4vw, 3rem);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.15;\n  margin-bottom: 12px;\n  color: #ffffff;\n}\n\n.faq-hero-subtitle[_ngcontent-%COMP%] {\n  font-size: clamp(0.95rem, 2vw, 1.1rem);\n  line-height: 1.6;\n  color: #cbd5e1;\n  max-width: 680px;\n  margin: 0 auto 32px;\n}\n\n.faq-search-wrapper[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin: 0 auto;\n}\n\n.faq-search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 6px 16px;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 8px 10px -6px rgba(0, 0, 0, 0.2);\n  border: 2px solid transparent;\n  transition: all 0.2s ease;\n}\n.faq-search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #10b981;\n  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2), 0 12px 30px -5px rgba(0, 0, 0, 0.3);\n}\n.faq-search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #059669;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n.faq-search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  font-family: inherit;\n  color: #0f172a;\n  padding: 10px 0;\n  background: transparent;\n}\n.faq-search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n  font-size: 0.9375rem;\n}\n.faq-search-box[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  font-size: 1.125rem;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  transition: color 0.15s ease;\n}\n.faq-search-box[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n\n.faq-search-hints[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 14px;\n  font-size: 0.8125rem;\n}\n.faq-search-hints[_ngcontent-%COMP%]   .hint-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 500;\n}\n.faq-search-hints[_ngcontent-%COMP%]   .hint-tag[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  color: #e2e8f0;\n  padding: 4px 10px;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.faq-search-hints[_ngcontent-%COMP%]   .hint-tag[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  color: #ffffff;\n  transform: translateY(-1px);\n}\n\n.faq-main-content[_ngcontent-%COMP%] {\n  padding: 32px 20px 0;\n}\n\n.faq-container[_ngcontent-%COMP%] {\n  max-width: 920px;\n  margin: 0 auto;\n}\n\n.faq-category-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  overflow-x: auto;\n  padding: 4px 2px 14px;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.faq-category-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.faq-category-nav[_ngcontent-%COMP%]   .cat-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 18px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 9999px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.faq-category-nav[_ngcontent-%COMP%]   .cat-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #64748b;\n  transition: color 0.2s ease;\n}\n.faq-category-nav[_ngcontent-%COMP%]   .cat-chip[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n  border-color: #cbd5e1;\n}\n.faq-category-nav[_ngcontent-%COMP%]   .cat-chip.active[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  border-color: #0f3d23;\n  color: #ffffff;\n  box-shadow: 0 4px 12px rgba(15, 61, 35, 0.2);\n}\n.faq-category-nav[_ngcontent-%COMP%]   .cat-chip.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n\n.faq-controls-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 16px 0 20px;\n  padding: 0 4px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.faq-controls-bar[_ngcontent-%COMP%]   .results-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.faq-controls-bar[_ngcontent-%COMP%]   .results-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.faq-controls-bar[_ngcontent-%COMP%]   .results-info[_ngcontent-%COMP%]   .filter-indicator[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  color: #059669;\n  font-weight: 500;\n}\n.faq-controls-bar[_ngcontent-%COMP%]   .action-toggles[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.faq-controls-bar[_ngcontent-%COMP%]   .action-toggles[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #cbd5e1;\n  padding: 5px 12px;\n  border-radius: 8px;\n  font-size: 0.78125rem;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.15s ease;\n}\n.faq-controls-bar[_ngcontent-%COMP%]   .action-toggles[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  color: #0f172a;\n  border-color: #94a3b8;\n}\n\n.faq-accordion-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.faq-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  overflow: hidden;\n}\n.faq-card[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);\n}\n.faq-card.is-expanded[_ngcontent-%COMP%] {\n  border-color: #86efac;\n  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.08);\n}\n.faq-card.is-expanded[_ngcontent-%COMP%]   .faq-question-btn[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n}\n.faq-card.is-expanded[_ngcontent-%COMP%]   .faq-question-btn[_ngcontent-%COMP%]   .q-num[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  color: #34d399;\n}\n\n.faq-question-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  gap: 16px;\n  transition: background 0.2s ease;\n}\n.faq-question-btn[_ngcontent-%COMP%]   .q-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  flex: 1;\n}\n.faq-question-btn[_ngcontent-%COMP%]   .q-left[_ngcontent-%COMP%]   .q-num[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #f1f5f9;\n  color: #64748b;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  margin-top: 2px;\n}\n.faq-question-btn[_ngcontent-%COMP%]   .q-left[_ngcontent-%COMP%]   .q-text-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.faq-question-btn[_ngcontent-%COMP%]   .q-left[_ngcontent-%COMP%]   .q-text-wrap[_ngcontent-%COMP%]   .q-category-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #059669;\n  margin-bottom: 4px;\n}\n.faq-question-btn[_ngcontent-%COMP%]   .q-left[_ngcontent-%COMP%]   .q-text-wrap[_ngcontent-%COMP%]   .q-title[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  font-weight: 600;\n  line-height: 1.45;\n  color: #0f172a;\n  margin: 0;\n}\n.faq-question-btn[_ngcontent-%COMP%]   .q-chevron[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.faq-question-btn[_ngcontent-%COMP%]   .q-chevron.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  background: #059669;\n  border-color: #059669;\n  color: #ffffff;\n}\n\n.faq-answer-panel[_ngcontent-%COMP%] {\n  padding: 0 24px 22px 72px;\n  animation: _ngcontent-%COMP%_fadeInDown 0.25s ease-out;\n}\n@media (max-width: 640px) {\n  .faq-answer-panel[_ngcontent-%COMP%] {\n    padding-left: 20px;\n  }\n}\n.faq-answer-panel[_ngcontent-%COMP%]   .answer-content[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  line-height: 1.75;\n  color: #334155;\n}\n.faq-answer-panel[_ngcontent-%COMP%]   .answer-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.faq-answer-panel[_ngcontent-%COMP%]   .answer-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.faq-answer-panel[_ngcontent-%COMP%]   .answer-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .faq-answer-panel[_ngcontent-%COMP%]   .answer-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 8px 0 12px 18px;\n  padding: 0;\n}\n.faq-answer-panel[_ngcontent-%COMP%]   .answer-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .faq-answer-panel[_ngcontent-%COMP%]   .answer-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.faq-answer-panel[_ngcontent-%COMP%]   .answer-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n\n.faq-loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #64748b;\n}\n.faq-loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  font-size: 0.9375rem;\n}\n\n.faq-error-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  border: 1px solid #fed7aa;\n  border-left: 4px solid #f97316;\n  border-radius: 12px;\n  padding: 20px 24px;\n  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.08);\n  margin: 20px 0;\n}\n.faq-error-card[_ngcontent-%COMP%]   .error-icon-box[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  background: #fff7ed;\n  color: #ea580c;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.faq-error-card[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.faq-error-card[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #9a3412;\n  margin: 0 0 4px;\n}\n.faq-error-card[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #7c2d12;\n  margin: 0;\n}\n.faq-error-card[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  background: #ea580c;\n  color: #ffffff;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  transition: background 0.15s ease;\n}\n.faq-error-card[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover {\n  background: #c2410c;\n}\n\n.faq-empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 56px 20px;\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px dashed #cbd5e1;\n  margin: 24px 0;\n}\n.faq-empty-state[_ngcontent-%COMP%]   .empty-icon-wrap[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #f1f5f9;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  margin: 0 auto 16px;\n}\n.faq-empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 8px;\n}\n.faq-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #64748b;\n  max-width: 480px;\n  margin: 0 auto 20px;\n}\n.faq-empty-state[_ngcontent-%COMP%]   .btn-reset-search[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  color: #ffffff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.2s ease;\n}\n.faq-empty-state[_ngcontent-%COMP%]   .btn-reset-search[_ngcontent-%COMP%]:hover {\n  background: #14532d;\n  transform: translateY(-1px);\n}\n\n.faq-pagination-bar[_ngcontent-%COMP%] {\n  margin-top: 28px;\n  padding: 14px 20px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 16px;\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);\n}\n.faq-pagination-bar[_ngcontent-%COMP%]   .faq-pagination-meta[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #475569;\n}\n.faq-pagination-bar[_ngcontent-%COMP%]   .faq-pagination-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n}\n.faq-pagination-bar[_ngcontent-%COMP%]   .faq-pagination-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.faq-pagination-bar[_ngcontent-%COMP%]   .faq-pagination-nav[_ngcontent-%COMP%]   .faq-pg-btn[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  font-size: 0.84rem;\n  font-weight: 600;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #1e293b;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.2s ease;\n}\n.faq-pagination-bar[_ngcontent-%COMP%]   .faq-pagination-nav[_ngcontent-%COMP%]   .faq-pg-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f1f5f9;\n  border-color: #94a3b8;\n}\n.faq-pagination-bar[_ngcontent-%COMP%]   .faq-pagination-nav[_ngcontent-%COMP%]   .faq-pg-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.faq-pagination-bar[_ngcontent-%COMP%]   .faq-pagination-nav[_ngcontent-%COMP%]   .faq-pg-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.faq-pagination-bar[_ngcontent-%COMP%]   .faq-pagination-nav[_ngcontent-%COMP%]   .faq-num-pill[_ngcontent-%COMP%] {\n  min-width: 34px;\n  height: 34px;\n  padding: 0 6px;\n  font-size: 0.84rem;\n  font-weight: 600;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  background: #f8fafc;\n  color: #334155;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  transition: all 0.2s ease;\n}\n.faq-pagination-bar[_ngcontent-%COMP%]   .faq-pagination-nav[_ngcontent-%COMP%]   .faq-num-pill[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.faq-pagination-bar[_ngcontent-%COMP%]   .faq-pagination-nav[_ngcontent-%COMP%]   .faq-num-pill.active[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  color: #ffffff;\n  border-color: #0f3d23;\n  font-weight: 700;\n  box-shadow: 0 2px 8px rgba(15, 61, 35, 0.35);\n}\n\n.faq-support-section[_ngcontent-%COMP%] {\n  margin-top: 56px;\n}\n\n.support-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #092615 0%, #0d3820 60%, #154d2e 100%);\n  border-radius: 24px;\n  padding: 36px 40px;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 32px;\n  box-shadow: 0 20px 40px -15px rgba(9, 38, 21, 0.4);\n  position: relative;\n  overflow: hidden;\n}\n.support-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -50px;\n  right: -50px;\n  width: 250px;\n  height: 250px;\n  background: radial-gradient(circle, rgba(52, 211, 153, 0.2) 0%, transparent 70%);\n  border-radius: 50%;\n}\n@media (max-width: 768px) {\n  .support-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 28px 24px;\n    text-align: center;\n  }\n}\n.support-card[_ngcontent-%COMP%]   .support-content[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  z-index: 2;\n}\n.support-card[_ngcontent-%COMP%]   .support-content[_ngcontent-%COMP%]   .support-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #34d399;\n  background: rgba(52, 211, 153, 0.12);\n  padding: 4px 10px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n}\n.support-card[_ngcontent-%COMP%]   .support-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", \"Outfit\", Georgia, serif;\n  font-size: clamp(1.35rem, 2.5vw, 1.75rem);\n  font-weight: 700;\n  color: #ffffff;\n  line-height: 1.3;\n  margin-bottom: 10px;\n}\n.support-card[_ngcontent-%COMP%]   .support-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #cbd5e1;\n  line-height: 1.6;\n  max-width: 540px;\n  margin-bottom: 24px;\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%]   .btn-support[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 20px;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%]   .btn-support[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%]   .btn-support.btn-wa[_ngcontent-%COMP%] {\n  background: #25d366;\n  color: #ffffff;\n  box-shadow: 0 4px 14px rgba(37, 211, 102, 0.3);\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%]   .btn-support.btn-wa[_ngcontent-%COMP%]:hover {\n  background: #20bd5a;\n  transform: translateY(-2px);\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%]   .btn-support.btn-phone[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: #ffffff;\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%]   .btn-support.btn-phone[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.22);\n  transform: translateY(-2px);\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%]   .btn-support.btn-inquire[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #0f3d23;\n  border: none;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%]   .btn-support.btn-inquire[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  transform: translateY(-2px);\n}\n.support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  position: relative;\n  z-index: 2;\n}\n@media (max-width: 768px) {\n  .support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%] {\n    margin-top: 8px;\n  }\n}\n.support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%]   .support-avatar-group[_ngcontent-%COMP%] {\n  display: flex;\n}\n.support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%]   .support-avatar-group[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #14532d;\n  border: 2px solid #092615;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #a7f3d0;\n  font-size: 1.125rem;\n  margin-left: -12px;\n}\n.support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%]   .support-avatar-group[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n  background: #1e3a8a;\n  color: #93c5fd;\n}\n.support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%]   .support-avatar-group[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%]:last-child {\n  background: #b45309;\n  color: #fde68a;\n}\n.support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%]   .support-stat-note[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%]   .support-stat-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: #ffffff;\n}\n.support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%]   .support-stat-note[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n\n.inquiry-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.7);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n\n.inquiry-modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  max-width: 520px;\n  width: 100%;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 24px 24px 16px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title-group[_ngcontent-%COMP%]   .modal-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  background: #dcfce7;\n  color: #15803d;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n  margin: 2px 0 0;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close-modal[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  color: #64748b;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close-modal[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px 24px;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 6px;\n  display: block;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.9375rem;\n  font-family: inherit;\n  color: #0f172a;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #10b981;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n  font-size: 0.875rem;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 10px 18px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  border: none;\n  color: #ffffff;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 10px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  transition: background 0.15s ease;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:hover {\n  background: #14532d;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body.success-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 24px;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body.success-state[_ngcontent-%COMP%]   .success-icon-box[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #dcfce7;\n  color: #15803d;\n  font-size: 2.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body.success-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 8px;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body.success-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #64748b;\n  line-height: 1.6;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmFxcy9mYXFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsdUZBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSEY7O0FBT0E7RUFDRSwrTkFBQTtFQUdBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFORjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLDREQUFBO0VBQ0Esb0JBQUE7QUFOSjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBUEY7O0FBVUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVBGO0FBU0U7RUFDRSxvQkFBQTtFQUNBLGNBQUE7QUFQSjs7QUFXQTtFQUNFLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFSRjs7QUFXQTtFQUNFLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVJGOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvRkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUFURjtBQVdFO0VBQ0UscUJBQUE7RUFDQSxrRkFBQTtBQVRKO0FBWUU7RUFDRSxr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Q0EsaUNBQUE7QUEzR1I7QUE2R1E7RUFDRSxtQkFBQTtBQTNHVjtBQThHUTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQTVHVjtBQWlISTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUEvR047QUFpSE07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBL0dSO0FBa0hNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWhIUjtBQW1ITTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBakhSOztBQXdIQTtFQUNFO0lBQU8sVUFBQTtFQXBIUDtFQXFIQTtJQUFLLFVBQUE7RUFsSEw7QUFDRjtBQW9IQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBbEhGO0VBb0hBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBbEhGO0FBQ0Y7QUFxSEE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQW5IRjtFQXFIQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQW5IRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRkFRUyBDT01QT05FTlQgU0NTUyAtIE1PREVSTiBXSUxERVJORVNTIExVWFVSWVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4uZmFxLXBhZ2Uge1xuICBmb250LWZhbWlseTogJ0ludGVyJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMWUyOTNiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBIZXJvIFNlY3Rpb24gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZmFxLWhlcm8ge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEwJSAyMCUsIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEyKSAwJSwgdHJhbnNwYXJlbnQgNDAlKSxcbiAgICAgICAgICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA5MCUgODAlLCByZ2JhKDIwLCA4MywgNDUsIDAuMDgpIDAlLCB0cmFuc3BhcmVudCA0NSUpLFxuICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDkyNjE1IDAlLCAjMGQzODIwIDEwMCUpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogNjRweCAyMHB4IDQ4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCwgI2Y4ZmFmYyk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuLmZhcS1oZXJvLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogODYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cblxuLmZhcS1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICBwYWRkaW5nOiA2cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY29sb3I6ICNhN2YzZDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgaSB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gICAgY29sb3I6ICMzNGQzOTk7XG4gIH1cbn1cblxuLmZhcS1oZXJvLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdDaW56ZWwnLCAnT3V0Zml0JywgR2VvcmdpYSwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNHZ3LCAzcmVtKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZhcS1oZXJvLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiBjbGFtcCgwLjk1cmVtLCAydncsIDEuMXJlbSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGNvbG9yOiAjY2JkNWUxO1xuICBtYXgtd2lkdGg6IDY4MHB4O1xuICBtYXJnaW46IDAgYXV0byAzMnB4O1xufVxuXG4vLyDDosKUwoDDosKUwoAgTGl2ZSBTZWFyY2ggQmFyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZhcS1zZWFyY2gtd3JhcHBlciB7XG4gIG1heC13aWR0aDogNjgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZmFxLXNlYXJjaC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDhweCAxMHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTBiOTgxO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4yKSwgMCAxMnB4IDMwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cblxuICAuc2VhcmNoLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBjb2xvcjogIzA1OTY2OTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgZmxleDogMTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgY29sb3I6ICMwZjE3MmE7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgICB9XG4gIH1cblxuICAuY2xlYXItc2VhcmNoLWJ0biB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICM5NGEzYjg7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICB9XG4gIH1cbn1cblxuLmZhcS1zZWFyY2gtaGludHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XG5cbiAgLmhpbnQtbGFiZWwge1xuICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAuaGludC10YWcge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcbiAgICBjb2xvcjogI2UyZThmMDtcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBNYWluIENvbnRlbnQgQ29udGFpbmVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZhcS1tYWluLWNvbnRlbnQge1xuICBwYWRkaW5nOiAzMnB4IDIwcHggMDtcbn1cblxuLmZhcS1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDkyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLy8gw6LClMKAw6LClMKAIENhdGVnb3J5IFBpbGwgTmF2IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZhcS1jYXRlZ29yeS1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogNHB4IDJweCAxNHB4O1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jYXQtY2hpcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiA5cHggMThweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwZjNkMjM7XG4gICAgICBib3JkZXItY29sb3I6ICMwZjNkMjM7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxNSwgNjEsIDM1LCAwLjIpO1xuXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6ICMzNGQzOTk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBDb250cm9scyBCYXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZmFxLWNvbnRyb2xzLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAxNnB4IDAgMjBweDtcbiAgcGFkZGluZzogMCA0cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMnB4O1xuXG4gIC5yZXN1bHRzLWluZm8ge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgY29sb3I6ICM2NDc0OGI7XG5cbiAgICBzdHJvbmcge1xuICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgfVxuXG4gICAgLmZpbHRlci1pbmRpY2F0b3Ige1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgIGNvbG9yOiAjMDU5NjY5O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cblxuICAuYWN0aW9uLXRvZ2dsZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAudG9nZ2xlLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gICAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMC43ODEyNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzk0YTNiODtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEFjY29yZGlvbiBGQVEgQ2FyZHMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZmFxLWFjY29yZGlvbi1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNHB4O1xufVxuXG4uZmFxLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cblxuICAmLmlzLWV4cGFuZGVkIHtcbiAgICBib3JkZXItY29sb3I6ICM4NmVmYWM7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4wOCk7XG5cbiAgICAuZmFxLXF1ZXN0aW9uLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmZGY0O1xuXG4gICAgICAucS1udW0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMGYzZDIzO1xuICAgICAgICBjb2xvcjogIzM0ZDM5OTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZhcS1xdWVzdGlvbi1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxOHB4IDIycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZ2FwOiAxNnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcblxuICAucS1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTZweDtcbiAgICBmbGV4OiAxO1xuXG4gICAgLnEtbnVtIHtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICB9XG5cbiAgICAucS10ZXh0LXdyYXAge1xuICAgICAgZmxleDogMTtcblxuICAgICAgLnEtY2F0ZWdvcnktdGFnIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgICAgICAgY29sb3I6ICMwNTk2Njk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIH1cblxuICAgICAgLnEtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuMDYyNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnEtY2hldnJvbiB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgY29sb3I6ICM2NDc0OGI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcblxuICAgICYucm90YXRlZCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgYmFja2dyb3VuZDogIzA1OTY2OTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzA1OTY2OTtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxufVxuXG4uZmFxLWFuc3dlci1wYW5lbCB7XG4gIHBhZGRpbmc6IDAgMjRweCAyMnB4IDcycHg7XG4gIGFuaW1hdGlvbjogZmFkZUluRG93biAwLjI1cyBlYXNlLW91dDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cblxuICAuYW5zd2VyLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgIGNvbG9yOiAjMzM0MTU1O1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1bCwgb2wge1xuICAgICAgbWFyZ2luOiA4cHggMCAxMnB4IDE4cHg7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBsaSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdHJvbmcge1xuICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgU3RhdGVzIChMb2FkaW5nLCBFcnJvciwgRW1wdHkpIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZhcS1sb2FkaW5nLXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gIGNvbG9yOiAjNjQ3NDhiO1xuXG4gIHAge1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIH1cbn1cblxuLmZhcS1lcnJvci1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmVkN2FhO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNmOTczMTY7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDI0OSwgMTE1LCAyMiwgMC4wOCk7XG4gIG1hcmdpbjogMjBweCAwO1xuXG4gIC5lcnJvci1pY29uLWJveCB7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjdlZDtcbiAgICBjb2xvcjogI2VhNTgwYztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG5cbiAgLmVycm9yLXRleHQge1xuICAgIGZsZXg6IDE7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICM5YTM0MTI7XG4gICAgICBtYXJnaW46IDAgMCA0cHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgY29sb3I6ICM3YzJkMTI7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi1yZXRyeSB7XG4gICAgYmFja2dyb3VuZDogI2VhNTgwYztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjYzI0MTBjO1xuICAgIH1cbiAgfVxufVxuXG4uZmFxLWVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1NnB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjY2JkNWUxO1xuICBtYXJnaW46IDI0cHggMDtcblxuICAuZW1wdHktaWNvbi13cmFwIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgY29sb3I6ICM5NGEzYjg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbjogMCBhdXRvIDE2cHg7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMxZTI5M2I7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gICAgY29sb3I6ICM2NDc0OGI7XG4gICAgbWF4LXdpZHRoOiA0ODBweDtcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICB9XG5cbiAgLmJ0bi1yZXNldC1zZWFyY2gge1xuICAgIGJhY2tncm91bmQ6ICMwZjNkMjM7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMTQ1MzJkO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgRkFRIFBhZ2luYXRpb24gQ29udHJvbHMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZmFxLXBhZ2luYXRpb24tYmFyIHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wNCk7XG5cbiAgLmZhcS1wYWdpbmF0aW9uLW1ldGEge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgY29sb3I6ICM0NzU1Njk7XG5cbiAgICBzdHJvbmcge1xuICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbiAgfVxuXG4gIC5mYXEtcGFnaW5hdGlvbi1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcblxuICAgIC5mYXEtcGctYnRuIHtcbiAgICAgIHBhZGRpbmc6IDdweCAxNHB4O1xuICAgICAgZm9udC1zaXplOiAwLjg0cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgY29sb3I6ICMxZTI5M2I7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjOTRhM2I4O1xuICAgICAgfVxuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC40NTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZmFxLXBnLW51bWJlcnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDRweDtcbiAgICB9XG5cbiAgICAuZmFxLW51bS1waWxsIHtcbiAgICAgIG1pbi13aWR0aDogMzRweDtcbiAgICAgIGhlaWdodDogMzRweDtcbiAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgZm9udC1zaXplOiAwLjg0cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgICAgIGNvbG9yOiAjMzM0MTU1O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2UyZThmMDtcbiAgICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzBmM2QyMztcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzBmM2QyMztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMTUsIDYxLCAzNSwgMC4zNSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBDb25jaWVyZ2UgU3VwcG9ydCBDYXJkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZhcS1zdXBwb3J0LXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA1NnB4O1xufVxuXG4uc3VwcG9ydC1jYXJkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA5MjYxNSAwJSwgIzBkMzgyMCA2MCUsICMxNTRkMmUgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHBhZGRpbmc6IDM2cHggNDBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAzMnB4O1xuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCAtMTVweCByZ2JhKDksIDM4LCAyMSwgMC40KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTUwcHg7XG4gICAgcmlnaHQ6IC01MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoNTIsIDIxMSwgMTUzLCAwLjIpIDAlLCB0cmFuc3BhcmVudCA3MCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMjhweCAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5zdXBwb3J0LWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG5cbiAgICAuc3VwcG9ydC1iYWRnZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgICAgIGNvbG9yOiAjMzRkMzk5O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMjExLCAxNTMsIDAuMTIpO1xuICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ2luemVsJywgJ091dGZpdCcsIEdlb3JnaWEsIHNlcmlmO1xuICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjM1cmVtLCAyLjV2dywgMS43NXJlbSk7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAgICAgY29sb3I6ICNjYmQ1ZTE7XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgbWF4LXdpZHRoOiA1NDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuICB9XG5cbiAgLnN1cHBvcnQtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMnB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuYnRuLXN1cHBvcnQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBwYWRkaW5nOiAxMXB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjA2MjVyZW07XG4gICAgICB9XG5cbiAgICAgICYuYnRuLXdhIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzI1ZDM2NjtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgzNywgMjExLCAxMDIsIDAuMyk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzIwYmQ1YTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5idG4tcGhvbmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjIpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmJ0bi1pbnF1aXJlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgICAgICAgY29sb3I6ICMwZjNkMjM7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnN1cHBvcnQtZ3JhcGhpYyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuXG4gICAgLnN1cHBvcnQtYXZhdGFyLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIC5taW5pLWF2YXRhciB7XG4gICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzE0NTMyZDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzA5MjYxNTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjYTdmM2QwO1xuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEycHg7XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzFlM2E4YTtcbiAgICAgICAgICBjb2xvcjogIzkzYzVmZDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2I0NTMwOTtcbiAgICAgICAgICBjb2xvcjogI2ZkZTY4YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zdXBwb3J0LXN0YXQtbm90ZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIHN0cm9uZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBJbi1VSSBJbnF1aXJ5IE1vZGFsIChObyBCcm93c2VyIEFsZXJ0KSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5pbnF1aXJ5LW1vZGFsLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAwLjcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgei1pbmRleDogMTA1MDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5pbnF1aXJ5LW1vZGFsLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXgtd2lkdGg6IDUyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuMjVzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xuXG4gIC5tb2RhbC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDI0cHggMjRweCAxNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xuXG4gICAgLm1vZGFsLXRpdGxlLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDE0cHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAubW9kYWwtaWNvbiB7XG4gICAgICAgIHdpZHRoOiA0MnB4O1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkY2ZjZTc7XG4gICAgICAgIGNvbG9yOiAjMTU4MDNkO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgICBtYXJnaW46IDJweCAwIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi1jbG9zZS1tb2RhbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlMmU4ZjA7XG4gICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nOiAyMHB4IDI0cHggMjRweDtcblxuICAgIC5mb3JtLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzM0MTU1O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmZvcm0taW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2U7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItY29sb3I6ICMxMGI5ODE7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4xNSk7XG4gICAgICB9XG5cbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vZGFsLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgICAuYnRuLWNhbmNlbCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5idG4tc3VibWl0IHtcbiAgICAgICAgYmFja2dyb3VuZDogIzBmM2QyMztcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzE0NTMyZDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5zdWNjZXNzLXN0YXRlIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDMycHggMjRweDtcblxuICAgICAgLnN1Y2Nlc3MtaWNvbi1ib3gge1xuICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkY2ZjZTc7XG4gICAgICAgIGNvbG9yOiAjMTU4MDNkO1xuICAgICAgICBmb250LXNpemU6IDIuMjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgYXV0byAxNnB4O1xuICAgICAgfVxuXG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEFuaW1hdGlvbnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTZweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_faqs_faqs-module_ts.js.map