import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AvatarAnchorTouchTriggerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Anchor?: member<any>;
EnterText?: member<any>;
ExitText?: member<any>;
Enter?: member<boolean>;
Exit?: member<boolean>;
AcceptOutOfSightTouch?: member<boolean>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
Vibrate?: member<any>;
    }
    
    export function AvatarAnchorTouchTrigger(props: AvatarAnchorTouchTriggerInput){
      const { id, persistentId, updateOrder, Enabled,
Anchor,
EnterText,
ExitText,
Enter,
Exit,
AcceptOutOfSightTouch,
AcceptPhysicalTouch,
AcceptRemoteTouch,
Vibrate, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarAnchorTouchTrigger" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarAnchor]`} name="Anchor" id={typeof Anchor === "object" && "id" in Anchor ? Anchor?.id : undefined} value={typeof Anchor === "object" && "value" in Anchor ? Anchor?.value : Anchor} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="EnterText" id={typeof EnterText === "object" && "id" in EnterText ? EnterText?.id : undefined} value={typeof EnterText === "object" && "value" in EnterText ? EnterText?.value : EnterText} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="ExitText" id={typeof ExitText === "object" && "id" in ExitText ? ExitText?.id : undefined} value={typeof ExitText === "object" && "value" in ExitText ? ExitText?.value : ExitText} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enter" id={typeof Enter === "object" && "id" in Enter ? Enter?.id : undefined} value={typeof Enter === "object" && "value" in Enter ? Enter?.value : Enter} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Exit" id={typeof Exit === "object" && "id" in Exit ? Exit?.id : undefined} value={typeof Exit === "object" && "value" in Exit ? Exit?.value : Exit} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptOutOfSightTouch" id={typeof AcceptOutOfSightTouch === "object" && "id" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.id : undefined} value={typeof AcceptOutOfSightTouch === "object" && "value" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.value : AcceptOutOfSightTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="Vibrate" id={typeof Vibrate === "object" && "id" in Vibrate ? Vibrate?.id : undefined} value={typeof Vibrate === "object" && "value" in Vibrate ? Vibrate?.value : Vibrate} /* default: None */  />
        </Component>
      );
    };
    