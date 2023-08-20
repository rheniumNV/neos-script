import { member, Member, Component } from "../../core";
    
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="UserId" id={typeof UserId === "object" && "id" in UserId ? UserId?.id : undefined} value={typeof UserId === "object" && "value" in UserId ? UserId?.value : UserId} /* default: <i>null</i> */  isRaw={typeof UserId === "object" && "isRaw" in UserId && UserId.isRaw ? true : undefined} />
        </Component>
      );
    };
    