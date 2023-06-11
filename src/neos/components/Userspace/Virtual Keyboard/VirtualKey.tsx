import { member, Member, Component } from "../../../core";
    
    export interface VirtualKeyInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetKey?: member<any>;
AppendString?: member<any>;
ShiftTargetKey?: member<any>;
ShiftAppendString?: member<any>;
IgnoreShift?: member<boolean>;
ModifierKey?: member<any>;
ModifiedTargetKey?: member<any>;
ModifiedAppendString?: member<any>;
Keyboard?: member<any>;
    }
    
    export function VirtualKey(props: VirtualKeyInput){
      const { id, persistentId, updateOrder, Enabled,
TargetKey,
AppendString,
ShiftTargetKey,
ShiftAppendString,
IgnoreShift,
ModifierKey,
ModifiedTargetKey,
ModifiedAppendString,
Keyboard, } = props;
    
      return (
        <Component type="FrooxEngine.VirtualKey" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Key]`} name="TargetKey" id={typeof TargetKey === "object" && "id" in TargetKey ? TargetKey?.id : undefined} value={typeof TargetKey === "object" && "value" in TargetKey ? TargetKey?.value : TargetKey} /* default: None */  isRaw={typeof TargetKey === "object" && "isRaw" in TargetKey && TargetKey.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="AppendString" id={typeof AppendString === "object" && "id" in AppendString ? AppendString?.id : undefined} value={typeof AppendString === "object" && "value" in AppendString ? AppendString?.value : AppendString} /* default: <i>null</i> */  isRaw={typeof AppendString === "object" && "isRaw" in AppendString && AppendString.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Key]`} name="ShiftTargetKey" id={typeof ShiftTargetKey === "object" && "id" in ShiftTargetKey ? ShiftTargetKey?.id : undefined} value={typeof ShiftTargetKey === "object" && "value" in ShiftTargetKey ? ShiftTargetKey?.value : ShiftTargetKey} /* default: None */  isRaw={typeof ShiftTargetKey === "object" && "isRaw" in ShiftTargetKey && ShiftTargetKey.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="ShiftAppendString" id={typeof ShiftAppendString === "object" && "id" in ShiftAppendString ? ShiftAppendString?.id : undefined} value={typeof ShiftAppendString === "object" && "value" in ShiftAppendString ? ShiftAppendString?.value : ShiftAppendString} /* default: <i>null</i> */  isRaw={typeof ShiftAppendString === "object" && "isRaw" in ShiftAppendString && ShiftAppendString.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreShift" id={typeof IgnoreShift === "object" && "id" in IgnoreShift ? IgnoreShift?.id : undefined} value={typeof IgnoreShift === "object" && "value" in IgnoreShift ? IgnoreShift?.value : IgnoreShift} /* default: false */  isRaw={typeof IgnoreShift === "object" && "isRaw" in IgnoreShift && IgnoreShift.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.VirtualModifierKey]`} name="ModifierKey" id={typeof ModifierKey === "object" && "id" in ModifierKey ? ModifierKey?.id : undefined} value={typeof ModifierKey === "object" && "value" in ModifierKey ? ModifierKey?.value : ModifierKey} /* default: ID0 */  isRaw={typeof ModifierKey === "object" && "isRaw" in ModifierKey && ModifierKey.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Key]`} name="ModifiedTargetKey" id={typeof ModifiedTargetKey === "object" && "id" in ModifiedTargetKey ? ModifiedTargetKey?.id : undefined} value={typeof ModifiedTargetKey === "object" && "value" in ModifiedTargetKey ? ModifiedTargetKey?.value : ModifiedTargetKey} /* default: None */  isRaw={typeof ModifiedTargetKey === "object" && "isRaw" in ModifiedTargetKey && ModifiedTargetKey.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="ModifiedAppendString" id={typeof ModifiedAppendString === "object" && "id" in ModifiedAppendString ? ModifiedAppendString?.id : undefined} value={typeof ModifiedAppendString === "object" && "value" in ModifiedAppendString ? ModifiedAppendString?.value : ModifiedAppendString} /* default: <i>null</i> */  isRaw={typeof ModifiedAppendString === "object" && "isRaw" in ModifiedAppendString && ModifiedAppendString.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.VirtualKeyboard]`} name="Keyboard" id={typeof Keyboard === "object" && "id" in Keyboard ? Keyboard?.id : undefined} value={typeof Keyboard === "object" && "value" in Keyboard ? Keyboard?.value : Keyboard} /* default: ID0 */  isRaw={typeof Keyboard === "object" && "isRaw" in Keyboard && Keyboard.isRaw ? true : undefined} />
        </Component>
      );
    };
    