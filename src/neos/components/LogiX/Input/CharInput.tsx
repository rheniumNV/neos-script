import { member, Member, Component } from "../../../core";
    
    export interface CharInputInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
_value?: member<any>;
    }
    
    export function CharInput(props: CharInputInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
_value, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Input.CharInput" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Char]`} name="_value" id={typeof _value === "object" && "id" in _value ? _value?.id : undefined} value={typeof _value === "object" && "value" in _value ? _value?.value : _value} /* default:  */  isRaw={typeof _value === "object" && "isRaw" in _value && _value.isRaw ? true : undefined} />
        </Component>
      );
    };
    