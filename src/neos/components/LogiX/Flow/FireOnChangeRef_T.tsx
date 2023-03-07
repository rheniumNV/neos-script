import { member, Member, Component } from "../../../core";
    
    export interface FireOnChangeRef_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Value?: member<any>;
Pulse?: member<any>;
OnlyForUser?: member<any>;
_lastReference?: member<any>;
    }
    
    export function FireOnChangeRef_T(props: FireOnChangeRef_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Value,
Pulse,
OnlyForUser,
_lastReference, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.ProgramFlow.FireOnChangeRef\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Pulse" id={typeof Pulse === "object" && "id" in Pulse ? Pulse?.id : undefined} value={typeof Pulse === "object" && "value" in Pulse ? Pulse?.value : Pulse} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="OnlyForUser" id={typeof OnlyForUser === "object" && "id" in OnlyForUser ? OnlyForUser?.id : undefined} value={typeof OnlyForUser === "object" && "value" in OnlyForUser ? OnlyForUser?.value : OnlyForUser} /* default: null */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Grabbable]`} name="_lastReference" id={typeof _lastReference === "object" && "id" in _lastReference ? _lastReference?.id : undefined} value={typeof _lastReference === "object" && "value" in _lastReference ? _lastReference?.value : _lastReference} /* default: ID0 */  />
        </Component>
      );
    };
    