import { NeosJson, NeosRawJson, SlotRef } from ".";

function generateComponent(name: string, neosRaJson: NeosRawJson) {}

NeosJson.run({}, (o) => {
  const rootSlot = o.getRootSlot();
  const componentList = o.readDynamicVariableSlot(
    rootSlot,
    "Static.ComponentList"
  );

  for (let i = 0; i < o.length(componentList); i++) {
    const component = o.getChild(componentList, i);
    if (component) {
      const name = o.readDynamicVariableString(component, "State.Name");
      const rawJson = o.toNeosRawJson(
        o.readDynamicVariableSlot(component, "Static.Root")
      );
      generateComponent(name, rawJson);
    }
  }
});
