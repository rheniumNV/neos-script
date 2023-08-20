import { member, Member, Component } from "../../../core";
    
    export interface DelayNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Impulse?: member<any>;
OnTrigger?: member<any>;
Delay?: member<any>;
    }
    
    export function DelayNode(props: DelayNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Impulse,
OnTrigger,
Delay, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.DelayNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Impulse" id={typeof Impulse === "object" && "id" in Impulse ? Impulse?.id : undefined} value={typeof Impulse === "object" && "value" in Impulse ? Impulse?.value : Impulse} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Impulse === "object" && "isRaw" in Impulse && Impulse.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnTrigger" id={typeof OnTrigger === "object" && "id" in OnTrigger ? OnTrigger?.id : undefined} value={typeof OnTrigger === "object" && "value" in OnTrigger ? OnTrigger?.value : OnTrigger} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnTrigger === "object" && "isRaw" in OnTrigger && OnTrigger.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Delay" id={typeof Delay === "object" && "id" in Delay ? Delay?.id : undefined} value={typeof Delay === "object" && "value" in Delay ? Delay?.value : Delay} /* default: ID0 */  isRaw={typeof Delay === "object" && "isRaw" in Delay && Delay.isRaw ? true : undefined} />
        </Component>
      );
    };
    