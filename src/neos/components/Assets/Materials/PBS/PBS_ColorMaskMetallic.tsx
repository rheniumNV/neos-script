import { member, Member, Component } from "../../../../core";
    
    export interface PBS_ColorMaskMetallicInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
TextureScale?: member<[number, number]>;
TextureOffset?: member<[number, number]>;
ColorMaskScale?: member<[number, number]>;
ColorMaskOffset?: member<[number, number]>;
ColorMask?: member<any>;
AlbedoColor0?: member<[number, number, number, number]>;
AlbedoColor1?: member<[number, number, number, number]>;
AlbedoColor2?: member<[number, number, number, number]>;
AlbedoColor3?: member<[number, number, number, number]>;
AlbedoTexture?: member<any>;
EmissiveColor0?: member<[number, number, number, number]>;
EmissiveColor1?: member<[number, number, number, number]>;
EmissiveColor2?: member<[number, number, number, number]>;
EmissiveColor3?: member<[number, number, number, number]>;
EmissiveMap?: member<any>;
NormalMap?: member<any>;
NormalScale?: member<number>;
OcclusionMap?: member<any>;
Transparent?: member<boolean>;
ForceZWrite?: member<boolean>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
Metallic?: member<number>;
Smoothness?: member<number>;
MetallicMap?: member<any>;
_regular?: member<any>;
_transparent?: member<any>;
_zwrite?: member<any>;
    }
    
    export function PBS_ColorMaskMetallic(props: PBS_ColorMaskMetallicInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
TextureScale,
TextureOffset,
ColorMaskScale,
ColorMaskOffset,
ColorMask,
AlbedoColor0,
AlbedoColor1,
AlbedoColor2,
AlbedoColor3,
AlbedoTexture,
EmissiveColor0,
EmissiveColor1,
EmissiveColor2,
EmissiveColor3,
EmissiveMap,
NormalMap,
NormalScale,
OcclusionMap,
Transparent,
ForceZWrite,
OffsetFactor,
OffsetUnits,
RenderQueue,
Metallic,
Smoothness,
MetallicMap,
_regular,
_transparent,
_zwrite, } = props;
    
      return (
        <Component type="FrooxEngine.PBS_ColorMaskMetallic" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ readOnly isRaw={typeof _shader === "object" && "isRaw" in _shader && _shader.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureScale" id={typeof TextureScale === "object" && "id" in TextureScale ? TextureScale?.id : undefined} value={typeof TextureScale === "object" && "value" in TextureScale ? TextureScale?.value : TextureScale} /* default: [0; 0] */  isRaw={typeof TextureScale === "object" && "isRaw" in TextureScale && TextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureOffset" id={typeof TextureOffset === "object" && "id" in TextureOffset ? TextureOffset?.id : undefined} value={typeof TextureOffset === "object" && "value" in TextureOffset ? TextureOffset?.value : TextureOffset} /* default: [0; 0] */  isRaw={typeof TextureOffset === "object" && "isRaw" in TextureOffset && TextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ColorMaskScale" id={typeof ColorMaskScale === "object" && "id" in ColorMaskScale ? ColorMaskScale?.id : undefined} value={typeof ColorMaskScale === "object" && "value" in ColorMaskScale ? ColorMaskScale?.value : ColorMaskScale} /* default: [0; 0] */  isRaw={typeof ColorMaskScale === "object" && "isRaw" in ColorMaskScale && ColorMaskScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ColorMaskOffset" id={typeof ColorMaskOffset === "object" && "id" in ColorMaskOffset ? ColorMaskOffset?.id : undefined} value={typeof ColorMaskOffset === "object" && "value" in ColorMaskOffset ? ColorMaskOffset?.value : ColorMaskOffset} /* default: [0; 0] */  isRaw={typeof ColorMaskOffset === "object" && "isRaw" in ColorMaskOffset && ColorMaskOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="ColorMask" id={typeof ColorMask === "object" && "id" in ColorMask ? ColorMask?.id : undefined} value={typeof ColorMask === "object" && "value" in ColorMask ? ColorMask?.value : ColorMask} /* default: ID0 */  isRaw={typeof ColorMask === "object" && "isRaw" in ColorMask && ColorMask.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AlbedoColor0" id={typeof AlbedoColor0 === "object" && "id" in AlbedoColor0 ? AlbedoColor0?.id : undefined} value={typeof AlbedoColor0 === "object" && "value" in AlbedoColor0 ? AlbedoColor0?.value : AlbedoColor0} /* default: [0; 0; 0; 0] */  isRaw={typeof AlbedoColor0 === "object" && "isRaw" in AlbedoColor0 && AlbedoColor0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AlbedoColor1" id={typeof AlbedoColor1 === "object" && "id" in AlbedoColor1 ? AlbedoColor1?.id : undefined} value={typeof AlbedoColor1 === "object" && "value" in AlbedoColor1 ? AlbedoColor1?.value : AlbedoColor1} /* default: [0; 0; 0; 0] */  isRaw={typeof AlbedoColor1 === "object" && "isRaw" in AlbedoColor1 && AlbedoColor1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AlbedoColor2" id={typeof AlbedoColor2 === "object" && "id" in AlbedoColor2 ? AlbedoColor2?.id : undefined} value={typeof AlbedoColor2 === "object" && "value" in AlbedoColor2 ? AlbedoColor2?.value : AlbedoColor2} /* default: [0; 0; 0; 0] */  isRaw={typeof AlbedoColor2 === "object" && "isRaw" in AlbedoColor2 && AlbedoColor2.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="AlbedoColor3" id={typeof AlbedoColor3 === "object" && "id" in AlbedoColor3 ? AlbedoColor3?.id : undefined} value={typeof AlbedoColor3 === "object" && "value" in AlbedoColor3 ? AlbedoColor3?.value : AlbedoColor3} /* default: [0; 0; 0; 0] */  isRaw={typeof AlbedoColor3 === "object" && "isRaw" in AlbedoColor3 && AlbedoColor3.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="AlbedoTexture" id={typeof AlbedoTexture === "object" && "id" in AlbedoTexture ? AlbedoTexture?.id : undefined} value={typeof AlbedoTexture === "object" && "value" in AlbedoTexture ? AlbedoTexture?.value : AlbedoTexture} /* default: ID0 */  isRaw={typeof AlbedoTexture === "object" && "isRaw" in AlbedoTexture && AlbedoTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissiveColor0" id={typeof EmissiveColor0 === "object" && "id" in EmissiveColor0 ? EmissiveColor0?.id : undefined} value={typeof EmissiveColor0 === "object" && "value" in EmissiveColor0 ? EmissiveColor0?.value : EmissiveColor0} /* default: [0; 0; 0; 0] */  isRaw={typeof EmissiveColor0 === "object" && "isRaw" in EmissiveColor0 && EmissiveColor0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissiveColor1" id={typeof EmissiveColor1 === "object" && "id" in EmissiveColor1 ? EmissiveColor1?.id : undefined} value={typeof EmissiveColor1 === "object" && "value" in EmissiveColor1 ? EmissiveColor1?.value : EmissiveColor1} /* default: [0; 0; 0; 0] */  isRaw={typeof EmissiveColor1 === "object" && "isRaw" in EmissiveColor1 && EmissiveColor1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissiveColor2" id={typeof EmissiveColor2 === "object" && "id" in EmissiveColor2 ? EmissiveColor2?.id : undefined} value={typeof EmissiveColor2 === "object" && "value" in EmissiveColor2 ? EmissiveColor2?.value : EmissiveColor2} /* default: [0; 0; 0; 0] */  isRaw={typeof EmissiveColor2 === "object" && "isRaw" in EmissiveColor2 && EmissiveColor2.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="EmissiveColor3" id={typeof EmissiveColor3 === "object" && "id" in EmissiveColor3 ? EmissiveColor3?.id : undefined} value={typeof EmissiveColor3 === "object" && "value" in EmissiveColor3 ? EmissiveColor3?.value : EmissiveColor3} /* default: [0; 0; 0; 0] */  isRaw={typeof EmissiveColor3 === "object" && "isRaw" in EmissiveColor3 && EmissiveColor3.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="EmissiveMap" id={typeof EmissiveMap === "object" && "id" in EmissiveMap ? EmissiveMap?.id : undefined} value={typeof EmissiveMap === "object" && "value" in EmissiveMap ? EmissiveMap?.value : EmissiveMap} /* default: ID0 */  isRaw={typeof EmissiveMap === "object" && "isRaw" in EmissiveMap && EmissiveMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap" id={typeof NormalMap === "object" && "id" in NormalMap ? NormalMap?.id : undefined} value={typeof NormalMap === "object" && "value" in NormalMap ? NormalMap?.value : NormalMap} /* default: ID0 */  isRaw={typeof NormalMap === "object" && "isRaw" in NormalMap && NormalMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalScale" id={typeof NormalScale === "object" && "id" in NormalScale ? NormalScale?.id : undefined} value={typeof NormalScale === "object" && "value" in NormalScale ? NormalScale?.value : NormalScale} /* default: 0 */  isRaw={typeof NormalScale === "object" && "isRaw" in NormalScale && NormalScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="OcclusionMap" id={typeof OcclusionMap === "object" && "id" in OcclusionMap ? OcclusionMap?.id : undefined} value={typeof OcclusionMap === "object" && "value" in OcclusionMap ? OcclusionMap?.value : OcclusionMap} /* default: ID0 */  isRaw={typeof OcclusionMap === "object" && "isRaw" in OcclusionMap && OcclusionMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Transparent" id={typeof Transparent === "object" && "id" in Transparent ? Transparent?.id : undefined} value={typeof Transparent === "object" && "value" in Transparent ? Transparent?.value : Transparent} /* default: false */  isRaw={typeof Transparent === "object" && "isRaw" in Transparent && Transparent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceZWrite" id={typeof ForceZWrite === "object" && "id" in ForceZWrite ? ForceZWrite?.id : undefined} value={typeof ForceZWrite === "object" && "value" in ForceZWrite ? ForceZWrite?.value : ForceZWrite} /* default: false */  isRaw={typeof ForceZWrite === "object" && "isRaw" in ForceZWrite && ForceZWrite.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  isRaw={typeof OffsetFactor === "object" && "isRaw" in OffsetFactor && OffsetFactor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  isRaw={typeof OffsetUnits === "object" && "isRaw" in OffsetUnits && OffsetUnits.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  isRaw={typeof RenderQueue === "object" && "isRaw" in RenderQueue && RenderQueue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Metallic" id={typeof Metallic === "object" && "id" in Metallic ? Metallic?.id : undefined} value={typeof Metallic === "object" && "value" in Metallic ? Metallic?.value : Metallic} /* default: 0 */  isRaw={typeof Metallic === "object" && "isRaw" in Metallic && Metallic.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Smoothness" id={typeof Smoothness === "object" && "id" in Smoothness ? Smoothness?.id : undefined} value={typeof Smoothness === "object" && "value" in Smoothness ? Smoothness?.value : Smoothness} /* default: 0 */  isRaw={typeof Smoothness === "object" && "isRaw" in Smoothness && Smoothness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="MetallicMap" id={typeof MetallicMap === "object" && "id" in MetallicMap ? MetallicMap?.id : undefined} value={typeof MetallicMap === "object" && "value" in MetallicMap ? MetallicMap?.value : MetallicMap} /* default: ID0 */  isRaw={typeof MetallicMap === "object" && "isRaw" in MetallicMap && MetallicMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_regular-ID" id={typeof _regular === "object" && "id" in _regular ? _regular?.id : undefined} value={typeof _regular === "object" && "value" in _regular ? _regular?.value : _regular} /* default: ID0 */ readOnly isRaw={typeof _regular === "object" && "isRaw" in _regular && _regular.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_transparent-ID" id={typeof _transparent === "object" && "id" in _transparent ? _transparent?.id : undefined} value={typeof _transparent === "object" && "value" in _transparent ? _transparent?.value : _transparent} /* default: ID0 */ readOnly isRaw={typeof _transparent === "object" && "isRaw" in _transparent && _transparent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_zwrite-ID" id={typeof _zwrite === "object" && "id" in _zwrite ? _zwrite?.id : undefined} value={typeof _zwrite === "object" && "value" in _zwrite ? _zwrite?.value : _zwrite} /* default: ID0 */ readOnly isRaw={typeof _zwrite === "object" && "isRaw" in _zwrite && _zwrite.isRaw ? true : undefined} />
        </Component>
      );
    };
    