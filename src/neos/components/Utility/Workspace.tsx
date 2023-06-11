import { member, Member, Component } from "../../core";
    
    export interface WorkspaceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
User?: member<any>;
OverrideOwnerId?: member<any>;
WorkspacePath?: member<any>;
InitializeWorkspace?: member<any>;
ReadOnly?: member<boolean>;
AutosaveDelay?: member<number>;
SuspendUpdates?: member<boolean>;
_unsavedChanges?: member<boolean>;
    }
    
    export function Workspace(props: WorkspaceInput){
      const { id, persistentId, updateOrder, Enabled,
User,
OverrideOwnerId,
WorkspacePath,
InitializeWorkspace,
ReadOnly,
AutosaveDelay,
SuspendUpdates,
_unsavedChanges, } = props;
    
      return (
        <Component type="FrooxEngine.Workspace" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.UserRef`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof User === "object" && "isRaw" in User && User.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="OverrideOwnerId" id={typeof OverrideOwnerId === "object" && "id" in OverrideOwnerId ? OverrideOwnerId?.id : undefined} value={typeof OverrideOwnerId === "object" && "value" in OverrideOwnerId ? OverrideOwnerId?.value : OverrideOwnerId} /* default: <i>null</i> */  isRaw={typeof OverrideOwnerId === "object" && "isRaw" in OverrideOwnerId && OverrideOwnerId.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="WorkspacePath" id={typeof WorkspacePath === "object" && "id" in WorkspacePath ? WorkspacePath?.id : undefined} value={typeof WorkspacePath === "object" && "value" in WorkspacePath ? WorkspacePath?.value : WorkspacePath} /* default: <i>null</i> */  isRaw={typeof WorkspacePath === "object" && "isRaw" in WorkspacePath && WorkspacePath.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.Slot]]`} name="InitializeWorkspace" id={typeof InitializeWorkspace === "object" && "id" in InitializeWorkspace ? InitializeWorkspace?.id : undefined} value={typeof InitializeWorkspace === "object" && "value" in InitializeWorkspace ? InitializeWorkspace?.value : InitializeWorkspace} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof InitializeWorkspace === "object" && "isRaw" in InitializeWorkspace && InitializeWorkspace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ReadOnly" id={typeof ReadOnly === "object" && "id" in ReadOnly ? ReadOnly?.id : undefined} value={typeof ReadOnly === "object" && "value" in ReadOnly ? ReadOnly?.value : ReadOnly} /* default: false */  isRaw={typeof ReadOnly === "object" && "isRaw" in ReadOnly && ReadOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AutosaveDelay" id={typeof AutosaveDelay === "object" && "id" in AutosaveDelay ? AutosaveDelay?.id : undefined} value={typeof AutosaveDelay === "object" && "value" in AutosaveDelay ? AutosaveDelay?.value : AutosaveDelay} /* default: 0 */  isRaw={typeof AutosaveDelay === "object" && "isRaw" in AutosaveDelay && AutosaveDelay.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SuspendUpdates" id={typeof SuspendUpdates === "object" && "id" in SuspendUpdates ? SuspendUpdates?.id : undefined} value={typeof SuspendUpdates === "object" && "value" in SuspendUpdates ? SuspendUpdates?.value : SuspendUpdates} /* default: false */  isRaw={typeof SuspendUpdates === "object" && "isRaw" in SuspendUpdates && SuspendUpdates.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_unsavedChanges-ID" id={typeof _unsavedChanges === "object" && "id" in _unsavedChanges ? _unsavedChanges?.id : undefined} value={typeof _unsavedChanges === "object" && "value" in _unsavedChanges ? _unsavedChanges?.value : _unsavedChanges} /* default: false */ readOnly isRaw={typeof _unsavedChanges === "object" && "isRaw" in _unsavedChanges && _unsavedChanges.isRaw ? true : undefined} />
        </Component>
      );
    };
    