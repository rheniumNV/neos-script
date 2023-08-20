import { member, Member, Component } from "../../../core";
    
    export interface SmoothLerp_Float4Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Target?: member<any>;
Speed?: member<any>;
    }
    
    export function SmoothLerp_Float4(props: SmoothLerp_Float4Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Target,
Speed, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.SmoothLerp_Float4" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float4]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Speed" id={typeof Speed === "object" && "id" in Speed ? Speed?.id : undefined} value={typeof Speed === "object" && "value" in Speed ? Speed?.value : Speed} /* default: ID0 */  isRaw={typeof Speed === "object" && "isRaw" in Speed && Speed.isRaw ? true : undefined} />
        </Component>
      );
    };
    