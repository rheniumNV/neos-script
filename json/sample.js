"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
function generateComponent(name, neosRaJson) { }
_1.NeosJson.run({}, function (o) {
    var rootSlot = o.getRootSlot();
    var componentList = o.readDynamicVariableSlot(rootSlot, "Static.ComponentList");
    for (var i = 0; i < o.length(componentList); i++) {
        var component = o.getChild(componentList, i);
        if (component) {
            var name_1 = o.readDynamicVariableString(component, "State.Name");
            var rawJson = o.toNeosRawJson(o.readDynamicVariableSlot(component, "Static.Root"));
            generateComponent(name_1, rawJson);
        }
    }
});
