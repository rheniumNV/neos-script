import { member, Member, Component } from "../../../core";
    
    export interface WriteCloudVariable_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Path?: member<any>;
VariableOwnerId?: member<any>;
Value?: member<any>;
OnWriteRequest?: member<any>;
OnWritten?: member<any>;
OnFail?: member<any>;
    }
    
    export function WriteCloudVariable_T(props: WriteCloudVariable_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Path,
VariableOwnerId,
Value,
OnWriteRequest,
OnWritten,
OnFail, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Data.WriteCloudVariable\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Path" id={typeof Path === "object" && "id" in Path ? Path?.id : undefined} value={typeof Path === "object" && "value" in Path ? Path?.value : Path} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="VariableOwnerId" id={typeof VariableOwnerId === "object" && "id" in VariableOwnerId ? VariableOwnerId?.id : undefined} value={typeof VariableOwnerId === "object" && "value" in VariableOwnerId ? VariableOwnerId?.value : VariableOwnerId} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnWriteRequest" id={typeof OnWriteRequest === "object" && "id" in OnWriteRequest ? OnWriteRequest?.id : undefined} value={typeof OnWriteRequest === "object" && "value" in OnWriteRequest ? OnWriteRequest?.value : OnWriteRequest} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnWritten" id={typeof OnWritten === "object" && "id" in OnWritten ? OnWritten?.id : undefined} value={typeof OnWritten === "object" && "value" in OnWritten ? OnWritten?.value : OnWritten} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnFail" id={typeof OnFail === "object" && "id" in OnFail ? OnFail?.id : undefined} value={typeof OnFail === "object" && "value" in OnFail ? OnFail?.value : OnFail} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    