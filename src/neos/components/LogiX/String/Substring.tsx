import { member, Member, Component } from "../../../core";
    
    export interface SubstringInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Str?: member<any>;
StartIndex?: member<any>;
Length?: member<any>;
    }
    
    export function Substring(props: SubstringInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Str,
StartIndex,
Length, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.String.Substring" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Str" id={typeof Str === "object" && "id" in Str ? Str?.id : undefined} value={typeof Str === "object" && "value" in Str ? Str?.value : Str} /* default: ID0 */  isRaw={typeof Str === "object" && "isRaw" in Str && Str.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="StartIndex" id={typeof StartIndex === "object" && "id" in StartIndex ? StartIndex?.id : undefined} value={typeof StartIndex === "object" && "value" in StartIndex ? StartIndex?.value : StartIndex} /* default: ID0 */  isRaw={typeof StartIndex === "object" && "isRaw" in StartIndex && StartIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Length" id={typeof Length === "object" && "id" in Length ? Length?.id : undefined} value={typeof Length === "object" && "value" in Length ? Length?.value : Length} /* default: ID0 */  isRaw={typeof Length === "object" && "isRaw" in Length && Length.isRaw ? true : undefined} />
        </Component>
      );
    };
    