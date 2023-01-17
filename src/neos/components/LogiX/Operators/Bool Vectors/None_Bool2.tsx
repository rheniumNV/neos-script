import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface None_Bool2Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
V?: member<any>;
    }
    
    export function None_Bool2(props: None_Bool2Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
V, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.None_Bool2" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.bool2]`} name="V" id={typeof V === "object" && "id" in V ? V?.id : undefined} value={typeof V === "object" && "value" in V ? V?.value : V} /* default: ID0 */  />
        </Component>
      );
    };
    