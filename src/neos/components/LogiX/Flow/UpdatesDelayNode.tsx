import { member, Member, Component } from "../../../core";
    
    export interface UpdatesDelayNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Impulse?: member<any>;
OnTrigger?: member<any>;
Updates?: member<any>;
    }
    
    export function UpdatesDelayNode(props: UpdatesDelayNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Impulse,
OnTrigger,
Updates, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.UpdatesDelayNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Impulse" id={typeof Impulse === "object" && "id" in Impulse ? Impulse?.id : undefined} value={typeof Impulse === "object" && "value" in Impulse ? Impulse?.value : Impulse} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnTrigger" id={typeof OnTrigger === "object" && "id" in OnTrigger ? OnTrigger?.id : undefined} value={typeof OnTrigger === "object" && "value" in OnTrigger ? OnTrigger?.value : OnTrigger} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Updates" id={typeof Updates === "object" && "id" in Updates ? Updates?.id : undefined} value={typeof Updates === "object" && "value" in Updates ? Updates?.value : Updates} /* default: ID0 */  />
        </Component>
      );
    };
    