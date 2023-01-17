import { member, Member, Component } from "../../../../core";
    
    export interface AvatarLiveIndicatorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
IsLive?: member<boolean>;
_activeUser?: member<any>;
    }
    
    export function AvatarLiveIndicator(props: AvatarLiveIndicatorInput){
      const { id, persistentId, updateOrder, Enabled,
IsLive,
_activeUser, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarLiveIndicator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsLive" id={typeof IsLive === "object" && "id" in IsLive ? IsLive?.id : undefined} value={typeof IsLive === "object" && "value" in IsLive ? IsLive?.value : IsLive} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="_activeUser" id={typeof _activeUser === "object" && "id" in _activeUser ? _activeUser?.id : undefined} value={typeof _activeUser === "object" && "value" in _activeUser ? _activeUser?.value : _activeUser} /* default: ID0 */  />
        </Component>
      );
    };
    