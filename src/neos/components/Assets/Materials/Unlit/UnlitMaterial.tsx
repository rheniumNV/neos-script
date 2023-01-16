import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface UnlitMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
TintColor?: member<[number, number, number, number]>;
Texture?: member<any>;
TextureScale?: member<[number, number]>;
TextureOffset?: member<[number, number]>;
MaskTexture?: member<any>;
MaskScale?: member<[number, number]>;
MaskOffset?: member<[number, number]>;
MaskMode?: member<any>;
BlendMode?: member<any>;
AlphaCutoff?: member<number>;
UseVertexColors?: member<boolean>;
Sidedness?: member<any>;
ZWrite?: member<any>;
OffsetTexture?: member<any>;
OffsetMagnitude?: member<[number, number]>;
OffsetTextureScale?: member<[number, number]>;
OffsetTextureOffset?: member<[number, number]>;
PolarUVmapping?: member<boolean>;
PolarPower?: member<number>;
StereoTextureTransform?: member<boolean>;
RightEyeTextureScale?: member<[number, number]>;
RightEyeTextureOffset?: member<[number, number]>;
DecodeAsNormalMap?: member<boolean>;
UseBillboardGeometry?: member<boolean>;
UsePerBillboardScale?: member<boolean>;
UsePerBillboardRotation?: member<boolean>;
UsePerBillboardUV?: member<boolean>;
BillboardSize?: member<[number, number]>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
RenderQueue?: member<number>;
_unlit?: member<any>;
_unlitBillboard?: member<any>;
    }
    
    export function UnlitMaterial(props: UnlitMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
TintColor,
Texture,
TextureScale,
TextureOffset,
MaskTexture,
MaskScale,
MaskOffset,
MaskMode,
BlendMode,
AlphaCutoff,
UseVertexColors,
Sidedness,
ZWrite,
OffsetTexture,
OffsetMagnitude,
OffsetTextureScale,
OffsetTextureOffset,
PolarUVmapping,
PolarPower,
StereoTextureTransform,
RightEyeTextureScale,
RightEyeTextureOffset,
DecodeAsNormalMap,
UseBillboardGeometry,
UsePerBillboardScale,
UsePerBillboardRotation,
UsePerBillboardUV,
BillboardSize,
OffsetFactor,
OffsetUnits,
RenderQueue,
_unlit,
_unlitBillboard, } = props;
    
      return (
        <Component type="FrooxEngine.UnlitMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="TintColor" id={typeof TintColor === "object" && "id" in TintColor ? TintColor?.id : undefined} value={typeof TintColor === "object" && "value" in TintColor ? TintColor?.value : TintColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureScale" id={typeof TextureScale === "object" && "id" in TextureScale ? TextureScale?.id : undefined} value={typeof TextureScale === "object" && "value" in TextureScale ? TextureScale?.value : TextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureOffset" id={typeof TextureOffset === "object" && "id" in TextureOffset ? TextureOffset?.id : undefined} value={typeof TextureOffset === "object" && "value" in TextureOffset ? TextureOffset?.value : TextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="MaskTexture" id={typeof MaskTexture === "object" && "id" in MaskTexture ? MaskTexture?.id : undefined} value={typeof MaskTexture === "object" && "value" in MaskTexture ? MaskTexture?.value : MaskTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MaskScale" id={typeof MaskScale === "object" && "id" in MaskScale ? MaskScale?.id : undefined} value={typeof MaskScale === "object" && "value" in MaskScale ? MaskScale?.value : MaskScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MaskOffset" id={typeof MaskOffset === "object" && "id" in MaskOffset ? MaskOffset?.id : undefined} value={typeof MaskOffset === "object" && "value" in MaskOffset ? MaskOffset?.value : MaskOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.MaskTextureMode]`} name="MaskMode" id={typeof MaskMode === "object" && "id" in MaskMode ? MaskMode?.id : undefined} value={typeof MaskMode === "object" && "value" in MaskMode ? MaskMode?.value : MaskMode} /* default: MultiplyAlpha */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AlphaCutoff" id={typeof AlphaCutoff === "object" && "id" in AlphaCutoff ? AlphaCutoff?.id : undefined} value={typeof AlphaCutoff === "object" && "value" in AlphaCutoff ? AlphaCutoff?.value : AlphaCutoff} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseVertexColors" id={typeof UseVertexColors === "object" && "id" in UseVertexColors ? UseVertexColors?.id : undefined} value={typeof UseVertexColors === "object" && "value" in UseVertexColors ? UseVertexColors?.value : UseVertexColors} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Sidedness]`} name="Sidedness" id={typeof Sidedness === "object" && "id" in Sidedness ? Sidedness?.id : undefined} value={typeof Sidedness === "object" && "value" in Sidedness ? Sidedness?.value : Sidedness} /* default: Auto */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`} name="ZWrite" id={typeof ZWrite === "object" && "id" in ZWrite ? ZWrite?.id : undefined} value={typeof ZWrite === "object" && "value" in ZWrite ? ZWrite?.value : ZWrite} /* default: Auto */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="OffsetTexture" id={typeof OffsetTexture === "object" && "id" in OffsetTexture ? OffsetTexture?.id : undefined} value={typeof OffsetTexture === "object" && "value" in OffsetTexture ? OffsetTexture?.value : OffsetTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="OffsetMagnitude" id={typeof OffsetMagnitude === "object" && "id" in OffsetMagnitude ? OffsetMagnitude?.id : undefined} value={typeof OffsetMagnitude === "object" && "value" in OffsetMagnitude ? OffsetMagnitude?.value : OffsetMagnitude} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="OffsetTextureScale" id={typeof OffsetTextureScale === "object" && "id" in OffsetTextureScale ? OffsetTextureScale?.id : undefined} value={typeof OffsetTextureScale === "object" && "value" in OffsetTextureScale ? OffsetTextureScale?.value : OffsetTextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="OffsetTextureOffset" id={typeof OffsetTextureOffset === "object" && "id" in OffsetTextureOffset ? OffsetTextureOffset?.id : undefined} value={typeof OffsetTextureOffset === "object" && "value" in OffsetTextureOffset ? OffsetTextureOffset?.value : OffsetTextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PolarUVmapping" id={typeof PolarUVmapping === "object" && "id" in PolarUVmapping ? PolarUVmapping?.id : undefined} value={typeof PolarUVmapping === "object" && "value" in PolarUVmapping ? PolarUVmapping?.value : PolarUVmapping} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PolarPower" id={typeof PolarPower === "object" && "id" in PolarPower ? PolarPower?.id : undefined} value={typeof PolarPower === "object" && "value" in PolarPower ? PolarPower?.value : PolarPower} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="StereoTextureTransform" id={typeof StereoTextureTransform === "object" && "id" in StereoTextureTransform ? StereoTextureTransform?.id : undefined} value={typeof StereoTextureTransform === "object" && "value" in StereoTextureTransform ? StereoTextureTransform?.value : StereoTextureTransform} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="RightEyeTextureScale" id={typeof RightEyeTextureScale === "object" && "id" in RightEyeTextureScale ? RightEyeTextureScale?.id : undefined} value={typeof RightEyeTextureScale === "object" && "value" in RightEyeTextureScale ? RightEyeTextureScale?.value : RightEyeTextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="RightEyeTextureOffset" id={typeof RightEyeTextureOffset === "object" && "id" in RightEyeTextureOffset ? RightEyeTextureOffset?.id : undefined} value={typeof RightEyeTextureOffset === "object" && "value" in RightEyeTextureOffset ? RightEyeTextureOffset?.value : RightEyeTextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DecodeAsNormalMap" id={typeof DecodeAsNormalMap === "object" && "id" in DecodeAsNormalMap ? DecodeAsNormalMap?.id : undefined} value={typeof DecodeAsNormalMap === "object" && "value" in DecodeAsNormalMap ? DecodeAsNormalMap?.value : DecodeAsNormalMap} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseBillboardGeometry" id={typeof UseBillboardGeometry === "object" && "id" in UseBillboardGeometry ? UseBillboardGeometry?.id : undefined} value={typeof UseBillboardGeometry === "object" && "value" in UseBillboardGeometry ? UseBillboardGeometry?.value : UseBillboardGeometry} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UsePerBillboardScale" id={typeof UsePerBillboardScale === "object" && "id" in UsePerBillboardScale ? UsePerBillboardScale?.id : undefined} value={typeof UsePerBillboardScale === "object" && "value" in UsePerBillboardScale ? UsePerBillboardScale?.value : UsePerBillboardScale} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UsePerBillboardRotation" id={typeof UsePerBillboardRotation === "object" && "id" in UsePerBillboardRotation ? UsePerBillboardRotation?.id : undefined} value={typeof UsePerBillboardRotation === "object" && "value" in UsePerBillboardRotation ? UsePerBillboardRotation?.value : UsePerBillboardRotation} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UsePerBillboardUV" id={typeof UsePerBillboardUV === "object" && "id" in UsePerBillboardUV ? UsePerBillboardUV?.id : undefined} value={typeof UsePerBillboardUV === "object" && "value" in UsePerBillboardUV ? UsePerBillboardUV?.value : UsePerBillboardUV} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="BillboardSize" id={typeof BillboardSize === "object" && "id" in BillboardSize ? BillboardSize?.id : undefined} value={typeof BillboardSize === "object" && "value" in BillboardSize ? BillboardSize?.value : BillboardSize} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_unlit-ID" id={typeof _unlit === "object" && "id" in _unlit ? _unlit?.id : undefined} value={typeof _unlit === "object" && "value" in _unlit ? _unlit?.value : _unlit} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_unlitBillboard-ID" id={typeof _unlitBillboard === "object" && "id" in _unlitBillboard ? _unlitBillboard?.id : undefined} value={typeof _unlitBillboard === "object" && "value" in _unlitBillboard ? _unlitBillboard?.value : _unlitBillboard} /* default: ID0 */ idOnly />
        </Component>
      );
    };
    