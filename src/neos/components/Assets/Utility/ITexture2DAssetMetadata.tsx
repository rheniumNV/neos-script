import { member, Member, Component } from "../../../core";
    
    export interface ITexture2DAssetMetadataInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Texture?: member<any>;
Size?: member<any>;
Width?: member<any>;
Height?: member<any>;
    }
    
    export function ITexture2DAssetMetadata(props: ITexture2DAssetMetadataInput){
      const { id, persistentId, updateOrder, Enabled,
Texture,
Size,
Width,
Height, } = props;
    
      return (
        <Component type="FrooxEngine.ITexture2DAssetMetadata" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.int2]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: FrooxEngine.RawOutput`1[BaseX.int2] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="Width" id={typeof Width === "object" && "id" in Width ? Width?.id : undefined} value={typeof Width === "object" && "value" in Width ? Width?.value : Width} /* default: FrooxEngine.RawOutput`1[System.Int32] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Int32]`} name="Height" id={typeof Height === "object" && "id" in Height ? Height?.id : undefined} value={typeof Height === "object" && "value" in Height ? Height?.value : Height} /* default: FrooxEngine.RawOutput`1[System.Int32] */  />
        </Component>
      );
    };
    