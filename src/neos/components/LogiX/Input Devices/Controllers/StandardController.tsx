import { member, Member, Component } from "../../../../core";
    
    export interface StandardControllerInput {
        
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
_primaryStream?: member<any>;
_secondaryStream?: member<any>;
_grabStream?: member<any>;
_menuStream?: member<any>;
_strengthStream?: member<any>;
_axisStream?: member<any>;
_type?: member<any>;
    }
    
    export function StandardController(props: StandardControllerInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
User,
Node,
_isActive,
_batteryLevelStream,
_batteryChargingStream,
_primaryStream,
_secondaryStream,
_grabStream,
_menuStream,
_strengthStream,
_axisStream,
_type, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Input.StandardController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  isRaw={typeof User === "object" && "isRaw" in User && User.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Chirality]`} name="Node" id={typeof Node === "object" && "id" in Node ? Node?.id : undefined} value={typeof Node === "object" && "value" in Node ? Node?.value : Node} /* default: ID0 */  isRaw={typeof Node === "object" && "isRaw" in Node && Node.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_isActive" id={typeof _isActive === "object" && "id" in _isActive ? _isActive?.id : undefined} value={typeof _isActive === "object" && "value" in _isActive ? _isActive?.value : _isActive} /* default: false */  isRaw={typeof _isActive === "object" && "isRaw" in _isActive && _isActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_batteryLevelStream" id={typeof _batteryLevelStream === "object" && "id" in _batteryLevelStream ? _batteryLevelStream?.id : undefined} value={typeof _batteryLevelStream === "object" && "value" in _batteryLevelStream ? _batteryLevelStream?.value : _batteryLevelStream} /* default: ID0 */  isRaw={typeof _batteryLevelStream === "object" && "isRaw" in _batteryLevelStream && _batteryLevelStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_batteryChargingStream" id={typeof _batteryChargingStream === "object" && "id" in _batteryChargingStream ? _batteryChargingStream?.id : undefined} value={typeof _batteryChargingStream === "object" && "value" in _batteryChargingStream ? _batteryChargingStream?.value : _batteryChargingStream} /* default: ID0 */  isRaw={typeof _batteryChargingStream === "object" && "isRaw" in _batteryChargingStream && _batteryChargingStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_primaryStream" id={typeof _primaryStream === "object" && "id" in _primaryStream ? _primaryStream?.id : undefined} value={typeof _primaryStream === "object" && "value" in _primaryStream ? _primaryStream?.value : _primaryStream} /* default: ID0 */  isRaw={typeof _primaryStream === "object" && "isRaw" in _primaryStream && _primaryStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_secondaryStream" id={typeof _secondaryStream === "object" && "id" in _secondaryStream ? _secondaryStream?.id : undefined} value={typeof _secondaryStream === "object" && "value" in _secondaryStream ? _secondaryStream?.value : _secondaryStream} /* default: ID0 */  isRaw={typeof _secondaryStream === "object" && "isRaw" in _secondaryStream && _secondaryStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_grabStream" id={typeof _grabStream === "object" && "id" in _grabStream ? _grabStream?.id : undefined} value={typeof _grabStream === "object" && "value" in _grabStream ? _grabStream?.value : _grabStream} /* default: ID0 */  isRaw={typeof _grabStream === "object" && "isRaw" in _grabStream && _grabStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_menuStream" id={typeof _menuStream === "object" && "id" in _menuStream ? _menuStream?.id : undefined} value={typeof _menuStream === "object" && "value" in _menuStream ? _menuStream?.value : _menuStream} /* default: ID0 */  isRaw={typeof _menuStream === "object" && "isRaw" in _menuStream && _menuStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_strengthStream" id={typeof _strengthStream === "object" && "id" in _strengthStream ? _strengthStream?.id : undefined} value={typeof _strengthStream === "object" && "value" in _strengthStream ? _strengthStream?.value : _strengthStream} /* default: ID0 */  isRaw={typeof _strengthStream === "object" && "isRaw" in _strengthStream && _strengthStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[BaseX.float2]]`} name="_axisStream" id={typeof _axisStream === "object" && "id" in _axisStream ? _axisStream?.id : undefined} value={typeof _axisStream === "object" && "value" in _axisStream ? _axisStream?.value : _axisStream} /* default: ID0 */  isRaw={typeof _axisStream === "object" && "isRaw" in _axisStream && _axisStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncType`} name="_type" id={typeof _type === "object" && "id" in _type ? _type?.id : undefined} value={typeof _type === "object" && "value" in _type ? _type?.value : _type} /* default: <i>null</i> */  isRaw={typeof _type === "object" && "isRaw" in _type && _type.isRaw ? true : undefined} />
        </Component>
      );
    };
    