import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface WebsocketConnectInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Client?: member<any>;
URL?: member<any>;
HandlingUser?: member<any>;
OnConnectStart?: member<any>;
    }
    
    export function WebsocketConnect(props: WebsocketConnectInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Client,
URL,
HandlingUser,
OnConnectStart, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Network.WebsocketConnect" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.WebsocketClient]`} name="Client" id={typeof Client === "object" && "id" in Client ? Client?.id : undefined} value={typeof Client === "object" && "value" in Client ? Client?.value : Client} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="HandlingUser" id={typeof HandlingUser === "object" && "id" in HandlingUser ? HandlingUser?.id : undefined} value={typeof HandlingUser === "object" && "value" in HandlingUser ? HandlingUser?.value : HandlingUser} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnConnectStart" id={typeof OnConnectStart === "object" && "id" in OnConnectStart ? OnConnectStart?.id : undefined} value={typeof OnConnectStart === "object" && "value" in OnConnectStart ? OnConnectStart?.value : OnConnectStart} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    