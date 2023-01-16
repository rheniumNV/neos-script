import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface PhotoCaptureManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MinDistance?: member<number>;
MaxDistance?: member<number>;
MinFOV?: member<number>;
MaxFOV?: member<number>;
PreviewResolution?: member<[number, number]>;
NormalResolution?: member<[number, number]>;
TimerResolution?: member<[number, number]>;
DebugGesture?: member<boolean>;
_timerActive?: member<boolean>;
_originalParent?: member<any>;
_originalPosition?: member<[number, number, number]>;
_originalRotation?: member<any>;
_originalScale?: member<[number, number, number]>;
_root?: member<any>;
_previewRoot?: member<any>;
_renderTex?: member<any>;
_quad?: member<any>;
_frame?: member<any>;
_camera?: member<any>;
_frameMaterial?: member<any>;
_timerTextRoot?: member<any>;
_timerText?: member<any>;
_shutterClip?: member<any>;
_timerStartClip?: member<any>;
_timerCountdownSlowPlayer?: member<any>;
_timerCountdownFastPlayer?: member<any>;
_timerCountdownSlowOutput?: member<any>;
_timerCountdownFastOutput?: member<any>;
_timerRoot?: member<any>;
    }
    
    export function PhotoCaptureManager(props: PhotoCaptureManagerInput){
      const { id, persistentId, updateOrder, Enabled,
MinDistance,
MaxDistance,
MinFOV,
MaxFOV,
PreviewResolution,
NormalResolution,
TimerResolution,
DebugGesture,
_timerActive,
_originalParent,
_originalPosition,
_originalRotation,
_originalScale,
_root,
_previewRoot,
_renderTex,
_quad,
_frame,
_camera,
_frameMaterial,
_timerTextRoot,
_timerText,
_shutterClip,
_timerStartClip,
_timerCountdownSlowPlayer,
_timerCountdownFastPlayer,
_timerCountdownSlowOutput,
_timerCountdownFastOutput,
_timerRoot, } = props;
    
      return (
        <Component type="FrooxEngine.PhotoCaptureManager" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinDistance" id={typeof MinDistance === "object" && "id" in MinDistance ? MinDistance?.id : undefined} value={typeof MinDistance === "object" && "value" in MinDistance ? MinDistance?.value : MinDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxDistance" id={typeof MaxDistance === "object" && "id" in MaxDistance ? MaxDistance?.id : undefined} value={typeof MaxDistance === "object" && "value" in MaxDistance ? MaxDistance?.value : MaxDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinFOV" id={typeof MinFOV === "object" && "id" in MinFOV ? MinFOV?.id : undefined} value={typeof MinFOV === "object" && "value" in MinFOV ? MinFOV?.value : MinFOV} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxFOV" id={typeof MaxFOV === "object" && "id" in MaxFOV ? MaxFOV?.id : undefined} value={typeof MaxFOV === "object" && "value" in MaxFOV ? MaxFOV?.value : MaxFOV} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.int2]`} name="PreviewResolution" id={typeof PreviewResolution === "object" && "id" in PreviewResolution ? PreviewResolution?.id : undefined} value={typeof PreviewResolution === "object" && "value" in PreviewResolution ? PreviewResolution?.value : PreviewResolution} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.int2]`} name="NormalResolution" id={typeof NormalResolution === "object" && "id" in NormalResolution ? NormalResolution?.id : undefined} value={typeof NormalResolution === "object" && "value" in NormalResolution ? NormalResolution?.value : NormalResolution} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.int2]`} name="TimerResolution" id={typeof TimerResolution === "object" && "id" in TimerResolution ? TimerResolution?.id : undefined} value={typeof TimerResolution === "object" && "value" in TimerResolution ? TimerResolution?.value : TimerResolution} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DebugGesture" id={typeof DebugGesture === "object" && "id" in DebugGesture ? DebugGesture?.id : undefined} value={typeof DebugGesture === "object" && "value" in DebugGesture ? DebugGesture?.value : DebugGesture} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_timerActive" id={typeof _timerActive === "object" && "id" in _timerActive ? _timerActive?.id : undefined} value={typeof _timerActive === "object" && "value" in _timerActive ? _timerActive?.value : _timerActive} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_originalParent" id={typeof _originalParent === "object" && "id" in _originalParent ? _originalParent?.id : undefined} value={typeof _originalParent === "object" && "value" in _originalParent ? _originalParent?.value : _originalParent} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_originalPosition" id={typeof _originalPosition === "object" && "id" in _originalPosition ? _originalPosition?.id : undefined} value={typeof _originalPosition === "object" && "value" in _originalPosition ? _originalPosition?.value : _originalPosition} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="_originalRotation" id={typeof _originalRotation === "object" && "id" in _originalRotation ? _originalRotation?.id : undefined} value={typeof _originalRotation === "object" && "value" in _originalRotation ? _originalRotation?.value : _originalRotation} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_originalScale" id={typeof _originalScale === "object" && "id" in _originalScale ? _originalScale?.id : undefined} value={typeof _originalScale === "object" && "value" in _originalScale ? _originalScale?.value : _originalScale} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_root" id={typeof _root === "object" && "id" in _root ? _root?.id : undefined} value={typeof _root === "object" && "value" in _root ? _root?.value : _root} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_previewRoot" id={typeof _previewRoot === "object" && "id" in _previewRoot ? _previewRoot?.id : undefined} value={typeof _previewRoot === "object" && "value" in _previewRoot ? _previewRoot?.value : _previewRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RenderTextureProvider]`} name="_renderTex" id={typeof _renderTex === "object" && "id" in _renderTex ? _renderTex?.id : undefined} value={typeof _renderTex === "object" && "value" in _renderTex ? _renderTex?.value : _renderTex} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.QuadMesh]`} name="_quad" id={typeof _quad === "object" && "id" in _quad ? _quad?.id : undefined} value={typeof _quad === "object" && "value" in _quad ? _quad?.value : _quad} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.FrameMesh]`} name="_frame" id={typeof _frame === "object" && "id" in _frame ? _frame?.id : undefined} value={typeof _frame === "object" && "value" in _frame ? _frame?.value : _frame} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Camera]`} name="_camera" id={typeof _camera === "object" && "id" in _camera ? _camera?.id : undefined} value={typeof _camera === "object" && "value" in _camera ? _camera?.value : _camera} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UnlitMaterial]`} name="_frameMaterial" id={typeof _frameMaterial === "object" && "id" in _frameMaterial ? _frameMaterial?.id : undefined} value={typeof _frameMaterial === "object" && "value" in _frameMaterial ? _frameMaterial?.value : _frameMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_timerTextRoot" id={typeof _timerTextRoot === "object" && "id" in _timerTextRoot ? _timerTextRoot?.id : undefined} value={typeof _timerTextRoot === "object" && "value" in _timerTextRoot ? _timerTextRoot?.value : _timerTextRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_timerText" id={typeof _timerText === "object" && "id" in _timerText ? _timerText?.id : undefined} value={typeof _timerText === "object" && "value" in _timerText ? _timerText?.value : _timerText} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="_shutterClip" id={typeof _shutterClip === "object" && "id" in _shutterClip ? _shutterClip?.id : undefined} value={typeof _shutterClip === "object" && "value" in _shutterClip ? _shutterClip?.value : _shutterClip} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="_timerStartClip" id={typeof _timerStartClip === "object" && "id" in _timerStartClip ? _timerStartClip?.id : undefined} value={typeof _timerStartClip === "object" && "value" in _timerStartClip ? _timerStartClip?.value : _timerStartClip} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AudioClipPlayer]`} name="_timerCountdownSlowPlayer" id={typeof _timerCountdownSlowPlayer === "object" && "id" in _timerCountdownSlowPlayer ? _timerCountdownSlowPlayer?.id : undefined} value={typeof _timerCountdownSlowPlayer === "object" && "value" in _timerCountdownSlowPlayer ? _timerCountdownSlowPlayer?.value : _timerCountdownSlowPlayer} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AudioClipPlayer]`} name="_timerCountdownFastPlayer" id={typeof _timerCountdownFastPlayer === "object" && "id" in _timerCountdownFastPlayer ? _timerCountdownFastPlayer?.id : undefined} value={typeof _timerCountdownFastPlayer === "object" && "value" in _timerCountdownFastPlayer ? _timerCountdownFastPlayer?.value : _timerCountdownFastPlayer} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AudioOutput]`} name="_timerCountdownSlowOutput" id={typeof _timerCountdownSlowOutput === "object" && "id" in _timerCountdownSlowOutput ? _timerCountdownSlowOutput?.id : undefined} value={typeof _timerCountdownSlowOutput === "object" && "value" in _timerCountdownSlowOutput ? _timerCountdownSlowOutput?.value : _timerCountdownSlowOutput} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AudioOutput]`} name="_timerCountdownFastOutput" id={typeof _timerCountdownFastOutput === "object" && "id" in _timerCountdownFastOutput ? _timerCountdownFastOutput?.id : undefined} value={typeof _timerCountdownFastOutput === "object" && "value" in _timerCountdownFastOutput ? _timerCountdownFastOutput?.value : _timerCountdownFastOutput} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_timerRoot" id={typeof _timerRoot === "object" && "id" in _timerRoot ? _timerRoot?.id : undefined} value={typeof _timerRoot === "object" && "value" in _timerRoot ? _timerRoot?.value : _timerRoot} /* default: ID0 */  />
        </Component>
      );
    };
    