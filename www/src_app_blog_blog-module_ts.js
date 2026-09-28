"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_blog_blog-module_ts"],{

/***/ 756
/*!*************************************!*\
  !*** ./src/app/blog/blog-module.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogModule: () => (/* binding */ BlogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.component */ 2242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: '',
  component: _blog_component__WEBPACK_IMPORTED_MODULE_3__.BlogComponent
}];
class BlogModule {
  static #_ = _staticBlock = () => (this.ɵfac = function BlogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlogModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: BlogModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _blog_component__WEBPACK_IMPORTED_MODULE_3__.BlogComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BlogModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _blog_component__WEBPACK_IMPORTED_MODULE_3__.BlogComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ },

/***/ 2242
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogComponent: () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog */ 8051);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 5430);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/auth */ 2964);
/* harmony import */ var _auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../auth/auth-modal.service */ 2454);
/* harmony import */ var _core_media_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/media.service */ 6657);
/* harmony import */ var _core_site_settings_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/site-settings.service */ 1662);

var _staticBlock;














function BlogComponent_div_0_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.searchQuery = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BlogComponent_div_0_div_54_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Editor's Choice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BlogComponent_div_0_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_div_54_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.viewPost(ctx_r1.heroPost));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 69)(3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 71)(5, "div", 72)(6, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, BlogComponent_div_0_div_54_span_9_Template, 3, 0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h2", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 79)(17, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " Read Story ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.heroPost.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", ctx_r1.heroPost.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 11, ctx_r1.heroPost.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.heroPost.featured);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.heroPost.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.heroPost.excerpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.heroPost.author.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", ctx_r1.heroPost.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.heroPost.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.heroPost.date, " \u00B7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.heroPost.readTime, " ");
  }
}
function BlogComponent_div_0_button_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_button_57_Template_button_click_0_listener() {
      const cat_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.selectedCategory = cat_r6.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.selectedCategory === cat_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", cat_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](cat_r6.label);
  }
}
function BlogComponent_div_0_section_58_article_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "article", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_section_58_article_11_Template_article_click_0_listener() {
      const post_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.viewPost(post_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 102)(7, "div", 103)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "h4", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 107)(19, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const post_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", post_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", post_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 9, post_r8.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](post_r8.readTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", post_r8.views, " views");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](post_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](post_r8.excerpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("By ", post_r8.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](post_r8.date);
  }
}
function BlogComponent_div_0_section_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 89)(1, "div", 90)(2, "div", 91)(3, "div", 92)(4, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Curated");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h3", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Trending Expeditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, BlogComponent_div_0_section_58_article_11_Template, 23, 11, "article", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.secondaryFeatured.length, " handpicked stories");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.secondaryFeatured);
  }
}
function BlogComponent_div_0_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-spinner", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Loading trail journals...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function BlogComponent_div_0_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 112)(1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "No trail stories found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "We couldn't find any articles matching your search query. Try broadening your terms or reset the category filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 115)(8, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_div_68_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Reset Filters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_div_68_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.exploreTreks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " View Upcoming Treks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function BlogComponent_div_0_div_69_article_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Featured ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BlogComponent_div_0_div_69_article_1_div_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_div_69_article_1_div_19_span_1_Template_span_click_0_listener($event) {
      const tag_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
      ctx_r1.filterByTag(tag_r13);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" #", tag_r13, " ");
  }
}
function BlogComponent_div_0_div_69_article_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BlogComponent_div_0_div_69_article_1_div_19_span_1_Template, 2, 1, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", post_r11.tags.slice(0, 3));
  }
}
function BlogComponent_div_0_div_69_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "article", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_div_69_article_1_Template_article_click_0_listener() {
      const post_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.viewPost(post_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 125)(7, "div", 126)(8, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, BlogComponent_div_0_div_69_article_1_span_14_Template, 3, 0, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "h3", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, BlogComponent_div_0_div_69_article_1_div_19_Template, 2, 1, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 133)(21, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "img", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div")(24, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " Read Article ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "i", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const post_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", post_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", post_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 13, post_r11.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](post_r11.readTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", post_r11.views, " views");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", post_r11.featured);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](post_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](post_r11.excerpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", post_r11.tags && post_r11.tags.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", post_r11.author.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", post_r11.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](post_r11.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](post_r11.date);
  }
}
function BlogComponent_div_0_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BlogComponent_div_0_div_69_article_1_Template, 31, 15, "article", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.filteredPosts);
  }
}
function BlogComponent_div_0_button_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_button_79_Template_button_click_0_listener() {
      const tag_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.filterByTag(tag_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tag_r15, " ");
  }
}
function BlogComponent_div_0_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 145)(1, "div", 146)(2, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BlogComponent_div_0_div_87_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.newsletterEmail, $event) || (ctx_r1.newsletterEmail = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_div_87_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.subscribeNewsletter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Join ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Strict Zero-Spam Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newsletterEmail);
  }
}
function BlogComponent_div_0_div_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "You're on the list! Welcome explorer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function BlogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "div", 4)(4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Trail Journal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 10)(13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BlogComponent_div_0_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, BlogComponent_div_0_button_16_Template, 2, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 15)(18, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.exploreTreks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Explore Treks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.writeBlog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "section", 21)(27, "div", 22)(28, "div", 23)(29, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, " Western Ghats Chronicles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "h1", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " Trek Tales & Field Guides ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " Authentic trail reports, high-altitude biodiversity insights, packing wisdom, and mountaineer stories curated by certified trek leaders across Karnataka. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 28)(37, "div", 29)(38, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Dispatches");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 29)(44, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Terrain Topics");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 29)(50, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Field Tested");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, BlogComponent_div_0_div_54_Template, 26, 13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "nav", 34)(56, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, BlogComponent_div_0_button_57_Template, 4, 4, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, BlogComponent_div_0_section_58_Template, 12, 2, "section", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 38)(60, "div", 39)(61, "main", 40)(62, "div", 41)(63, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, BlogComponent_div_0_div_67_Template, 4, 0, "div", 44)(68, BlogComponent_div_0_div_68_Template, 14, 0, "div", 45)(69, BlogComponent_div_0_div_69_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "aside", 47)(71, "div", 48)(72, "div", 49)(73, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "Trending Topics");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](79, BlogComponent_div_0_button_79_Template, 2, 1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 54)(81, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "Trail Dispatch");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Get monsoon advisories, secret Western Ghats routes, and packing blueprints delivered bi-weekly.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](87, BlogComponent_div_0_div_87_Template, 9, 1, "div", 57)(88, BlogComponent_div_0_div_88_Template, 4, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](90, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 61)(92, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "Next Ascent");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "Ready to step onto the ridge?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "Discover upcoming weekend batch departures with certified guides.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_Template_button_click_98_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.exploreTreks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, " Book A Trek ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](100, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const settings_r17 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](settings_r17.brandName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.canWriteBlog ? "Write Story" : "Login to Write");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.allPosts.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.popularTags.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.heroPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.selectedCategory === "all" && !ctx_r1.searchQuery && ctx_r1.secondaryFeatured.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.categoryTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.filteredPosts.length, " articles available");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading && ctx_r1.filteredPosts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.filteredPosts.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.popularTags.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.popularTags);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.newsletterSubscribed);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.newsletterSubscribed);
  }
}
class BlogComponent {
  constructor(router, blogService, location, auth, authModal, media, siteSettings) {
    this.router = router;
    this.blogService = blogService;
    this.location = location;
    this.auth = auth;
    this.authModal = authModal;
    this.media = media;
    this.siteSettings = siteSettings;
    this.selectedCategory = "all";
    this.searchQuery = "";
    this.isLoading = false;
    this.categories = [{
      value: "all",
      label: "All Stories",
      icon: "bi-grid-fill"
    }, {
      value: "trek-guides",
      label: "Trek Guides",
      icon: "bi-compass-fill"
    }, {
      value: "tips-tricks",
      label: "Tips & Wisdom",
      icon: "bi-lightbulb-fill"
    }, {
      value: "gear-reviews",
      label: "Gear & Packing",
      icon: "bi-backpack2-fill"
    }, {
      value: "travel-stories",
      label: "Trail Journals",
      icon: "bi-journal-richtext"
    }, {
      value: "safety",
      label: "Safety & Medical",
      icon: "bi-shield-check"
    }, {
      value: "destinations",
      label: "Western Ghats",
      icon: "bi-geo-alt-fill"
    }];
    this.allPosts = [];
    this.popularTags = [];
    // Newsletter State
    this.newsletterEmail = '';
    this.newsletterSubscribed = false;
    this.settings$ = this.siteSettings.settings$;
  }
  ngOnInit() {
    this.loadPosts();
    this.loadCategories();
  }
  loadPosts() {
    this.isLoading = true;
    this.blogService.getPublishedPosts().subscribe({
      next: posts => {
        const raw = posts?.data || [];
        this.allPosts = raw.map(post => this.mapPostToBlogPost(post));
        this.extractPopularTags();
        this.isLoading = false;
      },
      error: error => {
        this.isLoading = false;
      }
    });
  }
  loadCategories() {
    var _this = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.blogService.getCategories().subscribe({
        next: response => {
          const categoriesArray = Array.isArray(response) ? response : response?.data || [];
          if (categoriesArray.length > 0) {
            const mappedCategories = categoriesArray.map(cat => ({
              value: cat.slug || cat.name.toLowerCase().replace(/\s+/g, "-"),
              label: cat.name,
              icon: _this.getCategoryIconByName(cat.name)
            }));
            _this.categories = [{
              value: "all",
              label: "All Stories",
              icon: "bi-grid-fill"
            }, ...mappedCategories];
          }
        },
        error: error => {}
      });
    })();
  }
  mapPostToBlogPost(post) {
    const cacheKey = post.updated_at || post.created_at || post.id;
    return {
      id: post.id,
      publicRef: post.public_ref || undefined,
      cacheKey,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      image: this.media.resolve(post.featured_image, cacheKey),
      author: {
        name: post.author_name || "Trail Master",
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author_name || "Trail Master")}&background=0f3d23&color=a7f3d0&size=100`
      },
      category: this.slugify(post.category_name || post.category || 'Trek Guides'),
      tags: post.tags || [],
      date: this.formatDate(post.published_at || post.created_at),
      readTime: this.calculateReadTime(post.content),
      views: post.views || 0,
      featured: post.views > 2000
    };
  }
  resolveImageUrl(imagePath, cacheKey) {
    return this.media.resolve(imagePath, cacheKey);
  }
  slugify(text) {
    return (text || '').toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-");
  }
  formatDate(dateString) {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Recently";
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  calculateReadTime(content) {
    const wordsPerMinute = 200;
    const wordCount = (content || '').split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    return `${minutes} min read`;
  }
  extractPopularTags() {
    const tagFrequency = {};
    this.allPosts.forEach(post => {
      (post.tags || []).forEach(tag => {
        tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
      });
    });
    this.popularTags = Object.entries(tagFrequency).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([tag]) => tag);
    if (this.popularTags.length === 0) {
      this.popularTags = ['Western Ghats', 'Monsoon Trek', 'Zero Plastic', 'Kudremukha', 'Beginner Tips'];
    }
  }
  getCategoryIconByName(name) {
    const iconMap = {
      "Trek Guides": "bi-compass-fill",
      "Tips & Tricks": "bi-lightbulb-fill",
      "Gear Reviews": "bi-backpack2-fill",
      "Travel Stories": "bi-journal-richtext",
      "Safety": "bi-shield-check",
      "Destinations": "bi-geo-alt-fill"
    };
    return iconMap[name] || "bi-bookmark-fill";
  }
  get featuredPosts() {
    const featured = this.allPosts.filter(post => post.featured).slice(0, 3);
    if (featured.length > 0) return featured;
    return this.allPosts.slice(0, 3);
  }
  get heroPost() {
    return this.featuredPosts[0] || this.allPosts[0] || null;
  }
  get secondaryFeatured() {
    const posts = this.featuredPosts;
    return posts.length > 1 ? posts.slice(1, 4) : [];
  }
  get filteredPosts() {
    let posts = this.allPosts;
    if (this.selectedCategory !== "all") {
      posts = posts.filter(post => post.category === this.selectedCategory);
    }
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      posts = posts.filter(post => post.title.toLowerCase().includes(query) || post.excerpt && post.excerpt.toLowerCase().includes(query) || post.tags.some(tag => tag.toLowerCase().includes(query)));
    }
    // Exclude hero post if in "all" view and not searching
    if (this.selectedCategory === "all" && !this.searchQuery && this.heroPost) {
      posts = posts.filter(post => post.id !== this.heroPost?.id);
    }
    return posts;
  }
  viewPost(post) {
    if (!post) return;
    this.blogService.incrementViews(post.publicRef || post.id).subscribe({
      next: () => {
        const publicRef = String(post.publicRef || post.id);
        this.router.navigate(["/blog-details", publicRef]);
      },
      error: () => {
        const publicRef = String(post.publicRef || post.id);
        this.router.navigate(["/blog-details", publicRef]);
      }
    });
  }
  filterByTag(tag) {
    this.searchQuery = tag;
  }
  clearSearch() {
    this.searchQuery = "";
    this.selectedCategory = "all";
  }
  get categoryTitle() {
    if (this.selectedCategory === "all") {
      return "All Expedition Dispatches";
    }
    const category = this.categories.find(c => c.value === this.selectedCategory);
    return category?.label ?? "Latest Articles";
  }
  subscribeNewsletter() {
    if (!this.newsletterEmail || !this.newsletterEmail.includes('@')) return;
    this.newsletterSubscribed = true;
  }
  exploreTreks() {
    this.router.navigate(["/upcoming-treks"]);
  }
  get canWriteBlog() {
    return this.auth.isLoggedIn();
  }
  writeBlog() {
    var _this2 = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this2.auth.isLoggedIn()) {
          yield _this2.authModal.openLogin();
          if (!_this2.auth.isLoggedIn()) {
            return;
          }
        }
        _this2.router.navigate(['/create-story']);
      } catch {
        // dismissed
      }
    })();
  }
  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function BlogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_blog__WEBPACK_IMPORTED_MODULE_8__.Blog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_auth__WEBPACK_IMPORTED_MODULE_10__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_11__.AuthModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_media_service__WEBPACK_IMPORTED_MODULE_12__.MediaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_site_settings_service__WEBPACK_IMPORTED_MODULE_13__.SiteSettingsService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: BlogComponent,
    selectors: [["app-blog"]],
    decls: 2,
    vars: 3,
    consts: [["class", "blog-hub-page", 4, "ngIf"], [1, "blog-hub-page"], [1, "blog-top-bar"], [1, "top-bar-inner"], [1, "top-bar-brand-group"], ["title", "Back", 1, "brand-link", 3, "click"], [1, "brand-name"], [1, "bar-separator"], [1, "sub-label"], [1, "bi", "bi-journal-richtext", "me-1", "text-emerald"], [1, "top-bar-actions"], [1, "search-input-wrap"], [1, "bi", "bi-search", "search-glyph"], ["type", "text", "placeholder", "Search stories, tips, gears...", "aria-label", "Search blog articles", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "btn-clear-q", "aria-label", "Clear search", 3, "click", 4, "ngIf"], [1, "top-bar-btns"], ["type", "button", 1, "btn-top-action", "btn-explore", 3, "click"], [1, "bi", "bi-compass", "me-1"], [1, "btn-text"], ["type", "button", 1, "btn-top-action", "btn-write", 3, "click"], [1, "bi", "bi-pencil-square", "me-1"], [1, "blog-hero"], [1, "hero-grid"], [1, "hero-intro"], [1, "hero-eyebrow"], [1, "bi", "bi-stars", "text-warning", "me-1"], [1, "hero-title"], [1, "hero-description"], [1, "hero-stats-row"], [1, "stat-cell"], [1, "stat-number"], [1, "stat-caption"], [1, "stat-divider"], ["class", "hero-featured-card", 3, "click", 4, "ngIf"], [1, "category-rail-wrap"], [1, "category-rail-inner"], ["type", "button", "class", "rail-pill", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "featured-picks-section", 4, "ngIf"], [1, "journal-feed-wrap"], [1, "container-custom", "layout-grid"], [1, "feed-main-col"], [1, "feed-header"], [1, "feed-title"], [1, "feed-count"], ["class", "feed-loading-card", 4, "ngIf"], ["class", "empty-feed-card", 4, "ngIf"], ["class", "article-stack", 4, "ngIf"], [1, "feed-sidebar"], [1, "sidebar-widget", "widget-topics"], [1, "widget-header"], [1, "bi", "bi-tags-fill", "text-emerald", "me-2"], [1, "tag-count"], [1, "topic-cloud"], ["type", "button", "class", "topic-chip", 3, "click", 4, "ngFor", "ngForOf"], [1, "sidebar-widget", "widget-newsletter"], [1, "nl-icon-badge"], [1, "bi", "bi-mailbox2"], ["class", "nl-form-wrap", 4, "ngIf"], ["class", "nl-success-state", 4, "ngIf"], [1, "sidebar-widget", "widget-trek-cta"], [1, "cta-overlay"], [1, "cta-content"], [1, "cta-badge"], ["type", "button", 1, "btn-cta-explore", 3, "click"], [1, "bi", "bi-arrow-up-right", "ms-1"], ["type", "button", "aria-label", "Clear search", 1, "btn-clear-q", 3, "click"], [1, "bi", "bi-x-circle-fill"], [1, "hero-featured-card", 3, "click"], [1, "cover-image-wrap"], ["loading", "eager", "decoding", "async", 1, "cover-image", 3, "src", "alt"], [1, "cover-gradient-overlay"], [1, "cover-content"], [1, "cover-badges"], [1, "badge-category"], ["class", "badge-featured", 4, "ngIf"], [1, "cover-title"], [1, "cover-excerpt"], [1, "cover-byline"], [1, "author-avatar", 3, "src", "alt"], [1, "byline-meta"], [1, "author-name"], [1, "post-date-read"], [1, "bi", "bi-clock", "me-1"], [1, "read-story-pill"], [1, "bi", "bi-arrow-right", "ms-1"], [1, "badge-featured"], [1, "bi", "bi-star-fill", "text-warning", "me-1"], ["type", "button", 1, "rail-pill", 3, "click"], [1, "bi", 3, "ngClass"], [1, "featured-picks-section"], [1, "container-custom"], [1, "section-headline"], [1, "headline-left"], [1, "headline-tag"], [1, "headline-title"], [1, "headline-counter"], [1, "featured-picks-grid"], ["class", "pick-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "pick-card", 3, "click"], [1, "pick-img-box"], ["loading", "lazy", "decoding", "async", 3, "src", "alt"], [1, "pick-cat"], [1, "pick-body"], [1, "pick-meta-row"], [1, "bi", "bi-eye", "me-1"], [1, "pick-title"], [1, "pick-excerpt"], [1, "pick-author-bar"], [1, "author-lbl"], [1, "date-lbl"], [1, "feed-loading-card"], ["name", "crescent", "color", "success"], [1, "empty-feed-card"], [1, "empty-feed-icon"], [1, "bi", "bi-journal-x"], [1, "empty-actions"], ["type", "button", 1, "btn-empty-reset", 3, "click"], [1, "bi", "bi-arrow-counterclockwise", "me-1"], ["type", "button", 1, "btn-empty-explore", 3, "click"], [1, "article-stack"], ["class", "article-item-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "article-item-card", 3, "click"], [1, "item-thumb-wrap"], ["loading", "lazy", "decoding", "async", 1, "item-thumb", 3, "src", "alt"], [1, "item-cat-pill"], [1, "item-info"], [1, "item-meta-top"], [1, "read-pill"], [1, "views-pill"], ["class", "featured-indicator", 4, "ngIf"], [1, "item-title"], [1, "item-excerpt"], ["class", "item-tags", 4, "ngIf"], [1, "item-author-row"], [1, "author-block"], [1, "author-pic", 3, "src", "alt"], [1, "name"], [1, "date"], [1, "btn-read-arrow"], [1, "bi", "bi-arrow-right"], [1, "featured-indicator"], [1, "item-tags"], ["class", "tag-chip", 3, "click", 4, "ngFor", "ngForOf"], [1, "tag-chip", 3, "click"], ["type", "button", 1, "topic-chip", 3, "click"], [1, "nl-form-wrap"], [1, "nl-input-group"], ["type", "email", "placeholder", "Enter your email...", "aria-label", "Newsletter email address", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn-nl-submit", 3, "click"], [1, "nl-privacy"], [1, "bi", "bi-shield-check", "me-1"], [1, "nl-success-state"], [1, "bi", "bi-check-circle-fill", "text-emerald", "me-2"]],
    template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, BlogComponent_div_0_Template, 101, 18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.settings$));
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe],
    styles: [".blog-hub-page[_ngcontent-%COMP%] {\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  color: #1e293b;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  padding-bottom: 80px;\n}\n\n.container-custom[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.text-emerald[_ngcontent-%COMP%] {\n  color: #10b981 !important;\n}\n\n.blog-top-bar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-bottom: 1px solid #e2e8f0;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-inner[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 12px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .blog-top-bar[_ngcontent-%COMP%]   .top-bar-inner[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n    gap: 10px;\n  }\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-brand-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-brand-group[_ngcontent-%COMP%]   .brand-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-brand-group[_ngcontent-%COMP%]   .brand-link[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", \"Outfit\", Georgia, serif;\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f3d23;\n  letter-spacing: -0.01em;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-brand-group[_ngcontent-%COMP%]   .bar-separator[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  font-size: 1rem;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-brand-group[_ngcontent-%COMP%]   .sub-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n  display: inline-flex;\n  align-items: center;\n  white-space: nowrap;\n}\n@media (max-width: 480px) {\n  .blog-top-bar[_ngcontent-%COMP%]   .top-bar-brand-group[_ngcontent-%COMP%]   .bar-separator[_ngcontent-%COMP%], \n   .blog-top-bar[_ngcontent-%COMP%]   .top-bar-brand-group[_ngcontent-%COMP%]   .sub-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex: 1;\n  justify-content: flex-end;\n}\n@media (max-width: 768px) {\n  .blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 8px 12px;\n  transition: all 0.2s ease;\n  width: 240px;\n  min-height: 42px;\n}\n@media (max-width: 992px) {\n  .blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%] {\n    width: 190px;\n  }\n}\n@media (max-width: 768px) {\n  .blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n    order: 2;\n  }\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]:focus-within {\n  background: #ffffff;\n  border-color: #10b981;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.12);\n  width: 280px;\n}\n@media (max-width: 768px) {\n  .blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]:focus-within {\n    width: 100%;\n  }\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]   .search-glyph[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.95rem;\n  margin-right: 8px;\n  flex-shrink: 0;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 16px;\n  font-family: inherit;\n  color: #0f172a;\n  width: 100%;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n  font-size: 0.85rem;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]   .btn-clear-q[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  min-width: 32px;\n  min-height: 32px;\n  justify-content: center;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]   .btn-clear-q[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .top-bar-btns[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n@media (max-width: 768px) {\n  .blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .top-bar-btns[_ngcontent-%COMP%] {\n    order: 1;\n    margin-left: auto;\n  }\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .btn-top-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  min-height: 42px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .btn-top-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n@media (max-width: 480px) {\n  .blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .btn-top-action[_ngcontent-%COMP%] {\n    padding: 8px 10px;\n    font-size: 0.75rem;\n  }\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .btn-top-action.btn-explore[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  color: #334155;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .btn-top-action.btn-explore[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .btn-top-action.btn-write[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  border: 1px solid #0f3d23;\n  color: #ffffff;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .btn-top-action.btn-write[_ngcontent-%COMP%]:hover {\n  background: #14532d;\n  border-color: #14532d;\n}\n\n.blog-hero[_ngcontent-%COMP%] {\n  background: radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.14) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(20, 83, 45, 0.1) 0%, transparent 45%), linear-gradient(180deg, #092615 0%, #0d3820 100%);\n  color: #ffffff;\n  padding: 56px 20px 48px;\n}\n@media (max-width: 768px) {\n  .blog-hero[_ngcontent-%COMP%] {\n    padding: 32px 16px 24px;\n  }\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-grid[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1.25fr;\n  gap: 40px;\n  align-items: center;\n}\n@media (max-width: 992px) {\n  .blog-hero[_ngcontent-%COMP%]   .hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #a7f3d0;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  padding: 5px 12px;\n  border-radius: 9999px;\n  margin-bottom: 16px;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", \"Outfit\", Georgia, serif;\n  font-size: clamp(1.65rem, 4vw, 3.25rem);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.15;\n  color: #ffffff;\n  margin-bottom: 14px;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.6;\n  color: #cbd5e1;\n  margin-bottom: 24px;\n}\n@media (max-width: 576px) {\n  .blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%] {\n    font-size: 0.88rem;\n    line-height: 1.5;\n    margin-bottom: 18px;\n  }\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n@media (max-width: 576px) {\n  .blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-stats-row[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 8px;\n    background: rgba(255, 255, 255, 0.06);\n    border: 1px solid rgba(255, 255, 255, 0.12);\n    border-radius: 12px;\n    padding: 12px 8px;\n    text-align: center;\n  }\n  .blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-stats-row[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-stats-row[_ngcontent-%COMP%]   .stat-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 576px) {\n  .blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-stats-row[_ngcontent-%COMP%]   .stat-cell[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-stats-row[_ngcontent-%COMP%]   .stat-cell[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", serif;\n  font-size: 1.65rem;\n  font-weight: 700;\n  color: #34d399;\n  line-height: 1;\n}\n@media (max-width: 576px) {\n  .blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-stats-row[_ngcontent-%COMP%]   .stat-cell[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-stats-row[_ngcontent-%COMP%]   .stat-cell[_ngcontent-%COMP%]   .stat-caption[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 4px;\n}\n@media (max-width: 576px) {\n  .blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-stats-row[_ngcontent-%COMP%]   .stat-cell[_ngcontent-%COMP%]   .stat-caption[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    letter-spacing: 0.02em;\n  }\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-stats-row[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.18);\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);\n  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;\n  aspect-ratio: 16/10;\n  min-height: 340px;\n}\n@media (max-width: 768px) {\n  .blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%] {\n    aspect-ratio: auto;\n    min-height: 300px;\n    border-radius: 16px;\n  }\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]:hover   .cover-image[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]:hover   .read-story-pill[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #ffffff;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-image-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-image-wrap[_ngcontent-%COMP%]   .cover-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-image-wrap[_ngcontent-%COMP%]   .cover-gradient-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(15, 23, 42, 0.15) 0%, rgba(15, 23, 42, 0.55) 45%, rgba(9, 38, 21, 0.96) 100%);\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  padding: 28px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  z-index: 2;\n}\n@media (max-width: 576px) {\n  .blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 10px;\n  flex-wrap: wrap;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-badges[_ngcontent-%COMP%]   .badge-category[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #ffffff;\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-badges[_ngcontent-%COMP%]   .badge-featured[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  color: #fde047;\n  border: 1px solid rgba(253, 224, 71, 0.3);\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-title[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", \"Outfit\", Georgia, serif;\n  font-size: clamp(1.15rem, 2.5vw, 1.75rem);\n  font-weight: 700;\n  color: #ffffff;\n  line-height: 1.25;\n  margin-bottom: 8px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-excerpt[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  line-height: 1.5;\n  color: #e2e8f0;\n  margin-bottom: 14px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n@media (max-width: 576px) {\n  .blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-excerpt[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n    margin-bottom: 10px;\n  }\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-byline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n@media (max-width: 480px) {\n  .blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-byline[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-byline[_ngcontent-%COMP%]   .author-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 2px solid #34d399;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-byline[_ngcontent-%COMP%]   .byline-meta[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-byline[_ngcontent-%COMP%]   .byline-meta[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #ffffff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-byline[_ngcontent-%COMP%]   .byline-meta[_ngcontent-%COMP%]   .post-date-read[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #94a3b8;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-byline[_ngcontent-%COMP%]   .read-story-pill[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: #ffffff;\n  padding: 6px 14px;\n  border-radius: 9999px;\n  font-size: 0.78125rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  min-height: 36px;\n  white-space: nowrap;\n}\n@media (max-width: 480px) {\n  .blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-byline[_ngcontent-%COMP%]   .read-story-pill[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 42px;\n  }\n}\n\n.category-rail-wrap[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 10px 0;\n}\n.category-rail-wrap[_ngcontent-%COMP%]   .category-rail-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n@media (max-width: 768px) {\n  .category-rail-wrap[_ngcontent-%COMP%]   .category-rail-inner[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n.category-rail-wrap[_ngcontent-%COMP%]   .category-rail-inner[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.category-rail-wrap[_ngcontent-%COMP%]   .category-rail-inner[_ngcontent-%COMP%]   .rail-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 16px;\n  min-height: 42px;\n  border-radius: 9999px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  color: #475569;\n  font-size: 0.84375rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition: all 0.15s ease;\n}\n.category-rail-wrap[_ngcontent-%COMP%]   .category-rail-inner[_ngcontent-%COMP%]   .rail-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.category-rail-wrap[_ngcontent-%COMP%]   .category-rail-inner[_ngcontent-%COMP%]   .rail-pill[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n  border-color: #cbd5e1;\n}\n.category-rail-wrap[_ngcontent-%COMP%]   .category-rail-inner[_ngcontent-%COMP%]   .rail-pill.active[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  border-color: #0f3d23;\n  color: #ffffff;\n}\n.category-rail-wrap[_ngcontent-%COMP%]   .category-rail-inner[_ngcontent-%COMP%]   .rail-pill.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n\n.featured-picks-section[_ngcontent-%COMP%] {\n  padding: 32px 0 20px;\n}\n@media (max-width: 768px) {\n  .featured-picks-section[_ngcontent-%COMP%] {\n    padding: 24px 0 16px;\n  }\n}\n.featured-picks-section[_ngcontent-%COMP%]   .section-headline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n@media (max-width: 576px) {\n  .featured-picks-section[_ngcontent-%COMP%]   .section-headline[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n    margin-bottom: 14px;\n  }\n}\n.featured-picks-section[_ngcontent-%COMP%]   .section-headline[_ngcontent-%COMP%]   .headline-left[_ngcontent-%COMP%]   .headline-tag[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #059669;\n  margin-bottom: 2px;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .section-headline[_ngcontent-%COMP%]   .headline-left[_ngcontent-%COMP%]   .headline-title[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", serif;\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n@media (max-width: 576px) {\n  .featured-picks-section[_ngcontent-%COMP%]   .section-headline[_ngcontent-%COMP%]   .headline-left[_ngcontent-%COMP%]   .headline-title[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n}\n.featured-picks-section[_ngcontent-%COMP%]   .section-headline[_ngcontent-%COMP%]   .headline-counter[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));\n  gap: 20px;\n}\n@media (max-width: 576px) {\n  .featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%] {\n    gap: 14px;\n  }\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n  transition: all 0.25s ease;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: #cbd5e1;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]:hover   .pick-img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-img-box[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-img-box[_ngcontent-%COMP%]   .pick-cat[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: rgba(15, 61, 35, 0.85);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  color: #a7f3d0;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 6px;\n  text-transform: uppercase;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-body[_ngcontent-%COMP%]   .pick-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-bottom: 8px;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-body[_ngcontent-%COMP%]   .pick-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.35;\n  color: #0f172a;\n  margin: 0 0 6px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-body[_ngcontent-%COMP%]   .pick-excerpt[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin-bottom: 14px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-body[_ngcontent-%COMP%]   .pick-author-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 10px;\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-body[_ngcontent-%COMP%]   .pick-author-bar[_ngcontent-%COMP%]   .author-lbl[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #475569;\n}\n\n.journal-feed-wrap[_ngcontent-%COMP%] {\n  padding: 32px 0 20px;\n}\n@media (max-width: 768px) {\n  .journal-feed-wrap[_ngcontent-%COMP%] {\n    padding: 20px 0 16px;\n  }\n}\n.journal-feed-wrap[_ngcontent-%COMP%]   .layout-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 36px;\n  align-items: start;\n}\n@media (max-width: 992px) {\n  .journal-feed-wrap[_ngcontent-%COMP%]   .layout-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n}\n\n.feed-main-col[_ngcontent-%COMP%]   .feed-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n@media (max-width: 576px) {\n  .feed-main-col[_ngcontent-%COMP%]   .feed-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n    margin-bottom: 14px;\n  }\n}\n.feed-main-col[_ngcontent-%COMP%]   .feed-header[_ngcontent-%COMP%]   .feed-title[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", serif;\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n@media (max-width: 576px) {\n  .feed-main-col[_ngcontent-%COMP%]   .feed-header[_ngcontent-%COMP%]   .feed-title[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n}\n.feed-main-col[_ngcontent-%COMP%]   .feed-header[_ngcontent-%COMP%]   .feed-count[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n  overflow: hidden;\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@media (max-width: 768px) {\n  .feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    border-radius: 16px;\n  }\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: #cbd5e1;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]:hover   .item-thumb[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]:hover   .btn-read-arrow[_ngcontent-%COMP%] {\n  color: #059669;\n  transform: translateX(3px);\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-thumb-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-height: 180px;\n}\n@media (max-width: 768px) {\n  .feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-thumb-wrap[_ngcontent-%COMP%] {\n    aspect-ratio: 16/9;\n    min-height: auto;\n    max-height: 240px;\n  }\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-thumb-wrap[_ngcontent-%COMP%]   .item-thumb[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-thumb-wrap[_ngcontent-%COMP%]   .item-cat-pill[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: rgba(15, 61, 35, 0.85);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  color: #a7f3d0;\n  font-size: 0.65625rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  .feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n@media (max-width: 480px) {\n  .feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%] {\n    padding: 14px 12px;\n  }\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-meta-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-meta-top[_ngcontent-%COMP%]   .featured-indicator[_ngcontent-%COMP%] {\n  color: #d97706;\n  font-weight: 600;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  line-height: 1.35;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n@media (max-width: 480px) {\n  .feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n    font-size: 1.05rem;\n  }\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-excerpt[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #475569;\n  line-height: 1.55;\n  margin-bottom: 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n@media (max-width: 480px) {\n  .feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-excerpt[_ngcontent-%COMP%] {\n    font-size: 0.8125rem;\n  }\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .tag-chip[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .tag-chip[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-author-row[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 12px;\n  gap: 10px;\n}\n@media (max-width: 480px) {\n  .feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-author-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-author-row[_ngcontent-%COMP%]   .btn-read-arrow[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n    padding: 4px 0;\n    min-height: 40px;\n  }\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-author-row[_ngcontent-%COMP%]   .author-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-author-row[_ngcontent-%COMP%]   .author-block[_ngcontent-%COMP%]   .author-pic[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-author-row[_ngcontent-%COMP%]   .author-block[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #1e293b;\n  line-height: 1.2;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-author-row[_ngcontent-%COMP%]   .author-block[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.71875rem;\n  color: #94a3b8;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-author-row[_ngcontent-%COMP%]   .btn-read-arrow[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 700;\n  color: #475569;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.feed-main-col[_ngcontent-%COMP%]   .feed-loading-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .feed-loading-card[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .feed-loading-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 500;\n  color: #64748b;\n  margin: 0;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 56px 20px;\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px dashed #cbd5e1;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   .empty-feed-icon[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 6px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  max-width: 440px;\n  margin: 0 auto 20px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  border-radius: 10px;\n  font-size: 0.84375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn-empty-reset[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  color: #ffffff;\n  border: none;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn-empty-reset[_ngcontent-%COMP%]:hover {\n  background: #14532d;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn-empty-explore[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  color: #334155;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn-empty-explore[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n\n.feed-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .sidebar-widget[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 24px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-topics[_ngcontent-%COMP%]   .widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-topics[_ngcontent-%COMP%]   .widget-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: inline-flex;\n  align-items: center;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-topics[_ngcontent-%COMP%]   .widget-header[_ngcontent-%COMP%]   .tag-count[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 9999px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-topics[_ngcontent-%COMP%]   .topic-cloud[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-topics[_ngcontent-%COMP%]   .topic-cloud[_ngcontent-%COMP%]   .topic-chip[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 0.78125rem;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-topics[_ngcontent-%COMP%]   .topic-cloud[_ngcontent-%COMP%]   .topic-chip[_ngcontent-%COMP%]:hover {\n  background: #0f3d23;\n  border-color: #0f3d23;\n  color: #ffffff;\n  transform: translateY(-1px);\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #092615 0%, #0d3820 100%);\n  color: #ffffff;\n  border: none;\n  box-shadow: 0 10px 25px -5px rgba(9, 38, 21, 0.35);\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-icon-badge[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(52, 211, 153, 0.15);\n  color: #34d399;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.35rem;\n  margin-bottom: 14px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", serif;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 6px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.84375rem;\n  color: #cbd5e1;\n  line-height: 1.5;\n  margin-bottom: 16px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  background: #ffffff;\n  border-radius: 10px;\n  padding: 3px;\n  margin-bottom: 8px;\n}\n@media (max-width: 440px) {\n  .feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-input-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n    background: transparent;\n    padding: 0;\n    gap: 8px;\n  }\n  .feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    background: #ffffff;\n    border-radius: 10px;\n    padding: 10px 14px;\n    font-size: 16px;\n  }\n  .feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-input-group[_ngcontent-%COMP%]   .btn-nl-submit[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    min-height: 44px;\n  }\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 8px 12px;\n  font-size: 0.8125rem;\n  font-family: inherit;\n  color: #0f172a;\n  background: transparent;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-input-group[_ngcontent-%COMP%]   .btn-nl-submit[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  border: none;\n  color: #ffffff;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 6px 14px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  transition: background 0.15s ease;\n  min-height: 38px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-input-group[_ngcontent-%COMP%]   .btn-nl-submit[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-privacy[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: #94a3b8;\n  display: inline-flex;\n  align-items: center;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-success-state[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  padding: 12px 14px;\n  border-radius: 10px;\n  font-size: 0.84375rem;\n  color: #a7f3d0;\n  display: flex;\n  align-items: center;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-trek-cta[_ngcontent-%COMP%] {\n  position: relative;\n  background: url(\"/assets/assets/trek-bg.jpg\") center/cover no-repeat, #0b1a11;\n  color: #ffffff;\n  overflow: hidden;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-trek-cta[_ngcontent-%COMP%]   .cta-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(9, 38, 21, 0.6) 0%, rgba(9, 38, 21, 0.95) 100%);\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-trek-cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-trek-cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.65625rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #34d399;\n  background: rgba(52, 211, 153, 0.15);\n  padding: 3px 8px;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-trek-cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", serif;\n  font-size: 1.15rem;\n  font-weight: 700;\n  line-height: 1.3;\n  margin-bottom: 6px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-trek-cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #cbd5e1;\n  line-height: 1.5;\n  margin-bottom: 16px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-trek-cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .btn-cta-explore[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #0f3d23;\n  border: none;\n  padding: 9px 18px;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.2s ease;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-trek-cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .btn-cta-explore[_ngcontent-%COMP%]:hover {\n  background: #34d399;\n  color: #092615;\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsdUZBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtBQUhGOztBQU9BO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQUpGO0FBTUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFKSjtBQU1JO0VBVkY7SUFXSSxrQkFBQTtJQUNBLFNBQUE7RUFISjtBQUNGO0FBTUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUpKO0FBTUk7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBSk47QUFNTTtFQUNFLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQUpSO0FBUUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQU5OO0FBU0k7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVBOO0FBVUk7RUFDRTs7SUFFRSxhQUFBO0VBUk47QUFDRjtBQVlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7QUFWSjtBQVlJO0VBUkY7SUFTSSxXQUFBO0lBQ0EsOEJBQUE7RUFUSjtBQUNGO0FBV0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VB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QTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQW5JUjtBQXNJTTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFwSVI7QUF1SU07RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBcklSO0FBdUlRO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFySVYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCTE9HIEhVQiBDT01QT05FTlQgU0NTUyAtIEVESVRPUklBTCBUUkFJTCBKT1VSTkFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi5ibG9nLWh1Yi1wYWdlIHtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzFlMjkzYjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4uY29udGFpbmVyLWN1c3RvbSB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4udGV4dC1lbWVyYWxkIHtcbiAgY29sb3I6ICMxMGI5ODEgIWltcG9ydGFudDtcbn1cblxuLy8gw6LClMKAw6LClMKAIFRvcCBOYXZpZ2F0aW9uIEJhciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5ibG9nLXRvcC1iYXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuXG4gIC50b3AtYmFyLWlubmVyIHtcbiAgICBtYXgtd2lkdGg6IDEyNDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDE2cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLnRvcC1iYXItYnJhbmQtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICAuYnJhbmQtbGluayB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC5icmFuZC1uYW1lIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDaW56ZWwnLCAnT3V0Zml0JywgR2VvcmdpYSwgc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjMGYzZDIzO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYmFyLXNlcGFyYXRvciB7XG4gICAgICBjb2xvcjogI2NiZDVlMTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG5cbiAgICAuc3ViLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICM0NzU1Njk7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgLmJhci1zZXBhcmF0b3IsXG4gICAgICAuc3ViLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudG9wLWJhci1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC5zZWFyY2gtaW5wdXQtd3JhcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDQycHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICB3aWR0aDogMTkwcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMtd2l0aGluIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTBiOTgxO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxNiwgMTg1LCAxMjksIDAuMTIpO1xuICAgICAgICB3aWR0aDogMjgwcHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1nbHlwaCB7XG4gICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIH1cblxuICAgICAgaW5wdXQge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYnRuLWNsZWFyLXEge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWluLXdpZHRoOiAzMnB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50b3AtYmFyLWJ0bnMge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi10b3AtYWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtaW4taGVpZ2h0OiA0MnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgfVxuXG4gICAgICAmLmJ0bi1leHBsb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICAgICAgY29sb3I6ICMzMzQxNTU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2UyZThmMDtcbiAgICAgICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmJ0bi13cml0ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwZjNkMjM7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwZjNkMjM7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMxNDUzMmQ7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTQ1MzJkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBFZGl0b3JpYWwgSGVybyBTZWN0aW9uIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmJsb2ctaGVybyB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTAlIDIwJSwgcmdiYSgxNiwgMTg1LCAxMjksIDAuMTQpIDAlLCB0cmFuc3BhcmVudCA0MCUpLFxuICAgICAgICAgICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDkwJSA4MCUsIHJnYmEoMjAsIDgzLCA0NSwgMC4xKSAwJSwgdHJhbnNwYXJlbnQgNDUlKSxcbiAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzA5MjYxNSAwJSwgIzBkMzgyMCAxMDAlKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDU2cHggMjBweCA0OHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmc6IDMycHggMTZweCAyNHB4O1xuICB9XG5cbiAgLmhlcm8tZ3JpZCB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjI1ZnI7XG4gICAgZ2FwOiA0MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgZ2FwOiAyOHB4O1xuICAgIH1cbiAgfVxuXG4gIC5oZXJvLWludHJvIHtcbiAgICAuaGVyby1leWVicm93IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgICAgIGNvbG9yOiAjYTdmM2QwO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAuaGVyby10aXRsZSB7XG4gICAgICBmb250LWZhbWlseTogJ0NpbnplbCcsICdPdXRmaXQnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS42NXJlbSwgNHZ3LCAzLjI1cmVtKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIH1cblxuICAgIC5oZXJvLWRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICBjb2xvcjogI2NiZDVlMTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICBmb250LXNpemU6IDAuODhyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhlcm8tc3RhdHMtcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAyMHB4O1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHggOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLnN0YXQtZGl2aWRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc3RhdC1jZWxsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0YXQtbnVtYmVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0NpbnplbCcsIHNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42NXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiAjMzRkMzk5O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdC1jYXB0aW9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogIzk0YTNiODtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc3RhdC1kaXZpZGVyIHtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENvdmVyIENhcmRcbiAgLmhlcm8tZmVhdHVyZWQtY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggLTE1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcbiAgICBhc3BlY3QtcmF0aW86IDE2IC8gMTA7XG4gICAgbWluLWhlaWdodDogMzQwcHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGFzcGVjdC1yYXRpbzogYXV0bztcbiAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcblxuICAgICAgLmNvdmVyLWltYWdlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgIH1cblxuICAgICAgLnJlYWQtc3RvcnktcGlsbCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxMGI5ODE7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jb3Zlci1pbWFnZS13cmFwIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGluc2V0OiAwO1xuXG4gICAgICAuY292ZXItaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG4gICAgICB9XG5cbiAgICAgIC5jb3Zlci1ncmFkaWVudC1vdmVybGF5IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDE4MGRlZyxcbiAgICAgICAgICByZ2JhKDE1LCAyMywgNDIsIDAuMTUpIDAlLFxuICAgICAgICAgIHJnYmEoMTUsIDIzLCA0MiwgMC41NSkgNDUlLFxuICAgICAgICAgIHJnYmEoOSwgMzgsIDIxLCAwLjk2KSAxMDAlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvdmVyLWNvbnRlbnQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaW5zZXQ6IDA7XG4gICAgICBwYWRkaW5nOiAyOHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5jb3Zlci1iYWRnZXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIC5iYWRnZS1jYXRlZ29yeSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzEwYjk4MTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYmFkZ2UtZmVhdHVyZWQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgICAgICAgICBjb2xvcjogI2ZkZTA0NztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MywgMjI0LCA3MSwgMC4zKTtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY292ZXItdGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogJ0NpbnplbCcsICdPdXRmaXQnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjE1cmVtLCAyLjV2dywgMS43NXJlbSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB0ZXh0LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIH1cblxuICAgICAgLmNvdmVyLWV4Y2VycHQge1xuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGNvbG9yOiAjZTJlOGYwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jb3Zlci1ieWxpbmUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEycHg7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRob3ItYXZhdGFyIHtcbiAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNGQzOTk7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuYnlsaW5lLW1ldGEge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIG1pbi13aWR0aDogMDtcblxuICAgICAgICAgIC5hdXRob3ItbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3QtZGF0ZS1yZWFkIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWFkLXN0b3J5LXBpbGwge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTRweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjc4MTI1cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0MnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgQ2F0ZWdvcnkgRmlsdGVyIFJhaWwgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uY2F0ZWdvcnktcmFpbC13cmFwIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XG4gIHBhZGRpbmc6IDEwcHggMDtcblxuICAuY2F0ZWdvcnktcmFpbC1pbm5lciB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5yYWlsLXBpbGwge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA3cHg7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDQycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgICAgZm9udC1zaXplOiAwLjg0Mzc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwZjNkMjM7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzBmM2QyMztcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgY29sb3I6ICMzNGQzOTk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAIFNlY29uZGFyeSBDdXJhdGVkIFBpY2tzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZlYXR1cmVkLXBpY2tzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAzMnB4IDAgMjBweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nOiAyNHB4IDAgMTZweDtcbiAgfVxuXG4gIC5zZWN0aW9uLWhlYWRsaW5lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIH1cblxuICAgIC5oZWFkbGluZS1sZWZ0IHtcbiAgICAgIC5oZWFkbGluZS10YWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gICAgICAgIGNvbG9yOiAjMDU5NjY5O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkbGluZS10aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ2luemVsJywgc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGxpbmUtY291bnRlciB7XG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgIH1cbiAgfVxuXG4gIC5mZWF0dXJlZC1waWNrcy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgobWluKDEwMCUsIDI2MHB4KSwgMWZyKSk7XG4gICAgZ2FwOiAyMHB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICBnYXA6IDE0cHg7XG4gICAgfVxuXG4gICAgLnBpY2stY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuXG4gICAgICAgIC5waWNrLWltZy1ib3ggaW1nIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5waWNrLWltZy1ib3gge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGFzcGVjdC1yYXRpbzogMTYgLyA5O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAucGljay1jYXQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCA2MSwgMzUsIDAuODUpO1xuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAgICAgICAgIGNvbG9yOiAjYTdmM2QwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGljay1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcblxuICAgICAgICAucGljay1tZXRhLXJvdyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5waWNrLXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4zNTtcbiAgICAgICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgICAgICBtYXJnaW46IDAgMCA2cHg7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5waWNrLWV4Y2VycHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBpY2stYXV0aG9yLWJhciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjVmOTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgY29sb3I6ICM5NGEzYjg7XG5cbiAgICAgICAgICAuYXV0aG9yLWxibCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICM0NzU1Njk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBNYWluIEZlZWQgJiBTaWRlYmFyIEdyaWQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uam91cm5hbC1mZWVkLXdyYXAge1xuICBwYWRkaW5nOiAzMnB4IDAgMjBweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMTZweDtcbiAgfVxuXG4gIC5sYXlvdXQtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzNDBweDtcbiAgICBnYXA6IDM2cHg7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgIGdhcDogMjhweDtcbiAgICB9XG4gIH1cbn1cblxuLmZlZWQtbWFpbi1jb2wge1xuICAuZmVlZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIH1cblxuICAgIC5mZWVkLXRpdGxlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ2luemVsJywgc2VyaWY7XG4gICAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICBtYXJnaW46IDA7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZlZWQtY291bnQge1xuICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICB9XG4gIH1cblxuICAuYXJ0aWNsZS1zdGFjayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMThweDtcbiAgfVxuXG4gIC5hcnRpY2xlLWl0ZW0tY2FyZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0MHB4IDFmcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcblxuICAgICAgLml0ZW0tdGh1bWIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgfVxuXG4gICAgICAuYnRuLXJlYWQtYXJyb3cge1xuICAgICAgICBjb2xvcjogIzA1OTY2OTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tdGh1bWItd3JhcCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWluLWhlaWdodDogMTgwcHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBhc3BlY3QtcmF0aW86IDE2IC8gOTtcbiAgICAgICAgbWluLWhlaWdodDogYXV0bztcbiAgICAgICAgbWF4LWhlaWdodDogMjQwcHg7XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLXRodW1iIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLWNhdC1waWxsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTUsIDYxLCAzNSwgMC44NSk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAgICAgICBjb2xvcjogI2E3ZjNkMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjY1NjI1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0taW5mbyB7XG4gICAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBwYWRkaW5nOiAxNHB4IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLW1ldGEtdG9wIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAuZmVhdHVyZWQtaW5kaWNhdG9yIHtcbiAgICAgICAgICBjb2xvcjogI2Q5NzcwNjtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zNTtcbiAgICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICAgIG1hcmdpbjogMCAwIDhweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLml0ZW0tZXhjZXJwdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41NTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaXRlbS10YWdzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcblxuICAgICAgICAudGFnLWNoaXAge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgICAgICAgY29sb3I6ICM0NzU1Njk7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2UyZThmMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaXRlbS1hdXRob3Itcm93IHtcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjVmOTtcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgIGdhcDogMTBweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAuYnRuLXJlYWQtYXJyb3cge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgcGFkZGluZzogNHB4IDA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRob3ItYmxvY2sge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAwO1xuXG4gICAgICAgICAgLmF1dGhvci1waWMge1xuICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICMxZTI5M2I7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzE4NzVyZW07XG4gICAgICAgICAgICBjb2xvcjogIzk0YTNiODtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYnRuLXJlYWQtYXJyb3cge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICM0NzU1Njk7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC8vIExvYWRpbmcgc3RhdGVcbiAgLmZlZWQtbG9hZGluZy1jYXJkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNjBweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTJweDtcblxuICAgIGlvbi1zcGlubmVyIHtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gRW1wdHkgc3RhdGVcbiAgLmVtcHR5LWZlZWQtY2FyZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDU2cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNjYmQ1ZTE7XG5cbiAgICAuZW1wdHktZmVlZC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICB9XG5cbiAgICBoNCB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICBtYXgtd2lkdGg6IDQ0MHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgICB9XG5cbiAgICAuZW1wdHktYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDlweCAxOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDAuODQzNzVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC5idG4tZW1wdHktcmVzZXQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMGYzZDIzO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMxNDUzMmQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJ0bi1lbXB0eS1leHBsb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgICAgICAgY29sb3I6ICMzMzQxNTU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2UyZThmMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgU2lkZWJhciBXaWRnZXRzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZlZWQtc2lkZWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcblxuICAuc2lkZWJhci13aWRnZXQge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gIH1cblxuICAvLyBUb3BpY3MgQ2xvdWRcbiAgLndpZGdldC10b3BpY3Mge1xuICAgIC53aWRnZXQtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAudGFnLWNvdW50IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRvcGljLWNsb3VkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBnYXA6IDhweDtcblxuICAgICAgLnRvcGljLWNoaXAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBmb250LXNpemU6IDAuNzgxMjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwZjNkMjM7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMGYzZDIzO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE5ld3NsZXR0ZXIgV2lkZ2V0XG4gIC53aWRnZXQtbmV3c2xldHRlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA5MjYxNSAwJSwgIzBkMzgyMCAxMDAlKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggLTVweCByZ2JhKDksIDM4LCAyMSwgMC4zNSk7XG5cbiAgICAubmwtaWNvbi1iYWRnZSB7XG4gICAgICB3aWR0aDogNDRweDtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCAyMTEsIDE1MywgMC4xNSk7XG4gICAgICBjb2xvcjogIzM0ZDM5OTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIH1cblxuICAgIGg0IHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ2luemVsJywgc2VyaWY7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDAuODQzNzVyZW07XG4gICAgICBjb2xvcjogI2NiZDVlMTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgIC5ubC1pbnB1dC1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NDBweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ0bi1ubC1zdWJtaXQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW5wdXQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJ0bi1ubC1zdWJtaXQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMGYzZDIzO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZzogNnB4IDE0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xuICAgICAgICBtaW4taGVpZ2h0OiAzOHB4O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMxNTgwM2Q7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmwtcHJpdmFjeSB7XG4gICAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5ubC1zdWNjZXNzLXN0YXRlIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjIpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMTg1LCAxMjksIDAuMyk7XG4gICAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjg0Mzc1cmVtO1xuICAgICAgY29sb3I6ICNhN2YzZDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAvLyBUcmVrIENUQSBXaWRnZXRcbiAgLndpZGdldC10cmVrLWN0YSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9hc3NldHMvdHJlay1iZy5qcGcnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0LCAjMGIxYTExO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAuY3RhLW92ZXJsYXkge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaW5zZXQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDksIDM4LCAyMSwgMC42KSAwJSwgcmdiYSg5LCAzOCwgMjEsIDAuOTUpIDEwMCUpO1xuICAgIH1cblxuICAgIC5jdGEtY29udGVudCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAyO1xuXG4gICAgICAuY3RhLWJhZGdlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDAuNjU2MjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gICAgICAgIGNvbG9yOiAjMzRkMzk5O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCAyMTEsIDE1MywgMC4xNSk7XG4gICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgaDQge1xuICAgICAgICBmb250LWZhbWlseTogJ0NpbnplbCcsIHNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgICBjb2xvcjogI2NiZDVlMTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIH1cblxuICAgICAgLmJ0bi1jdGEtZXhwbG9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGNvbG9yOiAjMGYzZDIzO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDlweCAxOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzRkMzk5O1xuICAgICAgICAgIGNvbG9yOiAjMDkyNjE1O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ },

/***/ 8051
/*!******************************!*\
  !*** ./src/app/blog/blog.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blog: () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _core_encryption_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/encryption.service */ 3242);
var _staticBlock;





class Blog {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
  }
  // ==================== GET METHODS ====================
  getPost(id) {
    return this.http.get(`${this.API}/blog/posts/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  getAllPosts() {
    return this.http.get(`${this.API}/blog/posts`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  getPublishedPosts() {
    return this.http.get(`${this.API}/blog/posts`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  getPublishedPost(idOrSlug) {
    return this.http.get(`${this.API}/blog/posts/${idOrSlug}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  getPostsByCategory(category) {
    return this.http.get(`${this.API}/blog/posts/category/${category}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  getCategories() {
    return this.http.get(`${this.API}/blog/categories`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  incrementViews(postId) {
    return this.http.post(`${this.API}/blog/posts/${postId}/view`, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  // ==================== POST/PUT METHODS ====================
  savePost(id, formData) {
    // NOTE: FormData cannot be encrypted directly.
    // Extract fields, encrypt non-file data, then reattach image.
    const plainData = {};
    formData.forEach((value, key) => {
      if (!(value instanceof File)) {
        plainData[key] = value;
      }
    });
    const encryptedPayload = this.crypto.encrypt(plainData);
    const encryptedFormData = new FormData();
    encryptedFormData.append('encryptedPayload', encryptedPayload);
    // Re-attach image file if present
    const imageFile = formData.get('image');
    if (imageFile instanceof File) {
      encryptedFormData.append('image', imageFile, imageFile.name);
    }
    const request$ = id ? this.http.put(`${this.API}/blog/posts/${id}`, encryptedFormData) : this.http.post(`${this.API}/blog/posts`, encryptedFormData);
    return request$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
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
  deletePost(id) {
    const encryptedPayload = this.crypto.encrypt({
      id
    });
    return this.http.delete(`${this.API}/blog/posts/${id}`, {
      body: {
        encryptedPayload
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  publishPost(id) {
    const encryptedPayload = this.crypto.encrypt({
      id
    });
    return this.http.patch(`${this.API}/blog/posts/${id}/publish`, {
      encryptedPayload
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function Blog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Blog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_encryption_service__WEBPACK_IMPORTED_MODULE_4__.EncryptionService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: Blog,
    factory: Blog.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_blog_blog-module_ts.js.map