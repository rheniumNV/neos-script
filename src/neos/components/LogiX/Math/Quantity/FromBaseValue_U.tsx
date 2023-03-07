import { member, Member, Component } from "../../../../core";
    
    export interface FromBaseValue_UInput {
        type:{U: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
BaseValue?: member<any>;
    }
    
    export function FromBaseValue_U(props: FromBaseValue_UInput){
      const {type:{U:{name: U},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
BaseValue, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Quantity.FromBaseValue\`1[${[U,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Double]`} name="BaseValue" id={typeof BaseValue === "object" && "id" in BaseValue ? BaseValue?.id : undefined} value={typeof BaseValue === "object" && "value" in BaseValue ? BaseValue?.value : BaseValue} /* default: null */  />
        </Component>
      );
    };
    