import { member, Member, Component } from "../../../core";
    
    export interface IntInputInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
_value?: member<number>;
    }
    
    export function IntInput(props: IntInputInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
_value, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Input.IntInput" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_value" id={typeof _value === "object" && "id" in _value ? _value?.id : undefined} value={typeof _value === "object" && "value" in _value ? _value?.value : _value} /* default: 0 */  />
        </Component>
      );
    };
    