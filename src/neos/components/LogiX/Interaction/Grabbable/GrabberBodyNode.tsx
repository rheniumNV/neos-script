import { member, Member, Component } from "../../../../core";
    
    export interface GrabberBodyNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Grabber?: member<any>;
    }
    
    export function GrabberBodyNode(props: GrabberBodyNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Grabber, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Interaction.GrabberBodyNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Grabber]`} name="Grabber" id={typeof Grabber === "object" && "id" in Grabber ? Grabber?.id : undefined} value={typeof Grabber === "object" && "value" in Grabber ? Grabber?.value : Grabber} /* default: ID0 */  />
        </Component>
      );
    };
    