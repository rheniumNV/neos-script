import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
posOffset,
rotOffset,
scaleReference,
referenceParent, } = props;
    
      return (
        <Component type="FrooxEngine.Slider" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EditModeOnly" id={typeof EditModeOnly === "object" && "id" in EditModeOnly ? EditModeOnly?.id : undefined} value={typeof EditModeOnly === "object" && "value" in EditModeOnly ? EditModeOnly?.value : EditModeOnly} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowSteal" id={typeof AllowSteal === "object" && "id" in AllowSteal ? AllowSteal?.id : undefined} value={typeof AllowSteal === "object" && "value" in AllowSteal ? AllowSteal?.value : AllowSteal} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DropOnDisable" id={typeof DropOnDisable === "object" && "id" in DropOnDisable ? DropOnDisable?.id : undefined} value={typeof DropOnDisable === "object" && "value" in DropOnDisable ? DropOnDisable?.value : DropOnDisable} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DontDrive" id={typeof DontDrive === "object" && "id" in DontDrive ? DontDrive?.id : undefined} value={typeof DontDrive === "object" && "value" in DontDrive ? DontDrive?.value : DontDrive} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowOnlyPhysicalGrab" id={typeof AllowOnlyPhysicalGrab === "object" && "id" in AllowOnlyPhysicalGrab ? AllowOnlyPhysicalGrab?.id : undefined} value={typeof AllowOnlyPhysicalGrab === "object" && "value" in AllowOnlyPhysicalGrab ? AllowOnlyPhysicalGrab?.value : AllowOnlyPhysicalGrab} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ActiveUserHandling]`} name="ActiveUserFilter" id={typeof ActiveUserFilter === "object" && "id" in ActiveUserFilter ? ActiveUserFilter?.id : undefined} value={typeof ActiveUserFilter === "object" && "value" in ActiveUserFilter ? ActiveUserFilter?.value : ActiveUserFilter} /* default: Disabled */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.GrabCheck]`} name="CustomGrabCheck" id={typeof CustomGrabCheck === "object" && "id" in CustomGrabCheck ? CustomGrabCheck?.id : undefined} value={typeof CustomGrabCheck === "object" && "value" in CustomGrabCheck ? CustomGrabCheck?.value : CustomGrabCheck} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Grabber]`} name="_grabber" id={typeof _grabber === "object" && "id" in _grabber ? _grabber?.id : undefined} value={typeof _grabber === "object" && "value" in _grabber ? _grabber?.value : _grabber} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_holdSlot" id={typeof _holdSlot === "object" && "id" in _holdSlot ? _holdSlot?.id : undefined} value={typeof _holdSlot === "object" && "value" in _holdSlot ? _holdSlot?.value : _holdSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.Sync\`1[BaseX.float3]]`} name="_pos" id={typeof _pos === "object" && "id" in _pos ? _pos?.id : undefined} value={typeof _pos === "object" && "value" in _pos ? _pos?.value : _pos} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.Sync\`1[BaseX.floatQ]]`} name="_rot" id={typeof _rot === "object" && "id" in _rot ? _rot?.id : undefined} value={typeof _rot === "object" && "value" in _rot ? _rot?.value : _rot} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.Sync\`1[BaseX.float3]]`} name="_scl" id={typeof _scl === "object" && "id" in _scl ? _scl?.id : undefined} value={typeof _scl === "object" && "value" in _scl ? _scl?.value : _scl} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="__legacyActiveUserRootOnly-ID" id={typeof __legacyActiveUserRootOnly === "object" && "id" in __legacyActiveUserRootOnly ? __legacyActiveUserRootOnly?.id : undefined} value={typeof __legacyActiveUserRootOnly === "object" && "value" in __legacyActiveUserRootOnly ? __legacyActiveUserRootOnly?.value : __legacyActiveUserRootOnly} /* default: false */ idOnly />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="GrabPriority" id={typeof GrabPriority === "object" && "id" in GrabPriority ? GrabPriority?.id : undefined} value={typeof GrabPriority === "object" && "value" in GrabPriority ? GrabPriority?.value : GrabPriority} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Rotatable" id={typeof Rotatable === "object" && "id" in Rotatable ? Rotatable?.id : undefined} value={typeof Rotatable === "object" && "value" in Rotatable ? Rotatable?.value : Rotatable} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Scalable" id={typeof Scalable === "object" && "id" in Scalable ? Scalable?.id : undefined} value={typeof Scalable === "object" && "value" in Scalable ? Scalable?.value : Scalable} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Range" id={typeof Range === "object" && "id" in Range ? Range?.id : undefined} value={typeof Range === "object" && "value" in Range ? Range?.value : Range} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Origin" id={typeof Origin === "object" && "id" in Origin ? Origin?.id : undefined} value={typeof Origin === "object" && "value" in Origin ? Origin?.value : Origin} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="MinScale" id={typeof MinScale === "object" && "id" in MinScale ? MinScale?.id : undefined} value={typeof MinScale === "object" && "value" in MinScale ? MinScale?.value : MinScale} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="MaxScale" id={typeof MaxScale === "object" && "id" in MaxScale ? MaxScale?.id : undefined} value={typeof MaxScale === "object" && "value" in MaxScale ? MaxScale?.value : MaxScale} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VibrationOffset" id={typeof VibrationOffset === "object" && "id" in VibrationOffset ? VibrationOffset?.id : undefined} value={typeof VibrationOffset === "object" && "value" in VibrationOffset ? VibrationOffset?.value : VibrationOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="VibrationPreset" id={typeof VibrationPreset === "object" && "id" in VibrationPreset ? VibrationPreset?.id : undefined} value={typeof VibrationPreset === "object" && "value" in VibrationPreset ? VibrationPreset?.value : VibrationPreset} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SnapIncrement" id={typeof SnapIncrement === "object" && "id" in SnapIncrement ? SnapIncrement?.id : undefined} value={typeof SnapIncrement === "object" && "value" in SnapIncrement ? SnapIncrement?.value : SnapIncrement} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SnapTime" id={typeof SnapTime === "object" && "id" in SnapTime ? SnapTime?.id : undefined} value={typeof SnapTime === "object" && "value" in SnapTime ? SnapTime?.value : SnapTime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SnapOnRelease" id={typeof SnapOnRelease === "object" && "id" in SnapOnRelease ? SnapOnRelease?.id : undefined} value={typeof SnapOnRelease === "object" && "value" in SnapOnRelease ? SnapOnRelease?.value : SnapOnRelease} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="posOffset" id={typeof posOffset === "object" && "id" in posOffset ? posOffset?.id : undefined} value={typeof posOffset === "object" && "value" in posOffset ? posOffset?.value : posOffset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="rotOffset" id={typeof rotOffset === "object" && "id" in rotOffset ? rotOffset?.id : undefined} value={typeof rotOffset === "object" && "value" in rotOffset ? rotOffset?.value : rotOffset} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="scaleReference" id={typeof scaleReference === "object" && "id" in scaleReference ? scaleReference?.id : undefined} value={typeof scaleReference === "object" && "value" in scaleReference ? scaleReference?.value : scaleReference} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="referenceParent" id={typeof referenceParent === "object" && "id" in referenceParent ? referenceParent?.id : undefined} value={typeof referenceParent === "object" && "value" in referenceParent ? referenceParent?.value : referenceParent} /* default: ID0 */  />
        </Component>
      );
    };
    