import { member, Member, Component } from "../../core";
    
    export interface SessionInfoSourceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SessionId?: member<any>;
IsOpen?: member<boolean>;
LastUpdated?: member<any>;
Name?: member<any>;
Description?: member<any>;
Tags?: member<any>;
CorrespondingRecordId?: member<any>;
CorrespondingOwnerId?: member<any>;
HostUserId?: member<any>;
HostUsername?: member<any>;
SanitizedHostUsername?: member<any>;
NeosVersion?: member<any>;
HeadlessHost?: member<boolean>;
SessionURLs?: member<any>;
Thumbnail?: member<any>;
JoinedUsers?: member<number>;
ActiveUsers?: member<number>;
TotalJoinedUsers?: member<number>;
TotalActiveUsers?: member<number>;
MaximumUsers?: member<number>;
MobileFriendly?: member<boolean>;
AccessLevel?: member<any>;
IsOnLAN?: member<boolean>;
    }
    
    export function SessionInfoSource(props: SessionInfoSourceInput){
      const { id, persistentId, updateOrder, Enabled,
SessionId,
IsOpen,
LastUpdated,
Name,
Description,
Tags,
CorrespondingRecordId,
CorrespondingOwnerId,
HostUserId,
HostUsername,
SanitizedHostUsername,
NeosVersion,
HeadlessHost,
SessionURLs,
Thumbnail,
JoinedUsers,
ActiveUsers,
TotalJoinedUsers,
TotalActiveUsers,
MaximumUsers,
MobileFriendly,
AccessLevel,
IsOnLAN, } = props;
    
      return (
        <Component type="FrooxEngine.SessionInfoSource" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SessionId" id={typeof SessionId === "object" && "id" in SessionId ? SessionId?.id : undefined} value={typeof SessionId === "object" && "value" in SessionId ? SessionId?.value : SessionId} /* default: <i>null</i> */  isRaw={typeof SessionId === "object" && "isRaw" in SessionId && SessionId.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsOpen" id={typeof IsOpen === "object" && "id" in IsOpen ? IsOpen?.id : undefined} value={typeof IsOpen === "object" && "value" in IsOpen ? IsOpen?.value : IsOpen} /* default: false */  isRaw={typeof IsOpen === "object" && "isRaw" in IsOpen && IsOpen.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.DateTime]`} name="LastUpdated" id={typeof LastUpdated === "object" && "id" in LastUpdated ? LastUpdated?.id : undefined} value={typeof LastUpdated === "object" && "value" in LastUpdated ? LastUpdated?.value : LastUpdated} /* default: 1/1/0001 12:00:00 AM */  isRaw={typeof LastUpdated === "object" && "isRaw" in LastUpdated && LastUpdated.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Name" id={typeof Name === "object" && "id" in Name ? Name?.id : undefined} value={typeof Name === "object" && "value" in Name ? Name?.value : Name} /* default: <i>null</i> */  isRaw={typeof Name === "object" && "isRaw" in Name && Name.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Description" id={typeof Description === "object" && "id" in Description ? Description?.id : undefined} value={typeof Description === "object" && "value" in Description ? Description?.value : Description} /* default: <i>null</i> */  isRaw={typeof Description === "object" && "isRaw" in Description && Description.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncFieldList\`1[System.String]`} name="Tags" id={typeof Tags === "object" && "id" in Tags ? Tags?.id : undefined} value={typeof Tags === "object" && "value" in Tags ? Tags?.value : Tags} /* default: FrooxEngine.SyncFieldList`1[System.String] */  isRaw={typeof Tags === "object" && "isRaw" in Tags && Tags.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="CorrespondingRecordId" id={typeof CorrespondingRecordId === "object" && "id" in CorrespondingRecordId ? CorrespondingRecordId?.id : undefined} value={typeof CorrespondingRecordId === "object" && "value" in CorrespondingRecordId ? CorrespondingRecordId?.value : CorrespondingRecordId} /* default: <i>null</i> */  isRaw={typeof CorrespondingRecordId === "object" && "isRaw" in CorrespondingRecordId && CorrespondingRecordId.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="CorrespondingOwnerId" id={typeof CorrespondingOwnerId === "object" && "id" in CorrespondingOwnerId ? CorrespondingOwnerId?.id : undefined} value={typeof CorrespondingOwnerId === "object" && "value" in CorrespondingOwnerId ? CorrespondingOwnerId?.value : CorrespondingOwnerId} /* default: <i>null</i> */  isRaw={typeof CorrespondingOwnerId === "object" && "isRaw" in CorrespondingOwnerId && CorrespondingOwnerId.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="HostUserId" id={typeof HostUserId === "object" && "id" in HostUserId ? HostUserId?.id : undefined} value={typeof HostUserId === "object" && "value" in HostUserId ? HostUserId?.value : HostUserId} /* default: <i>null</i> */  isRaw={typeof HostUserId === "object" && "isRaw" in HostUserId && HostUserId.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="HostUsername" id={typeof HostUsername === "object" && "id" in HostUsername ? HostUsername?.id : undefined} value={typeof HostUsername === "object" && "value" in HostUsername ? HostUsername?.value : HostUsername} /* default: <i>null</i> */  isRaw={typeof HostUsername === "object" && "isRaw" in HostUsername && HostUsername.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SanitizedHostUsername" id={typeof SanitizedHostUsername === "object" && "id" in SanitizedHostUsername ? SanitizedHostUsername?.id : undefined} value={typeof SanitizedHostUsername === "object" && "value" in SanitizedHostUsername ? SanitizedHostUsername?.value : SanitizedHostUsername} /* default: <i>null</i> */  isRaw={typeof SanitizedHostUsername === "object" && "isRaw" in SanitizedHostUsername && SanitizedHostUsername.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="NeosVersion" id={typeof NeosVersion === "object" && "id" in NeosVersion ? NeosVersion?.id : undefined} value={typeof NeosVersion === "object" && "value" in NeosVersion ? NeosVersion?.value : NeosVersion} /* default: <i>null</i> */  isRaw={typeof NeosVersion === "object" && "isRaw" in NeosVersion && NeosVersion.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HeadlessHost" id={typeof HeadlessHost === "object" && "id" in HeadlessHost ? HeadlessHost?.id : undefined} value={typeof HeadlessHost === "object" && "value" in HeadlessHost ? HeadlessHost?.value : HeadlessHost} /* default: false */  isRaw={typeof HeadlessHost === "object" && "isRaw" in HeadlessHost && HeadlessHost.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncFieldList\`1[System.String]`} name="SessionURLs" id={typeof SessionURLs === "object" && "id" in SessionURLs ? SessionURLs?.id : undefined} value={typeof SessionURLs === "object" && "value" in SessionURLs ? SessionURLs?.value : SessionURLs} /* default: FrooxEngine.SyncFieldList`1[System.String] */  isRaw={typeof SessionURLs === "object" && "isRaw" in SessionURLs && SessionURLs.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Thumbnail" id={typeof Thumbnail === "object" && "id" in Thumbnail ? Thumbnail?.id : undefined} value={typeof Thumbnail === "object" && "value" in Thumbnail ? Thumbnail?.value : Thumbnail} /* default: <i>null</i> */  isRaw={typeof Thumbnail === "object" && "isRaw" in Thumbnail && Thumbnail.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="JoinedUsers" id={typeof JoinedUsers === "object" && "id" in JoinedUsers ? JoinedUsers?.id : undefined} value={typeof JoinedUsers === "object" && "value" in JoinedUsers ? JoinedUsers?.value : JoinedUsers} /* default: 0 */  isRaw={typeof JoinedUsers === "object" && "isRaw" in JoinedUsers && JoinedUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="ActiveUsers" id={typeof ActiveUsers === "object" && "id" in ActiveUsers ? ActiveUsers?.id : undefined} value={typeof ActiveUsers === "object" && "value" in ActiveUsers ? ActiveUsers?.value : ActiveUsers} /* default: 0 */  isRaw={typeof ActiveUsers === "object" && "isRaw" in ActiveUsers && ActiveUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="TotalJoinedUsers" id={typeof TotalJoinedUsers === "object" && "id" in TotalJoinedUsers ? TotalJoinedUsers?.id : undefined} value={typeof TotalJoinedUsers === "object" && "value" in TotalJoinedUsers ? TotalJoinedUsers?.value : TotalJoinedUsers} /* default: 0 */  isRaw={typeof TotalJoinedUsers === "object" && "isRaw" in TotalJoinedUsers && TotalJoinedUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="TotalActiveUsers" id={typeof TotalActiveUsers === "object" && "id" in TotalActiveUsers ? TotalActiveUsers?.id : undefined} value={typeof TotalActiveUsers === "object" && "value" in TotalActiveUsers ? TotalActiveUsers?.value : TotalActiveUsers} /* default: 0 */  isRaw={typeof TotalActiveUsers === "object" && "isRaw" in TotalActiveUsers && TotalActiveUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MaximumUsers" id={typeof MaximumUsers === "object" && "id" in MaximumUsers ? MaximumUsers?.id : undefined} value={typeof MaximumUsers === "object" && "value" in MaximumUsers ? MaximumUsers?.value : MaximumUsers} /* default: 0 */  isRaw={typeof MaximumUsers === "object" && "isRaw" in MaximumUsers && MaximumUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="MobileFriendly" id={typeof MobileFriendly === "object" && "id" in MobileFriendly ? MobileFriendly?.id : undefined} value={typeof MobileFriendly === "object" && "value" in MobileFriendly ? MobileFriendly?.value : MobileFriendly} /* default: false */  isRaw={typeof MobileFriendly === "object" && "isRaw" in MobileFriendly && MobileFriendly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[CloudX.Shared.SessionAccessLevel]`} name="AccessLevel" id={typeof AccessLevel === "object" && "id" in AccessLevel ? AccessLevel?.id : undefined} value={typeof AccessLevel === "object" && "value" in AccessLevel ? AccessLevel?.value : AccessLevel} /* default: Private */  isRaw={typeof AccessLevel === "object" && "isRaw" in AccessLevel && AccessLevel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsOnLAN" id={typeof IsOnLAN === "object" && "id" in IsOnLAN ? IsOnLAN?.id : undefined} value={typeof IsOnLAN === "object" && "value" in IsOnLAN ? IsOnLAN?.value : IsOnLAN} /* default: false */  isRaw={typeof IsOnLAN === "object" && "isRaw" in IsOnLAN && IsOnLAN.isRaw ? true : undefined} />
        </Component>
      );
    };
    