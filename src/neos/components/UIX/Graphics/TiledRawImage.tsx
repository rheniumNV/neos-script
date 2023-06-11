import { member, Member, Component } from "../../../core";
    
    export interface TiledRawImageInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Texture?: member<any>;
Material?: member<any>;
Tint?: member<[number, number, number, number]>;
SizeBasis?: member<any>;
TileSize?: member<[number, number]>;
TileOffset?: member<[number, number]>;
InteractionTarget?: member<boolean>;
    }
    
    export function TiledRawImage(props: TiledRawImageInput){
      const { id, persistentId, updateOrder, Enabled,
Texture,
Material,
Tint,
SizeBasis,
TileSize,
TileOffset,
InteractionTarget, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.TiledRawImage" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  isRaw={typeof Texture === "object" && "isRaw" in Texture && Texture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="Material" id={typeof Material === "object" && "id" in Material ? Material?.id : undefined} value={typeof Material === "object" && "value" in Material ? Material?.value : Material} /* default: ID0 */  isRaw={typeof Material === "object" && "isRaw" in Material && Material.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Tint" id={typeof Tint === "object" && "id" in Tint ? Tint?.id : undefined} value={typeof Tint === "object" && "value" in Tint ? Tint?.value : Tint} /* default: [0; 0; 0; 0] */  isRaw={typeof Tint === "object" && "isRaw" in Tint && Tint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.TiledRawImage+TileSizeBasis]`} name="SizeBasis" id={typeof SizeBasis === "object" && "id" in SizeBasis ? SizeBasis?.id : undefined} value={typeof SizeBasis === "object" && "value" in SizeBasis ? SizeBasis?.value : SizeBasis} /* default: Absolute */  isRaw={typeof SizeBasis === "object" && "isRaw" in SizeBasis && SizeBasis.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TileSize" id={typeof TileSize === "object" && "id" in TileSize ? TileSize?.id : undefined} value={typeof TileSize === "object" && "value" in TileSize ? TileSize?.value : TileSize} /* default: [0; 0] */  isRaw={typeof TileSize === "object" && "isRaw" in TileSize && TileSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TileOffset" id={typeof TileOffset === "object" && "id" in TileOffset ? TileOffset?.id : undefined} value={typeof TileOffset === "object" && "value" in TileOffset ? TileOffset?.value : TileOffset} /* default: [0; 0] */  isRaw={typeof TileOffset === "object" && "isRaw" in TileOffset && TileOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="InteractionTarget" id={typeof InteractionTarget === "object" && "id" in InteractionTarget ? InteractionTarget?.id : undefined} value={typeof InteractionTarget === "object" && "value" in InteractionTarget ? InteractionTarget?.value : InteractionTarget} /* default: false */  isRaw={typeof InteractionTarget === "object" && "isRaw" in InteractionTarget && InteractionTarget.isRaw ? true : undefined} />
        </Component>
      );
    };
    