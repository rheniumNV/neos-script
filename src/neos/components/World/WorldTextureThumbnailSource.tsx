import { member, Member, Component } from "../../core";
    
    export interface WorldTextureThumbnailSourceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Texture?: member<any>;
    }
    
    export function WorldTextureThumbnailSource(props: WorldTextureThumbnailSourceInput){
      const { id, persistentId, updateOrder, Enabled,
Texture, } = props;
    
      return (
        <Component type="FrooxEngine.WorldTextureThumbnailSource" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  isRaw={typeof Texture === "object" && "isRaw" in Texture && Texture.isRaw ? true : undefined} />
        </Component>
      );
    };
    