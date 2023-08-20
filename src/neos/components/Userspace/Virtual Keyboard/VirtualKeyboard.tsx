import { member, Member, Component } from "../../../core";
    
    export interface VirtualKeyboardInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ShiftActive?: member<boolean>;
HoldShift?: member<boolean>;
TextPreviewActive?: member<any>;
TextPreview?: member<any>;
    }
    
    export function VirtualKeyboard(props: VirtualKeyboardInput){
      const { id, persistentId, updateOrder, Enabled,
ShiftActive,
HoldShift,
TextPreviewActive,
TextPreview, } = props;
    
      return (
        <Component type="FrooxEngine.VirtualKeyboard" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShiftActive" id={typeof ShiftActive === "object" && "id" in ShiftActive ? ShiftActive?.id : undefined} value={typeof ShiftActive === "object" && "value" in ShiftActive ? ShiftActive?.value : ShiftActive} /* default: false */  isRaw={typeof ShiftActive === "object" && "isRaw" in ShiftActive && ShiftActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HoldShift" id={typeof HoldShift === "object" && "id" in HoldShift ? HoldShift?.id : undefined} value={typeof HoldShift === "object" && "value" in HoldShift ? HoldShift?.value : HoldShift} /* default: false */  isRaw={typeof HoldShift === "object" && "isRaw" in HoldShift && HoldShift.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="TextPreviewActive" id={typeof TextPreviewActive === "object" && "id" in TextPreviewActive ? TextPreviewActive?.id : undefined} value={typeof TextPreviewActive === "object" && "value" in TextPreviewActive ? TextPreviewActive?.value : TextPreviewActive} /* default: ID0 */  isRaw={typeof TextPreviewActive === "object" && "isRaw" in TextPreviewActive && TextPreviewActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IText]`} name="TextPreview" id={typeof TextPreview === "object" && "id" in TextPreview ? TextPreview?.id : undefined} value={typeof TextPreview === "object" && "value" in TextPreview ? TextPreview?.value : TextPreview} /* default: ID0 */  isRaw={typeof TextPreview === "object" && "isRaw" in TextPreview && TextPreview.isRaw ? true : undefined} />
        </Component>
      );
    };
    