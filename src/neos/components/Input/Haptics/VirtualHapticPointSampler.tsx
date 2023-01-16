import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface VirtualHapticPointSamplerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Radius?: member<number>;
ShowDebugVisual?: member<boolean>;
_debugVisual?: member<any>;
Force?: member<any>;
Pain?: member<any>;
Temperature?: member<any>;
Vibration?: member<any>;
    }
    
    export function VirtualHapticPointSampler(props: VirtualHapticPointSamplerInput){
      const { id, persistentId, updateOrder, Enabled,
Radius,
ShowDebugVisual,
_debugVisual,
Force,
Pain,
Temperature,
Vibration, } = props;
    
      return (
        <Component type="FrooxEngine.VirtualHapticPointSampler" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowDebugVisual-ID" id={typeof ShowDebugVisual === "object" && "id" in ShowDebugVisual ? ShowDebugVisual?.id : undefined} value={typeof ShowDebugVisual === "object" && "value" in ShowDebugVisual ? ShowDebugVisual?.value : ShowDebugVisual} /* default: false */ idOnly />
<Member type={`FrooxEngine.SlotCleanupRef\`1[FrooxEngine.OverlayFresnelMaterial]`} name="_debugVisual" id={typeof _debugVisual === "object" && "id" in _debugVisual ? _debugVisual?.id : undefined} value={typeof _debugVisual === "object" && "value" in _debugVisual ? _debugVisual?.value : _debugVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="Force" id={typeof Force === "object" && "id" in Force ? Force?.id : undefined} value={typeof Force === "object" && "value" in Force ? Force?.value : Force} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="Pain" id={typeof Pain === "object" && "id" in Pain ? Pain?.id : undefined} value={typeof Pain === "object" && "value" in Pain ? Pain?.value : Pain} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="Temperature" id={typeof Temperature === "object" && "id" in Temperature ? Temperature?.id : undefined} value={typeof Temperature === "object" && "value" in Temperature ? Temperature?.value : Temperature} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="Vibration" id={typeof Vibration === "object" && "id" in Vibration ? Vibration?.id : undefined} value={typeof Vibration === "object" && "value" in Vibration ? Vibration?.value : Vibration} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
        </Component>
      );
    };
    