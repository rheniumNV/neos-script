import { member, Member, Component } from "../../../../core";
    
    export interface PBSLerpSpecularInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
Lerp?: member<number>;
LerpTexture?: member<any>;
LerpTextureScale?: member<[number, number]>;
LerpTextureOffset?: member<[number, number]>;
Texture0Scale?: member<[number, number]>;
Texture0Offset?: member<[number, number]>;
Texture1Scale?: member<[number, number]>;
Texture1Offset?: member<[number, number]>;
AlbedoColor0?: member<[number, number, number, number]>;
AlbedoColor1?: member<[number, number, number, number]>;
AlbedoTexture0?: member<any>;
AlbedoTexture1?: member<any>;
EmissiveColor0?: member<[number, number, number, number]>;
EmissiveColor1?: member<[number, number, number, number]>;
EmissiveMap0?: member<any>;
EmissiveMap1?: member<any>;
NormalMap0?: member<any>;
NormalMap1?: member<any>;
NormalScale0?: member<number>;
NormalScale1?: member<number>;
OcclusionMap0?: member<any>;
OcclusionMap1?: member<any>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
SpecularColor0?: member<[number, number, number, number]>;
SpecularColor1?: member<[number, number, number, number]>;
SpecularMap0?: member<any>;
SpecularMap1?: member<any>;
    }
    
    export function PBSLerpSpecular(props: PBSLerpSpecularInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
Lerp,
LerpTexture,
LerpTextureScale,
LerpTextureOffset,
Texture0Scale,
Texture0Offset,
Texture1Scale,
Texture1Offset,
AlbedoColor0,
AlbedoColor1,
AlbedoTexture0,
AlbedoTexture1,
EmissiveColor0,
EmissiveColor1,
EmissiveMap0,
EmissiveMap1,
NormalMap0,
NormalMap1,
NormalScale0,
NormalScale1,
OcclusionMap0,
OcclusionMap1,
OffsetFactor,
OffsetUnits,
RenderQueue,
SpecularColor0,
SpecularColor1,
SpecularMap0,
SpecularMap1, } = props;
    
      return (
        <Component type="FrooxEngine.PBSLerpSpecular" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Lerp" id={typeof Lerp === "object" && "id" in Lerp ? Lerp?.id : undefined} value={typeof Lerp === "object" && "value" in Lerp ? Lerp?.value : Lerp} /* default: 0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="LerpTexture" id={typeof LerpTexture === "object" && "id" in LerpTexture ? LerpTexture?.id : undefined} value={typeof LerpTexture === "object" && "value" in LerpTexture ? LerpTexture?.value : LerpTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="LerpTextureScale" id={typeof LerpTextureScale === "object" && "id" in LerpTextureScale ? LerpTextureScale?.id : undefined} value={typeof LerpTextureScale === "object" && "value" in LerpTextureScale ? LerpTextureScale?.value : LerpTextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="LerpTextureOffset" id={typeof LerpTextureOffset === "object" && "id" in LerpTextureOffset ? LerpTextureOffset?.id : undefined} value={typeof LerpTextureOffset === "object" && "value" in LerpTextureOffset ? LerpTextureOffset?.value : LerpTextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Texture0Scale" id={typeof Texture0Scale === "object" && "id" in Texture0Scale ? Texture0Scale?.id : undefined} value={typeof Texture0Scale === "object" && "value" in Texture0Scale ? Texture0Scale?.value : Texture0Scale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Texture0Offset" id={typeof Texture0Offset === "object" && "id" in Texture0Offset ? Texture0Offset?.id : undefined} value={typeof Texture0Offset === "object" && "value" in Texture0Offset ? Texture0Offset?.value : Texture0Offset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Texture1Scale" id={typeof Texture1Scale === "object" && "id" in Texture1Scale ? Texture1Scale?.id : undefined} value={typeof Texture1Scale === "object" && "value" in Texture1Scale ? Texture1Scale?.value : Texture1Scale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Texture1Offset" id={typeof Texture1Offset === "object" && "id" in Texture1Offset ? Texture1Offset?.id : undefined} value={typeof Texture1Offset === "object" && "value" in Texture1Offset ? Texture1Offset?.value : Texture1Offset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AlbedoColor0" id={typeof AlbedoColor0 === "object" && "id" in AlbedoColor0 ? AlbedoColor0?.id : undefined} value={typeof AlbedoColor0 === "object" && "value" in AlbedoColor0 ? AlbedoColor0?.value : AlbedoColor0} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AlbedoColor1" id={typeof AlbedoColor1 === "object" && "id" in AlbedoColor1 ? AlbedoColor1?.id : undefined} value={typeof AlbedoColor1 === "object" && "value" in AlbedoColor1 ? AlbedoColor1?.value : AlbedoColor1} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="AlbedoTexture0" id={typeof AlbedoTexture0 === "object" && "id" in AlbedoTexture0 ? AlbedoTexture0?.id : undefined} value={typeof AlbedoTexture0 === "object" && "value" in AlbedoTexture0 ? AlbedoTexture0?.value : AlbedoTexture0} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="AlbedoTexture1" id={typeof AlbedoTexture1 === "object" && "id" in AlbedoTexture1 ? AlbedoTexture1?.id : undefined} value={typeof AlbedoTexture1 === "object" && "value" in AlbedoTexture1 ? AlbedoTexture1?.value : AlbedoTexture1} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissiveColor0" id={typeof EmissiveColor0 === "object" && "id" in EmissiveColor0 ? EmissiveColor0?.id : undefined} value={typeof EmissiveColor0 === "object" && "value" in EmissiveColor0 ? EmissiveColor0?.value : EmissiveColor0} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissiveColor1" id={typeof EmissiveColor1 === "object" && "id" in EmissiveColor1 ? EmissiveColor1?.id : undefined} value={typeof EmissiveColor1 === "object" && "value" in EmissiveColor1 ? EmissiveColor1?.value : EmissiveColor1} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="EmissiveMap0" id={typeof EmissiveMap0 === "object" && "id" in EmissiveMap0 ? EmissiveMap0?.id : undefined} value={typeof EmissiveMap0 === "object" && "value" in EmissiveMap0 ? EmissiveMap0?.value : EmissiveMap0} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="EmissiveMap1" id={typeof EmissiveMap1 === "object" && "id" in EmissiveMap1 ? EmissiveMap1?.id : undefined} value={typeof EmissiveMap1 === "object" && "value" in EmissiveMap1 ? EmissiveMap1?.value : EmissiveMap1} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap0" id={typeof NormalMap0 === "object" && "id" in NormalMap0 ? NormalMap0?.id : undefined} value={typeof NormalMap0 === "object" && "value" in NormalMap0 ? NormalMap0?.value : NormalMap0} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap1" id={typeof NormalMap1 === "object" && "id" in NormalMap1 ? NormalMap1?.id : undefined} value={typeof NormalMap1 === "object" && "value" in NormalMap1 ? NormalMap1?.value : NormalMap1} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalScale0" id={typeof NormalScale0 === "object" && "id" in NormalScale0 ? NormalScale0?.id : undefined} value={typeof NormalScale0 === "object" && "value" in NormalScale0 ? NormalScale0?.value : NormalScale0} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalScale1" id={typeof NormalScale1 === "object" && "id" in NormalScale1 ? NormalScale1?.id : undefined} value={typeof NormalScale1 === "object" && "value" in NormalScale1 ? NormalScale1?.value : NormalScale1} /* default: 0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="OcclusionMap0" id={typeof OcclusionMap0 === "object" && "id" in OcclusionMap0 ? OcclusionMap0?.id : undefined} value={typeof OcclusionMap0 === "object" && "value" in OcclusionMap0 ? OcclusionMap0?.value : OcclusionMap0} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="OcclusionMap1" id={typeof OcclusionMap1 === "object" && "id" in OcclusionMap1 ? OcclusionMap1?.id : undefined} value={typeof OcclusionMap1 === "object" && "value" in OcclusionMap1 ? OcclusionMap1?.value : OcclusionMap1} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SpecularColor0" id={typeof SpecularColor0 === "object" && "id" in SpecularColor0 ? SpecularColor0?.id : undefined} value={typeof SpecularColor0 === "object" && "value" in SpecularColor0 ? SpecularColor0?.value : SpecularColor0} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SpecularColor1" id={typeof SpecularColor1 === "object" && "id" in SpecularColor1 ? SpecularColor1?.id : undefined} value={typeof SpecularColor1 === "object" && "value" in SpecularColor1 ? SpecularColor1?.value : SpecularColor1} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="SpecularMap0" id={typeof SpecularMap0 === "object" && "id" in SpecularMap0 ? SpecularMap0?.id : undefined} value={typeof SpecularMap0 === "object" && "value" in SpecularMap0 ? SpecularMap0?.value : SpecularMap0} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="SpecularMap1" id={typeof SpecularMap1 === "object" && "id" in SpecularMap1 ? SpecularMap1?.id : undefined} value={typeof SpecularMap1 === "object" && "value" in SpecularMap1 ? SpecularMap1?.value : SpecularMap1} /* default: ID0 */  />
        </Component>
      );
    };
    