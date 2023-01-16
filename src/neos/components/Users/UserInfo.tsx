import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface UserInfoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Controllers?: member<any>;
Hands?: member<any>;
    }
    
    export function UserInfo(props: UserInfoInput){
      const { id, persistentId, updateOrder, Enabled,
Controllers,
Hands, } = props;
    
      return (
        <Component type="FrooxEngine.UserInfo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Slot]`} name="Controllers" id={typeof Controllers === "object" && "id" in Controllers ? Controllers?.id : undefined} value={typeof Controllers === "object" && "value" in Controllers ? Controllers?.value : Controllers} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Slot] */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Slot]`} name="Hands" id={typeof Hands === "object" && "id" in Hands ? Hands?.id : undefined} value={typeof Hands === "object" && "value" in Hands ? Hands?.value : Hands} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Slot] */  />
        </Component>
      );
    };
    