import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface OnLocomotionGripEndInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Locomotion?: member<any>;
OnEvent?: member<any>;
    }
    
    export function OnLocomotionGripEnd(props: OnLocomotionGripEndInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Locomotion,
OnEvent, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Physics.OnLocomotionGripEnd" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.PhysicalLocomotion]`} name="Locomotion" id={typeof Locomotion === "object" && "id" in Locomotion ? Locomotion?.id : undefined} value={typeof Locomotion === "object" && "value" in Locomotion ? Locomotion?.value : Locomotion} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnEvent" id={typeof OnEvent === "object" && "id" in OnEvent ? OnEvent?.id : undefined} value={typeof OnEvent === "object" && "value" in OnEvent ? OnEvent?.value : OnEvent} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    