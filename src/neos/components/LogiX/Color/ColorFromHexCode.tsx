import { member, Member, Component } from "../../../core";
    
    export interface ColorFromHexCodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
HexCode?: member<any>;
    }
    
    export function ColorFromHexCode(props: ColorFromHexCodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
HexCode, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Color.ColorFromHexCode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="HexCode" id={typeof HexCode === "object" && "id" in HexCode ? HexCode?.id : undefined} value={typeof HexCode === "object" && "value" in HexCode ? HexCode?.value : HexCode} /* default: ID0 */  isRaw={typeof HexCode === "object" && "isRaw" in HexCode && HexCode.isRaw ? true : undefined} />
        </Component>
      );
    };
    