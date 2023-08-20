import { member, Member, Component } from "../../../../core";
    
    export interface VolumeUnlitMaterialInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
_shader?: member<any>;
Mode?: member<any>;
BlendMode?: member<any>;
RenderQueue?: member<number>;
Volume?: member<any>;
StepSize?: member<number>;
Gain?: member<number>;
Exp?: member<number>;
AccumulationCutoff?: member<number>;
HitThreshold?: member<number>;
InputRange?: member<number>;
InputOffset?: member<number>;
UseAlphaChannel?: member<boolean>;
Slices?: member<any>;
Highlights?: member<any>;
    }
    
    export function VolumeUnlitMaterial(props: VolumeUnlitMaterialInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
_shader,
Mode,
BlendMode,
RenderQueue,
Volume,
StepSize,
Gain,
Exp,
AccumulationCutoff,
HitThreshold,
InputRange,
InputOffset,
UseAlphaChannel,
Slices,
Highlights, } = props;
    
      return (
        <Component type="FrooxEngine.VolumeUnlitMaterial" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Shader]`} name="_shader-ID" id={typeof _shader === "object" && "id" in _shader ? _shader?.id : undefined} value={typeof _shader === "object" && "value" in _shader ? _shader?.value : _shader} /* default: ID0 */ readOnly isRaw={typeof _shader === "object" && "isRaw" in _shader && _shader.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VolumeUnlitMaterial+DisplayMode]`} name="Mode" id={typeof Mode === "object" && "id" in Mode ? Mode?.id : undefined} value={typeof Mode === "object" && "value" in Mode ? Mode?.value : Mode} /* default: Additive */  isRaw={typeof Mode === "object" && "isRaw" in Mode && Mode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BlendMode]`} name="BlendMode" id={typeof BlendMode === "object" && "id" in BlendMode ? BlendMode?.id : undefined} value={typeof BlendMode === "object" && "value" in BlendMode ? BlendMode?.value : BlendMode} /* default: Opaque */  isRaw={typeof BlendMode === "object" && "isRaw" in BlendMode && BlendMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RenderQueue" id={typeof RenderQueue === "object" && "id" in RenderQueue ? RenderQueue?.id : undefined} value={typeof RenderQueue === "object" && "value" in RenderQueue ? RenderQueue?.value : RenderQueue} /* default: 0 */  isRaw={typeof RenderQueue === "object" && "isRaw" in RenderQueue && RenderQueue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Texture3D]`} name="Volume" id={typeof Volume === "object" && "id" in Volume ? Volume?.id : undefined} value={typeof Volume === "object" && "value" in Volume ? Volume?.value : Volume} /* default: ID0 */  isRaw={typeof Volume === "object" && "isRaw" in Volume && Volume.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StepSize" id={typeof StepSize === "object" && "id" in StepSize ? StepSize?.id : undefined} value={typeof StepSize === "object" && "value" in StepSize ? StepSize?.value : StepSize} /* default: 0 */  isRaw={typeof StepSize === "object" && "isRaw" in StepSize && StepSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Gain" id={typeof Gain === "object" && "id" in Gain ? Gain?.id : undefined} value={typeof Gain === "object" && "value" in Gain ? Gain?.value : Gain} /* default: 0 */  isRaw={typeof Gain === "object" && "isRaw" in Gain && Gain.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Exp" id={typeof Exp === "object" && "id" in Exp ? Exp?.id : undefined} value={typeof Exp === "object" && "value" in Exp ? Exp?.value : Exp} /* default: 0 */  isRaw={typeof Exp === "object" && "isRaw" in Exp && Exp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AccumulationCutoff" id={typeof AccumulationCutoff === "object" && "id" in AccumulationCutoff ? AccumulationCutoff?.id : undefined} value={typeof AccumulationCutoff === "object" && "value" in AccumulationCutoff ? AccumulationCutoff?.value : AccumulationCutoff} /* default: 0 */  isRaw={typeof AccumulationCutoff === "object" && "isRaw" in AccumulationCutoff && AccumulationCutoff.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HitThreshold" id={typeof HitThreshold === "object" && "id" in HitThreshold ? HitThreshold?.id : undefined} value={typeof HitThreshold === "object" && "value" in HitThreshold ? HitThreshold?.value : HitThreshold} /* default: 0 */  isRaw={typeof HitThreshold === "object" && "isRaw" in HitThreshold && HitThreshold.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InputRange" id={typeof InputRange === "object" && "id" in InputRange ? InputRange?.id : undefined} value={typeof InputRange === "object" && "value" in InputRange ? InputRange?.value : InputRange} /* default: 0 */  isRaw={typeof InputRange === "object" && "isRaw" in InputRange && InputRange.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InputOffset" id={typeof InputOffset === "object" && "id" in InputOffset ? InputOffset?.id : undefined} value={typeof InputOffset === "object" && "value" in InputOffset ? InputOffset?.value : InputOffset} /* default: 0 */  isRaw={typeof InputOffset === "object" && "isRaw" in InputOffset && InputOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseAlphaChannel" id={typeof UseAlphaChannel === "object" && "id" in UseAlphaChannel ? UseAlphaChannel?.id : undefined} value={typeof UseAlphaChannel === "object" && "value" in UseAlphaChannel ? UseAlphaChannel?.value : UseAlphaChannel} /* default: false */  isRaw={typeof UseAlphaChannel === "object" && "isRaw" in UseAlphaChannel && UseAlphaChannel.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.VolumeUnlitMaterial+SlicePlane]`} name="Slices" id={typeof Slices === "object" && "id" in Slices ? Slices?.id : undefined} value={typeof Slices === "object" && "value" in Slices ? Slices?.value : Slices} /* default: FrooxEngine.SyncList`1[FrooxEngine.VolumeUnlitMaterial+SlicePlane] */  isRaw={typeof Slices === "object" && "isRaw" in Slices && Slices.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.VolumeUnlitMaterial+Highlight]`} name="Highlights" id={typeof Highlights === "object" && "id" in Highlights ? Highlights?.id : undefined} value={typeof Highlights === "object" && "value" in Highlights ? Highlights?.value : Highlights} /* default: FrooxEngine.SyncList`1[FrooxEngine.VolumeUnlitMaterial+Highlight] */  isRaw={typeof Highlights === "object" && "isRaw" in Highlights && Highlights.isRaw ? true : undefined} />
        </Component>
      );
    };
    