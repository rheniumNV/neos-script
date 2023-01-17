import { member, Member, Component } from "../../core";
    
    export interface ValueTag_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Value?: member<any>;
    }
    
    export function ValueTag_T(props: ValueTag_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Value, } = props;
    
      return (
        <Component type={`FrooxEngine.ValueTag\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  />
        </Component>
      );
    };
    