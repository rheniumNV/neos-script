import { member, Member, Component } from "../../core";
    
    export interface TipJarInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
RecipientId?: member<any>;
Token?: member<any>;
    }
    
    export function TipJar(props: TipJarInput){
      const { id, persistentId, updateOrder, Enabled,
RecipientId,
Token, } = props;
    
      return (
        <Component type="FrooxEngine.TipJar" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="RecipientId" id={typeof RecipientId === "object" && "id" in RecipientId ? RecipientId?.id : undefined} value={typeof RecipientId === "object" && "value" in RecipientId ? RecipientId?.value : RecipientId} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Token" id={typeof Token === "object" && "id" in Token ? Token?.id : undefined} value={typeof Token === "object" && "value" in Token ? Token?.value : Token} /* default: <i>null</i> */  />
        </Component>
      );
    };
    