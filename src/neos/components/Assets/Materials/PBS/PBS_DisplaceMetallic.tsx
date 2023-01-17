import { member, Member, Component } from "../../../../core";
    
    export interface PBS_DisplaceMetallicInput {
        
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
VertexDisplaceMap?: member<any>;
VertexDisplaceMagnitude?: member<number>;
VertexDisplaceBias?: member<number>;
VertexDisplaceMapScale?: member<[number, number]>;
VertexDisplaceMapOffset?: member<[number, number]>;
UVDisplaceMap?: member<any>;
UVDisplaceMagnitude?: member<number>;
UVDisplaceBias?: member<number>;
UVDisplaceMapScale?: member<[number, number]>;
UVDisplaceMapOffset?: member<[number, number]>;
WorldspaceVertexOffsetMap?: member<any>;
WorldspaceOffsetMagnitude?: member<[number, number]>;
WorldspaceVertexOffsetMapScale?: member<[number, number]>;
WorldspaceVertexOffsetMapOffset?: member<[number, number]>;
WorldspaceOffsetPerVertex?: member<boolean>;
Culling?: member<any>;
AlphaHandling?: member<any>;
AlphaClip?: member<number>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
Metallic?: member<number>;
Smoothness?: member<number>;
MetallicMap?: member<any>;
_regular?: member<any>;
_transparent?: member<any>;
    }
    
    export function PBS_DisplaceMetallic(props: PBS_DisplaceMetallicInput){
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
VertexDisplaceMap,
VertexDisplaceMagnitude,
VertexDisplaceBias,
VertexDisplaceMapScale,
VertexDisplaceMapOffset,
UVDisplaceMap,
UVDisplaceMagnitude,
UVDisplaceBias,
UVDisplaceMapScale,
UVDisplaceMapOffset,
WorldspaceVertexOffsetMap,
WorldspaceOffsetMagnitude,
WorldspaceVertexOffsetMapScale,
WorldspaceVertexOffsetMapOffset,
WorldspaceOffsetPerVertex,
Culling,
AlphaHandling,
AlphaClip,
OffsetFactor,
OffsetUnits,
RenderQueue,
Metallic,
Smoothness,
MetallicMap,
_regular,
_transparent, } = props;
    
      return (
        <Component type="FrooxEngine.PBS_DisplaceMetallic" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureScale" id={typeof TextureScale === "object" && "id" in TextureScale ? TextureScale?.id : undefined} value={typeof TextureScale === "object" && "value" in TextureScale ? TextureScale?.value : TextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureOffset" id={typeof TextureOffset === "object" && "id" in TextureOffset ? TextureOffset?.id : undefined} value={typeof TextureOffset === "object" && "value" in TextureOffset ? TextureOffset?.value : TextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AlbedoColor" id={typeof AlbedoColor === "object" && "id" in AlbedoColor ? AlbedoColor?.id : undefined} value={typeof AlbedoColor === "object" && "value" in AlbedoColor ? AlbedoColor?.value : AlbedoColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="AlbedoTexture" id={typeof AlbedoTexture === "object" && "id" in AlbedoTexture ? AlbedoTexture?.id : undefined} value={typeof AlbedoTexture === "object" && "value" in AlbedoTexture ? AlbedoTexture?.value : AlbedoTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissiveColor" id={typeof EmissiveColor === "object" && "id" in EmissiveColor ? EmissiveColor?.id : undefined} value={typeof EmissiveColor === "object" && "value" in EmissiveColor ? EmissiveColor?.value : EmissiveColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="EmissiveMap" id={typeof EmissiveMap === "object" && "id" in EmissiveMap ? EmissiveMap?.id : undefined} value={typeof EmissiveMap === "object" && "value" in EmissiveMap ? EmissiveMap?.value : EmissiveMap} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap" id={typeof NormalMap === "object" && "id" in NormalMap ? NormalMap?.id : undefined} value={typeof NormalMap === "object" && "value" in NormalMap ? NormalMap?.value : NormalMap} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalScale" id={typeof NormalScale === "object" && "id" in NormalScale ? NormalScale?.id : undefined} value={typeof NormalScale === "object" && "value" in NormalScale ? NormalScale?.value : NormalScale} /* default: 0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="OcclusionMap" id={typeof OcclusionMap === "object" && "id" in OcclusionMap ? OcclusionMap?.id : undefined} value={typeof OcclusionMap === "object" && "value" in OcclusionMap ? OcclusionMap?.value : OcclusionMap} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="VertexDisplaceMap" id={typeof VertexDisplaceMap === "object" && "id" in VertexDisplaceMap ? VertexDisplaceMap?.id : undefined} value={typeof VertexDisplaceMap === "object" && "value" in VertexDisplaceMap ? VertexDisplaceMap?.value : VertexDisplaceMap} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VertexDisplaceMagnitude" id={typeof VertexDisplaceMagnitude === "object" && "id" in VertexDisplaceMagnitude ? VertexDisplaceMagnitude?.id : undefined} value={typeof VertexDisplaceMagnitude === "object" && "value" in VertexDisplaceMagnitude ? VertexDisplaceMagnitude?.value : VertexDisplaceMagnitude} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VertexDisplaceBias" id={typeof VertexDisplaceBias === "object" && "id" in VertexDisplaceBias ? VertexDisplaceBias?.id : undefined} value={typeof VertexDisplaceBias === "object" && "value" in VertexDisplaceBias ? VertexDisplaceBias?.value : VertexDisplaceBias} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="VertexDisplaceMapScale" id={typeof VertexDisplaceMapScale === "object" && "id" in VertexDisplaceMapScale ? VertexDisplaceMapScale?.id : undefined} value={typeof VertexDisplaceMapScale === "object" && "value" in VertexDisplaceMapScale ? VertexDisplaceMapScale?.value : VertexDisplaceMapScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="VertexDisplaceMapOffset" id={typeof VertexDisplaceMapOffset === "object" && "id" in VertexDisplaceMapOffset ? VertexDisplaceMapOffset?.id : undefined} value={typeof VertexDisplaceMapOffset === "object" && "value" in VertexDisplaceMapOffset ? VertexDisplaceMapOffset?.value : VertexDisplaceMapOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="UVDisplaceMap" id={typeof UVDisplaceMap === "object" && "id" in UVDisplaceMap ? UVDisplaceMap?.id : undefined} value={typeof UVDisplaceMap === "object" && "value" in UVDisplaceMap ? UVDisplaceMap?.value : UVDisplaceMap} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="UVDisplaceMagnitude" id={typeof UVDisplaceMagnitude === "object" && "id" in UVDisplaceMagnitude ? UVDisplaceMagnitude?.id : undefined} value={typeof UVDisplaceMagnitude === "object" && "value" in UVDisplaceMagnitude ? UVDisplaceMagnitude?.value : UVDisplaceMagnitude} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="UVDisplaceBias" id={typeof UVDisplaceBias === "object" && "id" in UVDisplaceBias ? UVDisplaceBias?.id : undefined} value={typeof UVDisplaceBias === "object" && "value" in UVDisplaceBias ? UVDisplaceBias?.value : UVDisplaceBias} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="UVDisplaceMapScale" id={typeof UVDisplaceMapScale === "object" && "id" in UVDisplaceMapScale ? UVDisplaceMapScale?.id : undefined} value={typeof UVDisplaceMapScale === "object" && "value" in UVDisplaceMapScale ? UVDisplaceMapScale?.value : UVDisplaceMapScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="UVDisplaceMapOffset" id={typeof UVDisplaceMapOffset === "object" && "id" in UVDisplaceMapOffset ? UVDisplaceMapOffset?.id : undefined} value={typeof UVDisplaceMapOffset === "object" && "value" in UVDisplaceMapOffset ? UVDisplaceMapOffset?.value : UVDisplaceMapOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="WorldspaceVertexOffsetMap" id={typeof WorldspaceVertexOffsetMap === "object" && "id" in WorldspaceVertexOffsetMap ? WorldspaceVertexOffsetMap?.id : undefined} value={typeof WorldspaceVertexOffsetMap === "object" && "value" in WorldspaceVertexOffsetMap ? WorldspaceVertexOffsetMap?.value : WorldspaceVertexOffsetMap} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="WorldspaceOffsetMagnitude" id={typeof WorldspaceOffsetMagnitude === "object" && "id" in WorldspaceOffsetMagnitude ? WorldspaceOffsetMagnitude?.id : undefined} value={typeof WorldspaceOffsetMagnitude === "object" && "value" in WorldspaceOffsetMagnitude ? WorldspaceOffsetMagnitude?.value : WorldspaceOffsetMagnitude} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="WorldspaceVertexOffsetMapScale" id={typeof WorldspaceVertexOffsetMapScale === "object" && "id" in WorldspaceVertexOffsetMapScale ? WorldspaceVertexOffsetMapScale?.id : undefined} value={typeof WorldspaceVertexOffsetMapScale === "object" && "value" in WorldspaceVertexOffsetMapScale ? WorldspaceVertexOffsetMapScale?.value : WorldspaceVertexOffsetMapScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="WorldspaceVertexOffsetMapOffset" id={typeof WorldspaceVertexOffsetMapOffset === "object" && "id" in WorldspaceVertexOffsetMapOffset ? WorldspaceVertexOffsetMapOffset?.id : undefined} value={typeof WorldspaceVertexOffsetMapOffset === "object" && "value" in WorldspaceVertexOffsetMapOffset ? WorldspaceVertexOffsetMapOffset?.value : WorldspaceVertexOffsetMapOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="WorldspaceOffsetPerVertex" id={typeof WorldspaceOffsetPerVertex === "object" && "id" in WorldspaceOffsetPerVertex ? WorldspaceOffsetPerVertex?.id : undefined} value={typeof WorldspaceOffsetPerVertex === "object" && "value" in WorldspaceOffsetPerVertex ? WorldspaceOffsetPerVertex?.value : WorldspaceOffsetPerVertex} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Culling]`} name="Culling" id={typeof Culling === "object" && "id" in Culling ? Culling?.id : undefined} value={typeof Culling === "object" && "value" in Culling ? Culling?.value : Culling} /* default: Off */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AlphaHandling]`} name="AlphaHandling" id={typeof AlphaHandling === "object" && "id" in AlphaHandling ? AlphaHandling?.id : undefined} value={typeof AlphaHandling === "object" && "value" in AlphaHandling ? AlphaHandling?.value : AlphaHandling} /* default: Opaque */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AlphaClip" id={typeof AlphaClip === "object" && "id" in AlphaClip ? AlphaClip?.id : undefined} value={typeof AlphaClip === "object" && "value" in AlphaClip ? AlphaClip?.value : AlphaClip} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Metallic" id={typeof Metallic === "object" && "id" in Metallic ? Metallic?.id : undefined} value={typeof Metallic === "object" && "value" in Metallic ? Metallic?.value : Metallic} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Smoothness" id={typeof Smoothness === "object" && "id" in Smoothness ? Smoothness?.id : undefined} value={typeof Smoothness === "object" && "value" in Smoothness ? Smoothness?.value : Smoothness} /* default: 0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="MetallicMap" id={typeof MetallicMap === "object" && "id" in MetallicMap ? MetallicMap?.id : undefined} value={typeof MetallicMap === "object" && "value" in MetallicMap ? MetallicMap?.value : MetallicMap} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_regular-ID" id={typeof _regular === "object" && "id" in _regular ? _regular?.id : undefined} value={typeof _regular === "object" && "value" in _regular ? _regular?.value : _regular} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_transparent-ID" id={typeof _transparent === "object" && "id" in _transparent ? _transparent?.id : undefined} value={typeof _transparent === "object" && "value" in _transparent ? _transparent?.value : _transparent} /* default: ID0 */ idOnly />
        </Component>
      );
    };
    