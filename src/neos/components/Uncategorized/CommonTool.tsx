import { member, Member, Component } from "../../core";
    
    export interface CommonToolInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Side?: member<any>;
LocomotionController?: member<any>;
GrabSmoothing?: member<number>;
_streamDriver?: member<any>;
_undoItem?: member<any>;
_redoItem?: member<any>;
ContextMenu?: member<any>;
EquippingEnabled?: member<boolean>;
MenuEnabled?: member<boolean>;
UserScalingEnabled?: member<boolean>;
VisualEnabled?: member<boolean>;
PointingGrab?: member<boolean>;
PointingTouch?: member<boolean>;
_tooltipRoot?: member<any>;
_laserSlot?: member<any>;
_laserPosition?: member<any>;
_laserRotation?: member<any>;
_interactionLaser?: member<any>;
_laserEnabled?: member<boolean>;
_handGrabType?: member<any>;
_holderPos?: member<any>;
_holderRot?: member<any>;
_laserRotationType?: member<any>;
_holderAxisOffset?: member<number>;
_holderRotationOffset?: member<any>;
_holderRotationReference?: member<any>;
_originalTwistOffset?: member<number>;
_userspaceToggleIndicator?: member<any>;
_settingSyncs?: member<any>;
TooltipHolder?: member<any>;
ShowInteractionHints?: member<boolean>;
_grabberSphereActive?: member<any>;
_grabIgnoreRoot?: member<any>;
_grabber?: member<any>;
_currentGrabType?: member<any>;
ActiveToolTipLink?: member<any>;
_activeTooltipGripPoseReference?: member<any>;
_tooltipLocked?: member<boolean>;
_grabMaterial?: member<any>;
_itemShelfSlot?: member<any>;
_itemShelf?: member<any>;
    }
    
    export function CommonTool(props: CommonToolInput){
      const { id, persistentId, updateOrder, Enabled,
Side,
LocomotionController,
GrabSmoothing,
_streamDriver,
_undoItem,
_redoItem,
ContextMenu,
EquippingEnabled,
MenuEnabled,
UserScalingEnabled,
VisualEnabled,
PointingGrab,
PointingTouch,
_tooltipRoot,
_laserSlot,
_laserPosition,
_laserRotation,
_interactionLaser,
_laserEnabled,
_handGrabType,
_holderPos,
_holderRot,
_laserRotationType,
_holderAxisOffset,
_holderRotationOffset,
_holderRotationReference,
_originalTwistOffset,
_userspaceToggleIndicator,
_settingSyncs,
TooltipHolder,
ShowInteractionHints,
_grabberSphereActive,
_grabIgnoreRoot,
_grabber,
_currentGrabType,
ActiveToolTipLink,
_activeTooltipGripPoseReference,
_tooltipLocked,
_grabMaterial,
_itemShelfSlot,
_itemShelf, } = props;
    
      return (
        <Component type="FrooxEngine.CommonTool" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Chirality]`} name="Side" id={typeof Side === "object" && "id" in Side ? Side?.id : undefined} value={typeof Side === "object" && "value" in Side ? Side?.value : Side} /* default: Left */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.LocomotionController]`} name="LocomotionController" id={typeof LocomotionController === "object" && "id" in LocomotionController ? LocomotionController?.id : undefined} value={typeof LocomotionController === "object" && "value" in LocomotionController ? LocomotionController?.value : LocomotionController} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GrabSmoothing" id={typeof GrabSmoothing === "object" && "id" in GrabSmoothing ? GrabSmoothing?.id : undefined} value={typeof GrabSmoothing === "object" && "value" in GrabSmoothing ? GrabSmoothing?.value : GrabSmoothing} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonToolStreamDriver]`} name="_streamDriver" id={typeof _streamDriver === "object" && "id" in _streamDriver ? _streamDriver?.id : undefined} value={typeof _streamDriver === "object" && "value" in _streamDriver ? _streamDriver?.value : _streamDriver} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ContextMenuItem]`} name="_undoItem" id={typeof _undoItem === "object" && "id" in _undoItem ? _undoItem?.id : undefined} value={typeof _undoItem === "object" && "value" in _undoItem ? _undoItem?.value : _undoItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ContextMenuItem]`} name="_redoItem" id={typeof _redoItem === "object" && "id" in _redoItem ? _redoItem?.id : undefined} value={typeof _redoItem === "object" && "value" in _redoItem ? _redoItem?.value : _redoItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ContextMenu]`} name="ContextMenu" id={typeof ContextMenu === "object" && "id" in ContextMenu ? ContextMenu?.id : undefined} value={typeof ContextMenu === "object" && "value" in ContextMenu ? ContextMenu?.value : ContextMenu} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EquippingEnabled" id={typeof EquippingEnabled === "object" && "id" in EquippingEnabled ? EquippingEnabled?.id : undefined} value={typeof EquippingEnabled === "object" && "value" in EquippingEnabled ? EquippingEnabled?.value : EquippingEnabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="MenuEnabled" id={typeof MenuEnabled === "object" && "id" in MenuEnabled ? MenuEnabled?.id : undefined} value={typeof MenuEnabled === "object" && "value" in MenuEnabled ? MenuEnabled?.value : MenuEnabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UserScalingEnabled" id={typeof UserScalingEnabled === "object" && "id" in UserScalingEnabled ? UserScalingEnabled?.id : undefined} value={typeof UserScalingEnabled === "object" && "value" in UserScalingEnabled ? UserScalingEnabled?.value : UserScalingEnabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="VisualEnabled" id={typeof VisualEnabled === "object" && "id" in VisualEnabled ? VisualEnabled?.id : undefined} value={typeof VisualEnabled === "object" && "value" in VisualEnabled ? VisualEnabled?.value : VisualEnabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PointingGrab" id={typeof PointingGrab === "object" && "id" in PointingGrab ? PointingGrab?.id : undefined} value={typeof PointingGrab === "object" && "value" in PointingGrab ? PointingGrab?.value : PointingGrab} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PointingTouch" id={typeof PointingTouch === "object" && "id" in PointingTouch ? PointingTouch?.id : undefined} value={typeof PointingTouch === "object" && "value" in PointingTouch ? PointingTouch?.value : PointingTouch} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_tooltipRoot" id={typeof _tooltipRoot === "object" && "id" in _tooltipRoot ? _tooltipRoot?.id : undefined} value={typeof _tooltipRoot === "object" && "value" in _tooltipRoot ? _tooltipRoot?.value : _tooltipRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_laserSlot" id={typeof _laserSlot === "object" && "id" in _laserSlot ? _laserSlot?.id : undefined} value={typeof _laserSlot === "object" && "value" in _laserSlot ? _laserSlot?.value : _laserSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_laserPosition" id={typeof _laserPosition === "object" && "id" in _laserPosition ? _laserPosition?.id : undefined} value={typeof _laserPosition === "object" && "value" in _laserPosition ? _laserPosition?.value : _laserPosition} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_laserRotation" id={typeof _laserRotation === "object" && "id" in _laserRotation ? _laserRotation?.id : undefined} value={typeof _laserRotation === "object" && "value" in _laserRotation ? _laserRotation?.value : _laserRotation} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.InteractionLaser]`} name="_interactionLaser" id={typeof _interactionLaser === "object" && "id" in _interactionLaser ? _interactionLaser?.id : undefined} value={typeof _interactionLaser === "object" && "value" in _interactionLaser ? _interactionLaser?.value : _interactionLaser} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_laserEnabled" id={typeof _laserEnabled === "object" && "id" in _laserEnabled ? _laserEnabled?.id : undefined} value={typeof _laserEnabled === "object" && "value" in _laserEnabled ? _laserEnabled?.value : _laserEnabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CommonTool+HandGrabType]`} name="_handGrabType" id={typeof _handGrabType === "object" && "id" in _handGrabType ? _handGrabType?.id : undefined} value={typeof _handGrabType === "object" && "value" in _handGrabType ? _handGrabType?.value : _handGrabType} /* default: Palm */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_holderPos" id={typeof _holderPos === "object" && "id" in _holderPos ? _holderPos?.id : undefined} value={typeof _holderPos === "object" && "value" in _holderPos ? _holderPos?.value : _holderPos} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_holderRot" id={typeof _holderRot === "object" && "id" in _holderRot ? _holderRot?.id : undefined} value={typeof _holderRot === "object" && "value" in _holderRot ? _holderRot?.value : _holderRot} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CommonTool+LaserRotationType]`} name="_laserRotationType" id={typeof _laserRotationType === "object" && "id" in _laserRotationType ? _laserRotationType?.id : undefined} value={typeof _laserRotationType === "object" && "value" in _laserRotationType ? _laserRotationType?.value : _laserRotationType} /* default: AxisX */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_holderAxisOffset" id={typeof _holderAxisOffset === "object" && "id" in _holderAxisOffset ? _holderAxisOffset?.id : undefined} value={typeof _holderAxisOffset === "object" && "value" in _holderAxisOffset ? _holderAxisOffset?.value : _holderAxisOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="_holderRotationOffset" id={typeof _holderRotationOffset === "object" && "id" in _holderRotationOffset ? _holderRotationOffset?.id : undefined} value={typeof _holderRotationOffset === "object" && "value" in _holderRotationOffset ? _holderRotationOffset?.value : _holderRotationOffset} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.floatQ]]`} name="_holderRotationReference" id={typeof _holderRotationReference === "object" && "id" in _holderRotationReference ? _holderRotationReference?.id : undefined} value={typeof _holderRotationReference === "object" && "value" in _holderRotationReference ? _holderRotationReference?.value : _holderRotationReference} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_originalTwistOffset" id={typeof _originalTwistOffset === "object" && "id" in _originalTwistOffset ? _originalTwistOffset?.id : undefined} value={typeof _originalTwistOffset === "object" && "value" in _originalTwistOffset ? _originalTwistOffset?.value : _originalTwistOffset} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RingMesh]`} name="_userspaceToggleIndicator" id={typeof _userspaceToggleIndicator === "object" && "id" in _userspaceToggleIndicator ? _userspaceToggleIndicator?.id : undefined} value={typeof _userspaceToggleIndicator === "object" && "value" in _userspaceToggleIndicator ? _userspaceToggleIndicator?.value : _userspaceToggleIndicator} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.SettingSync]`} name="_settingSyncs" id={typeof _settingSyncs === "object" && "id" in _settingSyncs ? _settingSyncs?.id : undefined} value={typeof _settingSyncs === "object" && "value" in _settingSyncs ? _settingSyncs?.value : _settingSyncs} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.SettingSync] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TooltipHolder" id={typeof TooltipHolder === "object" && "id" in TooltipHolder ? TooltipHolder?.id : undefined} value={typeof TooltipHolder === "object" && "value" in TooltipHolder ? TooltipHolder?.value : TooltipHolder} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowInteractionHints" id={typeof ShowInteractionHints === "object" && "id" in ShowInteractionHints ? ShowInteractionHints?.id : undefined} value={typeof ShowInteractionHints === "object" && "value" in ShowInteractionHints ? ShowInteractionHints?.value : ShowInteractionHints} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_grabberSphereActive" id={typeof _grabberSphereActive === "object" && "id" in _grabberSphereActive ? _grabberSphereActive?.id : undefined} value={typeof _grabberSphereActive === "object" && "value" in _grabberSphereActive ? _grabberSphereActive?.value : _grabberSphereActive} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_grabIgnoreRoot" id={typeof _grabIgnoreRoot === "object" && "id" in _grabIgnoreRoot ? _grabIgnoreRoot?.id : undefined} value={typeof _grabIgnoreRoot === "object" && "value" in _grabIgnoreRoot ? _grabIgnoreRoot?.value : _grabIgnoreRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Grabber]`} name="_grabber" id={typeof _grabber === "object" && "id" in _grabber ? _grabber?.id : undefined} value={typeof _grabber === "object" && "value" in _grabber ? _grabber?.value : _grabber} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CommonTool+GrabType]`} name="_currentGrabType" id={typeof _currentGrabType === "object" && "id" in _currentGrabType ? _currentGrabType?.id : undefined} value={typeof _currentGrabType === "object" && "value" in _currentGrabType ? _currentGrabType?.value : _currentGrabType} /* default: None */  />
