import { member, Member, Component } from "../../core";
    
    export interface FlatLitToonMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
MainTexture?: member<any>;
ColorMask?: member<any>;
EmissionMap?: member<any>;
NormalMap?: member<any>;
MainTextureScale?: member<[number, number]>;
MainTextureOffset?: member<[number, number]>;
ColorMaskScale?: member<[number, number]>;
ColorMaskOffset?: member<[number, number]>;
EmissionMapScale?: member<[number, number]>;
EmissionMapOffset?: member<[number, number]>;
NormalMapScale?: member<[number, number]>;
NormalMapOffset?: member<[number, number]>;
AlphaCutoff?: member<number>;
Color?: member<[number, number, number, number]>;
EmissionColor?: member<[number, number, number, number]>;
BlendMode?: member<any>;
ZWrite?: member<any>;
Shadow?: member<number>;
Outline?: member<any>;
OutlineWidth?: member<number>;
OutlineColor?: member<[number, number, number, number]>;
OutlineTint?: member<number>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
    }
    
    export function FlatLitToonMaterial(props: FlatLitToonMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
MainTexture,
ColorMask,
EmissionMap,
NormalMap,
MainTextureScale,
MainTextureOffset,
ColorMaskScale,
ColorMaskOffset,
EmissionMapScale,
EmissionMapOffset,
NormalMapScale,
NormalMapOffset,
AlphaCutoff,
Color,
EmissionColor,
BlendMode,
ZWrite,
Shadow,
Outline,
OutlineWidth,
OutlineColor,
OutlineTint,
OffsetFactor,
OffsetUnits,
RenderQueue, } = props;
    
      return (
        <Component type="FrooxEngine.FlatLitToonMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="MainTexture" id={typeof MainTexture === "object" && "id" in MainTexture ? MainTexture?.id : undefined} value={typeof MainTexture === "object" && "value" in MainTexture ? MainTexture?.value : MainTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="ColorMask" id={typeof ColorMask === "object" && "id" in ColorMask ? ColorMask?.id : undefined} value={typeof ColorMask === "object" && "value" in ColorMask ? ColorMask?.value : ColorMask} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="EmissionMap" id={typeof EmissionMap === "object" && "id" in EmissionMap ? EmissionMap?.id : undefined} value={typeof EmissionMap === "object" && "value" in EmissionMap ? EmissionMap?.value : EmissionMap} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap" id={typeof NormalMap === "object" && "id" in NormalMap ? NormalMap?.id : undefined} value={typeof NormalMap === "object" && "value" in NormalMap ? NormalMap?.value : NormalMap} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MainTextureScale" id={typeof MainTextureScale === "object" && "id" in MainTextureScale ? MainTextureScale?.id : undefined} value={typeof MainTextureScale === "object" && "value" in MainTextureScale ? MainTextureScale?.value : MainTextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MainTextureOffset" id={typeof MainTextureOffset === "object" && "id" in MainTextureOffset ? MainTextureOffset?.id : undefined} value={typeof MainTextureOffset === "object" && "value" in MainTextureOffset ? MainTextureOffset?.value : MainTextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ColorMaskScale" id={typeof ColorMaskScale === "object" && "id" in ColorMaskScale ? ColorMaskScale?.id : undefined} value={typeof ColorMaskScale === "object" && "value" in ColorMaskScale ? ColorMaskScale?.value : ColorMaskScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ColorMaskOffset" id={typeof ColorMaskOffset === "object" && "id" in ColorMaskOffset ? ColorMaskOffset?.id : undefined} value={typeof ColorMaskOffset === "object" && "value" in ColorMaskOffset ? ColorMaskOffset?.value : ColorMaskOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="EmissionMapScale" id={typeof EmissionMapScale === "object" && "id" in EmissionMapScale ? EmissionMapScale?.id : undefined} value={typeof EmissionMapScale === "object" && "value" in EmissionMapScale ? EmissionMapScale?.value : EmissionMapScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="EmissionMapOffset" id={typeof EmissionMapOffset === "object" && "id" in EmissionMapOffset ? EmissionMapOffset?.id : undefined} value={typeof EmissionMapOffset === "object" && "value" in EmissionMapOffset ? EmissionMapOffset?.value : EmissionMapOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="NormalMapScale" id={typeof NormalMapScale === "object" && "id" in NormalMapScale ? NormalMapScale?.id : undefined} value={typeof NormalMapScale === "object" && "value" in NormalMapScale ? NormalMapScale?.value : NormalMapScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="NormalMapOffset" id={typeof NormalMapOffset === "object" && "id" in NormalMapOffset ? NormalMapOffset?.id : undefined} value={typeof NormalMapOffset === "object" && "value" in NormalMapOffset ? NormalMapOffset?.value : NormalMapOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AlphaCutoff" id={typeof AlphaCutoff === "object" && "id" in AlphaCutoff ? AlphaCutoff?.id : undefined} value={typeof AlphaCutoff === "object" && "value" in AlphaCutoff ? AlphaCutoff?.value : AlphaCutoff} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissionColor" id={typeof EmissionColor === "object" && "id" in EmissionColor ? EmissionColor?.id : undefined} value={typeof EmissionColor === "object" && "value" in EmissionColor ? EmissionColor?.value : EmissionColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`} name="ZWrite" id={typeof ZWrite === "object" && "id" in ZWrite ? ZWrite?.id : undefined} value={typeof ZWrite === "object" && "value" in ZWrite ? ZWrite?.value : ZWrite} /* default: Auto */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Shadow" id={typeof Shadow === "object" && "id" in Shadow ? Shadow?.id : undefined} value={typeof Shadow === "object" && "value" in Shadow ? Shadow?.value : Shadow} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.FlatLitToonMaterial+OutlineStyle]`} name="Outline" id={typeof Outline === "object" && "id" in Outline ? Outline?.id : undefined} value={typeof Outline === "object" && "value" in Outline ? Outline?.value : Outline} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OutlineWidth" id={typeof OutlineWidth === "object" && "id" in OutlineWidth ? OutlineWidth?.id : undefined} value={typeof OutlineWidth === "object" && "value" in OutlineWidth ? OutlineWidth?.value : OutlineWidth} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="OutlineColor" id={typeof OutlineColor === "object" && "id" in OutlineColor ? OutlineColor?.id : undefined} value={typeof OutlineColor === "object" && "value" in OutlineColor ? OutlineColor?.value : OutlineColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OutlineTint" id={typeof OutlineTint === "object" && "id" in OutlineTint ? OutlineTint?.id : undefined} value={typeof OutlineTint === "object" && "value" in OutlineTint ? OutlineTint?.value : OutlineTint} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  />
        </Component>
      );
    };
    