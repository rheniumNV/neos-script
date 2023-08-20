import { member, Member, Component } from "../../core";
    
    export interface GenericModalDialogSpawner_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Initializer?: member<any>;
Size?: member<[number, number]>;
    }
    
    export function GenericModalDialogSpawner_T(props: GenericModalDialogSpawner_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Initializer,
Size, } = props;
    
      return (
        <Component type={`FrooxEngine.GenericModalDialogSpawner\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[${T}]]`} name="Initializer" id={typeof Initializer === "object" && "id" in Initializer ? Initializer?.id : undefined} value={typeof Initializer === "object" && "value" in Initializer ? Initializer?.value : Initializer} /* default: null */  isRaw={typeof Initializer === "object" && "isRaw" in Initializer && Initializer.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: null */  isRaw={typeof Size === "object" && "isRaw" in Size && Size.isRaw ? true : undefined} />
        </Component>
      );
    };
    