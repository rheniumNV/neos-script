import { member, Member, Component } from "../../../core";
    
    export interface ValueUserOverride_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<any>;
Default?: member<any>;
CreateOverrideOnWrite?: member<boolean>;
PersistentOverrides?: member<boolean>;
    }
    
    export function ValueUserOverride_T(props: ValueUserOverride_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Target,
Default,
CreateOverrideOnWrite,
PersistentOverrides, } = props;
    
      return (
        <Component type={`FrooxEngine.ValueUserOverride\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[${T}]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="Default" id={typeof Default === "object" && "id" in Default ? Default?.id : undefined} value={typeof Default === "object" && "value" in Default ? Default?.value : Default} /* default: null */  isRaw={typeof Default === "object" && "isRaw" in Default && Default.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CreateOverrideOnWrite" id={typeof CreateOverrideOnWrite === "object" && "id" in CreateOverrideOnWrite ? CreateOverrideOnWrite?.id : undefined} value={typeof CreateOverrideOnWrite === "object" && "value" in CreateOverrideOnWrite ? CreateOverrideOnWrite?.value : CreateOverrideOnWrite} /* default: null */  isRaw={typeof CreateOverrideOnWrite === "object" && "isRaw" in CreateOverrideOnWrite && CreateOverrideOnWrite.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PersistentOverrides" id={typeof PersistentOverrides === "object" && "id" in PersistentOverrides ? PersistentOverrides?.id : undefined} value={typeof PersistentOverrides === "object" && "value" in PersistentOverrides ? PersistentOverrides?.value : PersistentOverrides} /* default: null */  isRaw={typeof PersistentOverrides === "object" && "isRaw" in PersistentOverrides && PersistentOverrides.isRaw ? true : undefined} />
        </Component>
      );
    };
    