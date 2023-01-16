import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface UserProfileDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_canvas?: member<any>;
_panel?: member<any>;
UserId?: member<any>;
_username?: member<any>;
_statusOutline?: member<any>;
_avatar?: member<any>;
_avatarSprite?: member<any>;
_avatarTexture?: member<any>;
_addRemoveButton?: member<any>;
    }
    
    export function UserProfileDialog(props: UserProfileDialogInput){
      const { id, persistentId, updateOrder, Enabled,
_canvas,
_panel,
UserId,
_username,
_statusOutline,
_avatar,
_avatarSprite,
_avatarTexture,
_addRemoveButton, } = props;
    
      return (
        <Component type="FrooxEngine.UserProfileDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosPanel]`} name="_panel" id={typeof _panel === "object" && "id" in _panel ? _panel?.id : undefined} value={typeof _panel === "object" && "value" in _panel ? _panel?.value : _panel} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="UserId" id={typeof UserId === "object" && "id" in UserId ? UserId?.id : undefined} value={typeof UserId === "object" && "value" in UserId ? UserId?.value : UserId} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_username" id={typeof _username === "object" && "id" in _username ? _username?.id : undefined} value={typeof _username === "object" && "value" in _username ? _username?.value : _username} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_statusOutline" id={typeof _statusOutline === "object" && "id" in _statusOutline ? _statusOutline?.id : undefined} value={typeof _statusOutline === "object" && "value" in _statusOutline ? _statusOutline?.value : _statusOutline} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_avatar" id={typeof _avatar === "object" && "id" in _avatar ? _avatar?.id : undefined} value={typeof _avatar === "object" && "value" in _avatar ? _avatar?.value : _avatar} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SpriteProvider]`} name="_avatarSprite" id={typeof _avatarSprite === "object" && "id" in _avatarSprite ? _avatarSprite?.id : undefined} value={typeof _avatarSprite === "object" && "value" in _avatarSprite ? _avatarSprite?.value : _avatarSprite} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.StaticTexture2D]`} name="_avatarTexture" id={typeof _avatarTexture === "object" && "id" in _avatarTexture ? _avatarTexture?.id : undefined} value={typeof _avatarTexture === "object" && "value" in _avatarTexture ? _avatarTexture?.value : _avatarTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_addRemoveButton" id={typeof _addRemoveButton === "object" && "id" in _addRemoveButton ? _addRemoveButton?.id : undefined} value={typeof _addRemoveButton === "object" && "value" in _addRemoveButton ? _addRemoveButton?.value : _addRemoveButton} /* default: ID0 */  />
        </Component>
      );
    };
    