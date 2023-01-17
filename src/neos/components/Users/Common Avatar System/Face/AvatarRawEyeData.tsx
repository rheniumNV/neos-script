import { member, Member, Component } from "../../../../core";
    
    export interface AvatarRawEyeDataInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
LeftEye?: member<any>;
RightEye?: member<any>;
CombinedEye?: member<any>;
ConvergenceDistance?: member<number>;
Timestamp?: member<number>;
_activeUser?: member<any>;
    }
    
    export function AvatarRawEyeData(props: AvatarRawEyeDataInput){
      const { id, persistentId, updateOrder, Enabled,
LeftEye,
RightEye,
CombinedEye,
ConvergenceDistance,
Timestamp,
_activeUser, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarRawEyeData" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CommonAvatar.AvatarRawEyeData+EyeData`} name="LeftEye" id={typeof LeftEye === "object" && "id" in LeftEye ? LeftEye?.id : undefined} value={typeof LeftEye === "object" && "value" in LeftEye ? LeftEye?.value : LeftEye} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.CommonAvatar\.AvatarRawEyeData\+EyeData,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.CommonAvatar.AvatarRawEyeData+EyeData`} name="RightEye" id={typeof RightEye === "object" && "id" in RightEye ? RightEye?.id : undefined} value={typeof RightEye === "object" && "value" in RightEye ? RightEye?.value : RightEye} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.CommonAvatar\.AvatarRawEyeData\+EyeData,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.CommonAvatar.AvatarRawEyeData+EyeData`} name="CombinedEye" id={typeof CombinedEye === "object" && "id" in CombinedEye ? CombinedEye?.id : undefined} value={typeof CombinedEye === "object" && "value" in CombinedEye ? CombinedEye?.value : CombinedEye} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.CommonAvatar\.AvatarRawEyeData\+EyeData,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ConvergenceDistance" id={typeof ConvergenceDistance === "object" && "id" in ConvergenceDistance ? ConvergenceDistance?.id : undefined} value={typeof ConvergenceDistance === "object" && "value" in ConvergenceDistance ? ConvergenceDistance?.value : ConvergenceDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="Timestamp" id={typeof Timestamp === "object" && "id" in Timestamp ? Timestamp?.id : undefined} value={typeof Timestamp === "object" && "value" in Timestamp ? Timestamp?.value : Timestamp} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="_activeUser" id={typeof _activeUser === "object" && "id" in _activeUser ? _activeUser?.id : undefined} value={typeof _activeUser === "object" && "value" in _activeUser ? _activeUser?.value : _activeUser} /* default: ID0 */  />
        </Component>
      );
    };
    