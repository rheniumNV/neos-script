import { member, Member, Component } from "../../../core";
    
    export interface JointInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
EditModeOnly?: member<boolean>;
AllowSteal?: member<boolean>;
DropOnDisable?: member<boolean>;
DontDrive?: member<boolean>;
AllowOnlyPhysicalGrab?: member<boolean>;
ActiveUserFilter?: member<any>;
CustomGrabCheck?: member<any>;
_grabber?: member<any>;
_holdSlot?: member<any>;
_pos?: member<any>;
_rot?: member<any>;
_scl?: member<any>;
__legacyActiveUserRootOnly?: member<boolean>;
GrabPriority?: member<number>;
MaxSwing?: member<number>;
MaxTwist?: member<number>;
Axis?: member<[number, number, number]>;
TwistReferenceAxis?: member<[number, number, number]>;
PositionTwistThresholdAngle?: member<number>;
VibrationAngle?: member<number>;
VibrationPreset?: member<any>;
SnapIncrement?: member<number>;
SnapTime?: member<number>;
SnapOnRelease?: member<boolean>;
SnapOrientations?: member<any>;
origRotation?: member<any>;
rotReference?: member<any>;
dirReference?: member<[number, number, number]>;
twistReference?: member<[number, number, number]>;
usePositionTwist?: member<boolean>;
    }
    
    export function Joint(props: JointInput){
      const { id, persistentId, updateOrder, Enabled,
EditModeOnly,
AllowSteal,
DropOnDisable,
DontDrive,
AllowOnlyPhysicalGrab,
ActiveUserFilter,
CustomGrabCheck,
_grabber,
_holdSlot,
_pos,
_rot,
_scl,
__legacyActiveUserRootOnly,
GrabPriority,
MaxSwing,
MaxTwist,
Axis,
TwistReferenceAxis,
PositionTwistThresholdAngle,
VibrationAngle,
VibrationPreset,
SnapIncrement,
SnapTime,
SnapOnRelease,
SnapOrientations,
origRotation,
rotReference,
dirReference,
twistReference,
usePositionTwist, } = props;
    
      return (
        <Component type="FrooxEngine.Joint" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EditModeOnly" id={typeof EditModeOnly === "object" && "id" in EditModeOnly ? EditModeOnly?.id : undefined} value={typeof EditModeOnly === "object" && "value" in EditModeOnly ? EditModeOnly?.value : EditModeOnly} /* default: false */  isRaw={typeof EditModeOnly === "object" && "isRaw" in EditModeOnly && EditModeOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowSteal" id={typeof AllowSteal === "object" && "id" in AllowSteal ? AllowSteal?.id : undefined} value={typeof AllowSteal === "object" && "value" in AllowSteal ? AllowSteal?.value : AllowSteal} /* default: false */  isRaw={typeof AllowSteal === "object" && "isRaw" in AllowSteal && AllowSteal.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DropOnDisable" id={typeof DropOnDisable === "object" && "id" in DropOnDisable ? DropOnDisable?.id : undefined} value={typeof DropOnDisable === "object" && "value" in DropOnDisable ? DropOnDisable?.value : DropOnDisable} /* default: false */  isRaw={typeof DropOnDisable === "object" && "isRaw" in DropOnDisable && DropOnDisable.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DontDrive" id={typeof DontDrive === "object" && "id" in DontDrive ? DontDrive?.id : undefined} value={typeof DontDrive === "object" && "value" in DontDrive ? DontDrive?.value : DontDrive} /* default: false */  isRaw={typeof DontDrive === "object" && "isRaw" in DontDrive && DontDrive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowOnlyPhysicalGrab" id={typeof AllowOnlyPhysicalGrab === "object" && "id" in AllowOnlyPhysicalGrab ? AllowOnlyPhysicalGrab?.id : undefined} value={typeof AllowOnlyPhysicalGrab === "object" && "value" in AllowOnlyPhysicalGrab ? AllowOnlyPhysicalGrab?.value : AllowOnlyPhysicalGrab} /* default: false */  isRaw={typeof AllowOnlyPhysicalGrab === "object" && "isRaw" in AllowOnlyPhysicalGrab && AllowOnlyPhysicalGrab.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ActiveUserHandling]`} name="ActiveUserFilter" id={typeof ActiveUserFilter === "object" && "id" in ActiveUserFilter ? ActiveUserFilter?.id : undefined} value={typeof ActiveUserFilter === "object" && "value" in ActiveUserFilter ? ActiveUserFilter?.value : ActiveUserFilter} /* default: Disabled */  isRaw={typeof ActiveUserFilter === "object" && "isRaw" in ActiveUserFilter && ActiveUserFilter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.GrabCheck]`} name="CustomGrabCheck" id={typeof CustomGrabCheck === "object" && "id" in CustomGrabCheck ? CustomGrabCheck?.id : undefined} value={typeof CustomGrabCheck === "object" && "value" in CustomGrabCheck ? CustomGrabCheck?.value : CustomGrabCheck} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof CustomGrabCheck === "object" && "isRaw" in CustomGrabCheck && CustomGrabCheck.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Grabber]`} name="_grabber" id={typeof _grabber === "object" && "id" in _grabber ? _grabber?.id : undefined} value={typeof _grabber === "object" && "value" in _grabber ? _grabber?.value : _grabber} /* default: ID0 */  isRaw={typeof _grabber === "object" && "isRaw" in _grabber && _grabber.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_holdSlot" id={typeof _holdSlot === "object" && "id" in _holdSlot ? _holdSlot?.id : undefined} value={typeof _holdSlot === "object" && "value" in _holdSlot ? _holdSlot?.value : _holdSlot} /* default: ID0 */  isRaw={typeof _holdSlot === "object" && "isRaw" in _holdSlot && _holdSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.Sync\`1[BaseX.float3]]`} name="_pos" id={typeof _pos === "object" && "id" in _pos ? _pos?.id : undefined} value={typeof _pos === "object" && "value" in _pos ? _pos?.value : _pos} /* default: ID0 */  isRaw={typeof _pos === "object" && "isRaw" in _pos && _pos.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.Sync\`1[BaseX.floatQ]]`} name="_rot" id={typeof _rot === "object" && "id" in _rot ? _rot?.id : undefined} value={typeof _rot === "object" && "value" in _rot ? _rot?.value : _rot} /* default: ID0 */  isRaw={typeof _rot === "object" && "isRaw" in _rot && _rot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.Sync\`1[BaseX.float3]]`} name="_scl" id={typeof _scl === "object" && "id" in _scl ? _scl?.id : undefined} value={typeof _scl === "object" && "value" in _scl ? _scl?.value : _scl} /* default: ID0 */  isRaw={typeof _scl === "object" && "isRaw" in _scl && _scl.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="__legacyActiveUserRootOnly-ID" id={typeof __legacyActiveUserRootOnly === "object" && "id" in __legacyActiveUserRootOnly ? __legacyActiveUserRootOnly?.id : undefined} value={typeof __legacyActiveUserRootOnly === "object" && "value" in __legacyActiveUserRootOnly ? __legacyActiveUserRootOnly?.value : __legacyActiveUserRootOnly} /* default: false */ readOnly isRaw={typeof __legacyActiveUserRootOnly === "object" && "isRaw" in __legacyActiveUserRootOnly && __legacyActiveUserRootOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="GrabPriority" id={typeof GrabPriority === "object" && "id" in GrabPriority ? GrabPriority?.id : undefined} value={typeof GrabPriority === "object" && "value" in GrabPriority ? GrabPriority?.value : GrabPriority} /* default: 0 */  isRaw={typeof GrabPriority === "object" && "isRaw" in GrabPriority && GrabPriority.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxSwing" id={typeof MaxSwing === "object" && "id" in MaxSwing ? MaxSwing?.id : undefined} value={typeof MaxSwing === "object" && "value" in MaxSwing ? MaxSwing?.value : MaxSwing} /* default: 0 */  isRaw={typeof MaxSwing === "object" && "isRaw" in MaxSwing && MaxSwing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxTwist" id={typeof MaxTwist === "object" && "id" in MaxTwist ? MaxTwist?.id : undefined} value={typeof MaxTwist === "object" && "value" in MaxTwist ? MaxTwist?.value : MaxTwist} /* default: 0 */  isRaw={typeof MaxTwist === "object" && "isRaw" in MaxTwist && MaxTwist.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Axis" id={typeof Axis === "object" && "id" in Axis ? Axis?.id : undefined} value={typeof Axis === "object" && "value" in Axis ? Axis?.value : Axis} /* default: [0; 0; 0] */  isRaw={typeof Axis === "object" && "isRaw" in Axis && Axis.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="TwistReferenceAxis" id={typeof TwistReferenceAxis === "object" && "id" in TwistReferenceAxis ? TwistReferenceAxis?.id : undefined} value={typeof TwistReferenceAxis === "object" && "value" in TwistReferenceAxis ? TwistReferenceAxis?.value : TwistReferenceAxis} /* default: [0; 0; 0] */  isRaw={typeof TwistReferenceAxis === "object" && "isRaw" in TwistReferenceAxis && TwistReferenceAxis.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PositionTwistThresholdAngle" id={typeof PositionTwistThresholdAngle === "object" && "id" in PositionTwistThresholdAngle ? PositionTwistThresholdAngle?.id : undefined} value={typeof PositionTwistThresholdAngle === "object" && "value" in PositionTwistThresholdAngle ? PositionTwistThresholdAngle?.value : PositionTwistThresholdAngle} /* default: 0 */  isRaw={typeof PositionTwistThresholdAngle === "object" && "isRaw" in PositionTwistThresholdAngle && PositionTwistThresholdAngle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VibrationAngle" id={typeof VibrationAngle === "object" && "id" in VibrationAngle ? VibrationAngle?.id : undefined} value={typeof VibrationAngle === "object" && "value" in VibrationAngle ? VibrationAngle?.value : VibrationAngle} /* default: 0 */  isRaw={typeof VibrationAngle === "object" && "isRaw" in VibrationAngle && VibrationAngle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="VibrationPreset" id={typeof VibrationPreset === "object" && "id" in VibrationPreset ? VibrationPreset?.id : undefined} value={typeof VibrationPreset === "object" && "value" in VibrationPreset ? VibrationPreset?.value : VibrationPreset} /* default: None */  isRaw={typeof VibrationPreset === "object" && "isRaw" in VibrationPreset && VibrationPreset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SnapIncrement" id={typeof SnapIncrement === "object" && "id" in SnapIncrement ? SnapIncrement?.id : undefined} value={typeof SnapIncrement === "object" && "value" in SnapIncrement ? SnapIncrement?.value : SnapIncrement} /* default: 0 */  isRaw={typeof SnapIncrement === "object" && "isRaw" in SnapIncrement && SnapIncrement.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SnapTime" id={typeof SnapTime === "object" && "id" in SnapTime ? SnapTime?.id : undefined} value={typeof SnapTime === "object" && "value" in SnapTime ? SnapTime?.value : SnapTime} /* default: 0 */  isRaw={typeof SnapTime === "object" && "isRaw" in SnapTime && SnapTime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SnapOnRelease" id={typeof SnapOnRelease === "object" && "id" in SnapOnRelease ? SnapOnRelease?.id : undefined} value={typeof SnapOnRelease === "object" && "value" in SnapOnRelease ? SnapOnRelease?.value : SnapOnRelease} /* default: false */  isRaw={typeof SnapOnRelease === "object" && "isRaw" in SnapOnRelease && SnapOnRelease.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.Joint+SnapOrientation]`} name="SnapOrientations" id={typeof SnapOrientations === "object" && "id" in SnapOrientations ? SnapOrientations?.id : undefined} value={typeof SnapOrientations === "object" && "value" in SnapOrientations ? SnapOrientations?.value : SnapOrientations} /* default: FrooxEngine.SyncList`1[FrooxEngine.Joint+SnapOrientation] */  isRaw={typeof SnapOrientations === "object" && "isRaw" in SnapOrientations && SnapOrientations.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="origRotation" id={typeof origRotation === "object" && "id" in origRotation ? origRotation?.id : undefined} value={typeof origRotation === "object" && "value" in origRotation ? origRotation?.value : origRotation} /* default: [0; 0; 0; 1] */  isRaw={typeof origRotation === "object" && "isRaw" in origRotation && origRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="rotReference" id={typeof rotReference === "object" && "id" in rotReference ? rotReference?.id : undefined} value={typeof rotReference === "object" && "value" in rotReference ? rotReference?.value : rotReference} /* default: [0; 0; 0; 1] */  isRaw={typeof rotReference === "object" && "isRaw" in rotReference && rotReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="dirReference" id={typeof dirReference === "object" && "id" in dirReference ? dirReference?.id : undefined} value={typeof dirReference === "object" && "value" in dirReference ? dirReference?.value : dirReference} /* default: [0; 0; 0] */  isRaw={typeof dirReference === "object" && "isRaw" in dirReference && dirReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="twistReference" id={typeof twistReference === "object" && "id" in twistReference ? twistReference?.id : undefined} value={typeof twistReference === "object" && "value" in twistReference ? twistReference?.value : twistReference} /* default: [0; 0; 0] */  isRaw={typeof twistReference === "object" && "isRaw" in twistReference && twistReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="usePositionTwist" id={typeof usePositionTwist === "object" && "id" in usePositionTwist ? usePositionTwist?.id : undefined} value={typeof usePositionTwist === "object" && "value" in usePositionTwist ? usePositionTwist?.value : usePositionTwist} /* default: false */  isRaw={typeof usePositionTwist === "object" && "isRaw" in usePositionTwist && usePositionTwist.isRaw ? true : undefined} />
        </Component>
      );
    };
    