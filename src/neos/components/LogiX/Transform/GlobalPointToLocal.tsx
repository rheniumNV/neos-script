import { member, Member, Component } from "../../../core";
    
    export interface GlobalPointToLocalInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Instance?: member<any>;
GlobalPoint?: member<any>;
    }
    
    export function GlobalPointToLocal(props: GlobalPointToLocalInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Instance,
GlobalPoint, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.GlobalPointToLocal" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Instance" id={typeof Instance === "object" && "id" in Instance ? Instance?.id : undefined} value={typeof Instance === "object" && "value" in Instance ? Instance?.value : Instance} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="GlobalPoint" id={typeof GlobalPoint === "object" && "id" in GlobalPoint ? GlobalPoint?.id : undefined} value={typeof GlobalPoint === "object" && "value" in GlobalPoint ? GlobalPoint?.value : GlobalPoint} /* default: ID0 */  />
        </Component>
      );
    };
    