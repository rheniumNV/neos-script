import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface DroneCameraInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
CameraUser?: member<any>;
SimulateOnHost?: member<boolean>;
ManualControl?: member<boolean>;
SlowSpeed?: member<number>;
Speed?: member<number>;
FastSpeed?: member<number>;
MouseSensitivity?: member<number>;
FieldOfViewSource?: member<any>;
FieldOfView?: member<number>;
AspectRatioSource?: member<any>;
AspectRatio?: member<number>;
FollowUser?: member<any>;
ControllerRejectDistance?: member<number>;
GroupSearchRadius?: member<number>;
BiggestGroupSearchInterval?: member<number>;
IgnoreOtherCameras?: member<boolean>;
HeadForwardPointDistance?: member<number>;
HeadBackwardPointDistance?: member<number>;
HeadUpPointDistance?: member<number>;
HeadDownPointDistance?: member<number>;
HeightOffset?: member<number>;
CircleOffset?: member<number>;
DistanceOffset?: member<number>;
CircleSpeed?: member<number>;
PositionSpeed?: member<number>;
LookSpeed?: member<number>;
DistanceSpeed?: member<number>;
UserInfluenceSpeed?: member<number>;
HeightAmplitude?: member<number>;
DistanceAmplitude?: member<number>;
CircleAmplitude?: member<number>;
HeightPeriod?: member<number>;
DistancePeriod?: member<number>;
CirclePeriod?: member<number>;
CirclePeriodNoiseSpeed?: member<number>;
CirclePeriodNoiseInfluence?: member<number>;
CheckOcclusion?: member<boolean>;
AdjustHeightOnOcclusion?: member<boolean>;
TeleportWaitTime?: member<number>;
TeleportTriggerRelativeDistance?: member<number>;
TeleportTriggerAngle?: member<number>;
MinRandomizeFovInterval?: member<number>;
MaxRandomizeFovInterval?: member<number>;
MinFov?: member<number>;
MaxFov?: member<number>;
MinChangeFovTime?: member<number>;
MaxChangeFovTime?: member<number>;
    }
    
    export function DroneCamera(props: DroneCameraInput){
      const { id, persistentId, updateOrder, Enabled,
CameraUser,
SimulateOnHost,
ManualControl,
SlowSpeed,
Speed,
FastSpeed,
MouseSensitivity,
FieldOfViewSource,
FieldOfView,
AspectRatioSource,
AspectRatio,
FollowUser,
ControllerRejectDistance,
GroupSearchRadius,
BiggestGroupSearchInterval,
IgnoreOtherCameras,
HeadForwardPointDistance,
HeadBackwardPointDistance,
HeadUpPointDistance,
HeadDownPointDistance,
HeightOffset,
CircleOffset,
DistanceOffset,
CircleSpeed,
PositionSpeed,
LookSpeed,
DistanceSpeed,
UserInfluenceSpeed,
HeightAmplitude,
DistanceAmplitude,
CircleAmplitude,
HeightPeriod,
DistancePeriod,
CirclePeriod,
CirclePeriodNoiseSpeed,
CirclePeriodNoiseInfluence,
CheckOcclusion,
AdjustHeightOnOcclusion,
TeleportWaitTime,
TeleportTriggerRelativeDistance,
TeleportTriggerAngle,
MinRandomizeFovInterval,
MaxRandomizeFovInterval,
MinFov,
MaxFov,
MinChangeFovTime,
MaxChangeFovTime, } = props;
    
      return (
        <Component type="FrooxEngine.DroneCamera" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.UserRef`} name="CameraUser" id={typeof CameraUser === "object" && "id" in CameraUser ? CameraUser?.id : undefined} value={typeof CameraUser === "object" && "value" in CameraUser ? CameraUser?.value : CameraUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SimulateOnHost" id={typeof SimulateOnHost === "object" && "id" in SimulateOnHost ? SimulateOnHost?.id : undefined} value={typeof SimulateOnHost === "object" && "value" in SimulateOnHost ? SimulateOnHost?.value : SimulateOnHost} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ManualControl" id={typeof ManualControl === "object" && "id" in ManualControl ? ManualControl?.id : undefined} value={typeof ManualControl === "object" && "value" in ManualControl ? ManualControl?.value : ManualControl} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SlowSpeed" id={typeof SlowSpeed === "object" && "id" in SlowSpeed ? SlowSpeed?.id : undefined} value={typeof SlowSpeed === "object" && "value" in SlowSpeed ? SlowSpeed?.value : SlowSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Speed" id={typeof Speed === "object" && "id" in Speed ? Speed?.id : undefined} value={typeof Speed === "object" && "value" in Speed ? Speed?.value : Speed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FastSpeed" id={typeof FastSpeed === "object" && "id" in FastSpeed ? FastSpeed?.id : undefined} value={typeof FastSpeed === "object" && "value" in FastSpeed ? FastSpeed?.value : FastSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MouseSensitivity" id={typeof MouseSensitivity === "object" && "id" in MouseSensitivity ? MouseSensitivity?.id : undefined} value={typeof MouseSensitivity === "object" && "value" in MouseSensitivity ? MouseSensitivity?.value : MouseSensitivity} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Single]]`} name="FieldOfViewSource" id={typeof FieldOfViewSource === "object" && "id" in FieldOfViewSource ? FieldOfViewSource?.id : undefined} value={typeof FieldOfViewSource === "object" && "value" in FieldOfViewSource ? FieldOfViewSource?.value : FieldOfViewSource} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FieldOfView" id={typeof FieldOfView === "object" && "id" in FieldOfView ? FieldOfView?.id : undefined} value={typeof FieldOfView === "object" && "value" in FieldOfView ? FieldOfView?.value : FieldOfView} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[System.Single]]`} name="AspectRatioSource" id={typeof AspectRatioSource === "object" && "id" in AspectRatioSource ? AspectRatioSource?.id : undefined} value={typeof AspectRatioSource === "object" && "value" in AspectRatioSource ? AspectRatioSource?.value : AspectRatioSource} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AspectRatio" id={typeof AspectRatio === "object" && "id" in AspectRatio ? AspectRatio?.id : undefined} value={typeof AspectRatio === "object" && "value" in AspectRatio ? AspectRatio?.value : AspectRatio} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="FollowUser" id={typeof FollowUser === "object" && "id" in FollowUser ? FollowUser?.id : undefined} value={typeof FollowUser === "object" && "value" in FollowUser ? FollowUser?.value : FollowUser} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ControllerRejectDistance" id={typeof ControllerRejectDistance === "object" && "id" in ControllerRejectDistance ? ControllerRejectDistance?.id : undefined} value={typeof ControllerRejectDistance === "object" && "value" in ControllerRejectDistance ? ControllerRejectDistance?.value : ControllerRejectDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GroupSearchRadius" id={typeof GroupSearchRadius === "object" && "id" in GroupSearchRadius ? GroupSearchRadius?.id : undefined} value={typeof GroupSearchRadius === "object" && "value" in GroupSearchRadius ? GroupSearchRadius?.value : GroupSearchRadius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BiggestGroupSearchInterval" id={typeof BiggestGroupSearchInterval === "object" && "id" in BiggestGroupSearchInterval ? BiggestGroupSearchInterval?.id : undefined} value={typeof BiggestGroupSearchInterval === "object" && "value" in BiggestGroupSearchInterval ? BiggestGroupSearchInterval?.value : BiggestGroupSearchInterval} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreOtherCameras" id={typeof IgnoreOtherCameras === "object" && "id" in IgnoreOtherCameras ? IgnoreOtherCameras?.id : undefined} value={typeof IgnoreOtherCameras === "object" && "value" in IgnoreOtherCameras ? IgnoreOtherCameras?.value : IgnoreOtherCameras} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeadForwardPointDistance" id={typeof HeadForwardPointDistance === "object" && "id" in HeadForwardPointDistance ? HeadForwardPointDistance?.id : undefined} value={typeof HeadForwardPointDistance === "object" && "value" in HeadForwardPointDistance ? HeadForwardPointDistance?.value : HeadForwardPointDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeadBackwardPointDistance" id={typeof HeadBackwardPointDistance === "object" && "id" in HeadBackwardPointDistance ? HeadBackwardPointDistance?.id : undefined} value={typeof HeadBackwardPointDistance === "object" && "value" in HeadBackwardPointDistance ? HeadBackwardPointDistance?.value : HeadBackwardPointDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeadUpPointDistance" id={typeof HeadUpPointDistance === "object" && "id" in HeadUpPointDistance ? HeadUpPointDistance?.id : undefined} value={typeof HeadUpPointDistance === "object" && "value" in HeadUpPointDistance ? HeadUpPointDistance?.value : HeadUpPointDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeadDownPointDistance" id={typeof HeadDownPointDistance === "object" && "id" in HeadDownPointDistance ? HeadDownPointDistance?.id : undefined} value={typeof HeadDownPointDistance === "object" && "value" in HeadDownPointDistance ? HeadDownPointDistance?.value : HeadDownPointDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeightOffset" id={typeof HeightOffset === "object" && "id" in HeightOffset ? HeightOffset?.id : undefined} value={typeof HeightOffset === "object" && "value" in HeightOffset ? HeightOffset?.value : HeightOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CircleOffset" id={typeof CircleOffset === "object" && "id" in CircleOffset ? CircleOffset?.id : undefined} value={typeof CircleOffset === "object" && "value" in CircleOffset ? CircleOffset?.value : CircleOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DistanceOffset" id={typeof DistanceOffset === "object" && "id" in DistanceOffset ? DistanceOffset?.id : undefined} value={typeof DistanceOffset === "object" && "value" in DistanceOffset ? DistanceOffset?.value : DistanceOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CircleSpeed" id={typeof CircleSpeed === "object" && "id" in CircleSpeed ? CircleSpeed?.id : undefined} value={typeof CircleSpeed === "object" && "value" in CircleSpeed ? CircleSpeed?.value : CircleSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PositionSpeed" id={typeof PositionSpeed === "object" && "id" in PositionSpeed ? PositionSpeed?.id : undefined} value={typeof PositionSpeed === "object" && "value" in PositionSpeed ? PositionSpeed?.value : PositionSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LookSpeed" id={typeof LookSpeed === "object" && "id" in LookSpeed ? LookSpeed?.id : undefined} value={typeof LookSpeed === "object" && "value" in LookSpeed ? LookSpeed?.value : LookSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DistanceSpeed" id={typeof DistanceSpeed === "object" && "id" in DistanceSpeed ? DistanceSpeed?.id : undefined} value={typeof DistanceSpeed === "object" && "value" in DistanceSpeed ? DistanceSpeed?.value : DistanceSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="UserInfluenceSpeed" id={typeof UserInfluenceSpeed === "object" && "id" in UserInfluenceSpeed ? UserInfluenceSpeed?.id : undefined} value={typeof UserInfluenceSpeed === "object" && "value" in UserInfluenceSpeed ? UserInfluenceSpeed?.value : UserInfluenceSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeightAmplitude" id={typeof HeightAmplitude === "object" && "id" in HeightAmplitude ? HeightAmplitude?.id : undefined} value={typeof HeightAmplitude === "object" && "value" in HeightAmplitude ? HeightAmplitude?.value : HeightAmplitude} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DistanceAmplitude" id={typeof DistanceAmplitude === "object" && "id" in DistanceAmplitude ? DistanceAmplitude?.id : undefined} value={typeof DistanceAmplitude === "object" && "value" in DistanceAmplitude ? DistanceAmplitude?.value : DistanceAmplitude} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CircleAmplitude" id={typeof CircleAmplitude === "object" && "id" in CircleAmplitude ? CircleAmplitude?.id : undefined} value={typeof CircleAmplitude === "object" && "value" in CircleAmplitude ? CircleAmplitude?.value : CircleAmplitude} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HeightPeriod" id={typeof HeightPeriod === "object" && "id" in HeightPeriod ? HeightPeriod?.id : undefined} value={typeof HeightPeriod === "object" && "value" in HeightPeriod ? HeightPeriod?.value : HeightPeriod} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DistancePeriod" id={typeof DistancePeriod === "object" && "id" in DistancePeriod ? DistancePeriod?.id : undefined} value={typeof DistancePeriod === "object" && "value" in DistancePeriod ? DistancePeriod?.value : DistancePeriod} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CirclePeriod" id={typeof CirclePeriod === "object" && "id" in CirclePeriod ? CirclePeriod?.id : undefined} value={typeof CirclePeriod === "object" && "value" in CirclePeriod ? CirclePeriod?.value : CirclePeriod} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CirclePeriodNoiseSpeed" id={typeof CirclePeriodNoiseSpeed === "object" && "id" in CirclePeriodNoiseSpeed ? CirclePeriodNoiseSpeed?.id : undefined} value={typeof CirclePeriodNoiseSpeed === "object" && "value" in CirclePeriodNoiseSpeed ? CirclePeriodNoiseSpeed?.value : CirclePeriodNoiseSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CirclePeriodNoiseInfluence" id={typeof CirclePeriodNoiseInfluence === "object" && "id" in CirclePeriodNoiseInfluence ? CirclePeriodNoiseInfluence?.id : undefined} value={typeof CirclePeriodNoiseInfluence === "object" && "value" in CirclePeriodNoiseInfluence ? CirclePeriodNoiseInfluence?.value : CirclePeriodNoiseInfluence} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CheckOcclusion" id={typeof CheckOcclusion === "object" && "id" in CheckOcclusion ? CheckOcclusion?.id : undefined} value={typeof CheckOcclusion === "object" && "value" in CheckOcclusion ? CheckOcclusion?.value : CheckOcclusion} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AdjustHeightOnOcclusion" id={typeof AdjustHeightOnOcclusion === "object" && "id" in AdjustHeightOnOcclusion ? AdjustHeightOnOcclusion?.id : undefined} value={typeof AdjustHeightOnOcclusion === "object" && "value" in AdjustHeightOnOcclusion ? AdjustHeightOnOcclusion?.value : AdjustHeightOnOcclusion} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TeleportWaitTime" id={typeof TeleportWaitTime === "object" && "id" in TeleportWaitTime ? TeleportWaitTime?.id : undefined} value={typeof TeleportWaitTime === "object" && "value" in TeleportWaitTime ? TeleportWaitTime?.value : TeleportWaitTime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TeleportTriggerRelativeDistance" id={typeof TeleportTriggerRelativeDistance === "object" && "id" in TeleportTriggerRelativeDistance ? TeleportTriggerRelativeDistance?.id : undefined} value={typeof TeleportTriggerRelativeDistance === "object" && "value" in TeleportTriggerRelativeDistance ? TeleportTriggerRelativeDistance?.value : TeleportTriggerRelativeDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TeleportTriggerAngle" id={typeof TeleportTriggerAngle === "object" && "id" in TeleportTriggerAngle ? TeleportTriggerAngle?.id : undefined} value={typeof TeleportTriggerAngle === "object" && "value" in TeleportTriggerAngle ? TeleportTriggerAngle?.value : TeleportTriggerAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinRandomizeFovInterval" id={typeof MinRandomizeFovInterval === "object" && "id" in MinRandomizeFovInterval ? MinRandomizeFovInterval?.id : undefined} value={typeof MinRandomizeFovInterval === "object" && "value" in MinRandomizeFovInterval ? MinRandomizeFovInterval?.value : MinRandomizeFovInterval} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxRandomizeFovInterval" id={typeof MaxRandomizeFovInterval === "object" && "id" in MaxRandomizeFovInterval ? MaxRandomizeFovInterval?.id : undefined} value={typeof MaxRandomizeFovInterval === "object" && "value" in MaxRandomizeFovInterval ? MaxRandomizeFovInterval?.value : MaxRandomizeFovInterval} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinFov" id={typeof MinFov === "object" && "id" in MinFov ? MinFov?.id : undefined} value={typeof MinFov === "object" && "value" in MinFov ? MinFov?.value : MinFov} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxFov" id={typeof MaxFov === "object" && "id" in MaxFov ? MaxFov?.id : undefined} value={typeof MaxFov === "object" && "value" in MaxFov ? MaxFov?.value : MaxFov} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinChangeFovTime" id={typeof MinChangeFovTime === "object" && "id" in MinChangeFovTime ? MinChangeFovTime?.id : undefined} value={typeof MinChangeFovTime === "object" && "value" in MinChangeFovTime ? MinChangeFovTime?.value : MinChangeFovTime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxChangeFovTime" id={typeof MaxChangeFovTime === "object" && "id" in MaxChangeFovTime ? MaxChangeFovTime?.id : undefined} value={typeof MaxChangeFovTime === "object" && "value" in MaxChangeFovTime ? MaxChangeFovTime?.value : MaxChangeFovTime} /* default: 0 */  />
        </Component>
      );
    };
    