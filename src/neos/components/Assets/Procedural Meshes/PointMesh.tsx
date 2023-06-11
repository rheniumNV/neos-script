import { member, Member, Component } from "../../../core";
    
    export interface PointMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Points?: member<any>;
Sizes?: member<any>;
Rotations?: member<any>;
Colors?: member<any>;
UVs?: member<any>;
Sort?: member<boolean>;
SortPoint?: member<[number, number, number]>;
    }
    
    export function PointMesh(props: PointMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Points,
Sizes,
Rotations,
Colors,
UVs,
Sort,
SortPoint, } = props;
    
      return (
        <Component type="FrooxEngine.PointMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncArray\`1[BaseX.float3]`} name="Points" id={typeof Points === "object" && "id" in Points ? Points?.id : undefined} value={typeof Points === "object" && "value" in Points ? Points?.value : Points} /* default: FrooxEngine.SyncArray`1[BaseX.float3] */  isRaw={typeof Points === "object" && "isRaw" in Points && Points.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncArray\`1[BaseX.float2]`} name="Sizes" id={typeof Sizes === "object" && "id" in Sizes ? Sizes?.id : undefined} value={typeof Sizes === "object" && "value" in Sizes ? Sizes?.value : Sizes} /* default: FrooxEngine.SyncArray`1[BaseX.float2] */  isRaw={typeof Sizes === "object" && "isRaw" in Sizes && Sizes.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncArray\`1[System.Single]`} name="Rotations" id={typeof Rotations === "object" && "id" in Rotations ? Rotations?.id : undefined} value={typeof Rotations === "object" && "value" in Rotations ? Rotations?.value : Rotations} /* default: FrooxEngine.SyncArray`1[System.Single] */  isRaw={typeof Rotations === "object" && "isRaw" in Rotations && Rotations.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncArray\`1[BaseX.color]`} name="Colors" id={typeof Colors === "object" && "id" in Colors ? Colors?.id : undefined} value={typeof Colors === "object" && "value" in Colors ? Colors?.value : Colors} /* default: FrooxEngine.SyncArray`1[BaseX.color] */  isRaw={typeof Colors === "object" && "isRaw" in Colors && Colors.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncArray\`1[BaseX.float4]`} name="UVs" id={typeof UVs === "object" && "id" in UVs ? UVs?.id : undefined} value={typeof UVs === "object" && "value" in UVs ? UVs?.value : UVs} /* default: FrooxEngine.SyncArray`1[BaseX.float4] */  isRaw={typeof UVs === "object" && "isRaw" in UVs && UVs.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Sort" id={typeof Sort === "object" && "id" in Sort ? Sort?.id : undefined} value={typeof Sort === "object" && "value" in Sort ? Sort?.value : Sort} /* default: false */  isRaw={typeof Sort === "object" && "isRaw" in Sort && Sort.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="SortPoint" id={typeof SortPoint === "object" && "id" in SortPoint ? SortPoint?.id : undefined} value={typeof SortPoint === "object" && "value" in SortPoint ? SortPoint?.value : SortPoint} /* default: [0; 0; 0] */  isRaw={typeof SortPoint === "object" && "isRaw" in SortPoint && SortPoint.isRaw ? true : undefined} />
        </Component>
      );
    };
    