import { member, Member, Component } from "../../core";
    
    export interface WorldValueSync_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
LocalValue?: member<any>;
    }
    
    export function WorldValueSync_T(props: WorldValueSync_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
LocalValue, } = props;
    
      return (
        <Component type={`FrooxEngine.WorldValueSync\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`} name="LocalValue" id={typeof LocalValue === "object" && "id" in LocalValue ? LocalValue?.id : undefined} value={typeof LocalValue === "object" && "value" in LocalValue ? LocalValue?.value : LocalValue} /* default: null */  isRaw={typeof LocalValue === "object" && "isRaw" in LocalValue && LocalValue.isRaw ? true : undefined} />
        </Component>
      );
    };
    