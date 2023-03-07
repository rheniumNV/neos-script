import { member, Member, Component } from "../../../../core";
    
    export interface OnActivatedNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Activated?: member<any>;
OnlyHost?: member<any>;
    }
    
    export function OnActivatedNode(props: OnActivatedNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Activated,
OnlyHost, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.OnActivatedNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Activated" id={typeof Activated === "object" && "id" in Activated ? Activated?.id : undefined} value={typeof Activated === "object" && "value" in Activated ? Activated?.value : Activated} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="OnlyHost" id={typeof OnlyHost === "object" && "id" in OnlyHost ? OnlyHost?.id : undefined} value={typeof OnlyHost === "object" && "value" in OnlyHost ? OnlyHost?.value : OnlyHost} /* default: ID0 */  />
        </Component>
      );
    };
    