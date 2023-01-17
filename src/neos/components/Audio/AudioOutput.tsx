import { member, Member, Component } from "../../core";
    
    export interface AudioOutputInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Volume?: member<number>;
Source?: member<any>;
SpatialBlend?: member<number>;
Spatialize?: member<boolean>;
DopplerLevel?: member<number>;
RolloffMode?: member<any>;
MinDistance?: member<number>;
MaxDistance?: member<number>;
Priority?: member<number>;
AudioTypeGroup?: member<any>;
DistanceSpace?: member<any>;
MinScale?: member<number>;
MaxScale?: member<number>;
IgnoreReverbZones?: member<boolean>;
excludedUsers?: member<any>;
    }
    
    export function AudioOutput(props: AudioOutputInput){
      const { id, persistentId, updateOrder, Enabled,
Volume,
Source,
SpatialBlend,
Spatialize,
DopplerLevel,
RolloffMode,
MinDistance,
MaxDistance,
Priority,
AudioTypeGroup,
DistanceSpace,
MinScale,
MaxScale,
IgnoreReverbZones,
excludedUsers, } = props;
    
      return (
        <Component type="FrooxEngine.AudioOutput" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Volume" id={typeof Volume === "object" && "id" in Volume ? Volume?.id : undefined} value={typeof Volume === "object" && "value" in Volume ? Volume?.value : Volume} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IAudioSource]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SpatialBlend" id={typeof SpatialBlend === "object" && "id" in SpatialBlend ? SpatialBlend?.id : undefined} value={typeof SpatialBlend === "object" && "value" in SpatialBlend ? SpatialBlend?.value : SpatialBlend} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Spatialize" id={typeof Spatialize === "object" && "id" in Spatialize ? Spatialize?.id : undefined} value={typeof Spatialize === "object" && "value" in Spatialize ? Spatialize?.value : Spatialize} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DopplerLevel" id={typeof DopplerLevel === "object" && "id" in DopplerLevel ? DopplerLevel?.id : undefined} value={typeof DopplerLevel === "object" && "value" in DopplerLevel ? DopplerLevel?.value : DopplerLevel} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AudioRolloffMode]`} name="RolloffMode" id={typeof RolloffMode === "object" && "id" in RolloffMode ? RolloffMode?.id : undefined} value={typeof RolloffMode === "object" && "value" in RolloffMode ? RolloffMode?.value : RolloffMode} /* default: Logarithmic */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinDistance" id={typeof MinDistance === "object" && "id" in MinDistance ? MinDistance?.id : undefined} value={typeof MinDistance === "object" && "value" in MinDistance ? MinDistance?.value : MinDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxDistance" id={typeof MaxDistance === "object" && "id" in MaxDistance ? MaxDistance?.id : undefined} value={typeof MaxDistance === "object" && "value" in MaxDistance ? MaxDistance?.value : MaxDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Priority" id={typeof Priority === "object" && "id" in Priority ? Priority?.id : undefined} value={typeof Priority === "object" && "value" in Priority ? Priority?.value : Priority} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AudioTypeGroup]`} name="AudioTypeGroup" id={typeof AudioTypeGroup === "object" && "id" in AudioTypeGroup ? AudioTypeGroup?.id : undefined} value={typeof AudioTypeGroup === "object" && "value" in AudioTypeGroup ? AudioTypeGroup?.value : AudioTypeGroup} /* default: SoundEffect */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AudioDistanceSpace]`} name="DistanceSpace" id={typeof DistanceSpace === "object" && "id" in DistanceSpace ? DistanceSpace?.id : undefined} value={typeof DistanceSpace === "object" && "value" in DistanceSpace ? DistanceSpace?.value : DistanceSpace} /* default: Local */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinScale" id={typeof MinScale === "object" && "id" in MinScale ? MinScale?.id : undefined} value={typeof MinScale === "object" && "value" in MinScale ? MinScale?.value : MinScale} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxScale" id={typeof MaxScale === "object" && "id" in MaxScale ? MaxScale?.id : undefined} value={typeof MaxScale === "object" && "value" in MaxScale ? MaxScale?.value : MaxScale} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreReverbZones" id={typeof IgnoreReverbZones === "object" && "id" in IgnoreReverbZones ? IgnoreReverbZones?.id : undefined} value={typeof IgnoreReverbZones === "object" && "value" in IgnoreReverbZones ? IgnoreReverbZones?.value : IgnoreReverbZones} /* default: false */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.User]`} name="excludedUsers" id={typeof excludedUsers === "object" && "id" in excludedUsers ? excludedUsers?.id : undefined} value={typeof excludedUsers === "object" && "value" in excludedUsers ? excludedUsers?.value : excludedUsers} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.User] */  />
        </Component>
      );
    };
    