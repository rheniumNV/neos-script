import { member, Member, Component } from "../../../core";
    
    export interface UserFromUsernameInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Username?: member<any>;
IgnoreCase?: member<any>;
AllowPartialMatch?: member<any>;
    }
    
    export function UserFromUsername(props: UserFromUsernameInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Username,
IgnoreCase,
AllowPartialMatch, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.UserFromUsername" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="Username" id={typeof Username === "object" && "id" in Username ? Username?.id : undefined} value={typeof Username === "object" && "value" in Username ? Username?.value : Username} /* default: ID0 */  isRaw={typeof Username === "object" && "isRaw" in Username && Username.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="IgnoreCase" id={typeof IgnoreCase === "object" && "id" in IgnoreCase ? IgnoreCase?.id : undefined} value={typeof IgnoreCase === "object" && "value" in IgnoreCase ? IgnoreCase?.value : IgnoreCase} /* default: ID0 */  isRaw={typeof IgnoreCase === "object" && "isRaw" in IgnoreCase && IgnoreCase.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="AllowPartialMatch" id={typeof AllowPartialMatch === "object" && "id" in AllowPartialMatch ? AllowPartialMatch?.id : undefined} value={typeof AllowPartialMatch === "object" && "value" in AllowPartialMatch ? AllowPartialMatch?.value : AllowPartialMatch} /* default: ID0 */  isRaw={typeof AllowPartialMatch === "object" && "isRaw" in AllowPartialMatch && AllowPartialMatch.isRaw ? true : undefined} />
        </Component>
      );
    };
    