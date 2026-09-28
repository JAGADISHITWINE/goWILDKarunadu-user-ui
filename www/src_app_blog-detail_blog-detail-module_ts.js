"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_blog-detail_blog-detail-module_ts"],{

/***/ 8218
/*!***************************************************!*\
  !*** ./src/app/blog-detail/blog-detail-module.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogDetailModule: () => (/* binding */ BlogDetailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _blog_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-detail.component */ 4112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: ':id',
  component: _blog_detail_component__WEBPACK_IMPORTED_MODULE_3__.BlogDetailComponent
}];
class BlogDetailModule {
  static #_ = _staticBlock = () => (this.ɵfac = function BlogDetailModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlogDetailModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: BlogDetailModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _blog_detail_component__WEBPACK_IMPORTED_MODULE_3__.BlogDetailComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BlogDetailModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _blog_detail_component__WEBPACK_IMPORTED_MODULE_3__.BlogDetailComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ },

/***/ 4112
/*!******************************************************!*\
  !*** ./src/app/blog-detail/blog-detail.component.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogDetailComponent: () => (/* binding */ BlogDetailComponent)
/* harmony export */ });
/* harmony import */ var _var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _blog_detail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog-detail */ 3505);
/* harmony import */ var _auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth/auth-modal.service */ 2454);
/* harmony import */ var src_app_core_token_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/token.service */ 6280);
/* harmony import */ var _core_media_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/media.service */ 6657);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 436);

var _staticBlock;















