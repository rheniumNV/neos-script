import { member, Member, Component } from "../../core";
    
    export interface AudioSettingSyncInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DefaultAudioInputDeviceIndex?: member<number>;
OverrideAudioOutputIndex?: member<number>;
MasterVolume?: member<number>;
WhisperVoiceVolume?: member<number>;
NoiseGateThreshold?: member<number>;
NoiseGateAttack?: member<number>;
NoiseGateHold?: member<number>;
NoiseGateRelease?: member<number>;
NormalizationThreshold?: member<number>;
DisableNormalization?: member<boolean>;
NoiseSupression?: member<boolean>;
    }
    
    export function AudioSettingSync(props: AudioSettingSyncInput){
      const { id, persistentId, updateOrder, Enabled,
DefaultAudioInputDeviceIndex,
OverrideAudioOutputIndex,
MasterVolume,
WhisperVoiceVolume,
NoiseGateThreshold,
NoiseGateAttack,
NoiseGateHold,
NoiseGateRelease,
NormalizationThreshold,
DisableNormalization,
NoiseSupression, } = props;
    
      return (
        <Component type="FrooxEngine.AudioSettingSync" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="DefaultAudioInputDeviceIndex" id={typeof DefaultAudioInputDeviceIndex === "object" && "id" in DefaultAudioInputDeviceIndex ? DefaultAudioInputDeviceIndex?.id : undefined} value={typeof DefaultAudioInputDeviceIndex === "object" && "value" in DefaultAudioInputDeviceIndex ? DefaultAudioInputDeviceIndex?.value : DefaultAudioInputDeviceIndex} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="OverrideAudioOutputIndex" id={typeof OverrideAudioOutputIndex === "object" && "id" in OverrideAudioOutputIndex ? OverrideAudioOutputIndex?.id : undefined} value={typeof OverrideAudioOutputIndex === "object" && "value" in OverrideAudioOutputIndex ? OverrideAudioOutputIndex?.value : OverrideAudioOutputIndex} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MasterVolume" id={typeof MasterVolume === "object" && "id" in MasterVolume ? MasterVolume?.id : undefined} value={typeof MasterVolume === "object" && "value" in MasterVolume ? MasterVolume?.value : MasterVolume} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="WhisperVoiceVolume" id={typeof WhisperVoiceVolume === "object" && "id" in WhisperVoiceVolume ? WhisperVoiceVolume?.id : undefined} value={typeof WhisperVoiceVolume === "object" && "value" in WhisperVoiceVolume ? WhisperVoiceVolume?.value : WhisperVoiceVolume} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NoiseGateThreshold" id={typeof NoiseGateThreshold === "object" && "id" in NoiseGateThreshold ? NoiseGateThreshold?.id : undefined} value={typeof NoiseGateThreshold === "object" && "value" in NoiseGateThreshold ? NoiseGateThreshold?.value : NoiseGateThreshold} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NoiseGateAttack" id={typeof NoiseGateAttack === "object" && "id" in NoiseGateAttack ? NoiseGateAttack?.id : undefined} value={typeof NoiseGateAttack === "object" && "value" in NoiseGateAttack ? NoiseGateAttack?.value : NoiseGateAttack} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NoiseGateHold" id={typeof NoiseGateHold === "object" && "id" in NoiseGateHold ? NoiseGateHold?.id : undefined} value={typeof NoiseGateHold === "object" && "value" in NoiseGateHold ? NoiseGateHold?.value : NoiseGateHold} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NoiseGateRelease" id={typeof NoiseGateRelease === "object" && "id" in NoiseGateRelease ? NoiseGateRelease?.id : undefined} value={typeof NoiseGateRelease === "object" && "value" in NoiseGateRelease ? NoiseGateRelease?.value : NoiseGateRelease} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalizationThreshold" id={typeof NormalizationThreshold === "object" && "id" in NormalizationThreshold ? NormalizationThreshold?.id : undefined} value={typeof NormalizationThreshold === "object" && "value" in NormalizationThreshold ? NormalizationThreshold?.value : NormalizationThreshold} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DisableNormalization" id={typeof DisableNormalization === "object" && "id" in DisableNormalization ? DisableNormalization?.id : undefined} value={typeof DisableNormalization === "object" && "value" in DisableNormalization ? DisableNormalization?.value : DisableNormalization} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="NoiseSupression" id={typeof NoiseSupression === "object" && "id" in NoiseSupression ? NoiseSupression?.id : undefined} value={typeof NoiseSupression === "object" && "value" in NoiseSupression ? NoiseSupression?.value : NoiseSupression} /* default: false */  />
        </Component>
      );
    };
    