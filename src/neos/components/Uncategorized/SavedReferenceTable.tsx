import { member, Member, Component } from "../../core";
    
    export interface SavedReferenceTableInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
    }
    
    export function SavedReferenceTable(props: SavedReferenceTableInput){
      const { id, persistentId, updateOrder, Enabled, } = props;
    
      return (
        <Component type="FrooxEngine.SavedReferenceTable" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
        </Component>
      );
    };
    