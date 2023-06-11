import { member, Member, Component } from "../../../core";
    
    export interface FormatStringInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Format?: member<any>;
Parameters?: member<any>;
FormatProvider?: member<any>;
    }
    
    export function FormatString(props: FormatStringInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Format,
Parameters,
FormatProvider, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.String.FormatString" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Format" id={typeof Format === "object" && "id" in Format ? Format?.id : undefined} value={typeof Format === "object" && "value" in Format ? Format?.value : Format} /* default: ID0 */  isRaw={typeof Format === "object" && "isRaw" in Format && Format.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.LogiX.Input\`1[System.Object]]`} name="Parameters" id={typeof Parameters === "object" && "id" in Parameters ? Parameters?.id : undefined} value={typeof Parameters === "object" && "value" in Parameters ? Parameters?.value : Parameters} /* default: FrooxEngine.SyncList`1[FrooxEngine.LogiX.Input`1[System.Object]] */  isRaw={typeof Parameters === "object" && "isRaw" in Parameters && Parameters.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.IFormatProvider]`} name="FormatProvider" id={typeof FormatProvider === "object" && "id" in FormatProvider ? FormatProvider?.id : undefined} value={typeof FormatProvider === "object" && "value" in FormatProvider ? FormatProvider?.value : FormatProvider} /* default: ID0 */  isRaw={typeof FormatProvider === "object" && "isRaw" in FormatProvider && FormatProvider.isRaw ? true : undefined} />
        </Component>
      );
    };
    