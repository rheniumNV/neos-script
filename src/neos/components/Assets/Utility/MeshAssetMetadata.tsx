import { member, Member, Component } from "../../../core";
    
    export interface MeshAssetMetadataInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Mesh?: member<any>;
VertexCount?: member<any>;
TriangleCount?: member<any>;
PointCount?: member<any>;
SubmeshCount?: member<any>;
BoneCount?: member<any>;
BlendshapeCount?: member<any>;
HasNormals?: member<any>;
HasTangents?: member<any>;
HasVertexColors?: member<any>;
HasUV0s?: member<any>;
HasUV1s?: member<any>;
HasUV2s?: member<any>;
HasUV3s?: member<any>;
    }
    
    export function MeshAssetMetadata(props: MeshAssetMetadataInput){
      const { id, persistentId, updateOrder, Enabled,
Mesh,
VertexCount,
TriangleCount,
PointCount,
SubmeshCount,
BoneCount,
BlendshapeCount,
HasNormals,
HasTangents,
HasVertexColors,
HasUV0s,
HasUV1s,
HasUV2s,
HasUV3s, } = props;
    
      return (
        <Component type="FrooxEngine.MeshAssetMetadata" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Mesh]`} name="Mesh" id={typeof Mesh === "object" && "id" in Mesh ? Mesh?.id : undefined} value={typeof Mesh === "object" && "value" in Mesh ? Mesh?.value : Mesh} /* default: ID0 */  isRaw={typeof Mesh === "object" && "isRaw" in Mesh && Mesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="VertexCount" id={typeof VertexCount === "object" && "id" in VertexCount ? VertexCount?.id : undefined} value={typeof VertexCount === "object" && "value" in VertexCount ? VertexCount?.value : VertexCount} /* default: FrooxEngine.RawOutput`1[System.Int32] */  isRaw={typeof VertexCount === "object" && "isRaw" in VertexCount && VertexCount.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="TriangleCount" id={typeof TriangleCount === "object" && "id" in TriangleCount ? TriangleCount?.id : undefined} value={typeof TriangleCount === "object" && "value" in TriangleCount ? TriangleCount?.value : TriangleCount} /* default: FrooxEngine.RawOutput`1[System.Int32] */  isRaw={typeof TriangleCount === "object" && "isRaw" in TriangleCount && TriangleCount.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="PointCount" id={typeof PointCount === "object" && "id" in PointCount ? PointCount?.id : undefined} value={typeof PointCount === "object" && "value" in PointCount ? PointCount?.value : PointCount} /* default: FrooxEngine.RawOutput`1[System.Int32] */  isRaw={typeof PointCount === "object" && "isRaw" in PointCount && PointCount.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="SubmeshCount" id={typeof SubmeshCount === "object" && "id" in SubmeshCount ? SubmeshCount?.id : undefined} value={typeof SubmeshCount === "object" && "value" in SubmeshCount ? SubmeshCount?.value : SubmeshCount} /* default: FrooxEngine.RawOutput`1[System.Int32] */  isRaw={typeof SubmeshCount === "object" && "isRaw" in SubmeshCount && SubmeshCount.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="BoneCount" id={typeof BoneCount === "object" && "id" in BoneCount ? BoneCount?.id : undefined} value={typeof BoneCount === "object" && "value" in BoneCount ? BoneCount?.value : BoneCount} /* default: FrooxEngine.RawOutput`1[System.Int32] */  isRaw={typeof BoneCount === "object" && "isRaw" in BoneCount && BoneCount.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="BlendshapeCount" id={typeof BlendshapeCount === "object" && "id" in BlendshapeCount ? BlendshapeCount?.id : undefined} value={typeof BlendshapeCount === "object" && "value" in BlendshapeCount ? BlendshapeCount?.value : BlendshapeCount} /* default: FrooxEngine.RawOutput`1[System.Int32] */  isRaw={typeof BlendshapeCount === "object" && "isRaw" in BlendshapeCount && BlendshapeCount.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="HasNormals" id={typeof HasNormals === "object" && "id" in HasNormals ? HasNormals?.id : undefined} value={typeof HasNormals === "object" && "value" in HasNormals ? HasNormals?.value : HasNormals} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof HasNormals === "object" && "isRaw" in HasNormals && HasNormals.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="HasTangents" id={typeof HasTangents === "object" && "id" in HasTangents ? HasTangents?.id : undefined} value={typeof HasTangents === "object" && "value" in HasTangents ? HasTangents?.value : HasTangents} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof HasTangents === "object" && "isRaw" in HasTangents && HasTangents.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="HasVertexColors" id={typeof HasVertexColors === "object" && "id" in HasVertexColors ? HasVertexColors?.id : undefined} value={typeof HasVertexColors === "object" && "value" in HasVertexColors ? HasVertexColors?.value : HasVertexColors} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof HasVertexColors === "object" && "isRaw" in HasVertexColors && HasVertexColors.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="HasUV0s" id={typeof HasUV0s === "object" && "id" in HasUV0s ? HasUV0s?.id : undefined} value={typeof HasUV0s === "object" && "value" in HasUV0s ? HasUV0s?.value : HasUV0s} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof HasUV0s === "object" && "isRaw" in HasUV0s && HasUV0s.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="HasUV1s" id={typeof HasUV1s === "object" && "id" in HasUV1s ? HasUV1s?.id : undefined} value={typeof HasUV1s === "object" && "value" in HasUV1s ? HasUV1s?.value : HasUV1s} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof HasUV1s === "object" && "isRaw" in HasUV1s && HasUV1s.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="HasUV2s" id={typeof HasUV2s === "object" && "id" in HasUV2s ? HasUV2s?.id : undefined} value={typeof HasUV2s === "object" && "value" in HasUV2s ? HasUV2s?.value : HasUV2s} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof HasUV2s === "object" && "isRaw" in HasUV2s && HasUV2s.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="HasUV3s" id={typeof HasUV3s === "object" && "id" in HasUV3s ? HasUV3s?.id : undefined} value={typeof HasUV3s === "object" && "value" in HasUV3s ? HasUV3s?.value : HasUV3s} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof HasUV3s === "object" && "isRaw" in HasUV3s && HasUV3s.isRaw ? true : undefined} />
        </Component>
      );
    };
    