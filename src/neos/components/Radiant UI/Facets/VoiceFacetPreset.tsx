import { member, Member, Component } from "../../../core";
    
    export interface VoiceFacetPresetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_voiceBar?: member<any>;
_rawBar?: member<any>;
_voiceMode?: member<any>;
    }
    
    export function VoiceFacetPreset(props: VoiceFacetPresetInput){
      const { id, persistentId, updateOrder, Enabled,
_voiceBar,
_rawBar,
_voiceMode, } = props;
    
      return (
        <Component type="FrooxEngine.VoiceFacetPreset" id={id} persistentId={persistentId} updateOrder={updateOrder} version={2}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_voiceBar" id={typeof _voiceBar === "object" && "id" in _voiceBar ? _voiceBar?.id : undefined} value={typeof _voiceBar === "object" && "value" in _voiceBar ? _voiceBar?.value : _voiceBar} /* default: ID0 */  isRaw={typeof _voiceBar === "object" && "isRaw" in _voiceBar && _voiceBar.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_rawBar" id={typeof _rawBar === "object" && "id" in _rawBar ? _rawBar?.id : undefined} value={typeof _rawBar === "object" && "value" in _rawBar ? _rawBar?.value : _rawBar} /* default: ID0 */  isRaw={typeof _rawBar === "object" && "isRaw" in _rawBar && _rawBar.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.VoiceModeSync]`} name="_voiceMode" id={typeof _voiceMode === "object" && "id" in _voiceMode ? _voiceMode?.id : undefined} value={typeof _voiceMode === "object" && "value" in _voiceMode ? _voiceMode?.value : _voiceMode} /* default: ID0 */  isRaw={typeof _voiceMode === "object" && "isRaw" in _voiceMode && _voiceMode.isRaw ? true : undefined} />
        </Component>
      );
    };
    