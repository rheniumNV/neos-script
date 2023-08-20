import { member, Member, Component } from "../../../core";
    
    export interface Texture2DAssetMetadataInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Texture?: member<any>;
Size?: member<any>;
Width?: member<any>;
Height?: member<any>;
HasMipMaps?: member<any>;
MipMapCount?: member<any>;
MemoryBytes?: member<any>;
FormattedMemoryBytes?: member<any>;
Format?: member<any>;
ActualLoadedVariant?: member<any>;
    }
    
    export function Texture2DAssetMetadata(props: Texture2DAssetMetadataInput){
      const { id, persistentId, updateOrder, Enabled,
Texture,
Size,
Width,
Height,
HasMipMaps,
MipMapCount,
MemoryBytes,
FormattedMemoryBytes,
Format,
ActualLoadedVariant, } = props;
    
      return (
        <Component type="FrooxEngine.Texture2DAssetMetadata" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  isRaw={typeof Texture === "object" && "isRaw" in Texture && Texture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.int2]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: FrooxEngine.RawOutput`1[BaseX.int2] */  isRaw={typeof Size === "object" && "isRaw" in Size && Size.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="Width" id={typeof Width === "object" && "id" in Width ? Width?.id : undefined} value={typeof Width === "object" && "value" in Width ? Width?.value : Width} /* default: FrooxEngine.RawOutput`1[System.Int32] */  isRaw={typeof Width === "object" && "isRaw" in Width && Width.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="Height" id={typeof Height === "object" && "id" in Height ? Height?.id : undefined} value={typeof Height === "object" && "value" in Height ? Height?.value : Height} /* default: FrooxEngine.RawOutput`1[System.Int32] */  isRaw={typeof Height === "object" && "isRaw" in Height && Height.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="HasMipMaps" id={typeof HasMipMaps === "object" && "id" in HasMipMaps ? HasMipMaps?.id : undefined} value={typeof HasMipMaps === "object" && "value" in HasMipMaps ? HasMipMaps?.value : HasMipMaps} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof HasMipMaps === "object" && "isRaw" in HasMipMaps && HasMipMaps.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="MipMapCount" id={typeof MipMapCount === "object" && "id" in MipMapCount ? MipMapCount?.id : undefined} value={typeof MipMapCount === "object" && "value" in MipMapCount ? MipMapCount?.value : MipMapCount} /* default: FrooxEngine.RawOutput`1[System.Int32] */  isRaw={typeof MipMapCount === "object" && "isRaw" in MipMapCount && MipMapCount.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Int64]`} name="MemoryBytes" id={typeof MemoryBytes === "object" && "id" in MemoryBytes ? MemoryBytes?.id : undefined} value={typeof MemoryBytes === "object" && "value" in MemoryBytes ? MemoryBytes?.value : MemoryBytes} /* default: FrooxEngine.RawOutput`1[System.Int64] */  isRaw={typeof MemoryBytes === "object" && "isRaw" in MemoryBytes && MemoryBytes.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="FormattedMemoryBytes" id={typeof FormattedMemoryBytes === "object" && "id" in FormattedMemoryBytes ? FormattedMemoryBytes?.id : undefined} value={typeof FormattedMemoryBytes === "object" && "value" in FormattedMemoryBytes ? FormattedMemoryBytes?.value : FormattedMemoryBytes} /* default: FrooxEngine.RawOutput`1[System.String] */  isRaw={typeof FormattedMemoryBytes === "object" && "isRaw" in FormattedMemoryBytes && FormattedMemoryBytes.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[CodeX.TextureFormat]`} name="Format" id={typeof Format === "object" && "id" in Format ? Format?.id : undefined} value={typeof Format === "object" && "value" in Format ? Format?.value : Format} /* default: FrooxEngine.RawOutput`1[CodeX.TextureFormat] */  isRaw={typeof Format === "object" && "isRaw" in Format && Format.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="ActualLoadedVariant" id={typeof ActualLoadedVariant === "object" && "id" in ActualLoadedVariant ? ActualLoadedVariant?.id : undefined} value={typeof ActualLoadedVariant === "object" && "value" in ActualLoadedVariant ? ActualLoadedVariant?.value : ActualLoadedVariant} /* default: FrooxEngine.RawOutput`1[System.String] */  isRaw={typeof ActualLoadedVariant === "object" && "isRaw" in ActualLoadedVariant && ActualLoadedVariant.isRaw ? true : undefined} />
        </Component>
      );
    };
    