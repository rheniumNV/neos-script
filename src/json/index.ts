export type NeosRawJson = {};

export type SlotRef = {};

export type TypeMap =
  | { name: "Slot"; value: SlotRef }
  | { name: "String"; value: string };

class NeosObject {
  protected original: NeosRawJson;
  protected now: NeosRawJson;
  constructor(neosRawJson: NeosRawJson) {
    this.original = neosRawJson;
    this.now = neosRawJson;
  }

  getRootSlot(): SlotRef {
    return {};
  }

  length(slot: SlotRef): number {
    return 0;
  }

  getChild(slot: SlotRef, index: number): SlotRef | undefined {
    return {};
  }

  getChildByName(
    slot: SlotRef,
    name: string,
    depth: number = 1
  ): SlotRef | undefined {
    return {};
  }

  readDynamicVariableSlot(slot: SlotRef, tag: string): SlotRef {
    return {};
  }

  readDynamicVariableString(slot: SlotRef, tag: string): string {
    return "";
  }

  writeOrCreateDynamicVariableSlot(
    slot: SlotRef,
    tag: string,
    value: SlotRef
  ) {}

  setParent(target: SlotRef, parent: SlotRef) {}

  setLocalPosition(slot: SlotRef, position: [number, number, number]) {}

  setLocalRotation(slot: SlotRef, rotation: [number, number, number, number]) {}

  setLocalScale(slot: SlotRef, scale: [number, number, number]) {}

  toNeosRawJson(slot: SlotRef = this.getRootSlot()): NeosRawJson {
    return this.now;
  }
}

export function NeosJson() {}

export namespace NeosJson {
  export function run(neosRawJson: NeosRawJson, func: (o: NeosObject) => void) {
    const neosObject = new NeosObject(neosRawJson);
    func(neosObject);
    return neosObject.toNeosRawJson();
  }
  {
  }
}
