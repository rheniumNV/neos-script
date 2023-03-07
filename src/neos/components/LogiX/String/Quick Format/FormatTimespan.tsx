import { member, Member, Component } from "../../../../core";
    
    export interface FormatTimespanInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
TimeSpan?: member<any>;
ShowSeconds?: member<any>;
ShowMilliseconds?: member<any>;
FormatProvider?: member<any>;
    }
    
    export function FormatTimespan(props: FormatTimespanInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
TimeSpan,
ShowSeconds,
ShowMilliseconds,
FormatProvider, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.String.FormatTimespan" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.TimeSpan]`} name="TimeSpan" id={typeof TimeSpan === "object" && "id" in TimeSpan ? TimeSpan?.id : undefined} value={typeof TimeSpan === "object" && "value" in TimeSpan ? TimeSpan?.value : TimeSpan} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="ShowSeconds" id={typeof ShowSeconds === "object" && "id" in ShowSeconds ? ShowSeconds?.id : undefined} value={typeof ShowSeconds === "object" && "value" in ShowSeconds ? ShowSeconds?.value : ShowSeconds} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="ShowMilliseconds" id={typeof ShowMilliseconds === "object" && "id" in ShowMilliseconds ? ShowMilliseconds?.id : undefined} value={typeof ShowMilliseconds === "object" && "value" in ShowMilliseconds ? ShowMilliseconds?.value : ShowMilliseconds} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.IFormatProvider]`} name="FormatProvider" id={typeof FormatProvider === "object" && "id" in FormatProvider ? FormatProvider?.id : undefined} value={typeof FormatProvider === "object" && "value" in FormatProvider ? FormatProvider?.value : FormatProvider} /* default: ID0 */  />
        </Component>
      );
    };
    