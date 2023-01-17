import { member, Member, Component } from "../../../core";
    
    export interface DataPresetValue_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
PresetValue?: member<any>;
TargetField?: member<any>;
    }
    
    export function DataPresetValue_T(props: DataPresetValue_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
PresetValue,
TargetField, } = props;
    
      return (
        <Component type={`FrooxEngine.DataPresetValue\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="PresetValue" id={typeof PresetValue === "object" && "id" in PresetValue ? PresetValue?.id : undefined} value={typeof PresetValue === "object" && "value" in PresetValue ? PresetValue?.value : PresetValue} /* default: null */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`} name="TargetField" id={typeof TargetField === "object" && "id" in TargetField ? TargetField?.id : undefined} value={typeof TargetField === "object" && "value" in TargetField ? TargetField?.value : TargetField} /* default: null */  />
        </Component>
      );
    };
    