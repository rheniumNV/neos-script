import { member, Member, Component } from "../../../core";
    
    export interface PBS_MetallicInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
TextureScale?: member<[number, number]>;
TextureOffset?: member<[number, number]>;
DetailTextureScale?: member<[number, number]>;
DetailTextureOffset?: member<[number, number]>;
AlbedoColor?: member<[number, number, number, number]>;
AlbedoTexture?: member<any>;
EmissiveColor?: member<[number, number, number, number]>;
EmissiveMap?: member<any>;
NormalScale?: member<number>;
NormalMap?: member<any>;
HeightMap?: member<any>;
HeightScale?: member<number>;
OcclusionMap?: member<any>;
DetailAlbedoTexture?: member<any>;
DetailNormalMap?: member<any>;
DetailNormalScale?: member<number>;
BlendMode?: member<any>;
AlphaCutoff?: member<number>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
Metallic?: member<number>;
Smoothness?: member<number>;
MetallicMap?: member<any>;
    }
    
    export function PBS_Metallic(props: PBS_MetallicInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
TextureScale,
TextureOffset,
DetailTextureScale,
DetailTextureOffset,
AlbedoColor,
AlbedoTexture,
EmissiveColor,
EmissiveMap,
NormalScale,
NormalMap,
HeightMap,
HeightScale,
OcclusionMap,
DetailAlbedoTexture,
DetailNormalMap,
DetailNormalScale,
BlendMode,
AlphaCutoff,
OffsetFactor,
OffsetUnits,
RenderQueue,
Metallic,
Smoothness,
MetallicMap, } = props;
    
      return (
        <Component type="FrooxEngine.PBS_Metallic" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ readOnly isRaw={typeof _shader === "object" && "isRaw" in _shader && _shader.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureScale" id={typeof TextureScale === "object" && "id" in TextureScale ? TextureScale?.id : undefined} value={typeof TextureScale === "object" && "value" in TextureScale ? TextureScale?.value : TextureScale} /* default: [0; 0] */  isRaw={typeof TextureScale === "object" && "isRaw" in TextureScale && TextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureOffset" id={typeof TextureOffset === "object" && "id" in TextureOffset ? TextureOffset?.id : undefined} value={typeof TextureOffset === "object" && "value" in TextureOffset ? TextureOffset?.value : TextureOffset} /* default: [0; 0] */  isRaw={typeof TextureOffset === "object" && "isRaw" in TextureOffset && TextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="DetailTextureScale" id={typeof DetailTextureScale === "object" && "id" in DetailTextureScale ? DetailTextureScale?.id : undefined} value={typeof DetailTextureScale === "object" && "value" in DetailTextureScale ? DetailTextureScale?.value : DetailTextureScale} /* default: [0; 0] */  isRaw={typeof DetailTextureScale === "object" && "isRaw" in DetailTextureScale && DetailTextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="DetailTextureOffset" id={typeof DetailTextureOffset === "object" && "id" in DetailTextureOffset ? DetailTextureOffset?.id : undefined} value={typeof DetailTextureOffset === "object" && "value" in DetailTextureOffset ? DetailTextureOffset?.value : DetailTextureOffset} /* default: [0; 0] */  isRaw={typeof DetailTextureOffset === "object" && "isRaw" in DetailTextureOffset && DetailTextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AlbedoColor" id={typeof AlbedoColor === "object" && "id" in AlbedoColor ? AlbedoColor?.id : undefined} value={typeof AlbedoColor === "object" && "value" in AlbedoColor ? AlbedoColor?.value : AlbedoColor} /* default: [0; 0; 0; 0] */  isRaw={typeof AlbedoColor === "object" && "isRaw" in AlbedoColor && AlbedoColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="AlbedoTexture" id={typeof AlbedoTexture === "object" && "id" in AlbedoTexture ? AlbedoTexture?.id : undefined} value={typeof AlbedoTexture === "object" && "value" in AlbedoTexture ? AlbedoTexture?.value : AlbedoTexture} /* default: ID0 */  isRaw={typeof AlbedoTexture === "object" && "isRaw" in AlbedoTexture && AlbedoTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissiveColor" id={typeof EmissiveColor === "object" && "id" in EmissiveColor ? EmissiveColor?.id : undefined} value={typeof EmissiveColor === "object" && "value" in EmissiveColor ? EmissiveColor?.value : EmissiveColor} /* default: [0; 0; 0; 0] */  isRaw={typeof EmissiveColor === "object" && "isRaw" in EmissiveColor && EmissiveColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="EmissiveMap" id={typeof EmissiveMap === "object" && "id" in EmissiveMap ? EmissiveMap?.id : undefined} value={typeof EmissiveMap === "object" && "value" in EmissiveMap ? EmissiveMap?.value : EmissiveMap} /* default: ID0 */  isRaw={typeof EmissiveMap === "object" && "isRaw" in EmissiveMap && EmissiveMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalScale" id={typeof NormalScale === "object" && "id" in NormalScale ? NormalScale?.id : undefined} value={typeof NormalScale === "object" && "value" in NormalScale ? NormalScale?.value : NormalScale} /* default: 0 */  isRaw={typeof NormalScale === "object" && "isRaw" in NormalScale && NormalScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap" id={typeof NormalMap === "object" && "id" in NormalMap ? NormalMap?.id : undefined} value={typeof NormalMap === "object" && "value" in NormalMap ? NormalMap?.value : NormalMap} /* default: ID0 */  isRaw={typeof NormalMap === "object" && "isRaw" in NormalMap && NormalMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="HeightMap" id={typeof HeightMap === "object" && "id" in HeightMap ? HeightMap?.id : undefined} value={typeof HeightMap === "object" && "value" in HeightMap ? HeightMap?.value : HeightMap} /* default: ID0 */  isRaw={typeof HeightMap === "object" && "isRaw" in HeightMap && HeightMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeightScale" id={typeof HeightScale === "object" && "id" in HeightScale ? HeightScale?.id : undefined} value={typeof HeightScale === "object" && "value" in HeightScale ? HeightScale?.value : HeightScale} /* default: 0 */  isRaw={typeof HeightScale === "object" && "isRaw" in HeightScale && HeightScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="OcclusionMap" id={typeof OcclusionMap === "object" && "id" in OcclusionMap ? OcclusionMap?.id : undefined} value={typeof OcclusionMap === "object" && "value" in OcclusionMap ? OcclusionMap?.value : OcclusionMap} /* default: ID0 */  isRaw={typeof OcclusionMap === "object" && "isRaw" in OcclusionMap && OcclusionMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="DetailAlbedoTexture" id={typeof DetailAlbedoTexture === "object" && "id" in DetailAlbedoTexture ? DetailAlbedoTexture?.id : undefined} value={typeof DetailAlbedoTexture === "object" && "value" in DetailAlbedoTexture ? DetailAlbedoTexture?.value : DetailAlbedoTexture} /* default: ID0 */  isRaw={typeof DetailAlbedoTexture === "object" && "isRaw" in DetailAlbedoTexture && DetailAlbedoTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="DetailNormalMap" id={typeof DetailNormalMap === "object" && "id" in DetailNormalMap ? DetailNormalMap?.id : undefined} value={typeof DetailNormalMap === "object" && "value" in DetailNormalMap ? DetailNormalMap?.value : DetailNormalMap} /* default: ID0 */  isRaw={typeof DetailNormalMap === "object" && "isRaw" in DetailNormalMap && DetailNormalMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DetailNormalScale" id={typeof DetailNormalScale === "object" && "id" in DetailNormalScale ? DetailNormalScale?.id : undefined} value={typeof DetailNormalScale === "object" && "value" in DetailNormalScale ? DetailNormalScale?.value : DetailNormalScale} /* default: 0 */  isRaw={typeof DetailNormalScale === "object" && "isRaw" in DetailNormalScale && DetailNormalScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  isRaw={typeof BlendMode === "object" && "isRaw" in BlendMode && BlendMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AlphaCutoff" id={typeof AlphaCutoff === "object" && "id" in AlphaCutoff ? AlphaCutoff?.id : undefined} value={typeof AlphaCutoff === "object" && "value" in AlphaCutoff ? AlphaCutoff?.value : AlphaCutoff} /* default: 0 */  isRaw={typeof AlphaCutoff === "object" && "isRaw" in AlphaCutoff && AlphaCutoff.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  isRaw={typeof OffsetFactor === "object" && "isRaw" in OffsetFactor && OffsetFactor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  isRaw={typeof OffsetUnits === "object" && "isRaw" in OffsetUnits && OffsetUnits.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  isRaw={typeof RenderQueue === "object" && "isRaw" in RenderQueue && RenderQueue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Metallic" id={typeof Metallic === "object" && "id" in Metallic ? Metallic?.id : undefined} value={typeof Metallic === "object" && "value" in Metallic ? Metallic?.value : Metallic} /* default: 0 */  isRaw={typeof Metallic === "object" && "isRaw" in Metallic && Metallic.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Smoothness" id={typeof Smoothness === "object" && "id" in Smoothness ? Smoothness?.id : undefined} value={typeof Smoothness === "object" && "value" in Smoothness ? Smoothness?.value : Smoothness} /* default: 0 */  isRaw={typeof Smoothness === "object" && "isRaw" in Smoothness && Smoothness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="MetallicMap" id={typeof MetallicMap === "object" && "id" in MetallicMap ? MetallicMap?.id : undefined} value={typeof MetallicMap === "object" && "value" in MetallicMap ? MetallicMap?.value : MetallicMap} /* default: ID0 */  isRaw={typeof MetallicMap === "object" && "isRaw" in MetallicMap && MetallicMap.isRaw ? true : undefined} />
        </Component>
      );
    };
    