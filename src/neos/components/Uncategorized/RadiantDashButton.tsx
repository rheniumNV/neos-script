import { member, Member, Component } from "../../core";
    
    export interface RadiantDashButtonInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Dash?: member<any>;
Screen?: member<any>;
_switchingEnabled?: member<any>;
_currentScreen?: member<any>;
_button?: member<any>;
_text?: member<any>;
_icon?: member<any>;
_rootRect?: member<any>;
_iconRect?: member<any>;
    }
    
    export function RadiantDashButton(props: RadiantDashButtonInput){
      const { id, persistentId, updateOrder, Enabled,
Dash,
Screen,
_switchingEnabled,
_currentScreen,
_button,
_text,
_icon,
_rootRect,
_iconRect, } = props;
    
      return (
        <Component type="FrooxEngine.RadiantDashButton" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RadiantDash]`} name="Dash" id={typeof Dash === "object" && "id" in Dash ? Dash?.id : undefined} value={typeof Dash === "object" && "value" in Dash ? Dash?.value : Dash} /* default: ID0 */  isRaw={typeof Dash === "object" && "isRaw" in Dash && Dash.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RadiantDashScreen]`} name="Screen" id={typeof Screen === "object" && "id" in Screen ? Screen?.id : undefined} value={typeof Screen === "object" && "value" in Screen ? Screen?.value : Screen} /* default: ID0 */  isRaw={typeof Screen === "object" && "isRaw" in Screen && Screen.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[System.Boolean]]`} name="_switchingEnabled" id={typeof _switchingEnabled === "object" && "id" in _switchingEnabled ? _switchingEnabled?.id : undefined} value={typeof _switchingEnabled === "object" && "value" in _switchingEnabled ? _switchingEnabled?.value : _switchingEnabled} /* default: ID0 */  isRaw={typeof _switchingEnabled === "object" && "isRaw" in _switchingEnabled && _switchingEnabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.SyncRef\`1[FrooxEngine.RadiantDashScreen]]`} name="_currentScreen" id={typeof _currentScreen === "object" && "id" in _currentScreen ? _currentScreen?.id : undefined} value={typeof _currentScreen === "object" && "value" in _currentScreen ? _currentScreen?.value : _currentScreen} /* default: ID0 */  isRaw={typeof _currentScreen === "object" && "isRaw" in _currentScreen && _currentScreen.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_button" id={typeof _button === "object" && "id" in _button ? _button?.id : undefined} value={typeof _button === "object" && "value" in _button ? _button?.value : _button} /* default: ID0 */  isRaw={typeof _button === "object" && "isRaw" in _button && _button.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_text" id={typeof _text === "object" && "id" in _text ? _text?.id : undefined} value={typeof _text === "object" && "value" in _text ? _text?.value : _text} /* default: ID0 */  isRaw={typeof _text === "object" && "isRaw" in _text && _text.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Image]`} name="_icon" id={typeof _icon === "object" && "id" in _icon ? _icon?.id : undefined} value={typeof _icon === "object" && "value" in _icon ? _icon?.value : _icon} /* default: ID0 */  isRaw={typeof _icon === "object" && "isRaw" in _icon && _icon.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_rootRect" id={typeof _rootRect === "object" && "id" in _rootRect ? _rootRect?.id : undefined} value={typeof _rootRect === "object" && "value" in _rootRect ? _rootRect?.value : _rootRect} /* default: ID0 */  isRaw={typeof _rootRect === "object" && "isRaw" in _rootRect && _rootRect.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="_iconRect" id={typeof _iconRect === "object" && "id" in _iconRect ? _iconRect?.id : undefined} value={typeof _iconRect === "object" && "value" in _iconRect ? _iconRect?.value : _iconRect} /* default: ID0 */  isRaw={typeof _iconRect === "object" && "isRaw" in _iconRect && _iconRect.isRaw ? true : undefined} />
        </Component>
      );
    };
    