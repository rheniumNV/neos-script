import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface OnGripStartInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Grip?: member<any>;
OnEvent?: member<any>;
    }
    
    export function OnGripStart(props: OnGripStartInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Grip,
OnEvent, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Physics.OnGripStart" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.LocomotionGrip]`} name="Grip" id={typeof Grip === "object" && "id" in Grip ? Grip?.id : undefined} value={typeof Grip === "object" && "value" in Grip ? Grip?.value : Grip} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnEvent" id={typeof OnEvent === "object" && "id" in OnEvent ? OnEvent?.id : undefined} value={typeof OnEvent === "object" && "value" in OnEvent ? OnEvent?.value : OnEvent} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    