import { member, Member, Component } from "../../core";
    
    export interface WebsocketClientInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
URL?: member<any>;
HandlingUser?: member<any>;
AccessReason?: member<any>;
ConnectRetryInterval?: member<number>;
IsConnected?: member<boolean>;
    }
    
    export function WebsocketClient(props: WebsocketClientInput){
      const { id, persistentId, updateOrder, Enabled,
URL,
HandlingUser,
AccessReason,
ConnectRetryInterval,
IsConnected, } = props;
    
      return (
        <Component type="FrooxEngine.WebsocketClient" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.UserRef`} name="HandlingUser" id={typeof HandlingUser === "object" && "id" in HandlingUser ? HandlingUser?.id : undefined} value={typeof HandlingUser === "object" && "value" in HandlingUser ? HandlingUser?.value : HandlingUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="AccessReason" id={typeof AccessReason === "object" && "id" in AccessReason ? AccessReason?.id : undefined} value={typeof AccessReason === "object" && "value" in AccessReason ? AccessReason?.value : AccessReason} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ConnectRetryInterval" id={typeof ConnectRetryInterval === "object" && "id" in ConnectRetryInterval ? ConnectRetryInterval?.id : undefined} value={typeof ConnectRetryInterval === "object" && "value" in ConnectRetryInterval ? ConnectRetryInterval?.value : ConnectRetryInterval} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsConnected" id={typeof IsConnected === "object" && "id" in IsConnected ? IsConnected?.id : undefined} value={typeof IsConnected === "object" && "value" in IsConnected ? IsConnected?.value : IsConnected} /* default: false */  />
        </Component>
      );
    };
    