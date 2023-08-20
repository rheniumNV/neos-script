import { member, Member, Component } from "../../../core";
    
    export interface MulMulti_Double2x2Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Operands?: member<any>;
    }
    
    export function MulMulti_Double2x2(props: MulMulti_Double2x2Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Operands, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.MulMulti_Double2x2" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.LogiX.Input\`1[BaseX.double2x2]]`} name="Operands" id={typeof Operands === "object" && "id" in Operands ? Operands?.id : undefined} value={typeof Operands === "object" && "value" in Operands ? Operands?.value : Operands} /* default: FrooxEngine.SyncList`1[FrooxEngine.LogiX.Input`1[BaseX.double2x2]] */  isRaw={typeof Operands === "object" && "isRaw" in Operands && Operands.isRaw ? true : undefined} />
        </Component>
      );
    };
    