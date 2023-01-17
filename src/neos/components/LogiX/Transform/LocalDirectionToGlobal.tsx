import { member, Member, Component } from "../../../core";
    
    export interface LocalDirectionToGlobalInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Instance?: member<any>;
LocalDirection?: member<any>;
    }
    
    export function LocalDirectionToGlobal(props: LocalDirectionToGlobalInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Instance,
LocalDirection, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.LocalDirectionToGlobal" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Instance" id={typeof Instance === "object" && "id" in Instance ? Instance?.id : undefined} value={typeof Instance === "object" && "value" in Instance ? Instance?.value : Instance} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="LocalDirection" id={typeof LocalDirection === "object" && "id" in LocalDirection ? LocalDirection?.id : undefined} value={typeof LocalDirection === "object" && "value" in LocalDirection ? LocalDirection?.value : LocalDirection} /* default: ID0 */  />
        </Component>
      );
    };
    