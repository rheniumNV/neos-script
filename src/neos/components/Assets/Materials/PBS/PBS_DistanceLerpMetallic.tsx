import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface PBS_DistanceLerpMetallicInput {
        
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
GridSize?: member<[number, number, number]>;
GridOffset?: member<[number, number, number]>;
DisplaceFrom?: member<number>;
DisplaceTo?: member<number>;
DisplaceMagnitudeFrom?: member<number>;
DisplaceMagnitudeTo?: member<number>;
EmissionFrom?: member<number>;
EmissionTo?: member<number>;
EmissionColorFrom?: member<[number, number, number, number]>;
EmissionColorTo?: member<[number, number, number, number]>;
OverrideDisplacementDirection?: member<any>;
LocalSpace?: member<boolean>;
Points?: member<any>;
Culling?: member<any>;
Transparent?: member<boolean>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
Metallic?: member<number>;
Smoothness?: member<number>;
MetallicMap?: member<any>;
_regular?: member<any>;
_transparent?: member<any>;
    }
    
    export function PBS_DistanceLerpMetallic(props: PBS_DistanceLerpMetallicInput){
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
GridSize,
GridOffset,
DisplaceFrom,
DisplaceTo,
DisplaceMagnitudeFrom,
DisplaceMagnitudeTo,
EmissionFrom,
EmissionTo,
EmissionColorFrom,
EmissionColorTo,
OverrideDisplacementDirection,
LocalSpace,
Points,
Culling,
Transparent,
OffsetFactor,
OffsetUnits,
RenderQueue,
Metallic,
Smoothness,
MetallicMap,
_regular,
_transparent, } = props;
    
      return (
        <Component type="FrooxEngine.PBS_DistanceLerpMetallic" id={id} persistentId={persistentId} updateOrder={updateOrder}>
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
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="GridSize" id={typeof GridSize === "object" && "id" in GridSize ? GridSize?.id : undefined} value={typeof GridSize === "object" && "value" in GridSize ? GridSize?.value : GridSize} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="GridOffset" id={typeof GridOffset === "object" && "id" in GridOffset ? GridOffset?.id : undefined} value={typeof GridOffset === "object" && "value" in GridOffset ? GridOffset?.value : GridOffset} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DisplaceFrom" id={typeof DisplaceFrom === "object" && "id" in DisplaceFrom ? DisplaceFrom?.id : undefined} value={typeof DisplaceFrom === "object" && "value" in DisplaceFrom ? DisplaceFrom?.value : DisplaceFrom} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DisplaceTo" id={typeof DisplaceTo === "object" && "id" in DisplaceTo ? DisplaceTo?.id : undefined} value={typeof DisplaceTo === "object" && "value" in DisplaceTo ? DisplaceTo?.value : DisplaceTo} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DisplaceMagnitudeFrom" id={typeof DisplaceMagnitudeFrom === "object" && "id" in DisplaceMagnitudeFrom ? DisplaceMagnitudeFrom?.id : undefined} value={typeof DisplaceMagnitudeFrom === "object" && "value" in DisplaceMagnitudeFrom ? DisplaceMagnitudeFrom?.value : DisplaceMagnitudeFrom} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DisplaceMagnitudeTo" id={typeof DisplaceMagnitudeTo === "object" && "id" in DisplaceMagnitudeTo ? DisplaceMagnitudeTo?.id : undefined} value={typeof DisplaceMagnitudeTo === "object" && "value" in DisplaceMagnitudeTo ? DisplaceMagnitudeTo?.value : DisplaceMagnitudeTo} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EmissionFrom" id={typeof EmissionFrom === "object" && "id" in EmissionFrom ? EmissionFrom?.id : undefined} value={typeof EmissionFrom === "object" && "value" in EmissionFrom ? EmissionFrom?.value : EmissionFrom} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EmissionTo" id={typeof EmissionTo === "object" && "id" in EmissionTo ? EmissionTo?.id : undefined} value={typeof EmissionTo === "object" && "value" in EmissionTo ? EmissionTo?.value : EmissionTo} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissionColorFrom" id={typeof EmissionColorFrom === "object" && "id" in EmissionColorFrom ? EmissionColorFrom?.id : undefined} value={typeof EmissionColorFrom === "object" && "value" in EmissionColorFrom ? EmissionColorFrom?.value : EmissionColorFrom} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissionColorTo" id={typeof EmissionColorTo === "object" && "id" in EmissionColorTo ? EmissionColorTo?.id : undefined} value={typeof EmissionColorTo === "object" && "value" in EmissionColorTo ? EmissionColorTo?.value : EmissionColorTo} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`} name="OverrideDisplacementDirection" id={typeof OverrideDisplacementDirection === "object" && "id" in OverrideDisplacementDirection ? OverrideDisplacementDirection?.id : undefined} value={typeof OverrideDisplacementDirection === "object" && "value" in OverrideDisplacementDirection ? OverrideDisplacementDirection?.value : OverrideDisplacementDirection} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="LocalSpace" id={typeof LocalSpace === "object" && "id" in LocalSpace ? LocalSpace?.id : undefined} value={typeof LocalSpace === "object" && "value" in LocalSpace ? LocalSpace?.value : LocalSpace} /* default: false */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.PBS_DistanceLerpMaterial+Point]`} name="Points" id={typeof Points === "object" && "id" in Points ? Points?.id : undefined} value={typeof Points === "object" && "value" in Points ? Points?.value : Points} /* default: FrooxEngine.SyncList`1[FrooxEngine.PBS_DistanceLerpMaterial+Point] */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Culling]`} name="Culling" id={typeof Culling === "object" && "id" in Culling ? Culling?.id : undefined} value={typeof Culling === "object" && "value" in Culling ? Culling?.value : Culling} /* default: Off */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Transparent" id={typeof Transparent === "object" && "id" in Transparent ? Transparent?.id : undefined} value={typeof Transparent === "object" && "value" in Transparent ? Transparent?.value : Transparent} /* default: false */  />
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
    