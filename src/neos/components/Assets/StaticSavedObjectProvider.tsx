import { member, Member, Component } from "../../core";
    
    export interface StaticSavedObjectProviderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
URL?: member<any>;
PreGather?: member<boolean>;
    }
    
    export function StaticSavedObjectProvider(props: StaticSavedObjectProviderInput){
      const { id, persistentId, updateOrder, Enabled,
URL,
PreGather, } = props;
    
      return (
        <Component type="FrooxEngine.StaticSavedObjectProvider" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PreGather" id={typeof PreGather === "object" && "id" in PreGather ? PreGather?.id : undefined} value={typeof PreGather === "object" && "value" in PreGather ? PreGather?.value : PreGather} /* default: false */  />
        </Component>
      );
    };
    