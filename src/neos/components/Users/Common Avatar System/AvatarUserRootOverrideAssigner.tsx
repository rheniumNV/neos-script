import { member, Member, Component } from "../../../core";
    
    export interface AvatarUserRootOverrideAssignerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Override?: member<any>;
Node?: member<any>;
_equippingSlot?: member<any>;
    }
    
    export function AvatarUserRootOverrideAssigner(props: AvatarUserRootOverrideAssignerInput){
      const { id, persistentId, updateOrder, Enabled,
Override,
Node,
_equippingSlot, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarUserRootOverrideAssigner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Override" id={typeof Override === "object" && "id" in Override ? Override?.id : undefined} value={typeof Override === "object" && "value" in Override ? Override?.value : Override} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CommonAvatar.AvatarUserRootOverrideAssigner+OverrideNode]`} name="Node" id={typeof Node === "object" && "id" in Node ? Node?.id : undefined} value={typeof Node === "object" && "value" in Node ? Node?.value : Node} /* default: Root */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarObjectSlot]`} name="_equippingSlot" id={typeof _equippingSlot === "object" && "id" in _equippingSlot ? _equippingSlot?.id : undefined} value={typeof _equippingSlot === "object" && "value" in _equippingSlot ? _equippingSlot?.value : _equippingSlot} /* default: ID0 */  />
        </Component>
      );
    };
    