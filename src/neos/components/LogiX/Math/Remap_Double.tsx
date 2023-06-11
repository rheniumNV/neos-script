import { member, Member, Component } from "../../../core";
    
    export interface Remap_DoubleInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
InMin?: member<any>;
InMax?: member<any>;
OutMin?: member<any>;
OutMax?: member<any>;
Value?: member<any>;
    }
    
    export function Remap_Double(props: Remap_DoubleInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
InMin,
InMax,
OutMin,
OutMax,
Value, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Remap_Double" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Double]`} name="InMin" id={typeof InMin === "object" && "id" in InMin ? InMin?.id : undefined} value={typeof InMin === "object" && "value" in InMin ? InMin?.value : InMin} /* default: ID0 */  isRaw={typeof InMin === "object" && "isRaw" in InMin && InMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Double]`} name="InMax" id={typeof InMax === "object" && "id" in InMax ? InMax?.id : undefined} value={typeof InMax === "object" && "value" in InMax ? InMax?.value : InMax} /* default: ID0 */  isRaw={typeof InMax === "object" && "isRaw" in InMax && InMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Double]`} name="OutMin" id={typeof OutMin === "object" && "id" in OutMin ? OutMin?.id : undefined} value={typeof OutMin === "object" && "value" in OutMin ? OutMin?.value : OutMin} /* default: ID0 */  isRaw={typeof OutMin === "object" && "isRaw" in OutMin && OutMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Double]`} name="OutMax" id={typeof OutMax === "object" && "id" in OutMax ? OutMax?.id : undefined} value={typeof OutMax === "object" && "value" in OutMax ? OutMax?.value : OutMax} /* default: ID0 */  isRaw={typeof OutMax === "object" && "isRaw" in OutMax && OutMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Double]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: ID0 */  isRaw={typeof Value === "object" && "isRaw" in Value && Value.isRaw ? true : undefined} />
        </Component>
      );
    };
    