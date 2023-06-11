import { member, Member, Component } from "../../core";
    
    export interface FileVisualInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MetadataSource?: member<any>;
TypeLabel?: member<any>;
NameLabel?: member<any>;
FillMaterial?: member<any>;
OutlineMaterial?: member<any>;
TypeMaterial?: member<any>;
    }
    
    export function FileVisual(props: FileVisualInput){
      const { id, persistentId, updateOrder, Enabled,
MetadataSource,
TypeLabel,
NameLabel,
FillMaterial,
OutlineMaterial,
TypeMaterial, } = props;
    
      return (
        <Component type="FrooxEngine.FileVisual" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.FileMetadata]`} name="MetadataSource" id={typeof MetadataSource === "object" && "id" in MetadataSource ? MetadataSource?.id : undefined} value={typeof MetadataSource === "object" && "value" in MetadataSource ? MetadataSource?.value : MetadataSource} /* default: ID0 */  isRaw={typeof MetadataSource === "object" && "isRaw" in MetadataSource && MetadataSource.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="TypeLabel" id={typeof TypeLabel === "object" && "id" in TypeLabel ? TypeLabel?.id : undefined} value={typeof TypeLabel === "object" && "value" in TypeLabel ? TypeLabel?.value : TypeLabel} /* default: ID0 */  isRaw={typeof TypeLabel === "object" && "isRaw" in TypeLabel && TypeLabel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="NameLabel" id={typeof NameLabel === "object" && "id" in NameLabel ? NameLabel?.id : undefined} value={typeof NameLabel === "object" && "value" in NameLabel ? NameLabel?.value : NameLabel} /* default: ID0 */  isRaw={typeof NameLabel === "object" && "isRaw" in NameLabel && NameLabel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PBS_DualSidedMetallic]`} name="FillMaterial" id={typeof FillMaterial === "object" && "id" in FillMaterial ? FillMaterial?.id : undefined} value={typeof FillMaterial === "object" && "value" in FillMaterial ? FillMaterial?.value : FillMaterial} /* default: ID0 */  isRaw={typeof FillMaterial === "object" && "isRaw" in FillMaterial && FillMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PBS_DualSidedMetallic]`} name="OutlineMaterial" id={typeof OutlineMaterial === "object" && "id" in OutlineMaterial ? OutlineMaterial?.id : undefined} value={typeof OutlineMaterial === "object" && "value" in OutlineMaterial ? OutlineMaterial?.value : OutlineMaterial} /* default: ID0 */  isRaw={typeof OutlineMaterial === "object" && "isRaw" in OutlineMaterial && OutlineMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PBS_DualSidedMetallic]`} name="TypeMaterial" id={typeof TypeMaterial === "object" && "id" in TypeMaterial ? TypeMaterial?.id : undefined} value={typeof TypeMaterial === "object" && "value" in TypeMaterial ? TypeMaterial?.value : TypeMaterial} /* default: ID0 */  isRaw={typeof TypeMaterial === "object" && "isRaw" in TypeMaterial && TypeMaterial.isRaw ? true : undefined} />
        </Component>
      );
    };
    