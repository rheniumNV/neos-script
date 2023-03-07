import { member, Member, Component } from "../../../core";
    
    export interface UserLeftInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
OnLeft?: member<any>;
    }
    
    export function UserLeft(props: UserLeftInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
OnLeft, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.UserLeft" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnLeft" id={typeof OnLeft === "object" && "id" in OnLeft ? OnLeft?.id : undefined} value={typeof OnLeft === "object" && "value" in OnLeft ? OnLeft?.value : OnLeft} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    