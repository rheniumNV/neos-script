import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface LookRotation_doubleQInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Forward?: member<any>;
Up?: member<any>;
    }
    
    export function LookRotation_doubleQ(props: LookRotation_doubleQInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Forward,
Up, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Quaternions.LookRotation_doubleQ" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.double3]`} name="Forward" id={typeof Forward === "object" && "id" in Forward ? Forward?.id : undefined} value={typeof Forward === "object" && "value" in Forward ? Forward?.value : Forward} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.double3]`} name="Up" id={typeof Up === "object" && "id" in Up ? Up?.id : undefined} value={typeof Up === "object" && "value" in Up ? Up?.value : Up} /* default: ID0 */  />
        </Component>
      );
    };
    