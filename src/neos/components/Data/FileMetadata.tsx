import { member, Member, Component } from "../../core";
    
    export interface FileMetadataInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Filename?: member<any>;
MIME?: member<any>;
IsProcessing?: member<boolean>;
    }
    
    export function FileMetadata(props: FileMetadataInput){
      const { id, persistentId, updateOrder, Enabled,
Filename,
MIME,
IsProcessing, } = props;
    
      return (
        <Component type="FrooxEngine.FileMetadata" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Filename" id={typeof Filename === "object" && "id" in Filename ? Filename?.id : undefined} value={typeof Filename === "object" && "value" in Filename ? Filename?.value : Filename} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="MIME" id={typeof MIME === "object" && "id" in MIME ? MIME?.id : undefined} value={typeof MIME === "object" && "value" in MIME ? MIME?.value : MIME} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsProcessing-ID" id={typeof IsProcessing === "object" && "id" in IsProcessing ? IsProcessing?.id : undefined} value={typeof IsProcessing === "object" && "value" in IsProcessing ? IsProcessing?.value : IsProcessing} /* default: false */ idOnly />
        </Component>
      );
    };
    