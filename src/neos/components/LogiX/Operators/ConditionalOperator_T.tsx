import { member, Member, Component } from "../../../core";
    
    export interface ConditionalOperator_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Ontrue?: member<any>;
Onfalse?: member<any>;
Condition?: member<any>;
    }
    
    export function ConditionalOperator_T(props: ConditionalOperator_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Ontrue,
Onfalse,
Condition, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Operators.ConditionalOperator\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="Ontrue" id={typeof Ontrue === "object" && "id" in Ontrue ? Ontrue?.id : undefined} value={typeof Ontrue === "object" && "value" in Ontrue ? Ontrue?.value : Ontrue} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="Onfalse" id={typeof Onfalse === "object" && "id" in Onfalse ? Onfalse?.id : undefined} value={typeof Onfalse === "object" && "value" in Onfalse ? Onfalse?.value : Onfalse} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Condition" id={typeof Condition === "object" && "id" in Condition ? Condition?.id : undefined} value={typeof Condition === "object" && "value" in Condition ? Condition?.value : Condition} /* default: null */  />
        </Component>
      );
    };
    