import { member, Member, Component } from "../../../core";
    
    export interface DynamicValueVariableReset_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
VariableName?: member<any>;
ResetOnLoad?: member<boolean>;
ResetOnDuplicate?: member<boolean>;
ResetOnPaste?: member<boolean>;
ResetValue?: member<any>;
    }
    
    export function DynamicValueVariableReset_T(props: DynamicValueVariableReset_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
VariableName,
ResetOnLoad,
ResetOnDuplicate,
ResetOnPaste,
ResetValue, } = props;
    
      return (
        <Component type={`FrooxEngine.DynamicValueVariableReset\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="VariableName" id={typeof VariableName === "object" && "id" in VariableName ? VariableName?.id : undefined} value={typeof VariableName === "object" && "value" in VariableName ? VariableName?.value : VariableName} /* default: null */  isRaw={typeof VariableName === "object" && "isRaw" in VariableName && VariableName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ResetOnLoad" id={typeof ResetOnLoad === "object" && "id" in ResetOnLoad ? ResetOnLoad?.id : undefined} value={typeof ResetOnLoad === "object" && "value" in ResetOnLoad ? ResetOnLoad?.value : ResetOnLoad} /* default: null */  isRaw={typeof ResetOnLoad === "object" && "isRaw" in ResetOnLoad && ResetOnLoad.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ResetOnDuplicate" id={typeof ResetOnDuplicate === "object" && "id" in ResetOnDuplicate ? ResetOnDuplicate?.id : undefined} value={typeof ResetOnDuplicate === "object" && "value" in ResetOnDuplicate ? ResetOnDuplicate?.value : ResetOnDuplicate} /* default: null */  isRaw={typeof ResetOnDuplicate === "object" && "isRaw" in ResetOnDuplicate && ResetOnDuplicate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ResetOnPaste" id={typeof ResetOnPaste === "object" && "id" in ResetOnPaste ? ResetOnPaste?.id : undefined} value={typeof ResetOnPaste === "object" && "value" in ResetOnPaste ? ResetOnPaste?.value : ResetOnPaste} /* default: null */  isRaw={typeof ResetOnPaste === "object" && "isRaw" in ResetOnPaste && ResetOnPaste.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="ResetValue" id={typeof ResetValue === "object" && "id" in ResetValue ? ResetValue?.id : undefined} value={typeof ResetValue === "object" && "value" in ResetValue ? ResetValue?.value : ResetValue} /* default: null */  isRaw={typeof ResetValue === "object" && "isRaw" in ResetValue && ResetValue.isRaw ? true : undefined} />
        </Component>
      );
    };
    