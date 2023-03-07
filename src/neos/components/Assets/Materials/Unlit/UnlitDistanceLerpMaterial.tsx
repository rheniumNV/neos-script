import { member, Member, Component } from "../../../../core";
    
    export interface UnlitDistanceLerpMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
LocalSpace?: member<boolean>;
Point?: member<[number, number, number]>;
Distance?: member<number>;
TransitionRange?: member<number>;
NearTexture?: member<any>;
FarTexture?: member<any>;
NearTextureScale?: member<[number, number]>;
NearTextureOffset?: member<[number, number]>;
FarTextureScale?: member<[number, number]>;
FarTextureOffset?: member<[number, number]>;
NearColor?: member<[number, number, number, number]>;
FarColor?: member<[number, number, number, number]>;
UseVertexColors?: member<boolean>;
BlendMode?: member<any>;
AlphaCutoff?: member<number>;
Sidedness?: member<any>;
ZWrite?: member<any>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
    }
    
    export function UnlitDistanceLerpMaterial(props: UnlitDistanceLerpMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
LocalSpace,
Point,
Distance,
TransitionRange,
NearTexture,
FarTexture,
NearTextureScale,
NearTextureOffset,
FarTextureScale,
FarTextureOffset,
NearColor,
FarColor,
UseVertexColors,
BlendMode,
AlphaCutoff,
Sidedness,
ZWrite,
OffsetFactor,
OffsetUnits,
RenderQueue, } = props;
    
      return (
        <Component type="FrooxEngine.UnlitDistanceLerpMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="LocalSpace" id={typeof LocalSpace === "object" && "id" in LocalSpace ? LocalSpace?.id : undefined} value={typeof LocalSpace === "object" && "value" in LocalSpace ? LocalSpace?.value : LocalSpace} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Point" id={typeof Point === "object" && "id" in Point ? Point?.id : undefined} value={typeof Point === "object" && "value" in Point ? Point?.value : Point} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Distance" id={typeof Distance === "object" && "id" in Distance ? Distance?.id : undefined} value={typeof Distance === "object" && "value" in Distance ? Distance?.value : Distance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TransitionRange" id={typeof TransitionRange === "object" && "id" in TransitionRange ? TransitionRange?.id : undefined} value={typeof TransitionRange === "object" && "value" in TransitionRange ? TransitionRange?.value : TransitionRange} /* default: 0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NearTexture" id={typeof NearTexture === "object" && "id" in NearTexture ? NearTexture?.id : undefined} value={typeof NearTexture === "object" && "value" in NearTexture ? NearTexture?.value : NearTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="FarTexture" id={typeof FarTexture === "object" && "id" in FarTexture ? FarTexture?.id : undefined} value={typeof FarTexture === "object" && "value" in FarTexture ? FarTexture?.value : FarTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="NearTextureScale" id={typeof NearTextureScale === "object" && "id" in NearTextureScale ? NearTextureScale?.id : undefined} value={typeof NearTextureScale === "object" && "value" in NearTextureScale ? NearTextureScale?.value : NearTextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="NearTextureOffset" id={typeof NearTextureOffset === "object" && "id" in NearTextureOffset ? NearTextureOffset?.id : undefined} value={typeof NearTextureOffset === "object" && "value" in NearTextureOffset ? NearTextureOffset?.value : NearTextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="FarTextureScale" id={typeof FarTextureScale === "object" && "id" in FarTextureScale ? FarTextureScale?.id : undefined} value={typeof FarTextureScale === "object" && "value" in FarTextureScale ? FarTextureScale?.value : FarTextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="FarTextureOffset" id={typeof FarTextureOffset === "object" && "id" in FarTextureOffset ? FarTextureOffset?.id : undefined} value={typeof FarTextureOffset === "object" && "value" in FarTextureOffset ? FarTextureOffset?.value : FarTextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="NearColor" id={typeof NearColor === "object" && "id" in NearColor ? NearColor?.id : undefined} value={typeof NearColor === "object" && "value" in NearColor ? NearColor?.value : NearColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="FarColor" id={typeof FarColor === "object" && "id" in FarColor ? FarColor?.id : undefined} value={typeof FarColor === "object" && "value" in FarColor ? FarColor?.value : FarColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseVertexColors" id={typeof UseVertexColors === "object" && "id" in UseVertexColors ? UseVertexColors?.id : undefined} value={typeof UseVertexColors === "object" && "value" in UseVertexColors ? UseVertexColors?.value : UseVertexColors} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AlphaCutoff" id={typeof AlphaCutoff === "object" && "id" in AlphaCutoff ? AlphaCutoff?.id : undefined} value={typeof AlphaCutoff === "object" && "value" in AlphaCutoff ? AlphaCutoff?.value : AlphaCutoff} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Sidedness]`} name="Sidedness" id={typeof Sidedness === "object" && "id" in Sidedness ? Sidedness?.id : undefined} value={typeof Sidedness === "object" && "value" in Sidedness ? Sidedness?.value : Sidedness} /* default: Auto */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`} name="ZWrite" id={typeof ZWrite === "object" && "id" in ZWrite ? ZWrite?.id : undefined} value={typeof ZWrite === "object" && "value" in ZWrite ? ZWrite?.value : ZWrite} /* default: Auto */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  />
        </Component>
      );
    };
    