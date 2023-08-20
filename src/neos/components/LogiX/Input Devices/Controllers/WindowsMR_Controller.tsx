import { member, Member, Component } from "../../../../core";
    
    export interface WindowsMR_ControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
User?: member<any>;
Node?: member<any>;
_isActive?: member<boolean>;
_batteryLevelStream?: member<any>;
_batteryChargingStream?: member<any>;
_grip?: member<any>;
_app?: member<any>;
_joystick?: member<any>;
_joystickClick?: member<any>;
_trigger?: member<any>;
_triggerHair?: member<any>;
_triggerClick?: member<any>;
_touchpad?: member<any>;
_touchpadTouch?: member<any>;
_touchpadClick?: member<any>;
    }
    
    export function WindowsMR_Controller(props: WindowsMR_ControllerInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
User,
Node,
_isActive,
_batteryLevelStream,
_batteryChargingStream,
_grip,
_app,
_joystick,
_joystickClick,
_trigger,
_triggerHair,
_triggerClick,
_touchpad,
_touchpadTouch,
_touchpadClick, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Input.WindowsMR_Controller" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  isRaw={typeof User === "object" && "isRaw" in User && User.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Chirality]`} name="Node" id={typeof Node === "object" && "id" in Node ? Node?.id : undefined} value={typeof Node === "object" && "value" in Node ? Node?.value : Node} /* default: ID0 */  isRaw={typeof Node === "object" && "isRaw" in Node && Node.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_isActive" id={typeof _isActive === "object" && "id" in _isActive ? _isActive?.id : undefined} value={typeof _isActive === "object" && "value" in _isActive ? _isActive?.value : _isActive} /* default: false */  isRaw={typeof _isActive === "object" && "isRaw" in _isActive && _isActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_batteryLevelStream" id={typeof _batteryLevelStream === "object" && "id" in _batteryLevelStream ? _batteryLevelStream?.id : undefined} value={typeof _batteryLevelStream === "object" && "value" in _batteryLevelStream ? _batteryLevelStream?.value : _batteryLevelStream} /* default: ID0 */  isRaw={typeof _batteryLevelStream === "object" && "isRaw" in _batteryLevelStream && _batteryLevelStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_batteryChargingStream" id={typeof _batteryChargingStream === "object" && "id" in _batteryChargingStream ? _batteryChargingStream?.id : undefined} value={typeof _batteryChargingStream === "object" && "value" in _batteryChargingStream ? _batteryChargingStream?.value : _batteryChargingStream} /* default: ID0 */  isRaw={typeof _batteryChargingStream === "object" && "isRaw" in _batteryChargingStream && _batteryChargingStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_grip" id={typeof _grip === "object" && "id" in _grip ? _grip?.id : undefined} value={typeof _grip === "object" && "value" in _grip ? _grip?.value : _grip} /* default: ID0 */  isRaw={typeof _grip === "object" && "isRaw" in _grip && _grip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_app" id={typeof _app === "object" && "id" in _app ? _app?.id : undefined} value={typeof _app === "object" && "value" in _app ? _app?.value : _app} /* default: ID0 */  isRaw={typeof _app === "object" && "isRaw" in _app && _app.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.float2]]`} name="_joystick" id={typeof _joystick === "object" && "id" in _joystick ? _joystick?.id : undefined} value={typeof _joystick === "object" && "value" in _joystick ? _joystick?.value : _joystick} /* default: ID0 */  isRaw={typeof _joystick === "object" && "isRaw" in _joystick && _joystick.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_joystickClick" id={typeof _joystickClick === "object" && "id" in _joystickClick ? _joystickClick?.id : undefined} value={typeof _joystickClick === "object" && "value" in _joystickClick ? _joystickClick?.value : _joystickClick} /* default: ID0 */  isRaw={typeof _joystickClick === "object" && "isRaw" in _joystickClick && _joystickClick.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_trigger" id={typeof _trigger === "object" && "id" in _trigger ? _trigger?.id : undefined} value={typeof _trigger === "object" && "value" in _trigger ? _trigger?.value : _trigger} /* default: ID0 */  isRaw={typeof _trigger === "object" && "isRaw" in _trigger && _trigger.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_triggerHair" id={typeof _triggerHair === "object" && "id" in _triggerHair ? _triggerHair?.id : undefined} value={typeof _triggerHair === "object" && "value" in _triggerHair ? _triggerHair?.value : _triggerHair} /* default: ID0 */  isRaw={typeof _triggerHair === "object" && "isRaw" in _triggerHair && _triggerHair.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_triggerClick" id={typeof _triggerClick === "object" && "id" in _triggerClick ? _triggerClick?.id : undefined} value={typeof _triggerClick === "object" && "value" in _triggerClick ? _triggerClick?.value : _triggerClick} /* default: ID0 */  isRaw={typeof _triggerClick === "object" && "isRaw" in _triggerClick && _triggerClick.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.float2]]`} name="_touchpad" id={typeof _touchpad === "object" && "id" in _touchpad ? _touchpad?.id : undefined} value={typeof _touchpad === "object" && "value" in _touchpad ? _touchpad?.value : _touchpad} /* default: ID0 */  isRaw={typeof _touchpad === "object" && "isRaw" in _touchpad && _touchpad.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_touchpadTouch" id={typeof _touchpadTouch === "object" && "id" in _touchpadTouch ? _touchpadTouch?.id : undefined} value={typeof _touchpadTouch === "object" && "value" in _touchpadTouch ? _touchpadTouch?.value : _touchpadTouch} /* default: ID0 */  isRaw={typeof _touchpadTouch === "object" && "isRaw" in _touchpadTouch && _touchpadTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_touchpadClick" id={typeof _touchpadClick === "object" && "id" in _touchpadClick ? _touchpadClick?.id : undefined} value={typeof _touchpadClick === "object" && "value" in _touchpadClick ? _touchpadClick?.value : _touchpadClick} /* default: ID0 */  isRaw={typeof _touchpadClick === "object" && "isRaw" in _touchpadClick && _touchpadClick.isRaw ? true : undefined} />
        </Component>
      );
    };
    