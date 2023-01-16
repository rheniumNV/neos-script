import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ColorToHexCodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Color?: member<any>;
ShortForm?: member<any>;
IncludeAlpha?: member<any>;
Prefix?: member<any>;
    }
    
    export function ColorToHexCode(props: ColorToHexCodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Color,
ShortForm,
IncludeAlpha,
Prefix, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Color.ColorToHexCode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="ShortForm" id={typeof ShortForm === "object" && "id" in ShortForm ? ShortForm?.id : undefined} value={typeof ShortForm === "object" && "value" in ShortForm ? ShortForm?.value : ShortForm} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="IncludeAlpha" id={typeof IncludeAlpha === "object" && "id" in IncludeAlpha ? IncludeAlpha?.id : undefined} value={typeof IncludeAlpha === "object" && "value" in IncludeAlpha ? IncludeAlpha?.value : IncludeAlpha} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Prefix" id={typeof Prefix === "object" && "id" in Prefix ? Prefix?.id : undefined} value={typeof Prefix === "object" && "value" in Prefix ? Prefix?.value : Prefix} /* default: ID0 */  />
        </Component>
      );
    };
    