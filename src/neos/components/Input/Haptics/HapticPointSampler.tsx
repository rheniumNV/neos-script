import { member, Member, Component } from "../../../core";
    
    export interface HapticPointSamplerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Radius?: member<number>;
ShowDebugVisual?: member<boolean>;
_debugVisual?: member<any>;
SamplingUser?: member<any>;
HapticPointIndex?: member<number>;
    }
    
    export function HapticPointSampler(props: HapticPointSamplerInput){
      const { id, persistentId, updateOrder, Enabled,
Radius,
ShowDebugVisual,
_debugVisual,
SamplingUser,
HapticPointIndex, } = props;
    
      return (
        <Component type="FrooxEngine.HapticPointSampler" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  isRaw={typeof Radius === "object" && "isRaw" in Radius && Radius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowDebugVisual-ID" id={typeof ShowDebugVisual === "object" && "id" in ShowDebugVisual ? ShowDebugVisual?.id : undefined} value={typeof ShowDebugVisual === "object" && "value" in ShowDebugVisual ? ShowDebugVisual?.value : ShowDebugVisual} /* default: false */ readOnly isRaw={typeof ShowDebugVisual === "object" && "isRaw" in ShowDebugVisual && ShowDebugVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SlotCleanupRef\`1[FrooxEngine.OverlayFresnelMaterial]`} name="_debugVisual" id={typeof _debugVisual === "object" && "id" in _debugVisual ? _debugVisual?.id : undefined} value={typeof _debugVisual === "object" && "value" in _debugVisual ? _debugVisual?.value : _debugVisual} /* default: ID0 */  isRaw={typeof _debugVisual === "object" && "isRaw" in _debugVisual && _debugVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.UserRef`} name="SamplingUser" id={typeof SamplingUser === "object" && "id" in SamplingUser ? SamplingUser?.id : undefined} value={typeof SamplingUser === "object" && "value" in SamplingUser ? SamplingUser?.value : SamplingUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof SamplingUser === "object" && "isRaw" in SamplingUser && SamplingUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="HapticPointIndex" id={typeof HapticPointIndex === "object" && "id" in HapticPointIndex ? HapticPointIndex?.id : undefined} value={typeof HapticPointIndex === "object" && "value" in HapticPointIndex ? HapticPointIndex?.value : HapticPointIndex} /* default: 0 */  isRaw={typeof HapticPointIndex === "object" && "isRaw" in HapticPointIndex && HapticPointIndex.isRaw ? true : undefined} />
        </Component>
      );
    };
    