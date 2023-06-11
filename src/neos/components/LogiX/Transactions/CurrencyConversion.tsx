import { member, Member, Component } from "../../../core";
    
    export interface CurrencyConversionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
SourceAmount?: member<any>;
SourceCurrency?: member<any>;
TargetCurrency?: member<any>;
    }
    
    export function CurrencyConversion(props: CurrencyConversionInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
SourceAmount,
SourceCurrency,
TargetCurrency, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Transactions.CurrencyConversion" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Decimal]`} name="SourceAmount" id={typeof SourceAmount === "object" && "id" in SourceAmount ? SourceAmount?.id : undefined} value={typeof SourceAmount === "object" && "value" in SourceAmount ? SourceAmount?.value : SourceAmount} /* default: ID0 */  isRaw={typeof SourceAmount === "object" && "isRaw" in SourceAmount && SourceAmount.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="SourceCurrency" id={typeof SourceCurrency === "object" && "id" in SourceCurrency ? SourceCurrency?.id : undefined} value={typeof SourceCurrency === "object" && "value" in SourceCurrency ? SourceCurrency?.value : SourceCurrency} /* default: ID0 */  isRaw={typeof SourceCurrency === "object" && "isRaw" in SourceCurrency && SourceCurrency.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="TargetCurrency" id={typeof TargetCurrency === "object" && "id" in TargetCurrency ? TargetCurrency?.id : undefined} value={typeof TargetCurrency === "object" && "value" in TargetCurrency ? TargetCurrency?.value : TargetCurrency} /* default: ID0 */  isRaw={typeof TargetCurrency === "object" && "isRaw" in TargetCurrency && TargetCurrency.isRaw ? true : undefined} />
        </Component>
      );
    };
    