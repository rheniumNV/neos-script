import { member, Member, Component } from "../../../core";
    
    export interface OnlineUsersCountInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
RegisteredOnlineUsers?: member<any>;
UsersInPublic?: member<any>;
NonHeadlessOnlineUsers?: member<any>;
TotalOnlineUsers?: member<any>;
VRUsers?: member<any>;
ScreenUsers?: member<any>;
HeadlessUsers?: member<any>;
MobileUsers?: member<any>;
    }
    
    export function OnlineUsersCount(props: OnlineUsersCountInput){
      const { id, persistentId, updateOrder, Enabled,
RegisteredOnlineUsers,
UsersInPublic,
NonHeadlessOnlineUsers,
TotalOnlineUsers,
VRUsers,
ScreenUsers,
HeadlessUsers,
MobileUsers, } = props;
    
      return (
        <Component type="FrooxEngine.OnlineUsersCount" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Nullable\`1[System.Int32]]`} name="RegisteredOnlineUsers" id={typeof RegisteredOnlineUsers === "object" && "id" in RegisteredOnlineUsers ? RegisteredOnlineUsers?.id : undefined} value={typeof RegisteredOnlineUsers === "object" && "value" in RegisteredOnlineUsers ? RegisteredOnlineUsers?.value : RegisteredOnlineUsers} /* default: FrooxEngine.RawOutput`1[System.Nullable`1[System.Int32]] */  isRaw={typeof RegisteredOnlineUsers === "object" && "isRaw" in RegisteredOnlineUsers && RegisteredOnlineUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Nullable\`1[System.Int32]]`} name="UsersInPublic" id={typeof UsersInPublic === "object" && "id" in UsersInPublic ? UsersInPublic?.id : undefined} value={typeof UsersInPublic === "object" && "value" in UsersInPublic ? UsersInPublic?.value : UsersInPublic} /* default: FrooxEngine.RawOutput`1[System.Nullable`1[System.Int32]] */  isRaw={typeof UsersInPublic === "object" && "isRaw" in UsersInPublic && UsersInPublic.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Nullable\`1[System.Int32]]`} name="NonHeadlessOnlineUsers" id={typeof NonHeadlessOnlineUsers === "object" && "id" in NonHeadlessOnlineUsers ? NonHeadlessOnlineUsers?.id : undefined} value={typeof NonHeadlessOnlineUsers === "object" && "value" in NonHeadlessOnlineUsers ? NonHeadlessOnlineUsers?.value : NonHeadlessOnlineUsers} /* default: FrooxEngine.RawOutput`1[System.Nullable`1[System.Int32]] */  isRaw={typeof NonHeadlessOnlineUsers === "object" && "isRaw" in NonHeadlessOnlineUsers && NonHeadlessOnlineUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Nullable\`1[System.Int32]]`} name="TotalOnlineUsers" id={typeof TotalOnlineUsers === "object" && "id" in TotalOnlineUsers ? TotalOnlineUsers?.id : undefined} value={typeof TotalOnlineUsers === "object" && "value" in TotalOnlineUsers ? TotalOnlineUsers?.value : TotalOnlineUsers} /* default: FrooxEngine.RawOutput`1[System.Nullable`1[System.Int32]] */  isRaw={typeof TotalOnlineUsers === "object" && "isRaw" in TotalOnlineUsers && TotalOnlineUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Nullable\`1[System.Int32]]`} name="VRUsers" id={typeof VRUsers === "object" && "id" in VRUsers ? VRUsers?.id : undefined} value={typeof VRUsers === "object" && "value" in VRUsers ? VRUsers?.value : VRUsers} /* default: FrooxEngine.RawOutput`1[System.Nullable`1[System.Int32]] */  isRaw={typeof VRUsers === "object" && "isRaw" in VRUsers && VRUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Nullable\`1[System.Int32]]`} name="ScreenUsers" id={typeof ScreenUsers === "object" && "id" in ScreenUsers ? ScreenUsers?.id : undefined} value={typeof ScreenUsers === "object" && "value" in ScreenUsers ? ScreenUsers?.value : ScreenUsers} /* default: FrooxEngine.RawOutput`1[System.Nullable`1[System.Int32]] */  isRaw={typeof ScreenUsers === "object" && "isRaw" in ScreenUsers && ScreenUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Nullable\`1[System.Int32]]`} name="HeadlessUsers" id={typeof HeadlessUsers === "object" && "id" in HeadlessUsers ? HeadlessUsers?.id : undefined} value={typeof HeadlessUsers === "object" && "value" in HeadlessUsers ? HeadlessUsers?.value : HeadlessUsers} /* default: FrooxEngine.RawOutput`1[System.Nullable`1[System.Int32]] */  isRaw={typeof HeadlessUsers === "object" && "isRaw" in HeadlessUsers && HeadlessUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Nullable\`1[System.Int32]]`} name="MobileUsers" id={typeof MobileUsers === "object" && "id" in MobileUsers ? MobileUsers?.id : undefined} value={typeof MobileUsers === "object" && "value" in MobileUsers ? MobileUsers?.value : MobileUsers} /* default: FrooxEngine.RawOutput`1[System.Nullable`1[System.Int32]] */  isRaw={typeof MobileUsers === "object" && "isRaw" in MobileUsers && MobileUsers.isRaw ? true : undefined} />
        </Component>
      );
    };
    