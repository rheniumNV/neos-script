import { member, Member, Component } from "../../core";
    
    export interface UnresolvedReferencesInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
References?: member<any>;
    }
    
    export function UnresolvedReferences(props: UnresolvedReferencesInput){
      const { id, persistentId, updateOrder, Enabled,
References, } = props;
    
      return (
        <Component type="FrooxEngine.UnresolvedReferences" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.UnresolvedReferences+UnresolvedReference]`} name="References" id={typeof References === "object" && "id" in References ? References?.id : undefined} value={typeof References === "object" && "value" in References ? References?.value : References} /* default: FrooxEngine.SyncList`1[FrooxEngine.UnresolvedReferences+UnresolvedReference] */  isRaw={typeof References === "object" && "isRaw" in References && References.isRaw ? true : undefined} />
        </Component>
      );
    };
    