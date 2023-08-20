import { member, Member, Component } from "../../../../core";
    
    export interface AvatarVoiceRangeVisualizerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
VolumeSource?: member<any>;
AudioOutput?: member<any>;
WhisperColorMin?: member<[number, number, number, number]>;
WhisperColorMax?: member<[number, number, number, number]>;
WhisperColorRecordingMessage?: member<[number, number, number, number]>;
VisualRoot?: member<any>;
_activeUser?: member<any>;
_visualSize?: member<any>;
_visualColor?: member<any>;
    }
    
    export function AvatarVoiceRangeVisualizer(props: AvatarVoiceRangeVisualizerInput){
      const { id, persistentId, updateOrder, Enabled,
VolumeSource,
AudioOutput,
WhisperColorMin,
WhisperColorMax,
WhisperColorRecordingMessage,
VisualRoot,
_activeUser,
_visualSize,
_visualColor, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarVoiceRangeVisualizer" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Single]]`} name="VolumeSource" id={typeof VolumeSource === "object" && "id" in VolumeSource ? VolumeSource?.id : undefined} value={typeof VolumeSource === "object" && "value" in VolumeSource ? VolumeSource?.value : VolumeSource} /* default: ID0 */  isRaw={typeof VolumeSource === "object" && "isRaw" in VolumeSource && VolumeSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.AudioOutput]`} name="AudioOutput" id={typeof AudioOutput === "object" && "id" in AudioOutput ? AudioOutput?.id : undefined} value={typeof AudioOutput === "object" && "value" in AudioOutput ? AudioOutput?.value : AudioOutput} /* default: ID0 */  isRaw={typeof AudioOutput === "object" && "isRaw" in AudioOutput && AudioOutput.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="WhisperColorMin" id={typeof WhisperColorMin === "object" && "id" in WhisperColorMin ? WhisperColorMin?.id : undefined} value={typeof WhisperColorMin === "object" && "value" in WhisperColorMin ? WhisperColorMin?.value : WhisperColorMin} /* default: [0; 0; 0; 0] */  isRaw={typeof WhisperColorMin === "object" && "isRaw" in WhisperColorMin && WhisperColorMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="WhisperColorMax" id={typeof WhisperColorMax === "object" && "id" in WhisperColorMax ? WhisperColorMax?.id : undefined} value={typeof WhisperColorMax === "object" && "value" in WhisperColorMax ? WhisperColorMax?.value : WhisperColorMax} /* default: [0; 0; 0; 0] */  isRaw={typeof WhisperColorMax === "object" && "isRaw" in WhisperColorMax && WhisperColorMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="WhisperColorRecordingMessage" id={typeof WhisperColorRecordingMessage === "object" && "id" in WhisperColorRecordingMessage ? WhisperColorRecordingMessage?.id : undefined} value={typeof WhisperColorRecordingMessage === "object" && "value" in WhisperColorRecordingMessage ? WhisperColorRecordingMessage?.value : WhisperColorRecordingMessage} /* default: [0; 0; 0; 0] */  isRaw={typeof WhisperColorRecordingMessage === "object" && "isRaw" in WhisperColorRecordingMessage && WhisperColorRecordingMessage.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="VisualRoot" id={typeof VisualRoot === "object" && "id" in VisualRoot ? VisualRoot?.id : undefined} value={typeof VisualRoot === "object" && "value" in VisualRoot ? VisualRoot?.value : VisualRoot} /* default: ID0 */  isRaw={typeof VisualRoot === "object" && "isRaw" in VisualRoot && VisualRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="_activeUser" id={typeof _activeUser === "object" && "id" in _activeUser ? _activeUser?.id : undefined} value={typeof _activeUser === "object" && "value" in _activeUser ? _activeUser?.value : _activeUser} /* default: ID0 */  isRaw={typeof _activeUser === "object" && "isRaw" in _activeUser && _activeUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_visualSize" id={typeof _visualSize === "object" && "id" in _visualSize ? _visualSize?.id : undefined} value={typeof _visualSize === "object" && "value" in _visualSize ? _visualSize?.value : _visualSize} /* default: ID0 */  isRaw={typeof _visualSize === "object" && "isRaw" in _visualSize && _visualSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_visualColor" id={typeof _visualColor === "object" && "id" in _visualColor ? _visualColor?.id : undefined} value={typeof _visualColor === "object" && "value" in _visualColor ? _visualColor?.value : _visualColor} /* default: ID0 */  isRaw={typeof _visualColor === "object" && "isRaw" in _visualColor && _visualColor.isRaw ? true : undefined} />
        </Component>
      );
    };
    