import { member, Member, Component } from "../../../core";
    
    export interface TriangleDiagnosticMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
TriangleIndex?: member<number>;
Vertex0Color?: member<[number, number, number, number]>;
Vertex1Color?: member<[number, number, number, number]>;
Vertex2Color?: member<[number, number, number, number]>;
Displace?: member<number>;
Mesh?: member<any>;
    }
    
    export function TriangleDiagnosticMesh(props: TriangleDiagnosticMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
TriangleIndex,
Vertex0Color,
Vertex1Color,
Vertex2Color,
Displace,
Mesh, } = props;
    
      return (
        <Component type="FrooxEngine.TriangleDiagnosticMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="TriangleIndex" id={typeof TriangleIndex === "object" && "id" in TriangleIndex ? TriangleIndex?.id : undefined} value={typeof TriangleIndex === "object" && "value" in TriangleIndex ? TriangleIndex?.value : TriangleIndex} /* default: 0 */  isRaw={typeof TriangleIndex === "object" && "isRaw" in TriangleIndex && TriangleIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Vertex0Color" id={typeof Vertex0Color === "object" && "id" in Vertex0Color ? Vertex0Color?.id : undefined} value={typeof Vertex0Color === "object" && "value" in Vertex0Color ? Vertex0Color?.value : Vertex0Color} /* default: [0; 0; 0; 0] */  isRaw={typeof Vertex0Color === "object" && "isRaw" in Vertex0Color && Vertex0Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Vertex1Color" id={typeof Vertex1Color === "object" && "id" in Vertex1Color ? Vertex1Color?.id : undefined} value={typeof Vertex1Color === "object" && "value" in Vertex1Color ? Vertex1Color?.value : Vertex1Color} /* default: [0; 0; 0; 0] */  isRaw={typeof Vertex1Color === "object" && "isRaw" in Vertex1Color && Vertex1Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Vertex2Color" id={typeof Vertex2Color === "object" && "id" in Vertex2Color ? Vertex2Color?.id : undefined} value={typeof Vertex2Color === "object" && "value" in Vertex2Color ? Vertex2Color?.value : Vertex2Color} /* default: [0; 0; 0; 0] */  isRaw={typeof Vertex2Color === "object" && "isRaw" in Vertex2Color && Vertex2Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Displace" id={typeof Displace === "object" && "id" in Displace ? Displace?.id : undefined} value={typeof Displace === "object" && "value" in Displace ? Displace?.value : Displace} /* default: 0 */  isRaw={typeof Displace === "object" && "isRaw" in Displace && Displace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Mesh]`} name="Mesh" id={typeof Mesh === "object" && "id" in Mesh ? Mesh?.id : undefined} value={typeof Mesh === "object" && "value" in Mesh ? Mesh?.value : Mesh} /* default: ID0 */  isRaw={typeof Mesh === "object" && "isRaw" in Mesh && Mesh.isRaw ? true : undefined} />
        </Component>
      );
    };
    