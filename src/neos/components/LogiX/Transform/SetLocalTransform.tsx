import { member, Member, Component } from "../../../core";
    
    export interface SetLocalTransformInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Instance?: member<any>;
Position?: member<any>;
Rotation?: member<[number, number, number, number]>;
Scale?: member<any>;
OnDone?: member<any>;
    }
    
    export function SetLocalTransform(props: SetLocalTransformInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Instance,
Position,
Rotation,
Scale,
OnDone, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.SetLocalTransform" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Instance" id={typeof Instance === "object" && "id" in Instance ? Instance?.id : undefined} value={typeof Instance === "object" && "value" in Instance ? Instance?.value : Instance} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Position" id={typeof Position === "object" && "id" in Position ? Position?.id : undefined} value={typeof Position === "object" && "value" in Position ? Position?.value : Position} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.floatQ]`} name="Rotation" id={typeof Rotation === "object" && "id" in Rotation ? Rotation?.id : undefined} value={typeof Rotation === "object" && "value" in Rotation ? Rotation?.value : Rotation} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Scale" id={typeof Scale === "object" && "id" in Scale ? Scale?.id : undefined} value={typeof Scale === "object" && "value" in Scale ? Scale?.value : Scale} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDone" id={typeof OnDone === "object" && "id" in OnDone ? OnDone?.id : undefined} value={typeof OnDone === "object" && "value" in OnDone ? OnDone?.value : OnDone} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    