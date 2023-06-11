import { member, Member, Component } from "../../core";
    
    export interface ValueFieldProxy_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Source?: member<any>;
    }
    
    export function ValueFieldProxy_T(props: ValueFieldProxy_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
Source, } = props;
    
      return (
        <Component type={`FrooxEngine.ValueFieldProxy\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[${T}]]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: null */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
        </Component>
      );
    };
    