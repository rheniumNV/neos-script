import { member, Member, Component } from "../../core";
    
    export interface AvatarObjectPermissionsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Tags?: member<any>;
    }
    
    export function AvatarObjectPermissions(props: AvatarObjectPermissionsInput){
      const { id, persistentId, updateOrder, Enabled,
Tags, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarObjectPermissions" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TagFilter`} name="Tags" id={typeof Tags === "object" && "id" in Tags ? Tags?.id : undefined} value={typeof Tags === "object" && "value" in Tags ? Tags?.value : Tags} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.TagFilter,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof Tags === "object" && "isRaw" in Tags && Tags.isRaw ? true : undefined} />
        </Component>
      );
    };
    