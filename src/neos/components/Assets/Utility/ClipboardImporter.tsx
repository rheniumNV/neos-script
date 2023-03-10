import { member, Member, Component } from "../../../core";
    
    export interface ClipboardImporterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
    }
    
    export function ClipboardImporter(props: ClipboardImporterInput){
      const { id, persistentId, updateOrder, Enabled, } = props;
    
      return (
        <Component type="FrooxEngine.ClipboardImporter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
        </Component>
      );
    };
    