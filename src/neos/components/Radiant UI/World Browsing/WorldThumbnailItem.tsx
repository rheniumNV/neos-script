import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface WorldThumbnailItemInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
UpdatingUser?: member<any>;
WorldOrSessionId?: member<any>;
_visited?: member<boolean>;
_totalActiveUsers?: member<number>;
_totalFriends?: member<number>;
PressAction?: member<any>;
_thumbnailGraphic?: member<any>;
_thumbnailTexture?: member<any>;
_nameRoot?: member<any>;
_detailRoot?: member<any>;
_visitedRoot?: member<any>;
_counterRoot?: member<any>;
_iconsRoot?: member<any>;
_closeButton?: member<any>;
_nameText?: member<any>;
_detailText?: member<any>;
_counterText?: member<any>;
_borderOverlay?: member<any>;
_borderColor?: member<[number, number, number, number]>;
    }
    
    export function WorldThumbnailItem(props: WorldThumbnailItemInput){
      const { id, persistentId, updateOrder, Enabled,
UpdatingUser,
WorldOrSessionId,
_visited,
_totalActiveUsers,
_totalFriends,
PressAction,
_thumbnailGraphic,
_thumbnailTexture,
_nameRoot,
_detailRoot,
_visitedRoot,
_counterRoot,
_iconsRoot,
_closeButton,
_nameText,
_detailText,
_counterText,
_borderOverlay,
_borderColor, } = props;
    
      return (
        <Component type="FrooxEngine.WorldThumbnailItem" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.UserRef`} name="UpdatingUser" id={typeof UpdatingUser === "object" && "id" in UpdatingUser ? UpdatingUser?.id : undefined} value={typeof UpdatingUser === "object" && "value" in UpdatingUser ? UpdatingUser?.value : UpdatingUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="WorldOrSessionId" id={typeof WorldOrSessionId === "object" && "id" in WorldOrSessionId ? WorldOrSessionId?.id : undefined} value={typeof WorldOrSessionId === "object" && "value" in WorldOrSessionId ? WorldOrSessionId?.value : WorldOrSessionId} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_visited" id={typeof _visited === "object" && "id" in _visited ? _visited?.id : undefined} value={typeof _visited === "object" && "value" in _visited ? _visited?.value : _visited} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_totalActiveUsers" id={typeof _totalActiveUsers === "object" && "id" in _totalActiveUsers ? _totalActiveUsers?.id : undefined} value={typeof _totalActiveUsers === "object" && "value" in _totalActiveUsers ? _totalActiveUsers?.value : _totalActiveUsers} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_totalFriends" id={typeof _totalFriends === "object" && "id" in _totalFriends ? _totalFriends?.id : undefined} value={typeof _totalFriends === "object" && "value" in _totalFriends ? _totalFriends?.value : _totalFriends} /* default: 0 */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.WorldItemAction]`} name="PressAction" id={typeof PressAction === "object" && "id" in PressAction ? PressAction?.id : undefined} value={typeof PressAction === "object" && "value" in PressAction ? PressAction?.value : PressAction} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RawGraphic]`} name="_thumbnailGraphic" id={typeof _thumbnailGraphic === "object" && "id" in _thumbnailGraphic ? _thumbnailGraphic?.id : undefined} value={typeof _thumbnailGraphic === "object" && "value" in _thumbnailGraphic ? _thumbnailGraphic?.value : _thumbnailGraphic} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.StaticTexture2D]`} name="_thumbnailTexture" id={typeof _thumbnailTexture === "object" && "id" in _thumbnailTexture ? _thumbnailTexture?.id : undefined} value={typeof _thumbnailTexture === "object" && "value" in _thumbnailTexture ? _thumbnailTexture?.value : _thumbnailTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_nameRoot" id={typeof _nameRoot === "object" && "id" in _nameRoot ? _nameRoot?.id : undefined} value={typeof _nameRoot === "object" && "value" in _nameRoot ? _nameRoot?.value : _nameRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_detailRoot" id={typeof _detailRoot === "object" && "id" in _detailRoot ? _detailRoot?.id : undefined} value={typeof _detailRoot === "object" && "value" in _detailRoot ? _detailRoot?.value : _detailRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_visitedRoot" id={typeof _visitedRoot === "object" && "id" in _visitedRoot ? _visitedRoot?.id : undefined} value={typeof _visitedRoot === "object" && "value" in _visitedRoot ? _visitedRoot?.value : _visitedRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_counterRoot" id={typeof _counterRoot === "object" && "id" in _counterRoot ? _counterRoot?.id : undefined} value={typeof _counterRoot === "object" && "value" in _counterRoot ? _counterRoot?.value : _counterRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_iconsRoot" id={typeof _iconsRoot === "object" && "id" in _iconsRoot ? _iconsRoot?.id : undefined} value={typeof _iconsRoot === "object" && "value" in _iconsRoot ? _iconsRoot?.value : _iconsRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_closeButton" id={typeof _closeButton === "object" && "id" in _closeButton ? _closeButton?.id : undefined} value={typeof _closeButton === "object" && "value" in _closeButton ? _closeButton?.value : _closeButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_nameText" id={typeof _nameText === "object" && "id" in _nameText ? _nameText?.id : undefined} value={typeof _nameText === "object" && "value" in _nameText ? _nameText?.value : _nameText} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_detailText" id={typeof _detailText === "object" && "id" in _detailText ? _detailText?.id : undefined} value={typeof _detailText === "object" && "value" in _detailText ? _detailText?.value : _detailText} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_counterText" id={typeof _counterText === "object" && "id" in _counterText ? _counterText?.id : undefined} value={typeof _counterText === "object" && "value" in _counterText ? _counterText?.value : _counterText} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_borderOverlay" id={typeof _borderOverlay === "object" && "id" in _borderOverlay ? _borderOverlay?.id : undefined} value={typeof _borderOverlay === "object" && "value" in _borderOverlay ? _borderOverlay?.value : _borderOverlay} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="_borderColor" id={typeof _borderColor === "object" && "id" in _borderColor ? _borderColor?.id : undefined} value={typeof _borderColor === "object" && "value" in _borderColor ? _borderColor?.value : _borderColor} /* default: [0; 0; 0; 0] */  />
        </Component>
      );
    };
    