import { member, Member, Component } from "../../../core";
    
    export interface PlaybackStateDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Source?: member<any>;
IsPlaying?: member<any>;
IsNotPlaying?: member<any>;
IsPaused?: member<any>;
IsStopped?: member<any>;
    }
    
    export function PlaybackStateDriver(props: PlaybackStateDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Source,
IsPlaying,
IsNotPlaying,
IsPaused,
IsStopped, } = props;
    
      return (
        <Component type="FrooxEngine.PlaybackStateDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IPlayable]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="IsPlaying" id={typeof IsPlaying === "object" && "id" in IsPlaying ? IsPlaying?.id : undefined} value={typeof IsPlaying === "object" && "value" in IsPlaying ? IsPlaying?.value : IsPlaying} /* default: ID0 */  isRaw={typeof IsPlaying === "object" && "isRaw" in IsPlaying && IsPlaying.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="IsNotPlaying" id={typeof IsNotPlaying === "object" && "id" in IsNotPlaying ? IsNotPlaying?.id : undefined} value={typeof IsNotPlaying === "object" && "value" in IsNotPlaying ? IsNotPlaying?.value : IsNotPlaying} /* default: ID0 */  isRaw={typeof IsNotPlaying === "object" && "isRaw" in IsNotPlaying && IsNotPlaying.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="IsPaused" id={typeof IsPaused === "object" && "id" in IsPaused ? IsPaused?.id : undefined} value={typeof IsPaused === "object" && "value" in IsPaused ? IsPaused?.value : IsPaused} /* default: ID0 */  isRaw={typeof IsPaused === "object" && "isRaw" in IsPaused && IsPaused.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="IsStopped" id={typeof IsStopped === "object" && "id" in IsStopped ? IsStopped?.id : undefined} value={typeof IsStopped === "object" && "value" in IsStopped ? IsStopped?.value : IsStopped} /* default: ID0 */  isRaw={typeof IsStopped === "object" && "isRaw" in IsStopped && IsStopped.isRaw ? true : undefined} />
        </Component>
      );
    };
    