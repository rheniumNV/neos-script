import { member, Member, Component } from "../../core";
    
    export interface UserInspectorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ViewUser?: member<any>;
ViewGroup?: member<any>;
ViewStreamGroup?: member<number>;
_currentUser?: member<any>;
_currentViewGroup?: member<any>;
_currentStreamGroup?: member<number>;
_userListContentRoot?: member<any>;
_workersContentRoot?: member<any>;
_userText?: member<any>;
    }
    
    export function UserInspector(props: UserInspectorInput){
      const { id, persistentId, updateOrder, Enabled,
ViewUser,
ViewGroup,
ViewStreamGroup,
_currentUser,
_currentViewGroup,
_currentStreamGroup,
_userListContentRoot,
_workersContentRoot,
_userText, } = props;
    
      return (
        <Component type="FrooxEngine.UserInspector" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="ViewUser" id={typeof ViewUser === "object" && "id" in ViewUser ? ViewUser?.id : undefined} value={typeof ViewUser === "object" && "value" in ViewUser ? ViewUser?.value : ViewUser} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserInspector+View]`} name="ViewGroup" id={typeof ViewGroup === "object" && "id" in ViewGroup ? ViewGroup?.id : undefined} value={typeof ViewGroup === "object" && "value" in ViewGroup ? ViewGroup?.value : ViewGroup} /* default: User */  />
<Member type={`FrooxEngine.Sync\`1[System.UInt16]`} name="ViewStreamGroup" id={typeof ViewStreamGroup === "object" && "id" in ViewStreamGroup ? ViewStreamGroup?.id : undefined} value={typeof ViewStreamGroup === "object" && "value" in ViewStreamGroup ? ViewStreamGroup?.value : ViewStreamGroup} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="_currentUser" id={typeof _currentUser === "object" && "id" in _currentUser ? _currentUser?.id : undefined} value={typeof _currentUser === "object" && "value" in _currentUser ? _currentUser?.value : _currentUser} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserInspector+View]`} name="_currentViewGroup" id={typeof _currentViewGroup === "object" && "id" in _currentViewGroup ? _currentViewGroup?.id : undefined} value={typeof _currentViewGroup === "object" && "value" in _currentViewGroup ? _currentViewGroup?.value : _currentViewGroup} /* default: User */  />
<Member type={`FrooxEngine.Sync\`1[System.UInt16]`} name="_currentStreamGroup" id={typeof _currentStreamGroup === "object" && "id" in _currentStreamGroup ? _currentStreamGroup?.id : undefined} value={typeof _currentStreamGroup === "object" && "value" in _currentStreamGroup ? _currentStreamGroup?.value : _currentStreamGroup} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_userListContentRoot" id={typeof _userListContentRoot === "object" && "id" in _userListContentRoot ? _userListContentRoot?.id : undefined} value={typeof _userListContentRoot === "object" && "value" in _userListContentRoot ? _userListContentRoot?.value : _userListContentRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_workersContentRoot" id={typeof _workersContentRoot === "object" && "id" in _workersContentRoot ? _workersContentRoot?.id : undefined} value={typeof _workersContentRoot === "object" && "value" in _workersContentRoot ? _workersContentRoot?.value : _workersContentRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Sync\`1[System.String]]`} name="_userText" id={typeof _userText === "object" && "id" in _userText ? _userText?.id : undefined} value={typeof _userText === "object" && "value" in _userText ? _userText?.value : _userText} /* default: ID0 */  />
        </Component>
      );
    };
    