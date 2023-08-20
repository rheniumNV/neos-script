import { member, Member, Component } from "../../../core";
    
    export interface PackRows_Double4x4Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Row0?: member<any>;
Row1?: member<any>;
Row2?: member<any>;
Row3?: member<any>;
    }
    
    export function PackRows_Double4x4(props: PackRows_Double4x4Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Row0,
Row1,
Row2,
Row3, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.PackRows_Double4x4" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.double4]`} name="Row0" id={typeof Row0 === "object" && "id" in Row0 ? Row0?.id : undefined} value={typeof Row0 === "object" && "value" in Row0 ? Row0?.value : Row0} /* default: ID0 */  isRaw={typeof Row0 === "object" && "isRaw" in Row0 && Row0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.double4]`} name="Row1" id={typeof Row1 === "object" && "id" in Row1 ? Row1?.id : undefined} value={typeof Row1 === "object" && "value" in Row1 ? Row1?.value : Row1} /* default: ID0 */  isRaw={typeof Row1 === "object" && "isRaw" in Row1 && Row1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.double4]`} name="Row2" id={typeof Row2 === "object" && "id" in Row2 ? Row2?.id : undefined} value={typeof Row2 === "object" && "value" in Row2 ? Row2?.value : Row2} /* default: ID0 */  isRaw={typeof Row2 === "object" && "isRaw" in Row2 && Row2.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.double4]`} name="Row3" id={typeof Row3 === "object" && "id" in Row3 ? Row3?.id : undefined} value={typeof Row3 === "object" && "value" in Row3 ? Row3?.value : Row3} /* default: ID0 */  isRaw={typeof Row3 === "object" && "isRaw" in Row3 && Row3.isRaw ? true : undefined} />
        </Component>
      );
    };
    