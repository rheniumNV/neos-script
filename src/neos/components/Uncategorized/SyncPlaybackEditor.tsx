import { member, Member, Component } from "../../core";
    
    export interface SyncPlaybackEditorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_playback?: member<any>;
_sliderValue?: member<any>;
_loopToggleSprite?: member<any>;
_speedField?: member<any>;
_slider?: member<any>;
    }
    
    export function SyncPlaybackEditor(props: SyncPlaybackEditorInput){
      const { id, persistentId, updateOrder, Enabled,
_playback,
_sliderValue,
_loopToggleSprite,
_speedField,
_slider, } = props;
    
      return (
        <Component type="FrooxEngine.SyncPlaybackEditor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.SyncPlayback]`} name="_playback" id={typeof _playback === "object" && "id" in _playback ? _playback?.id : undefined} value={typeof _playback === "object" && "value" in _playback ? _playback?.value : _playback} /* default: ID0 */  isRaw={typeof _playback === "object" && "isRaw" in _playback && _playback.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_sliderValue" id={typeof _sliderValue === "object" && "id" in _sliderValue ? _sliderValue?.id : undefined} value={typeof _sliderValue === "object" && "value" in _sliderValue ? _sliderValue?.value : _sliderValue} /* default: ID0 */  isRaw={typeof _sliderValue === "object" && "isRaw" in _sliderValue && _sliderValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Uri]`} name="_loopToggleSprite" id={typeof _loopToggleSprite === "object" && "id" in _loopToggleSprite ? _loopToggleSprite?.id : undefined} value={typeof _loopToggleSprite === "object" && "value" in _loopToggleSprite ? _loopToggleSprite?.value : _loopToggleSprite} /* default: ID0 */  isRaw={typeof _loopToggleSprite === "object" && "isRaw" in _loopToggleSprite && _loopToggleSprite.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FloatTextEditorParser]`} name="_speedField" id={typeof _speedField === "object" && "id" in _speedField ? _speedField?.id : undefined} value={typeof _speedField === "object" && "value" in _speedField ? _speedField?.value : _speedField} /* default: ID0 */  isRaw={typeof _speedField === "object" && "isRaw" in _speedField && _speedField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Slider\`1[System.Single]]`} name="_slider" id={typeof _slider === "object" && "id" in _slider ? _slider?.id : undefined} value={typeof _slider === "object" && "value" in _slider ? _slider?.value : _slider} /* default: ID0 */  isRaw={typeof _slider === "object" && "isRaw" in _slider && _slider.isRaw ? true : undefined} />
        </Component>
      );
    };
    