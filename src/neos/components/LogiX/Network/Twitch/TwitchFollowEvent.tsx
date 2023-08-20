import { member, Member, Component } from "../../../../core";
    
    export interface TwitchFollowEventInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Interface?: member<any>;
OnFollow?: member<any>;
    }
    
    export function TwitchFollowEvent(props: TwitchFollowEventInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Interface,
OnFollow, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Twitch.TwitchFollowEvent" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.TwitchInterface]`} name="Interface" id={typeof Interface === "object" && "id" in Interface ? Interface?.id : undefined} value={typeof Interface === "object" && "value" in Interface ? Interface?.value : Interface} /* default: ID0 */  isRaw={typeof Interface === "object" && "isRaw" in Interface && Interface.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnFollow" id={typeof OnFollow === "object" && "id" in OnFollow ? OnFollow?.id : undefined} value={typeof OnFollow === "object" && "value" in OnFollow ? OnFollow?.value : OnFollow} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnFollow === "object" && "isRaw" in OnFollow && OnFollow.isRaw ? true : undefined} />
        </Component>
      );
    };
    