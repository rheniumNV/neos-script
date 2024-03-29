import { member, Member, Component } from "../../core";
    
    export interface SettingSync_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SyncingUser?: member<any>;
SettingPath?: member<any>;
LocalChangeAction?: member<any>;
TargetField?: member<any>;
    }
    
    export function SettingSync_T(props: SettingSync_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
SyncingUser,
SettingPath,
LocalChangeAction,
TargetField, } = props;
    
      return (
        <Component type={`FrooxEngine.SettingSync\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="SyncingUser" id={typeof SyncingUser === "object" && "id" in SyncingUser ? SyncingUser?.id : undefined} value={typeof SyncingUser === "object" && "value" in SyncingUser ? SyncingUser?.value : SyncingUser} /* default: null */  isRaw={typeof SyncingUser === "object" && "isRaw" in SyncingUser && SyncingUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SettingPath" id={typeof SettingPath === "object" && "id" in SettingPath ? SettingPath?.id : undefined} value={typeof SettingPath === "object" && "value" in SettingPath ? SettingPath?.value : SettingPath} /* default: null */  isRaw={typeof SettingPath === "object" && "isRaw" in SettingPath && SettingPath.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.SettingSync+LocalChange]`} name="LocalChangeAction" id={typeof LocalChangeAction === "object" && "id" in LocalChangeAction ? LocalChangeAction?.id : undefined} value={typeof LocalChangeAction === "object" && "value" in LocalChangeAction ? LocalChangeAction?.value : LocalChangeAction} /* default: null */  isRaw={typeof LocalChangeAction === "object" && "isRaw" in LocalChangeAction && LocalChangeAction.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`} name="TargetField" id={typeof TargetField === "object" && "id" in TargetField ? TargetField?.id : undefined} value={typeof TargetField === "object" && "value" in TargetField ? TargetField?.value : TargetField} /* default: null */  isRaw={typeof TargetField === "object" && "isRaw" in TargetField && TargetField.isRaw ? true : undefined} />
        </Component>
      );
    };
    