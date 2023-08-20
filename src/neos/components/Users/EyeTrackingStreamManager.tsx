import { member, Member, Component } from "../../core";
    
    export interface EyeTrackingStreamManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
User?: member<any>;
ConvergenceDistance?: member<any>;
IsEyeTrackingActive?: member<any>;
LeftEyeStreams?: member<any>;
RightEyeStreams?: member<any>;
    }
    
    export function EyeTrackingStreamManager(props: EyeTrackingStreamManagerInput){
      const { id, persistentId, updateOrder, Enabled,
User,
ConvergenceDistance,
IsEyeTrackingActive,
LeftEyeStreams,
RightEyeStreams, } = props;
    
      return (
        <Component type="FrooxEngine.EyeTrackingStreamManager" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  isRaw={typeof User === "object" && "isRaw" in User && User.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Single]]`} name="ConvergenceDistance" id={typeof ConvergenceDistance === "object" && "id" in ConvergenceDistance ? ConvergenceDistance?.id : undefined} value={typeof ConvergenceDistance === "object" && "value" in ConvergenceDistance ? ConvergenceDistance?.value : ConvergenceDistance} /* default: ID0 */  isRaw={typeof ConvergenceDistance === "object" && "isRaw" in ConvergenceDistance && ConvergenceDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="IsEyeTrackingActive" id={typeof IsEyeTrackingActive === "object" && "id" in IsEyeTrackingActive ? IsEyeTrackingActive?.id : undefined} value={typeof IsEyeTrackingActive === "object" && "value" in IsEyeTrackingActive ? IsEyeTrackingActive?.value : IsEyeTrackingActive} /* default: ID0 */  isRaw={typeof IsEyeTrackingActive === "object" && "isRaw" in IsEyeTrackingActive && IsEyeTrackingActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.EyeTrackingStreamManager+EyeStreams`} name="LeftEyeStreams" id={typeof LeftEyeStreams === "object" && "id" in LeftEyeStreams ? LeftEyeStreams?.id : undefined} value={typeof LeftEyeStreams === "object" && "value" in LeftEyeStreams ? LeftEyeStreams?.value : LeftEyeStreams} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.EyeTrackingStreamManager\+EyeStreams,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof LeftEyeStreams === "object" && "isRaw" in LeftEyeStreams && LeftEyeStreams.isRaw ? true : undefined} />
<Member type={`FrooxEngine.EyeTrackingStreamManager+EyeStreams`} name="RightEyeStreams" id={typeof RightEyeStreams === "object" && "id" in RightEyeStreams ? RightEyeStreams?.id : undefined} value={typeof RightEyeStreams === "object" && "value" in RightEyeStreams ? RightEyeStreams?.value : RightEyeStreams} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.EyeTrackingStreamManager\+EyeStreams,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof RightEyeStreams === "object" && "isRaw" in RightEyeStreams && RightEyeStreams.isRaw ? true : undefined} />
        </Component>
      );
    };
    