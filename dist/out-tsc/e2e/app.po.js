"use strict";
var protractor_1 = require("protractor");
var Angular2MentionsPage = (function () {
    function Angular2MentionsPage() {
    }
    Angular2MentionsPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    Angular2MentionsPage.prototype.getHeadingText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return Angular2MentionsPage;
}());
exports.Angular2MentionsPage = Angular2MentionsPage;
//# sourceMappingURL=app.po.js.map