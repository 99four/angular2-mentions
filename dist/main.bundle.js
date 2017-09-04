webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Angular Mentions</h1>\n\n<p>Simple Angular mentions inspired by <a href=\"http://jeff-collins.github.io/ment.io/#/\">Ment.io</a>.</p>\n<p style=\"color:grey\">Supports auto-complete for mentions in text input fields, text areas,\nand content editable fields. Try entering some @names below.</p>\n \n<h3>Minimal</h3>\n<input [mention]=\"items\" class=\"form-control\" type=\"text\">\n\n<!-- <app-demo-async></app-demo-async> -->\n\n<!-- <app-demo-options></app-demo-options> -->\n\n<h3>Textarea</h3>\n<textarea [mention]=\"items\" class=\"form-control\" cols=\"60\" rows=\"4\"></textarea>\n\n<h3>Content Editable</h3>\n<div [mention]=\"items\" class=\"form-control\" contenteditable=\"true\" style=\"border:1px lightgrey solid;min-height:88px\"></div>\n\n<h3>Embedded Editor</h3>\n<app-demo-tinymce></app-demo-tinymce>\n\n<br><p style=\"color:grey\">angular2-mentions on <a href=\"\">Github</a></p>\n<a href=\"https://github.com/dmacfarlane/angular2-mentions\"><img style=\"position: absolute; top: 0; right: 0; border: 0;\" src=\"https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67\" alt=\"Fork me on GitHub\" data-canonical-src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png\"></a>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_names__ = __webpack_require__("../../../../../src/app/common-names.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Demo app showing usage of the mentions directive.
 */
var AppComponent = (function () {
    function AppComponent() {
        this.items = __WEBPACK_IMPORTED_MODULE_1__common_names__["a" /* COMMON_NAMES */];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_async_in_memory_data_service__ = __webpack_require__("../../../../../src/app/demo-async/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mention_mention_module__ = __webpack_require__("../../../../../src/mention/mention.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__demo_async_demo_async_component__ = __webpack_require__("../../../../../src/app/demo-async/demo-async.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__demo_options_demo_options_component__ = __webpack_require__("../../../../../src/app/demo-options/demo-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__demo_tinymce_demo_tinymce_component__ = __webpack_require__("../../../../../src/app/demo-tinymce/demo-tinymce.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Imports for loading & configuring the in-memory web api







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__demo_async_in_memory_data_service__["a" /* InMemoryDataService */], { delay: 500 }),
            __WEBPACK_IMPORTED_MODULE_6__mention_mention_module__["a" /* MentionModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__demo_async_demo_async_component__["a" /* DemoAsyncComponent */],
            __WEBPACK_IMPORTED_MODULE_8__demo_options_demo_options_component__["a" /* DemoOptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__demo_tinymce_demo_tinymce_component__["a" /* DemoTinymceComponent */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common-names.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMMON_NAMES; });
var COMMON_NAMES = ["Noah", "Liam", "Mason", "Jacob", "William", "Ethan", "Michael", "Alexander", "James", "Daniel", "Elijah", "Benjamin", "Logan", "Aiden", "Jayden", "Matthew", "Jackson", "David", "Lucas", "Joseph", "Anthony", "Andrew", "Samuel", "Gabriel", "Joshua", "John", "Carter", "Luke", "Dylan", "Christopher", "Isaac", "Oliver", "Henry", "Sebastian", "Caleb", "Owen", "Ryan", "Nathan", "Wyatt", "Hunter", "Jack", "Christian", "Landon", "Jonathan", "Levi", "Jaxon", "Julian", "Isaiah", "Eli", "Aaron", "Charles", "Connor", "Cameron", "Thomas", "Jordan", "Jeremiah", "Nicholas", "Evan", "Adrian", "Gavin", "Robert", "Brayden", "Grayson", "Josiah", "Colton", "Austin", "Angel", "Jace", "Dominic", "Kevin", "Brandon", "Tyler", "Parker", "Ayden", "Jason", "Jose", "Ian", "Chase", "Adam", "Hudson", "Nolan", "Zachary", "Easton", "Blake", "Jaxson", "Cooper", "Lincoln", "Xavier", "Bentley", "Kayden", "Carson", "Brody", "Asher", "Nathaniel", "Ryder", "Justin", "Leo", "Juan", "Luis", "Camden", "Emma", "Olivia", "Sophia", "Isabella", "Ava", "Mia", "Emily", "Abigail", "Madison", "Charlotte", "Harper", "Sofia", "Avery", "Elizabeth", "Amelia", "Evelyn", "Ella", "Chloe", "Victoria", "Aubrey", "Grace", "Zoey", "Natalie", "Addison", "Lillian", "Brooklyn", "Lily", "Hannah", "Layla", "Scarlett", "Aria", "Zoe", "Samantha", "Anna", "Leah", "Audrey", "Ariana", "Allison", "Savannah", "Arianna", "Camila", "Penelope", "Gabriella", "Claire", "Aaliyah", "Sadie", "Riley", "Skylar", "Nora", "Sarah", "Hailey", "Kaylee", "Paisley", "Kennedy", "Ellie", "Peyton", "Annabelle", "Caroline", "Madelyn", "Serenity", "Aubree", "Lucy", "Alexa", "Alexis", "Nevaeh", "Stella", "Violet", "Genesis", "Mackenzie", "Bella", "Autumn", "Mila", "Kylie", "Maya", "Piper", "Alyssa", "Taylor", "Eleanor", "Melanie", "Naomi", "Faith", "Eva", "Katherine", "Lydia", "Brianna", "Julia", "Ashley", "Khloe", "Madeline", "Ruby", "Sophie", "Alexandra", "London", "Lauren", "Gianna", "Isabelle", "Alice", "Vivian", "Hadley", "Jasmine"];
//# sourceMappingURL=common-names.js.map

/***/ }),

/***/ "../../../../../src/app/demo-async/demo-async.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Minimal Async</h3>\n<input [mention]=\"httpItems | async\" (searchTerm)='search($event)' class=\"form-control\" type=\"text\">\n"

/***/ }),

