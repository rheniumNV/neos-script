import { member, Member, Component } from "../../../core";
    
    export interface RaycasterInput {
        
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
Root?: member<any>;
    }
    
    export function Raycaster(props: RaycasterInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Origin,
Direction,
MaxDistance,
HitTriggers,
UsersOnly,
Root, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Physics.Raycaster" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Origin" id={typeof Origin === "object" && "id" in Origin ? Origin?.id : undefined} value={typeof Origin === "object" && "value" in Origin ? Origin?.value : Origin} /* default: ID0 */  isRaw={typeof Origin === "object" && "isRaw" in Origin && Origin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Direction" id={typeof Direction === "object" && "id" in Direction ? Direction?.id : undefined} value={typeof Direction === "object" && "value" in Direction ? Direction?.value : Direction} /* default: ID0 */  isRaw={typeof Direction === "object" && "isRaw" in Direction && Direction.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="MaxDistance" id={typeof MaxDistance === "object" && "id" in MaxDistance ? MaxDistance?.id : undefined} value={typeof MaxDistance === "object" && "value" in MaxDistance ? MaxDistance?.value : MaxDistance} /* default: ID0 */  isRaw={typeof MaxDistance === "object" && "isRaw" in MaxDistance && MaxDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="HitTriggers" id={typeof HitTriggers === "object" && "id" in HitTriggers ? HitTriggers?.id : undefined} value={typeof HitTriggers === "object" && "value" in HitTriggers ? HitTriggers?.value : HitTriggers} /* default: ID0 */  isRaw={typeof HitTriggers === "object" && "isRaw" in HitTriggers && HitTriggers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="UsersOnly" id={typeof UsersOnly === "object" && "id" in UsersOnly ? UsersOnly?.id : undefined} value={typeof UsersOnly === "object" && "value" in UsersOnly ? UsersOnly?.value : UsersOnly} /* default: ID0 */  isRaw={typeof UsersOnly === "object" && "isRaw" in UsersOnly && UsersOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Root" id={typeof Root === "object" && "id" in Root ? Root?.id : undefined} value={typeof Root === "object" && "value" in Root ? Root?.value : Root} /* default: ID0 */  isRaw={typeof Root === "object" && "isRaw" in Root && Root.isRaw ? true : undefined} />
        </Component>
      );
    };
    