import { member, Member, Component } from "../../../core";
    
    export interface AvatarGroupInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
OriginalParent?: member<any>;
    }
    
    export function AvatarGroup(props: AvatarGroupInput){
      const { id, persistentId, updateOrder, Enabled,
OriginalParent, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarGroup" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="OriginalParent" id={typeof OriginalParent === "object" && "id" in OriginalParent ? OriginalParent?.id : undefined} value={typeof OriginalParent === "object" && "value" in OriginalParent ? OriginalParent?.value : OriginalParent} /* default: ID0 */  />
        </Component>
      );
    };
    