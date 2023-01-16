import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="SyncingUser" id={typeof SyncingUser === "object" && "id" in SyncingUser ? SyncingUser?.id : undefined} value={typeof SyncingUser === "object" && "value" in SyncingUser ? SyncingUser?.value : SyncingUser} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SettingPath" id={typeof SettingPath === "object" && "id" in SettingPath ? SettingPath?.id : undefined} value={typeof SettingPath === "object" && "value" in SettingPath ? SettingPath?.value : SettingPath} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.SettingSync+LocalChange]`} name="LocalChangeAction" id={typeof LocalChangeAction === "object" && "id" in LocalChangeAction ? LocalChangeAction?.id : undefined} value={typeof LocalChangeAction === "object" && "value" in LocalChangeAction ? LocalChangeAction?.value : LocalChangeAction} /* default: null */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`} name="TargetField" id={typeof TargetField === "object" && "id" in TargetField ? TargetField?.id : undefined} value={typeof TargetField === "object" && "value" in TargetField ? TargetField?.value : TargetField} /* default: null */  />
        </Component>
      );
    };
    