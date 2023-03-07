import { member, Member, Component } from "../../../core";
    
    export interface RawDataTooltipEventsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Tooltip?: member<any>;
Equipped?: member<any>;
Dequipped?: member<any>;
ToolUpdate?: member<any>;
PrimaryPressed?: member<any>;
PrimaryHeld?: member<any>;
PrimaryReleased?: member<any>;
SecondaryPressed?: member<any>;
SecondaryHeld?: member<any>;
SecondaryReleased?: member<any>;
    }
    
    export function RawDataTooltipEvents(props: RawDataTooltipEventsInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Tooltip,
Equipped,
Dequipped,
ToolUpdate,
PrimaryPressed,
PrimaryHeld,
PrimaryReleased,
SecondaryPressed,
SecondaryHeld,
SecondaryReleased, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Tools.RawDataTooltipEvents" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.RawDataTooltip]`} name="Tooltip" id={typeof Tooltip === "object" && "id" in Tooltip ? Tooltip?.id : undefined} value={typeof Tooltip === "object" && "value" in Tooltip ? Tooltip?.value : Tooltip} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Equipped" id={typeof Equipped === "object" && "id" in Equipped ? Equipped?.id : undefined} value={typeof Equipped === "object" && "value" in Equipped ? Equipped?.value : Equipped} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Dequipped" id={typeof Dequipped === "object" && "id" in Dequipped ? Dequipped?.id : undefined} value={typeof Dequipped === "object" && "value" in Dequipped ? Dequipped?.value : Dequipped} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="ToolUpdate" id={typeof ToolUpdate === "object" && "id" in ToolUpdate ? ToolUpdate?.id : undefined} value={typeof ToolUpdate === "object" && "value" in ToolUpdate ? ToolUpdate?.value : ToolUpdate} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="PrimaryPressed" id={typeof PrimaryPressed === "object" && "id" in PrimaryPressed ? PrimaryPressed?.id : undefined} value={typeof PrimaryPressed === "object" && "value" in PrimaryPressed ? PrimaryPressed?.value : PrimaryPressed} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="PrimaryHeld" id={typeof PrimaryHeld === "object" && "id" in PrimaryHeld ? PrimaryHeld?.id : undefined} value={typeof PrimaryHeld === "object" && "value" in PrimaryHeld ? PrimaryHeld?.value : PrimaryHeld} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="PrimaryReleased" id={typeof PrimaryReleased === "object" && "id" in PrimaryReleased ? PrimaryReleased?.id : undefined} value={typeof PrimaryReleased === "object" && "value" in PrimaryReleased ? PrimaryReleased?.value : PrimaryReleased} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="SecondaryPressed" id={typeof SecondaryPressed === "object" && "id" in SecondaryPressed ? SecondaryPressed?.id : undefined} value={typeof SecondaryPressed === "object" && "value" in SecondaryPressed ? SecondaryPressed?.value : SecondaryPressed} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="SecondaryHeld" id={typeof SecondaryHeld === "object" && "id" in SecondaryHeld ? SecondaryHeld?.id : undefined} value={typeof SecondaryHeld === "object" && "value" in SecondaryHeld ? SecondaryHeld?.value : SecondaryHeld} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="SecondaryReleased" id={typeof SecondaryReleased === "object" && "id" in SecondaryReleased ? SecondaryReleased?.id : undefined} value={typeof SecondaryReleased === "object" && "value" in SecondaryReleased ? SecondaryReleased?.value : SecondaryReleased} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    