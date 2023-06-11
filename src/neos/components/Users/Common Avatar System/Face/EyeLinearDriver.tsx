import { member, Member, Component } from "../../../../core";
    
    export interface EyeLinearDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
EyeManager?: member<any>;
ProjectionPlaneSize?: member<[number, number]>;
ProjectionPointDistance?: member<number>;
PositionOffsetCenter?: member<[number, number]>;
PositionOffsetRange?: member<[number, number]>;
MinimumTargetPointDistance?: member<number>;
PositionClampMode?: member<any>;
LeftCloseSubtractLimits?: member<any>;
RightCloseSubtractLimits?: member<any>;
CombinedCloseSubtractLimits?: member<any>;
Eyes?: member<any>;
    }
    
    export function EyeLinearDriver(props: EyeLinearDriverInput){
      const { id, persistentId, updateOrder, Enabled,
EyeManager,
ProjectionPlaneSize,
ProjectionPointDistance,
PositionOffsetCenter,
PositionOffsetRange,
MinimumTargetPointDistance,
PositionClampMode,
LeftCloseSubtractLimits,
RightCloseSubtractLimits,
CombinedCloseSubtractLimits,
Eyes, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.EyeLinearDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.EyeManager]`} name="EyeManager" id={typeof EyeManager === "object" && "id" in EyeManager ? EyeManager?.id : undefined} value={typeof EyeManager === "object" && "value" in EyeManager ? EyeManager?.value : EyeManager} /* default: ID0 */  isRaw={typeof EyeManager === "object" && "isRaw" in EyeManager && EyeManager.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ProjectionPlaneSize" id={typeof ProjectionPlaneSize === "object" && "id" in ProjectionPlaneSize ? ProjectionPlaneSize?.id : undefined} value={typeof ProjectionPlaneSize === "object" && "value" in ProjectionPlaneSize ? ProjectionPlaneSize?.value : ProjectionPlaneSize} /* default: [0; 0] */  isRaw={typeof ProjectionPlaneSize === "object" && "isRaw" in ProjectionPlaneSize && ProjectionPlaneSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ProjectionPointDistance" id={typeof ProjectionPointDistance === "object" && "id" in ProjectionPointDistance ? ProjectionPointDistance?.id : undefined} value={typeof ProjectionPointDistance === "object" && "value" in ProjectionPointDistance ? ProjectionPointDistance?.value : ProjectionPointDistance} /* default: 0 */  isRaw={typeof ProjectionPointDistance === "object" && "isRaw" in ProjectionPointDistance && ProjectionPointDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="PositionOffsetCenter" id={typeof PositionOffsetCenter === "object" && "id" in PositionOffsetCenter ? PositionOffsetCenter?.id : undefined} value={typeof PositionOffsetCenter === "object" && "value" in PositionOffsetCenter ? PositionOffsetCenter?.value : PositionOffsetCenter} /* default: [0; 0] */  isRaw={typeof PositionOffsetCenter === "object" && "isRaw" in PositionOffsetCenter && PositionOffsetCenter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="PositionOffsetRange" id={typeof PositionOffsetRange === "object" && "id" in PositionOffsetRange ? PositionOffsetRange?.id : undefined} value={typeof PositionOffsetRange === "object" && "value" in PositionOffsetRange ? PositionOffsetRange?.value : PositionOffsetRange} /* default: [0; 0] */  isRaw={typeof PositionOffsetRange === "object" && "isRaw" in PositionOffsetRange && PositionOffsetRange.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinimumTargetPointDistance" id={typeof MinimumTargetPointDistance === "object" && "id" in MinimumTargetPointDistance ? MinimumTargetPointDistance?.id : undefined} value={typeof MinimumTargetPointDistance === "object" && "value" in MinimumTargetPointDistance ? MinimumTargetPointDistance?.value : MinimumTargetPointDistance} /* default: 0 */  isRaw={typeof MinimumTargetPointDistance === "object" && "isRaw" in MinimumTargetPointDistance && MinimumTargetPointDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CommonAvatar.EyeLinearDriver+ClampMode]`} name="PositionClampMode" id={typeof PositionClampMode === "object" && "id" in PositionClampMode ? PositionClampMode?.id : undefined} value={typeof PositionClampMode === "object" && "value" in PositionClampMode ? PositionClampMode?.value : PositionClampMode} /* default: Circle */  isRaw={typeof PositionClampMode === "object" && "isRaw" in PositionClampMode && PositionClampMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.CommonAvatar.EyeLinearDriver+EyeCloseLimit]`} name="LeftCloseSubtractLimits" id={typeof LeftCloseSubtractLimits === "object" && "id" in LeftCloseSubtractLimits ? LeftCloseSubtractLimits?.id : undefined} value={typeof LeftCloseSubtractLimits === "object" && "value" in LeftCloseSubtractLimits ? LeftCloseSubtractLimits?.value : LeftCloseSubtractLimits} /* default: FrooxEngine.SyncList`1[FrooxEngine.CommonAvatar.EyeLinearDriver+EyeCloseLimit] */  isRaw={typeof LeftCloseSubtractLimits === "object" && "isRaw" in LeftCloseSubtractLimits && LeftCloseSubtractLimits.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.CommonAvatar.EyeLinearDriver+EyeCloseLimit]`} name="RightCloseSubtractLimits" id={typeof RightCloseSubtractLimits === "object" && "id" in RightCloseSubtractLimits ? RightCloseSubtractLimits?.id : undefined} value={typeof RightCloseSubtractLimits === "object" && "value" in RightCloseSubtractLimits ? RightCloseSubtractLimits?.value : RightCloseSubtractLimits} /* default: FrooxEngine.SyncList`1[FrooxEngine.CommonAvatar.EyeLinearDriver+EyeCloseLimit] */  isRaw={typeof RightCloseSubtractLimits === "object" && "isRaw" in RightCloseSubtractLimits && RightCloseSubtractLimits.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.CommonAvatar.EyeLinearDriver+EyeCloseLimit]`} name="CombinedCloseSubtractLimits" id={typeof CombinedCloseSubtractLimits === "object" && "id" in CombinedCloseSubtractLimits ? CombinedCloseSubtractLimits?.id : undefined} value={typeof CombinedCloseSubtractLimits === "object" && "value" in CombinedCloseSubtractLimits ? CombinedCloseSubtractLimits?.value : CombinedCloseSubtractLimits} /* default: FrooxEngine.SyncList`1[FrooxEngine.CommonAvatar.EyeLinearDriver+EyeCloseLimit] */  isRaw={typeof CombinedCloseSubtractLimits === "object" && "isRaw" in CombinedCloseSubtractLimits && CombinedCloseSubtractLimits.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.CommonAvatar.EyeLinearDriver+Eye]`} name="Eyes" id={typeof Eyes === "object" && "id" in Eyes ? Eyes?.id : undefined} value={typeof Eyes === "object" && "value" in Eyes ? Eyes?.value : Eyes} /* default: FrooxEngine.SyncList`1[FrooxEngine.CommonAvatar.EyeLinearDriver+Eye] */  isRaw={typeof Eyes === "object" && "isRaw" in Eyes && Eyes.isRaw ? true : undefined} />
        </Component>
      );
    };
    