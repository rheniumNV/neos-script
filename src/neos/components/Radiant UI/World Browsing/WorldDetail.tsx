import { member, Member, Component } from "../../../core";
    
    export interface WorldDetailInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
UpdatingUser?: member<any>;
WorldOrSessionId?: member<any>;
_visited?: member<boolean>;
_totalActiveUsers?: member<number>;
_totalFriends?: member<number>;
Expanded?: member<boolean>;
CompactDetailExpanded?: member<boolean>;
CompactDetailCategory?: member<any>;
ModalCompactSize?: member<[number, number]>;
ModalExpandedSize?: member<[number, number]>;
_nameText?: member<any>;
_hostText?: member<any>;
_sessionItemsRoot?: member<any>;
_thumbnailGraphic?: member<any>;
_thumbnailTexture?: member<any>;
_detailImageRoot?: member<any>;
_compactRoot?: member<any>;
_compactHeaderRoot?: member<any>;
_detailHeaderRoot?: member<any>;
_openButton?: member<any>;
_scrollRect?: member<any>;
_expandButton?: member<any>;
_expandIcon?: member<any>;
_expandSprite?: member<any>;
_compactSprite?: member<any>;
_description?: member<any>;
_leftDetailsRoot?: member<any>;
_rightDetailsRoot?: member<any>;
_detailsText?: member<any>;
_cycleLeftButton?: member<any>;
_cycleRightButton?: member<any>;
_compactParent?: member<any>;
_compactHeaderParent?: member<any>;
_sidebarActive?: member<any>;
_sidebarAnchorMin?: member<any>;
_sidebarAnchorMax?: member<any>;
_contentAnchorMin?: member<any>;
_contentAnchorMax?: member<any>;
_rectTransformLerp?: member<any>;
_modalAnchorMin?: member<any>;
_modalAnchorMax?: member<any>;
_compactButtonsActive?: member<any>;
_compactButtonsAnchorMin?: member<any>;
_compactButtonsAnchorMax?: member<any>;
_compactDetailRect?: member<any>;
_compactDetailButtonRect?: member<any>;
_compactDetailText?: member<any>;
_compactDetailExpandButton?: member<any>;
_newSessionItemRoot?: member<any>;
    }
    
    export function WorldDetail(props: WorldDetailInput){
      const { id, persistentId, updateOrder, Enabled,
UpdatingUser,
WorldOrSessionId,
_visited,
_totalActiveUsers,
_totalFriends,
Expanded,
CompactDetailExpanded,
CompactDetailCategory,
ModalCompactSize,
ModalExpandedSize,
_nameText,
_hostText,
_sessionItemsRoot,
_thumbnailGraphic,
_thumbnailTexture,
_detailImageRoot,
_compactRoot,
_compactHeaderRoot,
_detailHeaderRoot,
_openButton,
_scrollRect,
_expandButton,
_expandIcon,
_expandSprite,
_compactSprite,
_description,
_leftDetailsRoot,
_rightDetailsRoot,
_detailsText,
_cycleLeftButton,
_cycleRightButton,
_compactParent,
_compactHeaderParent,
_sidebarActive,
_sidebarAnchorMin,
_sidebarAnchorMax,
_contentAnchorMin,
_contentAnchorMax,
_rectTransformLerp,
_modalAnchorMin,
_modalAnchorMax,
_compactButtonsActive,
_compactButtonsAnchorMin,
_compactButtonsAnchorMax,
_compactDetailRect,
_compactDetailButtonRect,
_compactDetailText,
_compactDetailExpandButton,
_newSessionItemRoot, } = props;
    
      return (
        <Component type="FrooxEngine.WorldDetail" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.UserRef`} name="UpdatingUser" id={typeof UpdatingUser === "object" && "id" in UpdatingUser ? UpdatingUser?.id : undefined} value={typeof UpdatingUser === "object" && "value" in UpdatingUser ? UpdatingUser?.value : UpdatingUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof UpdatingUser === "object" && "isRaw" in UpdatingUser && UpdatingUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="WorldOrSessionId" id={typeof WorldOrSessionId === "object" && "id" in WorldOrSessionId ? WorldOrSessionId?.id : undefined} value={typeof WorldOrSessionId === "object" && "value" in WorldOrSessionId ? WorldOrSessionId?.value : WorldOrSessionId} /* default: <i>null</i> */  isRaw={typeof WorldOrSessionId === "object" && "isRaw" in WorldOrSessionId && WorldOrSessionId.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_visited" id={typeof _visited === "object" && "id" in _visited ? _visited?.id : undefined} value={typeof _visited === "object" && "value" in _visited ? _visited?.value : _visited} /* default: false */  isRaw={typeof _visited === "object" && "isRaw" in _visited && _visited.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_totalActiveUsers" id={typeof _totalActiveUsers === "object" && "id" in _totalActiveUsers ? _totalActiveUsers?.id : undefined} value={typeof _totalActiveUsers === "object" && "value" in _totalActiveUsers ? _totalActiveUsers?.value : _totalActiveUsers} /* default: 0 */  isRaw={typeof _totalActiveUsers === "object" && "isRaw" in _totalActiveUsers && _totalActiveUsers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_totalFriends" id={typeof _totalFriends === "object" && "id" in _totalFriends ? _totalFriends?.id : undefined} value={typeof _totalFriends === "object" && "value" in _totalFriends ? _totalFriends?.value : _totalFriends} /* default: 0 */  isRaw={typeof _totalFriends === "object" && "isRaw" in _totalFriends && _totalFriends.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Expanded" id={typeof Expanded === "object" && "id" in Expanded ? Expanded?.id : undefined} value={typeof Expanded === "object" && "value" in Expanded ? Expanded?.value : Expanded} /* default: false */  isRaw={typeof Expanded === "object" && "isRaw" in Expanded && Expanded.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CompactDetailExpanded" id={typeof CompactDetailExpanded === "object" && "id" in CompactDetailExpanded ? CompactDetailExpanded?.id : undefined} value={typeof CompactDetailExpanded === "object" && "value" in CompactDetailExpanded ? CompactDetailExpanded?.value : CompactDetailExpanded} /* default: false */  isRaw={typeof CompactDetailExpanded === "object" && "isRaw" in CompactDetailExpanded && CompactDetailExpanded.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.WorldDetail+DetailCategory]`} name="CompactDetailCategory" id={typeof CompactDetailCategory === "object" && "id" in CompactDetailCategory ? CompactDetailCategory?.id : undefined} value={typeof CompactDetailCategory === "object" && "value" in CompactDetailCategory ? CompactDetailCategory?.value : CompactDetailCategory} /* default: Users */  isRaw={typeof CompactDetailCategory === "object" && "isRaw" in CompactDetailCategory && CompactDetailCategory.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ModalCompactSize" id={typeof ModalCompactSize === "object" && "id" in ModalCompactSize ? ModalCompactSize?.id : undefined} value={typeof ModalCompactSize === "object" && "value" in ModalCompactSize ? ModalCompactSize?.value : ModalCompactSize} /* default: [0; 0] */  isRaw={typeof ModalCompactSize === "object" && "isRaw" in ModalCompactSize && ModalCompactSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="ModalExpandedSize" id={typeof ModalExpandedSize === "object" && "id" in ModalExpandedSize ? ModalExpandedSize?.id : undefined} value={typeof ModalExpandedSize === "object" && "value" in ModalExpandedSize ? ModalExpandedSize?.value : ModalExpandedSize} /* default: [0; 0] */  isRaw={typeof ModalExpandedSize === "object" && "isRaw" in ModalExpandedSize && ModalExpandedSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_nameText" id={typeof _nameText === "object" && "id" in _nameText ? _nameText?.id : undefined} value={typeof _nameText === "object" && "value" in _nameText ? _nameText?.value : _nameText} /* default: ID0 */  isRaw={typeof _nameText === "object" && "isRaw" in _nameText && _nameText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_hostText" id={typeof _hostText === "object" && "id" in _hostText ? _hostText?.id : undefined} value={typeof _hostText === "object" && "value" in _hostText ? _hostText?.value : _hostText} /* default: ID0 */  isRaw={typeof _hostText === "object" && "isRaw" in _hostText && _hostText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_sessionItemsRoot" id={typeof _sessionItemsRoot === "object" && "id" in _sessionItemsRoot ? _sessionItemsRoot?.id : undefined} value={typeof _sessionItemsRoot === "object" && "value" in _sessionItemsRoot ? _sessionItemsRoot?.value : _sessionItemsRoot} /* default: ID0 */  isRaw={typeof _sessionItemsRoot === "object" && "isRaw" in _sessionItemsRoot && _sessionItemsRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RawGraphic]`} name="_thumbnailGraphic" id={typeof _thumbnailGraphic === "object" && "id" in _thumbnailGraphic ? _thumbnailGraphic?.id : undefined} value={typeof _thumbnailGraphic === "object" && "value" in _thumbnailGraphic ? _thumbnailGraphic?.value : _thumbnailGraphic} /* default: ID0 */  isRaw={typeof _thumbnailGraphic === "object" && "isRaw" in _thumbnailGraphic && _thumbnailGraphic.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.StaticTexture2D]`} name="_thumbnailTexture" id={typeof _thumbnailTexture === "object" && "id" in _thumbnailTexture ? _thumbnailTexture?.id : undefined} value={typeof _thumbnailTexture === "object" && "value" in _thumbnailTexture ? _thumbnailTexture?.value : _thumbnailTexture} /* default: ID0 */  isRaw={typeof _thumbnailTexture === "object" && "isRaw" in _thumbnailTexture && _thumbnailTexture.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_detailImageRoot" id={typeof _detailImageRoot === "object" && "id" in _detailImageRoot ? _detailImageRoot?.id : undefined} value={typeof _detailImageRoot === "object" && "value" in _detailImageRoot ? _detailImageRoot?.value : _detailImageRoot} /* default: ID0 */  isRaw={typeof _detailImageRoot === "object" && "isRaw" in _detailImageRoot && _detailImageRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_compactRoot" id={typeof _compactRoot === "object" && "id" in _compactRoot ? _compactRoot?.id : undefined} value={typeof _compactRoot === "object" && "value" in _compactRoot ? _compactRoot?.value : _compactRoot} /* default: ID0 */  isRaw={typeof _compactRoot === "object" && "isRaw" in _compactRoot && _compactRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_compactHeaderRoot" id={typeof _compactHeaderRoot === "object" && "id" in _compactHeaderRoot ? _compactHeaderRoot?.id : undefined} value={typeof _compactHeaderRoot === "object" && "value" in _compactHeaderRoot ? _compactHeaderRoot?.value : _compactHeaderRoot} /* default: ID0 */  isRaw={typeof _compactHeaderRoot === "object" && "isRaw" in _compactHeaderRoot && _compactHeaderRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_detailHeaderRoot" id={typeof _detailHeaderRoot === "object" && "id" in _detailHeaderRoot ? _detailHeaderRoot?.id : undefined} value={typeof _detailHeaderRoot === "object" && "value" in _detailHeaderRoot ? _detailHeaderRoot?.value : _detailHeaderRoot} /* default: ID0 */  isRaw={typeof _detailHeaderRoot === "object" && "isRaw" in _detailHeaderRoot && _detailHeaderRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_openButton" id={typeof _openButton === "object" && "id" in _openButton ? _openButton?.id : undefined} value={typeof _openButton === "object" && "value" in _openButton ? _openButton?.value : _openButton} /* default: ID0 */  isRaw={typeof _openButton === "object" && "isRaw" in _openButton && _openButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.ScrollRect]`} name="_scrollRect" id={typeof _scrollRect === "object" && "id" in _scrollRect ? _scrollRect?.id : undefined} value={typeof _scrollRect === "object" && "value" in _scrollRect ? _scrollRect?.value : _scrollRect} /* default: ID0 */  isRaw={typeof _scrollRect === "object" && "isRaw" in _scrollRect && _scrollRect.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_expandButton" id={typeof _expandButton === "object" && "id" in _expandButton ? _expandButton?.id : undefined} value={typeof _expandButton === "object" && "value" in _expandButton ? _expandButton?.value : _expandButton} /* default: ID0 */  isRaw={typeof _expandButton === "object" && "isRaw" in _expandButton && _expandButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_expandIcon" id={typeof _expandIcon === "object" && "id" in _expandIcon ? _expandIcon?.id : undefined} value={typeof _expandIcon === "object" && "value" in _expandIcon ? _expandIcon?.value : _expandIcon} /* default: ID0 */  isRaw={typeof _expandIcon === "object" && "isRaw" in _expandIcon && _expandIcon.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Sprite]`} name="_expandSprite" id={typeof _expandSprite === "object" && "id" in _expandSprite ? _expandSprite?.id : undefined} value={typeof _expandSprite === "object" && "value" in _expandSprite ? _expandSprite?.value : _expandSprite} /* default: ID0 */  isRaw={typeof _expandSprite === "object" && "isRaw" in _expandSprite && _expandSprite.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Sprite]`} name="_compactSprite" id={typeof _compactSprite === "object" && "id" in _compactSprite ? _compactSprite?.id : undefined} value={typeof _compactSprite === "object" && "value" in _compactSprite ? _compactSprite?.value : _compactSprite} /* default: ID0 */  isRaw={typeof _compactSprite === "object" && "isRaw" in _compactSprite && _compactSprite.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_description" id={typeof _description === "object" && "id" in _description ? _description?.id : undefined} value={typeof _description === "object" && "value" in _description ? _description?.value : _description} /* default: ID0 */  isRaw={typeof _description === "object" && "isRaw" in _description && _description.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_leftDetailsRoot" id={typeof _leftDetailsRoot === "object" && "id" in _leftDetailsRoot ? _leftDetailsRoot?.id : undefined} value={typeof _leftDetailsRoot === "object" && "value" in _leftDetailsRoot ? _leftDetailsRoot?.value : _leftDetailsRoot} /* default: ID0 */  isRaw={typeof _leftDetailsRoot === "object" && "isRaw" in _leftDetailsRoot && _leftDetailsRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_rightDetailsRoot" id={typeof _rightDetailsRoot === "object" && "id" in _rightDetailsRoot ? _rightDetailsRoot?.id : undefined} value={typeof _rightDetailsRoot === "object" && "value" in _rightDetailsRoot ? _rightDetailsRoot?.value : _rightDetailsRoot} /* default: ID0 */  isRaw={typeof _rightDetailsRoot === "object" && "isRaw" in _rightDetailsRoot && _rightDetailsRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_detailsText" id={typeof _detailsText === "object" && "id" in _detailsText ? _detailsText?.id : undefined} value={typeof _detailsText === "object" && "value" in _detailsText ? _detailsText?.value : _detailsText} /* default: ID0 */  isRaw={typeof _detailsText === "object" && "isRaw" in _detailsText && _detailsText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_cycleLeftButton" id={typeof _cycleLeftButton === "object" && "id" in _cycleLeftButton ? _cycleLeftButton?.id : undefined} value={typeof _cycleLeftButton === "object" && "value" in _cycleLeftButton ? _cycleLeftButton?.value : _cycleLeftButton} /* default: ID0 */  isRaw={typeof _cycleLeftButton === "object" && "isRaw" in _cycleLeftButton && _cycleLeftButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_cycleRightButton" id={typeof _cycleRightButton === "object" && "id" in _cycleRightButton ? _cycleRightButton?.id : undefined} value={typeof _cycleRightButton === "object" && "value" in _cycleRightButton ? _cycleRightButton?.value : _cycleRightButton} /* default: ID0 */  isRaw={typeof _cycleRightButton === "object" && "isRaw" in _cycleRightButton && _cycleRightButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RefDrive\`1[FrooxEngine.Slot]`} name="_compactParent" id={typeof _compactParent === "object" && "id" in _compactParent ? _compactParent?.id : undefined} value={typeof _compactParent === "object" && "value" in _compactParent ? _compactParent?.value : _compactParent} /* default: ID0 */  isRaw={typeof _compactParent === "object" && "isRaw" in _compactParent && _compactParent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RefDrive\`1[FrooxEngine.Slot]`} name="_compactHeaderParent" id={typeof _compactHeaderParent === "object" && "id" in _compactHeaderParent ? _compactHeaderParent?.id : undefined} value={typeof _compactHeaderParent === "object" && "value" in _compactHeaderParent ? _compactHeaderParent?.value : _compactHeaderParent} /* default: ID0 */  isRaw={typeof _compactHeaderParent === "object" && "isRaw" in _compactHeaderParent && _compactHeaderParent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_sidebarActive" id={typeof _sidebarActive === "object" && "id" in _sidebarActive ? _sidebarActive?.id : undefined} value={typeof _sidebarActive === "object" && "value" in _sidebarActive ? _sidebarActive?.value : _sidebarActive} /* default: ID0 */  isRaw={typeof _sidebarActive === "object" && "isRaw" in _sidebarActive && _sidebarActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_sidebarAnchorMin" id={typeof _sidebarAnchorMin === "object" && "id" in _sidebarAnchorMin ? _sidebarAnchorMin?.id : undefined} value={typeof _sidebarAnchorMin === "object" && "value" in _sidebarAnchorMin ? _sidebarAnchorMin?.value : _sidebarAnchorMin} /* default: ID0 */  isRaw={typeof _sidebarAnchorMin === "object" && "isRaw" in _sidebarAnchorMin && _sidebarAnchorMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_sidebarAnchorMax" id={typeof _sidebarAnchorMax === "object" && "id" in _sidebarAnchorMax ? _sidebarAnchorMax?.id : undefined} value={typeof _sidebarAnchorMax === "object" && "value" in _sidebarAnchorMax ? _sidebarAnchorMax?.value : _sidebarAnchorMax} /* default: ID0 */  isRaw={typeof _sidebarAnchorMax === "object" && "isRaw" in _sidebarAnchorMax && _sidebarAnchorMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_contentAnchorMin" id={typeof _contentAnchorMin === "object" && "id" in _contentAnchorMin ? _contentAnchorMin?.id : undefined} value={typeof _contentAnchorMin === "object" && "value" in _contentAnchorMin ? _contentAnchorMin?.value : _contentAnchorMin} /* default: ID0 */  isRaw={typeof _contentAnchorMin === "object" && "isRaw" in _contentAnchorMin && _contentAnchorMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_contentAnchorMax" id={typeof _contentAnchorMax === "object" && "id" in _contentAnchorMax ? _contentAnchorMax?.id : undefined} value={typeof _contentAnchorMax === "object" && "value" in _contentAnchorMax ? _contentAnchorMax?.value : _contentAnchorMax} /* default: ID0 */  isRaw={typeof _contentAnchorMax === "object" && "isRaw" in _contentAnchorMax && _contentAnchorMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="_rectTransformLerp" id={typeof _rectTransformLerp === "object" && "id" in _rectTransformLerp ? _rectTransformLerp?.id : undefined} value={typeof _rectTransformLerp === "object" && "value" in _rectTransformLerp ? _rectTransformLerp?.value : _rectTransformLerp} /* default: ID0 */  isRaw={typeof _rectTransformLerp === "object" && "isRaw" in _rectTransformLerp && _rectTransformLerp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_modalAnchorMin" id={typeof _modalAnchorMin === "object" && "id" in _modalAnchorMin ? _modalAnchorMin?.id : undefined} value={typeof _modalAnchorMin === "object" && "value" in _modalAnchorMin ? _modalAnchorMin?.value : _modalAnchorMin} /* default: ID0 */  isRaw={typeof _modalAnchorMin === "object" && "isRaw" in _modalAnchorMin && _modalAnchorMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_modalAnchorMax" id={typeof _modalAnchorMax === "object" && "id" in _modalAnchorMax ? _modalAnchorMax?.id : undefined} value={typeof _modalAnchorMax === "object" && "value" in _modalAnchorMax ? _modalAnchorMax?.value : _modalAnchorMax} /* default: ID0 */  isRaw={typeof _modalAnchorMax === "object" && "isRaw" in _modalAnchorMax && _modalAnchorMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_compactButtonsActive" id={typeof _compactButtonsActive === "object" && "id" in _compactButtonsActive ? _compactButtonsActive?.id : undefined} value={typeof _compactButtonsActive === "object" && "value" in _compactButtonsActive ? _compactButtonsActive?.value : _compactButtonsActive} /* default: ID0 */  isRaw={typeof _compactButtonsActive === "object" && "isRaw" in _compactButtonsActive && _compactButtonsActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_compactButtonsAnchorMin" id={typeof _compactButtonsAnchorMin === "object" && "id" in _compactButtonsAnchorMin ? _compactButtonsAnchorMin?.id : undefined} value={typeof _compactButtonsAnchorMin === "object" && "value" in _compactButtonsAnchorMin ? _compactButtonsAnchorMin?.value : _compactButtonsAnchorMin} /* default: ID0 */  isRaw={typeof _compactButtonsAnchorMin === "object" && "isRaw" in _compactButtonsAnchorMin && _compactButtonsAnchorMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_compactButtonsAnchorMax" id={typeof _compactButtonsAnchorMax === "object" && "id" in _compactButtonsAnchorMax ? _compactButtonsAnchorMax?.id : undefined} value={typeof _compactButtonsAnchorMax === "object" && "value" in _compactButtonsAnchorMax ? _compactButtonsAnchorMax?.value : _compactButtonsAnchorMax} /* default: ID0 */  isRaw={typeof _compactButtonsAnchorMax === "object" && "isRaw" in _compactButtonsAnchorMax && _compactButtonsAnchorMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.Rect]`} name="_compactDetailRect" id={typeof _compactDetailRect === "object" && "id" in _compactDetailRect ? _compactDetailRect?.id : undefined} value={typeof _compactDetailRect === "object" && "value" in _compactDetailRect ? _compactDetailRect?.value : _compactDetailRect} /* default: ID0 */  isRaw={typeof _compactDetailRect === "object" && "isRaw" in _compactDetailRect && _compactDetailRect.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.Rect]`} name="_compactDetailButtonRect" id={typeof _compactDetailButtonRect === "object" && "id" in _compactDetailButtonRect ? _compactDetailButtonRect?.id : undefined} value={typeof _compactDetailButtonRect === "object" && "value" in _compactDetailButtonRect ? _compactDetailButtonRect?.value : _compactDetailButtonRect} /* default: ID0 */  isRaw={typeof _compactDetailButtonRect === "object" && "isRaw" in _compactDetailButtonRect && _compactDetailButtonRect.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_compactDetailText" id={typeof _compactDetailText === "object" && "id" in _compactDetailText ? _compactDetailText?.id : undefined} value={typeof _compactDetailText === "object" && "value" in _compactDetailText ? _compactDetailText?.value : _compactDetailText} /* default: ID0 */  isRaw={typeof _compactDetailText === "object" && "isRaw" in _compactDetailText && _compactDetailText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_compactDetailExpandButton" id={typeof _compactDetailExpandButton === "object" && "id" in _compactDetailExpandButton ? _compactDetailExpandButton?.id : undefined} value={typeof _compactDetailExpandButton === "object" && "value" in _compactDetailExpandButton ? _compactDetailExpandButton?.value : _compactDetailExpandButton} /* default: ID0 */  isRaw={typeof _compactDetailExpandButton === "object" && "isRaw" in _compactDetailExpandButton && _compactDetailExpandButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_newSessionItemRoot" id={typeof _newSessionItemRoot === "object" && "id" in _newSessionItemRoot ? _newSessionItemRoot?.id : undefined} value={typeof _newSessionItemRoot === "object" && "value" in _newSessionItemRoot ? _newSessionItemRoot?.value : _newSessionItemRoot} /* default: ID0 */  isRaw={typeof _newSessionItemRoot === "object" && "isRaw" in _newSessionItemRoot && _newSessionItemRoot.isRaw ? true : undefined} />
        </Component>
      );
    };
    