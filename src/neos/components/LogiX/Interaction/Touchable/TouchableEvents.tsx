import { member, Member, Component } from "../../../../core";
    
    export interface TouchableEventsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
EventSource?: member<any>;
OnEvent?: member<any>;
    }
    
    export function TouchableEvents(props: TouchableEventsInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
EventSource,
OnEvent, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Interaction.TouchableEvents" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.TouchEventRelay]`} name="EventSource" id={typeof EventSource === "object" && "id" in EventSource ? EventSource?.id : undefined} value={typeof EventSource === "object" && "value" in EventSource ? EventSource?.value : EventSource} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnEvent" id={typeof OnEvent === "object" && "id" in OnEvent ? OnEvent?.id : undefined} value={typeof OnEvent === "object" && "value" in OnEvent ? OnEvent?.value : OnEvent} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    