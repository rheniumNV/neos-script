import { member, Member, Component } from "../../core";
    
    export interface DestroyOnUserLeaveInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetUser?: member<any>;
    }
    
    export function DestroyOnUserLeave(props: DestroyOnUserLeaveInput){
      const { id, persistentId, updateOrder, Enabled,
TargetUser, } = props;
    
      return (
        <Component type="FrooxEngine.DestroyOnUserLeave" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.UserRef`} name="TargetUser" id={typeof TargetUser === "object" && "id" in TargetUser ? TargetUser?.id : undefined} value={typeof TargetUser === "object" && "value" in TargetUser ? TargetUser?.value : TargetUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof TargetUser === "object" && "isRaw" in TargetUser && TargetUser.isRaw ? true : undefined} />
        </Component>
      );
    };
    