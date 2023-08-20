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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="OriginalParent" id={typeof OriginalParent === "object" && "id" in OriginalParent ? OriginalParent?.id : undefined} value={typeof OriginalParent === "object" && "value" in OriginalParent ? OriginalParent?.value : OriginalParent} /* default: ID0 */  isRaw={typeof OriginalParent === "object" && "isRaw" in OriginalParent && OriginalParent.isRaw ? true : undefined} />
        </Component>
      );
    };
    