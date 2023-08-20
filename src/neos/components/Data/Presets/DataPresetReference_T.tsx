import { member, Member, Component } from "../../../core";
    
    export interface DataPresetReference_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
PresetReference?: member<any>;
TargetReference?: member<any>;
    }
    
    export function DataPresetReference_T(props: DataPresetReference_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
PresetReference,
TargetReference, } = props;
    
      return (
        <Component type={`FrooxEngine.DataPresetReference\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[${T}]`} name="PresetReference" id={typeof PresetReference === "object" && "id" in PresetReference ? PresetReference?.id : undefined} value={typeof PresetReference === "object" && "value" in PresetReference ? PresetReference?.value : PresetReference} /* default: null */  isRaw={typeof PresetReference === "object" && "isRaw" in PresetReference && PresetReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.SyncRef\`1[${T}]]`} name="TargetReference" id={typeof TargetReference === "object" && "id" in TargetReference ? TargetReference?.id : undefined} value={typeof TargetReference === "object" && "value" in TargetReference ? TargetReference?.value : TargetReference} /* default: null */  isRaw={typeof TargetReference === "object" && "isRaw" in TargetReference && TargetReference.isRaw ? true : undefined} />
        </Component>
      );
    };
    