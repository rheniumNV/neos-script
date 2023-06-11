import { member, Member, Component } from "../../../../core";
    
    export interface FormatAsTimeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Time?: member<any>;
DecimalPlaces?: member<any>;
FormatProvider?: member<any>;
    }
    
    export function FormatAsTime(props: FormatAsTimeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Time,
DecimalPlaces,
FormatProvider, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.String.FormatAsTime" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Time" id={typeof Time === "object" && "id" in Time ? Time?.id : undefined} value={typeof Time === "object" && "value" in Time ? Time?.value : Time} /* default: ID0 */  isRaw={typeof Time === "object" && "isRaw" in Time && Time.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="DecimalPlaces" id={typeof DecimalPlaces === "object" && "id" in DecimalPlaces ? DecimalPlaces?.id : undefined} value={typeof DecimalPlaces === "object" && "value" in DecimalPlaces ? DecimalPlaces?.value : DecimalPlaces} /* default: ID0 */  isRaw={typeof DecimalPlaces === "object" && "isRaw" in DecimalPlaces && DecimalPlaces.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.IFormatProvider]`} name="FormatProvider" id={typeof FormatProvider === "object" && "id" in FormatProvider ? FormatProvider?.id : undefined} value={typeof FormatProvider === "object" && "value" in FormatProvider ? FormatProvider?.value : FormatProvider} /* default: ID0 */  isRaw={typeof FormatProvider === "object" && "isRaw" in FormatProvider && FormatProvider.isRaw ? true : undefined} />
        </Component>
      );
    };
    