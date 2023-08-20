import { member, Member, Component } from "../../../core";
    
    export interface EquipAvatarInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
User?: member<any>;
AvatarRoot?: member<any>;
DestroyOld?: member<any>;
OnDone?: member<any>;
    }
    
    export function EquipAvatar(props: EquipAvatarInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
User,
AvatarRoot,
DestroyOld,
OnDone, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Avatar.EquipAvatar" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  isRaw={typeof User === "object" && "isRaw" in User && User.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="AvatarRoot" id={typeof AvatarRoot === "object" && "id" in AvatarRoot ? AvatarRoot?.id : undefined} value={typeof AvatarRoot === "object" && "value" in AvatarRoot ? AvatarRoot?.value : AvatarRoot} /* default: ID0 */  isRaw={typeof AvatarRoot === "object" && "isRaw" in AvatarRoot && AvatarRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="DestroyOld" id={typeof DestroyOld === "object" && "id" in DestroyOld ? DestroyOld?.id : undefined} value={typeof DestroyOld === "object" && "value" in DestroyOld ? DestroyOld?.value : DestroyOld} /* default: ID0 */  isRaw={typeof DestroyOld === "object" && "isRaw" in DestroyOld && DestroyOld.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDone" id={typeof OnDone === "object" && "id" in OnDone ? OnDone?.id : undefined} value={typeof OnDone === "object" && "value" in OnDone ? OnDone?.value : OnDone} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnDone === "object" && "isRaw" in OnDone && OnDone.isRaw ? true : undefined} />
        </Component>
      );
    };
    