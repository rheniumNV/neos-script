import { member, Member, Component } from "../../../../core";
    
    export interface EncapsulateBoundsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Bounds?: member<any>;
OtherBounds?: member<any>;
    }
    
    export function EncapsulateBounds(props: EncapsulateBoundsInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Bounds,
OtherBounds, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Transform.EncapsulateBounds" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.BoundingBox]`} name="Bounds" id={typeof Bounds === "object" && "id" in Bounds ? Bounds?.id : undefined} value={typeof Bounds === "object" && "value" in Bounds ? Bounds?.value : Bounds} /* default: ID0 */  isRaw={typeof Bounds === "object" && "isRaw" in Bounds && Bounds.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.BoundingBox]`} name="OtherBounds" id={typeof OtherBounds === "object" && "id" in OtherBounds ? OtherBounds?.id : undefined} value={typeof OtherBounds === "object" && "value" in OtherBounds ? OtherBounds?.value : OtherBounds} /* default: ID0 */  isRaw={typeof OtherBounds === "object" && "isRaw" in OtherBounds && OtherBounds.isRaw ? true : undefined} />
        </Component>
      );
    };
    