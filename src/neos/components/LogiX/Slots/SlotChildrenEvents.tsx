import { member, Member, Component } from "../../../core";
    
    export interface SlotChildrenEventsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Instance?: member<any>;
OnUser?: member<any>;
OnChildAdded?: member<any>;
OnChildRemoved?: member<any>;
    }
    
    export function SlotChildrenEvents(props: SlotChildrenEventsInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Instance,
OnUser,
OnChildAdded,
OnChildRemoved, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.SlotChildrenEvents" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Instance" id={typeof Instance === "object" && "id" in Instance ? Instance?.id : undefined} value={typeof Instance === "object" && "value" in Instance ? Instance?.value : Instance} /* default: ID0 */  isRaw={typeof Instance === "object" && "isRaw" in Instance && Instance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="OnUser" id={typeof OnUser === "object" && "id" in OnUser ? OnUser?.id : undefined} value={typeof OnUser === "object" && "value" in OnUser ? OnUser?.value : OnUser} /* default: ID0 */  isRaw={typeof OnUser === "object" && "isRaw" in OnUser && OnUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnChildAdded" id={typeof OnChildAdded === "object" && "id" in OnChildAdded ? OnChildAdded?.id : undefined} value={typeof OnChildAdded === "object" && "value" in OnChildAdded ? OnChildAdded?.value : OnChildAdded} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnChildAdded === "object" && "isRaw" in OnChildAdded && OnChildAdded.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnChildRemoved" id={typeof OnChildRemoved === "object" && "id" in OnChildRemoved ? OnChildRemoved?.id : undefined} value={typeof OnChildRemoved === "object" && "value" in OnChildRemoved ? OnChildRemoved?.value : OnChildRemoved} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnChildRemoved === "object" && "isRaw" in OnChildRemoved && OnChildRemoved.isRaw ? true : undefined} />
        </Component>
      );
    };
    