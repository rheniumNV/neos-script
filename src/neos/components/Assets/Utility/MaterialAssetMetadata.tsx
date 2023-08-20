import { member, Member, Component } from "../../../core";
    
    export interface MaterialAssetMetadataInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Material?: member<any>;
VariantIndex?: member<any>;
RawVariantIndex?: member<any>;
VariantID?: member<any>;
RawVariantID?: member<any>;
WaitingForApply?: member<any>;
    }
    
    export function MaterialAssetMetadata(props: MaterialAssetMetadataInput){
      const { id, persistentId, updateOrder, Enabled,
Material,
VariantIndex,
RawVariantIndex,
VariantID,
RawVariantID,
WaitingForApply, } = props;
    
      return (
        <Component type="FrooxEngine.MaterialAssetMetadata" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="Material" id={typeof Material === "object" && "id" in Material ? Material?.id : undefined} value={typeof Material === "object" && "value" in Material ? Material?.value : Material} /* default: ID0 */  isRaw={typeof Material === "object" && "isRaw" in Material && Material.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Nullable\`1[System.UInt32]]`} name="VariantIndex" id={typeof VariantIndex === "object" && "id" in VariantIndex ? VariantIndex?.id : undefined} value={typeof VariantIndex === "object" && "value" in VariantIndex ? VariantIndex?.value : VariantIndex} /* default: FrooxEngine.RawOutput`1[System.Nullable`1[System.UInt32]] */  isRaw={typeof VariantIndex === "object" && "isRaw" in VariantIndex && VariantIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Nullable\`1[System.UInt32]]`} name="RawVariantIndex" id={typeof RawVariantIndex === "object" && "id" in RawVariantIndex ? RawVariantIndex?.id : undefined} value={typeof RawVariantIndex === "object" && "value" in RawVariantIndex ? RawVariantIndex?.value : RawVariantIndex} /* default: FrooxEngine.RawOutput`1[System.Nullable`1[System.UInt32]] */  isRaw={typeof RawVariantIndex === "object" && "isRaw" in RawVariantIndex && RawVariantIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="VariantID" id={typeof VariantID === "object" && "id" in VariantID ? VariantID?.id : undefined} value={typeof VariantID === "object" && "value" in VariantID ? VariantID?.value : VariantID} /* default: FrooxEngine.RawOutput`1[System.String] */  isRaw={typeof VariantID === "object" && "isRaw" in VariantID && VariantID.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="RawVariantID" id={typeof RawVariantID === "object" && "id" in RawVariantID ? RawVariantID?.id : undefined} value={typeof RawVariantID === "object" && "value" in RawVariantID ? RawVariantID?.value : RawVariantID} /* default: FrooxEngine.RawOutput`1[System.String] */  isRaw={typeof RawVariantID === "object" && "isRaw" in RawVariantID && RawVariantID.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="WaitingForApply" id={typeof WaitingForApply === "object" && "id" in WaitingForApply ? WaitingForApply?.id : undefined} value={typeof WaitingForApply === "object" && "value" in WaitingForApply ? WaitingForApply?.value : WaitingForApply} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof WaitingForApply === "object" && "isRaw" in WaitingForApply && WaitingForApply.isRaw ? true : undefined} />
        </Component>
      );
    };
    