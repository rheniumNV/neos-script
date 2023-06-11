import { member, Member, Component } from "../../core";
    
    export interface Display_FloatInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Source?: member<any>;
_text0?: member<string>;
    }
    
    export function Display_Float(props: Display_FloatInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Source,
_text0, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Display.Display_Float" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_text0" id={typeof _text0 === "object" && "id" in _text0 ? _text0?.id : undefined} value={typeof _text0 === "object" && "value" in _text0 ? _text0?.value : _text0} /* default: ID0 */  isRaw={typeof _text0 === "object" && "isRaw" in _text0 && _text0.isRaw ? true : undefined} />
        </Component>
      );
    };
    