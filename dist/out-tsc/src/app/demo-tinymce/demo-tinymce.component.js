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
var mention_directive_1 = require("../../mention/mention.directive");
var common_names_1 = require("../common-names");
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
        this.items = common_names_1.COMMON_NAMES;
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
    core_1.Input(),
    __metadata("design:type", Object)
], DemoTinymceComponent.prototype, "htmlContent", void 0);
__decorate([
    core_1.ViewChild(mention_directive_1.MentionDirective),
    __metadata("design:type", mention_directive_1.MentionDirective)
], DemoTinymceComponent.prototype, "mention", void 0);
DemoTinymceComponent = __decorate([
    core_1.Component({
        selector: 'app-demo-tinymce',
        template: "\n    <div class=\"form-group\" style=\"position:relative\">\n      <div [mention]=\"items\"></div>\n      <div>\n        <textarea class=\"hidden\" cols=\"60\" rows=\"4\" id=\"tmce\">{{htmlContent}}</textarea>\n      </div>\n    </div>"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.NgZone])
], DemoTinymceComponent);
exports.DemoTinymceComponent = DemoTinymceComponent;
//# sourceMappingURL=demo-tinymce.component.js.map