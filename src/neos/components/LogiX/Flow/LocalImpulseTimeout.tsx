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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Pulse" id={typeof Pulse === "object" && "id" in Pulse ? Pulse?.id : undefined} value={typeof Pulse === "object" && "value" in Pulse ? Pulse?.value : Pulse} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="TimeoutSeconds" id={typeof TimeoutSeconds === "object" && "id" in TimeoutSeconds ? TimeoutSeconds?.id : undefined} value={typeof TimeoutSeconds === "object" && "value" in TimeoutSeconds ? TimeoutSeconds?.value : TimeoutSeconds} /* default: ID0 */  />
        </Component>
      );
    };
    