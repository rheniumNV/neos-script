import { member, Member, Component } from "../../core";
    
    export interface TwitchInterfaceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetUser?: member<any>;
Channel?: member<any>;
Connected?: member<boolean>;
StreamLive?: member<boolean>;
ViewerCount?: member<number>;
FollowTimeoutSeconds?: member<number>;
    }
    
    export function TwitchInterface(props: TwitchInterfaceInput){
      const { id, persistentId, updateOrder, Enabled,
TargetUser,
Channel,
Connected,
StreamLive,
ViewerCount,
FollowTimeoutSeconds, } = props;
    
      return (
        <Component type="FrooxEngine.TwitchInterface" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.UserRef`} name="TargetUser" id={typeof TargetUser === "object" && "id" in TargetUser ? TargetUser?.id : undefined} value={typeof TargetUser === "object" && "value" in TargetUser ? TargetUser?.value : TargetUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof TargetUser === "object" && "isRaw" in TargetUser && TargetUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Channel" id={typeof Channel === "object" && "id" in Channel ? Channel?.id : undefined} value={typeof Channel === "object" && "value" in Channel ? Channel?.value : Channel} /* default: <i>null</i> */  isRaw={typeof Channel === "object" && "isRaw" in Channel && Channel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Connected" id={typeof Connected === "object" && "id" in Connected ? Connected?.id : undefined} value={typeof Connected === "object" && "value" in Connected ? Connected?.value : Connected} /* default: false */  isRaw={typeof Connected === "object" && "isRaw" in Connected && Connected.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="StreamLive" id={typeof StreamLive === "object" && "id" in StreamLive ? StreamLive?.id : undefined} value={typeof StreamLive === "object" && "value" in StreamLive ? StreamLive?.value : StreamLive} /* default: false */  isRaw={typeof StreamLive === "object" && "isRaw" in StreamLive && StreamLive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="ViewerCount" id={typeof ViewerCount === "object" && "id" in ViewerCount ? ViewerCount?.id : undefined} value={typeof ViewerCount === "object" && "value" in ViewerCount ? ViewerCount?.value : ViewerCount} /* default: 0 */  isRaw={typeof ViewerCount === "object" && "isRaw" in ViewerCount && ViewerCount.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FollowTimeoutSeconds" id={typeof FollowTimeoutSeconds === "object" && "id" in FollowTimeoutSeconds ? FollowTimeoutSeconds?.id : undefined} value={typeof FollowTimeoutSeconds === "object" && "value" in FollowTimeoutSeconds ? FollowTimeoutSeconds?.value : FollowTimeoutSeconds} /* default: 0 */  isRaw={typeof FollowTimeoutSeconds === "object" && "isRaw" in FollowTimeoutSeconds && FollowTimeoutSeconds.isRaw ? true : undefined} />
        </Component>
      );
    };
    