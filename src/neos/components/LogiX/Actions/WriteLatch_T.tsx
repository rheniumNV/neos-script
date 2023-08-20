import { member, Member, Component } from "../../../core";
    
    export interface WriteLatch_TInput {
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
    
    export function WriteLatch_T(props: WriteLatch_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
SetValue,
ResetValue,
OnSet,
OnReset,
Target, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.WriteLatch\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="SetValue" id={typeof SetValue === "object" && "id" in SetValue ? SetValue?.id : undefined} value={typeof SetValue === "object" && "value" in SetValue ? SetValue?.value : SetValue} /* default: null */  isRaw={typeof SetValue === "object" && "isRaw" in SetValue && SetValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="ResetValue" id={typeof ResetValue === "object" && "id" in ResetValue ? ResetValue?.id : undefined} value={typeof ResetValue === "object" && "value" in ResetValue ? ResetValue?.value : ResetValue} /* default: null */  isRaw={typeof ResetValue === "object" && "isRaw" in ResetValue && ResetValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSet" id={typeof OnSet === "object" && "id" in OnSet ? OnSet?.id : undefined} value={typeof OnSet === "object" && "value" in OnSet ? OnSet?.value : OnSet} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnSet === "object" && "isRaw" in OnSet && OnSet.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnReset" id={typeof OnReset === "object" && "id" in OnReset ? OnReset?.id : undefined} value={typeof OnReset === "object" && "value" in OnReset ? OnReset?.value : OnReset} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnReset === "object" && "isRaw" in OnReset && OnReset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IValue\`1[${T}]]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
        </Component>
      );
    };
    