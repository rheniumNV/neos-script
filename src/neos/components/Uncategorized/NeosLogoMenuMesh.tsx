import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface NeosLogoMenuMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
ExpandLerp?: member<number>;
LogoCircle?: member<boolean>;
LogoRadiusStart?: member<number>;
LogoThickness?: member<number>;
LogoMainSegmentArc?: member<number>;
SeparationAngle?: member<number>;
MenuMainSegmentArc?: member<number>;
CircleItemCount?: member<number>;
MenuRadiusStart?: member<number>;
MenuThickness?: member<number>;
FillColor?: member<[number, number, number, number]>;
OutlineColor?: member<[number, number, number, number]>;
CircleItemOverrides?: member<any>;
IndependentSegments?: member<any>;
OutlineWidth?: member<number>;
    }
    
    export function NeosLogoMenuMesh(props: NeosLogoMenuMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
ExpandLerp,
LogoCircle,
LogoRadiusStart,
LogoThickness,
LogoMainSegmentArc,
SeparationAngle,
MenuMainSegmentArc,
CircleItemCount,
MenuRadiusStart,
MenuThickness,
FillColor,
OutlineColor,
CircleItemOverrides,
IndependentSegments,
OutlineWidth, } = props;
    
      return (
        <Component type="FrooxEngine.NeosLogoMenuMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ExpandLerp" id={typeof ExpandLerp === "object" && "id" in ExpandLerp ? ExpandLerp?.id : undefined} value={typeof ExpandLerp === "object" && "value" in ExpandLerp ? ExpandLerp?.value : ExpandLerp} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="LogoCircle" id={typeof LogoCircle === "object" && "id" in LogoCircle ? LogoCircle?.id : undefined} value={typeof LogoCircle === "object" && "value" in LogoCircle ? LogoCircle?.value : LogoCircle} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LogoRadiusStart" id={typeof LogoRadiusStart === "object" && "id" in LogoRadiusStart ? LogoRadiusStart?.id : undefined} value={typeof LogoRadiusStart === "object" && "value" in LogoRadiusStart ? LogoRadiusStart?.value : LogoRadiusStart} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LogoThickness" id={typeof LogoThickness === "object" && "id" in LogoThickness ? LogoThickness?.id : undefined} value={typeof LogoThickness === "object" && "value" in LogoThickness ? LogoThickness?.value : LogoThickness} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LogoMainSegmentArc" id={typeof LogoMainSegmentArc === "object" && "id" in LogoMainSegmentArc ? LogoMainSegmentArc?.id : undefined} value={typeof LogoMainSegmentArc === "object" && "value" in LogoMainSegmentArc ? LogoMainSegmentArc?.value : LogoMainSegmentArc} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SeparationAngle" id={typeof SeparationAngle === "object" && "id" in SeparationAngle ? SeparationAngle?.id : undefined} value={typeof SeparationAngle === "object" && "value" in SeparationAngle ? SeparationAngle?.value : SeparationAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MenuMainSegmentArc" id={typeof MenuMainSegmentArc === "object" && "id" in MenuMainSegmentArc ? MenuMainSegmentArc?.id : undefined} value={typeof MenuMainSegmentArc === "object" && "value" in MenuMainSegmentArc ? MenuMainSegmentArc?.value : MenuMainSegmentArc} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="CircleItemCount" id={typeof CircleItemCount === "object" && "id" in CircleItemCount ? CircleItemCount?.id : undefined} value={typeof CircleItemCount === "object" && "value" in CircleItemCount ? CircleItemCount?.value : CircleItemCount} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MenuRadiusStart" id={typeof MenuRadiusStart === "object" && "id" in MenuRadiusStart ? MenuRadiusStart?.id : undefined} value={typeof MenuRadiusStart === "object" && "value" in MenuRadiusStart ? MenuRadiusStart?.value : MenuRadiusStart} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MenuThickness" id={typeof MenuThickness === "object" && "id" in MenuThickness ? MenuThickness?.id : undefined} value={typeof MenuThickness === "object" && "value" in MenuThickness ? MenuThickness?.value : MenuThickness} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="FillColor" id={typeof FillColor === "object" && "id" in FillColor ? FillColor?.id : undefined} value={typeof FillColor === "object" && "value" in FillColor ? FillColor?.value : FillColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="OutlineColor" id={typeof OutlineColor === "object" && "id" in OutlineColor ? OutlineColor?.id : undefined} value={typeof OutlineColor === "object" && "value" in OutlineColor ? OutlineColor?.value : OutlineColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.NeosLogoMenuMesh+MenuSegment]`} name="CircleItemOverrides" id={typeof CircleItemOverrides === "object" && "id" in CircleItemOverrides ? CircleItemOverrides?.id : undefined} value={typeof CircleItemOverrides === "object" && "value" in CircleItemOverrides ? CircleItemOverrides?.value : CircleItemOverrides} /* default: FrooxEngine.SyncList`1[FrooxEngine.NeosLogoMenuMesh+MenuSegment] */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.NeosLogoMenuMesh+MenuSegment]`} name="IndependentSegments" id={typeof IndependentSegments === "object" && "id" in IndependentSegments ? IndependentSegments?.id : undefined} value={typeof IndependentSegments === "object" && "value" in IndependentSegments ? IndependentSegments?.value : IndependentSegments} /* default: FrooxEngine.SyncList`1[FrooxEngine.NeosLogoMenuMesh+MenuSegment] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OutlineWidth" id={typeof OutlineWidth === "object" && "id" in OutlineWidth ? OutlineWidth?.id : undefined} value={typeof OutlineWidth === "object" && "value" in OutlineWidth ? OutlineWidth?.value : OutlineWidth} /* default: 0 */  />
        </Component>
      );
    };
    