import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface SkinnedMeshRendererInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Mesh?: member<any>;
ShadowCastMode?: member<any>;
MotionVectorMode?: member<any>;
SortingOrder?: member<number>;
BoundsComputeMethod?: member<any>;
ProxyBoundsSource?: member<any>;
ExplicitLocalBounds?: member<any>;
    }
    
    export function SkinnedMeshRenderer(props: SkinnedMeshRendererInput){
      const { id, persistentId, updateOrder, Enabled,
Mesh,
ShadowCastMode,
MotionVectorMode,
SortingOrder,
BoundsComputeMethod,
ProxyBoundsSource,
ExplicitLocalBounds, } = props;
    
      return (
        <Component type="FrooxEngine.SkinnedMeshRenderer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Mesh]`} name="Mesh" id={typeof Mesh === "object" && "id" in Mesh ? Mesh?.id : undefined} value={typeof Mesh === "object" && "value" in Mesh ? Mesh?.value : Mesh} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ShadowCastMode]`} name="ShadowCastMode" id={typeof ShadowCastMode === "object" && "id" in ShadowCastMode ? ShadowCastMode?.id : undefined} value={typeof ShadowCastMode === "object" && "value" in ShadowCastMode ? ShadowCastMode?.value : ShadowCastMode} /* default: Off */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.MotionVectorMode]`} name="MotionVectorMode" id={typeof MotionVectorMode === "object" && "id" in MotionVectorMode ? MotionVectorMode?.id : undefined} value={typeof MotionVectorMode === "object" && "value" in MotionVectorMode ? MotionVectorMode?.value : MotionVectorMode} /* default: Camera */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="SortingOrder" id={typeof SortingOrder === "object" && "id" in SortingOrder ? SortingOrder?.id : undefined} value={typeof SortingOrder === "object" && "value" in SortingOrder ? SortingOrder?.value : SortingOrder} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.SkinnedBounds]`} name="BoundsComputeMethod" id={typeof BoundsComputeMethod === "object" && "id" in BoundsComputeMethod ? BoundsComputeMethod?.id : undefined} value={typeof BoundsComputeMethod === "object" && "value" in BoundsComputeMethod ? BoundsComputeMethod?.value : BoundsComputeMethod} /* default: Static */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SkinnedMeshRenderer]`} name="ProxyBoundsSource" id={typeof ProxyBoundsSource === "object" && "id" in ProxyBoundsSource ? ProxyBoundsSource?.id : undefined} value={typeof ProxyBoundsSource === "object" && "value" in ProxyBoundsSource ? ProxyBoundsSource?.value : ProxyBoundsSource} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="ExplicitLocalBounds" id={typeof ExplicitLocalBounds === "object" && "id" in ExplicitLocalBounds ? ExplicitLocalBounds?.id : undefined} value={typeof ExplicitLocalBounds === "object" && "value" in ExplicitLocalBounds ? ExplicitLocalBounds?.value : ExplicitLocalBounds} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  />
        </Component>
      );
    };
    