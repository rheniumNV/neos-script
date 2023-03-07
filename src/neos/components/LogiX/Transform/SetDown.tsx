import { member, Member, Component } from "../../../core";
    
    export interface SetDownInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Instance?: member<any>;
Down?: member<any>;
OnSet?: member<any>;
    }
    
    export function SetDown(props: SetDownInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Instance,
Down,
OnSet, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.SetDown" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Instance" id={typeof Instance === "object" && "id" in Instance ? Instance?.id : undefined} value={typeof Instance === "object" && "value" in Instance ? Instance?.value : Instance} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Down" id={typeof Down === "object" && "id" in Down ? Down?.id : undefined} value={typeof Down === "object" && "value" in Down ? Down?.value : Down} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSet" id={typeof OnSet === "object" && "id" in OnSet ? OnSet?.id : undefined} value={typeof OnSet === "object" && "value" in OnSet ? OnSet?.value : OnSet} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    