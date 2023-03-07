import { member, Member, Component } from "../../../core";
    
    export interface DynamicReferenceVariable_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
VariableName?: member<any>;
Reference?: member<any>;
OverrideOnLink?: member<boolean>;
    }
    
    export function DynamicReferenceVariable_T(props: DynamicReferenceVariable_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
VariableName,
Reference,
OverrideOnLink, } = props;
    
      return (
        <Component type={`FrooxEngine.DynamicReferenceVariable\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="VariableName" id={typeof VariableName === "object" && "id" in VariableName ? VariableName?.id : undefined} value={typeof VariableName === "object" && "value" in VariableName ? VariableName?.value : VariableName} /* default: null */  />
<Member type={`FrooxEngine.SyncRef\`1[${T}]`} name="Reference" id={typeof Reference === "object" && "id" in Reference ? Reference?.id : undefined} value={typeof Reference === "object" && "value" in Reference ? Reference?.value : Reference} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideOnLink" id={typeof OverrideOnLink === "object" && "id" in OverrideOnLink ? OverrideOnLink?.id : undefined} value={typeof OverrideOnLink === "object" && "value" in OverrideOnLink ? OverrideOnLink?.value : OverrideOnLink} /* default: null */  />
        </Component>
      );
    };
    