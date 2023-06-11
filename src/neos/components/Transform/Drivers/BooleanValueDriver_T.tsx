import { member, Member, Component } from "../../../core";
    
    export interface BooleanValueDriver_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
State?: member<boolean>;
TargetField?: member<any>;
falseValue?: member<any>;
trueValue?: member<any>;
    }
    
    export function BooleanValueDriver_T(props: BooleanValueDriver_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
State,
TargetField,
falseValue,
trueValue, } = props;
    
      return (
        <Component type={`FrooxEngine.BooleanValueDriver\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="State" id={typeof State === "object" && "id" in State ? State?.id : undefined} value={typeof State === "object" && "value" in State ? State?.value : State} /* default: null */  isRaw={typeof State === "object" && "isRaw" in State && State.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[${T}]`} name="TargetField" id={typeof TargetField === "object" && "id" in TargetField ? TargetField?.id : undefined} value={typeof TargetField === "object" && "value" in TargetField ? TargetField?.value : TargetField} /* default: null */  isRaw={typeof TargetField === "object" && "isRaw" in TargetField && TargetField.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="falseValue" id={typeof falseValue === "object" && "id" in falseValue ? falseValue?.id : undefined} value={typeof falseValue === "object" && "value" in falseValue ? falseValue?.value : falseValue} /* default: null */  isRaw={typeof falseValue === "object" && "isRaw" in falseValue && falseValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="trueValue" id={typeof trueValue === "object" && "id" in trueValue ? trueValue?.id : undefined} value={typeof trueValue === "object" && "value" in trueValue ? trueValue?.value : trueValue} /* default: null */  isRaw={typeof trueValue === "object" && "isRaw" in trueValue && trueValue.isRaw ? true : undefined} />
        </Component>
      );
    };
    