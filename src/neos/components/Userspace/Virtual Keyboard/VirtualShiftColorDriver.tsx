import { member, Member, Component } from "../../../core";
    
    export interface VirtualShiftColorDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Keyboard?: member<any>;
ColorTarget?: member<any>;
NormalColor?: member<[number, number, number, number]>;
ShiftColor?: member<[number, number, number, number]>;
HoldColor?: member<[number, number, number, number]>;
    }
    
    export function VirtualShiftColorDriver(props: VirtualShiftColorDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Keyboard,
ColorTarget,
NormalColor,
ShiftColor,
HoldColor, } = props;
    
      return (
        <Component type="FrooxEngine.VirtualShiftColorDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.VirtualKeyboard]`} name="Keyboard" id={typeof Keyboard === "object" && "id" in Keyboard ? Keyboard?.id : undefined} value={typeof Keyboard === "object" && "value" in Keyboard ? Keyboard?.value : Keyboard} /* default: ID0 */  isRaw={typeof Keyboard === "object" && "isRaw" in Keyboard && Keyboard.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[BaseX.color]]`} name="ColorTarget" id={typeof ColorTarget === "object" && "id" in ColorTarget ? ColorTarget?.id : undefined} value={typeof ColorTarget === "object" && "value" in ColorTarget ? ColorTarget?.value : ColorTarget} /* default: ID0 */  isRaw={typeof ColorTarget === "object" && "isRaw" in ColorTarget && ColorTarget.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="NormalColor" id={typeof NormalColor === "object" && "id" in NormalColor ? NormalColor?.id : undefined} value={typeof NormalColor === "object" && "value" in NormalColor ? NormalColor?.value : NormalColor} /* default: [0; 0; 0; 0] */  isRaw={typeof NormalColor === "object" && "isRaw" in NormalColor && NormalColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="ShiftColor" id={typeof ShiftColor === "object" && "id" in ShiftColor ? ShiftColor?.id : undefined} value={typeof ShiftColor === "object" && "value" in ShiftColor ? ShiftColor?.value : ShiftColor} /* default: [0; 0; 0; 0] */  isRaw={typeof ShiftColor === "object" && "isRaw" in ShiftColor && ShiftColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="HoldColor" id={typeof HoldColor === "object" && "id" in HoldColor ? HoldColor?.id : undefined} value={typeof HoldColor === "object" && "value" in HoldColor ? HoldColor?.value : HoldColor} /* default: [0; 0; 0; 0] */  isRaw={typeof HoldColor === "object" && "isRaw" in HoldColor && HoldColor.isRaw ? true : undefined} />
        </Component>
      );
    };
    