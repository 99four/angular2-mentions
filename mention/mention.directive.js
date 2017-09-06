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
var core_2 = require("@angular/core");
var mention_list_component_1 = require("./mention-list.component");
var mention_utils_1 = require("./mention-utils");
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
        this.searchTerm = new core_2.EventEmitter();
        // emit when user selects item
        this.itemSelected = new core_2.EventEmitter();
        // the character that will trigger the menu behavior
        this.triggerChar = "@";
        // option to specify the field in the objects to be used as the item label
        this.labelKey = 'email';
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
        this.items.sort(function (a, b) { return a[_this.labelKey].localeCompare(b[_this.labelKey]); });
        // if (this.items && this.items.length>0) {
        //   if (typeof this.items[0] == 'string') {
        //     // convert strings to objects
        //     const me = this;
        //     this.items = this.items.map(function(label){
        //       let object = {};
        //       object[me.labelKey] = label;
        //       return object;
        //     });
        //   }
        //   // remove items without an labelKey or valueKey
        //   this.items = this.items.filter(e => e[this.labelKey]);
        //   this.items.sort((a,b)=>a[this.labelKey].localeCompare(b[this.labelKey]));
        //   console.log('po', this.items);
        // }
        this.updateSearchList();
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
        var val = mention_utils_1.getValue(nativeElement);
        var pos = mention_utils_1.getCaretPosition(nativeElement, this.iframe);
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
            mention_utils_1.setCaretPosition(this.startNode, pos, this.iframe);
        }
        //console.log("keyHandler", this.startPos, pos, val, charPressed, event);
        if (charPressed == this.triggerChar) {
            console.log('hello', pos);
            this.startPos = pos;
            this.startNode = (this.iframe ? this.iframe.contentWindow.getSelection() : window.getSelection()).anchorNode;
            this.stopSearch = false;
            this.searchString = '';
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
                        console.log('enter');
                        this.stopEvent(event);
                        this.searchList.hidden = true;
                        // value is inserted without a trailing space for consistency
                        // between element types (div and iframe do not preserve the space)
                        mention_utils_1.insertValue(nativeElement, this.startPos, pos, this.mentionSelect(this.triggerChar + this.searchList.activeItem), this.iframe);
                        // fire input event so angular bindings are updated
                        if ("createEvent" in document) {
                            var evt = document.createEvent("HTMLEvents");
                            evt.initEvent("input", false, true);
                            nativeElement.dispatchEvent(evt);
                        }
                        this.startPos = -1;
                        this.searchString = '';
                        console.log(this.searchList.activeItemId);
                        this.itemSelected.emit(this.searchList.activeItemId);
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
                    console.log(this.startPos, pos);
                    var mention = mention_utils_1.isInputOrTextAreaElement(nativeElement) ?
                        val.substring(this.startPos + 1, pos) :
                        mention_utils_1.getWindowSelection(this.iframe).anchorNode.nodeValue.substring(this.startPos + 1, pos);
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
        var objects;
        if (this.items) {
            objects = this.items;
            // disabling the search relies on the async operation to do the filtering
            if (!this.disableSearch && this.searchString) {
                var searchStringLowerCase_1 = this.searchString.toLowerCase();
                objects = this.items.filter(function (e) { return e[_this.labelKey].toLowerCase().startsWith(searchStringLowerCase_1); });
            }
        }
        // update the search list
        console.log('search strng', this.searchString);
        if (this.searchList) {
            this.searchList.items = objects;
            this.searchList.hidden = objects.length === 0;
        }
    };
    MentionDirective.prototype.showSearchList = function (nativeElement) {
        var _this = this;
        if (this.searchList == null) {
            var componentFactory = this._componentResolver.resolveComponentFactory(mention_list_component_1.MentionListComponent);
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
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], MentionDirective.prototype, "mention", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MentionDirective.prototype, "mentionConfig", null);
__decorate([
    core_2.Output(),
    __metadata("design:type", Object)
], MentionDirective.prototype, "searchTerm", void 0);
__decorate([
    core_2.Output(),
    __metadata("design:type", Object)
], MentionDirective.prototype, "itemSelected", void 0);
MentionDirective = __decorate([
    core_1.Directive({
        selector: '[mention]',
        host: {
            '(keydown)': 'keyHandler($event)',
            '(blur)': 'blurHandler($event)'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.ComponentFactoryResolver,
        core_1.ViewContainerRef])
], MentionDirective);
exports.MentionDirective = MentionDirective;
