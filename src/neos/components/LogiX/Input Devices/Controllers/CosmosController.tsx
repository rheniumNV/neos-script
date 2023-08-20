import { member, Member, Component } from "../../../../core";
    
    export interface CosmosControllerInput {
        
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
_menu?: member<any>;
_buttonBY?: member<any>;
_buttonAX?: member<any>;
_gripClick?: member<any>;
_joystick?: member<any>;
_joystickTouch?: member<any>;
_joystickClick?: member<any>;
_trigger?: member<any>;
_triggerTouch?: member<any>;
_triggerClick?: member<any>;
_bumper?: member<any>;
    }
    
    export function CosmosController(props: CosmosControllerInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
User,
Node,
_isActive,
_batteryLevelStream,
_batteryChargingStream,
_menu,
_buttonBY,
_buttonAX,
_gripClick,
_joystick,
_joystickTouch,
_joystickClick,
_trigger,
_triggerTouch,
_triggerClick,
_bumper, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Input.CosmosController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  isRaw={typeof User === "object" && "isRaw" in User && User.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Chirality]`} name="Node" id={typeof Node === "object" && "id" in Node ? Node?.id : undefined} value={typeof Node === "object" && "value" in Node ? Node?.value : Node} /* default: ID0 */  isRaw={typeof Node === "object" && "isRaw" in Node && Node.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_isActive" id={typeof _isActive === "object" && "id" in _isActive ? _isActive?.id : undefined} value={typeof _isActive === "object" && "value" in _isActive ? _isActive?.value : _isActive} /* default: false */  isRaw={typeof _isActive === "object" && "isRaw" in _isActive && _isActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_batteryLevelStream" id={typeof _batteryLevelStream === "object" && "id" in _batteryLevelStream ? _batteryLevelStream?.id : undefined} value={typeof _batteryLevelStream === "object" && "value" in _batteryLevelStream ? _batteryLevelStream?.value : _batteryLevelStream} /* default: ID0 */  isRaw={typeof _batteryLevelStream === "object" && "isRaw" in _batteryLevelStream && _batteryLevelStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_batteryChargingStream" id={typeof _batteryChargingStream === "object" && "id" in _batteryChargingStream ? _batteryChargingStream?.id : undefined} value={typeof _batteryChargingStream === "object" && "value" in _batteryChargingStream ? _batteryChargingStream?.value : _batteryChargingStream} /* default: ID0 */  isRaw={typeof _batteryChargingStream === "object" && "isRaw" in _batteryChargingStream && _batteryChargingStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_menu" id={typeof _menu === "object" && "id" in _menu ? _menu?.id : undefined} value={typeof _menu === "object" && "value" in _menu ? _menu?.value : _menu} /* default: ID0 */  isRaw={typeof _menu === "object" && "isRaw" in _menu && _menu.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_buttonBY" id={typeof _buttonBY === "object" && "id" in _buttonBY ? _buttonBY?.id : undefined} value={typeof _buttonBY === "object" && "value" in _buttonBY ? _buttonBY?.value : _buttonBY} /* default: ID0 */  isRaw={typeof _buttonBY === "object" && "isRaw" in _buttonBY && _buttonBY.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_buttonAX" id={typeof _buttonAX === "object" && "id" in _buttonAX ? _buttonAX?.id : undefined} value={typeof _buttonAX === "object" && "value" in _buttonAX ? _buttonAX?.value : _buttonAX} /* default: ID0 */  isRaw={typeof _buttonAX === "object" && "isRaw" in _buttonAX && _buttonAX.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_gripClick" id={typeof _gripClick === "object" && "id" in _gripClick ? _gripClick?.id : undefined} value={typeof _gripClick === "object" && "value" in _gripClick ? _gripClick?.value : _gripClick} /* default: ID0 */  isRaw={typeof _gripClick === "object" && "isRaw" in _gripClick && _gripClick.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.float2]]`} name="_joystick" id={typeof _joystick === "object" && "id" in _joystick ? _joystick?.id : undefined} value={typeof _joystick === "object" && "value" in _joystick ? _joystick?.value : _joystick} /* default: ID0 */  isRaw={typeof _joystick === "object" && "isRaw" in _joystick && _joystick.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_joystickTouch" id={typeof _joystickTouch === "object" && "id" in _joystickTouch ? _joystickTouch?.id : undefined} value={typeof _joystickTouch === "object" && "value" in _joystickTouch ? _joystickTouch?.value : _joystickTouch} /* default: ID0 */  isRaw={typeof _joystickTouch === "object" && "isRaw" in _joystickTouch && _joystickTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_joystickClick" id={typeof _joystickClick === "object" && "id" in _joystickClick ? _joystickClick?.id : undefined} value={typeof _joystickClick === "object" && "value" in _joystickClick ? _joystickClick?.value : _joystickClick} /* default: ID0 */  isRaw={typeof _joystickClick === "object" && "isRaw" in _joystickClick && _joystickClick.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_trigger" id={typeof _trigger === "object" && "id" in _trigger ? _trigger?.id : undefined} value={typeof _trigger === "object" && "value" in _trigger ? _trigger?.value : _trigger} /* default: ID0 */  isRaw={typeof _trigger === "object" && "isRaw" in _trigger && _trigger.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_triggerTouch" id={typeof _triggerTouch === "object" && "id" in _triggerTouch ? _triggerTouch?.id : undefined} value={typeof _triggerTouch === "object" && "value" in _triggerTouch ? _triggerTouch?.value : _triggerTouch} /* default: ID0 */  isRaw={typeof _triggerTouch === "object" && "isRaw" in _triggerTouch && _triggerTouch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_triggerClick" id={typeof _triggerClick === "object" && "id" in _triggerClick ? _triggerClick?.id : undefined} value={typeof _triggerClick === "object" && "value" in _triggerClick ? _triggerClick?.value : _triggerClick} /* default: ID0 */  isRaw={typeof _triggerClick === "object" && "isRaw" in _triggerClick && _triggerClick.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_bumper" id={typeof _bumper === "object" && "id" in _bumper ? _bumper?.id : undefined} value={typeof _bumper === "object" && "value" in _bumper ? _bumper?.value : _bumper} /* default: ID0 */  isRaw={typeof _bumper === "object" && "isRaw" in _bumper && _bumper.isRaw ? true : undefined} />
        </Component>
      );
    };
    