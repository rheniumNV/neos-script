import { member, Member, Component } from "../../../core";
    
    export interface Clamp_Int4Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Value?: member<any>;
Min?: member<any>;
Max?: member<any>;
    }
    
    export function Clamp_Int4(props: Clamp_Int4Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Value,
Min,
Max, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Clamp_Int4" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.int4]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.int4]`} name="Min" id={typeof Min === "object" && "id" in Min ? Min?.id : undefined} value={typeof Min === "object" && "value" in Min ? Min?.value : Min} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.int4]`} name="Max" id={typeof Max === "object" && "id" in Max ? Max?.id : undefined} value={typeof Max === "object" && "value" in Max ? Max?.value : Max} /* default: ID0 */  />
        </Component>
      );
    };
    