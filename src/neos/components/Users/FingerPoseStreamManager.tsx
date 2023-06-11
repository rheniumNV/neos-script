import { member, Member, Component } from "../../core";
    
    export interface FingerPoseStreamManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
User?: member<any>;
LeftIsTracking?: member<any>;
RightIsTracking?: member<any>;
Stream?: member<any>;
TracksMetacarpals?: member<boolean>;
    }
    
    export function FingerPoseStreamManager(props: FingerPoseStreamManagerInput){
      const { id, persistentId, updateOrder, Enabled,
User,
LeftIsTracking,
RightIsTracking,
Stream,
TracksMetacarpals, } = props;
    
      return (
        <Component type="FrooxEngine.FingerPoseStreamManager" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  isRaw={typeof User === "object" && "isRaw" in User && User.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="LeftIsTracking" id={typeof LeftIsTracking === "object" && "id" in LeftIsTracking ? LeftIsTracking?.id : undefined} value={typeof LeftIsTracking === "object" && "value" in LeftIsTracking ? LeftIsTracking?.value : LeftIsTracking} /* default: ID0 */  isRaw={typeof LeftIsTracking === "object" && "isRaw" in LeftIsTracking && LeftIsTracking.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ValueStream\`1[System.Boolean]]`} name="RightIsTracking" id={typeof RightIsTracking === "object" && "id" in RightIsTracking ? RightIsTracking?.id : undefined} value={typeof RightIsTracking === "object" && "value" in RightIsTracking ? RightIsTracking?.value : RightIsTracking} /* default: ID0 */  isRaw={typeof RightIsTracking === "object" && "isRaw" in RightIsTracking && RightIsTracking.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.MultiValueStream\`1[BaseX.floatQ]]`} name="Stream" id={typeof Stream === "object" && "id" in Stream ? Stream?.id : undefined} value={typeof Stream === "object" && "value" in Stream ? Stream?.value : Stream} /* default: ID0 */  isRaw={typeof Stream === "object" && "isRaw" in Stream && Stream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TracksMetacarpals" id={typeof TracksMetacarpals === "object" && "id" in TracksMetacarpals ? TracksMetacarpals?.id : undefined} value={typeof TracksMetacarpals === "object" && "value" in TracksMetacarpals ? TracksMetacarpals?.value : TracksMetacarpals} /* default: false */  isRaw={typeof TracksMetacarpals === "object" && "isRaw" in TracksMetacarpals && TracksMetacarpals.isRaw ? true : undefined} />
        </Component>
      );
    };
    