import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface NeosLogoMenuControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DefaultFontMaterial?: member<any>;
DisabledOutlineColor?: member<[number, number, number, number]>;
DisabledFillColor?: member<[number, number, number, number]>;
LogoCircle?: member<boolean>;
GenerateColliders?: member<boolean>;
HighlightRadiusOffset?: member<number>;
logoMenuMesh?: member<any>;
circleMenuItems?: member<any>;
independentMenuItems?: member<any>;
itemsArcs?: member<any>;
_overridesDrive?: member<any>;
_independentDrive?: member<any>;
menuItemsSlot?: member<any>;
    }
    
    export function NeosLogoMenuController(props: NeosLogoMenuControllerInput){
      const { id, persistentId, updateOrder, Enabled,
DefaultFontMaterial,
DisabledOutlineColor,
DisabledFillColor,
LogoCircle,
GenerateColliders,
HighlightRadiusOffset,
logoMenuMesh,
circleMenuItems,
independentMenuItems,
itemsArcs,
_overridesDrive,
_independentDrive,
menuItemsSlot, } = props;
    
      return (
        <Component type="FrooxEngine.NeosLogoMenuController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextUnlitMaterial]`} name="DefaultFontMaterial" id={typeof DefaultFontMaterial === "object" && "id" in DefaultFontMaterial ? DefaultFontMaterial?.id : undefined} value={typeof DefaultFontMaterial === "object" && "value" in DefaultFontMaterial ? DefaultFontMaterial?.value : DefaultFontMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="DisabledOutlineColor" id={typeof DisabledOutlineColor === "object" && "id" in DisabledOutlineColor ? DisabledOutlineColor?.id : undefined} value={typeof DisabledOutlineColor === "object" && "value" in DisabledOutlineColor ? DisabledOutlineColor?.value : DisabledOutlineColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="DisabledFillColor" id={typeof DisabledFillColor === "object" && "id" in DisabledFillColor ? DisabledFillColor?.id : undefined} value={typeof DisabledFillColor === "object" && "value" in DisabledFillColor ? DisabledFillColor?.value : DisabledFillColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="LogoCircle" id={typeof LogoCircle === "object" && "id" in LogoCircle ? LogoCircle?.id : undefined} value={typeof LogoCircle === "object" && "value" in LogoCircle ? LogoCircle?.value : LogoCircle} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="GenerateColliders" id={typeof GenerateColliders === "object" && "id" in GenerateColliders ? GenerateColliders?.id : undefined} value={typeof GenerateColliders === "object" && "value" in GenerateColliders ? GenerateColliders?.value : GenerateColliders} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HighlightRadiusOffset" id={typeof HighlightRadiusOffset === "object" && "id" in HighlightRadiusOffset ? HighlightRadiusOffset?.id : undefined} value={typeof HighlightRadiusOffset === "object" && "value" in HighlightRadiusOffset ? HighlightRadiusOffset?.value : HighlightRadiusOffset} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.NeosLogoMenuMesh]`} name="logoMenuMesh" id={typeof logoMenuMesh === "object" && "id" in logoMenuMesh ? logoMenuMesh?.id : undefined} value={typeof logoMenuMesh === "object" && "value" in logoMenuMesh ? logoMenuMesh?.value : logoMenuMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="circleMenuItems" id={typeof circleMenuItems === "object" && "id" in circleMenuItems ? circleMenuItems?.id : undefined} value={typeof circleMenuItems === "object" && "value" in circleMenuItems ? circleMenuItems?.value : circleMenuItems} /* default: FrooxEngine.SyncList`1[FrooxEngine.NeosLogoMenuController+Item] */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.NeosLogoMenuController+Item]`} name="independentMenuItems" id={typeof independentMenuItems === "object" && "id" in independentMenuItems ? independentMenuItems?.id : undefined} value={typeof independentMenuItems === "object" && "value" in independentMenuItems ? independentMenuItems?.value : independentMenuItems} /* default: FrooxEngine.SyncList`1[FrooxEngine.NeosLogoMenuController+Item] */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.NeosLogoMenuController+ItemsArc]`} name="itemsArcs" id={typeof itemsArcs === "object" && "id" in itemsArcs ? itemsArcs?.id : undefined} value={typeof itemsArcs === "object" && "value" in itemsArcs ? itemsArcs?.value : itemsArcs} /* default: FrooxEngine.SyncList`1[FrooxEngine.NeosLogoMenuController+ItemsArc] */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SyncList\`1[FrooxEngine.NeosLogoMenuMesh+MenuSegment]]`} name="_overridesDrive" id={typeof _overridesDrive === "object" && "id" in _overridesDrive ? _overridesDrive?.id : undefined} value={typeof _overridesDrive === "object" && "value" in _overridesDrive ? _overridesDrive?.value : _overridesDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SyncList\`1[FrooxEngine.NeosLogoMenuMesh+MenuSegment]]`} name="_independentDrive" id={typeof _independentDrive === "object" && "id" in _independentDrive ? _independentDrive?.id : undefined} value={typeof _independentDrive === "object" && "value" in _independentDrive ? _independentDrive?.value : _independentDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="menuItemsSlot" id={typeof menuItemsSlot === "object" && "id" in menuItemsSlot ? menuItemsSlot?.id : undefined} value={typeof menuItemsSlot === "object" && "value" in menuItemsSlot ? menuItemsSlot?.value : menuItemsSlot} /* default: ID0 */  />
        </Component>
      );
    };
    