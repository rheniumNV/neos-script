import { member, Member, Component } from "../../../core";
    
    export interface UserFromIDInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
UserID?: member<any>;
MachineID?: member<any>;
    }
    
    export function UserFromID(props: UserFromIDInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
UserID,
MachineID, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.UserFromID" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="UserID" id={typeof UserID === "object" && "id" in UserID ? UserID?.id : undefined} value={typeof UserID === "object" && "value" in UserID ? UserID?.value : UserID} /* default: ID0 */  isRaw={typeof UserID === "object" && "isRaw" in UserID && UserID.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="MachineID" id={typeof MachineID === "object" && "id" in MachineID ? MachineID?.id : undefined} value={typeof MachineID === "object" && "value" in MachineID ? MachineID?.value : MachineID} /* default: ID0 */  isRaw={typeof MachineID === "object" && "isRaw" in MachineID && MachineID.isRaw ? true : undefined} />
        </Component>
      );
    };
    