import { member, Member, Component } from "../../../core";
    
    export interface ValueRadio_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
CheckVisual?: member<any>;
OptionValue?: member<any>;
TargetValue?: member<any>;
    }
    
    export function ValueRadio_T(props: ValueRadio_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
CheckVisual,
OptionValue,
TargetValue, } = props;
    
      return (
        <Component type={`FrooxEngine.UIX.ValueRadio\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="CheckVisual" id={typeof CheckVisual === "object" && "id" in CheckVisual ? CheckVisual?.id : undefined} value={typeof CheckVisual === "object" && "value" in CheckVisual ? CheckVisual?.value : CheckVisual} /* default: null */  isRaw={typeof CheckVisual === "object" && "isRaw" in CheckVisual && CheckVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[${T}]`} name="OptionValue" id={typeof OptionValue === "object" && "id" in OptionValue ? OptionValue?.id : undefined} value={typeof OptionValue === "object" && "value" in OptionValue ? OptionValue?.value : OptionValue} /* default: null */  isRaw={typeof OptionValue === "object" && "isRaw" in OptionValue && OptionValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[${T}]]`} name="TargetValue" id={typeof TargetValue === "object" && "id" in TargetValue ? TargetValue?.id : undefined} value={typeof TargetValue === "object" && "value" in TargetValue ? TargetValue?.value : TargetValue} /* default: null */  isRaw={typeof TargetValue === "object" && "isRaw" in TargetValue && TargetValue.isRaw ? true : undefined} />
        </Component>
      );
    };
    