/***/ "../../../../../src/app/demo-async/demo-async.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoAsyncComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DemoAsyncComponent = (function () {
    // this should be in a separate demo-async.service.ts file
    function DemoAsyncComponent(http) {
        this.http = http;
        this.searchTermStream = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    DemoAsyncComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpItems = this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.getItems(term); });
    };
    DemoAsyncComponent.prototype.search = function (term) {
        this.searchTermStream.next(term);
    };
    DemoAsyncComponent.prototype.getItems = function (term) {
        console.log('getItems:', term);
        // return this.http.get('api/names') // get all names
        return this.http.get('api/objects?label=' + term) // get filtered names
            .toPromise()
            .then(function (data) { console.log(data); return data; })
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DemoAsyncComponent.prototype.handleError = function (e) {
        console.log(e);
    };
    return DemoAsyncComponent;
}());
DemoAsyncComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-demo-async',
        template: __webpack_require__("../../../../../src/app/demo-async/demo-async.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], DemoAsyncComponent);

var _a;
//# sourceMappingURL=demo-async.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo-async/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_names__ = __webpack_require__("../../../../../src/app/common-names.ts");

var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var objects = __WEBPACK_IMPORTED_MODULE_0__common_names__["a" /* COMMON_NAMES */].map(function (name) { return { 'label': name }; });
        return { names: __WEBPACK_IMPORTED_MODULE_0__common_names__["a" /* COMMON_NAMES */], objects: objects };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/demo-options/demo-options.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Options</h3>\n<input [mention]=\"objectItems\" class=\"form-control\" type=\"text\"\n       [mentionConfig]=\"{triggerChar:'#',maxItems:10,labelKey:'name',valueKey:'value',mentionSelect:format}\">"

/***/ }),

/***/ "../../../../../src/app/demo-options/demo-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoOptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoOptionsComponent = (function () {
    function DemoOptionsComponent() {
        this.objectItems = [
            {
                "value": "user1",
                "email": "user1@domain.com",
                "name": "User One"
            },
            {
                "value": "user2",
                "email": "user2@domain.com",
                "name": "User Two"
            },
            {
                "value": "user3",
                "email": "user3@domain.com",
                "name": "User Three"
            }
        ];
    }
    DemoOptionsComponent.prototype.format = function (s) {
        return s.toUpperCase();
    };
    return DemoOptionsComponent;
}());
DemoOptionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-demo-options',
        template: __webpack_require__("../../../../../src/app/demo-options/demo-options.component.html")
    })
], DemoOptionsComponent);

//# sourceMappingURL=demo-options.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo-tinymce/demo-tinymce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoTinymceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mention_mention_directive__ = __webpack_require__("../../../../../src/mention/mention.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_names__ = __webpack_require__("../../../../../src/app/common-names.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Angular 2 Mentions.
 * https://github.com/dmacfarlane/angular2-mentions
 *
 * Example usage with TinyMCE.
 */
