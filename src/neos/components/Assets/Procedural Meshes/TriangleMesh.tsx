import { member, Member, Component } from "../../../core";
    
    export interface TriangleMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Vertex0?: member<any>;
Vertex1?: member<any>;
Vertex2?: member<any>;
AutoNormals?: member<boolean>;
AutoTangents?: member<boolean>;
DualSided?: member<boolean>;
    }
    
    export function TriangleMesh(props: TriangleMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Vertex0,
Vertex1,
Vertex2,
AutoNormals,
AutoTangents,
DualSided, } = props;
    
      return (
        <Component type="FrooxEngine.TriangleMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TriangleMesh+Vertex`} name="Vertex0" id={typeof Vertex0 === "object" && "id" in Vertex0 ? Vertex0?.id : undefined} value={typeof Vertex0 === "object" && "value" in Vertex0 ? Vertex0?.value : Vertex0} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.TriangleMesh\+Vertex,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof Vertex0 === "object" && "isRaw" in Vertex0 && Vertex0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TriangleMesh+Vertex`} name="Vertex1" id={typeof Vertex1 === "object" && "id" in Vertex1 ? Vertex1?.id : undefined} value={typeof Vertex1 === "object" && "value" in Vertex1 ? Vertex1?.value : Vertex1} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.TriangleMesh\+Vertex,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof Vertex1 === "object" && "isRaw" in Vertex1 && Vertex1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TriangleMesh+Vertex`} name="Vertex2" id={typeof Vertex2 === "object" && "id" in Vertex2 ? Vertex2?.id : undefined} value={typeof Vertex2 === "object" && "value" in Vertex2 ? Vertex2?.value : Vertex2} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.TriangleMesh\+Vertex,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof Vertex2 === "object" && "isRaw" in Vertex2 && Vertex2.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoNormals" id={typeof AutoNormals === "object" && "id" in AutoNormals ? AutoNormals?.id : undefined} value={typeof AutoNormals === "object" && "value" in AutoNormals ? AutoNormals?.value : AutoNormals} /* default: false */  isRaw={typeof AutoNormals === "object" && "isRaw" in AutoNormals && AutoNormals.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoTangents" id={typeof AutoTangents === "object" && "id" in AutoTangents ? AutoTangents?.id : undefined} value={typeof AutoTangents === "object" && "value" in AutoTangents ? AutoTangents?.value : AutoTangents} /* default: false */  isRaw={typeof AutoTangents === "object" && "isRaw" in AutoTangents && AutoTangents.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DualSided" id={typeof DualSided === "object" && "id" in DualSided ? DualSided?.id : undefined} value={typeof DualSided === "object" && "value" in DualSided ? DualSided?.value : DualSided} /* default: false */  isRaw={typeof DualSided === "object" && "isRaw" in DualSided && DualSided.isRaw ? true : undefined} />
        </Component>
      );
    };
    