import { member, Member, Component } from "../../../core";
    
    export interface WriteOrCreateDynamicVariable_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Target?: member<any>;
VariableName?: member<any>;
Value?: member<any>;
CreateDirectlyOnTarget?: member<any>;
CreateNonPersistent?: member<any>;
OnCreated?: member<any>;
OnWritten?: member<any>;
OnNotFound?: member<any>;
    }
    
    export function WriteOrCreateDynamicVariable_T(props: WriteOrCreateDynamicVariable_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Target,
VariableName,
Value,
CreateDirectlyOnTarget,
CreateNonPersistent,
OnCreated,
OnWritten,
OnNotFound, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Data.WriteOrCreateDynamicVariable\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="VariableName" id={typeof VariableName === "object" && "id" in VariableName ? VariableName?.id : undefined} value={typeof VariableName === "object" && "value" in VariableName ? VariableName?.value : VariableName} /* default: null */  isRaw={typeof VariableName === "object" && "isRaw" in VariableName && VariableName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  isRaw={typeof Value === "object" && "isRaw" in Value && Value.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="CreateDirectlyOnTarget" id={typeof CreateDirectlyOnTarget === "object" && "id" in CreateDirectlyOnTarget ? CreateDirectlyOnTarget?.id : undefined} value={typeof CreateDirectlyOnTarget === "object" && "value" in CreateDirectlyOnTarget ? CreateDirectlyOnTarget?.value : CreateDirectlyOnTarget} /* default: null */  isRaw={typeof CreateDirectlyOnTarget === "object" && "isRaw" in CreateDirectlyOnTarget && CreateDirectlyOnTarget.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="CreateNonPersistent" id={typeof CreateNonPersistent === "object" && "id" in CreateNonPersistent ? CreateNonPersistent?.id : undefined} value={typeof CreateNonPersistent === "object" && "value" in CreateNonPersistent ? CreateNonPersistent?.value : CreateNonPersistent} /* default: null */  isRaw={typeof CreateNonPersistent === "object" && "isRaw" in CreateNonPersistent && CreateNonPersistent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnCreated" id={typeof OnCreated === "object" && "id" in OnCreated ? OnCreated?.id : undefined} value={typeof OnCreated === "object" && "value" in OnCreated ? OnCreated?.value : OnCreated} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnCreated === "object" && "isRaw" in OnCreated && OnCreated.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnWritten" id={typeof OnWritten === "object" && "id" in OnWritten ? OnWritten?.id : undefined} value={typeof OnWritten === "object" && "value" in OnWritten ? OnWritten?.value : OnWritten} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnWritten === "object" && "isRaw" in OnWritten && OnWritten.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnNotFound" id={typeof OnNotFound === "object" && "id" in OnNotFound ? OnNotFound?.id : undefined} value={typeof OnNotFound === "object" && "value" in OnNotFound ? OnNotFound?.value : OnNotFound} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnNotFound === "object" && "isRaw" in OnNotFound && OnNotFound.isRaw ? true : undefined} />
        </Component>
      );
    };
    