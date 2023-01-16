import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface HitUVCoordinateInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
HitCollider?: member<any>;
HitTriangleIndex?: member<any>;
HitPoint?: member<any>;
    }
    
    export function HitUVCoordinate(props: HitUVCoordinateInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
HitCollider,
HitTriangleIndex,
HitPoint, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Physics.HitUVCoordinate" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.ICollider]`} name="HitCollider" id={typeof HitCollider === "object" && "id" in HitCollider ? HitCollider?.id : undefined} value={typeof HitCollider === "object" && "value" in HitCollider ? HitCollider?.value : HitCollider} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="HitTriangleIndex" id={typeof HitTriangleIndex === "object" && "id" in HitTriangleIndex ? HitTriangleIndex?.id : undefined} value={typeof HitTriangleIndex === "object" && "value" in HitTriangleIndex ? HitTriangleIndex?.value : HitTriangleIndex} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="HitPoint" id={typeof HitPoint === "object" && "id" in HitPoint ? HitPoint?.id : undefined} value={typeof HitPoint === "object" && "value" in HitPoint ? HitPoint?.value : HitPoint} /* default: ID0 */  />
        </Component>
      );
    };
    