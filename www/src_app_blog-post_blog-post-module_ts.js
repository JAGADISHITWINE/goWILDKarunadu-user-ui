"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_blog-post_blog-post-module_ts"],{

/***/ 182
/*!***********************************************!*\
  !*** ./src/app/blog-post/blog-post-module.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogPostModule: () => (/* binding */ BlogPostModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _blog_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-post.component */ 1820);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: '',
  component: _blog_post_component__WEBPACK_IMPORTED_MODULE_2__.BlogPostComponent
}];
class BlogPostModule {
  static #_ = _staticBlock = () => (this.ɵfac = function BlogPostModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlogPostModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: BlogPostModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _blog_post_component__WEBPACK_IMPORTED_MODULE_2__.BlogPostComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BlogPostModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _blog_post_component__WEBPACK_IMPORTED_MODULE_2__.BlogPostComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ },

/***/ 1820
/*!**************************************************!*\
  !*** ./src/app/blog-post/blog-post.component.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogPostComponent: () => (/* binding */ BlogPostComponent)
/* harmony export */ });
/* harmony import */ var _var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _blog_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog-post */ 7517);
/* harmony import */ var _auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth/auth-modal.service */ 2454);
/* harmony import */ var src_app_core_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/token.service */ 6280);
/* harmony import */ var _core_media_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/media.service */ 6657);

var _staticBlock;













