import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface OnDestroyingNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Destroying?: member<any>;
    }
    
    export function OnDestroyingNode(props: OnDestroyingNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Destroying, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.OnDestroyingNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Destroying" id={typeof Destroying === "object" && "id" in Destroying ? Destroying?.id : undefined} value={typeof Destroying === "object" && "value" in Destroying ? Destroying?.value : Destroying} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    