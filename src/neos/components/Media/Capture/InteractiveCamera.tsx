import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface InteractiveCameraInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
CameraMode?: member<any>;
PreviewWidth?: member<number>;
PreviewHeight?: member<number>;
RenderWidth?: member<number>;
StereoSeparation?: member<number>;
TimerInterval?: member<number>;
TimerEnabled?: member<boolean>;
TimerCountIndicator?: member<string>;
TimerColorIndicator?: member<any>;
_timerUser?: member<any>;
MainCamera?: member<any>;
SecondaryCamera?: member<any>;
PreviewTexture?: member<any>;
DisplayMaterial?: member<any>;
Format?: member<any>;
Quality?: member<number>;
SpawnPhotoInWorld?: member<boolean>;
PhotoSpawnPoint?: member<any>;
PhotoSpawnSize?: member<number>;
PanoramaIndicator?: member<any>;
PanoramaIndicatorSize?: member<any>;
ObjectTargetSource?: member<any>;
ObjectTargetSourceActive?: member<any>;
ObjectAutoPose?: member<boolean>;
HideLasersOnCapture?: member<boolean>;
CaptureSound?: member<any>;
TimerStartSound?: member<any>;
TimerCountdownSlowPlayer?: member<any>;
TimerCountdownFastPlayer?: member<any>;
TimerCountdownSlowOutput?: member<any>;
TimerCountdownFastOutput?: member<any>;
PreviewScale?: member<any>;
CameraModelOverride?: member<any>;
FrustumVisual?: member<any>;
DefaultNearClip?: member<number>;
DefaultFarClip?: member<number>;
_frustumPosition?: member<any>;
_frustumRotation?: member<any>;
_frustumVerticalFOV?: member<any>;
_frustumHorizontalFOV?: member<any>;
_frustumNear?: member<any>;
_frustumFar?: member<any>;
_leftCamOffset?: member<any>;
_rightCamOffset?: member<any>;
_leftCamOrientation?: member<any>;
_rightCamOrientation?: member<any>;
_cameraRendering?: member<any>;
_secondaryCameraRendering?: member<any>;
ExclusiveOperators?: member<any>;
ControlActiveFields?: member<any>;
RenderOnlyForUsers?: member<any>;
ForceVisualsOff?: member<boolean>;
VisualActiveFields?: member<any>;
AutoHideProximity?: member<number>;
ForceEyeAttentionUsers?: member<any>;
SimulatingUser?: member<any>;
DestroyOnUserLeave?: member<any>;
PositioningMode?: member<any>;
ActiveAnchor?: member<any>;
AnchorInterpolationSpeed?: member<number>;
AnchorLinearInterpolation?: member<boolean>;
FrameTargetUser?: member<any>;
HeadPointOffset?: member<[number, number, number]>;
AnglePosition?: member<number>;
Distance?: member<number>;
HeightOffset?: member<number>;
FirstPersonPitch?: member<number>;
FirstPersonRoll?: member<number>;
FirstPersonOffset?: member<number>;
GroupIncludeRadius?: member<number>;
GroupExcludeRadius?: member<number>;
ForceGroupInclude?: member<any>;
ForceGroupExclude?: member<any>;
PositionSmoothSpeed?: member<number>;
AnglePositionSmoothSpeed?: member<number>;
FramingSmoothSpeed?: member<number>;
WobbleMagnitude?: member<[number, number, number]>;
WobbleSeed?: member<[number, number, number]>;
WobbleSpeed?: member<[number, number, number]>;
FramingViewportPosition?: member<[number, number]>;
AvoidOcclusion?: member<boolean>;
OcclusionIncludePlayers?: member<boolean>;
OcclusionIncludeAnyColliders?: member<boolean>;
_positionStream?: member<any>;
_rotationStream?: member<any>;
_positionDrive?: member<any>;
_rotationDrive?: member<any>;
_releasePosition?: member<[number, number, number]>;
_releaseRotation?: member<any>;
    }
    
    export function InteractiveCamera(props: InteractiveCameraInput){
      const { id, persistentId, updateOrder, Enabled,
CameraMode,
PreviewWidth,
PreviewHeight,
RenderWidth,
StereoSeparation,
TimerInterval,
TimerEnabled,
TimerCountIndicator,
TimerColorIndicator,
_timerUser,
MainCamera,
SecondaryCamera,
PreviewTexture,
DisplayMaterial,
Format,
Quality,
SpawnPhotoInWorld,
PhotoSpawnPoint,
PhotoSpawnSize,
PanoramaIndicator,
PanoramaIndicatorSize,
ObjectTargetSource,
ObjectTargetSourceActive,
ObjectAutoPose,
HideLasersOnCapture,
CaptureSound,
TimerStartSound,
TimerCountdownSlowPlayer,
TimerCountdownFastPlayer,
TimerCountdownSlowOutput,
TimerCountdownFastOutput,
PreviewScale,
CameraModelOverride,
FrustumVisual,
DefaultNearClip,
DefaultFarClip,
_frustumPosition,
_frustumRotation,
_frustumVerticalFOV,
_frustumHorizontalFOV,
_frustumNear,
_frustumFar,
_leftCamOffset,
_rightCamOffset,
_leftCamOrientation,
_rightCamOrientation,
_cameraRendering,
_secondaryCameraRendering,
ExclusiveOperators,
ControlActiveFields,
RenderOnlyForUsers,
ForceVisualsOff,
VisualActiveFields,
AutoHideProximity,
ForceEyeAttentionUsers,
SimulatingUser,
DestroyOnUserLeave,
PositioningMode,
ActiveAnchor,
AnchorInterpolationSpeed,
AnchorLinearInterpolation,
FrameTargetUser,
HeadPointOffset,
AnglePosition,
Distance,
HeightOffset,
FirstPersonPitch,
FirstPersonRoll,
FirstPersonOffset,
GroupIncludeRadius,
GroupExcludeRadius,
ForceGroupInclude,
ForceGroupExclude,
PositionSmoothSpeed,
AnglePositionSmoothSpeed,
FramingSmoothSpeed,
WobbleMagnitude,
WobbleSeed,
WobbleSpeed,
FramingViewportPosition,
AvoidOcclusion,
OcclusionIncludePlayers,
OcclusionIncludeAnyColliders,
_positionStream,
_rotationStream,
_positionDrive,
_rotationDrive,
_releasePosition,
_releaseRotation, } = props;
    
      return (
        <Component type="FrooxEngine.InteractiveCamera" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.InteractiveCamera+Mode]`} name="CameraMode" id={typeof CameraMode === "object" && "id" in CameraMode ? CameraMode?.id : undefined} value={typeof CameraMode === "object" && "value" in CameraMode ? CameraMode?.value : CameraMode} /* default: Camera2D */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="PreviewWidth" id={typeof PreviewWidth === "object" && "id" in PreviewWidth ? PreviewWidth?.id : undefined} value={typeof PreviewWidth === "object" && "value" in PreviewWidth ? PreviewWidth?.value : PreviewWidth} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="PreviewHeight" id={typeof PreviewHeight === "object" && "id" in PreviewHeight ? PreviewHeight?.id : undefined} value={typeof PreviewHeight === "object" && "value" in PreviewHeight ? PreviewHeight?.value : PreviewHeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderWidth" id={typeof RenderWidth === "object" && "id" in RenderWidth ? RenderWidth?.id : undefined} value={typeof RenderWidth === "object" && "value" in RenderWidth ? RenderWidth?.value : RenderWidth} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StereoSeparation" id={typeof StereoSeparation === "object" && "id" in StereoSeparation ? StereoSeparation?.id : undefined} value={typeof StereoSeparation === "object" && "value" in StereoSeparation ? StereoSeparation?.value : StereoSeparation} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TimerInterval" id={typeof TimerInterval === "object" && "id" in TimerInterval ? TimerInterval?.id : undefined} value={typeof TimerInterval === "object" && "value" in TimerInterval ? TimerInterval?.value : TimerInterval} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TimerEnabled" id={typeof TimerEnabled === "object" && "id" in TimerEnabled ? TimerEnabled?.id : undefined} value={typeof TimerEnabled === "object" && "value" in TimerEnabled ? TimerEnabled?.value : TimerEnabled} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="TimerCountIndicator" id={typeof TimerCountIndicator === "object" && "id" in TimerCountIndicator ? TimerCountIndicator?.id : undefined} value={typeof TimerCountIndicator === "object" && "value" in TimerCountIndicator ? TimerCountIndicator?.value : TimerCountIndicator} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="TimerColorIndicator" id={typeof TimerColorIndicator === "object" && "id" in TimerColorIndicator ? TimerColorIndicator?.id : undefined} value={typeof TimerColorIndicator === "object" && "value" in TimerColorIndicator ? TimerColorIndicator?.value : TimerColorIndicator} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="_timerUser" id={typeof _timerUser === "object" && "id" in _timerUser ? _timerUser?.id : undefined} value={typeof _timerUser === "object" && "value" in _timerUser ? _timerUser?.value : _timerUser} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.Camera]`} name="MainCamera" id={typeof MainCamera === "object" && "id" in MainCamera ? MainCamera?.id : undefined} value={typeof MainCamera === "object" && "value" in MainCamera ? MainCamera?.value : MainCamera} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Camera]`} name="SecondaryCamera" id={typeof SecondaryCamera === "object" && "id" in SecondaryCamera ? SecondaryCamera?.id : undefined} value={typeof SecondaryCamera === "object" && "value" in SecondaryCamera ? SecondaryCamera?.value : SecondaryCamera} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RenderTextureProvider]`} name="PreviewTexture" id={typeof PreviewTexture === "object" && "id" in PreviewTexture ? PreviewTexture?.id : undefined} value={typeof PreviewTexture === "object" && "value" in PreviewTexture ? PreviewTexture?.value : PreviewTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IStereoMaterial]`} name="DisplayMaterial" id={typeof DisplayMaterial === "object" && "id" in DisplayMaterial ? DisplayMaterial?.id : undefined} value={typeof DisplayMaterial === "object" && "value" in DisplayMaterial ? DisplayMaterial?.value : DisplayMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.InteractiveCamera+EncodeFormat]`} name="Format" id={typeof Format === "object" && "id" in Format ? Format?.id : undefined} value={typeof Format === "object" && "value" in Format ? Format?.value : Format} /* default: PNG */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Quality" id={typeof Quality === "object" && "id" in Quality ? Quality?.id : undefined} value={typeof Quality === "object" && "value" in Quality ? Quality?.value : Quality} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SpawnPhotoInWorld" id={typeof SpawnPhotoInWorld === "object" && "id" in SpawnPhotoInWorld ? SpawnPhotoInWorld?.id : undefined} value={typeof SpawnPhotoInWorld === "object" && "value" in SpawnPhotoInWorld ? SpawnPhotoInWorld?.value : SpawnPhotoInWorld} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="PhotoSpawnPoint" id={typeof PhotoSpawnPoint === "object" && "id" in PhotoSpawnPoint ? PhotoSpawnPoint?.id : undefined} value={typeof PhotoSpawnPoint === "object" && "value" in PhotoSpawnPoint ? PhotoSpawnPoint?.value : PhotoSpawnPoint} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PhotoSpawnSize" id={typeof PhotoSpawnSize === "object" && "id" in PhotoSpawnSize ? PhotoSpawnSize?.id : undefined} value={typeof PhotoSpawnSize === "object" && "value" in PhotoSpawnSize ? PhotoSpawnSize?.value : PhotoSpawnSize} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="PanoramaIndicator" id={typeof PanoramaIndicator === "object" && "id" in PanoramaIndicator ? PanoramaIndicator?.id : undefined} value={typeof PanoramaIndicator === "object" && "value" in PanoramaIndicator ? PanoramaIndicator?.value : PanoramaIndicator} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="PanoramaIndicatorSize" id={typeof PanoramaIndicatorSize === "object" && "id" in PanoramaIndicatorSize ? PanoramaIndicatorSize?.id : undefined} value={typeof PanoramaIndicatorSize === "object" && "value" in PanoramaIndicatorSize ? PanoramaIndicatorSize?.value : PanoramaIndicatorSize} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="ObjectTargetSource" id={typeof ObjectTargetSource === "object" && "id" in ObjectTargetSource ? ObjectTargetSource?.id : undefined} value={typeof ObjectTargetSource === "object" && "value" in ObjectTargetSource ? ObjectTargetSource?.value : ObjectTargetSource} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="ObjectTargetSourceActive" id={typeof ObjectTargetSourceActive === "object" && "id" in ObjectTargetSourceActive ? ObjectTargetSourceActive?.id : undefined} value={typeof ObjectTargetSourceActive === "object" && "value" in ObjectTargetSourceActive ? ObjectTargetSourceActive?.value : ObjectTargetSourceActive} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ObjectAutoPose" id={typeof ObjectAutoPose === "object" && "id" in ObjectAutoPose ? ObjectAutoPose?.id : undefined} value={typeof ObjectAutoPose === "object" && "value" in ObjectAutoPose ? ObjectAutoPose?.value : ObjectAutoPose} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HideLasersOnCapture" id={typeof HideLasersOnCapture === "object" && "id" in HideLasersOnCapture ? HideLasersOnCapture?.id : undefined} value={typeof HideLasersOnCapture === "object" && "value" in HideLasersOnCapture ? HideLasersOnCapture?.value : HideLasersOnCapture} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="CaptureSound" id={typeof CaptureSound === "object" && "id" in CaptureSound ? CaptureSound?.id : undefined} value={typeof CaptureSound === "object" && "value" in CaptureSound ? CaptureSound?.value : CaptureSound} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="TimerStartSound" id={typeof TimerStartSound === "object" && "id" in TimerStartSound ? TimerStartSound?.id : undefined} value={typeof TimerStartSound === "object" && "value" in TimerStartSound ? TimerStartSound?.value : TimerStartSound} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AudioClipPlayer]`} name="TimerCountdownSlowPlayer" id={typeof TimerCountdownSlowPlayer === "object" && "id" in TimerCountdownSlowPlayer ? TimerCountdownSlowPlayer?.id : undefined} value={typeof TimerCountdownSlowPlayer === "object" && "value" in TimerCountdownSlowPlayer ? TimerCountdownSlowPlayer?.value : TimerCountdownSlowPlayer} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AudioClipPlayer]`} name="TimerCountdownFastPlayer" id={typeof TimerCountdownFastPlayer === "object" && "id" in TimerCountdownFastPlayer ? TimerCountdownFastPlayer?.id : undefined} value={typeof TimerCountdownFastPlayer === "object" && "value" in TimerCountdownFastPlayer ? TimerCountdownFastPlayer?.value : TimerCountdownFastPlayer} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AudioOutput]`} name="TimerCountdownSlowOutput" id={typeof TimerCountdownSlowOutput === "object" && "id" in TimerCountdownSlowOutput ? TimerCountdownSlowOutput?.id : undefined} value={typeof TimerCountdownSlowOutput === "object" && "value" in TimerCountdownSlowOutput ? TimerCountdownSlowOutput?.value : TimerCountdownSlowOutput} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AudioOutput]`} name="TimerCountdownFastOutput" id={typeof TimerCountdownFastOutput === "object" && "id" in TimerCountdownFastOutput ? TimerCountdownFastOutput?.id : undefined} value={typeof TimerCountdownFastOutput === "object" && "value" in TimerCountdownFastOutput ? TimerCountdownFastOutput?.value : TimerCountdownFastOutput} /* default: ID0 */  />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.float2]`} name="PreviewScale" id={typeof PreviewScale === "object" && "id" in PreviewScale ? PreviewScale?.id : undefined} value={typeof PreviewScale === "object" && "value" in PreviewScale ? PreviewScale?.value : PreviewScale} /* default: FrooxEngine.RawOutput`1[BaseX.float2] */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="CameraModelOverride" id={typeof CameraModelOverride === "object" && "id" in CameraModelOverride ? CameraModelOverride?.id : undefined} value={typeof CameraModelOverride === "object" && "value" in CameraModelOverride ? CameraModelOverride?.value : CameraModelOverride} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CameraFrustumMesh]`} name="FrustumVisual" id={typeof FrustumVisual === "object" && "id" in FrustumVisual ? FrustumVisual?.id : undefined} value={typeof FrustumVisual === "object" && "value" in FrustumVisual ? FrustumVisual?.value : FrustumVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DefaultNearClip" id={typeof DefaultNearClip === "object" && "id" in DefaultNearClip ? DefaultNearClip?.id : undefined} value={typeof DefaultNearClip === "object" && "value" in DefaultNearClip ? DefaultNearClip?.value : DefaultNearClip} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DefaultFarClip" id={typeof DefaultFarClip === "object" && "id" in DefaultFarClip ? DefaultFarClip?.id : undefined} value={typeof DefaultFarClip === "object" && "value" in DefaultFarClip ? DefaultFarClip?.value : DefaultFarClip} /* default: 0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_frustumPosition" id={typeof _frustumPosition === "object" && "id" in _frustumPosition ? _frustumPosition?.id : undefined} value={typeof _frustumPosition === "object" && "value" in _frustumPosition ? _frustumPosition?.value : _frustumPosition} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_frustumRotation" id={typeof _frustumRotation === "object" && "id" in _frustumRotation ? _frustumRotation?.id : undefined} value={typeof _frustumRotation === "object" && "value" in _frustumRotation ? _frustumRotation?.value : _frustumRotation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_frustumVerticalFOV" id={typeof _frustumVerticalFOV === "object" && "id" in _frustumVerticalFOV ? _frustumVerticalFOV?.id : undefined} value={typeof _frustumVerticalFOV === "object" && "value" in _frustumVerticalFOV ? _frustumVerticalFOV?.value : _frustumVerticalFOV} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_frustumHorizontalFOV" id={typeof _frustumHorizontalFOV === "object" && "id" in _frustumHorizontalFOV ? _frustumHorizontalFOV?.id : undefined} value={typeof _frustumHorizontalFOV === "object" && "value" in _frustumHorizontalFOV ? _frustumHorizontalFOV?.value : _frustumHorizontalFOV} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_frustumNear" id={typeof _frustumNear === "object" && "id" in _frustumNear ? _frustumNear?.id : undefined} value={typeof _frustumNear === "object" && "value" in _frustumNear ? _frustumNear?.value : _frustumNear} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_frustumFar" id={typeof _frustumFar === "object" && "id" in _frustumFar ? _frustumFar?.id : undefined} value={typeof _frustumFar === "object" && "value" in _frustumFar ? _frustumFar?.value : _frustumFar} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_leftCamOffset" id={typeof _leftCamOffset === "object" && "id" in _leftCamOffset ? _leftCamOffset?.id : undefined} value={typeof _leftCamOffset === "object" && "value" in _leftCamOffset ? _leftCamOffset?.value : _leftCamOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_rightCamOffset" id={typeof _rightCamOffset === "object" && "id" in _rightCamOffset ? _rightCamOffset?.id : undefined} value={typeof _rightCamOffset === "object" && "value" in _rightCamOffset ? _rightCamOffset?.value : _rightCamOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_leftCamOrientation" id={typeof _leftCamOrientation === "object" && "id" in _leftCamOrientation ? _leftCamOrientation?.id : undefined} value={typeof _leftCamOrientation === "object" && "value" in _leftCamOrientation ? _leftCamOrientation?.value : _leftCamOrientation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rightCamOrientation" id={typeof _rightCamOrientation === "object" && "id" in _rightCamOrientation ? _rightCamOrientation?.id : undefined} value={typeof _rightCamOrientation === "object" && "value" in _rightCamOrientation ? _rightCamOrientation?.value : _rightCamOrientation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_cameraRendering" id={typeof _cameraRendering === "object" && "id" in _cameraRendering ? _cameraRendering?.id : undefined} value={typeof _cameraRendering === "object" && "value" in _cameraRendering ? _cameraRendering?.value : _cameraRendering} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_secondaryCameraRendering" id={typeof _secondaryCameraRendering === "object" && "id" in _secondaryCameraRendering ? _secondaryCameraRendering?.id : undefined} value={typeof _secondaryCameraRendering === "object" && "value" in _secondaryCameraRendering ? _secondaryCameraRendering?.value : _secondaryCameraRendering} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.UserRef]`} name="ExclusiveOperators" id={typeof ExclusiveOperators === "object" && "id" in ExclusiveOperators ? ExclusiveOperators?.id : undefined} value={typeof ExclusiveOperators === "object" && "value" in ExclusiveOperators ? ExclusiveOperators?.value : ExclusiveOperators} /* default: FrooxEngine.SyncList`1[FrooxEngine.UserRef] */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.FieldDrive\`1[System.Boolean]]`} name="ControlActiveFields" id={typeof ControlActiveFields === "object" && "id" in ControlActiveFields ? ControlActiveFields?.id : undefined} value={typeof ControlActiveFields === "object" && "value" in ControlActiveFields ? ControlActiveFields?.value : ControlActiveFields} /* default: FrooxEngine.SyncList`1[FrooxEngine.FieldDrive`1[System.Boolean]] */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.UserRef]`} name="RenderOnlyForUsers" id={typeof RenderOnlyForUsers === "object" && "id" in RenderOnlyForUsers ? RenderOnlyForUsers?.id : undefined} value={typeof RenderOnlyForUsers === "object" && "value" in RenderOnlyForUsers ? RenderOnlyForUsers?.value : RenderOnlyForUsers} /* default: FrooxEngine.SyncList`1[FrooxEngine.UserRef] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceVisualsOff" id={typeof ForceVisualsOff === "object" && "id" in ForceVisualsOff ? ForceVisualsOff?.id : undefined} value={typeof ForceVisualsOff === "object" && "value" in ForceVisualsOff ? ForceVisualsOff?.value : ForceVisualsOff} /* default: false */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.FieldDrive\`1[System.Boolean]]`} name="VisualActiveFields" id={typeof VisualActiveFields === "object" && "id" in VisualActiveFields ? VisualActiveFields?.id : undefined} value={typeof VisualActiveFields === "object" && "value" in VisualActiveFields ? VisualActiveFields?.value : VisualActiveFields} /* default: FrooxEngine.SyncList`1[FrooxEngine.FieldDrive`1[System.Boolean]] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AutoHideProximity" id={typeof AutoHideProximity === "object" && "id" in AutoHideProximity ? AutoHideProximity?.id : undefined} value={typeof AutoHideProximity === "object" && "value" in AutoHideProximity ? AutoHideProximity?.value : AutoHideProximity} /* default: 0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.UserRef]`} name="ForceEyeAttentionUsers" id={typeof ForceEyeAttentionUsers === "object" && "id" in ForceEyeAttentionUsers ? ForceEyeAttentionUsers?.id : undefined} value={typeof ForceEyeAttentionUsers === "object" && "value" in ForceEyeAttentionUsers ? ForceEyeAttentionUsers?.value : ForceEyeAttentionUsers} /* default: FrooxEngine.SyncList`1[FrooxEngine.UserRef] */  />
<Member type={`FrooxEngine.UserRef`} name="SimulatingUser" id={typeof SimulatingUser === "object" && "id" in SimulatingUser ? SimulatingUser?.id : undefined} value={typeof SimulatingUser === "object" && "value" in SimulatingUser ? SimulatingUser?.value : SimulatingUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.UserRef`} name="DestroyOnUserLeave" id={typeof DestroyOnUserLeave === "object" && "id" in DestroyOnUserLeave ? DestroyOnUserLeave?.id : undefined} value={typeof DestroyOnUserLeave === "object" && "value" in DestroyOnUserLeave ? DestroyOnUserLeave?.value : DestroyOnUserLeave} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CameraPositioningMode]`} name="PositioningMode" id={typeof PositioningMode === "object" && "id" in PositioningMode ? PositioningMode?.id : undefined} value={typeof PositioningMode === "object" && "value" in PositioningMode ? PositioningMode?.value : PositioningMode} /* default: SmoothFirstPerson */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.InteractiveCameraAnchor]`} name="ActiveAnchor" id={typeof ActiveAnchor === "object" && "id" in ActiveAnchor ? ActiveAnchor?.id : undefined} value={typeof ActiveAnchor === "object" && "value" in ActiveAnchor ? ActiveAnchor?.value : ActiveAnchor} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AnchorInterpolationSpeed" id={typeof AnchorInterpolationSpeed === "object" && "id" in AnchorInterpolationSpeed ? AnchorInterpolationSpeed?.id : undefined} value={typeof AnchorInterpolationSpeed === "object" && "value" in AnchorInterpolationSpeed ? AnchorInterpolationSpeed?.value : AnchorInterpolationSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AnchorLinearInterpolation" id={typeof AnchorLinearInterpolation === "object" && "id" in AnchorLinearInterpolation ? AnchorLinearInterpolation?.id : undefined} value={typeof AnchorLinearInterpolation === "object" && "value" in AnchorLinearInterpolation ? AnchorLinearInterpolation?.value : AnchorLinearInterpolation} /* default: false */  />
<Member type={`FrooxEngine.UserRef`} name="FrameTargetUser" id={typeof FrameTargetUser === "object" && "id" in FrameTargetUser ? FrameTargetUser?.id : undefined} value={typeof FrameTargetUser === "object" && "value" in FrameTargetUser ? FrameTargetUser?.value : FrameTargetUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="HeadPointOffset" id={typeof HeadPointOffset === "object" && "id" in HeadPointOffset ? HeadPointOffset?.id : undefined} value={typeof HeadPointOffset === "object" && "value" in HeadPointOffset ? HeadPointOffset?.value : HeadPointOffset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AnglePosition" id={typeof AnglePosition === "object" && "id" in AnglePosition ? AnglePosition?.id : undefined} value={typeof AnglePosition === "object" && "value" in AnglePosition ? AnglePosition?.value : AnglePosition} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Distance" id={typeof Distance === "object" && "id" in Distance ? Distance?.id : undefined} value={typeof Distance === "object" && "value" in Distance ? Distance?.value : Distance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeightOffset" id={typeof HeightOffset === "object" && "id" in HeightOffset ? HeightOffset?.id : undefined} value={typeof HeightOffset === "object" && "value" in HeightOffset ? HeightOffset?.value : HeightOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FirstPersonPitch" id={typeof FirstPersonPitch === "object" && "id" in FirstPersonPitch ? FirstPersonPitch?.id : undefined} value={typeof FirstPersonPitch === "object" && "value" in FirstPersonPitch ? FirstPersonPitch?.value : FirstPersonPitch} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FirstPersonRoll" id={typeof FirstPersonRoll === "object" && "id" in FirstPersonRoll ? FirstPersonRoll?.id : undefined} value={typeof FirstPersonRoll === "object" && "value" in FirstPersonRoll ? FirstPersonRoll?.value : FirstPersonRoll} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FirstPersonOffset" id={typeof FirstPersonOffset === "object" && "id" in FirstPersonOffset ? FirstPersonOffset?.id : undefined} value={typeof FirstPersonOffset === "object" && "value" in FirstPersonOffset ? FirstPersonOffset?.value : FirstPersonOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GroupIncludeRadius" id={typeof GroupIncludeRadius === "object" && "id" in GroupIncludeRadius ? GroupIncludeRadius?.id : undefined} value={typeof GroupIncludeRadius === "object" && "value" in GroupIncludeRadius ? GroupIncludeRadius?.value : GroupIncludeRadius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GroupExcludeRadius" id={typeof GroupExcludeRadius === "object" && "id" in GroupExcludeRadius ? GroupExcludeRadius?.id : undefined} value={typeof GroupExcludeRadius === "object" && "value" in GroupExcludeRadius ? GroupExcludeRadius?.value : GroupExcludeRadius} /* default: 0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.UserRef]`} name="ForceGroupInclude" id={typeof ForceGroupInclude === "object" && "id" in ForceGroupInclude ? ForceGroupInclude?.id : undefined} value={typeof ForceGroupInclude === "object" && "value" in ForceGroupInclude ? ForceGroupInclude?.value : ForceGroupInclude} /* default: FrooxEngine.SyncList`1[FrooxEngine.UserRef] */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.UserRef]`} name="ForceGroupExclude" id={typeof ForceGroupExclude === "object" && "id" in ForceGroupExclude ? ForceGroupExclude?.id : undefined} value={typeof ForceGroupExclude === "object" && "value" in ForceGroupExclude ? ForceGroupExclude?.value : ForceGroupExclude} /* default: FrooxEngine.SyncList`1[FrooxEngine.UserRef] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PositionSmoothSpeed" id={typeof PositionSmoothSpeed === "object" && "id" in PositionSmoothSpeed ? PositionSmoothSpeed?.id : undefined} value={typeof PositionSmoothSpeed === "object" && "value" in PositionSmoothSpeed ? PositionSmoothSpeed?.value : PositionSmoothSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AnglePositionSmoothSpeed" id={typeof AnglePositionSmoothSpeed === "object" && "id" in AnglePositionSmoothSpeed ? AnglePositionSmoothSpeed?.id : undefined} value={typeof AnglePositionSmoothSpeed === "object" && "value" in AnglePositionSmoothSpeed ? AnglePositionSmoothSpeed?.value : AnglePositionSmoothSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FramingSmoothSpeed" id={typeof FramingSmoothSpeed === "object" && "id" in FramingSmoothSpeed ? FramingSmoothSpeed?.id : undefined} value={typeof FramingSmoothSpeed === "object" && "value" in FramingSmoothSpeed ? FramingSmoothSpeed?.value : FramingSmoothSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="WobbleMagnitude" id={typeof WobbleMagnitude === "object" && "id" in WobbleMagnitude ? WobbleMagnitude?.id : undefined} value={typeof WobbleMagnitude === "object" && "value" in WobbleMagnitude ? WobbleMagnitude?.value : WobbleMagnitude} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="WobbleSeed" id={typeof WobbleSeed === "object" && "id" in WobbleSeed ? WobbleSeed?.id : undefined} value={typeof WobbleSeed === "object" && "value" in WobbleSeed ? WobbleSeed?.value : WobbleSeed} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="WobbleSpeed" id={typeof WobbleSpeed === "object" && "id" in WobbleSpeed ? WobbleSpeed?.id : undefined} value={typeof WobbleSpeed === "object" && "value" in WobbleSpeed ? WobbleSpeed?.value : WobbleSpeed} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="FramingViewportPosition" id={typeof FramingViewportPosition === "object" && "id" in FramingViewportPosition ? FramingViewportPosition?.id : undefined} value={typeof FramingViewportPosition === "object" && "value" in FramingViewportPosition ? FramingViewportPosition?.value : FramingViewportPosition} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AvoidOcclusion" id={typeof AvoidOcclusion === "object" && "id" in AvoidOcclusion ? AvoidOcclusion?.id : undefined} value={typeof AvoidOcclusion === "object" && "value" in AvoidOcclusion ? AvoidOcclusion?.value : AvoidOcclusion} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OcclusionIncludePlayers" id={typeof OcclusionIncludePlayers === "object" && "id" in OcclusionIncludePlayers ? OcclusionIncludePlayers?.id : undefined} value={typeof OcclusionIncludePlayers === "object" && "value" in OcclusionIncludePlayers ? OcclusionIncludePlayers?.value : OcclusionIncludePlayers} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OcclusionIncludeAnyColliders" id={typeof OcclusionIncludeAnyColliders === "object" && "id" in OcclusionIncludeAnyColliders ? OcclusionIncludeAnyColliders?.id : undefined} value={typeof OcclusionIncludeAnyColliders === "object" && "value" in OcclusionIncludeAnyColliders ? OcclusionIncludeAnyColliders?.value : OcclusionIncludeAnyColliders} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.float3]]`} name="_positionStream" id={typeof _positionStream === "object" && "id" in _positionStream ? _positionStream?.id : undefined} value={typeof _positionStream === "object" && "value" in _positionStream ? _positionStream?.value : _positionStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.floatQ]]`} name="_rotationStream" id={typeof _rotationStream === "object" && "id" in _rotationStream ? _rotationStream?.id : undefined} value={typeof _rotationStream === "object" && "value" in _rotationStream ? _rotationStream?.value : _rotationStream} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_positionDrive" id={typeof _positionDrive === "object" && "id" in _positionDrive ? _positionDrive?.id : undefined} value={typeof _positionDrive === "object" && "value" in _positionDrive ? _positionDrive?.value : _positionDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rotationDrive" id={typeof _rotationDrive === "object" && "id" in _rotationDrive ? _rotationDrive?.id : undefined} value={typeof _rotationDrive === "object" && "value" in _rotationDrive ? _rotationDrive?.value : _rotationDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_releasePosition" id={typeof _releasePosition === "object" && "id" in _releasePosition ? _releasePosition?.id : undefined} value={typeof _releasePosition === "object" && "value" in _releasePosition ? _releasePosition?.value : _releasePosition} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="_releaseRotation" id={typeof _releaseRotation === "object" && "id" in _releaseRotation ? _releaseRotation?.id : undefined} value={typeof _releaseRotation === "object" && "value" in _releaseRotation ? _releaseRotation?.value : _releaseRotation} /* default: [0; 0; 0; 1] */  />
        </Component>
      );
    };
    