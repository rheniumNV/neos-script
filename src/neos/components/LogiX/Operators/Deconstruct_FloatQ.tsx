import { member, Member, Component } from "../../../core";
    
    export interface Deconstruct_FloatQInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
V?: member<[number, number, number, number]>;
    }
    
    export function Deconstruct_FloatQ(props: Deconstruct_FloatQInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
V, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.Deconstruct_FloatQ" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.floatQ]`} name="V" id={typeof V === "object" && "id" in V ? V?.id : undefined} value={typeof V === "object" && "value" in V ? V?.value : V} /* default: ID0 */  />
        </Component>
      );
    };
    