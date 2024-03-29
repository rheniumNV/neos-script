import { member, Member, Component } from "../../core";
    
    export interface UserJoinAudioIndicatorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
JoinedClips?: member<any>;
LeftClips?: member<any>;
Spatialize?: member<boolean>;
Volume?: member<number>;
    }
    
    export function UserJoinAudioIndicator(props: UserJoinAudioIndicatorInput){
      const { id, persistentId, updateOrder, Enabled,
JoinedClips,
LeftClips,
Spatialize,
Volume, } = props;
    
      return (
        <Component type="FrooxEngine.UserJoinAudioIndicator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]]`} name="JoinedClips" id={typeof JoinedClips === "object" && "id" in JoinedClips ? JoinedClips?.id : undefined} value={typeof JoinedClips === "object" && "value" in JoinedClips ? JoinedClips?.value : JoinedClips} /* default: FrooxEngine.SyncList`1[FrooxEngine.AssetRef`1[FrooxEngine.AudioClip]] */  isRaw={typeof JoinedClips === "object" && "isRaw" in JoinedClips && JoinedClips.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]]`} name="LeftClips" id={typeof LeftClips === "object" && "id" in LeftClips ? LeftClips?.id : undefined} value={typeof LeftClips === "object" && "value" in LeftClips ? LeftClips?.value : LeftClips} /* default: FrooxEngine.SyncList`1[FrooxEngine.AssetRef`1[FrooxEngine.AudioClip]] */  isRaw={typeof LeftClips === "object" && "isRaw" in LeftClips && LeftClips.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Spatialize" id={typeof Spatialize === "object" && "id" in Spatialize ? Spatialize?.id : undefined} value={typeof Spatialize === "object" && "value" in Spatialize ? Spatialize?.value : Spatialize} /* default: false */  isRaw={typeof Spatialize === "object" && "isRaw" in Spatialize && Spatialize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Volume" id={typeof Volume === "object" && "id" in Volume ? Volume?.id : undefined} value={typeof Volume === "object" && "value" in Volume ? Volume?.value : Volume} /* default: 0 */  isRaw={typeof Volume === "object" && "isRaw" in Volume && Volume.isRaw ? true : undefined} />
        </Component>
      );
    };
    