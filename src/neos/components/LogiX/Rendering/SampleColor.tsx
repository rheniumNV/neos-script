import { member, Member, Component } from "../../../core";
    
    export interface SampleColorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Point?: member<any>;
Direction?: member<any>;
Reference?: member<any>;
NearClip?: member<any>;
FarClip?: member<any>;
OnSampleStart?: member<any>;
OnSampled?: member<any>;
    }
    
    export function SampleColor(props: SampleColorInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Point,
Direction,
Reference,
NearClip,
FarClip,
OnSampleStart,
OnSampled, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Rendering.SampleColor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Point" id={typeof Point === "object" && "id" in Point ? Point?.id : undefined} value={typeof Point === "object" && "value" in Point ? Point?.value : Point} /* default: ID0 */  isRaw={typeof Point === "object" && "isRaw" in Point && Point.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Direction" id={typeof Direction === "object" && "id" in Direction ? Direction?.id : undefined} value={typeof Direction === "object" && "value" in Direction ? Direction?.value : Direction} /* default: ID0 */  isRaw={typeof Direction === "object" && "isRaw" in Direction && Direction.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Reference" id={typeof Reference === "object" && "id" in Reference ? Reference?.id : undefined} value={typeof Reference === "object" && "value" in Reference ? Reference?.value : Reference} /* default: ID0 */  isRaw={typeof Reference === "object" && "isRaw" in Reference && Reference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="NearClip" id={typeof NearClip === "object" && "id" in NearClip ? NearClip?.id : undefined} value={typeof NearClip === "object" && "value" in NearClip ? NearClip?.value : NearClip} /* default: ID0 */  isRaw={typeof NearClip === "object" && "isRaw" in NearClip && NearClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="FarClip" id={typeof FarClip === "object" && "id" in FarClip ? FarClip?.id : undefined} value={typeof FarClip === "object" && "value" in FarClip ? FarClip?.value : FarClip} /* default: ID0 */  isRaw={typeof FarClip === "object" && "isRaw" in FarClip && FarClip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSampleStart" id={typeof OnSampleStart === "object" && "id" in OnSampleStart ? OnSampleStart?.id : undefined} value={typeof OnSampleStart === "object" && "value" in OnSampleStart ? OnSampleStart?.value : OnSampleStart} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnSampleStart === "object" && "isRaw" in OnSampleStart && OnSampleStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSampled" id={typeof OnSampled === "object" && "id" in OnSampled ? OnSampled?.id : undefined} value={typeof OnSampled === "object" && "value" in OnSampled ? OnSampled?.value : OnSampled} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnSampled === "object" && "isRaw" in OnSampled && OnSampled.isRaw ? true : undefined} />
        </Component>
      );
    };
    