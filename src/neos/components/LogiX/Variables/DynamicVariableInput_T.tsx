import { member, Member, Component } from "../../../core";
    
    export interface DynamicVariableInput_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
_variableName?: member<any>;
    }
    
    export function DynamicVariableInput_T(props: DynamicVariableInput_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
_variableName, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Data.DynamicVariableInput\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_variableName" id={typeof _variableName === "object" && "id" in _variableName ? _variableName?.id : undefined} value={typeof _variableName === "object" && "value" in _variableName ? _variableName?.value : _variableName} /* default: <i>null</i> */  />
        </Component>
      );
    };
    