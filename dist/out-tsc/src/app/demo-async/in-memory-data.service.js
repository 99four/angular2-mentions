"use strict";
var common_names_1 = require("../common-names");
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var objects = common_names_1.COMMON_NAMES.map(function (name) { return { 'label': name }; });
        return { names: common_names_1.COMMON_NAMES, objects: objects };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map