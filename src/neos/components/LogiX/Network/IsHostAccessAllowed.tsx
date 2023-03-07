import { member, Member, Component } from "../../../core";
    
    export interface IsHostAccessAllowedInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Host?: member<any>;
Port?: member<any>;
    }
    
    export function IsHostAccessAllowed(props: IsHostAccessAllowedInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Host,
Port, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Network.IsHostAccessAllowed" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Host" id={typeof Host === "object" && "id" in Host ? Host?.id : undefined} value={typeof Host === "object" && "value" in Host ? Host?.value : Host} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Port" id={typeof Port === "object" && "id" in Port ? Port?.id : undefined} value={typeof Port === "object" && "value" in Port ? Port?.value : Port} /* default: ID0 */  />
        </Component>
      );
    };
    