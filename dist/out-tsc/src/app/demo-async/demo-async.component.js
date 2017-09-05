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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/toPromise");
var DemoAsyncComponent = (function () {
    // this should be in a separate demo-async.service.ts file
    function DemoAsyncComponent(http) {
        this.http = http;
        this.searchTermStream = new Subject_1.Subject();
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
    core_1.Component({
        selector: 'app-demo-async',
        templateUrl: './demo-async.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], DemoAsyncComponent);
exports.DemoAsyncComponent = DemoAsyncComponent;
//# sourceMappingURL=demo-async.component.js.map