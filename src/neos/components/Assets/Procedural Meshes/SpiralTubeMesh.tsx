import { member, Member, Component } from "../../../core";
    
    export interface SpiralTubeMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
TubeRadius?: member<number>;
SpiralRadius?: member<number>;
UpwardTrend?: member<number>;
Sides?: member<number>;
DistanceBetweenRings?: member<number>;
Length?: member<number>;
Ends?: member<any>;
Shading?: member<any>;
    }
    
    export function SpiralTubeMesh(props: SpiralTubeMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
TubeRadius,
SpiralRadius,
UpwardTrend,
Sides,
DistanceBetweenRings,
Length,
Ends,
Shading, } = props;
    
      return (
        <Component type="FrooxEngine.SpiralTubeMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TubeRadius" id={typeof TubeRadius === "object" && "id" in TubeRadius ? TubeRadius?.id : undefined} value={typeof TubeRadius === "object" && "value" in TubeRadius ? TubeRadius?.value : TubeRadius} /* default: 0 */  isRaw={typeof TubeRadius === "object" && "isRaw" in TubeRadius && TubeRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SpiralRadius" id={typeof SpiralRadius === "object" && "id" in SpiralRadius ? SpiralRadius?.id : undefined} value={typeof SpiralRadius === "object" && "value" in SpiralRadius ? SpiralRadius?.value : SpiralRadius} /* default: 0 */  isRaw={typeof SpiralRadius === "object" && "isRaw" in SpiralRadius && SpiralRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="UpwardTrend" id={typeof UpwardTrend === "object" && "id" in UpwardTrend ? UpwardTrend?.id : undefined} value={typeof UpwardTrend === "object" && "value" in UpwardTrend ? UpwardTrend?.value : UpwardTrend} /* default: 0 */  isRaw={typeof UpwardTrend === "object" && "isRaw" in UpwardTrend && UpwardTrend.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Sides" id={typeof Sides === "object" && "id" in Sides ? Sides?.id : undefined} value={typeof Sides === "object" && "value" in Sides ? Sides?.value : Sides} /* default: 0 */  isRaw={typeof Sides === "object" && "isRaw" in Sides && Sides.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DistanceBetweenRings" id={typeof DistanceBetweenRings === "object" && "id" in DistanceBetweenRings ? DistanceBetweenRings?.id : undefined} value={typeof DistanceBetweenRings === "object" && "value" in DistanceBetweenRings ? DistanceBetweenRings?.value : DistanceBetweenRings} /* default: 0 */  isRaw={typeof DistanceBetweenRings === "object" && "isRaw" in DistanceBetweenRings && DistanceBetweenRings.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Length" id={typeof Length === "object" && "id" in Length ? Length?.id : undefined} value={typeof Length === "object" && "value" in Length ? Length?.value : Length} /* default: 0 */  isRaw={typeof Length === "object" && "isRaw" in Length && Length.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Ends]`} name="Ends" id={typeof Ends === "object" && "id" in Ends ? Ends?.id : undefined} value={typeof Ends === "object" && "value" in Ends ? Ends?.value : Ends} /* default: Open */  isRaw={typeof Ends === "object" && "isRaw" in Ends && Ends.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.SegmentedBuilder+Shading]`} name="Shading" id={typeof Shading === "object" && "id" in Shading ? Shading?.id : undefined} value={typeof Shading === "object" && "value" in Shading ? Shading?.value : Shading} /* default: Smooth */  isRaw={typeof Shading === "object" && "isRaw" in Shading && Shading.isRaw ? true : undefined} />
        </Component>
      );
    };
    