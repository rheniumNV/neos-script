import { member, Member, Component } from "../../core";
    
    export interface UserInspectorItemInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_user?: member<any>;
_userNameText?: member<any>;
_expander?: member<any>;
_expanderIndicator?: member<any>;
_childContainer?: member<any>;
    }
    
    export function UserInspectorItem(props: UserInspectorItemInput){
      const { id, persistentId, updateOrder, Enabled,
_user,
_userNameText,
_expander,
_expanderIndicator,
_childContainer, } = props;
    
      return (
        <Component type="FrooxEngine.UserInspectorItem" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="_user" id={typeof _user === "object" && "id" in _user ? _user?.id : undefined} value={typeof _user === "object" && "value" in _user ? _user?.value : _user} /* default: ID0 */  isRaw={typeof _user === "object" && "isRaw" in _user && _user.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_userNameText" id={typeof _userNameText === "object" && "id" in _userNameText ? _userNameText?.id : undefined} value={typeof _userNameText === "object" && "value" in _userNameText ? _userNameText?.value : _userNameText} /* default: ID0 */  isRaw={typeof _userNameText === "object" && "isRaw" in _userNameText && _userNameText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Expander]`} name="_expander" id={typeof _expander === "object" && "id" in _expander ? _expander?.id : undefined} value={typeof _expander === "object" && "value" in _expander ? _expander?.value : _expander} /* default: ID0 */  isRaw={typeof _expander === "object" && "isRaw" in _expander && _expander.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextExpandIndicator]`} name="_expanderIndicator" id={typeof _expanderIndicator === "object" && "id" in _expanderIndicator ? _expanderIndicator?.id : undefined} value={typeof _expanderIndicator === "object" && "value" in _expanderIndicator ? _expanderIndicator?.value : _expanderIndicator} /* default: ID0 */  isRaw={typeof _expanderIndicator === "object" && "isRaw" in _expanderIndicator && _expanderIndicator.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_childContainer" id={typeof _childContainer === "object" && "id" in _childContainer ? _childContainer?.id : undefined} value={typeof _childContainer === "object" && "value" in _childContainer ? _childContainer?.value : _childContainer} /* default: ID0 */  isRaw={typeof _childContainer === "object" && "isRaw" in _childContainer && _childContainer.isRaw ? true : undefined} />
        </Component>
      );
    };
    