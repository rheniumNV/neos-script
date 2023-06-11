import { member, Member, Component } from "../../../core";
    
    export interface EquipTooltipInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
User?: member<any>;
Side?: member<any>;
Tooltip?: member<any>;
DequipExisting?: member<any>;
OnEquipped?: member<any>;
OnEquipFail?: member<any>;
    }
    
    export function EquipTooltip(props: EquipTooltipInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
User,
Side,
Tooltip,
DequipExisting,
OnEquipped,
OnEquipFail, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Tools.EquipTooltip" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  isRaw={typeof User === "object" && "isRaw" in User && User.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Chirality]`} name="Side" id={typeof Side === "object" && "id" in Side ? Side?.id : undefined} value={typeof Side === "object" && "value" in Side ? Side?.value : Side} /* default: ID0 */  isRaw={typeof Side === "object" && "isRaw" in Side && Side.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IToolTip]`} name="Tooltip" id={typeof Tooltip === "object" && "id" in Tooltip ? Tooltip?.id : undefined} value={typeof Tooltip === "object" && "value" in Tooltip ? Tooltip?.value : Tooltip} /* default: ID0 */  isRaw={typeof Tooltip === "object" && "isRaw" in Tooltip && Tooltip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="DequipExisting" id={typeof DequipExisting === "object" && "id" in DequipExisting ? DequipExisting?.id : undefined} value={typeof DequipExisting === "object" && "value" in DequipExisting ? DequipExisting?.value : DequipExisting} /* default: ID0 */  isRaw={typeof DequipExisting === "object" && "isRaw" in DequipExisting && DequipExisting.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnEquipped" id={typeof OnEquipped === "object" && "id" in OnEquipped ? OnEquipped?.id : undefined} value={typeof OnEquipped === "object" && "value" in OnEquipped ? OnEquipped?.value : OnEquipped} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnEquipped === "object" && "isRaw" in OnEquipped && OnEquipped.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnEquipFail" id={typeof OnEquipFail === "object" && "id" in OnEquipFail ? OnEquipFail?.id : undefined} value={typeof OnEquipFail === "object" && "value" in OnEquipFail ? OnEquipFail?.value : OnEquipFail} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnEquipFail === "object" && "isRaw" in OnEquipFail && OnEquipFail.isRaw ? true : undefined} />
        </Component>
      );
    };
    