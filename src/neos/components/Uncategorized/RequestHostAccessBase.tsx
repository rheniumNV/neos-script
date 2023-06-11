import { member, Member, Component } from "../../core";
    
    export interface RequestHostAccessBaseInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
OnDenied?: member<any>;
OnGranted?: member<any>;
OnIgnored?: member<any>;
    }
    
    export function RequestHostAccessBase(props: RequestHostAccessBaseInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
OnDenied,
OnGranted,
OnIgnored, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Network.RequestHostAccessBase" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDenied" id={typeof OnDenied === "object" && "id" in OnDenied ? OnDenied?.id : undefined} value={typeof OnDenied === "object" && "value" in OnDenied ? OnDenied?.value : OnDenied} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnDenied === "object" && "isRaw" in OnDenied && OnDenied.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnGranted" id={typeof OnGranted === "object" && "id" in OnGranted ? OnGranted?.id : undefined} value={typeof OnGranted === "object" && "value" in OnGranted ? OnGranted?.value : OnGranted} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnGranted === "object" && "isRaw" in OnGranted && OnGranted.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnIgnored" id={typeof OnIgnored === "object" && "id" in OnIgnored ? OnIgnored?.id : undefined} value={typeof OnIgnored === "object" && "value" in OnIgnored ? OnIgnored?.value : OnIgnored} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnIgnored === "object" && "isRaw" in OnIgnored && OnIgnored.isRaw ? true : undefined} />
        </Component>
      );
    };
    