import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface VRIKAvatarInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
IK?: member<any>;
HeightCompensation?: member<number>;
AvatarHeight?: member<number>;
UserResizeThreshold?: member<number>;
FeetIgnoreOtherPlayers?: member<boolean>;
FeetCollisionListMode?: member<any>;
HeadMaxFixDistance?: member<number>;
ForceUseFeetProxies?: member<boolean>;
ForceUsePelvisProxy?: member<boolean>;
ForceUseChestProxy?: member<boolean>;
ForceUseElbowProxies?: member<boolean>;
ForceUseKneeProxies?: member<boolean>;
FeetCalibrated?: member<boolean>;
PelvisCalibrated?: member<boolean>;
GroundCheckHeightRatio?: member<number>;
FeetHoverHeight?: member<number>;
FeetHoverSmoothSpeed?: member<number>;
MinFeetTransitionSpeed?: member<number>;
MaxFeetTransitionSpeed?: member<number>;
GaitFeetTransitionSpeedMultiplier?: member<number>;
FeetHoverTilt?: member<number>;
LeftFootFloatOffset?: member<[number, number, number]>;
RightFootFloatOffset?: member<[number, number, number]>;
LeftFootRootHeight?: member<number>;
RightFootRootHeight?: member<number>;
FootFloatSpeed?: member<number>;
FootFloatAngleMagnitude?: member<number>;
FootFloatOffsetMagnitude?: member<number>;
FeetFloatVelocityForce?: member<number>;
FeetFloatVelocityDampeningSpeed?: member<number>;
MaxFeetVelocityOffset?: member<number>;
VelocityAverageRate?: member<number>;
HoverVelocityThreshold?: member<number>;
HorizontalBodyAngle?: member<number>;
SupressWalkAnimationWhenHorizontal?: member<boolean>;
AlwaysUseTrackersWhenHorizontal?: member<boolean>;
GaitTransitionSpeed?: member<number>;
GaitMovementDirectionSmoothSpeed?: member<number>;
RigCollidersRadiusRatio?: member<number>;
LeftHandRotationOffset?: member<any>;
RightHandRotationOffset?: member<any>;
CurrentAverageVelocity?: member<any>;
CurrentOnGround?: member<any>;
CurrentGaitIndex?: member<any>;
_locomotionController?: member<any>;
_leftHandNode?: member<any>;
_rightHandNode?: member<any>;
_leftElbowNode?: member<any>;
_rightElbowNode?: member<any>;
_leftFootNode?: member<any>;
_rightFootNode?: member<any>;
_leftKneeNode?: member<any>;
_rightKneeNode?: member<any>;
_headNode?: member<any>;
_pelvisNode?: member<any>;
_chestNode?: member<any>;
_headProxy?: member<any>;
_pelvisProxy?: member<any>;
_chestProxy?: member<any>;
_leftHandProxy?: member<any>;
_rightHandProxy?: member<any>;
_leftElbowProxy?: member<any>;
_rightElbowProxy?: member<any>;
_leftFootProxy?: member<any>;
_rightFootProxy?: member<any>;
_leftKneeProxy?: member<any>;
_rightKneeProxy?: member<any>;
_leftKneeDefaultProxy?: member<any>;
_rightKneeDefaultProxy?: member<any>;
_headTargetPos?: member<any>;
_headTargetRot?: member<any>;
_pelvisTargetPos?: member<any>;
_pelvisTargetRot?: member<any>;
_chestTargetPos?: member<any>;
_leftHandTargetPos?: member<any>;
_leftHandTargetRot?: member<any>;
_rightHandTargetPos?: member<any>;
_rightHandTargetRot?: member<any>;
_leftElbowTargetPos?: member<any>;
_rightElbowTargetPos?: member<any>;
_leftFootTargetPos?: member<any>;
_leftFootTargetRot?: member<any>;
_rightFootTargetPos?: member<any>;
_rightFootTargetRot?: member<any>;
_leftKneeTargetPos?: member<any>;
_rightKneeTargetPos?: member<any>;
_pelvisPositionWeight?: member<any>;
_pelvisRotationWeight?: member<any>;
_chestWeight?: member<any>;
_locomotionWeight?: member<any>;
_leftLegPositionWeight?: member<any>;
_leftLegRotationWeight?: member<any>;
_rightLegPositionWeight?: member<any>;
_rightLegRotationWeight?: member<any>;
_leftKneeBendWeight?: member<any>;
_rightKneeBendWeight?: member<any>;
_leftElbowBendWeight?: member<any>;
_rightElbowBendWeight?: member<any>;
_leftFootOffset?: member<any>;
_rightFootOffset?: member<any>;
_leftFootRelativeToRoot?: member<any>;
_rightFootRelativeToRoot?: member<any>;
_locomotionOffset?: member<any>;
_simplifiedColliderEnabled?: member<any>;
_horizontalTrackingLocked?: member<boolean>;
    }
    
    export function VRIKAvatar(props: VRIKAvatarInput){
      const { id, persistentId, updateOrder, Enabled,
IK,
HeightCompensation,
AvatarHeight,
UserResizeThreshold,
FeetIgnoreOtherPlayers,
FeetCollisionListMode,
HeadMaxFixDistance,
ForceUseFeetProxies,
ForceUsePelvisProxy,
ForceUseChestProxy,
ForceUseElbowProxies,
ForceUseKneeProxies,
FeetCalibrated,
PelvisCalibrated,
GroundCheckHeightRatio,
FeetHoverHeight,
FeetHoverSmoothSpeed,
MinFeetTransitionSpeed,
MaxFeetTransitionSpeed,
GaitFeetTransitionSpeedMultiplier,
FeetHoverTilt,
LeftFootFloatOffset,
RightFootFloatOffset,
LeftFootRootHeight,
RightFootRootHeight,
FootFloatSpeed,
FootFloatAngleMagnitude,
FootFloatOffsetMagnitude,
FeetFloatVelocityForce,
FeetFloatVelocityDampeningSpeed,
MaxFeetVelocityOffset,
VelocityAverageRate,
HoverVelocityThreshold,
HorizontalBodyAngle,
SupressWalkAnimationWhenHorizontal,
AlwaysUseTrackersWhenHorizontal,
GaitTransitionSpeed,
GaitMovementDirectionSmoothSpeed,
RigCollidersRadiusRatio,
LeftHandRotationOffset,
RightHandRotationOffset,
CurrentAverageVelocity,
CurrentOnGround,
CurrentGaitIndex,
_locomotionController,
_leftHandNode,
_rightHandNode,
_leftElbowNode,
_rightElbowNode,
_leftFootNode,
_rightFootNode,
_leftKneeNode,
_rightKneeNode,
_headNode,
_pelvisNode,
_chestNode,
_headProxy,
_pelvisProxy,
_chestProxy,
_leftHandProxy,
_rightHandProxy,
_leftElbowProxy,
_rightElbowProxy,
_leftFootProxy,
_rightFootProxy,
_leftKneeProxy,
_rightKneeProxy,
_leftKneeDefaultProxy,
_rightKneeDefaultProxy,
_headTargetPos,
_headTargetRot,
_pelvisTargetPos,
_pelvisTargetRot,
_chestTargetPos,
_leftHandTargetPos,
_leftHandTargetRot,
_rightHandTargetPos,
_rightHandTargetRot,
_leftElbowTargetPos,
_rightElbowTargetPos,
_leftFootTargetPos,
_leftFootTargetRot,
_rightFootTargetPos,
_rightFootTargetRot,
_leftKneeTargetPos,
_rightKneeTargetPos,
_pelvisPositionWeight,
_pelvisRotationWeight,
_chestWeight,
_locomotionWeight,
_leftLegPositionWeight,
_leftLegRotationWeight,
_rightLegPositionWeight,
_rightLegRotationWeight,
_leftKneeBendWeight,
_rightKneeBendWeight,
_leftElbowBendWeight,
_rightElbowBendWeight,
_leftFootOffset,
_rightFootOffset,
_leftFootRelativeToRoot,
_rightFootRelativeToRoot,
_locomotionOffset,
_simplifiedColliderEnabled,
_horizontalTrackingLocked, } = props;
    
      return (
        <Component type="FrooxEngine.FinalIK.VRIKAvatar" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FinalIK.VRIK]`} name="IK" id={typeof IK === "object" && "id" in IK ? IK?.id : undefined} value={typeof IK === "object" && "value" in IK ? IK?.value : IK} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeightCompensation" id={typeof HeightCompensation === "object" && "id" in HeightCompensation ? HeightCompensation?.id : undefined} value={typeof HeightCompensation === "object" && "value" in HeightCompensation ? HeightCompensation?.value : HeightCompensation} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AvatarHeight" id={typeof AvatarHeight === "object" && "id" in AvatarHeight ? AvatarHeight?.id : undefined} value={typeof AvatarHeight === "object" && "value" in AvatarHeight ? AvatarHeight?.value : AvatarHeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="UserResizeThreshold" id={typeof UserResizeThreshold === "object" && "id" in UserResizeThreshold ? UserResizeThreshold?.id : undefined} value={typeof UserResizeThreshold === "object" && "value" in UserResizeThreshold ? UserResizeThreshold?.value : UserResizeThreshold} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FeetIgnoreOtherPlayers" id={typeof FeetIgnoreOtherPlayers === "object" && "id" in FeetIgnoreOtherPlayers ? FeetIgnoreOtherPlayers?.id : undefined} value={typeof FeetIgnoreOtherPlayers === "object" && "value" in FeetIgnoreOtherPlayers ? FeetIgnoreOtherPlayers?.value : FeetIgnoreOtherPlayers} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ListFilterMode]`} name="FeetCollisionListMode" id={typeof FeetCollisionListMode === "object" && "id" in FeetCollisionListMode ? FeetCollisionListMode?.id : undefined} value={typeof FeetCollisionListMode === "object" && "value" in FeetCollisionListMode ? FeetCollisionListMode?.value : FeetCollisionListMode} /* default: Whitelist */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeadMaxFixDistance" id={typeof HeadMaxFixDistance === "object" && "id" in HeadMaxFixDistance ? HeadMaxFixDistance?.id : undefined} value={typeof HeadMaxFixDistance === "object" && "value" in HeadMaxFixDistance ? HeadMaxFixDistance?.value : HeadMaxFixDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceUseFeetProxies" id={typeof ForceUseFeetProxies === "object" && "id" in ForceUseFeetProxies ? ForceUseFeetProxies?.id : undefined} value={typeof ForceUseFeetProxies === "object" && "value" in ForceUseFeetProxies ? ForceUseFeetProxies?.value : ForceUseFeetProxies} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceUsePelvisProxy" id={typeof ForceUsePelvisProxy === "object" && "id" in ForceUsePelvisProxy ? ForceUsePelvisProxy?.id : undefined} value={typeof ForceUsePelvisProxy === "object" && "value" in ForceUsePelvisProxy ? ForceUsePelvisProxy?.value : ForceUsePelvisProxy} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceUseChestProxy" id={typeof ForceUseChestProxy === "object" && "id" in ForceUseChestProxy ? ForceUseChestProxy?.id : undefined} value={typeof ForceUseChestProxy === "object" && "value" in ForceUseChestProxy ? ForceUseChestProxy?.value : ForceUseChestProxy} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceUseElbowProxies" id={typeof ForceUseElbowProxies === "object" && "id" in ForceUseElbowProxies ? ForceUseElbowProxies?.id : undefined} value={typeof ForceUseElbowProxies === "object" && "value" in ForceUseElbowProxies ? ForceUseElbowProxies?.value : ForceUseElbowProxies} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceUseKneeProxies" id={typeof ForceUseKneeProxies === "object" && "id" in ForceUseKneeProxies ? ForceUseKneeProxies?.id : undefined} value={typeof ForceUseKneeProxies === "object" && "value" in ForceUseKneeProxies ? ForceUseKneeProxies?.value : ForceUseKneeProxies} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FeetCalibrated" id={typeof FeetCalibrated === "object" && "id" in FeetCalibrated ? FeetCalibrated?.id : undefined} value={typeof FeetCalibrated === "object" && "value" in FeetCalibrated ? FeetCalibrated?.value : FeetCalibrated} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PelvisCalibrated" id={typeof PelvisCalibrated === "object" && "id" in PelvisCalibrated ? PelvisCalibrated?.id : undefined} value={typeof PelvisCalibrated === "object" && "value" in PelvisCalibrated ? PelvisCalibrated?.value : PelvisCalibrated} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GroundCheckHeightRatio" id={typeof GroundCheckHeightRatio === "object" && "id" in GroundCheckHeightRatio ? GroundCheckHeightRatio?.id : undefined} value={typeof GroundCheckHeightRatio === "object" && "value" in GroundCheckHeightRatio ? GroundCheckHeightRatio?.value : GroundCheckHeightRatio} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FeetHoverHeight" id={typeof FeetHoverHeight === "object" && "id" in FeetHoverHeight ? FeetHoverHeight?.id : undefined} value={typeof FeetHoverHeight === "object" && "value" in FeetHoverHeight ? FeetHoverHeight?.value : FeetHoverHeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FeetHoverSmoothSpeed" id={typeof FeetHoverSmoothSpeed === "object" && "id" in FeetHoverSmoothSpeed ? FeetHoverSmoothSpeed?.id : undefined} value={typeof FeetHoverSmoothSpeed === "object" && "value" in FeetHoverSmoothSpeed ? FeetHoverSmoothSpeed?.value : FeetHoverSmoothSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinFeetTransitionSpeed" id={typeof MinFeetTransitionSpeed === "object" && "id" in MinFeetTransitionSpeed ? MinFeetTransitionSpeed?.id : undefined} value={typeof MinFeetTransitionSpeed === "object" && "value" in MinFeetTransitionSpeed ? MinFeetTransitionSpeed?.value : MinFeetTransitionSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxFeetTransitionSpeed" id={typeof MaxFeetTransitionSpeed === "object" && "id" in MaxFeetTransitionSpeed ? MaxFeetTransitionSpeed?.id : undefined} value={typeof MaxFeetTransitionSpeed === "object" && "value" in MaxFeetTransitionSpeed ? MaxFeetTransitionSpeed?.value : MaxFeetTransitionSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GaitFeetTransitionSpeedMultiplier" id={typeof GaitFeetTransitionSpeedMultiplier === "object" && "id" in GaitFeetTransitionSpeedMultiplier ? GaitFeetTransitionSpeedMultiplier?.id : undefined} value={typeof GaitFeetTransitionSpeedMultiplier === "object" && "value" in GaitFeetTransitionSpeedMultiplier ? GaitFeetTransitionSpeedMultiplier?.value : GaitFeetTransitionSpeedMultiplier} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FeetHoverTilt" id={typeof FeetHoverTilt === "object" && "id" in FeetHoverTilt ? FeetHoverTilt?.id : undefined} value={typeof FeetHoverTilt === "object" && "value" in FeetHoverTilt ? FeetHoverTilt?.value : FeetHoverTilt} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LeftFootFloatOffset" id={typeof LeftFootFloatOffset === "object" && "id" in LeftFootFloatOffset ? LeftFootFloatOffset?.id : undefined} value={typeof LeftFootFloatOffset === "object" && "value" in LeftFootFloatOffset ? LeftFootFloatOffset?.value : LeftFootFloatOffset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="RightFootFloatOffset" id={typeof RightFootFloatOffset === "object" && "id" in RightFootFloatOffset ? RightFootFloatOffset?.id : undefined} value={typeof RightFootFloatOffset === "object" && "value" in RightFootFloatOffset ? RightFootFloatOffset?.value : RightFootFloatOffset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LeftFootRootHeight" id={typeof LeftFootRootHeight === "object" && "id" in LeftFootRootHeight ? LeftFootRootHeight?.id : undefined} value={typeof LeftFootRootHeight === "object" && "value" in LeftFootRootHeight ? LeftFootRootHeight?.value : LeftFootRootHeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RightFootRootHeight" id={typeof RightFootRootHeight === "object" && "id" in RightFootRootHeight ? RightFootRootHeight?.id : undefined} value={typeof RightFootRootHeight === "object" && "value" in RightFootRootHeight ? RightFootRootHeight?.value : RightFootRootHeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FootFloatSpeed" id={typeof FootFloatSpeed === "object" && "id" in FootFloatSpeed ? FootFloatSpeed?.id : undefined} value={typeof FootFloatSpeed === "object" && "value" in FootFloatSpeed ? FootFloatSpeed?.value : FootFloatSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FootFloatAngleMagnitude" id={typeof FootFloatAngleMagnitude === "object" && "id" in FootFloatAngleMagnitude ? FootFloatAngleMagnitude?.id : undefined} value={typeof FootFloatAngleMagnitude === "object" && "value" in FootFloatAngleMagnitude ? FootFloatAngleMagnitude?.value : FootFloatAngleMagnitude} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FootFloatOffsetMagnitude" id={typeof FootFloatOffsetMagnitude === "object" && "id" in FootFloatOffsetMagnitude ? FootFloatOffsetMagnitude?.id : undefined} value={typeof FootFloatOffsetMagnitude === "object" && "value" in FootFloatOffsetMagnitude ? FootFloatOffsetMagnitude?.value : FootFloatOffsetMagnitude} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FeetFloatVelocityForce" id={typeof FeetFloatVelocityForce === "object" && "id" in FeetFloatVelocityForce ? FeetFloatVelocityForce?.id : undefined} value={typeof FeetFloatVelocityForce === "object" && "value" in FeetFloatVelocityForce ? FeetFloatVelocityForce?.value : FeetFloatVelocityForce} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FeetFloatVelocityDampeningSpeed" id={typeof FeetFloatVelocityDampeningSpeed === "object" && "id" in FeetFloatVelocityDampeningSpeed ? FeetFloatVelocityDampeningSpeed?.id : undefined} value={typeof FeetFloatVelocityDampeningSpeed === "object" && "value" in FeetFloatVelocityDampeningSpeed ? FeetFloatVelocityDampeningSpeed?.value : FeetFloatVelocityDampeningSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxFeetVelocityOffset" id={typeof MaxFeetVelocityOffset === "object" && "id" in MaxFeetVelocityOffset ? MaxFeetVelocityOffset?.id : undefined} value={typeof MaxFeetVelocityOffset === "object" && "value" in MaxFeetVelocityOffset ? MaxFeetVelocityOffset?.value : MaxFeetVelocityOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VelocityAverageRate" id={typeof VelocityAverageRate === "object" && "id" in VelocityAverageRate ? VelocityAverageRate?.id : undefined} value={typeof VelocityAverageRate === "object" && "value" in VelocityAverageRate ? VelocityAverageRate?.value : VelocityAverageRate} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HoverVelocityThreshold" id={typeof HoverVelocityThreshold === "object" && "id" in HoverVelocityThreshold ? HoverVelocityThreshold?.id : undefined} value={typeof HoverVelocityThreshold === "object" && "value" in HoverVelocityThreshold ? HoverVelocityThreshold?.value : HoverVelocityThreshold} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HorizontalBodyAngle" id={typeof HorizontalBodyAngle === "object" && "id" in HorizontalBodyAngle ? HorizontalBodyAngle?.id : undefined} value={typeof HorizontalBodyAngle === "object" && "value" in HorizontalBodyAngle ? HorizontalBodyAngle?.value : HorizontalBodyAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SupressWalkAnimationWhenHorizontal" id={typeof SupressWalkAnimationWhenHorizontal === "object" && "id" in SupressWalkAnimationWhenHorizontal ? SupressWalkAnimationWhenHorizontal?.id : undefined} value={typeof SupressWalkAnimationWhenHorizontal === "object" && "value" in SupressWalkAnimationWhenHorizontal ? SupressWalkAnimationWhenHorizontal?.value : SupressWalkAnimationWhenHorizontal} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AlwaysUseTrackersWhenHorizontal" id={typeof AlwaysUseTrackersWhenHorizontal === "object" && "id" in AlwaysUseTrackersWhenHorizontal ? AlwaysUseTrackersWhenHorizontal?.id : undefined} value={typeof AlwaysUseTrackersWhenHorizontal === "object" && "value" in AlwaysUseTrackersWhenHorizontal ? AlwaysUseTrackersWhenHorizontal?.value : AlwaysUseTrackersWhenHorizontal} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GaitTransitionSpeed" id={typeof GaitTransitionSpeed === "object" && "id" in GaitTransitionSpeed ? GaitTransitionSpeed?.id : undefined} value={typeof GaitTransitionSpeed === "object" && "value" in GaitTransitionSpeed ? GaitTransitionSpeed?.value : GaitTransitionSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GaitMovementDirectionSmoothSpeed" id={typeof GaitMovementDirectionSmoothSpeed === "object" && "id" in GaitMovementDirectionSmoothSpeed ? GaitMovementDirectionSmoothSpeed?.id : undefined} value={typeof GaitMovementDirectionSmoothSpeed === "object" && "value" in GaitMovementDirectionSmoothSpeed ? GaitMovementDirectionSmoothSpeed?.value : GaitMovementDirectionSmoothSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RigCollidersRadiusRatio" id={typeof RigCollidersRadiusRatio === "object" && "id" in RigCollidersRadiusRatio ? RigCollidersRadiusRatio?.id : undefined} value={typeof RigCollidersRadiusRatio === "object" && "value" in RigCollidersRadiusRatio ? RigCollidersRadiusRatio?.value : RigCollidersRadiusRatio} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="LeftHandRotationOffset" id={typeof LeftHandRotationOffset === "object" && "id" in LeftHandRotationOffset ? LeftHandRotationOffset?.id : undefined} value={typeof LeftHandRotationOffset === "object" && "value" in LeftHandRotationOffset ? LeftHandRotationOffset?.value : LeftHandRotationOffset} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="RightHandRotationOffset" id={typeof RightHandRotationOffset === "object" && "id" in RightHandRotationOffset ? RightHandRotationOffset?.id : undefined} value={typeof RightHandRotationOffset === "object" && "value" in RightHandRotationOffset ? RightHandRotationOffset?.value : RightHandRotationOffset} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="CurrentAverageVelocity" id={typeof CurrentAverageVelocity === "object" && "id" in CurrentAverageVelocity ? CurrentAverageVelocity?.id : undefined} value={typeof CurrentAverageVelocity === "object" && "value" in CurrentAverageVelocity ? CurrentAverageVelocity?.value : CurrentAverageVelocity} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="CurrentOnGround" id={typeof CurrentOnGround === "object" && "id" in CurrentOnGround ? CurrentOnGround?.id : undefined} value={typeof CurrentOnGround === "object" && "value" in CurrentOnGround ? CurrentOnGround?.value : CurrentOnGround} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="CurrentGaitIndex" id={typeof CurrentGaitIndex === "object" && "id" in CurrentGaitIndex ? CurrentGaitIndex?.id : undefined} value={typeof CurrentGaitIndex === "object" && "value" in CurrentGaitIndex ? CurrentGaitIndex?.value : CurrentGaitIndex} /* default: FrooxEngine.RawOutput`1[System.Int32] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.LocomotionController]`} name="_locomotionController" id={typeof _locomotionController === "object" && "id" in _locomotionController ? _locomotionController?.id : undefined} value={typeof _locomotionController === "object" && "value" in _locomotionController ? _locomotionController?.value : _locomotionController} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarPoseNode]`} name="_leftHandNode" id={typeof _leftHandNode === "object" && "id" in _leftHandNode ? _leftHandNode?.id : undefined} value={typeof _leftHandNode === "object" && "value" in _leftHandNode ? _leftHandNode?.value : _leftHandNode} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarPoseNode]`} name="_rightHandNode" id={typeof _rightHandNode === "object" && "id" in _rightHandNode ? _rightHandNode?.id : undefined} value={typeof _rightHandNode === "object" && "value" in _rightHandNode ? _rightHandNode?.value : _rightHandNode} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarPoseNode]`} name="_leftElbowNode" id={typeof _leftElbowNode === "object" && "id" in _leftElbowNode ? _leftElbowNode?.id : undefined} value={typeof _leftElbowNode === "object" && "value" in _leftElbowNode ? _leftElbowNode?.value : _leftElbowNode} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarPoseNode]`} name="_rightElbowNode" id={typeof _rightElbowNode === "object" && "id" in _rightElbowNode ? _rightElbowNode?.id : undefined} value={typeof _rightElbowNode === "object" && "value" in _rightElbowNode ? _rightElbowNode?.value : _rightElbowNode} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarPoseNode]`} name="_leftFootNode" id={typeof _leftFootNode === "object" && "id" in _leftFootNode ? _leftFootNode?.id : undefined} value={typeof _leftFootNode === "object" && "value" in _leftFootNode ? _leftFootNode?.value : _leftFootNode} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarPoseNode]`} name="_rightFootNode" id={typeof _rightFootNode === "object" && "id" in _rightFootNode ? _rightFootNode?.id : undefined} value={typeof _rightFootNode === "object" && "value" in _rightFootNode ? _rightFootNode?.value : _rightFootNode} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarPoseNode]`} name="_leftKneeNode" id={typeof _leftKneeNode === "object" && "id" in _leftKneeNode ? _leftKneeNode?.id : undefined} value={typeof _leftKneeNode === "object" && "value" in _leftKneeNode ? _leftKneeNode?.value : _leftKneeNode} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarPoseNode]`} name="_rightKneeNode" id={typeof _rightKneeNode === "object" && "id" in _rightKneeNode ? _rightKneeNode?.id : undefined} value={typeof _rightKneeNode === "object" && "value" in _rightKneeNode ? _rightKneeNode?.value : _rightKneeNode} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarPoseNode]`} name="_headNode" id={typeof _headNode === "object" && "id" in _headNode ? _headNode?.id : undefined} value={typeof _headNode === "object" && "value" in _headNode ? _headNode?.value : _headNode} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarPoseNode]`} name="_pelvisNode" id={typeof _pelvisNode === "object" && "id" in _pelvisNode ? _pelvisNode?.id : undefined} value={typeof _pelvisNode === "object" && "value" in _pelvisNode ? _pelvisNode?.value : _pelvisNode} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarPoseNode]`} name="_chestNode" id={typeof _chestNode === "object" && "id" in _chestNode ? _chestNode?.id : undefined} value={typeof _chestNode === "object" && "value" in _chestNode ? _chestNode?.value : _chestNode} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_headProxy" id={typeof _headProxy === "object" && "id" in _headProxy ? _headProxy?.id : undefined} value={typeof _headProxy === "object" && "value" in _headProxy ? _headProxy?.value : _headProxy} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_pelvisProxy" id={typeof _pelvisProxy === "object" && "id" in _pelvisProxy ? _pelvisProxy?.id : undefined} value={typeof _pelvisProxy === "object" && "value" in _pelvisProxy ? _pelvisProxy?.value : _pelvisProxy} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_chestProxy" id={typeof _chestProxy === "object" && "id" in _chestProxy ? _chestProxy?.id : undefined} value={typeof _chestProxy === "object" && "value" in _chestProxy ? _chestProxy?.value : _chestProxy} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_leftHandProxy" id={typeof _leftHandProxy === "object" && "id" in _leftHandProxy ? _leftHandProxy?.id : undefined} value={typeof _leftHandProxy === "object" && "value" in _leftHandProxy ? _leftHandProxy?.value : _leftHandProxy} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_rightHandProxy" id={typeof _rightHandProxy === "object" && "id" in _rightHandProxy ? _rightHandProxy?.id : undefined} value={typeof _rightHandProxy === "object" && "value" in _rightHandProxy ? _rightHandProxy?.value : _rightHandProxy} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_leftElbowProxy" id={typeof _leftElbowProxy === "object" && "id" in _leftElbowProxy ? _leftElbowProxy?.id : undefined} value={typeof _leftElbowProxy === "object" && "value" in _leftElbowProxy ? _leftElbowProxy?.value : _leftElbowProxy} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_rightElbowProxy" id={typeof _rightElbowProxy === "object" && "id" in _rightElbowProxy ? _rightElbowProxy?.id : undefined} value={typeof _rightElbowProxy === "object" && "value" in _rightElbowProxy ? _rightElbowProxy?.value : _rightElbowProxy} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_leftFootProxy" id={typeof _leftFootProxy === "object" && "id" in _leftFootProxy ? _leftFootProxy?.id : undefined} value={typeof _leftFootProxy === "object" && "value" in _leftFootProxy ? _leftFootProxy?.value : _leftFootProxy} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_rightFootProxy" id={typeof _rightFootProxy === "object" && "id" in _rightFootProxy ? _rightFootProxy?.id : undefined} value={typeof _rightFootProxy === "object" && "value" in _rightFootProxy ? _rightFootProxy?.value : _rightFootProxy} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_leftKneeProxy" id={typeof _leftKneeProxy === "object" && "id" in _leftKneeProxy ? _leftKneeProxy?.id : undefined} value={typeof _leftKneeProxy === "object" && "value" in _leftKneeProxy ? _leftKneeProxy?.value : _leftKneeProxy} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_rightKneeProxy" id={typeof _rightKneeProxy === "object" && "id" in _rightKneeProxy ? _rightKneeProxy?.id : undefined} value={typeof _rightKneeProxy === "object" && "value" in _rightKneeProxy ? _rightKneeProxy?.value : _rightKneeProxy} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_leftKneeDefaultProxy" id={typeof _leftKneeDefaultProxy === "object" && "id" in _leftKneeDefaultProxy ? _leftKneeDefaultProxy?.id : undefined} value={typeof _leftKneeDefaultProxy === "object" && "value" in _leftKneeDefaultProxy ? _leftKneeDefaultProxy?.value : _leftKneeDefaultProxy} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_rightKneeDefaultProxy" id={typeof _rightKneeDefaultProxy === "object" && "id" in _rightKneeDefaultProxy ? _rightKneeDefaultProxy?.id : undefined} value={typeof _rightKneeDefaultProxy === "object" && "value" in _rightKneeDefaultProxy ? _rightKneeDefaultProxy?.value : _rightKneeDefaultProxy} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_headTargetPos" id={typeof _headTargetPos === "object" && "id" in _headTargetPos ? _headTargetPos?.id : undefined} value={typeof _headTargetPos === "object" && "value" in _headTargetPos ? _headTargetPos?.value : _headTargetPos} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_headTargetRot" id={typeof _headTargetRot === "object" && "id" in _headTargetRot ? _headTargetRot?.id : undefined} value={typeof _headTargetRot === "object" && "value" in _headTargetRot ? _headTargetRot?.value : _headTargetRot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_pelvisTargetPos" id={typeof _pelvisTargetPos === "object" && "id" in _pelvisTargetPos ? _pelvisTargetPos?.id : undefined} value={typeof _pelvisTargetPos === "object" && "value" in _pelvisTargetPos ? _pelvisTargetPos?.value : _pelvisTargetPos} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_pelvisTargetRot" id={typeof _pelvisTargetRot === "object" && "id" in _pelvisTargetRot ? _pelvisTargetRot?.id : undefined} value={typeof _pelvisTargetRot === "object" && "value" in _pelvisTargetRot ? _pelvisTargetRot?.value : _pelvisTargetRot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_chestTargetPos" id={typeof _chestTargetPos === "object" && "id" in _chestTargetPos ? _chestTargetPos?.id : undefined} value={typeof _chestTargetPos === "object" && "value" in _chestTargetPos ? _chestTargetPos?.value : _chestTargetPos} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_leftHandTargetPos" id={typeof _leftHandTargetPos === "object" && "id" in _leftHandTargetPos ? _leftHandTargetPos?.id : undefined} value={typeof _leftHandTargetPos === "object" && "value" in _leftHandTargetPos ? _leftHandTargetPos?.value : _leftHandTargetPos} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_leftHandTargetRot" id={typeof _leftHandTargetRot === "object" && "id" in _leftHandTargetRot ? _leftHandTargetRot?.id : undefined} value={typeof _leftHandTargetRot === "object" && "value" in _leftHandTargetRot ? _leftHandTargetRot?.value : _leftHandTargetRot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_rightHandTargetPos" id={typeof _rightHandTargetPos === "object" && "id" in _rightHandTargetPos ? _rightHandTargetPos?.id : undefined} value={typeof _rightHandTargetPos === "object" && "value" in _rightHandTargetPos ? _rightHandTargetPos?.value : _rightHandTargetPos} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rightHandTargetRot" id={typeof _rightHandTargetRot === "object" && "id" in _rightHandTargetRot ? _rightHandTargetRot?.id : undefined} value={typeof _rightHandTargetRot === "object" && "value" in _rightHandTargetRot ? _rightHandTargetRot?.value : _rightHandTargetRot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_leftElbowTargetPos" id={typeof _leftElbowTargetPos === "object" && "id" in _leftElbowTargetPos ? _leftElbowTargetPos?.id : undefined} value={typeof _leftElbowTargetPos === "object" && "value" in _leftElbowTargetPos ? _leftElbowTargetPos?.value : _leftElbowTargetPos} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_rightElbowTargetPos" id={typeof _rightElbowTargetPos === "object" && "id" in _rightElbowTargetPos ? _rightElbowTargetPos?.id : undefined} value={typeof _rightElbowTargetPos === "object" && "value" in _rightElbowTargetPos ? _rightElbowTargetPos?.value : _rightElbowTargetPos} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_leftFootTargetPos" id={typeof _leftFootTargetPos === "object" && "id" in _leftFootTargetPos ? _leftFootTargetPos?.id : undefined} value={typeof _leftFootTargetPos === "object" && "value" in _leftFootTargetPos ? _leftFootTargetPos?.value : _leftFootTargetPos} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_leftFootTargetRot" id={typeof _leftFootTargetRot === "object" && "id" in _leftFootTargetRot ? _leftFootTargetRot?.id : undefined} value={typeof _leftFootTargetRot === "object" && "value" in _leftFootTargetRot ? _leftFootTargetRot?.value : _leftFootTargetRot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_rightFootTargetPos" id={typeof _rightFootTargetPos === "object" && "id" in _rightFootTargetPos ? _rightFootTargetPos?.id : undefined} value={typeof _rightFootTargetPos === "object" && "value" in _rightFootTargetPos ? _rightFootTargetPos?.value : _rightFootTargetPos} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rightFootTargetRot" id={typeof _rightFootTargetRot === "object" && "id" in _rightFootTargetRot ? _rightFootTargetRot?.id : undefined} value={typeof _rightFootTargetRot === "object" && "value" in _rightFootTargetRot ? _rightFootTargetRot?.value : _rightFootTargetRot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_leftKneeTargetPos" id={typeof _leftKneeTargetPos === "object" && "id" in _leftKneeTargetPos ? _leftKneeTargetPos?.id : undefined} value={typeof _leftKneeTargetPos === "object" && "value" in _leftKneeTargetPos ? _leftKneeTargetPos?.value : _leftKneeTargetPos} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_rightKneeTargetPos" id={typeof _rightKneeTargetPos === "object" && "id" in _rightKneeTargetPos ? _rightKneeTargetPos?.id : undefined} value={typeof _rightKneeTargetPos === "object" && "value" in _rightKneeTargetPos ? _rightKneeTargetPos?.value : _rightKneeTargetPos} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_pelvisPositionWeight" id={typeof _pelvisPositionWeight === "object" && "id" in _pelvisPositionWeight ? _pelvisPositionWeight?.id : undefined} value={typeof _pelvisPositionWeight === "object" && "value" in _pelvisPositionWeight ? _pelvisPositionWeight?.value : _pelvisPositionWeight} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_pelvisRotationWeight" id={typeof _pelvisRotationWeight === "object" && "id" in _pelvisRotationWeight ? _pelvisRotationWeight?.id : undefined} value={typeof _pelvisRotationWeight === "object" && "value" in _pelvisRotationWeight ? _pelvisRotationWeight?.value : _pelvisRotationWeight} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_chestWeight" id={typeof _chestWeight === "object" && "id" in _chestWeight ? _chestWeight?.id : undefined} value={typeof _chestWeight === "object" && "value" in _chestWeight ? _chestWeight?.value : _chestWeight} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_locomotionWeight" id={typeof _locomotionWeight === "object" && "id" in _locomotionWeight ? _locomotionWeight?.id : undefined} value={typeof _locomotionWeight === "object" && "value" in _locomotionWeight ? _locomotionWeight?.value : _locomotionWeight} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_leftLegPositionWeight" id={typeof _leftLegPositionWeight === "object" && "id" in _leftLegPositionWeight ? _leftLegPositionWeight?.id : undefined} value={typeof _leftLegPositionWeight === "object" && "value" in _leftLegPositionWeight ? _leftLegPositionWeight?.value : _leftLegPositionWeight} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_leftLegRotationWeight" id={typeof _leftLegRotationWeight === "object" && "id" in _leftLegRotationWeight ? _leftLegRotationWeight?.id : undefined} value={typeof _leftLegRotationWeight === "object" && "value" in _leftLegRotationWeight ? _leftLegRotationWeight?.value : _leftLegRotationWeight} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_rightLegPositionWeight" id={typeof _rightLegPositionWeight === "object" && "id" in _rightLegPositionWeight ? _rightLegPositionWeight?.id : undefined} value={typeof _rightLegPositionWeight === "object" && "value" in _rightLegPositionWeight ? _rightLegPositionWeight?.value : _rightLegPositionWeight} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_rightLegRotationWeight" id={typeof _rightLegRotationWeight === "object" && "id" in _rightLegRotationWeight ? _rightLegRotationWeight?.id : undefined} value={typeof _rightLegRotationWeight === "object" && "value" in _rightLegRotationWeight ? _rightLegRotationWeight?.value : _rightLegRotationWeight} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_leftKneeBendWeight" id={typeof _leftKneeBendWeight === "object" && "id" in _leftKneeBendWeight ? _leftKneeBendWeight?.id : undefined} value={typeof _leftKneeBendWeight === "object" && "value" in _leftKneeBendWeight ? _leftKneeBendWeight?.value : _leftKneeBendWeight} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_rightKneeBendWeight" id={typeof _rightKneeBendWeight === "object" && "id" in _rightKneeBendWeight ? _rightKneeBendWeight?.id : undefined} value={typeof _rightKneeBendWeight === "object" && "value" in _rightKneeBendWeight ? _rightKneeBendWeight?.value : _rightKneeBendWeight} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_leftElbowBendWeight" id={typeof _leftElbowBendWeight === "object" && "id" in _leftElbowBendWeight ? _leftElbowBendWeight?.id : undefined} value={typeof _leftElbowBendWeight === "object" && "value" in _leftElbowBendWeight ? _leftElbowBendWeight?.value : _leftElbowBendWeight} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_rightElbowBendWeight" id={typeof _rightElbowBendWeight === "object" && "id" in _rightElbowBendWeight ? _rightElbowBendWeight?.id : undefined} value={typeof _rightElbowBendWeight === "object" && "value" in _rightElbowBendWeight ? _rightElbowBendWeight?.value : _rightElbowBendWeight} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_leftFootOffset" id={typeof _leftFootOffset === "object" && "id" in _leftFootOffset ? _leftFootOffset?.id : undefined} value={typeof _leftFootOffset === "object" && "value" in _leftFootOffset ? _leftFootOffset?.value : _leftFootOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_rightFootOffset" id={typeof _rightFootOffset === "object" && "id" in _rightFootOffset ? _rightFootOffset?.id : undefined} value={typeof _rightFootOffset === "object" && "value" in _rightFootOffset ? _rightFootOffset?.value : _rightFootOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="_leftFootRelativeToRoot" id={typeof _leftFootRelativeToRoot === "object" && "id" in _leftFootRelativeToRoot ? _leftFootRelativeToRoot?.id : undefined} value={typeof _leftFootRelativeToRoot === "object" && "value" in _leftFootRelativeToRoot ? _leftFootRelativeToRoot?.value : _leftFootRelativeToRoot} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="_rightFootRelativeToRoot" id={typeof _rightFootRelativeToRoot === "object" && "id" in _rightFootRelativeToRoot ? _rightFootRelativeToRoot?.id : undefined} value={typeof _rightFootRelativeToRoot === "object" && "value" in _rightFootRelativeToRoot ? _rightFootRelativeToRoot?.value : _rightFootRelativeToRoot} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_locomotionOffset" id={typeof _locomotionOffset === "object" && "id" in _locomotionOffset ? _locomotionOffset?.id : undefined} value={typeof _locomotionOffset === "object" && "value" in _locomotionOffset ? _locomotionOffset?.value : _locomotionOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_simplifiedColliderEnabled" id={typeof _simplifiedColliderEnabled === "object" && "id" in _simplifiedColliderEnabled ? _simplifiedColliderEnabled?.id : undefined} value={typeof _simplifiedColliderEnabled === "object" && "value" in _simplifiedColliderEnabled ? _simplifiedColliderEnabled?.value : _simplifiedColliderEnabled} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_horizontalTrackingLocked" id={typeof _horizontalTrackingLocked === "object" && "id" in _horizontalTrackingLocked ? _horizontalTrackingLocked?.id : undefined} value={typeof _horizontalTrackingLocked === "object" && "value" in _horizontalTrackingLocked ? _horizontalTrackingLocked?.value : _horizontalTrackingLocked} /* default: false */  />
        </Component>
      );
    };
    