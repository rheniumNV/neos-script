import { member, Member, Component } from "../../../core";
    
    export interface GeneralHeadsetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
User?: member<any>;
_batteryLevelStream?: member<any>;
_batteryChargingStream?: member<any>;
    }
    
    export function GeneralHeadset(props: GeneralHeadsetInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
User,
_batteryLevelStream,
_batteryChargingStream, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Input.GeneralHeadset" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  isRaw={typeof User === "object" && "isRaw" in User && User.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="_batteryLevelStream" id={typeof _batteryLevelStream === "object" && "id" in _batteryLevelStream ? _batteryLevelStream?.id : undefined} value={typeof _batteryLevelStream === "object" && "value" in _batteryLevelStream ? _batteryLevelStream?.value : _batteryLevelStream} /* default: ID0 */  isRaw={typeof _batteryLevelStream === "object" && "isRaw" in _batteryLevelStream && _batteryLevelStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="_batteryChargingStream" id={typeof _batteryChargingStream === "object" && "id" in _batteryChargingStream ? _batteryChargingStream?.id : undefined} value={typeof _batteryChargingStream === "object" && "value" in _batteryChargingStream ? _batteryChargingStream?.value : _batteryChargingStream} /* default: ID0 */  isRaw={typeof _batteryChargingStream === "object" && "isRaw" in _batteryChargingStream && _batteryChargingStream.isRaw ? true : undefined} />
        </Component>
      );
    };
    