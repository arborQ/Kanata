webpackJsonp([1],{

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var platform_browser_dynamic_1 = __webpack_require__(173);
var platform_browser_1 = __webpack_require__(85);
var AppComponent = (function () {
    function AppComponent() {
        this.AppName = 'Material';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"demo-layout-transparent mdl-layout mdl-js-layout\">\n    <header class=\"mdl-layout__header\">\n      <div class=\"mdl-layout__header-row\">\n        <span class=\"mdl-layout-title\">{{AppName}}</span>\n        <div class=\"mdl-layout-spacer\"></div>\n        <nav class=\"mdl-navigation\">\n          <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n          <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n          <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n          <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n        </nav>\n      </div>\n    </header>\n    <div class=\"mdl-layout__drawer\">\n      <span class=\"mdl-layout-title\">{{AppName}}</span>\n      <nav class=\"mdl-navigation\">\n        <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n        <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n        <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n        <a class=\"mdl-navigation__link\" href=\"\">Link</a>\n      </nav>\n    </div>\n    <main class=\"mdl-layout__content\">\n    </main>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [AppComponent],
            imports: [platform_browser_1.BrowserModule],
            declarations: [
                AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);


/***/ })

},[924]);
//# sourceMappingURL=app.js.map?_=3bb0c6c244be8691841e