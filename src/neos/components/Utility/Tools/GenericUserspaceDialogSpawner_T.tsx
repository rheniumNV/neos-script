import { member, Member, Component } from "../../../core";
    
    export interface GenericUserspaceDialogSpawner_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Initializer?: member<any>;
    }
    
    export function GenericUserspaceDialogSpawner_T(props: GenericUserspaceDialogSpawner_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Initializer, } = props;
    
      return (
        <Component type={`FrooxEngine.GenericUserspaceDialogSpawner\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[${T}]]`} name="Initializer" id={typeof Initializer === "object" && "id" in Initializer ? Initializer?.id : undefined} value={typeof Initializer === "object" && "value" in Initializer ? Initializer?.value : Initializer} /* default: null */  isRaw={typeof Initializer === "object" && "isRaw" in Initializer && Initializer.isRaw ? true : undefined} />
        </Component>
      );
    };
    