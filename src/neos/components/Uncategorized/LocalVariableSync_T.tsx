import { member, Member, Component } from "../../core";
    
    export interface LocalVariableSync_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
OwnerUser?: member<any>;
Value?: member<any>;
Variable?: member<any>;
    }
    
    export function LocalVariableSync_T(props: LocalVariableSync_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
OwnerUser,
Value,
Variable, } = props;
    
      return (
        <Component type={`FrooxEngine.LocalVariableSync\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.UserRef`} name="OwnerUser" id={typeof OwnerUser === "object" && "id" in OwnerUser ? OwnerUser?.id : undefined} value={typeof OwnerUser === "object" && "value" in OwnerUser ? OwnerUser?.value : OwnerUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Variable" id={typeof Variable === "object" && "id" in Variable ? Variable?.id : undefined} value={typeof Variable === "object" && "value" in Variable ? Variable?.value : Variable} /* default: null */  />
        </Component>
      );
    };
    