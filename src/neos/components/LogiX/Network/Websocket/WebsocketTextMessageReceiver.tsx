import { member, Member, Component } from "../../../../core";
    
    export interface WebsocketTextMessageReceiverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Client?: member<any>;
Received?: member<any>;
    }
    
    export function WebsocketTextMessageReceiver(props: WebsocketTextMessageReceiverInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Client,
Received, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Network.WebsocketTextMessageReceiver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.WebsocketClient]`} name="Client" id={typeof Client === "object" && "id" in Client ? Client?.id : undefined} value={typeof Client === "object" && "value" in Client ? Client?.value : Client} /* default: ID0 */  isRaw={typeof Client === "object" && "isRaw" in Client && Client.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Received" id={typeof Received === "object" && "id" in Received ? Received?.id : undefined} value={typeof Received === "object" && "value" in Received ? Received?.value : Received} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof Received === "object" && "isRaw" in Received && Received.isRaw ? true : undefined} />
        </Component>
      );
    };
    