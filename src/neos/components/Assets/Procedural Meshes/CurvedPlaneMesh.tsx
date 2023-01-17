import { member, Member, Component } from "../../../core";
    
    export interface CurvedPlaneMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Size?: member<[number, number]>;
Curvature?: member<number>;
TiltAngle?: member<number>;
AspectRatioCompensation?: member<any>;
UVScale?: member<[number, number]>;
UVOffset?: member<[number, number]>;
Segments?: member<number>;
FlatShading?: member<boolean>;
    }
    
    export function CurvedPlaneMesh(props: CurvedPlaneMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Size,
Curvature,
TiltAngle,
AspectRatioCompensation,
UVScale,
UVOffset,
Segments,
FlatShading, } = props;
    
      return (
        <Component type="FrooxEngine.CurvedPlaneMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Curvature" id={typeof Curvature === "object" && "id" in Curvature ? Curvature?.id : undefined} value={typeof Curvature === "object" && "value" in Curvature ? Curvature?.value : Curvature} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TiltAngle" id={typeof TiltAngle === "object" && "id" in TiltAngle ? TiltAngle?.id : undefined} value={typeof TiltAngle === "object" && "value" in TiltAngle ? TiltAngle?.value : TiltAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CurvedPlaneMesh+CurvatureAspectRatioCompensation]`} name="AspectRatioCompensation" id={typeof AspectRatioCompensation === "object" && "id" in AspectRatioCompensation ? AspectRatioCompensation?.id : undefined} value={typeof AspectRatioCompensation === "object" && "value" in AspectRatioCompensation ? AspectRatioCompensation?.value : AspectRatioCompensation} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="UVScale" id={typeof UVScale === "object" && "id" in UVScale ? UVScale?.id : undefined} value={typeof UVScale === "object" && "value" in UVScale ? UVScale?.value : UVScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="UVOffset" id={typeof UVOffset === "object" && "id" in UVOffset ? UVOffset?.id : undefined} value={typeof UVOffset === "object" && "value" in UVOffset ? UVOffset?.value : UVOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Segments" id={typeof Segments === "object" && "id" in Segments ? Segments?.id : undefined} value={typeof Segments === "object" && "value" in Segments ? Segments?.value : Segments} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FlatShading" id={typeof FlatShading === "object" && "id" in FlatShading ? FlatShading?.id : undefined} value={typeof FlatShading === "object" && "value" in FlatShading ? FlatShading?.value : FlatShading} /* default: false */  />
        </Component>
      );
    };
    