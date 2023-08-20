import { member, Member, Component } from "../../../core";
    
    export interface DynamicValueVariableDriver_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
VariableName?: member<any>;
Target?: member<any>;
DefaultValue?: member<any>;
    }
    
    export function DynamicValueVariableDriver_T(props: DynamicValueVariableDriver_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
VariableName,
Target,
DefaultValue, } = props;
    
      return (
        <Component type={`FrooxEngine.DynamicValueVariableDriver\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="VariableName" id={typeof VariableName === "object" && "id" in VariableName ? VariableName?.id : undefined} value={typeof VariableName === "object" && "value" in VariableName ? VariableName?.value : VariableName} /* default: null */  isRaw={typeof VariableName === "object" && "isRaw" in VariableName && VariableName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[${T}]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="DefaultValue" id={typeof DefaultValue === "object" && "id" in DefaultValue ? DefaultValue?.id : undefined} value={typeof DefaultValue === "object" && "value" in DefaultValue ? DefaultValue?.value : DefaultValue} /* default: null */  isRaw={typeof DefaultValue === "object" && "isRaw" in DefaultValue && DefaultValue.isRaw ? true : undefined} />
        </Component>
      );
    };
    