import { member, Member, Component } from "../../../core";
    
    export interface ZeroOneInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Boolean?: member<any>;
    }
    
    export function ZeroOne(props: ZeroOneInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Boolean, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.ZeroOne" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Boolean" id={typeof Boolean === "object" && "id" in Boolean ? Boolean?.id : undefined} value={typeof Boolean === "object" && "value" in Boolean ? Boolean?.value : Boolean} /* default: ID0 */  isRaw={typeof Boolean === "object" && "isRaw" in Boolean && Boolean.isRaw ? true : undefined} />
        </Component>
      );
    };
    