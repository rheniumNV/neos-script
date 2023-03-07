import { member, Member, Component } from "../../core";
    
    export interface ScreenModeControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_dash?: member<any>;
_muteSound?: member<any>;
_unmuteSound?: member<any>;
_startTalkSound?: member<any>;
_stopTalkSound?: member<any>;
    }
    
    export function ScreenModeController(props: ScreenModeControllerInput){
      const { id, persistentId, updateOrder, Enabled,
_dash,
_muteSound,
_unmuteSound,
_startTalkSound,
_stopTalkSound, } = props;
    
      return (
        <Component type="FrooxEngine.ScreenModeController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UserspaceRadiantDash]`} name="_dash" id={typeof _dash === "object" && "id" in _dash ? _dash?.id : undefined} value={typeof _dash === "object" && "value" in _dash ? _dash?.value : _dash} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="_muteSound" id={typeof _muteSound === "object" && "id" in _muteSound ? _muteSound?.id : undefined} value={typeof _muteSound === "object" && "value" in _muteSound ? _muteSound?.value : _muteSound} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="_unmuteSound" id={typeof _unmuteSound === "object" && "id" in _unmuteSound ? _unmuteSound?.id : undefined} value={typeof _unmuteSound === "object" && "value" in _unmuteSound ? _unmuteSound?.value : _unmuteSound} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="_startTalkSound" id={typeof _startTalkSound === "object" && "id" in _startTalkSound ? _startTalkSound?.id : undefined} value={typeof _startTalkSound === "object" && "value" in _startTalkSound ? _startTalkSound?.value : _startTalkSound} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="_stopTalkSound" id={typeof _stopTalkSound === "object" && "id" in _stopTalkSound ? _stopTalkSound?.id : undefined} value={typeof _stopTalkSound === "object" && "value" in _stopTalkSound ? _stopTalkSound?.value : _stopTalkSound} /* default: ID0 */  />
        </Component>
      );
    };
    