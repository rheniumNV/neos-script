import { member, Member, Component } from "../../../core";
    
    export interface Cube_DoubleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
X?: member<any>;
    }
    
    export function Cube_Double(props: Cube_DoubleInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
X, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.Cube_Double" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Double]`} name="X" id={typeof X === "object" && "id" in X ? X?.id : undefined} value={typeof X === "object" && "value" in X ? X?.value : X} /* default: ID0 */  isRaw={typeof X === "object" && "isRaw" in X && X.isRaw ? true : undefined} />
        </Component>
      );
    };
    