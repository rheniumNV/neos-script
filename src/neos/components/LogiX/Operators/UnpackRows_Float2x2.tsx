import { member, Member, Component } from "../../../core";
    
    export interface UnpackRows_Float2x2Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Matrix?: member<any>;
    }
    
    export function UnpackRows_Float2x2(props: UnpackRows_Float2x2Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Matrix, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.UnpackRows_Float2x2" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float2x2]`} name="Matrix" id={typeof Matrix === "object" && "id" in Matrix ? Matrix?.id : undefined} value={typeof Matrix === "object" && "value" in Matrix ? Matrix?.value : Matrix} /* default: ID0 */  isRaw={typeof Matrix === "object" && "isRaw" in Matrix && Matrix.isRaw ? true : undefined} />
        </Component>
      );
    };
    