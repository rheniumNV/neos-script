import { member, Member, Component } from "../../../../core";
    
    export interface ReflectionMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
ReflectionTexture?: member<any>;
NormalMap?: member<any>;
NormalMapScale?: member<[number, number]>;
NormalMapOffset?: member<[number, number]>;
Distort?: member<number>;
TintColor?: member<[number, number, number, number]>;
BlendMode?: member<any>;
AlphaCutoff?: member<number>;
Sidedness?: member<any>;
ZWrite?: member<any>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
    }
    
    export function ReflectionMaterial(props: ReflectionMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
ReflectionTexture,
NormalMap,
NormalMapScale,
NormalMapOffset,
Distort,
TintColor,
BlendMode,
AlphaCutoff,
Sidedness,
ZWrite,
OffsetFactor,
OffsetUnits,
RenderQueue, } = props;
    
      return (
        <Component type="FrooxEngine.ReflectionMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="ReflectionTexture" id={typeof ReflectionTexture === "object" && "id" in ReflectionTexture ? ReflectionTexture?.id : undefined} value={typeof ReflectionTexture === "object" && "value" in ReflectionTexture ? ReflectionTexture?.value : ReflectionTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap" id={typeof NormalMap === "object" && "id" in NormalMap ? NormalMap?.id : undefined} value={typeof NormalMap === "object" && "value" in NormalMap ? NormalMap?.value : NormalMap} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="NormalMapScale" id={typeof NormalMapScale === "object" && "id" in NormalMapScale ? NormalMapScale?.id : undefined} value={typeof NormalMapScale === "object" && "value" in NormalMapScale ? NormalMapScale?.value : NormalMapScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="NormalMapOffset" id={typeof NormalMapOffset === "object" && "id" in NormalMapOffset ? NormalMapOffset?.id : undefined} value={typeof NormalMapOffset === "object" && "value" in NormalMapOffset ? NormalMapOffset?.value : NormalMapOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Distort" id={typeof Distort === "object" && "id" in Distort ? Distort?.id : undefined} value={typeof Distort === "object" && "value" in Distort ? Distort?.value : Distort} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="TintColor" id={typeof TintColor === "object" && "id" in TintColor ? TintColor?.id : undefined} value={typeof TintColor === "object" && "value" in TintColor ? TintColor?.value : TintColor} /* default: [0; 0; 0; 0] */  />
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
    