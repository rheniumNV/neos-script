import { member, Member, Component } from "../../../core";
    
    export interface FireOnChangeTypeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Value?: member<any>;
Pulse?: member<any>;
OnlyForUser?: member<any>;
_lastType?: member<any>;
    }
    
    export function FireOnChangeType(props: FireOnChangeTypeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Value,
Pulse,
OnlyForUser,
_lastType, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.FireOnChangeType" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Type]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: ID0 */  isRaw={typeof Value === "object" && "isRaw" in Value && Value.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Pulse" id={typeof Pulse === "object" && "id" in Pulse ? Pulse?.id : undefined} value={typeof Pulse === "object" && "value" in Pulse ? Pulse?.value : Pulse} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Pulse === "object" && "isRaw" in Pulse && Pulse.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="OnlyForUser" id={typeof OnlyForUser === "object" && "id" in OnlyForUser ? OnlyForUser?.id : undefined} value={typeof OnlyForUser === "object" && "value" in OnlyForUser ? OnlyForUser?.value : OnlyForUser} /* default: ID0 */  isRaw={typeof OnlyForUser === "object" && "isRaw" in OnlyForUser && OnlyForUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncType`} name="_lastType" id={typeof _lastType === "object" && "id" in _lastType ? _lastType?.id : undefined} value={typeof _lastType === "object" && "value" in _lastType ? _lastType?.value : _lastType} /* default: <i>null</i> */  isRaw={typeof _lastType === "object" && "isRaw" in _lastType && _lastType.isRaw ? true : undefined} />
        </Component>
      );
    };
    