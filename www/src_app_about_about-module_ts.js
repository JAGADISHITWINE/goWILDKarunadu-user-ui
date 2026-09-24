"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_about_about-module_ts"],{

/***/ 6442
/*!***************************************!*\
  !*** ./src/app/about/about-module.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutModule: () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ 2912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: '',
  component: _about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent
}];
class AboutModule {
  static #_ = _staticBlock = () => (this.ɵfac = function AboutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AboutModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AboutModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AboutModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ },

/***/ 2912
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _core_static_pages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/static-pages.service */ 3700);
var _staticBlock;








function AboutComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\"", ctx_r0.story.quote, "\"");
  }
}
function AboutComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.story.paragraph2, " ");
  }
}
function AboutComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34)(1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stat_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stat_r2.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stat_r2.label);
  }
}
function AboutComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37)(1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const value_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", value_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](value_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](value_r3.description);
  }
}
function AboutComponent_section_42_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 46)(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 50)(6, "h3", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const member_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", member_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", member_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](member_r4.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](member_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](member_r4.bio);
  }
}
function AboutComponent_section_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 42)(1, "div", 43)(2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "03");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "The people behind the trails");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Meet Our ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AboutComponent_section_42_div_13_Template, 10, 5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.team);
  }
}
function AboutComponent_section_43_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 59)(1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 61)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((i_r6 + 1).toString().padStart(2, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r5.description, " ");
  }
}
function AboutComponent_section_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 53)(1, "div", 54)(2, "div", 55)(3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "04");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Non-negotiable");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Our ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Safety");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Standards");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Every measure below is a baseline, not an aspiration. We review and upgrade our protocols every season. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ul", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AboutComponent_section_43_li_16_Template, 7, 3, "li", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.safetyItems);
  }
}
class AboutComponent {
  constructor(staticPagesService) {
    this.staticPagesService = staticPagesService;
    this.loading = true;
    this.error = false;
    this.hero = {
      year: '2011',
      badge: 'Our Story',
      title: "Exploring Karnataka's Wilderness Since 2011",
      subtitle: 'Your trusted partner for adventure and exploration in the Western Ghats'
    };
    this.story = {
      sectionNumber: '01',
      tag: 'Our Story',
      heading: 'Born from a love of wild places',
      paragraph1: "goWILDKarunadu was born out of a passion for the Western Ghats and a desire to share its beauty with fellow adventurers. What started as weekend treks with friends has grown into one of Karnataka's most trusted trekking organisations.",
      quote: "We've introduced thousands of people to the majestic peaks, dense forests, and hidden waterfalls of Karnataka.",
      paragraph2: 'Our mission remains simple: to create safe, memorable, and responsible trekking experiences while preserving the natural beauty that makes these adventures possible.'
    };
    this.stats = [{
      number: '10,000+',
      label: 'Happy Trekkers'
    }, {
      number: '50+',
      label: 'Trek Routes'
    }, {
      number: '15',
      label: 'Years Experience'
    }, {
      number: '4.8',
      label: 'Average Rating'
    }];
    this.values = [{
      icon: 'shield-checkmark',
      title: 'Safety First',
      description: 'All our treks are led by certified guides with comprehensive safety protocols'
    }, {
      icon: 'leaf',
      title: 'Eco-Friendly',
      description: 'We practice and promote responsible trekking with minimal environmental impact'
    }, {
      icon: 'people',
      title: 'Community',
      description: 'Building a community of adventure enthusiasts who respect nature'
    }, {
      icon: 'star',
      title: 'Excellence',
      description: 'Committed to providing exceptional experiences on every trek'
    }];
    this.team = [{
      name: 'Rajesh Kumar',
      role: 'Founder & Lead Trek Leader',
      image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&size=200',
      bio: '15+ years of trekking experience in the Western Ghats',
      suffix: 'Founder & Lead Trek Leader'
    }, {
      name: 'Priya Sharma',
      role: 'Operations Manager',
      image: 'https://ui-avatars.com/api/?name=Priya+Sharma&size=200',
      bio: 'Expert in trek logistics and safety protocols',
      suffix: 'Operations Manager'
    }, {
      name: 'Arjun Menon',
      role: 'Senior Trek Guide',
      image: 'https://ui-avatars.com/api/?name=Arjun+Menon&size=200',
      bio: 'Certified wilderness first responder and mountaineer',
      suffix: 'Senior Trek Guide'
    }, {
      name: 'Meera Reddy',
      role: 'Trek Guide & Naturalist',
      image: 'https://ui-avatars.com/api/?name=Meera+Reddy&size=200',
      bio: 'Wildlife enthusiast with deep knowledge of Western Ghats flora & fauna',
      suffix: 'Trek Guide & Naturalist'
    }];
    this.safetyItems = [{
      icon: 'shield-checkmark',
      title: 'Certified Guides',
      description: 'All treks led by certified guides with wilderness first aid training'
    }, {
      icon: 'medkit',
      title: 'Safety Briefings',
      description: 'Comprehensive safety briefings before each trek'
    }, {
      icon: 'call',
      title: 'Emergency Communication',
      description: 'Emergency communication devices on all treks'
    }, {
      icon: 'cloudy-night',
      title: 'Weather Monitoring',
      description: 'Strict adherence to weather and trail conditions'
    }];
  }
  ngOnInit() {
    this.loadAboutData();
  }
  loadAboutData() {
    this.loading = true;
    this.error = false;
    this.staticPagesService.getPage('about-us').subscribe({
      next: page => {
        this.loading = false;
        if (!page) return;
        const dynamicData = page.aboutData || this.parseContent(page.content);
        if (dynamicData) {
          if (dynamicData.hero) {
            this.hero = {
              ...this.hero,
              ...dynamicData.hero
            };
          }
          if (dynamicData.story) {
            this.story = {
              ...this.story,
              ...dynamicData.story
            };
          }
          if (dynamicData.stats && dynamicData.stats.length > 0) {
            this.stats = dynamicData.stats;
          }
          if (dynamicData.values && dynamicData.values.length > 0) {
            this.values = dynamicData.values;
          }
          if (dynamicData.team && dynamicData.team.length > 0) {
            this.team = dynamicData.team;
          }
          if (dynamicData.safetyItems && dynamicData.safetyItems.length > 0) {
            this.safetyItems = dynamicData.safetyItems;
          }
        }
      },
      error: err => {
        console.warn('Failed to fetch dynamic about page data, using default content:', err);
        this.loading = false;
      }
    });
  }
  parseContent(content) {
    if (!content) return null;
    try {
      return JSON.parse(content);
    } catch {
      return null;
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_static_pages_service__WEBPACK_IMPORTED_MODULE_4__.StaticPagesService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 52,
    vars: 14,
    consts: [[1, "page"], [1, "hero"], [1, "hero-year"], [1, "hero-inner"], [1, "hero-label"], [1, "hero-title", 3, "innerHTML"], [1, "hero-sub"], [1, "story-section"], [1, "story-aside"], [1, "section-number"], [1, "section-tag"], [1, "section-heading", 3, "innerHTML"], [1, "story-text"], ["class", "pull-quote", 4, "ngIf"], [4, "ngIf"], [1, "stats-section"], [1, "stats-grid"], ["class", "stat-item", 4, "ngFor", "ngForOf"], [1, "values-section"], [1, "values-header"], [1, "section-number", 2, "margin-bottom", "0"], [1, "section-tag", 2, "margin-bottom", "6px"], [1, "section-heading"], [1, "values-grid"], ["class", "value-card", 4, "ngFor", "ngForOf"], [1, "divider"], [1, "divider-line"], [1, "divider-mark"], ["class", "team-section", 4, "ngIf"], ["class", "safety-section", 4, "ngIf"], [1, "footer-cta"], [1, "footer-cta-inner"], ["routerLink", "/upcomingtours", 1, "cta-btn"], [1, "pull-quote"], [1, "stat-item"], [1, "stat-number"], [1, "stat-label"], [1, "value-card"], ["aria-hidden", "true", 1, "value-icon"], [3, "name"], [1, "value-title"], [1, "value-desc"], [1, "team-section"], [1, "team-header-wrap"], [1, "team-grid"], ["class", "team-card", 4, "ngFor", "ngForOf"], [1, "team-card"], [1, "team-img"], ["loading", "lazy", "decoding", "async", 3, "src", "alt"], [1, "team-role-tag"], [1, "team-body"], [1, "team-name"], [1, "team-bio"], [1, "safety-section"], [1, "safety-inner"], [1, "safety-aside"], [1, "safety-desc"], [1, "safety-list"], ["class", "safety-item", 4, "ngFor", "ngForOf"], [1, "safety-item"], [1, "safety-num"], [1, "safety-text"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "section", 7)(11, "div", 8)(12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12)(18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, AboutComponent_div_20_Template, 3, 1, "div", 13)(21, AboutComponent_p_21_Template, 2, 1, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "section", 15)(23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, AboutComponent_div_24_Template, 5, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "section", 18)(26, "div", 19)(27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div")(30, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "What drives us");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, AboutComponent_div_37_Template, 7, 3, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "div", 26)(40, "div", 27)(41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, AboutComponent_section_42_Template, 14, 1, "section", 28)(43, AboutComponent_section_43_Template, 17, 1, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "section", 30)(45, "div", 31)(46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Ready to find your trail?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Browse our upcoming treks and join thousands of adventurers who've trusted goWILDKarunadu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Explore Upcoming Treks \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.hero.year || "2011");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.hero.badge || "Our Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.hero.title || "Exploring Karnataka's<br /><em>Wilderness</em><br />Since " + (ctx.hero.year || "2011"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.hero.subtitle || "Your trusted partner for adventure and exploration in the Western Ghats");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.story.sectionNumber || "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.story.tag || "Our Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.story.heading || "Born from<br />a love of<br /><em>wild places</em>", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.story.paragraph1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.story.quote);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.story.paragraph2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.stats);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.values);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.team == null ? null : ctx.team.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.safetyItems == null ? null : ctx.safetyItems.length);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHrefDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  background: #f9f5ee;\n  color: var(--ink, #1e3326);\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #f9f5ee;\n  color: var(--ink);\n  font-family: \"DM Sans\", system-ui, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\n.page[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_revealPage 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;\n  background: #f9f5ee;\n  color: #1e3326;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .page[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_revealPage {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero[_ngcontent-%COMP%] {\n  background: #1e3326;\n  position: relative;\n  overflow: hidden;\n  padding: clamp(72px, 12vw, 120px) clamp(20px, 8vw, 96px) clamp(64px, 10vw, 96px);\n  min-height: clamp(420px, 72vh, 560px);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(ellipse 140% 120% at 80% 50%, rgba(93, 139, 106, 0.18) 0%, transparent 60%), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600'%3E%3Cellipse cx='300' cy='300' rx='80' ry='50' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.06'/%3E%3Cellipse cx='300' cy='300' rx='140' ry='90' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.05'/%3E%3Cellipse cx='300' cy='300' rx='205' ry='135' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.04'/%3E%3Cellipse cx='300' cy='300' rx='280' ry='185' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.03'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right -60px center, right -60px center;\n  pointer-events: none;\n}\n.hero[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E\");\n  pointer-events: none;\n}\n\n.hero-year[_ngcontent-%COMP%] {\n  position: absolute;\n  top: clamp(16px, 6vw, 40px);\n  right: clamp(16px, 8vw, 120px);\n  z-index: 1;\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: clamp(3.2rem, 16vw, 7rem);\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.04);\n  line-height: 1;\n  letter-spacing: -0.04em;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 780px;\n  width: min(780px, 100%);\n}\n\n.hero-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.68rem;\n  font-weight: 500;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #8ab89a;\n  margin-bottom: 28px;\n}\n.hero-label[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 28px;\n  height: 1px;\n  background: #8ab89a;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: clamp(2.6rem, 6vw, 5.5rem);\n  font-weight: 900;\n  line-height: 1;\n  color: #f4ede0;\n  letter-spacing: -0.02em;\n  margin-bottom: 8px;\n}\n.hero-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: 700;\n  color: #8ab89a;\n}\n\n.hero-sub[_ngcontent-%COMP%] {\n  font-family: \"Libre Baskerville\", Georgia, serif;\n  font-style: italic;\n  font-size: clamp(1rem, 2.6vw, 1.3rem);\n  color: rgba(244, 237, 224, 0.5);\n  margin-top: 20px;\n  line-height: 1.6;\n}\n\n.divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 0 8vw;\n  margin: 60px 0;\n}\n\n.divider-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background: rgba(27, 31, 28, 0.12);\n}\n\n.divider-mark[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border: 1.5px solid #b05e28;\n  transform: rotate(45deg);\n  flex-shrink: 0;\n}\n\n.section-number[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: 5rem;\n  font-weight: 900;\n  color: rgba(27, 31, 28, 0.06);\n  line-height: 1;\n  letter-spacing: -0.04em;\n  margin-bottom: -16px;\n}\n\n.section-tag[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 500;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #b05e28;\n  margin-bottom: 16px;\n  display: block;\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: clamp(1.8rem, 3.5vw, 2.6rem);\n  font-weight: 700;\n  color: #1e3326;\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n}\n.section-heading[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #3d6b4f;\n}\n\n.story-section[_ngcontent-%COMP%] {\n  padding: clamp(60px, 10vw, 80px) clamp(20px, 8vw, 80px) 0;\n  display: grid;\n  grid-template-columns: minmax(240px, 0.9fr) minmax(0, 1.4fr);\n  gap: clamp(32px, 6vw, 80px);\n  align-items: start;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.story-aside[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 40px;\n}\n\n.story-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Libre Baskerville\", Georgia, serif;\n  font-size: 1rem;\n  line-height: 1.85;\n  color: #3a4040;\n  margin-bottom: 24px;\n}\n\n.pull-quote[_ngcontent-%COMP%] {\n  border-left: 3px solid #b05e28;\n  padding: 4px 0 4px 24px;\n  margin: 36px 0;\n}\n.pull-quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: 1.35rem;\n  font-weight: 700;\n  font-style: italic;\n  color: #1e3326;\n  line-height: 1.4;\n  margin: 0 !important;\n}\n\n.stats-section[_ngcontent-%COMP%] {\n  background: #1e3326;\n  position: relative;\n  overflow: hidden;\n  margin: clamp(60px, 12vw, 90px) 0;\n  padding: clamp(60px, 12vw, 90px) clamp(20px, 8vw, 90px);\n}\n.stats-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E\");\n  pointer-events: none;\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 32px 40px;\n  position: relative;\n  z-index: 1;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.stat-item[_ngcontent-%COMP%] {\n  padding: 0 12px 12px;\n  text-align: left;\n}\n\n.stat-number[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: clamp(2.8rem, 5vw, 4.5rem);\n  font-weight: 900;\n  color: #f4ede0;\n  line-height: 1;\n  letter-spacing: -0.03em;\n  display: block;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  font-weight: 400;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: rgba(244, 237, 224, 0.45);\n  margin-top: 10px;\n}\n\n@media (min-width: 901px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .stat-item[_ngcontent-%COMP%] {\n    padding: 0 40px;\n    border-right: 1px solid rgba(255, 255, 255, 0.08);\n    text-align: center;\n  }\n  .stat-item[_ngcontent-%COMP%]:last-child {\n    border-right: none;\n  }\n  .stat-item[_ngcontent-%COMP%]:first-child {\n    padding-left: 0;\n  }\n}\n.values-section[_ngcontent-%COMP%] {\n  padding: 0 clamp(20px, 8vw, 80px) clamp(60px, 10vw, 90px);\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.values-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 24px;\n  flex-wrap: wrap;\n  margin-bottom: 48px;\n}\n\n.values-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1px;\n  background: rgba(27, 31, 28, 0.08);\n  border: 1px solid rgba(27, 31, 28, 0.08);\n  border-radius: 12px;\n  overflow: hidden;\n}\n\n.value-card[_ngcontent-%COMP%] {\n  background: #f9f5ee;\n  padding: 40px 32px;\n  transition: background 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  height: 100%;\n}\n.value-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: #b05e28;\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.value-card[_ngcontent-%COMP%]:hover {\n  background: #f4ede0;\n}\n.value-card[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.value-card[_ngcontent-%COMP%]:hover   .value-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.value-icon[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 8px;\n  background: rgba(176, 94, 40, 0.12);\n  color: #b05e28;\n  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), background 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  line-height: 1;\n}\n.value-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n\n.value-title[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1e3326;\n  margin-bottom: 0;\n  letter-spacing: -0.01em;\n}\n\n.value-desc[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #8a9d8e;\n  line-height: 1.7;\n  margin: 0;\n}\n\n.team-section[_ngcontent-%COMP%] {\n  background: #ede4d3;\n  padding: clamp(60px, 12vw, 90px) clamp(20px, 8vw, 90px);\n  position: relative;\n}\n.team-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect x='29' y='0' width='1' height='60' fill='%231b1f1c' opacity='0.03'/%3E%3Crect x='0' y='29' width='60' height='1' fill='%231b1f1c' opacity='0.03'/%3E%3C/svg%3E\");\n  pointer-events: none;\n}\n\n.team-header-wrap[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 1;\n}\n\n.team-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: clamp(16px, 4vw, 32px);\n  max-width: 1200px;\n  margin: 48px auto 0;\n  position: relative;\n  z-index: 1;\n}\n\n.team-card[_ngcontent-%COMP%] {\n  background: #f9f5ee;\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s;\n}\n.team-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 20px 48px rgba(27, 31, 28, 0.14);\n}\n.team-card[_ngcontent-%COMP%]:hover   .team-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n\n.team-img[_ngcontent-%COMP%] {\n  height: 260px;\n  overflow: hidden;\n  position: relative;\n}\n.team-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  filter: sepia(15%) saturate(85%);\n}\n.team-img[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(27, 31, 28, 0.55) 0%, transparent 55%);\n}\n\n.team-role-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  left: 14px;\n  z-index: 1;\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #f4ede0;\n  background: rgba(27, 31, 28, 0.6);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  padding: 4px 10px;\n  border-radius: 30px;\n}\n\n.team-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n}\n\n.team-name[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #1e3326;\n  margin-bottom: 10px;\n  letter-spacing: -0.01em;\n}\n\n.team-bio[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #8a9d8e;\n  line-height: 1.7;\n  margin: 0;\n}\n\n.safety-section[_ngcontent-%COMP%] {\n  padding: clamp(60px, 12vw, 90px) clamp(20px, 8vw, 90px);\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.safety-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(260px, 0.95fr) minmax(0, 1.1fr);\n  gap: clamp(32px, 6vw, 80px);\n  align-items: start;\n}\n\n.safety-aside[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.safety-desc[_ngcontent-%COMP%] {\n  font-family: \"Libre Baskerville\", Georgia, serif;\n  font-size: 0.95rem;\n  line-height: 1.8;\n  color: #3a4040;\n  font-style: italic;\n  margin-top: 20px;\n}\n\n.safety-list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n}\n\n.safety-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 48px 1fr;\n  align-items: start;\n  gap: 16px;\n  padding: 20px 0;\n  border-bottom: 1px solid rgba(27, 31, 28, 0.08);\n  transition: padding-left 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.safety-item[_ngcontent-%COMP%]:first-child {\n  border-top: 1px solid rgba(27, 31, 28, 0.08);\n}\n.safety-item[_ngcontent-%COMP%]:hover {\n  padding-left: 4px;\n}\n.safety-item[_ngcontent-%COMP%]:hover   .safety-num[_ngcontent-%COMP%] {\n  color: #b05e28;\n}\n\n.safety-num[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: 1.4rem;\n  font-weight: 900;\n  color: rgba(27, 31, 28, 0.1);\n  line-height: 1;\n  transition: color 0.2s;\n  padding-top: 2px;\n}\n\n.safety-text[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  line-height: 1.6;\n  color: #3a4040;\n  padding-top: 4px;\n}\n.safety-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #1e3326;\n  margin-bottom: 2px;\n}\n\n.footer-cta[_ngcontent-%COMP%] {\n  background: #1e3326;\n  position: relative;\n  overflow: hidden;\n  padding: clamp(60px, 12vw, 90px) clamp(20px, 8vw, 90px);\n  text-align: center;\n}\n.footer-cta[_ngcontent-%COMP%]::before {\n  content: \"SINCE 2011\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: 14vw;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.03);\n  line-height: 0.85;\n  letter-spacing: -0.04em;\n  pointer-events: none;\n  white-space: nowrap;\n}\n\n.footer-cta-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 560px;\n  margin: 0 auto;\n}\n\n.footer-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: clamp(1.6rem, 3.5vw, 2.8rem);\n  font-weight: 900;\n  color: #f4ede0;\n  margin-bottom: 16px;\n  letter-spacing: -0.02em;\n}\n\n.footer-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(244, 237, 224, 0.5);\n  font-size: 0.9rem;\n  line-height: 1.7;\n  margin-bottom: 36px;\n  font-family: \"Libre Baskerville\", Georgia, serif;\n  font-style: italic;\n}\n\n.cta-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  background: #b05e28;\n  color: #fff;\n  font-family: \"DM Sans\", system-ui, sans-serif;\n  font-size: 0.78rem;\n  font-weight: 500;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  padding: 14px 30px;\n  border-radius: 2px;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.2s, transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s;\n}\n.cta-btn[_ngcontent-%COMP%]:hover {\n  background: #c97040;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(176, 94, 40, 0.4);\n}\n\n@media (max-width: 900px) {\n  .story-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .story-aside[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    gap: 24px;\n  }\n  .stat-item[_ngcontent-%COMP%] {\n    border: none;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n    padding: 0 0 24px;\n    text-align: left;\n  }\n  .stat-item[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .values-header[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .safety-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n}\n@media (max-width: 600px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 60px 5vw 48px;\n    min-height: 420px;\n  }\n  .stats-section[_ngcontent-%COMP%], .team-section[_ngcontent-%COMP%], .footer-cta[_ngcontent-%COMP%] {\n    padding-inline: 5vw;\n  }\n  .story-section[_ngcontent-%COMP%], .values-section[_ngcontent-%COMP%], .safety-section[_ngcontent-%COMP%], .divider[_ngcontent-%COMP%] {\n    padding-inline: 5vw;\n  }\n  .hero-year[_ngcontent-%COMP%] {\n    font-size: clamp(2.8rem, 28vw, 4.6rem);\n    top: 16px;\n    right: 5vw;\n  }\n  .section-number[_ngcontent-%COMP%] {\n    font-size: 3.2rem;\n  }\n}\n@media (max-width: 480px) {\n  .value-card[_ngcontent-%COMP%] {\n    padding: 28px 22px;\n  }\n  .team-img[_ngcontent-%COMP%] {\n    height: 220px;\n  }\n  .safety-item[_ngcontent-%COMP%] {\n    grid-template-columns: 36px 1fr;\n    gap: 12px;\n  }\n  .footer-cta[_ngcontent-%COMP%]::before {\n    font-size: 36vw;\n  }\n  .cta-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBeUIsc0JBQUE7QUFEekI7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUNBQUE7QUFBRjs7QUFHQTtFQUNFLDhEQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUFRLGVBQUE7RUFDUjtBQUNGO0FBQ0E7RUFDRTtJQUFPLFVBQUE7SUFBWSwyQkFBQTtFQUduQjtFQUZBO0lBQU8sVUFBQTtJQUFZLHdCQUFBO0VBTW5CO0FBQ0Y7QUFIQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdGQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUFLRjtBQUZFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlxQkFDRTtFQUVGLDRCQUFBO0VBQ0EsMkRBQUE7RUFDQSxvQkFBQTtBQUVKO0FBRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsOFRBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtF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QSwyQkFBQTtFQUNBLDZDQUFBO0FBYUo7O0FBUkE7RUFDRTtJQUFrQiwwQkFBQTtJQUE0QixTQUFBO0VBYTlDO0VBWkE7SUFBa0IsZ0JBQUE7RUFlbEI7RUFkQTtJQUFrQixTQUFBO0VBaUJsQjtFQWhCQTtJQUNFLFlBQUE7SUFDQSxrREFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUFrQkY7RUFoQkU7SUFBZSxtQkFBQTtFQW1CakI7RUFqQkE7SUFBa0IsU0FBQTtFQW9CbEI7RUFuQkE7SUFBa0IsMEJBQUE7SUFBNEIsU0FBQTtFQXVCOUM7QUFDRjtBQXJCQTtFQUNFO0lBQVEsc0JBQUE7SUFBd0IsaUJBQUE7RUF5QmhDO0VBeEJBO0lBQTZDLG1CQUFBO0VBMkI3QztFQTFCQTtJQUE2RCxtQkFBQTtFQTZCN0Q7RUE1QkE7SUFBYSxzQ0FBQTtJQUF3QyxTQUFBO0lBQVcsVUFBQTtFQWlDaEU7RUFoQ0E7SUFBa0IsaUJBQUE7RUFtQ2xCO0FBQ0Y7QUFqQ0E7RUFDRTtJQUFjLGtCQUFBO0VBb0NkO0VBbkNBO0lBQVksYUFBQTtFQXNDWjtFQXJDQTtJQUFlLCtCQUFBO0lBQWlDLFNBQUE7RUF5Q2hEO0VBeENBO0lBQXNCLGVBQUE7RUEyQ3RCO0VBMUNBO0lBQVcsV0FBQTtJQUFhLHVCQUFBO0VBOEN4QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gw6LClMKAw6LClMKAw6LClMKAIEZPTlRTIMOiwoDClCBhZGQgdG8gaW5kZXguaHRtbCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIEZyYXVuY2VzICsgTGlicmUgQmFza2VydmlsbGUgKyBETSBTYW5zXG5cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIgeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNmOWY1ZWU7XG4gIGNvbG9yOiB2YXIoLS1pbmssICMxZTMzMjYpO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogI2Y5ZjVlZTtcbiAgY29sb3I6IHZhcigtLWluayk7XG4gIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi5wYWdlIHtcbiAgYW5pbWF0aW9uOiByZXZlYWxQYWdlIDAuN3MgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIGJvdGg7XG4gIGJhY2tncm91bmQ6ICNmOWY1ZWU7XG4gIGNvbG9yOiAjMWUzMzI2O1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAucGFnZSB7IGFuaW1hdGlvbjogbm9uZTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHJldmVhbFBhZ2Uge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEycHgpOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEhFUk8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uaGVybyB7XG4gIGJhY2tncm91bmQ6ICMxZTMzMjY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogY2xhbXAoNzJweCwgMTJ2dywgMTIwcHgpIGNsYW1wKDIwcHgsIDh2dywgOTZweCkgY2xhbXAoNjRweCwgMTB2dywgOTZweCk7XG4gIG1pbi1oZWlnaHQ6IGNsYW1wKDQyMHB4LCA3MnZoLCA1NjBweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTJweDtcblxuICAvLyBUb3BvZ3JhcGhpYyBvdmVybGF5XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgICByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSAxNDAlIDEyMCUgYXQgODAlIDUwJSwgcmdiYSg5MywxMzksMTA2LDAuMTgpIDAlLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MDAnIGhlaWdodD0nNjAwJyUzRSUzQ2VsbGlwc2UgY3g9JzMwMCcgY3k9JzMwMCcgcng9JzgwJyByeT0nNTAnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmZmZmZmJyBzdHJva2Utd2lkdGg9JzAuNScgb3BhY2l0eT0nMC4wNicvJTNFJTNDZWxsaXBzZSBjeD0nMzAwJyBjeT0nMzAwJyByeD0nMTQwJyByeT0nOTAnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmZmZmZmJyBzdHJva2Utd2lkdGg9JzAuNScgb3BhY2l0eT0nMC4wNScvJTNFJTNDZWxsaXBzZSBjeD0nMzAwJyBjeT0nMzAwJyByeD0nMjA1JyByeT0nMTM1JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ZmZmZmZicgc3Ryb2tlLXdpZHRoPScwLjUnIG9wYWNpdHk9JzAuMDQnLyUzRSUzQ2VsbGlwc2UgY3g9JzMwMCcgY3k9JzMwMCcgcng9JzI4MCcgcnk9JzE4NScgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZmZmZmYnIHN0cm9rZS13aWR0aD0nMC41JyBvcGFjaXR5PScwLjAzJy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgLTYwcHggY2VudGVyLCByaWdodCAtNjBweCBjZW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAvLyBHcmFpblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAwJyBoZWlnaHQ9JzMwMCclM0UlM0NmaWx0ZXIgaWQ9J24nJTNFJTNDZmVUdXJidWxlbmNlIHR5cGU9J2ZyYWN0YWxOb2lzZScgYmFzZUZyZXF1ZW5jeT0nLjgnIG51bU9jdGF2ZXM9JzQnIHN0aXRjaFRpbGVzPSdzdGl0Y2gnLyUzRSUzQy9maWx0ZXIlM0UlM0NyZWN0IHdpZHRoPSczMDAnIGhlaWdodD0nMzAwJyBmaWx0ZXI9J3VybCglMjNuKScgb3BhY2l0eT0nLjA0Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbi5oZXJvLXllYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2xhbXAoMTZweCwgNnZ3LCA0MHB4KTtcbiAgcmlnaHQ6IGNsYW1wKDE2cHgsIDh2dywgMTIwcHgpO1xuICB6LWluZGV4OiAxO1xuICBmb250LWZhbWlseTogJ0ZyYXVuY2VzJywgR2VvcmdpYSwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMy4ycmVtLCAxNnZ3LCA3cmVtKTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5oZXJvLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXgtd2lkdGg6IDc4MHB4O1xuICB3aWR0aDogbWluKDc4MHB4LCAxMDAlKTtcbn1cblxuLmhlcm8tbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBmb250LXNpemU6IDAuNjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjIyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjOGFiODlhO1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI4cHg7IGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6ICM4YWI4OWE7XG4gIH1cbn1cblxuLmhlcm8tdGl0bGUge1xuICBmb250LWZhbWlseTogJ0ZyYXVuY2VzJywgR2VvcmdpYSwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMi42cmVtLCA2dncsIDUuNXJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjA7XG4gIGNvbG9yOiAjZjRlZGUwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gIGVtIHsgZm9udC1zdHlsZTogaXRhbGljOyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzhhYjg5YTsgfVxufVxuXG4uaGVyby1zdWIge1xuICBmb250LWZhbWlseTogICdMaWJyZSBCYXNrZXJ2aWxsZScsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMi42dncsIDEuM3JlbSk7XG4gIGNvbG9yOiByZ2JhKDI0NCwyMzcsMjI0LDAuNSk7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBVVElMUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5kaXZpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nOiAwIDh2dztcbiAgbWFyZ2luOiA2MHB4IDA7XG59XG5cbi5kaXZpZGVyLWxpbmUgeyBmbGV4OiAxOyBoZWlnaHQ6IDFweDsgYmFja2dyb3VuZDogcmdiYSgyNywzMSwyOCwwLjEyKTsgfVxuXG4uZGl2aWRlci1tYXJrIHtcbiAgd2lkdGg6IDhweDsgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2IwNWUyODtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnNlY3Rpb24tbnVtYmVyIHtcbiAgZm9udC1mYW1pbHk6ICdGcmF1bmNlcycsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXNpemU6IDVyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiByZ2JhKDI3LDMxLDI4LDAuMDYpO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA0ZW07XG4gIG1hcmdpbi1ib3R0b206IC0xNnB4O1xufVxuXG4uc2VjdGlvbi10YWcge1xuICBmb250LXNpemU6IDAuNjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjIyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjYjA1ZTI4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlY3Rpb24taGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiAnRnJhdW5jZXMnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjhyZW0sIDMuNXZ3LCAyLjZyZW0pO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzFlMzMyNjtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG5cbiAgZW0geyBmb250LXN0eWxlOiBpdGFsaWM7IGNvbG9yOiAjM2Q2YjRmOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBTVE9SWSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zdG9yeS1zZWN0aW9uIHtcbiAgcGFkZGluZzogY2xhbXAoNjBweCwgMTB2dywgODBweCkgY2xhbXAoMjBweCwgOHZ3LCA4MHB4KSAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyNDBweCwgMC45ZnIpIG1pbm1heCgwLCAxLjRmcik7XG4gIGdhcDogY2xhbXAoMzJweCwgNnZ3LCA4MHB4KTtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zdG9yeS1hc2lkZSB7IHBvc2l0aW9uOiBzdGlja3k7IHRvcDogNDBweDsgfVxuXG4uc3RvcnktdGV4dCBwIHtcbiAgZm9udC1mYW1pbHk6ICAnTGlicmUgQmFza2VydmlsbGUnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS44NTtcbiAgY29sb3I6ICMzYTQwNDA7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5wdWxsLXF1b3RlIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjYjA1ZTI4O1xuICBwYWRkaW5nOiA0cHggMCA0cHggMjRweDtcbiAgbWFyZ2luOiAzNnB4IDA7XG5cbiAgcCB7XG4gICAgZm9udC1mYW1pbHk6ICdGcmF1bmNlcycsIEdlb3JnaWEsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjogIzFlMzMyNjtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBTVEFUUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zdGF0cy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzFlMzMyNjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IGNsYW1wKDYwcHgsIDEydncsIDkwcHgpIDA7XG4gIHBhZGRpbmc6IGNsYW1wKDYwcHgsIDEydncsIDkwcHgpIGNsYW1wKDIwcHgsIDh2dywgOTBweCk7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMDAnIGhlaWdodD0nMzAwJyUzRSUzQ2ZpbHRlciBpZD0nbiclM0UlM0NmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScuOCcgbnVtT2N0YXZlcz0nNCcgc3RpdGNoVGlsZXM9J3N0aXRjaCcvJTNFJTNDL2ZpbHRlciUzRSUzQ3JlY3Qgd2lkdGg9JzMwMCcgaGVpZ2h0PSczMDAnIGZpbHRlcj0ndXJsKCUyM24pJyBvcGFjaXR5PScuMDQnLyUzRSUzQy9zdmclM0VcIik7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuLnN0YXRzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcbiAgZ2FwOiAzMnB4IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc3RhdC1pdGVtIHtcbiAgcGFkZGluZzogMCAxMnB4IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zdGF0LW51bWJlciB7XG4gIGZvbnQtZmFtaWx5OiAnRnJhdW5jZXMnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgZm9udC1zaXplOiBjbGFtcCgyLjhyZW0sIDV2dywgNC41cmVtKTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICNmNGVkZTA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zdGF0LWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHJnYmEoMjQ0LDIzNywyMjQsMC40NSk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xuICAuc3RhdHMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xuICB9XG5cbiAgLnN0YXQtaXRlbSB7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLXJpZ2h0OiBub25lOyB9XG4gICAgJjpmaXJzdC1jaGlsZCB7IHBhZGRpbmctbGVmdDogMDsgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBWQUxVRVMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udmFsdWVzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwIGNsYW1wKDIwcHgsIDh2dywgODBweCkgY2xhbXAoNjBweCwgMTB2dywgOTBweCk7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnZhbHVlcy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGdhcDogMjRweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xufVxuXG4udmFsdWVzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcbiAgZ2FwOiAxcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjcsMzEsMjgsMC4wOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMjgsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi52YWx1ZS1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjVlZTtcbiAgcGFkZGluZzogNDBweCAzMnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTRweDtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogI2IwNWUyODtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmNGVkZTA7XG4gICAgJjo6YmVmb3JlIHsgdHJhbnNmb3JtOiBzY2FsZVgoMSk7IH1cbiAgICAudmFsdWUtaWNvbiB7IHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxuICB9XG59XG5cbi52YWx1ZS1pY29uIHtcbiAgd2lkdGg6IDU0cHg7XG4gIGhlaWdodDogNTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNzYsOTQsNDAsMC4xMik7XG4gIGNvbG9yOiAjYjA1ZTI4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGJhY2tncm91bmQgMC4zcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxufVxuXG4udmFsdWUtdGl0bGUge1xuICBmb250LWZhbWlseTogJ0ZyYXVuY2VzJywgR2VvcmdpYSwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzFlMzMyNjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG59XG5cbi52YWx1ZS1kZXNjIHtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBjb2xvcjogIzhhOWQ4ZTtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgbWFyZ2luOiAwO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgVEVBTSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50ZWFtLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZWRlNGQzO1xuICBwYWRkaW5nOiBjbGFtcCg2MHB4LCAxMnZ3LCA5MHB4KSBjbGFtcCgyMHB4LCA4dncsIDkwcHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCclM0UlM0NyZWN0IHg9JzI5JyB5PScwJyB3aWR0aD0nMScgaGVpZ2h0PSc2MCcgZmlsbD0nJTIzMWIxZjFjJyBvcGFjaXR5PScwLjAzJy8lM0UlM0NyZWN0IHg9JzAnIHk9JzI5JyB3aWR0aD0nNjAnIGhlaWdodD0nMScgZmlsbD0nJTIzMWIxZjFjJyBvcGFjaXR5PScwLjAzJy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbi50ZWFtLWhlYWRlci13cmFwIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi50ZWFtLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI0MHB4LCAxZnIpKTtcbiAgZ2FwOiBjbGFtcCgxNnB4LCA0dncsIDMycHgpO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiA0OHB4IGF1dG8gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4udGVhbS1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjVlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGJveC1zaGFkb3cgMC4zNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgIGJveC1zaGFkb3c6IDAgMjBweCA0OHB4IHJnYmEoMjcsMzEsMjgsMC4xNCk7XG5cbiAgICAudGVhbS1pbWcgaW1nIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgfVxuICB9XG59XG5cbi50ZWFtLWltZyB7XG4gIGhlaWdodDogMjYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICAgIGZpbHRlcjogc2VwaWEoMTUlKSBzYXR1cmF0ZSg4NSUpO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDI3LDMxLDI4LDAuNTUpIDAlLCB0cmFuc3BhcmVudCA1NSUpO1xuICB9XG59XG5cbi50ZWFtLXJvbGUtdGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE0cHg7IGxlZnQ6IDE0cHg7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMC42MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmNGVkZTA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjcsMzEsMjgsMC42KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xMik7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4udGVhbS1ib2R5IHtcbiAgcGFkZGluZzogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBmbGV4OiAxO1xufVxuXG4udGVhbS1uYW1lIHtcbiAgZm9udC1mYW1pbHk6ICdGcmF1bmNlcycsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMWUzMzI2O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbn1cblxuLnRlYW0tYmlvIHtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBjb2xvcjogIzhhOWQ4ZTtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgbWFyZ2luOiAwO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgU0FGRVRZIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnNhZmV0eS1zZWN0aW9uIHtcbiAgcGFkZGluZzogY2xhbXAoNjBweCwgMTJ2dywgOTBweCkgY2xhbXAoMjBweCwgOHZ3LCA5MHB4KTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc2FmZXR5LWlubmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjYwcHgsIDAuOTVmcikgbWlubWF4KDAsIDEuMWZyKTtcbiAgZ2FwOiBjbGFtcCgzMnB4LCA2dncsIDgwcHgpO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5zYWZldHktYXNpZGUgLnNlY3Rpb24taGVhZGluZyB7IG1hcmdpbi1ib3R0b206IDA7IH1cblxuLnNhZmV0eS1kZXNjIHtcbiAgZm9udC1mYW1pbHk6ICAnTGlicmUgQmFza2VydmlsbGUnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBsaW5lLWhlaWdodDogMS44O1xuICBjb2xvcjogIzNhNDA0MDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2FmZXR5LWxpc3QgeyBsaXN0LXN0eWxlOiBub25lOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbi5zYWZldHktaXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCAxZnI7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI3LDMxLDI4LDAuMDgpO1xuICB0cmFuc2l0aW9uOiBwYWRkaW5nLWxlZnQgMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG5cbiAgJjpmaXJzdC1jaGlsZCB7IGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDI4LDAuMDgpOyB9XG5cbiAgJjpob3ZlciB7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgLnNhZmV0eS1udW0geyBjb2xvcjogI2IwNWUyODsgfVxuICB9XG59XG5cbi5zYWZldHktbnVtIHtcbiAgZm9udC1mYW1pbHk6ICdGcmF1bmNlcycsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHJnYmEoMjcsMzEsMjgsMC4xKTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbi5zYWZldHktdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgY29sb3I6ICMzYTQwNDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG5cbiAgc3Ryb25nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LWZhbWlseTogJ0ZyYXVuY2VzJywgR2VvcmdpYSwgc2VyaWY7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMxZTMzMjY7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBGT09URVIgQ1RBIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZvb3Rlci1jdGEge1xuICBiYWNrZ3JvdW5kOiAjMWUzMzI2O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IGNsYW1wKDYwcHgsIDEydncsIDkwcHgpIGNsYW1wKDIwcHgsIDh2dywgOTBweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICdTSU5DRSAyMDExJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlOyB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBmb250LWZhbWlseTogJ0ZyYXVuY2VzJywgR2VvcmdpYSwgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHZ3O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMyk7XG4gICAgbGluZS1oZWlnaHQ6IDAuODU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA0ZW07XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxufVxuXG4uZm9vdGVyLWN0YS1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWF4LXdpZHRoOiA1NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb290ZXItY3RhIGgyIHtcbiAgZm9udC1mYW1pbHk6ICdGcmF1bmNlcycsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXNpemU6IGNsYW1wKDEuNnJlbSwgMy41dncsIDIuOHJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjZjRlZGUwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbn1cblxuLmZvb3Rlci1jdGEgcCB7XG4gIGNvbG9yOiByZ2JhKDI0NCwyMzcsMjI0LDAuNSk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMS43O1xuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICBmb250LWZhbWlseTogICdMaWJyZSBCYXNrZXJ2aWxsZScsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5jdGEtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgYmFja2dyb3VuZDogI2IwNWUyODtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxNHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzLCB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGJveC1zaGFkb3cgMC4ycztcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjYzk3MDQwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAyOHB4IHJnYmEoMTc2LDk0LDQwLDAuNCk7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFJFU1BPTlNJVkUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnN0b3J5LXNlY3Rpb24gIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IGdhcDogMzJweDsgfVxuICAuc3RvcnktYXNpZGUgICAgeyBwb3NpdGlvbjogc3RhdGljOyB9XG4gIC5zdGF0cy1ncmlkICAgICB7IGdhcDogMjRweDsgfVxuICAuc3RhdC1pdGVtICAgICAge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcbiAgICBwYWRkaW5nOiAwIDAgMjRweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuICB9XG4gIC52YWx1ZXMtaGVhZGVyICB7IGdhcDogMTJweDsgfVxuICAuc2FmZXR5LWlubmVyICAgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgZ2FwOiAzMnB4OyB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVybyB7IHBhZGRpbmc6IDYwcHggNXZ3IDQ4cHg7IG1pbi1oZWlnaHQ6IDQyMHB4OyB9XG4gIC5zdGF0cy1zZWN0aW9uLCAudGVhbS1zZWN0aW9uLCAuZm9vdGVyLWN0YSB7IHBhZGRpbmctaW5saW5lOiA1dnc7IH1cbiAgLnN0b3J5LXNlY3Rpb24sIC52YWx1ZXMtc2VjdGlvbiwgLnNhZmV0eS1zZWN0aW9uLCAuZGl2aWRlciB7IHBhZGRpbmctaW5saW5lOiA1dnc7IH1cbiAgLmhlcm8teWVhciB7IGZvbnQtc2l6ZTogY2xhbXAoMi44cmVtLCAyOHZ3LCA0LjZyZW0pOyB0b3A6IDE2cHg7IHJpZ2h0OiA1dnc7IH1cbiAgLnNlY3Rpb24tbnVtYmVyIHsgZm9udC1zaXplOiAzLjJyZW07IH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC52YWx1ZS1jYXJkIHsgcGFkZGluZzogMjhweCAyMnB4OyB9XG4gIC50ZWFtLWltZyB7IGhlaWdodDogMjIwcHg7IH1cbiAgLnNhZmV0eS1pdGVtIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNnB4IDFmcjsgZ2FwOiAxMnB4OyB9XG4gIC5mb290ZXItY3RhOjpiZWZvcmUgeyBmb250LXNpemU6IDM2dnc7IH1cbiAgLmN0YS1idG4geyB3aWR0aDogMTAwJTsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_about_about-module_ts.js.map