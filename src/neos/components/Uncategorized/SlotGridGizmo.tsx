import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface SlotGridGizmoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_targetSlot?: member<any>;
    }
    
    export function SlotGridGizmo(props: SlotGridGizmoInput){
      const { id, persistentId, updateOrder, Enabled,
_targetSlot, } = props;
    
      return (
        <Component type="FrooxEngine.SlotGridGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.TransformRelayRef`} name="_targetSlot" id={typeof _targetSlot === "object" && "id" in _targetSlot ? _targetSlot?.id : undefined} value={typeof _targetSlot === "object" && "value" in _targetSlot ? _targetSlot?.value : _targetSlot} /* default: ID0 */  />
        </Component>
      );
    };
    