import { member, Member, Component } from "../../core";
    
    export interface UserInterfaceEditModeSyncInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetUser?: member<any>;
EditModeActive?: member<boolean>;
    }
    
    export function UserInterfaceEditModeSync(props: UserInterfaceEditModeSyncInput){
      const { id, persistentId, updateOrder, Enabled,
TargetUser,
EditModeActive, } = props;
    
      return (
        <Component type="FrooxEngine.UserInterfaceEditModeSync" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.UserRef`} name="TargetUser" id={typeof TargetUser === "object" && "id" in TargetUser ? TargetUser?.id : undefined} value={typeof TargetUser === "object" && "value" in TargetUser ? TargetUser?.value : TargetUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EditModeActive" id={typeof EditModeActive === "object" && "id" in EditModeActive ? EditModeActive?.id : undefined} value={typeof EditModeActive === "object" && "value" in EditModeActive ? EditModeActive?.value : EditModeActive} /* default: false */  />
        </Component>
      );
    };
    