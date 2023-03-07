import { member, Member, Component } from "../../core";
    
    export interface ConvexHullMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Points?: member<any>;
FlatShading?: member<boolean>;
MinVertexDistance?: member<number>;
    }
    
    export function ConvexHullMesh(props: ConvexHullMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Points,
FlatShading,
MinVertexDistance, } = props;
    
      return (
        <Component type="FrooxEngine.ConvexHullMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  />
<Member type={`FrooxEngine.SyncArray\`1[BaseX.float3]`} name="Points" id={typeof Points === "object" && "id" in Points ? Points?.id : undefined} value={typeof Points === "object" && "value" in Points ? Points?.value : Points} /* default: FrooxEngine.SyncArray`1[BaseX.float3] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FlatShading" id={typeof FlatShading === "object" && "id" in FlatShading ? FlatShading?.id : undefined} value={typeof FlatShading === "object" && "value" in FlatShading ? FlatShading?.value : FlatShading} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="MinVertexDistance" id={typeof MinVertexDistance === "object" && "id" in MinVertexDistance ? MinVertexDistance?.id : undefined} value={typeof MinVertexDistance === "object" && "value" in MinVertexDistance ? MinVertexDistance?.value : MinVertexDistance} /* default: 0 */  />
        </Component>
      );
    };
    