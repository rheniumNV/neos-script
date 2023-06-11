import { member, Member, Component } from "../../../core";
    
    export interface ColorToHSVInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
C?: member<any>;
    }
    
    export function ColorToHSV(props: ColorToHSVInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
C, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Color.ColorToHSV" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.color]`} name="C" id={typeof C === "object" && "id" in C ? C?.id : undefined} value={typeof C === "object" && "value" in C ? C?.value : C} /* default: ID0 */  isRaw={typeof C === "object" && "isRaw" in C && C.isRaw ? true : undefined} />
        </Component>
      );
    };
    