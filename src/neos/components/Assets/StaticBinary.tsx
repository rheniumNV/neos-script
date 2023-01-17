import { member, Member, Component } from "../../core";
    
    export interface StaticBinaryInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
URL?: member<any>;
    }
    
    export function StaticBinary(props: StaticBinaryInput){
      const { id, persistentId, updateOrder, Enabled,
URL, } = props;
    
      return (
        <Component type="FrooxEngine.StaticBinary" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: <i>null</i> */  />
        </Component>
      );
    };
    