import { member, Member, Component } from "../../../core";
    
    export interface LocalImpulseTimeoutInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Pulse?: member<any>;
TimeoutSeconds?: member<any>;
    }
    
    export function LocalImpulseTimeout(props: LocalImpulseTimeoutInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Pulse,
TimeoutSeconds, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.LocalImpulseTimeout" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Pulse" id={typeof Pulse === "object" && "id" in Pulse ? Pulse?.id : undefined} value={typeof Pulse === "object" && "value" in Pulse ? Pulse?.value : Pulse} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Pulse === "object" && "isRaw" in Pulse && Pulse.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="TimeoutSeconds" id={typeof TimeoutSeconds === "object" && "id" in TimeoutSeconds ? TimeoutSeconds?.id : undefined} value={typeof TimeoutSeconds === "object" && "value" in TimeoutSeconds ? TimeoutSeconds?.value : TimeoutSeconds} /* default: ID0 */  isRaw={typeof TimeoutSeconds === "object" && "isRaw" in TimeoutSeconds && TimeoutSeconds.isRaw ? true : undefined} />
        </Component>
      );
    };
    