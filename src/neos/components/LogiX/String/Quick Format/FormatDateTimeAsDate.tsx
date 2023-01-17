import { member, Member, Component } from "../../../../core";
    
    export interface FormatDateTimeAsDateInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Date?: member<any>;
FormatProvider?: member<any>;
    }
    
    export function FormatDateTimeAsDate(props: FormatDateTimeAsDateInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Date,
FormatProvider, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.String.FormatDateTimeAsDate" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.DateTime]`} name="Date" id={typeof Date === "object" && "id" in Date ? Date?.id : undefined} value={typeof Date === "object" && "value" in Date ? Date?.value : Date} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.IFormatProvider]`} name="FormatProvider" id={typeof FormatProvider === "object" && "id" in FormatProvider ? FormatProvider?.id : undefined} value={typeof FormatProvider === "object" && "value" in FormatProvider ? FormatProvider?.value : FormatProvider} /* default: ID0 */  />
        </Component>
      );
    };
    