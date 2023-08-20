import { member, Member, Component } from "../../core";
    
    export interface InteractiveCameraControlInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_canvas?: member<any>;
_panel?: member<any>;
FieldOfView?: member<number>;
AnglePosition?: member<number>;
Distance?: member<number>;
HeightOffset?: member<number>;
FirstPersonPitch?: member<number>;
FirstPersonRoll?: member<number>;
FirstPersonOffset?: member<number>;
FramingViewportPosition?: member<[number, number]>;
Mirror?: member<boolean>;
GroupDetectionRadius?: member<number>;
GroupLeaveBoundary?: member<number>;
PositionSmoothSpeed?: member<number>;
AngleSmoothSpeed?: member<number>;
FramingSmoothSpeed?: member<number>;
InterpolateBetweenAnchors?: member<boolean>;
AnchorInterpolationSpeed?: member<number>;
AnchorLinearInterpolation?: member<boolean>;
Mode?: member<any>;
FramingTargetOverride?: member<any>;
CameraOperators?: member<any>;
GroupIncludeUsers?: member<any>;
GroupExcludeUsers?: member<any>;
RenderForEveryone?: member<boolean>;
AnyoneCanInteract?: member<boolean>;
RenderPrivateUI?: member<boolean>;
MotionBlur?: member<boolean>;
ScreenSpaceReflections?: member<boolean>;
SpawnPhotoInWorld?: member<boolean>;
FlipPreview?: member<boolean>;
_renderTextureProxy?: member<any>;
_framingReticle?: member<any>;
_mirrorMessage?: member<any>;
_smoothFirstPersonButton?: member<any>;
_thirdPersonButton?: member<any>;
_groupButton?: member<any>;
_worldButton?: member<any>;
_manualButton?: member<any>;
_mirrorButton?: member<any>;
_usersButton?: member<any>;
_angleIncreaseButton?: member<any>;
_angleDecreaseButton?: member<any>;
_heightIncreaseButton?: member<any>;
_heightDecreaseButton?: member<any>;
_distanceIncreaseButton?: member<any>;
_distanceDecreaseButton?: member<any>;
_resetButton?: member<any>;
_fovSlider?: member<any>;
_avoidOcclusion?: member<any>;
_keepInWorldSpace?: member<any>;
_movementWobble?: member<any>;
_aimInFrontOfHead?: member<any>;
_forceEyesOnCamera?: member<any>;
_hideCamera?: member<any>;
_hideBadge?: member<any>;
_hideLasers?: member<any>;
_showFrustum?: member<any>;
_timer?: member<any>;
_forceLive?: member<any>;
_audioFromCameraViewpoint?: member<any>;
_userControl?: member<any>;
_settingsDialog?: member<any>;
_positioningDialog?: member<any>;
_anchorsDialog?: member<any>;
_OBS_Dialog?: member<any>;
_twitchDialog?: member<any>;
_settingsButton?: member<any>;
_positioningButton?: member<any>;
_anchorsButton?: member<any>;
_OBS_Button?: member<any>;
_twitchButton?: member<any>;
_previewMaterial?: member<any>;
    }
    
    export function InteractiveCameraControl(props: InteractiveCameraControlInput){
      const { id, persistentId, updateOrder, Enabled,
_canvas,
_panel,
FieldOfView,
AnglePosition,
Distance,
HeightOffset,
FirstPersonPitch,
FirstPersonRoll,
FirstPersonOffset,
FramingViewportPosition,
Mirror,
GroupDetectionRadius,
GroupLeaveBoundary,
PositionSmoothSpeed,
AngleSmoothSpeed,
FramingSmoothSpeed,
InterpolateBetweenAnchors,
AnchorInterpolationSpeed,
AnchorLinearInterpolation,
Mode,
FramingTargetOverride,
CameraOperators,
GroupIncludeUsers,
GroupExcludeUsers,
RenderForEveryone,
AnyoneCanInteract,
RenderPrivateUI,
MotionBlur,
ScreenSpaceReflections,
SpawnPhotoInWorld,
FlipPreview,
_renderTextureProxy,
_framingReticle,
_mirrorMessage,
_smoothFirstPersonButton,
_thirdPersonButton,
_groupButton,
_worldButton,
_manualButton,
_mirrorButton,
_usersButton,
_angleIncreaseButton,
_angleDecreaseButton,
_heightIncreaseButton,
_heightDecreaseButton,
_distanceIncreaseButton,
_distanceDecreaseButton,
_resetButton,
_fovSlider,
_avoidOcclusion,
_keepInWorldSpace,
_movementWobble,
_aimInFrontOfHead,
_forceEyesOnCamera,
_hideCamera,
_hideBadge,
_hideLasers,
_showFrustum,
_timer,
_forceLive,
_audioFromCameraViewpoint,
_userControl,
_settingsDialog,
_positioningDialog,
_anchorsDialog,
_OBS_Dialog,
_twitchDialog,
_settingsButton,
_positioningButton,
_anchorsButton,
_OBS_Button,
_twitchButton,
_previewMaterial, } = props;
    
      return (
        <Component type="FrooxEngine.InteractiveCameraControl" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  isRaw={typeof _canvas === "object" && "isRaw" in _canvas && _canvas.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosPanel]`} name="_panel" id={typeof _panel === "object" && "id" in _panel ? _panel?.id : undefined} value={typeof _panel === "object" && "value" in _panel ? _panel?.value : _panel} /* default: ID0 */  isRaw={typeof _panel === "object" && "isRaw" in _panel && _panel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FieldOfView" id={typeof FieldOfView === "object" && "id" in FieldOfView ? FieldOfView?.id : undefined} value={typeof FieldOfView === "object" && "value" in FieldOfView ? FieldOfView?.value : FieldOfView} /* default: 0 */  isRaw={typeof FieldOfView === "object" && "isRaw" in FieldOfView && FieldOfView.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AnglePosition" id={typeof AnglePosition === "object" && "id" in AnglePosition ? AnglePosition?.id : undefined} value={typeof AnglePosition === "object" && "value" in AnglePosition ? AnglePosition?.value : AnglePosition} /* default: 0 */  isRaw={typeof AnglePosition === "object" && "isRaw" in AnglePosition && AnglePosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Distance" id={typeof Distance === "object" && "id" in Distance ? Distance?.id : undefined} value={typeof Distance === "object" && "value" in Distance ? Distance?.value : Distance} /* default: 0 */  isRaw={typeof Distance === "object" && "isRaw" in Distance && Distance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeightOffset" id={typeof HeightOffset === "object" && "id" in HeightOffset ? HeightOffset?.id : undefined} value={typeof HeightOffset === "object" && "value" in HeightOffset ? HeightOffset?.value : HeightOffset} /* default: 0 */  isRaw={typeof HeightOffset === "object" && "isRaw" in HeightOffset && HeightOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FirstPersonPitch" id={typeof FirstPersonPitch === "object" && "id" in FirstPersonPitch ? FirstPersonPitch?.id : undefined} value={typeof FirstPersonPitch === "object" && "value" in FirstPersonPitch ? FirstPersonPitch?.value : FirstPersonPitch} /* default: 0 */  isRaw={typeof FirstPersonPitch === "object" && "isRaw" in FirstPersonPitch && FirstPersonPitch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FirstPersonRoll" id={typeof FirstPersonRoll === "object" && "id" in FirstPersonRoll ? FirstPersonRoll?.id : undefined} value={typeof FirstPersonRoll === "object" && "value" in FirstPersonRoll ? FirstPersonRoll?.value : FirstPersonRoll} /* default: 0 */  isRaw={typeof FirstPersonRoll === "object" && "isRaw" in FirstPersonRoll && FirstPersonRoll.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FirstPersonOffset" id={typeof FirstPersonOffset === "object" && "id" in FirstPersonOffset ? FirstPersonOffset?.id : undefined} value={typeof FirstPersonOffset === "object" && "value" in FirstPersonOffset ? FirstPersonOffset?.value : FirstPersonOffset} /* default: 0 */  isRaw={typeof FirstPersonOffset === "object" && "isRaw" in FirstPersonOffset && FirstPersonOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="FramingViewportPosition" id={typeof FramingViewportPosition === "object" && "id" in FramingViewportPosition ? FramingViewportPosition?.id : undefined} value={typeof FramingViewportPosition === "object" && "value" in FramingViewportPosition ? FramingViewportPosition?.value : FramingViewportPosition} /* default: [0; 0] */  isRaw={typeof FramingViewportPosition === "object" && "isRaw" in FramingViewportPosition && FramingViewportPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Mirror" id={typeof Mirror === "object" && "id" in Mirror ? Mirror?.id : undefined} value={typeof Mirror === "object" && "value" in Mirror ? Mirror?.value : Mirror} /* default: false */  isRaw={typeof Mirror === "object" && "isRaw" in Mirror && Mirror.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GroupDetectionRadius" id={typeof GroupDetectionRadius === "object" && "id" in GroupDetectionRadius ? GroupDetectionRadius?.id : undefined} value={typeof GroupDetectionRadius === "object" && "value" in GroupDetectionRadius ? GroupDetectionRadius?.value : GroupDetectionRadius} /* default: 0 */  isRaw={typeof GroupDetectionRadius === "object" && "isRaw" in GroupDetectionRadius && GroupDetectionRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GroupLeaveBoundary" id={typeof GroupLeaveBoundary === "object" && "id" in GroupLeaveBoundary ? GroupLeaveBoundary?.id : undefined} value={typeof GroupLeaveBoundary === "object" && "value" in GroupLeaveBoundary ? GroupLeaveBoundary?.value : GroupLeaveBoundary} /* default: 0 */  isRaw={typeof GroupLeaveBoundary === "object" && "isRaw" in GroupLeaveBoundary && GroupLeaveBoundary.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PositionSmoothSpeed" id={typeof PositionSmoothSpeed === "object" && "id" in PositionSmoothSpeed ? PositionSmoothSpeed?.id : undefined} value={typeof PositionSmoothSpeed === "object" && "value" in PositionSmoothSpeed ? PositionSmoothSpeed?.value : PositionSmoothSpeed} /* default: 0 */  isRaw={typeof PositionSmoothSpeed === "object" && "isRaw" in PositionSmoothSpeed && PositionSmoothSpeed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AngleSmoothSpeed" id={typeof AngleSmoothSpeed === "object" && "id" in AngleSmoothSpeed ? AngleSmoothSpeed?.id : undefined} value={typeof AngleSmoothSpeed === "object" && "value" in AngleSmoothSpeed ? AngleSmoothSpeed?.value : AngleSmoothSpeed} /* default: 0 */  isRaw={typeof AngleSmoothSpeed === "object" && "isRaw" in AngleSmoothSpeed && AngleSmoothSpeed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FramingSmoothSpeed" id={typeof FramingSmoothSpeed === "object" && "id" in FramingSmoothSpeed ? FramingSmoothSpeed?.id : undefined} value={typeof FramingSmoothSpeed === "object" && "value" in FramingSmoothSpeed ? FramingSmoothSpeed?.value : FramingSmoothSpeed} /* default: 0 */  isRaw={typeof FramingSmoothSpeed === "object" && "isRaw" in FramingSmoothSpeed && FramingSmoothSpeed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="InterpolateBetweenAnchors" id={typeof InterpolateBetweenAnchors === "object" && "id" in InterpolateBetweenAnchors ? InterpolateBetweenAnchors?.id : undefined} value={typeof InterpolateBetweenAnchors === "object" && "value" in InterpolateBetweenAnchors ? InterpolateBetweenAnchors?.value : InterpolateBetweenAnchors} /* default: false */  isRaw={typeof InterpolateBetweenAnchors === "object" && "isRaw" in InterpolateBetweenAnchors && InterpolateBetweenAnchors.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AnchorInterpolationSpeed" id={typeof AnchorInterpolationSpeed === "object" && "id" in AnchorInterpolationSpeed ? AnchorInterpolationSpeed?.id : undefined} value={typeof AnchorInterpolationSpeed === "object" && "value" in AnchorInterpolationSpeed ? AnchorInterpolationSpeed?.value : AnchorInterpolationSpeed} /* default: 0 */  isRaw={typeof AnchorInterpolationSpeed === "object" && "isRaw" in AnchorInterpolationSpeed && AnchorInterpolationSpeed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AnchorLinearInterpolation" id={typeof AnchorLinearInterpolation === "object" && "id" in AnchorLinearInterpolation ? AnchorLinearInterpolation?.id : undefined} value={typeof AnchorLinearInterpolation === "object" && "value" in AnchorLinearInterpolation ? AnchorLinearInterpolation?.value : AnchorLinearInterpolation} /* default: false */  isRaw={typeof AnchorLinearInterpolation === "object" && "isRaw" in AnchorLinearInterpolation && AnchorLinearInterpolation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CameraPositioningMode]`} name="Mode" id={typeof Mode === "object" && "id" in Mode ? Mode?.id : undefined} value={typeof Mode === "object" && "value" in Mode ? Mode?.value : Mode} /* default: SmoothFirstPerson */  isRaw={typeof Mode === "object" && "isRaw" in Mode && Mode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="FramingTargetOverride" id={typeof FramingTargetOverride === "object" && "id" in FramingTargetOverride ? FramingTargetOverride?.id : undefined} value={typeof FramingTargetOverride === "object" && "value" in FramingTargetOverride ? FramingTargetOverride?.value : FramingTargetOverride} /* default: <i>null</i> */  isRaw={typeof FramingTargetOverride === "object" && "isRaw" in FramingTargetOverride && FramingTargetOverride.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncFieldList\`1[System.String]`} name="CameraOperators" id={typeof CameraOperators === "object" && "id" in CameraOperators ? CameraOperators?.id : undefined} value={typeof CameraOperators === "object" && "value" in CameraOperators ? CameraOperators?.value : CameraOperators} /* default: FrooxEngine.SyncFieldList`1[System.String] */  isRaw={typeof CameraOperators === "object" && "isRaw" in CameraOperators && CameraOperators.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncFieldList\`1[System.String]`} name="GroupIncludeUsers" id={typeof GroupIncludeUsers === "object" && "id" in GroupIncludeUsers ? GroupIncludeUsers?.id : undefined} value={typeof GroupIncludeUsers === "object" && "value" in GroupIncludeUsers ? GroupIncludeUsers?.value : GroupIncludeUsers} /* default: FrooxEngine.SyncFieldList`1[System.String] */  isRaw={typeof GroupIncludeUsers === "object" && "isRaw" in GroupIncludeUsers && GroupIncludeUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncFieldList\`1[System.String]`} name="GroupExcludeUsers" id={typeof GroupExcludeUsers === "object" && "id" in GroupExcludeUsers ? GroupExcludeUsers?.id : undefined} value={typeof GroupExcludeUsers === "object" && "value" in GroupExcludeUsers ? GroupExcludeUsers?.value : GroupExcludeUsers} /* default: FrooxEngine.SyncFieldList`1[System.String] */  isRaw={typeof GroupExcludeUsers === "object" && "isRaw" in GroupExcludeUsers && GroupExcludeUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RenderForEveryone" id={typeof RenderForEveryone === "object" && "id" in RenderForEveryone ? RenderForEveryone?.id : undefined} value={typeof RenderForEveryone === "object" && "value" in RenderForEveryone ? RenderForEveryone?.value : RenderForEveryone} /* default: false */  isRaw={typeof RenderForEveryone === "object" && "isRaw" in RenderForEveryone && RenderForEveryone.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AnyoneCanInteract" id={typeof AnyoneCanInteract === "object" && "id" in AnyoneCanInteract ? AnyoneCanInteract?.id : undefined} value={typeof AnyoneCanInteract === "object" && "value" in AnyoneCanInteract ? AnyoneCanInteract?.value : AnyoneCanInteract} /* default: false */  isRaw={typeof AnyoneCanInteract === "object" && "isRaw" in AnyoneCanInteract && AnyoneCanInteract.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RenderPrivateUI" id={typeof RenderPrivateUI === "object" && "id" in RenderPrivateUI ? RenderPrivateUI?.id : undefined} value={typeof RenderPrivateUI === "object" && "value" in RenderPrivateUI ? RenderPrivateUI?.value : RenderPrivateUI} /* default: false */  isRaw={typeof RenderPrivateUI === "object" && "isRaw" in RenderPrivateUI && RenderPrivateUI.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="MotionBlur" id={typeof MotionBlur === "object" && "id" in MotionBlur ? MotionBlur?.id : undefined} value={typeof MotionBlur === "object" && "value" in MotionBlur ? MotionBlur?.value : MotionBlur} /* default: false */  isRaw={typeof MotionBlur === "object" && "isRaw" in MotionBlur && MotionBlur.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ScreenSpaceReflections" id={typeof ScreenSpaceReflections === "object" && "id" in ScreenSpaceReflections ? ScreenSpaceReflections?.id : undefined} value={typeof ScreenSpaceReflections === "object" && "value" in ScreenSpaceReflections ? ScreenSpaceReflections?.value : ScreenSpaceReflections} /* default: false */  isRaw={typeof ScreenSpaceReflections === "object" && "isRaw" in ScreenSpaceReflections && ScreenSpaceReflections.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SpawnPhotoInWorld" id={typeof SpawnPhotoInWorld === "object" && "id" in SpawnPhotoInWorld ? SpawnPhotoInWorld?.id : undefined} value={typeof SpawnPhotoInWorld === "object" && "value" in SpawnPhotoInWorld ? SpawnPhotoInWorld?.value : SpawnPhotoInWorld} /* default: false */  isRaw={typeof SpawnPhotoInWorld === "object" && "isRaw" in SpawnPhotoInWorld && SpawnPhotoInWorld.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FlipPreview" id={typeof FlipPreview === "object" && "id" in FlipPreview ? FlipPreview?.id : undefined} value={typeof FlipPreview === "object" && "value" in FlipPreview ? FlipPreview?.value : FlipPreview} /* default: false */  isRaw={typeof FlipPreview === "object" && "isRaw" in FlipPreview && FlipPreview.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RenderTextureProxyProvider]`} name="_renderTextureProxy" id={typeof _renderTextureProxy === "object" && "id" in _renderTextureProxy ? _renderTextureProxy?.id : undefined} value={typeof _renderTextureProxy === "object" && "value" in _renderTextureProxy ? _renderTextureProxy?.value : _renderTextureProxy} /* default: ID0 */  isRaw={typeof _renderTextureProxy === "object" && "isRaw" in _renderTextureProxy && _renderTextureProxy.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_framingReticle" id={typeof _framingReticle === "object" && "id" in _framingReticle ? _framingReticle?.id : undefined} value={typeof _framingReticle === "object" && "value" in _framingReticle ? _framingReticle?.value : _framingReticle} /* default: ID0 */  isRaw={typeof _framingReticle === "object" && "isRaw" in _framingReticle && _framingReticle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_mirrorMessage" id={typeof _mirrorMessage === "object" && "id" in _mirrorMessage ? _mirrorMessage?.id : undefined} value={typeof _mirrorMessage === "object" && "value" in _mirrorMessage ? _mirrorMessage?.value : _mirrorMessage} /* default: ID0 */  isRaw={typeof _mirrorMessage === "object" && "isRaw" in _mirrorMessage && _mirrorMessage.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_smoothFirstPersonButton" id={typeof _smoothFirstPersonButton === "object" && "id" in _smoothFirstPersonButton ? _smoothFirstPersonButton?.id : undefined} value={typeof _smoothFirstPersonButton === "object" && "value" in _smoothFirstPersonButton ? _smoothFirstPersonButton?.value : _smoothFirstPersonButton} /* default: ID0 */  isRaw={typeof _smoothFirstPersonButton === "object" && "isRaw" in _smoothFirstPersonButton && _smoothFirstPersonButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_thirdPersonButton" id={typeof _thirdPersonButton === "object" && "id" in _thirdPersonButton ? _thirdPersonButton?.id : undefined} value={typeof _thirdPersonButton === "object" && "value" in _thirdPersonButton ? _thirdPersonButton?.value : _thirdPersonButton} /* default: ID0 */  isRaw={typeof _thirdPersonButton === "object" && "isRaw" in _thirdPersonButton && _thirdPersonButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_groupButton" id={typeof _groupButton === "object" && "id" in _groupButton ? _groupButton?.id : undefined} value={typeof _groupButton === "object" && "value" in _groupButton ? _groupButton?.value : _groupButton} /* default: ID0 */  isRaw={typeof _groupButton === "object" && "isRaw" in _groupButton && _groupButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_worldButton" id={typeof _worldButton === "object" && "id" in _worldButton ? _worldButton?.id : undefined} value={typeof _worldButton === "object" && "value" in _worldButton ? _worldButton?.value : _worldButton} /* default: ID0 */  isRaw={typeof _worldButton === "object" && "isRaw" in _worldButton && _worldButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_manualButton" id={typeof _manualButton === "object" && "id" in _manualButton ? _manualButton?.id : undefined} value={typeof _manualButton === "object" && "value" in _manualButton ? _manualButton?.value : _manualButton} /* default: ID0 */  isRaw={typeof _manualButton === "object" && "isRaw" in _manualButton && _manualButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_mirrorButton" id={typeof _mirrorButton === "object" && "id" in _mirrorButton ? _mirrorButton?.id : undefined} value={typeof _mirrorButton === "object" && "value" in _mirrorButton ? _mirrorButton?.value : _mirrorButton} /* default: ID0 */  isRaw={typeof _mirrorButton === "object" && "isRaw" in _mirrorButton && _mirrorButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_usersButton" id={typeof _usersButton === "object" && "id" in _usersButton ? _usersButton?.id : undefined} value={typeof _usersButton === "object" && "value" in _usersButton ? _usersButton?.value : _usersButton} /* default: ID0 */  isRaw={typeof _usersButton === "object" && "isRaw" in _usersButton && _usersButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_angleIncreaseButton" id={typeof _angleIncreaseButton === "object" && "id" in _angleIncreaseButton ? _angleIncreaseButton?.id : undefined} value={typeof _angleIncreaseButton === "object" && "value" in _angleIncreaseButton ? _angleIncreaseButton?.value : _angleIncreaseButton} /* default: ID0 */  isRaw={typeof _angleIncreaseButton === "object" && "isRaw" in _angleIncreaseButton && _angleIncreaseButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_angleDecreaseButton" id={typeof _angleDecreaseButton === "object" && "id" in _angleDecreaseButton ? _angleDecreaseButton?.id : undefined} value={typeof _angleDecreaseButton === "object" && "value" in _angleDecreaseButton ? _angleDecreaseButton?.value : _angleDecreaseButton} /* default: ID0 */  isRaw={typeof _angleDecreaseButton === "object" && "isRaw" in _angleDecreaseButton && _angleDecreaseButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_heightIncreaseButton" id={typeof _heightIncreaseButton === "object" && "id" in _heightIncreaseButton ? _heightIncreaseButton?.id : undefined} value={typeof _heightIncreaseButton === "object" && "value" in _heightIncreaseButton ? _heightIncreaseButton?.value : _heightIncreaseButton} /* default: ID0 */  isRaw={typeof _heightIncreaseButton === "object" && "isRaw" in _heightIncreaseButton && _heightIncreaseButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_heightDecreaseButton" id={typeof _heightDecreaseButton === "object" && "id" in _heightDecreaseButton ? _heightDecreaseButton?.id : undefined} value={typeof _heightDecreaseButton === "object" && "value" in _heightDecreaseButton ? _heightDecreaseButton?.value : _heightDecreaseButton} /* default: ID0 */  isRaw={typeof _heightDecreaseButton === "object" && "isRaw" in _heightDecreaseButton && _heightDecreaseButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_distanceIncreaseButton" id={typeof _distanceIncreaseButton === "object" && "id" in _distanceIncreaseButton ? _distanceIncreaseButton?.id : undefined} value={typeof _distanceIncreaseButton === "object" && "value" in _distanceIncreaseButton ? _distanceIncreaseButton?.value : _distanceIncreaseButton} /* default: ID0 */  isRaw={typeof _distanceIncreaseButton === "object" && "isRaw" in _distanceIncreaseButton && _distanceIncreaseButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_distanceDecreaseButton" id={typeof _distanceDecreaseButton === "object" && "id" in _distanceDecreaseButton ? _distanceDecreaseButton?.id : undefined} value={typeof _distanceDecreaseButton === "object" && "value" in _distanceDecreaseButton ? _distanceDecreaseButton?.value : _distanceDecreaseButton} /* default: ID0 */  isRaw={typeof _distanceDecreaseButton === "object" && "isRaw" in _distanceDecreaseButton && _distanceDecreaseButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_resetButton" id={typeof _resetButton === "object" && "id" in _resetButton ? _resetButton?.id : undefined} value={typeof _resetButton === "object" && "value" in _resetButton ? _resetButton?.value : _resetButton} /* default: ID0 */  isRaw={typeof _resetButton === "object" && "isRaw" in _resetButton && _resetButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Slider\`1[System.Single]]`} name="_fovSlider" id={typeof _fovSlider === "object" && "id" in _fovSlider ? _fovSlider?.id : undefined} value={typeof _fovSlider === "object" && "value" in _fovSlider ? _fovSlider?.value : _fovSlider} /* default: ID0 */  isRaw={typeof _fovSlider === "object" && "isRaw" in _fovSlider && _fovSlider.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_avoidOcclusion" id={typeof _avoidOcclusion === "object" && "id" in _avoidOcclusion ? _avoidOcclusion?.id : undefined} value={typeof _avoidOcclusion === "object" && "value" in _avoidOcclusion ? _avoidOcclusion?.value : _avoidOcclusion} /* default: ID0 */  isRaw={typeof _avoidOcclusion === "object" && "isRaw" in _avoidOcclusion && _avoidOcclusion.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_keepInWorldSpace" id={typeof _keepInWorldSpace === "object" && "id" in _keepInWorldSpace ? _keepInWorldSpace?.id : undefined} value={typeof _keepInWorldSpace === "object" && "value" in _keepInWorldSpace ? _keepInWorldSpace?.value : _keepInWorldSpace} /* default: ID0 */  isRaw={typeof _keepInWorldSpace === "object" && "isRaw" in _keepInWorldSpace && _keepInWorldSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_movementWobble" id={typeof _movementWobble === "object" && "id" in _movementWobble ? _movementWobble?.id : undefined} value={typeof _movementWobble === "object" && "value" in _movementWobble ? _movementWobble?.value : _movementWobble} /* default: ID0 */  isRaw={typeof _movementWobble === "object" && "isRaw" in _movementWobble && _movementWobble.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_aimInFrontOfHead" id={typeof _aimInFrontOfHead === "object" && "id" in _aimInFrontOfHead ? _aimInFrontOfHead?.id : undefined} value={typeof _aimInFrontOfHead === "object" && "value" in _aimInFrontOfHead ? _aimInFrontOfHead?.value : _aimInFrontOfHead} /* default: ID0 */  isRaw={typeof _aimInFrontOfHead === "object" && "isRaw" in _aimInFrontOfHead && _aimInFrontOfHead.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_forceEyesOnCamera" id={typeof _forceEyesOnCamera === "object" && "id" in _forceEyesOnCamera ? _forceEyesOnCamera?.id : undefined} value={typeof _forceEyesOnCamera === "object" && "value" in _forceEyesOnCamera ? _forceEyesOnCamera?.value : _forceEyesOnCamera} /* default: ID0 */  isRaw={typeof _forceEyesOnCamera === "object" && "isRaw" in _forceEyesOnCamera && _forceEyesOnCamera.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_hideCamera" id={typeof _hideCamera === "object" && "id" in _hideCamera ? _hideCamera?.id : undefined} value={typeof _hideCamera === "object" && "value" in _hideCamera ? _hideCamera?.value : _hideCamera} /* default: ID0 */  isRaw={typeof _hideCamera === "object" && "isRaw" in _hideCamera && _hideCamera.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_hideBadge" id={typeof _hideBadge === "object" && "id" in _hideBadge ? _hideBadge?.id : undefined} value={typeof _hideBadge === "object" && "value" in _hideBadge ? _hideBadge?.value : _hideBadge} /* default: ID0 */  isRaw={typeof _hideBadge === "object" && "isRaw" in _hideBadge && _hideBadge.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_hideLasers" id={typeof _hideLasers === "object" && "id" in _hideLasers ? _hideLasers?.id : undefined} value={typeof _hideLasers === "object" && "value" in _hideLasers ? _hideLasers?.value : _hideLasers} /* default: ID0 */  isRaw={typeof _hideLasers === "object" && "isRaw" in _hideLasers && _hideLasers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_showFrustum" id={typeof _showFrustum === "object" && "id" in _showFrustum ? _showFrustum?.id : undefined} value={typeof _showFrustum === "object" && "value" in _showFrustum ? _showFrustum?.value : _showFrustum} /* default: ID0 */  isRaw={typeof _showFrustum === "object" && "isRaw" in _showFrustum && _showFrustum.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_timer" id={typeof _timer === "object" && "id" in _timer ? _timer?.id : undefined} value={typeof _timer === "object" && "value" in _timer ? _timer?.value : _timer} /* default: ID0 */  isRaw={typeof _timer === "object" && "isRaw" in _timer && _timer.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_forceLive" id={typeof _forceLive === "object" && "id" in _forceLive ? _forceLive?.id : undefined} value={typeof _forceLive === "object" && "value" in _forceLive ? _forceLive?.value : _forceLive} /* default: ID0 */  isRaw={typeof _forceLive === "object" && "isRaw" in _forceLive && _forceLive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_audioFromCameraViewpoint" id={typeof _audioFromCameraViewpoint === "object" && "id" in _audioFromCameraViewpoint ? _audioFromCameraViewpoint?.id : undefined} value={typeof _audioFromCameraViewpoint === "object" && "value" in _audioFromCameraViewpoint ? _audioFromCameraViewpoint?.value : _audioFromCameraViewpoint} /* default: ID0 */  isRaw={typeof _audioFromCameraViewpoint === "object" && "isRaw" in _audioFromCameraViewpoint && _audioFromCameraViewpoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.InteractiveCameraUserControl]`} name="_userControl" id={typeof _userControl === "object" && "id" in _userControl ? _userControl?.id : undefined} value={typeof _userControl === "object" && "value" in _userControl ? _userControl?.value : _userControl} /* default: ID0 */  isRaw={typeof _userControl === "object" && "isRaw" in _userControl && _userControl.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.InteractiveCameraControlSettings]`} name="_settingsDialog" id={typeof _settingsDialog === "object" && "id" in _settingsDialog ? _settingsDialog?.id : undefined} value={typeof _settingsDialog === "object" && "value" in _settingsDialog ? _settingsDialog?.value : _settingsDialog} /* default: ID0 */  isRaw={typeof _settingsDialog === "object" && "isRaw" in _settingsDialog && _settingsDialog.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.InteractiveCameraControlPositioning]`} name="_positioningDialog" id={typeof _positioningDialog === "object" && "id" in _positioningDialog ? _positioningDialog?.id : undefined} value={typeof _positioningDialog === "object" && "value" in _positioningDialog ? _positioningDialog?.value : _positioningDialog} /* default: ID0 */  isRaw={typeof _positioningDialog === "object" && "isRaw" in _positioningDialog && _positioningDialog.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.InteractiveCameraControlAnchors]`} name="_anchorsDialog" id={typeof _anchorsDialog === "object" && "id" in _anchorsDialog ? _anchorsDialog?.id : undefined} value={typeof _anchorsDialog === "object" && "value" in _anchorsDialog ? _anchorsDialog?.value : _anchorsDialog} /* default: ID0 */  isRaw={typeof _anchorsDialog === "object" && "isRaw" in _anchorsDialog && _anchorsDialog.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.InteractiveCameraOBS]`} name="_OBS_Dialog" id={typeof _OBS_Dialog === "object" && "id" in _OBS_Dialog ? _OBS_Dialog?.id : undefined} value={typeof _OBS_Dialog === "object" && "value" in _OBS_Dialog ? _OBS_Dialog?.value : _OBS_Dialog} /* default: ID0 */  isRaw={typeof _OBS_Dialog === "object" && "isRaw" in _OBS_Dialog && _OBS_Dialog.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TwitchChatDialog]`} name="_twitchDialog" id={typeof _twitchDialog === "object" && "id" in _twitchDialog ? _twitchDialog?.id : undefined} value={typeof _twitchDialog === "object" && "value" in _twitchDialog ? _twitchDialog?.value : _twitchDialog} /* default: ID0 */  isRaw={typeof _twitchDialog === "object" && "isRaw" in _twitchDialog && _twitchDialog.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_settingsButton" id={typeof _settingsButton === "object" && "id" in _settingsButton ? _settingsButton?.id : undefined} value={typeof _settingsButton === "object" && "value" in _settingsButton ? _settingsButton?.value : _settingsButton} /* default: ID0 */  isRaw={typeof _settingsButton === "object" && "isRaw" in _settingsButton && _settingsButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_positioningButton" id={typeof _positioningButton === "object" && "id" in _positioningButton ? _positioningButton?.id : undefined} value={typeof _positioningButton === "object" && "value" in _positioningButton ? _positioningButton?.value : _positioningButton} /* default: ID0 */  isRaw={typeof _positioningButton === "object" && "isRaw" in _positioningButton && _positioningButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_anchorsButton" id={typeof _anchorsButton === "object" && "id" in _anchorsButton ? _anchorsButton?.id : undefined} value={typeof _anchorsButton === "object" && "value" in _anchorsButton ? _anchorsButton?.value : _anchorsButton} /* default: ID0 */  isRaw={typeof _anchorsButton === "object" && "isRaw" in _anchorsButton && _anchorsButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_OBS_Button" id={typeof _OBS_Button === "object" && "id" in _OBS_Button ? _OBS_Button?.id : undefined} value={typeof _OBS_Button === "object" && "value" in _OBS_Button ? _OBS_Button?.value : _OBS_Button} /* default: ID0 */  isRaw={typeof _OBS_Button === "object" && "isRaw" in _OBS_Button && _OBS_Button.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_twitchButton" id={typeof _twitchButton === "object" && "id" in _twitchButton ? _twitchButton?.id : undefined} value={typeof _twitchButton === "object" && "value" in _twitchButton ? _twitchButton?.value : _twitchButton} /* default: ID0 */  isRaw={typeof _twitchButton === "object" && "isRaw" in _twitchButton && _twitchButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UI_UnlitMaterial]`} name="_previewMaterial" id={typeof _previewMaterial === "object" && "id" in _previewMaterial ? _previewMaterial?.id : undefined} value={typeof _previewMaterial === "object" && "value" in _previewMaterial ? _previewMaterial?.value : _previewMaterial} /* default: ID0 */  isRaw={typeof _previewMaterial === "object" && "isRaw" in _previewMaterial && _previewMaterial.isRaw ? true : undefined} />
        </Component>
      );
    };
    