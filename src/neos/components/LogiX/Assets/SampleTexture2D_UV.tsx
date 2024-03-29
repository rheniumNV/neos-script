import { member, Member, Component } from "../../../core";
    
    export interface SampleTexture2D_UVInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Texture?: member<any>;
UV?: member<any>;
WrapMode?: member<any>;
    }
    
    export function SampleTexture2D_UV(props: SampleTexture2D_UVInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Texture,
UV,
WrapMode, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Assets.SampleTexture2D_UV" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Texture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  isRaw={typeof Texture === "object" && "isRaw" in Texture && Texture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float2]`} name="UV" id={typeof UV === "object" && "id" in UV ? UV?.id : undefined} value={typeof UV === "object" && "value" in UV ? UV?.value : UV} /* default: ID0 */  isRaw={typeof UV === "object" && "isRaw" in UV && UV.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[CodeX.WrapMode]`} name="WrapMode" id={typeof WrapMode === "object" && "id" in WrapMode ? WrapMode?.id : undefined} value={typeof WrapMode === "object" && "value" in WrapMode ? WrapMode?.value : WrapMode} /* default: ID0 */  isRaw={typeof WrapMode === "object" && "isRaw" in WrapMode && WrapMode.isRaw ? true : undefined} />
        </Component>
      );
    };
    