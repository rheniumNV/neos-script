import { member, Member, Component } from "../../../core";
    
    export interface XiexeToonMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
MainTexture?: member<any>;
Color?: member<[number, number, number, number]>;
UseVertexColors?: member<boolean>;
BlendMode?: member<any>;
ZWrite?: member<any>;
AlphaClip?: member<number>;
MainTextureScale?: member<[number, number]>;
MainTextureOffset?: member<[number, number]>;
Saturation?: member<number>;
NormalMap?: member<any>;
NormalMapScale?: member<[number, number]>;
NormalMapOffset?: member<[number, number]>;
NormalScale?: member<number>;
Metallic?: member<number>;
Glossiness?: member<number>;
Reflectivity?: member<number>;
MetallicGlossMap?: member<any>;
MetallicGlossMapScale?: member<[number, number]>;
MetallicGlossMapOffset?: member<[number, number]>;
EmissionMap?: member<any>;
EmissionColor?: member<[number, number, number, number]>;
EmissionMapScale?: member<[number, number]>;
EmissionMapOffset?: member<[number, number]>;
RimColor?: member<[number, number, number, number]>;
RimAlbedoTint?: member<number>;
RimAttenuationEffect?: member<number>;
RimIntensity?: member<number>;
RimRange?: member<number>;
RimThreshold?: member<number>;
RimSharpness?: member<number>;
SpecularIntensity?: member<number>;
SpecularArea?: member<number>;
Matcap?: member<any>;
MatcapTint?: member<[number, number, number, number]>;
OcclusionMap?: member<any>;
OcclusionMapScale?: member<[number, number]>;
OcclusionMapOffset?: member<[number, number]>;
OcclusionColor?: member<[number, number, number, number]>;
Outline?: member<any>;
OutlineWidth?: member<number>;
OutlineColor?: member<[number, number, number, number]>;
OutlineAlbedoTint?: member<boolean>;
OutlineMask?: member<any>;
ShadowRamp?: member<any>;
ShadowRampMask?: member<any>;
ShadowRampMaskScale?: member<[number, number]>;
ShadowRampMaskOffset?: member<[number, number]>;
ShadowRim?: member<[number, number, number, number]>;
ShadowSharpness?: member<number>;
ShadowRimRange?: member<number>;
ShadowRimThreshold?: member<number>;
ShadowRimSharpness?: member<number>;
ShadowRimAlbedoTint?: member<number>;
ThicknessMap?: member<any>;
ThicknessMapScale?: member<[number, number]>;
ThicknessMapOffset?: member<[number, number]>;
SubsurfaceColor?: member<[number, number, number, number]>;
SubsurfaceDistortion?: member<number>;
SubsurfacePower?: member<number>;
SubsurfaceScale?: member<number>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
Culling?: member<any>;
ColorMask?: member<any>;
AlbedoUV?: member<number>;
NormalUV?: member<number>;
MetallicUV?: member<number>;
ThicknessUV?: member<number>;
OcclusionUV?: member<number>;
EmissionUV?: member<number>;
RenderQueue?: member<number>;
__legacyCutout?: member<boolean>;
_regular?: member<any>;
_outline?: member<any>;
    }
    
    export function XiexeToonMaterial(props: XiexeToonMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
MainTexture,
Color,
UseVertexColors,
BlendMode,
ZWrite,
AlphaClip,
MainTextureScale,
MainTextureOffset,
Saturation,
NormalMap,
NormalMapScale,
NormalMapOffset,
NormalScale,
Metallic,
Glossiness,
Reflectivity,
MetallicGlossMap,
MetallicGlossMapScale,
MetallicGlossMapOffset,
EmissionMap,
EmissionColor,
EmissionMapScale,
EmissionMapOffset,
RimColor,
RimAlbedoTint,
RimAttenuationEffect,
RimIntensity,
RimRange,
RimThreshold,
RimSharpness,
SpecularIntensity,
SpecularArea,
Matcap,
MatcapTint,
OcclusionMap,
OcclusionMapScale,
OcclusionMapOffset,
OcclusionColor,
Outline,
OutlineWidth,
OutlineColor,
OutlineAlbedoTint,
OutlineMask,
ShadowRamp,
ShadowRampMask,
ShadowRampMaskScale,
ShadowRampMaskOffset,
ShadowRim,
ShadowSharpness,
ShadowRimRange,
ShadowRimThreshold,
ShadowRimSharpness,
ShadowRimAlbedoTint,
ThicknessMap,
ThicknessMapScale,
ThicknessMapOffset,
SubsurfaceColor,
SubsurfaceDistortion,
SubsurfacePower,
SubsurfaceScale,
OffsetFactor,
OffsetUnits,
Culling,
ColorMask,
AlbedoUV,
NormalUV,
MetallicUV,
ThicknessUV,
OcclusionUV,
EmissionUV,
RenderQueue,
__legacyCutout,
_regular,
_outline, } = props;
    
      return (
        <Component type="FrooxEngine.XiexeToonMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="MainTexture" id={typeof MainTexture === "object" && "id" in MainTexture ? MainTexture?.id : undefined} value={typeof MainTexture === "object" && "value" in MainTexture ? MainTexture?.value : MainTexture} /* default: ID0 */  isRaw={typeof MainTexture === "object" && "isRaw" in MainTexture && MainTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseVertexColors" id={typeof UseVertexColors === "object" && "id" in UseVertexColors ? UseVertexColors?.id : undefined} value={typeof UseVertexColors === "object" && "value" in UseVertexColors ? UseVertexColors?.value : UseVertexColors} /* default: false */  isRaw={typeof UseVertexColors === "object" && "isRaw" in UseVertexColors && UseVertexColors.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  isRaw={typeof BlendMode === "object" && "isRaw" in BlendMode && BlendMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`} name="ZWrite" id={typeof ZWrite === "object" && "id" in ZWrite ? ZWrite?.id : undefined} value={typeof ZWrite === "object" && "value" in ZWrite ? ZWrite?.value : ZWrite} /* default: Auto */  isRaw={typeof ZWrite === "object" && "isRaw" in ZWrite && ZWrite.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AlphaClip" id={typeof AlphaClip === "object" && "id" in AlphaClip ? AlphaClip?.id : undefined} value={typeof AlphaClip === "object" && "value" in AlphaClip ? AlphaClip?.value : AlphaClip} /* default: 0 */  isRaw={typeof AlphaClip === "object" && "isRaw" in AlphaClip && AlphaClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MainTextureScale" id={typeof MainTextureScale === "object" && "id" in MainTextureScale ? MainTextureScale?.id : undefined} value={typeof MainTextureScale === "object" && "value" in MainTextureScale ? MainTextureScale?.value : MainTextureScale} /* default: [0; 0] */  isRaw={typeof MainTextureScale === "object" && "isRaw" in MainTextureScale && MainTextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MainTextureOffset" id={typeof MainTextureOffset === "object" && "id" in MainTextureOffset ? MainTextureOffset?.id : undefined} value={typeof MainTextureOffset === "object" && "value" in MainTextureOffset ? MainTextureOffset?.value : MainTextureOffset} /* default: [0; 0] */  isRaw={typeof MainTextureOffset === "object" && "isRaw" in MainTextureOffset && MainTextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Saturation" id={typeof Saturation === "object" && "id" in Saturation ? Saturation?.id : undefined} value={typeof Saturation === "object" && "value" in Saturation ? Saturation?.value : Saturation} /* default: 0 */  isRaw={typeof Saturation === "object" && "isRaw" in Saturation && Saturation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap" id={typeof NormalMap === "object" && "id" in NormalMap ? NormalMap?.id : undefined} value={typeof NormalMap === "object" && "value" in NormalMap ? NormalMap?.value : NormalMap} /* default: ID0 */  isRaw={typeof NormalMap === "object" && "isRaw" in NormalMap && NormalMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="NormalMapScale" id={typeof NormalMapScale === "object" && "id" in NormalMapScale ? NormalMapScale?.id : undefined} value={typeof NormalMapScale === "object" && "value" in NormalMapScale ? NormalMapScale?.value : NormalMapScale} /* default: [0; 0] */  isRaw={typeof NormalMapScale === "object" && "isRaw" in NormalMapScale && NormalMapScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="NormalMapOffset" id={typeof NormalMapOffset === "object" && "id" in NormalMapOffset ? NormalMapOffset?.id : undefined} value={typeof NormalMapOffset === "object" && "value" in NormalMapOffset ? NormalMapOffset?.value : NormalMapOffset} /* default: [0; 0] */  isRaw={typeof NormalMapOffset === "object" && "isRaw" in NormalMapOffset && NormalMapOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalScale" id={typeof NormalScale === "object" && "id" in NormalScale ? NormalScale?.id : undefined} value={typeof NormalScale === "object" && "value" in NormalScale ? NormalScale?.value : NormalScale} /* default: 0 */  isRaw={typeof NormalScale === "object" && "isRaw" in NormalScale && NormalScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Metallic" id={typeof Metallic === "object" && "id" in Metallic ? Metallic?.id : undefined} value={typeof Metallic === "object" && "value" in Metallic ? Metallic?.value : Metallic} /* default: 0 */  isRaw={typeof Metallic === "object" && "isRaw" in Metallic && Metallic.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Glossiness" id={typeof Glossiness === "object" && "id" in Glossiness ? Glossiness?.id : undefined} value={typeof Glossiness === "object" && "value" in Glossiness ? Glossiness?.value : Glossiness} /* default: 0 */  isRaw={typeof Glossiness === "object" && "isRaw" in Glossiness && Glossiness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Reflectivity" id={typeof Reflectivity === "object" && "id" in Reflectivity ? Reflectivity?.id : undefined} value={typeof Reflectivity === "object" && "value" in Reflectivity ? Reflectivity?.value : Reflectivity} /* default: 0 */  isRaw={typeof Reflectivity === "object" && "isRaw" in Reflectivity && Reflectivity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="MetallicGlossMap" id={typeof MetallicGlossMap === "object" && "id" in MetallicGlossMap ? MetallicGlossMap?.id : undefined} value={typeof MetallicGlossMap === "object" && "value" in MetallicGlossMap ? MetallicGlossMap?.value : MetallicGlossMap} /* default: ID0 */  isRaw={typeof MetallicGlossMap === "object" && "isRaw" in MetallicGlossMap && MetallicGlossMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MetallicGlossMapScale" id={typeof MetallicGlossMapScale === "object" && "id" in MetallicGlossMapScale ? MetallicGlossMapScale?.id : undefined} value={typeof MetallicGlossMapScale === "object" && "value" in MetallicGlossMapScale ? MetallicGlossMapScale?.value : MetallicGlossMapScale} /* default: [0; 0] */  isRaw={typeof MetallicGlossMapScale === "object" && "isRaw" in MetallicGlossMapScale && MetallicGlossMapScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MetallicGlossMapOffset" id={typeof MetallicGlossMapOffset === "object" && "id" in MetallicGlossMapOffset ? MetallicGlossMapOffset?.id : undefined} value={typeof MetallicGlossMapOffset === "object" && "value" in MetallicGlossMapOffset ? MetallicGlossMapOffset?.value : MetallicGlossMapOffset} /* default: [0; 0] */  isRaw={typeof MetallicGlossMapOffset === "object" && "isRaw" in MetallicGlossMapOffset && MetallicGlossMapOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="EmissionMap" id={typeof EmissionMap === "object" && "id" in EmissionMap ? EmissionMap?.id : undefined} value={typeof EmissionMap === "object" && "value" in EmissionMap ? EmissionMap?.value : EmissionMap} /* default: ID0 */  isRaw={typeof EmissionMap === "object" && "isRaw" in EmissionMap && EmissionMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissionColor" id={typeof EmissionColor === "object" && "id" in EmissionColor ? EmissionColor?.id : undefined} value={typeof EmissionColor === "object" && "value" in EmissionColor ? EmissionColor?.value : EmissionColor} /* default: [0; 0; 0; 0] */  isRaw={typeof EmissionColor === "object" && "isRaw" in EmissionColor && EmissionColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="EmissionMapScale" id={typeof EmissionMapScale === "object" && "id" in EmissionMapScale ? EmissionMapScale?.id : undefined} value={typeof EmissionMapScale === "object" && "value" in EmissionMapScale ? EmissionMapScale?.value : EmissionMapScale} /* default: [0; 0] */  isRaw={typeof EmissionMapScale === "object" && "isRaw" in EmissionMapScale && EmissionMapScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="EmissionMapOffset" id={typeof EmissionMapOffset === "object" && "id" in EmissionMapOffset ? EmissionMapOffset?.id : undefined} value={typeof EmissionMapOffset === "object" && "value" in EmissionMapOffset ? EmissionMapOffset?.value : EmissionMapOffset} /* default: [0; 0] */  isRaw={typeof EmissionMapOffset === "object" && "isRaw" in EmissionMapOffset && EmissionMapOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="RimColor" id={typeof RimColor === "object" && "id" in RimColor ? RimColor?.id : undefined} value={typeof RimColor === "object" && "value" in RimColor ? RimColor?.value : RimColor} /* default: [0; 0; 0; 0] */  isRaw={typeof RimColor === "object" && "isRaw" in RimColor && RimColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RimAlbedoTint" id={typeof RimAlbedoTint === "object" && "id" in RimAlbedoTint ? RimAlbedoTint?.id : undefined} value={typeof RimAlbedoTint === "object" && "value" in RimAlbedoTint ? RimAlbedoTint?.value : RimAlbedoTint} /* default: 0 */  isRaw={typeof RimAlbedoTint === "object" && "isRaw" in RimAlbedoTint && RimAlbedoTint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RimAttenuationEffect" id={typeof RimAttenuationEffect === "object" && "id" in RimAttenuationEffect ? RimAttenuationEffect?.id : undefined} value={typeof RimAttenuationEffect === "object" && "value" in RimAttenuationEffect ? RimAttenuationEffect?.value : RimAttenuationEffect} /* default: 0 */  isRaw={typeof RimAttenuationEffect === "object" && "isRaw" in RimAttenuationEffect && RimAttenuationEffect.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RimIntensity" id={typeof RimIntensity === "object" && "id" in RimIntensity ? RimIntensity?.id : undefined} value={typeof RimIntensity === "object" && "value" in RimIntensity ? RimIntensity?.value : RimIntensity} /* default: 0 */  isRaw={typeof RimIntensity === "object" && "isRaw" in RimIntensity && RimIntensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RimRange" id={typeof RimRange === "object" && "id" in RimRange ? RimRange?.id : undefined} value={typeof RimRange === "object" && "value" in RimRange ? RimRange?.value : RimRange} /* default: 0 */  isRaw={typeof RimRange === "object" && "isRaw" in RimRange && RimRange.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RimThreshold" id={typeof RimThreshold === "object" && "id" in RimThreshold ? RimThreshold?.id : undefined} value={typeof RimThreshold === "object" && "value" in RimThreshold ? RimThreshold?.value : RimThreshold} /* default: 0 */  isRaw={typeof RimThreshold === "object" && "isRaw" in RimThreshold && RimThreshold.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RimSharpness" id={typeof RimSharpness === "object" && "id" in RimSharpness ? RimSharpness?.id : undefined} value={typeof RimSharpness === "object" && "value" in RimSharpness ? RimSharpness?.value : RimSharpness} /* default: 0 */  isRaw={typeof RimSharpness === "object" && "isRaw" in RimSharpness && RimSharpness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SpecularIntensity" id={typeof SpecularIntensity === "object" && "id" in SpecularIntensity ? SpecularIntensity?.id : undefined} value={typeof SpecularIntensity === "object" && "value" in SpecularIntensity ? SpecularIntensity?.value : SpecularIntensity} /* default: 0 */  isRaw={typeof SpecularIntensity === "object" && "isRaw" in SpecularIntensity && SpecularIntensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SpecularArea" id={typeof SpecularArea === "object" && "id" in SpecularArea ? SpecularArea?.id : undefined} value={typeof SpecularArea === "object" && "value" in SpecularArea ? SpecularArea?.value : SpecularArea} /* default: 0 */  isRaw={typeof SpecularArea === "object" && "isRaw" in SpecularArea && SpecularArea.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="Matcap" id={typeof Matcap === "object" && "id" in Matcap ? Matcap?.id : undefined} value={typeof Matcap === "object" && "value" in Matcap ? Matcap?.value : Matcap} /* default: ID0 */  isRaw={typeof Matcap === "object" && "isRaw" in Matcap && Matcap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="MatcapTint" id={typeof MatcapTint === "object" && "id" in MatcapTint ? MatcapTint?.id : undefined} value={typeof MatcapTint === "object" && "value" in MatcapTint ? MatcapTint?.value : MatcapTint} /* default: [0; 0; 0; 0] */  isRaw={typeof MatcapTint === "object" && "isRaw" in MatcapTint && MatcapTint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="OcclusionMap" id={typeof OcclusionMap === "object" && "id" in OcclusionMap ? OcclusionMap?.id : undefined} value={typeof OcclusionMap === "object" && "value" in OcclusionMap ? OcclusionMap?.value : OcclusionMap} /* default: ID0 */  isRaw={typeof OcclusionMap === "object" && "isRaw" in OcclusionMap && OcclusionMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="OcclusionMapScale" id={typeof OcclusionMapScale === "object" && "id" in OcclusionMapScale ? OcclusionMapScale?.id : undefined} value={typeof OcclusionMapScale === "object" && "value" in OcclusionMapScale ? OcclusionMapScale?.value : OcclusionMapScale} /* default: [0; 0] */  isRaw={typeof OcclusionMapScale === "object" && "isRaw" in OcclusionMapScale && OcclusionMapScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="OcclusionMapOffset" id={typeof OcclusionMapOffset === "object" && "id" in OcclusionMapOffset ? OcclusionMapOffset?.id : undefined} value={typeof OcclusionMapOffset === "object" && "value" in OcclusionMapOffset ? OcclusionMapOffset?.value : OcclusionMapOffset} /* default: [0; 0] */  isRaw={typeof OcclusionMapOffset === "object" && "isRaw" in OcclusionMapOffset && OcclusionMapOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="OcclusionColor" id={typeof OcclusionColor === "object" && "id" in OcclusionColor ? OcclusionColor?.id : undefined} value={typeof OcclusionColor === "object" && "value" in OcclusionColor ? OcclusionColor?.value : OcclusionColor} /* default: [0; 0; 0; 0] */  isRaw={typeof OcclusionColor === "object" && "isRaw" in OcclusionColor && OcclusionColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.XiexeToonMaterial+OutlineStyle]`} name="Outline" id={typeof Outline === "object" && "id" in Outline ? Outline?.id : undefined} value={typeof Outline === "object" && "value" in Outline ? Outline?.value : Outline} /* default: None */  isRaw={typeof Outline === "object" && "isRaw" in Outline && Outline.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OutlineWidth" id={typeof OutlineWidth === "object" && "id" in OutlineWidth ? OutlineWidth?.id : undefined} value={typeof OutlineWidth === "object" && "value" in OutlineWidth ? OutlineWidth?.value : OutlineWidth} /* default: 0 */  isRaw={typeof OutlineWidth === "object" && "isRaw" in OutlineWidth && OutlineWidth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="OutlineColor" id={typeof OutlineColor === "object" && "id" in OutlineColor ? OutlineColor?.id : undefined} value={typeof OutlineColor === "object" && "value" in OutlineColor ? OutlineColor?.value : OutlineColor} /* default: [0; 0; 0; 0] */  isRaw={typeof OutlineColor === "object" && "isRaw" in OutlineColor && OutlineColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="OutlineAlbedoTint" id={typeof OutlineAlbedoTint === "object" && "id" in OutlineAlbedoTint ? OutlineAlbedoTint?.id : undefined} value={typeof OutlineAlbedoTint === "object" && "value" in OutlineAlbedoTint ? OutlineAlbedoTint?.value : OutlineAlbedoTint} /* default: false */  isRaw={typeof OutlineAlbedoTint === "object" && "isRaw" in OutlineAlbedoTint && OutlineAlbedoTint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="OutlineMask" id={typeof OutlineMask === "object" && "id" in OutlineMask ? OutlineMask?.id : undefined} value={typeof OutlineMask === "object" && "value" in OutlineMask ? OutlineMask?.value : OutlineMask} /* default: ID0 */  isRaw={typeof OutlineMask === "object" && "isRaw" in OutlineMask && OutlineMask.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="ShadowRamp" id={typeof ShadowRamp === "object" && "id" in ShadowRamp ? ShadowRamp?.id : undefined} value={typeof ShadowRamp === "object" && "value" in ShadowRamp ? ShadowRamp?.value : ShadowRamp} /* default: ID0 */  isRaw={typeof ShadowRamp === "object" && "isRaw" in ShadowRamp && ShadowRamp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="ShadowRampMask" id={typeof ShadowRampMask === "object" && "id" in ShadowRampMask ? ShadowRampMask?.id : undefined} value={typeof ShadowRampMask === "object" && "value" in ShadowRampMask ? ShadowRampMask?.value : ShadowRampMask} /* default: ID0 */  isRaw={typeof ShadowRampMask === "object" && "isRaw" in ShadowRampMask && ShadowRampMask.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ShadowRampMaskScale" id={typeof ShadowRampMaskScale === "object" && "id" in ShadowRampMaskScale ? ShadowRampMaskScale?.id : undefined} value={typeof ShadowRampMaskScale === "object" && "value" in ShadowRampMaskScale ? ShadowRampMaskScale?.value : ShadowRampMaskScale} /* default: [0; 0] */  isRaw={typeof ShadowRampMaskScale === "object" && "isRaw" in ShadowRampMaskScale && ShadowRampMaskScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ShadowRampMaskOffset" id={typeof ShadowRampMaskOffset === "object" && "id" in ShadowRampMaskOffset ? ShadowRampMaskOffset?.id : undefined} value={typeof ShadowRampMaskOffset === "object" && "value" in ShadowRampMaskOffset ? ShadowRampMaskOffset?.value : ShadowRampMaskOffset} /* default: [0; 0] */  isRaw={typeof ShadowRampMaskOffset === "object" && "isRaw" in ShadowRampMaskOffset && ShadowRampMaskOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="ShadowRim" id={typeof ShadowRim === "object" && "id" in ShadowRim ? ShadowRim?.id : undefined} value={typeof ShadowRim === "object" && "value" in ShadowRim ? ShadowRim?.value : ShadowRim} /* default: [0; 0; 0; 0] */  isRaw={typeof ShadowRim === "object" && "isRaw" in ShadowRim && ShadowRim.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ShadowSharpness" id={typeof ShadowSharpness === "object" && "id" in ShadowSharpness ? ShadowSharpness?.id : undefined} value={typeof ShadowSharpness === "object" && "value" in ShadowSharpness ? ShadowSharpness?.value : ShadowSharpness} /* default: 0 */  isRaw={typeof ShadowSharpness === "object" && "isRaw" in ShadowSharpness && ShadowSharpness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ShadowRimRange" id={typeof ShadowRimRange === "object" && "id" in ShadowRimRange ? ShadowRimRange?.id : undefined} value={typeof ShadowRimRange === "object" && "value" in ShadowRimRange ? ShadowRimRange?.value : ShadowRimRange} /* default: 0 */  isRaw={typeof ShadowRimRange === "object" && "isRaw" in ShadowRimRange && ShadowRimRange.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ShadowRimThreshold" id={typeof ShadowRimThreshold === "object" && "id" in ShadowRimThreshold ? ShadowRimThreshold?.id : undefined} value={typeof ShadowRimThreshold === "object" && "value" in ShadowRimThreshold ? ShadowRimThreshold?.value : ShadowRimThreshold} /* default: 0 */  isRaw={typeof ShadowRimThreshold === "object" && "isRaw" in ShadowRimThreshold && ShadowRimThreshold.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ShadowRimSharpness" id={typeof ShadowRimSharpness === "object" && "id" in ShadowRimSharpness ? ShadowRimSharpness?.id : undefined} value={typeof ShadowRimSharpness === "object" && "value" in ShadowRimSharpness ? ShadowRimSharpness?.value : ShadowRimSharpness} /* default: 0 */  isRaw={typeof ShadowRimSharpness === "object" && "isRaw" in ShadowRimSharpness && ShadowRimSharpness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ShadowRimAlbedoTint" id={typeof ShadowRimAlbedoTint === "object" && "id" in ShadowRimAlbedoTint ? ShadowRimAlbedoTint?.id : undefined} value={typeof ShadowRimAlbedoTint === "object" && "value" in ShadowRimAlbedoTint ? ShadowRimAlbedoTint?.value : ShadowRimAlbedoTint} /* default: 0 */  isRaw={typeof ShadowRimAlbedoTint === "object" && "isRaw" in ShadowRimAlbedoTint && ShadowRimAlbedoTint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="ThicknessMap" id={typeof ThicknessMap === "object" && "id" in ThicknessMap ? ThicknessMap?.id : undefined} value={typeof ThicknessMap === "object" && "value" in ThicknessMap ? ThicknessMap?.value : ThicknessMap} /* default: ID0 */  isRaw={typeof ThicknessMap === "object" && "isRaw" in ThicknessMap && ThicknessMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ThicknessMapScale" id={typeof ThicknessMapScale === "object" && "id" in ThicknessMapScale ? ThicknessMapScale?.id : undefined} value={typeof ThicknessMapScale === "object" && "value" in ThicknessMapScale ? ThicknessMapScale?.value : ThicknessMapScale} /* default: [0; 0] */  isRaw={typeof ThicknessMapScale === "object" && "isRaw" in ThicknessMapScale && ThicknessMapScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ThicknessMapOffset" id={typeof ThicknessMapOffset === "object" && "id" in ThicknessMapOffset ? ThicknessMapOffset?.id : undefined} value={typeof ThicknessMapOffset === "object" && "value" in ThicknessMapOffset ? ThicknessMapOffset?.value : ThicknessMapOffset} /* default: [0; 0] */  isRaw={typeof ThicknessMapOffset === "object" && "isRaw" in ThicknessMapOffset && ThicknessMapOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SubsurfaceColor" id={typeof SubsurfaceColor === "object" && "id" in SubsurfaceColor ? SubsurfaceColor?.id : undefined} value={typeof SubsurfaceColor === "object" && "value" in SubsurfaceColor ? SubsurfaceColor?.value : SubsurfaceColor} /* default: [0; 0; 0; 0] */  isRaw={typeof SubsurfaceColor === "object" && "isRaw" in SubsurfaceColor && SubsurfaceColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SubsurfaceDistortion" id={typeof SubsurfaceDistortion === "object" && "id" in SubsurfaceDistortion ? SubsurfaceDistortion?.id : undefined} value={typeof SubsurfaceDistortion === "object" && "value" in SubsurfaceDistortion ? SubsurfaceDistortion?.value : SubsurfaceDistortion} /* default: 0 */  isRaw={typeof SubsurfaceDistortion === "object" && "isRaw" in SubsurfaceDistortion && SubsurfaceDistortion.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SubsurfacePower" id={typeof SubsurfacePower === "object" && "id" in SubsurfacePower ? SubsurfacePower?.id : undefined} value={typeof SubsurfacePower === "object" && "value" in SubsurfacePower ? SubsurfacePower?.value : SubsurfacePower} /* default: 0 */  isRaw={typeof SubsurfacePower === "object" && "isRaw" in SubsurfacePower && SubsurfacePower.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SubsurfaceScale" id={typeof SubsurfaceScale === "object" && "id" in SubsurfaceScale ? SubsurfaceScale?.id : undefined} value={typeof SubsurfaceScale === "object" && "value" in SubsurfaceScale ? SubsurfaceScale?.value : SubsurfaceScale} /* default: 0 */  isRaw={typeof SubsurfaceScale === "object" && "isRaw" in SubsurfaceScale && SubsurfaceScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  isRaw={typeof OffsetFactor === "object" && "isRaw" in OffsetFactor && OffsetFactor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  isRaw={typeof OffsetUnits === "object" && "isRaw" in OffsetUnits && OffsetUnits.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Culling]`} name="Culling" id={typeof Culling === "object" && "id" in Culling ? Culling?.id : undefined} value={typeof Culling === "object" && "value" in Culling ? Culling?.value : Culling} /* default: Off */  isRaw={typeof Culling === "object" && "isRaw" in Culling && Culling.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ColorMask]`} name="ColorMask" id={typeof ColorMask === "object" && "id" in ColorMask ? ColorMask?.id : undefined} value={typeof ColorMask === "object" && "value" in ColorMask ? ColorMask?.value : ColorMask} /* default: None */  isRaw={typeof ColorMask === "object" && "isRaw" in ColorMask && ColorMask.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="AlbedoUV" id={typeof AlbedoUV === "object" && "id" in AlbedoUV ? AlbedoUV?.id : undefined} value={typeof AlbedoUV === "object" && "value" in AlbedoUV ? AlbedoUV?.value : AlbedoUV} /* default: 0 */  isRaw={typeof AlbedoUV === "object" && "isRaw" in AlbedoUV && AlbedoUV.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="NormalUV" id={typeof NormalUV === "object" && "id" in NormalUV ? NormalUV?.id : undefined} value={typeof NormalUV === "object" && "value" in NormalUV ? NormalUV?.value : NormalUV} /* default: 0 */  isRaw={typeof NormalUV === "object" && "isRaw" in NormalUV && NormalUV.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MetallicUV" id={typeof MetallicUV === "object" && "id" in MetallicUV ? MetallicUV?.id : undefined} value={typeof MetallicUV === "object" && "value" in MetallicUV ? MetallicUV?.value : MetallicUV} /* default: 0 */  isRaw={typeof MetallicUV === "object" && "isRaw" in MetallicUV && MetallicUV.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="ThicknessUV" id={typeof ThicknessUV === "object" && "id" in ThicknessUV ? ThicknessUV?.id : undefined} value={typeof ThicknessUV === "object" && "value" in ThicknessUV ? ThicknessUV?.value : ThicknessUV} /* default: 0 */  isRaw={typeof ThicknessUV === "object" && "isRaw" in ThicknessUV && ThicknessUV.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="OcclusionUV" id={typeof OcclusionUV === "object" && "id" in OcclusionUV ? OcclusionUV?.id : undefined} value={typeof OcclusionUV === "object" && "value" in OcclusionUV ? OcclusionUV?.value : OcclusionUV} /* default: 0 */  isRaw={typeof OcclusionUV === "object" && "isRaw" in OcclusionUV && OcclusionUV.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="EmissionUV" id={typeof EmissionUV === "object" && "id" in EmissionUV ? EmissionUV?.id : undefined} value={typeof EmissionUV === "object" && "value" in EmissionUV ? EmissionUV?.value : EmissionUV} /* default: 0 */  isRaw={typeof EmissionUV === "object" && "isRaw" in EmissionUV && EmissionUV.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  isRaw={typeof RenderQueue === "object" && "isRaw" in RenderQueue && RenderQueue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="__legacyCutout-ID" id={typeof __legacyCutout === "object" && "id" in __legacyCutout ? __legacyCutout?.id : undefined} value={typeof __legacyCutout === "object" && "value" in __legacyCutout ? __legacyCutout?.value : __legacyCutout} /* default: false */ readOnly isRaw={typeof __legacyCutout === "object" && "isRaw" in __legacyCutout && __legacyCutout.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_regular-ID" id={typeof _regular === "object" && "id" in _regular ? _regular?.id : undefined} value={typeof _regular === "object" && "value" in _regular ? _regular?.value : _regular} /* default: ID0 */ readOnly isRaw={typeof _regular === "object" && "isRaw" in _regular && _regular.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_outline-ID" id={typeof _outline === "object" && "id" in _outline ? _outline?.id : undefined} value={typeof _outline === "object" && "value" in _outline ? _outline?.value : _outline} /* default: ID0 */ readOnly isRaw={typeof _outline === "object" && "isRaw" in _outline && _outline.isRaw ? true : undefined} />
        </Component>
      );
    };
    