function BlogDetailComponent_article_0_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Trending Story ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BlogDetailComponent_article_0_p_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.post.excerpt, " ");
  }
}
function BlogDetailComponent_article_0_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BlogDetailComponent_article_0_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.post.views, " views");
  }
}
function BlogDetailComponent_article_0_section_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 99)(1, "div", 100)(2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Captured across Western Ghats wilderness ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.post.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ctx_r1.post.title);
  }
}
function BlogDetailComponent_article_0_div_70_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("#", tag_r3);
  }
}
function BlogDetailComponent_article_0_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 105)(1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Trail Topics:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, BlogDetailComponent_article_0_div_70_span_5_Template, 2, 1, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.post.tags);
  }
}
function BlogDetailComponent_article_0_div_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.copyFeedback, " ");
  }
}
function BlogDetailComponent_article_0_span_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " You will be prompted to sign in to post. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BlogDetailComponent_article_0_i_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 115);
  }
}
function BlogDetailComponent_article_0_span_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 116);
  }
}
function BlogDetailComponent_article_0_div_125_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 131)(1, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogDetailComponent_article_0_div_125_div_1_div_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const comment_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.startEdit(comment_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogDetailComponent_article_0_div_125_div_1_div_8_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const comment_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.deleteComment(comment_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function BlogDetailComponent_article_0_div_125_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 136)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const comment_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](comment_r6.content);
  }
}
function BlogDetailComponent_article_0_div_125_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 137)(1, "textarea", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BlogDetailComponent_article_0_div_125_div_1_div_10_Template_textarea_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.editedContent, $event) || (ctx_r1.editedContent = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 139)(3, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogDetailComponent_article_0_div_125_div_1_div_10_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const comment_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.updateComment(comment_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogDetailComponent_article_0_div_125_div_1_div_10_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.cancelEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.editedContent);
  }
}
function BlogDetailComponent_article_0_div_125_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 119)(1, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 122)(4, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, BlogDetailComponent_article_0_div_125_div_1_div_8_Template, 5, 0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, BlogDetailComponent_article_0_div_125_div_1_div_9_Template, 3, 1, "div", 126)(10, BlogDetailComponent_article_0_div_125_div_1_div_10_Template, 7, 1, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 128)(12, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogDetailComponent_article_0_div_125_div_1_Template_button_click_12_listener() {
      const comment_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.likeComment(comment_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", comment_r6.author.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", comment_r6.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](comment_r6.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](comment_r6.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", comment_r6.userId === ctx_r1.currentUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.editingCommentId !== comment_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.editingCommentId === comment_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](comment_r6.likes || 0);
  }
}
function BlogDetailComponent_article_0_div_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BlogDetailComponent_article_0_div_125_div_1_Template, 16, 8, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.comments);
  }
}
function BlogDetailComponent_article_0_div_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 142)(1, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Be the first to share your thoughts!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Inspire fellow trekkers with route tips, weather updates, or personal highlights from this journey.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function BlogDetailComponent_article_0_section_127_article_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogDetailComponent_article_0_section_127_article_13_Template_article_click_0_listener() {
      const related_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.viewRelatedPost(related_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 158)(6, "h3", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 160)(9, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Read Story \u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const related_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", related_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", related_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.getCategoryLabel(related_r9.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](related_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](related_r9.readTime);
  }
}
function BlogDetailComponent_article_0_section_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 145)(1, "div", 146)(2, "div", 147)(3, "div")(4, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Discover More");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h2", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Continue Exploring Western Ghats");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "a", 150)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "All Stories");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, BlogDetailComponent_article_0_section_127_article_13_Template, 14, 5, "article", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.relatedPosts);
  }
}
function BlogDetailComponent_article_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article", 2)(1, "nav", 3)(2, "div", 4)(3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogDetailComponent_article_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Back to Journal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ol", 7)(8, "li")(9, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "li")(14, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Stories & Guides");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "header", 14)(25, "div", 15)(26, "div", 16)(27, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, BlogDetailComponent_article_0_span_30_Template, 3, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, BlogDetailComponent_article_0_p_33_Template, 2, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 22)(35, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 25)(38, "div", 26)(39, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, " Contributor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 30)(45, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, BlogDetailComponent_article_0_span_53_Template, 2, 0, "span", 36)(54, BlogDetailComponent_article_0_span_54_Template, 3, 1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 38)(56, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogDetailComponent_article_0_Template_button_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.likePost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogDetailComponent_article_0_Template_button_click_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.scrollToComments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogDetailComponent_article_0_Template_button_click_64_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.copyShareLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](65, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, BlogDetailComponent_article_0_section_66_Template, 7, 2, "section", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 46)(68, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, BlogDetailComponent_article_0_div_70_Template, 6, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 50)(72, "div", 51)(73, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogDetailComponent_article_0_Template_button_click_73_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.likePost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](74, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 53)(78, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, "Share with fellow trekkers:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 55)(81, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogDetailComponent_article_0_Template_button_click_81_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.shareOnWhatsApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](82, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogDetailComponent_article_0_Template_button_click_83_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.shareOnTwitter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](84, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogDetailComponent_article_0_Template_button_click_85_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.copyShareLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](86, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](87, BlogDetailComponent_article_0_div_87_Template, 3, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](89, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 65)(91, "div", 66)(92, "div")(93, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, "Written By");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "h3", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](98, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, " Certified Contributor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "section", 72)(103, "div", 73)(104, "div", 74)(105, "h2", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](106, " Community Discussion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](110, "Have questions about this trail or tips from your summit? Share your thoughts below.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "div", 78)(112, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](113, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "Leave a thought or trail update");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "div", 81)(117, "textarea", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BlogDetailComponent_article_0_Template_textarea_ngModelChange_117_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.newComment, $event) || (ctx_r1.newComment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](119, BlogDetailComponent_article_0_span_119_Template, 3, 0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogDetailComponent_article_0_Template_button_click_120_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.postComment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](121, BlogDetailComponent_article_0_i_121_Template, 1, 0, "i", 86)(122, BlogDetailComponent_article_0_span_122_Template, 1, 0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](125, BlogDetailComponent_article_0_div_125_Template, 2, 1, "div", 88)(126, BlogDetailComponent_article_0_div_126_Template, 7, 0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](127, BlogDetailComponent_article_0_section_127_Template, 14, 1, "section", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](128, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogDetailComponent_article_0_Template_button_click_128_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.createPost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](129, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](130, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](131, "Write Story");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.getCategoryLabel(ctx_r1.post.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.post.readTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getCategoryLabel(ctx_r1.post.category), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.post.views > 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.post.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.post.excerpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.post.author.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ctx_r1.post.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.post.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.post.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.post.readTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.post.views > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.post.views > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("liked", ctx_r1.isLiked);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.isLiked ? "bi-heart-fill" : "bi-heart");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.post.likes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.comments.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.post.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r1.post.content, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.post.tags && ctx_r1.post.tags.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("liked", ctx_r1.isLiked);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.isLiked ? "bi-heart-fill" : "bi-heart");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r1.isLiked ? "Liked" : "Applaud Story", " (", ctx_r1.post.likes, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.copyFeedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.post.author.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ctx_r1.post.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.post.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.post.author.bio || "Outdoor enthusiast, conservationist, and trail leader documenting biodiversity and ridge expeditions across Karnataka.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.comments.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.newComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.isSubmittingComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isLoggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r1.newComment.trim() || ctx_r1.isSubmittingComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isSubmittingComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isSubmittingComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.isSubmittingComment ? "Publishing..." : "Post Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.comments.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.comments.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.relatedPosts && ctx_r1.relatedPosts.length);
  }
}
function BlogDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 164)(1, "div", 165)(2, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading Story...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Loading Wilderness Journal...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
class BlogDetailComponent {
  constructor(route, router, blogDetailService, authModal, tokenService, media, titleService, metaService) {
    this.route = route;
    this.router = router;
    this.blogDetailService = blogDetailService;
    this.authModal = authModal;
    this.tokenService = tokenService;
    this.media = media;
    this.titleService = titleService;
    this.metaService = metaService;
    this.postId = "";
    this.postRef = "";
    this.newComment = "";
    this.isSubmittingComment = false;
    this.currentUserId = null;
    this.editingCommentId = null;
    this.editedContent = "";
    this.Loading = false;
    this.isLiked = false;
    this.copyFeedback = null;
    this.copyFeedbackTimer = null;
    this.mediaBaseUrl = (src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.mediaBaseUrl || '').replace(/\/?$/, '/');
    this.post = {
      id: "",
      title: "",
      excerpt: "",
      image: "",
      author: {
        name: "",
        avatar: "",
        bio: ""
      },
      category: "",
      tags: [],
      date: "",
      readTime: "",
      views: 0,
      likes: 0,
      content: ""
    };
    this.relatedPosts = [];
    this.comments = [];
  }
  get isLoggedIn() {
    return this.tokenService.isValid();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postRef = String(params["id"] || "");
      this.postId = this.postRef;
      if (!this.postRef) return;
      this.loadPost();
      this.loadComments();
      this.setCurrentUser();
    });
  }
  setCurrentUser() {
    if (!this.tokenService.isValid()) {
      this.currentUserId = null;
      return;
    }
    const decoded = this.tokenService.decode();
    this.currentUserId = decoded ? String(decoded?.id ?? decoded?.userId ?? "").trim() || null : null;
  }
  loadPost() {
    this.blogDetailService.getPostById(this.postRef).subscribe(result => {
      const res = result.data;
      if (!res) return;
      this.postId = String(res.id || this.postId || "");
      this.post = {
        id: res.id,
        title: res.title,
        excerpt: res.excerpt || "",
        image: this.media.resolve(res.featured_image),
        author: {
          name: res.author_name || "Trail Guide",
          avatar: res.author_avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(res.author_name || "Guide")}&background=0f2d1e&color=10b981&size=120`,
          bio: res.author_bio || "Certified Western Ghats Explorer & Nature Documentarian."
        },
        category: res.category || "Expeditions",
        categoryId: res.category_id,
        tags: res.tags || [],
        date: res.published_at ? new Date(res.published_at).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }) : "Recently Published",
        readTime: res.read_time || "5 min read",
        views: res.views || 0,
        likes: res.likes || 0,
        content: res.content || ''
      };
      this.updateOpenGraphTags(this.post);
      if (this.post.categoryId) {
        this.loadRelated(this.post.categoryId);
      }
    });
  }
  updateOpenGraphTags(post) {
    if (!post) return;
    const pageTitle = `${post.title} | goWILD Karunadu`;
    const description = post.excerpt ? post.excerpt.slice(0, 160).trim() : `Read ${post.title} on goWILD Karunadu.`;
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    this.titleService.setTitle(pageTitle);
    this.metaService.updateTag({
      name: 'description',
      content: description
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: pageTitle
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: description
    });
    if (post.image) {
      this.metaService.updateTag({
        property: 'og:image',
        content: post.image
      });
    }
    if (currentUrl) {
      this.metaService.updateTag({
        property: 'og:url',
        content: currentUrl
      });
    }
    this.metaService.updateTag({
      property: 'og:type',
      content: 'article'
    });
    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });
    this.metaService.updateTag({
      name: 'twitter:title',
      content: pageTitle
    });
    this.metaService.updateTag({
      name: 'twitter:description',
      content: description
    });
    if (post.image) {
      this.metaService.updateTag({
        name: 'twitter:image',
        content: post.image
      });
    }
  }
  loadComments() {
    this.blogDetailService.getComments(this.postRef).subscribe(res => {
      const commentsData = res.data || [];
      this.comments = commentsData.map(comment => ({
        id: comment.id,
        userId: String(comment.user_id || ""),
        author: {
          name: comment.author_name || "Trekker",
          avatar: comment.author_avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.author_name || "Trekker")}&background=0f2d1e&color=10b981&size=100`
        },
        content: comment.content,
        date: this.formatCommentDate(comment.created_at),
        likes: comment.likes || 0,
        replies: comment.replies || []
      }));
    }, error => {
      this.comments = [];
    });
  }
  loadRelated(categoryId) {
    this.blogDetailService.getRelatedPosts(categoryId, this.postRef).subscribe(res => {
      if (res.success == true) {
        this.Loading = false;
        const relatedData = res.data || [];
        this.relatedPosts = relatedData.map(post => ({
          id: post.id,
          publicRef: post.public_ref || undefined,
          title: post.title,
          image: this.media.resolve(post.featured_image),
          category: post.category,
          readTime: post.read_time || "5 min read"
        }));
      } else {
        this.relatedPosts = res.data || [];
        this.Loading = false;
      }
    });
  }
  openLoginPanel() {
    var _this = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.authModal.openLogin();
        _this.setCurrentUser();
      } catch (err) {}
    })();
  }
  postComment() {
    if (!this.newComment?.trim()) return;
    if (!this.tokenService.isValid()) {
      this.openLoginPanel();
      return;
    }
    const decodedUser = this.tokenService.decode();
    if (!decodedUser?.id && !decodedUser?.userId) {
      this.openLoginPanel();
      return;
    }
    this.isSubmittingComment = true;
    const commentData = {
      post_id: this.postId,
      content: this.newComment.trim()
    };
    this.blogDetailService.addComment(commentData).subscribe(res => {
      const comment = res.data;
      this.comments.unshift({
        id: comment.id,
        userId: String(comment.user_id || ""),
        author: {
          name: comment.author_name || "You",
          avatar: comment.author_avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.author_name || "You")}&background=0f2d1e&color=10b981&size=100`
        },
        content: comment.content,
        date: "Just now",
        likes: 0
      });
      this.newComment = "";
      this.isSubmittingComment = false;
    }, error => {
      this.isSubmittingComment = false;
    });
  }
  likePost() {
    this.blogDetailService.likePost(this.postRef).subscribe(res => {
      this.post.likes = res.data.likes;
      this.isLiked = true;
    }, error => {});
  }
  likeComment(commentId) {
    this.blogDetailService.likeComment(commentId).subscribe(res => {
      const comment = this.comments.find(c => c.id === commentId);
      if (comment) {
        comment.likes = res.data.likes;
      }
    }, error => {});
  }
  viewRelatedPost(post) {
    const publicRef = String(post.publicRef || post.id);
    this.router.navigate(["/blog-details", publicRef]).then(() => {
      window.location.reload();
    });
  }
  getCategoryLabel(category) {
    return (category || "Trail Story").replace(/-/g, " ");
  }
  formatCommentDate(dateString) {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }
  startEdit(comment) {
    this.editingCommentId = comment.id;
    this.editedContent = comment.content;
  }
  cancelEdit() {
    this.editingCommentId = null;
    this.editedContent = "";
  }
  updateComment(commentId) {
    if (!this.editedContent.trim() || !this.currentUserId) return;
    const content = this.editedContent.trim();
    this.blogDetailService.updateComment(commentId, this.currentUserId, content).subscribe(res => {
      if (res.success == true) {
        this.cancelEdit();
        this.loadComments();
      }
    }, err => {});
  }
  deleteComment(commentId) {
    if (!this.currentUserId) return;
    this.blogDetailService.deleteComment(commentId, this.currentUserId).subscribe(res => {
      if (res.success == true) {
        this.comments = this.comments.filter(c => c.id !== commentId);
        this.loadComments();
        this.cancelEdit();
      }
    }, err => {});
  }
  goBack() {
    this.router.navigate(['/blog']);
  }
  scrollToComments() {
    const el = document.getElementById('discussion-section');
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
  copyShareLink() {
    const url = window.location.href;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        this.showShareFeedback("Story link copied to clipboard!");
      }).catch(() => {
        this.fallbackCopy(url);
      });
    } else {
      this.fallbackCopy(url);
    }
  }
  fallbackCopy(text) {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    this.showShareFeedback("Story link copied!");
  }
  showShareFeedback(msg) {
    this.copyFeedback = msg;
    if (this.copyFeedbackTimer) clearTimeout(this.copyFeedbackTimer);
    this.copyFeedbackTimer = setTimeout(() => {
      this.copyFeedback = null;
    }, 3000);
  }
  shareOnWhatsApp() {
    const text = encodeURIComponent(`Read this trek story: ${this.post.title}\n${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  }
  shareOnTwitter() {
    const text = encodeURIComponent(`${this.post.title} via @goWILDKarunadu`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  }
  createPost() {
    if (!this.tokenService.isValid()) {
      this.openLoginPanel();
      return;
    }
    this.router.navigate(["/create-story"]);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function BlogDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlogDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_blog_detail__WEBPACK_IMPORTED_MODULE_9__.BlogDetail), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_10__.AuthModalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_token_service__WEBPACK_IMPORTED_MODULE_11__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_media_service__WEBPACK_IMPORTED_MODULE_12__.MediaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.Meta));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: BlogDetailComponent,
    selectors: [["app-blog-detail"]],
    decls: 2,
    vars: 2,
    consts: [["class", "article-page", 4, "ngIf"], ["class", "article-loading-state", 4, "ngIf"], [1, "article-page"], ["aria-label", "Breadcrumb", 1, "article-top-bar"], [1, "top-bar-container"], ["type", "button", 1, "btn-back-journal", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "breadcrumb-trail"], ["routerLink", "/"], [1, "bi", "bi-chevron-right"], ["routerLink", "/blog"], [1, "active"], [1, "reading-indicator"], [1, "bi", "bi-clock-history"], [1, "editorial-header"], [1, "header-container"], [1, "category-badge-wrap"], [1, "category-badge"], [1, "bi", "bi-compass-fill", "me-1"], ["class", "featured-badge", 4, "ngIf"], [1, "article-main-title"], ["class", "article-lead", 4, "ngIf"], [1, "byline-bar"], [1, "author-meta"], ["loading", "lazy", "decoding", "async", 1, "author-avatar", 3, "src", "alt"], [1, "author-info-text"], [1, "author-name-row"], [1, "author-name"], [1, "author-badge"], [1, "bi", "bi-patch-check-fill", "text-success"], [1, "post-date-row"], [1, "meta-date"], [1, "bi", "bi-calendar3", "me-1"], [1, "meta-sep"], [1, "meta-time"], [1, "bi", "bi-hourglass-split", "me-1"], ["class", "meta-sep", 4, "ngIf"], ["class", "meta-views", 4, "ngIf"], [1, "quick-actions"], ["type", "button", "title", "Like this story", 1, "action-btn", "like-btn", 3, "click"], [1, "bi", 3, "ngClass"], ["type", "button", "title", "Jump to discussion", 1, "action-btn", "comment-btn", 3, "click"], [1, "bi", "bi-chat-left-text"], ["type", "button", "title", "Share article link", 1, "action-btn", "share-btn", 3, "click"], [1, "bi", "bi-share"], ["class", "featured-media-stage", 4, "ngIf"], [1, "article-reading-canvas"], [1, "reading-container"], [1, "article-body-typography", 3, "innerHTML"], ["class", "article-tags-wrap", 4, "ngIf"], [1, "engagement-dock"], [1, "dock-left"], ["type", "button", 1, "btn-like-large", 3, "click"], [1, "dock-right"], [1, "share-label"], [1, "share-icon-group"], ["type", "button", "title", "Share on WhatsApp", 1, "btn-social-share", "whatsapp", 3, "click"], [1, "bi", "bi-whatsapp"], ["type", "button", "title", "Share on X / Twitter", 1, "btn-social-share", "twitter", 3, "click"], [1, "bi", "bi-twitter-x"], ["type", "button", "title", "Copy Link", 1, "btn-social-share", "copy", 3, "click"], [1, "bi", "bi-link-45deg"], ["class", "share-toast", 4, "ngIf"], [1, "author-spotlight-card"], ["loading", "lazy", "decoding", "async", 1, "spotlight-avatar", 3, "src", "alt"], [1, "spotlight-content"], [1, "spotlight-header"], [1, "spotlight-role"], [1, "spotlight-name"], [1, "verified-tag"], [1, "bi", "bi-shield-check"], [1, "spotlight-bio"], ["id", "discussion-section", 1, "discussion-section"], [1, "discussion-header"], [1, "discussion-title-wrap"], [1, "discussion-title"], [1, "comments-counter-badge"], [1, "discussion-subtitle"], [1, "comment-composer-card"], [1, "composer-head"], [1, "bi", "bi-chat-quote-fill", "composer-icon"], [1, "composer-body"], ["placeholder", "Share trail conditions, gear tips, or questions...", "rows", "3", 1, "composer-textarea", 3, "ngModelChange", "ngModel", "disabled"], [1, "composer-actions"], ["class", "composer-note", 4, "ngIf"], ["type", "button", 1, "btn-post-comment", 3, "click", "disabled"], ["class", "bi bi-send-fill me-1", 4, "ngIf"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "comments-thread", 4, "ngIf"], ["class", "no-comments-state", 4, "ngIf"], ["class", "related-stories-section", 4, "ngIf"], ["type", "button", "title", "Write and share your trek story", 1, "floating-write-fab", 3, "click"], [1, "bi", "bi-feather"], [1, "fab-label"], [1, "featured-badge"], [1, "bi", "bi-fire", "me-1"], [1, "article-lead"], [1, "meta-views"], [1, "bi", "bi-eye", "me-1"], [1, "featured-media-stage"], [1, "media-container"], [1, "image-frame"], ["loading", "lazy", "decoding", "async", 1, "hero-hd-image", 3, "src", "alt"], [1, "media-caption"], [1, "bi", "bi-camera-fill", "me-1"], [1, "article-tags-wrap"], [1, "tags-label"], [1, "bi", "bi-tags-fill", "me-1"], [1, "tags-list"], ["class", "tag-pill", 4, "ngFor", "ngForOf"], [1, "tag-pill"], [1, "share-toast"], [1, "bi", "bi-check-circle-fill", "text-success", "me-1"], [1, "composer-note"], [1, "bi", "bi-info-circle", "me-1"], [1, "bi", "bi-send-fill", "me-1"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "comments-thread"], ["class", "comment-node", 4, "ngFor", "ngForOf"], [1, "comment-node"], [1, "comment-node-head"], ["loading", "lazy", "decoding", "async", 1, "comment-node-avatar", 3, "src", "alt"], [1, "comment-node-meta"], [1, "node-author-name"], [1, "node-date"], ["class", "comment-owner-actions", 4, "ngIf"], ["class", "comment-node-body", 4, "ngIf"], ["class", "comment-edit-form", 4, "ngIf"], [1, "comment-reaction-row"], ["type", "button", 1, "btn-comment-like", 3, "click"], [1, "bi", "bi-heart", "me-1"], [1, "comment-owner-actions"], ["type", "button", "title", "Edit comment", 1, "btn-comment-action", 3, "click"], [1, "bi", "bi-pencil"], ["type", "button", "title", "Delete comment", 1, "btn-comment-action", "danger", 3, "click"], [1, "bi", "bi-trash3"], [1, "comment-node-body"], [1, "comment-edit-form"], ["rows", "3", 1, "edit-textarea", 3, "ngModelChange", "ngModel"], [1, "edit-actions"], ["type", "button", 1, "btn-save-edit", 3, "click"], ["type", "button", 1, "btn-cancel-edit", 3, "click"], [1, "no-comments-state"], [1, "empty-icon-wrap"], [1, "bi", "bi-chat-heart"], [1, "related-stories-section"], [1, "related-container"], [1, "related-header"], [1, "related-eyebrow"], [1, "related-title"], ["routerLink", "/blog", 1, "btn-view-all-stories"], [1, "bi", "bi-arrow-right"], [1, "related-cards-grid"], ["class", "related-card", "role", "button", "tabindex", "0", 3, "click", 4, "ngFor", "ngForOf"], ["role", "button", "tabindex", "0", 1, "related-card", 3, "click"], [1, "card-thumb"], ["loading", "lazy", "decoding", "async", 3, "src", "alt"], [1, "card-category-badge"], [1, "card-content"], [1, "card-title"], [1, "card-meta"], [1, "read-time"], [1, "bi", "bi-clock", "me-1"], [1, "read-cta"], [1, "article-loading-state"], ["role", "status", 1, "spinner-border", "text-success", 2, "width", "3rem", "height", "3rem"], [1, "visually-hidden"], [1, "loading-text"]],
    template: function BlogDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, BlogDetailComponent_article_0_Template, 132, 42, "article", 0)(1, BlogDetailComponent_div_1_Template, 6, 0, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.post.title);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHrefDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: [".article-page[_ngcontent-%COMP%] {\n  background-color: #fafbfb;\n  min-height: 100vh;\n  padding-bottom: 80px;\n  color: #1e293b;\n}\n\n.article-top-bar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-bottom: 1px solid #e2e8f0;\n  padding: 12px 20px;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n}\n.article-top-bar[_ngcontent-%COMP%]   .top-bar-container[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.article-top-bar[_ngcontent-%COMP%]   .btn-back-journal[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: transparent;\n  border: none;\n  color: #059669;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 6px 12px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.article-top-bar[_ngcontent-%COMP%]   .btn-back-journal[_ngcontent-%COMP%]:hover {\n  background: #ecfdf5;\n  color: #047857;\n  transform: translateX(-2px);\n}\n.article-top-bar[_ngcontent-%COMP%]   .breadcrumb-trail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.article-top-bar[_ngcontent-%COMP%]   .breadcrumb-trail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #64748b;\n  text-decoration: none;\n  transition: color 0.15s ease;\n}\n.article-top-bar[_ngcontent-%COMP%]   .breadcrumb-trail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #059669;\n}\n.article-top-bar[_ngcontent-%COMP%]   .breadcrumb-trail[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #cbd5e1;\n}\n.article-top-bar[_ngcontent-%COMP%]   .breadcrumb-trail[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-weight: 600;\n  max-width: 240px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .article-top-bar[_ngcontent-%COMP%]   .breadcrumb-trail[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.article-top-bar[_ngcontent-%COMP%]   .reading-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8125rem;\n  color: #64748b;\n  background: #f1f5f9;\n  padding: 4px 12px;\n  border-radius: 999px;\n  font-weight: 500;\n}\n.article-top-bar[_ngcontent-%COMP%]   .reading-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #059669;\n}\n\n.editorial-header[_ngcontent-%COMP%] {\n  padding: 48px 24px 28px;\n  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);\n  border-bottom: 1px solid #edf2f7;\n}\n.editorial-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  max-width: 880px;\n  margin: 0 auto;\n}\n.editorial-header[_ngcontent-%COMP%]   .category-badge-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.editorial-header[_ngcontent-%COMP%]   .category-badge-wrap[_ngcontent-%COMP%]   .category-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 14px;\n  border-radius: 999px;\n  background: #ecfdf5;\n  color: #047857;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  border: 1px solid rgba(16, 185, 129, 0.25);\n}\n.editorial-header[_ngcontent-%COMP%]   .category-badge-wrap[_ngcontent-%COMP%]   .featured-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 12px;\n  border-radius: 999px;\n  background: #fef3c7;\n  color: #b45309;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n.editorial-header[_ngcontent-%COMP%]   .article-main-title[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 4.2vw, 3.25rem);\n  font-weight: 800;\n  line-height: 1.18;\n  color: #0f172a;\n  letter-spacing: -0.025em;\n  margin: 0 0 18px;\n}\n.editorial-header[_ngcontent-%COMP%]   .article-lead[_ngcontent-%COMP%] {\n  font-size: clamp(1.05rem, 1.8vw, 1.25rem);\n  line-height: 1.7;\n  color: #475569;\n  font-weight: 400;\n  margin: 0 0 32px;\n  border-left: 3px solid #10b981;\n  padding-left: 16px;\n}\n.editorial-header[_ngcontent-%COMP%]   .byline-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #e2e8f0;\n  flex-wrap: wrap;\n}\n.editorial-header[_ngcontent-%COMP%]   .author-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.editorial-header[_ngcontent-%COMP%]   .author-meta[_ngcontent-%COMP%]   .author-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #10b981;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n}\n.editorial-header[_ngcontent-%COMP%]   .author-meta[_ngcontent-%COMP%]   .author-info-text[_ngcontent-%COMP%]   .author-name-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 3px;\n}\n.editorial-header[_ngcontent-%COMP%]   .author-meta[_ngcontent-%COMP%]   .author-info-text[_ngcontent-%COMP%]   .author-name-row[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n  font-size: 0.95rem;\n}\n.editorial-header[_ngcontent-%COMP%]   .author-meta[_ngcontent-%COMP%]   .author-info-text[_ngcontent-%COMP%]   .author-name-row[_ngcontent-%COMP%]   .author-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.72rem;\n  color: #047857;\n  background: #ecfdf5;\n  padding: 2px 8px;\n  border-radius: 999px;\n  font-weight: 600;\n}\n.editorial-header[_ngcontent-%COMP%]   .author-meta[_ngcontent-%COMP%]   .author-info-text[_ngcontent-%COMP%]   .post-date-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8125rem;\n  color: #64748b;\n  flex-wrap: wrap;\n}\n.editorial-header[_ngcontent-%COMP%]   .author-meta[_ngcontent-%COMP%]   .author-info-text[_ngcontent-%COMP%]   .post-date-row[_ngcontent-%COMP%]   .meta-sep[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.editorial-header[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.editorial-header[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border-radius: 999px;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  color: #475569;\n  font-size: 0.84rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.editorial-header[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.editorial-header[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #0f172a;\n  transform: translateY(-1px);\n}\n.editorial-header[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-btn.like-btn.liked[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-color: #fca5a5;\n  color: #ef4444;\n}\n.editorial-header[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .action-btn.like-btn.liked[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ef4444;\n  animation: _ngcontent-%COMP%_heartBeat 0.35s ease;\n}\n\n.featured-media-stage[_ngcontent-%COMP%] {\n  padding: 32px 24px 0;\n}\n.featured-media-stage[_ngcontent-%COMP%]   .media-container[_ngcontent-%COMP%] {\n  max-width: 980px;\n  margin: 0 auto;\n}\n.featured-media-stage[_ngcontent-%COMP%]   .image-frame[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden;\n  background: #0b1a13;\n  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.12);\n  border: 1px solid rgba(0, 0, 0, 0.06);\n}\n.featured-media-stage[_ngcontent-%COMP%]   .image-frame[_ngcontent-%COMP%]   .hero-hd-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: clamp(340px, 48vw, 540px);\n  object-fit: cover;\n  object-position: center;\n  display: block;\n  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.featured-media-stage[_ngcontent-%COMP%]   .image-frame[_ngcontent-%COMP%]:hover   .hero-hd-image[_ngcontent-%COMP%] {\n  transform: scale(1.015);\n}\n.featured-media-stage[_ngcontent-%COMP%]   .image-frame[_ngcontent-%COMP%]   .media-caption[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  right: 16px;\n  background: rgba(15, 23, 42, 0.75);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  color: #f8fafc;\n  font-size: 0.75rem;\n  padding: 5px 12px;\n  border-radius: 999px;\n  font-weight: 500;\n}\n\n.article-reading-canvas[_ngcontent-%COMP%] {\n  padding: 40px 24px 0;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .reading-container[_ngcontent-%COMP%] {\n  max-width: 820px;\n  margin: 0 auto;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .article-body-typography[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.85;\n  color: #334155;\n  letter-spacing: -0.01em;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .article-body-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .article-body-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.85rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 44px 0 18px;\n  line-height: 1.3;\n  position: relative;\n  padding-left: 14px;\n  border-left: 4px solid #10b981;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .article-body-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 36px 0 14px;\n  line-height: 1.35;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .article-body-typography[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  margin: 32px 0;\n  padding: 20px 24px;\n  border-left: 4px solid #10b981;\n  background: #f0fdf4;\n  border-radius: 0 14px 14px 0;\n  color: #065f46;\n  font-style: italic;\n  font-size: 1.2rem;\n  line-height: 1.6;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .article-body-typography[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .article-reading-canvas[_ngcontent-%COMP%]   .article-body-typography[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 20px 0 28px 24px;\n  padding: 0;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .article-body-typography[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .article-reading-canvas[_ngcontent-%COMP%]   .article-body-typography[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  line-height: 1.75;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .article-body-typography[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 14px;\n  margin: 28px 0;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .article-tags-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 24px 0;\n  margin-top: 36px;\n  border-top: 1px solid #e2e8f0;\n  border-bottom: 1px solid #e2e8f0;\n  flex-wrap: wrap;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .article-tags-wrap[_ngcontent-%COMP%]   .tags-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .article-tags-wrap[_ngcontent-%COMP%]   .tags-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .article-tags-wrap[_ngcontent-%COMP%]   .tags-list[_ngcontent-%COMP%]   .tag-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 12px;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #334155;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  transition: all 0.15s ease;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .article-tags-wrap[_ngcontent-%COMP%]   .tags-list[_ngcontent-%COMP%]   .tag-pill[_ngcontent-%COMP%]:hover {\n  background: #ecfdf5;\n  color: #059669;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .engagement-dock[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 24px 0;\n  flex-wrap: wrap;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .engagement-dock[_ngcontent-%COMP%]   .btn-like-large[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 24px;\n  border-radius: 999px;\n  background: #ffffff;\n  border: 1.5px solid #e2e8f0;\n  color: #1e293b;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .engagement-dock[_ngcontent-%COMP%]   .btn-like-large[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #ef4444;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .engagement-dock[_ngcontent-%COMP%]   .btn-like-large[_ngcontent-%COMP%]:hover {\n  border-color: #fca5a5;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.15);\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .engagement-dock[_ngcontent-%COMP%]   .btn-like-large.liked[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-color: #ef4444;\n  color: #ef4444;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .engagement-dock[_ngcontent-%COMP%]   .dock-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .engagement-dock[_ngcontent-%COMP%]   .dock-right[_ngcontent-%COMP%]   .share-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  font-weight: 500;\n}\n@media (max-width: 640px) {\n  .article-reading-canvas[_ngcontent-%COMP%]   .engagement-dock[_ngcontent-%COMP%]   .dock-right[_ngcontent-%COMP%]   .share-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .engagement-dock[_ngcontent-%COMP%]   .dock-right[_ngcontent-%COMP%]   .share-icon-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .engagement-dock[_ngcontent-%COMP%]   .dock-right[_ngcontent-%COMP%]   .share-icon-group[_ngcontent-%COMP%]   .btn-social-share[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1px solid #e2e8f0;\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .engagement-dock[_ngcontent-%COMP%]   .dock-right[_ngcontent-%COMP%]   .share-icon-group[_ngcontent-%COMP%]   .btn-social-share[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .engagement-dock[_ngcontent-%COMP%]   .dock-right[_ngcontent-%COMP%]   .share-icon-group[_ngcontent-%COMP%]   .btn-social-share.whatsapp[_ngcontent-%COMP%]:hover {\n  background: #25D366;\n  border-color: #25D366;\n  color: #ffffff;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .engagement-dock[_ngcontent-%COMP%]   .dock-right[_ngcontent-%COMP%]   .share-icon-group[_ngcontent-%COMP%]   .btn-social-share.twitter[_ngcontent-%COMP%]:hover {\n  background: #0f172a;\n  border-color: #0f172a;\n  color: #ffffff;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .engagement-dock[_ngcontent-%COMP%]   .dock-right[_ngcontent-%COMP%]   .share-icon-group[_ngcontent-%COMP%]   .btn-social-share.copy[_ngcontent-%COMP%]:hover {\n  background: #059669;\n  border-color: #059669;\n  color: #ffffff;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .share-toast[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border: 1px solid #10b981;\n  color: #065f46;\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 20px;\n  display: inline-flex;\n  align-items: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.25s ease;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .author-spotlight-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  padding: 28px;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  margin: 40px 0;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);\n  align-items: center;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .author-spotlight-card[_ngcontent-%COMP%]   .spotlight-avatar[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 76px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #10b981;\n  flex-shrink: 0;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .author-spotlight-card[_ngcontent-%COMP%]   .spotlight-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .author-spotlight-card[_ngcontent-%COMP%]   .spotlight-content[_ngcontent-%COMP%]   .spotlight-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .author-spotlight-card[_ngcontent-%COMP%]   .spotlight-content[_ngcontent-%COMP%]   .spotlight-header[_ngcontent-%COMP%]   .spotlight-role[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #059669;\n  font-weight: 700;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .author-spotlight-card[_ngcontent-%COMP%]   .spotlight-content[_ngcontent-%COMP%]   .spotlight-header[_ngcontent-%COMP%]   .spotlight-name[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .author-spotlight-card[_ngcontent-%COMP%]   .spotlight-content[_ngcontent-%COMP%]   .spotlight-header[_ngcontent-%COMP%]   .verified-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: #f0fdf4;\n  color: #059669;\n  border: 1px solid #bbf7d0;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .author-spotlight-card[_ngcontent-%COMP%]   .spotlight-content[_ngcontent-%COMP%]   .spotlight-bio[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.92rem;\n  line-height: 1.6;\n  margin: 0;\n}\n@media (max-width: 640px) {\n  .article-reading-canvas[_ngcontent-%COMP%]   .author-spotlight-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .article-reading-canvas[_ngcontent-%COMP%]   .author-spotlight-card[_ngcontent-%COMP%]   .spotlight-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%] {\n  margin-top: 48px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .discussion-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .discussion-header[_ngcontent-%COMP%]   .discussion-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 6px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .discussion-header[_ngcontent-%COMP%]   .discussion-title-wrap[_ngcontent-%COMP%]   .discussion-title[_ngcontent-%COMP%] {\n  font-size: 1.65rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .discussion-header[_ngcontent-%COMP%]   .discussion-title-wrap[_ngcontent-%COMP%]   .comments-counter-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 26px;\n  height: 26px;\n  padding: 0 8px;\n  border-radius: 999px;\n  background: #10b981;\n  color: #ffffff;\n  font-size: 0.8125rem;\n  font-weight: 700;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .discussion-header[_ngcontent-%COMP%]   .discussion-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.95rem;\n  margin: 0;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comment-composer-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 18px;\n  overflow: hidden;\n  margin-bottom: 32px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comment-composer-card[_ngcontent-%COMP%]   .composer-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 20px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  color: #475569;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comment-composer-card[_ngcontent-%COMP%]   .composer-head[_ngcontent-%COMP%]   .composer-icon[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comment-composer-card[_ngcontent-%COMP%]   .composer-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comment-composer-card[_ngcontent-%COMP%]   .composer-body[_ngcontent-%COMP%]   .composer-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid #cbd5e1;\n  border-radius: 12px;\n  padding: 14px 16px;\n  font-size: 0.95rem;\n  color: #1e293b;\n  font-family: inherit;\n  resize: vertical;\n  transition: all 0.2s ease;\n  background: #ffffff;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comment-composer-card[_ngcontent-%COMP%]   .composer-body[_ngcontent-%COMP%]   .composer-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #10b981;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comment-composer-card[_ngcontent-%COMP%]   .composer-body[_ngcontent-%COMP%]   .composer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 14px;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comment-composer-card[_ngcontent-%COMP%]   .composer-body[_ngcontent-%COMP%]   .composer-actions[_ngcontent-%COMP%]   .composer-note[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comment-composer-card[_ngcontent-%COMP%]   .composer-body[_ngcontent-%COMP%]   .composer-actions[_ngcontent-%COMP%]   .btn-post-comment[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 22px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n  border: none;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);\n  transition: all 0.2s ease;\n  margin-left: auto;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comment-composer-card[_ngcontent-%COMP%]   .composer-body[_ngcontent-%COMP%]   .composer-actions[_ngcontent-%COMP%]   .btn-post-comment[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 18px rgba(16, 185, 129, 0.45);\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comment-composer-card[_ngcontent-%COMP%]   .composer-body[_ngcontent-%COMP%]   .composer-actions[_ngcontent-%COMP%]   .btn-post-comment[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-node-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-node-head[_ngcontent-%COMP%]   .comment-node-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 1.5px solid #10b981;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-node-head[_ngcontent-%COMP%]   .comment-node-meta[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-node-head[_ngcontent-%COMP%]   .comment-node-meta[_ngcontent-%COMP%]   .node-author-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n  font-size: 0.92rem;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-node-head[_ngcontent-%COMP%]   .comment-node-meta[_ngcontent-%COMP%]   .node-date[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #94a3b8;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-node-head[_ngcontent-%COMP%]   .comment-owner-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-node-head[_ngcontent-%COMP%]   .comment-owner-actions[_ngcontent-%COMP%]   .btn-comment-action[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #e2e8f0;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-node-head[_ngcontent-%COMP%]   .comment-owner-actions[_ngcontent-%COMP%]   .btn-comment-action[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #0f172a;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-node-head[_ngcontent-%COMP%]   .comment-owner-actions[_ngcontent-%COMP%]   .btn-comment-action.danger[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  color: #ef4444;\n  border-color: #fca5a5;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-node-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #334155;\n  font-size: 0.95rem;\n  line-height: 1.65;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-edit-form[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-edit-form[_ngcontent-%COMP%]   .edit-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 0.9rem;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-edit-form[_ngcontent-%COMP%]   .edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 8px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-edit-form[_ngcontent-%COMP%]   .edit-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 6px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-edit-form[_ngcontent-%COMP%]   .edit-actions[_ngcontent-%COMP%]   button.btn-save-edit[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #fff;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-edit-form[_ngcontent-%COMP%]   .edit-actions[_ngcontent-%COMP%]   button.btn-cancel-edit[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-reaction-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 12px;\n  padding-top: 10px;\n  border-top: 1px solid #f1f5f9;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-reaction-row[_ngcontent-%COMP%]   .btn-comment-like[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #64748b;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  transition: color 0.15s ease;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-reaction-row[_ngcontent-%COMP%]   .btn-comment-like[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .comments-thread[_ngcontent-%COMP%]   .comment-node[_ngcontent-%COMP%]   .comment-reaction-row[_ngcontent-%COMP%]   .btn-comment-like[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .no-comments-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n  background: #ffffff;\n  border: 1px dashed #cbd5e1;\n  border-radius: 20px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .no-comments-state[_ngcontent-%COMP%]   .empty-icon-wrap[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #ecfdf5;\n  color: #059669;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.8rem;\n  margin: 0 auto 16px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .no-comments-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 6px;\n}\n.article-reading-canvas[_ngcontent-%COMP%]   .discussion-section[_ngcontent-%COMP%]   .no-comments-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.9rem;\n  max-width: 440px;\n  margin: 0 auto;\n}\n\n.related-stories-section[_ngcontent-%COMP%] {\n  padding: 64px 24px 0;\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-container[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-header[_ngcontent-%COMP%]   .related-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #059669;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 4px;\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-header[_ngcontent-%COMP%]   .related-title[_ngcontent-%COMP%] {\n  font-size: 1.85rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-header[_ngcontent-%COMP%]   .btn-view-all-stories[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #059669;\n  font-weight: 700;\n  font-size: 0.88rem;\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-header[_ngcontent-%COMP%]   .btn-view-all-stories[_ngcontent-%COMP%]:hover {\n  color: #047857;\n  transform: translateX(3px);\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 24px;\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  display: flex;\n  flex-direction: column;\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);\n  border-color: #cbd5e1;\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]:hover   .card-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]:hover   .card-meta[_ngcontent-%COMP%]   .read-cta[_ngcontent-%COMP%] {\n  color: #059669;\n  transform: translateX(3px);\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]   .card-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n  background: #0f241a;\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]   .card-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]   .card-thumb[_ngcontent-%COMP%]   .card-category-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  background: rgba(15, 23, 42, 0.78);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  color: #ffffff;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 16px;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: auto;\n  font-size: 0.8125rem;\n  color: #64748b;\n  padding-top: 14px;\n  border-top: 1px solid #f1f5f9;\n}\n.related-stories-section[_ngcontent-%COMP%]   .related-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .card-meta[_ngcontent-%COMP%]   .read-cta[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n  transition: all 0.2s ease;\n}\n\n.floating-write-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  z-index: 990;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 22px;\n  border-radius: 999px;\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n  border: none;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  box-shadow: 0 10px 28px rgba(16, 185, 129, 0.45);\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.floating-write-fab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n.floating-write-fab[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) scale(1.02);\n  box-shadow: 0 14px 34px rgba(16, 185, 129, 0.6);\n}\n\n.article-loading-state[_ngcontent-%COMP%] {\n  min-height: 70vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n}\n.article-loading-state[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #64748b;\n  font-weight: 600;\n}\n\n@keyframes _ngcontent-%COMP%_heartBeat {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.3);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvZy1kZXRhaWwvYmxvZy1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBSEY7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQUpGO0FBTUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBSko7QUFPRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBTEo7QUFPSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBTE47QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBUEo7QUFTSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBUE47QUFTTTtFQUNFLGNBQUE7QUFQUjtBQVdJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBVE47QUFZSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVk47QUFhSTtFQWxDRjtJQW1DSSxhQUFBO0VBVko7QUFDRjtBQWFFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Es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QTtFQUNBLG1EQUFBO0FBdkpGO0FBeUpFO0VBQ0Usa0JBQUE7QUF2Sko7QUEwSkU7RUFDRSx1Q0FBQTtFQUNBLCtDQUFBO0FBeEpKOztBQTZKQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUExSkY7QUE0SkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBMUpKOztBQThKQTtFQUNFO0lBQUssbUJBQUE7RUExSkw7RUEySkE7SUFBTSxxQkFBQTtFQXhKTjtFQXlKQTtJQUFPLG1CQUFBO0VBdEpQO0FBQ0Y7QUF3SkE7RUFDRTtJQUFPLFVBQUE7SUFBWSwyQkFBQTtFQXBKbkI7RUFxSkE7SUFBSyxVQUFBO0lBQVksd0JBQUE7RUFqSmpCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQkxPRyBERVRBSUwgw6LCgMKUIEVESVRPUklBTCBNQUdBWklORSBERVNJR05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi5hcnRpY2xlLXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYmZiO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG4gIGNvbG9yOiAjMWUyOTNiO1xufVxuXG4vLyDDosKUwoDDosKUwoAgMS4gVE9QIEJSRUFEQ1JVTUIgJiBOQVYgQkFSIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmFydGljbGUtdG9wLWJhciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcblxuICAudG9wLWJhci1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gIC5idG4tYmFjay1qb3VybmFsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzA1OTY2OTtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWNmZGY1O1xuICAgICAgY29sb3I6ICMwNDc4NTc7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XG4gICAgfVxuICB9XG5cbiAgLmJyZWFkY3J1bWItdHJhaWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgIGNvbG9yOiAjNjQ3NDhiO1xuXG4gICAgYSB7XG4gICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzA1OTY2OTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICAgIGNvbG9yOiAjY2JkNWUxO1xuICAgIH1cblxuICAgIC5hY3RpdmUge1xuICAgICAgY29sb3I6ICMxZTI5M2I7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWF4LXdpZHRoOiAyNDBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5yZWFkaW5nLWluZGljYXRvciB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICBpIHtcbiAgICAgIGNvbG9yOiAjMDU5NjY5O1xuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgMi4gRURJVE9SSUFMIEFSVElDTEUgSEVBREVSIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmVkaXRvcmlhbC1oZWFkZXIge1xuICBwYWRkaW5nOiA0OHB4IDI0cHggMjhweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiAwJSwgI2Y4ZmFmYyAxMDAlKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGYyZjc7XG5cbiAgLmhlYWRlci1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuY2F0ZWdvcnktYmFkZ2Utd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5jYXRlZ29yeS1iYWRnZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA2cHggMTRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgYmFja2dyb3VuZDogI2VjZmRmNTtcbiAgICAgIGNvbG9yOiAjMDQ3ODU3O1xuICAgICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNiwgMTg1LCAxMjksIDAuMjUpO1xuICAgIH1cblxuICAgIC5mZWF0dXJlZC1iYWRnZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgYmFja2dyb3VuZDogI2ZlZjNjNztcbiAgICAgIGNvbG9yOiAjYjQ1MzA5O1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gICAgfVxuICB9XG5cbiAgLmFydGljbGUtbWFpbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA0LjJ2dywgMy4yNXJlbSk7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xODtcbiAgICBjb2xvcjogIzBmMTcyYTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDI1ZW07XG4gICAgbWFyZ2luOiAwIDAgMThweDtcbiAgfVxuXG4gIC5hcnRpY2xlLWxlYWQge1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4wNXJlbSwgMS44dncsIDEuMjVyZW0pO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgY29sb3I6ICM0NzU1Njk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDAgMCAzMnB4O1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzEwYjk4MTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIH1cblxuICAuYnlsaW5lLWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLmF1dGhvci1tZXRhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNHB4O1xuXG4gICAgLmF1dGhvci1hdmF0YXIge1xuICAgICAgd2lkdGg6IDUycHg7XG4gICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxMGI5ODE7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLmF1dGhvci1pbmZvLXRleHQge1xuICAgICAgLmF1dGhvci1uYW1lLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG5cbiAgICAgICAgLmF1dGhvci1uYW1lIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRob3ItYmFkZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgICAgICAgIGNvbG9yOiAjMDQ3ODU3O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlY2ZkZjU7XG4gICAgICAgICAgcGFkZGluZzogMnB4IDhweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wb3N0LWRhdGUtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIC5tZXRhLXNlcCB7XG4gICAgICAgICAgY29sb3I6ICNjYmQ1ZTE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucXVpY2stYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuXG4gICAgLmFjdGlvbi1idG4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xuICAgICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgfVxuXG4gICAgICAmLmxpa2UtYnRuLmxpa2VkIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlZjJmMjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmNhNWE1O1xuICAgICAgICBjb2xvcjogI2VmNDQ0NDtcblxuICAgICAgICBpIHtcbiAgICAgICAgICBjb2xvcjogI2VmNDQ0NDtcbiAgICAgICAgICBhbmltYXRpb246IGhlYXJ0QmVhdCAwLjM1cyBlYXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCAzLiBIRVJPIEZFQVRVUkVEIElNQUdFIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZlYXR1cmVkLW1lZGlhLXN0YWdlIHtcbiAgcGFkZGluZzogMzJweCAyNHB4IDA7XG5cbiAgLm1lZGlhLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA5ODBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5pbWFnZS1mcmFtZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAjMGIxYTEzO1xuICAgIGJveC1zaGFkb3c6IDAgMThweCA0OHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcblxuICAgIC5oZXJvLWhkLWltYWdlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBjbGFtcCgzNDBweCwgNDh2dywgNTQwcHgpO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG4gICAgfVxuXG4gICAgJjpob3ZlciAuaGVyby1oZC1pbWFnZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDE1KTtcbiAgICB9XG5cbiAgICAubWVkaWEtY2FwdGlvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDE0cHg7XG4gICAgICByaWdodDogMTZweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC43NSk7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgICAgIGNvbG9yOiAjZjhmYWZjO1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCA0LiBBUlRJQ0xFIFJFQURJTkcgQ0FOVkFTIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmFydGljbGUtcmVhZGluZy1jYW52YXMge1xuICBwYWRkaW5nOiA0MHB4IDI0cHggMDtcblxuICAucmVhZGluZy1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODIwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuYXJ0aWNsZS1ib2R5LXR5cG9ncmFwaHkge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuODU7XG4gICAgY29sb3I6ICMzMzQxNTU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAxLjg1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgbWFyZ2luOiA0NHB4IDAgMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMxMGI5ODE7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxLjQ1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgbWFyZ2luOiAzNnB4IDAgMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICAgIH1cblxuICAgIGJsb2NrcXVvdGUge1xuICAgICAgbWFyZ2luOiAzMnB4IDA7XG4gICAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMxMGI5ODE7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmZGY0O1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAxNHB4IDE0cHggMDtcbiAgICAgIGNvbG9yOiAjMDY1ZjQ2O1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIH1cblxuICAgIHVsLCBvbCB7XG4gICAgICBtYXJnaW46IDIwcHggMCAyOHB4IDI0cHg7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBsaSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgfVxuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgbWFyZ2luOiAyOHB4IDA7XG4gICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRhZ3MgV3JhcFxuICAuYXJ0aWNsZS10YWdzLXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgcGFkZGluZzogMjRweCAwO1xuICAgIG1hcmdpbi10b3A6IDM2cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLnRhZ3MtbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgfVxuXG4gICAgLnRhZ3MtbGlzdCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgIC50YWctcGlsbCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgICAgICBjb2xvcjogIzMzNDE1NTtcbiAgICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlY2ZkZjU7XG4gICAgICAgICAgY29sb3I6ICMwNTk2Njk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBFbmdhZ2VtZW50IERvY2tcbiAgLmVuZ2FnZW1lbnQtZG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogMjRweCAwO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5idG4tbGlrZS1sYXJnZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgICBjb2xvcjogIzFlMjkzYjtcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBjb2xvcjogI2VmNDQ0NDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZjYTVhNTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMjM5LCA2OCwgNjgsIDAuMTUpO1xuICAgICAgfVxuXG4gICAgICAmLmxpa2VkIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlZjJmMjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZWY0NDQ0O1xuICAgICAgICBjb2xvcjogI2VmNDQ0NDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZG9jay1yaWdodCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcblxuICAgICAgLnNoYXJlLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zaGFyZS1pY29uLWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiA4cHg7XG5cbiAgICAgICAgLmJ0bi1zb2NpYWwtc2hhcmUge1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYud2hhdHNhcHA6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI1RDM2NjtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzI1RDM2NjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYudHdpdHRlcjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMGYxNzJhO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5jb3B5OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNTk2Njk7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwNTk2Njk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUb2FzdFxuICAuc2hhcmUtdG9hc3Qge1xuICAgIGJhY2tncm91bmQ6ICNlY2ZkZjU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzEwYjk4MTtcbiAgICBjb2xvcjogIzA2NWY0NjtcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuMjVzIGVhc2U7XG4gIH1cblxuICAvLyBBdXRob3IgU3BvdGxpZ2h0XG4gIC5hdXRob3Itc3BvdGxpZ2h0LWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHBhZGRpbmc6IDI4cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuc3BvdGxpZ2h0LWF2YXRhciB7XG4gICAgICB3aWR0aDogNzZweDtcbiAgICAgIGhlaWdodDogNzZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgIzEwYjk4MTtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIH1cblxuICAgIC5zcG90bGlnaHQtY29udGVudCB7XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICAuc3BvdGxpZ2h0LWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBnYXA6IDhweDtcblxuICAgICAgICAuc3BvdGxpZ2h0LXJvbGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gICAgICAgICAgY29sb3I6ICMwNTk2Njk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zcG90bGlnaHQtbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZlcmlmaWVkLXRhZyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmZGY0O1xuICAgICAgICAgIGNvbG9yOiAjMDU5NjY5O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmY3ZDA7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNwb3RsaWdodC1iaW8ge1xuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgZm9udC1zaXplOiAwLjkycmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAuc3BvdGxpZ2h0LWhlYWRlciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gw6LClMKAw6LClMKAIDUuIERJU0NVU1NJT04gJiBDT01NRU5UUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbiAgLmRpc2N1c3Npb24tc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNDhweDtcblxuICAgIC5kaXNjdXNzaW9uLWhlYWRlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gICAgICAuZGlzY3Vzc2lvbi10aXRsZS13cmFwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG5cbiAgICAgICAgLmRpc2N1c3Npb24tdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42NXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21tZW50cy1jb3VudGVyLWJhZGdlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1pbi13aWR0aDogMjZweDtcbiAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzEwYjk4MTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kaXNjdXNzaW9uLXN1YnRpdGxlIHtcbiAgICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbXBvc2VyIENhcmRcbiAgICAuY29tbWVudC1jb21wb3Nlci1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuXG4gICAgICAuY29tcG9zZXItaGVhZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgICBjb2xvcjogIzQ3NTU2OTtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICAgIC5jb21wb3Nlci1pY29uIHtcbiAgICAgICAgICBjb2xvcjogIzA1OTY2OTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29tcG9zZXItYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgICAgLmNvbXBvc2VyLXRleHRhcmVhIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNjYmQ1ZTE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTBiOTgxO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjE1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29tcG9zZXItYWN0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBnYXA6IDEwcHg7XG5cbiAgICAgICAgICAuY29tcG9zZXItbm90ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5idG4tcG9zdC1jb21tZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxIDAlLCAjMDU5NjY5IDEwMCUpO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4zKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcblxuICAgICAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMThweCByZ2JhKDE2LCAxODUsIDEyOSwgMC40NSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ29tbWVudHMgVGhyZWFkXG4gICAgLmNvbW1lbnRzLXRocmVhZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMTZweDtcblxuICAgICAgLmNvbW1lbnQtbm9kZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcblxuICAgICAgICAuY29tbWVudC1ub2RlLWhlYWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICAgICAgICAgIC5jb21tZW50LW5vZGUtYXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMxMGI5ODE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbW1lbnQtbm9kZS1tZXRhIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgICAgIC5ub2RlLWF1dGhvci1uYW1lIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45MnJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5vZGUtZGF0ZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICAgICAgICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbW1lbnQtb3duZXItYWN0aW9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZ2FwOiA2cHg7XG5cbiAgICAgICAgICAgIC5idG4tY29tbWVudC1hY3Rpb24ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG5cbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgICAgICAgICAgICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICYuZGFuZ2VyOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmVmMmYyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZWY0NDQ0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZjYTVhNTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21tZW50LW5vZGUtYm9keSB7XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBjb2xvcjogIzMzNDE1NTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY1O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21tZW50LWVkaXQtZm9ybSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICAgICAgIC5lZGl0LXRleHRhcmVhIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZWRpdC1hY3Rpb25zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcblxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDE0cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuXG4gICAgICAgICAgICAgICYuYnRuLXNhdmUtZWRpdCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzEwYjk4MTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICYuYnRuLWNhbmNlbC1lZGl0IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW1lbnQtcmVhY3Rpb24tcm93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjVmOTtcblxuICAgICAgICAgIC5idG4tY29tbWVudC1saWtlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZTtcblxuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZjg3MTcxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNlZjQ0NDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRW1wdHkgc3RhdGVcbiAgICAubm8tY29tbWVudHMtc3RhdGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogNDhweCAyNHB4O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjY2JkNWUxO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAgICAgLmVtcHR5LWljb24td3JhcCB7XG4gICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2VjZmRmNTtcbiAgICAgICAgY29sb3I6ICMwNTk2Njk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTZweDtcbiAgICAgIH1cblxuICAgICAgaDQge1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgICAgbWFyZ2luOiAwIDAgNnB4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICBtYXgtd2lkdGg6IDQ0MHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAIDYuIFJFTEFURUQgSk9VUk5BTCBTVE9SSUVTIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnJlbGF0ZWQtc3Rvcmllcy1zZWN0aW9uIHtcbiAgcGFkZGluZzogNjRweCAyNHB4IDA7XG5cbiAgLnJlbGF0ZWQtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwODBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5yZWxhdGVkLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTZweDtcblxuICAgIC5yZWxhdGVkLWV5ZWJyb3cge1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICAgIGNvbG9yOiAjMDU5NjY5O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgIC5yZWxhdGVkLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS44NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBjb2xvcjogIzBmMTcyYTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAuYnRuLXZpZXctYWxsLXN0b3JpZXMge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICBjb2xvcjogIzA1OTY2OTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDAuODhyZW07XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMwNDc4NTc7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yZWxhdGVkLWNhcmRzLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgIGdhcDogMjRweDtcbiAgfVxuXG4gIC5yZWxhdGVkLWNhcmQge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTJweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XG5cbiAgICAgIC5jYXJkLXRodW1iIGltZyB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLW1ldGEgLnJlYWQtY3RhIHtcbiAgICAgICAgY29sb3I6ICMwNTk2Njk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLXRodW1iIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYmFja2dyb3VuZDogIzBmMjQxYTtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjE2LCAxLCAwLjMsIDEpO1xuICAgICAgfVxuXG4gICAgICAuY2FyZC1jYXRlZ29yeS1iYWRnZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMnB4O1xuICAgICAgICBsZWZ0OiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuNzgpO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleDogMTtcblxuICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgICBtYXJnaW46IDAgMCAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuY2FyZC1tZXRhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjVmOTtcblxuICAgICAgICAucmVhZC1jdGEge1xuICAgICAgICAgIGNvbG9yOiAjMGYxNzJhO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgNy4gRkxPQVRJTkcgV1JJVEUgU1RPUlkgRkFCIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZsb2F0aW5nLXdyaXRlLWZhYiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgei1pbmRleDogOTkwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEycHggMjJweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMGI5ODEgMCUsICMwNTk2NjkgMTAwJSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDEwcHggMjhweCByZ2JhKDE2LCAxODUsIDEyOSwgMC40NSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcblxuICBpIHtcbiAgICBmb250LXNpemU6IDEuMTVyZW07XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCkgc2NhbGUoMS4wMik7XG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDM0cHggcmdiYSgxNiwgMTg1LCAxMjksIDAuNik7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAIExPQURJTkcgU1RBVEUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uYXJ0aWNsZS1sb2FkaW5nLXN0YXRlIHtcbiAgbWluLWhlaWdodDogNzB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTZweDtcblxuICAubG9hZGluZy10ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICM2NDc0OGI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhlYXJ0QmVhdCB7XG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ },

/***/ 3505
/*!********************************************!*\
  !*** ./src/app/blog-detail/blog-detail.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogDetail: () => (/* binding */ BlogDetail)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _core_encryption_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/encryption.service */ 3242);
var _staticBlock;





class BlogDetail {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
  }
  // ==================== GET METHODS ====================
  getPostById(id) {
    return this.http.get(`${this.API}/blog/posts/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  getRelatedPosts(categoryId, excludePostId) {
    return this.http.get(`${this.API}/blog/posts/related`, {
      params: {
        category_id: categoryId.toString(),
        exclude_id: excludePostId.toString(),
        limit: '3'
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  getComments(postId) {
    return this.http.get(`${this.API}/blog/posts/${postId}/comments`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  // ==================== POST/PUT METHODS ====================
  addComment(commentData) {
    const encryptedPayload = this.crypto.encrypt(commentData);
    return this.http.post(`${this.API}/blog/comments`, {
      encryptedPayload
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
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
  likePost(postId) {
    const encryptedPayload = this.crypto.encrypt({
      postId
    });
    return this.http.post(`${this.API}/blog/posts/${postId}/like`, {
      encryptedPayload
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  likeComment(commentId) {
    const encryptedPayload = this.crypto.encrypt({
      commentId
    });
    return this.http.post(`${this.API}/blog/comments/${commentId}/like`, {
      encryptedPayload
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  updateComment(commentId, userId, content) {
    const encryptedPayload = this.crypto.encrypt({
      user_id: userId,
      content
    });
    return this.http.put(`${this.API}/blog/comments/${commentId}`, {
      encryptedPayload
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  deleteComment(commentId, userId) {
    const encryptedPayload = this.crypto.encrypt({
      user_id: userId
    });
    return this.http.delete(`${this.API}/blog/comments/${commentId}`, {
      body: {
        encryptedPayload
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function BlogDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlogDetail)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_encryption_service__WEBPACK_IMPORTED_MODULE_4__.EncryptionService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: BlogDetail,
    factory: BlogDetail.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_blog-detail_blog-detail-module_ts.js.map