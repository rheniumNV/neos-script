import { member, Member, Component } from "../../../core";
    
    export interface AudioClipInputInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Clip?: member<any>;
_text?: member<any>;
    }
    
    export function AudioClipInput(props: AudioClipInputInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Clip,
_text, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Audio.AudioClipInput" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="Clip" id={typeof Clip === "object" && "id" in Clip ? Clip?.id : undefined} value={typeof Clip === "object" && "value" in Clip ? Clip?.value : Clip} /* default: ID0 */  isRaw={typeof Clip === "object" && "isRaw" in Clip && Clip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_text" id={typeof _text === "object" && "id" in _text ? _text?.id : undefined} value={typeof _text === "object" && "value" in _text ? _text?.value : _text} /* default: ID0 */  isRaw={typeof _text === "object" && "isRaw" in _text && _text.isRaw ? true : undefined} />
        </Component>
      );
    };
    