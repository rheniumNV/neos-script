import { member, Member, Component } from "../../../../core";
    
    export interface PixelateMaterialInput {
        
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
PerObject?: member<boolean>;
Resolution?: member<[number, number]>;
ResolutionMagnitudeTexture?: member<any>;
ResolutionTextureScale?: member<[number, number]>;
ResolutionTextureOffset?: member<[number, number]>;
BlendMode?: member<any>;
Sidedness?: member<any>;
ZWrite?: member<any>;
ZTest?: member<any>;
_global?: member<any>;
_perObject?: member<any>;
    }
    
    export function PixelateMaterial(props: PixelateMaterialInput){
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
PerObject,
Resolution,
ResolutionMagnitudeTexture,
ResolutionTextureScale,
ResolutionTextureOffset,
BlendMode,
Sidedness,
ZWrite,
ZTest,
_global,
_perObject, } = props;
    
      return (
        <Component type="FrooxEngine.PixelateMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.Rect]`} name="Rect" id={typeof Rect === "object" && "id" in Rect ? Rect?.id : undefined} value={typeof Rect === "object" && "value" in Rect ? Rect?.value : Rect} /* default: [X=0; Y=0; W=0; H=0] */  isRaw={typeof Rect === "object" && "isRaw" in Rect && Rect.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RectClip" id={typeof RectClip === "object" && "id" in RectClip ? RectClip?.id : undefined} value={typeof RectClip === "object" && "value" in RectClip ? RectClip?.value : RectClip} /* default: false */  isRaw={typeof RectClip === "object" && "isRaw" in RectClip && RectClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ColorMask]`} name="ColorMask" id={typeof ColorMask === "object" && "id" in ColorMask ? ColorMask?.id : undefined} value={typeof ColorMask === "object" && "value" in ColorMask ? ColorMask?.value : ColorMask} /* default: None */  isRaw={typeof ColorMask === "object" && "isRaw" in ColorMask && ColorMask.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.StencilComparison]`} name="StencilComparison" id={typeof StencilComparison === "object" && "id" in StencilComparison ? StencilComparison?.id : undefined} value={typeof StencilComparison === "object" && "value" in StencilComparison ? StencilComparison?.value : StencilComparison} /* default: Disabled */  isRaw={typeof StencilComparison === "object" && "isRaw" in StencilComparison && StencilComparison.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.StencilOperation]`} name="StencilOperation" id={typeof StencilOperation === "object" && "id" in StencilOperation ? StencilOperation?.id : undefined} value={typeof StencilOperation === "object" && "value" in StencilOperation ? StencilOperation?.value : StencilOperation} /* default: Keep */  isRaw={typeof StencilOperation === "object" && "isRaw" in StencilOperation && StencilOperation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Byte]`} name="StencilID" id={typeof StencilID === "object" && "id" in StencilID ? StencilID?.id : undefined} value={typeof StencilID === "object" && "value" in StencilID ? StencilID?.value : StencilID} /* default: 0 */  isRaw={typeof StencilID === "object" && "isRaw" in StencilID && StencilID.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Byte]`} name="StencilWriteMask" id={typeof StencilWriteMask === "object" && "id" in StencilWriteMask ? StencilWriteMask?.id : undefined} value={typeof StencilWriteMask === "object" && "value" in StencilWriteMask ? StencilWriteMask?.value : StencilWriteMask} /* default: 0 */  isRaw={typeof StencilWriteMask === "object" && "isRaw" in StencilWriteMask && StencilWriteMask.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Byte]`} name="StencilReadMask" id={typeof StencilReadMask === "object" && "id" in StencilReadMask ? StencilReadMask?.id : undefined} value={typeof StencilReadMask === "object" && "value" in StencilReadMask ? StencilReadMask?.value : StencilReadMask} /* default: 0 */  isRaw={typeof StencilReadMask === "object" && "isRaw" in StencilReadMask && StencilReadMask.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  isRaw={typeof RenderQueue === "object" && "isRaw" in RenderQueue && RenderQueue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PerObject" id={typeof PerObject === "object" && "id" in PerObject ? PerObject?.id : undefined} value={typeof PerObject === "object" && "value" in PerObject ? PerObject?.value : PerObject} /* default: false */  isRaw={typeof PerObject === "object" && "isRaw" in PerObject && PerObject.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Resolution" id={typeof Resolution === "object" && "id" in Resolution ? Resolution?.id : undefined} value={typeof Resolution === "object" && "value" in Resolution ? Resolution?.value : Resolution} /* default: [0; 0] */  isRaw={typeof Resolution === "object" && "isRaw" in Resolution && Resolution.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="ResolutionMagnitudeTexture" id={typeof ResolutionMagnitudeTexture === "object" && "id" in ResolutionMagnitudeTexture ? ResolutionMagnitudeTexture?.id : undefined} value={typeof ResolutionMagnitudeTexture === "object" && "value" in ResolutionMagnitudeTexture ? ResolutionMagnitudeTexture?.value : ResolutionMagnitudeTexture} /* default: ID0 */  isRaw={typeof ResolutionMagnitudeTexture === "object" && "isRaw" in ResolutionMagnitudeTexture && ResolutionMagnitudeTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ResolutionTextureScale" id={typeof ResolutionTextureScale === "object" && "id" in ResolutionTextureScale ? ResolutionTextureScale?.id : undefined} value={typeof ResolutionTextureScale === "object" && "value" in ResolutionTextureScale ? ResolutionTextureScale?.value : ResolutionTextureScale} /* default: [0; 0] */  isRaw={typeof ResolutionTextureScale === "object" && "isRaw" in ResolutionTextureScale && ResolutionTextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ResolutionTextureOffset" id={typeof ResolutionTextureOffset === "object" && "id" in ResolutionTextureOffset ? ResolutionTextureOffset?.id : undefined} value={typeof ResolutionTextureOffset === "object" && "value" in ResolutionTextureOffset ? ResolutionTextureOffset?.value : ResolutionTextureOffset} /* default: [0; 0] */  isRaw={typeof ResolutionTextureOffset === "object" && "isRaw" in ResolutionTextureOffset && ResolutionTextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  isRaw={typeof BlendMode === "object" && "isRaw" in BlendMode && BlendMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Sidedness]`} name="Sidedness" id={typeof Sidedness === "object" && "id" in Sidedness ? Sidedness?.id : undefined} value={typeof Sidedness === "object" && "value" in Sidedness ? Sidedness?.value : Sidedness} /* default: Auto */  isRaw={typeof Sidedness === "object" && "isRaw" in Sidedness && Sidedness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`} name="ZWrite" id={typeof ZWrite === "object" && "id" in ZWrite ? ZWrite?.id : undefined} value={typeof ZWrite === "object" && "value" in ZWrite ? ZWrite?.value : ZWrite} /* default: Auto */  isRaw={typeof ZWrite === "object" && "isRaw" in ZWrite && ZWrite.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZTest]`} name="ZTest" id={typeof ZTest === "object" && "id" in ZTest ? ZTest?.id : undefined} value={typeof ZTest === "object" && "value" in ZTest ? ZTest?.value : ZTest} /* default: Less */  isRaw={typeof ZTest === "object" && "isRaw" in ZTest && ZTest.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_global-ID" id={typeof _global === "object" && "id" in _global ? _global?.id : undefined} value={typeof _global === "object" && "value" in _global ? _global?.value : _global} /* default: ID0 */ readOnly isRaw={typeof _global === "object" && "isRaw" in _global && _global.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_perObject-ID" id={typeof _perObject === "object" && "id" in _perObject ? _perObject?.id : undefined} value={typeof _perObject === "object" && "value" in _perObject ? _perObject?.value : _perObject} /* default: ID0 */ readOnly isRaw={typeof _perObject === "object" && "isRaw" in _perObject && _perObject.isRaw ? true : undefined} />
        </Component>
      );
    };
    