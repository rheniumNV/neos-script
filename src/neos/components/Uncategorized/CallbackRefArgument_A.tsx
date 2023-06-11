import { member, Member, Component } from "../../core";
    
    export interface CallbackRefArgument_AInput {
        type:{A: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Reference?: member<any>;
Callback?: member<any>;
    }
    
    export function CallbackRefArgument_A(props: CallbackRefArgument_AInput){
      const {type:{A:{name: A},}, id, persistentId, updateOrder, Enabled,
Reference,
Callback, } = props;
    
      return (
        <Component type={`FrooxEngine.CallbackRefArgument\`1[${[A,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[A]`} name="Reference" id={typeof Reference === "object" && "id" in Reference ? Reference?.id : undefined} value={typeof Reference === "object" && "value" in Reference ? Reference?.value : Reference} /* default: null */  isRaw={typeof Reference === "object" && "isRaw" in Reference && Reference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[A]]`} name="Callback" id={typeof Callback === "object" && "id" in Callback ? Callback?.id : undefined} value={typeof Callback === "object" && "value" in Callback ? Callback?.value : Callback} /* default: null */  isRaw={typeof Callback === "object" && "isRaw" in Callback && Callback.isRaw ? true : undefined} />
        </Component>
      );
    };
    