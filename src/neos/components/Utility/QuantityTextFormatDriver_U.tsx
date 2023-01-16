import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface QuantityTextFormatDriver_UInput {
        type:{U: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<string>;
BaseValue?: member<number>;
FormatUnit?: member<any>;
FormatNumber?: member<any>;
CompoundUseLongNames?: member<boolean>;
CompoundOverrideNames?: member<boolean>;
CompoundDiscardLastFraction?: member<boolean>;
CompoundSeparator?: member<any>;
CompoundZeroHandling?: member<any>;
    }
    
    export function QuantityTextFormatDriver_U(props: QuantityTextFormatDriver_UInput){
      const {type:{U:{name: U},}, id, persistentId, updateOrder, Enabled,
Target,
BaseValue,
FormatUnit,
FormatNumber,
CompoundUseLongNames,
CompoundOverrideNames,
CompoundDiscardLastFraction,
CompoundSeparator,
CompoundZeroHandling, } = props;
    
      return (
        <Component type={`FrooxEngine.QuantityTextFormatDriver\`1[${[U,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="BaseValue" id={typeof BaseValue === "object" && "id" in BaseValue ? BaseValue?.id : undefined} value={typeof BaseValue === "object" && "value" in BaseValue ? BaseValue?.value : BaseValue} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="FormatUnit" id={typeof FormatUnit === "object" && "id" in FormatUnit ? FormatUnit?.id : undefined} value={typeof FormatUnit === "object" && "value" in FormatUnit ? FormatUnit?.value : FormatUnit} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="FormatNumber" id={typeof FormatNumber === "object" && "id" in FormatNumber ? FormatNumber?.id : undefined} value={typeof FormatNumber === "object" && "value" in FormatNumber ? FormatNumber?.value : FormatNumber} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CompoundUseLongNames" id={typeof CompoundUseLongNames === "object" && "id" in CompoundUseLongNames ? CompoundUseLongNames?.id : undefined} value={typeof CompoundUseLongNames === "object" && "value" in CompoundUseLongNames ? CompoundUseLongNames?.value : CompoundUseLongNames} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CompoundOverrideNames" id={typeof CompoundOverrideNames === "object" && "id" in CompoundOverrideNames ? CompoundOverrideNames?.id : undefined} value={typeof CompoundOverrideNames === "object" && "value" in CompoundOverrideNames ? CompoundOverrideNames?.value : CompoundOverrideNames} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CompoundDiscardLastFraction" id={typeof CompoundDiscardLastFraction === "object" && "id" in CompoundDiscardLastFraction ? CompoundDiscardLastFraction?.id : undefined} value={typeof CompoundDiscardLastFraction === "object" && "value" in CompoundDiscardLastFraction ? CompoundDiscardLastFraction?.value : CompoundDiscardLastFraction} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="CompoundSeparator" id={typeof CompoundSeparator === "object" && "id" in CompoundSeparator ? CompoundSeparator?.id : undefined} value={typeof CompoundSeparator === "object" && "value" in CompoundSeparator ? CompoundSeparator?.value : CompoundSeparator} /* default: null */  />
<Member type={`FrooxEngine.Sync\`1[QuantityX.CompoundZeroHandling]`} name="CompoundZeroHandling" id={typeof CompoundZeroHandling === "object" && "id" in CompoundZeroHandling ? CompoundZeroHandling?.id : undefined} value={typeof CompoundZeroHandling === "object" && "value" in CompoundZeroHandling ? CompoundZeroHandling?.value : CompoundZeroHandling} /* default: null */  />
        </Component>
      );
    };
    