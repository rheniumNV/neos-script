import { member, Member, Component } from "../../core";
    
    export interface NeosDashInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Arc?: member<number>;
GapPercent?: member<number>;
Thickness?: member<number>;
Radius?: member<number>;
Width?: member<number>;
AutoWidth?: member<boolean>;
Tilt?: member<number>;
HighlightRadiusOffset?: member<number>;
IconOffset?: member<number>;
HighlightedIconOffset?: member<number>;
ItemTransitionSpeed?: member<number>;
RelativeIconSize?: member<number>;
TextSize?: member<number>;
TextTilt?: member<number>;
InactiveTextRelativeSize?: member<number>;
InactiveTextRelativeAlpha?: member<number>;
RespondToPhysicalTouch?: member<boolean>;
RespondToRemoteTouch?: member<boolean>;
ShowLerp?: member<number>;
SubitemShowLerp?: member<number>;
SubitemsRoot?: member<any>;
DashEnabled?: member<boolean>;
HighlightedItem?: member<any>;
HighlightingComponent?: member<any>;
OnItemHover?: member<any>;
OnItemPress?: member<any>;
OnDisabledItemPress?: member<any>;
HighPriorityIntegration?: member<boolean>;
_fontMaterial?: member<any>;
_items?: member<any>;
_subItems?: member<any>;
_itemsRoot?: member<any>;
    }
    
    export function NeosDash(props: NeosDashInput){
      const { id, persistentId, updateOrder, Enabled,
Arc,
GapPercent,
Thickness,
Radius,
Width,
AutoWidth,
Tilt,
HighlightRadiusOffset,
IconOffset,
HighlightedIconOffset,
ItemTransitionSpeed,
RelativeIconSize,
TextSize,
TextTilt,
InactiveTextRelativeSize,
InactiveTextRelativeAlpha,
RespondToPhysicalTouch,
RespondToRemoteTouch,
ShowLerp,
SubitemShowLerp,
SubitemsRoot,
DashEnabled,
HighlightedItem,
HighlightingComponent,
OnItemHover,
OnItemPress,
OnDisabledItemPress,
HighPriorityIntegration,
_fontMaterial,
_items,
_subItems,
_itemsRoot, } = props;
    
      return (
        <Component type="FrooxEngine.NeosDash" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Arc" id={typeof Arc === "object" && "id" in Arc ? Arc?.id : undefined} value={typeof Arc === "object" && "value" in Arc ? Arc?.value : Arc} /* default: 0 */  isRaw={typeof Arc === "object" && "isRaw" in Arc && Arc.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GapPercent" id={typeof GapPercent === "object" && "id" in GapPercent ? GapPercent?.id : undefined} value={typeof GapPercent === "object" && "value" in GapPercent ? GapPercent?.value : GapPercent} /* default: 0 */  isRaw={typeof GapPercent === "object" && "isRaw" in GapPercent && GapPercent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Thickness" id={typeof Thickness === "object" && "id" in Thickness ? Thickness?.id : undefined} value={typeof Thickness === "object" && "value" in Thickness ? Thickness?.value : Thickness} /* default: 0 */  isRaw={typeof Thickness === "object" && "isRaw" in Thickness && Thickness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  isRaw={typeof Radius === "object" && "isRaw" in Radius && Radius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Width" id={typeof Width === "object" && "id" in Width ? Width?.id : undefined} value={typeof Width === "object" && "value" in Width ? Width?.value : Width} /* default: 0 */  isRaw={typeof Width === "object" && "isRaw" in Width && Width.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoWidth" id={typeof AutoWidth === "object" && "id" in AutoWidth ? AutoWidth?.id : undefined} value={typeof AutoWidth === "object" && "value" in AutoWidth ? AutoWidth?.value : AutoWidth} /* default: false */  isRaw={typeof AutoWidth === "object" && "isRaw" in AutoWidth && AutoWidth.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Tilt" id={typeof Tilt === "object" && "id" in Tilt ? Tilt?.id : undefined} value={typeof Tilt === "object" && "value" in Tilt ? Tilt?.value : Tilt} /* default: 0 */  isRaw={typeof Tilt === "object" && "isRaw" in Tilt && Tilt.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HighlightRadiusOffset" id={typeof HighlightRadiusOffset === "object" && "id" in HighlightRadiusOffset ? HighlightRadiusOffset?.id : undefined} value={typeof HighlightRadiusOffset === "object" && "value" in HighlightRadiusOffset ? HighlightRadiusOffset?.value : HighlightRadiusOffset} /* default: 0 */  isRaw={typeof HighlightRadiusOffset === "object" && "isRaw" in HighlightRadiusOffset && HighlightRadiusOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="IconOffset" id={typeof IconOffset === "object" && "id" in IconOffset ? IconOffset?.id : undefined} value={typeof IconOffset === "object" && "value" in IconOffset ? IconOffset?.value : IconOffset} /* default: 0 */  isRaw={typeof IconOffset === "object" && "isRaw" in IconOffset && IconOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HighlightedIconOffset" id={typeof HighlightedIconOffset === "object" && "id" in HighlightedIconOffset ? HighlightedIconOffset?.id : undefined} value={typeof HighlightedIconOffset === "object" && "value" in HighlightedIconOffset ? HighlightedIconOffset?.value : HighlightedIconOffset} /* default: 0 */  isRaw={typeof HighlightedIconOffset === "object" && "isRaw" in HighlightedIconOffset && HighlightedIconOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ItemTransitionSpeed" id={typeof ItemTransitionSpeed === "object" && "id" in ItemTransitionSpeed ? ItemTransitionSpeed?.id : undefined} value={typeof ItemTransitionSpeed === "object" && "value" in ItemTransitionSpeed ? ItemTransitionSpeed?.value : ItemTransitionSpeed} /* default: 0 */  isRaw={typeof ItemTransitionSpeed === "object" && "isRaw" in ItemTransitionSpeed && ItemTransitionSpeed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RelativeIconSize" id={typeof RelativeIconSize === "object" && "id" in RelativeIconSize ? RelativeIconSize?.id : undefined} value={typeof RelativeIconSize === "object" && "value" in RelativeIconSize ? RelativeIconSize?.value : RelativeIconSize} /* default: 0 */  isRaw={typeof RelativeIconSize === "object" && "isRaw" in RelativeIconSize && RelativeIconSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TextSize" id={typeof TextSize === "object" && "id" in TextSize ? TextSize?.id : undefined} value={typeof TextSize === "object" && "value" in TextSize ? TextSize?.value : TextSize} /* default: 0 */  isRaw={typeof TextSize === "object" && "isRaw" in TextSize && TextSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TextTilt" id={typeof TextTilt === "object" && "id" in TextTilt ? TextTilt?.id : undefined} value={typeof TextTilt === "object" && "value" in TextTilt ? TextTilt?.value : TextTilt} /* default: 0 */  isRaw={typeof TextTilt === "object" && "isRaw" in TextTilt && TextTilt.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InactiveTextRelativeSize" id={typeof InactiveTextRelativeSize === "object" && "id" in InactiveTextRelativeSize ? InactiveTextRelativeSize?.id : undefined} value={typeof InactiveTextRelativeSize === "object" && "value" in InactiveTextRelativeSize ? InactiveTextRelativeSize?.value : InactiveTextRelativeSize} /* default: 0 */  isRaw={typeof InactiveTextRelativeSize === "object" && "isRaw" in InactiveTextRelativeSize && InactiveTextRelativeSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InactiveTextRelativeAlpha" id={typeof InactiveTextRelativeAlpha === "object" && "id" in InactiveTextRelativeAlpha ? InactiveTextRelativeAlpha?.id : undefined} value={typeof InactiveTextRelativeAlpha === "object" && "value" in InactiveTextRelativeAlpha ? InactiveTextRelativeAlpha?.value : InactiveTextRelativeAlpha} /* default: 0 */  isRaw={typeof InactiveTextRelativeAlpha === "object" && "isRaw" in InactiveTextRelativeAlpha && InactiveTextRelativeAlpha.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RespondToPhysicalTouch" id={typeof RespondToPhysicalTouch === "object" && "id" in RespondToPhysicalTouch ? RespondToPhysicalTouch?.id : undefined} value={typeof RespondToPhysicalTouch === "object" && "value" in RespondToPhysicalTouch ? RespondToPhysicalTouch?.value : RespondToPhysicalTouch} /* default: false */  isRaw={typeof RespondToPhysicalTouch === "object" && "isRaw" in RespondToPhysicalTouch && RespondToPhysicalTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RespondToRemoteTouch" id={typeof RespondToRemoteTouch === "object" && "id" in RespondToRemoteTouch ? RespondToRemoteTouch?.id : undefined} value={typeof RespondToRemoteTouch === "object" && "value" in RespondToRemoteTouch ? RespondToRemoteTouch?.value : RespondToRemoteTouch} /* default: false */  isRaw={typeof RespondToRemoteTouch === "object" && "isRaw" in RespondToRemoteTouch && RespondToRemoteTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ShowLerp" id={typeof ShowLerp === "object" && "id" in ShowLerp ? ShowLerp?.id : undefined} value={typeof ShowLerp === "object" && "value" in ShowLerp ? ShowLerp?.value : ShowLerp} /* default: 0 */  isRaw={typeof ShowLerp === "object" && "isRaw" in ShowLerp && ShowLerp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SubitemShowLerp" id={typeof SubitemShowLerp === "object" && "id" in SubitemShowLerp ? SubitemShowLerp?.id : undefined} value={typeof SubitemShowLerp === "object" && "value" in SubitemShowLerp ? SubitemShowLerp?.value : SubitemShowLerp} /* default: 0 */  isRaw={typeof SubitemShowLerp === "object" && "isRaw" in SubitemShowLerp && SubitemShowLerp.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosDash+Item]`} name="SubitemsRoot" id={typeof SubitemsRoot === "object" && "id" in SubitemsRoot ? SubitemsRoot?.id : undefined} value={typeof SubitemsRoot === "object" && "value" in SubitemsRoot ? SubitemsRoot?.value : SubitemsRoot} /* default: ID0 */  isRaw={typeof SubitemsRoot === "object" && "isRaw" in SubitemsRoot && SubitemsRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DashEnabled" id={typeof DashEnabled === "object" && "id" in DashEnabled ? DashEnabled?.id : undefined} value={typeof DashEnabled === "object" && "value" in DashEnabled ? DashEnabled?.value : DashEnabled} /* default: false */  isRaw={typeof DashEnabled === "object" && "isRaw" in DashEnabled && DashEnabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosDash+Item]`} name="HighlightedItem" id={typeof HighlightedItem === "object" && "id" in HighlightedItem ? HighlightedItem?.id : undefined} value={typeof HighlightedItem === "object" && "value" in HighlightedItem ? HighlightedItem?.value : HighlightedItem} /* default: ID0 */  isRaw={typeof HighlightedItem === "object" && "isRaw" in HighlightedItem && HighlightedItem.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Component]`} name="HighlightingComponent" id={typeof HighlightingComponent === "object" && "id" in HighlightingComponent ? HighlightingComponent?.id : undefined} value={typeof HighlightingComponent === "object" && "value" in HighlightingComponent ? HighlightingComponent?.value : HighlightingComponent} /* default: ID0 */  isRaw={typeof HighlightingComponent === "object" && "isRaw" in HighlightingComponent && HighlightingComponent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.DashItemEventHandler]`} name="OnItemHover" id={typeof OnItemHover === "object" && "id" in OnItemHover ? OnItemHover?.id : undefined} value={typeof OnItemHover === "object" && "value" in OnItemHover ? OnItemHover?.value : OnItemHover} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnItemHover === "object" && "isRaw" in OnItemHover && OnItemHover.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.DashItemEventHandler]`} name="OnItemPress" id={typeof OnItemPress === "object" && "id" in OnItemPress ? OnItemPress?.id : undefined} value={typeof OnItemPress === "object" && "value" in OnItemPress ? OnItemPress?.value : OnItemPress} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnItemPress === "object" && "isRaw" in OnItemPress && OnItemPress.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.DashItemEventHandler]`} name="OnDisabledItemPress" id={typeof OnDisabledItemPress === "object" && "id" in OnDisabledItemPress ? OnDisabledItemPress?.id : undefined} value={typeof OnDisabledItemPress === "object" && "value" in OnDisabledItemPress ? OnDisabledItemPress?.value : OnDisabledItemPress} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnDisabledItemPress === "object" && "isRaw" in OnDisabledItemPress && OnDisabledItemPress.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  isRaw={typeof HighPriorityIntegration === "object" && "isRaw" in HighPriorityIntegration && HighPriorityIntegration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextUnlitMaterial]`} name="_fontMaterial" id={typeof _fontMaterial === "object" && "id" in _fontMaterial ? _fontMaterial?.id : undefined} value={typeof _fontMaterial === "object" && "value" in _fontMaterial ? _fontMaterial?.value : _fontMaterial} /* default: ID0 */  isRaw={typeof _fontMaterial === "object" && "isRaw" in _fontMaterial && _fontMaterial.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.NeosDash+Item]`} name="_items" id={typeof _items === "object" && "id" in _items ? _items?.id : undefined} value={typeof _items === "object" && "value" in _items ? _items?.value : _items} /* default: FrooxEngine.SyncList`1[FrooxEngine.NeosDash+Item] */  isRaw={typeof _items === "object" && "isRaw" in _items && _items.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.NeosDash+Item]`} name="_subItems" id={typeof _subItems === "object" && "id" in _subItems ? _subItems?.id : undefined} value={typeof _subItems === "object" && "value" in _subItems ? _subItems?.value : _subItems} /* default: FrooxEngine.SyncList`1[FrooxEngine.NeosDash+Item] */  isRaw={typeof _subItems === "object" && "isRaw" in _subItems && _subItems.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_itemsRoot" id={typeof _itemsRoot === "object" && "id" in _itemsRoot ? _itemsRoot?.id : undefined} value={typeof _itemsRoot === "object" && "value" in _itemsRoot ? _itemsRoot?.value : _itemsRoot} /* default: ID0 */  isRaw={typeof _itemsRoot === "object" && "isRaw" in _itemsRoot && _itemsRoot.isRaw ? true : undefined} />
        </Component>
      );
    };
    