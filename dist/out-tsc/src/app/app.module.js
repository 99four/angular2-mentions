"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./demo-async/in-memory-data.service");
var app_component_1 = require("./app.component");
var mention_module_1 = require("../mention/mention.module");
var demo_async_component_1 = require("./demo-async/demo-async.component");
var demo_options_component_1 = require("./demo-options/demo-options.component");
var demo_tinymce_component_1 = require("./demo-tinymce/demo-tinymce.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { delay: 500 }),
            mention_module_1.MentionModule
        ],
        declarations: [
            app_component_1.AppComponent,
            demo_async_component_1.DemoAsyncComponent,
            demo_options_component_1.DemoOptionsComponent,
            demo_tinymce_component_1.DemoTinymceComponent
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map