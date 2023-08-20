import { member, Member, Component } from "../../core";
    
    export interface ChildParentAudioClipPlayerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
ParentUnder?: member<any>;
MinDistance?: member<any>;
MaxDistance?: member<any>;
RolloffMode?: member<any>;
PlayPointMode?: member<any>;
ChildLimit?: member<number>;
FilterTag?: member<any>;
ParentedClips?: member<any>;
UnparentedClips?: member<any>;
    }
    
    export function ChildParentAudioClipPlayer(props: ChildParentAudioClipPlayerInput){
      const { id, persistentId, updateOrder, Enabled,
ParentUnder,
MinDistance,
MaxDistance,
RolloffMode,
PlayPointMode,
ChildLimit,
FilterTag,
ParentedClips,
UnparentedClips, } = props;
    
      return (
        <Component type="FrooxEngine.ChildParentAudioClipPlayer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="ParentUnder" id={typeof ParentUnder === "object" && "id" in ParentUnder ? ParentUnder?.id : undefined} value={typeof ParentUnder === "object" && "value" in ParentUnder ? ParentUnder?.value : ParentUnder} /* default: ID0 */  isRaw={typeof ParentUnder === "object" && "isRaw" in ParentUnder && ParentUnder.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="MinDistance" id={typeof MinDistance === "object" && "id" in MinDistance ? MinDistance?.id : undefined} value={typeof MinDistance === "object" && "value" in MinDistance ? MinDistance?.value : MinDistance} /* default: <i>null</i> */  isRaw={typeof MinDistance === "object" && "isRaw" in MinDistance && MinDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="MaxDistance" id={typeof MaxDistance === "object" && "id" in MaxDistance ? MaxDistance?.id : undefined} value={typeof MaxDistance === "object" && "value" in MaxDistance ? MaxDistance?.value : MaxDistance} /* default: <i>null</i> */  isRaw={typeof MaxDistance === "object" && "isRaw" in MaxDistance && MaxDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[FrooxEngine.AudioRolloffMode]]`} name="RolloffMode" id={typeof RolloffMode === "object" && "id" in RolloffMode ? RolloffMode?.id : undefined} value={typeof RolloffMode === "object" && "value" in RolloffMode ? RolloffMode?.value : RolloffMode} /* default: <i>null</i> */  isRaw={typeof RolloffMode === "object" && "isRaw" in RolloffMode && RolloffMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.ChildParentAudioClipPlayer+PointMode]`} name="PlayPointMode" id={typeof PlayPointMode === "object" && "id" in PlayPointMode ? PlayPointMode?.id : undefined} value={typeof PlayPointMode === "object" && "value" in PlayPointMode ? PlayPointMode?.value : PlayPointMode} /* default: ParentOrigin */  isRaw={typeof PlayPointMode === "object" && "isRaw" in PlayPointMode && PlayPointMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="ChildLimit" id={typeof ChildLimit === "object" && "id" in ChildLimit ? ChildLimit?.id : undefined} value={typeof ChildLimit === "object" && "value" in ChildLimit ? ChildLimit?.value : ChildLimit} /* default: 0 */  isRaw={typeof ChildLimit === "object" && "isRaw" in ChildLimit && ChildLimit.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="FilterTag" id={typeof FilterTag === "object" && "id" in FilterTag ? FilterTag?.id : undefined} value={typeof FilterTag === "object" && "value" in FilterTag ? FilterTag?.value : FilterTag} /* default: <i>null</i> */  isRaw={typeof FilterTag === "object" && "isRaw" in FilterTag && FilterTag.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData]`} name="ParentedClips" id={typeof ParentedClips === "object" && "id" in ParentedClips ? ParentedClips?.id : undefined} value={typeof ParentedClips === "object" && "value" in ParentedClips ? ParentedClips?.value : ParentedClips} /* default: FrooxEngine.SyncList`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData] */  isRaw={typeof ParentedClips === "object" && "isRaw" in ParentedClips && ParentedClips.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData]`} name="UnparentedClips" id={typeof UnparentedClips === "object" && "id" in UnparentedClips ? UnparentedClips?.id : undefined} value={typeof UnparentedClips === "object" && "value" in UnparentedClips ? UnparentedClips?.value : UnparentedClips} /* default: FrooxEngine.SyncList`1[FrooxEngine.RandomAudioClipPlayerBase+ClipData] */  isRaw={typeof UnparentedClips === "object" && "isRaw" in UnparentedClips && UnparentedClips.isRaw ? true : undefined} />
        </Component>
      );
    };
    