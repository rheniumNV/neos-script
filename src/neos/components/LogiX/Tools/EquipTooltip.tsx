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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Chirality]`} name="Side" id={typeof Side === "object" && "id" in Side ? Side?.id : undefined} value={typeof Side === "object" && "value" in Side ? Side?.value : Side} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IToolTip]`} name="Tooltip" id={typeof Tooltip === "object" && "id" in Tooltip ? Tooltip?.id : undefined} value={typeof Tooltip === "object" && "value" in Tooltip ? Tooltip?.value : Tooltip} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="DequipExisting" id={typeof DequipExisting === "object" && "id" in DequipExisting ? DequipExisting?.id : undefined} value={typeof DequipExisting === "object" && "value" in DequipExisting ? DequipExisting?.value : DequipExisting} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnEquipped" id={typeof OnEquipped === "object" && "id" in OnEquipped ? OnEquipped?.id : undefined} value={typeof OnEquipped === "object" && "value" in OnEquipped ? OnEquipped?.value : OnEquipped} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnEquipFail" id={typeof OnEquipFail === "object" && "id" in OnEquipFail ? OnEquipFail?.id : undefined} value={typeof OnEquipFail === "object" && "value" in OnEquipFail ? OnEquipFail?.value : OnEquipFail} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    