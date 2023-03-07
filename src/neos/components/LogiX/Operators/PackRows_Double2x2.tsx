import { member, Member, Component } from "../../../core";
    
    export interface PackRows_Double2x2Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Row0?: member<any>;
Row1?: member<any>;
    }
    
    export function PackRows_Double2x2(props: PackRows_Double2x2Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Row0,
Row1, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.PackRows_Double2x2" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.double2]`} name="Row0" id={typeof Row0 === "object" && "id" in Row0 ? Row0?.id : undefined} value={typeof Row0 === "object" && "value" in Row0 ? Row0?.value : Row0} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.double2]`} name="Row1" id={typeof Row1 === "object" && "id" in Row1 ? Row1?.id : undefined} value={typeof Row1 === "object" && "value" in Row1 ? Row1?.value : Row1} /* default: ID0 */  />
        </Component>
      );
    };
    