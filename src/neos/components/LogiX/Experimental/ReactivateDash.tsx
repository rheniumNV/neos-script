import { member, Member, Component } from "../../../core";
    
    export interface ReactivateDashInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
OpenOnReactivate?: member<any>;
OnDone?: member<any>;
OnAlreadyActive?: member<any>;
    }
    
    export function ReactivateDash(props: ReactivateDashInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
OpenOnReactivate,
OnDone,
OnAlreadyActive, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Experimental.ReactivateDash" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="OpenOnReactivate" id={typeof OpenOnReactivate === "object" && "id" in OpenOnReactivate ? OpenOnReactivate?.id : undefined} value={typeof OpenOnReactivate === "object" && "value" in OpenOnReactivate ? OpenOnReactivate?.value : OpenOnReactivate} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDone" id={typeof OnDone === "object" && "id" in OnDone ? OnDone?.id : undefined} value={typeof OnDone === "object" && "value" in OnDone ? OnDone?.value : OnDone} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnAlreadyActive" id={typeof OnAlreadyActive === "object" && "id" in OnAlreadyActive ? OnAlreadyActive?.id : undefined} value={typeof OnAlreadyActive === "object" && "value" in OnAlreadyActive ? OnAlreadyActive?.value : OnAlreadyActive} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    