import { member, Member, Component } from "../../../core";
    
    export interface TooltipEventsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Tooltip?: member<any>;
Equipped?: member<any>;
Dequipped?: member<any>;
    }
    
    export function TooltipEvents(props: TooltipEventsInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Tooltip,
Equipped,
Dequipped, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Tools.TooltipEvents" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IToolTip]`} name="Tooltip" id={typeof Tooltip === "object" && "id" in Tooltip ? Tooltip?.id : undefined} value={typeof Tooltip === "object" && "value" in Tooltip ? Tooltip?.value : Tooltip} /* default: ID0 */  isRaw={typeof Tooltip === "object" && "isRaw" in Tooltip && Tooltip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Equipped" id={typeof Equipped === "object" && "id" in Equipped ? Equipped?.id : undefined} value={typeof Equipped === "object" && "value" in Equipped ? Equipped?.value : Equipped} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Equipped === "object" && "isRaw" in Equipped && Equipped.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Dequipped" id={typeof Dequipped === "object" && "id" in Dequipped ? Dequipped?.id : undefined} value={typeof Dequipped === "object" && "value" in Dequipped ? Dequipped?.value : Dequipped} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Dequipped === "object" && "isRaw" in Dequipped && Dequipped.isRaw ? true : undefined} />
        </Component>
      );
    };
    