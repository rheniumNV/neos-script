import { member, Member, Component } from "../../../core";
    
    export interface FireOnfalseInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Condition?: member<any>;
Pulse?: member<any>;
OnlyForUser?: member<any>;
_lastState?: member<boolean>;
    }
    
    export function FireOnfalse(props: FireOnfalseInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Condition,
Pulse,
OnlyForUser,
_lastState, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.FireOnfalse" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Condition" id={typeof Condition === "object" && "id" in Condition ? Condition?.id : undefined} value={typeof Condition === "object" && "value" in Condition ? Condition?.value : Condition} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Pulse" id={typeof Pulse === "object" && "id" in Pulse ? Pulse?.id : undefined} value={typeof Pulse === "object" && "value" in Pulse ? Pulse?.value : Pulse} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="OnlyForUser" id={typeof OnlyForUser === "object" && "id" in OnlyForUser ? OnlyForUser?.id : undefined} value={typeof OnlyForUser === "object" && "value" in OnlyForUser ? OnlyForUser?.value : OnlyForUser} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_lastState" id={typeof _lastState === "object" && "id" in _lastState ? _lastState?.id : undefined} value={typeof _lastState === "object" && "value" in _lastState ? _lastState?.value : _lastState} /* default: false */  />
        </Component>
      );
    };
    