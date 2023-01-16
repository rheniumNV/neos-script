import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface DesktopControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
FollowCursor?: member<boolean>;
LegacyInputMode?: member<boolean>;
Brightness?: member<number>;
Opacity?: member<number>;
_displayColor?: member<any>;
_displayRect?: member<any>;
_desktopTexture?: member<any>;
_interactionRelay?: member<any>;
_currentControl?: member<any>;
    }
    
    export function DesktopController(props: DesktopControllerInput){
      const { id, persistentId, updateOrder, Enabled,
FollowCursor,
LegacyInputMode,
Brightness,
Opacity,
_displayColor,
_displayRect,
_desktopTexture,
_interactionRelay,
_currentControl, } = props;
    
      return (
        <Component type="FrooxEngine.DesktopController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FollowCursor" id={typeof FollowCursor === "object" && "id" in FollowCursor ? FollowCursor?.id : undefined} value={typeof FollowCursor === "object" && "value" in FollowCursor ? FollowCursor?.value : FollowCursor} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="LegacyInputMode" id={typeof LegacyInputMode === "object" && "id" in LegacyInputMode ? LegacyInputMode?.id : undefined} value={typeof LegacyInputMode === "object" && "value" in LegacyInputMode ? LegacyInputMode?.value : LegacyInputMode} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Brightness" id={typeof Brightness === "object" && "id" in Brightness ? Brightness?.id : undefined} value={typeof Brightness === "object" && "value" in Brightness ? Brightness?.value : Brightness} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Opacity" id={typeof Opacity === "object" && "id" in Opacity ? Opacity?.id : undefined} value={typeof Opacity === "object" && "value" in Opacity ? Opacity?.value : Opacity} /* default: 0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.color]`} name="_displayColor" id={typeof _displayColor === "object" && "id" in _displayColor ? _displayColor?.id : undefined} value={typeof _displayColor === "object" && "value" in _displayColor ? _displayColor?.value : _displayColor} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_displayRect" id={typeof _displayRect === "object" && "id" in _displayRect ? _displayRect?.id : undefined} value={typeof _displayRect === "object" && "value" in _displayRect ? _displayRect?.value : _displayRect} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.DesktopTextureProvider]`} name="_desktopTexture" id={typeof _desktopTexture === "object" && "id" in _desktopTexture ? _desktopTexture?.id : undefined} value={typeof _desktopTexture === "object" && "value" in _desktopTexture ? _desktopTexture?.value : _desktopTexture} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.DesktopInteractionRelay]`} name="_interactionRelay" id={typeof _interactionRelay === "object" && "id" in _interactionRelay ? _interactionRelay?.id : undefined} value={typeof _interactionRelay === "object" && "value" in _interactionRelay ? _interactionRelay?.value : _interactionRelay} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.DesktopControlDialog]`} name="_currentControl" id={typeof _currentControl === "object" && "id" in _currentControl ? _currentControl?.id : undefined} value={typeof _currentControl === "object" && "value" in _currentControl ? _currentControl?.value : _currentControl} /* default: ID0 */  />
        </Component>
      );
    };
    