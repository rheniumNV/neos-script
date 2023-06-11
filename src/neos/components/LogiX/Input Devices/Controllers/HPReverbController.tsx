import { member, Member, Component } from "../../../../core";
    
    export interface HPReverbControllerInput {
        
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
_appMenu?: member<any>;
_buttonYB?: member<any>;
_buttonXA?: member<any>;
_grip?: member<any>;
_gripTouch?: member<any>;
_gripClick?: member<any>;
_joystick?: member<any>;
_joystickClick?: member<any>;
_trigger?: member<any>;
_triggerClick?: member<any>;
    }
    
    export function HPReverbController(props: HPReverbControllerInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
User,
Node,
_isActive,
_batteryLevelStream,
_batteryChargingStream,
_appMenu,
_buttonYB,
_buttonXA,
_grip,
_gripTouch,
_gripClick,
_joystick,
_joystickClick,
_trigger,
_triggerClick, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Input.HPReverbController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  isRaw={typeof User === "object" && "isRaw" in User && User.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Chirality]`} name="Node" id={typeof Node === "object" && "id" in Node ? Node?.id : undefined} value={typeof Node === "object" && "value" in Node ? Node?.value : Node} /* default: ID0 */  isRaw={typeof Node === "object" && "isRaw" in Node && Node.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_isActive" id={typeof _isActive === "object" && "id" in _isActive ? _isActive?.id : undefined} value={typeof _isActive === "object" && "value" in _isActive ? _isActive?.value : _isActive} /* default: false */  isRaw={typeof _isActive === "object" && "isRaw" in _isActive && _isActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_batteryLevelStream" id={typeof _batteryLevelStream === "object" && "id" in _batteryLevelStream ? _batteryLevelStream?.id : undefined} value={typeof _batteryLevelStream === "object" && "value" in _batteryLevelStream ? _batteryLevelStream?.value : _batteryLevelStream} /* default: ID0 */  isRaw={typeof _batteryLevelStream === "object" && "isRaw" in _batteryLevelStream && _batteryLevelStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_batteryChargingStream" id={typeof _batteryChargingStream === "object" && "id" in _batteryChargingStream ? _batteryChargingStream?.id : undefined} value={typeof _batteryChargingStream === "object" && "value" in _batteryChargingStream ? _batteryChargingStream?.value : _batteryChargingStream} /* default: ID0 */  isRaw={typeof _batteryChargingStream === "object" && "isRaw" in _batteryChargingStream && _batteryChargingStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_appMenu" id={typeof _appMenu === "object" && "id" in _appMenu ? _appMenu?.id : undefined} value={typeof _appMenu === "object" && "value" in _appMenu ? _appMenu?.value : _appMenu} /* default: ID0 */  isRaw={typeof _appMenu === "object" && "isRaw" in _appMenu && _appMenu.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_buttonYB" id={typeof _buttonYB === "object" && "id" in _buttonYB ? _buttonYB?.id : undefined} value={typeof _buttonYB === "object" && "value" in _buttonYB ? _buttonYB?.value : _buttonYB} /* default: ID0 */  isRaw={typeof _buttonYB === "object" && "isRaw" in _buttonYB && _buttonYB.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_buttonXA" id={typeof _buttonXA === "object" && "id" in _buttonXA ? _buttonXA?.id : undefined} value={typeof _buttonXA === "object" && "value" in _buttonXA ? _buttonXA?.value : _buttonXA} /* default: ID0 */  isRaw={typeof _buttonXA === "object" && "isRaw" in _buttonXA && _buttonXA.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_grip" id={typeof _grip === "object" && "id" in _grip ? _grip?.id : undefined} value={typeof _grip === "object" && "value" in _grip ? _grip?.value : _grip} /* default: ID0 */  isRaw={typeof _grip === "object" && "isRaw" in _grip && _grip.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_gripTouch" id={typeof _gripTouch === "object" && "id" in _gripTouch ? _gripTouch?.id : undefined} value={typeof _gripTouch === "object" && "value" in _gripTouch ? _gripTouch?.value : _gripTouch} /* default: ID0 */  isRaw={typeof _gripTouch === "object" && "isRaw" in _gripTouch && _gripTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_gripClick" id={typeof _gripClick === "object" && "id" in _gripClick ? _gripClick?.id : undefined} value={typeof _gripClick === "object" && "value" in _gripClick ? _gripClick?.value : _gripClick} /* default: ID0 */  isRaw={typeof _gripClick === "object" && "isRaw" in _gripClick && _gripClick.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.float2]]`} name="_joystick" id={typeof _joystick === "object" && "id" in _joystick ? _joystick?.id : undefined} value={typeof _joystick === "object" && "value" in _joystick ? _joystick?.value : _joystick} /* default: ID0 */  isRaw={typeof _joystick === "object" && "isRaw" in _joystick && _joystick.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_joystickClick" id={typeof _joystickClick === "object" && "id" in _joystickClick ? _joystickClick?.id : undefined} value={typeof _joystickClick === "object" && "value" in _joystickClick ? _joystickClick?.value : _joystickClick} /* default: ID0 */  isRaw={typeof _joystickClick === "object" && "isRaw" in _joystickClick && _joystickClick.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_trigger" id={typeof _trigger === "object" && "id" in _trigger ? _trigger?.id : undefined} value={typeof _trigger === "object" && "value" in _trigger ? _trigger?.value : _trigger} /* default: ID0 */  isRaw={typeof _trigger === "object" && "isRaw" in _trigger && _trigger.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_triggerClick" id={typeof _triggerClick === "object" && "id" in _triggerClick ? _triggerClick?.id : undefined} value={typeof _triggerClick === "object" && "value" in _triggerClick ? _triggerClick?.value : _triggerClick} /* default: ID0 */  isRaw={typeof _triggerClick === "object" && "isRaw" in _triggerClick && _triggerClick.isRaw ? true : undefined} />
        </Component>
      );
    };
    