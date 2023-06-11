import { member, Member, Component } from "../../../core";
    
    export interface DebugVectorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Position?: member<any>;
Vector?: member<any>;
Color?: member<any>;
RadiusRatio?: member<any>;
Duration?: member<any>;
OnDisplay?: member<any>;
    }
    
    export function DebugVector(props: DebugVectorInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Position,
Vector,
Color,
RadiusRatio,
Duration,
OnDisplay, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Debug.DebugVector" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Position" id={typeof Position === "object" && "id" in Position ? Position?.id : undefined} value={typeof Position === "object" && "value" in Position ? Position?.value : Position} /* default: ID0 */  isRaw={typeof Position === "object" && "isRaw" in Position && Position.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Vector" id={typeof Vector === "object" && "id" in Vector ? Vector?.id : undefined} value={typeof Vector === "object" && "value" in Vector ? Vector?.value : Vector} /* default: ID0 */  isRaw={typeof Vector === "object" && "isRaw" in Vector && Vector.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: ID0 */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="RadiusRatio" id={typeof RadiusRatio === "object" && "id" in RadiusRatio ? RadiusRatio?.id : undefined} value={typeof RadiusRatio === "object" && "value" in RadiusRatio ? RadiusRatio?.value : RadiusRatio} /* default: ID0 */  isRaw={typeof RadiusRatio === "object" && "isRaw" in RadiusRatio && RadiusRatio.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Duration" id={typeof Duration === "object" && "id" in Duration ? Duration?.id : undefined} value={typeof Duration === "object" && "value" in Duration ? Duration?.value : Duration} /* default: ID0 */  isRaw={typeof Duration === "object" && "isRaw" in Duration && Duration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDisplay" id={typeof OnDisplay === "object" && "id" in OnDisplay ? OnDisplay?.id : undefined} value={typeof OnDisplay === "object" && "value" in OnDisplay ? OnDisplay?.value : OnDisplay} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnDisplay === "object" && "isRaw" in OnDisplay && OnDisplay.isRaw ? true : undefined} />
        </Component>
      );
    };
    