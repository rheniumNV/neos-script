import { member, Member, Component } from "../../../../core";
    
    export interface PBS_ColorSplatSpecularInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
ColorMap?: member<any>;
ColorMapScale?: member<[number, number]>;
ColorMapOffset?: member<[number, number]>;
PackedHeightMap?: member<any>;
HeightTransitionRange?: member<number>;
TextureScale?: member<[number, number]>;
TextureOffset?: member<[number, number]>;
AlbedoColor0?: member<[number, number, number, number]>;
AlbedoColor1?: member<[number, number, number, number]>;
AlbedoColor2?: member<[number, number, number, number]>;
AlbedoColor3?: member<[number, number, number, number]>;
AlbedoTexture0?: member<any>;
AlbedoTexture1?: member<any>;
AlbedoTexture2?: member<any>;
AlbedoTexture3?: member<any>;
EmissiveColor0?: member<[number, number, number, number]>;
EmissiveColor1?: member<[number, number, number, number]>;
EmissiveColor2?: member<[number, number, number, number]>;
EmissiveColor3?: member<[number, number, number, number]>;
EmissiveMap0?: member<any>;
EmissiveMap1?: member<any>;
EmissiveMap2?: member<any>;
EmissiveMap3?: member<any>;
PackedEmissionMap?: member<any>;
PackedNormalMap01?: member<any>;
PackedNormalMap23?: member<any>;
NormalScale0?: member<number>;
NormalScale1?: member<number>;
NormalScale2?: member<number>;
NormalScale3?: member<number>;
AlphaClip?: member<number>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
SpecularColor0?: member<[number, number, number, number]>;
SpecularColor1?: member<[number, number, number, number]>;
SpecularColor2?: member<[number, number, number, number]>;
SpecularColor3?: member<[number, number, number, number]>;
SpecularMap0?: member<any>;
SpecularMap1?: member<any>;
SpecularMap2?: member<any>;
SpecularMap3?: member<any>;
    }
    
    export function PBS_ColorSplatSpecular(props: PBS_ColorSplatSpecularInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
ColorMap,
ColorMapScale,
ColorMapOffset,
PackedHeightMap,
HeightTransitionRange,
TextureScale,
TextureOffset,
AlbedoColor0,
AlbedoColor1,
AlbedoColor2,
AlbedoColor3,
AlbedoTexture0,
AlbedoTexture1,
AlbedoTexture2,
AlbedoTexture3,
EmissiveColor0,
EmissiveColor1,
EmissiveColor2,
EmissiveColor3,
EmissiveMap0,
EmissiveMap1,
EmissiveMap2,
EmissiveMap3,
PackedEmissionMap,
PackedNormalMap01,
PackedNormalMap23,
NormalScale0,
NormalScale1,
NormalScale2,
NormalScale3,
AlphaClip,
OffsetFactor,
OffsetUnits,
RenderQueue,
SpecularColor0,
SpecularColor1,
SpecularColor2,
SpecularColor3,
SpecularMap0,
SpecularMap1,
SpecularMap2,
SpecularMap3, } = props;
    
      return (
        <Component type="FrooxEngine.PBS_ColorSplatSpecular" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ readOnly isRaw={typeof _shader === "object" && "isRaw" in _shader && _shader.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="ColorMap" id={typeof ColorMap === "object" && "id" in ColorMap ? ColorMap?.id : undefined} value={typeof ColorMap === "object" && "value" in ColorMap ? ColorMap?.value : ColorMap} /* default: ID0 */  isRaw={typeof ColorMap === "object" && "isRaw" in ColorMap && ColorMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ColorMapScale" id={typeof ColorMapScale === "object" && "id" in ColorMapScale ? ColorMapScale?.id : undefined} value={typeof ColorMapScale === "object" && "value" in ColorMapScale ? ColorMapScale?.value : ColorMapScale} /* default: [0; 0] */  isRaw={typeof ColorMapScale === "object" && "isRaw" in ColorMapScale && ColorMapScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ColorMapOffset" id={typeof ColorMapOffset === "object" && "id" in ColorMapOffset ? ColorMapOffset?.id : undefined} value={typeof ColorMapOffset === "object" && "value" in ColorMapOffset ? ColorMapOffset?.value : ColorMapOffset} /* default: [0; 0] */  isRaw={typeof ColorMapOffset === "object" && "isRaw" in ColorMapOffset && ColorMapOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="PackedHeightMap" id={typeof PackedHeightMap === "object" && "id" in PackedHeightMap ? PackedHeightMap?.id : undefined} value={typeof PackedHeightMap === "object" && "value" in PackedHeightMap ? PackedHeightMap?.value : PackedHeightMap} /* default: ID0 */  isRaw={typeof PackedHeightMap === "object" && "isRaw" in PackedHeightMap && PackedHeightMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeightTransitionRange" id={typeof HeightTransitionRange === "object" && "id" in HeightTransitionRange ? HeightTransitionRange?.id : undefined} value={typeof HeightTransitionRange === "object" && "value" in HeightTransitionRange ? HeightTransitionRange?.value : HeightTransitionRange} /* default: 0 */  isRaw={typeof HeightTransitionRange === "object" && "isRaw" in HeightTransitionRange && HeightTransitionRange.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureScale" id={typeof TextureScale === "object" && "id" in TextureScale ? TextureScale?.id : undefined} value={typeof TextureScale === "object" && "value" in TextureScale ? TextureScale?.value : TextureScale} /* default: [0; 0] */  isRaw={typeof TextureScale === "object" && "isRaw" in TextureScale && TextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureOffset" id={typeof TextureOffset === "object" && "id" in TextureOffset ? TextureOffset?.id : undefined} value={typeof TextureOffset === "object" && "value" in TextureOffset ? TextureOffset?.value : TextureOffset} /* default: [0; 0] */  isRaw={typeof TextureOffset === "object" && "isRaw" in TextureOffset && TextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AlbedoColor0" id={typeof AlbedoColor0 === "object" && "id" in AlbedoColor0 ? AlbedoColor0?.id : undefined} value={typeof AlbedoColor0 === "object" && "value" in AlbedoColor0 ? AlbedoColor0?.value : AlbedoColor0} /* default: [0; 0; 0; 0] */  isRaw={typeof AlbedoColor0 === "object" && "isRaw" in AlbedoColor0 && AlbedoColor0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AlbedoColor1" id={typeof AlbedoColor1 === "object" && "id" in AlbedoColor1 ? AlbedoColor1?.id : undefined} value={typeof AlbedoColor1 === "object" && "value" in AlbedoColor1 ? AlbedoColor1?.value : AlbedoColor1} /* default: [0; 0; 0; 0] */  isRaw={typeof AlbedoColor1 === "object" && "isRaw" in AlbedoColor1 && AlbedoColor1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AlbedoColor2" id={typeof AlbedoColor2 === "object" && "id" in AlbedoColor2 ? AlbedoColor2?.id : undefined} value={typeof AlbedoColor2 === "object" && "value" in AlbedoColor2 ? AlbedoColor2?.value : AlbedoColor2} /* default: [0; 0; 0; 0] */  isRaw={typeof AlbedoColor2 === "object" && "isRaw" in AlbedoColor2 && AlbedoColor2.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AlbedoColor3" id={typeof AlbedoColor3 === "object" && "id" in AlbedoColor3 ? AlbedoColor3?.id : undefined} value={typeof AlbedoColor3 === "object" && "value" in AlbedoColor3 ? AlbedoColor3?.value : AlbedoColor3} /* default: [0; 0; 0; 0] */  isRaw={typeof AlbedoColor3 === "object" && "isRaw" in AlbedoColor3 && AlbedoColor3.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="AlbedoTexture0" id={typeof AlbedoTexture0 === "object" && "id" in AlbedoTexture0 ? AlbedoTexture0?.id : undefined} value={typeof AlbedoTexture0 === "object" && "value" in AlbedoTexture0 ? AlbedoTexture0?.value : AlbedoTexture0} /* default: ID0 */  isRaw={typeof AlbedoTexture0 === "object" && "isRaw" in AlbedoTexture0 && AlbedoTexture0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="AlbedoTexture1" id={typeof AlbedoTexture1 === "object" && "id" in AlbedoTexture1 ? AlbedoTexture1?.id : undefined} value={typeof AlbedoTexture1 === "object" && "value" in AlbedoTexture1 ? AlbedoTexture1?.value : AlbedoTexture1} /* default: ID0 */  isRaw={typeof AlbedoTexture1 === "object" && "isRaw" in AlbedoTexture1 && AlbedoTexture1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="AlbedoTexture2" id={typeof AlbedoTexture2 === "object" && "id" in AlbedoTexture2 ? AlbedoTexture2?.id : undefined} value={typeof AlbedoTexture2 === "object" && "value" in AlbedoTexture2 ? AlbedoTexture2?.value : AlbedoTexture2} /* default: ID0 */  isRaw={typeof AlbedoTexture2 === "object" && "isRaw" in AlbedoTexture2 && AlbedoTexture2.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="AlbedoTexture3" id={typeof AlbedoTexture3 === "object" && "id" in AlbedoTexture3 ? AlbedoTexture3?.id : undefined} value={typeof AlbedoTexture3 === "object" && "value" in AlbedoTexture3 ? AlbedoTexture3?.value : AlbedoTexture3} /* default: ID0 */  isRaw={typeof AlbedoTexture3 === "object" && "isRaw" in AlbedoTexture3 && AlbedoTexture3.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissiveColor0" id={typeof EmissiveColor0 === "object" && "id" in EmissiveColor0 ? EmissiveColor0?.id : undefined} value={typeof EmissiveColor0 === "object" && "value" in EmissiveColor0 ? EmissiveColor0?.value : EmissiveColor0} /* default: [0; 0; 0; 0] */  isRaw={typeof EmissiveColor0 === "object" && "isRaw" in EmissiveColor0 && EmissiveColor0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissiveColor1" id={typeof EmissiveColor1 === "object" && "id" in EmissiveColor1 ? EmissiveColor1?.id : undefined} value={typeof EmissiveColor1 === "object" && "value" in EmissiveColor1 ? EmissiveColor1?.value : EmissiveColor1} /* default: [0; 0; 0; 0] */  isRaw={typeof EmissiveColor1 === "object" && "isRaw" in EmissiveColor1 && EmissiveColor1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissiveColor2" id={typeof EmissiveColor2 === "object" && "id" in EmissiveColor2 ? EmissiveColor2?.id : undefined} value={typeof EmissiveColor2 === "object" && "value" in EmissiveColor2 ? EmissiveColor2?.value : EmissiveColor2} /* default: [0; 0; 0; 0] */  isRaw={typeof EmissiveColor2 === "object" && "isRaw" in EmissiveColor2 && EmissiveColor2.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissiveColor3" id={typeof EmissiveColor3 === "object" && "id" in EmissiveColor3 ? EmissiveColor3?.id : undefined} value={typeof EmissiveColor3 === "object" && "value" in EmissiveColor3 ? EmissiveColor3?.value : EmissiveColor3} /* default: [0; 0; 0; 0] */  isRaw={typeof EmissiveColor3 === "object" && "isRaw" in EmissiveColor3 && EmissiveColor3.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="EmissiveMap0" id={typeof EmissiveMap0 === "object" && "id" in EmissiveMap0 ? EmissiveMap0?.id : undefined} value={typeof EmissiveMap0 === "object" && "value" in EmissiveMap0 ? EmissiveMap0?.value : EmissiveMap0} /* default: ID0 */  isRaw={typeof EmissiveMap0 === "object" && "isRaw" in EmissiveMap0 && EmissiveMap0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="EmissiveMap1" id={typeof EmissiveMap1 === "object" && "id" in EmissiveMap1 ? EmissiveMap1?.id : undefined} value={typeof EmissiveMap1 === "object" && "value" in EmissiveMap1 ? EmissiveMap1?.value : EmissiveMap1} /* default: ID0 */  isRaw={typeof EmissiveMap1 === "object" && "isRaw" in EmissiveMap1 && EmissiveMap1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="EmissiveMap2" id={typeof EmissiveMap2 === "object" && "id" in EmissiveMap2 ? EmissiveMap2?.id : undefined} value={typeof EmissiveMap2 === "object" && "value" in EmissiveMap2 ? EmissiveMap2?.value : EmissiveMap2} /* default: ID0 */  isRaw={typeof EmissiveMap2 === "object" && "isRaw" in EmissiveMap2 && EmissiveMap2.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="EmissiveMap3" id={typeof EmissiveMap3 === "object" && "id" in EmissiveMap3 ? EmissiveMap3?.id : undefined} value={typeof EmissiveMap3 === "object" && "value" in EmissiveMap3 ? EmissiveMap3?.value : EmissiveMap3} /* default: ID0 */  isRaw={typeof EmissiveMap3 === "object" && "isRaw" in EmissiveMap3 && EmissiveMap3.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="PackedEmissionMap" id={typeof PackedEmissionMap === "object" && "id" in PackedEmissionMap ? PackedEmissionMap?.id : undefined} value={typeof PackedEmissionMap === "object" && "value" in PackedEmissionMap ? PackedEmissionMap?.value : PackedEmissionMap} /* default: ID0 */  isRaw={typeof PackedEmissionMap === "object" && "isRaw" in PackedEmissionMap && PackedEmissionMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="PackedNormalMap01" id={typeof PackedNormalMap01 === "object" && "id" in PackedNormalMap01 ? PackedNormalMap01?.id : undefined} value={typeof PackedNormalMap01 === "object" && "value" in PackedNormalMap01 ? PackedNormalMap01?.value : PackedNormalMap01} /* default: ID0 */  isRaw={typeof PackedNormalMap01 === "object" && "isRaw" in PackedNormalMap01 && PackedNormalMap01.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="PackedNormalMap23" id={typeof PackedNormalMap23 === "object" && "id" in PackedNormalMap23 ? PackedNormalMap23?.id : undefined} value={typeof PackedNormalMap23 === "object" && "value" in PackedNormalMap23 ? PackedNormalMap23?.value : PackedNormalMap23} /* default: ID0 */  isRaw={typeof PackedNormalMap23 === "object" && "isRaw" in PackedNormalMap23 && PackedNormalMap23.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalScale0" id={typeof NormalScale0 === "object" && "id" in NormalScale0 ? NormalScale0?.id : undefined} value={typeof NormalScale0 === "object" && "value" in NormalScale0 ? NormalScale0?.value : NormalScale0} /* default: 0 */  isRaw={typeof NormalScale0 === "object" && "isRaw" in NormalScale0 && NormalScale0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalScale1" id={typeof NormalScale1 === "object" && "id" in NormalScale1 ? NormalScale1?.id : undefined} value={typeof NormalScale1 === "object" && "value" in NormalScale1 ? NormalScale1?.value : NormalScale1} /* default: 0 */  isRaw={typeof NormalScale1 === "object" && "isRaw" in NormalScale1 && NormalScale1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalScale2" id={typeof NormalScale2 === "object" && "id" in NormalScale2 ? NormalScale2?.id : undefined} value={typeof NormalScale2 === "object" && "value" in NormalScale2 ? NormalScale2?.value : NormalScale2} /* default: 0 */  isRaw={typeof NormalScale2 === "object" && "isRaw" in NormalScale2 && NormalScale2.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalScale3" id={typeof NormalScale3 === "object" && "id" in NormalScale3 ? NormalScale3?.id : undefined} value={typeof NormalScale3 === "object" && "value" in NormalScale3 ? NormalScale3?.value : NormalScale3} /* default: 0 */  isRaw={typeof NormalScale3 === "object" && "isRaw" in NormalScale3 && NormalScale3.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AlphaClip" id={typeof AlphaClip === "object" && "id" in AlphaClip ? AlphaClip?.id : undefined} value={typeof AlphaClip === "object" && "value" in AlphaClip ? AlphaClip?.value : AlphaClip} /* default: 0 */  isRaw={typeof AlphaClip === "object" && "isRaw" in AlphaClip && AlphaClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  isRaw={typeof OffsetFactor === "object" && "isRaw" in OffsetFactor && OffsetFactor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  isRaw={typeof OffsetUnits === "object" && "isRaw" in OffsetUnits && OffsetUnits.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  isRaw={typeof RenderQueue === "object" && "isRaw" in RenderQueue && RenderQueue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SpecularColor0" id={typeof SpecularColor0 === "object" && "id" in SpecularColor0 ? SpecularColor0?.id : undefined} value={typeof SpecularColor0 === "object" && "value" in SpecularColor0 ? SpecularColor0?.value : SpecularColor0} /* default: [0; 0; 0; 0] */  isRaw={typeof SpecularColor0 === "object" && "isRaw" in SpecularColor0 && SpecularColor0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SpecularColor1" id={typeof SpecularColor1 === "object" && "id" in SpecularColor1 ? SpecularColor1?.id : undefined} value={typeof SpecularColor1 === "object" && "value" in SpecularColor1 ? SpecularColor1?.value : SpecularColor1} /* default: [0; 0; 0; 0] */  isRaw={typeof SpecularColor1 === "object" && "isRaw" in SpecularColor1 && SpecularColor1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SpecularColor2" id={typeof SpecularColor2 === "object" && "id" in SpecularColor2 ? SpecularColor2?.id : undefined} value={typeof SpecularColor2 === "object" && "value" in SpecularColor2 ? SpecularColor2?.value : SpecularColor2} /* default: [0; 0; 0; 0] */  isRaw={typeof SpecularColor2 === "object" && "isRaw" in SpecularColor2 && SpecularColor2.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SpecularColor3" id={typeof SpecularColor3 === "object" && "id" in SpecularColor3 ? SpecularColor3?.id : undefined} value={typeof SpecularColor3 === "object" && "value" in SpecularColor3 ? SpecularColor3?.value : SpecularColor3} /* default: [0; 0; 0; 0] */  isRaw={typeof SpecularColor3 === "object" && "isRaw" in SpecularColor3 && SpecularColor3.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="SpecularMap0" id={typeof SpecularMap0 === "object" && "id" in SpecularMap0 ? SpecularMap0?.id : undefined} value={typeof SpecularMap0 === "object" && "value" in SpecularMap0 ? SpecularMap0?.value : SpecularMap0} /* default: ID0 */  isRaw={typeof SpecularMap0 === "object" && "isRaw" in SpecularMap0 && SpecularMap0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="SpecularMap1" id={typeof SpecularMap1 === "object" && "id" in SpecularMap1 ? SpecularMap1?.id : undefined} value={typeof SpecularMap1 === "object" && "value" in SpecularMap1 ? SpecularMap1?.value : SpecularMap1} /* default: ID0 */  isRaw={typeof SpecularMap1 === "object" && "isRaw" in SpecularMap1 && SpecularMap1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="SpecularMap2" id={typeof SpecularMap2 === "object" && "id" in SpecularMap2 ? SpecularMap2?.id : undefined} value={typeof SpecularMap2 === "object" && "value" in SpecularMap2 ? SpecularMap2?.value : SpecularMap2} /* default: ID0 */  isRaw={typeof SpecularMap2 === "object" && "isRaw" in SpecularMap2 && SpecularMap2.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="SpecularMap3" id={typeof SpecularMap3 === "object" && "id" in SpecularMap3 ? SpecularMap3?.id : undefined} value={typeof SpecularMap3 === "object" && "value" in SpecularMap3 ? SpecularMap3?.value : SpecularMap3} /* default: ID0 */  isRaw={typeof SpecularMap3 === "object" && "isRaw" in SpecularMap3 && SpecularMap3.isRaw ? true : undefined} />
        </Component>
      );
    };
    