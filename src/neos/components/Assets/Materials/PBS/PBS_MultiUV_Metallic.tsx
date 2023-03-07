import { member, Member, Component } from "../../../../core";
    
    export interface PBS_MultiUV_MetallicInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
AlbedoScale?: member<[number, number]>;
AlbedoOffset?: member<[number, number]>;
AlbedoUV?: member<number>;
EmissionMapScale?: member<[number, number]>;
EmissionMapOffset?: member<[number, number]>;
EmissionMapUV?: member<number>;
NormalMapScale?: member<[number, number]>;
NormalMapOffset?: member<[number, number]>;
NormalMapUV?: member<number>;
OcclusionMapScale?: member<[number, number]>;
OcclusionMapOffset?: member<[number, number]>;
OcclusionMapUV?: member<number>;
SecondaryAlbedoScale?: member<[number, number]>;
SecondaryAlbedoOffset?: member<[number, number]>;
SecondaryAlbedoUV?: member<number>;
SecondaryEmissionMapScale?: member<[number, number]>;
SecondaryEmissionMapOffset?: member<[number, number]>;
SecondaryEmissionMapUV?: member<number>;
AlbedoColor?: member<[number, number, number, number]>;
AlbedoTexture?: member<any>;
EmissiveColor?: member<[number, number, number, number]>;
EmissiveMap?: member<any>;
NormalMap?: member<any>;
NormalScale?: member<number>;
OcclusionMap?: member<any>;
SecondaryAlbedoTexture?: member<any>;
SecondaryEmissiveColor?: member<[number, number, number, number]>;
SecondaryEmissiveMap?: member<any>;
Culling?: member<any>;
AlphaHandling?: member<any>;
AlphaClip?: member<number>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
Metallic?: member<number>;
Smoothness?: member<number>;
MetallicMap?: member<any>;
MetallicMapScale?: member<[number, number]>;
MetallicMapOffset?: member<[number, number]>;
MetallicMapUV?: member<number>;
    }
    
    export function PBS_MultiUV_Metallic(props: PBS_MultiUV_MetallicInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
AlbedoScale,
AlbedoOffset,
AlbedoUV,
EmissionMapScale,
EmissionMapOffset,
EmissionMapUV,
NormalMapScale,
NormalMapOffset,
NormalMapUV,
OcclusionMapScale,
OcclusionMapOffset,
OcclusionMapUV,
SecondaryAlbedoScale,
SecondaryAlbedoOffset,
SecondaryAlbedoUV,
SecondaryEmissionMapScale,
SecondaryEmissionMapOffset,
SecondaryEmissionMapUV,
AlbedoColor,
AlbedoTexture,
EmissiveColor,
EmissiveMap,
NormalMap,
NormalScale,
OcclusionMap,
SecondaryAlbedoTexture,
SecondaryEmissiveColor,
SecondaryEmissiveMap,
Culling,
AlphaHandling,
AlphaClip,
OffsetFactor,
OffsetUnits,
RenderQueue,
Metallic,
Smoothness,
MetallicMap,
MetallicMapScale,
MetallicMapOffset,
MetallicMapUV, } = props;
    
      return (
        <Component type="FrooxEngine.PBS_MultiUV_Metallic" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="AlbedoScale" id={typeof AlbedoScale === "object" && "id" in AlbedoScale ? AlbedoScale?.id : undefined} value={typeof AlbedoScale === "object" && "value" in AlbedoScale ? AlbedoScale?.value : AlbedoScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="AlbedoOffset" id={typeof AlbedoOffset === "object" && "id" in AlbedoOffset ? AlbedoOffset?.id : undefined} value={typeof AlbedoOffset === "object" && "value" in AlbedoOffset ? AlbedoOffset?.value : AlbedoOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="AlbedoUV" id={typeof AlbedoUV === "object" && "id" in AlbedoUV ? AlbedoUV?.id : undefined} value={typeof AlbedoUV === "object" && "value" in AlbedoUV ? AlbedoUV?.value : AlbedoUV} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="EmissionMapScale" id={typeof EmissionMapScale === "object" && "id" in EmissionMapScale ? EmissionMapScale?.id : undefined} value={typeof EmissionMapScale === "object" && "value" in EmissionMapScale ? EmissionMapScale?.value : EmissionMapScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="EmissionMapOffset" id={typeof EmissionMapOffset === "object" && "id" in EmissionMapOffset ? EmissionMapOffset?.id : undefined} value={typeof EmissionMapOffset === "object" && "value" in EmissionMapOffset ? EmissionMapOffset?.value : EmissionMapOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="EmissionMapUV" id={typeof EmissionMapUV === "object" && "id" in EmissionMapUV ? EmissionMapUV?.id : undefined} value={typeof EmissionMapUV === "object" && "value" in EmissionMapUV ? EmissionMapUV?.value : EmissionMapUV} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="NormalMapScale" id={typeof NormalMapScale === "object" && "id" in NormalMapScale ? NormalMapScale?.id : undefined} value={typeof NormalMapScale === "object" && "value" in NormalMapScale ? NormalMapScale?.value : NormalMapScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="NormalMapOffset" id={typeof NormalMapOffset === "object" && "id" in NormalMapOffset ? NormalMapOffset?.id : undefined} value={typeof NormalMapOffset === "object" && "value" in NormalMapOffset ? NormalMapOffset?.value : NormalMapOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="NormalMapUV" id={typeof NormalMapUV === "object" && "id" in NormalMapUV ? NormalMapUV?.id : undefined} value={typeof NormalMapUV === "object" && "value" in NormalMapUV ? NormalMapUV?.value : NormalMapUV} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="OcclusionMapScale" id={typeof OcclusionMapScale === "object" && "id" in OcclusionMapScale ? OcclusionMapScale?.id : undefined} value={typeof OcclusionMapScale === "object" && "value" in OcclusionMapScale ? OcclusionMapScale?.value : OcclusionMapScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="OcclusionMapOffset" id={typeof OcclusionMapOffset === "object" && "id" in OcclusionMapOffset ? OcclusionMapOffset?.id : undefined} value={typeof OcclusionMapOffset === "object" && "value" in OcclusionMapOffset ? OcclusionMapOffset?.value : OcclusionMapOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="OcclusionMapUV" id={typeof OcclusionMapUV === "object" && "id" in OcclusionMapUV ? OcclusionMapUV?.id : undefined} value={typeof OcclusionMapUV === "object" && "value" in OcclusionMapUV ? OcclusionMapUV?.value : OcclusionMapUV} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="SecondaryAlbedoScale" id={typeof SecondaryAlbedoScale === "object" && "id" in SecondaryAlbedoScale ? SecondaryAlbedoScale?.id : undefined} value={typeof SecondaryAlbedoScale === "object" && "value" in SecondaryAlbedoScale ? SecondaryAlbedoScale?.value : SecondaryAlbedoScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="SecondaryAlbedoOffset" id={typeof SecondaryAlbedoOffset === "object" && "id" in SecondaryAlbedoOffset ? SecondaryAlbedoOffset?.id : undefined} value={typeof SecondaryAlbedoOffset === "object" && "value" in SecondaryAlbedoOffset ? SecondaryAlbedoOffset?.value : SecondaryAlbedoOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="SecondaryAlbedoUV" id={typeof SecondaryAlbedoUV === "object" && "id" in SecondaryAlbedoUV ? SecondaryAlbedoUV?.id : undefined} value={typeof SecondaryAlbedoUV === "object" && "value" in SecondaryAlbedoUV ? SecondaryAlbedoUV?.value : SecondaryAlbedoUV} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="SecondaryEmissionMapScale" id={typeof SecondaryEmissionMapScale === "object" && "id" in SecondaryEmissionMapScale ? SecondaryEmissionMapScale?.id : undefined} value={typeof SecondaryEmissionMapScale === "object" && "value" in SecondaryEmissionMapScale ? SecondaryEmissionMapScale?.value : SecondaryEmissionMapScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="SecondaryEmissionMapOffset" id={typeof SecondaryEmissionMapOffset === "object" && "id" in SecondaryEmissionMapOffset ? SecondaryEmissionMapOffset?.id : undefined} value={typeof SecondaryEmissionMapOffset === "object" && "value" in SecondaryEmissionMapOffset ? SecondaryEmissionMapOffset?.value : SecondaryEmissionMapOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="SecondaryEmissionMapUV" id={typeof SecondaryEmissionMapUV === "object" && "id" in SecondaryEmissionMapUV ? SecondaryEmissionMapUV?.id : undefined} value={typeof SecondaryEmissionMapUV === "object" && "value" in SecondaryEmissionMapUV ? SecondaryEmissionMapUV?.value : SecondaryEmissionMapUV} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AlbedoColor" id={typeof AlbedoColor === "object" && "id" in AlbedoColor ? AlbedoColor?.id : undefined} value={typeof AlbedoColor === "object" && "value" in AlbedoColor ? AlbedoColor?.value : AlbedoColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="AlbedoTexture" id={typeof AlbedoTexture === "object" && "id" in AlbedoTexture ? AlbedoTexture?.id : undefined} value={typeof AlbedoTexture === "object" && "value" in AlbedoTexture ? AlbedoTexture?.value : AlbedoTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissiveColor" id={typeof EmissiveColor === "object" && "id" in EmissiveColor ? EmissiveColor?.id : undefined} value={typeof EmissiveColor === "object" && "value" in EmissiveColor ? EmissiveColor?.value : EmissiveColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="EmissiveMap" id={typeof EmissiveMap === "object" && "id" in EmissiveMap ? EmissiveMap?.id : undefined} value={typeof EmissiveMap === "object" && "value" in EmissiveMap ? EmissiveMap?.value : EmissiveMap} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap" id={typeof NormalMap === "object" && "id" in NormalMap ? NormalMap?.id : undefined} value={typeof NormalMap === "object" && "value" in NormalMap ? NormalMap?.value : NormalMap} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalScale" id={typeof NormalScale === "object" && "id" in NormalScale ? NormalScale?.id : undefined} value={typeof NormalScale === "object" && "value" in NormalScale ? NormalScale?.value : NormalScale} /* default: 0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="OcclusionMap" id={typeof OcclusionMap === "object" && "id" in OcclusionMap ? OcclusionMap?.id : undefined} value={typeof OcclusionMap === "object" && "value" in OcclusionMap ? OcclusionMap?.value : OcclusionMap} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="SecondaryAlbedoTexture" id={typeof SecondaryAlbedoTexture === "object" && "id" in SecondaryAlbedoTexture ? SecondaryAlbedoTexture?.id : undefined} value={typeof SecondaryAlbedoTexture === "object" && "value" in SecondaryAlbedoTexture ? SecondaryAlbedoTexture?.value : SecondaryAlbedoTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SecondaryEmissiveColor" id={typeof SecondaryEmissiveColor === "object" && "id" in SecondaryEmissiveColor ? SecondaryEmissiveColor?.id : undefined} value={typeof SecondaryEmissiveColor === "object" && "value" in SecondaryEmissiveColor ? SecondaryEmissiveColor?.value : SecondaryEmissiveColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="SecondaryEmissiveMap" id={typeof SecondaryEmissiveMap === "object" && "id" in SecondaryEmissiveMap ? SecondaryEmissiveMap?.id : undefined} value={typeof SecondaryEmissiveMap === "object" && "value" in SecondaryEmissiveMap ? SecondaryEmissiveMap?.value : SecondaryEmissiveMap} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Culling]`} name="Culling" id={typeof Culling === "object" && "id" in Culling ? Culling?.id : undefined} value={typeof Culling === "object" && "value" in Culling ? Culling?.value : Culling} /* default: Off */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AlphaHandling]`} name="AlphaHandling" id={typeof AlphaHandling === "object" && "id" in AlphaHandling ? AlphaHandling?.id : undefined} value={typeof AlphaHandling === "object" && "value" in AlphaHandling ? AlphaHandling?.value : AlphaHandling} /* default: Opaque */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AlphaClip" id={typeof AlphaClip === "object" && "id" in AlphaClip ? AlphaClip?.id : undefined} value={typeof AlphaClip === "object" && "value" in AlphaClip ? AlphaClip?.value : AlphaClip} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Metallic" id={typeof Metallic === "object" && "id" in Metallic ? Metallic?.id : undefined} value={typeof Metallic === "object" && "value" in Metallic ? Metallic?.value : Metallic} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Smoothness" id={typeof Smoothness === "object" && "id" in Smoothness ? Smoothness?.id : undefined} value={typeof Smoothness === "object" && "value" in Smoothness ? Smoothness?.value : Smoothness} /* default: 0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="MetallicMap" id={typeof MetallicMap === "object" && "id" in MetallicMap ? MetallicMap?.id : undefined} value={typeof MetallicMap === "object" && "value" in MetallicMap ? MetallicMap?.value : MetallicMap} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MetallicMapScale" id={typeof MetallicMapScale === "object" && "id" in MetallicMapScale ? MetallicMapScale?.id : undefined} value={typeof MetallicMapScale === "object" && "value" in MetallicMapScale ? MetallicMapScale?.value : MetallicMapScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MetallicMapOffset" id={typeof MetallicMapOffset === "object" && "id" in MetallicMapOffset ? MetallicMapOffset?.id : undefined} value={typeof MetallicMapOffset === "object" && "value" in MetallicMapOffset ? MetallicMapOffset?.value : MetallicMapOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MetallicMapUV" id={typeof MetallicMapUV === "object" && "id" in MetallicMapUV ? MetallicMapUV?.id : undefined} value={typeof MetallicMapUV === "object" && "value" in MetallicMapUV ? MetallicMapUV?.value : MetallicMapUV} /* default: 0 */  />
        </Component>
      );
    };
    