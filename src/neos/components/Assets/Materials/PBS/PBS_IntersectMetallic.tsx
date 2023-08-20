import { member, Member, Component } from "../../../../core";
    
    export interface PBS_IntersectMetallicInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
BeginTransitionStart?: member<number>;
BeginTransitionEnd?: member<number>;
EndTransitionStart?: member<number>;
EndTransitionEnd?: member<number>;
TextureScale?: member<[number, number]>;
TextureOffset?: member<[number, number]>;
AlbedoColor?: member<[number, number, number, number]>;
IntersectAlbedoColor?: member<[number, number, number, number]>;
AlbedoTexture?: member<any>;
EmissiveColor?: member<[number, number, number, number]>;
IntersectEmissiveColor?: member<[number, number, number, number]>;
EmissiveMap?: member<any>;
NormalMap?: member<any>;
NormalScale?: member<number>;
OcclusionMap?: member<any>;
Culling?: member<any>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
Metallic?: member<number>;
Smoothness?: member<number>;
MetallicMap?: member<any>;
    }
    
    export function PBS_IntersectMetallic(props: PBS_IntersectMetallicInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
BeginTransitionStart,
BeginTransitionEnd,
EndTransitionStart,
EndTransitionEnd,
TextureScale,
TextureOffset,
AlbedoColor,
IntersectAlbedoColor,
AlbedoTexture,
EmissiveColor,
IntersectEmissiveColor,
EmissiveMap,
NormalMap,
NormalScale,
OcclusionMap,
Culling,
OffsetFactor,
OffsetUnits,
RenderQueue,
Metallic,
Smoothness,
MetallicMap, } = props;
    
      return (
        <Component type="FrooxEngine.PBS_IntersectMetallic" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ readOnly isRaw={typeof _shader === "object" && "isRaw" in _shader && _shader.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BeginTransitionStart" id={typeof BeginTransitionStart === "object" && "id" in BeginTransitionStart ? BeginTransitionStart?.id : undefined} value={typeof BeginTransitionStart === "object" && "value" in BeginTransitionStart ? BeginTransitionStart?.value : BeginTransitionStart} /* default: 0 */  isRaw={typeof BeginTransitionStart === "object" && "isRaw" in BeginTransitionStart && BeginTransitionStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BeginTransitionEnd" id={typeof BeginTransitionEnd === "object" && "id" in BeginTransitionEnd ? BeginTransitionEnd?.id : undefined} value={typeof BeginTransitionEnd === "object" && "value" in BeginTransitionEnd ? BeginTransitionEnd?.value : BeginTransitionEnd} /* default: 0 */  isRaw={typeof BeginTransitionEnd === "object" && "isRaw" in BeginTransitionEnd && BeginTransitionEnd.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EndTransitionStart" id={typeof EndTransitionStart === "object" && "id" in EndTransitionStart ? EndTransitionStart?.id : undefined} value={typeof EndTransitionStart === "object" && "value" in EndTransitionStart ? EndTransitionStart?.value : EndTransitionStart} /* default: 0 */  isRaw={typeof EndTransitionStart === "object" && "isRaw" in EndTransitionStart && EndTransitionStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EndTransitionEnd" id={typeof EndTransitionEnd === "object" && "id" in EndTransitionEnd ? EndTransitionEnd?.id : undefined} value={typeof EndTransitionEnd === "object" && "value" in EndTransitionEnd ? EndTransitionEnd?.value : EndTransitionEnd} /* default: 0 */  isRaw={typeof EndTransitionEnd === "object" && "isRaw" in EndTransitionEnd && EndTransitionEnd.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureScale" id={typeof TextureScale === "object" && "id" in TextureScale ? TextureScale?.id : undefined} value={typeof TextureScale === "object" && "value" in TextureScale ? TextureScale?.value : TextureScale} /* default: [0; 0] */  isRaw={typeof TextureScale === "object" && "isRaw" in TextureScale && TextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureOffset" id={typeof TextureOffset === "object" && "id" in TextureOffset ? TextureOffset?.id : undefined} value={typeof TextureOffset === "object" && "value" in TextureOffset ? TextureOffset?.value : TextureOffset} /* default: [0; 0] */  isRaw={typeof TextureOffset === "object" && "isRaw" in TextureOffset && TextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AlbedoColor" id={typeof AlbedoColor === "object" && "id" in AlbedoColor ? AlbedoColor?.id : undefined} value={typeof AlbedoColor === "object" && "value" in AlbedoColor ? AlbedoColor?.value : AlbedoColor} /* default: [0; 0; 0; 0] */  isRaw={typeof AlbedoColor === "object" && "isRaw" in AlbedoColor && AlbedoColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="IntersectAlbedoColor" id={typeof IntersectAlbedoColor === "object" && "id" in IntersectAlbedoColor ? IntersectAlbedoColor?.id : undefined} value={typeof IntersectAlbedoColor === "object" && "value" in IntersectAlbedoColor ? IntersectAlbedoColor?.value : IntersectAlbedoColor} /* default: [0; 0; 0; 0] */  isRaw={typeof IntersectAlbedoColor === "object" && "isRaw" in IntersectAlbedoColor && IntersectAlbedoColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="AlbedoTexture" id={typeof AlbedoTexture === "object" && "id" in AlbedoTexture ? AlbedoTexture?.id : undefined} value={typeof AlbedoTexture === "object" && "value" in AlbedoTexture ? AlbedoTexture?.value : AlbedoTexture} /* default: ID0 */  isRaw={typeof AlbedoTexture === "object" && "isRaw" in AlbedoTexture && AlbedoTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissiveColor" id={typeof EmissiveColor === "object" && "id" in EmissiveColor ? EmissiveColor?.id : undefined} value={typeof EmissiveColor === "object" && "value" in EmissiveColor ? EmissiveColor?.value : EmissiveColor} /* default: [0; 0; 0; 0] */  isRaw={typeof EmissiveColor === "object" && "isRaw" in EmissiveColor && EmissiveColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="IntersectEmissiveColor" id={typeof IntersectEmissiveColor === "object" && "id" in IntersectEmissiveColor ? IntersectEmissiveColor?.id : undefined} value={typeof IntersectEmissiveColor === "object" && "value" in IntersectEmissiveColor ? IntersectEmissiveColor?.value : IntersectEmissiveColor} /* default: [0; 0; 0; 0] */  isRaw={typeof IntersectEmissiveColor === "object" && "isRaw" in IntersectEmissiveColor && IntersectEmissiveColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="EmissiveMap" id={typeof EmissiveMap === "object" && "id" in EmissiveMap ? EmissiveMap?.id : undefined} value={typeof EmissiveMap === "object" && "value" in EmissiveMap ? EmissiveMap?.value : EmissiveMap} /* default: ID0 */  isRaw={typeof EmissiveMap === "object" && "isRaw" in EmissiveMap && EmissiveMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap" id={typeof NormalMap === "object" && "id" in NormalMap ? NormalMap?.id : undefined} value={typeof NormalMap === "object" && "value" in NormalMap ? NormalMap?.value : NormalMap} /* default: ID0 */  isRaw={typeof NormalMap === "object" && "isRaw" in NormalMap && NormalMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalScale" id={typeof NormalScale === "object" && "id" in NormalScale ? NormalScale?.id : undefined} value={typeof NormalScale === "object" && "value" in NormalScale ? NormalScale?.value : NormalScale} /* default: 0 */  isRaw={typeof NormalScale === "object" && "isRaw" in NormalScale && NormalScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="OcclusionMap" id={typeof OcclusionMap === "object" && "id" in OcclusionMap ? OcclusionMap?.id : undefined} value={typeof OcclusionMap === "object" && "value" in OcclusionMap ? OcclusionMap?.value : OcclusionMap} /* default: ID0 */  isRaw={typeof OcclusionMap === "object" && "isRaw" in OcclusionMap && OcclusionMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Culling]`} name="Culling" id={typeof Culling === "object" && "id" in Culling ? Culling?.id : undefined} value={typeof Culling === "object" && "value" in Culling ? Culling?.value : Culling} /* default: Off */  isRaw={typeof Culling === "object" && "isRaw" in Culling && Culling.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  isRaw={typeof OffsetFactor === "object" && "isRaw" in OffsetFactor && OffsetFactor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  isRaw={typeof OffsetUnits === "object" && "isRaw" in OffsetUnits && OffsetUnits.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  isRaw={typeof RenderQueue === "object" && "isRaw" in RenderQueue && RenderQueue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Metallic" id={typeof Metallic === "object" && "id" in Metallic ? Metallic?.id : undefined} value={typeof Metallic === "object" && "value" in Metallic ? Metallic?.value : Metallic} /* default: 0 */  isRaw={typeof Metallic === "object" && "isRaw" in Metallic && Metallic.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Smoothness" id={typeof Smoothness === "object" && "id" in Smoothness ? Smoothness?.id : undefined} value={typeof Smoothness === "object" && "value" in Smoothness ? Smoothness?.value : Smoothness} /* default: 0 */  isRaw={typeof Smoothness === "object" && "isRaw" in Smoothness && Smoothness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="MetallicMap" id={typeof MetallicMap === "object" && "id" in MetallicMap ? MetallicMap?.id : undefined} value={typeof MetallicMap === "object" && "value" in MetallicMap ? MetallicMap?.value : MetallicMap} /* default: ID0 */  isRaw={typeof MetallicMap === "object" && "isRaw" in MetallicMap && MetallicMap.isRaw ? true : undefined} />
        </Component>
      );
    };
    