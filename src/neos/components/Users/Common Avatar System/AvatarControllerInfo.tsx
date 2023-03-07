import { member, Member, Component } from "../../../core";
    
    export interface AvatarControllerInfoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetUser?: member<any>;
ControllerSide?: member<any>;
ControllerType?: member<any>;
ControllerDeviceModel?: member<any>;
    }
    
    export function AvatarControllerInfo(props: AvatarControllerInfoInput){
      const { id, persistentId, updateOrder, Enabled,
TargetUser,
ControllerSide,
ControllerType,
ControllerDeviceModel, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarControllerInfo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="TargetUser" id={typeof TargetUser === "object" && "id" in TargetUser ? TargetUser?.id : undefined} value={typeof TargetUser === "object" && "value" in TargetUser ? TargetUser?.value : TargetUser} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Chirality]`} name="ControllerSide" id={typeof ControllerSide === "object" && "id" in ControllerSide ? ControllerSide?.id : undefined} value={typeof ControllerSide === "object" && "value" in ControllerSide ? ControllerSide?.value : ControllerSide} /* default: Left */  />
<Member type={`FrooxEngine.SyncType`} name="ControllerType" id={typeof ControllerType === "object" && "id" in ControllerType ? ControllerType?.id : undefined} value={typeof ControllerType === "object" && "value" in ControllerType ? ControllerType?.value : ControllerType} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="ControllerDeviceModel" id={typeof ControllerDeviceModel === "object" && "id" in ControllerDeviceModel ? ControllerDeviceModel?.id : undefined} value={typeof ControllerDeviceModel === "object" && "value" in ControllerDeviceModel ? ControllerDeviceModel?.value : ControllerDeviceModel} /* default: <i>null</i> */  />
        </Component>
      );
    };
    