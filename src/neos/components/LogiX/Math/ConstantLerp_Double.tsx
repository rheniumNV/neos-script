import { member, Member, Component } from "../../../core";
    
    export interface ConstantLerp_DoubleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Target?: member<any>;
Speed?: member<any>;
    }
    
    export function ConstantLerp_Double(props: ConstantLerp_DoubleInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Target,
Speed, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.ConstantLerp_Double" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Double]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Speed" id={typeof Speed === "object" && "id" in Speed ? Speed?.id : undefined} value={typeof Speed === "object" && "value" in Speed ? Speed?.value : Speed} /* default: ID0 */  />
        </Component>
      );
    };
    