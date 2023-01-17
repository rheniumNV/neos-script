import { member, Member, Component } from "../../core";
    
    export interface FriendsDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_searchBar?: member<any>;
_listRoot?: member<any>;
_sessionsRoot?: member<any>;
_messagesRoot?: member<any>;
_status?: member<any>;
_avatar?: member<any>;
_username?: member<any>;
_userActionsRoot?: member<any>;
_sendMessageButton?: member<any>;
_sendVoiceMessageButton?: member<any>;
_sendMessageTextField?: member<any>;
_messagesScrollRect?: member<any>;
_inviteButton?: member<any>;
_sendCreditsButton?: member<any>;
_giftStorageButton?: member<any>;
_banAllButton?: member<any>;
_banSessionButton?: member<any>;
    }
    
    export function FriendsDialog(props: FriendsDialogInput){
      const { id, persistentId, updateOrder, Enabled,
_searchBar,
_listRoot,
_sessionsRoot,
_messagesRoot,
_status,
_avatar,
_username,
_userActionsRoot,
_sendMessageButton,
_sendVoiceMessageButton,
_sendMessageTextField,
_messagesScrollRect,
_inviteButton,
_sendCreditsButton,
_giftStorageButton,
_banAllButton,
_banSessionButton, } = props;
    
      return (
        <Component type="FrooxEngine.FriendsDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_searchBar" id={typeof _searchBar === "object" && "id" in _searchBar ? _searchBar?.id : undefined} value={typeof _searchBar === "object" && "value" in _searchBar ? _searchBar?.value : _searchBar} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_listRoot" id={typeof _listRoot === "object" && "id" in _listRoot ? _listRoot?.id : undefined} value={typeof _listRoot === "object" && "value" in _listRoot ? _listRoot?.value : _listRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_sessionsRoot" id={typeof _sessionsRoot === "object" && "id" in _sessionsRoot ? _sessionsRoot?.id : undefined} value={typeof _sessionsRoot === "object" && "value" in _sessionsRoot ? _sessionsRoot?.value : _sessionsRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_messagesRoot" id={typeof _messagesRoot === "object" && "id" in _messagesRoot ? _messagesRoot?.id : undefined} value={typeof _messagesRoot === "object" && "value" in _messagesRoot ? _messagesRoot?.value : _messagesRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_status" id={typeof _status === "object" && "id" in _status ? _status?.id : undefined} value={typeof _status === "object" && "value" in _status ? _status?.value : _status} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_avatar" id={typeof _avatar === "object" && "id" in _avatar ? _avatar?.id : undefined} value={typeof _avatar === "object" && "value" in _avatar ? _avatar?.value : _avatar} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_username" id={typeof _username === "object" && "id" in _username ? _username?.id : undefined} value={typeof _username === "object" && "value" in _username ? _username?.value : _username} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_userActionsRoot" id={typeof _userActionsRoot === "object" && "id" in _userActionsRoot ? _userActionsRoot?.id : undefined} value={typeof _userActionsRoot === "object" && "value" in _userActionsRoot ? _userActionsRoot?.value : _userActionsRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_sendMessageButton" id={typeof _sendMessageButton === "object" && "id" in _sendMessageButton ? _sendMessageButton?.id : undefined} value={typeof _sendMessageButton === "object" && "value" in _sendMessageButton ? _sendMessageButton?.value : _sendMessageButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_sendVoiceMessageButton" id={typeof _sendVoiceMessageButton === "object" && "id" in _sendVoiceMessageButton ? _sendVoiceMessageButton?.id : undefined} value={typeof _sendVoiceMessageButton === "object" && "value" in _sendVoiceMessageButton ? _sendVoiceMessageButton?.value : _sendVoiceMessageButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_sendMessageTextField" id={typeof _sendMessageTextField === "object" && "id" in _sendMessageTextField ? _sendMessageTextField?.id : undefined} value={typeof _sendMessageTextField === "object" && "value" in _sendMessageTextField ? _sendMessageTextField?.value : _sendMessageTextField} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.ScrollRect]`} name="_messagesScrollRect" id={typeof _messagesScrollRect === "object" && "id" in _messagesScrollRect ? _messagesScrollRect?.id : undefined} value={typeof _messagesScrollRect === "object" && "value" in _messagesScrollRect ? _messagesScrollRect?.value : _messagesScrollRect} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_inviteButton" id={typeof _inviteButton === "object" && "id" in _inviteButton ? _inviteButton?.id : undefined} value={typeof _inviteButton === "object" && "value" in _inviteButton ? _inviteButton?.value : _inviteButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_sendCreditsButton" id={typeof _sendCreditsButton === "object" && "id" in _sendCreditsButton ? _sendCreditsButton?.id : undefined} value={typeof _sendCreditsButton === "object" && "value" in _sendCreditsButton ? _sendCreditsButton?.value : _sendCreditsButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_giftStorageButton" id={typeof _giftStorageButton === "object" && "id" in _giftStorageButton ? _giftStorageButton?.id : undefined} value={typeof _giftStorageButton === "object" && "value" in _giftStorageButton ? _giftStorageButton?.value : _giftStorageButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_banAllButton" id={typeof _banAllButton === "object" && "id" in _banAllButton ? _banAllButton?.id : undefined} value={typeof _banAllButton === "object" && "value" in _banAllButton ? _banAllButton?.value : _banAllButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_banSessionButton" id={typeof _banSessionButton === "object" && "id" in _banSessionButton ? _banSessionButton?.id : undefined} value={typeof _banSessionButton === "object" && "value" in _banSessionButton ? _banSessionButton?.value : _banSessionButton} /* default: ID0 */  />
        </Component>
      );
    };
    