import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface WebsocketTextMessageSenderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Client?: member<any>;
Data?: member<any>;
OnSendStart?: member<any>;
OnSent?: member<any>;
OnSendError?: member<any>;
    }
    
    export function WebsocketTextMessageSender(props: WebsocketTextMessageSenderInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Client,
Data,
OnSendStart,
OnSent,
OnSendError, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Network.WebsocketTextMessageSender" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.WebsocketClient]`} name="Client" id={typeof Client === "object" && "id" in Client ? Client?.id : undefined} value={typeof Client === "object" && "value" in Client ? Client?.value : Client} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Data" id={typeof Data === "object" && "id" in Data ? Data?.id : undefined} value={typeof Data === "object" && "value" in Data ? Data?.value : Data} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSendStart" id={typeof OnSendStart === "object" && "id" in OnSendStart ? OnSendStart?.id : undefined} value={typeof OnSendStart === "object" && "value" in OnSendStart ? OnSendStart?.value : OnSendStart} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSent" id={typeof OnSent === "object" && "id" in OnSent ? OnSent?.id : undefined} value={typeof OnSent === "object" && "value" in OnSent ? OnSent?.value : OnSent} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSendError" id={typeof OnSendError === "object" && "id" in OnSendError ? OnSendError?.id : undefined} value={typeof OnSendError === "object" && "value" in OnSendError ? OnSendError?.value : OnSendError} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    