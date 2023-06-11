import { member, Member, Component } from "../../../../core";
    
    export interface OnGrabbableReceiverSurfaceReceivedInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Source?: member<any>;
OnReceived?: member<any>;
    }
    
    export function OnGrabbableReceiverSurfaceReceived(props: OnGrabbableReceiverSurfaceReceivedInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Source,
OnReceived, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Interaction.OnGrabbableReceiverSurfaceReceived" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.GrabbableReceiverSurface]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnReceived" id={typeof OnReceived === "object" && "id" in OnReceived ? OnReceived?.id : undefined} value={typeof OnReceived === "object" && "value" in OnReceived ? OnReceived?.value : OnReceived} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnReceived === "object" && "isRaw" in OnReceived && OnReceived.isRaw ? true : undefined} />
        </Component>
      );
    };
    