var DemoTinymceComponent = (function () {
    function DemoTinymceComponent(_elementRef, _zone) {
        this._elementRef = _elementRef;
        this._zone = _zone;
        this.items = __WEBPACK_IMPORTED_MODULE_2__common_names__["a" /* COMMON_NAMES */];
    }
    DemoTinymceComponent.prototype.ngAfterViewInit = function () {
        tinymce.init({
            mode: 'exact',
            height: 100,
            theme: 'modern',
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code'
            ],
            toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            elements: "tmce",
            setup: this.tinySetup.bind(this)
        });
    };
    DemoTinymceComponent.prototype.tinySetup = function (ed) {
        var comp = this;
        var mention = this.mention;
        ed.on('keydown', function (e) {
            var frame = window.frames[ed.iframeElement.id];
            var contentEditable = frame.contentDocument.getElementById('tinymce');
            comp._zone.run(function () {
                comp.mention.keyHandler(e, contentEditable);
            });
        });
        ed.on('init', function (args) {
            mention.setIframe(ed.iframeElement);
        });
    };
    return DemoTinymceComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], DemoTinymceComponent.prototype, "htmlContent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__mention_mention_directive__["a" /* MentionDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mention_mention_directive__["a" /* MentionDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mention_mention_directive__["a" /* MentionDirective */]) === "function" && _a || Object)
], DemoTinymceComponent.prototype, "mention", void 0);
DemoTinymceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-demo-tinymce',
        template: "\n    <div class=\"form-group\" style=\"position:relative\">\n      <div [mention]=\"items\"></div>\n      <div>\n        <textarea class=\"hidden\" cols=\"60\" rows=\"4\" id=\"tmce\">{{htmlContent}}</textarea>\n      </div>\n    </div>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _c || Object])
], DemoTinymceComponent);

var _a, _b, _c;
//# sourceMappingURL=demo-tinymce.component.js.map

/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app___ = __webpack_require__("../../../../../src/app/index.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app___["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/mention/caret-coords.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCaretCoordinates;
/* From: https://github.com/component/textarea-caret-position */
/* jshint browser: true */
// The properties that we copy into a mirrored div.
// Note that some browsers, such as Firefox,
// do not concatenate properties, i.e. padding-top, bottom etc. -> padding,
// so we have to do every single property specifically.
var properties = [
    'direction',
    'boxSizing',
    'width',
    'height',
    'overflowX',
    'overflowY',
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderStyle',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    // https://developer.mozilla.org/en-US/docs/Web/CSS/font
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'fontStretch',
    'fontSize',
    'fontSizeAdjust',
    'lineHeight',
    'fontFamily',
    'textAlign',
    'textTransform',
    'textIndent',
    'textDecoration',
    'letterSpacing',
    'wordSpacing',
    'tabSize',
    'MozTabSize'
];
var isBrowser = (typeof window !== 'undefined');
var isFirefox = (isBrowser && window.mozInnerScreenX != null);
function getCaretCoordinates(element, position, options) {
    if (options === void 0) { options = null; }
    if (!isBrowser) {
        throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
    }
    var debug = options && options.debug || false;
    if (debug) {
        var el = document.querySelector('#input-textarea-caret-position-mirror-div');
        if (el) {
            el.parentNode.removeChild(el);
        }
    }
    // mirrored div
    var div = document.createElement('div');
    div.id = 'input-textarea-caret-position-mirror-div';
    document.body.appendChild(div);
    var style = div.style;
    var computed = window.getComputedStyle ? getComputedStyle(element) : element.currentStyle; // currentStyle for IE < 9
    // default textarea styles
    style.whiteSpace = 'pre-wrap';
    if (element.nodeName !== 'INPUT')
        style.wordWrap = 'break-word'; // only for textarea-s
    // position off-screen
    style.position = 'absolute'; // required to return coordinates properly
    if (!debug)
        style.visibility = 'hidden'; // not 'display: none' because we want rendering
    // transfer the element's properties to the div
    properties.forEach(function (prop) {
        style[prop] = computed[prop];
    });
    if (isFirefox) {
        // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
        if (element.scrollHeight > parseInt(computed.height))
            style.overflowY = 'scroll';
    }
    else {
        style.overflow = 'hidden'; // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
    }
    div.textContent = element.value.substring(0, position);
    // the second special handling for input type="text" vs textarea: spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
    if (element.nodeName === 'INPUT')
        div.textContent = div.textContent.replace(/\s/g, '\u00a0');
    var span = document.createElement('span');
    // Wrapping must be replicated *exactly*, including when a long word gets
    // onto the next line, with whitespace at the end of the line before (#7).
    // The  *only* reliable way to do that is to copy the *entire* rest of the
    // textarea's content into the <span> created at the caret position.
    // for inputs, just '.' would be enough, but why bother?
    span.textContent = element.value.substring(position) || '.'; // || because a completely empty faux span doesn't render at all
    div.appendChild(span);
    var coordinates = {
        top: span.offsetTop + parseInt(computed['borderTopWidth']),
        left: span.offsetLeft + parseInt(computed['borderLeftWidth'])
    };
    if (debug) {
        span.style.backgroundColor = '#aaa';
    }
    else {
        document.body.removeChild(div);
    }
    return coordinates;
}
// if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
//   module.exports = getCaretCoordinates;
// } else if(isBrowser){
//   window.getCaretCoordinates = getCaretCoordinates;
// }
//# sourceMappingURL=caret-coords.js.map

/***/ }),

