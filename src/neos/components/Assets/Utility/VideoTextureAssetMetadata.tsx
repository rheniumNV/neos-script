import { member, Member, Component } from "../../../core";
    
    export interface VideoTextureAssetMetadataInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Texture?: member<any>;
Size?: member<any>;
Width?: member<any>;
Height?: member<any>;
HasAlpha?: member<any>;
Length?: member<any>;
PlaybackEngine?: member<any>;
    }
    
    export function VideoTextureAssetMetadata(props: VideoTextureAssetMetadataInput){
      const { id, persistentId, updateOrder, Enabled,
Texture,
Size,
Width,
Height,
HasAlpha,
Length,
PlaybackEngine, } = props;
    
      return (
        <Component type="FrooxEngine.VideoTextureAssetMetadata" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.VideoTexture]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.int2]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: FrooxEngine.RawOutput`1[BaseX.int2] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="Width" id={typeof Width === "object" && "id" in Width ? Width?.id : undefined} value={typeof Width === "object" && "value" in Width ? Width?.value : Width} /* default: FrooxEngine.RawOutput`1[System.Int32] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="Height" id={typeof Height === "object" && "id" in Height ? Height?.id : undefined} value={typeof Height === "object" && "value" in Height ? Height?.value : Height} /* default: FrooxEngine.RawOutput`1[System.Int32] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="HasAlpha" id={typeof HasAlpha === "object" && "id" in HasAlpha ? HasAlpha?.id : undefined} value={typeof HasAlpha === "object" && "value" in HasAlpha ? HasAlpha?.value : HasAlpha} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="Length" id={typeof Length === "object" && "id" in Length ? Length?.id : undefined} value={typeof Length === "object" && "value" in Length ? Length?.value : Length} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.String]`} name="PlaybackEngine" id={typeof PlaybackEngine === "object" && "id" in PlaybackEngine ? PlaybackEngine?.id : undefined} value={typeof PlaybackEngine === "object" && "value" in PlaybackEngine ? PlaybackEngine?.value : PlaybackEngine} /* default: FrooxEngine.RawOutput`1[System.String] */  />
        </Component>
      );
    };
    