import { member, Member, Component } from "../../../../core";
    
    export interface TrajectoryNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
InitialVelocity?: member<any>;
Gravity?: member<any>;
Drag?: member<any>;
Time?: member<any>;
    }
    
    export function TrajectoryNode(props: TrajectoryNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
InitialVelocity,
Gravity,
Drag,
Time, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.TrajectoryNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="InitialVelocity" id={typeof InitialVelocity === "object" && "id" in InitialVelocity ? InitialVelocity?.id : undefined} value={typeof InitialVelocity === "object" && "value" in InitialVelocity ? InitialVelocity?.value : InitialVelocity} /* default: ID0 */  isRaw={typeof InitialVelocity === "object" && "isRaw" in InitialVelocity && InitialVelocity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Gravity" id={typeof Gravity === "object" && "id" in Gravity ? Gravity?.id : undefined} value={typeof Gravity === "object" && "value" in Gravity ? Gravity?.value : Gravity} /* default: ID0 */  isRaw={typeof Gravity === "object" && "isRaw" in Gravity && Gravity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Drag" id={typeof Drag === "object" && "id" in Drag ? Drag?.id : undefined} value={typeof Drag === "object" && "value" in Drag ? Drag?.value : Drag} /* default: ID0 */  isRaw={typeof Drag === "object" && "isRaw" in Drag && Drag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Time" id={typeof Time === "object" && "id" in Time ? Time?.id : undefined} value={typeof Time === "object" && "value" in Time ? Time?.value : Time} /* default: ID0 */  isRaw={typeof Time === "object" && "isRaw" in Time && Time.isRaw ? true : undefined} />
        </Component>
      );
    };
    