import { member, Member, Component } from "../../../core";
    
    export interface IndexOfStringInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Str?: member<any>;
Part?: member<any>;
StartIndex?: member<any>;
SearchFromEnd?: member<any>;
    }
    
    export function IndexOfString(props: IndexOfStringInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Str,
Part,
StartIndex,
SearchFromEnd, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.String.IndexOfString" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Str" id={typeof Str === "object" && "id" in Str ? Str?.id : undefined} value={typeof Str === "object" && "value" in Str ? Str?.value : Str} /* default: ID0 */  isRaw={typeof Str === "object" && "isRaw" in Str && Str.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Part" id={typeof Part === "object" && "id" in Part ? Part?.id : undefined} value={typeof Part === "object" && "value" in Part ? Part?.value : Part} /* default: ID0 */  isRaw={typeof Part === "object" && "isRaw" in Part && Part.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="StartIndex" id={typeof StartIndex === "object" && "id" in StartIndex ? StartIndex?.id : undefined} value={typeof StartIndex === "object" && "value" in StartIndex ? StartIndex?.value : StartIndex} /* default: ID0 */  isRaw={typeof StartIndex === "object" && "isRaw" in StartIndex && StartIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="SearchFromEnd" id={typeof SearchFromEnd === "object" && "id" in SearchFromEnd ? SearchFromEnd?.id : undefined} value={typeof SearchFromEnd === "object" && "value" in SearchFromEnd ? SearchFromEnd?.value : SearchFromEnd} /* default: ID0 */  isRaw={typeof SearchFromEnd === "object" && "isRaw" in SearchFromEnd && SearchFromEnd.isRaw ? true : undefined} />
        </Component>
      );
    };
    