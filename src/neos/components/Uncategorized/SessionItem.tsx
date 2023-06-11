import { member, Member, Component } from "../../core";
    
    export interface SessionItemInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_background?: member<any>;
_circleOutline?: member<any>;
_thumbnail?: member<any>;
_thumbnailTexture?: member<any>;
_sessionName?: member<any>;
_sessionHost?: member<any>;
_userCount?: member<any>;
_joinButton?: member<any>;
    }
    
    export function SessionItem(props: SessionItemInput){
      const { id, persistentId, updateOrder, Enabled,
_background,
_circleOutline,
_thumbnail,
_thumbnailTexture,
_sessionName,
_sessionHost,
_userCount,
_joinButton, } = props;
    
      return (
        <Component type="FrooxEngine.SessionItem" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_background" id={typeof _background === "object" && "id" in _background ? _background?.id : undefined} value={typeof _background === "object" && "value" in _background ? _background?.value : _background} /* default: ID0 */  isRaw={typeof _background === "object" && "isRaw" in _background && _background.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_circleOutline" id={typeof _circleOutline === "object" && "id" in _circleOutline ? _circleOutline?.id : undefined} value={typeof _circleOutline === "object" && "value" in _circleOutline ? _circleOutline?.value : _circleOutline} /* default: ID0 */  isRaw={typeof _circleOutline === "object" && "isRaw" in _circleOutline && _circleOutline.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_thumbnail" id={typeof _thumbnail === "object" && "id" in _thumbnail ? _thumbnail?.id : undefined} value={typeof _thumbnail === "object" && "value" in _thumbnail ? _thumbnail?.value : _thumbnail} /* default: ID0 */  isRaw={typeof _thumbnail === "object" && "isRaw" in _thumbnail && _thumbnail.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.StaticTexture2D]`} name="_thumbnailTexture" id={typeof _thumbnailTexture === "object" && "id" in _thumbnailTexture ? _thumbnailTexture?.id : undefined} value={typeof _thumbnailTexture === "object" && "value" in _thumbnailTexture ? _thumbnailTexture?.value : _thumbnailTexture} /* default: ID0 */  isRaw={typeof _thumbnailTexture === "object" && "isRaw" in _thumbnailTexture && _thumbnailTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_sessionName" id={typeof _sessionName === "object" && "id" in _sessionName ? _sessionName?.id : undefined} value={typeof _sessionName === "object" && "value" in _sessionName ? _sessionName?.value : _sessionName} /* default: ID0 */  isRaw={typeof _sessionName === "object" && "isRaw" in _sessionName && _sessionName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_sessionHost" id={typeof _sessionHost === "object" && "id" in _sessionHost ? _sessionHost?.id : undefined} value={typeof _sessionHost === "object" && "value" in _sessionHost ? _sessionHost?.value : _sessionHost} /* default: ID0 */  isRaw={typeof _sessionHost === "object" && "isRaw" in _sessionHost && _sessionHost.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_userCount" id={typeof _userCount === "object" && "id" in _userCount ? _userCount?.id : undefined} value={typeof _userCount === "object" && "value" in _userCount ? _userCount?.value : _userCount} /* default: ID0 */  isRaw={typeof _userCount === "object" && "isRaw" in _userCount && _userCount.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_joinButton" id={typeof _joinButton === "object" && "id" in _joinButton ? _joinButton?.id : undefined} value={typeof _joinButton === "object" && "value" in _joinButton ? _joinButton?.value : _joinButton} /* default: ID0 */  isRaw={typeof _joinButton === "object" && "isRaw" in _joinButton && _joinButton.isRaw ? true : undefined} />
        </Component>
      );
    };
    