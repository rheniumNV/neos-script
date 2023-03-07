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
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PerObject" id={typeof PerObject === "object" && "id" in PerObject ? PerObject?.id : undefined} value={typeof PerObject === "object" && "value" in PerObject ? PerObject?.value : PerObject} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Resolution" id={typeof Resolution === "object" && "id" in Resolution ? Resolution?.id : undefined} value={typeof Resolution === "object" && "value" in Resolution ? Resolution?.value : Resolution} /* default: [0; 0] */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="ResolutionMagnitudeTexture" id={typeof ResolutionMagnitudeTexture === "object" && "id" in ResolutionMagnitudeTexture ? ResolutionMagnitudeTexture?.id : undefined} value={typeof ResolutionMagnitudeTexture === "object" && "value" in ResolutionMagnitudeTexture ? ResolutionMagnitudeTexture?.value : ResolutionMagnitudeTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ResolutionTextureScale" id={typeof ResolutionTextureScale === "object" && "id" in ResolutionTextureScale ? ResolutionTextureScale?.id : undefined} value={typeof ResolutionTextureScale === "object" && "value" in ResolutionTextureScale ? ResolutionTextureScale?.value : ResolutionTextureScale} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ResolutionTextureOffset" id={typeof ResolutionTextureOffset === "object" && "id" in ResolutionTextureOffset ? ResolutionTextureOffset?.id : undefined} value={typeof ResolutionTextureOffset === "object" && "value" in ResolutionTextureOffset ? ResolutionTextureOffset?.value : ResolutionTextureOffset} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Sidedness]`} name="Sidedness" id={typeof Sidedness === "object" && "id" in Sidedness ? Sidedness?.id : undefined} value={typeof Sidedness === "object" && "value" in Sidedness ? Sidedness?.value : Sidedness} /* default: Auto */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`} name="ZWrite" id={typeof ZWrite === "object" && "id" in ZWrite ? ZWrite?.id : undefined} value={typeof ZWrite === "object" && "value" in ZWrite ? ZWrite?.value : ZWrite} /* default: Auto */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZTest]`} name="ZTest" id={typeof ZTest === "object" && "id" in ZTest ? ZTest?.id : undefined} value={typeof ZTest === "object" && "value" in ZTest ? ZTest?.value : ZTest} /* default: Less */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_global-ID" id={typeof _global === "object" && "id" in _global ? _global?.id : undefined} value={typeof _global === "object" && "value" in _global ? _global?.value : _global} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_perObject-ID" id={typeof _perObject === "object" && "id" in _perObject ? _perObject?.id : undefined} value={typeof _perObject === "object" && "value" in _perObject ? _perObject?.value : _perObject} /* default: ID0 */ idOnly />
        </Component>
      );
    };
    