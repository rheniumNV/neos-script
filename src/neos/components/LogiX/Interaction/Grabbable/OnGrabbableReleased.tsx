import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface OnGrabbableReleasedInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Grabbable?: member<any>;
OnReleased?: member<any>;
    }
    
    export function OnGrabbableReleased(props: OnGrabbableReleasedInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Grabbable,
OnReleased, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Interaction.OnGrabbableReleased" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IGrabbable]`} name="Grabbable" id={typeof Grabbable === "object" && "id" in Grabbable ? Grabbable?.id : undefined} value={typeof Grabbable === "object" && "value" in Grabbable ? Grabbable?.value : Grabbable} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnReleased" id={typeof OnReleased === "object" && "id" in OnReleased ? OnReleased?.id : undefined} value={typeof OnReleased === "object" && "value" in OnReleased ? OnReleased?.value : OnReleased} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    