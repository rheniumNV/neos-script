import { member, Member, Component } from "../../../core";
    
    export interface BallisticPathMeshInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
OverrideBoundingBox?: member<boolean>;
OverridenBoundingBox?: member<any>;
InitialPosition?: member<[number, number, number]>;
InitialVelocity?: member<[number, number, number]>;
Gravity?: member<[number, number, number]>;
Drag?: member<number>;
Mode?: member<any>;
StepSize?: member<number>;
TotalUnits?: member<number>;
Shape?: member<any>;
Size?: member<number>;
Points?: member<number>;
DualSided?: member<boolean>;
Up?: member<[number, number, number]>;
DistanceSizeGrowth?: member<number>;
MinGrownSize?: member<number>;
MaxGrownSize?: member<number>;
UseLastSegment?: member<boolean>;
LastSegmentPosition?: member<[number, number, number]>;
    }
    
    export function BallisticPathMesh(props: BallisticPathMeshInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
OverrideBoundingBox,
OverridenBoundingBox,
InitialPosition,
InitialVelocity,
Gravity,
Drag,
Mode,
StepSize,
TotalUnits,
Shape,
Size,
Points,
DualSided,
Up,
DistanceSizeGrowth,
MinGrownSize,
MaxGrownSize,
UseLastSegment,
LastSegmentPosition, } = props;
    
      return (
        <Component type="FrooxEngine.BallisticPathMesh" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideBoundingBox" id={typeof OverrideBoundingBox === "object" && "id" in OverrideBoundingBox ? OverrideBoundingBox?.id : undefined} value={typeof OverrideBoundingBox === "object" && "value" in OverrideBoundingBox ? OverrideBoundingBox?.value : OverrideBoundingBox} /* default: false */  isRaw={typeof OverrideBoundingBox === "object" && "isRaw" in OverrideBoundingBox && OverrideBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.BoundingBox]`} name="OverridenBoundingBox" id={typeof OverridenBoundingBox === "object" && "id" in OverridenBoundingBox ? OverridenBoundingBox?.id : undefined} value={typeof OverridenBoundingBox === "object" && "value" in OverridenBoundingBox ? OverridenBoundingBox?.value : OverridenBoundingBox} /* default: Center: [0; 0; 0] Size: [0; 0; 0] -- Min: [0; 0; 0] Max: [0; 0; 0] */  isRaw={typeof OverridenBoundingBox === "object" && "isRaw" in OverridenBoundingBox && OverridenBoundingBox.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="InitialPosition" id={typeof InitialPosition === "object" && "id" in InitialPosition ? InitialPosition?.id : undefined} value={typeof InitialPosition === "object" && "value" in InitialPosition ? InitialPosition?.value : InitialPosition} /* default: [0; 0; 0] */  isRaw={typeof InitialPosition === "object" && "isRaw" in InitialPosition && InitialPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="InitialVelocity" id={typeof InitialVelocity === "object" && "id" in InitialVelocity ? InitialVelocity?.id : undefined} value={typeof InitialVelocity === "object" && "value" in InitialVelocity ? InitialVelocity?.value : InitialVelocity} /* default: [0; 0; 0] */  isRaw={typeof InitialVelocity === "object" && "isRaw" in InitialVelocity && InitialVelocity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Gravity" id={typeof Gravity === "object" && "id" in Gravity ? Gravity?.id : undefined} value={typeof Gravity === "object" && "value" in Gravity ? Gravity?.value : Gravity} /* default: [0; 0; 0] */  isRaw={typeof Gravity === "object" && "isRaw" in Gravity && Gravity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Drag" id={typeof Drag === "object" && "id" in Drag ? Drag?.id : undefined} value={typeof Drag === "object" && "value" in Drag ? Drag?.value : Drag} /* default: 0 */  isRaw={typeof Drag === "object" && "isRaw" in Drag && Drag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BallisticPathMesh+StepMode]`} name="Mode" id={typeof Mode === "object" && "id" in Mode ? Mode?.id : undefined} value={typeof Mode === "object" && "value" in Mode ? Mode?.value : Mode} /* default: Time */  isRaw={typeof Mode === "object" && "isRaw" in Mode && Mode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StepSize" id={typeof StepSize === "object" && "id" in StepSize ? StepSize?.id : undefined} value={typeof StepSize === "object" && "value" in StepSize ? StepSize?.value : StepSize} /* default: 0 */  isRaw={typeof StepSize === "object" && "isRaw" in StepSize && StepSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TotalUnits" id={typeof TotalUnits === "object" && "id" in TotalUnits ? TotalUnits?.id : undefined} value={typeof TotalUnits === "object" && "value" in TotalUnits ? TotalUnits?.value : TotalUnits} /* default: 0 */  isRaw={typeof TotalUnits === "object" && "isRaw" in TotalUnits && TotalUnits.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BallisticPathMesh+PathShape]`} name="Shape" id={typeof Shape === "object" && "id" in Shape ? Shape?.id : undefined} value={typeof Shape === "object" && "value" in Shape ? Shape?.value : Shape} /* default: Stripe */  isRaw={typeof Shape === "object" && "isRaw" in Shape && Shape.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: 0 */  isRaw={typeof Size === "object" && "isRaw" in Size && Size.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Points" id={typeof Points === "object" && "id" in Points ? Points?.id : undefined} value={typeof Points === "object" && "value" in Points ? Points?.value : Points} /* default: 0 */  isRaw={typeof Points === "object" && "isRaw" in Points && Points.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DualSided" id={typeof DualSided === "object" && "id" in DualSided ? DualSided?.id : undefined} value={typeof DualSided === "object" && "value" in DualSided ? DualSided?.value : DualSided} /* default: false */  isRaw={typeof DualSided === "object" && "isRaw" in DualSided && DualSided.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Up" id={typeof Up === "object" && "id" in Up ? Up?.id : undefined} value={typeof Up === "object" && "value" in Up ? Up?.value : Up} /* default: [0; 0; 0] */  isRaw={typeof Up === "object" && "isRaw" in Up && Up.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DistanceSizeGrowth" id={typeof DistanceSizeGrowth === "object" && "id" in DistanceSizeGrowth ? DistanceSizeGrowth?.id : undefined} value={typeof DistanceSizeGrowth === "object" && "value" in DistanceSizeGrowth ? DistanceSizeGrowth?.value : DistanceSizeGrowth} /* default: 0 */  isRaw={typeof DistanceSizeGrowth === "object" && "isRaw" in DistanceSizeGrowth && DistanceSizeGrowth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinGrownSize" id={typeof MinGrownSize === "object" && "id" in MinGrownSize ? MinGrownSize?.id : undefined} value={typeof MinGrownSize === "object" && "value" in MinGrownSize ? MinGrownSize?.value : MinGrownSize} /* default: 0 */  isRaw={typeof MinGrownSize === "object" && "isRaw" in MinGrownSize && MinGrownSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxGrownSize" id={typeof MaxGrownSize === "object" && "id" in MaxGrownSize ? MaxGrownSize?.id : undefined} value={typeof MaxGrownSize === "object" && "value" in MaxGrownSize ? MaxGrownSize?.value : MaxGrownSize} /* default: 0 */  isRaw={typeof MaxGrownSize === "object" && "isRaw" in MaxGrownSize && MaxGrownSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseLastSegment" id={typeof UseLastSegment === "object" && "id" in UseLastSegment ? UseLastSegment?.id : undefined} value={typeof UseLastSegment === "object" && "value" in UseLastSegment ? UseLastSegment?.value : UseLastSegment} /* default: false */  isRaw={typeof UseLastSegment === "object" && "isRaw" in UseLastSegment && UseLastSegment.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LastSegmentPosition" id={typeof LastSegmentPosition === "object" && "id" in LastSegmentPosition ? LastSegmentPosition?.id : undefined} value={typeof LastSegmentPosition === "object" && "value" in LastSegmentPosition ? LastSegmentPosition?.value : LastSegmentPosition} /* default: [0; 0; 0] */  isRaw={typeof LastSegmentPosition === "object" && "isRaw" in LastSegmentPosition && LastSegmentPosition.isRaw ? true : undefined} />
        </Component>
      );
    };
    