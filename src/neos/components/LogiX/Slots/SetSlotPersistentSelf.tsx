import { member, Member, Component } from "../../../core";
    
    export interface SetSlotPersistentSelfInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Instance?: member<any>;
Persistent?: member<any>;
OnDone?: member<any>;
    }
    
    export function SetSlotPersistentSelf(props: SetSlotPersistentSelfInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Instance,
Persistent,
OnDone, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.SetSlotPersistentSelf" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Instance" id={typeof Instance === "object" && "id" in Instance ? Instance?.id : undefined} value={typeof Instance === "object" && "value" in Instance ? Instance?.value : Instance} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Persistent" id={typeof Persistent === "object" && "id" in Persistent ? Persistent?.id : undefined} value={typeof Persistent === "object" && "value" in Persistent ? Persistent?.value : Persistent} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDone" id={typeof OnDone === "object" && "id" in OnDone ? OnDone?.id : undefined} value={typeof OnDone === "object" && "value" in OnDone ? OnDone?.value : OnDone} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    