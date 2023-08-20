import { member, Member, Component } from "../../../core";
    
    export interface PackColumns_Double2x2Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Column0?: member<any>;
Column1?: member<any>;
    }
    
    export function PackColumns_Double2x2(props: PackColumns_Double2x2Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Column0,
Column1, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.PackColumns_Double2x2" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.double2]`} name="Column0" id={typeof Column0 === "object" && "id" in Column0 ? Column0?.id : undefined} value={typeof Column0 === "object" && "value" in Column0 ? Column0?.value : Column0} /* default: ID0 */  isRaw={typeof Column0 === "object" && "isRaw" in Column0 && Column0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.double2]`} name="Column1" id={typeof Column1 === "object" && "id" in Column1 ? Column1?.id : undefined} value={typeof Column1 === "object" && "value" in Column1 ? Column1?.value : Column1} /* default: ID0 */  isRaw={typeof Column1 === "object" && "isRaw" in Column1 && Column1.isRaw ? true : undefined} />
        </Component>
      );
    };
    