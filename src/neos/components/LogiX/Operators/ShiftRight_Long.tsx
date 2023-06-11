import { member, Member, Component } from "../../../core";
    
    export interface ShiftRight_LongInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
A?: member<any>;
Shift?: member<any>;
    }
    
    export function ShiftRight_Long(props: ShiftRight_LongInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
A,
Shift, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.ShiftRight_Long" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int64]`} name="A" id={typeof A === "object" && "id" in A ? A?.id : undefined} value={typeof A === "object" && "value" in A ? A?.value : A} /* default: ID0 */  isRaw={typeof A === "object" && "isRaw" in A && A.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Shift" id={typeof Shift === "object" && "id" in Shift ? Shift?.id : undefined} value={typeof Shift === "object" && "value" in Shift ? Shift?.value : Shift} /* default: ID0 */  isRaw={typeof Shift === "object" && "isRaw" in Shift && Shift.isRaw ? true : undefined} />
        </Component>
      );
    };
    