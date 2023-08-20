import { member, Member, Component } from "../../../../core";
    
    export interface TextUnlitMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
FontAtlas?: member<any>;
TintColor?: member<[number, number, number, number]>;
OutlineColor?: member<[number, number, number, number]>;
BackgroundColor?: member<[number, number, number, number]>;
AutoBackgroundColor?: member<boolean>;
GlyphRenderMethod?: member<any>;
PixelRange?: member<number>;
FaceDilate?: member<number>;
OutlineThickness?: member<number>;
FaceSoftness?: member<number>;
BlendMode?: member<any>;
Sidedness?: member<any>;
ZWrite?: member<any>;
ZTest?: member<any>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
    }
    
    export function TextUnlitMaterial(props: TextUnlitMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
FontAtlas,
TintColor,
OutlineColor,
BackgroundColor,
AutoBackgroundColor,
GlyphRenderMethod,
PixelRange,
FaceDilate,
OutlineThickness,
FaceSoftness,
BlendMode,
Sidedness,
ZWrite,
ZTest,
OffsetFactor,
OffsetUnits,
RenderQueue, } = props;
    
      return (
        <Component type="FrooxEngine.TextUnlitMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ readOnly isRaw={typeof _shader === "object" && "isRaw" in _shader && _shader.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="FontAtlas" id={typeof FontAtlas === "object" && "id" in FontAtlas ? FontAtlas?.id : undefined} value={typeof FontAtlas === "object" && "value" in FontAtlas ? FontAtlas?.value : FontAtlas} /* default: ID0 */  isRaw={typeof FontAtlas === "object" && "isRaw" in FontAtlas && FontAtlas.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="TintColor" id={typeof TintColor === "object" && "id" in TintColor ? TintColor?.id : undefined} value={typeof TintColor === "object" && "value" in TintColor ? TintColor?.value : TintColor} /* default: [0; 0; 0; 0] */  isRaw={typeof TintColor === "object" && "isRaw" in TintColor && TintColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="OutlineColor" id={typeof OutlineColor === "object" && "id" in OutlineColor ? OutlineColor?.id : undefined} value={typeof OutlineColor === "object" && "value" in OutlineColor ? OutlineColor?.value : OutlineColor} /* default: [0; 0; 0; 0] */  isRaw={typeof OutlineColor === "object" && "isRaw" in OutlineColor && OutlineColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="BackgroundColor" id={typeof BackgroundColor === "object" && "id" in BackgroundColor ? BackgroundColor?.id : undefined} value={typeof BackgroundColor === "object" && "value" in BackgroundColor ? BackgroundColor?.value : BackgroundColor} /* default: [0; 0; 0; 0] */  isRaw={typeof BackgroundColor === "object" && "isRaw" in BackgroundColor && BackgroundColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoBackgroundColor" id={typeof AutoBackgroundColor === "object" && "id" in AutoBackgroundColor ? AutoBackgroundColor?.id : undefined} value={typeof AutoBackgroundColor === "object" && "value" in AutoBackgroundColor ? AutoBackgroundColor?.value : AutoBackgroundColor} /* default: false */  isRaw={typeof AutoBackgroundColor === "object" && "isRaw" in AutoBackgroundColor && AutoBackgroundColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[CodeX.GlyphRenderMethod]`} name="GlyphRenderMethod" id={typeof GlyphRenderMethod === "object" && "id" in GlyphRenderMethod ? GlyphRenderMethod?.id : undefined} value={typeof GlyphRenderMethod === "object" && "value" in GlyphRenderMethod ? GlyphRenderMethod?.value : GlyphRenderMethod} /* default: Raster */  isRaw={typeof GlyphRenderMethod === "object" && "isRaw" in GlyphRenderMethod && GlyphRenderMethod.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PixelRange" id={typeof PixelRange === "object" && "id" in PixelRange ? PixelRange?.id : undefined} value={typeof PixelRange === "object" && "value" in PixelRange ? PixelRange?.value : PixelRange} /* default: 0 */  isRaw={typeof PixelRange === "object" && "isRaw" in PixelRange && PixelRange.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FaceDilate" id={typeof FaceDilate === "object" && "id" in FaceDilate ? FaceDilate?.id : undefined} value={typeof FaceDilate === "object" && "value" in FaceDilate ? FaceDilate?.value : FaceDilate} /* default: 0 */  isRaw={typeof FaceDilate === "object" && "isRaw" in FaceDilate && FaceDilate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OutlineThickness" id={typeof OutlineThickness === "object" && "id" in OutlineThickness ? OutlineThickness?.id : undefined} value={typeof OutlineThickness === "object" && "value" in OutlineThickness ? OutlineThickness?.value : OutlineThickness} /* default: 0 */  isRaw={typeof OutlineThickness === "object" && "isRaw" in OutlineThickness && OutlineThickness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FaceSoftness" id={typeof FaceSoftness === "object" && "id" in FaceSoftness ? FaceSoftness?.id : undefined} value={typeof FaceSoftness === "object" && "value" in FaceSoftness ? FaceSoftness?.value : FaceSoftness} /* default: 0 */  isRaw={typeof FaceSoftness === "object" && "isRaw" in FaceSoftness && FaceSoftness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  isRaw={typeof BlendMode === "object" && "isRaw" in BlendMode && BlendMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Sidedness]`} name="Sidedness" id={typeof Sidedness === "object" && "id" in Sidedness ? Sidedness?.id : undefined} value={typeof Sidedness === "object" && "value" in Sidedness ? Sidedness?.value : Sidedness} /* default: Auto */  isRaw={typeof Sidedness === "object" && "isRaw" in Sidedness && Sidedness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`} name="ZWrite" id={typeof ZWrite === "object" && "id" in ZWrite ? ZWrite?.id : undefined} value={typeof ZWrite === "object" && "value" in ZWrite ? ZWrite?.value : ZWrite} /* default: Auto */  isRaw={typeof ZWrite === "object" && "isRaw" in ZWrite && ZWrite.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZTest]`} name="ZTest" id={typeof ZTest === "object" && "id" in ZTest ? ZTest?.id : undefined} value={typeof ZTest === "object" && "value" in ZTest ? ZTest?.value : ZTest} /* default: Less */  isRaw={typeof ZTest === "object" && "isRaw" in ZTest && ZTest.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  isRaw={typeof OffsetFactor === "object" && "isRaw" in OffsetFactor && OffsetFactor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  isRaw={typeof OffsetUnits === "object" && "isRaw" in OffsetUnits && OffsetUnits.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  isRaw={typeof RenderQueue === "object" && "isRaw" in RenderQueue && RenderQueue.isRaw ? true : undefined} />
        </Component>
      );
    };
    