<Member type={`FrooxEngine.LinkTargetRef\`1[FrooxEngine.IToolTip]`} name="ActiveToolTipLink" id={typeof ActiveToolTipLink === "object" && "id" in ActiveToolTipLink ? ActiveToolTipLink?.id : undefined} value={typeof ActiveToolTipLink === "object" && "value" in ActiveToolTipLink ? ActiveToolTipLink?.value : ActiveToolTipLink} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.GripPoseReference]`} name="_activeTooltipGripPoseReference" id={typeof _activeTooltipGripPoseReference === "object" && "id" in _activeTooltipGripPoseReference ? _activeTooltipGripPoseReference?.id : undefined} value={typeof _activeTooltipGripPoseReference === "object" && "value" in _activeTooltipGripPoseReference ? _activeTooltipGripPoseReference?.value : _activeTooltipGripPoseReference} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_tooltipLocked" id={typeof _tooltipLocked === "object" && "id" in _tooltipLocked ? _tooltipLocked?.id : undefined} value={typeof _tooltipLocked === "object" && "value" in _tooltipLocked ? _tooltipLocked?.value : _tooltipLocked} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FresnelMaterial]`} name="_grabMaterial" id={typeof _grabMaterial === "object" && "id" in _grabMaterial ? _grabMaterial?.id : undefined} value={typeof _grabMaterial === "object" && "value" in _grabMaterial ? _grabMaterial?.value : _grabMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_itemShelfSlot" id={typeof _itemShelfSlot === "object" && "id" in _itemShelfSlot ? _itemShelfSlot?.id : undefined} value={typeof _itemShelfSlot === "object" && "value" in _itemShelfSlot ? _itemShelfSlot?.value : _itemShelfSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ItemShelf]`} name="_itemShelf" id={typeof _itemShelf === "object" && "id" in _itemShelf ? _itemShelf?.id : undefined} value={typeof _itemShelf === "object" && "value" in _itemShelf ? _itemShelf?.value : _itemShelf} /* default: ID0 */  />
        </Component>
      );
    };
    