import { member, Member, Component } from "../../../core";
    
    export interface WorldListManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
UpdatingUser?: member<any>;
WorldItemTemplate?: member<any>;
WorldItemType?: member<any>;
ShowOpenedWorlds?: member<boolean>;
ShowSessions?: member<boolean>;
ShowPublishedWorlds?: member<boolean>;
ShowLocallySavedWorlds?: member<boolean>;
MergeSessionsByWorldId?: member<boolean>;
IdleSortDelay?: member<number>;
InteractingSortDelay?: member<number>;
SearchTerm?: member<any>;
SubmittedTo?: member<any>;
OnlyFeatured?: member<boolean>;
OwnWorlds?: member<boolean>;
ByOwner?: member<any>;
OwnerType?: member<any>;
MinDate?: member<any>;
MaxDate?: member<any>;
MaxItems?: member<number>;
SkipItems?: member<number>;
EmptySessions?: member<any>;
OnlyHeadlessHosts?: member<boolean>;
MinimumTotalUsers?: member<number>;
MinimumTotalFriends?: member<number>;
MinSessionAccessLevel?: member<any>;
MaxSessionAccessLevel?: member<any>;
MinUptime?: member<number>;
MaxUptime?: member<number>;
ParentSessionId?: member<any>;
Visited?: member<any>;
SortProperties?: member<any>;
IsSearching?: member<boolean>;
HasMoreResults?: member<boolean>;
TotalResults?: member<number>;
FilteredResults?: member<number>;
    }
    
    export function WorldListManager(props: WorldListManagerInput){
      const { id, persistentId, updateOrder, Enabled,
UpdatingUser,
WorldItemTemplate,
WorldItemType,
ShowOpenedWorlds,
ShowSessions,
ShowPublishedWorlds,
ShowLocallySavedWorlds,
MergeSessionsByWorldId,
IdleSortDelay,
InteractingSortDelay,
SearchTerm,
SubmittedTo,
OnlyFeatured,
OwnWorlds,
ByOwner,
OwnerType,
MinDate,
MaxDate,
MaxItems,
SkipItems,
EmptySessions,
OnlyHeadlessHosts,
MinimumTotalUsers,
MinimumTotalFriends,
MinSessionAccessLevel,
MaxSessionAccessLevel,
MinUptime,
MaxUptime,
ParentSessionId,
Visited,
SortProperties,
IsSearching,
HasMoreResults,
TotalResults,
FilteredResults, } = props;
    
      return (
        <Component type="FrooxEngine.WorldListManager" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.UserRef`} name="UpdatingUser" id={typeof UpdatingUser === "object" && "id" in UpdatingUser ? UpdatingUser?.id : undefined} value={typeof UpdatingUser === "object" && "value" in UpdatingUser ? UpdatingUser?.value : UpdatingUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.WorldItem]`} name="WorldItemTemplate" id={typeof WorldItemTemplate === "object" && "id" in WorldItemTemplate ? WorldItemTemplate?.id : undefined} value={typeof WorldItemTemplate === "object" && "value" in WorldItemTemplate ? WorldItemTemplate?.value : WorldItemTemplate} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncType`} name="WorldItemType" id={typeof WorldItemType === "object" && "id" in WorldItemType ? WorldItemType?.id : undefined} value={typeof WorldItemType === "object" && "value" in WorldItemType ? WorldItemType?.value : WorldItemType} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowOpenedWorlds" id={typeof ShowOpenedWorlds === "object" && "id" in ShowOpenedWorlds ? ShowOpenedWorlds?.id : undefined} value={typeof ShowOpenedWorlds === "object" && "value" in ShowOpenedWorlds ? ShowOpenedWorlds?.value : ShowOpenedWorlds} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowSessions" id={typeof ShowSessions === "object" && "id" in ShowSessions ? ShowSessions?.id : undefined} value={typeof ShowSessions === "object" && "value" in ShowSessions ? ShowSessions?.value : ShowSessions} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowPublishedWorlds" id={typeof ShowPublishedWorlds === "object" && "id" in ShowPublishedWorlds ? ShowPublishedWorlds?.id : undefined} value={typeof ShowPublishedWorlds === "object" && "value" in ShowPublishedWorlds ? ShowPublishedWorlds?.value : ShowPublishedWorlds} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowLocallySavedWorlds" id={typeof ShowLocallySavedWorlds === "object" && "id" in ShowLocallySavedWorlds ? ShowLocallySavedWorlds?.id : undefined} value={typeof ShowLocallySavedWorlds === "object" && "value" in ShowLocallySavedWorlds ? ShowLocallySavedWorlds?.value : ShowLocallySavedWorlds} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="MergeSessionsByWorldId" id={typeof MergeSessionsByWorldId === "object" && "id" in MergeSessionsByWorldId ? MergeSessionsByWorldId?.id : undefined} value={typeof MergeSessionsByWorldId === "object" && "value" in MergeSessionsByWorldId ? MergeSessionsByWorldId?.value : MergeSessionsByWorldId} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="IdleSortDelay" id={typeof IdleSortDelay === "object" && "id" in IdleSortDelay ? IdleSortDelay?.id : undefined} value={typeof IdleSortDelay === "object" && "value" in IdleSortDelay ? IdleSortDelay?.value : IdleSortDelay} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InteractingSortDelay" id={typeof InteractingSortDelay === "object" && "id" in InteractingSortDelay ? InteractingSortDelay?.id : undefined} value={typeof InteractingSortDelay === "object" && "value" in InteractingSortDelay ? InteractingSortDelay?.value : InteractingSortDelay} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SearchTerm" id={typeof SearchTerm === "object" && "id" in SearchTerm ? SearchTerm?.id : undefined} value={typeof SearchTerm === "object" && "value" in SearchTerm ? SearchTerm?.value : SearchTerm} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SubmittedTo" id={typeof SubmittedTo === "object" && "id" in SubmittedTo ? SubmittedTo?.id : undefined} value={typeof SubmittedTo === "object" && "value" in SubmittedTo ? SubmittedTo?.value : SubmittedTo} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OnlyFeatured" id={typeof OnlyFeatured === "object" && "id" in OnlyFeatured ? OnlyFeatured?.id : undefined} value={typeof OnlyFeatured === "object" && "value" in OnlyFeatured ? OnlyFeatured?.value : OnlyFeatured} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OwnWorlds" id={typeof OwnWorlds === "object" && "id" in OwnWorlds ? OwnWorlds?.id : undefined} value={typeof OwnWorlds === "object" && "value" in OwnWorlds ? OwnWorlds?.value : OwnWorlds} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="ByOwner" id={typeof ByOwner === "object" && "id" in ByOwner ? ByOwner?.id : undefined} value={typeof ByOwner === "object" && "value" in ByOwner ? ByOwner?.value : ByOwner} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[CloudX.Shared.OwnerType]`} name="OwnerType" id={typeof OwnerType === "object" && "id" in OwnerType ? OwnerType?.id : undefined} value={typeof OwnerType === "object" && "value" in OwnerType ? OwnerType?.value : OwnerType} /* default: Machine */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.DateTime]]`} name="MinDate" id={typeof MinDate === "object" && "id" in MinDate ? MinDate?.id : undefined} value={typeof MinDate === "object" && "value" in MinDate ? MinDate?.value : MinDate} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.DateTime]]`} name="MaxDate" id={typeof MaxDate === "object" && "id" in MaxDate ? MaxDate?.id : undefined} value={typeof MaxDate === "object" && "value" in MaxDate ? MaxDate?.value : MaxDate} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MaxItems" id={typeof MaxItems === "object" && "id" in MaxItems ? MaxItems?.id : undefined} value={typeof MaxItems === "object" && "value" in MaxItems ? MaxItems?.value : MaxItems} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="SkipItems" id={typeof SkipItems === "object" && "id" in SkipItems ? SkipItems?.id : undefined} value={typeof SkipItems === "object" && "value" in SkipItems ? SkipItems?.value : SkipItems} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.WorldListManager+EmptySessionFilter]`} name="EmptySessions" id={typeof EmptySessions === "object" && "id" in EmptySessions ? EmptySessions?.id : undefined} value={typeof EmptySessions === "object" && "value" in EmptySessions ? EmptySessions?.value : EmptySessions} /* default: HideAll */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OnlyHeadlessHosts" id={typeof OnlyHeadlessHosts === "object" && "id" in OnlyHeadlessHosts ? OnlyHeadlessHosts?.id : undefined} value={typeof OnlyHeadlessHosts === "object" && "value" in OnlyHeadlessHosts ? OnlyHeadlessHosts?.value : OnlyHeadlessHosts} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MinimumTotalUsers" id={typeof MinimumTotalUsers === "object" && "id" in MinimumTotalUsers ? MinimumTotalUsers?.id : undefined} value={typeof MinimumTotalUsers === "object" && "value" in MinimumTotalUsers ? MinimumTotalUsers?.value : MinimumTotalUsers} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MinimumTotalFriends" id={typeof MinimumTotalFriends === "object" && "id" in MinimumTotalFriends ? MinimumTotalFriends?.id : undefined} value={typeof MinimumTotalFriends === "object" && "value" in MinimumTotalFriends ? MinimumTotalFriends?.value : MinimumTotalFriends} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[CloudX.Shared.SessionAccessLevel]`} name="MinSessionAccessLevel" id={typeof MinSessionAccessLevel === "object" && "id" in MinSessionAccessLevel ? MinSessionAccessLevel?.id : undefined} value={typeof MinSessionAccessLevel === "object" && "value" in MinSessionAccessLevel ? MinSessionAccessLevel?.value : MinSessionAccessLevel} /* default: Private */  />
<Member type={`FrooxEngine.Sync\`1[CloudX.Shared.SessionAccessLevel]`} name="MaxSessionAccessLevel" id={typeof MaxSessionAccessLevel === "object" && "id" in MaxSessionAccessLevel ? MaxSessionAccessLevel?.id : undefined} value={typeof MaxSessionAccessLevel === "object" && "value" in MaxSessionAccessLevel ? MaxSessionAccessLevel?.value : MaxSessionAccessLevel} /* default: Private */  />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="MinUptime" id={typeof MinUptime === "object" && "id" in MinUptime ? MinUptime?.id : undefined} value={typeof MinUptime === "object" && "value" in MinUptime ? MinUptime?.value : MinUptime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="MaxUptime" id={typeof MaxUptime === "object" && "id" in MaxUptime ? MaxUptime?.id : undefined} value={typeof MaxUptime === "object" && "value" in MaxUptime ? MaxUptime?.value : MaxUptime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="ParentSessionId" id={typeof ParentSessionId === "object" && "id" in ParentSessionId ? ParentSessionId?.id : undefined} value={typeof ParentSessionId === "object" && "value" in ParentSessionId ? ParentSessionId?.value : ParentSessionId} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Boolean]]`} name="Visited" id={typeof Visited === "object" && "id" in Visited ? Visited?.id : undefined} value={typeof Visited === "object" && "value" in Visited ? Visited?.value : Visited} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.WorldListManager+SortProperty]`} name="SortProperties" id={typeof SortProperties === "object" && "id" in SortProperties ? SortProperties?.id : undefined} value={typeof SortProperties === "object" && "value" in SortProperties ? SortProperties?.value : SortProperties} /* default: FrooxEngine.SyncList`1[FrooxEngine.WorldListManager+SortProperty] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsSearching" id={typeof IsSearching === "object" && "id" in IsSearching ? IsSearching?.id : undefined} value={typeof IsSearching === "object" && "value" in IsSearching ? IsSearching?.value : IsSearching} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HasMoreResults" id={typeof HasMoreResults === "object" && "id" in HasMoreResults ? HasMoreResults?.id : undefined} value={typeof HasMoreResults === "object" && "value" in HasMoreResults ? HasMoreResults?.value : HasMoreResults} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="TotalResults" id={typeof TotalResults === "object" && "id" in TotalResults ? TotalResults?.id : undefined} value={typeof TotalResults === "object" && "value" in TotalResults ? TotalResults?.value : TotalResults} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="FilteredResults" id={typeof FilteredResults === "object" && "id" in FilteredResults ? FilteredResults?.id : undefined} value={typeof FilteredResults === "object" && "value" in FilteredResults ? FilteredResults?.value : FilteredResults} /* default: 0 */  />
        </Component>
      );
    };
    