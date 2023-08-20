import { member, Member, Component } from "../../core";
    
    export interface FullBodyCalibratorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetUser?: member<any>;
UseSymmetryForTrackers?: member<boolean>;
UseSymmetryForAvatar?: member<boolean>;
ShowBodyOverlay?: member<boolean>;
ShowAvatarOverlay?: member<boolean>;
HeightCompensation?: member<number>;
AvatarHeightCompensation?: member<number>;
_calibratingPose?: member<boolean>;
_spaceOffset?: member<[number, number, number]>;
_grabbable?: member<any>;
_headReference?: member<any>;
_leftHandReference?: member<any>;
_rightHandReference?: member<any>;
_hipsSource?: member<any>;
_chestSource?: member<any>;
_leftFootSource?: member<any>;
_rightFootSource?: member<any>;
_leftElbowSource?: member<any>;
_rightElbowSource?: member<any>;
_leftKneeSource?: member<any>;
_rightKneeSource?: member<any>;
_dialog?: member<any>;
_platformBody?: member<any>;
_userBody?: member<any>;
_customAvatar?: member<any>;
_leftHandOverride?: member<any>;
_rightHandOverride?: member<any>;
_targetCustomAvatar?: member<any>;
_avatarHipsOffset?: member<any>;
_avatarLeftFootOffset?: member<any>;
_avatarRightFootOffset?: member<any>;
_avatarLeftKneeDefaultOffset?: member<any>;
_avatarRightKneeDefaultOffset?: member<any>;
_avatarHipHandle?: member<any>;
_avatarLeftFootHandle?: member<any>;
_avatarRightFootHandle?: member<any>;
_avatarLeftKneeHandle?: member<any>;
_avatarRightKneeHandle?: member<any>;
_avatarLeftKneeOffset?: member<any>;
_avatarRightKneeOffset?: member<any>;
_platformBodyMaterialSets?: member<any>;
_ground?: member<any>;
_trackers?: member<any>;
_visualizationRoot?: member<any>;
_bodyNodeMaterial?: member<any>;
_calibrationReferenceMaterial?: member<any>;
_leftHandOverrideMaterial?: member<any>;
_rightHandOverrideMaterial?: member<any>;
_leftHandOverrideFrontColor?: member<any>;
_leftHandOverrideBehindColor?: member<any>;
_rightHandOverrideFrontColor?: member<any>;
_rightHandOverrideBehindColor?: member<any>;
_patternTex?: member<any>;
_title?: member<any>;
    }
    
    export function FullBodyCalibrator(props: FullBodyCalibratorInput){
      const { id, persistentId, updateOrder, Enabled,
TargetUser,
UseSymmetryForTrackers,
UseSymmetryForAvatar,
ShowBodyOverlay,
ShowAvatarOverlay,
HeightCompensation,
AvatarHeightCompensation,
_calibratingPose,
_spaceOffset,
_grabbable,
_headReference,
_leftHandReference,
_rightHandReference,
_hipsSource,
_chestSource,
_leftFootSource,
_rightFootSource,
_leftElbowSource,
_rightElbowSource,
_leftKneeSource,
_rightKneeSource,
_dialog,
_platformBody,
_userBody,
_customAvatar,
_leftHandOverride,
_rightHandOverride,
_targetCustomAvatar,
_avatarHipsOffset,
_avatarLeftFootOffset,
_avatarRightFootOffset,
_avatarLeftKneeDefaultOffset,
_avatarRightKneeDefaultOffset,
_avatarHipHandle,
_avatarLeftFootHandle,
_avatarRightFootHandle,
_avatarLeftKneeHandle,
_avatarRightKneeHandle,
_avatarLeftKneeOffset,
_avatarRightKneeOffset,
_platformBodyMaterialSets,
_ground,
_trackers,
_visualizationRoot,
_bodyNodeMaterial,
_calibrationReferenceMaterial,
_leftHandOverrideMaterial,
_rightHandOverrideMaterial,
_leftHandOverrideFrontColor,
_leftHandOverrideBehindColor,
_rightHandOverrideFrontColor,
_rightHandOverrideBehindColor,
_patternTex,
_title, } = props;
    
      return (
        <Component type="FrooxEngine.FullBodyCalibrator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="TargetUser" id={typeof TargetUser === "object" && "id" in TargetUser ? TargetUser?.id : undefined} value={typeof TargetUser === "object" && "value" in TargetUser ? TargetUser?.value : TargetUser} /* default: ID0 */  isRaw={typeof TargetUser === "object" && "isRaw" in TargetUser && TargetUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseSymmetryForTrackers" id={typeof UseSymmetryForTrackers === "object" && "id" in UseSymmetryForTrackers ? UseSymmetryForTrackers?.id : undefined} value={typeof UseSymmetryForTrackers === "object" && "value" in UseSymmetryForTrackers ? UseSymmetryForTrackers?.value : UseSymmetryForTrackers} /* default: false */  isRaw={typeof UseSymmetryForTrackers === "object" && "isRaw" in UseSymmetryForTrackers && UseSymmetryForTrackers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseSymmetryForAvatar" id={typeof UseSymmetryForAvatar === "object" && "id" in UseSymmetryForAvatar ? UseSymmetryForAvatar?.id : undefined} value={typeof UseSymmetryForAvatar === "object" && "value" in UseSymmetryForAvatar ? UseSymmetryForAvatar?.value : UseSymmetryForAvatar} /* default: false */  isRaw={typeof UseSymmetryForAvatar === "object" && "isRaw" in UseSymmetryForAvatar && UseSymmetryForAvatar.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowBodyOverlay" id={typeof ShowBodyOverlay === "object" && "id" in ShowBodyOverlay ? ShowBodyOverlay?.id : undefined} value={typeof ShowBodyOverlay === "object" && "value" in ShowBodyOverlay ? ShowBodyOverlay?.value : ShowBodyOverlay} /* default: false */  isRaw={typeof ShowBodyOverlay === "object" && "isRaw" in ShowBodyOverlay && ShowBodyOverlay.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowAvatarOverlay" id={typeof ShowAvatarOverlay === "object" && "id" in ShowAvatarOverlay ? ShowAvatarOverlay?.id : undefined} value={typeof ShowAvatarOverlay === "object" && "value" in ShowAvatarOverlay ? ShowAvatarOverlay?.value : ShowAvatarOverlay} /* default: false */  isRaw={typeof ShowAvatarOverlay === "object" && "isRaw" in ShowAvatarOverlay && ShowAvatarOverlay.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeightCompensation" id={typeof HeightCompensation === "object" && "id" in HeightCompensation ? HeightCompensation?.id : undefined} value={typeof HeightCompensation === "object" && "value" in HeightCompensation ? HeightCompensation?.value : HeightCompensation} /* default: 0 */  isRaw={typeof HeightCompensation === "object" && "isRaw" in HeightCompensation && HeightCompensation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AvatarHeightCompensation" id={typeof AvatarHeightCompensation === "object" && "id" in AvatarHeightCompensation ? AvatarHeightCompensation?.id : undefined} value={typeof AvatarHeightCompensation === "object" && "value" in AvatarHeightCompensation ? AvatarHeightCompensation?.value : AvatarHeightCompensation} /* default: 0 */  isRaw={typeof AvatarHeightCompensation === "object" && "isRaw" in AvatarHeightCompensation && AvatarHeightCompensation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_calibratingPose" id={typeof _calibratingPose === "object" && "id" in _calibratingPose ? _calibratingPose?.id : undefined} value={typeof _calibratingPose === "object" && "value" in _calibratingPose ? _calibratingPose?.value : _calibratingPose} /* default: false */  isRaw={typeof _calibratingPose === "object" && "isRaw" in _calibratingPose && _calibratingPose.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_spaceOffset" id={typeof _spaceOffset === "object" && "id" in _spaceOffset ? _spaceOffset?.id : undefined} value={typeof _spaceOffset === "object" && "value" in _spaceOffset ? _spaceOffset?.value : _spaceOffset} /* default: [0; 0; 0] */  isRaw={typeof _spaceOffset === "object" && "isRaw" in _spaceOffset && _spaceOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Grabbable]`} name="_grabbable" id={typeof _grabbable === "object" && "id" in _grabbable ? _grabbable?.id : undefined} value={typeof _grabbable === "object" && "value" in _grabbable ? _grabbable?.value : _grabbable} /* default: ID0 */  isRaw={typeof _grabbable === "object" && "isRaw" in _grabbable && _grabbable.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_headReference" id={typeof _headReference === "object" && "id" in _headReference ? _headReference?.id : undefined} value={typeof _headReference === "object" && "value" in _headReference ? _headReference?.value : _headReference} /* default: ID0 */  isRaw={typeof _headReference === "object" && "isRaw" in _headReference && _headReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_leftHandReference" id={typeof _leftHandReference === "object" && "id" in _leftHandReference ? _leftHandReference?.id : undefined} value={typeof _leftHandReference === "object" && "value" in _leftHandReference ? _leftHandReference?.value : _leftHandReference} /* default: ID0 */  isRaw={typeof _leftHandReference === "object" && "isRaw" in _leftHandReference && _leftHandReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_rightHandReference" id={typeof _rightHandReference === "object" && "id" in _rightHandReference ? _rightHandReference?.id : undefined} value={typeof _rightHandReference === "object" && "value" in _rightHandReference ? _rightHandReference?.value : _rightHandReference} /* default: ID0 */  isRaw={typeof _rightHandReference === "object" && "isRaw" in _rightHandReference && _rightHandReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TrackedDevicePositioner]`} name="_hipsSource" id={typeof _hipsSource === "object" && "id" in _hipsSource ? _hipsSource?.id : undefined} value={typeof _hipsSource === "object" && "value" in _hipsSource ? _hipsSource?.value : _hipsSource} /* default: ID0 */  isRaw={typeof _hipsSource === "object" && "isRaw" in _hipsSource && _hipsSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TrackedDevicePositioner]`} name="_chestSource" id={typeof _chestSource === "object" && "id" in _chestSource ? _chestSource?.id : undefined} value={typeof _chestSource === "object" && "value" in _chestSource ? _chestSource?.value : _chestSource} /* default: ID0 */  isRaw={typeof _chestSource === "object" && "isRaw" in _chestSource && _chestSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TrackedDevicePositioner]`} name="_leftFootSource" id={typeof _leftFootSource === "object" && "id" in _leftFootSource ? _leftFootSource?.id : undefined} value={typeof _leftFootSource === "object" && "value" in _leftFootSource ? _leftFootSource?.value : _leftFootSource} /* default: ID0 */  isRaw={typeof _leftFootSource === "object" && "isRaw" in _leftFootSource && _leftFootSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TrackedDevicePositioner]`} name="_rightFootSource" id={typeof _rightFootSource === "object" && "id" in _rightFootSource ? _rightFootSource?.id : undefined} value={typeof _rightFootSource === "object" && "value" in _rightFootSource ? _rightFootSource?.value : _rightFootSource} /* default: ID0 */  isRaw={typeof _rightFootSource === "object" && "isRaw" in _rightFootSource && _rightFootSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TrackedDevicePositioner]`} name="_leftElbowSource" id={typeof _leftElbowSource === "object" && "id" in _leftElbowSource ? _leftElbowSource?.id : undefined} value={typeof _leftElbowSource === "object" && "value" in _leftElbowSource ? _leftElbowSource?.value : _leftElbowSource} /* default: ID0 */  isRaw={typeof _leftElbowSource === "object" && "isRaw" in _leftElbowSource && _leftElbowSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TrackedDevicePositioner]`} name="_rightElbowSource" id={typeof _rightElbowSource === "object" && "id" in _rightElbowSource ? _rightElbowSource?.id : undefined} value={typeof _rightElbowSource === "object" && "value" in _rightElbowSource ? _rightElbowSource?.value : _rightElbowSource} /* default: ID0 */  isRaw={typeof _rightElbowSource === "object" && "isRaw" in _rightElbowSource && _rightElbowSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TrackedDevicePositioner]`} name="_leftKneeSource" id={typeof _leftKneeSource === "object" && "id" in _leftKneeSource ? _leftKneeSource?.id : undefined} value={typeof _leftKneeSource === "object" && "value" in _leftKneeSource ? _leftKneeSource?.value : _leftKneeSource} /* default: ID0 */  isRaw={typeof _leftKneeSource === "object" && "isRaw" in _leftKneeSource && _leftKneeSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TrackedDevicePositioner]`} name="_rightKneeSource" id={typeof _rightKneeSource === "object" && "id" in _rightKneeSource ? _rightKneeSource?.id : undefined} value={typeof _rightKneeSource === "object" && "value" in _rightKneeSource ? _rightKneeSource?.value : _rightKneeSource} /* default: ID0 */  isRaw={typeof _rightKneeSource === "object" && "isRaw" in _rightKneeSource && _rightKneeSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FullBodyCalibratorDialog]`} name="_dialog" id={typeof _dialog === "object" && "id" in _dialog ? _dialog?.id : undefined} value={typeof _dialog === "object" && "value" in _dialog ? _dialog?.value : _dialog} /* default: ID0 */  isRaw={typeof _dialog === "object" && "isRaw" in _dialog && _dialog.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FullBodyCalibrator+BodyReference`} name="_platformBody" id={typeof _platformBody === "object" && "id" in _platformBody ? _platformBody?.id : undefined} value={typeof _platformBody === "object" && "value" in _platformBody ? _platformBody?.value : _platformBody} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.FullBodyCalibrator\+BodyReference,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof _platformBody === "object" && "isRaw" in _platformBody && _platformBody.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FullBodyCalibrator+BodyReference`} name="_userBody" id={typeof _userBody === "object" && "id" in _userBody ? _userBody?.id : undefined} value={typeof _userBody === "object" && "value" in _userBody ? _userBody?.value : _userBody} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.FullBodyCalibrator\+BodyReference,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof _userBody === "object" && "isRaw" in _userBody && _userBody.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FullBodyCalibrator+BodyReference`} name="_customAvatar" id={typeof _customAvatar === "object" && "id" in _customAvatar ? _customAvatar?.id : undefined} value={typeof _customAvatar === "object" && "value" in _customAvatar ? _customAvatar?.value : _customAvatar} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.FullBodyCalibrator\+BodyReference,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof _customAvatar === "object" && "isRaw" in _customAvatar && _customAvatar.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_leftHandOverride" id={typeof _leftHandOverride === "object" && "id" in _leftHandOverride ? _leftHandOverride?.id : undefined} value={typeof _leftHandOverride === "object" && "value" in _leftHandOverride ? _leftHandOverride?.value : _leftHandOverride} /* default: ID0 */  isRaw={typeof _leftHandOverride === "object" && "isRaw" in _leftHandOverride && _leftHandOverride.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_rightHandOverride" id={typeof _rightHandOverride === "object" && "id" in _rightHandOverride ? _rightHandOverride?.id : undefined} value={typeof _rightHandOverride === "object" && "value" in _rightHandOverride ? _rightHandOverride?.value : _rightHandOverride} /* default: ID0 */  isRaw={typeof _rightHandOverride === "object" && "isRaw" in _rightHandOverride && _rightHandOverride.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FinalIK.VRIKAvatar]`} name="_targetCustomAvatar" id={typeof _targetCustomAvatar === "object" && "id" in _targetCustomAvatar ? _targetCustomAvatar?.id : undefined} value={typeof _targetCustomAvatar === "object" && "value" in _targetCustomAvatar ? _targetCustomAvatar?.value : _targetCustomAvatar} /* default: ID0 */  isRaw={typeof _targetCustomAvatar === "object" && "isRaw" in _targetCustomAvatar && _targetCustomAvatar.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_avatarHipsOffset" id={typeof _avatarHipsOffset === "object" && "id" in _avatarHipsOffset ? _avatarHipsOffset?.id : undefined} value={typeof _avatarHipsOffset === "object" && "value" in _avatarHipsOffset ? _avatarHipsOffset?.value : _avatarHipsOffset} /* default: ID0 */  isRaw={typeof _avatarHipsOffset === "object" && "isRaw" in _avatarHipsOffset && _avatarHipsOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_avatarLeftFootOffset" id={typeof _avatarLeftFootOffset === "object" && "id" in _avatarLeftFootOffset ? _avatarLeftFootOffset?.id : undefined} value={typeof _avatarLeftFootOffset === "object" && "value" in _avatarLeftFootOffset ? _avatarLeftFootOffset?.value : _avatarLeftFootOffset} /* default: ID0 */  isRaw={typeof _avatarLeftFootOffset === "object" && "isRaw" in _avatarLeftFootOffset && _avatarLeftFootOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_avatarRightFootOffset" id={typeof _avatarRightFootOffset === "object" && "id" in _avatarRightFootOffset ? _avatarRightFootOffset?.id : undefined} value={typeof _avatarRightFootOffset === "object" && "value" in _avatarRightFootOffset ? _avatarRightFootOffset?.value : _avatarRightFootOffset} /* default: ID0 */  isRaw={typeof _avatarRightFootOffset === "object" && "isRaw" in _avatarRightFootOffset && _avatarRightFootOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_avatarLeftKneeDefaultOffset" id={typeof _avatarLeftKneeDefaultOffset === "object" && "id" in _avatarLeftKneeDefaultOffset ? _avatarLeftKneeDefaultOffset?.id : undefined} value={typeof _avatarLeftKneeDefaultOffset === "object" && "value" in _avatarLeftKneeDefaultOffset ? _avatarLeftKneeDefaultOffset?.value : _avatarLeftKneeDefaultOffset} /* default: ID0 */  isRaw={typeof _avatarLeftKneeDefaultOffset === "object" && "isRaw" in _avatarLeftKneeDefaultOffset && _avatarLeftKneeDefaultOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_avatarRightKneeDefaultOffset" id={typeof _avatarRightKneeDefaultOffset === "object" && "id" in _avatarRightKneeDefaultOffset ? _avatarRightKneeDefaultOffset?.id : undefined} value={typeof _avatarRightKneeDefaultOffset === "object" && "value" in _avatarRightKneeDefaultOffset ? _avatarRightKneeDefaultOffset?.value : _avatarRightKneeDefaultOffset} /* default: ID0 */  isRaw={typeof _avatarRightKneeDefaultOffset === "object" && "isRaw" in _avatarRightKneeDefaultOffset && _avatarRightKneeDefaultOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_avatarHipHandle" id={typeof _avatarHipHandle === "object" && "id" in _avatarHipHandle ? _avatarHipHandle?.id : undefined} value={typeof _avatarHipHandle === "object" && "value" in _avatarHipHandle ? _avatarHipHandle?.value : _avatarHipHandle} /* default: ID0 */  isRaw={typeof _avatarHipHandle === "object" && "isRaw" in _avatarHipHandle && _avatarHipHandle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_avatarLeftFootHandle" id={typeof _avatarLeftFootHandle === "object" && "id" in _avatarLeftFootHandle ? _avatarLeftFootHandle?.id : undefined} value={typeof _avatarLeftFootHandle === "object" && "value" in _avatarLeftFootHandle ? _avatarLeftFootHandle?.value : _avatarLeftFootHandle} /* default: ID0 */  isRaw={typeof _avatarLeftFootHandle === "object" && "isRaw" in _avatarLeftFootHandle && _avatarLeftFootHandle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_avatarRightFootHandle" id={typeof _avatarRightFootHandle === "object" && "id" in _avatarRightFootHandle ? _avatarRightFootHandle?.id : undefined} value={typeof _avatarRightFootHandle === "object" && "value" in _avatarRightFootHandle ? _avatarRightFootHandle?.value : _avatarRightFootHandle} /* default: ID0 */  isRaw={typeof _avatarRightFootHandle === "object" && "isRaw" in _avatarRightFootHandle && _avatarRightFootHandle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_avatarLeftKneeHandle" id={typeof _avatarLeftKneeHandle === "object" && "id" in _avatarLeftKneeHandle ? _avatarLeftKneeHandle?.id : undefined} value={typeof _avatarLeftKneeHandle === "object" && "value" in _avatarLeftKneeHandle ? _avatarLeftKneeHandle?.value : _avatarLeftKneeHandle} /* default: ID0 */  isRaw={typeof _avatarLeftKneeHandle === "object" && "isRaw" in _avatarLeftKneeHandle && _avatarLeftKneeHandle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_avatarRightKneeHandle" id={typeof _avatarRightKneeHandle === "object" && "id" in _avatarRightKneeHandle ? _avatarRightKneeHandle?.id : undefined} value={typeof _avatarRightKneeHandle === "object" && "value" in _avatarRightKneeHandle ? _avatarRightKneeHandle?.value : _avatarRightKneeHandle} /* default: ID0 */  isRaw={typeof _avatarRightKneeHandle === "object" && "isRaw" in _avatarRightKneeHandle && _avatarRightKneeHandle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldHook\`1[BaseX.float3]`} name="_avatarLeftKneeOffset" id={typeof _avatarLeftKneeOffset === "object" && "id" in _avatarLeftKneeOffset ? _avatarLeftKneeOffset?.id : undefined} value={typeof _avatarLeftKneeOffset === "object" && "value" in _avatarLeftKneeOffset ? _avatarLeftKneeOffset?.value : _avatarLeftKneeOffset} /* default: ID0 */  isRaw={typeof _avatarLeftKneeOffset === "object" && "isRaw" in _avatarLeftKneeOffset && _avatarLeftKneeOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldHook\`1[BaseX.float3]`} name="_avatarRightKneeOffset" id={typeof _avatarRightKneeOffset === "object" && "id" in _avatarRightKneeOffset ? _avatarRightKneeOffset?.id : undefined} value={typeof _avatarRightKneeOffset === "object" && "value" in _avatarRightKneeOffset ? _avatarRightKneeOffset?.value : _avatarRightKneeOffset} /* default: ID0 */  isRaw={typeof _avatarRightKneeOffset === "object" && "isRaw" in _avatarRightKneeOffset && _avatarRightKneeOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.MaterialSet]`} name="_platformBodyMaterialSets" id={typeof _platformBodyMaterialSets === "object" && "id" in _platformBodyMaterialSets ? _platformBodyMaterialSets?.id : undefined} value={typeof _platformBodyMaterialSets === "object" && "value" in _platformBodyMaterialSets ? _platformBodyMaterialSets?.value : _platformBodyMaterialSets} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.MaterialSet] */  isRaw={typeof _platformBodyMaterialSets === "object" && "isRaw" in _platformBodyMaterialSets && _platformBodyMaterialSets.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_ground" id={typeof _ground === "object" && "id" in _ground ? _ground?.id : undefined} value={typeof _ground === "object" && "value" in _ground ? _ground?.value : _ground} /* default: ID0 */  isRaw={typeof _ground === "object" && "isRaw" in _ground && _ground.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.FullBodyCalibrator+Tracker]`} name="_trackers" id={typeof _trackers === "object" && "id" in _trackers ? _trackers?.id : undefined} value={typeof _trackers === "object" && "value" in _trackers ? _trackers?.value : _trackers} /* default: FrooxEngine.SyncList`1[FrooxEngine.FullBodyCalibrator+Tracker] */  isRaw={typeof _trackers === "object" && "isRaw" in _trackers && _trackers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_visualizationRoot" id={typeof _visualizationRoot === "object" && "id" in _visualizationRoot ? _visualizationRoot?.id : undefined} value={typeof _visualizationRoot === "object" && "value" in _visualizationRoot ? _visualizationRoot?.value : _visualizationRoot} /* default: ID0 */  isRaw={typeof _visualizationRoot === "object" && "isRaw" in _visualizationRoot && _visualizationRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FresnelMaterial]`} name="_bodyNodeMaterial" id={typeof _bodyNodeMaterial === "object" && "id" in _bodyNodeMaterial ? _bodyNodeMaterial?.id : undefined} value={typeof _bodyNodeMaterial === "object" && "value" in _bodyNodeMaterial ? _bodyNodeMaterial?.value : _bodyNodeMaterial} /* default: ID0 */  isRaw={typeof _bodyNodeMaterial === "object" && "isRaw" in _bodyNodeMaterial && _bodyNodeMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.OverlayFresnelMaterial]`} name="_calibrationReferenceMaterial" id={typeof _calibrationReferenceMaterial === "object" && "id" in _calibrationReferenceMaterial ? _calibrationReferenceMaterial?.id : undefined} value={typeof _calibrationReferenceMaterial === "object" && "value" in _calibrationReferenceMaterial ? _calibrationReferenceMaterial?.value : _calibrationReferenceMaterial} /* default: ID0 */  isRaw={typeof _calibrationReferenceMaterial === "object" && "isRaw" in _calibrationReferenceMaterial && _calibrationReferenceMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.OverlayFresnelMaterial]`} name="_leftHandOverrideMaterial" id={typeof _leftHandOverrideMaterial === "object" && "id" in _leftHandOverrideMaterial ? _leftHandOverrideMaterial?.id : undefined} value={typeof _leftHandOverrideMaterial === "object" && "value" in _leftHandOverrideMaterial ? _leftHandOverrideMaterial?.value : _leftHandOverrideMaterial} /* default: ID0 */  isRaw={typeof _leftHandOverrideMaterial === "object" && "isRaw" in _leftHandOverrideMaterial && _leftHandOverrideMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.OverlayFresnelMaterial]`} name="_rightHandOverrideMaterial" id={typeof _rightHandOverrideMaterial === "object" && "id" in _rightHandOverrideMaterial ? _rightHandOverrideMaterial?.id : undefined} value={typeof _rightHandOverrideMaterial === "object" && "value" in _rightHandOverrideMaterial ? _rightHandOverrideMaterial?.value : _rightHandOverrideMaterial} /* default: ID0 */  isRaw={typeof _rightHandOverrideMaterial === "object" && "isRaw" in _rightHandOverrideMaterial && _rightHandOverrideMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_leftHandOverrideFrontColor" id={typeof _leftHandOverrideFrontColor === "object" && "id" in _leftHandOverrideFrontColor ? _leftHandOverrideFrontColor?.id : undefined} value={typeof _leftHandOverrideFrontColor === "object" && "value" in _leftHandOverrideFrontColor ? _leftHandOverrideFrontColor?.value : _leftHandOverrideFrontColor} /* default: ID0 */  isRaw={typeof _leftHandOverrideFrontColor === "object" && "isRaw" in _leftHandOverrideFrontColor && _leftHandOverrideFrontColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_leftHandOverrideBehindColor" id={typeof _leftHandOverrideBehindColor === "object" && "id" in _leftHandOverrideBehindColor ? _leftHandOverrideBehindColor?.id : undefined} value={typeof _leftHandOverrideBehindColor === "object" && "value" in _leftHandOverrideBehindColor ? _leftHandOverrideBehindColor?.value : _leftHandOverrideBehindColor} /* default: ID0 */  isRaw={typeof _leftHandOverrideBehindColor === "object" && "isRaw" in _leftHandOverrideBehindColor && _leftHandOverrideBehindColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_rightHandOverrideFrontColor" id={typeof _rightHandOverrideFrontColor === "object" && "id" in _rightHandOverrideFrontColor ? _rightHandOverrideFrontColor?.id : undefined} value={typeof _rightHandOverrideFrontColor === "object" && "value" in _rightHandOverrideFrontColor ? _rightHandOverrideFrontColor?.value : _rightHandOverrideFrontColor} /* default: ID0 */  isRaw={typeof _rightHandOverrideFrontColor === "object" && "isRaw" in _rightHandOverrideFrontColor && _rightHandOverrideFrontColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_rightHandOverrideBehindColor" id={typeof _rightHandOverrideBehindColor === "object" && "id" in _rightHandOverrideBehindColor ? _rightHandOverrideBehindColor?.id : undefined} value={typeof _rightHandOverrideBehindColor === "object" && "value" in _rightHandOverrideBehindColor ? _rightHandOverrideBehindColor?.value : _rightHandOverrideBehindColor} /* default: ID0 */  isRaw={typeof _rightHandOverrideBehindColor === "object" && "isRaw" in _rightHandOverrideBehindColor && _rightHandOverrideBehindColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.StaticTexture2D]`} name="_patternTex" id={typeof _patternTex === "object" && "id" in _patternTex ? _patternTex?.id : undefined} value={typeof _patternTex === "object" && "value" in _patternTex ? _patternTex?.value : _patternTex} /* default: ID0 */  isRaw={typeof _patternTex === "object" && "isRaw" in _patternTex && _patternTex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_title" id={typeof _title === "object" && "id" in _title ? _title?.id : undefined} value={typeof _title === "object" && "value" in _title ? _title?.value : _title} /* default: ID0 */  isRaw={typeof _title === "object" && "isRaw" in _title && _title.isRaw ? true : undefined} />
        </Component>
      );
    };
    