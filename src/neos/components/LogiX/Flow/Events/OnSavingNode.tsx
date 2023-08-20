import { member, Member, Component } from "../../../../core";
    
    export interface OnSavingNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Saving?: member<any>;
    }
    
    export function OnSavingNode(props: OnSavingNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Saving, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.OnSavingNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Saving" id={typeof Saving === "object" && "id" in Saving ? Saving?.id : undefined} value={typeof Saving === "object" && "value" in Saving ? Saving?.value : Saving} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Saving === "object" && "isRaw" in Saving && Saving.isRaw ? true : undefined} />
        </Component>
      );
    };
    