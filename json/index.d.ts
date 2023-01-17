export type NeosRawJson = {};
export type SlotRef = {};
export type TypeMap = {
    name: "Slot";
    value: SlotRef;
} | {
    name: "String";
    value: string;
};
declare class NeosObject {
    protected original: NeosRawJson;
    protected now: NeosRawJson;
    constructor(neosRawJson: NeosRawJson);
    getRootSlot(): SlotRef;
    length(slot: SlotRef): number;
    getChild(slot: SlotRef, index: number): SlotRef | undefined;
    getChildByName(slot: SlotRef, name: string, depth?: number): SlotRef | undefined;
    readDynamicVariableSlot(slot: SlotRef, tag: string): SlotRef;
    readDynamicVariableString(slot: SlotRef, tag: string): string;
    writeOrCreateDynamicVariableSlot(slot: SlotRef, tag: string, value: SlotRef): void;
    setParent(target: SlotRef, parent: SlotRef): void;
    setLocalPosition(slot: SlotRef, position: [number, number, number]): void;
    setLocalRotation(slot: SlotRef, rotation: [number, number, number, number]): void;
    setLocalScale(slot: SlotRef, scale: [number, number, number]): void;
    toNeosRawJson(slot?: SlotRef): NeosRawJson;
}
export declare function NeosJson(): void;
export declare namespace NeosJson {
    function run(neosRawJson: NeosRawJson, func: (o: NeosObject) => void): NeosRawJson;
}
export {};
//# sourceMappingURL=index.d.ts.map