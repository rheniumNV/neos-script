import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface EyeManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetPoint?: member<any>;
LeftEyeTargetPoint?: member<any>;
RightEyeTargetPoint?: member<any>;
LeftEyeClose?: member<any>;
RightEyeClose?: member<any>;
CombinedEyeClose?: member<any>;
LeftEyePupilSizeMillimeters?: member<any>;
RightEyePupilSizeMillimeters?: member<any>;
CombinedEyePupilSizeMillimeters?: member<any>;
LeftEyeWiden?: member<any>;
RightEyeWiden?: member<any>;
CombinedEyeWiden?: member<any>;
LeftEyeSqueeze?: member<any>;
RightEyeSqueeze?: member<any>;
CombinedEyeSqueeze?: member<any>;
LeftEyeFrown?: member<any>;
RightEyeFrown?: member<any>;
CombinedEyeFrown?: member<any>;
EyeDataSource?: member<any>;
SimulatingUser?: member<any>;
SimulateOnHost?: member<boolean>;
IgnoreLocalUserHead?: member<boolean>;
UserHeadWeight?: member<number>;
UserHandWeight?: member<number>;
GrippingHandWeight?: member<number>;
CameraWeight?: member<number>;
ForcedCameraWeight?: member<number>;
EyeReference?: member<any>;
EyeSeparation?: member<number>;
SaccadeSpeed?: member<number>;
LookTargetRoot?: member<any>;
LookTargetLocalPoint?: member<[number, number, number]>;
LeftEyeTargetOffset?: member<[number, number, number]>;
RightEyeTargetOffset?: member<[number, number, number]>;
LookTargetOffset?: member<[number, number, number]>;
MinRandomSaccadeInterval?: member<number>;
MaxRandomSaccadeInterval?: member<number>;
MinTargetSaccadeInterval?: member<number>;
MaxTargetSaccadeInterval?: member<number>;
MaxRandomSaccadeOffset?: member<number>;
DefaultAcceptAngle?: member<number>;
DefaultBreakAngle?: member<number>;
HeadAcceptAngle?: member<number>;
HeadBreakAngle?: member<number>;
CameraAcceptAngle?: member<number>;
CameraBreakAngle?: member<number>;
HandAcceptAngle?: member<number>;
HandBreakAngle?: member<number>;
DistanceCompensationExp?: member<number>;
LeftEyeCloseOverride?: member<number>;
RightEyeCloseOverride?: member<number>;
MinBlinkInterval?: member<number>;
MaxBlinkInterval?: member<number>;
BlinkMinSpeed?: member<number>;
BlinkMaxSpeed?: member<number>;
BlinkSpeedSpread?: member<number>;
MinPupilSize?: member<number>;
MaxPupilSize?: member<number>;
PupilSizeNoiseSpeed?: member<number>;
PupilSizeNoiseOffset?: member<number>;
EyeTrackingPupilSizeSmoothSpeed?: member<number>;
MiniExpressionProbability?: member<number>;
MiniExpressionInterval?: member<number>;
    }
    
    export function EyeManager(props: EyeManagerInput){
      const { id, persistentId, updateOrder, Enabled,
TargetPoint,
LeftEyeTargetPoint,
RightEyeTargetPoint,
LeftEyeClose,
RightEyeClose,
CombinedEyeClose,
LeftEyePupilSizeMillimeters,
RightEyePupilSizeMillimeters,
CombinedEyePupilSizeMillimeters,
LeftEyeWiden,
RightEyeWiden,
CombinedEyeWiden,
LeftEyeSqueeze,
RightEyeSqueeze,
CombinedEyeSqueeze,
LeftEyeFrown,
RightEyeFrown,
CombinedEyeFrown,
EyeDataSource,
SimulatingUser,
SimulateOnHost,
IgnoreLocalUserHead,
UserHeadWeight,
UserHandWeight,
GrippingHandWeight,
CameraWeight,
ForcedCameraWeight,
EyeReference,
EyeSeparation,
SaccadeSpeed,
LookTargetRoot,
LookTargetLocalPoint,
LeftEyeTargetOffset,
RightEyeTargetOffset,
LookTargetOffset,
MinRandomSaccadeInterval,
MaxRandomSaccadeInterval,
MinTargetSaccadeInterval,
MaxTargetSaccadeInterval,
MaxRandomSaccadeOffset,
DefaultAcceptAngle,
DefaultBreakAngle,
HeadAcceptAngle,
HeadBreakAngle,
CameraAcceptAngle,
CameraBreakAngle,
HandAcceptAngle,
HandBreakAngle,
DistanceCompensationExp,
LeftEyeCloseOverride,
RightEyeCloseOverride,
MinBlinkInterval,
MaxBlinkInterval,
BlinkMinSpeed,
BlinkMaxSpeed,
BlinkSpeedSpread,
MinPupilSize,
MaxPupilSize,
PupilSizeNoiseSpeed,
PupilSizeNoiseOffset,
EyeTrackingPupilSizeSmoothSpeed,
MiniExpressionProbability,
MiniExpressionInterval, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.EyeManager" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.float3]`} name="TargetPoint" id={typeof TargetPoint === "object" && "id" in TargetPoint ? TargetPoint?.id : undefined} value={typeof TargetPoint === "object" && "value" in TargetPoint ? TargetPoint?.value : TargetPoint} /* default: FrooxEngine.RawOutput`1[BaseX.float3] */  />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.float3]`} name="LeftEyeTargetPoint" id={typeof LeftEyeTargetPoint === "object" && "id" in LeftEyeTargetPoint ? LeftEyeTargetPoint?.id : undefined} value={typeof LeftEyeTargetPoint === "object" && "value" in LeftEyeTargetPoint ? LeftEyeTargetPoint?.value : LeftEyeTargetPoint} /* default: FrooxEngine.RawOutput`1[BaseX.float3] */  />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.float3]`} name="RightEyeTargetPoint" id={typeof RightEyeTargetPoint === "object" && "id" in RightEyeTargetPoint ? RightEyeTargetPoint?.id : undefined} value={typeof RightEyeTargetPoint === "object" && "value" in RightEyeTargetPoint ? RightEyeTargetPoint?.value : RightEyeTargetPoint} /* default: FrooxEngine.RawOutput`1[BaseX.float3] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LeftEyeClose" id={typeof LeftEyeClose === "object" && "id" in LeftEyeClose ? LeftEyeClose?.id : undefined} value={typeof LeftEyeClose === "object" && "value" in LeftEyeClose ? LeftEyeClose?.value : LeftEyeClose} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="RightEyeClose" id={typeof RightEyeClose === "object" && "id" in RightEyeClose ? RightEyeClose?.id : undefined} value={typeof RightEyeClose === "object" && "value" in RightEyeClose ? RightEyeClose?.value : RightEyeClose} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="CombinedEyeClose" id={typeof CombinedEyeClose === "object" && "id" in CombinedEyeClose ? CombinedEyeClose?.id : undefined} value={typeof CombinedEyeClose === "object" && "value" in CombinedEyeClose ? CombinedEyeClose?.value : CombinedEyeClose} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LeftEyePupilSizeMillimeters" id={typeof LeftEyePupilSizeMillimeters === "object" && "id" in LeftEyePupilSizeMillimeters ? LeftEyePupilSizeMillimeters?.id : undefined} value={typeof LeftEyePupilSizeMillimeters === "object" && "value" in LeftEyePupilSizeMillimeters ? LeftEyePupilSizeMillimeters?.value : LeftEyePupilSizeMillimeters} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="RightEyePupilSizeMillimeters" id={typeof RightEyePupilSizeMillimeters === "object" && "id" in RightEyePupilSizeMillimeters ? RightEyePupilSizeMillimeters?.id : undefined} value={typeof RightEyePupilSizeMillimeters === "object" && "value" in RightEyePupilSizeMillimeters ? RightEyePupilSizeMillimeters?.value : RightEyePupilSizeMillimeters} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="CombinedEyePupilSizeMillimeters" id={typeof CombinedEyePupilSizeMillimeters === "object" && "id" in CombinedEyePupilSizeMillimeters ? CombinedEyePupilSizeMillimeters?.id : undefined} value={typeof CombinedEyePupilSizeMillimeters === "object" && "value" in CombinedEyePupilSizeMillimeters ? CombinedEyePupilSizeMillimeters?.value : CombinedEyePupilSizeMillimeters} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LeftEyeWiden" id={typeof LeftEyeWiden === "object" && "id" in LeftEyeWiden ? LeftEyeWiden?.id : undefined} value={typeof LeftEyeWiden === "object" && "value" in LeftEyeWiden ? LeftEyeWiden?.value : LeftEyeWiden} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="RightEyeWiden" id={typeof RightEyeWiden === "object" && "id" in RightEyeWiden ? RightEyeWiden?.id : undefined} value={typeof RightEyeWiden === "object" && "value" in RightEyeWiden ? RightEyeWiden?.value : RightEyeWiden} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="CombinedEyeWiden" id={typeof CombinedEyeWiden === "object" && "id" in CombinedEyeWiden ? CombinedEyeWiden?.id : undefined} value={typeof CombinedEyeWiden === "object" && "value" in CombinedEyeWiden ? CombinedEyeWiden?.value : CombinedEyeWiden} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LeftEyeSqueeze" id={typeof LeftEyeSqueeze === "object" && "id" in LeftEyeSqueeze ? LeftEyeSqueeze?.id : undefined} value={typeof LeftEyeSqueeze === "object" && "value" in LeftEyeSqueeze ? LeftEyeSqueeze?.value : LeftEyeSqueeze} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="RightEyeSqueeze" id={typeof RightEyeSqueeze === "object" && "id" in RightEyeSqueeze ? RightEyeSqueeze?.id : undefined} value={typeof RightEyeSqueeze === "object" && "value" in RightEyeSqueeze ? RightEyeSqueeze?.value : RightEyeSqueeze} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="CombinedEyeSqueeze" id={typeof CombinedEyeSqueeze === "object" && "id" in CombinedEyeSqueeze ? CombinedEyeSqueeze?.id : undefined} value={typeof CombinedEyeSqueeze === "object" && "value" in CombinedEyeSqueeze ? CombinedEyeSqueeze?.value : CombinedEyeSqueeze} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LeftEyeFrown" id={typeof LeftEyeFrown === "object" && "id" in LeftEyeFrown ? LeftEyeFrown?.id : undefined} value={typeof LeftEyeFrown === "object" && "value" in LeftEyeFrown ? LeftEyeFrown?.value : LeftEyeFrown} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="RightEyeFrown" id={typeof RightEyeFrown === "object" && "id" in RightEyeFrown ? RightEyeFrown?.id : undefined} value={typeof RightEyeFrown === "object" && "value" in RightEyeFrown ? RightEyeFrown?.value : RightEyeFrown} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="CombinedEyeFrown" id={typeof CombinedEyeFrown === "object" && "id" in CombinedEyeFrown ? CombinedEyeFrown?.id : undefined} value={typeof CombinedEyeFrown === "object" && "value" in CombinedEyeFrown ? CombinedEyeFrown?.value : CombinedEyeFrown} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IEyeDataSourceComponent]`} name="EyeDataSource" id={typeof EyeDataSource === "object" && "id" in EyeDataSource ? EyeDataSource?.id : undefined} value={typeof EyeDataSource === "object" && "value" in EyeDataSource ? EyeDataSource?.value : EyeDataSource} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="SimulatingUser" id={typeof SimulatingUser === "object" && "id" in SimulatingUser ? SimulatingUser?.id : undefined} value={typeof SimulatingUser === "object" && "value" in SimulatingUser ? SimulatingUser?.value : SimulatingUser} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SimulateOnHost" id={typeof SimulateOnHost === "object" && "id" in SimulateOnHost ? SimulateOnHost?.id : undefined} value={typeof SimulateOnHost === "object" && "value" in SimulateOnHost ? SimulateOnHost?.value : SimulateOnHost} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreLocalUserHead" id={typeof IgnoreLocalUserHead === "object" && "id" in IgnoreLocalUserHead ? IgnoreLocalUserHead?.id : undefined} value={typeof IgnoreLocalUserHead === "object" && "value" in IgnoreLocalUserHead ? IgnoreLocalUserHead?.value : IgnoreLocalUserHead} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="UserHeadWeight" id={typeof UserHeadWeight === "object" && "id" in UserHeadWeight ? UserHeadWeight?.id : undefined} value={typeof UserHeadWeight === "object" && "value" in UserHeadWeight ? UserHeadWeight?.value : UserHeadWeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="UserHandWeight" id={typeof UserHandWeight === "object" && "id" in UserHandWeight ? UserHandWeight?.id : undefined} value={typeof UserHandWeight === "object" && "value" in UserHandWeight ? UserHandWeight?.value : UserHandWeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GrippingHandWeight" id={typeof GrippingHandWeight === "object" && "id" in GrippingHandWeight ? GrippingHandWeight?.id : undefined} value={typeof GrippingHandWeight === "object" && "value" in GrippingHandWeight ? GrippingHandWeight?.value : GrippingHandWeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CameraWeight" id={typeof CameraWeight === "object" && "id" in CameraWeight ? CameraWeight?.id : undefined} value={typeof CameraWeight === "object" && "value" in CameraWeight ? CameraWeight?.value : CameraWeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ForcedCameraWeight" id={typeof ForcedCameraWeight === "object" && "id" in ForcedCameraWeight ? ForcedCameraWeight?.id : undefined} value={typeof ForcedCameraWeight === "object" && "value" in ForcedCameraWeight ? ForcedCameraWeight?.value : ForcedCameraWeight} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="EyeReference" id={typeof EyeReference === "object" && "id" in EyeReference ? EyeReference?.id : undefined} value={typeof EyeReference === "object" && "value" in EyeReference ? EyeReference?.value : EyeReference} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EyeSeparation" id={typeof EyeSeparation === "object" && "id" in EyeSeparation ? EyeSeparation?.id : undefined} value={typeof EyeSeparation === "object" && "value" in EyeSeparation ? EyeSeparation?.value : EyeSeparation} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SaccadeSpeed" id={typeof SaccadeSpeed === "object" && "id" in SaccadeSpeed ? SaccadeSpeed?.id : undefined} value={typeof SaccadeSpeed === "object" && "value" in SaccadeSpeed ? SaccadeSpeed?.value : SaccadeSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="LookTargetRoot" id={typeof LookTargetRoot === "object" && "id" in LookTargetRoot ? LookTargetRoot?.id : undefined} value={typeof LookTargetRoot === "object" && "value" in LookTargetRoot ? LookTargetRoot?.value : LookTargetRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LookTargetLocalPoint" id={typeof LookTargetLocalPoint === "object" && "id" in LookTargetLocalPoint ? LookTargetLocalPoint?.id : undefined} value={typeof LookTargetLocalPoint === "object" && "value" in LookTargetLocalPoint ? LookTargetLocalPoint?.value : LookTargetLocalPoint} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LeftEyeTargetOffset" id={typeof LeftEyeTargetOffset === "object" && "id" in LeftEyeTargetOffset ? LeftEyeTargetOffset?.id : undefined} value={typeof LeftEyeTargetOffset === "object" && "value" in LeftEyeTargetOffset ? LeftEyeTargetOffset?.value : LeftEyeTargetOffset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="RightEyeTargetOffset" id={typeof RightEyeTargetOffset === "object" && "id" in RightEyeTargetOffset ? RightEyeTargetOffset?.id : undefined} value={typeof RightEyeTargetOffset === "object" && "value" in RightEyeTargetOffset ? RightEyeTargetOffset?.value : RightEyeTargetOffset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LookTargetOffset" id={typeof LookTargetOffset === "object" && "id" in LookTargetOffset ? LookTargetOffset?.id : undefined} value={typeof LookTargetOffset === "object" && "value" in LookTargetOffset ? LookTargetOffset?.value : LookTargetOffset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinRandomSaccadeInterval" id={typeof MinRandomSaccadeInterval === "object" && "id" in MinRandomSaccadeInterval ? MinRandomSaccadeInterval?.id : undefined} value={typeof MinRandomSaccadeInterval === "object" && "value" in MinRandomSaccadeInterval ? MinRandomSaccadeInterval?.value : MinRandomSaccadeInterval} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxRandomSaccadeInterval" id={typeof MaxRandomSaccadeInterval === "object" && "id" in MaxRandomSaccadeInterval ? MaxRandomSaccadeInterval?.id : undefined} value={typeof MaxRandomSaccadeInterval === "object" && "value" in MaxRandomSaccadeInterval ? MaxRandomSaccadeInterval?.value : MaxRandomSaccadeInterval} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinTargetSaccadeInterval" id={typeof MinTargetSaccadeInterval === "object" && "id" in MinTargetSaccadeInterval ? MinTargetSaccadeInterval?.id : undefined} value={typeof MinTargetSaccadeInterval === "object" && "value" in MinTargetSaccadeInterval ? MinTargetSaccadeInterval?.value : MinTargetSaccadeInterval} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxTargetSaccadeInterval" id={typeof MaxTargetSaccadeInterval === "object" && "id" in MaxTargetSaccadeInterval ? MaxTargetSaccadeInterval?.id : undefined} value={typeof MaxTargetSaccadeInterval === "object" && "value" in MaxTargetSaccadeInterval ? MaxTargetSaccadeInterval?.value : MaxTargetSaccadeInterval} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxRandomSaccadeOffset" id={typeof MaxRandomSaccadeOffset === "object" && "id" in MaxRandomSaccadeOffset ? MaxRandomSaccadeOffset?.id : undefined} value={typeof MaxRandomSaccadeOffset === "object" && "value" in MaxRandomSaccadeOffset ? MaxRandomSaccadeOffset?.value : MaxRandomSaccadeOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DefaultAcceptAngle" id={typeof DefaultAcceptAngle === "object" && "id" in DefaultAcceptAngle ? DefaultAcceptAngle?.id : undefined} value={typeof DefaultAcceptAngle === "object" && "value" in DefaultAcceptAngle ? DefaultAcceptAngle?.value : DefaultAcceptAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DefaultBreakAngle" id={typeof DefaultBreakAngle === "object" && "id" in DefaultBreakAngle ? DefaultBreakAngle?.id : undefined} value={typeof DefaultBreakAngle === "object" && "value" in DefaultBreakAngle ? DefaultBreakAngle?.value : DefaultBreakAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeadAcceptAngle" id={typeof HeadAcceptAngle === "object" && "id" in HeadAcceptAngle ? HeadAcceptAngle?.id : undefined} value={typeof HeadAcceptAngle === "object" && "value" in HeadAcceptAngle ? HeadAcceptAngle?.value : HeadAcceptAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeadBreakAngle" id={typeof HeadBreakAngle === "object" && "id" in HeadBreakAngle ? HeadBreakAngle?.id : undefined} value={typeof HeadBreakAngle === "object" && "value" in HeadBreakAngle ? HeadBreakAngle?.value : HeadBreakAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CameraAcceptAngle" id={typeof CameraAcceptAngle === "object" && "id" in CameraAcceptAngle ? CameraAcceptAngle?.id : undefined} value={typeof CameraAcceptAngle === "object" && "value" in CameraAcceptAngle ? CameraAcceptAngle?.value : CameraAcceptAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CameraBreakAngle" id={typeof CameraBreakAngle === "object" && "id" in CameraBreakAngle ? CameraBreakAngle?.id : undefined} value={typeof CameraBreakAngle === "object" && "value" in CameraBreakAngle ? CameraBreakAngle?.value : CameraBreakAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HandAcceptAngle" id={typeof HandAcceptAngle === "object" && "id" in HandAcceptAngle ? HandAcceptAngle?.id : undefined} value={typeof HandAcceptAngle === "object" && "value" in HandAcceptAngle ? HandAcceptAngle?.value : HandAcceptAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HandBreakAngle" id={typeof HandBreakAngle === "object" && "id" in HandBreakAngle ? HandBreakAngle?.id : undefined} value={typeof HandBreakAngle === "object" && "value" in HandBreakAngle ? HandBreakAngle?.value : HandBreakAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DistanceCompensationExp" id={typeof DistanceCompensationExp === "object" && "id" in DistanceCompensationExp ? DistanceCompensationExp?.id : undefined} value={typeof DistanceCompensationExp === "object" && "value" in DistanceCompensationExp ? DistanceCompensationExp?.value : DistanceCompensationExp} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LeftEyeCloseOverride" id={typeof LeftEyeCloseOverride === "object" && "id" in LeftEyeCloseOverride ? LeftEyeCloseOverride?.id : undefined} value={typeof LeftEyeCloseOverride === "object" && "value" in LeftEyeCloseOverride ? LeftEyeCloseOverride?.value : LeftEyeCloseOverride} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RightEyeCloseOverride" id={typeof RightEyeCloseOverride === "object" && "id" in RightEyeCloseOverride ? RightEyeCloseOverride?.id : undefined} value={typeof RightEyeCloseOverride === "object" && "value" in RightEyeCloseOverride ? RightEyeCloseOverride?.value : RightEyeCloseOverride} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinBlinkInterval" id={typeof MinBlinkInterval === "object" && "id" in MinBlinkInterval ? MinBlinkInterval?.id : undefined} value={typeof MinBlinkInterval === "object" && "value" in MinBlinkInterval ? MinBlinkInterval?.value : MinBlinkInterval} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxBlinkInterval" id={typeof MaxBlinkInterval === "object" && "id" in MaxBlinkInterval ? MaxBlinkInterval?.id : undefined} value={typeof MaxBlinkInterval === "object" && "value" in MaxBlinkInterval ? MaxBlinkInterval?.value : MaxBlinkInterval} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BlinkMinSpeed" id={typeof BlinkMinSpeed === "object" && "id" in BlinkMinSpeed ? BlinkMinSpeed?.id : undefined} value={typeof BlinkMinSpeed === "object" && "value" in BlinkMinSpeed ? BlinkMinSpeed?.value : BlinkMinSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BlinkMaxSpeed" id={typeof BlinkMaxSpeed === "object" && "id" in BlinkMaxSpeed ? BlinkMaxSpeed?.id : undefined} value={typeof BlinkMaxSpeed === "object" && "value" in BlinkMaxSpeed ? BlinkMaxSpeed?.value : BlinkMaxSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BlinkSpeedSpread" id={typeof BlinkSpeedSpread === "object" && "id" in BlinkSpeedSpread ? BlinkSpeedSpread?.id : undefined} value={typeof BlinkSpeedSpread === "object" && "value" in BlinkSpeedSpread ? BlinkSpeedSpread?.value : BlinkSpeedSpread} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinPupilSize" id={typeof MinPupilSize === "object" && "id" in MinPupilSize ? MinPupilSize?.id : undefined} value={typeof MinPupilSize === "object" && "value" in MinPupilSize ? MinPupilSize?.value : MinPupilSize} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxPupilSize" id={typeof MaxPupilSize === "object" && "id" in MaxPupilSize ? MaxPupilSize?.id : undefined} value={typeof MaxPupilSize === "object" && "value" in MaxPupilSize ? MaxPupilSize?.value : MaxPupilSize} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PupilSizeNoiseSpeed" id={typeof PupilSizeNoiseSpeed === "object" && "id" in PupilSizeNoiseSpeed ? PupilSizeNoiseSpeed?.id : undefined} value={typeof PupilSizeNoiseSpeed === "object" && "value" in PupilSizeNoiseSpeed ? PupilSizeNoiseSpeed?.value : PupilSizeNoiseSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PupilSizeNoiseOffset" id={typeof PupilSizeNoiseOffset === "object" && "id" in PupilSizeNoiseOffset ? PupilSizeNoiseOffset?.id : undefined} value={typeof PupilSizeNoiseOffset === "object" && "value" in PupilSizeNoiseOffset ? PupilSizeNoiseOffset?.value : PupilSizeNoiseOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EyeTrackingPupilSizeSmoothSpeed" id={typeof EyeTrackingPupilSizeSmoothSpeed === "object" && "id" in EyeTrackingPupilSizeSmoothSpeed ? EyeTrackingPupilSizeSmoothSpeed?.id : undefined} value={typeof EyeTrackingPupilSizeSmoothSpeed === "object" && "value" in EyeTrackingPupilSizeSmoothSpeed ? EyeTrackingPupilSizeSmoothSpeed?.value : EyeTrackingPupilSizeSmoothSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MiniExpressionProbability" id={typeof MiniExpressionProbability === "object" && "id" in MiniExpressionProbability ? MiniExpressionProbability?.id : undefined} value={typeof MiniExpressionProbability === "object" && "value" in MiniExpressionProbability ? MiniExpressionProbability?.value : MiniExpressionProbability} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MiniExpressionInterval" id={typeof MiniExpressionInterval === "object" && "id" in MiniExpressionInterval ? MiniExpressionInterval?.id : undefined} value={typeof MiniExpressionInterval === "object" && "value" in MiniExpressionInterval ? MiniExpressionInterval?.value : MiniExpressionInterval} /* default: 0 */  />
        </Component>
      );
    };
    