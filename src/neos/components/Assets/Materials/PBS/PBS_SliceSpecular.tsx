import { member, Member, Component } from "../../../../core";
    
    export interface PBS_SliceSpecularInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
TextureScale?: member<[number, number]>;
TextureOffset?: member<[number, number]>;
AlbedoColor?: member<[number, number, number, number]>;
EdgeColor?: member<[number, number, number, number]>;
AlbedoTexture?: member<any>;
EmissiveColor?: member<[number, number, number, number]>;
EdgeEmissiveColor?: member<[number, number, number, number]>;
EmissiveMap?: member<any>;
NormalMap?: member<any>;
NormalScale?: member<number>;
OcclusionMap?: member<any>;
DetailTextureScale?: member<[number, number]>;
DetailTextureOffset?: member<[number, number]>;
DetailAlbedoTexture?: member<any>;
DetailNormalMap?: member<any>;
DetailNormalScale?: member<number>;
Culling?: member<any>;
HideSlicers?: member<boolean>;
Slicers?: member<any>;
LocalSpace?: member<boolean>;
EdgeTransitionStart?: member<number>;
EdgeTransitionEnd?: member<number>;
AlphaHandling?: member<any>;
_useAlphaClip?: member<boolean>;
AlphaClip?: member<number>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
SpecularColor?: member<[number, number, number, number]>;
SpecularMap?: member<any>;
_regular?: member<any>;
_transparent?: member<any>;
    }
    
    export function PBS_SliceSpecular(props: PBS_SliceSpecularInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
TextureScale,
TextureOffset,
AlbedoColor,
EdgeColor,
AlbedoTexture,
EmissiveColor,
EdgeEmissiveColor,
EmissiveMap,
NormalMap,
NormalScale,
OcclusionMap,
DetailTextureScale,
DetailTextureOffset,
DetailAlbedoTexture,
DetailNormalMap,
DetailNormalScale,
Culling,
HideSlicers,
Slicers,
LocalSpace,
EdgeTransitionStart,
EdgeTransitionEnd,
AlphaHandling,
_useAlphaClip,
AlphaClip,
OffsetFactor,
OffsetUnits,
RenderQueue,
SpecularColor,
SpecularMap,
_regular,
_transparent, } = props;
    
      return (
        <Component type="FrooxEngine.PBS_SliceSpecular" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureScale" id={typeof TextureScale === "object" && "id" in TextureScale ? TextureScale?.id : undefined} value={typeof TextureScale === "object" && "value" in TextureScale ? TextureScale?.value : TextureScale} /* default: [0; 0] */  isRaw={typeof TextureScale === "object" && "isRaw" in TextureScale && TextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureOffset" id={typeof TextureOffset === "object" && "id" in TextureOffset ? TextureOffset?.id : undefined} value={typeof TextureOffset === "object" && "value" in TextureOffset ? TextureOffset?.value : TextureOffset} /* default: [0; 0] */  isRaw={typeof TextureOffset === "object" && "isRaw" in TextureOffset && TextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AlbedoColor" id={typeof AlbedoColor === "object" && "id" in AlbedoColor ? AlbedoColor?.id : undefined} value={typeof AlbedoColor === "object" && "value" in AlbedoColor ? AlbedoColor?.value : AlbedoColor} /* default: [0; 0; 0; 0] */  isRaw={typeof AlbedoColor === "object" && "isRaw" in AlbedoColor && AlbedoColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EdgeColor" id={typeof EdgeColor === "object" && "id" in EdgeColor ? EdgeColor?.id : undefined} value={typeof EdgeColor === "object" && "value" in EdgeColor ? EdgeColor?.value : EdgeColor} /* default: [0; 0; 0; 0] */  isRaw={typeof EdgeColor === "object" && "isRaw" in EdgeColor && EdgeColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="AlbedoTexture" id={typeof AlbedoTexture === "object" && "id" in AlbedoTexture ? AlbedoTexture?.id : undefined} value={typeof AlbedoTexture === "object" && "value" in AlbedoTexture ? AlbedoTexture?.value : AlbedoTexture} /* default: ID0 */  isRaw={typeof AlbedoTexture === "object" && "isRaw" in AlbedoTexture && AlbedoTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissiveColor" id={typeof EmissiveColor === "object" && "id" in EmissiveColor ? EmissiveColor?.id : undefined} value={typeof EmissiveColor === "object" && "value" in EmissiveColor ? EmissiveColor?.value : EmissiveColor} /* default: [0; 0; 0; 0] */  isRaw={typeof EmissiveColor === "object" && "isRaw" in EmissiveColor && EmissiveColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EdgeEmissiveColor" id={typeof EdgeEmissiveColor === "object" && "id" in EdgeEmissiveColor ? EdgeEmissiveColor?.id : undefined} value={typeof EdgeEmissiveColor === "object" && "value" in EdgeEmissiveColor ? EdgeEmissiveColor?.value : EdgeEmissiveColor} /* default: [0; 0; 0; 0] */  isRaw={typeof EdgeEmissiveColor === "object" && "isRaw" in EdgeEmissiveColor && EdgeEmissiveColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="EmissiveMap" id={typeof EmissiveMap === "object" && "id" in EmissiveMap ? EmissiveMap?.id : undefined} value={typeof EmissiveMap === "object" && "value" in EmissiveMap ? EmissiveMap?.value : EmissiveMap} /* default: ID0 */  isRaw={typeof EmissiveMap === "object" && "isRaw" in EmissiveMap && EmissiveMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap" id={typeof NormalMap === "object" && "id" in NormalMap ? NormalMap?.id : undefined} value={typeof NormalMap === "object" && "value" in NormalMap ? NormalMap?.value : NormalMap} /* default: ID0 */  isRaw={typeof NormalMap === "object" && "isRaw" in NormalMap && NormalMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalScale" id={typeof NormalScale === "object" && "id" in NormalScale ? NormalScale?.id : undefined} value={typeof NormalScale === "object" && "value" in NormalScale ? NormalScale?.value : NormalScale} /* default: 0 */  isRaw={typeof NormalScale === "object" && "isRaw" in NormalScale && NormalScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="OcclusionMap" id={typeof OcclusionMap === "object" && "id" in OcclusionMap ? OcclusionMap?.id : undefined} value={typeof OcclusionMap === "object" && "value" in OcclusionMap ? OcclusionMap?.value : OcclusionMap} /* default: ID0 */  isRaw={typeof OcclusionMap === "object" && "isRaw" in OcclusionMap && OcclusionMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="DetailTextureScale" id={typeof DetailTextureScale === "object" && "id" in DetailTextureScale ? DetailTextureScale?.id : undefined} value={typeof DetailTextureScale === "object" && "value" in DetailTextureScale ? DetailTextureScale?.value : DetailTextureScale} /* default: [0; 0] */  isRaw={typeof DetailTextureScale === "object" && "isRaw" in DetailTextureScale && DetailTextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="DetailTextureOffset" id={typeof DetailTextureOffset === "object" && "id" in DetailTextureOffset ? DetailTextureOffset?.id : undefined} value={typeof DetailTextureOffset === "object" && "value" in DetailTextureOffset ? DetailTextureOffset?.value : DetailTextureOffset} /* default: [0; 0] */  isRaw={typeof DetailTextureOffset === "object" && "isRaw" in DetailTextureOffset && DetailTextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="DetailAlbedoTexture" id={typeof DetailAlbedoTexture === "object" && "id" in DetailAlbedoTexture ? DetailAlbedoTexture?.id : undefined} value={typeof DetailAlbedoTexture === "object" && "value" in DetailAlbedoTexture ? DetailAlbedoTexture?.value : DetailAlbedoTexture} /* default: ID0 */  isRaw={typeof DetailAlbedoTexture === "object" && "isRaw" in DetailAlbedoTexture && DetailAlbedoTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="DetailNormalMap" id={typeof DetailNormalMap === "object" && "id" in DetailNormalMap ? DetailNormalMap?.id : undefined} value={typeof DetailNormalMap === "object" && "value" in DetailNormalMap ? DetailNormalMap?.value : DetailNormalMap} /* default: ID0 */  isRaw={typeof DetailNormalMap === "object" && "isRaw" in DetailNormalMap && DetailNormalMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DetailNormalScale" id={typeof DetailNormalScale === "object" && "id" in DetailNormalScale ? DetailNormalScale?.id : undefined} value={typeof DetailNormalScale === "object" && "value" in DetailNormalScale ? DetailNormalScale?.value : DetailNormalScale} /* default: 0 */  isRaw={typeof DetailNormalScale === "object" && "isRaw" in DetailNormalScale && DetailNormalScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Culling]`} name="Culling" id={typeof Culling === "object" && "id" in Culling ? Culling?.id : undefined} value={typeof Culling === "object" && "value" in Culling ? Culling?.value : Culling} /* default: Off */  isRaw={typeof Culling === "object" && "isRaw" in Culling && Culling.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HideSlicers" id={typeof HideSlicers === "object" && "id" in HideSlicers ? HideSlicers?.id : undefined} value={typeof HideSlicers === "object" && "value" in HideSlicers ? HideSlicers?.value : HideSlicers} /* default: false */  isRaw={typeof HideSlicers === "object" && "isRaw" in HideSlicers && HideSlicers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.PBS_Slice+Slicer]`} name="Slicers" id={typeof Slicers === "object" && "id" in Slicers ? Slicers?.id : undefined} value={typeof Slicers === "object" && "value" in Slicers ? Slicers?.value : Slicers} /* default: FrooxEngine.SyncList`1[FrooxEngine.PBS_Slice+Slicer] */  isRaw={typeof Slicers === "object" && "isRaw" in Slicers && Slicers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="LocalSpace" id={typeof LocalSpace === "object" && "id" in LocalSpace ? LocalSpace?.id : undefined} value={typeof LocalSpace === "object" && "value" in LocalSpace ? LocalSpace?.value : LocalSpace} /* default: false */  isRaw={typeof LocalSpace === "object" && "isRaw" in LocalSpace && LocalSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EdgeTransitionStart" id={typeof EdgeTransitionStart === "object" && "id" in EdgeTransitionStart ? EdgeTransitionStart?.id : undefined} value={typeof EdgeTransitionStart === "object" && "value" in EdgeTransitionStart ? EdgeTransitionStart?.value : EdgeTransitionStart} /* default: 0 */  isRaw={typeof EdgeTransitionStart === "object" && "isRaw" in EdgeTransitionStart && EdgeTransitionStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EdgeTransitionEnd" id={typeof EdgeTransitionEnd === "object" && "id" in EdgeTransitionEnd ? EdgeTransitionEnd?.id : undefined} value={typeof EdgeTransitionEnd === "object" && "value" in EdgeTransitionEnd ? EdgeTransitionEnd?.value : EdgeTransitionEnd} /* default: 0 */  isRaw={typeof EdgeTransitionEnd === "object" && "isRaw" in EdgeTransitionEnd && EdgeTransitionEnd.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AlphaHandling]`} name="AlphaHandling" id={typeof AlphaHandling === "object" && "id" in AlphaHandling ? AlphaHandling?.id : undefined} value={typeof AlphaHandling === "object" && "value" in AlphaHandling ? AlphaHandling?.value : AlphaHandling} /* default: Opaque */  isRaw={typeof AlphaHandling === "object" && "isRaw" in AlphaHandling && AlphaHandling.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_useAlphaClip-ID" id={typeof _useAlphaClip === "object" && "id" in _useAlphaClip ? _useAlphaClip?.id : undefined} value={typeof _useAlphaClip === "object" && "value" in _useAlphaClip ? _useAlphaClip?.value : _useAlphaClip} /* default: false */ readOnly isRaw={typeof _useAlphaClip === "object" && "isRaw" in _useAlphaClip && _useAlphaClip.isRaw ? true : undefined} />
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
    