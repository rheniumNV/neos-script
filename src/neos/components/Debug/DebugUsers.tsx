import { member, Member, Component } from "../../core";
    
    export interface DebugUsersInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
text?: member<any>;
    }
    
    export function DebugUsers(props: DebugUsersInput){
      const { id, persistentId, updateOrder, Enabled,
text, } = props;
    
      return (
        <Component type="FrooxEngine.DebugUsers" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.Sync\`1[System.String]]`} name="text" id={typeof text === "object" && "id" in text ? text?.id : undefined} value={typeof text === "object" && "value" in text ? text?.value : text} /* default: ID0 */  />
        </Component>
      );
    };
    