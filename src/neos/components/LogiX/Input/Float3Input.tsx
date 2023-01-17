import { member, Member, Component } from "../../../core";
    
    export interface Float3InputInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
_value?: member<[number, number, number]>;
    }
    
    export function Float3Input(props: Float3InputInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
_value, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Input.Float3Input" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_value" id={typeof _value === "object" && "id" in _value ? _value?.id : undefined} value={typeof _value === "object" && "value" in _value ? _value?.value : _value} /* default: [0; 0; 0] */  />
        </Component>
      );
    };
    