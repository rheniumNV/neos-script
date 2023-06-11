import { member, Member, Component } from "../../../core";
    
    export interface ButtonAudioClipPlayerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ParentUnder?: member<any>;
MinDistance?: member<any>;
MaxDistance?: member<any>;
RolloffMode?: member<any>;
PressedClips?: member<any>;
ReleasedClips?: member<any>;
HoverEnterClips?: member<any>;
HoverLeaveClips?: member<any>;
    }
    
    export function ButtonAudioClipPlayer(props: ButtonAudioClipPlayerInput){
      const { id, persistentId, updateOrder, Enabled,
ParentUnder,
MinDistance,
MaxDistance,
RolloffMode,
PressedClips,
ReleasedClips,
HoverEnterClips,
HoverLeaveClips, } = props;
    
      return (
        <Component type="FrooxEngine.ButtonAudioClipPlayer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="ParentUnder" id={typeof ParentUnder === "object" && "id" in ParentUnder ? ParentUnder?.id : undefined} value={typeof ParentUnder === "object" && "value" in ParentUnder ? ParentUnder?.value : ParentUnder} /* default: ID0 */  isRaw={typeof ParentUnder === "object" && "isRaw" in ParentUnder && ParentUnder.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="MinDistance" id={typeof MinDistance === "object" && "id" in MinDistance ? MinDistance?.id : undefined} value={typeof MinDistance === "object" && "value" in MinDistance ? MinDistance?.value : MinDistance} /* default: <i>null</i> */  isRaw={typeof MinDistance === "object" && "isRaw" in MinDistance && MinDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="MaxDistance" id={typeof MaxDistance === "object" && "id" in MaxDistance ? MaxDistance?.id : undefined} value={typeof MaxDistance === "object" && "value" in MaxDistance ? MaxDistance?.value : MaxDistance} /* default: <i>null</i> */  isRaw={typeof MaxDistance === "object" && "isRaw" in MaxDistance && MaxDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[FrooxEngine.AudioRolloffMode]]`} name="RolloffMode" id={typeof RolloffMode === "object" && "id" in RolloffMode ? RolloffMode?.id : undefined} value={typeof RolloffMode === "object" && "value" in RolloffMode ? RolloffMode?.value : RolloffMode} /* default: <i>null</i> */  isRaw={typeof RolloffMode === "object" && "isRaw" in RolloffMode && RolloffMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData]`} name="PressedClips" id={typeof PressedClips === "object" && "id" in PressedClips ? PressedClips?.id : undefined} value={typeof PressedClips === "object" && "value" in PressedClips ? PressedClips?.value : PressedClips} /* default: FrooxEngine.SyncList`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData] */  isRaw={typeof PressedClips === "object" && "isRaw" in PressedClips && PressedClips.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData]`} name="ReleasedClips" id={typeof ReleasedClips === "object" && "id" in ReleasedClips ? ReleasedClips?.id : undefined} value={typeof ReleasedClips === "object" && "value" in ReleasedClips ? ReleasedClips?.value : ReleasedClips} /* default: FrooxEngine.SyncList`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData] */  isRaw={typeof ReleasedClips === "object" && "isRaw" in ReleasedClips && ReleasedClips.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData]`} name="HoverEnterClips" id={typeof HoverEnterClips === "object" && "id" in HoverEnterClips ? HoverEnterClips?.id : undefined} value={typeof HoverEnterClips === "object" && "value" in HoverEnterClips ? HoverEnterClips?.value : HoverEnterClips} /* default: FrooxEngine.SyncList`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData] */  isRaw={typeof HoverEnterClips === "object" && "isRaw" in HoverEnterClips && HoverEnterClips.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData]`} name="HoverLeaveClips" id={typeof HoverLeaveClips === "object" && "id" in HoverLeaveClips ? HoverLeaveClips?.id : undefined} value={typeof HoverLeaveClips === "object" && "value" in HoverLeaveClips ? HoverLeaveClips?.value : HoverLeaveClips} /* default: FrooxEngine.SyncList`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData] */  isRaw={typeof HoverLeaveClips === "object" && "isRaw" in HoverLeaveClips && HoverLeaveClips.isRaw ? true : undefined} />
        </Component>
      );
    };
    