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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.searchQuery = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BlogComponent_div_0_div_51_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Editor's Choice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BlogComponent_div_0_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_div_51_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.viewPost(ctx_r1.heroPost));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 66)(3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 68)(5, "div", 69)(6, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, BlogComponent_div_0_div_51_span_9_Template, 3, 0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h2", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 76)(17, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " Read Story ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 81);
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
function BlogComponent_div_0_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_button_54_Template_button_click_0_listener() {
      const cat_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.selectedCategory = cat_r6.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 85);
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
function BlogComponent_div_0_section_55_article_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "article", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_section_55_article_11_Template_article_click_0_listener() {
      const post_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.viewPost(post_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 99)(7, "div", 100)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "h4", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 104)(19, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span", 106);
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
function BlogComponent_div_0_section_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 86)(1, "div", 87)(2, "div", 88)(3, "div", 89)(4, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Curated");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h3", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Trending Expeditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, BlogComponent_div_0_section_55_article_11_Template, 23, 11, "article", 94);
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
function BlogComponent_div_0_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 107)(1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "No trail stories found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "We couldn't find any articles matching your search query. Try broadening your terms or reset the category filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 110)(8, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_div_64_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Reset Filters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_div_64_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.exploreTreks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " View Upcoming Treks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function BlogComponent_div_0_div_65_article_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Featured ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BlogComponent_div_0_div_65_article_1_div_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_div_65_article_1_div_19_span_1_Template_span_click_0_listener($event) {
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
function BlogComponent_div_0_div_65_article_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BlogComponent_div_0_div_65_article_1_div_19_span_1_Template, 2, 1, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", post_r11.tags.slice(0, 3));
  }
}
function BlogComponent_div_0_div_65_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "article", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_div_65_article_1_Template_article_click_0_listener() {
      const post_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.viewPost(post_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 120)(7, "div", 121)(8, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, BlogComponent_div_0_div_65_article_1_span_14_Template, 3, 0, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "h3", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, BlogComponent_div_0_div_65_article_1_div_19_Template, 2, 1, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 128)(21, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "img", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div")(24, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " Read Article ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "i", 134);
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
function BlogComponent_div_0_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BlogComponent_div_0_div_65_article_1_Template, 31, 15, "article", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.filteredPosts);
  }
}
function BlogComponent_div_0_button_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_button_75_Template_button_click_0_listener() {
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
function BlogComponent_div_0_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 140)(1, "div", 141)(2, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BlogComponent_div_0_div_83_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.newsletterEmail, $event) || (ctx_r1.newsletterEmail = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_div_83_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.subscribeNewsletter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Join ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Strict Zero-Spam Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newsletterEmail);
  }
}
function BlogComponent_div_0_div_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 147);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.exploreTreks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " Explore Treks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.writeBlog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "section", 19)(24, "div", 20)(25, "div", 21)(26, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Western Ghats Chronicles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "h1", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " Trek Tales & Field Guides ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " Authentic trail reports, high-altitude biodiversity insights, packing wisdom, and mountaineer stories curated by certified trek leaders across Karnataka. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 26)(34, "div", 27)(35, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Dispatches");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 27)(41, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Terrain Topics");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 27)(47, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Field Tested");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, BlogComponent_div_0_div_51_Template, 26, 13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "nav", 32)(53, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, BlogComponent_div_0_button_54_Template, 4, 4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, BlogComponent_div_0_section_55_Template, 12, 2, "section", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 36)(57, "div", 37)(58, "main", 38)(59, "div", 39)(60, "h3", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, BlogComponent_div_0_div_64_Template, 14, 0, "div", 42)(65, BlogComponent_div_0_div_65_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "aside", 44)(67, "div", 45)(68, "div", 46)(69, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "Trending Topics");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, BlogComponent_div_0_button_75_Template, 2, 1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 51)(77, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "Trail Dispatch");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "Get monsoon advisories, secret Western Ghats routes, and packing blueprints delivered bi-weekly.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](83, BlogComponent_div_0_div_83_Template, 9, 1, "div", 54)(84, BlogComponent_div_0_div_84_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](86, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 58)(88, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Next Ascent");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "Ready to step onto the ridge?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "Discover upcoming weekend batch departures with certified guides.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogComponent_div_0_Template_button_click_94_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.exploreTreks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, " Book A Trek ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](96, "i", 61);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.canWriteBlog ? "Write Story" : "Login to Write", " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.filteredPosts.length === 0);
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
  constructor(router, blogService, loadingController, location, auth, authModal, media, siteSettings) {
    this.router = router;
    this.blogService = blogService;
    this.loadingController = loadingController;
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
    var _this = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = true;
      const loading = yield _this.loadingController.create({
        message: "Loading trail journals...",
        duration: 3000
      });
      yield loading.present();
      _this.blogService.getPublishedPosts().subscribe({
        next: posts => {
          const raw = posts?.data || [];
          _this.allPosts = raw.map(post => _this.mapPostToBlogPost(post));
          _this.extractPopularTags();
          loading.dismiss();
          _this.isLoading = false;
        },
        error: error => {
          console.error("Error loading posts:", error);
          loading.dismiss();
          _this.isLoading = false;
        }
      });
    })();
  }
  loadCategories() {
    var _this2 = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.blogService.getCategories().subscribe({
        next: response => {
          const categoriesArray = Array.isArray(response) ? response : response?.data || [];
          if (categoriesArray.length > 0) {
            const mappedCategories = categoriesArray.map(cat => ({
              value: cat.slug || cat.name.toLowerCase().replace(/\s+/g, "-"),
              label: cat.name,
              icon: _this2.getCategoryIconByName(cat.name)
            }));
            _this2.categories = [{
              value: "all",
              label: "All Stories",
              icon: "bi-grid-fill"
            }, ...mappedCategories];
          }
        },
        error: error => {
          console.error("Error loading categories:", error);
        }
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
    this.router.navigate(["/upcomingtours"]);
  }
  get canWriteBlog() {
    return this.auth.isLoggedIn();
  }
  writeBlog() {
    var _this3 = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this3.auth.isLoggedIn()) {
          yield _this3.authModal.openLogin();
          if (!_this3.auth.isLoggedIn()) {
            return;
          }
        }
        _this3.router.navigate(['/blog-post']);
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
    return new (__ngFactoryType__ || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_blog__WEBPACK_IMPORTED_MODULE_8__.Blog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_auth__WEBPACK_IMPORTED_MODULE_10__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_11__.AuthModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_media_service__WEBPACK_IMPORTED_MODULE_12__.MediaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_site_settings_service__WEBPACK_IMPORTED_MODULE_13__.SiteSettingsService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: BlogComponent,
    selectors: [["app-blog"]],
    decls: 2,
    vars: 3,
    consts: [["class", "blog-hub-page", 4, "ngIf"], [1, "blog-hub-page"], [1, "blog-top-bar"], [1, "top-bar-inner"], [1, "top-bar-brand-group"], [1, "brand-link", 3, "click"], [1, "brand-name"], [1, "bar-separator"], [1, "sub-label"], [1, "bi", "bi-journal-richtext", "me-1", "text-emerald"], [1, "top-bar-actions"], [1, "search-input-wrap"], [1, "bi", "bi-search", "search-glyph"], ["type", "text", "placeholder", "Search stories, tips, gears...", "aria-label", "Search blog articles", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "btn-clear-q", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-top-action", "btn-explore", 3, "click"], [1, "bi", "bi-compass", "me-1"], ["type", "button", 1, "btn-top-action", "btn-write", 3, "click"], [1, "bi", "bi-pencil-square", "me-1"], [1, "blog-hero"], [1, "hero-grid"], [1, "hero-intro"], [1, "hero-eyebrow"], [1, "bi", "bi-stars", "text-warning", "me-1"], [1, "hero-title"], [1, "hero-description"], [1, "hero-stats-row"], [1, "stat-cell"], [1, "stat-number"], [1, "stat-caption"], [1, "stat-divider"], ["class", "hero-featured-card", 3, "click", 4, "ngIf"], [1, "category-rail-wrap"], [1, "category-rail-inner"], ["type", "button", "class", "rail-pill", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "featured-picks-section", 4, "ngIf"], [1, "journal-feed-wrap"], [1, "container-custom", "layout-grid"], [1, "feed-main-col"], [1, "feed-header"], [1, "feed-title"], [1, "feed-count"], ["class", "empty-feed-card", 4, "ngIf"], ["class", "article-stack", 4, "ngIf"], [1, "feed-sidebar"], [1, "sidebar-widget", "widget-topics"], [1, "widget-header"], [1, "bi", "bi-tags-fill", "text-emerald", "me-2"], [1, "tag-count"], [1, "topic-cloud"], ["type", "button", "class", "topic-chip", 3, "click", 4, "ngFor", "ngForOf"], [1, "sidebar-widget", "widget-newsletter"], [1, "nl-icon-badge"], [1, "bi", "bi-mailbox2"], ["class", "nl-form-wrap", 4, "ngIf"], ["class", "nl-success-state", 4, "ngIf"], [1, "sidebar-widget", "widget-trek-cta"], [1, "cta-overlay"], [1, "cta-content"], [1, "cta-badge"], ["type", "button", 1, "btn-cta-explore", 3, "click"], [1, "bi", "bi-arrow-up-right", "ms-1"], ["type", "button", 1, "btn-clear-q", 3, "click"], [1, "bi", "bi-x-circle-fill"], [1, "hero-featured-card", 3, "click"], [1, "cover-image-wrap"], ["loading", "eager", "decoding", "async", 1, "cover-image", 3, "src", "alt"], [1, "cover-gradient-overlay"], [1, "cover-content"], [1, "cover-badges"], [1, "badge-category"], ["class", "badge-featured", 4, "ngIf"], [1, "cover-title"], [1, "cover-excerpt"], [1, "cover-byline"], [1, "author-avatar", 3, "src", "alt"], [1, "byline-meta"], [1, "author-name"], [1, "post-date-read"], [1, "bi", "bi-clock", "me-1"], [1, "read-story-pill"], [1, "bi", "bi-arrow-right", "ms-1"], [1, "badge-featured"], [1, "bi", "bi-star-fill", "text-warning", "me-1"], ["type", "button", 1, "rail-pill", 3, "click"], [1, "bi", 3, "ngClass"], [1, "featured-picks-section"], [1, "container-custom"], [1, "section-headline"], [1, "headline-left"], [1, "headline-tag"], [1, "headline-title"], [1, "headline-counter"], [1, "featured-picks-grid"], ["class", "pick-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "pick-card", 3, "click"], [1, "pick-img-box"], ["loading", "lazy", "decoding", "async", 3, "src", "alt"], [1, "pick-cat"], [1, "pick-body"], [1, "pick-meta-row"], [1, "bi", "bi-eye", "me-1"], [1, "pick-title"], [1, "pick-excerpt"], [1, "pick-author-bar"], [1, "author-lbl"], [1, "date-lbl"], [1, "empty-feed-card"], [1, "empty-feed-icon"], [1, "bi", "bi-journal-x"], [1, "empty-actions"], ["type", "button", 1, "btn-empty-reset", 3, "click"], [1, "bi", "bi-arrow-counterclockwise", "me-1"], ["type", "button", 1, "btn-empty-explore", 3, "click"], [1, "article-stack"], ["class", "article-item-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "article-item-card", 3, "click"], [1, "item-thumb-wrap"], ["loading", "lazy", "decoding", "async", 1, "item-thumb", 3, "src", "alt"], [1, "item-cat-pill"], [1, "item-info"], [1, "item-meta-top"], [1, "read-pill"], [1, "views-pill"], ["class", "featured-indicator", 4, "ngIf"], [1, "item-title"], [1, "item-excerpt"], ["class", "item-tags", 4, "ngIf"], [1, "item-author-row"], [1, "author-block"], [1, "author-pic", 3, "src", "alt"], [1, "name"], [1, "date"], [1, "btn-read-arrow"], [1, "bi", "bi-arrow-right"], [1, "featured-indicator"], [1, "item-tags"], ["class", "tag-chip", 3, "click", 4, "ngFor", "ngForOf"], [1, "tag-chip", 3, "click"], ["type", "button", 1, "topic-chip", 3, "click"], [1, "nl-form-wrap"], [1, "nl-input-group"], ["type", "email", "placeholder", "Enter your email...", "aria-label", "Newsletter email address", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn-nl-submit", 3, "click"], [1, "nl-privacy"], [1, "bi", "bi-shield-check", "me-1"], [1, "nl-success-state"], [1, "bi", "bi-check-circle-fill", "text-emerald", "me-2"]],
    template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, BlogComponent_div_0_Template, 97, 17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.settings$));
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe],
    styles: [".blog-hub-page[_ngcontent-%COMP%] {\n  font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n  color: #1e293b;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  padding-bottom: 80px;\n}\n\n.container-custom[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.text-emerald[_ngcontent-%COMP%] {\n  color: #10b981 !important;\n}\n\n.blog-top-bar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-bottom: 1px solid #e2e8f0;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-inner[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 12px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .blog-top-bar[_ngcontent-%COMP%]   .top-bar-inner[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-brand-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-brand-group[_ngcontent-%COMP%]   .brand-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-brand-group[_ngcontent-%COMP%]   .brand-link[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", \"Outfit\", Georgia, serif;\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #0f3d23;\n  letter-spacing: -0.01em;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-brand-group[_ngcontent-%COMP%]   .bar-separator[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  font-size: 1rem;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-brand-group[_ngcontent-%COMP%]   .sub-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n  display: inline-flex;\n  align-items: center;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 6px 12px;\n  transition: all 0.2s ease;\n  width: 240px;\n}\n@media (max-width: 992px) {\n  .blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n}\n@media (max-width: 576px) {\n  .blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n    order: 3;\n  }\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]:focus-within {\n  background: #ffffff;\n  border-color: #10b981;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.12);\n  width: 280px;\n}\n@media (max-width: 576px) {\n  .blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]:focus-within {\n    width: 100%;\n  }\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]   .search-glyph[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin-right: 8px;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 0.84375rem;\n  font-family: inherit;\n  color: #0f172a;\n  width: 100%;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]   .btn-clear-q[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #94a3b8;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]   .btn-clear-q[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .btn-top-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 7px 14px;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .btn-top-action.btn-explore[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  color: #334155;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .btn-top-action.btn-explore[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .btn-top-action.btn-write[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  border: 1px solid #0f3d23;\n  color: #ffffff;\n}\n.blog-top-bar[_ngcontent-%COMP%]   .top-bar-actions[_ngcontent-%COMP%]   .btn-top-action.btn-write[_ngcontent-%COMP%]:hover {\n  background: #14532d;\n  border-color: #14532d;\n}\n\n.blog-hero[_ngcontent-%COMP%] {\n  background: radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.14) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(20, 83, 45, 0.1) 0%, transparent 45%), linear-gradient(180deg, #092615 0%, #0d3820 100%);\n  color: #ffffff;\n  padding: 56px 20px 48px;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-grid[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1.25fr;\n  gap: 40px;\n  align-items: center;\n}\n@media (max-width: 992px) {\n  .blog-hero[_ngcontent-%COMP%]   .hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #a7f3d0;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  padding: 5px 12px;\n  border-radius: 9999px;\n  margin-bottom: 16px;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", \"Outfit\", Georgia, serif;\n  font-size: clamp(2.2rem, 3.5vw, 3.25rem);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.12;\n  color: #ffffff;\n  margin-bottom: 16px;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.65;\n  color: #cbd5e1;\n  margin-bottom: 28px;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-stats-row[_ngcontent-%COMP%]   .stat-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-stats-row[_ngcontent-%COMP%]   .stat-cell[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", serif;\n  font-size: 1.65rem;\n  font-weight: 700;\n  color: #34d399;\n  line-height: 1;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-stats-row[_ngcontent-%COMP%]   .stat-cell[_ngcontent-%COMP%]   .stat-caption[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-top: 4px;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-intro[_ngcontent-%COMP%]   .hero-stats-row[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.18);\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);\n  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;\n  aspect-ratio: 16/10;\n  min-height: 340px;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]:hover   .cover-image[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]:hover   .read-story-pill[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #ffffff;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-image-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-image-wrap[_ngcontent-%COMP%]   .cover-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-image-wrap[_ngcontent-%COMP%]   .cover-gradient-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.5) 45%, rgba(9, 38, 21, 0.95) 100%);\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  padding: 28px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  z-index: 2;\n}\n@media (max-width: 576px) {\n  .blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-badges[_ngcontent-%COMP%]   .badge-category[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #ffffff;\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-badges[_ngcontent-%COMP%]   .badge-featured[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  color: #fde047;\n  border: 1px solid rgba(253, 224, 71, 0.3);\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-title[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", \"Outfit\", Georgia, serif;\n  font-size: clamp(1.25rem, 2.2vw, 1.75rem);\n  font-weight: 700;\n  color: #ffffff;\n  line-height: 1.25;\n  margin-bottom: 10px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-excerpt[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.55;\n  color: #e2e8f0;\n  margin-bottom: 18px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n@media (max-width: 576px) {\n  .blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-excerpt[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-byline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-byline[_ngcontent-%COMP%]   .author-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  border: 2px solid #34d399;\n  object-fit: cover;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-byline[_ngcontent-%COMP%]   .byline-meta[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-byline[_ngcontent-%COMP%]   .byline-meta[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%] {\n  font-size: 0.84375rem;\n  font-weight: 600;\n  color: #ffffff;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-byline[_ngcontent-%COMP%]   .byline-meta[_ngcontent-%COMP%]   .post-date-read[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.blog-hero[_ngcontent-%COMP%]   .hero-featured-card[_ngcontent-%COMP%]   .cover-content[_ngcontent-%COMP%]   .cover-byline[_ngcontent-%COMP%]   .read-story-pill[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  color: #ffffff;\n  padding: 6px 14px;\n  border-radius: 9999px;\n  font-size: 0.78125rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.2s ease;\n}\n\n.category-rail-wrap[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 10px 0;\n}\n.category-rail-wrap[_ngcontent-%COMP%]   .category-rail-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.category-rail-wrap[_ngcontent-%COMP%]   .category-rail-inner[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.category-rail-wrap[_ngcontent-%COMP%]   .category-rail-inner[_ngcontent-%COMP%]   .rail-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 16px;\n  border-radius: 9999px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  color: #475569;\n  font-size: 0.84375rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.15s ease;\n}\n.category-rail-wrap[_ngcontent-%COMP%]   .category-rail-inner[_ngcontent-%COMP%]   .rail-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n}\n.category-rail-wrap[_ngcontent-%COMP%]   .category-rail-inner[_ngcontent-%COMP%]   .rail-pill[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n  border-color: #cbd5e1;\n}\n.category-rail-wrap[_ngcontent-%COMP%]   .category-rail-inner[_ngcontent-%COMP%]   .rail-pill.active[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  border-color: #0f3d23;\n  color: #ffffff;\n}\n.category-rail-wrap[_ngcontent-%COMP%]   .category-rail-inner[_ngcontent-%COMP%]   .rail-pill.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n\n.featured-picks-section[_ngcontent-%COMP%] {\n  padding: 36px 0 20px;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .section-headline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .section-headline[_ngcontent-%COMP%]   .headline-left[_ngcontent-%COMP%]   .headline-tag[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #059669;\n  margin-bottom: 2px;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .section-headline[_ngcontent-%COMP%]   .headline-left[_ngcontent-%COMP%]   .headline-title[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", serif;\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .section-headline[_ngcontent-%COMP%]   .headline-counter[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n  transition: all 0.25s ease;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: #cbd5e1;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]:hover   .pick-img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-img-box[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-img-box[_ngcontent-%COMP%]   .pick-cat[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: rgba(15, 61, 35, 0.85);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  color: #a7f3d0;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 6px;\n  text-transform: uppercase;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-body[_ngcontent-%COMP%]   .pick-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-bottom: 8px;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-body[_ngcontent-%COMP%]   .pick-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.35;\n  color: #0f172a;\n  margin: 0 0 6px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-body[_ngcontent-%COMP%]   .pick-excerpt[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin-bottom: 14px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-body[_ngcontent-%COMP%]   .pick-author-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 10px;\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\n.featured-picks-section[_ngcontent-%COMP%]   .featured-picks-grid[_ngcontent-%COMP%]   .pick-card[_ngcontent-%COMP%]   .pick-body[_ngcontent-%COMP%]   .pick-author-bar[_ngcontent-%COMP%]   .author-lbl[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #475569;\n}\n\n.journal-feed-wrap[_ngcontent-%COMP%] {\n  padding: 32px 0 20px;\n}\n.journal-feed-wrap[_ngcontent-%COMP%]   .layout-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 36px;\n  align-items: start;\n}\n@media (max-width: 992px) {\n  .journal-feed-wrap[_ngcontent-%COMP%]   .layout-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.feed-main-col[_ngcontent-%COMP%]   .feed-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .feed-header[_ngcontent-%COMP%]   .feed-title[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", serif;\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n}\n.feed-main-col[_ngcontent-%COMP%]   .feed-header[_ngcontent-%COMP%]   .feed-count[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n  overflow: hidden;\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: 240px 1fr;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@media (max-width: 640px) {\n  .feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: #cbd5e1;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]:hover   .item-thumb[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]:hover   .btn-read-arrow[_ngcontent-%COMP%] {\n  color: #059669;\n  transform: translateX(3px);\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-thumb-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-height: 180px;\n}\n@media (max-width: 640px) {\n  .feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-thumb-wrap[_ngcontent-%COMP%] {\n    aspect-ratio: 16/9;\n    min-height: auto;\n  }\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-thumb-wrap[_ngcontent-%COMP%]   .item-thumb[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-thumb-wrap[_ngcontent-%COMP%]   .item-cat-pill[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: rgba(15, 61, 35, 0.85);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  color: #a7f3d0;\n  font-size: 0.65625rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-meta-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-bottom: 8px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-meta-top[_ngcontent-%COMP%]   .featured-indicator[_ngcontent-%COMP%] {\n  color: #d97706;\n  font-weight: 600;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  line-height: 1.35;\n  color: #0f172a;\n  margin: 0 0 8px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-excerpt[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #475569;\n  line-height: 1.55;\n  margin-bottom: 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .tag-chip[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-tags[_ngcontent-%COMP%]   .tag-chip[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-author-row[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 12px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-author-row[_ngcontent-%COMP%]   .author-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-author-row[_ngcontent-%COMP%]   .author-block[_ngcontent-%COMP%]   .author-pic[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-author-row[_ngcontent-%COMP%]   .author-block[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #1e293b;\n  line-height: 1.2;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-author-row[_ngcontent-%COMP%]   .author-block[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.71875rem;\n  color: #94a3b8;\n}\n.feed-main-col[_ngcontent-%COMP%]   .article-item-card[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]   .item-author-row[_ngcontent-%COMP%]   .btn-read-arrow[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 700;\n  color: #475569;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: all 0.2s ease;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 56px 20px;\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px dashed #cbd5e1;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   .empty-feed-icon[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  color: #94a3b8;\n  margin-bottom: 14px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin-bottom: 6px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  max-width: 440px;\n  margin: 0 auto 20px;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  border-radius: 10px;\n  font-size: 0.84375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn-empty-reset[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  color: #ffffff;\n  border: none;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn-empty-reset[_ngcontent-%COMP%]:hover {\n  background: #14532d;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn-empty-explore[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  color: #334155;\n}\n.feed-main-col[_ngcontent-%COMP%]   .empty-feed-card[_ngcontent-%COMP%]   .empty-actions[_ngcontent-%COMP%]   .btn-empty-explore[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n\n.feed-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .sidebar-widget[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  padding: 24px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-topics[_ngcontent-%COMP%]   .widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-topics[_ngcontent-%COMP%]   .widget-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: inline-flex;\n  align-items: center;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-topics[_ngcontent-%COMP%]   .widget-header[_ngcontent-%COMP%]   .tag-count[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 9999px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-topics[_ngcontent-%COMP%]   .topic-cloud[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-topics[_ngcontent-%COMP%]   .topic-cloud[_ngcontent-%COMP%]   .topic-chip[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 0.78125rem;\n  font-weight: 600;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-topics[_ngcontent-%COMP%]   .topic-cloud[_ngcontent-%COMP%]   .topic-chip[_ngcontent-%COMP%]:hover {\n  background: #0f3d23;\n  border-color: #0f3d23;\n  color: #ffffff;\n  transform: translateY(-1px);\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #092615 0%, #0d3820 100%);\n  color: #ffffff;\n  border: none;\n  box-shadow: 0 10px 25px -5px rgba(9, 38, 21, 0.35);\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-icon-badge[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(52, 211, 153, 0.15);\n  color: #34d399;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.35rem;\n  margin-bottom: 14px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", serif;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #ffffff;\n  margin-bottom: 6px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.84375rem;\n  color: #cbd5e1;\n  line-height: 1.5;\n  margin-bottom: 16px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  background: #ffffff;\n  border-radius: 10px;\n  padding: 3px;\n  margin-bottom: 8px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 8px 12px;\n  font-size: 0.8125rem;\n  font-family: inherit;\n  color: #0f172a;\n  background: transparent;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-input-group[_ngcontent-%COMP%]   .btn-nl-submit[_ngcontent-%COMP%] {\n  background: #0f3d23;\n  border: none;\n  color: #ffffff;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 6px 14px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  transition: background 0.15s ease;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-input-group[_ngcontent-%COMP%]   .btn-nl-submit[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-privacy[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: #94a3b8;\n  display: inline-flex;\n  align-items: center;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-newsletter[_ngcontent-%COMP%]   .nl-success-state[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.2);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  padding: 12px 14px;\n  border-radius: 10px;\n  font-size: 0.84375rem;\n  color: #a7f3d0;\n  display: flex;\n  align-items: center;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-trek-cta[_ngcontent-%COMP%] {\n  position: relative;\n  background: url(\"/assets/assets/trek-bg.jpg\") center/cover no-repeat, #0b1a11;\n  color: #ffffff;\n  overflow: hidden;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-trek-cta[_ngcontent-%COMP%]   .cta-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(9, 38, 21, 0.6) 0%, rgba(9, 38, 21, 0.95) 100%);\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-trek-cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-trek-cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .cta-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.65625rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #34d399;\n  background: rgba(52, 211, 153, 0.15);\n  padding: 3px 8px;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-trek-cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Cinzel\", serif;\n  font-size: 1.15rem;\n  font-weight: 700;\n  line-height: 1.3;\n  margin-bottom: 6px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-trek-cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #cbd5e1;\n  line-height: 1.5;\n  margin-bottom: 16px;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-trek-cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .btn-cta-explore[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #0f3d23;\n  border: none;\n  padding: 9px 18px;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  transition: all 0.2s ease;\n}\n.feed-sidebar[_ngcontent-%COMP%]   .widget-trek-cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .btn-cta-explore[_ngcontent-%COMP%]:hover {\n  background: #34d399;\n  color: #092615;\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsdUZBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtBQUhGOztBQU9BO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQUpGO0FBTUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFKSjtBQU1JO0VBVkY7SUFXSSxTQUFBO0VBSEo7QUFDRjtBQU1FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUpKO0FBTUk7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUFKTjtBQU1NO0VBQ0UsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBSlI7QUFRSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBTk47QUFTSTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQVBOO0FBV0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQVRKO0FBV0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQVROO0FBV007RUFWRjtJQVdJLFlBQUE7RUFSTjtBQUNGO0FBVU07RUFkRjtJQWVJLFdBQUE7SUFDQSxRQUFBO0VBUE47QUFDRjtBQVNNO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNB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RUFDQSwyQkFBQTtBQW5KViIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJMT0cgSFVCIENPTVBPTkVOVCBTQ1NTIC0gRURJVE9SSUFMIFRSQUlMIEpPVVJOQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLmJsb2ctaHViLXBhZ2Uge1xuICBmb250LWZhbWlseTogJ0ludGVyJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMWUyOTNiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG5cbi5jb250YWluZXItY3VzdG9tIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi50ZXh0LWVtZXJhbGQge1xuICBjb2xvcjogIzEwYjk4MSAhaW1wb3J0YW50O1xufVxuXG4vLyDDosKUwoDDosKUwoAgVG9wIE5hdmlnYXRpb24gQmFyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmJsb2ctdG9wLWJhciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG5cbiAgLnRvcC1iYXItaW5uZXIge1xuICAgIG1heC13aWR0aDogMTI0MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTZweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGdhcDogMTBweDtcbiAgICB9XG4gIH1cblxuICAudG9wLWJhci1icmFuZC1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcblxuICAgIC5icmFuZC1saW5rIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgLmJyYW5kLW5hbWUge1xuICAgICAgICBmb250LWZhbWlseTogJ0NpbnplbCcsICdPdXRmaXQnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICMwZjNkMjM7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5iYXItc2VwYXJhdG9yIHtcbiAgICAgIGNvbG9yOiAjY2JkNWUxO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC5zdWItbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAudG9wLWJhci1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5zZWFyY2gtaW5wdXQtd3JhcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgIHdpZHRoOiAyNDBweDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvcmRlcjogMztcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cy13aXRoaW4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICMxMGI5ODE7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4xMik7XG4gICAgICAgIHdpZHRoOiAyODBweDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc2VhcmNoLWdseXBoIHtcbiAgICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgfVxuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NDM3NXJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJ0bi1jbGVhci1xIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogIzk0YTNiODtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi10b3AtYWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDdweCAxNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICYuYnRuLWV4cGxvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgICBjb2xvcjogIzMzNDE1NTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xuICAgICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuYnRuLXdyaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzBmM2QyMztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzBmM2QyMztcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzE0NTMyZDtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMxNDUzMmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEVkaXRvcmlhbCBIZXJvIFNlY3Rpb24gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uYmxvZy1oZXJvIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxMCUgMjAlLCByZ2JhKDE2LCAxODUsIDEyOSwgMC4xNCkgMCUsIHRyYW5zcGFyZW50IDQwJSksXG4gICAgICAgICAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgOTAlIDgwJSwgcmdiYSgyMCwgODMsIDQ1LCAwLjEpIDAlLCB0cmFuc3BhcmVudCA0NSUpLFxuICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDkyNjE1IDAlLCAjMGQzODIwIDEwMCUpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogNTZweCAyMHB4IDQ4cHg7XG5cbiAgLmhlcm8tZ3JpZCB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjI1ZnI7XG4gICAgZ2FwOiA0MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgZ2FwOiAzMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5oZXJvLWludHJvIHtcbiAgICAuaGVyby1leWVicm93IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgICAgIGNvbG9yOiAjYTdmM2QwO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAuaGVyby10aXRsZSB7XG4gICAgICBmb250LWZhbWlseTogJ0NpbnplbCcsICdPdXRmaXQnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMi4ycmVtLCAzLjV2dywgMy4yNXJlbSk7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS4xMjtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAuaGVyby1kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS42NTtcbiAgICAgIGNvbG9yOiAjY2JkNWUxO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICB9XG5cbiAgICAuaGVyby1zdGF0cy1yb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDIwcHg7XG5cbiAgICAgIC5zdGF0LWNlbGwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5zdGF0LW51bWJlciB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDaW56ZWwnLCBzZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDEuNjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogIzM0ZDM5OTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0LWNhcHRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN0YXQtZGl2aWRlciB7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDb3ZlciBDYXJkXG4gIC5oZXJvLWZlYXR1cmVkLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IC0xNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG4gICAgYXNwZWN0LXJhdGlvOiAxNiAvIDEwO1xuICAgIG1pbi1oZWlnaHQ6IDM0MHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNik7XG5cbiAgICAgIC5jb3Zlci1pbWFnZSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICB9XG5cbiAgICAgIC5yZWFkLXN0b3J5LXBpbGwge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTBiOTgxO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY292ZXItaW1hZ2Utd3JhcCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBpbnNldDogMDtcblxuICAgICAgLmNvdmVyLWltYWdlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xuICAgICAgfVxuXG4gICAgICAuY292ZXItZ3JhZGllbnQtb3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaW5zZXQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAxODBkZWcsXG4gICAgICAgICAgcmdiYSgxNSwgMjMsIDQyLCAwLjEpIDAlLFxuICAgICAgICAgIHJnYmEoMTUsIDIzLCA0MiwgMC41KSA0NSUsXG4gICAgICAgICAgcmdiYSg5LCAzOCwgMjEsIDAuOTUpIDEwMCVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY292ZXItY29udGVudCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBpbnNldDogMDtcbiAgICAgIHBhZGRpbmc6IDI4cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB6LWluZGV4OiAyO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIH1cblxuICAgICAgLmNvdmVyLWJhZGdlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gICAgICAgIC5iYWRnZS1jYXRlZ29yeSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzEwYjk4MTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYmFkZ2UtZmVhdHVyZWQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgICAgICAgICBjb2xvcjogI2ZkZTA0NztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MywgMjI0LCA3MSwgMC4zKTtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY292ZXItdGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogJ0NpbnplbCcsICdPdXRmaXQnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjI1cmVtLCAyLjJ2dywgMS43NXJlbSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICB9XG5cbiAgICAgIC5jb3Zlci1leGNlcnB0IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTU7XG4gICAgICAgIGNvbG9yOiAjZTJlOGYwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvdmVyLWJ5bGluZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTJweDtcblxuICAgICAgICAuYXV0aG9yLWF2YXRhciB7XG4gICAgICAgICAgd2lkdGg6IDM4cHg7XG4gICAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzRkMzk5O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ5bGluZS1tZXRhIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgIC5hdXRob3ItbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODQzNzVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3QtZGF0ZS1yZWFkIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWFkLXN0b3J5LXBpbGwge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTRweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjc4MTI1cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBDYXRlZ29yeSBGaWx0ZXIgUmFpbCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5jYXRlZ29yeS1yYWlsLXdyYXAge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcbiAgcGFkZGluZzogMTBweCAwO1xuXG4gIC5jYXRlZ29yeS1yYWlsLWlubmVyIHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAucmFpbC1waWxsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogN3B4O1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgICAgZm9udC1zaXplOiAwLjg0Mzc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcblxuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMGYzZDIzO1xuICAgICAgICBib3JkZXItY29sb3I6ICMwZjNkMjM7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuXG4gICAgICAgIGkge1xuICAgICAgICAgIGNvbG9yOiAjMzRkMzk5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBTZWNvbmRhcnkgQ3VyYXRlZCBQaWNrcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5mZWF0dXJlZC1waWNrcy1zZWN0aW9uIHtcbiAgcGFkZGluZzogMzZweCAwIDIwcHg7XG5cbiAgLnNlY3Rpb24taGVhZGxpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgLmhlYWRsaW5lLWxlZnQge1xuICAgICAgLmhlYWRsaW5lLXRhZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgICAgICAgY29sb3I6ICMwNTk2Njk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgIH1cblxuICAgICAgLmhlYWRsaW5lLXRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDaW56ZWwnLCBzZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkbGluZS1jb3VudGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgfVxuICB9XG5cbiAgLmZlYXR1cmVkLXBpY2tzLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyODBweCwgMWZyKSk7XG4gICAgZ2FwOiAyMHB4O1xuXG4gICAgLnBpY2stY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuXG4gICAgICAgIC5waWNrLWltZy1ib3ggaW1nIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5waWNrLWltZy1ib3gge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGFzcGVjdC1yYXRpbzogMTYgLyA5O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAucGljay1jYXQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCA2MSwgMzUsIDAuODUpO1xuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAgICAgICAgIGNvbG9yOiAjYTdmM2QwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGljay1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcblxuICAgICAgICAucGljay1tZXRhLXJvdyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5waWNrLXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4zNTtcbiAgICAgICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgICAgICBtYXJnaW46IDAgMCA2cHg7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5waWNrLWV4Y2VycHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBpY2stYXV0aG9yLWJhciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjVmOTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgY29sb3I6ICM5NGEzYjg7XG5cbiAgICAgICAgICAuYXV0aG9yLWxibCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICM0NzU1Njk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBNYWluIEZlZWQgJiBTaWRlYmFyIEdyaWQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uam91cm5hbC1mZWVkLXdyYXAge1xuICBwYWRkaW5nOiAzMnB4IDAgMjBweDtcblxuICAubGF5b3V0LWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzQwcHg7XG4gICAgZ2FwOiAzNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICB9XG59XG5cbi5mZWVkLW1haW4tY29sIHtcbiAgLmZlZWQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAuZmVlZC10aXRsZSB7XG4gICAgICBmb250LWZhbWlseTogJ0NpbnplbCcsIHNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5mZWVkLWNvdW50IHtcbiAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgfVxuICB9XG5cbiAgLmFydGljbGUtc3RhY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE4cHg7XG4gIH1cblxuICAuYXJ0aWNsZS1pdGVtLWNhcmQge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNDBweCAxZnI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcblxuICAgICAgLml0ZW0tdGh1bWIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgfVxuXG4gICAgICAuYnRuLXJlYWQtYXJyb3cge1xuICAgICAgICBjb2xvcjogIzA1OTY2OTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tdGh1bWItd3JhcCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWluLWhlaWdodDogMTgwcHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICBhc3BlY3QtcmF0aW86IDE2IC8gOTtcbiAgICAgICAgbWluLWhlaWdodDogYXV0bztcbiAgICAgIH1cblxuICAgICAgLml0ZW0tdGh1bWIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLml0ZW0tY2F0LXBpbGwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNSwgNjEsIDM1LCAwLjg1KTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgICAgIGNvbG9yOiAjYTdmM2QwO1xuICAgICAgICBmb250LXNpemU6IDAuNjU2MjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbS1pbmZvIHtcbiAgICAgIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAuaXRlbS1tZXRhLXRvcCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAgIC5mZWF0dXJlZC1pbmRpY2F0b3Ige1xuICAgICAgICAgIGNvbG9yOiAjZDk3NzA2O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLml0ZW0tdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICAgICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgICAgbWFyZ2luOiAwIDAgOHB4O1xuICAgICAgfVxuXG4gICAgICAuaXRlbS1leGNlcnB0IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgY29sb3I6ICM0NzU1Njk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU1O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuaXRlbS10YWdzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcblxuICAgICAgICAudGFnLWNoaXAge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgICAgICAgY29sb3I6ICM0NzU1Njk7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2UyZThmMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaXRlbS1hdXRob3Itcm93IHtcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjVmOTtcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG5cbiAgICAgICAgLmF1dGhvci1ibG9jayB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGdhcDogMTBweDtcblxuICAgICAgICAgIC5hdXRob3ItcGljIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogIzFlMjkzYjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjcxODc1cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJ0bi1yZWFkLWFycm93IHtcbiAgICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEVtcHR5IHN0YXRlXG4gIC5lbXB0eS1mZWVkLWNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1NnB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjY2JkNWUxO1xuXG4gICAgLmVtcHR5LWZlZWQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDIuMjVyZW07XG4gICAgICBjb2xvcjogIzk0YTNiODtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gICAgfVxuXG4gICAgaDQge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgbWF4LXdpZHRoOiA0NDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gICAgfVxuXG4gICAgLmVtcHR5LWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiA5cHggMThweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg0Mzc1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAuYnRuLWVtcHR5LXJlc2V0IHtcbiAgICAgICAgYmFja2dyb3VuZDogIzBmM2QyMztcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTQ1MzJkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5idG4tZW1wdHktZXhwbG9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gICAgICAgIGNvbG9yOiAjMzM0MTU1O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlMmU4ZjA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAIFNpZGViYXIgV2lkZ2V0cyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5mZWVkLXNpZGViYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI0cHg7XG5cbiAgLnNpZGViYXItd2lkZ2V0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICB9XG5cbiAgLy8gVG9waWNzIENsb3VkXG4gIC53aWRnZXQtdG9waWNzIHtcbiAgICAud2lkZ2V0LWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnRhZy1jb3VudCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgcGFkZGluZzogMnB4IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC50b3BpYy1jbG91ZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgIC50b3BpYy1jaGlwIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjc4MTI1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMGYzZDIzO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzBmM2QyMztcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBOZXdzbGV0dGVyIFdpZGdldFxuICAud2lkZ2V0LW5ld3NsZXR0ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwOTI2MTUgMCUsICMwZDM4MjAgMTAwJSk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IC01cHggcmdiYSg5LCAzOCwgMjEsIDAuMzUpO1xuXG4gICAgLm5sLWljb24tYmFkZ2Uge1xuICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMjExLCAxNTMsIDAuMTUpO1xuICAgICAgY29sb3I6ICMzNGQzOTk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICB9XG5cbiAgICBoNCB7XG4gICAgICBmb250LWZhbWlseTogJ0NpbnplbCcsIHNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAwLjg0Mzc1cmVtO1xuICAgICAgY29sb3I6ICNjYmQ1ZTE7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAubmwtaW5wdXQtZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogIzk0YTNiODtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYnRuLW5sLXN1Ym1pdCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwZjNkMjM7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzE1ODAzZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5ubC1wcml2YWN5IHtcbiAgICAgIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xuICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLm5sLXN1Y2Nlc3Mtc3RhdGUge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMTg1LCAxMjksIDAuMik7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAxODUsIDEyOSwgMC4zKTtcbiAgICAgIHBhZGRpbmc6IDEycHggMTRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDAuODQzNzVyZW07XG4gICAgICBjb2xvcjogI2E3ZjNkMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRyZWsgQ1RBIFdpZGdldFxuICAud2lkZ2V0LXRyZWstY3RhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2Fzc2V0cy90cmVrLWJnLmpwZycpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQsICMwYjFhMTE7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5jdGEtb3ZlcmxheSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBpbnNldDogMDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoOSwgMzgsIDIxLCAwLjYpIDAlLCByZ2JhKDksIDM4LCAyMSwgMC45NSkgMTAwJSk7XG4gICAgfVxuXG4gICAgLmN0YS1jb250ZW50IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDI7XG5cbiAgICAgIC5jdGEtYmFkZ2Uge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42NTYyNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgICAgICAgY29sb3I6ICMzNGQzOTk7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTIsIDIxMSwgMTUzLCAwLjE1KTtcbiAgICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBoNCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ2luemVsJywgc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgICAgIGNvbG9yOiAjY2JkNWUxO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuYnRuLWN0YS1leHBsb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgY29sb3I6ICMwZjNkMjM7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogOXB4IDE4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzNGQzOTk7XG4gICAgICAgICAgY29sb3I6ICMwOTI2MTU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
        console.error('Decryption error:', error);
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