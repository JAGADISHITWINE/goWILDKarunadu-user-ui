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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _blog_detail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog-detail */ 3505);
/* harmony import */ var _auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth/auth-modal.service */ 2454);
/* harmony import */ var src_app_core_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/token.service */ 6280);
/* harmony import */ var _core_media_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/media.service */ 6657);

var _staticBlock;













function BlogDetailComponent_ion_chip_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-chip", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](tag_r1);
  }
}
function BlogDetailComponent_ion_card_85_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 61)(1, "ion-button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogDetailComponent_ion_card_85_div_9_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.startEdit(comment_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogDetailComponent_ion_card_85_div_9_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.deleteComment(comment_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function BlogDetailComponent_ion_card_85_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", comment_r4.content, " ");
  }
}
function BlogDetailComponent_ion_card_85_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "ion-textarea", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BlogDetailComponent_ion_card_85_div_11_Template_ion_textarea_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r4.editedContent, $event) || (ctx_r4.editedContent = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogDetailComponent_ion_card_85_div_11_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.updateComment(comment_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogDetailComponent_ion_card_85_div_11_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.cancelEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.editedContent);
  }
}
function BlogDetailComponent_ion_card_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card", 50)(1, "ion-card-content")(2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 53)(5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, BlogDetailComponent_ion_card_85_div_9_Template, 5, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, BlogDetailComponent_ion_card_85_p_10_Template, 2, 1, "p", 57)(11, BlogDetailComponent_ion_card_85_div_11_Template, 6, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 59)(13, "ion-button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogDetailComponent_ion_card_85_Template_ion_button_click_13_listener() {
      const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.likeComment(comment_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "ion-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const comment_r4 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", comment_r4.author.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", comment_r4.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", comment_r4.author.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](comment_r4.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", comment_r4.userId == ctx_r4.currentUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.editingCommentId !== comment_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.editingCommentId === comment_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", comment_r4.likes, " ");
  }
}
function BlogDetailComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 69)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No comments yet. Be the first to share your thoughts!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function BlogDetailComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 70)(1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Loading Related Articles... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function BlogDetailComponent_div_88_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-card", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogDetailComponent_div_88_ion_card_1_Template_ion_card_click_0_listener() {
      const relatedPost_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.viewRelatedPost(relatedPost_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ion-card-content")(3, "ion-chip", 77)(4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const relatedPost_r8 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", relatedPost_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", relatedPost_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r4.getCategoryLabel(relatedPost_r8.category), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](relatedPost_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", relatedPost_r8.readTime, " ");
  }
}
function BlogDetailComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BlogDetailComponent_div_88_ion_card_1_Template, 11, 5, "ion-card", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.relatedPosts);
  }
}
function BlogDetailComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 79)(1, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No related articles found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class BlogDetailComponent {
  constructor(route, router, blogDetailService, authModal, tokenService, media) {
    this.route = route;
    this.router = router;
    this.blogDetailService = blogDetailService;
    this.authModal = authModal;
    this.tokenService = tokenService;
    this.media = media;
    this.postId = "";
    this.postRef = "";
    this.newComment = "";
    this.isSubmittingComment = false;
    this.currentUserId = null;
    this.editingCommentId = null;
    this.editedContent = "";
    this.Loading = false;
    this.mediaBaseUrl = (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.mediaBaseUrl || '').replace(/\/?$/, '/');
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
      this.postId = String(res.id || this.postId || "");
      this.post = {
        id: res.id,
        title: res.title,
        excerpt: res.excerpt || "",
        image: this.media.resolve(res.featured_image),
        author: {
          name: res.author_name || "Admin",
          avatar: res.author_avatar || "https://ui-avatars.com/api/?name=Admin",
          bio: res.author_bio || ""
        },
        category: res.category,
        categoryId: res.category_id,
        // Store category ID for related posts
        tags: res.tags || [],
        date: res.published_at ? new Date(res.published_at).toDateString() : "",
        readTime: res.read_time || "5 min read",
        views: res.views || 0,
        likes: res.likes || 0,
        // sanitize HTML coming from server before binding to [innerHTML]
        content: res.content || ''
      };
      // Load related posts after getting the post data
      if (this.post.categoryId) {
        this.loadRelated(this.post.categoryId);
      }
    });
  }
  loadComments() {
    this.blogDetailService.getComments(this.postRef).subscribe(res => {
      const commentsData = res.data || [];
      this.comments = commentsData.map(comment => ({
        id: comment.id,
        userId: String(comment.user_id || ""),
        author: {
          name: comment.author_name || "User",
          avatar: comment.author_avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.author_name || "User")}&size=100`
        },
        content: comment.content,
        date: this.formatCommentDate(comment.created_at),
        likes: comment.likes || 0,
        replies: comment.replies || []
      }));
    }, error => {
      console.error("Error loading comments:", error);
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
          readTime: post.read_time || "5 min"
        }));
      } else {
        this.relatedPosts = res.data || [];
        this.Loading = true;
      }
    });
  }
  openLoginPanel() {
    var _this = this;
    return (0,_var_www_html_goWILDKarunadu_goWILDKarunadu_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const res = yield _this.authModal.openLogin();
      } catch (err) {}
    })();
  }
  postComment() {
    if (!this.newComment?.trim()) return;
    if (!this.tokenService.isValid()) {
      this.openLoginPanel();
      return; // 🚀 hard stop
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
          name: comment.author_name,
          avatar: comment.author_avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.author_name || "User")}&size=100`
        },
        content: comment.content,
        date: "Just now",
        likes: 0
      });
      this.newComment = "";
      this.isSubmittingComment = false;
    }, error => {
      console.error("Error posting comment:", error);
      this.isSubmittingComment = false;
    });
  }
  likePost() {
    this.blogDetailService.likePost(this.postRef).subscribe(res => {
      this.post.likes = res.data.likes;
    }, error => {
      console.error("Error liking post:", error);
    });
  }
  likeComment(commentId) {
    this.blogDetailService.likeComment(commentId).subscribe(res => {
      const comment = this.comments.find(c => c.id === commentId);
      if (comment) {
        comment.likes = res.data.likes;
      }
    }, error => {
      console.error("Error liking comment:", error);
    });
  }
  viewRelatedPost(post) {
    const publicRef = String(post.publicRef || post.id);
    this.router.navigate(["/blog-details", publicRef]).then(() => {
      // Reload the page to fetch new data
      window.location.reload();
    });
  }
  getCategoryLabel(category) {
    return category.replace(/-/g, " ");
  }
  formatCommentDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    return date.toLocaleDateString();
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
    }, err => {
      console.error("Update failed", err);
    });
  }
  deleteComment(commentId) {
    if (!this.currentUserId) return;
    this.blogDetailService.deleteComment(commentId, this.currentUserId).subscribe(res => {
      if (res.success == true) {
        this.comments = this.comments.filter(c => c.id !== commentId);
        this.loadComments();
        this.cancelEdit();
      }
    }, err => {
      console.error("Delete failed", err);
    });
  }
  createPost() {
    this.router.navigate(["/upcomingtours"]);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function BlogDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlogDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_blog_detail__WEBPACK_IMPORTED_MODULE_8__.BlogDetail), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_9__.AuthModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_token_service__WEBPACK_IMPORTED_MODULE_10__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_media_service__WEBPACK_IMPORTED_MODULE_11__.MediaService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: BlogDetailComponent,
    selectors: [["app-blog-detail"]],
    decls: 92,
    vars: 36,
    consts: [[1, "post-hero"], ["loading", "lazy", "decoding", "async", 3, "src", "alt"], [1, "post-hero-overlay"], [1, "post-hero-copy"], [1, "post-kicker"], [1, "article-header"], ["color", "success", 1, "category-chip"], ["name", "map"], [1, "article-lead"], [1, "article-meta"], [1, "author-section"], ["loading", "lazy", "decoding", "async", 1, "author-avatar", 3, "src", "alt"], [1, "author-details"], [1, "author-name"], [1, "author-bio"], [1, "post-info"], [1, "info-item"], ["name", "calendar-outline"], ["name", "time-outline"], ["name", "eye-outline"], [1, "article-facts"], [1, "fact-box"], [1, "fact-label"], [1, "article-content", 3, "innerHTML"], [1, "article-tags"], [1, "tags-list"], ["outline", "true", 4, "ngFor", "ngForOf"], [1, "article-actions"], ["fill", "outline", "color", "danger", 3, "click"], ["name", "heart-outline", "slot", "start"], ["fill", "outline", "color", "primary"], ["name", "chatbubble-outline", "slot", "start"], [1, "author-card"], [1, "author-card-content"], ["loading", "lazy", "decoding", "async", 1, "author-avatar-large", 3, "src", "alt"], [1, "author-info"], [1, "comments-section"], [1, "add-comment-card"], ["placeholder", "Share your thoughts...", "rows", "3", 3, "ngModelChange", "ngModel", "disabled"], [1, "btn", "btn-success", "w-100", 3, "click", "disabled"], [1, "bi", "bi-telegram"], ["class", "comment-card", 4, "ngFor", "ngForOf"], ["class", "no-comments", 4, "ngIf"], ["class", "d-flex justify-content-center align-items-center loader-wrapper", "style", "min-height: 80vh", 4, "ngIf"], ["class", "related-grid mb-2", 4, "ngIf"], ["class", "text-center mt-4", 4, "ngIf"], [1, "btn", "btn-success", "position-fixed", "m-4", "rounded-circle", "shadow-lg", 2, "width", "56px", "height", "56px", "z-index", "1000", "bottom", "47px", "right", "0px", 3, "click"], ["name", "map", 2, "font-size", "24px"], ["outline", "true"], ["name", "pricetag-outline"], [1, "comment-card"], [1, "comment-header"], ["loading", "lazy", "decoding", "async", 1, "comment-avatar", 3, "src", "alt"], [1, "comment-author-info"], [1, "comment-author-name"], [1, "comment-date"], ["class", "comment-owner-actions", 4, "ngIf"], ["class", "comment-content", 4, "ngIf"], [4, "ngIf"], [1, "comment-actions"], ["fill", "clear", "size", "small", 3, "click"], [1, "comment-owner-actions"], ["name", "create-outline"], ["fill", "clear", "size", "small", "color", "danger", 3, "click"], ["name", "trash-outline"], [1, "comment-content"], ["rows", "3", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "no-comments"], [1, "d-flex", "justify-content-center", "align-items-center", "loader-wrapper", 2, "min-height", "80vh"], [1, "text-center"], ["loading", "lazy", "decoding", "async", "src", "../../assets/assets/Bus vehicle.gif", "width", "180", "alt", "Loading"], [1, "mt-3", "text-muted", "text-center"], [1, "related-grid", "mb-2"], ["button", "", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", 3, "click"], ["size", "small", "color", "success", "outline", "true"], [1, "read-time"], [1, "text-center", "mt-4"], [1, "text-muted"]],
    template: function BlogDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 5)(11, "ion-chip", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 9)(20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 12)(23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 15)(28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "ion-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "ion-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 20)(38, "div", 21)(39, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Read Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 21)(44, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 21)(49, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 24)(55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, BlogDetailComponent_ion_chip_58_Template, 4, 1, "ion-chip", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 27)(60, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogDetailComponent_Template_button_click_60_listener() {
          return ctx.likePost();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "ion-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "ion-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 32)(67, "ion-card")(68, "ion-card-content")(69, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 35)(72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 36)(77, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "ion-card", 37)(80, "ion-card-content")(81, "ion-textarea", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BlogDetailComponent_Template_ion_textarea_ngModelChange_81_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.newComment, $event) || (ctx.newComment = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogDetailComponent_Template_button_click_82_listener() {
          return ctx.postComment();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](83, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](85, BlogDetailComponent_ion_card_85_Template, 16, 8, "ion-card", 41)(86, BlogDetailComponent_div_86_Template, 3, 0, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](87, BlogDetailComponent_div_87_Template, 5, 0, "div", 43)(88, BlogDetailComponent_div_88_Template, 2, 1, "div", 44)(89, BlogDetailComponent_div_89_Template, 3, 0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BlogDetailComponent_Template_button_click_90_listener() {
          return ctx.createPost();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](91, "ion-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.post.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getCategoryLabel(ctx.post.category));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.post.excerpt);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getCategoryLabel(ctx.post.category));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.post.excerpt);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.post.author.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", ctx.post.author.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.post.author.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.post.author.bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.post.date, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.post.readTime, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.post.views, " views ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.post.readTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getCategoryLabel(ctx.post.category));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.post.tags.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx.post.content, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.post.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Like (", ctx.post.likes, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Comment (", ctx.comments.length, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.post.author.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", ctx.post.author.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.post.author.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.post.author.bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Comments (", ctx.comments.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.newComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isSubmittingComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.newComment.trim() || ctx.isSubmittingComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.isSubmittingComment ? "Posting..." : "Post Comment", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.comments.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.Loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.Loading && ctx.relatedPosts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.Loading && ctx.relatedPosts.length === 0);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
    styles: [".post-hero[_ngcontent-%COMP%] {\n  position: relative;\n  height: clamp(340px, 46vw, 520px);\n  overflow: hidden;\n}\n.post-hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n.post-hero[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(12, 18, 17, 0.9) 0%, rgba(12, 18, 17, 0.22) 58%, transparent 100%);\n}\n\n.post-hero-copy[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: auto 0 0 0;\n  z-index: 1;\n  padding: 28px 20px 24px;\n  max-width: 900px;\n  margin: 0 auto;\n  color: #fff;\n}\n.post-hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 4vw, 3.6rem);\n  line-height: 1.05;\n  margin: 8px 0 10px;\n  font-weight: 800;\n}\n.post-hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 760px;\n  color: rgba(255, 255, 255, 0.78);\n  font-size: 1rem;\n  line-height: 1.7;\n}\n\n.post-kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 5px 10px;\n  border-radius: 999px;\n  background: rgba(16, 201, 122, 0.18);\n  border: 1px solid rgba(16, 201, 122, 0.22);\n  color: #dff8eb;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.article-lead[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  color: #4b5563;\n  font-size: 1.05rem;\n  line-height: 1.8;\n}\n\n.article-facts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 20px;\n}\n\n.fact-box[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-radius: 14px;\n  background: #f8fafc;\n  border: 1px solid #e5e7eb;\n}\n.fact-box[_ngcontent-%COMP%]   .fact-label[_ngcontent-%COMP%] {\n  display: block;\n  color: #6b7280;\n  font-size: 0.72rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin-bottom: 6px;\n}\n.fact-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 1rem;\n}\n\n@media (max-width: 768px) {\n  .post-hero[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n  .post-hero-copy[_ngcontent-%COMP%] {\n    padding: 20px 16px 18px;\n  }\n  .article-facts[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.article-header[_ngcontent-%COMP%] {\n  padding: 32px 20px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.article-header[_ngcontent-%COMP%]   .category-chip[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  font-weight: 600;\n}\n.article-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  line-height: 1.3;\n  color: #1f2937;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .article-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n}\n\n.article-meta[_ngcontent-%COMP%] {\n  border-top: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 20px 0;\n  margin-bottom: 32px;\n}\n\n.author-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.author-section[_ngcontent-%COMP%]   .author-avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n.author-section[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1f2937;\n  font-size: 1.125rem;\n  margin-bottom: 4px;\n}\n.author-section[_ngcontent-%COMP%]   .author-bio[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n\n.post-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n.post-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.post-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.article-content[_ngcontent-%COMP%] {\n  padding: 0 20px 40px;\n  max-width: 800px;\n  margin: 0 auto;\n  font-size: 1.125rem;\n  line-height: 1.8;\n  color: #374151;\n}\n.article-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin-top: 40px;\n  margin-bottom: 16px;\n}\n.article-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-top: 32px;\n  margin-bottom: 12px;\n}\n.article-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.article-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .article-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-left: 24px;\n}\n.article-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .article-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.article-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1f2937;\n  font-weight: 600;\n}\n\n.article-tags[_ngcontent-%COMP%] {\n  padding: 32px 20px;\n  max-width: 800px;\n  margin: 0 auto;\n  border-top: 1px solid #e5e7eb;\n}\n.article-tags[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 16px;\n  color: #1f2937;\n}\n.article-tags[_ngcontent-%COMP%]   .tags-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.article-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  padding: 24px 20px;\n  border-top: 1px solid #e5e7eb;\n  flex-wrap: wrap;\n}\n\n.author-card[_ngcontent-%COMP%] {\n  padding: 0 20px 32px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.author-card[_ngcontent-%COMP%]   .author-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n.author-card[_ngcontent-%COMP%]   .author-card-content[_ngcontent-%COMP%]   .author-avatar-large[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.author-card[_ngcontent-%COMP%]   .author-card-content[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.author-card[_ngcontent-%COMP%]   .author-card-content[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 8px;\n  color: #1f2937;\n}\n.author-card[_ngcontent-%COMP%]   .author-card-content[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 12px;\n}\n\n.comments-section[_ngcontent-%COMP%] {\n  padding: 32px 20px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.comments-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-bottom: 24px;\n  color: #1f2937;\n}\n\n.add-comment-card[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.add-comment-card[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  --background: #f9fafb;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  border-radius: 8px;\n  margin-bottom: 12px;\n}\n\n.comment-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.comment-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.comment-header[_ngcontent-%COMP%]   .comment-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.comment-header[_ngcontent-%COMP%]   .comment-author-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n}\n.comment-header[_ngcontent-%COMP%]   .comment-date[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n\n.comment-content[_ngcontent-%COMP%] {\n  color: #4b5563;\n  line-height: 1.6;\n  margin-bottom: 12px;\n}\n\n.comment-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.related-posts[_ngcontent-%COMP%] {\n  padding: 32px 20px;\n  background: #f9fafb;\n}\n.related-posts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-bottom: 24px;\n  color: #1f2937;\n  text-align: center;\n}\n\n.related-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  max-width: 1000px;\n  margin: 0 auto;\n  \n\n}\n.related-grid[_ngcontent-%COMP%]   .article-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.related-grid[_ngcontent-%COMP%]   .article-content[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  margin: 18px 0;\n}\n.related-grid[_ngcontent-%COMP%]   .article-content[_ngcontent-%COMP%]   img.full-cover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: clamp(220px, 40vw, 520px);\n  object-fit: cover;\n  display: block;\n  margin: 20px 0;\n}\n.related-grid[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.related-grid[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  object-fit: cover;\n}\n.related-grid[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n  margin: 12px 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.related-grid[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .read-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n\n@media (max-width: 600px) {\n  .article-header[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .article-meta[_ngcontent-%COMP%] {\n    padding: 16px 0;\n  }\n  .author-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .author-section[_ngcontent-%COMP%]   .author-avatar[_ngcontent-%COMP%] {\n    width: 52px;\n    height: 52px;\n  }\n  .article-content[_ngcontent-%COMP%] {\n    padding: 0 16px 32px;\n    font-size: 1rem;\n  }\n  .article-tags[_ngcontent-%COMP%], \n   .author-card[_ngcontent-%COMP%], \n   .comments-section[_ngcontent-%COMP%], \n   .related-posts[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n  .author-card[_ngcontent-%COMP%]   .author-card-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 400px) {\n  .comment-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .article-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvZy1kZXRhaWwvYmxvZy1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyR0FBQTtBQURKOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFGRjtBQUlFO0VBQ0UsbUNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU9BO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUpGO0FBTUU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSko7QUFPRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBTEo7O0FBU0E7RUFDRTtJQUNFLGFBQUE7RUFORjtFQVNBO0lBQ0UsdUJBQUE7RUFQRjtFQVVBO0lBQ0UsMEJBQUE7RUFSRjtBQUNGO0FBWUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVZGO0FBWUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBVko7QUFhRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVhKO0FBYUk7RUFQRjtJQVFJLGtCQUFBO0VBVko7QUFDRjs7QUFjQTtFQUNFLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQVhGO0FBYUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBWEo7QUFjRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFaSjtBQWVFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBYko7O0FBaUJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBZEY7QUFnQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBZEo7QUFnQkk7RUFDRSxlQUFBO0FBZE47O0FBb0JBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWpCRjtBQW1CRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWpCSjtBQW9CRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWxCSjtBQXFCRTtFQUNFLG1CQUFBO0FBbkJKO0FBc0JFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQXBCSjtBQXNCSTtFQUNFLG1CQUFBO0FBcEJOO0FBd0JFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBdEJKOztBQTJCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUF4QkY7QUEwQkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXhCSjtBQTJCRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQXpCSjs7QUE4QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUEzQkY7O0FBK0JBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUE1QkY7QUE4QkU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBNUJKO0FBOEJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUE1Qk47QUErQkk7RUFDRSxPQUFBO0FBN0JOO0FBK0JNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUE3QlI7QUFnQ007RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUE5QlI7O0FBcUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFsQ0Y7QUFvQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQWxDSjs7QUFzQ0E7RUFDRSxtQkFBQTtBQW5DRjtBQXFDRTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFuQ0o7O0FBdUNBO0VBQ0UsbUJBQUE7QUFwQ0Y7O0FBdUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBcENGO0FBc0NFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXBDSjtBQXVDRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQXJDSjtBQXdDRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQXRDSjs7QUEwQ0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXZDRjs7QUEwQ0E7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQXZDRjs7QUEyQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBeENGO0FBMENFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQXhDSjs7QUE0Q0E7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBWUEsOEVBQUE7QUFwREY7QUE0Q0U7O0VBRUUsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQTFDSjtBQThDRTtFQUNFLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUE1Q0o7QUE4Q0U7RUFDRSxTQUFBO0FBNUNKO0FBOENJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQTVDTjtBQStDSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQTdDTjtBQWdESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUE5Q047O0FBbURBO0VBQ0U7SUFDRSxrQkFBQTtFQWhERjtFQW1EQTtJQUNFLGVBQUE7RUFqREY7RUFvREE7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtFQWxERjtFQW9ERTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBbERKO0VBc0RBO0lBQ0Usb0JBQUE7SUFDQSxlQUFBO0VBcERGO0VBdURBOzs7O0lBSUUsa0JBQUE7SUFDQSxtQkFBQTtFQXJERjtFQXdEQTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7RUF0REY7QUFDRjtBQXlEQTtFQUNFO0lBQ0UsZUFBQTtFQXZERjtFQTBEQTtJQUNFLHNCQUFBO0lBQ0Esb0JBQUE7RUF4REY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBvc3QgSGVyb1xuLnBvc3QtaGVybyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBjbGFtcCgzNDBweCwgNDZ2dywgNTIwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDEyLDE4LDE3LDAuOSkgMCUsIHJnYmEoMTIsMTgsMTcsMC4yMikgNTglLCB0cmFuc3BhcmVudCAxMDAlKTtcbiAgfVxufVxuXG4ucG9zdC1oZXJvLWNvcHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiBhdXRvIDAgMCAwO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAyOHB4IDIwcHggMjRweDtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGNvbG9yOiAjZmZmO1xuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDR2dywgMy42cmVtKTtcbiAgICBsaW5lLWhlaWdodDogMS4wNTtcbiAgICBtYXJnaW46IDhweCAwIDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuXG4gIHAge1xuICAgIG1heC13aWR0aDogNzYwcHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43OCk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIH1cbn1cblxuLnBvc3Qta2lja2VyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNiwgMjAxLCAxMjIsIDAuMTgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LCAyMDEsIDEyMiwgMC4yMik7XG4gIGNvbG9yOiAjZGZmOGViO1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5hcnRpY2xlLWxlYWQge1xuICBtYXJnaW46IDAgMCAxOHB4O1xuICBjb2xvcjogIzRiNTU2MztcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBsaW5lLWhlaWdodDogMS44O1xufVxuXG4uYXJ0aWNsZS1mYWN0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZmFjdC1ib3gge1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG5cbiAgLmZhY3QtbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICB9XG5cbiAgc3Ryb25nIHtcbiAgICBjb2xvcjogIzExMTgyNztcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wb3N0LWhlcm8ge1xuICAgIGhlaWdodDogMzIwcHg7XG4gIH1cblxuICAucG9zdC1oZXJvLWNvcHkge1xuICAgIHBhZGRpbmc6IDIwcHggMTZweCAxOHB4O1xuICB9XG5cbiAgLmFydGljbGUtZmFjdHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5cbi8vIEFydGljbGUgSGVhZGVyXG4uYXJ0aWNsZS1oZWFkZXIge1xuICBwYWRkaW5nOiAzMnB4IDIwcHg7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIC5jYXRlZ29yeS1jaGlwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIGNvbG9yOiAjMWYyOTM3O1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICB9XG4gIH1cbn1cblxuLmFydGljbGUtbWV0YSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlN2ViO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG4uYXV0aG9yLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgLmF1dGhvci1hdmF0YXIge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAuYXV0aG9yLW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cblxuICAuYXV0aG9yLWJpbyB7XG4gICAgY29sb3I6ICM2YjcyODA7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgfVxufVxuXG4ucG9zdC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDIwcHg7XG5cbiAgLmluZm8taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNnB4O1xuICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICB9XG59XG5cbi8vIEFydGljbGUgQ29udGVudFxuLmFydGljbGUtY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMjBweCA0MHB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbiAgY29sb3I6ICMzNzQxNTE7XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzFmMjkzNztcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzFmMjkzNztcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgdWwsIG9sIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjRweDtcblxuICAgIGxpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgfVxuICB9XG5cbiAgc3Ryb25nIHtcbiAgICBjb2xvcjogIzFmMjkzNztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5cbi8vIEFydGljbGUgVGFnc1xuLmFydGljbGUtdGFncyB7XG4gIHBhZGRpbmc6IDMycHggMjBweDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlN2ViO1xuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBjb2xvcjogIzFmMjkzNztcbiAgfVxuXG4gIC50YWdzLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTBweDtcbiAgfVxufVxuXG4vLyBBcnRpY2xlIEFjdGlvbnNcbi5hcnRpY2xlLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAyNHB4IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlN2ViO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi8vIEF1dGhvciBDYXJkXG4uYXV0aG9yLWNhcmQge1xuICBwYWRkaW5nOiAwIDIwcHggMzJweDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgLmF1dGhvci1jYXJkLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuYXV0aG9yLWF2YXRhci1sYXJnZSB7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIH1cblxuICAgIC5hdXRob3ItaW5mbyB7XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBjb2xvcjogIzFmMjkzNztcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBDb21tZW50cyBTZWN0aW9uXG4uY29tbWVudHMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDMycHggMjBweDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIGNvbG9yOiAjMWYyOTM3O1xuICB9XG59XG5cbi5hZGQtY29tbWVudC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICBpb24tdGV4dGFyZWEge1xuICAgIC0tYmFja2dyb3VuZDogI2Y5ZmFmYjtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxufVxuXG4uY29tbWVudC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmNvbW1lbnQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gIC5jb21tZW50LWF2YXRhciB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5jb21tZW50LWF1dGhvci1uYW1lIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMWYyOTM3O1xuICB9XG5cbiAgLmNvbW1lbnQtZGF0ZSB7XG4gICAgY29sb3I6ICM2YjcyODA7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgfVxufVxuXG4uY29tbWVudC1jb250ZW50IHtcbiAgY29sb3I6ICM0YjU1NjM7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5jb21tZW50LWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLy8gUmVsYXRlZCBQb3N0c1xuLnJlbGF0ZWQtcG9zdHMge1xuICBwYWRkaW5nOiAzMnB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmOWZhZmI7XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIGNvbG9yOiAjMWYyOTM3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4ucmVsYXRlZC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMjBweDtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG5cbiAgLy8gRW5zdXJlIGNvbnRlbnQgaW1hZ2VzIChmcm9tIHJpY2ggSFRNTCkgc2NhbGUgcmVzcG9uc2libHlcbiAgLmFydGljbGUtY29udGVudCBpbWcsXG4gIC5hcnRpY2xlLWNvbnRlbnQgZmlndXJlIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDE4cHggMDtcbiAgfVxuXG4gIC8qIFV0aWxpdHk6IGZ1bGwtYmxlZWQgY292ZXIgaW1hZ2UgaW4gY29udGVudCB3aGVuIGF1dGhvciB3YW50cyBhIGxhcmdlIGhlcm8gKi9cbiAgLmFydGljbGUtY29udGVudCBpbWcuZnVsbC1jb3ZlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjbGFtcCgyMjBweCwgNDB2dywgNTIwcHgpO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG4gIGlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDA7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuXG4gICAgaDQge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMWYyOTM3O1xuICAgICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5yZWFkLXRpbWUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDRweDtcbiAgICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5hcnRpY2xlLWhlYWRlciB7XG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xuICB9XG5cbiAgLmFydGljbGUtbWV0YSB7XG4gICAgcGFkZGluZzogMTZweCAwO1xuICB9XG5cbiAgLmF1dGhvci1zZWN0aW9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTBweDtcblxuICAgIC5hdXRob3ItYXZhdGFyIHtcbiAgICAgIHdpZHRoOiA1MnB4O1xuICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgIH1cbiAgfVxuXG4gIC5hcnRpY2xlLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAgMTZweCAzMnB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC5hcnRpY2xlLXRhZ3MsXG4gIC5hdXRob3ItY2FyZCxcbiAgLmNvbW1lbnRzLXNlY3Rpb24sXG4gIC5yZWxhdGVkLXBvc3RzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgfVxuXG4gIC5hdXRob3ItY2FyZCAuYXV0aG9yLWNhcmQtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmNvbW1lbnQtYWN0aW9ucyB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLmFydGljbGUtYWN0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
        console.error('Decryption error:', error);
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