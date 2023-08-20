import { member, Member, Component } from "../../core";
    
    export interface OverlayManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_overlayRoot?: member<any>;
    }
    
    export function OverlayManager(props: OverlayManagerInput){
      const { id, persistentId, updateOrder, Enabled,
_overlayRoot, } = props;
    
      return (
        <Component type="FrooxEngine.OverlayManager" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_overlayRoot" id={typeof _overlayRoot === "object" && "id" in _overlayRoot ? _overlayRoot?.id : undefined} value={typeof _overlayRoot === "object" && "value" in _overlayRoot ? _overlayRoot?.value : _overlayRoot} /* default: ID0 */  isRaw={typeof _overlayRoot === "object" && "isRaw" in _overlayRoot && _overlayRoot.isRaw ? true : undefined} />
        </Component>
      );
    };
    