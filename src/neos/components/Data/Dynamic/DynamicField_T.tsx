import { member, Member, Component } from "../../../core";
    
    export interface DynamicField_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
VariableName?: member<any>;
TargetField?: member<any>;
OverrideOnLink?: member<boolean>;
    }
    
    export function DynamicField_T(props: DynamicField_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
VariableName,
TargetField,
OverrideOnLink, } = props;
    
      return (
        <Component type={`FrooxEngine.DynamicField\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="VariableName" id={typeof VariableName === "object" && "id" in VariableName ? VariableName?.id : undefined} value={typeof VariableName === "object" && "value" in VariableName ? VariableName?.value : VariableName ?? ""} /* default: null */  isRaw={typeof VariableName === "object" && "isRaw" in VariableName && VariableName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`} name="TargetField" id={typeof TargetField === "object" && "id" in TargetField ? TargetField?.id : undefined} value={typeof TargetField === "object" && "value" in TargetField ? TargetField?.value : TargetField ?? null} /* default: null */  isRaw={typeof TargetField === "object" && "isRaw" in TargetField && TargetField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OverrideOnLink" id={typeof OverrideOnLink === "object" && "id" in OverrideOnLink ? OverrideOnLink?.id : undefined} value={typeof OverrideOnLink === "object" && "value" in OverrideOnLink ? OverrideOnLink?.value : OverrideOnLink ?? false} /* default: null */  isRaw={typeof OverrideOnLink === "object" && "isRaw" in OverrideOnLink && OverrideOnLink.isRaw ? true : undefined} />
        </Component>
      );
    };
    