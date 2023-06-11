import { member, Member, Component } from "../../../core";
    
    export interface SliderInput {
        
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
Rotatable?: member<boolean>;
Scalable?: member<boolean>;
Range?: member<[number, number, number]>;
Origin?: member<[number, number, number]>;
MinScale?: member<[number, number, number]>;
MaxScale?: member<[number, number, number]>;
VibrationOffset?: member<number>;
VibrationPreset?: member<any>;
SnapIncrement?: member<number>;
SnapTime?: member<number>;
SnapOnRelease?: member<boolean>;
SnapPositions?: member<any>;
posOffset?: member<[number, number, number]>;
rotOffset?: member<any>;
scaleReference?: member<[number, number, number]>;
referenceParent?: member<any>;
    }
    
    export function Slider(props: SliderInput){
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
Rotatable,
Scalable,
Range,
Origin,
MinScale,
MaxScale,
VibrationOffset,
VibrationPreset,
SnapIncrement,
SnapTime,
SnapOnRelease,
SnapPositions,
posOffset,
rotOffset,
scaleReference,
referenceParent, } = props;
    
      return (
        <Component type="FrooxEngine.Slider" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
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
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Rotatable" id={typeof Rotatable === "object" && "id" in Rotatable ? Rotatable?.id : undefined} value={typeof Rotatable === "object" && "value" in Rotatable ? Rotatable?.value : Rotatable} /* default: false */  isRaw={typeof Rotatable === "object" && "isRaw" in Rotatable && Rotatable.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Scalable" id={typeof Scalable === "object" && "id" in Scalable ? Scalable?.id : undefined} value={typeof Scalable === "object" && "value" in Scalable ? Scalable?.value : Scalable} /* default: false */  isRaw={typeof Scalable === "object" && "isRaw" in Scalable && Scalable.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Range" id={typeof Range === "object" && "id" in Range ? Range?.id : undefined} value={typeof Range === "object" && "value" in Range ? Range?.value : Range} /* default: [0; 0; 0] */  isRaw={typeof Range === "object" && "isRaw" in Range && Range.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Origin" id={typeof Origin === "object" && "id" in Origin ? Origin?.id : undefined} value={typeof Origin === "object" && "value" in Origin ? Origin?.value : Origin} /* default: [0; 0; 0] */  isRaw={typeof Origin === "object" && "isRaw" in Origin && Origin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="MinScale" id={typeof MinScale === "object" && "id" in MinScale ? MinScale?.id : undefined} value={typeof MinScale === "object" && "value" in MinScale ? MinScale?.value : MinScale} /* default: [0; 0; 0] */  isRaw={typeof MinScale === "object" && "isRaw" in MinScale && MinScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="MaxScale" id={typeof MaxScale === "object" && "id" in MaxScale ? MaxScale?.id : undefined} value={typeof MaxScale === "object" && "value" in MaxScale ? MaxScale?.value : MaxScale} /* default: [0; 0; 0] */  isRaw={typeof MaxScale === "object" && "isRaw" in MaxScale && MaxScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VibrationOffset" id={typeof VibrationOffset === "object" && "id" in VibrationOffset ? VibrationOffset?.id : undefined} value={typeof VibrationOffset === "object" && "value" in VibrationOffset ? VibrationOffset?.value : VibrationOffset} /* default: 0 */  isRaw={typeof VibrationOffset === "object" && "isRaw" in VibrationOffset && VibrationOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="VibrationPreset" id={typeof VibrationPreset === "object" && "id" in VibrationPreset ? VibrationPreset?.id : undefined} value={typeof VibrationPreset === "object" && "value" in VibrationPreset ? VibrationPreset?.value : VibrationPreset} /* default: None */  isRaw={typeof VibrationPreset === "object" && "isRaw" in VibrationPreset && VibrationPreset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SnapIncrement" id={typeof SnapIncrement === "object" && "id" in SnapIncrement ? SnapIncrement?.id : undefined} value={typeof SnapIncrement === "object" && "value" in SnapIncrement ? SnapIncrement?.value : SnapIncrement} /* default: 0 */  isRaw={typeof SnapIncrement === "object" && "isRaw" in SnapIncrement && SnapIncrement.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SnapTime" id={typeof SnapTime === "object" && "id" in SnapTime ? SnapTime?.id : undefined} value={typeof SnapTime === "object" && "value" in SnapTime ? SnapTime?.value : SnapTime} /* default: 0 */  isRaw={typeof SnapTime === "object" && "isRaw" in SnapTime && SnapTime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SnapOnRelease" id={typeof SnapOnRelease === "object" && "id" in SnapOnRelease ? SnapOnRelease?.id : undefined} value={typeof SnapOnRelease === "object" && "value" in SnapOnRelease ? SnapOnRelease?.value : SnapOnRelease} /* default: false */  isRaw={typeof SnapOnRelease === "object" && "isRaw" in SnapOnRelease && SnapOnRelease.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.Slider+SnapPosition]`} name="SnapPositions" id={typeof SnapPositions === "object" && "id" in SnapPositions ? SnapPositions?.id : undefined} value={typeof SnapPositions === "object" && "value" in SnapPositions ? SnapPositions?.value : SnapPositions} /* default: FrooxEngine.SyncList`1[FrooxEngine.Slider+SnapPosition] */  isRaw={typeof SnapPositions === "object" && "isRaw" in SnapPositions && SnapPositions.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="posOffset" id={typeof posOffset === "object" && "id" in posOffset ? posOffset?.id : undefined} value={typeof posOffset === "object" && "value" in posOffset ? posOffset?.value : posOffset} /* default: [0; 0; 0] */  isRaw={typeof posOffset === "object" && "isRaw" in posOffset && posOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="rotOffset" id={typeof rotOffset === "object" && "id" in rotOffset ? rotOffset?.id : undefined} value={typeof rotOffset === "object" && "value" in rotOffset ? rotOffset?.value : rotOffset} /* default: [0; 0; 0; 1] */  isRaw={typeof rotOffset === "object" && "isRaw" in rotOffset && rotOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="scaleReference" id={typeof scaleReference === "object" && "id" in scaleReference ? scaleReference?.id : undefined} value={typeof scaleReference === "object" && "value" in scaleReference ? scaleReference?.value : scaleReference} /* default: [0; 0; 0] */  isRaw={typeof scaleReference === "object" && "isRaw" in scaleReference && scaleReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="referenceParent" id={typeof referenceParent === "object" && "id" in referenceParent ? referenceParent?.id : undefined} value={typeof referenceParent === "object" && "value" in referenceParent ? referenceParent?.value : referenceParent} /* default: ID0 */  isRaw={typeof referenceParent === "object" && "isRaw" in referenceParent && referenceParent.isRaw ? true : undefined} />
        </Component>
      );
    };
    