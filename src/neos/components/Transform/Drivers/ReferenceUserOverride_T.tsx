import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ReferenceUserOverride_TInput {
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
    
    export function ReferenceUserOverride_T(props: ReferenceUserOverride_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Target,
Default,
CreateOverrideOnWrite,
PersistentOverrides, } = props;
    
      return (
        <Component type={`FrooxEngine.ReferenceUserOverride\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RefDrive\`1[${T}]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  />
<Member type={`FrooxEngine.SyncRef\`1[${T}]`} name="Default" id={typeof Default === "object" && "id" in Default ? Default?.id : undefined} value={typeof Default === "object" && "value" in Default ? Default?.value : Default} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CreateOverrideOnWrite" id={typeof CreateOverrideOnWrite === "object" && "id" in CreateOverrideOnWrite ? CreateOverrideOnWrite?.id : undefined} value={typeof CreateOverrideOnWrite === "object" && "value" in CreateOverrideOnWrite ? CreateOverrideOnWrite?.value : CreateOverrideOnWrite} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PersistentOverrides" id={typeof PersistentOverrides === "object" && "id" in PersistentOverrides ? PersistentOverrides?.id : undefined} value={typeof PersistentOverrides === "object" && "value" in PersistentOverrides ? PersistentOverrides?.value : PersistentOverrides} /* default: null */  />
        </Component>
      );
    };
    