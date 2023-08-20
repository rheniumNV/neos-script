import { member, Member, Component } from "../../../core";
    
    export interface UpdatesDelayWithValueNode_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Impulse?: member<any>;
OnTrigger?: member<any>;
Updates?: member<any>;
Value?: member<any>;
    }
    
    export function UpdatesDelayWithValueNode_T(props: UpdatesDelayWithValueNode_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Impulse,
OnTrigger,
Updates,
Value, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.ProgramFlow.UpdatesDelayWithValueNode\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Impulse" id={typeof Impulse === "object" && "id" in Impulse ? Impulse?.id : undefined} value={typeof Impulse === "object" && "value" in Impulse ? Impulse?.value : Impulse} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Impulse === "object" && "isRaw" in Impulse && Impulse.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnTrigger" id={typeof OnTrigger === "object" && "id" in OnTrigger ? OnTrigger?.id : undefined} value={typeof OnTrigger === "object" && "value" in OnTrigger ? OnTrigger?.value : OnTrigger} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnTrigger === "object" && "isRaw" in OnTrigger && OnTrigger.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Updates" id={typeof Updates === "object" && "id" in Updates ? Updates?.id : undefined} value={typeof Updates === "object" && "value" in Updates ? Updates?.value : Updates} /* default: null */  isRaw={typeof Updates === "object" && "isRaw" in Updates && Updates.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  isRaw={typeof Value === "object" && "isRaw" in Value && Value.isRaw ? true : undefined} />
        </Component>
      );
    };
    