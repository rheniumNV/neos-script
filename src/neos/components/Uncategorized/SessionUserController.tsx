import { member, Member, Component } from "../../core";
    
    export interface SessionUserControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_name?: member<any>;
_slider?: member<any>;
_mute?: member<any>;
_jump?: member<any>;
_respawn?: member<any>;
_silence?: member<any>;
_kick?: member<any>;
_ban?: member<any>;
    }
    
    export function SessionUserController(props: SessionUserControllerInput){
      const { id, persistentId, updateOrder, Enabled,
_name,
_slider,
_mute,
_jump,
_respawn,
_silence,
_kick,
_ban, } = props;
    
      return (
        <Component type="FrooxEngine.SessionUserController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_name" id={typeof _name === "object" && "id" in _name ? _name?.id : undefined} value={typeof _name === "object" && "value" in _name ? _name?.value : _name} /* default: ID0 */  isRaw={typeof _name === "object" && "isRaw" in _name && _name.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Slider\`1[System.Single]]`} name="_slider" id={typeof _slider === "object" && "id" in _slider ? _slider?.id : undefined} value={typeof _slider === "object" && "value" in _slider ? _slider?.value : _slider} /* default: ID0 */  isRaw={typeof _slider === "object" && "isRaw" in _slider && _slider.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_mute" id={typeof _mute === "object" && "id" in _mute ? _mute?.id : undefined} value={typeof _mute === "object" && "value" in _mute ? _mute?.value : _mute} /* default: ID0 */  isRaw={typeof _mute === "object" && "isRaw" in _mute && _mute.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_jump" id={typeof _jump === "object" && "id" in _jump ? _jump?.id : undefined} value={typeof _jump === "object" && "value" in _jump ? _jump?.value : _jump} /* default: ID0 */  isRaw={typeof _jump === "object" && "isRaw" in _jump && _jump.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_respawn" id={typeof _respawn === "object" && "id" in _respawn ? _respawn?.id : undefined} value={typeof _respawn === "object" && "value" in _respawn ? _respawn?.value : _respawn} /* default: ID0 */  isRaw={typeof _respawn === "object" && "isRaw" in _respawn && _respawn.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_silence" id={typeof _silence === "object" && "id" in _silence ? _silence?.id : undefined} value={typeof _silence === "object" && "value" in _silence ? _silence?.value : _silence} /* default: ID0 */  isRaw={typeof _silence === "object" && "isRaw" in _silence && _silence.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_kick" id={typeof _kick === "object" && "id" in _kick ? _kick?.id : undefined} value={typeof _kick === "object" && "value" in _kick ? _kick?.value : _kick} /* default: ID0 */  isRaw={typeof _kick === "object" && "isRaw" in _kick && _kick.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_ban" id={typeof _ban === "object" && "id" in _ban ? _ban?.id : undefined} value={typeof _ban === "object" && "value" in _ban ? _ban?.value : _ban} /* default: ID0 */  isRaw={typeof _ban === "object" && "isRaw" in _ban && _ban.isRaw ? true : undefined} />
        </Component>
      );
    };
    