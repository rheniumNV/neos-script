import { member, Member, Component } from "../../../core";
    
    export interface FireWhiletrueInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Pulse?: member<any>;
Condition?: member<any>;
FiringUser?: member<any>;
    }
    
    export function FireWhiletrue(props: FireWhiletrueInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Pulse,
Condition,
FiringUser, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.FireWhiletrue" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Pulse" id={typeof Pulse === "object" && "id" in Pulse ? Pulse?.id : undefined} value={typeof Pulse === "object" && "value" in Pulse ? Pulse?.value : Pulse} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Condition" id={typeof Condition === "object" && "id" in Condition ? Condition?.id : undefined} value={typeof Condition === "object" && "value" in Condition ? Condition?.value : Condition} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="FiringUser" id={typeof FiringUser === "object" && "id" in FiringUser ? FiringUser?.id : undefined} value={typeof FiringUser === "object" && "value" in FiringUser ? FiringUser?.value : FiringUser} /* default: ID0 */  />
        </Component>
      );
    };
    