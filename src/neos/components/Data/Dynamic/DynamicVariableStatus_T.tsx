import { member, Member, Component } from "../../../core";
    
    export interface DynamicVariableStatus_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
VariableName?: member<any>;
IsLinkedToSpace?: member<any>;
VariableExists?: member<any>;
    }
    
    export function DynamicVariableStatus_T(props: DynamicVariableStatus_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
VariableName,
IsLinkedToSpace,
VariableExists, } = props;
    
      return (
        <Component type={`FrooxEngine.DynamicVariableStatus\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="VariableName" id={typeof VariableName === "object" && "id" in VariableName ? VariableName?.id : undefined} value={typeof VariableName === "object" && "value" in VariableName ? VariableName?.value : VariableName} /* default: null */  isRaw={typeof VariableName === "object" && "isRaw" in VariableName && VariableName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="IsLinkedToSpace" id={typeof IsLinkedToSpace === "object" && "id" in IsLinkedToSpace ? IsLinkedToSpace?.id : undefined} value={typeof IsLinkedToSpace === "object" && "value" in IsLinkedToSpace ? IsLinkedToSpace?.value : IsLinkedToSpace} /* default: null */  isRaw={typeof IsLinkedToSpace === "object" && "isRaw" in IsLinkedToSpace && IsLinkedToSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="VariableExists" id={typeof VariableExists === "object" && "id" in VariableExists ? VariableExists?.id : undefined} value={typeof VariableExists === "object" && "value" in VariableExists ? VariableExists?.value : VariableExists} /* default: null */  isRaw={typeof VariableExists === "object" && "isRaw" in VariableExists && VariableExists.isRaw ? true : undefined} />
        </Component>
      );
    };
    