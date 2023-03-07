import { member, Member, Component } from "../../../core";
    
    export interface BinaryExportableInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Binary?: member<any>;
    }
    
    export function BinaryExportable(props: BinaryExportableInput){
      const { id, persistentId, updateOrder, Enabled,
Binary, } = props;
    
      return (
        <Component type="FrooxEngine.BinaryExportable" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Binary]`} name="Binary" id={typeof Binary === "object" && "id" in Binary ? Binary?.id : undefined} value={typeof Binary === "object" && "value" in Binary ? Binary?.value : Binary} /* default: ID0 */  />
        </Component>
      );
    };
    