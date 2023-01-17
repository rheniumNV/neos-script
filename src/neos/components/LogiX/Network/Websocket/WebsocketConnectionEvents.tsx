import { member, Member, Component } from "../../../../core";
    
    export interface WebsocketConnectionEventsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Client?: member<any>;
Connected?: member<any>;
Disconnected?: member<any>;
    }
    
    export function WebsocketConnectionEvents(props: WebsocketConnectionEventsInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Client,
Connected,
Disconnected, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Network.WebsocketConnectionEvents" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.WebsocketClient]`} name="Client" id={typeof Client === "object" && "id" in Client ? Client?.id : undefined} value={typeof Client === "object" && "value" in Client ? Client?.value : Client} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Connected" id={typeof Connected === "object" && "id" in Connected ? Connected?.id : undefined} value={typeof Connected === "object" && "value" in Connected ? Connected?.value : Connected} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Disconnected" id={typeof Disconnected === "object" && "id" in Disconnected ? Disconnected?.id : undefined} value={typeof Disconnected === "object" && "value" in Disconnected ? Disconnected?.value : Disconnected} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    