import { member, Member, Component } from "../../../../core";
    
    export interface PackNullable_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Value?: member<any>;
HasValue?: member<any>;
    }
    
    export function PackNullable_T(props: PackNullable_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Value,
HasValue, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Operators.PackNullable\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="HasValue" id={typeof HasValue === "object" && "id" in HasValue ? HasValue?.id : undefined} value={typeof HasValue === "object" && "value" in HasValue ? HasValue?.value : HasValue} /* default: null */  />
        </Component>
      );
    };
    