import { member, Member, Component } from "../../../core";
    
    export interface RaycastOneInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Origin?: member<any>;
Direction?: member<any>;
MaxDistance?: member<any>;
HitTriggers?: member<any>;
UsersOnly?: member<any>;
DebugDuration?: member<any>;
Root?: member<any>;
OnHit?: member<any>;
OnMiss?: member<any>;
    }
    
    export function RaycastOne(props: RaycastOneInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Origin,
Direction,
MaxDistance,
HitTriggers,
UsersOnly,
DebugDuration,
Root,
OnHit,
OnMiss, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Physics.RaycastOne" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Origin" id={typeof Origin === "object" && "id" in Origin ? Origin?.id : undefined} value={typeof Origin === "object" && "value" in Origin ? Origin?.value : Origin} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Direction" id={typeof Direction === "object" && "id" in Direction ? Direction?.id : undefined} value={typeof Direction === "object" && "value" in Direction ? Direction?.value : Direction} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="MaxDistance" id={typeof MaxDistance === "object" && "id" in MaxDistance ? MaxDistance?.id : undefined} value={typeof MaxDistance === "object" && "value" in MaxDistance ? MaxDistance?.value : MaxDistance} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="HitTriggers" id={typeof HitTriggers === "object" && "id" in HitTriggers ? HitTriggers?.id : undefined} value={typeof HitTriggers === "object" && "value" in HitTriggers ? HitTriggers?.value : HitTriggers} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="UsersOnly" id={typeof UsersOnly === "object" && "id" in UsersOnly ? UsersOnly?.id : undefined} value={typeof UsersOnly === "object" && "value" in UsersOnly ? UsersOnly?.value : UsersOnly} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="DebugDuration" id={typeof DebugDuration === "object" && "id" in DebugDuration ? DebugDuration?.id : undefined} value={typeof DebugDuration === "object" && "value" in DebugDuration ? DebugDuration?.value : DebugDuration} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Root" id={typeof Root === "object" && "id" in Root ? Root?.id : undefined} value={typeof Root === "object" && "value" in Root ? Root?.value : Root} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnHit" id={typeof OnHit === "object" && "id" in OnHit ? OnHit?.id : undefined} value={typeof OnHit === "object" && "value" in OnHit ? OnHit?.value : OnHit} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnMiss" id={typeof OnMiss === "object" && "id" in OnMiss ? OnMiss?.id : undefined} value={typeof OnMiss === "object" && "value" in OnMiss ? OnMiss?.value : OnMiss} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    