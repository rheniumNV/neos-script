import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ComputeBoundingBoxInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Instance?: member<any>;
IncludeInactive?: member<any>;
CoordinateSpace?: member<any>;
OnlyWithTag?: member<any>;
    }
    
    export function ComputeBoundingBox(props: ComputeBoundingBoxInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Instance,
IncludeInactive,
CoordinateSpace,
OnlyWithTag, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Transform.ComputeBoundingBox" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Instance" id={typeof Instance === "object" && "id" in Instance ? Instance?.id : undefined} value={typeof Instance === "object" && "value" in Instance ? Instance?.value : Instance} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="IncludeInactive" id={typeof IncludeInactive === "object" && "id" in IncludeInactive ? IncludeInactive?.id : undefined} value={typeof IncludeInactive === "object" && "value" in IncludeInactive ? IncludeInactive?.value : IncludeInactive} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="CoordinateSpace" id={typeof CoordinateSpace === "object" && "id" in CoordinateSpace ? CoordinateSpace?.id : undefined} value={typeof CoordinateSpace === "object" && "value" in CoordinateSpace ? CoordinateSpace?.value : CoordinateSpace} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="OnlyWithTag" id={typeof OnlyWithTag === "object" && "id" in OnlyWithTag ? OnlyWithTag?.id : undefined} value={typeof OnlyWithTag === "object" && "value" in OnlyWithTag ? OnlyWithTag?.value : OnlyWithTag} /* default: ID0 */  />
        </Component>
      );
    };
    