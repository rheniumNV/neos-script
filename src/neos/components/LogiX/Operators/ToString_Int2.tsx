import { member, Member, Component } from "../../../core";
    
    export interface ToString_Int2Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
V?: member<any>;
Format?: member<any>;
FormatProvider?: member<any>;
    }
    
    export function ToString_Int2(props: ToString_Int2Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
V,
Format,
FormatProvider, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.ToString_Int2" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.int2]`} name="V" id={typeof V === "object" && "id" in V ? V?.id : undefined} value={typeof V === "object" && "value" in V ? V?.value : V} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Format" id={typeof Format === "object" && "id" in Format ? Format?.id : undefined} value={typeof Format === "object" && "value" in Format ? Format?.value : Format} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.IFormatProvider]`} name="FormatProvider" id={typeof FormatProvider === "object" && "id" in FormatProvider ? FormatProvider?.id : undefined} value={typeof FormatProvider === "object" && "value" in FormatProvider ? FormatProvider?.value : FormatProvider} /* default: ID0 */  />
        </Component>
      );
    };
    