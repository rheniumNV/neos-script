import { member, Member, Component } from "../../core";
    
    export interface NeosPanelInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Style?: member<any>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
ShowHeader?: member<boolean>;
ShowHandle?: member<boolean>;
Padding?: member<number>;
ZPadding?: member<number>;
Thickness?: member<number>;
WhiteList?: member<any>;
BlackList?: member<any>;
Color?: member<[number, number, number, number]>;
_material?: member<any>;
_panelMesh?: member<any>;
_panelPos?: member<any>;
_handleActive?: member<any>;
_headerActive?: member<any>;
_handleMesh?: member<any>;
_handlePos?: member<any>;
_handleColliderSize?: member<any>;
_headerTitleMesh?: member<any>;
_headerButtonMesh?: member<any>;
_headerCollider?: member<any>;
_headerPos?: member<any>;
_headerTitlePos?: member<any>;
_title?: member<any>;
_titleText?: member<any>;
_indicatePrivate?: member<boolean>;
_titlePos?: member<any>;
_titleBounds?: member<any>;
_contentSlot?: member<any>;
_headerRoot?: member<any>;
_handleAnchorPoint?: member<any>;
_handleAnchorPointPosition?: member<any>;
_userspaceOwner?: member<any>;
_helpGenerator?: member<any>;
_titleButtons?: member<any>;
_highlightedButton?: member<any>;
_helpDialog?: member<any>;
_pinButton?: member<any>;
CloseOverride?: member<any>;
    }
    
    export function NeosPanel(props: NeosPanelInput){
      const { id, persistentId, updateOrder, Enabled,
Style,
AcceptPhysicalTouch,
AcceptRemoteTouch,
ShowHeader,
ShowHandle,
Padding,
ZPadding,
Thickness,
WhiteList,
BlackList,
Color,
_material,
_panelMesh,
_panelPos,
_handleActive,
_headerActive,
_handleMesh,
_handlePos,
_handleColliderSize,
_headerTitleMesh,
_headerButtonMesh,
_headerCollider,
_headerPos,
_headerTitlePos,
_title,
_titleText,
_indicatePrivate,
_titlePos,
_titleBounds,
_contentSlot,
_headerRoot,
_handleAnchorPoint,
_handleAnchorPointPosition,
_userspaceOwner,
_helpGenerator,
_titleButtons,
_highlightedButton,
_helpDialog,
_pinButton,
CloseOverride, } = props;
    
      return (
        <Component type="FrooxEngine.NeosPanel" id={id} persistentId={persistentId} updateOrder={updateOrder} version={2}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.NeosUIStyle]`} name="Style" id={typeof Style === "object" && "id" in Style ? Style?.id : undefined} value={typeof Style === "object" && "value" in Style ? Style?.value : Style} /* default: ID0 */  isRaw={typeof Style === "object" && "isRaw" in Style && Style.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  isRaw={typeof AcceptPhysicalTouch === "object" && "isRaw" in AcceptPhysicalTouch && AcceptPhysicalTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  isRaw={typeof AcceptRemoteTouch === "object" && "isRaw" in AcceptRemoteTouch && AcceptRemoteTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowHeader" id={typeof ShowHeader === "object" && "id" in ShowHeader ? ShowHeader?.id : undefined} value={typeof ShowHeader === "object" && "value" in ShowHeader ? ShowHeader?.value : ShowHeader} /* default: false */  isRaw={typeof ShowHeader === "object" && "isRaw" in ShowHeader && ShowHeader.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowHandle" id={typeof ShowHandle === "object" && "id" in ShowHandle ? ShowHandle?.id : undefined} value={typeof ShowHandle === "object" && "value" in ShowHandle ? ShowHandle?.value : ShowHandle} /* default: false */  isRaw={typeof ShowHandle === "object" && "isRaw" in ShowHandle && ShowHandle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Padding" id={typeof Padding === "object" && "id" in Padding ? Padding?.id : undefined} value={typeof Padding === "object" && "value" in Padding ? Padding?.value : Padding} /* default: 0 */  isRaw={typeof Padding === "object" && "isRaw" in Padding && Padding.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ZPadding" id={typeof ZPadding === "object" && "id" in ZPadding ? ZPadding?.id : undefined} value={typeof ZPadding === "object" && "value" in ZPadding ? ZPadding?.value : ZPadding} /* default: 0 */  isRaw={typeof ZPadding === "object" && "isRaw" in ZPadding && ZPadding.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Thickness" id={typeof Thickness === "object" && "id" in Thickness ? Thickness?.id : undefined} value={typeof Thickness === "object" && "value" in Thickness ? Thickness?.value : Thickness} /* default: 0 */  isRaw={typeof Thickness === "object" && "isRaw" in Thickness && Thickness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.IBounded]`} name="WhiteList" id={typeof WhiteList === "object" && "id" in WhiteList ? WhiteList?.id : undefined} value={typeof WhiteList === "object" && "value" in WhiteList ? WhiteList?.value : WhiteList} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.IBounded] */  isRaw={typeof WhiteList === "object" && "isRaw" in WhiteList && WhiteList.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.IBounded]`} name="BlackList" id={typeof BlackList === "object" && "id" in BlackList ? BlackList?.id : undefined} value={typeof BlackList === "object" && "value" in BlackList ? BlackList?.value : BlackList} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.IBounded] */  isRaw={typeof BlackList === "object" && "isRaw" in BlackList && BlackList.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="Color" id={typeof Color === "object" && "id" in Color ? Color?.id : undefined} value={typeof Color === "object" && "value" in Color ? Color?.value : Color} /* default: [0; 0; 0; 0] */  isRaw={typeof Color === "object" && "isRaw" in Color && Color.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: ID0 */  isRaw={typeof _material === "object" && "isRaw" in _material && _material.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliPlaneMesh]`} name="_panelMesh" id={typeof _panelMesh === "object" && "id" in _panelMesh ? _panelMesh?.id : undefined} value={typeof _panelMesh === "object" && "value" in _panelMesh ? _panelMesh?.value : _panelMesh} /* default: ID0 */  isRaw={typeof _panelMesh === "object" && "isRaw" in _panelMesh && _panelMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_panelPos" id={typeof _panelPos === "object" && "id" in _panelPos ? _panelPos?.id : undefined} value={typeof _panelPos === "object" && "value" in _panelPos ? _panelPos?.value : _panelPos} /* default: ID0 */  isRaw={typeof _panelPos === "object" && "isRaw" in _panelPos && _panelPos.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_handleActive" id={typeof _handleActive === "object" && "id" in _handleActive ? _handleActive?.id : undefined} value={typeof _handleActive === "object" && "value" in _handleActive ? _handleActive?.value : _handleActive} /* default: ID0 */  isRaw={typeof _handleActive === "object" && "isRaw" in _handleActive && _handleActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_headerActive" id={typeof _headerActive === "object" && "id" in _headerActive ? _headerActive?.id : undefined} value={typeof _headerActive === "object" && "value" in _headerActive ? _headerActive?.value : _headerActive} /* default: ID0 */  isRaw={typeof _headerActive === "object" && "isRaw" in _headerActive && _headerActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_handleMesh" id={typeof _handleMesh === "object" && "id" in _handleMesh ? _handleMesh?.id : undefined} value={typeof _handleMesh === "object" && "value" in _handleMesh ? _handleMesh?.value : _handleMesh} /* default: ID0 */  isRaw={typeof _handleMesh === "object" && "isRaw" in _handleMesh && _handleMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_handlePos" id={typeof _handlePos === "object" && "id" in _handlePos ? _handlePos?.id : undefined} value={typeof _handlePos === "object" && "value" in _handlePos ? _handlePos?.value : _handlePos} /* default: ID0 */  isRaw={typeof _handlePos === "object" && "isRaw" in _handlePos && _handlePos.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_handleColliderSize" id={typeof _handleColliderSize === "object" && "id" in _handleColliderSize ? _handleColliderSize?.id : undefined} value={typeof _handleColliderSize === "object" && "value" in _handleColliderSize ? _handleColliderSize?.value : _handleColliderSize} /* default: ID0 */  isRaw={typeof _handleColliderSize === "object" && "isRaw" in _handleColliderSize && _handleColliderSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_headerTitleMesh" id={typeof _headerTitleMesh === "object" && "id" in _headerTitleMesh ? _headerTitleMesh?.id : undefined} value={typeof _headerTitleMesh === "object" && "value" in _headerTitleMesh ? _headerTitleMesh?.value : _headerTitleMesh} /* default: ID0 */  isRaw={typeof _headerTitleMesh === "object" && "isRaw" in _headerTitleMesh && _headerTitleMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BevelSoliStripeMesh]`} name="_headerButtonMesh" id={typeof _headerButtonMesh === "object" && "id" in _headerButtonMesh ? _headerButtonMesh?.id : undefined} value={typeof _headerButtonMesh === "object" && "value" in _headerButtonMesh ? _headerButtonMesh?.value : _headerButtonMesh} /* default: ID0 */  isRaw={typeof _headerButtonMesh === "object" && "isRaw" in _headerButtonMesh && _headerButtonMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_headerCollider" id={typeof _headerCollider === "object" && "id" in _headerCollider ? _headerCollider?.id : undefined} value={typeof _headerCollider === "object" && "value" in _headerCollider ? _headerCollider?.value : _headerCollider} /* default: ID0 */  isRaw={typeof _headerCollider === "object" && "isRaw" in _headerCollider && _headerCollider.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_headerPos" id={typeof _headerPos === "object" && "id" in _headerPos ? _headerPos?.id : undefined} value={typeof _headerPos === "object" && "value" in _headerPos ? _headerPos?.value : _headerPos} /* default: ID0 */  isRaw={typeof _headerPos === "object" && "isRaw" in _headerPos && _headerPos.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_headerTitlePos" id={typeof _headerTitlePos === "object" && "id" in _headerTitlePos ? _headerTitlePos?.id : undefined} value={typeof _headerTitlePos === "object" && "value" in _headerTitlePos ? _headerTitlePos?.value : _headerTitlePos} /* default: ID0 */  isRaw={typeof _headerTitlePos === "object" && "isRaw" in _headerTitlePos && _headerTitlePos.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_title" id={typeof _title === "object" && "id" in _title ? _title?.id : undefined} value={typeof _title === "object" && "value" in _title ? _title?.value : _title} /* default: <i>null</i> */  isRaw={typeof _title === "object" && "isRaw" in _title && _title.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_titleText" id={typeof _titleText === "object" && "id" in _titleText ? _titleText?.id : undefined} value={typeof _titleText === "object" && "value" in _titleText ? _titleText?.value : _titleText} /* default: ID0 */  isRaw={typeof _titleText === "object" && "isRaw" in _titleText && _titleText.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_indicatePrivate" id={typeof _indicatePrivate === "object" && "id" in _indicatePrivate ? _indicatePrivate?.id : undefined} value={typeof _indicatePrivate === "object" && "value" in _indicatePrivate ? _indicatePrivate?.value : _indicatePrivate} /* default: false */  isRaw={typeof _indicatePrivate === "object" && "isRaw" in _indicatePrivate && _indicatePrivate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_titlePos" id={typeof _titlePos === "object" && "id" in _titlePos ? _titlePos?.id : undefined} value={typeof _titlePos === "object" && "value" in _titlePos ? _titlePos?.value : _titlePos} /* default: ID0 */  isRaw={typeof _titlePos === "object" && "isRaw" in _titlePos && _titlePos.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="_titleBounds" id={typeof _titleBounds === "object" && "id" in _titleBounds ? _titleBounds?.id : undefined} value={typeof _titleBounds === "object" && "value" in _titleBounds ? _titleBounds?.value : _titleBounds} /* default: ID0 */  isRaw={typeof _titleBounds === "object" && "isRaw" in _titleBounds && _titleBounds.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_contentSlot" id={typeof _contentSlot === "object" && "id" in _contentSlot ? _contentSlot?.id : undefined} value={typeof _contentSlot === "object" && "value" in _contentSlot ? _contentSlot?.value : _contentSlot} /* default: ID0 */  isRaw={typeof _contentSlot === "object" && "isRaw" in _contentSlot && _contentSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_headerRoot" id={typeof _headerRoot === "object" && "id" in _headerRoot ? _headerRoot?.id : undefined} value={typeof _headerRoot === "object" && "value" in _headerRoot ? _headerRoot?.value : _headerRoot} /* default: ID0 */  isRaw={typeof _headerRoot === "object" && "isRaw" in _headerRoot && _headerRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_handleAnchorPoint" id={typeof _handleAnchorPoint === "object" && "id" in _handleAnchorPoint ? _handleAnchorPoint?.id : undefined} value={typeof _handleAnchorPoint === "object" && "value" in _handleAnchorPoint ? _handleAnchorPoint?.value : _handleAnchorPoint} /* default: ID0 */  isRaw={typeof _handleAnchorPoint === "object" && "isRaw" in _handleAnchorPoint && _handleAnchorPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_handleAnchorPointPosition" id={typeof _handleAnchorPointPosition === "object" && "id" in _handleAnchorPointPosition ? _handleAnchorPointPosition?.id : undefined} value={typeof _handleAnchorPointPosition === "object" && "value" in _handleAnchorPointPosition ? _handleAnchorPointPosition?.value : _handleAnchorPointPosition} /* default: ID0 */  isRaw={typeof _handleAnchorPointPosition === "object" && "isRaw" in _handleAnchorPointPosition && _handleAnchorPointPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.UserRef`} name="_userspaceOwner" id={typeof _userspaceOwner === "object" && "id" in _userspaceOwner ? _userspaceOwner?.id : undefined} value={typeof _userspaceOwner === "object" && "value" in _userspaceOwner ? _userspaceOwner?.value : _userspaceOwner} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof _userspaceOwner === "object" && "isRaw" in _userspaceOwner && _userspaceOwner.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.NeosCanvasPanel]]`} name="_helpGenerator" id={typeof _helpGenerator === "object" && "id" in _helpGenerator ? _helpGenerator?.id : undefined} value={typeof _helpGenerator === "object" && "value" in _helpGenerator ? _helpGenerator?.value : _helpGenerator} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof _helpGenerator === "object" && "isRaw" in _helpGenerator && _helpGenerator.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.NeosPanel+TitleButton]`} name="_titleButtons" id={typeof _titleButtons === "object" && "id" in _titleButtons ? _titleButtons?.id : undefined} value={typeof _titleButtons === "object" && "value" in _titleButtons ? _titleButtons?.value : _titleButtons} /* default: FrooxEngine.SyncList`1[FrooxEngine.NeosPanel+TitleButton] */  isRaw={typeof _titleButtons === "object" && "isRaw" in _titleButtons && _titleButtons.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosPanel+TitleButton]`} name="_highlightedButton" id={typeof _highlightedButton === "object" && "id" in _highlightedButton ? _highlightedButton?.id : undefined} value={typeof _highlightedButton === "object" && "value" in _highlightedButton ? _highlightedButton?.value : _highlightedButton} /* default: ID0 */  isRaw={typeof _highlightedButton === "object" && "isRaw" in _highlightedButton && _highlightedButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosCanvasPanel]`} name="_helpDialog" id={typeof _helpDialog === "object" && "id" in _helpDialog ? _helpDialog?.id : undefined} value={typeof _helpDialog === "object" && "value" in _helpDialog ? _helpDialog?.value : _helpDialog} /* default: ID0 */  isRaw={typeof _helpDialog === "object" && "isRaw" in _helpDialog && _helpDialog.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosPanel+TitleButton]`} name="_pinButton" id={typeof _pinButton === "object" && "id" in _pinButton ? _pinButton?.id : undefined} value={typeof _pinButton === "object" && "value" in _pinButton ? _pinButton?.value : _pinButton} /* default: ID0 */  isRaw={typeof _pinButton === "object" && "isRaw" in _pinButton && _pinButton.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.NeosPanel]]`} name="CloseOverride" id={typeof CloseOverride === "object" && "id" in CloseOverride ? CloseOverride?.id : undefined} value={typeof CloseOverride === "object" && "value" in CloseOverride ? CloseOverride?.value : CloseOverride} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof CloseOverride === "object" && "isRaw" in CloseOverride && CloseOverride.isRaw ? true : undefined} />
        </Component>
      );
    };
    