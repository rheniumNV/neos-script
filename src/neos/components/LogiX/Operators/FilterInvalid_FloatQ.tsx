import { member, Member, Component } from "../../../core";
    
    export interface FilterInvalid_FloatQInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Value?: member<[number, number, number, number]>;
Fallback?: member<[number, number, number, number]>;
    }
    
    export function FilterInvalid_FloatQ(props: FilterInvalid_FloatQInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Value,
Fallback, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.FilterInvalid_FloatQ" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.floatQ]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: ID0 */  isRaw={typeof Value === "object" && "isRaw" in Value && Value.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.floatQ]`} name="Fallback" id={typeof Fallback === "object" && "id" in Fallback ? Fallback?.id : undefined} value={typeof Fallback === "object" && "value" in Fallback ? Fallback?.value : Fallback} /* default: ID0 */  isRaw={typeof Fallback === "object" && "isRaw" in Fallback && Fallback.isRaw ? true : undefined} />
        </Component>
      );
    };
    