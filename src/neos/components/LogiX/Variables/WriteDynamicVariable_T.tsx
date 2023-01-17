import { member, Member, Component } from "../../../core";
    
    export interface WriteDynamicVariable_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Target?: member<any>;
VariableName?: member<any>;
Value?: member<any>;
OnSuccess?: member<any>;
OnNotFound?: member<any>;
    }
    
    export function WriteDynamicVariable_T(props: WriteDynamicVariable_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Target,
VariableName,
Value,
OnSuccess,
OnNotFound, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Data.WriteDynamicVariable\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="VariableName" id={typeof VariableName === "object" && "id" in VariableName ? VariableName?.id : undefined} value={typeof VariableName === "object" && "value" in VariableName ? VariableName?.value : VariableName} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSuccess" id={typeof OnSuccess === "object" && "id" in OnSuccess ? OnSuccess?.id : undefined} value={typeof OnSuccess === "object" && "value" in OnSuccess ? OnSuccess?.value : OnSuccess} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnNotFound" id={typeof OnNotFound === "object" && "id" in OnNotFound ? OnNotFound?.id : undefined} value={typeof OnNotFound === "object" && "value" in OnNotFound ? OnNotFound?.value : OnNotFound} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    