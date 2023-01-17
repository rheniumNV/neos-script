import { member, Member, Component } from "../../../core";
    
    export interface TimerNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Pulse?: member<any>;
Interval?: member<any>;
UpdatingUser?: member<any>;
    }
    
    export function TimerNode(props: TimerNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Pulse,
Interval,
UpdatingUser, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.TimerNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Pulse" id={typeof Pulse === "object" && "id" in Pulse ? Pulse?.id : undefined} value={typeof Pulse === "object" && "value" in Pulse ? Pulse?.value : Pulse} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Interval" id={typeof Interval === "object" && "id" in Interval ? Interval?.id : undefined} value={typeof Interval === "object" && "value" in Interval ? Interval?.value : Interval} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="UpdatingUser" id={typeof UpdatingUser === "object" && "id" in UpdatingUser ? UpdatingUser?.id : undefined} value={typeof UpdatingUser === "object" && "value" in UpdatingUser ? UpdatingUser?.value : UpdatingUser} /* default: ID0 */  />
        </Component>
      );
    };
    