const _c0 = ["fileInput"];
const _c1 = ["storyEditor"];
const _c2 = () => ({
  standalone: true
});
function BlogPostComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.isEditMode ? "Update Story" : "Publish Story", " \u2192 ");
  }
}
function BlogPostComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Publishing... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BlogPostComponent_div_33_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_button_7_Template_button_click_0_listener() {
      const tmpl_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.applyTemplate(tmpl_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tmpl_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](tmpl_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](tmpl_r4.name);
  }
}
function BlogPostComponent_div_33_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please enter a descriptive title (at least 5 characters). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BlogPostComponent_div_33_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please add a short summary hook (at least 10 characters). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BlogPostComponent_div_33_span_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BlogPostComponent_div_33_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 90)(3, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_div_62_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const fileInput_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](65);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](fileInput_r6.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Change ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_div_62_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.removeImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function BlogPostComponent_div_33_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_div_63_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const fileInput_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](65);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](fileInput_r6.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "svg", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "rect", 96)(4, "circle", 97)(5, "path", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Click to choose cover photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "JPG, PNG or WebP \u00B7 Max 6MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function BlogPostComponent_div_33_option_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", cat_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", cat_r8, " ");
  }
}
function BlogPostComponent_div_33_div_79_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_div_79_span_1_Template_button_click_2_listener() {
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9).index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.removeTag(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" #", tag_r11, " ");
  }
}
function BlogPostComponent_div_33_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BlogPostComponent_div_33_div_79_span_1_Template, 4, 1, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.currentTags);
  }
}
function BlogPostComponent_div_33_button_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_button_88_Template_button_click_0_listener() {
      const tag_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.toggleSuggestedTag(tag_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r13 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", ctx_r0.isTagSelected(tag_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" + ", tag_r13, " ");
  }
}
function BlogPostComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29)(1, "main", 30)(2, "div", 31)(3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Quick Starters:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, BlogPostComponent_div_33_button_7_Template, 4, 3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.clearStory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, BlogPostComponent_div_33_div_12_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "textarea", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, BlogPostComponent_div_33_div_15_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 42)(17, "div", 43)(18, "div", 44)(19, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.insertFormatting("h2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "H2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.insertFormatting("h3"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "H3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 44)(27, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.insertFormatting("bold"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "B");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.insertFormatting("italic"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "I");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 44)(35, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.insertFormatting("bullet"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "\u2022 List");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.insertFormatting("number"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "1. List");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 44)(43, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_Template_button_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.insertFormatting("quote"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "\u201C Quote");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.insertFormatting("tip"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Tip");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.insertFormatting("warning"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "textarea", 57, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "aside", 58)(57, "div", 59)(58, "div", 60)(59, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Cover Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, BlogPostComponent_div_33_span_61_Template, 3, 0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, BlogPostComponent_div_33_div_62_Template, 7, 1, "div", 63)(63, BlogPostComponent_div_33_div_63_Template, 10, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "input", 65, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BlogPostComponent_div_33_Template_input_change_64_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.onImageSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 66)(67, "div", 60)(68, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 67)(71, "select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, BlogPostComponent_div_33_option_72_Template, 2, 2, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 66)(74, "div", 60)(75, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "Tags & Topics");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](79, BlogPostComponent_div_33_div_79_Template, 2, 1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 72)(81, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BlogPostComponent_div_33_Template_input_ngModelChange_81_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r0.tagInputText, $event) || (ctx_r0.tagInputText = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function BlogPostComponent_div_33_Template_input_keydown_81_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.onTagKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_Template_button_click_82_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.addTag(ctx_r0.tagInputText));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 75)(85, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Popular suggestions:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](88, BlogPostComponent_div_33_button_88_Template, 2, 3, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 79)(90, "div", 60)(91, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "Publishing Checklist");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "ul", 80)(94, "li")(95, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](96, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "Engaging title (5+ chars)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "li")(100, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](101, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "Brief summary hook");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "li")(105, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](106, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, "Story body content");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "li")(110, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](111, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, "Cover photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_33_Template_button_click_114_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.publish());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.templates);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r0.postForm.get("title")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.postForm.get("title")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r0.postForm.get("excerpt")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.postForm.get("excerpt")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.selectedFile || ctx_r0.existingImageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.imagePreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.imagePreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.currentTags.length, " added");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.currentTags.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.tagInputText);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](27, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.tagInputText.trim());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.suggestedTags);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("done", (((tmp_16_0 = ctx_r0.postForm.get("title")) == null ? null : tmp_16_0.value) || "").trim().length >= 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", (((tmp_17_0 = ctx_r0.postForm.get("title")) == null ? null : tmp_17_0.value) || "").trim().length >= 5 ? "bi-check-circle-fill text-success" : "bi-circle text-muted");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("done", (((tmp_18_0 = ctx_r0.postForm.get("excerpt")) == null ? null : tmp_18_0.value) || "").trim().length >= 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", (((tmp_19_0 = ctx_r0.postForm.get("excerpt")) == null ? null : tmp_19_0.value) || "").trim().length >= 10 ? "bi-check-circle-fill text-success" : "bi-circle text-muted");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("done", (((tmp_20_0 = ctx_r0.postForm.get("content")) == null ? null : tmp_20_0.value) || "").trim().length >= 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", (((tmp_21_0 = ctx_r0.postForm.get("content")) == null ? null : tmp_21_0.value) || "").trim().length >= 20 ? "bi-check-circle-fill text-success" : "bi-circle text-muted");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("done", ctx_r0.imagePreview || ctx_r0.existingImageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r0.imagePreview || ctx_r0.existingImageUrl ? "bi-check-circle-fill text-success" : "bi-circle text-muted");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.isFormReady || ctx_r0.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.isEditMode ? "Update Story" : "Publish Story", " ");
  }
}
function BlogPostComponent_div_34_img_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 132);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function BlogPostComponent_div_34_div_41_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("#", tag_r15);
  }
}
function BlogPostComponent_div_34_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 133)(1, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Tags:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, BlogPostComponent_div_34_div_41_span_3_Template, 2, 1, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.currentTags);
  }
}
function BlogPostComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 107)(1, "div", 108)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Live Preview Mode \u2014 This is how your story will look to readers on the website.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_34_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.activeTab = "editor");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Back to Editing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "article", 112)(9, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, BlogPostComponent_div_34_img_10_Template, 1, 1, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 116)(13, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "h1", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 120)(20, "div", 121)(21, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div")(24, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "You (Explorer)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "goWILD Karunadu Contributor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 126)(29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, BlogPostComponent_div_34_div_41_Template, 4, 1, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 130)(43, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_34_Template_button_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.activeTab = "editor");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, " \u2190 Continue Writing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_div_34_Template_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.publish());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("no-img", !ctx_r0.imagePreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.imagePreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ((tmp_3_0 = ctx_r0.postForm.get("category")) == null ? null : tmp_3_0.value) || "Trek Guides", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](((tmp_4_0 = ctx_r0.postForm.get("title")) == null ? null : tmp_4_0.value) || "Untitled Adventure Story");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](((tmp_5_0 = ctx_r0.postForm.get("excerpt")) == null ? null : tmp_5_0.value) || "Add a brief overview hook for readers...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ~", ctx_r0.readingTime, " min read");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.wordCount, " words");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r0.previewHtml || "<p class='text-muted'>No story text written yet. Switch to the editor tab to begin!</p>", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.currentTags.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.isFormReady || ctx_r0.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.isEditMode ? "Update Story" : "Publish Story", " \u2192 ");
  }
}
class BlogPostComponent {
  constructor(fb, route, router, postEditorService, toastController, loadingController, authModal, tokenService, media) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.postEditorService = postEditorService;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.authModal = authModal;
    this.tokenService = tokenService;
    this.media = media;
    this.postId = null;
    this.isEditMode = false;
    this.userId = null;
    this.activeTab = "editor";
    this.isSubmitting = false;
    // Image handling
    this.selectedFile = null;
    this.imagePreview = null;
    this.existingImageUrl = null;
    this.categories = ["Trek Guides", "Expedition Stories", "Gear & Reviews", "Wildlife & Nature", "Tips & Safety", "Monsoon Trails"];
    this.suggestedTags = ["Western Ghats", "Kudremukha", "Monsoon Trek", "Beginner Guide", "Trail Tips", "Camping", "Photography", "Safety"];
    this.tagInputText = "";
    this.templates = [{
      name: "Trek Experience",
      icon: "bi bi-compass-fill",
      title: "My Sunrise Trek to Kudremukha Peak: A Complete Trail Experience",
      excerpt: "Hiking through misty shola forests, emerald meadows, and reaching the majestic horse-face summit in Chikkamagaluru.",
      category: "Expedition Stories",
      tags: ["Western Ghats", "Kudremukha", "Trail Tips"],
      content: `## The Trailhead & Early Morning Ascent
Our journey began at Mullodi basecamp at 5:30 AM. The crisp mountain air and the distant sound of cascading waterfalls set the tone for what was to be an unforgettable adventure.

## Traversing Shola Grasslands & Forest Checkpoints
As the sun climbed over the horizon, the golden light illuminated rolling green hills. Walking along the narrow ridge with valleys plunging on either side was pure magic.

> "Standing amidst the sweeping grasslands of the Western Ghats, all the noise of city life dissolved into mountain breeze."

## The Final Push to the Summit
The final 2 kilometers tested our endurance with steep rocky inclines, but reaching the 1,894m summit milestone made every step worth it.

[TIP] **Trekker Tip**: Start your ascent before 6:30 AM to beat the mid-day sun and catch the sunrise mist.

[WARNING] **Safety Warning**: Entry requires Karnataka Forest Dept permit clearance. Always stick to the marked trail to preserve fragile wildlife habitats.`
    }, {
      name: "Gear & Packing",
      icon: "bi bi-backpack4-fill",
      title: "Essential Monsoon Trekking Gear: The Packing Checklist That Saved My Hike",
      excerpt: "From waterproof dry-bags to high-ankle grip boots, here is the battle-tested packing list for trekking in the Western Ghats.",
      category: "Gear & Reviews",
      tags: ["Gear & Reviews", "Monsoon Trek", "Beginner Guide"],
      content: `## The Golden Rules of Monsoon Packing
Western Ghats rain is legendary. A single downpour can soak your entire backpack in minutes if you aren't prepared with waterproof dry-bags.

## Top Mandatory Items for Every Trekker
- **Expedition Rain Poncho**: Covers both you and your backpack down to your knees.
- **High-Ankle Trekking Boots**: Deep lug grip for wet mud and slick rock slabs.
- **Leech Socks & Salt Spray**: Crucial for tropical rainforest sections.
- **Quick-Dry Synthetics**: Avoid cotton at all costs; wet cotton causes chafing and hypothermia.
- **Headlamp with Fresh Batteries**: Early starts and misty evenings demand reliable hands-free lighting.

> "There is no bad weather in the mountains, only bad gear choices."

[TIP] **Trekker Tip**: Pack all spare clothes inside zip-lock bags inside your main dry-bag for foolproof double waterproofing.`
    }, {
      name: "Photo Trail Log",
      icon: "bi bi-camera-fill",
      title: "Capturing the Clouds: A Photographer's Guide to Western Ghats Trails",
      excerpt: "How to shoot dramatic cloud inversions, vibrant flora, and golden hour ridges in the lush mountains of Karnataka.",
      category: "Trek Guides",
      tags: ["Photography", "Western Ghats", "Trail Tips"],
      content: `## Chasing the Golden Hour at Ridge Saddle
The key to mountain photography in Karnataka is reaching vantage saddles right as dawn breaks through the mist.

## Camera Protection in High Humidity
Keep silicone desiccant pouches in your lens bag, and never change lenses in open drizzle. Use a lightweight microfibre towel around your strap.

> "The best photos on a trek happen in the fleeting moments between passing rain clouds and sunbursts."

[TIP] **Trekker Tip**: Polarising filters help cut through glare on wet leaves and intensify the emerald greens of the valley.`
    }];
  }
  ngOnInit() {
    this.initForm();
    this.loadCategories();
    this.route.params.subscribe(params => {
      if (params["id"]) {
        this.postId = String(params["id"]);
        this.isEditMode = true;
        this.loadPost(this.postId);
      }
    });
  }
  initForm() {
    this.postForm = this.fb.group({
      title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
      excerpt: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10)]],
      content: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(20)]],
      category: ["Trek Guides", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      tags: this.fb.array(["Western Ghats", "Trek Guides"].map(t => this.fb.control(t))),
      status: ["published"]
    });
  }
  get tags() {
    return this.postForm.get("tags");
  }
  get currentTags() {
    return (this.tags.value || []).filter(t => typeof t === "string" && t.trim() !== "");
  }
  get wordCount() {
    const text = (this.postForm.get("content")?.value || "").trim();
    if (!text) return 0;
    return text.split(/\s+/).filter(Boolean).length;
  }
  get readingTime() {
    return Math.max(1, Math.ceil(this.wordCount / 180));
  }
  get previewHtml() {
    const raw = this.postForm.get("content")?.value || "";
    return this.formatStoryToHtml(raw);
  }
  get isFormReady() {
    const hasTitle = (this.postForm.get("title")?.value || "").trim().length >= 5;
    const hasExcerpt = (this.postForm.get("excerpt")?.value || "").trim().length >= 10;
    const hasContent = (this.postForm.get("content")?.value || "").trim().length >= 20;
    const hasCategory = !!this.postForm.get("category")?.value;
    const hasImage = !!this.selectedFile || !!this.existingImageUrl;
    return hasTitle && hasExcerpt && hasContent && hasCategory && hasImage;
  }
  loadCategories() {
    const fallback = ["Trek Guides", "Expedition Stories", "Gear & Reviews", "Wildlife & Nature", "Tips & Safety", "Monsoon Trails"];
    this.postEditorService.getCategories().subscribe({
      next: response => {
        const categoriesArray = Array.isArray(response) ? response : response?.data || [];
        const mapped = categoriesArray.map(cat => cat?.name || cat?.label || cat?.value || cat).filter(name => typeof name === "string" && !!name.trim()).map(name => name.trim());
        if (mapped.length) {
          this.categories = Array.from(new Set([...mapped, ...fallback]));
        }
      },
      error: () => {
        this.categories = fallback;
      }
    });
  }
  // ==================== TAG MANAGEMENT ====================
  addTag(tagText) {
    const clean = (tagText || "").trim().replace(/^#+/, "");
    if (!clean) return;
    if (this.currentTags.some(t => t.toLowerCase() === clean.toLowerCase())) {
      this.tagInputText = "";
      return;
    }
    this.tags.push(this.fb.control(clean));
    this.tagInputText = "";
  }
  onTagKeydown(event) {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      this.addTag(this.tagInputText);
    }
  }
  removeTag(index) {
    if (index >= 0 && index < this.tags.length) {
      this.tags.removeAt(index);
    }
  }
  toggleSuggestedTag(tag) {
    const existingIndex = this.currentTags.findIndex(t => t.toLowerCase() === tag.toLowerCase());
    if (existingIndex >= 0) {
      this.removeTag(existingIndex);
    } else {
      this.addTag(tag);
    }
  }
  isTagSelected(tag) {
    return this.currentTags.some(t => t.toLowerCase() === tag.toLowerCase());
  }
  // ==================== TEMPLATES ====================
  applyTemplate(tmpl) {
    this.postForm.patchValue({
      title: tmpl.title,
      excerpt: tmpl.excerpt,
      category: tmpl.category,
      content: tmpl.content
    });
    // Reset and apply tags
    while (this.tags.length) {
      this.tags.removeAt(0);
    }
    tmpl.tags.forEach(t => this.tags.push(this.fb.control(t)));
    this.showToast(`Applied "${tmpl.name}" starter template!`, "success");
  }
  clearStory() {
    this.postForm.patchValue({
      title: "",
      excerpt: "",
      content: ""
    });
    this.showToast("Story cleared", "warning");
  }
  // ==================== TOOLBAR INSERTIONS ====================
  insertFormatting(type) {
    const textarea = this.storyEditor?.nativeElement;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selected = text.substring(start, end);
    let snippet = "";
    let cursorOffset = 0;
    switch (type) {
      case "h2":
        snippet = `\n\n## ${selected || "Section Heading"}\n`;
        cursorOffset = snippet.length;
        break;
      case "h3":
        snippet = `\n\n### ${selected || "Sub-Heading"}\n`;
        cursorOffset = snippet.length;
        break;
      case "bold":
        snippet = `**${selected || "bold text"}**`;
        cursorOffset = snippet.length;
        break;
      case "italic":
        snippet = `*${selected || "italic text"}*`;
        cursorOffset = snippet.length;
        break;
      case "bullet":
        snippet = `\n- ${selected || "List item 1"}\n- List item 2\n- List item 3\n`;
        cursorOffset = snippet.length;
        break;
      case "number":
        snippet = `\n1. ${selected || "Step 1"}\n2. Step 2\n3. Step 3\n`;
        cursorOffset = snippet.length;
        break;
      case "quote":
        snippet = `\n> "${selected || "Standing on the ridge, the entire valley was blanketed in clouds."}"\n`;
        cursorOffset = snippet.length;
        break;
      case "tip":
        snippet = `\n[TIP] **Trekker Tip**: ${selected || "Start before dawn to catch the sunrise mist."}\n`;
        cursorOffset = snippet.length;
        break;
      case "warning":
        snippet = `\n[WARNING] **Safety Warning**: ${selected || "Monsoon trails are slippery; carry poles and leech protection."}\n`;
        cursorOffset = snippet.length;
        break;
    }
    const newText = text.substring(0, start) + snippet + text.substring(end);
    this.postForm.patchValue({
      content: newText
    });
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + cursorOffset, start + cursorOffset);
    }, 50);
  }
  // ==================== IMAGE HANDLING ====================
  onImageSelect(event) {
    const file = event.target.files[0];
    if (file) {
      if (!this.isAcceptedImage(file)) {
        this.showToast("Please select an image file (JPG, PNG, WebP)", "warning");
        return;
      }
      const maxSize = 6 * 1024 * 1024; // 6MB
      if (file.size > maxSize) {
        this.showToast("Image size must be under 6MB", "warning");
        return;
      }
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = e => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
      this.showToast("Cover photo uploaded successfully", "success");
    }
  }
  isAcceptedImage(file) {
    const mime = String(file?.type || "").toLowerCase();
    if (mime.startsWith("image/")) return true;
    const name = String(file?.name || "").toLowerCase();
    const ext = name.includes(".") ? name.split(".").pop() || "" : "";
    const imageExt = new Set(["jpg", "jpeg", "png", "gif", "webp", "avif", "bmp", "heic"]);
    return imageExt.has(ext);
  }
  removeImage() {
    this.selectedFile = null;
    this.imagePreview = null;
    this.existingImageUrl = null;
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = "";
    }
    this.showToast("Cover photo removed", "warning");
  }
  // ==================== LOAD POST ====================
  loadPost(id) {
    this.postEditorService.getPost(id).subscribe({
      next: post => {
        // Clear tags
        while (this.tags.length) {
          this.tags.removeAt(0);
        }
        if (post.tags && Array.isArray(post.tags)) {
          post.tags.forEach(tag => this.tags.push(this.fb.control(tag)));
        }
        // Set image
        if (post.featured_image) {
          this.existingImageUrl = post.featured_image;
          this.imagePreview = this.media.resolve(post.featured_image);
        }
        // Parse content
        let contentText = post.content || "";
        if (post.sections && Array.isArray(post.sections) && post.sections.length > 0) {
          contentText = this.sectionsToMarkdown(post.sections);
        } else if (contentText.includes("<") && contentText.includes(">")) {
          contentText = this.htmlToMarkdown(contentText);
        }
        this.postForm.patchValue({
          title: post.title,
          excerpt: post.excerpt,
          content: contentText,
          category: post.category || "Trek Guides",
          status: post.status || "published"
        });
      },
      error: err => {
        console.error("Error loading post:", err);
        this.showToast("Failed to load post", "danger");
      }
    });
  }
  // ==================== PUBLISH / SAVE ====================
  publish() {
    var _this = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.isFormReady) {
        _this.showToast("Please complete the title, excerpt, story, and cover photo", "warning");
        return;
      }
      if (!_this.tokenService.isValid()) {
        yield _this.openLoginPanel();
        if (!_this.tokenService.isValid()) return;
      }
      const loading = yield _this.loadingController.create({
        message: _this.isEditMode ? "Updating story..." : "Publishing expedition story..."
      });
      yield loading.present();
      _this.isSubmitting = true;
      try {
        const decoded = _this.tokenService.decode();
        _this.userId = decoded ? String(decoded.id ?? decoded.userId ?? "").trim() || null : null;
        const formValue = _this.postForm.value;
        const rawContent = formValue.content || "";
        const htmlContent = _this.formatStoryToHtml(rawContent);
        const structuredSections = _this.extractSectionsFromContent(rawContent, htmlContent);
        const formData = new FormData();
        formData.append("title", formValue.title.trim());
        formData.append("excerpt", formValue.excerpt.trim());
        formData.append("content", htmlContent);
        formData.append("sections", JSON.stringify(structuredSections));
        formData.append("category", formValue.category);
        formData.append("status", formValue.status || "published");
        formData.append("publishDate", new Date().toISOString());
        formData.append("author", "You");
        formData.append("tags", JSON.stringify(_this.currentTags));
        if (_this.userId) {
          formData.append("userId", _this.userId);
        }
        if (_this.selectedFile) {
          formData.append("image", _this.selectedFile, _this.selectedFile.name);
        } else if (_this.existingImageUrl && _this.imagePreview) {
          formData.append("existingImageUrl", _this.existingImageUrl);
        }
        _this.postEditorService.savePost(_this.postId, formData).subscribe({
          next: () => {
            loading.dismiss();
            _this.isSubmitting = false;
            _this.showToast(_this.isEditMode ? "Story updated successfully!" : "Story published successfully!", "success");
            _this.router.navigate(["/blog"]);
          },
          error: err => {
            loading.dismiss();
            _this.isSubmitting = false;
            console.error("Error saving post:", err);
            _this.showToast("Failed to save post. Please try again.", "danger");
          }
        });
      } catch (e) {
        loading.dismiss();
        _this.isSubmitting = false;
        _this.showToast("Error processing story submission", "danger");
      }
    })();
  }
  openLoginPanel() {
    var _this2 = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.authModal.openLogin();
      } catch {}
    })();
  }
  // ==================== FORMATTING & PARSING ====================
  formatStoryToHtml(text) {
    if (!text) return "";
    let processed = this.escapeHtml(text);
    // Markdown Headings
    processed = processed.replace(/^### (.*$)/gim, '<h3 class="story-h3">$1</h3>');
    processed = processed.replace(/^## (.*$)/gim, '<h2 class="story-h2">$1</h2>');
    processed = processed.replace(/^# (.*$)/gim, '<h2 class="story-h2">$1</h2>');
    // Bold & Italic
    processed = processed.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");
    processed = processed.replace(/\*(.*?)\*/gim, "<em>$1</em>");
    // Quotes
    processed = processed.replace(/^> (.*$)/gim, '<blockquote class="story-quote"><p>$1</p></blockquote>');
    // Tips & Warnings
    processed = processed.replace(/(?:💡|\[TIP\]) \*\*Trekker Tip\*\*:? (.*$)/gim, '<div class="story-callout tip"><i class="bi bi-lightbulb-fill callout-icon"></i><div><strong>Trekker Tip:</strong> $1</div></div>');
    processed = processed.replace(/(?:⚠️|\[WARNING\]) \*\*Safety Warning\*\*:? (.*$)/gim, '<div class="story-callout warning"><i class="bi bi-exclamation-triangle-fill callout-icon"></i><div><strong>Safety Warning:</strong> $1</div></div>');
    // Paragraphs & Lists
    const blocks = processed.split(/\n{2,}/);
    return blocks.map(block => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("<h2") || trimmed.startsWith("<h3") || trimmed.startsWith("<blockquote") || trimmed.startsWith("<div")) {
        return trimmed;
      }
      // List
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        const items = trimmed.split(/\n/).map(line => `<li>${line.replace(/^[-*]\s+/, "")}</li>`).join("");
        return `<ul class="story-list">${items}</ul>`;
      }
      if (/^\d+\.\s+/.test(trimmed)) {
        const items = trimmed.split(/\n/).map(line => `<li>${line.replace(/^\d+\.\s+/, "")}</li>`).join("");
        return `<ol class="story-list-numbered">${items}</ol>`;
      }
      return `<p class="story-p">${trimmed.replace(/\n/g, "<br>")}</p>`;
    }).filter(Boolean).join("\n\n");
  }
  extractSectionsFromContent(text, html) {
    const sections = [];
    const lines = text.split("\n");
    let currentSection = {
      type: "text",
      heading: "",
      content: ""
    };
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith("## ")) {
        if (currentSection.content || currentSection.heading) {
          sections.push(currentSection);
        }
        currentSection = {
          type: "text",
          heading: trimmed.replace(/^##\s+/, ""),
          content: ""
        };
      } else if (trimmed.startsWith("### ")) {
        if (currentSection.content || currentSection.heading) {
          sections.push(currentSection);
        }
        currentSection = {
          type: "text",
          heading: trimmed.replace(/^###\s+/, ""),
          content: ""
        };
      } else if (trimmed.startsWith("> ")) {
        sections.push({
          type: "quote",
          heading: "",
          content: trimmed.replace(/^>\s+/, "").replace(/^"(.*)"$/, "$1")
        });
      } else if (trimmed.startsWith("[TIP] ") || trimmed.startsWith("💡 ")) {
        sections.push({
          type: "tip",
          heading: "Trekker Tip",
          content: trimmed.replace(/^(?:\[TIP\]|💡)\s+(\*\*Trekker Tip\*\*:?\s*)?/, "")
        });
      } else if (trimmed.startsWith("[WARNING] ") || trimmed.startsWith("⚠️ ")) {
        sections.push({
          type: "warning",
          heading: "Safety Warning",
          content: trimmed.replace(/^(?:\[WARNING\]|⚠️)\s+(\*\*Safety Warning\*\*:?\s*)?/, "")
        });
      } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        if (currentSection.type !== "list") {
          if (currentSection.content || currentSection.heading) {
            sections.push(currentSection);
          }
          currentSection = {
            type: "list",
            heading: "",
            listType: "bullet",
            listItems: [],
            content: ""
          };
        }
        currentSection.listItems.push(trimmed.replace(/^[-*]\s+/, ""));
      } else if (trimmed) {
        if (currentSection.type === "list") {
          sections.push(currentSection);
          currentSection = {
            type: "text",
            heading: "",
            content: trimmed
          };
        } else {
          currentSection.content += (currentSection.content ? "\n" : "") + trimmed;
        }
      }
    });
    if (currentSection.content || currentSection.heading || currentSection.listItems && currentSection.listItems.length) {
      sections.push(currentSection);
    }
    if (sections.length === 0) {
      sections.push({
        type: "text",
        heading: "Story Overview",
        content: text
      });
    }
    return sections;
  }
  sectionsToMarkdown(sections) {
    let md = "";
    sections.forEach(s => {
      if (s.heading) md += `## ${s.heading}\n\n`;
      if (s.type === "text" && s.content) {
        md += `${s.content}\n\n`;
      } else if (s.type === "list" && s.listItems) {
        s.listItems.forEach(item => {
          md += `- ${item}\n`;
        });
        md += "\n";
      } else if (s.type === "quote" && s.content) {
        md += `> "${s.content}"\n\n`;
      } else if (s.type === "tip" && s.content) {
        md += `[TIP] **Trekker Tip**: ${s.content}\n\n`;
      } else if (s.type === "warning" && s.content) {
        md += `[WARNING] **Safety Warning**: ${s.content}\n\n`;
      }
    });
    return md.trim();
  }
  htmlToMarkdown(html) {
    return html.replace(/<h2[^>]*>(.*?)<\/h2>/gi, "\n\n## $1\n\n").replace(/<h3[^>]*>(.*?)<\/h3>/gi, "\n\n### $1\n\n").replace(/<strong>(.*?)<\/strong>/gi, "**$1**").replace(/<em>(.*?)<\/em>/gi, "*$1*").replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, "\n\n> $1\n\n").replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n").replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n").replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "").trim();
  }
  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
  showToast(_x) {
    var _this3 = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message, color = "success") {
      const toast = yield _this3.toastController.create({
        message,
        duration: 2500,
        position: "top",
        color
      });
      toast.present();
    }).apply(this, arguments);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function BlogPostComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlogPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_blog_post__WEBPACK_IMPORTED_MODULE_8__.BlogPost), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_9__.AuthModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_token_service__WEBPACK_IMPORTED_MODULE_10__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_media_service__WEBPACK_IMPORTED_MODULE_11__.MediaService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: BlogPostComponent,
    selectors: [["app-blog-post"]],
    viewQuery: function BlogPostComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.storyEditor = _t.first);
      }
    },
    decls: 35,
    vars: 13,
    consts: [["storyEditor", ""], ["fileInput", ""], [1, "blog-creator-page"], [1, "creator-header"], [1, "header-left"], ["routerLink", "/blog", "title", "Back to Blog Stories", 1, "back-link"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "back-icon"], ["fill-rule", "evenodd", "d", "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z", "clip-rule", "evenodd"], [1, "header-title-wrap"], [1, "creator-title"], [1, "read-estimate"], ["viewBox", "0 0 16 16", "fill", "currentColor"], ["d", "M8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z"], ["d", "M8 16A8 8 0 108 0a8 8 0 000 16zm7-8A7 7 0 111 8a7 7 0 0114 0z"], [1, "view-mode-tabs"], ["type", "button", 1, "mode-btn", 3, "click"], ["viewBox", "0 0 20 20", "fill", "currentColor"], ["d", "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"], ["d", "M10 12a2 2 0 100-4 2 2 0 000 4z"], ["fill-rule", "evenodd", "d", "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z", "clip-rule", "evenodd"], [1, "header-actions"], ["type", "button", 1, "publish-btn", 3, "click", "disabled"], [4, "ngIf"], ["class", "submitting-label", 4, "ngIf"], [1, "creator-container", 3, "formGroup"], ["class", "editor-layout", 4, "ngIf"], ["class", "preview-layout", 4, "ngIf"], [1, "submitting-label"], [1, "btn-spinner"], [1, "editor-layout"], [1, "story-canvas"], [1, "templates-bar"], [1, "templates-label"], [1, "bi", "bi-stars", "text-warning", "me-1"], [1, "templates-chips"], ["type", "button", "class", "template-chip", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "title", "Clear title and content", 1, "template-clear-btn", 3, "click"], [1, "field-block", "title-block"], ["type", "text", "formControlName", "title", "placeholder", "Title of your trek story or adventure...", "maxlength", "160", 1, "title-input"], ["class", "field-helper", 4, "ngIf"], [1, "field-block", "excerpt-block"], ["formControlName", "excerpt", "rows", "2", "placeholder", "Write a brief 1-2 sentence hook for readers (shown on story cards and social shares)...", "maxlength", "300", 1, "excerpt-input"], [1, "story-body-block"], [1, "editor-toolbar"], [1, "toolbar-group"], ["type", "button", "title", "Add Section Heading (H2)", 1, "tool-btn", 3, "click"], ["type", "button", "title", "Add Subheading (H3)", 1, "tool-btn", 3, "click"], [1, "toolbar-sep"], ["type", "button", "title", "Bold Text (**text**)", 1, "tool-btn", 3, "click"], ["type", "button", "title", "Italic Text (*text*)", 1, "tool-btn", "italic-btn", 3, "click"], ["type", "button", "title", "Add Bulleted List", 1, "tool-btn", 3, "click"], ["type", "button", "title", "Add Numbered Steps", 1, "tool-btn", 3, "click"], ["type", "button", "title", "Add Quote Block", 1, "tool-btn", 3, "click"], ["type", "button", "title", "Add Trekker Tip Box", 1, "tool-btn", "callout-tool-btn", 3, "click"], [1, "bi", "bi-lightbulb-fill", "text-warning", "me-1"], ["type", "button", "title", "Add Safety Warning Box", 1, "tool-btn", "warning-tool-btn", 3, "click"], [1, "bi", "bi-exclamation-triangle-fill", "text-danger", "me-1"], ["formControlName", "content", "rows", "18", "placeholder", "Tell your adventure story here...\n\nDescribe the trail, the mountain mist, river crossings, camping under stars, and summit views.\n\nTip: Use ## for main section titles, > for quotes, or click the toolbar buttons above!", 1, "story-textarea"], [1, "story-sidebar"], [1, "sidebar-card", "cover-photo-card"], [1, "card-head"], [1, "card-title"], ["class", "card-badge", 4, "ngIf"], ["class", "cover-preview-box", 4, "ngIf"], ["class", "cover-dropzone", 3, "click", 4, "ngIf"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], [1, "sidebar-card"], [1, "category-select-wrap"], ["formControlName", "category", 1, "custom-select"], [3, "value", 4, "ngFor", "ngForOf"], [1, "card-sub"], ["class", "active-tags-list", 4, "ngIf"], [1, "tag-input-row"], ["type", "text", "placeholder", "Add tag and press Enter...", 1, "tag-input", 3, "ngModelChange", "keydown", "ngModel", "ngModelOptions"], ["type", "button", 1, "tag-add-btn", 3, "click", "disabled"], [1, "suggested-tags-box"], [1, "suggested-title"], [1, "suggested-chips"], ["type", "button", "class", "tag-pill outline", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "sidebar-card", "checklist-card"], [1, "checklist"], [1, "check-icon"], [1, "bi", 3, "ngClass"], ["type", "button", 1, "publish-btn", "w-100", 3, "click", "disabled"], ["type", "button", 1, "template-chip", 3, "click"], [1, "field-helper"], [1, "card-badge"], [1, "bi", "bi-check2", "me-1"], [1, "cover-preview-box"], ["alt", "Cover Preview", 1, "cover-img", 3, "src"], [1, "cover-actions"], ["type", "button", 1, "cover-action-btn", 3, "click"], ["type", "button", 1, "cover-action-btn", "remove-btn", 3, "click"], [1, "cover-dropzone", 3, "click"], [1, "dropzone-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "4"], ["cx", "8.5", "cy", "8.5", "r", "1.5"], ["d", "M21 15l-5-5L5 21"], [1, "dropzone-text"], [1, "dropzone-sub"], [3, "value"], [1, "active-tags-list"], ["class", "tag-pill active", 4, "ngFor", "ngForOf"], [1, "tag-pill", "active"], ["type", "button", "title", "Remove tag", 1, "tag-remove", 3, "click"], ["type", "button", 1, "tag-pill", "outline", 3, "click"], [1, "preview-layout"], [1, "preview-banner"], [1, "bi", "bi-eye", "me-1"], ["type", "button", 1, "btn-edit-mode", 3, "click"], [1, "bi", "bi-pencil-square", "ms-1"], [1, "preview-article"], [1, "preview-hero"], ["alt", "Story Cover", "class", "preview-hero-img", 3, "src", 4, "ngIf"], [1, "preview-hero-overlay"], [1, "preview-hero-content"], [1, "preview-category-pill"], [1, "preview-title"], [1, "preview-lead"], [1, "preview-meta-bar"], [1, "author-pill"], [1, "author-avatar"], [1, "bi", "bi-person-fill"], [1, "author-name"], [1, "author-sub"], [1, "story-stats-pills"], [1, "bi", "bi-clock", "me-1"], [1, "preview-body", 3, "innerHTML"], ["class", "preview-tags", 4, "ngIf"], [1, "preview-bottom-actions"], ["type", "button", 1, "btn-back-to-edit", 3, "click"], ["alt", "Story Cover", 1, "preview-hero-img", 3, "src"], [1, "preview-tags"], [1, "preview-tags-label"], ["class", "preview-tag-pill", 4, "ngFor", "ngForOf"], [1, "preview-tag-pill"]],
    template: function BlogPostComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "header", 3)(2, "div", 4)(3, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Back to Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 8)(9, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "path", 12)(14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 14)(17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_Template_button_click_17_listener() {
          return ctx.activeTab = "editor";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Write Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_Template_button_click_22_listener() {
          return ctx.activeTab = "preview";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "path", 18)(25, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Live Reader Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 20)(29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogPostComponent_Template_button_click_29_listener() {
          return ctx.publish();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, BlogPostComponent_span_30_Template, 2, 1, "span", 22)(31, BlogPostComponent_span_31_Template, 3, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "form", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, BlogPostComponent_div_33_Template, 116, 28, "div", 25)(34, BlogPostComponent_div_34_Template, 47, 12, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit Story" : "Share Your Adventure");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ~", ctx.readingTime, " min read \u00B7 ", ctx.wordCount, " words ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.activeTab === "editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.activeTab === "preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.isFormReady || ctx.isSubmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isSubmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isSubmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.postForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activeTab === "editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activeTab === "preview");
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHrefDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
    styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\n.blog-creator-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #f7f5f0;\n  color: #1a251d;\n  font-family: \"Barlow\", sans-serif;\n  padding-bottom: 80px;\n}\n\n.creator-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(255, 255, 255, 0.94);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border-bottom: 1px solid #e5e0d4;\n  padding: 14px clamp(16px, 4vw, 48px);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);\n}\n\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  min-width: 0;\n}\n\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #4b6354;\n  font-weight: 600;\n  font-size: 13px;\n  text-decoration: none;\n  padding: 6px 12px;\n  border-radius: 8px;\n  background: #edf3ee;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.back-link[_ngcontent-%COMP%]   .back-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  background: #dde8df;\n  color: #1b4329;\n}\n\n.header-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.creator-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Playfair Display\", Georgia, serif;\n  font-size: 18px;\n  font-weight: 700;\n  color: #172a1e;\n  line-height: 1.2;\n}\n\n.read-estimate[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #6b7c72;\n  margin-top: 2px;\n}\n.read-estimate[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  color: #2d6328;\n}\n\n.view-mode-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #edf1ed;\n  padding: 3px;\n  border-radius: 999px;\n  border: 1px solid #dbe4dc;\n}\n\n.mode-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  border: 0;\n  background: none;\n  padding: 7px 18px;\n  border-radius: 999px;\n  font-family: \"Barlow\", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  color: #4b6354;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.mode-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n.mode-btn.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #164024;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.mode-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #164024;\n}\n\n.publish-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: #1b4329;\n  color: #ffffff;\n  border: 0;\n  padding: 9px 24px;\n  border-radius: 999px;\n  font-family: \"Barlow\", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(27, 67, 41, 0.25);\n  transition: all 0.25s ease;\n  white-space: nowrap;\n}\n.publish-btn[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: #143520;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(27, 67, 41, 0.35);\n}\n.publish-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.55;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.publish-btn.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 14px;\n  border-radius: 12px;\n}\n\n.submitting-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.creator-container[_ngcontent-%COMP%] {\n  max-width: 1320px;\n  margin: 28px auto 0;\n  padding: 0 clamp(16px, 4vw, 48px);\n}\n\n.editor-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 360px;\n  gap: 32px;\n  align-items: flex-start;\n}\n\n.story-canvas[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 20px;\n  border: 1px solid #e7e2d9;\n  padding: clamp(24px, 4vw, 44px);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.03);\n}\n\n.templates-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  padding-bottom: 20px;\n  margin-bottom: 24px;\n  border-bottom: 1px dashed #e6e0d3;\n}\n\n.templates-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1b4329;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n.templates-chips[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.template-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: #f4f8f5;\n  border: 1px solid #cfe0d4;\n  border-radius: 999px;\n  padding: 5px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #215433;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.template-chip[_ngcontent-%COMP%]:hover {\n  background: #e4f0e7;\n  border-color: #215433;\n  transform: translateY(-1px);\n}\n\n.template-clear-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  font-size: 12px;\n  color: #8c9b91;\n  cursor: pointer;\n  padding: 4px 8px;\n  text-decoration: underline;\n}\n.template-clear-btn[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n\n.field-block[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.title-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  border-bottom: 2px solid transparent;\n  outline: none;\n  font-family: \"Playfair Display\", Georgia, serif;\n  font-size: clamp(24px, 3.4vw, 36px);\n  font-weight: 800;\n  color: #172a1e;\n  padding: 10px 0;\n  background: transparent;\n  transition: border-color 0.2s ease;\n}\n.title-input[_ngcontent-%COMP%]::placeholder {\n  color: #a4b3a9;\n  font-weight: 600;\n}\n.title-input[_ngcontent-%COMP%]:focus {\n  border-bottom-color: #1b4329;\n}\n\n.excerpt-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #e7e2d9;\n  border-radius: 12px;\n  outline: none;\n  font-family: \"Barlow\", sans-serif;\n  font-size: 15px;\n  line-height: 1.6;\n  color: #3b4d42;\n  padding: 14px 16px;\n  background: #fbfaf8;\n  resize: vertical;\n  transition: all 0.2s ease;\n}\n.excerpt-input[_ngcontent-%COMP%]::placeholder {\n  color: #92a498;\n}\n.excerpt-input[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: #1b4329;\n  box-shadow: 0 0 0 3px rgba(27, 67, 41, 0.08);\n}\n\n.field-helper[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #dc2626;\n  margin-top: 6px;\n  font-weight: 500;\n}\n\n.story-body-block[_ngcontent-%COMP%] {\n  border: 1px solid #ded8cb;\n  border-radius: 16px;\n  overflow: hidden;\n  background: #ffffff;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);\n  transition: border-color 0.2s ease;\n}\n.story-body-block[_ngcontent-%COMP%]:focus-within {\n  border-color: #1b4329;\n  box-shadow: 0 0 0 3px rgba(27, 67, 41, 0.08);\n}\n\n.editor-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  padding: 8px 12px;\n  background: #f8f6f1;\n  border-bottom: 1px solid #e7e1d5;\n}\n\n.toolbar-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n\n.toolbar-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 20px;\n  background: #ded8cb;\n  margin: 0 4px;\n}\n\n.tool-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid transparent;\n  background: none;\n  padding: 5px 10px;\n  border-radius: 7px;\n  font-family: \"Barlow\", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  color: #394d3f;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.tool-btn[_ngcontent-%COMP%]:hover {\n  background: #e8ede8;\n  color: #153c23;\n}\n.tool-btn.callout-tool-btn[_ngcontent-%COMP%]:hover {\n  background: #fef9c3;\n  color: #854d0e;\n}\n.tool-btn.warning-tool-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #991b1b;\n}\n\n.story-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  outline: none;\n  font-family: \"Barlow\", sans-serif;\n  font-size: 16px;\n  line-height: 1.75;\n  color: #27382d;\n  padding: 20px;\n  background: transparent;\n  resize: vertical;\n  min-height: 380px;\n}\n.story-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #a4b3a9;\n  line-height: 1.7;\n}\n\n.story-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.sidebar-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  border: 1px solid #e7e2d9;\n  padding: 20px;\n  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.02);\n}\n\n.card-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #172a1e;\n}\n\n.card-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #166534;\n  background: #dcfce7;\n  padding: 3px 8px;\n  border-radius: 999px;\n}\n\n.card-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #7b8e82;\n}\n\n.cover-dropzone[_ngcontent-%COMP%] {\n  border: 2px dashed #cfe0d4;\n  border-radius: 12px;\n  background: #f8faf9;\n  padding: 30px 16px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.cover-dropzone[_ngcontent-%COMP%]:hover {\n  border-color: #1b4329;\n  background: #f0f7f2;\n}\n\n.dropzone-icon[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.dropzone-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  color: #4b785a;\n}\n\n.dropzone-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1b4329;\n}\n\n.dropzone-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8c9b91;\n  margin-top: 4px;\n}\n\n.cover-preview-box[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid #e7e2d9;\n  position: relative;\n}\n\n.cover-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  display: block;\n}\n\n.cover-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 10px;\n  background: #fdfdfd;\n  border-top: 1px solid #eee;\n}\n\n.cover-action-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  font-size: 12px;\n  font-weight: 600;\n  color: #1b4329;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.cover-action-btn[_ngcontent-%COMP%]:hover {\n  background: #edf3ee;\n}\n.cover-action-btn.remove-btn[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.cover-action-btn.remove-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n\n.category-select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.custom-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid #dcd7cc;\n  border-radius: 10px;\n  background: #fcfbf9;\n  font-family: \"Barlow\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  color: #172a1e;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.custom-select[_ngcontent-%COMP%]:focus {\n  border-color: #1b4329;\n  box-shadow: 0 0 0 3px rgba(27, 67, 41, 0.08);\n}\n\n.active-tags-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n  margin-bottom: 12px;\n}\n\n.tag-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 5px 12px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.tag-pill.active[_ngcontent-%COMP%] {\n  background: #1b4329;\n  color: #ffffff;\n}\n.tag-pill.outline[_ngcontent-%COMP%] {\n  background: #f4f6f4;\n  border: 1px solid #dce4dc;\n  color: #3b5242;\n  cursor: pointer;\n}\n.tag-pill.outline[_ngcontent-%COMP%]:hover {\n  background: #e3ede4;\n  border-color: #1b4329;\n}\n.tag-pill.outline.selected[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  border-color: #16a34a;\n  color: #15803d;\n}\n.tag-pill[_ngcontent-%COMP%]   .tag-remove[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n  padding: 0;\n}\n.tag-pill[_ngcontent-%COMP%]   .tag-remove[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n\n.tag-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n\n.tag-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 12px;\n  border: 1px solid #dcd7cc;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n}\n.tag-input[_ngcontent-%COMP%]:focus {\n  border-color: #1b4329;\n}\n\n.tag-add-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background: #edf3ee;\n  color: #1b4329;\n  font-weight: 700;\n  font-size: 12px;\n  padding: 0 14px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.tag-add-btn[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: #1b4329;\n  color: #ffffff;\n}\n.tag-add-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.suggested-tags-box[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0ebe1;\n  padding-top: 12px;\n}\n\n.suggested-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #8c9b91;\n  display: block;\n  margin-bottom: 8px;\n}\n\n.suggested-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.checklist-card[_ngcontent-%COMP%] {\n  background: #fbfaf8;\n}\n\n.checklist[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n.checklist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #7b8e82;\n}\n.checklist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #cbd5e1;\n}\n.checklist[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%] {\n  color: #166534;\n  font-weight: 600;\n}\n.checklist[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n\n.preview-layout[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n\n.preview-banner[_ngcontent-%COMP%] {\n  background: #e8f3ec;\n  border: 1px solid #bbf7d0;\n  border-radius: 12px;\n  padding: 12px 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #14532d;\n}\n\n.btn-edit-mode[_ngcontent-%COMP%] {\n  border: 0;\n  background: #1b4329;\n  color: #ffffff;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 6px 14px;\n  border-radius: 999px;\n  cursor: pointer;\n}\n.btn-edit-mode[_ngcontent-%COMP%]:hover {\n  background: #143520;\n}\n\n.preview-article[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 24px;\n  overflow: hidden;\n  border: 1px solid #e7e2d9;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);\n}\n\n.preview-hero[_ngcontent-%COMP%] {\n  position: relative;\n  height: 380px;\n  background: #0d1e13;\n  overflow: hidden;\n}\n.preview-hero.no-img[_ngcontent-%COMP%] {\n  height: 280px;\n  background: linear-gradient(135deg, #102a1b 0%, #1a422b 100%);\n}\n\n.preview-hero-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.preview-hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(7, 18, 11, 0.3) 0%, rgba(7, 18, 11, 0.88) 100%);\n}\n\n.preview-hero-content[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 32px clamp(20px, 4vw, 48px);\n  color: #ffffff;\n  z-index: 2;\n}\n\n.preview-category-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(34, 197, 94, 0.25);\n  border: 1px solid rgba(74, 222, 128, 0.5);\n  color: #dcfce7;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  padding: 4px 12px;\n  border-radius: 999px;\n  margin-bottom: 12px;\n  width: fit-content;\n}\n\n.preview-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-family: \"Playfair Display\", Georgia, serif;\n  font-size: clamp(26px, 4vw, 42px);\n  font-weight: 800;\n  line-height: 1.15;\n  color: #ffffff;\n  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.5);\n}\n\n.preview-lead[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  line-height: 1.5;\n  color: rgba(255, 255, 255, 0.88);\n  max-width: 720px;\n}\n\n.preview-meta-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px clamp(20px, 4vw, 48px);\n  border-bottom: 1px solid #f0ebe1;\n  background: #fdfcfb;\n}\n\n.author-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.author-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #e8f2ea;\n  border: 1px solid #cce1d1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n}\n\n.author-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #172a1e;\n  font-size: 14px;\n}\n\n.author-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #7b8e82;\n}\n\n.story-stats-pills[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7c72;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.preview-body[_ngcontent-%COMP%] {\n  padding: 36px clamp(20px, 4vw, 48px);\n  font-size: 17px;\n  line-height: 1.8;\n  color: #2b3b30;\n}\n.preview-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", Georgia, serif;\n  font-size: 26px;\n  font-weight: 700;\n  color: #172a1e;\n  margin: 36px 0 16px;\n  line-height: 1.25;\n}\n.preview-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #172a1e;\n  margin: 28px 0 12px;\n}\n.preview-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n}\n.preview-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .preview-body[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  padding-left: 28px;\n}\n.preview-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .preview-body[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.preview-body[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  padding: 18px 24px;\n  border-left: 4px solid #1b4329;\n  background: #f7f9f7;\n  border-radius: 0 12px 12px 0;\n  font-family: \"Playfair Display\", Georgia, serif;\n  font-style: italic;\n  font-size: 19px;\n  line-height: 1.6;\n  color: #1b4329;\n}\n.preview-body[_ngcontent-%COMP%]   .story-callout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  padding: 16px 20px;\n  border-radius: 14px;\n  margin: 28px 0;\n  font-size: 15px;\n  line-height: 1.6;\n}\n.preview-body[_ngcontent-%COMP%]   .story-callout[_ngcontent-%COMP%]   .callout-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 1;\n}\n.preview-body[_ngcontent-%COMP%]   .story-callout.tip[_ngcontent-%COMP%] {\n  background: #fefce8;\n  border: 1px solid #fef08a;\n  color: #854d0e;\n}\n.preview-body[_ngcontent-%COMP%]   .story-callout.warning[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n\n.preview-tags[_ngcontent-%COMP%] {\n  padding: 16px clamp(20px, 4vw, 48px) 32px;\n  border-top: 1px solid #f0ebe1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.preview-tags-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #8c9b91;\n  text-transform: uppercase;\n}\n\n.preview-tag-pill[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1b4329;\n  background: #edf3ee;\n  padding: 4px 12px;\n  border-radius: 999px;\n}\n\n.preview-bottom-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 24px;\n}\n\n.btn-back-to-edit[_ngcontent-%COMP%] {\n  border: 1px solid #dce4dc;\n  background: #ffffff;\n  color: #1b4329;\n  font-weight: 700;\n  font-size: 14px;\n  padding: 10px 20px;\n  border-radius: 999px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-back-to-edit[_ngcontent-%COMP%]:hover {\n  background: #edf3ee;\n}\n\n@media (max-width: 980px) {\n  .editor-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .story-sidebar[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n@media (max-width: 640px) {\n  .creator-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 12px;\n  }\n  .header-left[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .view-mode-tabs[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .header-actions[_ngcontent-%COMP%]   .publish-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .story-canvas[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .title-input[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .preview-hero[_ngcontent-%COMP%] {\n    height: 240px;\n  }\n  .preview-meta-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvZy1wb3N0L2Jsb2ctcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7QUFIRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFKSjtBQU9FO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBTEo7O0FBU0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBTkY7O0FBU0E7RUFDRSxTQUFBO0VBQ0EsK0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFTQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBTkY7QUFRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQU5KOztBQVdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQVJGOztB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QXVFQTtJQUNFLFFBQUE7RUFyRUY7QUFDRjtBQXdFQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFNBQUE7RUF0RUY7RUF3RUE7SUFDRSxXQUFBO0lBQ0EsOEJBQUE7RUF0RUY7RUF3RUE7SUFDRSxXQUFBO0lBQ0EsdUJBQUE7RUF0RUY7RUF3RUE7SUFDRSxXQUFBO0VBdEVGO0VBdUVFO0lBQ0UsV0FBQTtFQXJFSjtFQXdFQTtJQUNFLGFBQUE7RUF0RUY7RUF3RUE7SUFDRSxlQUFBO0VBdEVGO0VBd0VBO0lBQ0UsYUFBQTtFQXRFRjtFQXdFQTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxTQUFBO0VBdEVGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRVhQRURJVElPTiBTVE9SWSBDUkVBVE9SIChCTE9HIFBPU1QpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmJsb2ctY3JlYXRvci1wYWdlIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y1ZjA7XG4gIGNvbG9yOiAjMWEyNTFkO1xuICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgVE9QIEhFQURFUiAvIEFDVElPTiBCQVIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uY3JlYXRvci1oZWFkZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk0KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWUwZDQ7XG4gIHBhZGRpbmc6IDE0cHggY2xhbXAoMTZweCwgNHZ3LCA0OHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLmhlYWRlci1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5iYWNrLWxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGNvbG9yOiAjNGI2MzU0O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogI2VkZjNlZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAuYmFjay1pY29uIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGRlOGRmO1xuICAgIGNvbG9yOiAjMWI0MzI5O1xuICB9XG59XG5cbi5oZWFkZXItdGl0bGUtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmNyZWF0b3ItdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMTcyYTFlO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4ucmVhZC1lc3RpbWF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzZiN2M3MjtcbiAgbWFyZ2luLXRvcDogMnB4O1xuXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGNvbG9yOiAjMmQ2MzI4O1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBWSUVXIE1PREUgVEFCUyAoV1JJVEUgdnMgUFJFVklFVykgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udmlldy1tb2RlLXRhYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZWRmMWVkO1xuICBwYWRkaW5nOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGJlNGRjO1xufVxuXG4ubW9kZS1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogN3B4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0YjYzNTQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICBzdmcge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgfVxuXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMTY0MDI0O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB9XG5cbiAgJjpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgIGNvbG9yOiAjMTY0MDI0O1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBQVUJMSVNIIEJVVFRPTiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5wdWJsaXNoLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGJhY2tncm91bmQ6ICMxYjQzMjk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDlweCAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDI3LCA2NywgNDEsIDAuMjUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYmFja2dyb3VuZDogIzE0MzUyMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDI3LCA2NywgNDEsIDAuMzUpO1xuICB9XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIG9wYWNpdHk6IDAuNTU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgJi53LTEwMCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB9XG59XG5cbi5zdWJtaXR0aW5nLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4uYnRuLXNwaW5uZXIge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIE1BSU4gQ09OVEFJTkVSICYgTEFZT1VUIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmNyZWF0b3ItY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMzIwcHg7XG4gIG1hcmdpbjogMjhweCBhdXRvIDA7XG4gIHBhZGRpbmc6IDAgY2xhbXAoMTZweCwgNHZ3LCA0OHB4KTtcbn1cblxuLmVkaXRvci1sYXlvdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIDM2MHB4O1xuICBnYXA6IDMycHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgTUFJTiBTVE9SWSBDQU5WQVMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uc3RvcnktY2FudmFzIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTJkOTtcbiAgcGFkZGluZzogY2xhbXAoMjRweCwgNHZ3LCA0NHB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xufVxuXG4vLyBRdWljayBTdGFydGVycyBCYXJcbi50ZW1wbGF0ZXMtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNlNmUwZDM7XG59XG5cbi50ZW1wbGF0ZXMtbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMWI0MzI5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xufVxuXG4udGVtcGxhdGVzLWNoaXBzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnRlbXBsYXRlLWNoaXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNmNGY4ZjU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZmUwZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBwYWRkaW5nOiA1cHggMTRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIxNTQzMztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlNGYwZTc7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjE1NDMzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgfVxufVxuXG4udGVtcGxhdGUtY2xlYXItYnRuIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOGM5YjkxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjZWY0NDQ0O1xuICB9XG59XG5cbi8vIEZpZWxkIEJsb2Nrc1xuLmZpZWxkLWJsb2NrIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRpdGxlLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBHZW9yZ2lhLCBzZXJpZjtcbiAgZm9udC1zaXplOiBjbGFtcCgyNHB4LCAzLjR2dywgMzZweCk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjMTcyYTFlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlO1xuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2E0YjNhOTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFiNDMyOTtcbiAgfVxufVxuXG4uZXhjZXJwdC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlMmQ5O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgY29sb3I6ICMzYjRkNDI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYmFja2dyb3VuZDogI2ZiZmFmODtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM5MmE0OTg7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci1jb2xvcjogIzFiNDMyOTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNywgNjcsIDQxLCAwLjA4KTtcbiAgfVxufVxuXG4uZmllbGQtaGVscGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2RjMjYyNjtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vLyBTdG9yeSBCb2R5IEVkaXRvclxuLnN0b3J5LWJvZHktYmxvY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkOGNiO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2U7XG5cbiAgJjpmb2N1cy13aXRoaW4ge1xuICAgIGJvcmRlci1jb2xvcjogIzFiNDMyOTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNywgNjcsIDQxLCAwLjA4KTtcbiAgfVxufVxuXG4vLyBTdGlja3kgVG9vbGJhclxuLmVkaXRvci10b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmOGY2ZjE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlMWQ1O1xufVxuXG4udG9vbGJhci1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogM3B4O1xufVxuXG4udG9vbGJhci1zZXAge1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNkZWQ4Y2I7XG4gIG1hcmdpbjogMCA0cHg7XG59XG5cbi50b29sLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzM5NGQzZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZThlZGU4O1xuICAgIGNvbG9yOiAjMTUzYzIzO1xuICB9XG5cbiAgJi5jYWxsb3V0LXRvb2wtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmVmOWMzO1xuICAgIGNvbG9yOiAjODU0ZDBlO1xuICB9XG5cbiAgJi53YXJuaW5nLXRvb2wtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmVlMmUyO1xuICAgIGNvbG9yOiAjOTkxYjFiO1xuICB9XG59XG5cbi5zdG9yeS10ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS43NTtcbiAgY29sb3I6ICMyNzM4MmQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiAzODBweDtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNhNGIzYTk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgU0lERUJBUiBTRVRUSU5HUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zdG9yeS1zaWRlYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uc2lkZWJhci1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTJkOTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xufVxuXG4uY2FyZC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgY29sb3I6ICMxNzJhMWU7XG59XG5cbi5jYXJkLWJhZGdlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzE2NjUzNDtcbiAgYmFja2dyb3VuZDogI2RjZmNlNztcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG59XG5cbi5jYXJkLXN1YiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3YjhlODI7XG59XG5cbi8vIENvdmVyIERyb3B6b25lXG4uY292ZXItZHJvcHpvbmUge1xuICBib3JkZXI6IDJweCBkYXNoZWQgI2NmZTBkNDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmOTtcbiAgcGFkZGluZzogMzBweCAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICMxYjQzMjk7XG4gICAgYmFja2dyb3VuZDogI2YwZjdmMjtcbiAgfVxufVxuXG4uZHJvcHpvbmUtaWNvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHN2ZyB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGNvbG9yOiAjNGI3ODVhO1xuICB9XG59XG5cbi5kcm9wem9uZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzFiNDMyOTtcbn1cblxuLmRyb3B6b25lLXN1YiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM4YzliOTE7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLy8gQ292ZXIgUHJldmlldyBCb3hcbi5jb3Zlci1wcmV2aWV3LWJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2UyZDk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvdmVyLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb3Zlci1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZkZmRmZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5jb3Zlci1hY3Rpb24tYnRuIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMWI0MzI5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWRmM2VlO1xuICB9XG5cbiAgJi5yZW1vdmUtYnRuIHtcbiAgICBjb2xvcjogI2RjMjYyNjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZWUyZTI7XG4gICAgfVxuICB9XG59XG5cbi8vIENhdGVnb3J5IFNlbGVjdFxuLmNhdGVnb3J5LXNlbGVjdC13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3VzdG9tLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2Q3Y2M7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmY2ZiZjk7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzE3MmExZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzFiNDMyOTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNywgNjcsIDQxLCAwLjA4KTtcbiAgfVxufVxuXG4vLyBUYWdzXG4uYWN0aXZlLXRhZ3MtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi50YWctcGlsbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMxYjQzMjk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAmLm91dGxpbmUge1xuICAgIGJhY2tncm91bmQ6ICNmNGY2ZjQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjZTRkYztcbiAgICBjb2xvcjogIzNiNTI0MjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlM2VkZTQ7XG4gICAgICBib3JkZXItY29sb3I6ICMxYjQzMjk7XG4gICAgfVxuXG4gICAgJi5zZWxlY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZGNmY2U3O1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMTZhMzRhO1xuICAgICAgY29sb3I6ICMxNTgwM2Q7XG4gICAgfVxuICB9XG5cbiAgLnRhZy1yZW1vdmUge1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gIH1cbn1cblxuLnRhZy1pbnB1dC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLnRhZy1pbnB1dCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkN2NjO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3V0bGluZTogbm9uZTtcblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICMxYjQzMjk7XG4gIH1cbn1cblxuLnRhZy1hZGQtYnRuIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiAjZWRmM2VlO1xuICBjb2xvcjogIzFiNDMyOTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWI0MzI5O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG59XG5cbi5zdWdnZXN0ZWQtdGFncy1ib3gge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZWJlMTtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG5cbi5zdWdnZXN0ZWQtdGl0bGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGNvbG9yOiAjOGM5YjkxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uc3VnZ2VzdGVkLWNoaXBzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDZweDtcbn1cblxuLy8gQ2hlY2tsaXN0XG4uY2hlY2tsaXN0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmJmYWY4O1xufVxuXG4uY2hlY2tsaXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDlweDtcblxuICBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzdiOGU4MjtcblxuICAgIC5jaGVjay1pY29uIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogI2NiZDVlMTtcbiAgICB9XG5cbiAgICAmLmRvbmUge1xuICAgICAgY29sb3I6ICMxNjY1MzQ7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICAuY2hlY2staWNvbiB7XG4gICAgICAgIGNvbG9yOiAjMTZhMzRhO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgVEFCIDI6IExJVkUgUkVBREVSIFBSRVZJRVcgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ucHJldmlldy1sYXlvdXQge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnByZXZpZXctYmFubmVyIHtcbiAgYmFja2dyb3VuZDogI2U4ZjNlYztcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiZjdkMDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTJweCAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxNDUzMmQ7XG59XG5cbi5idG4tZWRpdC1tb2RlIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiAjMWI0MzI5O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiA2cHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTQzNTIwO1xuICB9XG59XG5cbi5wcmV2aWV3LWFydGljbGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlMmQ5O1xuICBib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4ucHJldmlldy1oZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDM4MHB4O1xuICBiYWNrZ3JvdW5kOiAjMGQxZTEzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICYubm8taW1nIHtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMDJhMWIgMCUsICMxYTQyMmIgMTAwJSk7XG4gIH1cbn1cblxuLnByZXZpZXctaGVyby1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnByZXZpZXctaGVyby1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg3LCAxOCwgMTEsIDAuMykgMCUsIHJnYmEoNywgMTgsIDExLCAwLjg4KSAxMDAlKTtcbn1cblxuLnByZXZpZXctaGVyby1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMzJweCBjbGFtcCgyMHB4LCA0dncsIDQ4cHgpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgei1pbmRleDogMjtcbn1cblxuLnByZXZpZXctY2F0ZWdvcnktcGlsbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogcmdiYSgzNCwgMTk3LCA5NCwgMC4yNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzQsIDIyMiwgMTI4LCAwLjUpO1xuICBjb2xvcjogI2RjZmNlNztcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnByZXZpZXctdGl0bGUge1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBHZW9yZ2lhLCBzZXJpZjtcbiAgZm9udC1zaXplOiBjbGFtcCgyNnB4LCA0dncsIDQycHgpO1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtc2hhZG93OiAwIDJweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnByZXZpZXctbGVhZCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4KTtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbn1cblxuLnByZXZpZXctbWV0YS1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE4cHggY2xhbXAoMjBweCwgNHZ3LCA0OHB4KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGViZTE7XG4gIGJhY2tncm91bmQ6ICNmZGZjZmI7XG59XG5cbi5hdXRob3ItcGlsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbn1cblxuLmF1dGhvci1hdmF0YXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNlOGYyZWE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2UxZDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5hdXRob3ItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMTcyYTFlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hdXRob3Itc3ViIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzdiOGU4Mjtcbn1cblxuLnN0b3J5LXN0YXRzLXBpbGxzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzZiN2M3MjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi8vIEZvcm1hdHRlZCBBcnRpY2xlIFR5cG9ncmFwaHlcbi5wcmV2aWV3LWJvZHkge1xuICBwYWRkaW5nOiAzNnB4IGNsYW1wKDIwcHgsIDR2dywgNDhweCk7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbiAgY29sb3I6ICMyYjNiMzA7XG5cbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIEdlb3JnaWEsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMTcyYTFlO1xuICAgIG1hcmdpbjogMzZweCAwIDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMxNzJhMWU7XG4gICAgbWFyZ2luOiAyOHB4IDAgMTJweDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gIH1cblxuICB1bCwgb2wge1xuICAgIG1hcmdpbjogMCAwIDI0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgIGxpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG4gIH1cblxuICBibG9ja3F1b3RlIHtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgICBwYWRkaW5nOiAxOHB4IDI0cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMWI0MzI5O1xuICAgIGJhY2tncm91bmQ6ICNmN2Y5Zjc7XG4gICAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBHZW9yZ2lhLCBzZXJpZjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgY29sb3I6ICMxYjQzMjk7XG4gIH1cblxuICAuc3RvcnktY2FsbG91dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE0cHg7XG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgbWFyZ2luOiAyOHB4IDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG5cbiAgICAuY2FsbG91dC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cblxuICAgICYudGlwIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZWZjZTg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmVmMDhhO1xuICAgICAgY29sb3I6ICM4NTRkMGU7XG4gICAgfVxuXG4gICAgJi53YXJuaW5nIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZWYyZjI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmVjYWNhO1xuICAgICAgY29sb3I6ICM5OTFiMWI7XG4gICAgfVxuICB9XG59XG5cbi5wcmV2aWV3LXRhZ3Mge1xuICBwYWRkaW5nOiAxNnB4IGNsYW1wKDIwcHgsIDR2dywgNDhweCkgMzJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGViZTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wcmV2aWV3LXRhZ3MtbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjOGM5YjkxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucHJldmlldy10YWctcGlsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxYjQzMjk7XG4gIGJhY2tncm91bmQ6ICNlZGYzZWU7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbn1cblxuLnByZXZpZXctYm90dG9tLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5idG4tYmFjay10by1lZGl0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZTRkYztcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMxYjQzMjk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlZGYzZWU7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFJFU1BPTlNJVkUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcbiAgLmVkaXRvci1sYXlvdXQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC5zdG9yeS1zaWRlYmFyIHtcbiAgICBvcmRlcjogMjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmNyZWF0b3ItaGVhZGVyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG4gIC5oZWFkZXItbGVmdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC52aWV3LW1vZGUtdGFicyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAucHVibGlzaC1idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIC5zdG9yeS1jYW52YXMge1xuICAgIHBhZGRpbmc6IDE4cHg7XG4gIH1cbiAgLnRpdGxlLWlucHV0IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLnByZXZpZXctaGVybyB7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgfVxuICAucHJldmlldy1tZXRhLWJhciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDEwcHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ },

/***/ 7517
/*!****************************************!*\
  !*** ./src/app/blog-post/blog-post.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogPost: () => (/* binding */ BlogPost)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _core_encryption_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/encryption.service */ 3242);
var _staticBlock;





class BlogPost {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
  }
  // ==================== GET METHODS ====================
  getPost(id) {
    return this.http.get(`${this.API}/blog/posts/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  getCategories() {
    return this.http.get(`${this.API}/categories`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  // ==================== POST/PUT METHODS ====================
  createPost(formData) {
    const encryptedFormData = this.encryptFormData(formData);
    return this.http.post(`${this.API}/blog/posts`, encryptedFormData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
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
  updatePost(id, formData) {
    const encryptedFormData = this.encryptFormData(formData);
    return this.http.put(`${this.API}/blog/posts/${id}`, encryptedFormData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
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
  savePost(id, formData) {
    if (id) {
      return this.updatePost(id, formData);
    } else {
      return this.createPost(formData);
    }
  }
  // ==================== HELPER ====================
  encryptFormData(formData) {
    // Extract all non-file fields
    const plainData = {};
    formData.forEach((value, key) => {
      if (!(value instanceof File)) {
        plainData[key] = value;
      }
    });
    // Encrypt fields
    const encryptedPayload = this.crypto.encrypt(plainData);
    // Build new FormData with encrypted payload + raw image
    const encryptedFormData = new FormData();
    encryptedFormData.append('encryptedPayload', encryptedPayload);
    // Re-attach image file as-is (can't encrypt binary)
    const imageFile = formData.get('image');
    if (imageFile instanceof File) {
      encryptedFormData.append('image', imageFile, imageFile.name);
    }
    return encryptedFormData;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function BlogPost_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlogPost)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_encryption_service__WEBPACK_IMPORTED_MODULE_4__.EncryptionService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: BlogPost,
    factory: BlogPost.ɵfac,
    providedIn: "root"
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_blog-post_blog-post-module_ts.js.map