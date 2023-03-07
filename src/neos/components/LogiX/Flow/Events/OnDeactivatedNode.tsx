import { member, Member, Component } from "../../../../core";
    
    export interface OnDeactivatedNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Deactivated?: member<any>;
OnlyHost?: member<any>;
    }
    
    export function OnDeactivatedNode(props: OnDeactivatedNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Deactivated,
OnlyHost, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.OnDeactivatedNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Deactivated" id={typeof Deactivated === "object" && "id" in Deactivated ? Deactivated?.id : undefined} value={typeof Deactivated === "object" && "value" in Deactivated ? Deactivated?.value : Deactivated} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="OnlyHost" id={typeof OnlyHost === "object" && "id" in OnlyHost ? OnlyHost?.id : undefined} value={typeof OnlyHost === "object" && "value" in OnlyHost ? OnlyHost?.value : OnlyHost} /* default: ID0 */  />
        </Component>
      );
    };
    