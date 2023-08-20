import { member, Member, Component } from "../../../../core";
    
    export interface AvatarAudioOutputManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AudioOutput?: member<any>;
IsViewVoice?: member<boolean>;
WhisperConfig?: member<any>;
NormalConfig?: member<any>;
ShoutConfig?: member<any>;
BroadcastConfig?: member<any>;
__legacyWhisperVolume?: member<number>;
__legacyNormalVolume?: member<number>;
__legacyShoutVolume?: member<number>;
__legacyBroadcastVolume?: member<number>;
__legacyNormalDopplerLevel?: member<number>;
__legacyShoutDopplerLevel?: member<number>;
__legacyWhisperRange?: member<number>;
_activeUser?: member<any>;
_enabled?: member<any>;
_volume?: member<any>;
_doppler?: member<any>;
_spatialize?: member<any>;
_spatialBlend?: member<any>;
_minDistance?: member<any>;
_maxDistance?: member<any>;
_rollOffMode?: member<any>;
_distanceSpace?: member<any>;
_minScale?: member<any>;
_maxScale?: member<any>;
_scaleCompensation?: member<number>;
_audioConfiguration?: member<any>;
    }
    
    export function AvatarAudioOutputManager(props: AvatarAudioOutputManagerInput){
      const { id, persistentId, updateOrder, Enabled,
AudioOutput,
IsViewVoice,
WhisperConfig,
NormalConfig,
ShoutConfig,
BroadcastConfig,
__legacyWhisperVolume,
__legacyNormalVolume,
__legacyShoutVolume,
__legacyBroadcastVolume,
__legacyNormalDopplerLevel,
__legacyShoutDopplerLevel,
__legacyWhisperRange,
_activeUser,
_enabled,
_volume,
_doppler,
_spatialize,
_spatialBlend,
_minDistance,
_maxDistance,
_rollOffMode,
_distanceSpace,
_minScale,
_maxScale,
_scaleCompensation,
_audioConfiguration, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarAudioOutputManager" id={id} persistentId={persistentId} updateOrder={updateOrder} version={4}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AudioOutput]`} name="AudioOutput" id={typeof AudioOutput === "object" && "id" in AudioOutput ? AudioOutput?.id : undefined} value={typeof AudioOutput === "object" && "value" in AudioOutput ? AudioOutput?.value : AudioOutput} /* default: ID0 */  isRaw={typeof AudioOutput === "object" && "isRaw" in AudioOutput && AudioOutput.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsViewVoice" id={typeof IsViewVoice === "object" && "id" in IsViewVoice ? IsViewVoice?.id : undefined} value={typeof IsViewVoice === "object" && "value" in IsViewVoice ? IsViewVoice?.value : IsViewVoice} /* default: false */  isRaw={typeof IsViewVoice === "object" && "isRaw" in IsViewVoice && IsViewVoice.isRaw ? true : undefined} />
<Member type={`FrooxEngine.VoiceModeConfig`} name="WhisperConfig" id={typeof WhisperConfig === "object" && "id" in WhisperConfig ? WhisperConfig?.id : undefined} value={typeof WhisperConfig === "object" && "value" in WhisperConfig ? WhisperConfig?.value : WhisperConfig} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.VoiceModeConfig,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof WhisperConfig === "object" && "isRaw" in WhisperConfig && WhisperConfig.isRaw ? true : undefined} />
<Member type={`FrooxEngine.VoiceModeConfig`} name="NormalConfig" id={typeof NormalConfig === "object" && "id" in NormalConfig ? NormalConfig?.id : undefined} value={typeof NormalConfig === "object" && "value" in NormalConfig ? NormalConfig?.value : NormalConfig} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.VoiceModeConfig,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof NormalConfig === "object" && "isRaw" in NormalConfig && NormalConfig.isRaw ? true : undefined} />
<Member type={`FrooxEngine.VoiceModeConfig`} name="ShoutConfig" id={typeof ShoutConfig === "object" && "id" in ShoutConfig ? ShoutConfig?.id : undefined} value={typeof ShoutConfig === "object" && "value" in ShoutConfig ? ShoutConfig?.value : ShoutConfig} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.VoiceModeConfig,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof ShoutConfig === "object" && "isRaw" in ShoutConfig && ShoutConfig.isRaw ? true : undefined} />
<Member type={`FrooxEngine.VoiceModeConfig`} name="BroadcastConfig" id={typeof BroadcastConfig === "object" && "id" in BroadcastConfig ? BroadcastConfig?.id : undefined} value={typeof BroadcastConfig === "object" && "value" in BroadcastConfig ? BroadcastConfig?.value : BroadcastConfig} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.VoiceModeConfig,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof BroadcastConfig === "object" && "isRaw" in BroadcastConfig && BroadcastConfig.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="__legacyWhisperVolume-ID" id={typeof __legacyWhisperVolume === "object" && "id" in __legacyWhisperVolume ? __legacyWhisperVolume?.id : undefined} value={typeof __legacyWhisperVolume === "object" && "value" in __legacyWhisperVolume ? __legacyWhisperVolume?.value : __legacyWhisperVolume} /* default: 0 */ readOnly isRaw={typeof __legacyWhisperVolume === "object" && "isRaw" in __legacyWhisperVolume && __legacyWhisperVolume.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="__legacyNormalVolume-ID" id={typeof __legacyNormalVolume === "object" && "id" in __legacyNormalVolume ? __legacyNormalVolume?.id : undefined} value={typeof __legacyNormalVolume === "object" && "value" in __legacyNormalVolume ? __legacyNormalVolume?.value : __legacyNormalVolume} /* default: 0 */ readOnly isRaw={typeof __legacyNormalVolume === "object" && "isRaw" in __legacyNormalVolume && __legacyNormalVolume.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="__legacyShoutVolume-ID" id={typeof __legacyShoutVolume === "object" && "id" in __legacyShoutVolume ? __legacyShoutVolume?.id : undefined} value={typeof __legacyShoutVolume === "object" && "value" in __legacyShoutVolume ? __legacyShoutVolume?.value : __legacyShoutVolume} /* default: 0 */ readOnly isRaw={typeof __legacyShoutVolume === "object" && "isRaw" in __legacyShoutVolume && __legacyShoutVolume.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="__legacyBroadcastVolume-ID" id={typeof __legacyBroadcastVolume === "object" && "id" in __legacyBroadcastVolume ? __legacyBroadcastVolume?.id : undefined} value={typeof __legacyBroadcastVolume === "object" && "value" in __legacyBroadcastVolume ? __legacyBroadcastVolume?.value : __legacyBroadcastVolume} /* default: 0 */ readOnly isRaw={typeof __legacyBroadcastVolume === "object" && "isRaw" in __legacyBroadcastVolume && __legacyBroadcastVolume.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="__legacyNormalDopplerLevel-ID" id={typeof __legacyNormalDopplerLevel === "object" && "id" in __legacyNormalDopplerLevel ? __legacyNormalDopplerLevel?.id : undefined} value={typeof __legacyNormalDopplerLevel === "object" && "value" in __legacyNormalDopplerLevel ? __legacyNormalDopplerLevel?.value : __legacyNormalDopplerLevel} /* default: 0 */ readOnly isRaw={typeof __legacyNormalDopplerLevel === "object" && "isRaw" in __legacyNormalDopplerLevel && __legacyNormalDopplerLevel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="__legacyShoutDopplerLevel-ID" id={typeof __legacyShoutDopplerLevel === "object" && "id" in __legacyShoutDopplerLevel ? __legacyShoutDopplerLevel?.id : undefined} value={typeof __legacyShoutDopplerLevel === "object" && "value" in __legacyShoutDopplerLevel ? __legacyShoutDopplerLevel?.value : __legacyShoutDopplerLevel} /* default: 0 */ readOnly isRaw={typeof __legacyShoutDopplerLevel === "object" && "isRaw" in __legacyShoutDopplerLevel && __legacyShoutDopplerLevel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="__legacyWhisperRange-ID" id={typeof __legacyWhisperRange === "object" && "id" in __legacyWhisperRange ? __legacyWhisperRange?.id : undefined} value={typeof __legacyWhisperRange === "object" && "value" in __legacyWhisperRange ? __legacyWhisperRange?.value : __legacyWhisperRange} /* default: 0 */ readOnly isRaw={typeof __legacyWhisperRange === "object" && "isRaw" in __legacyWhisperRange && __legacyWhisperRange.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="_activeUser" id={typeof _activeUser === "object" && "id" in _activeUser ? _activeUser?.id : undefined} value={typeof _activeUser === "object" && "value" in _activeUser ? _activeUser?.value : _activeUser} /* default: ID0 */  isRaw={typeof _activeUser === "object" && "isRaw" in _activeUser && _activeUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_enabled" id={typeof _enabled === "object" && "id" in _enabled ? _enabled?.id : undefined} value={typeof _enabled === "object" && "value" in _enabled ? _enabled?.value : _enabled} /* default: ID0 */  isRaw={typeof _enabled === "object" && "isRaw" in _enabled && _enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_volume" id={typeof _volume === "object" && "id" in _volume ? _volume?.id : undefined} value={typeof _volume === "object" && "value" in _volume ? _volume?.value : _volume} /* default: ID0 */  isRaw={typeof _volume === "object" && "isRaw" in _volume && _volume.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_doppler" id={typeof _doppler === "object" && "id" in _doppler ? _doppler?.id : undefined} value={typeof _doppler === "object" && "value" in _doppler ? _doppler?.value : _doppler} /* default: ID0 */  isRaw={typeof _doppler === "object" && "isRaw" in _doppler && _doppler.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_spatialize" id={typeof _spatialize === "object" && "id" in _spatialize ? _spatialize?.id : undefined} value={typeof _spatialize === "object" && "value" in _spatialize ? _spatialize?.value : _spatialize} /* default: ID0 */  isRaw={typeof _spatialize === "object" && "isRaw" in _spatialize && _spatialize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_spatialBlend" id={typeof _spatialBlend === "object" && "id" in _spatialBlend ? _spatialBlend?.id : undefined} value={typeof _spatialBlend === "object" && "value" in _spatialBlend ? _spatialBlend?.value : _spatialBlend} /* default: ID0 */  isRaw={typeof _spatialBlend === "object" && "isRaw" in _spatialBlend && _spatialBlend.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_minDistance" id={typeof _minDistance === "object" && "id" in _minDistance ? _minDistance?.id : undefined} value={typeof _minDistance === "object" && "value" in _minDistance ? _minDistance?.value : _minDistance} /* default: ID0 */  isRaw={typeof _minDistance === "object" && "isRaw" in _minDistance && _minDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_maxDistance" id={typeof _maxDistance === "object" && "id" in _maxDistance ? _maxDistance?.id : undefined} value={typeof _maxDistance === "object" && "value" in _maxDistance ? _maxDistance?.value : _maxDistance} /* default: ID0 */  isRaw={typeof _maxDistance === "object" && "isRaw" in _maxDistance && _maxDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[FrooxEngine.AudioRolloffMode]`} name="_rollOffMode" id={typeof _rollOffMode === "object" && "id" in _rollOffMode ? _rollOffMode?.id : undefined} value={typeof _rollOffMode === "object" && "value" in _rollOffMode ? _rollOffMode?.value : _rollOffMode} /* default: ID0 */  isRaw={typeof _rollOffMode === "object" && "isRaw" in _rollOffMode && _rollOffMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[FrooxEngine.AudioDistanceSpace]`} name="_distanceSpace" id={typeof _distanceSpace === "object" && "id" in _distanceSpace ? _distanceSpace?.id : undefined} value={typeof _distanceSpace === "object" && "value" in _distanceSpace ? _distanceSpace?.value : _distanceSpace} /* default: ID0 */  isRaw={typeof _distanceSpace === "object" && "isRaw" in _distanceSpace && _distanceSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_minScale" id={typeof _minScale === "object" && "id" in _minScale ? _minScale?.id : undefined} value={typeof _minScale === "object" && "value" in _minScale ? _minScale?.value : _minScale} /* default: ID0 */  isRaw={typeof _minScale === "object" && "isRaw" in _minScale && _minScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_maxScale" id={typeof _maxScale === "object" && "id" in _maxScale ? _maxScale?.id : undefined} value={typeof _maxScale === "object" && "value" in _maxScale ? _maxScale?.value : _maxScale} /* default: ID0 */  isRaw={typeof _maxScale === "object" && "isRaw" in _maxScale && _maxScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_scaleCompensation" id={typeof _scaleCompensation === "object" && "id" in _scaleCompensation ? _scaleCompensation?.id : undefined} value={typeof _scaleCompensation === "object" && "value" in _scaleCompensation ? _scaleCompensation?.value : _scaleCompensation} /* default: 0 */  isRaw={typeof _scaleCompensation === "object" && "isRaw" in _scaleCompensation && _scaleCompensation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AvatarAudioConfiguration]`} name="_audioConfiguration" id={typeof _audioConfiguration === "object" && "id" in _audioConfiguration ? _audioConfiguration?.id : undefined} value={typeof _audioConfiguration === "object" && "value" in _audioConfiguration ? _audioConfiguration?.value : _audioConfiguration} /* default: ID0 */  isRaw={typeof _audioConfiguration === "object" && "isRaw" in _audioConfiguration && _audioConfiguration.isRaw ? true : undefined} />
        </Component>
      );
    };
    