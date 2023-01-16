import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface UserJoinedInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
OnJoined?: member<any>;
    }
    
    export function UserJoined(props: UserJoinedInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
OnJoined, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.UserJoined" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnJoined" id={typeof OnJoined === "object" && "id" in OnJoined ? OnJoined?.id : undefined} value={typeof OnJoined === "object" && "value" in OnJoined ? OnJoined?.value : OnJoined} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    