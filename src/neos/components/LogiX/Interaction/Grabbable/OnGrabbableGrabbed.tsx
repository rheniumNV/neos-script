import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface OnGrabbableGrabbedInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Grabbable?: member<any>;
OnGrabbed?: member<any>;
    }
    
    export function OnGrabbableGrabbed(props: OnGrabbableGrabbedInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Grabbable,
OnGrabbed, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Interaction.OnGrabbableGrabbed" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IGrabbable]`} name="Grabbable" id={typeof Grabbable === "object" && "id" in Grabbable ? Grabbable?.id : undefined} value={typeof Grabbable === "object" && "value" in Grabbable ? Grabbable?.value : Grabbable} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnGrabbed" id={typeof OnGrabbed === "object" && "id" in OnGrabbed ? OnGrabbed?.id : undefined} value={typeof OnGrabbed === "object" && "value" in OnGrabbed ? OnGrabbed?.value : OnGrabbed} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    