/***/ "../../../../../src/mention/mention-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mention_utils__ = __webpack_require__("../../../../../src/mention/mention-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__caret_coords__ = __webpack_require__("../../../../../src/mention/caret-coords.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Angular 2 Mentions.
 * https://github.com/dmacfarlane/angular2-mentions
 *
 * Copyright (c) 2016 Dan MacFarlane
 */
var MentionListComponent = (function () {
    function MentionListComponent(_element) {
        this._element = _element;
        this.items = [];
        this.activeIndex = 0;
        this.hidden = false;
        this.itemClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    // lots of confusion here between relative coordinates and containers
    MentionListComponent.prototype.position = function (nativeParentElement, iframe) {
        if (iframe === void 0) { iframe = null; }
        var coords = { top: 0, left: 0 };
        if (Object(__WEBPACK_IMPORTED_MODULE_1__mention_utils__["e" /* isInputOrTextAreaElement */])(nativeParentElement)) {
            // parent elements need to have postition:relative for this to work correctly?
            coords = Object(__WEBPACK_IMPORTED_MODULE_2__caret_coords__["a" /* getCaretCoordinates */])(nativeParentElement, nativeParentElement.selectionStart);
            coords.top = nativeParentElement.offsetTop + coords.top + 16;
            coords.left = nativeParentElement.offsetLeft + coords.left;
        }
        else if (iframe) {
            var context = { iframe: iframe, parent: iframe.offsetParent };
            coords = Object(__WEBPACK_IMPORTED_MODULE_1__mention_utils__["b" /* getContentEditableCaretCoords */])(context);
        }
        else {
            var doc = document.documentElement;
            var scrollLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
            var scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
            // bounding rectangles are relative to view, offsets are relative to container?
            var caretRelativeToView = Object(__WEBPACK_IMPORTED_MODULE_1__mention_utils__["b" /* getContentEditableCaretCoords */])({ iframe: iframe });
            var parentRelativeToContainer = nativeParentElement.getBoundingClientRect();
            coords.top = caretRelativeToView.top - parentRelativeToContainer.top + nativeParentElement.offsetTop - scrollTop;
            coords.left = caretRelativeToView.left - parentRelativeToContainer.left + nativeParentElement.offsetLeft - scrollLeft;
        }
        var el = this._element.nativeElement;
        el.style.position = "absolute";
        el.style.left = coords.left + 'px';
        el.style.top = coords.top + 'px';
    };
    Object.defineProperty(MentionListComponent.prototype, "activeItem", {
        get: function () {
            return this.items[this.activeIndex];
        },
        enumerable: true,
        configurable: true
    });
    MentionListComponent.prototype.activateNextItem = function () {
        // adjust scrollable-menu offset if the next item is out of view
        var listEl = this.list.nativeElement;
        var activeEl = listEl.getElementsByClassName('active').item(0);
        if (activeEl) {
            var nextLiEl = activeEl.nextSibling;
            if (nextLiEl && nextLiEl.nodeName == "LI") {
                var nextLiRect = nextLiEl.getBoundingClientRect();
                if (nextLiRect.bottom > listEl.getBoundingClientRect().bottom) {
                    listEl.scrollTop = nextLiEl.offsetTop + nextLiRect.height - listEl.clientHeight;
                }
            }
        }
        // select the next item
        this.activeIndex = Math.max(Math.min(this.activeIndex + 1, this.items.length - 1), 0);
    };
    MentionListComponent.prototype.activatePreviousItem = function () {
        // adjust the scrollable-menu offset if the previous item is out of view
        var listEl = this.list.nativeElement;
        var activeEl = listEl.getElementsByClassName('active').item(0);
        if (activeEl) {
            var prevLiEl = activeEl.previousSibling;
            if (prevLiEl && prevLiEl.nodeName == "LI") {
                var prevLiRect = prevLiEl.getBoundingClientRect();
                if (prevLiRect.top < listEl.getBoundingClientRect().top) {
                    listEl.scrollTop = prevLiEl.offsetTop;
                }
            }
        }
        // select the previous item
        this.activeIndex = Math.max(Math.min(this.activeIndex - 1, this.items.length - 1), 0);
    };
    MentionListComponent.prototype.resetScroll = function () {
        this.list.nativeElement.scrollTop = 0;
    };
    return MentionListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('list'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], MentionListComponent.prototype, "list", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], MentionListComponent.prototype, "itemClick", void 0);
MentionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'mention-list',
        styles: ["\n      .scrollable-menu {\n        display: block;\n        height: auto;\n        max-height: 300px;\n        overflow: auto;\n      }\n    ", "\n      [hidden] {\n        display: none;\n      }\n    ", "\n      li.active {\n        background-color: #f7f7f9;\n      }\n    "],
        template: "\n    <ul class=\"dropdown-menu scrollable-menu\" #list [hidden]=\"hidden\">\n        <li *ngFor=\"let item of items; let i = index\" [class.active]=\"activeIndex==i\">\n            <a class=\"dropdown-item\" (mousedown)=\"activeIndex=i;itemClick.emit();$event.preventDefault()\">{{item}}</a>\n        </li>\n    </ul>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object])
], MentionListComponent);

