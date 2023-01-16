import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface TouchControllerInput {
        
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
_start?: member<any>;
_buttonYB?: member<any>;
_buttonXA?: member<any>;
_buttonYB_Touch?: member<any>;
_buttonXA_Touch?: member<any>;
_thumbRestTouch?: member<any>;
_grip?: member<any>;
_gripClick?: member<any>;
_joystick?: member<any>;
_joystickTouch?: member<any>;
_joystickClick?: member<any>;
_trigger?: member<any>;
_triggerTouch?: member<any>;
_triggerClick?: member<any>;
_model?: member<any>;
    }
    
    export function TouchController(props: TouchControllerInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
User,
Node,
_isActive,
_batteryLevelStream,
_batteryChargingStream,
_start,
_buttonYB,
_buttonXA,
_buttonYB_Touch,
_buttonXA_Touch,
_thumbRestTouch,
_grip,
_gripClick,
_joystick,
_joystickTouch,
_joystickClick,
_trigger,
_triggerTouch,
_triggerClick,
_model, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Input.TouchController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Chirality]`} name="Node" id={typeof Node === "object" && "id" in Node ? Node?.id : undefined} value={typeof Node === "object" && "value" in Node ? Node?.value : Node} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_isActive" id={typeof _isActive === "object" && "id" in _isActive ? _isActive?.id : undefined} value={typeof _isActive === "object" && "value" in _isActive ? _isActive?.value : _isActive} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_batteryLevelStream" id={typeof _batteryLevelStream === "object" && "id" in _batteryLevelStream ? _batteryLevelStream?.id : undefined} value={typeof _batteryLevelStream === "object" && "value" in _batteryLevelStream ? _batteryLevelStream?.value : _batteryLevelStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_batteryChargingStream" id={typeof _batteryChargingStream === "object" && "id" in _batteryChargingStream ? _batteryChargingStream?.id : undefined} value={typeof _batteryChargingStream === "object" && "value" in _batteryChargingStream ? _batteryChargingStream?.value : _batteryChargingStream} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_start" id={typeof _start === "object" && "id" in _start ? _start?.id : undefined} value={typeof _start === "object" && "value" in _start ? _start?.value : _start} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_buttonYB" id={typeof _buttonYB === "object" && "id" in _buttonYB ? _buttonYB?.id : undefined} value={typeof _buttonYB === "object" && "value" in _buttonYB ? _buttonYB?.value : _buttonYB} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_buttonXA" id={typeof _buttonXA === "object" && "id" in _buttonXA ? _buttonXA?.id : undefined} value={typeof _buttonXA === "object" && "value" in _buttonXA ? _buttonXA?.value : _buttonXA} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_buttonYB_Touch" id={typeof _buttonYB_Touch === "object" && "id" in _buttonYB_Touch ? _buttonYB_Touch?.id : undefined} value={typeof _buttonYB_Touch === "object" && "value" in _buttonYB_Touch ? _buttonYB_Touch?.value : _buttonYB_Touch} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_buttonXA_Touch" id={typeof _buttonXA_Touch === "object" && "id" in _buttonXA_Touch ? _buttonXA_Touch?.id : undefined} value={typeof _buttonXA_Touch === "object" && "value" in _buttonXA_Touch ? _buttonXA_Touch?.value : _buttonXA_Touch} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_thumbRestTouch" id={typeof _thumbRestTouch === "object" && "id" in _thumbRestTouch ? _thumbRestTouch?.id : undefined} value={typeof _thumbRestTouch === "object" && "value" in _thumbRestTouch ? _thumbRestTouch?.value : _thumbRestTouch} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_grip" id={typeof _grip === "object" && "id" in _grip ? _grip?.id : undefined} value={typeof _grip === "object" && "value" in _grip ? _grip?.value : _grip} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_gripClick" id={typeof _gripClick === "object" && "id" in _gripClick ? _gripClick?.id : undefined} value={typeof _gripClick === "object" && "value" in _gripClick ? _gripClick?.value : _gripClick} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.float2]]`} name="_joystick" id={typeof _joystick === "object" && "id" in _joystick ? _joystick?.id : undefined} value={typeof _joystick === "object" && "value" in _joystick ? _joystick?.value : _joystick} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_joystickTouch" id={typeof _joystickTouch === "object" && "id" in _joystickTouch ? _joystickTouch?.id : undefined} value={typeof _joystickTouch === "object" && "value" in _joystickTouch ? _joystickTouch?.value : _joystickTouch} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_joystickClick" id={typeof _joystickClick === "object" && "id" in _joystickClick ? _joystickClick?.id : undefined} value={typeof _joystickClick === "object" && "value" in _joystickClick ? _joystickClick?.value : _joystickClick} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_trigger" id={typeof _trigger === "object" && "id" in _trigger ? _trigger?.id : undefined} value={typeof _trigger === "object" && "value" in _trigger ? _trigger?.value : _trigger} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_triggerTouch" id={typeof _triggerTouch === "object" && "id" in _triggerTouch ? _triggerTouch?.id : undefined} value={typeof _triggerTouch === "object" && "value" in _triggerTouch ? _triggerTouch?.value : _triggerTouch} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_triggerClick" id={typeof _triggerClick === "object" && "id" in _triggerClick ? _triggerClick?.id : undefined} value={typeof _triggerClick === "object" && "value" in _triggerClick ? _triggerClick?.value : _triggerClick} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.TouchController+Model]`} name="_model" id={typeof _model === "object" && "id" in _model ? _model?.id : undefined} value={typeof _model === "object" && "value" in _model ? _model?.value : _model} /* default: CV1 */  />
        </Component>
      );
    };
    