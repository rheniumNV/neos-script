import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
_itemsRoot, } = props;
    
      return (
        <Component type="FrooxEngine.NeosDash" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Arc" id={typeof Arc === "object" && "id" in Arc ? Arc?.id : undefined} value={typeof Arc === "object" && "value" in Arc ? Arc?.value : Arc} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GapPercent" id={typeof GapPercent === "object" && "id" in GapPercent ? GapPercent?.id : undefined} value={typeof GapPercent === "object" && "value" in GapPercent ? GapPercent?.value : GapPercent} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Thickness" id={typeof Thickness === "object" && "id" in Thickness ? Thickness?.id : undefined} value={typeof Thickness === "object" && "value" in Thickness ? Thickness?.value : Thickness} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Width" id={typeof Width === "object" && "id" in Width ? Width?.id : undefined} value={typeof Width === "object" && "value" in Width ? Width?.value : Width} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoWidth" id={typeof AutoWidth === "object" && "id" in AutoWidth ? AutoWidth?.id : undefined} value={typeof AutoWidth === "object" && "value" in AutoWidth ? AutoWidth?.value : AutoWidth} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Tilt" id={typeof Tilt === "object" && "id" in Tilt ? Tilt?.id : undefined} value={typeof Tilt === "object" && "value" in Tilt ? Tilt?.value : Tilt} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HighlightRadiusOffset" id={typeof HighlightRadiusOffset === "object" && "id" in HighlightRadiusOffset ? HighlightRadiusOffset?.id : undefined} value={typeof HighlightRadiusOffset === "object" && "value" in HighlightRadiusOffset ? HighlightRadiusOffset?.value : HighlightRadiusOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="IconOffset" id={typeof IconOffset === "object" && "id" in IconOffset ? IconOffset?.id : undefined} value={typeof IconOffset === "object" && "value" in IconOffset ? IconOffset?.value : IconOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HighlightedIconOffset" id={typeof HighlightedIconOffset === "object" && "id" in HighlightedIconOffset ? HighlightedIconOffset?.id : undefined} value={typeof HighlightedIconOffset === "object" && "value" in HighlightedIconOffset ? HighlightedIconOffset?.value : HighlightedIconOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ItemTransitionSpeed" id={typeof ItemTransitionSpeed === "object" && "id" in ItemTransitionSpeed ? ItemTransitionSpeed?.id : undefined} value={typeof ItemTransitionSpeed === "object" && "value" in ItemTransitionSpeed ? ItemTransitionSpeed?.value : ItemTransitionSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RelativeIconSize" id={typeof RelativeIconSize === "object" && "id" in RelativeIconSize ? RelativeIconSize?.id : undefined} value={typeof RelativeIconSize === "object" && "value" in RelativeIconSize ? RelativeIconSize?.value : RelativeIconSize} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TextSize" id={typeof TextSize === "object" && "id" in TextSize ? TextSize?.id : undefined} value={typeof TextSize === "object" && "value" in TextSize ? TextSize?.value : TextSize} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TextTilt" id={typeof TextTilt === "object" && "id" in TextTilt ? TextTilt?.id : undefined} value={typeof TextTilt === "object" && "value" in TextTilt ? TextTilt?.value : TextTilt} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InactiveTextRelativeSize" id={typeof InactiveTextRelativeSize === "object" && "id" in InactiveTextRelativeSize ? InactiveTextRelativeSize?.id : undefined} value={typeof InactiveTextRelativeSize === "object" && "value" in InactiveTextRelativeSize ? InactiveTextRelativeSize?.value : InactiveTextRelativeSize} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InactiveTextRelativeAlpha" id={typeof InactiveTextRelativeAlpha === "object" && "id" in InactiveTextRelativeAlpha ? InactiveTextRelativeAlpha?.id : undefined} value={typeof InactiveTextRelativeAlpha === "object" && "value" in InactiveTextRelativeAlpha ? InactiveTextRelativeAlpha?.value : InactiveTextRelativeAlpha} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RespondToPhysicalTouch" id={typeof RespondToPhysicalTouch === "object" && "id" in RespondToPhysicalTouch ? RespondToPhysicalTouch?.id : undefined} value={typeof RespondToPhysicalTouch === "object" && "value" in RespondToPhysicalTouch ? RespondToPhysicalTouch?.value : RespondToPhysicalTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RespondToRemoteTouch" id={typeof RespondToRemoteTouch === "object" && "id" in RespondToRemoteTouch ? RespondToRemoteTouch?.id : undefined} value={typeof RespondToRemoteTouch === "object" && "value" in RespondToRemoteTouch ? RespondToRemoteTouch?.value : RespondToRemoteTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ShowLerp" id={typeof ShowLerp === "object" && "id" in ShowLerp ? ShowLerp?.id : undefined} value={typeof ShowLerp === "object" && "value" in ShowLerp ? ShowLerp?.value : ShowLerp} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SubitemShowLerp" id={typeof SubitemShowLerp === "object" && "id" in SubitemShowLerp ? SubitemShowLerp?.id : undefined} value={typeof SubitemShowLerp === "object" && "value" in SubitemShowLerp ? SubitemShowLerp?.value : SubitemShowLerp} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosDash+Item]`} name="SubitemsRoot" id={typeof SubitemsRoot === "object" && "id" in SubitemsRoot ? SubitemsRoot?.id : undefined} value={typeof SubitemsRoot === "object" && "value" in SubitemsRoot ? SubitemsRoot?.value : SubitemsRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DashEnabled" id={typeof DashEnabled === "object" && "id" in DashEnabled ? DashEnabled?.id : undefined} value={typeof DashEnabled === "object" && "value" in DashEnabled ? DashEnabled?.value : DashEnabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosDash+Item]`} name="HighlightedItem" id={typeof HighlightedItem === "object" && "id" in HighlightedItem ? HighlightedItem?.id : undefined} value={typeof HighlightedItem === "object" && "value" in HighlightedItem ? HighlightedItem?.value : HighlightedItem} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Component]`} name="HighlightingComponent" id={typeof HighlightingComponent === "object" && "id" in HighlightingComponent ? HighlightingComponent?.id : undefined} value={typeof HighlightingComponent === "object" && "value" in HighlightingComponent ? HighlightingComponent?.value : HighlightingComponent} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.DashItemEventHandler]`} name="OnItemHover" id={typeof OnItemHover === "object" && "id" in OnItemHover ? OnItemHover?.id : undefined} value={typeof OnItemHover === "object" && "value" in OnItemHover ? OnItemHover?.value : OnItemHover} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.DashItemEventHandler]`} name="OnItemPress" id={typeof OnItemPress === "object" && "id" in OnItemPress ? OnItemPress?.id : undefined} value={typeof OnItemPress === "object" && "value" in OnItemPress ? OnItemPress?.value : OnItemPress} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.DashItemEventHandler]`} name="OnDisabledItemPress" id={typeof OnDisabledItemPress === "object" && "id" in OnDisabledItemPress ? OnDisabledItemPress?.id : undefined} value={typeof OnDisabledItemPress === "object" && "value" in OnDisabledItemPress ? OnDisabledItemPress?.value : OnDisabledItemPress} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextUnlitMaterial]`} name="_fontMaterial" id={typeof _fontMaterial === "object" && "id" in _fontMaterial ? _fontMaterial?.id : undefined} value={typeof _fontMaterial === "object" && "value" in _fontMaterial ? _fontMaterial?.value : _fontMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_itemsRoot" id={typeof _itemsRoot === "object" && "id" in _itemsRoot ? _itemsRoot?.id : undefined} value={typeof _itemsRoot === "object" && "value" in _itemsRoot ? _itemsRoot?.value : _itemsRoot} /* default: ID0 */  />
        </Component>
      );
    };
    