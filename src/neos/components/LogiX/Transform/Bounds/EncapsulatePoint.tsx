import { member, Member, Component } from "../../../../core";
    
    export interface EncapsulatePointInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Bounds?: member<any>;
Point?: member<any>;
    }
    
    export function EncapsulatePoint(props: EncapsulatePointInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Bounds,
Point, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Transform.EncapsulatePoint" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.BoundingBox]`} name="Bounds" id={typeof Bounds === "object" && "id" in Bounds ? Bounds?.id : undefined} value={typeof Bounds === "object" && "value" in Bounds ? Bounds?.value : Bounds} /* default: ID0 */  isRaw={typeof Bounds === "object" && "isRaw" in Bounds && Bounds.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Point" id={typeof Point === "object" && "id" in Point ? Point?.id : undefined} value={typeof Point === "object" && "value" in Point ? Point?.value : Point} /* default: ID0 */  isRaw={typeof Point === "object" && "isRaw" in Point && Point.isRaw ? true : undefined} />
        </Component>
      );
    };
    