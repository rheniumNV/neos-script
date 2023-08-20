import { member, Member, Component } from "../../core";
    
    export interface FocusedWorldStatusInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
WorldName?: member<any>;
RawWorldName?: member<any>;
SessionId?: member<any>;
IsHost?: member<boolean>;
CanSave?: member<boolean>;
ShouldSave?: member<boolean>;
CanClose?: member<boolean>;
RoleName?: member<any>;
UserCount?: member<number>;
ActiveUserCount?: member<number>;
MaxUserCount?: member<number>;
AccessLevel?: member<any>;
HideFromListing?: member<boolean>;
AwayKickEnabled?: member<boolean>;
AwayKickMinutes?: member<number>;
UnsafeMode?: member<boolean>;
    }
    
    export function FocusedWorldStatus(props: FocusedWorldStatusInput){
      const { id, persistentId, updateOrder, Enabled,
WorldName,
RawWorldName,
SessionId,
IsHost,
CanSave,
ShouldSave,
CanClose,
RoleName,
UserCount,
ActiveUserCount,
MaxUserCount,
AccessLevel,
HideFromListing,
AwayKickEnabled,
AwayKickMinutes,
UnsafeMode, } = props;
    
      return (
        <Component type="FrooxEngine.FocusedWorldStatus" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="WorldName" id={typeof WorldName === "object" && "id" in WorldName ? WorldName?.id : undefined} value={typeof WorldName === "object" && "value" in WorldName ? WorldName?.value : WorldName} /* default: <i>null</i> */  isRaw={typeof WorldName === "object" && "isRaw" in WorldName && WorldName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="RawWorldName" id={typeof RawWorldName === "object" && "id" in RawWorldName ? RawWorldName?.id : undefined} value={typeof RawWorldName === "object" && "value" in RawWorldName ? RawWorldName?.value : RawWorldName} /* default: <i>null</i> */  isRaw={typeof RawWorldName === "object" && "isRaw" in RawWorldName && RawWorldName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SessionId" id={typeof SessionId === "object" && "id" in SessionId ? SessionId?.id : undefined} value={typeof SessionId === "object" && "value" in SessionId ? SessionId?.value : SessionId} /* default: <i>null</i> */  isRaw={typeof SessionId === "object" && "isRaw" in SessionId && SessionId.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsHost" id={typeof IsHost === "object" && "id" in IsHost ? IsHost?.id : undefined} value={typeof IsHost === "object" && "value" in IsHost ? IsHost?.value : IsHost} /* default: false */  isRaw={typeof IsHost === "object" && "isRaw" in IsHost && IsHost.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CanSave" id={typeof CanSave === "object" && "id" in CanSave ? CanSave?.id : undefined} value={typeof CanSave === "object" && "value" in CanSave ? CanSave?.value : CanSave} /* default: false */  isRaw={typeof CanSave === "object" && "isRaw" in CanSave && CanSave.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShouldSave" id={typeof ShouldSave === "object" && "id" in ShouldSave ? ShouldSave?.id : undefined} value={typeof ShouldSave === "object" && "value" in ShouldSave ? ShouldSave?.value : ShouldSave} /* default: false */  isRaw={typeof ShouldSave === "object" && "isRaw" in ShouldSave && ShouldSave.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CanClose" id={typeof CanClose === "object" && "id" in CanClose ? CanClose?.id : undefined} value={typeof CanClose === "object" && "value" in CanClose ? CanClose?.value : CanClose} /* default: false */  isRaw={typeof CanClose === "object" && "isRaw" in CanClose && CanClose.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="RoleName" id={typeof RoleName === "object" && "id" in RoleName ? RoleName?.id : undefined} value={typeof RoleName === "object" && "value" in RoleName ? RoleName?.value : RoleName} /* default: <i>null</i> */  isRaw={typeof RoleName === "object" && "isRaw" in RoleName && RoleName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="UserCount" id={typeof UserCount === "object" && "id" in UserCount ? UserCount?.id : undefined} value={typeof UserCount === "object" && "value" in UserCount ? UserCount?.value : UserCount} /* default: 0 */  isRaw={typeof UserCount === "object" && "isRaw" in UserCount && UserCount.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="ActiveUserCount" id={typeof ActiveUserCount === "object" && "id" in ActiveUserCount ? ActiveUserCount?.id : undefined} value={typeof ActiveUserCount === "object" && "value" in ActiveUserCount ? ActiveUserCount?.value : ActiveUserCount} /* default: 0 */  isRaw={typeof ActiveUserCount === "object" && "isRaw" in ActiveUserCount && ActiveUserCount.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MaxUserCount" id={typeof MaxUserCount === "object" && "id" in MaxUserCount ? MaxUserCount?.id : undefined} value={typeof MaxUserCount === "object" && "value" in MaxUserCount ? MaxUserCount?.value : MaxUserCount} /* default: 0 */  isRaw={typeof MaxUserCount === "object" && "isRaw" in MaxUserCount && MaxUserCount.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[CloudX.Shared.SessionAccessLevel]`} name="AccessLevel" id={typeof AccessLevel === "object" && "id" in AccessLevel ? AccessLevel?.id : undefined} value={typeof AccessLevel === "object" && "value" in AccessLevel ? AccessLevel?.value : AccessLevel} /* default: Private */  isRaw={typeof AccessLevel === "object" && "isRaw" in AccessLevel && AccessLevel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HideFromListing" id={typeof HideFromListing === "object" && "id" in HideFromListing ? HideFromListing?.id : undefined} value={typeof HideFromListing === "object" && "value" in HideFromListing ? HideFromListing?.value : HideFromListing} /* default: false */  isRaw={typeof HideFromListing === "object" && "isRaw" in HideFromListing && HideFromListing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AwayKickEnabled" id={typeof AwayKickEnabled === "object" && "id" in AwayKickEnabled ? AwayKickEnabled?.id : undefined} value={typeof AwayKickEnabled === "object" && "value" in AwayKickEnabled ? AwayKickEnabled?.value : AwayKickEnabled} /* default: false */  isRaw={typeof AwayKickEnabled === "object" && "isRaw" in AwayKickEnabled && AwayKickEnabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AwayKickMinutes" id={typeof AwayKickMinutes === "object" && "id" in AwayKickMinutes ? AwayKickMinutes?.id : undefined} value={typeof AwayKickMinutes === "object" && "value" in AwayKickMinutes ? AwayKickMinutes?.value : AwayKickMinutes} /* default: 0 */  isRaw={typeof AwayKickMinutes === "object" && "isRaw" in AwayKickMinutes && AwayKickMinutes.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UnsafeMode" id={typeof UnsafeMode === "object" && "id" in UnsafeMode ? UnsafeMode?.id : undefined} value={typeof UnsafeMode === "object" && "value" in UnsafeMode ? UnsafeMode?.value : UnsafeMode} /* default: false */  isRaw={typeof UnsafeMode === "object" && "isRaw" in UnsafeMode && UnsafeMode.isRaw ? true : undefined} />
        </Component>
      );
    };
    