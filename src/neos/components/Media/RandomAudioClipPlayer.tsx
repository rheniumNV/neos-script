import { member, Member, Component } from "../../core";
    
    export interface RandomAudioClipPlayerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ParentUnder?: member<any>;
MinDistance?: member<any>;
MaxDistance?: member<any>;
RolloffMode?: member<any>;
Clips?: member<any>;
    }
    
    export function RandomAudioClipPlayer(props: RandomAudioClipPlayerInput){
      const { id, persistentId, updateOrder, Enabled,
ParentUnder,
MinDistance,
MaxDistance,
RolloffMode,
Clips, } = props;
    
      return (
        <Component type="FrooxEngine.RandomAudioClipPlayer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="ParentUnder" id={typeof ParentUnder === "object" && "id" in ParentUnder ? ParentUnder?.id : undefined} value={typeof ParentUnder === "object" && "value" in ParentUnder ? ParentUnder?.value : ParentUnder} /* default: ID0 */  isRaw={typeof ParentUnder === "object" && "isRaw" in ParentUnder && ParentUnder.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="MinDistance" id={typeof MinDistance === "object" && "id" in MinDistance ? MinDistance?.id : undefined} value={typeof MinDistance === "object" && "value" in MinDistance ? MinDistance?.value : MinDistance} /* default: <i>null</i> */  isRaw={typeof MinDistance === "object" && "isRaw" in MinDistance && MinDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="MaxDistance" id={typeof MaxDistance === "object" && "id" in MaxDistance ? MaxDistance?.id : undefined} value={typeof MaxDistance === "object" && "value" in MaxDistance ? MaxDistance?.value : MaxDistance} /* default: <i>null</i> */  isRaw={typeof MaxDistance === "object" && "isRaw" in MaxDistance && MaxDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[FrooxEngine.AudioRolloffMode]]`} name="RolloffMode" id={typeof RolloffMode === "object" && "id" in RolloffMode ? RolloffMode?.id : undefined} value={typeof RolloffMode === "object" && "value" in RolloffMode ? RolloffMode?.value : RolloffMode} /* default: <i>null</i> */  isRaw={typeof RolloffMode === "object" && "isRaw" in RolloffMode && RolloffMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData]`} name="Clips" id={typeof Clips === "object" && "id" in Clips ? Clips?.id : undefined} value={typeof Clips === "object" && "value" in Clips ? Clips?.value : Clips} /* default: FrooxEngine.SyncList`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData] */  isRaw={typeof Clips === "object" && "isRaw" in Clips && Clips.isRaw ? true : undefined} />
        </Component>
      );
    };
    