var _a, _b;
//# sourceMappingURL=mention-list.component.js.map

/***/ }),

/***/ "../../../../../src/mention/mention-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getValue;
/* harmony export (immutable) */ __webpack_exports__["d"] = insertValue;
/* harmony export (immutable) */ __webpack_exports__["e"] = isInputOrTextAreaElement;
/* unused harmony export isTextElement */
/* harmony export (immutable) */ __webpack_exports__["f"] = setCaretPosition;
/* harmony export (immutable) */ __webpack_exports__["a"] = getCaretPosition;
/* harmony export (immutable) */ __webpack_exports__["b"] = getContentEditableCaretCoords;
// DOM element manipulation functions...
//
function setValue(el, value) {
    //console.log("setValue", el.nodeName, "["+value+"]");
    if (isInputOrTextAreaElement(el)) {
        el.value = value;
    }
    else {
        el.textContent = value;
    }
}
function getValue(el) {
    return isInputOrTextAreaElement(el) ? el.value : el.textContent;
}
function insertValue(el, start, end, text, iframe, noRecursion) {
    if (noRecursion === void 0) { noRecursion = false; }
    //console.log("insertValue", el.nodeName, start, end, "["+text+"]", el);
    if (isTextElement(el)) {
        var val = getValue(el);
        setValue(el, val.substring(0, start) + text + val.substring(end, val.length));
        setCaretPosition(el, start + text.length, iframe);
    }
    else if (!noRecursion) {
        var selObj = getWindowSelection(iframe);
        if (selObj && selObj.rangeCount > 0) {
            var selRange = selObj.getRangeAt(0);
            var position = selRange.startOffset;
            var anchorNode = selObj.anchorNode;
            // if (text.endsWith(' ')) {
            //   text = text.substring(0, text.length-1) + '\xA0';
            // }
            insertValue(anchorNode, position - (end - start), position, text, iframe, true);
        }
    }
}
function isInputOrTextAreaElement(el) {
    return el != null && (el.nodeName == 'INPUT' || el.nodeName == 'TEXTAREA');
}
;
function isTextElement(el) {
    return el != null && (el.nodeName == 'INPUT' || el.nodeName == 'TEXTAREA' || el.nodeName == '#text');
}
;
function setCaretPosition(el, pos, iframe) {
    if (iframe === void 0) { iframe = null; }
    //console.log("setCaretPosition", pos, el, iframe==null);
    if (isInputOrTextAreaElement(el) && el.selectionStart) {
        el.focus();
        el.setSelectionRange(pos, pos);
    }
    else {
        var range = getDocument(iframe).createRange();
        range.setStart(el, pos);
        range.collapse(true);
        var sel = getWindowSelection(iframe);
        sel.removeAllRanges();
        sel.addRange(range);
    }
}
function getCaretPosition(el, iframe) {
    if (iframe === void 0) { iframe = null; }
    //console.log("getCaretPosition", el);
    if (isInputOrTextAreaElement(el)) {
        var val = el.value;
        return val.slice(0, el.selectionStart).length;
    }
    else {
        var selObj = getWindowSelection(iframe); //window.getSelection();
        if (selObj.rangeCount > 0) {
            var selRange = selObj.getRangeAt(0);
            var position = selRange.startOffset;
            return position;
        }
    }
}
// Based on ment.io functions...
//
function getDocument(iframe) {
    if (!iframe) {
        return document;
    }
    else {
        return iframe.contentWindow.document;
    }
}
function getWindowSelection(iframe) {
    if (!iframe) {
        return window.getSelection();
    }
    else {
        return iframe.contentWindow.getSelection();
    }
}
function getContentEditableCaretCoords(ctx) {
    var markerTextChar = '\ufeff';
    var markerId = 'sel_' + new Date().getTime() + '_' + Math.random().toString().substr(2);
    var doc = getDocument(ctx ? ctx.iframe : null);
    var sel = getWindowSelection(ctx ? ctx.iframe : null);
    var prevRange = sel.getRangeAt(0);
    // create new range and set postion using prevRange
    var range = doc.createRange();
    range.setStart(sel.anchorNode, prevRange.startOffset);
    range.setEnd(sel.anchorNode, prevRange.startOffset);
    range.collapse(false);
    // Create the marker element containing a single invisible character
    // using DOM methods and insert it at the position in the range
    var markerEl = doc.createElement('span');
    markerEl.id = markerId;
    markerEl.appendChild(doc.createTextNode(markerTextChar));
    range.insertNode(markerEl);
    sel.removeAllRanges();
    sel.addRange(prevRange);
    var coordinates = {
        left: 0,
        top: markerEl.offsetHeight
    };
    localToRelativeCoordinates(ctx, markerEl, coordinates);
    markerEl.parentNode.removeChild(markerEl);
    return coordinates;
}
function localToRelativeCoordinates(ctx, element, coordinates) {
    var obj = element;
    var iframe = ctx ? ctx.iframe : null;
    while (obj) {
        if (ctx.parent != null && ctx.parent == obj) {
            break;
        }
        coordinates.left += obj.offsetLeft + obj.clientLeft;
        coordinates.top += obj.offsetTop + obj.clientTop;
        obj = obj.offsetParent;
        if (!obj && iframe) {
            obj = iframe;
            iframe = null;
        }
    }
    obj = element;
    iframe = ctx ? ctx.iframe : null;
    while (obj !== getDocument(null).body && obj != null) {
        if (ctx.parent != null && ctx.parent == obj) {
            break;
        }
        if (obj.scrollTop && obj.scrollTop > 0) {
            coordinates.top -= obj.scrollTop;
        }
        if (obj.scrollLeft && obj.scrollLeft > 0) {
            coordinates.left -= obj.scrollLeft;
        }
        obj = obj.parentNode;
        if (!obj && iframe) {
            obj = iframe;
            iframe = null;
        }
    }
}
//# sourceMappingURL=mention-utils.js.map

