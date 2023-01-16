import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface UI_UnlitMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
Rect?: member<any>;
RectClip?: member<boolean>;
ColorMask?: member<any>;
StencilComparison?: member<any>;
StencilOperation?: member<any>;
StencilID?: member<any>;
StencilWriteMask?: member<any>;
StencilReadMask?: member<any>;
RenderQueue?: member<number>;
_shader?: member<any>;
Texture?: member<any>;
TextureScale?: member<[number, number]>;
TextureOffset?: member<[number, number]>;
Tint?: member<[number, number, number, number]>;
Overlay?: member<boolean>;
OverlayTint?: member<[number, number, number, number]>;
AlphaCutoff?: member<number>;
AlphaClip?: member<boolean>;
TextureMode?: member<any>;
MaskTexture?: member<any>;
MaskScale?: member<[number, number]>;
MaskOffset?: member<[number, number]>;
MaskMode?: member<any>;
BlendMode?: member<any>;
Sidedness?: member<any>;
ZWrite?: member<any>;
ZTest?: member<any>;
OffsetFactor?: member<number>;
OffsetUnits?: member<number>;
    }
    
    export function UI_UnlitMaterial(props: UI_UnlitMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
Rect,
RectClip,
ColorMask,
StencilComparison,
StencilOperation,
StencilID,
StencilWriteMask,
StencilReadMask,
RenderQueue,
_shader,
Texture,
TextureScale,
TextureOffset,
Tint,
Overlay,
OverlayTint,
AlphaCutoff,
AlphaClip,
TextureMode,
MaskTexture,
MaskScale,
MaskOffset,
MaskMode,
BlendMode,
Sidedness,
ZWrite,
ZTest,
OffsetFactor,
OffsetUnits, } = props;
    
      return (
        <Component type="FrooxEngine.UI_UnlitMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder} version={2}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.Rect]`} name="Rect" id={typeof Rect === "object" && "id" in Rect ? Rect?.id : undefined} value={typeof Rect === "object" && "value" in Rect ? Rect?.value : Rect} /* default: [X=0; Y=0; W=0; H=0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RectClip" id={typeof RectClip === "object" && "id" in RectClip ? RectClip?.id : undefined} value={typeof RectClip === "object" && "value" in RectClip ? RectClip?.value : RectClip} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ColorMask]`} name="ColorMask" id={typeof ColorMask === "object" && "id" in ColorMask ? ColorMask?.id : undefined} value={typeof ColorMask === "object" && "value" in ColorMask ? ColorMask?.value : ColorMask} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.StencilComparison]`} name="StencilComparison" id={typeof StencilComparison === "object" && "id" in StencilComparison ? StencilComparison?.id : undefined} value={typeof StencilComparison === "object" && "value" in StencilComparison ? StencilComparison?.value : StencilComparison} /* default: Disabled */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.StencilOperation]`} name="StencilOperation" id={typeof StencilOperation === "object" && "id" in StencilOperation ? StencilOperation?.id : undefined} value={typeof StencilOperation === "object" && "value" in StencilOperation ? StencilOperation?.value : StencilOperation} /* default: Keep */  />
<Member type={`FrooxEngine.Sync\`1[System.Byte]`} name="StencilID" id={typeof StencilID === "object" && "id" in StencilID ? StencilID?.id : undefined} value={typeof StencilID === "object" && "value" in StencilID ? StencilID?.value : StencilID} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Byte]`} name="StencilWriteMask" id={typeof StencilWriteMask === "object" && "id" in StencilWriteMask ? StencilWriteMask?.id : undefined} value={typeof StencilWriteMask === "object" && "value" in StencilWriteMask ? StencilWriteMask?.value : StencilWriteMask} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Byte]`} name="StencilReadMask" id={typeof StencilReadMask === "object" && "id" in StencilReadMask ? StencilReadMask?.id : undefined} value={typeof StencilReadMask === "object" && "value" in StencilReadMask ? StencilReadMask?.value : StencilReadMask} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="Texture" id={typeof Texture === "object" && "id" in Texture ? Texture?.id : undefined} value={typeof Texture === "object" && "value" in Texture ? Texture?.value : Texture} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureScale" id={typeof TextureScale === "object" && "id" in TextureScale ? TextureScale?.id : undefined} value={typeof TextureScale === "object" && "value" in TextureScale ? TextureScale?.value : TextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="TextureOffset" id={typeof TextureOffset === "object" && "id" in TextureOffset ? TextureOffset?.id : undefined} value={typeof TextureOffset === "object" && "value" in TextureOffset ? TextureOffset?.value : TextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Tint" id={typeof Tint === "object" && "id" in Tint ? Tint?.id : undefined} value={typeof Tint === "object" && "value" in Tint ? Tint?.value : Tint} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Overlay" id={typeof Overlay === "object" && "id" in Overlay ? Overlay?.id : undefined} value={typeof Overlay === "object" && "value" in Overlay ? Overlay?.value : Overlay} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="OverlayTint" id={typeof OverlayTint === "object" && "id" in OverlayTint ? OverlayTint?.id : undefined} value={typeof OverlayTint === "object" && "value" in OverlayTint ? OverlayTint?.value : OverlayTint} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AlphaCutoff" id={typeof AlphaCutoff === "object" && "id" in AlphaCutoff ? AlphaCutoff?.id : undefined} value={typeof AlphaCutoff === "object" && "value" in AlphaCutoff ? AlphaCutoff?.value : AlphaCutoff} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AlphaClip" id={typeof AlphaClip === "object" && "id" in AlphaClip ? AlphaClip?.id : undefined} value={typeof AlphaClip === "object" && "value" in AlphaClip ? AlphaClip?.value : AlphaClip} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UnlitTextureMode]`} name="TextureMode" id={typeof TextureMode === "object" && "id" in TextureMode ? TextureMode?.id : undefined} value={typeof TextureMode === "object" && "value" in TextureMode ? TextureMode?.value : TextureMode} /* default: DirectColor */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="MaskTexture" id={typeof MaskTexture === "object" && "id" in MaskTexture ? MaskTexture?.id : undefined} value={typeof MaskTexture === "object" && "value" in MaskTexture ? MaskTexture?.value : MaskTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MaskScale" id={typeof MaskScale === "object" && "id" in MaskScale ? MaskScale?.id : undefined} value={typeof MaskScale === "object" && "value" in MaskScale ? MaskScale?.value : MaskScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="MaskOffset" id={typeof MaskOffset === "object" && "id" in MaskOffset ? MaskOffset?.id : undefined} value={typeof MaskOffset === "object" && "value" in MaskOffset ? MaskOffset?.value : MaskOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.MaskTextureMode]`} name="MaskMode" id={typeof MaskMode === "object" && "id" in MaskMode ? MaskMode?.id : undefined} value={typeof MaskMode === "object" && "value" in MaskMode ? MaskMode?.value : MaskMode} /* default: MultiplyAlpha */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Sidedness]`} name="Sidedness" id={typeof Sidedness === "object" && "id" in Sidedness ? Sidedness?.id : undefined} value={typeof Sidedness === "object" && "value" in Sidedness ? Sidedness?.value : Sidedness} /* default: Auto */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`} name="ZWrite" id={typeof ZWrite === "object" && "id" in ZWrite ? ZWrite?.id : undefined} value={typeof ZWrite === "object" && "value" in ZWrite ? ZWrite?.value : ZWrite} /* default: Auto */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZTest]`} name="ZTest" id={typeof ZTest === "object" && "id" in ZTest ? ZTest?.id : undefined} value={typeof ZTest === "object" && "value" in ZTest ? ZTest?.value : ZTest} /* default: Less */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetFactor" id={typeof OffsetFactor === "object" && "id" in OffsetFactor ? OffsetFactor?.id : undefined} value={typeof OffsetFactor === "object" && "value" in OffsetFactor ? OffsetFactor?.value : OffsetFactor} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="OffsetUnits" id={typeof OffsetUnits === "object" && "id" in OffsetUnits ? OffsetUnits?.id : undefined} value={typeof OffsetUnits === "object" && "value" in OffsetUnits ? OffsetUnits?.value : OffsetUnits} /* default: 0 */  />
        </Component>
      );
    };
    