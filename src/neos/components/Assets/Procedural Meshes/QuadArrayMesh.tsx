import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface QuadArrayMeshInput {
        
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
    }
    
    export function QuadArrayMesh(props: QuadArrayMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Points,
Sizes,
Rotations,
Colors,
UVs, } = props;
    
      return (
        <Component type="FrooxEngine.QuadArrayMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  />
<Member type={`FrooxEngine.SyncArray\`1[BaseX.float3]`} name="Points" id={typeof Points === "object" && "id" in Points ? Points?.id : undefined} value={typeof Points === "object" && "value" in Points ? Points?.value : Points} /* default: FrooxEngine.SyncArray`1[BaseX.float3] */  />
<Member type={`FrooxEngine.SyncArray\`1[BaseX.float2]`} name="Sizes" id={typeof Sizes === "object" && "id" in Sizes ? Sizes?.id : undefined} value={typeof Sizes === "object" && "value" in Sizes ? Sizes?.value : Sizes} /* default: FrooxEngine.SyncArray`1[BaseX.float2] */  />
<Member type={`FrooxEngine.SyncArray\`1[BaseX.floatQ]`} name="Rotations" id={typeof Rotations === "object" && "id" in Rotations ? Rotations?.id : undefined} value={typeof Rotations === "object" && "value" in Rotations ? Rotations?.value : Rotations} /* default: FrooxEngine.SyncArray`1[BaseX.floatQ] */  />
<Member type={`FrooxEngine.SyncArray\`1[BaseX.color]`} name="Colors" id={typeof Colors === "object" && "id" in Colors ? Colors?.id : undefined} value={typeof Colors === "object" && "value" in Colors ? Colors?.value : Colors} /* default: FrooxEngine.SyncArray`1[BaseX.color] */  />
<Member type={`FrooxEngine.SyncArray\`1[BaseX.float4]`} name="UVs" id={typeof UVs === "object" && "id" in UVs ? UVs?.id : undefined} value={typeof UVs === "object" && "value" in UVs ? UVs?.value : UVs} /* default: FrooxEngine.SyncArray`1[BaseX.float4] */  />
        </Component>
      );
    };
    