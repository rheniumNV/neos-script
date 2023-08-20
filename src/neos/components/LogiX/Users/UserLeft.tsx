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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnLeft" id={typeof OnLeft === "object" && "id" in OnLeft ? OnLeft?.id : undefined} value={typeof OnLeft === "object" && "value" in OnLeft ? OnLeft?.value : OnLeft} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnLeft === "object" && "isRaw" in OnLeft && OnLeft.isRaw ? true : undefined} />
        </Component>
      );
    };
    