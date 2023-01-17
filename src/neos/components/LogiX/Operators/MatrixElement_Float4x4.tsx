import { member, Member, Component } from "../../../core";
    
    export interface MatrixElement_Float4x4Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Matrix?: member<any>;
Row?: member<any>;
Column?: member<any>;
    }
    
    export function MatrixElement_Float4x4(props: MatrixElement_Float4x4Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Matrix,
Row,
Column, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.MatrixElement_Float4x4" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float4x4]`} name="Matrix" id={typeof Matrix === "object" && "id" in Matrix ? Matrix?.id : undefined} value={typeof Matrix === "object" && "value" in Matrix ? Matrix?.value : Matrix} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Row" id={typeof Row === "object" && "id" in Row ? Row?.id : undefined} value={typeof Row === "object" && "value" in Row ? Row?.value : Row} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Column" id={typeof Column === "object" && "id" in Column ? Column?.id : undefined} value={typeof Column === "object" && "value" in Column ? Column?.value : Column} /* default: ID0 */  />
        </Component>
      );
    };
    