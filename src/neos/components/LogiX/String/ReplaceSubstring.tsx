import { member, Member, Component } from "../../../core";
    
    export interface ReplaceSubstringInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Str?: member<any>;
SearchFor?: member<any>;
ReplaceWith?: member<any>;
    }
    
    export function ReplaceSubstring(props: ReplaceSubstringInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Str,
SearchFor,
ReplaceWith, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.String.ReplaceSubstring" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Str" id={typeof Str === "object" && "id" in Str ? Str?.id : undefined} value={typeof Str === "object" && "value" in Str ? Str?.value : Str} /* default: ID0 */  isRaw={typeof Str === "object" && "isRaw" in Str && Str.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="SearchFor" id={typeof SearchFor === "object" && "id" in SearchFor ? SearchFor?.id : undefined} value={typeof SearchFor === "object" && "value" in SearchFor ? SearchFor?.value : SearchFor} /* default: ID0 */  isRaw={typeof SearchFor === "object" && "isRaw" in SearchFor && SearchFor.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="ReplaceWith" id={typeof ReplaceWith === "object" && "id" in ReplaceWith ? ReplaceWith?.id : undefined} value={typeof ReplaceWith === "object" && "value" in ReplaceWith ? ReplaceWith?.value : ReplaceWith} /* default: ID0 */  isRaw={typeof ReplaceWith === "object" && "isRaw" in ReplaceWith && ReplaceWith.isRaw ? true : undefined} />
        </Component>
      );
    };
    