import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface Projection360MaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
Texture?: member<any>;
SecondaryTexture?: member<any>;
Cubemap?: member<any>;
SecondaryCubemap?: member<any>;
CubemapLOD?: member<any>;
TextureLerp?: member<number>;
Projection?: member<any>;
FieldOfView?: member<[number, number]>;
AngleOffset?: member<[number, number]>;
PerspectiveFieldOfView?: member<[number, number]>;
PerspectiveAngleOffset?: member<[number, number]>;
Tint?: member<[number, number, number, number]>;
Exposure?: member<number>;
Gamma?: member<number>;
TintTexture?: member<any>;
TintTextureScale?: member<[number, number]>;
TintTextureOffset?: member<[number, number]>;
TintTextureMode?: member<any>;
Tint0?: member<[number, number, number, number]>;
Tint1?: member<[number, number, number, number]>;
OutsideMode?: member<any>;
OutsideColor?: member<[number, number, number, number]>;
TextureOffset?: member<[number, number]>;
TextureScale?: member<[number, number]>;
StereoTextureTransform?: member<boolean>;
RightEyeTextureOffset?: member<[number, number]>;
RightEyeTextureScale?: member<[number, number]>;
Sidedness?: member<any>;
ZWrite?: member<any>;
ZTest?: member<any>;
BlendMode?: member<any>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
MaxIntensity?: member<any>;
Rect?: member<any>;
RectClip?: member<boolean>;
ColorMask?: member<any>;
OffsetTexture?: member<any>;
OffsetMask?: member<any>;
OffsetTextureOffset?: member<[number, number]>;
OffsetTextureScale?: member<[number, number]>;
OffsetMagnitude?: member<[number, number]>;
StencilComparison?: member<any>;
StencilOperation?: member<any>;
StencilID?: member<any>;
StencilWriteMask?: member<any>;
StencilReadMask?: member<any>;
RenderQueue?: member<number>;
    }
    
    export function Projection360Material(props: Projection360MaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
Texture,
SecondaryTexture,
Cubemap,
SecondaryCubemap,
CubemapLOD,
TextureLerp,
Projection,
FieldOfView,
AngleOffset,
PerspectiveFieldOfView,
PerspectiveAngleOffset,
Tint,
Exposure,
Gamma,
TintTexture,
TintTextureScale,
TintTextureOffset,
TintTextureMode,
Tint0,
Tint1,
OutsideMode,
OutsideColor,
TextureOffset,
TextureScale,
StereoTextureTransform,
RightEyeTextureOffset,
RightEyeTextureScale,
Sidedness,
ZWrite,
ZTest,
BlendMode,
OffsetFactor,
OffsetUnits,
MaxIntensity,
Rect,
RectClip,
ColorMask,
OffsetTexture,
OffsetMask,
OffsetTextureOffset,
OffsetTextureScale,
OffsetMagnitude,
StencilComparison,
StencilOperation,
StencilID,
StencilWriteMask,
StencilReadMask,
RenderQueue, } = props;
    
      return (
        <Component type="FrooxEngine.Projection360Material" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="SecondaryTexture" id={typeof SecondaryTexture === "object" && "id" in SecondaryTexture ? SecondaryTexture?.id : undefined} value={typeof SecondaryTexture === "object" && "value" in SecondaryTexture ? SecondaryTexture?.value : SecondaryTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Cubemap]`} name="Cubemap" id={typeof Cubemap === "object" && "id" in Cubemap ? Cubemap?.id : undefined} value={typeof Cubemap === "object" && "value" in Cubemap ? Cubemap?.value : Cubemap} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Cubemap]`} name="SecondaryCubemap" id={typeof SecondaryCubemap === "object" && "id" in SecondaryCubemap ? SecondaryCubemap?.id : undefined} value={typeof SecondaryCubemap === "object" && "value" in SecondaryCubemap ? SecondaryCubemap?.value : SecondaryCubemap} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="CubemapLOD" id={typeof CubemapLOD === "object" && "id" in CubemapLOD ? CubemapLOD?.id : undefined} value={typeof CubemapLOD === "object" && "value" in CubemapLOD ? CubemapLOD?.value : CubemapLOD} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TextureLerp" id={typeof TextureLerp === "object" && "id" in TextureLerp ? TextureLerp?.id : undefined} value={typeof TextureLerp === "object" && "value" in TextureLerp ? TextureLerp?.value : TextureLerp} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Projection360Material+Mode]`} name="Projection" id={typeof Projection === "object" && "id" in Projection ? Projection?.id : undefined} value={typeof Projection === "object" && "value" in Projection ? Projection?.value : Projection} /* default: View */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="FieldOfView" id={typeof FieldOfView === "object" && "id" in FieldOfView ? FieldOfView?.id : undefined} value={typeof FieldOfView === "object" && "value" in FieldOfView ? FieldOfView?.value : FieldOfView} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="AngleOffset" id={typeof AngleOffset === "object" && "id" in AngleOffset ? AngleOffset?.id : undefined} value={typeof AngleOffset === "object" && "value" in AngleOffset ? AngleOffset?.value : AngleOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="PerspectiveFieldOfView" id={typeof PerspectiveFieldOfView === "object" && "id" in PerspectiveFieldOfView ? PerspectiveFieldOfView?.id : undefined} value={typeof PerspectiveFieldOfView === "object" && "value" in PerspectiveFieldOfView ? PerspectiveFieldOfView?.value : PerspectiveFieldOfView} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="PerspectiveAngleOffset" id={typeof PerspectiveAngleOffset === "object" && "id" in PerspectiveAngleOffset ? PerspectiveAngleOffset?.id : undefined} value={typeof PerspectiveAngleOffset === "object" && "value" in PerspectiveAngleOffset ? PerspectiveAngleOffset?.value : PerspectiveAngleOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Tint" id={typeof Tint === "object" && "id" in Tint ? Tint?.id : undefined} value={typeof Tint === "object" && "value" in Tint ? Tint?.value : Tint} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Exposure" id={typeof Exposure === "object" && "id" in Exposure ? Exposure?.id : undefined} value={typeof Exposure === "object" && "value" in Exposure ? Exposure?.value : Exposure} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Gamma" id={typeof Gamma === "object" && "id" in Gamma ? Gamma?.id : undefined} value={typeof Gamma === "object" && "value" in Gamma ? Gamma?.value : Gamma} /* default: 0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="TintTexture" id={typeof TintTexture === "object" && "id" in TintTexture ? TintTexture?.id : undefined} value={typeof TintTexture === "object" && "value" in TintTexture ? TintTexture?.value : TintTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TintTextureScale" id={typeof TintTextureScale === "object" && "id" in TintTextureScale ? TintTextureScale?.id : undefined} value={typeof TintTextureScale === "object" && "value" in TintTextureScale ? TintTextureScale?.value : TintTextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TintTextureOffset" id={typeof TintTextureOffset === "object" && "id" in TintTextureOffset ? TintTextureOffset?.id : undefined} value={typeof TintTextureOffset === "object" && "value" in TintTextureOffset ? TintTextureOffset?.value : TintTextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Projection360Material+TintMode]`} name="TintTextureMode" id={typeof TintTextureMode === "object" && "id" in TintTextureMode ? TintTextureMode?.id : undefined} value={typeof TintTextureMode === "object" && "value" in TintTextureMode ? TintTextureMode?.value : TintTextureMode} /* default: Direct */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Tint0" id={typeof Tint0 === "object" && "id" in Tint0 ? Tint0?.id : undefined} value={typeof Tint0 === "object" && "value" in Tint0 ? Tint0?.value : Tint0} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Tint1" id={typeof Tint1 === "object" && "id" in Tint1 ? Tint1?.id : undefined} value={typeof Tint1 === "object" && "value" in Tint1 ? Tint1?.value : Tint1} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Projection360Material+Outside]`} name="OutsideMode" id={typeof OutsideMode === "object" && "id" in OutsideMode ? OutsideMode?.id : undefined} value={typeof OutsideMode === "object" && "value" in OutsideMode ? OutsideMode?.value : OutsideMode} /* default: Clip */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="OutsideColor" id={typeof OutsideColor === "object" && "id" in OutsideColor ? OutsideColor?.id : undefined} value={typeof OutsideColor === "object" && "value" in OutsideColor ? OutsideColor?.value : OutsideColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureOffset" id={typeof TextureOffset === "object" && "id" in TextureOffset ? TextureOffset?.id : undefined} value={typeof TextureOffset === "object" && "value" in TextureOffset ? TextureOffset?.value : TextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureScale" id={typeof TextureScale === "object" && "id" in TextureScale ? TextureScale?.id : undefined} value={typeof TextureScale === "object" && "value" in TextureScale ? TextureScale?.value : TextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="StereoTextureTransform" id={typeof StereoTextureTransform === "object" && "id" in StereoTextureTransform ? StereoTextureTransform?.id : undefined} value={typeof StereoTextureTransform === "object" && "value" in StereoTextureTransform ? StereoTextureTransform?.value : StereoTextureTransform} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="RightEyeTextureOffset" id={typeof RightEyeTextureOffset === "object" && "id" in RightEyeTextureOffset ? RightEyeTextureOffset?.id : undefined} value={typeof RightEyeTextureOffset === "object" && "value" in RightEyeTextureOffset ? RightEyeTextureOffset?.value : RightEyeTextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="RightEyeTextureScale" id={typeof RightEyeTextureScale === "object" && "id" in RightEyeTextureScale ? RightEyeTextureScale?.id : undefined} value={typeof RightEyeTextureScale === "object" && "value" in RightEyeTextureScale ? RightEyeTextureScale?.value : RightEyeTextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Sidedness]`} name="Sidedness" id={typeof Sidedness === "object" && "id" in Sidedness ? Sidedness?.id : undefined} value={typeof Sidedness === "object" && "value" in Sidedness ? Sidedness?.value : Sidedness} /* default: Auto */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`} name="ZWrite" id={typeof ZWrite === "object" && "id" in ZWrite ? ZWrite?.id : undefined} value={typeof ZWrite === "object" && "value" in ZWrite ? ZWrite?.value : ZWrite} /* default: Auto */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZTest]`} name="ZTest" id={typeof ZTest === "object" && "id" in ZTest ? ZTest?.id : undefined} value={typeof ZTest === "object" && "value" in ZTest ? ZTest?.value : ZTest} /* default: Less */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="MaxIntensity" id={typeof MaxIntensity === "object" && "id" in MaxIntensity ? MaxIntensity?.id : undefined} value={typeof MaxIntensity === "object" && "value" in MaxIntensity ? MaxIntensity?.value : MaxIntensity} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.Rect]`} name="Rect" id={typeof Rect === "object" && "id" in Rect ? Rect?.id : undefined} value={typeof Rect === "object" && "value" in Rect ? Rect?.value : Rect} /* default: [X=0; Y=0; W=0; H=0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RectClip" id={typeof RectClip === "object" && "id" in RectClip ? RectClip?.id : undefined} value={typeof RectClip === "object" && "value" in RectClip ? RectClip?.value : RectClip} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ColorMask]`} name="ColorMask" id={typeof ColorMask === "object" && "id" in ColorMask ? ColorMask?.id : undefined} value={typeof ColorMask === "object" && "value" in ColorMask ? ColorMask?.value : ColorMask} /* default: None */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="OffsetTexture" id={typeof OffsetTexture === "object" && "id" in OffsetTexture ? OffsetTexture?.id : undefined} value={typeof OffsetTexture === "object" && "value" in OffsetTexture ? OffsetTexture?.value : OffsetTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="OffsetMask" id={typeof OffsetMask === "object" && "id" in OffsetMask ? OffsetMask?.id : undefined} value={typeof OffsetMask === "object" && "value" in OffsetMask ? OffsetMask?.value : OffsetMask} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="OffsetTextureOffset" id={typeof OffsetTextureOffset === "object" && "id" in OffsetTextureOffset ? OffsetTextureOffset?.id : undefined} value={typeof OffsetTextureOffset === "object" && "value" in OffsetTextureOffset ? OffsetTextureOffset?.value : OffsetTextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="OffsetTextureScale" id={typeof OffsetTextureScale === "object" && "id" in OffsetTextureScale ? OffsetTextureScale?.id : undefined} value={typeof OffsetTextureScale === "object" && "value" in OffsetTextureScale ? OffsetTextureScale?.value : OffsetTextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="OffsetMagnitude" id={typeof OffsetMagnitude === "object" && "id" in OffsetMagnitude ? OffsetMagnitude?.id : undefined} value={typeof OffsetMagnitude === "object" && "value" in OffsetMagnitude ? OffsetMagnitude?.value : OffsetMagnitude} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.StencilComparison]`} name="StencilComparison" id={typeof StencilComparison === "object" && "id" in StencilComparison ? StencilComparison?.id : undefined} value={typeof StencilComparison === "object" && "value" in StencilComparison ? StencilComparison?.value : StencilComparison} /* default: Disabled */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.StencilOperation]`} name="StencilOperation" id={typeof StencilOperation === "object" && "id" in StencilOperation ? StencilOperation?.id : undefined} value={typeof StencilOperation === "object" && "value" in StencilOperation ? StencilOperation?.value : StencilOperation} /* default: Keep */  />
<Member type={`FrooxEngine.Sync\`1[System.Byte]`} name="StencilID" id={typeof StencilID === "object" && "id" in StencilID ? StencilID?.id : undefined} value={typeof StencilID === "object" && "value" in StencilID ? StencilID?.value : StencilID} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Byte]`} name="StencilWriteMask" id={typeof StencilWriteMask === "object" && "id" in StencilWriteMask ? StencilWriteMask?.id : undefined} value={typeof StencilWriteMask === "object" && "value" in StencilWriteMask ? StencilWriteMask?.value : StencilWriteMask} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Byte]`} name="StencilReadMask" id={typeof StencilReadMask === "object" && "id" in StencilReadMask ? StencilReadMask?.id : undefined} value={typeof StencilReadMask === "object" && "value" in StencilReadMask ? StencilReadMask?.value : StencilReadMask} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  />
        </Component>
      );
    };
    