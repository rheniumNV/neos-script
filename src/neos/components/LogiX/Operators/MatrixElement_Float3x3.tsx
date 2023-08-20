import { member, Member, Component } from "../../../core";
    
    export interface MatrixElement_Float3x3Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Matrix?: member<any>;
Row?: member<any>;
Column?: member<any>;
    }
    
    export function MatrixElement_Float3x3(props: MatrixElement_Float3x3Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Matrix,
Row,
Column, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.MatrixElement_Float3x3" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3x3]`} name="Matrix" id={typeof Matrix === "object" && "id" in Matrix ? Matrix?.id : undefined} value={typeof Matrix === "object" && "value" in Matrix ? Matrix?.value : Matrix} /* default: ID0 */  isRaw={typeof Matrix === "object" && "isRaw" in Matrix && Matrix.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Row" id={typeof Row === "object" && "id" in Row ? Row?.id : undefined} value={typeof Row === "object" && "value" in Row ? Row?.value : Row} /* default: ID0 */  isRaw={typeof Row === "object" && "isRaw" in Row && Row.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Column" id={typeof Column === "object" && "id" in Column ? Column?.id : undefined} value={typeof Column === "object" && "value" in Column ? Column?.value : Column} /* default: ID0 */  isRaw={typeof Column === "object" && "isRaw" in Column && Column.isRaw ? true : undefined} />
        </Component>
      );
    };
    