import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface TOTP_DialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_swapRegion?: member<any>;
_state?: member<any>;
_codeField?: member<any>;
_messageText?: member<any>;
    }
    
    export function TOTP_Dialog(props: TOTP_DialogInput){
      const { id, persistentId, updateOrder, Enabled,
_swapRegion,
_state,
_codeField,
_messageText, } = props;
    
      return (
        <Component type="FrooxEngine.TOTP_Dialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.SlideSwapRegion]`} name="_swapRegion" id={typeof _swapRegion === "object" && "id" in _swapRegion ? _swapRegion?.id : undefined} value={typeof _swapRegion === "object" && "value" in _swapRegion ? _swapRegion?.value : _swapRegion} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TOTP_Dialog+State]`} name="_state" id={typeof _state === "object" && "id" in _state ? _state?.id : undefined} value={typeof _state === "object" && "value" in _state ? _state?.value : _state} /* default: Initializing */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_codeField" id={typeof _codeField === "object" && "id" in _codeField ? _codeField?.id : undefined} value={typeof _codeField === "object" && "value" in _codeField ? _codeField?.value : _codeField} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_messageText" id={typeof _messageText === "object" && "id" in _messageText ? _messageText?.id : undefined} value={typeof _messageText === "object" && "value" in _messageText ? _messageText?.value : _messageText} /* default: ID0 */  />
        </Component>
      );
    };
    