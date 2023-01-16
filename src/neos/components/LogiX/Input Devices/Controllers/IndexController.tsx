import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface IndexControllerInput {
        
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
_buttonA?: member<any>;
_buttonB?: member<any>;
_buttonA_Touch?: member<any>;
_buttonB_Touch?: member<any>;
_grip?: member<any>;
_gripTouch?: member<any>;
_gripClick?: member<any>;
_joystick?: member<any>;
_joystickTouch?: member<any>;
_joystickClick?: member<any>;
_trigger?: member<any>;
_triggerTouch?: member<any>;
_triggerClick?: member<any>;
_touchpad?: member<any>;
_touchpadTouch?: member<any>;
_touchpadClick?: member<any>;
_touchpadForce?: member<any>;
    }
    
    export function IndexController(props: IndexControllerInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
User,
Node,
_isActive,
_batteryLevelStream,
_batteryChargingStream,
_buttonA,
_buttonB,
_buttonA_Touch,
_buttonB_Touch,
_grip,
_gripTouch,
_gripClick,
_joystick,
_joystickTouch,
_joystickClick,
_trigger,
_triggerTouch,
_triggerClick,
_touchpad,
_touchpadTouch,
_touchpadClick,
_touchpadForce, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Input.IndexController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Chirality]`} name="Node" id={typeof Node === "object" && "id" in Node ? Node?.id : undefined} value={typeof Node === "object" && "value" in Node ? Node?.value : Node} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_isActive" id={typeof _isActive === "object" && "id" in _isActive ? _isActive?.id : undefined} value={typeof _isActive === "object" && "value" in _isActive ? _isActive?.value : _isActive} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_batteryLevelStream" id={typeof _batteryLevelStream === "object" && "id" in _batteryLevelStream ? _batteryLevelStream?.id : undefined} value={typeof _batteryLevelStream === "object" && "value" in _batteryLevelStream ? _batteryLevelStream?.value : _batteryLevelStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_batteryChargingStream" id={typeof _batteryChargingStream === "object" && "id" in _batteryChargingStream ? _batteryChargingStream?.id : undefined} value={typeof _batteryChargingStream === "object" && "value" in _batteryChargingStream ? _batteryChargingStream?.value : _batteryChargingStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_buttonA" id={typeof _buttonA === "object" && "id" in _buttonA ? _buttonA?.id : undefined} value={typeof _buttonA === "object" && "value" in _buttonA ? _buttonA?.value : _buttonA} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_buttonB" id={typeof _buttonB === "object" && "id" in _buttonB ? _buttonB?.id : undefined} value={typeof _buttonB === "object" && "value" in _buttonB ? _buttonB?.value : _buttonB} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_buttonA_Touch" id={typeof _buttonA_Touch === "object" && "id" in _buttonA_Touch ? _buttonA_Touch?.id : undefined} value={typeof _buttonA_Touch === "object" && "value" in _buttonA_Touch ? _buttonA_Touch?.value : _buttonA_Touch} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_buttonB_Touch" id={typeof _buttonB_Touch === "object" && "id" in _buttonB_Touch ? _buttonB_Touch?.id : undefined} value={typeof _buttonB_Touch === "object" && "value" in _buttonB_Touch ? _buttonB_Touch?.value : _buttonB_Touch} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_grip" id={typeof _grip === "object" && "id" in _grip ? _grip?.id : undefined} value={typeof _grip === "object" && "value" in _grip ? _grip?.value : _grip} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_gripTouch" id={typeof _gripTouch === "object" && "id" in _gripTouch ? _gripTouch?.id : undefined} value={typeof _gripTouch === "object" && "value" in _gripTouch ? _gripTouch?.value : _gripTouch} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_gripClick" id={typeof _gripClick === "object" && "id" in _gripClick ? _gripClick?.id : undefined} value={typeof _gripClick === "object" && "value" in _gripClick ? _gripClick?.value : _gripClick} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.float2]]`} name="_joystick" id={typeof _joystick === "object" && "id" in _joystick ? _joystick?.id : undefined} value={typeof _joystick === "object" && "value" in _joystick ? _joystick?.value : _joystick} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_joystickTouch" id={typeof _joystickTouch === "object" && "id" in _joystickTouch ? _joystickTouch?.id : undefined} value={typeof _joystickTouch === "object" && "value" in _joystickTouch ? _joystickTouch?.value : _joystickTouch} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_joystickClick" id={typeof _joystickClick === "object" && "id" in _joystickClick ? _joystickClick?.id : undefined} value={typeof _joystickClick === "object" && "value" in _joystickClick ? _joystickClick?.value : _joystickClick} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_trigger" id={typeof _trigger === "object" && "id" in _trigger ? _trigger?.id : undefined} value={typeof _trigger === "object" && "value" in _trigger ? _trigger?.value : _trigger} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_triggerTouch" id={typeof _triggerTouch === "object" && "id" in _triggerTouch ? _triggerTouch?.id : undefined} value={typeof _triggerTouch === "object" && "value" in _triggerTouch ? _triggerTouch?.value : _triggerTouch} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_triggerClick" id={typeof _triggerClick === "object" && "id" in _triggerClick ? _triggerClick?.id : undefined} value={typeof _triggerClick === "object" && "value" in _triggerClick ? _triggerClick?.value : _triggerClick} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.float2]]`} name="_touchpad" id={typeof _touchpad === "object" && "id" in _touchpad ? _touchpad?.id : undefined} value={typeof _touchpad === "object" && "value" in _touchpad ? _touchpad?.value : _touchpad} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_touchpadTouch" id={typeof _touchpadTouch === "object" && "id" in _touchpadTouch ? _touchpadTouch?.id : undefined} value={typeof _touchpadTouch === "object" && "value" in _touchpadTouch ? _touchpadTouch?.value : _touchpadTouch} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_touchpadClick" id={typeof _touchpadClick === "object" && "id" in _touchpadClick ? _touchpadClick?.id : undefined} value={typeof _touchpadClick === "object" && "value" in _touchpadClick ? _touchpadClick?.value : _touchpadClick} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_touchpadForce" id={typeof _touchpadForce === "object" && "id" in _touchpadForce ? _touchpadForce?.id : undefined} value={typeof _touchpadForce === "object" && "value" in _touchpadForce ? _touchpadForce?.value : _touchpadForce} /* default: ID0 */  />
        </Component>
      );
    };
    