import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface Parse_Int4Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Str?: member<any>;
NumberStyle?: member<any>;
FormatProvider?: member<any>;
    }
    
    export function Parse_Int4(props: Parse_Int4Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Str,
NumberStyle,
FormatProvider, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.Parse_Int4" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Str" id={typeof Str === "object" && "id" in Str ? Str?.id : undefined} value={typeof Str === "object" && "value" in Str ? Str?.value : Str} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Globalization.NumberStyles]`} name="NumberStyle" id={typeof NumberStyle === "object" && "id" in NumberStyle ? NumberStyle?.id : undefined} value={typeof NumberStyle === "object" && "value" in NumberStyle ? NumberStyle?.value : NumberStyle} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.IFormatProvider]`} name="FormatProvider" id={typeof FormatProvider === "object" && "id" in FormatProvider ? FormatProvider?.id : undefined} value={typeof FormatProvider === "object" && "value" in FormatProvider ? FormatProvider?.value : FormatProvider} /* default: ID0 */  />
        </Component>
      );
    };
    