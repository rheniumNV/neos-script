import { member, Member, Component } from "../../../core";
    
    export interface ButtonValueCycle_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetValue?: member<any>;
    }
    
    export function ButtonValueCycle_T(props: ButtonValueCycle_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
TargetValue, } = props;
    
      return (
        <Component type={`FrooxEngine.ButtonValueCycle\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[${T}]]`} name="TargetValue" id={typeof TargetValue === "object" && "id" in TargetValue ? TargetValue?.id : undefined} value={typeof TargetValue === "object" && "value" in TargetValue ? TargetValue?.value : TargetValue} /* default: null */  isRaw={typeof TargetValue === "object" && "isRaw" in TargetValue && TargetValue.isRaw ? true : undefined} />
        </Component>
      );
    };
    