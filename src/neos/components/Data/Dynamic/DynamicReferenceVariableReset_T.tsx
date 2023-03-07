import { member, Member, Component } from "../../../core";
    
    export interface DynamicReferenceVariableReset_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
VariableName?: member<any>;
ResetOnLoad?: member<boolean>;
ResetOnDuplicate?: member<boolean>;
ResetOnPaste?: member<boolean>;
ResetTarget?: member<any>;
    }
    
    export function DynamicReferenceVariableReset_T(props: DynamicReferenceVariableReset_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
VariableName,
ResetOnLoad,
ResetOnDuplicate,
ResetOnPaste,
ResetTarget, } = props;
    
      return (
        <Component type={`FrooxEngine.DynamicReferenceVariableReset\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="VariableName" id={typeof VariableName === "object" && "id" in VariableName ? VariableName?.id : undefined} value={typeof VariableName === "object" && "value" in VariableName ? VariableName?.value : VariableName} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ResetOnLoad" id={typeof ResetOnLoad === "object" && "id" in ResetOnLoad ? ResetOnLoad?.id : undefined} value={typeof ResetOnLoad === "object" && "value" in ResetOnLoad ? ResetOnLoad?.value : ResetOnLoad} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ResetOnDuplicate" id={typeof ResetOnDuplicate === "object" && "id" in ResetOnDuplicate ? ResetOnDuplicate?.id : undefined} value={typeof ResetOnDuplicate === "object" && "value" in ResetOnDuplicate ? ResetOnDuplicate?.value : ResetOnDuplicate} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ResetOnPaste" id={typeof ResetOnPaste === "object" && "id" in ResetOnPaste ? ResetOnPaste?.id : undefined} value={typeof ResetOnPaste === "object" && "value" in ResetOnPaste ? ResetOnPaste?.value : ResetOnPaste} /* default: null */  />
<Member type={`FrooxEngine.SyncRef\`1[${T}]`} name="ResetTarget" id={typeof ResetTarget === "object" && "id" in ResetTarget ? ResetTarget?.id : undefined} value={typeof ResetTarget === "object" && "value" in ResetTarget ? ResetTarget?.value : ResetTarget} /* default: null */  />
        </Component>
      );
    };
    