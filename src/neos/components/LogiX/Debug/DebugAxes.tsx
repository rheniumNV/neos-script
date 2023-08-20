import { member, Member, Component } from "../../../core";
    
    export interface DebugAxesInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Position?: member<any>;
Rotation?: member<[number, number, number, number]>;
Length?: member<any>;
RightColor?: member<any>;
UpColor?: member<any>;
ForwardColor?: member<any>;
Duration?: member<any>;
OnDisplay?: member<any>;
    }
    
    export function DebugAxes(props: DebugAxesInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Position,
Rotation,
Length,
RightColor,
UpColor,
ForwardColor,
Duration,
OnDisplay, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Debug.DebugAxes" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Position" id={typeof Position === "object" && "id" in Position ? Position?.id : undefined} value={typeof Position === "object" && "value" in Position ? Position?.value : Position} /* default: ID0 */  isRaw={typeof Position === "object" && "isRaw" in Position && Position.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.floatQ]`} name="Rotation" id={typeof Rotation === "object" && "id" in Rotation ? Rotation?.id : undefined} value={typeof Rotation === "object" && "value" in Rotation ? Rotation?.value : Rotation} /* default: ID0 */  isRaw={typeof Rotation === "object" && "isRaw" in Rotation && Rotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Length" id={typeof Length === "object" && "id" in Length ? Length?.id : undefined} value={typeof Length === "object" && "value" in Length ? Length?.value : Length} /* default: ID0 */  isRaw={typeof Length === "object" && "isRaw" in Length && Length.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.color]`} name="RightColor" id={typeof RightColor === "object" && "id" in RightColor ? RightColor?.id : undefined} value={typeof RightColor === "object" && "value" in RightColor ? RightColor?.value : RightColor} /* default: ID0 */  isRaw={typeof RightColor === "object" && "isRaw" in RightColor && RightColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.color]`} name="UpColor" id={typeof UpColor === "object" && "id" in UpColor ? UpColor?.id : undefined} value={typeof UpColor === "object" && "value" in UpColor ? UpColor?.value : UpColor} /* default: ID0 */  isRaw={typeof UpColor === "object" && "isRaw" in UpColor && UpColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.color]`} name="ForwardColor" id={typeof ForwardColor === "object" && "id" in ForwardColor ? ForwardColor?.id : undefined} value={typeof ForwardColor === "object" && "value" in ForwardColor ? ForwardColor?.value : ForwardColor} /* default: ID0 */  isRaw={typeof ForwardColor === "object" && "isRaw" in ForwardColor && ForwardColor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Duration" id={typeof Duration === "object" && "id" in Duration ? Duration?.id : undefined} value={typeof Duration === "object" && "value" in Duration ? Duration?.value : Duration} /* default: ID0 */  isRaw={typeof Duration === "object" && "isRaw" in Duration && Duration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDisplay" id={typeof OnDisplay === "object" && "id" in OnDisplay ? OnDisplay?.id : undefined} value={typeof OnDisplay === "object" && "value" in OnDisplay ? OnDisplay?.value : OnDisplay} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnDisplay === "object" && "isRaw" in OnDisplay && OnDisplay.isRaw ? true : undefined} />
        </Component>
      );
    };
    