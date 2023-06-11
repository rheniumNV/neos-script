import { member, Member, Component } from "../../../../core";
    
    export interface BlurMaterialInput {
        
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
Iterations?: member<number>;
Spread?: member<[number, number]>;
SpreadMagnitudeTexture?: member<any>;
SpreadTextureScale?: member<[number, number]>;
SpreadTextureOffset?: member<[number, number]>;
Refract?: member<boolean>;
RefractionStrength?: member<number>;
NormalMap?: member<any>;
NormalTextureScale?: member<[number, number]>;
NormalTextureOffset?: member<[number, number]>;
PerObject?: member<boolean>;
BlendMode?: member<any>;
Sidedness?: member<any>;
ZWrite?: member<any>;
ZTest?: member<any>;
_global?: member<any>;
_perObject?: member<any>;
    }
    
    export function BlurMaterial(props: BlurMaterialInput){
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
Iterations,
Spread,
SpreadMagnitudeTexture,
SpreadTextureScale,
SpreadTextureOffset,
Refract,
RefractionStrength,
NormalMap,
NormalTextureScale,
NormalTextureOffset,
PerObject,
BlendMode,
Sidedness,
ZWrite,
ZTest,
_global,
_perObject, } = props;
    
      return (
        <Component type="FrooxEngine.BlurMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
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
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Iterations" id={typeof Iterations === "object" && "id" in Iterations ? Iterations?.id : undefined} value={typeof Iterations === "object" && "value" in Iterations ? Iterations?.value : Iterations} /* default: 0 */  isRaw={typeof Iterations === "object" && "isRaw" in Iterations && Iterations.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Spread" id={typeof Spread === "object" && "id" in Spread ? Spread?.id : undefined} value={typeof Spread === "object" && "value" in Spread ? Spread?.value : Spread} /* default: [0; 0] */  isRaw={typeof Spread === "object" && "isRaw" in Spread && Spread.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="SpreadMagnitudeTexture" id={typeof SpreadMagnitudeTexture === "object" && "id" in SpreadMagnitudeTexture ? SpreadMagnitudeTexture?.id : undefined} value={typeof SpreadMagnitudeTexture === "object" && "value" in SpreadMagnitudeTexture ? SpreadMagnitudeTexture?.value : SpreadMagnitudeTexture} /* default: ID0 */  isRaw={typeof SpreadMagnitudeTexture === "object" && "isRaw" in SpreadMagnitudeTexture && SpreadMagnitudeTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="SpreadTextureScale" id={typeof SpreadTextureScale === "object" && "id" in SpreadTextureScale ? SpreadTextureScale?.id : undefined} value={typeof SpreadTextureScale === "object" && "value" in SpreadTextureScale ? SpreadTextureScale?.value : SpreadTextureScale} /* default: [0; 0] */  isRaw={typeof SpreadTextureScale === "object" && "isRaw" in SpreadTextureScale && SpreadTextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="SpreadTextureOffset" id={typeof SpreadTextureOffset === "object" && "id" in SpreadTextureOffset ? SpreadTextureOffset?.id : undefined} value={typeof SpreadTextureOffset === "object" && "value" in SpreadTextureOffset ? SpreadTextureOffset?.value : SpreadTextureOffset} /* default: [0; 0] */  isRaw={typeof SpreadTextureOffset === "object" && "isRaw" in SpreadTextureOffset && SpreadTextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Refract" id={typeof Refract === "object" && "id" in Refract ? Refract?.id : undefined} value={typeof Refract === "object" && "value" in Refract ? Refract?.value : Refract} /* default: false */  isRaw={typeof Refract === "object" && "isRaw" in Refract && Refract.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RefractionStrength" id={typeof RefractionStrength === "object" && "id" in RefractionStrength ? RefractionStrength?.id : undefined} value={typeof RefractionStrength === "object" && "value" in RefractionStrength ? RefractionStrength?.value : RefractionStrength} /* default: 0 */  isRaw={typeof RefractionStrength === "object" && "isRaw" in RefractionStrength && RefractionStrength.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.ITexture2D]`} name="NormalMap" id={typeof NormalMap === "object" && "id" in NormalMap ? NormalMap?.id : undefined} value={typeof NormalMap === "object" && "value" in NormalMap ? NormalMap?.value : NormalMap} /* default: ID0 */  isRaw={typeof NormalMap === "object" && "isRaw" in NormalMap && NormalMap.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="NormalTextureScale" id={typeof NormalTextureScale === "object" && "id" in NormalTextureScale ? NormalTextureScale?.id : undefined} value={typeof NormalTextureScale === "object" && "value" in NormalTextureScale ? NormalTextureScale?.value : NormalTextureScale} /* default: [0; 0] */  isRaw={typeof NormalTextureScale === "object" && "isRaw" in NormalTextureScale && NormalTextureScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="NormalTextureOffset" id={typeof NormalTextureOffset === "object" && "id" in NormalTextureOffset ? NormalTextureOffset?.id : undefined} value={typeof NormalTextureOffset === "object" && "value" in NormalTextureOffset ? NormalTextureOffset?.value : NormalTextureOffset} /* default: [0; 0] */  isRaw={typeof NormalTextureOffset === "object" && "isRaw" in NormalTextureOffset && NormalTextureOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PerObject" id={typeof PerObject === "object" && "id" in PerObject ? PerObject?.id : undefined} value={typeof PerObject === "object" && "value" in PerObject ? PerObject?.value : PerObject} /* default: false */  isRaw={typeof PerObject === "object" && "isRaw" in PerObject && PerObject.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  isRaw={typeof BlendMode === "object" && "isRaw" in BlendMode && BlendMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Sidedness]`} name="Sidedness" id={typeof Sidedness === "object" && "id" in Sidedness ? Sidedness?.id : undefined} value={typeof Sidedness === "object" && "value" in Sidedness ? Sidedness?.value : Sidedness} /* default: Auto */  isRaw={typeof Sidedness === "object" && "isRaw" in Sidedness && Sidedness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`} name="ZWrite" id={typeof ZWrite === "object" && "id" in ZWrite ? ZWrite?.id : undefined} value={typeof ZWrite === "object" && "value" in ZWrite ? ZWrite?.value : ZWrite} /* default: Auto */  isRaw={typeof ZWrite === "object" && "isRaw" in ZWrite && ZWrite.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZTest]`} name="ZTest" id={typeof ZTest === "object" && "id" in ZTest ? ZTest?.id : undefined} value={typeof ZTest === "object" && "value" in ZTest ? ZTest?.value : ZTest} /* default: Less */  isRaw={typeof ZTest === "object" && "isRaw" in ZTest && ZTest.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_global-ID" id={typeof _global === "object" && "id" in _global ? _global?.id : undefined} value={typeof _global === "object" && "value" in _global ? _global?.value : _global} /* default: ID0 */ readOnly isRaw={typeof _global === "object" && "isRaw" in _global && _global.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_perObject-ID" id={typeof _perObject === "object" && "id" in _perObject ? _perObject?.id : undefined} value={typeof _perObject === "object" && "value" in _perObject ? _perObject?.value : _perObject} /* default: ID0 */ readOnly isRaw={typeof _perObject === "object" && "isRaw" in _perObject && _perObject.isRaw ? true : undefined} />
        </Component>
      );
    };
    