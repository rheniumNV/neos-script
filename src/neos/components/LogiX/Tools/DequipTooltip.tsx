import { member, Member, Component } from "../../../core";
    
    export interface DequipTooltipInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
User?: member<any>;
Side?: member<any>;
OnDequipped?: member<any>;
OnDequipFail?: member<any>;
    }
    
    export function DequipTooltip(props: DequipTooltipInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
User,
Side,
OnDequipped,
OnDequipFail, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Tools.DequipTooltip" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  isRaw={typeof User === "object" && "isRaw" in User && User.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Chirality]`} name="Side" id={typeof Side === "object" && "id" in Side ? Side?.id : undefined} value={typeof Side === "object" && "value" in Side ? Side?.value : Side} /* default: ID0 */  isRaw={typeof Side === "object" && "isRaw" in Side && Side.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDequipped" id={typeof OnDequipped === "object" && "id" in OnDequipped ? OnDequipped?.id : undefined} value={typeof OnDequipped === "object" && "value" in OnDequipped ? OnDequipped?.value : OnDequipped} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnDequipped === "object" && "isRaw" in OnDequipped && OnDequipped.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDequipFail" id={typeof OnDequipFail === "object" && "id" in OnDequipFail ? OnDequipFail?.id : undefined} value={typeof OnDequipFail === "object" && "value" in OnDequipFail ? OnDequipFail?.value : OnDequipFail} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnDequipFail === "object" && "isRaw" in OnDequipFail && OnDequipFail.isRaw ? true : undefined} />
        </Component>
      );
    };
    