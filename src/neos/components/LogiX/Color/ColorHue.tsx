import { member, Member, Component } from "../../../core";
    
    export interface ColorHueInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Hue?: member<any>;
    }
    
    export function ColorHue(props: ColorHueInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Hue, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Color.ColorHue" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Hue" id={typeof Hue === "object" && "id" in Hue ? Hue?.id : undefined} value={typeof Hue === "object" && "value" in Hue ? Hue?.value : Hue} /* default: ID0 */  isRaw={typeof Hue === "object" && "isRaw" in Hue && Hue.isRaw ? true : undefined} />
        </Component>
      );
    };
    