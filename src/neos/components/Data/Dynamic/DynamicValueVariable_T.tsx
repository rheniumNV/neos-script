import { member, Member, Component } from "../../../core";
    
    export interface DynamicValueVariable_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
VariableName?: member<any>;
Value?: member<any>;
OverrideOnLink?: member<boolean>;
    }
    
    export function DynamicValueVariable_T(props: DynamicValueVariable_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
VariableName,
Value,
OverrideOnLink, } = props;
    
      return (
        <Component type={`FrooxEngine.DynamicValueVariable\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="VariableName" id={typeof VariableName === "object" && "id" in VariableName ? VariableName?.id : undefined} value={typeof VariableName === "object" && "value" in VariableName ? VariableName?.value : VariableName ?? ""} /* default: null */  isRaw={typeof VariableName === "object" && "isRaw" in VariableName && VariableName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  isRaw={typeof Value === "object" && "isRaw" in Value && Value.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideOnLink" id={typeof OverrideOnLink === "object" && "id" in OverrideOnLink ? OverrideOnLink?.id : undefined} value={typeof OverrideOnLink === "object" && "value" in OverrideOnLink ? OverrideOnLink?.value : OverrideOnLink ?? false} /* default: null */  isRaw={typeof OverrideOnLink === "object" && "isRaw" in OverrideOnLink && OverrideOnLink.isRaw ? true : undefined} />
        </Component>
      );
    };
    