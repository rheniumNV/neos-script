import { member, Member, Component } from "../../../core";
    
    export interface ToString_ByteInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
V?: member<any>;
Format?: member<any>;
FormatProvider?: member<any>;
    }
    
    export function ToString_Byte(props: ToString_ByteInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
V,
Format,
FormatProvider, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.ToString_Byte" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Byte]`} name="V" id={typeof V === "object" && "id" in V ? V?.id : undefined} value={typeof V === "object" && "value" in V ? V?.value : V} /* default: ID0 */  isRaw={typeof V === "object" && "isRaw" in V && V.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Format" id={typeof Format === "object" && "id" in Format ? Format?.id : undefined} value={typeof Format === "object" && "value" in Format ? Format?.value : Format} /* default: ID0 */  isRaw={typeof Format === "object" && "isRaw" in Format && Format.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.IFormatProvider]`} name="FormatProvider" id={typeof FormatProvider === "object" && "id" in FormatProvider ? FormatProvider?.id : undefined} value={typeof FormatProvider === "object" && "value" in FormatProvider ? FormatProvider?.value : FormatProvider} /* default: ID0 */  isRaw={typeof FormatProvider === "object" && "isRaw" in FormatProvider && FormatProvider.isRaw ? true : undefined} />
        </Component>
      );
    };
    