import { member, Member, Component } from "../../../core";
    
    export interface UnpackColumns_Float3x3Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Matrix?: member<any>;
    }
    
    export function UnpackColumns_Float3x3(props: UnpackColumns_Float3x3Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Matrix, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.UnpackColumns_Float3x3" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3x3]`} name="Matrix" id={typeof Matrix === "object" && "id" in Matrix ? Matrix?.id : undefined} value={typeof Matrix === "object" && "value" in Matrix ? Matrix?.value : Matrix} /* default: ID0 */  />
        </Component>
      );
    };
    