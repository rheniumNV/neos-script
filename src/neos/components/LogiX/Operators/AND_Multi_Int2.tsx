import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AND_Multi_Int2Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Operands?: member<any>;
    }
    
    export function AND_Multi_Int2(props: AND_Multi_Int2Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Operands, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.AND_Multi_Int2" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.LogiX.Input\`1[BaseX.int2]]`} name="Operands" id={typeof Operands === "object" && "id" in Operands ? Operands?.id : undefined} value={typeof Operands === "object" && "value" in Operands ? Operands?.value : Operands} /* default: FrooxEngine.SyncList`1[FrooxEngine.LogiX.Input`1[BaseX.int2]] */  />
        </Component>
      );
    };
    