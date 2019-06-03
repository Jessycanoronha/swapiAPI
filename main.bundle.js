webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_animations/fadein.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var fadeInAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('fadeInAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 }))
    ])
]);


/***/ }),

/***/ "./src/app/_animations/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fadein_animation__ = __webpack_require__("./src/app/_animations/fadein.animation.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fadein_animation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slideinout_animation__ = __webpack_require__("./src/app/_animations/slideinout.animation.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "./src/app/_animations/slideinout.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export slideInOutAnimation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
// import the required animation functions from the angular animations module

var slideInOutAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('slideInOutAnimation', [
    // end state styles for route container (host)
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        // the view covers the whole screen with a semi tranparent background
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    })),
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
        // styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // start with the content positioned off the right of the screen,
            // -400% is required instead of -100% because the negative position adds to the width of the element
            right: '-400%',
            // start with background opacity set to 0 (invisible)
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // transition the right position to 0 which slides the content into view
            right: 0,
            // transition the background opacity to 0.8 to fade it in
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }))
    ]),
    // route 'leave' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // transition the right position to -400% which slides the content out of view
            right: '-400%',
            // transition the background opacity to 0 to fade it out
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ])
]);


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<audio autoplay loop>\n  <source src=\"https://www.televisiontunes.com/uploads/audio/Star%20Wars%20-%20Imperial%20March.mp3\" type=\"audio/mpeg\">\n</audio>\n\n<div class=\"stars\"></div>\n<div class=\"twinkling\"></div>\n<div class=\"clouds\"></div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes animStar {\n  from {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); }\n  to {\n    -webkit-transform: translateY(-3000px);\n            transform: translateY(-3000px); } }\n\n@keyframes animStar {\n  from {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); }\n  to {\n    -webkit-transform: translateY(-3000px);\n            transform: translateY(-3000px); } }\n\n@keyframes animStar {\n  from {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); }\n  to {\n    -webkit-transform: translateY(-3000px);\n            transform: translateY(-3000px); } }\n\n/* ============================================================================================== \nSED Innovations\nhttps://sed.am\nhttps://mkrtchyan.ga\n================================================================================================= */\n\n* {\n  margin: 0;\n  padding: 0; }\n\nheader {\n  background-color: rgba(33, 33, 33, 0.9);\n  color: #ffffff;\n  display: block;\n  font: 14px/1.3 Arial,sans-serif;\n  height: 50px;\n  position: relative;\n  z-index: 5; }\n\nh2 {\n  margin-top: 30px;\n  text-align: center; }\n\nheader h2 {\n  font-size: 22px;\n  margin: 0 auto;\n  padding: 10px 0;\n  width: 80%;\n  text-align: center; }\n\nheader a, a:visited {\n  text-decoration: none;\n  color: #fcfcfc; }\n\n@keyframes move-twink-back {\n  from {\n    background-position: 0 0; }\n  to {\n    background-position: -10000px 5000px; } }\n\n@-webkit-keyframes move-twink-back {\n  from {\n    background-position: 0 0; }\n  to {\n    background-position: -10000px 5000px; } }\n\n@keyframes move-clouds-back {\n  from {\n    background-position: 0 0; }\n  to {\n    background-position: 10000px 0; } }\n\n@-webkit-keyframes move-clouds-back {\n  from {\n    background-position: 0 0; }\n  to {\n    background-position: 10000px 0; } }\n\n.stars, .twinkling, .clouds {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  display: block; }\n\n.stars {\n  background: #000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;\n  z-index: 0;\n  -moz-animation: move-twink-back 200s linear infinite;\n  -ms-animation: move-twink-back 200s linear infinite; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sw';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_button_button_component__ = __webpack_require__("./src/app/components/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__categories_categories_component__ = __webpack_require__("./src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__people_people_component__ = __webpack_require__("./src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_loading_loading_component__ = __webpack_require__("./src/app/components/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__starships_starships_component__ = __webpack_require__("./src/app/starships/starships.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__species_species_component__ = __webpack_require__("./src/app/species/species.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__planets_planets_component__ = __webpack_require__("./src/app/planets/planets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_characteristics_characteristics_component__ = __webpack_require__("./src/app/components/characteristics/characteristics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_name_name_component__ = __webpack_require__("./src/app/components/name/name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shell_shell_component__ = __webpack_require__("./src/app/shell/shell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sobre_sobre_component__ = __webpack_require__("./src/app/sobre/sobre.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_button_button_component__["a" /* ButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__categories_categories_component__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__people_people_component__["a" /* PeopleComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_loading_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__starships_starships_component__["a" /* StarshipsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__species_species_component__["a" /* SpeciesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__planets_planets_component__["a" /* PlanetsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_characteristics_characteristics_component__["a" /* CharacteristicsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_name_name_component__["a" /* NameComponent */],
                __WEBPACK_IMPORTED_MODULE_18__shell_shell_component__["a" /* ShellComponent */],
                __WEBPACK_IMPORTED_MODULE_19__sobre_sobre_component__["a" /* SobreComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* AppRouting */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shell_shell_component__ = __webpack_require__("./src/app/shell/shell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_categories_component__ = __webpack_require__("./src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__people_people_component__ = __webpack_require__("./src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__starships_starships_component__ = __webpack_require__("./src/app/starships/starships.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__species_species_component__ = __webpack_require__("./src/app/species/species.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__planets_planets_component__ = __webpack_require__("./src/app/planets/planets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sobre_sobre_component__ = __webpack_require__("./src/app/sobre/sobre.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var children = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_3__categories_categories_component__["a" /* CategoriesComponent */] },
    { path: 'people', component: __WEBPACK_IMPORTED_MODULE_5__people_people_component__["a" /* PeopleComponent */] },
    { path: 'starships', component: __WEBPACK_IMPORTED_MODULE_6__starships_starships_component__["a" /* StarshipsComponent */] },
    { path: 'species', component: __WEBPACK_IMPORTED_MODULE_7__species_species_component__["a" /* SpeciesComponent */] },
    { path: 'planets', component: __WEBPACK_IMPORTED_MODULE_8__planets_planets_component__["a" /* PlanetsComponent */] },
    { path: 'sobre', component: __WEBPACK_IMPORTED_MODULE_9__sobre_sobre_component__["a" /* SobreComponent */] }
];
var AppRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'starwars'
    },
    {
        path: 'starwars',
        component: __WEBPACK_IMPORTED_MODULE_0__shell_shell_component__["a" /* ShellComponent */],
        children: children
    }
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(AppRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section--align-center\">\n  <h2 class=\"section__title\">Selecione:</h2>\n  <sw-button [routerLink]=\"['/starwars/species']\"> Espécies</sw-button>\n  <sw-button [routerLink]=\"['/starwars/planets']\"> Planetas</sw-button>\n  <sw-button [routerLink]=\"['/starwars/starships']\">Naves estelares</sw-button>\n  <sw-button [routerLink]=\"['/starwars/people']\">Pessoas</sw-button>\n\n  <sw-button [routerLink]=\"['/starwars/sobre']\">Sobre mim</sw-button>\n\n</section>\n\n<sw-footer></sw-footer>\n"

/***/ }),

/***/ "./src/app/categories/categories.component.scss":
/***/ (function(module, exports) {

module.exports = ".section__title {\n  color: #fc420a;\n  font-size: 1.25rem;\n  font-weight: 500; }\n"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_index__ = __webpack_require__("./src/app/_animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () { };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-categories',
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_index__["a" /* fadeInAnimation */]],
            template: __webpack_require__("./src/app/categories/categories.component.html"),
            styles: [__webpack_require__("./src/app/categories/categories.component.scss")],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/button/button.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"button \">\n  <ng-content></ng-content>\n</button>\n"

/***/ }),

/***/ "./src/app/components/button/button.component.scss":
/***/ (function(module, exports) {

module.exports = ".button {\n  padding: 0.7rem 0rem;\n  width: 15rem;\n  border: 2px solid #FFFFFF;\n  background: transparent;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-family: \"Poller One\", cursive;\n  color: #FFFFFF;\n  font-size: 1rem;\n  font-weight: 500; }\n  @media screen and (max-width: 576px) {\n    .button {\n      width: 17rem; } }\n  .button--rectangle-out {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: perspective(1px) translateZ(0);\n  transform: perspective(1px) translateZ(0);\n  -webkit-box-shadow: 0 0 1px transparent;\n          box-shadow: 0 0 1px transparent;\n  position: relative;\n  background: #FFE62C;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s; }\n  .button--rectangle-out:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #FFFFFF;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  -webkit-transition-property: transform;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out; }\n  .button--rectangle-out:hover,\n.button--rectangle-out:active {\n  color: #FFFFFF; }\n  .button--rectangle-out:hover:before,\n.button--rectangle-out:active:before {\n  -webkit-transform: scale(1);\n  transform: scale(1); }\n"

/***/ }),

/***/ "./src/app/components/button/button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () { };
    ButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-button',
            template: __webpack_require__("./src/app/components/button/button.component.html"),
            styles: [__webpack_require__("./src/app/components/button/button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/characteristics/characteristics.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"characteristics\">\n  <ng-content></ng-content>\n</span>\n"

/***/ }),

/***/ "./src/app/components/characteristics/characteristics.component.scss":
/***/ (function(module, exports) {

module.exports = ".characteristics {\n  color: #FFFFFF;\n  font-size: 1rem;\n  font-weight: 500; }\n"

/***/ }),

/***/ "./src/app/components/characteristics/characteristics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacteristicsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharacteristicsComponent = /** @class */ (function () {
    function CharacteristicsComponent() {
    }
    CharacteristicsComponent.prototype.ngOnInit = function () { };
    CharacteristicsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-characteristics',
            template: __webpack_require__("./src/app/components/characteristics/characteristics.component.html"),
            styles: [__webpack_require__("./src/app/components/characteristics/characteristics.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CharacteristicsComponent);
    return CharacteristicsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <small class=\"footer__small\">Jéssyca Noronha © 2019 - Todos os Direitos Reservados</small>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  margin-bottom: 15px;\n  text-align: center; }\n\n.footer__small {\n  font-size: 0.625rem; }\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "    <h3>Buscando dados em uma galáxia muito, muito distante...</h3>\n    <div class=\"spinner\">\n            <div class=\"double-bounce1\"></div>\n            <div class=\"double-bounce2\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/loading/loading.component.scss":
/***/ (function(module, exports) {

module.exports = ".spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 100px auto; }\n\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out; }\n\n.double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n"

/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () { };
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-loading',
            template: __webpack_require__("./src/app/components/loading/loading.component.html"),
            styles: [__webpack_require__("./src/app/components/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/name/name.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"name\">\n  <ng-content></ng-content>\n</h3>\n"

/***/ }),

/***/ "./src/app/components/name/name.component.scss":
/***/ (function(module, exports) {

module.exports = ".name {\n  background-color: #FFFFFF;\n  padding: 0.875rem;\n  text-transform: uppercase;\n  color: #fc420a;\n  font-size: 1.25rem;\n  font-weight: 700; }\n"

/***/ }),

/***/ "./src/app/components/name/name.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NameComponent = /** @class */ (function () {
    function NameComponent() {
    }
    NameComponent.prototype.ngOnInit = function () { };
    NameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-name',
            template: __webpack_require__("./src/app/components/name/name.component.html"),
            styles: [__webpack_require__("./src/app/components/name/name.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NameComponent);
    return NameComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"section--align-center\">\n  <img class=\"section__logo\" src=\"https://i.ibb.co/zHNsCzy/yoda.png\" alt=\"Logo StarWars \" title=\"“Luke: Mas eu não acredito!\n  Yoda: É por isso que você fracassa.\">\n  <sw-button [routerLink]=\"['/starwars/categories']\">Iniciar</sw-button>\n</header>\n\n<sw-footer></sw-footer>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".section__logo {\n  width: 30rem;\n  margin-bottom: 1rem; }\n  @media screen and (max-width: 576px) {\n    .section__logo {\n      width: 18rem; } }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_index__ = __webpack_require__("./src/app/_animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-header',
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_index__["a" /* fadeInAnimation */]],
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<sw-loading class=\"section--align-center\" *ngIf=\"loading\"></sw-loading>\n\n<section class=\"section--align-center\" *ngIf=\"!loading\">\n  <sw-name>{{ person.name }}</sw-name>\n\n  <div class=\"category\">\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Peso:</sw-characteristics>\n      {{ person.height }}\n    </p>\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Mass:</sw-characteristics>\n      {{ person.mass }}\n    </p>\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Cor do cabelo:</sw-characteristics>\n      {{ person.hair_color }}\n    </p>\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Cor da pele:</sw-characteristics>\n      {{ person.skin_color }}\n    </p>\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Cor dos olhos:</sw-characteristics>\n      {{ person.eye_color }}\n    </p>\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Gênero:</sw-characteristics>\n      {{ person.gender }}\n    </p>\n    <p class=\"category__paragraph--yellow\">\n      Aparece em {{ person.films?.length }} {{person.films?.length === 1 ? 'filme' : 'filmes'}}.\n    </p>\n  </div>\n  <sw-button (click)=\"getRandomPerson();\">Próximo</sw-button>\n  <sw-button [routerLink]=\"['/starwars/categories']\">Voltar</sw-button>\n</section>\n\n<sw-footer></sw-footer>\n"

/***/ }),

/***/ "./src/app/people/people.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(dataService) {
        this.dataService = dataService;
        this.category = 'people';
    }
    PeopleComponent.prototype.ngOnInit = function () {
        this.getRandomPerson();
    };
    PeopleComponent.prototype.getRandomPerson = function () {
        var _this = this;
        this.loading = true;
        this.dataService.getPageData(this.category, 1).subscribe(function (data) {
            var peoplePerPage = data['results'].length;
            var randonPersonPosition = Math.floor(Math.random() * data['count'] + 1);
            var randomIndex = randonPersonPosition - 1;
            var positionAtPage = randomIndex -
                (Math.ceil(randonPersonPosition / peoplePerPage) - 1) * peoplePerPage;
            var randomPersonPage = Math.ceil(randonPersonPosition / peoplePerPage);
            _this.dataService
                .getPageData(_this.category, randomPersonPage)
                .subscribe(function (data) {
                _this.person = data['results'][positionAtPage];
                _this.loading = false;
            });
        });
    };
    PeopleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-people',
            template: __webpack_require__("./src/app/people/people.component.html"),
            styles: [__webpack_require__("./src/app/people/people.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/planets/planets.component.html":
/***/ (function(module, exports) {

module.exports = "<sw-loading class=\"section--align-center\" *ngIf=\"loading\"></sw-loading>\n\n<section class=\"section--align-center\" *ngIf=\"!loading\">\n  <sw-name>{{ planet.name }}</sw-name>\n\n  <div class=\"category\">\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Diâmetro:</sw-characteristics>\n      {{ planet.diameter }}\n    </p>\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Clima:</sw-characteristics>\n      {{ planet.climate }}\n    </p>\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Gravidade:</sw-characteristics>\n      {{ planet.gravity }}\n    </p>\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Terreno:</sw-characteristics>\n      {{ planet.terrain }}\n    </p>\n    \n    <p class=\"category__paragraph\">\n      <sw-characteristics>População:</sw-characteristics>\n      {{ planet.population }}\n    </p>\n    <p class=\"category__paragraph--yellow\">\n      Aparece em {{ planet.films?.length }} {{planet.films?.length === 1 ? 'filmes' : 'filmes'}}.\n    </p>\n  </div>\n  <sw-button (click)=\"getRandomPlanet();\">Próximo</sw-button>\n  <sw-button [routerLink]=\"['/starwars/categories']\">Voltar</sw-button>\n</section>\n\n<sw-footer></sw-footer>\n"

/***/ }),

/***/ "./src/app/planets/planets.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/planets/planets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlanetsComponent = /** @class */ (function () {
    function PlanetsComponent(dataService) {
        this.dataService = dataService;
        this.category = 'planets';
    }
    PlanetsComponent.prototype.ngOnInit = function () {
        this.getRandomPlanet();
    };
    PlanetsComponent.prototype.getRandomPlanet = function () {
        var _this = this;
        this.loading = true;
        this.dataService.getPageData(this.category, 1).subscribe(function (data) {
            var planetsPerPage = data['results'].length;
            var randomPlanetPosition = Math.floor(Math.random() * data['count'] + 1);
            var randomIndex = randomPlanetPosition - 1;
            var positionAtPage = randomIndex -
                (Math.ceil(randomPlanetPosition / planetsPerPage) - 1) * planetsPerPage;
            var randomPlanetPage = Math.ceil(randomPlanetPosition / planetsPerPage);
            _this.dataService
                .getPageData(_this.category, randomPlanetPage)
                .subscribe(function (data) {
                _this.planet = data['results'][positionAtPage];
                _this.loading = false;
            });
        });
    };
    PlanetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-planets',
            template: __webpack_require__("./src/app/planets/planets.component.html"),
            styles: [__webpack_require__("./src/app/planets/planets.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], PlanetsComponent);
    return PlanetsComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = 'https://swapi.co/api/';
    }
    DataService.prototype.getPageData = function (category, pageNumber) {
        return this.http
            .get(this.url + category + '/?page=' + pageNumber)
            .map(function (data) {
            return data;
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/shell/shell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShellComponent = /** @class */ (function () {
    function ShellComponent() {
    }
    ShellComponent.prototype.ngOnInit = function () { };
    ShellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-shell',
            template: "\n    <router-outlet></router-outlet>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ShellComponent);
    return ShellComponent;
}());



/***/ }),

/***/ "./src/app/sobre/sobre.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\nbody {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #000;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .fade {\r\n    position: relative;\r\n    width: 100%;\r\n    min-height: 60vh;\r\n    top: -25px;\r\n    background-image: -webkit-gradient(linear, left bottom, left top, from(transparent), color-stop(75%, black));\r\n    background-image: linear-gradient(0deg, transparent, black 75%);\r\n    z-index: 1;\r\n  }\r\n  \r\n  .star-wars {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    position: relative;\r\n    height: 800px;\r\n    color: #feda4a;\r\n    font-family: 'Pathway Gothic One', sans-serif;\r\n    font-size: 500%;\r\n    font-weight: 600;\r\n    letter-spacing: 6px;\r\n    line-height: 150%;\r\n    -webkit-perspective: 400px;\r\n            perspective: 400px;\r\n    text-align: justify;\r\n  }\r\n  \r\n  .crawl {\r\n    position: relative;\r\n    top: 99999px;\r\n    -webkit-transform-origin: 50% 100%;\r\n            transform-origin: 50% 100%;\r\n    -webkit-animation: crawl 60s linear;\r\n            animation: crawl 60s linear;\r\n  }\r\n  \r\n  .crawl > .title {\r\n    font-size: 90%;\r\n    text-align: center;\r\n  }\r\n  \r\n  .crawl > .title h1 {\r\n    margin: 0 0 100px;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  @-webkit-keyframes crawl {\r\n      0% {\r\n      top: -100px;\r\n      -webkit-transform: rotateX(20deg)  translateZ(0);\r\n              transform: rotateX(20deg)  translateZ(0);\r\n    }\r\n      100% { \r\n      top: -6000px;\r\n      -webkit-transform: rotateX(25deg) translateZ(-2500px);\r\n              transform: rotateX(25deg) translateZ(-2500px);\r\n    }\r\n  }\r\n  \r\n  @keyframes crawl {\r\n      0% {\r\n      top: -100px;\r\n      -webkit-transform: rotateX(20deg)  translateZ(0);\r\n              transform: rotateX(20deg)  translateZ(0);\r\n    }\r\n      100% { \r\n      top: -6000px;\r\n      -webkit-transform: rotateX(25deg) translateZ(-2500px);\r\n              transform: rotateX(25deg) translateZ(-2500px);\r\n    }\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/sobre/sobre.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"fade\"></div>\n\n<section class=\"star-wars\">\n  <div class=\"crawl\">\n    <div class=\"title\">\n      <p>Episode I</p>\n      <h1>A aventura começa</h1>\n    </div>\n    \n    <p>Há muito tempo atrás, em uma galáxia muito, muito (pera, nem tão distante kkkk), existia uma jovem sonhadora chamada Jéssyca.</p>\n      \n      <p>Aos 22 anos ela saiu para começar a sua jornada para se tornar uma jedi da programação.\n         Já astuta e bem habilidosa, decidiu que iria treinar com os maiores jedis da galáxia, os da B2W-bit. </p>\n\n    <p>Com muita dificuldade, completou o desafio proposto para iniciar o seu treinamento e espera ansiosamente pra começar essa mais nova aventura….</p>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/sobre/sobre.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SobreComponent = /** @class */ (function () {
    function SobreComponent() {
    }
    SobreComponent.prototype.ngOnInit = function () {
    };
    SobreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-sobre',
            template: __webpack_require__("./src/app/sobre/sobre.component.html"),
            styles: [__webpack_require__("./src/app/sobre/sobre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SobreComponent);
    return SobreComponent;
}());



/***/ }),

/***/ "./src/app/species/species.component.html":
/***/ (function(module, exports) {

module.exports = "<sw-loading class=\"section--align-center\" *ngIf=\"loading\"></sw-loading>\n\n<section class=\"section--align-center\" *ngIf=\"!loading\">\n  <sw-name>{{ specie.name }}</sw-name>\n\n  <div class=\"category\">\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Classificação:</sw-characteristics>\n      {{ specie.classification }}\n    </p>\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Designação:</sw-characteristics>\n      {{ specie.designation }}\n    </p>\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Altura média:</sw-characteristics>\n      {{ specie.average_height }}\n    </p>\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Cor da pele:</sw-characteristics>\n      {{ specie.skin_colors }}\n    </p>\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Tempo médio de vida:</sw-characteristics>\n      {{ specie.average_lifespan }}\n    </p>\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Linguagem:</sw-characteristics>\n      <span class=\"subcategory\">:</span>\n      {{ specie.language }}\n    </p>\n    <p class=\"category__paragraph--yellow\">\n      Aparece em {{ specie.films?.length }} {{specie.films?.length === 1 ? 'filme' : 'filmes'}}.\n    </p>\n  </div>\n  <sw-button (click)=\"getRandomSpecie();\">Próximo</sw-button>\n  <sw-button [routerLink]=\"['/starwars/categories']\">Voltar</sw-button>\n</section>\n\n<sw-footer></sw-footer>\n"

/***/ }),

/***/ "./src/app/species/species.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/species/species.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeciesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeciesComponent = /** @class */ (function () {
    function SpeciesComponent(dataService) {
        this.dataService = dataService;
        this.category = 'species';
    }
    SpeciesComponent.prototype.ngOnInit = function () {
        this.getRandomSpecie();
    };
    SpeciesComponent.prototype.getRandomSpecie = function () {
        var _this = this;
        this.loading = true;
        this.dataService.getPageData(this.category, 1).subscribe(function (data) {
            var speciesPerPage = data['results'].length;
            var randomSpeciePosition = Math.floor(Math.random() * data['count'] + 1);
            var randomIndex = randomSpeciePosition - 1;
            var positionAtPage = randomIndex -
                (Math.ceil(randomSpeciePosition / speciesPerPage) - 1) * speciesPerPage;
            var randomSpeciePage = Math.ceil(randomSpeciePosition / speciesPerPage);
            _this.dataService
                .getPageData(_this.category, randomSpeciePage)
                .subscribe(function (data) {
                _this.specie = data['results'][positionAtPage];
                _this.loading = false;
            });
        });
    };
    SpeciesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-species',
            template: __webpack_require__("./src/app/species/species.component.html"),
            styles: [__webpack_require__("./src/app/species/species.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], SpeciesComponent);
    return SpeciesComponent;
}());



/***/ }),

/***/ "./src/app/starships/starships.component.html":
/***/ (function(module, exports) {

module.exports = "<sw-loading class=\"section--align-center\" *ngIf=\"loading\"></sw-loading>\n\n<section class=\"section--align-center\" *ngIf=\"!loading\">\n  <sw-name>{{ starship.name }}</sw-name>\n\n  <div class=\"category\">\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Modelo:</sw-characteristics>\n      {{ starship.model }}\n    </p>\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Manufatura:</sw-characteristics>\n      {{ starship.manufacturer }}\n    </p>\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Tamanho:</sw-characteristics>\n      {{ starship.length }}\n    </p>\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Passageiros:</sw-characteristics>\n      {{ starship.passengers }}\n    </p>\n\n\n    <p class=\"category__paragraph\">\n      <sw-characteristics>Classe da nave estelar:</sw-characteristics>\n      {{ starship.starship_class }}\n    </p>\n    <p class=\"category__paragraph--yellow\">\n     Aparece em {{ starship.films?.length }} {{starship.films?.length === 1 ? 'filme' : 'filmes'}}.\n    </p>\n  </div>\n  <sw-button (click)=\"getRandomStarship();\">Próximo</sw-button>\n  <sw-button [routerLink]=\"['/starwars/categories']\">Voltar</sw-button>\n</section>\n\n<sw-footer></sw-footer>\n"

/***/ }),

/***/ "./src/app/starships/starships.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/starships/starships.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarshipsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StarshipsComponent = /** @class */ (function () {
    function StarshipsComponent(dataService) {
        this.dataService = dataService;
        this.category = 'starships';
    }
    StarshipsComponent.prototype.ngOnInit = function () {
        this.getRandomStarship();
    };
    StarshipsComponent.prototype.getRandomStarship = function () {
        var _this = this;
        this.loading = true;
        this.dataService.getPageData(this.category, 1).subscribe(function (data) {
            var starshipsPerPage = data['results'].length;
            var randomStarshipPosition = Math.floor(Math.random() * data['count'] + 1);
            var randomIndex = randomStarshipPosition - 1;
            var positionAtPage = randomIndex -
                (Math.ceil(randomStarshipPosition / starshipsPerPage) - 1) *
                    starshipsPerPage;
            var randomStarshipPage = Math.ceil(randomStarshipPosition / starshipsPerPage);
            _this.dataService
                .getPageData(_this.category, randomStarshipPage)
                .subscribe(function (data) {
                _this.starship = data['results'][positionAtPage];
                _this.loading = false;
            });
        });
    };
    StarshipsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sw-starships',
            template: __webpack_require__("./src/app/starships/starships.component.html"),
            styles: [__webpack_require__("./src/app/starships/starships.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], StarshipsComponent);
    return StarshipsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map