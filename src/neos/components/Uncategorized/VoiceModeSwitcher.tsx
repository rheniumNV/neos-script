import { member, Member, Component } from "../../core";
    
    export interface VoiceModeSwitcherInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_menu?: member<any>;
_muteItem?: member<any>;
_whisperItem?: member<any>;
_normalItem?: member<any>;
_shoutItem?: member<any>;
_broadcastItem?: member<any>;
_voiceMode?: member<any>;
    }
    
    export function VoiceModeSwitcher(props: VoiceModeSwitcherInput){
      const { id, persistentId, updateOrder, Enabled,
_menu,
_muteItem,
_whisperItem,
_normalItem,
_shoutItem,
_broadcastItem,
_voiceMode, } = props;
    
      return (
        <Component type="FrooxEngine.VoiceModeSwitcher" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController]`} name="_menu" id={typeof _menu === "object" && "id" in _menu ? _menu?.id : undefined} value={typeof _menu === "object" && "value" in _menu ? _menu?.value : _menu} /* default: ID0 */  isRaw={typeof _menu === "object" && "isRaw" in _menu && _menu.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_muteItem" id={typeof _muteItem === "object" && "id" in _muteItem ? _muteItem?.id : undefined} value={typeof _muteItem === "object" && "value" in _muteItem ? _muteItem?.value : _muteItem} /* default: ID0 */  isRaw={typeof _muteItem === "object" && "isRaw" in _muteItem && _muteItem.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_whisperItem" id={typeof _whisperItem === "object" && "id" in _whisperItem ? _whisperItem?.id : undefined} value={typeof _whisperItem === "object" && "value" in _whisperItem ? _whisperItem?.value : _whisperItem} /* default: ID0 */  isRaw={typeof _whisperItem === "object" && "isRaw" in _whisperItem && _whisperItem.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_normalItem" id={typeof _normalItem === "object" && "id" in _normalItem ? _normalItem?.id : undefined} value={typeof _normalItem === "object" && "value" in _normalItem ? _normalItem?.value : _normalItem} /* default: ID0 */  isRaw={typeof _normalItem === "object" && "isRaw" in _normalItem && _normalItem.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_shoutItem" id={typeof _shoutItem === "object" && "id" in _shoutItem ? _shoutItem?.id : undefined} value={typeof _shoutItem === "object" && "value" in _shoutItem ? _shoutItem?.value : _shoutItem} /* default: ID0 */  isRaw={typeof _shoutItem === "object" && "isRaw" in _shoutItem && _shoutItem.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="_broadcastItem" id={typeof _broadcastItem === "object" && "id" in _broadcastItem ? _broadcastItem?.id : undefined} value={typeof _broadcastItem === "object" && "value" in _broadcastItem ? _broadcastItem?.value : _broadcastItem} /* default: ID0 */  isRaw={typeof _broadcastItem === "object" && "isRaw" in _broadcastItem && _broadcastItem.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.VoiceModeSync]`} name="_voiceMode" id={typeof _voiceMode === "object" && "id" in _voiceMode ? _voiceMode?.id : undefined} value={typeof _voiceMode === "object" && "value" in _voiceMode ? _voiceMode?.value : _voiceMode} /* default: ID0 */  isRaw={typeof _voiceMode === "object" && "isRaw" in _voiceMode && _voiceMode.isRaw ? true : undefined} />
        </Component>
      );
    };
    