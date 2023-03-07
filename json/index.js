"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeosJson = void 0;
var NeosObject = /** @class */ (function () {
    function NeosObject(neosRawJson) {
        this.original = neosRawJson;
        this.now = neosRawJson;
    }
    NeosObject.prototype.getRootSlot = function () {
        return {};
    };
    NeosObject.prototype.length = function (slot) {
        return 0;
    };
    NeosObject.prototype.getChild = function (slot, index) {
        return {};
    };
    NeosObject.prototype.getChildByName = function (slot, name, depth) {
        if (depth === void 0) { depth = 1; }
        return {};
    };
    NeosObject.prototype.readDynamicVariableSlot = function (slot, tag) {
        return {};
    };
    NeosObject.prototype.readDynamicVariableString = function (slot, tag) {
        return "";
    };
    NeosObject.prototype.writeOrCreateDynamicVariableSlot = function (slot, tag, value) { };
    NeosObject.prototype.setParent = function (target, parent) { };
    NeosObject.prototype.setLocalPosition = function (slot, position) { };
    NeosObject.prototype.setLocalRotation = function (slot, rotation) { };
    NeosObject.prototype.setLocalScale = function (slot, scale) { };
    NeosObject.prototype.toNeosRawJson = function (slot) {
        if (slot === void 0) { slot = this.getRootSlot(); }
        return this.now;
    };
    return NeosObject;
}());
function NeosJson() { }
exports.NeosJson = NeosJson;
(function (NeosJson) {
    function run(neosRawJson, func) {
        var neosObject = new NeosObject(neosRawJson);
        func(neosObject);
        return neosObject.toNeosRawJson();
    }
    NeosJson.run = run;
    {
    }
})(NeosJson = exports.NeosJson || (exports.NeosJson = {}));
