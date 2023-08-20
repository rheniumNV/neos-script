import { member, Member, Component } from "../../../core";
    
    export interface FindChildByNameInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Instance?: member<any>;
Name?: member<any>;
MatchSubstring?: member<any>;
SearchDepth?: member<any>;
IgnoreCase?: member<any>;
    }
    
    export function FindChildByName(props: FindChildByNameInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Instance,
Name,
MatchSubstring,
SearchDepth,
IgnoreCase, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.FindChildByName" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Instance" id={typeof Instance === "object" && "id" in Instance ? Instance?.id : undefined} value={typeof Instance === "object" && "value" in Instance ? Instance?.value : Instance} /* default: ID0 */  isRaw={typeof Instance === "object" && "isRaw" in Instance && Instance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Name" id={typeof Name === "object" && "id" in Name ? Name?.id : undefined} value={typeof Name === "object" && "value" in Name ? Name?.value : Name} /* default: ID0 */  isRaw={typeof Name === "object" && "isRaw" in Name && Name.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="MatchSubstring" id={typeof MatchSubstring === "object" && "id" in MatchSubstring ? MatchSubstring?.id : undefined} value={typeof MatchSubstring === "object" && "value" in MatchSubstring ? MatchSubstring?.value : MatchSubstring} /* default: ID0 */  isRaw={typeof MatchSubstring === "object" && "isRaw" in MatchSubstring && MatchSubstring.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="SearchDepth" id={typeof SearchDepth === "object" && "id" in SearchDepth ? SearchDepth?.id : undefined} value={typeof SearchDepth === "object" && "value" in SearchDepth ? SearchDepth?.value : SearchDepth} /* default: ID0 */  isRaw={typeof SearchDepth === "object" && "isRaw" in SearchDepth && SearchDepth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="IgnoreCase" id={typeof IgnoreCase === "object" && "id" in IgnoreCase ? IgnoreCase?.id : undefined} value={typeof IgnoreCase === "object" && "value" in IgnoreCase ? IgnoreCase?.value : IgnoreCase} /* default: ID0 */  isRaw={typeof IgnoreCase === "object" && "isRaw" in IgnoreCase && IgnoreCase.isRaw ? true : undefined} />
        </Component>
      );
    };
    