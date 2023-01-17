import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface WorldSavedInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
OnSaved?: member<any>;
    }
    
    export function WorldSaved(props: WorldSavedInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
OnSaved, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldNodes.WorldSaved" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSaved" id={typeof OnSaved === "object" && "id" in OnSaved ? OnSaved?.id : undefined} value={typeof OnSaved === "object" && "value" in OnSaved ? OnSaved?.value : OnSaved} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    