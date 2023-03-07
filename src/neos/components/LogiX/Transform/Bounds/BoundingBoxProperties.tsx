import { member, Member, Component } from "../../../../core";
    
    export interface BoundingBoxPropertiesInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Bounds?: member<any>;
    }
    
    export function BoundingBoxProperties(props: BoundingBoxPropertiesInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Bounds, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Transform.BoundingBoxProperties" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.BoundingBox]`} name="Bounds" id={typeof Bounds === "object" && "id" in Bounds ? Bounds?.id : undefined} value={typeof Bounds === "object" && "value" in Bounds ? Bounds?.value : Bounds} /* default: ID0 */  />
        </Component>
      );
    };
    