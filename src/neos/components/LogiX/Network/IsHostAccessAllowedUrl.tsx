import { member, Member, Component } from "../../../core";
    
    export interface IsHostAccessAllowedUrlInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Host?: member<any>;
    }
    
    export function IsHostAccessAllowedUrl(props: IsHostAccessAllowedUrlInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Host, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Network.IsHostAccessAllowedUrl" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Uri]`} name="Host" id={typeof Host === "object" && "id" in Host ? Host?.id : undefined} value={typeof Host === "object" && "value" in Host ? Host?.value : Host} /* default: ID0 */  isRaw={typeof Host === "object" && "isRaw" in Host && Host.isRaw ? true : undefined} />
        </Component>
      );
    };
    