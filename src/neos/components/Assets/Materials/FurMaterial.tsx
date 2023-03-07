import { member, Member, Component } from "../../../core";
    
    export interface FurMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
Color?: member<[number, number, number, number]>;
SpecularColor?: member<[number, number, number, number]>;
Shininess?: member<number>;
Gloss?: member<number>;
RimColor?: member<[number, number, number, number]>;
RimPower?: member<number>;
FurLength?: member<number>;
FurHardness?: member<number>;
FurThinness?: member<number>;
FurShading?: member<number>;
FurColoring?: member<number>;
Base?: member<any>;
NormalMap?: member<any>;
Noise?: member<any>;
TextureScale?: member<[number, number]>;
TextureOffset?: member<[number, number]>;
AlphaCutoff?: member<number>;
ForceGlobal?: member<[number, number, number, number]>;
ForceLocal?: member<[number, number, number, number]>;
RenderQueue?: member<number>;
    }
    
    export function FurMaterial(props: FurMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
Color,
SpecularColor,
Shininess,
Gloss,
RimColor,
RimPower,
FurLength,
FurHardness,
FurThinness,
FurShading,
FurColoring,
Base,
NormalMap,
Noise,
TextureScale,
TextureOffset,
AlphaCutoff,
ForceGlobal,
ForceLocal,
RenderQueue, } = props;
    
      return (
        <Component type="FrooxEngine.FurMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SpecularColor" id={typeof SpecularColor === "object" && "id" in SpecularColor ? SpecularColor?.id : undefined} value={typeof SpecularColor === "object" && "value" in SpecularColor ? SpecularColor?.value : SpecularColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Shininess" id={typeof Shininess === "object" && "id" in Shininess ? Shininess?.id : undefined} value={typeof Shininess === "object" && "value" in Shininess ? Shininess?.value : Shininess} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Gloss" id={typeof Gloss === "object" && "id" in Gloss ? Gloss?.id : undefined} value={typeof Gloss === "object" && "value" in Gloss ? Gloss?.value : Gloss} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="RimColor" id={typeof RimColor === "object" && "id" in RimColor ? RimColor?.id : undefined} value={typeof RimColor === "object" && "value" in RimColor ? RimColor?.value : RimColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RimPower" id={typeof RimPower === "object" && "id" in RimPower ? RimPower?.id : undefined} value={typeof RimPower === "object" && "value" in RimPower ? RimPower?.value : RimPower} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FurLength" id={typeof FurLength === "object" && "id" in FurLength ? FurLength?.id : undefined} value={typeof FurLength === "object" && "value" in FurLength ? FurLength?.value : FurLength} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FurHardness" id={typeof FurHardness === "object" && "id" in FurHardness ? FurHardness?.id : undefined} value={typeof FurHardness === "object" && "value" in FurHardness ? FurHardness?.value : FurHardness} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FurThinness" id={typeof FurThinness === "object" && "id" in FurThinness ? FurThinness?.id : undefined} value={typeof FurThinness === "object" && "value" in FurThinness ? FurThinness?.value : FurThinness} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FurShading" id={typeof FurShading === "object" && "id" in FurShading ? FurShading?.id : undefined} value={typeof FurShading === "object" && "value" in FurShading ? FurShading?.value : FurShading} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FurColoring" id={typeof FurColoring === "object" && "id" in FurColoring ? FurColoring?.id : undefined} value={typeof FurColoring === "object" && "value" in FurColoring ? FurColoring?.value : FurColoring} /* default: 0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="Base" id={typeof Base === "object" && "id" in Base ? Base?.id : undefined} value={typeof Base === "object" && "value" in Base ? Base?.value : Base} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap" id={typeof NormalMap === "object" && "id" in NormalMap ? NormalMap?.id : undefined} value={typeof NormalMap === "object" && "value" in NormalMap ? NormalMap?.value : NormalMap} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="Noise" id={typeof Noise === "object" && "id" in Noise ? Noise?.id : undefined} value={typeof Noise === "object" && "value" in Noise ? Noise?.value : Noise} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureScale" id={typeof TextureScale === "object" && "id" in TextureScale ? TextureScale?.id : undefined} value={typeof TextureScale === "object" && "value" in TextureScale ? TextureScale?.value : TextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureOffset" id={typeof TextureOffset === "object" && "id" in TextureOffset ? TextureOffset?.id : undefined} value={typeof TextureOffset === "object" && "value" in TextureOffset ? TextureOffset?.value : TextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AlphaCutoff" id={typeof AlphaCutoff === "object" && "id" in AlphaCutoff ? AlphaCutoff?.id : undefined} value={typeof AlphaCutoff === "object" && "value" in AlphaCutoff ? AlphaCutoff?.value : AlphaCutoff} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float4]`} name="ForceGlobal" id={typeof ForceGlobal === "object" && "id" in ForceGlobal ? ForceGlobal?.id : undefined} value={typeof ForceGlobal === "object" && "value" in ForceGlobal ? ForceGlobal?.value : ForceGlobal} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float4]`} name="ForceLocal" id={typeof ForceLocal === "object" && "id" in ForceLocal ? ForceLocal?.id : undefined} value={typeof ForceLocal === "object" && "value" in ForceLocal ? ForceLocal?.value : ForceLocal} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  />
        </Component>
      );
    };
    