import { member, Member, Component } from "../../../../core";
    
    export interface PBS_DualSidedSpecularInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
TextureScale?: member<[number, number]>;
TextureOffset?: member<[number, number]>;
AlbedoColor?: member<[number, number, number, number]>;
AlbedoTexture?: member<any>;
EmissiveColor?: member<[number, number, number, number]>;
EmissiveMap?: member<any>;
NormalMap?: member<any>;
NormalScale?: member<number>;
OcclusionMap?: member<any>;
Culling?: member<any>;
AlphaHandling?: member<any>;
AlphaClip?: member<number>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
SpecularColor?: member<[number, number, number, number]>;
SpecularMap?: member<any>;
_regular?: member<any>;
_transparent?: member<any>;
    }
    
    export function PBS_DualSidedSpecular(props: PBS_DualSidedSpecularInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
TextureScale,
TextureOffset,
AlbedoColor,
AlbedoTexture,
EmissiveColor,
EmissiveMap,
NormalMap,
NormalScale,
OcclusionMap,
Culling,
AlphaHandling,
AlphaClip,
OffsetFactor,
OffsetUnits,
RenderQueue,
SpecularColor,
SpecularMap,
_regular,
_transparent, } = props;
    
      return (
        <Component type="FrooxEngine.PBS_DualSidedSpecular" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureScale" id={typeof TextureScale === "object" && "id" in TextureScale ? TextureScale?.id : undefined} value={typeof TextureScale === "object" && "value" in TextureScale ? TextureScale?.value : TextureScale} /* default: [0; 0] */  isRaw={typeof TextureScale === "object" && "isRaw" in TextureScale && TextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureOffset" id={typeof TextureOffset === "object" && "id" in TextureOffset ? TextureOffset?.id : undefined} value={typeof TextureOffset === "object" && "value" in TextureOffset ? TextureOffset?.value : TextureOffset} /* default: [0; 0] */  isRaw={typeof TextureOffset === "object" && "isRaw" in TextureOffset && TextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AlbedoColor" id={typeof AlbedoColor === "object" && "id" in AlbedoColor ? AlbedoColor?.id : undefined} value={typeof AlbedoColor === "object" && "value" in AlbedoColor ? AlbedoColor?.value : AlbedoColor} /* default: [0; 0; 0; 0] */  isRaw={typeof AlbedoColor === "object" && "isRaw" in AlbedoColor && AlbedoColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="AlbedoTexture" id={typeof AlbedoTexture === "object" && "id" in AlbedoTexture ? AlbedoTexture?.id : undefined} value={typeof AlbedoTexture === "object" && "value" in AlbedoTexture ? AlbedoTexture?.value : AlbedoTexture} /* default: ID0 */  isRaw={typeof AlbedoTexture === "object" && "isRaw" in AlbedoTexture && AlbedoTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissiveColor" id={typeof EmissiveColor === "object" && "id" in EmissiveColor ? EmissiveColor?.id : undefined} value={typeof EmissiveColor === "object" && "value" in EmissiveColor ? EmissiveColor?.value : EmissiveColor} /* default: [0; 0; 0; 0] */  isRaw={typeof EmissiveColor === "object" && "isRaw" in EmissiveColor && EmissiveColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="EmissiveMap" id={typeof EmissiveMap === "object" && "id" in EmissiveMap ? EmissiveMap?.id : undefined} value={typeof EmissiveMap === "object" && "value" in EmissiveMap ? EmissiveMap?.value : EmissiveMap} /* default: ID0 */  isRaw={typeof EmissiveMap === "object" && "isRaw" in EmissiveMap && EmissiveMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap" id={typeof NormalMap === "object" && "id" in NormalMap ? NormalMap?.id : undefined} value={typeof NormalMap === "object" && "value" in NormalMap ? NormalMap?.value : NormalMap} /* default: ID0 */  isRaw={typeof NormalMap === "object" && "isRaw" in NormalMap && NormalMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalScale" id={typeof NormalScale === "object" && "id" in NormalScale ? NormalScale?.id : undefined} value={typeof NormalScale === "object" && "value" in NormalScale ? NormalScale?.value : NormalScale} /* default: 0 */  isRaw={typeof NormalScale === "object" && "isRaw" in NormalScale && NormalScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="OcclusionMap" id={typeof OcclusionMap === "object" && "id" in OcclusionMap ? OcclusionMap?.id : undefined} value={typeof OcclusionMap === "object" && "value" in OcclusionMap ? OcclusionMap?.value : OcclusionMap} /* default: ID0 */  isRaw={typeof OcclusionMap === "object" && "isRaw" in OcclusionMap && OcclusionMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Culling]`} name="Culling" id={typeof Culling === "object" && "id" in Culling ? Culling?.id : undefined} value={typeof Culling === "object" && "value" in Culling ? Culling?.value : Culling} /* default: Off */  isRaw={typeof Culling === "object" && "isRaw" in Culling && Culling.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AlphaHandling]`} name="AlphaHandling" id={typeof AlphaHandling === "object" && "id" in AlphaHandling ? AlphaHandling?.id : undefined} value={typeof AlphaHandling === "object" && "value" in AlphaHandling ? AlphaHandling?.value : AlphaHandling} /* default: Opaque */  isRaw={typeof AlphaHandling === "object" && "isRaw" in AlphaHandling && AlphaHandling.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AlphaClip" id={typeof AlphaClip === "object" && "id" in AlphaClip ? AlphaClip?.id : undefined} value={typeof AlphaClip === "object" && "value" in AlphaClip ? AlphaClip?.value : AlphaClip} /* default: 0 */  isRaw={typeof AlphaClip === "object" && "isRaw" in AlphaClip && AlphaClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  isRaw={typeof OffsetFactor === "object" && "isRaw" in OffsetFactor && OffsetFactor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  isRaw={typeof OffsetUnits === "object" && "isRaw" in OffsetUnits && OffsetUnits.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  isRaw={typeof RenderQueue === "object" && "isRaw" in RenderQueue && RenderQueue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SpecularColor" id={typeof SpecularColor === "object" && "id" in SpecularColor ? SpecularColor?.id : undefined} value={typeof SpecularColor === "object" && "value" in SpecularColor ? SpecularColor?.value : SpecularColor} /* default: [0; 0; 0; 0] */  isRaw={typeof SpecularColor === "object" && "isRaw" in SpecularColor && SpecularColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="SpecularMap" id={typeof SpecularMap === "object" && "id" in SpecularMap ? SpecularMap?.id : undefined} value={typeof SpecularMap === "object" && "value" in SpecularMap ? SpecularMap?.value : SpecularMap} /* default: ID0 */  isRaw={typeof SpecularMap === "object" && "isRaw" in SpecularMap && SpecularMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_regular-ID" id={typeof _regular === "object" && "id" in _regular ? _regular?.id : undefined} value={typeof _regular === "object" && "value" in _regular ? _regular?.value : _regular} /* default: ID0 */ readOnly isRaw={typeof _regular === "object" && "isRaw" in _regular && _regular.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_transparent-ID" id={typeof _transparent === "object" && "id" in _transparent ? _transparent?.id : undefined} value={typeof _transparent === "object" && "value" in _transparent ? _transparent?.value : _transparent} /* default: ID0 */ readOnly isRaw={typeof _transparent === "object" && "isRaw" in _transparent && _transparent.isRaw ? true : undefined} />
        </Component>
      );
    };
    