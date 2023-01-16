import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface NotificationPanelInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DisplayDuration?: member<number>;
_canvas?: member<any>;
_notificationClip?: member<any>;
_inviteClip?: member<any>;
_creditsSendClip?: member<any>;
_creditsReceiveClip?: member<any>;
    }
    
    export function NotificationPanel(props: NotificationPanelInput){
      const { id, persistentId, updateOrder, Enabled,
DisplayDuration,
_canvas,
_notificationClip,
_inviteClip,
_creditsSendClip,
_creditsReceiveClip, } = props;
    
      return (
        <Component type="FrooxEngine.NotificationPanel" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DisplayDuration" id={typeof DisplayDuration === "object" && "id" in DisplayDuration ? DisplayDuration?.id : undefined} value={typeof DisplayDuration === "object" && "value" in DisplayDuration ? DisplayDuration?.value : DisplayDuration} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="_notificationClip" id={typeof _notificationClip === "object" && "id" in _notificationClip ? _notificationClip?.id : undefined} value={typeof _notificationClip === "object" && "value" in _notificationClip ? _notificationClip?.value : _notificationClip} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="_inviteClip" id={typeof _inviteClip === "object" && "id" in _inviteClip ? _inviteClip?.id : undefined} value={typeof _inviteClip === "object" && "value" in _inviteClip ? _inviteClip?.value : _inviteClip} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="_creditsSendClip" id={typeof _creditsSendClip === "object" && "id" in _creditsSendClip ? _creditsSendClip?.id : undefined} value={typeof _creditsSendClip === "object" && "value" in _creditsSendClip ? _creditsSendClip?.value : _creditsSendClip} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="_creditsReceiveClip" id={typeof _creditsReceiveClip === "object" && "id" in _creditsReceiveClip ? _creditsReceiveClip?.id : undefined} value={typeof _creditsReceiveClip === "object" && "value" in _creditsReceiveClip ? _creditsReceiveClip?.value : _creditsReceiveClip} /* default: ID0 */  />
        </Component>
      );
    };
    