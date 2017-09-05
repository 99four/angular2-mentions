"use strict";
var protractor_1 = require("protractor");
var app_po_1 = require("./app.po");
describe('angular2-mentions App', function () {
    var EC = protractor_1.protractor.ExpectedConditions;
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2MentionsPage();
    });
    var elements = it('test mentions text field', function () {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Angular Mentions');
        var el = protractor_1.element.all(protractor_1.by.css('input')).first();
        testMentions(el);
    });
    it('test mentions text area', function () {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Angular Mentions');
        var el = protractor_1.element.all(protractor_1.by.css('textarea')).first();
        testMentions(el);
    });
    it('test mentions div', function () {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Angular Mentions');
        var el = protractor_1.element.all(protractor_1.by.css('div')).first();
        testMentions(el);
    });
    it('test mentions iframe', function () {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Angular Mentions');
        var el = protractor_1.element.all(protractor_1.by.id('tmce_ifr'));
        // iframe testing workaround - sendKeys is not working unless menu is opened first
        // this wasn't needed in previous versions of angular/protractor
        el.click();
        el.sendKeys('@');
        el.sendKeys(protractor_1.protractor.Key.BACK_SPACE);
        // end iframe testing workaround
        testMentions(el);
    });
    function testMentions(el) {
        el.getTagName().then(function (tagName) {
            var menu = protractor_1.element(protractor_1.by.css('.dropdown-menu'));
            el.click();
            expect(getValue(el, tagName)).toEqual('');
            // popup menu
            el.sendKeys('Hello @');
            //browser.wait(EC.textToBePresentInElementValue(el, 'Hello @'), 1000);
            expect(menu.isDisplayed()).toBe(true);
            expect(getValue(el, tagName)).toEqual('Hello @');
            // select mention using arrow keys and pressing enter
            //el.sendKeys(protractor.Key.ARROW_DOWN, protractor.Key.ENTER);
            // select mention by clicking mouse on second item in menu
            protractor_1.element(protractor_1.by.css('.dropdown-menu li:nth-child(2) a')).click();
            expect(menu.isDisplayed()).toBe(false);
            expect(getValue(el, tagName)).toEqual('Hello @Aaron');
            // select another mention
            el.sendKeys(' and @gav', protractor_1.protractor.Key.ENTER);
            expect(menu.isDisplayed()).toBe(false);
            expect(getValue(el, tagName)).toEqual('Hello @Aaron and @Gavin');
            // start another mention
            el.sendKeys(' and @e');
            expect(menu.isDisplayed()).toBe(true);
            expect(getValue(el, tagName)).toEqual('Hello @Aaron and @Gavin and @e');
            // but press escape instead
            el.sendKeys(protractor_1.protractor.Key.ESCAPE);
            expect(menu.isDisplayed()).toBe(false);
            expect(getValue(el, tagName)).toEqual('Hello @Aaron and @Gavin and @e');
            // remove the escaped entry
            el.sendKeys('!!', protractor_1.protractor.Key.ARROW_LEFT, protractor_1.protractor.Key.ARROW_LEFT);
            el.sendKeys(protractor_1.protractor.Key.BACK_SPACE, protractor_1.protractor.Key.BACK_SPACE);
            expect(getValue(el, tagName)).toEqual('Hello @Aaron and @Gavin and !!');
            // and insert another mention
            el.sendKeys('@HE', protractor_1.protractor.Key.ENTER);
            expect(menu.isDisplayed()).toBe(false);
            expect(getValue(el, tagName)).toEqual('Hello @Aaron and @Gavin and @Henry!!');
        });
    }
    function getValue(el, tagName) {
        if (tagName == "input" || tagName == "textarea") {
            return el.getAttribute('value');
        }
        else if (tagName.length > 0 && tagName[0] == 'iframe') {
            var iframe = protractor_1.browser.findElement(protractor_1.by.tagName("iframe"));
            return protractor_1.browser.switchTo().frame(iframe).then(function () {
                var el = protractor_1.browser.driver.findElement(protractor_1.by.id('tinymce'));
                var text = el.getText();
                return protractor_1.browser.switchTo().defaultContent().then(function () {
                    return protractor_1.browser.waitForAngular().then(function () { return text; });
                });
            });
        }
        else {
            return el.getText();
        }
    }
});
//# sourceMappingURL=app.e2e-spec.js.map