import { member, Member, Component } from "../../../core";
    
    export interface EnumInput_EInput {
        type:{E: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Value?: member<any>;
_valueDisplay?: member<any>;
    }
    
    export function EnumInput_E(props: EnumInput_EInput){
      const {type:{E:{name: E},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Value,
_valueDisplay, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Input.EnumInput\`1[${[E,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[E]`} name="Value" id={typeof Value === "object" && "id" in Value ? Value?.id : undefined} value={typeof Value === "object" && "value" in Value ? Value?.value : Value} /* default: null */  isRaw={typeof Value === "object" && "isRaw" in Value && Value.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_valueDisplay" id={typeof _valueDisplay === "object" && "id" in _valueDisplay ? _valueDisplay?.id : undefined} value={typeof _valueDisplay === "object" && "value" in _valueDisplay ? _valueDisplay?.value : _valueDisplay} /* default: ID0 */  isRaw={typeof _valueDisplay === "object" && "isRaw" in _valueDisplay && _valueDisplay.isRaw ? true : undefined} />
        </Component>
      );
    };
    