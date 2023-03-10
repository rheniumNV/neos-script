import { member, Member, Component } from "../../../core";
    
    export interface WriteRefLatch_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
SetValue?: member<any>;
ResetValue?: member<any>;
OnSet?: member<any>;
OnReset?: member<any>;
Target?: member<any>;
    }
    
    export function WriteRefLatch_T(props: WriteRefLatch_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
SetValue,
ResetValue,
OnSet,
OnReset,
Target, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Actions.WriteRefLatch\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="SetValue" id={typeof SetValue === "object" && "id" in SetValue ? SetValue?.id : undefined} value={typeof SetValue === "object" && "value" in SetValue ? SetValue?.value : SetValue} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="ResetValue" id={typeof ResetValue === "object" && "id" in ResetValue ? ResetValue?.id : undefined} value={typeof ResetValue === "object" && "value" in ResetValue ? ResetValue?.value : ResetValue} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSet" id={typeof OnSet === "object" && "id" in OnSet ? OnSet?.id : undefined} value={typeof OnSet === "object" && "value" in OnSet ? OnSet?.value : OnSet} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnReset" id={typeof OnReset === "object" && "id" in OnReset ? OnReset?.id : undefined} value={typeof OnReset === "object" && "value" in OnReset ? OnReset?.value : OnReset} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.SyncRef\`1[${T}]]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  />
        </Component>
      );
    };
    