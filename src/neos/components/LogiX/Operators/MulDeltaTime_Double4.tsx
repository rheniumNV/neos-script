import { member, Member, Component } from "../../../core";
    
    export interface MulDeltaTime_Double4Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
A?: member<any>;
    }
    
    export function MulDeltaTime_Double4(props: MulDeltaTime_Double4Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
A, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.MulDeltaTime_Double4" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.double4]`} name="A" id={typeof A === "object" && "id" in A ? A?.id : undefined} value={typeof A === "object" && "value" in A ? A?.value : A} /* default: ID0 */  />
        </Component>
      );
    };
    