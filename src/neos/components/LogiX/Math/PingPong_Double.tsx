import { member, Member, Component } from "../../../core";
    
    export interface PingPong_DoubleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
N?: member<any>;
Length?: member<any>;
    }
    
    export function PingPong_Double(props: PingPong_DoubleInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
N,
Length, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.PingPong_Double" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Double]`} name="N" id={typeof N === "object" && "id" in N ? N?.id : undefined} value={typeof N === "object" && "value" in N ? N?.value : N} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Double]`} name="Length" id={typeof Length === "object" && "id" in Length ? Length?.id : undefined} value={typeof Length === "object" && "value" in Length ? Length?.value : Length} /* default: ID0 */  />
        </Component>
      );
    };
    