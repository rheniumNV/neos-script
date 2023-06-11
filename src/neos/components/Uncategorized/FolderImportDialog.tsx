import { member, Member, Component } from "../../core";
    
    export interface FolderImportDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Path?: member<any>;
    }
    
    export function FolderImportDialog(props: FolderImportDialogInput){
      const { id, persistentId, updateOrder, Enabled,
Path, } = props;
    
      return (
        <Component type="FrooxEngine.FolderImportDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Path" id={typeof Path === "object" && "id" in Path ? Path?.id : undefined} value={typeof Path === "object" && "value" in Path ? Path?.value : Path} /* default: <i>null</i> */  isRaw={typeof Path === "object" && "isRaw" in Path && Path.isRaw ? true : undefined} />
        </Component>
      );
    };
    