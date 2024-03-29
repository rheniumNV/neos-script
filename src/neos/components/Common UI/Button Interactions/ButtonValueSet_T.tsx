import { member, Member, Component } from "../../../core";
    
    export interface ButtonValueSet_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetValue?: member<any>;
SetValue?: member<any>;
    }
    
    export function ButtonValueSet_T(props: ButtonValueSet_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
TargetValue,
SetValue, } = props;
    
      return (
        <Component type={`FrooxEngine.ButtonValueSet\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[${T}]]`} name="TargetValue" id={typeof TargetValue === "object" && "id" in TargetValue ? TargetValue?.id : undefined} value={typeof TargetValue === "object" && "value" in TargetValue ? TargetValue?.value : TargetValue} /* default: null */  isRaw={typeof TargetValue === "object" && "isRaw" in TargetValue && TargetValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="SetValue" id={typeof SetValue === "object" && "id" in SetValue ? SetValue?.id : undefined} value={typeof SetValue === "object" && "value" in SetValue ? SetValue?.value : SetValue} /* default: null */  isRaw={typeof SetValue === "object" && "isRaw" in SetValue && SetValue.isRaw ? true : undefined} />
        </Component>
      );
    };
    