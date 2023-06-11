import { member, Member, Component } from "../../../core";
    
    export interface TextExportableInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TextSource?: member<any>;
Extension?: member<any>;
Description?: member<any>;
    }
    
    export function TextExportable(props: TextExportableInput){
      const { id, persistentId, updateOrder, Enabled,
TextSource,
Extension,
Description, } = props;
    
      return (
        <Component type="FrooxEngine.TextExportable" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IValue\`1[System.String]]`} name="TextSource" id={typeof TextSource === "object" && "id" in TextSource ? TextSource?.id : undefined} value={typeof TextSource === "object" && "value" in TextSource ? TextSource?.value : TextSource} /* default: ID0 */  isRaw={typeof TextSource === "object" && "isRaw" in TextSource && TextSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Extension" id={typeof Extension === "object" && "id" in Extension ? Extension?.id : undefined} value={typeof Extension === "object" && "value" in Extension ? Extension?.value : Extension} /* default: <i>null</i> */  isRaw={typeof Extension === "object" && "isRaw" in Extension && Extension.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Description" id={typeof Description === "object" && "id" in Description ? Description?.id : undefined} value={typeof Description === "object" && "value" in Description ? Description?.value : Description} /* default: <i>null</i> */  isRaw={typeof Description === "object" && "isRaw" in Description && Description.isRaw ? true : undefined} />
        </Component>
      );
    };
    