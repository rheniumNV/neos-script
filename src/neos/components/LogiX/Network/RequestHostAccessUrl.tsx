import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface RequestHostAccessUrlInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
OnDenied?: member<any>;
OnGranted?: member<any>;
OnIgnored?: member<any>;
Host?: member<any>;
Reason?: member<any>;
    }
    
    export function RequestHostAccessUrl(props: RequestHostAccessUrlInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
OnDenied,
OnGranted,
OnIgnored,
Host,
Reason, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Network.RequestHostAccessUrl" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDenied" id={typeof OnDenied === "object" && "id" in OnDenied ? OnDenied?.id : undefined} value={typeof OnDenied === "object" && "value" in OnDenied ? OnDenied?.value : OnDenied} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnGranted" id={typeof OnGranted === "object" && "id" in OnGranted ? OnGranted?.id : undefined} value={typeof OnGranted === "object" && "value" in OnGranted ? OnGranted?.value : OnGranted} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnIgnored" id={typeof OnIgnored === "object" && "id" in OnIgnored ? OnIgnored?.id : undefined} value={typeof OnIgnored === "object" && "value" in OnIgnored ? OnIgnored?.value : OnIgnored} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Uri]`} name="Host" id={typeof Host === "object" && "id" in Host ? Host?.id : undefined} value={typeof Host === "object" && "value" in Host ? Host?.value : Host} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Reason" id={typeof Reason === "object" && "id" in Reason ? Reason?.id : undefined} value={typeof Reason === "object" && "value" in Reason ? Reason?.value : Reason} /* default: ID0 */  />
        </Component>
      );
    };
    