import { member, Member, Component } from "../../../core";
    
    export interface LogN_Double3Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
N?: member<any>;
Base?: member<any>;
    }
    
    export function LogN_Double3(props: LogN_Double3Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
N,
Base, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.LogN_Double3" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.double3]`} name="N" id={typeof N === "object" && "id" in N ? N?.id : undefined} value={typeof N === "object" && "value" in N ? N?.value : N} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.double3]`} name="Base" id={typeof Base === "object" && "id" in Base ? Base?.id : undefined} value={typeof Base === "object" && "value" in Base ? Base?.value : Base} /* default: ID0 */  />
        </Component>
      );
    };
    