/***/ }),

/***/ "../../../../../src/mention/mention.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentionDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mention_list_component__ = __webpack_require__("../../../../../src/mention/mention-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mention_utils__ = __webpack_require__("../../../../../src/mention/mention-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KEY_BACKSPACE = 8;
var KEY_TAB = 9;
var KEY_ENTER = 13;
var KEY_SHIFT = 16;
var KEY_ESCAPE = 27;
var KEY_SPACE = 32;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_2 = 50;
/**
 * Angular 2 Mentions.
 * https://github.com/dmacfarlane/angular2-mentions
 *
 * Copyright (c) 2017 Dan MacFarlane
 */
var MentionDirective = (function () {
    function MentionDirective(_element, _componentResolver, _viewContainerRef) {
        this._element = _element;
        this._componentResolver = _componentResolver;
        this._viewContainerRef = _viewContainerRef;
        // event emitted whenever the search term changes
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        // emit when user selects item
        this.itemSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        // the character that will trigger the menu behavior
        this.triggerChar = "@";
        // option to specify the field in the objects to be used as the item label
        this.labelKey = 'label';
        // option to diable internal filtering. can be used to show the full list returned
        // from an async operation (or allows a custom filter function to be used - in future)
        this.disableSearch = false;
        // option to limit the number of items shown in the pop-up menu
        this.maxItems = -1;
        // optional function to format the selected item before inserting the text
        this.mentionSelect = function (selection) { return selection; };
    }
    Object.defineProperty(MentionDirective.prototype, "mention", {
        set: function (items) {
            this.items = items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MentionDirective.prototype, "mentionConfig", {
        set: function (config) {
            this.triggerChar = config.triggerChar || this.triggerChar;
            this.labelKey = config.labelKey || this.labelKey;
            this.disableSearch = config.disableSearch || this.disableSearch;
            this.maxItems = config.maxItems || this.maxItems;
            this.mentionSelect = config.mentionSelect || this.mentionSelect;
        },
        enumerable: true,
        configurable: true
    });
    MentionDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.items && this.items.length > 0) {
            if (typeof this.items[0] == 'string') {
                // convert strings to objects
                var me_1 = this;
                this.items = this.items.map(function (label) {
                    var object = {};
                    object[me_1.labelKey] = label;
                    return object;
                });
            }
            // remove items without an labelKey or valueKey
            this.items = this.items.filter(function (e) { return e[_this.labelKey]; });
            this.items.sort(function (a, b) { return a[_this.labelKey].localeCompare(b[_this.labelKey]); });
            this.updateSearchList();
        }
    };
    MentionDirective.prototype.setIframe = function (iframe) {
        this.iframe = iframe;
    };
    MentionDirective.prototype.stopEvent = function (event) {
        //if (event instanceof KeyboardEvent) { // does not work for iframe
        if (!event.wasClick) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
        }
    };
    MentionDirective.prototype.blurHandler = function (event) {
        this.stopEvent(event);
        this.stopSearch = true;
        if (this.searchList) {
            this.searchList.hidden = true;
        }
    };
    MentionDirective.prototype.keyHandler = function (event, nativeElement) {
        if (nativeElement === void 0) { nativeElement = this._element.nativeElement; }
        var val = Object(__WEBPACK_IMPORTED_MODULE_2__mention_utils__["c" /* getValue */])(nativeElement);
        var pos = Object(__WEBPACK_IMPORTED_MODULE_2__mention_utils__["a" /* getCaretPosition */])(nativeElement, this.iframe);
        var charPressed = event.key;
        if (!charPressed) {
            var charCode = event.which || event.keyCode;
            if (!event.shiftKey && (charCode >= 65 && charCode <= 90)) {
                charPressed = String.fromCharCode(charCode + 32);
            }
            else if (event.shiftKey && charCode === KEY_2) {
                charPressed = this.triggerChar;
            }
            else {
                // TODO (dmacfarlane) fix this for non-alpha keys
                // http://stackoverflow.com/questions/2220196/how-to-decode-character-pressed-from-jquerys-keydowns-event-handler?lq=1
                charPressed = String.fromCharCode(event.which || event.keyCode);
            }
        }
        if (event.keyCode == KEY_ENTER && event.wasClick && pos < this.startPos) {
            // put caret back in position prior to contenteditable menu click
            pos = this.startNode.length;
            Object(__WEBPACK_IMPORTED_MODULE_2__mention_utils__["f" /* setCaretPosition */])(this.startNode, pos, this.iframe);
        }
        //console.log("keyHandler", this.startPos, pos, val, charPressed, event);
        if (charPressed == this.triggerChar) {
            this.startPos = pos;
            this.startNode = (this.iframe ? this.iframe.contentWindow.getSelection() : window.getSelection()).anchorNode;
            this.stopSearch = false;
            this.showSearchList(nativeElement);
            this.updateSearchList();
        }
        else if (this.startPos >= 0 && !this.stopSearch) {
            if (pos <= this.startPos) {
                this.searchList.hidden = true;
            }
            else if (event.keyCode !== KEY_SHIFT &&
                !event.metaKey &&
                !event.altKey &&
                !event.ctrlKey &&
                pos > this.startPos) {
                if (event.keyCode === KEY_SPACE) {
                    this.startPos = -1;
                }
                else if (event.keyCode === KEY_BACKSPACE && pos > 0) {
                    this.searchList.hidden = this.stopSearch;
                    pos--;
                }
                else if (!this.searchList.hidden) {
                    if (event.keyCode === KEY_TAB || event.keyCode === KEY_ENTER) {
                        this.stopEvent(event);
                        this.searchList.hidden = true;
                        // value is inserted without a trailing space for consistency
                        // between element types (div and iframe do not preserve the space)
                        Object(__WEBPACK_IMPORTED_MODULE_2__mention_utils__["d" /* insertValue */])(nativeElement, this.startPos, pos, this.mentionSelect(this.triggerChar + this.searchList.activeItem), this.iframe);
                        // fire input event so angular bindings are updated
                        if ("createEvent" in document) {
                            var evt = document.createEvent("HTMLEvents");
                            evt.initEvent("input", false, true);
                            nativeElement.dispatchEvent(evt);
                        }
                        this.startPos = -1;
                        this.itemSelected.emit(this.searchList.activeItem);
                        return false;
                    }
                    else if (event.keyCode === KEY_ESCAPE) {
                        this.stopEvent(event);
                        this.searchList.hidden = true;
                        this.stopSearch = true;
                        return false;
                    }
                    else if (event.keyCode === KEY_DOWN) {
                        this.stopEvent(event);
                        this.searchList.activateNextItem();
                        return false;
                    }
                    else if (event.keyCode === KEY_UP) {
                        this.stopEvent(event);
                        this.searchList.activatePreviousItem();
                        return false;
                    }
                }
                if (event.keyCode === KEY_LEFT || event.keyCode === KEY_RIGHT) {
                    this.stopEvent(event);
                    return false;
                }
                else {
                    var mention = val.substring(this.startPos + 1, pos);
                    if (event.keyCode !== KEY_BACKSPACE) {
                        mention += charPressed;
                    }
                    this.searchString = mention;
                    this.searchTerm.emit(this.searchString);
                    this.updateSearchList();
                }
            }
        }
    };
    MentionDirective.prototype.updateSearchList = function () {
        var _this = this;
        var matches = [];
        if (this.items) {
            var objects = this.items;
            // disabling the search relies on the async operation to do the filtering
            if (!this.disableSearch && this.searchString) {
                var searchStringLowerCase_1 = this.searchString.toLowerCase();
                objects = this.items.filter(function (e) { return e[_this.labelKey].toLowerCase().startsWith(searchStringLowerCase_1); });
            }
            matches = objects.map(function (e) { return e[_this.labelKey]; });
            if (this.maxItems > 0) {
                matches = matches.slice(0, this.maxItems);
            }
        }
        // update the search list
        if (this.searchList) {
            this.searchList.items = matches;
            this.searchList.hidden = matches.length == 0;
        }
    };
    MentionDirective.prototype.showSearchList = function (nativeElement) {
        var _this = this;
        if (this.searchList == null) {
            var componentFactory = this._componentResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__mention_list_component__["a" /* MentionListComponent */]);
            var componentRef = this._viewContainerRef.createComponent(componentFactory);
            this.searchList = componentRef.instance;
            this.searchList.position(nativeElement, this.iframe);
            componentRef.instance['itemClick'].subscribe(function () {
                nativeElement.focus();
                var fakeKeydown = { "keyCode": KEY_ENTER, "wasClick": true };
                _this.keyHandler(fakeKeydown, nativeElement);
            });
        }
        else {
            this.searchList.activeIndex = 0;
            this.searchList.position(nativeElement, this.iframe);
            window.setTimeout(function () { return _this.searchList.resetScroll(); });
        }
    };
    return MentionDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], MentionDirective.prototype, "mention", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MentionDirective.prototype, "mentionConfig", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], MentionDirective.prototype, "searchTerm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], MentionDirective.prototype, "itemSelected", void 0);
MentionDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[mention]',
        host: {
            '(keydown)': 'keyHandler($event)',
            '(blur)': 'blurHandler($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */]) === "function" && _c || Object])
], MentionDirective);

var _a, _b, _c;
//# sourceMappingURL=mention.directive.js.map

/***/ }),

/***/ "../../../../../src/mention/mention.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mention_directive__ = __webpack_require__("../../../../../src/mention/mention.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mention_list_component__ = __webpack_require__("../../../../../src/mention/mention-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MentionModule = MentionModule_1 = (function () {
    function MentionModule() {
    }
    MentionModule.forRoot = function () {
        return {
            ngModule: MentionModule_1
        };
    };
    return MentionModule;
}());
MentionModule = MentionModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__mention_directive__["a" /* MentionDirective */],
            __WEBPACK_IMPORTED_MODULE_3__mention_list_component__["a" /* MentionListComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__mention_list_component__["a" /* MentionListComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__mention_directive__["a" /* MentionDirective */],
            __WEBPACK_IMPORTED_MODULE_3__mention_list_component__["a" /* MentionListComponent */]
        ]
    })
], MentionModule);

var MentionModule_1;
//# sourceMappingURL=mention.module.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map