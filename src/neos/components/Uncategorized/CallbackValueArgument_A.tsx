import { member, Member, Component } from "../../core";
    
    export interface CallbackValueArgument_AInput {
        type:{A: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Value?: member<any>;
Callback?: member<any>;
    }
    
    export function CallbackValueArgument_A(props: CallbackValueArgument_AInput){
      const {type:{A:{name: A},}, id, persistentId, updateOrder, Enabled,
Value,
Callback, } = props;
    
      return (
        <Component type={`FrooxEngine.CallbackValueArgument\`1[${[A,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[A]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  isRaw={typeof Value === "object" && "isRaw" in Value && Value.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[A]]`} name="Callback" id={typeof Callback === "object" && "id" in Callback ? Callback?.id : undefined} value={typeof Callback === "object" && "value" in Callback ? Callback?.value : Callback} /* default: null */  isRaw={typeof Callback === "object" && "isRaw" in Callback && Callback.isRaw ? true : undefined} />
        </Component>
      );
    };
    