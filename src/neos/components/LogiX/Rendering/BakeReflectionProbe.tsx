import { member, Member, Component } from "../../../core";
    
    export interface BakeReflectionProbeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Probe?: member<any>;
OnBakeStart?: member<any>;
OnBakeFail?: member<any>;
OnBakeComplete?: member<any>;
    }
    
    export function BakeReflectionProbe(props: BakeReflectionProbeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Probe,
OnBakeStart,
OnBakeFail,
OnBakeComplete, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Rendering.BakeReflectionProbe" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.ReflectionProbe]`} name="Probe" id={typeof Probe === "object" && "id" in Probe ? Probe?.id : undefined} value={typeof Probe === "object" && "value" in Probe ? Probe?.value : Probe} /* default: ID0 */  isRaw={typeof Probe === "object" && "isRaw" in Probe && Probe.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnBakeStart" id={typeof OnBakeStart === "object" && "id" in OnBakeStart ? OnBakeStart?.id : undefined} value={typeof OnBakeStart === "object" && "value" in OnBakeStart ? OnBakeStart?.value : OnBakeStart} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnBakeStart === "object" && "isRaw" in OnBakeStart && OnBakeStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnBakeFail" id={typeof OnBakeFail === "object" && "id" in OnBakeFail ? OnBakeFail?.id : undefined} value={typeof OnBakeFail === "object" && "value" in OnBakeFail ? OnBakeFail?.value : OnBakeFail} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnBakeFail === "object" && "isRaw" in OnBakeFail && OnBakeFail.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnBakeComplete" id={typeof OnBakeComplete === "object" && "id" in OnBakeComplete ? OnBakeComplete?.id : undefined} value={typeof OnBakeComplete === "object" && "value" in OnBakeComplete ? OnBakeComplete?.value : OnBakeComplete} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnBakeComplete === "object" && "isRaw" in OnBakeComplete && OnBakeComplete.isRaw ? true : undefined} />
        </Component>
      );
    };
    