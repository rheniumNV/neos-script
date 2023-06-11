import { member, Member, Component } from "../../../core";
    
    export interface DebugSphereInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Point?: member<any>;
Radius?: member<any>;
Color?: member<any>;
Duration?: member<any>;
OnDisplay?: member<any>;
    }
    
    export function DebugSphere(props: DebugSphereInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Point,
Radius,
Color,
Duration,
OnDisplay, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Debug.DebugSphere" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Point" id={typeof Point === "object" && "id" in Point ? Point?.id : undefined} value={typeof Point === "object" && "value" in Point ? Point?.value : Point} /* default: ID0 */  isRaw={typeof Point === "object" && "isRaw" in Point && Point.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: ID0 */  isRaw={typeof Radius === "object" && "isRaw" in Radius && Radius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: ID0 */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Duration" id={typeof Duration === "object" && "id" in Duration ? Duration?.id : undefined} value={typeof Duration === "object" && "value" in Duration ? Duration?.value : Duration} /* default: ID0 */  isRaw={typeof Duration === "object" && "isRaw" in Duration && Duration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDisplay" id={typeof OnDisplay === "object" && "id" in OnDisplay ? OnDisplay?.id : undefined} value={typeof OnDisplay === "object" && "value" in OnDisplay ? OnDisplay?.value : OnDisplay} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnDisplay === "object" && "isRaw" in OnDisplay && OnDisplay.isRaw ? true : undefined} />
        </Component>
      );
    };
    