import { member, Member, Component } from "../../../../core";
    
    export interface ParseQuantity_UInput {
        type:{U: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Str?: member<any>;
DefaultUnit?: member<any>;
    }
    
    export function ParseQuantity_U(props: ParseQuantity_UInput){
      const {type:{U:{name: U},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Str,
DefaultUnit, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Quantity.ParseQuantity\`1[${[U,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Str" id={typeof Str === "object" && "id" in Str ? Str?.id : undefined} value={typeof Str === "object" && "value" in Str ? Str?.value : Str} /* default: null */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="DefaultUnit" id={typeof DefaultUnit === "object" && "id" in DefaultUnit ? DefaultUnit?.id : undefined} value={typeof DefaultUnit === "object" && "value" in DefaultUnit ? DefaultUnit?.value : DefaultUnit} /* default: null */  />
        </Component>
      );
    };
    