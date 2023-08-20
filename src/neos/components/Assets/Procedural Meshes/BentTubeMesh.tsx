import { member, Member, Component } from "../../../core";
    
    export interface BentTubeMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
Radius?: member<number>;
Sides?: member<number>;
Segments?: member<number>;
StartPoint?: member<[number, number, number]>;
DirectTargetPoint?: member<[number, number, number]>;
ActualTargetPoint?: member<[number, number, number]>;
StartPointColor?: member<[number, number, number, number]>;
EndPointColor?: member<[number, number, number, number]>;
Ends?: member<any>;
Shading?: member<any>;
    }
    
    export function BentTubeMesh(props: BentTubeMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
Radius,
Sides,
Segments,
StartPoint,
DirectTargetPoint,
ActualTargetPoint,
StartPointColor,
EndPointColor,
Ends,
Shading, } = props;
    
      return (
        <Component type="FrooxEngine.BentTubeMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  isRaw={typeof Radius === "object" && "isRaw" in Radius && Radius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Sides" id={typeof Sides === "object" && "id" in Sides ? Sides?.id : undefined} value={typeof Sides === "object" && "value" in Sides ? Sides?.value : Sides} /* default: 0 */  isRaw={typeof Sides === "object" && "isRaw" in Sides && Sides.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Segments" id={typeof Segments === "object" && "id" in Segments ? Segments?.id : undefined} value={typeof Segments === "object" && "value" in Segments ? Segments?.value : Segments} /* default: 0 */  isRaw={typeof Segments === "object" && "isRaw" in Segments && Segments.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="StartPoint" id={typeof StartPoint === "object" && "id" in StartPoint ? StartPoint?.id : undefined} value={typeof StartPoint === "object" && "value" in StartPoint ? StartPoint?.value : StartPoint} /* default: [0; 0; 0] */  isRaw={typeof StartPoint === "object" && "isRaw" in StartPoint && StartPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="DirectTargetPoint" id={typeof DirectTargetPoint === "object" && "id" in DirectTargetPoint ? DirectTargetPoint?.id : undefined} value={typeof DirectTargetPoint === "object" && "value" in DirectTargetPoint ? DirectTargetPoint?.value : DirectTargetPoint} /* default: [0; 0; 0] */  isRaw={typeof DirectTargetPoint === "object" && "isRaw" in DirectTargetPoint && DirectTargetPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="ActualTargetPoint" id={typeof ActualTargetPoint === "object" && "id" in ActualTargetPoint ? ActualTargetPoint?.id : undefined} value={typeof ActualTargetPoint === "object" && "value" in ActualTargetPoint ? ActualTargetPoint?.value : ActualTargetPoint} /* default: [0; 0; 0] */  isRaw={typeof ActualTargetPoint === "object" && "isRaw" in ActualTargetPoint && ActualTargetPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="StartPointColor" id={typeof StartPointColor === "object" && "id" in StartPointColor ? StartPointColor?.id : undefined} value={typeof StartPointColor === "object" && "value" in StartPointColor ? StartPointColor?.value : StartPointColor} /* default: [0; 0; 0; 0] */  isRaw={typeof StartPointColor === "object" && "isRaw" in StartPointColor && StartPointColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EndPointColor" id={typeof EndPointColor === "object" && "id" in EndPointColor ? EndPointColor?.id : undefined} value={typeof EndPointColor === "object" && "value" in EndPointColor ? EndPointColor?.value : EndPointColor} /* default: [0; 0; 0; 0] */  isRaw={typeof EndPointColor === "object" && "isRaw" in EndPointColor && EndPointColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Ends]`} name="Ends" id={typeof Ends === "object" && "id" in Ends ? Ends?.id : undefined} value={typeof Ends === "object" && "value" in Ends ? Ends?.value : Ends} /* default: Open */  isRaw={typeof Ends === "object" && "isRaw" in Ends && Ends.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Shading]`} name="Shading" id={typeof Shading === "object" && "id" in Shading ? Shading?.id : undefined} value={typeof Shading === "object" && "value" in Shading ? Shading?.value : Shading} /* default: Smooth */  isRaw={typeof Shading === "object" && "isRaw" in Shading && Shading.isRaw ? true : undefined} />
        </Component>
      );
    };
    