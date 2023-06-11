import { member, Member, Component } from "../../../core";
    
    export interface MainAndMaskTexturePropertyBlockInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
Texture?: member<any>;
MaskTexture?: member<any>;
    }
    
    export function MainAndMaskTexturePropertyBlock(props: MainAndMaskTexturePropertyBlockInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
Texture,
MaskTexture, } = props;
    
      return (
        <Component type="FrooxEngine.MainAndMaskTexturePropertyBlock" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  isRaw={typeof Texture === "object" && "isRaw" in Texture && Texture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="MaskTexture" id={typeof MaskTexture === "object" && "id" in MaskTexture ? MaskTexture?.id : undefined} value={typeof MaskTexture === "object" && "value" in MaskTexture ? MaskTexture?.value : MaskTexture} /* default: ID0 */  isRaw={typeof MaskTexture === "object" && "isRaw" in MaskTexture && MaskTexture.isRaw ? true : undefined} />
        </Component>
      );
    };
    