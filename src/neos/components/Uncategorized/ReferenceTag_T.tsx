import { member, Member, Component } from "../../core";
    
    export interface ReferenceTag_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Reference?: member<any>;
    }
    
    export function ReferenceTag_T(props: ReferenceTag_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Reference, } = props;
    
      return (
        <Component type={`FrooxEngine.ReferenceTag\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[${T}]`} name="Reference" id={typeof Reference === "object" && "id" in Reference ? Reference?.id : undefined} value={typeof Reference === "object" && "value" in Reference ? Reference?.value : Reference} /* default: null */  isRaw={typeof Reference === "object" && "isRaw" in Reference && Reference.isRaw ? true : undefined} />
        </Component>
      );
    };
    