import { member, Member, Component } from "../../../core";
    
    export interface SegmentMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Radius?: member<number>;
PointA?: member<[number, number, number]>;
PointB?: member<[number, number, number]>;
SlotA?: member<any>;
SlotB?: member<any>;
Shading?: member<any>;
    }
    
    export function SegmentMesh(props: SegmentMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Radius,
PointA,
PointB,
SlotA,
SlotB,
Shading, } = props;
    
      return (
        <Component type="FrooxEngine.SegmentMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  isRaw={typeof Radius === "object" && "isRaw" in Radius && Radius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="PointA" id={typeof PointA === "object" && "id" in PointA ? PointA?.id : undefined} value={typeof PointA === "object" && "value" in PointA ? PointA?.value : PointA} /* default: [0; 0; 0] */  isRaw={typeof PointA === "object" && "isRaw" in PointA && PointA.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="PointB" id={typeof PointB === "object" && "id" in PointB ? PointB?.id : undefined} value={typeof PointB === "object" && "value" in PointB ? PointB?.value : PointB} /* default: [0; 0; 0] */  isRaw={typeof PointB === "object" && "isRaw" in PointB && PointB.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TransformRelayRef`} name="SlotA" id={typeof SlotA === "object" && "id" in SlotA ? SlotA?.id : undefined} value={typeof SlotA === "object" && "value" in SlotA ? SlotA?.value : SlotA} /* default: ID0 */  isRaw={typeof SlotA === "object" && "isRaw" in SlotA && SlotA.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TransformRelayRef`} name="SlotB" id={typeof SlotB === "object" && "id" in SlotB ? SlotB?.id : undefined} value={typeof SlotB === "object" && "value" in SlotB ? SlotB?.value : SlotB} /* default: ID0 */  isRaw={typeof SlotB === "object" && "isRaw" in SlotB && SlotB.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Shading]`} name="Shading" id={typeof Shading === "object" && "id" in Shading ? Shading?.id : undefined} value={typeof Shading === "object" && "value" in Shading ? Shading?.value : Shading} /* default: Smooth */  isRaw={typeof Shading === "object" && "isRaw" in Shading && Shading.isRaw ? true : undefined} />
        </Component>
      );
    };
    