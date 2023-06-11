import { member, Member, Component } from "../../../core";
    
    export interface SimpleAvatarProtectionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
User?: member<any>;
    }
    
    export function SimpleAvatarProtection(props: SimpleAvatarProtectionInput){
      const { id, persistentId, updateOrder, Enabled,
User, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.SimpleAvatarProtection" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CloudUserRef`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.CloudUserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof User === "object" && "isRaw" in User && User.isRaw ? true : undefined} />
        </Component>
      );
    };
    