import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface FriendItemInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_background?: member<any>;
_circleOutline?: member<any>;
_thumbnail?: member<any>;
_thumbnailTexture?: member<any>;
_username?: member<any>;
_currentWorld?: member<any>;
_unreadCount?: member<any>;
_joinButton?: member<any>;
_rawUsername?: member<any>;
    }
    
    export function FriendItem(props: FriendItemInput){
      const { id, persistentId, updateOrder, Enabled,
_background,
_circleOutline,
_thumbnail,
_thumbnailTexture,
_username,
_currentWorld,
_unreadCount,
_joinButton,
_rawUsername, } = props;
    
      return (
        <Component type="FrooxEngine.FriendItem" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_background" id={typeof _background === "object" && "id" in _background ? _background?.id : undefined} value={typeof _background === "object" && "value" in _background ? _background?.value : _background} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_circleOutline" id={typeof _circleOutline === "object" && "id" in _circleOutline ? _circleOutline?.id : undefined} value={typeof _circleOutline === "object" && "value" in _circleOutline ? _circleOutline?.value : _circleOutline} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_thumbnail" id={typeof _thumbnail === "object" && "id" in _thumbnail ? _thumbnail?.id : undefined} value={typeof _thumbnail === "object" && "value" in _thumbnail ? _thumbnail?.value : _thumbnail} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.StaticTexture2D]`} name="_thumbnailTexture" id={typeof _thumbnailTexture === "object" && "id" in _thumbnailTexture ? _thumbnailTexture?.id : undefined} value={typeof _thumbnailTexture === "object" && "value" in _thumbnailTexture ? _thumbnailTexture?.value : _thumbnailTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_username" id={typeof _username === "object" && "id" in _username ? _username?.id : undefined} value={typeof _username === "object" && "value" in _username ? _username?.value : _username} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_currentWorld" id={typeof _currentWorld === "object" && "id" in _currentWorld ? _currentWorld?.id : undefined} value={typeof _currentWorld === "object" && "value" in _currentWorld ? _currentWorld?.value : _currentWorld} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_unreadCount" id={typeof _unreadCount === "object" && "id" in _unreadCount ? _unreadCount?.id : undefined} value={typeof _unreadCount === "object" && "value" in _unreadCount ? _unreadCount?.value : _unreadCount} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_joinButton" id={typeof _joinButton === "object" && "id" in _joinButton ? _joinButton?.id : undefined} value={typeof _joinButton === "object" && "value" in _joinButton ? _joinButton?.value : _joinButton} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_rawUsername" id={typeof _rawUsername === "object" && "id" in _rawUsername ? _rawUsername?.id : undefined} value={typeof _rawUsername === "object" && "value" in _rawUsername ? _rawUsername?.value : _rawUsername} /* default: <i>null</i> */  />
        </Component>
      );
    };
    