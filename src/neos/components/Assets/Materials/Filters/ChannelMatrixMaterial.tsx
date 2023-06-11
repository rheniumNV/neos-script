import { member, Member, Component } from "../../../../core";
    
    export interface ChannelMatrixMaterialInput {
        
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
RedFromRed?: member<number>;
RedFromGreen?: member<number>;
RedFromBlue?: member<number>;
RedOffset?: member<number>;
GreenFromRed?: member<number>;
GreenFromGreen?: member<number>;
GreenFromBlue?: member<number>;
GreenOffset?: member<number>;
BlueFromRed?: member<number>;
BlueFromGreen?: member<number>;
BlueFromBlue?: member<number>;
BlueOffset?: member<number>;
ClampRedMin?: member<number>;
ClampGreenMin?: member<number>;
ClampBlueMin?: member<number>;
ClampRedMax?: member<number>;
ClampGreenMax?: member<number>;
ClampBlueMax?: member<number>;
BlendMode?: member<any>;
Sidedness?: member<any>;
ZWrite?: member<any>;
ZTest?: member<any>;
    }
    
    export function ChannelMatrixMaterial(props: ChannelMatrixMaterialInput){
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
RedFromRed,
RedFromGreen,
RedFromBlue,
RedOffset,
GreenFromRed,
GreenFromGreen,
GreenFromBlue,
GreenOffset,
BlueFromRed,
BlueFromGreen,
BlueFromBlue,
BlueOffset,
ClampRedMin,
ClampGreenMin,
ClampBlueMin,
ClampRedMax,
ClampGreenMax,
ClampBlueMax,
BlendMode,
Sidedness,
ZWrite,
ZTest, } = props;
    
      return (
        <Component type="FrooxEngine.ChannelMatrixMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
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
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ readOnly isRaw={typeof _shader === "object" && "isRaw" in _shader && _shader.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RedFromRed" id={typeof RedFromRed === "object" && "id" in RedFromRed ? RedFromRed?.id : undefined} value={typeof RedFromRed === "object" && "value" in RedFromRed ? RedFromRed?.value : RedFromRed} /* default: 0 */  isRaw={typeof RedFromRed === "object" && "isRaw" in RedFromRed && RedFromRed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RedFromGreen" id={typeof RedFromGreen === "object" && "id" in RedFromGreen ? RedFromGreen?.id : undefined} value={typeof RedFromGreen === "object" && "value" in RedFromGreen ? RedFromGreen?.value : RedFromGreen} /* default: 0 */  isRaw={typeof RedFromGreen === "object" && "isRaw" in RedFromGreen && RedFromGreen.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RedFromBlue" id={typeof RedFromBlue === "object" && "id" in RedFromBlue ? RedFromBlue?.id : undefined} value={typeof RedFromBlue === "object" && "value" in RedFromBlue ? RedFromBlue?.value : RedFromBlue} /* default: 0 */  isRaw={typeof RedFromBlue === "object" && "isRaw" in RedFromBlue && RedFromBlue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RedOffset" id={typeof RedOffset === "object" && "id" in RedOffset ? RedOffset?.id : undefined} value={typeof RedOffset === "object" && "value" in RedOffset ? RedOffset?.value : RedOffset} /* default: 0 */  isRaw={typeof RedOffset === "object" && "isRaw" in RedOffset && RedOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GreenFromRed" id={typeof GreenFromRed === "object" && "id" in GreenFromRed ? GreenFromRed?.id : undefined} value={typeof GreenFromRed === "object" && "value" in GreenFromRed ? GreenFromRed?.value : GreenFromRed} /* default: 0 */  isRaw={typeof GreenFromRed === "object" && "isRaw" in GreenFromRed && GreenFromRed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GreenFromGreen" id={typeof GreenFromGreen === "object" && "id" in GreenFromGreen ? GreenFromGreen?.id : undefined} value={typeof GreenFromGreen === "object" && "value" in GreenFromGreen ? GreenFromGreen?.value : GreenFromGreen} /* default: 0 */  isRaw={typeof GreenFromGreen === "object" && "isRaw" in GreenFromGreen && GreenFromGreen.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GreenFromBlue" id={typeof GreenFromBlue === "object" && "id" in GreenFromBlue ? GreenFromBlue?.id : undefined} value={typeof GreenFromBlue === "object" && "value" in GreenFromBlue ? GreenFromBlue?.value : GreenFromBlue} /* default: 0 */  isRaw={typeof GreenFromBlue === "object" && "isRaw" in GreenFromBlue && GreenFromBlue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GreenOffset" id={typeof GreenOffset === "object" && "id" in GreenOffset ? GreenOffset?.id : undefined} value={typeof GreenOffset === "object" && "value" in GreenOffset ? GreenOffset?.value : GreenOffset} /* default: 0 */  isRaw={typeof GreenOffset === "object" && "isRaw" in GreenOffset && GreenOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BlueFromRed" id={typeof BlueFromRed === "object" && "id" in BlueFromRed ? BlueFromRed?.id : undefined} value={typeof BlueFromRed === "object" && "value" in BlueFromRed ? BlueFromRed?.value : BlueFromRed} /* default: 0 */  isRaw={typeof BlueFromRed === "object" && "isRaw" in BlueFromRed && BlueFromRed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BlueFromGreen" id={typeof BlueFromGreen === "object" && "id" in BlueFromGreen ? BlueFromGreen?.id : undefined} value={typeof BlueFromGreen === "object" && "value" in BlueFromGreen ? BlueFromGreen?.value : BlueFromGreen} /* default: 0 */  isRaw={typeof BlueFromGreen === "object" && "isRaw" in BlueFromGreen && BlueFromGreen.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BlueFromBlue" id={typeof BlueFromBlue === "object" && "id" in BlueFromBlue ? BlueFromBlue?.id : undefined} value={typeof BlueFromBlue === "object" && "value" in BlueFromBlue ? BlueFromBlue?.value : BlueFromBlue} /* default: 0 */  isRaw={typeof BlueFromBlue === "object" && "isRaw" in BlueFromBlue && BlueFromBlue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BlueOffset" id={typeof BlueOffset === "object" && "id" in BlueOffset ? BlueOffset?.id : undefined} value={typeof BlueOffset === "object" && "value" in BlueOffset ? BlueOffset?.value : BlueOffset} /* default: 0 */  isRaw={typeof BlueOffset === "object" && "isRaw" in BlueOffset && BlueOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ClampRedMin" id={typeof ClampRedMin === "object" && "id" in ClampRedMin ? ClampRedMin?.id : undefined} value={typeof ClampRedMin === "object" && "value" in ClampRedMin ? ClampRedMin?.value : ClampRedMin} /* default: 0 */  isRaw={typeof ClampRedMin === "object" && "isRaw" in ClampRedMin && ClampRedMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ClampGreenMin" id={typeof ClampGreenMin === "object" && "id" in ClampGreenMin ? ClampGreenMin?.id : undefined} value={typeof ClampGreenMin === "object" && "value" in ClampGreenMin ? ClampGreenMin?.value : ClampGreenMin} /* default: 0 */  isRaw={typeof ClampGreenMin === "object" && "isRaw" in ClampGreenMin && ClampGreenMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ClampBlueMin" id={typeof ClampBlueMin === "object" && "id" in ClampBlueMin ? ClampBlueMin?.id : undefined} value={typeof ClampBlueMin === "object" && "value" in ClampBlueMin ? ClampBlueMin?.value : ClampBlueMin} /* default: 0 */  isRaw={typeof ClampBlueMin === "object" && "isRaw" in ClampBlueMin && ClampBlueMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ClampRedMax" id={typeof ClampRedMax === "object" && "id" in ClampRedMax ? ClampRedMax?.id : undefined} value={typeof ClampRedMax === "object" && "value" in ClampRedMax ? ClampRedMax?.value : ClampRedMax} /* default: 0 */  isRaw={typeof ClampRedMax === "object" && "isRaw" in ClampRedMax && ClampRedMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ClampGreenMax" id={typeof ClampGreenMax === "object" && "id" in ClampGreenMax ? ClampGreenMax?.id : undefined} value={typeof ClampGreenMax === "object" && "value" in ClampGreenMax ? ClampGreenMax?.value : ClampGreenMax} /* default: 0 */  isRaw={typeof ClampGreenMax === "object" && "isRaw" in ClampGreenMax && ClampGreenMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ClampBlueMax" id={typeof ClampBlueMax === "object" && "id" in ClampBlueMax ? ClampBlueMax?.id : undefined} value={typeof ClampBlueMax === "object" && "value" in ClampBlueMax ? ClampBlueMax?.value : ClampBlueMax} /* default: 0 */  isRaw={typeof ClampBlueMax === "object" && "isRaw" in ClampBlueMax && ClampBlueMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  isRaw={typeof BlendMode === "object" && "isRaw" in BlendMode && BlendMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Sidedness]`} name="Sidedness" id={typeof Sidedness === "object" && "id" in Sidedness ? Sidedness?.id : undefined} value={typeof Sidedness === "object" && "value" in Sidedness ? Sidedness?.value : Sidedness} /* default: Auto */  isRaw={typeof Sidedness === "object" && "isRaw" in Sidedness && Sidedness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZWrite]`} name="ZWrite" id={typeof ZWrite === "object" && "id" in ZWrite ? ZWrite?.id : undefined} value={typeof ZWrite === "object" && "value" in ZWrite ? ZWrite?.value : ZWrite} /* default: Auto */  isRaw={typeof ZWrite === "object" && "isRaw" in ZWrite && ZWrite.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ZTest]`} name="ZTest" id={typeof ZTest === "object" && "id" in ZTest ? ZTest?.id : undefined} value={typeof ZTest === "object" && "value" in ZTest ? ZTest?.value : ZTest} /* default: Less */  isRaw={typeof ZTest === "object" && "isRaw" in ZTest && ZTest.isRaw ? true : undefined} />
        </Component>
      );
    };
    