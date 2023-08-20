import { member, Member, Component } from "../../core";
    
    export interface ItemTextureThumbnailSourceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Texture?: member<any>;
Crop?: member<any>;
    }
    
    export function ItemTextureThumbnailSource(props: ItemTextureThumbnailSourceInput){
      const { id, persistentId, updateOrder, Enabled,
Texture,
Crop, } = props;
    
      return (
        <Component type="FrooxEngine.ItemTextureThumbnailSource" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  isRaw={typeof Texture === "object" && "isRaw" in Texture && Texture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.Rect]]`} name="Crop" id={typeof Crop === "object" && "id" in Crop ? Crop?.id : undefined} value={typeof Crop === "object" && "value" in Crop ? Crop?.value : Crop} /* default: <i>null</i> */  isRaw={typeof Crop === "object" && "isRaw" in Crop && Crop.isRaw ? true : undefined} />
        </Component>
      );
    };
    