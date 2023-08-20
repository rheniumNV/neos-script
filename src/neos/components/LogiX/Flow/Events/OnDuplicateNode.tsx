import { member, Member, Component } from "../../../../core";
    
    export interface OnDuplicateNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Duplicated?: member<any>;
    }
    
    export function OnDuplicateNode(props: OnDuplicateNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Duplicated, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.OnDuplicateNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Duplicated" id={typeof Duplicated === "object" && "id" in Duplicated ? Duplicated?.id : undefined} value={typeof Duplicated === "object" && "value" in Duplicated ? Duplicated?.value : Duplicated} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Duplicated === "object" && "isRaw" in Duplicated && Duplicated.isRaw ? true : undefined} />
        </Component>
      );
    };
    