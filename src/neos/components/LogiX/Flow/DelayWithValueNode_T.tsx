import { member, Member, Component } from "../../../core";
    
    export interface DelayWithValueNode_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Impulse?: member<any>;
OnTrigger?: member<any>;
Delay?: member<any>;
Value?: member<any>;
    }
    
    export function DelayWithValueNode_T(props: DelayWithValueNode_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Impulse,
OnTrigger,
Delay,
Value, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.ProgramFlow.DelayWithValueNode\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Impulse" id={typeof Impulse === "object" && "id" in Impulse ? Impulse?.id : undefined} value={typeof Impulse === "object" && "value" in Impulse ? Impulse?.value : Impulse} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnTrigger" id={typeof OnTrigger === "object" && "id" in OnTrigger ? OnTrigger?.id : undefined} value={typeof OnTrigger === "object" && "value" in OnTrigger ? OnTrigger?.value : OnTrigger} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Delay" id={typeof Delay === "object" && "id" in Delay ? Delay?.id : undefined} value={typeof Delay === "object" && "value" in Delay ? Delay?.value : Delay} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  />
        </Component>
      );
    };
    