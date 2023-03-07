import { member, Member, Component } from "../../../core";
    
    export interface VideoPlayerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
StereoLayout?: member<any>;
SizeCompensation?: member<[number, number]>;
videoProvider?: member<any>;
_style?: member<any>;
_indicatorTextureUrl?: member<any>;
_indicatorTint?: member<any>;
_colliderSize?: member<any>;
_frameWidth?: member<any>;
_frameHeight?: member<any>;
_frameMaterial?: member<any>;
_displayMaterial?: member<any>;
_displayMaterialTexture?: member<any>;
_displaySize?: member<any>;
_mainAudioOutput?: member<any>;
_timelineSlider?: member<any>;
_timelinePosition?: member<any>;
_timelineWidth?: member<any>;
_positionDrive?: member<any>;
_volumeSlider?: member<any>;
_volumePosition?: member<any>;
_volumeWidth?: member<any>;
_volumeDrive?: member<any>;
_buttonsWidth?: member<any>;
_buttonsHeight?: member<any>;
_buttonsPosition?: member<any>;
_playButtonColor?: member<any>;
_pauseButtonColor?: member<any>;
_stopButtonColor?: member<any>;
_loopButtonColor?: member<any>;
_audio3DButtonColor?: member<any>;
_exportable?: member<any>;
_assetProxy?: member<any>;
_referenceProxy?: member<any>;
    }
    
    export function VideoPlayer(props: VideoPlayerInput){
      const { id, persistentId, updateOrder, Enabled,
StereoLayout,
SizeCompensation,
videoProvider,
_style,
_indicatorTextureUrl,
_indicatorTint,
_colliderSize,
_frameWidth,
_frameHeight,
_frameMaterial,
_displayMaterial,
_displayMaterialTexture,
_displaySize,
_mainAudioOutput,
_timelineSlider,
_timelinePosition,
_timelineWidth,
_positionDrive,
_volumeSlider,
_volumePosition,
_volumeWidth,
_volumeDrive,
_buttonsWidth,
_buttonsHeight,
_buttonsPosition,
_playButtonColor,
_pauseButtonColor,
_stopButtonColor,
_loopButtonColor,
_audio3DButtonColor,
_exportable,
_assetProxy,
_referenceProxy, } = props;
    
      return (
        <Component type="FrooxEngine.VideoPlayer" id={id} persistentId={persistentId} updateOrder={updateOrder} version={4}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.StereoLayout]`} name="StereoLayout" id={typeof StereoLayout === "object" && "id" in StereoLayout ? StereoLayout?.id : undefined} value={typeof StereoLayout === "object" && "value" in StereoLayout ? StereoLayout?.value : StereoLayout} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="SizeCompensation" id={typeof SizeCompensation === "object" && "id" in SizeCompensation ? SizeCompensation?.id : undefined} value={typeof SizeCompensation === "object" && "value" in SizeCompensation ? SizeCompensation?.value : SizeCompensation} /* default: [0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.VideoTexture]`} name="videoProvider" id={typeof videoProvider === "object" && "id" in videoProvider ? videoProvider?.id : undefined} value={typeof videoProvider === "object" && "value" in videoProvider ? videoProvider?.value : videoProvider} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosUIStyle]`} name="_style" id={typeof _style === "object" && "id" in _style ? _style?.id : undefined} value={typeof _style === "object" && "value" in _style ? _style?.value : _style} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Uri]`} name="_indicatorTextureUrl" id={typeof _indicatorTextureUrl === "object" && "id" in _indicatorTextureUrl ? _indicatorTextureUrl?.id : undefined} value={typeof _indicatorTextureUrl === "object" && "value" in _indicatorTextureUrl ? _indicatorTextureUrl?.value : _indicatorTextureUrl} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_indicatorTint" id={typeof _indicatorTint === "object" && "id" in _indicatorTint ? _indicatorTint?.id : undefined} value={typeof _indicatorTint === "object" && "value" in _indicatorTint ? _indicatorTint?.value : _indicatorTint} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_colliderSize" id={typeof _colliderSize === "object" && "id" in _colliderSize ? _colliderSize?.id : undefined} value={typeof _colliderSize === "object" && "value" in _colliderSize ? _colliderSize?.value : _colliderSize} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_frameWidth" id={typeof _frameWidth === "object" && "id" in _frameWidth ? _frameWidth?.id : undefined} value={typeof _frameWidth === "object" && "value" in _frameWidth ? _frameWidth?.value : _frameWidth} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_frameHeight" id={typeof _frameHeight === "object" && "id" in _frameHeight ? _frameHeight?.id : undefined} value={typeof _frameHeight === "object" && "value" in _frameHeight ? _frameHeight?.value : _frameHeight} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_frameMaterial" id={typeof _frameMaterial === "object" && "id" in _frameMaterial ? _frameMaterial?.id : undefined} value={typeof _frameMaterial === "object" && "value" in _frameMaterial ? _frameMaterial?.value : _frameMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UnlitMaterial]`} name="_displayMaterial" id={typeof _displayMaterial === "object" && "id" in _displayMaterial ? _displayMaterial?.id : undefined} value={typeof _displayMaterial === "object" && "value" in _displayMaterial ? _displayMaterial?.value : _displayMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]]`} name="_displayMaterialTexture" id={typeof _displayMaterialTexture === "object" && "id" in _displayMaterialTexture ? _displayMaterialTexture?.id : undefined} value={typeof _displayMaterialTexture === "object" && "value" in _displayMaterialTexture ? _displayMaterialTexture?.value : _displayMaterialTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_displaySize" id={typeof _displaySize === "object" && "id" in _displaySize ? _displaySize?.id : undefined} value={typeof _displaySize === "object" && "value" in _displaySize ? _displaySize?.value : _displaySize} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AudioOutput]`} name="_mainAudioOutput" id={typeof _mainAudioOutput === "object" && "id" in _mainAudioOutput ? _mainAudioOutput?.id : undefined} value={typeof _mainAudioOutput === "object" && "value" in _mainAudioOutput ? _mainAudioOutput?.value : _mainAudioOutput} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosSlider]`} name="_timelineSlider" id={typeof _timelineSlider === "object" && "id" in _timelineSlider ? _timelineSlider?.id : undefined} value={typeof _timelineSlider === "object" && "value" in _timelineSlider ? _timelineSlider?.value : _timelineSlider} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_timelinePosition" id={typeof _timelinePosition === "object" && "id" in _timelinePosition ? _timelinePosition?.id : undefined} value={typeof _timelinePosition === "object" && "value" in _timelinePosition ? _timelinePosition?.value : _timelinePosition} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_timelineWidth" id={typeof _timelineWidth === "object" && "id" in _timelineWidth ? _timelineWidth?.id : undefined} value={typeof _timelineWidth === "object" && "value" in _timelineWidth ? _timelineWidth?.value : _timelineWidth} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_positionDrive" id={typeof _positionDrive === "object" && "id" in _positionDrive ? _positionDrive?.id : undefined} value={typeof _positionDrive === "object" && "value" in _positionDrive ? _positionDrive?.value : _positionDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosSlider]`} name="_volumeSlider" id={typeof _volumeSlider === "object" && "id" in _volumeSlider ? _volumeSlider?.id : undefined} value={typeof _volumeSlider === "object" && "value" in _volumeSlider ? _volumeSlider?.value : _volumeSlider} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_volumePosition" id={typeof _volumePosition === "object" && "id" in _volumePosition ? _volumePosition?.id : undefined} value={typeof _volumePosition === "object" && "value" in _volumePosition ? _volumePosition?.value : _volumePosition} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_volumeWidth" id={typeof _volumeWidth === "object" && "id" in _volumeWidth ? _volumeWidth?.id : undefined} value={typeof _volumeWidth === "object" && "value" in _volumeWidth ? _volumeWidth?.value : _volumeWidth} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_volumeDrive" id={typeof _volumeDrive === "object" && "id" in _volumeDrive ? _volumeDrive?.id : undefined} value={typeof _volumeDrive === "object" && "value" in _volumeDrive ? _volumeDrive?.value : _volumeDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_buttonsWidth" id={typeof _buttonsWidth === "object" && "id" in _buttonsWidth ? _buttonsWidth?.id : undefined} value={typeof _buttonsWidth === "object" && "value" in _buttonsWidth ? _buttonsWidth?.value : _buttonsWidth} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_buttonsHeight" id={typeof _buttonsHeight === "object" && "id" in _buttonsHeight ? _buttonsHeight?.id : undefined} value={typeof _buttonsHeight === "object" && "value" in _buttonsHeight ? _buttonsHeight?.value : _buttonsHeight} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_buttonsPosition" id={typeof _buttonsPosition === "object" && "id" in _buttonsPosition ? _buttonsPosition?.id : undefined} value={typeof _buttonsPosition === "object" && "value" in _buttonsPosition ? _buttonsPosition?.value : _buttonsPosition} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_playButtonColor" id={typeof _playButtonColor === "object" && "id" in _playButtonColor ? _playButtonColor?.id : undefined} value={typeof _playButtonColor === "object" && "value" in _playButtonColor ? _playButtonColor?.value : _playButtonColor} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_pauseButtonColor" id={typeof _pauseButtonColor === "object" && "id" in _pauseButtonColor ? _pauseButtonColor?.id : undefined} value={typeof _pauseButtonColor === "object" && "value" in _pauseButtonColor ? _pauseButtonColor?.value : _pauseButtonColor} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_stopButtonColor" id={typeof _stopButtonColor === "object" && "id" in _stopButtonColor ? _stopButtonColor?.id : undefined} value={typeof _stopButtonColor === "object" && "value" in _stopButtonColor ? _stopButtonColor?.value : _stopButtonColor} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_loopButtonColor" id={typeof _loopButtonColor === "object" && "id" in _loopButtonColor ? _loopButtonColor?.id : undefined} value={typeof _loopButtonColor === "object" && "value" in _loopButtonColor ? _loopButtonColor?.value : _loopButtonColor} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_audio3DButtonColor" id={typeof _audio3DButtonColor === "object" && "id" in _audio3DButtonColor ? _audio3DButtonColor?.id : undefined} value={typeof _audio3DButtonColor === "object" && "value" in _audio3DButtonColor ? _audio3DButtonColor?.value : _audio3DButtonColor} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.VideoExportable]`} name="_exportable" id={typeof _exportable === "object" && "id" in _exportable ? _exportable?.id : undefined} value={typeof _exportable === "object" && "value" in _exportable ? _exportable?.value : _exportable} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AssetProxy\`1[FrooxEngine.VideoTexture]]`} name="_assetProxy" id={typeof _assetProxy === "object" && "id" in _assetProxy ? _assetProxy?.id : undefined} value={typeof _assetProxy === "object" && "value" in _assetProxy ? _assetProxy?.value : _assetProxy} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ReferenceProxy]`} name="_referenceProxy" id={typeof _referenceProxy === "object" && "id" in _referenceProxy ? _referenceProxy?.id : undefined} value={typeof _referenceProxy === "object" && "value" in _referenceProxy ? _referenceProxy?.value : _referenceProxy} /* default: ID0 */  />
        </Component>
      );
    };
    