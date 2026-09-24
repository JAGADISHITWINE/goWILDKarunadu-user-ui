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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.searchQuery = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FaqsComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43)(1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Popular Topics:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_16_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.searchQuery = "permit");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Permits");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_16_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.searchQuery = "cancel");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Cancellation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_16_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.searchQuery = "shoes");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Trekking Shoes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_16_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.searchQuery = "water");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Water & Food");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 45);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_19_button_1_Template_button_click_0_listener() {
      const cat_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.setCategory(cat_r6.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 49);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FaqsComponent_div_0_div_19_button_1_Template, 4, 4, "button", 47);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 57);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 57);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 50)(1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FaqsComponent_div_0_div_20_span_6_Template, 4, 1, "span", 52)(7, FaqsComponent_div_0_div_20_span_7_Template, 5, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 53)(9, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_20_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.expandAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Expand All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_20_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.collapseAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 56);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "span", 60);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 61)(1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 64)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Connection Notice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_22_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.retryLoad());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 66);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 67)(1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "No matching answers found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "We couldn't find any questions matching your query. Try a different keyword or reset filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_23_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Show All Questions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FaqsComponent_div_0_div_24_article_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 85);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "article", 74)(1, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_24_article_1_Template_button_click_1_listener() {
      const faq_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleFaq(faq_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 76)(3, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 78)(6, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, FaqsComponent_div_0_div_24_article_1_div_12_Template, 2, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const faq_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-expanded", faq_r11.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-expanded", faq_r11.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Q", i_r12 + 1);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FaqsComponent_div_0_div_24_article_1_Template, 13, 9, "article", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.filteredFaqs);
  }
}
function FaqsComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.content, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function FaqsComponent_div_0_a_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Chat on WhatsApp");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const settings_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", settings_r13.whatsappLink, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function FaqsComponent_div_0_a_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const settings_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", settings_r13.telLink, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Call ", settings_r13.supportPhone || "Support");
  }
}
function FaqsComponent_div_0_div_56_div_13_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 118);
  }
}
function FaqsComponent_div_0_div_56_div_13_i_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 119);
  }
}
function FaqsComponent_div_0_div_56_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 102)(1, "form", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function FaqsComponent_div_0_div_56_div_13_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.submitContactInquiry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 104)(3, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Your Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function FaqsComponent_div_0_div_56_div_13_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.contactForm.name, $event) || (ctx_r1.contactForm.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 107)(7, "div", 108)(8, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Phone (WhatsApp)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function FaqsComponent_div_0_div_56_div_13_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.contactForm.phone, $event) || (ctx_r1.contactForm.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 108)(12, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function FaqsComponent_div_0_div_56_div_13_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.contactForm.email, $event) || (ctx_r1.contactForm.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 111)(16, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "What is your question? *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "textarea", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function FaqsComponent_div_0_div_56_div_13_Template_textarea_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.contactForm.question, $event) || (ctx_r1.contactForm.question = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 113)(20, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_56_div_13_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closeContactModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, FaqsComponent_div_0_div_56_div_13_span_23_Template, 1, 0, "span", 116)(24, FaqsComponent_div_0_div_56_div_13_i_24_Template, 1, 0, "i", 117);
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
function FaqsComponent_div_0_div_56_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 120)(1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Inquiry Received!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Thank you for reaching out. Our expedition coordinators have received your query and will reply via WhatsApp/Email shortly.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_56_div_14_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closeContactModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Back to FAQs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FaqsComponent_div_0_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_56_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closeContactModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_56_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 94)(3, "div", 95)(4, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div")(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Ask our Expedition Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "We typically respond within 15 minutes during trekking hours.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_div_56_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closeContactModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, FaqsComponent_div_0_div_56_div_13_Template, 26, 8, "div", 100)(14, FaqsComponent_div_0_div_56_div_14_Template, 9, 0, "div", 101);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, FaqsComponent_div_0_button_15_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, FaqsComponent_div_0_div_16_Template, 13, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "main", 14)(18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, FaqsComponent_div_0_div_19_Template, 2, 1, "div", 16)(20, FaqsComponent_div_0_div_20_Template, 15, 4, "div", 17)(21, FaqsComponent_div_0_div_21_Template, 6, 0, "div", 18)(22, FaqsComponent_div_0_div_22_Template, 11, 1, "div", 19)(23, FaqsComponent_div_0_div_23_Template, 10, 0, "div", 20)(24, FaqsComponent_div_0_div_24_Template, 2, 1, "div", 21)(25, FaqsComponent_div_0_div_25_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "section", 23)(27, "div", 24)(28, "div", 25)(29, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " 24/7 Trekker Assistance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Still have questions or need custom arrangements?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Our mountain leaders and expedition coordinators are on standby to help with permit slots, physical prep, and group reservations. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, FaqsComponent_div_0_a_37_Template, 4, 1, "a", 29)(38, FaqsComponent_div_0_a_38_Template, 4, 2, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FaqsComponent_div_0_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openContactModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Send Inquiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 33)(44, "div", 34)(45, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 39)(52, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Verified Guides");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Always zero spam, 100% genuine guidance");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, FaqsComponent_div_0_div_56_Template, 15, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const settings_r13 = ctx.ngIf;
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.loading && !ctx_r1.error && !ctx_r1.hasStructuredFaqs && ctx_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", settings_r13.whatsappLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", settings_r13.telLink);
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
  }
  clearSearch() {
    this.searchQuery = '';
    this.selectedCategory = 'all';
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
    consts: [["class", "faq-page", 4, "ngIf"], [1, "faq-page"], [1, "faq-hero"], [1, "faq-hero-container"], [1, "faq-badge"], [1, "bi", "bi-patch-question-fill", "text-emerald"], [1, "faq-hero-title"], [1, "faq-hero-subtitle"], [1, "faq-search-wrapper"], [1, "faq-search-box"], [1, "bi", "bi-search", "search-icon"], ["type", "text", "placeholder", "Search questions (e.g. permits, shoes, cancellation, tents)...", "aria-label", "Search frequently asked questions", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "clear-search-btn", "title", "Clear search", 3, "click", 4, "ngIf"], ["class", "faq-search-hints", 4, "ngIf"], [1, "faq-main-content"], [1, "faq-container"], ["class", "faq-category-nav", 4, "ngIf"], ["class", "faq-controls-bar", 4, "ngIf"], ["class", "faq-loading-state", 4, "ngIf"], ["class", "faq-error-card", 4, "ngIf"], ["class", "faq-empty-state", 4, "ngIf"], ["class", "faq-accordion-list", 4, "ngIf"], ["class", "faq-unstructured-wrap", 4, "ngIf"], [1, "faq-support-section"], [1, "support-card"], [1, "support-content"], [1, "support-badge"], [1, "bi", "bi-headset"], [1, "support-actions"], ["target", "_blank", "rel", "noopener", "class", "btn-support btn-wa", 3, "href", 4, "ngIf"], ["class", "btn-support btn-phone", 3, "href", 4, "ngIf"], ["type", "button", 1, "btn-support", "btn-inquire", 3, "click"], [1, "bi", "bi-envelope-paper-fill"], [1, "support-graphic"], [1, "support-avatar-group"], [1, "mini-avatar"], [1, "bi", "bi-person-fill"], [1, "bi", "bi-shield-check"], [1, "bi", "bi-compass"], [1, "support-stat-note"], ["class", "inquiry-modal-backdrop", 3, "click", 4, "ngIf"], ["type", "button", "title", "Clear search", 1, "clear-search-btn", 3, "click"], [1, "bi", "bi-x-circle-fill"], [1, "faq-search-hints"], [1, "hint-label"], ["type", "button", 1, "hint-tag", 3, "click"], [1, "faq-category-nav"], ["type", "button", "class", "cat-chip", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "cat-chip", 3, "click"], [1, "bi", 3, "ngClass"], [1, "faq-controls-bar"], [1, "results-info"], ["class", "filter-indicator", 4, "ngIf"], [1, "action-toggles"], ["type", "button", 1, "toggle-btn", 3, "click"], [1, "bi", "bi-arrows-expand", "me-1"], [1, "bi", "bi-arrows-collapse", "me-1"], [1, "filter-indicator"], [1, "faq-loading-state"], ["role", "status", 1, "spinner-border", "text-success"], [1, "visually-hidden"], [1, "faq-error-card"], [1, "error-icon-box"], [1, "bi", "bi-wifi-off"], [1, "error-text"], ["type", "button", 1, "btn-retry", 3, "click"], [1, "bi", "bi-arrow-clockwise", "me-1"], [1, "faq-empty-state"], [1, "empty-icon-wrap"], [1, "bi", "bi-search"], ["type", "button", 1, "btn-reset-search", 3, "click"], [1, "bi", "bi-arrow-counterclockwise", "me-1"], [1, "faq-accordion-list"], ["class", "faq-card", 3, "is-expanded", 4, "ngFor", "ngForOf"], [1, "faq-card"], ["type", "button", 1, "faq-question-btn", 3, "click"], [1, "q-left"], [1, "q-num"], [1, "q-text-wrap"], [1, "q-category-tag"], [1, "q-title"], [1, "q-chevron"], [1, "bi", "bi-chevron-down"], ["class", "faq-answer-panel", 4, "ngIf"], [1, "faq-answer-panel"], [1, "answer-content", 3, "innerHTML"], [1, "faq-unstructured-wrap"], [1, "article-body", 3, "innerHTML"], ["target", "_blank", "rel", "noopener", 1, "btn-support", "btn-wa", 3, "href"], [1, "bi", "bi-whatsapp"], [1, "btn-support", "btn-phone", 3, "href"], [1, "bi", "bi-telephone-fill"], [1, "inquiry-modal-backdrop", 3, "click"], [1, "inquiry-modal-card", 3, "click"], [1, "modal-header"], [1, "modal-title-group"], [1, "modal-icon"], [1, "bi", "bi-chat-left-dots-fill"], ["type", "button", "aria-label", "Close", 1, "btn-close-modal", 3, "click"], [1, "bi", "bi-x-lg"], ["class", "modal-body", 4, "ngIf"], ["class", "modal-body success-state", 4, "ngIf"], [1, "modal-body"], [3, "ngSubmit"], [1, "form-group", "mb-3"], [1, "form-label"], ["type", "text", "name", "name", "placeholder", "e.g. Jagadish Kumar", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "row", "g-2", "mb-3"], [1, "col-6"], ["type", "tel", "name", "phone", "placeholder", "10-digit number", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "you@domain.com", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-group", "mb-4"], ["rows", "4", "name", "question", "placeholder", "Ask about Kudremukha permits, difficulty, dates, customized groups, or payment questions...", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", 4, "ngIf"], ["class", "bi bi-send-fill me-1", 4, "ngIf"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-send-fill", "me-1"], [1, "modal-body", "success-state"], [1, "success-icon-box"], [1, "bi", "bi-check-circle-fill"], ["type", "button", 1, "btn-submit", "w-100", "mt-3", 3, "click"]],
    template: function FaqsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FaqsComponent_div_0_Template, 57, 14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.settings$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe],
    styles: [".faq-page[_ngcontent-%COMP%] {\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  color: #1e293b;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  padding-bottom: 80px;\n}\n\n.faq-hero[_ngcontent-%COMP%] {\n  background: radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.12) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(20, 83, 45, 0.08) 0%, transparent 45%), linear-gradient(180deg, #092615 0%, #0d3820 100%);\n  color: #ffffff;\n  padding: 64px 20px 48px;\n  position: relative;\n  overflow: hidden;\n}\n.faq-hero[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 32px;\n  background: linear-gradient(to bottom, transparent, #f8fafc);\n  pointer-events: none;\n}\n\n.faq-hero-container[_ngcontent-%COMP%] {\n  max-width: 860px;\n  margin: 0 auto;\n  text-align: center;\n  position: relative;\n  z-index: 2;\n}\n\n.faq-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  padding: 6px 14px;\n  border-radius: 9999px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  color: #a7f3d0;\n  margin-bottom: 16px;\n}\n.faq-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #34d399;\n}\n\n.faq-hero-title[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", \"Outfit\", Georgia, serif;\n  font-size: clamp(2rem, 4vw, 3rem);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.15;\n  margin-bottom: 12px;\n  color: #ffffff;\n}\n\n.faq-hero-subtitle[_ngcontent-%COMP%] {\n  font-size: clamp(0.95rem, 2vw, 1.1rem);\n  line-height: 1.6;\n  color: #cbd5e1;\n  max-width: 680px;\n  margin: 0 auto 32px;\n}\n\n.faq-search-wrapper[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin: 0 auto;\n}\n\n.faq-search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 6px 16px;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 8px 10px -6px rgba(0, 0, 0, 0.2);\n  border: 2px solid transparent;\n  transition: all 0.2s ease;\n}\n.faq-search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #10b981;\n  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2), 0 12px 30px -5px rgba(0, 0, 0, 0.3);\n}\n.faq-search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #059669;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n.faq-search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  font-family: inherit;\n  color: #0f172a;\n  padding: 10px 0;\n  background: transparent;\n}\n.faq-search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n  font-size: 0.9375rem;\n}\n.faq-search-box[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  font-size: 1.125rem;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  transition: color 0.15s ease;\n}\n.faq-search-box[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n\n.faq-search-hints[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 14px;\n  font-size: 0.8125rem;\n}\n.faq-search-hints[_ngcontent-%COMP%]   .hint-label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 500;\n}\n.faq-search-hints[_ngcontent-%COMP%]   .hint-tag[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  color: #e2e8f0;\n  padding: 4px 10px;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.faq-search-hints[_ngcontent-%COMP%]   .hint-tag[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  color: #ffffff;\n  transform: translateY(-1px);\n}\n\n.faq-main-content[_ngcontent-%COMP%] {\n  padding: 32px 20px 0;\n}\n\n.faq-container[_ngcontent-%COMP%] {\n  max-width: 920px;\n  margin: 0 auto;\n}\n\n.faq-category-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  overflow-x: auto;\n  padding: 4px 2px 14px;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.faq-category-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.faq-category-nav[_ngcontent-%COMP%]   .cat-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 18px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 9999px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.faq-category-nav[_ngcontent-%COMP%]   .cat-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #64748b;\n  transition: color 0.2s ease;\n}\n.faq-category-nav[_ngcontent-%COMP%]   .cat-chip[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n  border-color: #cbd5e1;\n}\n.faq-category-nav[_ngcontent-%COMP%]   .cat-chip.active[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  border-color: #0f3d23;\n  color: #ffffff;\n  box-shadow: 0 4px 12px rgba(15, 61, 35, 0.2);\n}\n.faq-category-nav[_ngcontent-%COMP%]   .cat-chip.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n\n.faq-controls-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 16px 0 20px;\n  padding: 0 4px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.faq-controls-bar[_ngcontent-%COMP%]   .results-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.faq-controls-bar[_ngcontent-%COMP%]   .results-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.faq-controls-bar[_ngcontent-%COMP%]   .results-info[_ngcontent-%COMP%]   .filter-indicator[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  color: #059669;\n  font-weight: 500;\n}\n.faq-controls-bar[_ngcontent-%COMP%]   .action-toggles[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.faq-controls-bar[_ngcontent-%COMP%]   .action-toggles[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #cbd5e1;\n  padding: 5px 12px;\n  border-radius: 8px;\n  font-size: 0.78125rem;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.15s ease;\n}\n.faq-controls-bar[_ngcontent-%COMP%]   .action-toggles[_ngcontent-%COMP%]   .toggle-btn[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  color: #0f172a;\n  border-color: #94a3b8;\n}\n\n.faq-accordion-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.faq-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  overflow: hidden;\n}\n.faq-card[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);\n}\n.faq-card.is-expanded[_ngcontent-%COMP%] {\n  border-color: #86efac;\n  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.08);\n}\n.faq-card.is-expanded[_ngcontent-%COMP%]   .faq-question-btn[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n}\n.faq-card.is-expanded[_ngcontent-%COMP%]   .faq-question-btn[_ngcontent-%COMP%]   .q-num[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  color: #34d399;\n}\n\n.faq-question-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  gap: 16px;\n  transition: background 0.2s ease;\n}\n.faq-question-btn[_ngcontent-%COMP%]   .q-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  flex: 1;\n}\n.faq-question-btn[_ngcontent-%COMP%]   .q-left[_ngcontent-%COMP%]   .q-num[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: #f1f5f9;\n  color: #64748b;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  margin-top: 2px;\n}\n.faq-question-btn[_ngcontent-%COMP%]   .q-left[_ngcontent-%COMP%]   .q-text-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.faq-question-btn[_ngcontent-%COMP%]   .q-left[_ngcontent-%COMP%]   .q-text-wrap[_ngcontent-%COMP%]   .q-category-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #059669;\n  margin-bottom: 4px;\n}\n.faq-question-btn[_ngcontent-%COMP%]   .q-left[_ngcontent-%COMP%]   .q-text-wrap[_ngcontent-%COMP%]   .q-title[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  font-weight: 600;\n  line-height: 1.45;\n  color: #0f172a;\n  margin: 0;\n}\n.faq-question-btn[_ngcontent-%COMP%]   .q-chevron[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.faq-question-btn[_ngcontent-%COMP%]   .q-chevron.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  background: #059669;\n  border-color: #059669;\n  color: #ffffff;\n}\n\n.faq-answer-panel[_ngcontent-%COMP%] {\n  padding: 0 24px 22px 72px;\n  animation: _ngcontent-%COMP%_fadeInDown 0.25s ease-out;\n}\n@media (max-width: 640px) {\n  .faq-answer-panel[_ngcontent-%COMP%] {\n    padding-left: 20px;\n  }\n}\n.faq-answer-panel[_ngcontent-%COMP%]   .answer-content[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  line-height: 1.75;\n  color: #334155;\n}\n.faq-answer-panel[_ngcontent-%COMP%]   .answer-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.faq-answer-panel[_ngcontent-%COMP%]   .answer-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.faq-answer-panel[_ngcontent-%COMP%]   .answer-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .faq-answer-panel[_ngcontent-%COMP%]   .answer-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 8px 0 12px 18px;\n  padding: 0;\n}\n.faq-answer-panel[_ngcontent-%COMP%]   .answer-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .faq-answer-panel[_ngcontent-%COMP%]   .answer-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.faq-answer-panel[_ngcontent-%COMP%]   .answer-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n\n.faq-loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #64748b;\n}\n.faq-loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  font-size: 0.9375rem;\n}\n\n.faq-error-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  border: 1px solid #fed7aa;\n  border-left: 4px solid #f97316;\n  border-radius: 12px;\n  padding: 20px 24px;\n  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.08);\n  margin: 20px 0;\n}\n.faq-error-card[_ngcontent-%COMP%]   .error-icon-box[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  background: #fff7ed;\n  color: #ea580c;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.faq-error-card[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.faq-error-card[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #9a3412;\n  margin: 0 0 4px;\n}\n.faq-error-card[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #7c2d12;\n  margin: 0;\n}\n.faq-error-card[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  background: #ea580c;\n  color: #ffffff;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  transition: background 0.15s ease;\n}\n.faq-error-card[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover {\n  background: #c2410c;\n}\n\n.faq-empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 56px 20px;\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px dashed #cbd5e1;\n  margin: 24px 0;\n}\n.faq-empty-state[_ngcontent-%COMP%]   .empty-icon-wrap[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #f1f5f9;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  margin: 0 auto 16px;\n}\n.faq-empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 8px;\n}\n.faq-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #64748b;\n  max-width: 480px;\n  margin: 0 auto 20px;\n}\n.faq-empty-state[_ngcontent-%COMP%]   .btn-reset-search[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  color: #ffffff;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.2s ease;\n}\n.faq-empty-state[_ngcontent-%COMP%]   .btn-reset-search[_ngcontent-%COMP%]:hover {\n  background: #14532d;\n  transform: translateY(-1px);\n}\n\n.faq-support-section[_ngcontent-%COMP%] {\n  margin-top: 56px;\n}\n\n.support-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #092615 0%, #0d3820 60%, #154d2e 100%);\n  border-radius: 24px;\n  padding: 36px 40px;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 32px;\n  box-shadow: 0 20px 40px -15px rgba(9, 38, 21, 0.4);\n  position: relative;\n  overflow: hidden;\n}\n.support-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -50px;\n  right: -50px;\n  width: 250px;\n  height: 250px;\n  background: radial-gradient(circle, rgba(52, 211, 153, 0.2) 0%, transparent 70%);\n  border-radius: 50%;\n}\n@media (max-width: 768px) {\n  .support-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 28px 24px;\n    text-align: center;\n  }\n}\n.support-card[_ngcontent-%COMP%]   .support-content[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  z-index: 2;\n}\n.support-card[_ngcontent-%COMP%]   .support-content[_ngcontent-%COMP%]   .support-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #34d399;\n  background: rgba(52, 211, 153, 0.12);\n  padding: 4px 10px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n}\n.support-card[_ngcontent-%COMP%]   .support-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", \"Outfit\", Georgia, serif;\n  font-size: clamp(1.35rem, 2.5vw, 1.75rem);\n  font-weight: 700;\n  color: #ffffff;\n  line-height: 1.3;\n  margin-bottom: 10px;\n}\n.support-card[_ngcontent-%COMP%]   .support-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #cbd5e1;\n  line-height: 1.6;\n  max-width: 540px;\n  margin-bottom: 24px;\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%]   .btn-support[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 20px;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%]   .btn-support[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%]   .btn-support.btn-wa[_ngcontent-%COMP%] {\n  background: #25d366;\n  color: #ffffff;\n  box-shadow: 0 4px 14px rgba(37, 211, 102, 0.3);\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%]   .btn-support.btn-wa[_ngcontent-%COMP%]:hover {\n  background: #20bd5a;\n  transform: translateY(-2px);\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%]   .btn-support.btn-phone[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: #ffffff;\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%]   .btn-support.btn-phone[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.22);\n  transform: translateY(-2px);\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%]   .btn-support.btn-inquire[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #0f3d23;\n  border: none;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.support-card[_ngcontent-%COMP%]   .support-actions[_ngcontent-%COMP%]   .btn-support.btn-inquire[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  transform: translateY(-2px);\n}\n.support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  position: relative;\n  z-index: 2;\n}\n@media (max-width: 768px) {\n  .support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%] {\n    margin-top: 8px;\n  }\n}\n.support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%]   .support-avatar-group[_ngcontent-%COMP%] {\n  display: flex;\n}\n.support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%]   .support-avatar-group[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #14532d;\n  border: 2px solid #092615;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #a7f3d0;\n  font-size: 1.125rem;\n  margin-left: -12px;\n}\n.support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%]   .support-avatar-group[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n  background: #1e3a8a;\n  color: #93c5fd;\n}\n.support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%]   .support-avatar-group[_ngcontent-%COMP%]   .mini-avatar[_ngcontent-%COMP%]:last-child {\n  background: #b45309;\n  color: #fde68a;\n}\n.support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%]   .support-stat-note[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%]   .support-stat-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: #ffffff;\n}\n.support-card[_ngcontent-%COMP%]   .support-graphic[_ngcontent-%COMP%]   .support-stat-note[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n\n.inquiry-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.7);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n\n.inquiry-modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  max-width: 520px;\n  width: 100%;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 24px 24px 16px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title-group[_ngcontent-%COMP%]   .modal-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  background: #dcfce7;\n  color: #15803d;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n  margin: 2px 0 0;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close-modal[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  color: #64748b;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close-modal[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px 24px;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #334155;\n  margin-bottom: 6px;\n  display: block;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 0.9375rem;\n  font-family: inherit;\n  color: #0f172a;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #10b981;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n  font-size: 0.875rem;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #475569;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 10px 18px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  border: none;\n  color: #ffffff;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 10px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  transition: background 0.15s ease;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:hover {\n  background: #14532d;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body.success-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px 24px;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body.success-state[_ngcontent-%COMP%]   .success-icon-box[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #dcfce7;\n  color: #15803d;\n  font-size: 2.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body.success-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 8px;\n}\n.inquiry-modal-card[_ngcontent-%COMP%]   .modal-body.success-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: #64748b;\n  line-height: 1.6;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmFxcy9mYXFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsdUZBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSEY7O0FBT0E7RUFDRSwrTkFBQTtFQUdBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFORjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLDREQUFBO0VBQ0Esb0JBQUE7QUFOSjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBUEY7O0FBVUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVBGO0FBU0U7RUFDRSxvQkFBQTtFQUNBLGNBQUE7QUFQSjs7QUFXQTtFQUNFLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFSRjs7QUFXQTtFQUNFLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVJGOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvRkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUFURjtBQVdFO0VBQ0UscUJBQUE7RUFDQSxrRkFBQTtBQVRKO0FBWUU7RUFDRSxr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a0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUE5RlI7QUFnR1E7RUFDRSxtQkFBQTtBQTlGVjtBQWtHTTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUFoR1I7QUFrR1E7RUFDRSxtQkFBQTtBQWhHVjtBQW1HUTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQWpHVjtBQXNHSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFwR047QUFzR007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBcEdSO0FBdUdNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQXJHUjtBQXdHTTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBdEdSOztBQTZHQTtFQUNFO0lBQU8sVUFBQTtFQXpHUDtFQTBHQTtJQUFLLFVBQUE7RUF2R0w7QUFDRjtBQXlHQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBdkdGO0VBeUdBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBdkdGO0FBQ0Y7QUEwR0E7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQXhHRjtFQTBHQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQXhHRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRkFRUyBDT01QT05FTlQgU0NTUyAtIE1PREVSTiBXSUxERVJORVNTIExVWFVSWVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4uZmFxLXBhZ2Uge1xuICBmb250LWZhbWlseTogJ0ludGVyJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMWUyOTNiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBIZXJvIFNlY3Rpb24gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZmFxLWhlcm8ge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEwJSAyMCUsIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEyKSAwJSwgdHJhbnNwYXJlbnQgNDAlKSxcbiAgICAgICAgICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA5MCUgODAlLCByZ2JhKDIwLCA4MywgNDUsIDAuMDgpIDAlLCB0cmFuc3BhcmVudCA0NSUpLFxuICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDkyNjE1IDAlLCAjMGQzODIwIDEwMCUpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogNjRweCAyMHB4IDQ4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCwgI2Y4ZmFmYyk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuLmZhcS1oZXJvLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogODYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cblxuLmZhcS1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICBwYWRkaW5nOiA2cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY29sb3I6ICNhN2YzZDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgaSB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gICAgY29sb3I6ICMzNGQzOTk7XG4gIH1cbn1cblxuLmZhcS1oZXJvLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdDaW56ZWwnLCAnT3V0Zml0JywgR2VvcmdpYSwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNHZ3LCAzcmVtKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmZhcS1oZXJvLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiBjbGFtcCgwLjk1cmVtLCAydncsIDEuMXJlbSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGNvbG9yOiAjY2JkNWUxO1xuICBtYXgtd2lkdGg6IDY4MHB4O1xuICBtYXJnaW46IDAgYXV0byAzMnB4O1xufVxuXG4vLyDDosKUwoDDosKUwoAgTGl2ZSBTZWFyY2ggQmFyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZhcS1zZWFyY2gtd3JhcHBlciB7XG4gIG1heC13aWR0aDogNjgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZmFxLXNlYXJjaC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDhweCAxMHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTBiOTgxO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4yKSwgMCAxMnB4IDMwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cblxuICAuc2VhcmNoLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBjb2xvcjogIzA1OTY2OTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgZmxleDogMTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgY29sb3I6ICMwZjE3MmE7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgICB9XG4gIH1cblxuICAuY2xlYXItc2VhcmNoLWJ0biB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICM5NGEzYjg7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICB9XG4gIH1cbn1cblxuLmZhcS1zZWFyY2gtaGludHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XG5cbiAgLmhpbnQtbGFiZWwge1xuICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAuaGludC10YWcge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcbiAgICBjb2xvcjogI2UyZThmMDtcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBNYWluIENvbnRlbnQgQ29udGFpbmVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZhcS1tYWluLWNvbnRlbnQge1xuICBwYWRkaW5nOiAzMnB4IDIwcHggMDtcbn1cblxuLmZhcS1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDkyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLy8gw6LClMKAw6LClMKAIENhdGVnb3J5IFBpbGwgTmF2IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZhcS1jYXRlZ29yeS1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogNHB4IDJweCAxNHB4O1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jYXQtY2hpcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiA5cHggMThweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwZjNkMjM7XG4gICAgICBib3JkZXItY29sb3I6ICMwZjNkMjM7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxNSwgNjEsIDM1LCAwLjIpO1xuXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6ICMzNGQzOTk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBDb250cm9scyBCYXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZmFxLWNvbnRyb2xzLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAxNnB4IDAgMjBweDtcbiAgcGFkZGluZzogMCA0cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMnB4O1xuXG4gIC5yZXN1bHRzLWluZm8ge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgY29sb3I6ICM2NDc0OGI7XG5cbiAgICBzdHJvbmcge1xuICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgfVxuXG4gICAgLmZpbHRlci1pbmRpY2F0b3Ige1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgIGNvbG9yOiAjMDU5NjY5O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cblxuICAuYWN0aW9uLXRvZ2dsZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAudG9nZ2xlLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gICAgICBwYWRkaW5nOiA1cHggMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMC43ODEyNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzk0YTNiODtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEFjY29yZGlvbiBGQVEgQ2FyZHMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZmFxLWFjY29yZGlvbi1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNHB4O1xufVxuXG4uZmFxLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cblxuICAmLmlzLWV4cGFuZGVkIHtcbiAgICBib3JkZXItY29sb3I6ICM4NmVmYWM7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4wOCk7XG5cbiAgICAuZmFxLXF1ZXN0aW9uLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmZGY0O1xuXG4gICAgICAucS1udW0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMGYzZDIzO1xuICAgICAgICBjb2xvcjogIzM0ZDM5OTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZhcS1xdWVzdGlvbi1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxOHB4IDIycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZ2FwOiAxNnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcblxuICAucS1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTZweDtcbiAgICBmbGV4OiAxO1xuXG4gICAgLnEtbnVtIHtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICB9XG5cbiAgICAucS10ZXh0LXdyYXAge1xuICAgICAgZmxleDogMTtcblxuICAgICAgLnEtY2F0ZWdvcnktdGFnIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgICAgICAgY29sb3I6ICMwNTk2Njk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIH1cblxuICAgICAgLnEtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuMDYyNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnEtY2hldnJvbiB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgY29sb3I6ICM2NDc0OGI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcblxuICAgICYucm90YXRlZCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgYmFja2dyb3VuZDogIzA1OTY2OTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzA1OTY2OTtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxufVxuXG4uZmFxLWFuc3dlci1wYW5lbCB7XG4gIHBhZGRpbmc6IDAgMjRweCAyMnB4IDcycHg7XG4gIGFuaW1hdGlvbjogZmFkZUluRG93biAwLjI1cyBlYXNlLW91dDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cblxuICAuYW5zd2VyLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgIGNvbG9yOiAjMzM0MTU1O1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1bCwgb2wge1xuICAgICAgbWFyZ2luOiA4cHggMCAxMnB4IDE4cHg7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBsaSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdHJvbmcge1xuICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgU3RhdGVzIChMb2FkaW5nLCBFcnJvciwgRW1wdHkpIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZhcS1sb2FkaW5nLXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gIGNvbG9yOiAjNjQ3NDhiO1xuXG4gIHAge1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIH1cbn1cblxuLmZhcS1lcnJvci1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmVkN2FhO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNmOTczMTY7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDI0OSwgMTE1LCAyMiwgMC4wOCk7XG4gIG1hcmdpbjogMjBweCAwO1xuXG4gIC5lcnJvci1pY29uLWJveCB7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjdlZDtcbiAgICBjb2xvcjogI2VhNTgwYztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG5cbiAgLmVycm9yLXRleHQge1xuICAgIGZsZXg6IDE7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICM5YTM0MTI7XG4gICAgICBtYXJnaW46IDAgMCA0cHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgY29sb3I6ICM3YzJkMTI7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi1yZXRyeSB7XG4gICAgYmFja2dyb3VuZDogI2VhNTgwYztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjYzI0MTBjO1xuICAgIH1cbiAgfVxufVxuXG4uZmFxLWVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1NnB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjY2JkNWUxO1xuICBtYXJnaW46IDI0cHggMDtcblxuICAuZW1wdHktaWNvbi13cmFwIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgY29sb3I6ICM5NGEzYjg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbjogMCBhdXRvIDE2cHg7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMxZTI5M2I7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gICAgY29sb3I6ICM2NDc0OGI7XG4gICAgbWF4LXdpZHRoOiA0ODBweDtcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICB9XG5cbiAgLmJ0bi1yZXNldC1zZWFyY2gge1xuICAgIGJhY2tncm91bmQ6ICMwZjNkMjM7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMTQ1MzJkO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgQ29uY2llcmdlIFN1cHBvcnQgQ2FyZCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5mYXEtc3VwcG9ydC1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNTZweDtcbn1cblxuLnN1cHBvcnQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwOTI2MTUgMCUsICMwZDM4MjAgNjAlLCAjMTU0ZDJlIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBwYWRkaW5nOiAzNnB4IDQwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMzJweDtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggLTE1cHggcmdiYSg5LCAzOCwgMjEsIDAuNCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01MHB4O1xuICAgIHJpZ2h0OiAtNTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDUyLCAyMTEsIDE1MywgMC4yKSAwJSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDI4cHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuc3VwcG9ydC1jb250ZW50IHtcbiAgICBmbGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgLnN1cHBvcnQtYmFkZ2Uge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gICAgICBjb2xvcjogIzM0ZDM5OTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTIsIDIxMSwgMTUzLCAwLjEyKTtcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBmb250LWZhbWlseTogJ0NpbnplbCcsICdPdXRmaXQnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4zNXJlbSwgMi41dncsIDEuNzVyZW0pO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgICAgIGNvbG9yOiAjY2JkNWUxO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgIG1heC13aWR0aDogNTQwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5zdXBwb3J0LWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTJweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmJ0bi1zdXBwb3J0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgcGFkZGluZzogMTFweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4wNjI1cmVtO1xuICAgICAgfVxuXG4gICAgICAmLmJ0bi13YSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyNWQzNjY7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMzcsIDIxMSwgMTAyLCAwLjMpO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMyMGJkNWE7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuYnRuLXBob25lIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIyKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5idG4taW5xdWlyZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gICAgICAgIGNvbG9yOiAjMGYzZDIzO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zdXBwb3J0LWdyYXBoaWMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cblxuICAgIC5zdXBwb3J0LWF2YXRhci1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAubWluaS1hdmF0YXIge1xuICAgICAgICB3aWR0aDogNDRweDtcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxNDUzMmQ7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwOTI2MTU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2E3ZjNkMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMxZTNhOGE7XG4gICAgICAgICAgY29sb3I6ICM5M2M1ZmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNiNDUzMDk7XG4gICAgICAgICAgY29sb3I6ICNmZGU2OGE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3VwcG9ydC1zdGF0LW5vdGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICBzdHJvbmcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgSW4tVUkgSW5xdWlyeSBNb2RhbCAoTm8gQnJvd3NlciBBbGVydCkgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uaW5xdWlyeS1tb2RhbC1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC43KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIHotaW5kZXg6IDEwNTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBhbmltYXRpb246IGZhZGVJbiAwLjJzIGVhc2Utb3V0O1xufVxuXG4uaW5xdWlyeS1tb2RhbC1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWF4LXdpZHRoOiA1MjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFuaW1hdGlvbjogc2xpZGVVcCAwLjI1cyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcblxuICAubW9kYWwtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAyNHB4IDI0cHggMTZweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjVmOTtcblxuICAgIC5tb2RhbC10aXRsZS1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxNHB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLm1vZGFsLWljb24ge1xuICAgICAgICB3aWR0aDogNDJweDtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGNmY2U3O1xuICAgICAgICBjb2xvcjogIzE1ODAzZDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgbWFyZ2luOiAycHggMCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG4tY2xvc2UtbW9kYWwge1xuICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xuICAgICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubW9kYWwtYm9keSB7XG4gICAgcGFkZGluZzogMjBweCAyNHB4IDI0cHg7XG5cbiAgICAuZm9ybS1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzMzNDE1NTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5mb3JtLWlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTBiOTgxO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxNiwgMTg1LCAxMjksIDAuMTUpO1xuICAgICAgfVxuXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tb2RhbC1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgICAgLmJ0bi1jYW5jZWwge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYnRuLXN1Ym1pdCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwZjNkMjM7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMxNDUzMmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYuc3VjY2Vzcy1zdGF0ZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XG5cbiAgICAgIC5zdWNjZXNzLWljb24tYm94IHtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGNmY2U3O1xuICAgICAgICBjb2xvcjogIzE1ODAzZDtcbiAgICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTZweDtcbiAgICAgIH1cblxuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBBbmltYXRpb25zIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVVcCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2cHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_faqs_faqs-module_ts.js.map