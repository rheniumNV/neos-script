import { member, Member, Component } from "../../../../core";
    
    export interface FresnelLerpMaterialInput {
        
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
LerpTexturePolarUV?: member<boolean>;
LerpTexturePolarPower?: member<number>;
Exponent0?: member<number>;
Exponent1?: member<number>;
FarColor0?: member<[number, number, number, number]>;
NearColor0?: member<[number, number, number, number]>;
FarColor1?: member<[number, number, number, number]>;
NearColor1?: member<[number, number, number, number]>;
FarTexture0?: member<any>;
NearTexture0?: member<any>;
FarTexture1?: member<any>;
NearTexture1?: member<any>;
NormalMap0?: member<any>;
NormalMap1?: member<any>;
BlendMode?: member<any>;
Sidedness?: member<any>;
ZWrite?: member<any>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
    }
    
    export function FresnelLerpMaterial(props: FresnelLerpMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
Lerp,
LerpTexture,
LerpTextureScale,
LerpTextureOffset,
LerpTexturePolarUV,
LerpTexturePolarPower,
Exponent0,
Exponent1,
FarColor0,
NearColor0,
FarColor1,
NearColor1,
FarTexture0,
NearTexture0,
FarTexture1,
NearTexture1,
NormalMap0,
NormalMap1,
BlendMode,
Sidedness,
ZWrite,
OffsetFactor,
OffsetUnits,
RenderQueue, } = props;
    
      return (
        <Component type="FrooxEngine.FresnelLerpMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ readOnly isRaw={typeof _shader === "object" && "isRaw" in _shader && _shader.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Lerp" id={typeof Lerp === "object" && "id" in Lerp ? Lerp?.id : undefined} value={typeof Lerp === "object" && "value" in Lerp ? Lerp?.value : Lerp} /* default: 0 */  isRaw={typeof Lerp === "object" && "isRaw" in Lerp && Lerp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="LerpTexture" id={typeof LerpTexture === "object" && "id" in LerpTexture ? LerpTexture?.id : undefined} value={typeof LerpTexture === "object" && "value" in LerpTexture ? LerpTexture?.value : LerpTexture} /* default: ID0 */  isRaw={typeof LerpTexture === "object" && "isRaw" in LerpTexture && LerpTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="LerpTextureScale" id={typeof LerpTextureScale === "object" && "id" in LerpTextureScale ? LerpTextureScale?.id : undefined} value={typeof LerpTextureScale === "object" && "value" in LerpTextureScale ? LerpTextureScale?.value : LerpTextureScale} /* default: [0; 0] */  isRaw={typeof LerpTextureScale === "object" && "isRaw" in LerpTextureScale && LerpTextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="LerpTextureOffset" id={typeof LerpTextureOffset === "object" && "id" in LerpTextureOffset ? LerpTextureOffset?.id : undefined} value={typeof LerpTextureOffset === "object" && "value" in LerpTextureOffset ? LerpTextureOffset?.value : LerpTextureOffset} /* default: [0; 0] */  isRaw={typeof LerpTextureOffset === "object" && "isRaw" in LerpTextureOffset && LerpTextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="LerpTexturePolarUV" id={typeof LerpTexturePolarUV === "object" && "id" in LerpTexturePolarUV ? LerpTexturePolarUV?.id : undefined} value={typeof LerpTexturePolarUV === "object" && "value" in LerpTexturePolarUV ? LerpTexturePolarUV?.value : LerpTexturePolarUV} /* default: false */  isRaw={typeof LerpTexturePolarUV === "object" && "isRaw" in LerpTexturePolarUV && LerpTexturePolarUV.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LerpTexturePolarPower" id={typeof LerpTexturePolarPower === "object" && "id" in LerpTexturePolarPower ? LerpTexturePolarPower?.id : undefined} value={typeof LerpTexturePolarPower === "object" && "value" in LerpTexturePolarPower ? LerpTexturePolarPower?.value : LerpTexturePolarPower} /* default: 0 */  isRaw={typeof LerpTexturePolarPower === "object" && "isRaw" in LerpTexturePolarPower && LerpTexturePolarPower.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Exponent0" id={typeof Exponent0 === "object" && "id" in Exponent0 ? Exponent0?.id : undefined} value={typeof Exponent0 === "object" && "value" in Exponent0 ? Exponent0?.value : Exponent0} /* default: 0 */  isRaw={typeof Exponent0 === "object" && "isRaw" in Exponent0 && Exponent0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Exponent1" id={typeof Exponent1 === "object" && "id" in Exponent1 ? Exponent1?.id : undefined} value={typeof Exponent1 === "object" && "value" in Exponent1 ? Exponent1?.value : Exponent1} /* default: 0 */  isRaw={typeof Exponent1 === "object" && "isRaw" in Exponent1 && Exponent1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="FarColor0" id={typeof FarColor0 === "object" && "id" in FarColor0 ? FarColor0?.id : undefined} value={typeof FarColor0 === "object" && "value" in FarColor0 ? FarColor0?.value : FarColor0} /* default: [0; 0; 0; 0] */  isRaw={typeof FarColor0 === "object" && "isRaw" in FarColor0 && FarColor0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="NearColor0" id={typeof NearColor0 === "object" && "id" in NearColor0 ? NearColor0?.id : undefined} value={typeof NearColor0 === "object" && "value" in NearColor0 ? NearColor0?.value : NearColor0} /* default: [0; 0; 0; 0] */  isRaw={typeof NearColor0 === "object" && "isRaw" in NearColor0 && NearColor0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="FarColor1" id={typeof FarColor1 === "object" && "id" in FarColor1 ? FarColor1?.id : undefined} value={typeof FarColor1 === "object" && "value" in FarColor1 ? FarColor1?.value : FarColor1} /* default: [0; 0; 0; 0] */  isRaw={typeof FarColor1 === "object" && "isRaw" in FarColor1 && FarColor1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="NearColor1" id={typeof NearColor1 === "object" && "id" in NearColor1 ? NearColor1?.id : undefined} value={typeof NearColor1 === "object" && "value" in NearColor1 ? NearColor1?.value : NearColor1} /* default: [0; 0; 0; 0] */  isRaw={typeof NearColor1 === "object" && "isRaw" in NearColor1 && NearColor1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="FarTexture0" id={typeof FarTexture0 === "object" && "id" in FarTexture0 ? FarTexture0?.id : undefined} value={typeof FarTexture0 === "object" && "value" in FarTexture0 ? FarTexture0?.value : FarTexture0} /* default: ID0 */  isRaw={typeof FarTexture0 === "object" && "isRaw" in FarTexture0 && FarTexture0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NearTexture0" id={typeof NearTexture0 === "object" && "id" in NearTexture0 ? NearTexture0?.id : undefined} value={typeof NearTexture0 === "object" && "value" in NearTexture0 ? NearTexture0?.value : NearTexture0} /* default: ID0 */  isRaw={typeof NearTexture0 === "object" && "isRaw" in NearTexture0 && NearTexture0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="FarTexture1" id={typeof FarTexture1 === "object" && "id" in FarTexture1 ? FarTexture1?.id : undefined} value={typeof FarTexture1 === "object" && "value" in FarTexture1 ? FarTexture1?.value : FarTexture1} /* default: ID0 */  isRaw={typeof FarTexture1 === "object" && "isRaw" in FarTexture1 && FarTexture1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NearTexture1" id={typeof NearTexture1 === "object" && "id" in NearTexture1 ? NearTexture1?.id : undefined} value={typeof NearTexture1 === "object" && "value" in NearTexture1 ? NearTexture1?.value : NearTexture1} /* default: ID0 */  isRaw={typeof NearTexture1 === "object" && "isRaw" in NearTexture1 && NearTexture1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap0" id={typeof NormalMap0 === "object" && "id" in NormalMap0 ? NormalMap0?.id : undefined} value={typeof NormalMap0 === "object" && "value" in NormalMap0 ? NormalMap0?.value : NormalMap0} /* default: ID0 */  isRaw={typeof NormalMap0 === "object" && "isRaw" in NormalMap0 && NormalMap0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap1" id={typeof NormalMap1 === "object" && "id" in NormalMap1 ? NormalMap1?.id : undefined} value={typeof NormalMap1 === "object" && "value" in NormalMap1 ? NormalMap1?.value : NormalMap1} /* default: ID0 */  isRaw={typeof NormalMap1 === "object" && "isRaw" in NormalMap1 && NormalMap1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  isRaw={typeof BlendMode === "object" && "isRaw" in BlendMode && BlendMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Sidedness]`} name="Sidedness" id={typeof Sidedness === "object" && "id" in Sidedness ? Sidedness?.id : undefined} value={typeof Sidedness === "object" && "value" in Sidedness ? Sidedness?.value : Sidedness} /* default: Auto */  isRaw={typeof Sidedness === "object" && "isRaw" in Sidedness && Sidedness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`} name="ZWrite" id={typeof ZWrite === "object" && "id" in ZWrite ? ZWrite?.id : undefined} value={typeof ZWrite === "object" && "value" in ZWrite ? ZWrite?.value : ZWrite} /* default: Auto */  isRaw={typeof ZWrite === "object" && "isRaw" in ZWrite && ZWrite.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  isRaw={typeof OffsetFactor === "object" && "isRaw" in OffsetFactor && OffsetFactor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  isRaw={typeof OffsetUnits === "object" && "isRaw" in OffsetUnits && OffsetUnits.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  isRaw={typeof RenderQueue === "object" && "isRaw" in RenderQueue && RenderQueue.isRaw ? true : undefined} />
        </Component>
      );
    };
    