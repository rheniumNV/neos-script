import { member, Member, Component } from "../../../core";
    
    export interface AudioPlayerOrbInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AudioClip?: member<any>;
_lastClip?: member<any>;
_clipPlayer?: member<any>;
_audioOutput?: member<any>;
_waveformMaterial?: member<any>;
_playbackMaterial?: member<any>;
_waveformRingMesh?: member<any>;
_playbackRingMesh?: member<any>;
_playbackRingArc?: member<any>;
_volumeRingArc?: member<any>;
_playbackTimeText?: member<string>;
_clipLengthTimeText?: member<string>;
_iconTextureURL?: member<any>;
_stopItem?: member<any>;
_loopItem?: member<any>;
_spatialItem?: member<any>;
_loopIconURL?: member<any>;
_spatialIconURL?: member<any>;
_exportable?: member<any>;
_assetProxy?: member<any>;
    }
    
    export function AudioPlayerOrb(props: AudioPlayerOrbInput){
      const { id, persistentId, updateOrder, Enabled,
AudioClip,
_lastClip,
_clipPlayer,
_audioOutput,
_waveformMaterial,
_playbackMaterial,
_waveformRingMesh,
_playbackRingMesh,
_playbackRingArc,
_volumeRingArc,
_playbackTimeText,
_clipLengthTimeText,
_iconTextureURL,
_stopItem,
_loopItem,
_spatialItem,
_loopIconURL,
_spatialIconURL,
_exportable,
_assetProxy, } = props;
    
      return (
        <Component type="FrooxEngine.AudioPlayerOrb" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="AudioClip" id={typeof AudioClip === "object" && "id" in AudioClip ? AudioClip?.id : undefined} value={typeof AudioClip === "object" && "value" in AudioClip ? AudioClip?.value : AudioClip} /* default: ID0 */  isRaw={typeof AudioClip === "object" && "isRaw" in AudioClip && AudioClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="_lastClip" id={typeof _lastClip === "object" && "id" in _lastClip ? _lastClip?.id : undefined} value={typeof _lastClip === "object" && "value" in _lastClip ? _lastClip?.value : _lastClip} /* default: ID0 */  isRaw={typeof _lastClip === "object" && "isRaw" in _lastClip && _lastClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AudioClipPlayer]`} name="_clipPlayer" id={typeof _clipPlayer === "object" && "id" in _clipPlayer ? _clipPlayer?.id : undefined} value={typeof _clipPlayer === "object" && "value" in _clipPlayer ? _clipPlayer?.value : _clipPlayer} /* default: ID0 */  isRaw={typeof _clipPlayer === "object" && "isRaw" in _clipPlayer && _clipPlayer.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AudioOutput]`} name="_audioOutput" id={typeof _audioOutput === "object" && "id" in _audioOutput ? _audioOutput?.id : undefined} value={typeof _audioOutput === "object" && "value" in _audioOutput ? _audioOutput?.value : _audioOutput} /* default: ID0 */  isRaw={typeof _audioOutput === "object" && "isRaw" in _audioOutput && _audioOutput.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UnlitMaterial]`} name="_waveformMaterial" id={typeof _waveformMaterial === "object" && "id" in _waveformMaterial ? _waveformMaterial?.id : undefined} value={typeof _waveformMaterial === "object" && "value" in _waveformMaterial ? _waveformMaterial?.value : _waveformMaterial} /* default: ID0 */  isRaw={typeof _waveformMaterial === "object" && "isRaw" in _waveformMaterial && _waveformMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UnlitMaterial]`} name="_playbackMaterial" id={typeof _playbackMaterial === "object" && "id" in _playbackMaterial ? _playbackMaterial?.id : undefined} value={typeof _playbackMaterial === "object" && "value" in _playbackMaterial ? _playbackMaterial?.value : _playbackMaterial} /* default: ID0 */  isRaw={typeof _playbackMaterial === "object" && "isRaw" in _playbackMaterial && _playbackMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RingMesh]`} name="_waveformRingMesh" id={typeof _waveformRingMesh === "object" && "id" in _waveformRingMesh ? _waveformRingMesh?.id : undefined} value={typeof _waveformRingMesh === "object" && "value" in _waveformRingMesh ? _waveformRingMesh?.value : _waveformRingMesh} /* default: ID0 */  isRaw={typeof _waveformRingMesh === "object" && "isRaw" in _waveformRingMesh && _waveformRingMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RingMesh]`} name="_playbackRingMesh" id={typeof _playbackRingMesh === "object" && "id" in _playbackRingMesh ? _playbackRingMesh?.id : undefined} value={typeof _playbackRingMesh === "object" && "value" in _playbackRingMesh ? _playbackRingMesh?.value : _playbackRingMesh} /* default: ID0 */  isRaw={typeof _playbackRingMesh === "object" && "isRaw" in _playbackRingMesh && _playbackRingMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_playbackRingArc" id={typeof _playbackRingArc === "object" && "id" in _playbackRingArc ? _playbackRingArc?.id : undefined} value={typeof _playbackRingArc === "object" && "value" in _playbackRingArc ? _playbackRingArc?.value : _playbackRingArc} /* default: ID0 */  isRaw={typeof _playbackRingArc === "object" && "isRaw" in _playbackRingArc && _playbackRingArc.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_volumeRingArc" id={typeof _volumeRingArc === "object" && "id" in _volumeRingArc ? _volumeRingArc?.id : undefined} value={typeof _volumeRingArc === "object" && "value" in _volumeRingArc ? _volumeRingArc?.value : _volumeRingArc} /* default: ID0 */  isRaw={typeof _volumeRingArc === "object" && "isRaw" in _volumeRingArc && _volumeRingArc.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_playbackTimeText" id={typeof _playbackTimeText === "object" && "id" in _playbackTimeText ? _playbackTimeText?.id : undefined} value={typeof _playbackTimeText === "object" && "value" in _playbackTimeText ? _playbackTimeText?.value : _playbackTimeText} /* default: ID0 */  isRaw={typeof _playbackTimeText === "object" && "isRaw" in _playbackTimeText && _playbackTimeText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_clipLengthTimeText" id={typeof _clipLengthTimeText === "object" && "id" in _clipLengthTimeText ? _clipLengthTimeText?.id : undefined} value={typeof _clipLengthTimeText === "object" && "value" in _clipLengthTimeText ? _clipLengthTimeText?.value : _clipLengthTimeText} /* default: ID0 */  isRaw={typeof _clipLengthTimeText === "object" && "isRaw" in _clipLengthTimeText && _clipLengthTimeText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Uri]`} name="_iconTextureURL" id={typeof _iconTextureURL === "object" && "id" in _iconTextureURL ? _iconTextureURL?.id : undefined} value={typeof _iconTextureURL === "object" && "value" in _iconTextureURL ? _iconTextureURL?.value : _iconTextureURL} /* default: ID0 */  isRaw={typeof _iconTextureURL === "object" && "isRaw" in _iconTextureURL && _iconTextureURL.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_stopItem" id={typeof _stopItem === "object" && "id" in _stopItem ? _stopItem?.id : undefined} value={typeof _stopItem === "object" && "value" in _stopItem ? _stopItem?.value : _stopItem} /* default: ID0 */  isRaw={typeof _stopItem === "object" && "isRaw" in _stopItem && _stopItem.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_loopItem" id={typeof _loopItem === "object" && "id" in _loopItem ? _loopItem?.id : undefined} value={typeof _loopItem === "object" && "value" in _loopItem ? _loopItem?.value : _loopItem} /* default: ID0 */  isRaw={typeof _loopItem === "object" && "isRaw" in _loopItem && _loopItem.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_spatialItem" id={typeof _spatialItem === "object" && "id" in _spatialItem ? _spatialItem?.id : undefined} value={typeof _spatialItem === "object" && "value" in _spatialItem ? _spatialItem?.value : _spatialItem} /* default: ID0 */  isRaw={typeof _spatialItem === "object" && "isRaw" in _spatialItem && _spatialItem.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Uri]`} name="_loopIconURL" id={typeof _loopIconURL === "object" && "id" in _loopIconURL ? _loopIconURL?.id : undefined} value={typeof _loopIconURL === "object" && "value" in _loopIconURL ? _loopIconURL?.value : _loopIconURL} /* default: ID0 */  isRaw={typeof _loopIconURL === "object" && "isRaw" in _loopIconURL && _loopIconURL.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Uri]`} name="_spatialIconURL" id={typeof _spatialIconURL === "object" && "id" in _spatialIconURL ? _spatialIconURL?.id : undefined} value={typeof _spatialIconURL === "object" && "value" in _spatialIconURL ? _spatialIconURL?.value : _spatialIconURL} /* default: ID0 */  isRaw={typeof _spatialIconURL === "object" && "isRaw" in _spatialIconURL && _spatialIconURL.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AudioExportable]`} name="_exportable" id={typeof _exportable === "object" && "id" in _exportable ? _exportable?.id : undefined} value={typeof _exportable === "object" && "value" in _exportable ? _exportable?.value : _exportable} /* default: ID0 */  isRaw={typeof _exportable === "object" && "isRaw" in _exportable && _exportable.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AssetProxy\`1[FrooxEngine.AudioClip]]`} name="_assetProxy" id={typeof _assetProxy === "object" && "id" in _assetProxy ? _assetProxy?.id : undefined} value={typeof _assetProxy === "object" && "value" in _assetProxy ? _assetProxy?.value : _assetProxy} /* default: ID0 */  isRaw={typeof _assetProxy === "object" && "isRaw" in _assetProxy && _assetProxy.isRaw ? true : undefined} />
        </Component>
      );
    };
    