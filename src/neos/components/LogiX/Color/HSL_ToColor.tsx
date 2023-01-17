import { member, Member, Component } from "../../../core";
    
    export interface HSL_ToColorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
H?: member<any>;
S?: member<any>;
L?: member<any>;
    }
    
    export function HSL_ToColor(props: HSL_ToColorInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
H,
S,
L, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Color.HSL_ToColor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="H" id={typeof H === "object" && "id" in H ? H?.id : undefined} value={typeof H === "object" && "value" in H ? H?.value : H} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="S" id={typeof S === "object" && "id" in S ? S?.id : undefined} value={typeof S === "object" && "value" in S ? S?.value : S} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="L" id={typeof L === "object" && "id" in L ? L?.id : undefined} value={typeof L === "object" && "value" in L ? L?.value : L} /* default: ID0 */  />
        </Component>
      );
    };
    