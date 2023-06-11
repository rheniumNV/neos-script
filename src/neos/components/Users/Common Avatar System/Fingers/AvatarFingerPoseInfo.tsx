import { member, Member, Component } from "../../../../core";
    
    export interface AvatarFingerPoseInfoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
FingerPoseSource?: member<any>;
    }
    
    export function AvatarFingerPoseInfo(props: AvatarFingerPoseInfoInput){
      const { id, persistentId, updateOrder, Enabled,
FingerPoseSource, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarFingerPoseInfo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IFingerPoseSource]`} name="FingerPoseSource" id={typeof FingerPoseSource === "object" && "id" in FingerPoseSource ? FingerPoseSource?.id : undefined} value={typeof FingerPoseSource === "object" && "value" in FingerPoseSource ? FingerPoseSource?.value : FingerPoseSource} /* default: ID0 */  isRaw={typeof FingerPoseSource === "object" && "isRaw" in FingerPoseSource && FingerPoseSource.isRaw ? true : undefined} />
        </Component>
      );
    };
    