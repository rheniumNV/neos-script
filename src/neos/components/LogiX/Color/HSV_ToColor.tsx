import { member, Member, Component } from "../../../core";
    
    export interface HSV_ToColorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
H?: member<any>;
S?: member<any>;
V?: member<any>;
    }
    
    export function HSV_ToColor(props: HSV_ToColorInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
H,
S,
V, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Color.HSV_ToColor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="H" id={typeof H === "object" && "id" in H ? H?.id : undefined} value={typeof H === "object" && "value" in H ? H?.value : H} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="S" id={typeof S === "object" && "id" in S ? S?.id : undefined} value={typeof S === "object" && "value" in S ? S?.value : S} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="V" id={typeof V === "object" && "id" in V ? V?.id : undefined} value={typeof V === "object" && "value" in V ? V?.value : V} /* default: ID0 */  />
        </Component>
      );
    };
    