import { member, Member, Component } from "../../../core";
    
    export interface SampleTexture3D_UVWInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Texture?: member<any>;
UVW?: member<any>;
    }
    
    export function SampleTexture3D_UVW(props: SampleTexture3D_UVWInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Texture,
UVW, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Assets.SampleTexture3D_UVW" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Texture3D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  isRaw={typeof Texture === "object" && "isRaw" in Texture && Texture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="UVW" id={typeof UVW === "object" && "id" in UVW ? UVW?.id : undefined} value={typeof UVW === "object" && "value" in UVW ? UVW?.value : UVW} /* default: ID0 */  isRaw={typeof UVW === "object" && "isRaw" in UVW && UVW.isRaw ? true : undefined} />
        </Component>
      );
    };
    