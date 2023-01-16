import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface POST_StringInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
URL?: member<any>;
String?: member<any>;
MediaType?: member<any>;
OnSent?: member<any>;
OnResponse?: member<any>;
OnError?: member<any>;
    }
    
    export function POST_String(props: POST_StringInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
URL,
String,
MediaType,
OnSent,
OnResponse,
OnError, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Network.POST_String" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="String" id={typeof String === "object" && "id" in String ? String?.id : undefined} value={typeof String === "object" && "value" in String ? String?.value : String} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="MediaType" id={typeof MediaType === "object" && "id" in MediaType ? MediaType?.id : undefined} value={typeof MediaType === "object" && "value" in MediaType ? MediaType?.value : MediaType} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnSent" id={typeof OnSent === "object" && "id" in OnSent ? OnSent?.id : undefined} value={typeof OnSent === "object" && "value" in OnSent ? OnSent?.value : OnSent} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnResponse" id={typeof OnResponse === "object" && "id" in OnResponse ? OnResponse?.id : undefined} value={typeof OnResponse === "object" && "value" in OnResponse ? OnResponse?.value : OnResponse} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnError" id={typeof OnError === "object" && "id" in OnError ? OnError?.id : undefined} value={typeof OnError === "object" && "value" in OnError ? OnError?.value : OnError} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    