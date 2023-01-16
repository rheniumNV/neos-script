import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface FriendLinkInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
UserId?: member<any>;
    }
    
    export function FriendLink(props: FriendLinkInput){
      const { id, persistentId, updateOrder, Enabled,
UserId, } = props;
    
      return (
        <Component type="FrooxEngine.FriendLink" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="UserId" id={typeof UserId === "object" && "id" in UserId ? UserId?.id : undefined} value={typeof UserId === "object" && "value" in UserId ? UserId?.value : UserId} /* default: <i>null</i> */  />
        </Component>
      );
    };
    