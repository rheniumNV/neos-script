import { member, Member, Component } from "../../../../core";
    
    export interface FormatQuantity_UInput {
        type:{U: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Value?: member<any>;
FormatUnit?: member<any>;
FormatNumber?: member<any>;
UseLongNames?: member<any>;
    }
    
    export function FormatQuantity_U(props: FormatQuantity_UInput){
      const {type:{U:{name: U},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Value,
FormatUnit,
FormatNumber,
UseLongNames, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Quantity.FormatQuantity\`1[${[U,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[U]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  isRaw={typeof Value === "object" && "isRaw" in Value && Value.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="FormatUnit" id={typeof FormatUnit === "object" && "id" in FormatUnit ? FormatUnit?.id : undefined} value={typeof FormatUnit === "object" && "value" in FormatUnit ? FormatUnit?.value : FormatUnit} /* default: null */  isRaw={typeof FormatUnit === "object" && "isRaw" in FormatUnit && FormatUnit.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="FormatNumber" id={typeof FormatNumber === "object" && "id" in FormatNumber ? FormatNumber?.id : undefined} value={typeof FormatNumber === "object" && "value" in FormatNumber ? FormatNumber?.value : FormatNumber} /* default: null */  isRaw={typeof FormatNumber === "object" && "isRaw" in FormatNumber && FormatNumber.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="UseLongNames" id={typeof UseLongNames === "object" && "id" in UseLongNames ? UseLongNames?.id : undefined} value={typeof UseLongNames === "object" && "value" in UseLongNames ? UseLongNames?.value : UseLongNames} /* default: null */  isRaw={typeof UseLongNames === "object" && "isRaw" in UseLongNames && UseLongNames.isRaw ? true : undefined} />
        </Component>
      );
    };
    