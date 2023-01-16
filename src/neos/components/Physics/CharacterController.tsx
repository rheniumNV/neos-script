import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface CharacterControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SimulatingUser?: member<any>;
CharacterRoot?: member<any>;
HeadReference?: member<any>;
SimulateRotation?: member<boolean>;
MassScaling?: member<any>;
ForceScaling?: member<any>;
SpeedScaling?: member<any>;
JumpScaling?: member<any>;
GravityScaling?: member<any>;
LinearDamping?: member<number>;
AngularDamping?: member<number>;
Margin?: member<number>;
StepUpHeight?: member<number>;
StepUpCheckDistance?: member<number>;
KillVerticalVelocityAfterStepUp?: member<boolean>;
EdgeDetectionDepth?: member<number>;
Speed?: member<number>;
SlidingSpeed?: member<number>;
AirSpeed?: member<number>;
TractionForce?: member<number>;
SlidingForce?: member<number>;
AirForce?: member<number>;
MaximumGlueForce?: member<number>;
MaximumTractionSlope?: member<number>;
MaximumSupportSlope?: member<number>;
JumpSpeed?: member<number>;
SlidingJumpSpeed?: member<number>;
Gravity?: member<[number, number, number]>;
GravitySpace?: member<any>;
DebugVisualDuration?: member<any>;
__height?: member<number>;
__radius?: member<number>;
__mass?: member<number>;
__collideWithOtherCharacters?: member<boolean>;
__ignoreRaycasts?: member<boolean>;
__rootAtBottom?: member<boolean>;
    }
    
    export function CharacterController(props: CharacterControllerInput){
      const { id, persistentId, updateOrder, Enabled,
SimulatingUser,
CharacterRoot,
HeadReference,
SimulateRotation,
MassScaling,
ForceScaling,
SpeedScaling,
JumpScaling,
GravityScaling,
LinearDamping,
AngularDamping,
Margin,
StepUpHeight,
StepUpCheckDistance,
KillVerticalVelocityAfterStepUp,
EdgeDetectionDepth,
Speed,
SlidingSpeed,
AirSpeed,
TractionForce,
SlidingForce,
AirForce,
MaximumGlueForce,
MaximumTractionSlope,
MaximumSupportSlope,
JumpSpeed,
SlidingJumpSpeed,
Gravity,
GravitySpace,
DebugVisualDuration,
__height,
__radius,
__mass,
__collideWithOtherCharacters,
__ignoreRaycasts,
__rootAtBottom, } = props;
    
      return (
        <Component type="FrooxEngine.CharacterController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="SimulatingUser" id={typeof SimulatingUser === "object" && "id" in SimulatingUser ? SimulatingUser?.id : undefined} value={typeof SimulatingUser === "object" && "value" in SimulatingUser ? SimulatingUser?.value : SimulatingUser} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="CharacterRoot" id={typeof CharacterRoot === "object" && "id" in CharacterRoot ? CharacterRoot?.id : undefined} value={typeof CharacterRoot === "object" && "value" in CharacterRoot ? CharacterRoot?.value : CharacterRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="HeadReference" id={typeof HeadReference === "object" && "id" in HeadReference ? HeadReference?.id : undefined} value={typeof HeadReference === "object" && "value" in HeadReference ? HeadReference?.value : HeadReference} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SimulateRotation" id={typeof SimulateRotation === "object" && "id" in SimulateRotation ? SimulateRotation?.id : undefined} value={typeof SimulateRotation === "object" && "value" in SimulateRotation ? SimulateRotation?.value : SimulateRotation} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PhysicsScalingMode]`} name="MassScaling" id={typeof MassScaling === "object" && "id" in MassScaling ? MassScaling?.id : undefined} value={typeof MassScaling === "object" && "value" in MassScaling ? MassScaling?.value : MassScaling} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PhysicsScalingMode]`} name="ForceScaling" id={typeof ForceScaling === "object" && "id" in ForceScaling ? ForceScaling?.id : undefined} value={typeof ForceScaling === "object" && "value" in ForceScaling ? ForceScaling?.value : ForceScaling} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PhysicsScalingMode]`} name="SpeedScaling" id={typeof SpeedScaling === "object" && "id" in SpeedScaling ? SpeedScaling?.id : undefined} value={typeof SpeedScaling === "object" && "value" in SpeedScaling ? SpeedScaling?.value : SpeedScaling} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PhysicsScalingMode]`} name="JumpScaling" id={typeof JumpScaling === "object" && "id" in JumpScaling ? JumpScaling?.id : undefined} value={typeof JumpScaling === "object" && "value" in JumpScaling ? JumpScaling?.value : JumpScaling} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.PhysicsScalingMode]`} name="GravityScaling" id={typeof GravityScaling === "object" && "id" in GravityScaling ? GravityScaling?.id : undefined} value={typeof GravityScaling === "object" && "value" in GravityScaling ? GravityScaling?.value : GravityScaling} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LinearDamping" id={typeof LinearDamping === "object" && "id" in LinearDamping ? LinearDamping?.id : undefined} value={typeof LinearDamping === "object" && "value" in LinearDamping ? LinearDamping?.value : LinearDamping} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AngularDamping" id={typeof AngularDamping === "object" && "id" in AngularDamping ? AngularDamping?.id : undefined} value={typeof AngularDamping === "object" && "value" in AngularDamping ? AngularDamping?.value : AngularDamping} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Margin" id={typeof Margin === "object" && "id" in Margin ? Margin?.id : undefined} value={typeof Margin === "object" && "value" in Margin ? Margin?.value : Margin} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StepUpHeight" id={typeof StepUpHeight === "object" && "id" in StepUpHeight ? StepUpHeight?.id : undefined} value={typeof StepUpHeight === "object" && "value" in StepUpHeight ? StepUpHeight?.value : StepUpHeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StepUpCheckDistance" id={typeof StepUpCheckDistance === "object" && "id" in StepUpCheckDistance ? StepUpCheckDistance?.id : undefined} value={typeof StepUpCheckDistance === "object" && "value" in StepUpCheckDistance ? StepUpCheckDistance?.value : StepUpCheckDistance} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="KillVerticalVelocityAfterStepUp" id={typeof KillVerticalVelocityAfterStepUp === "object" && "id" in KillVerticalVelocityAfterStepUp ? KillVerticalVelocityAfterStepUp?.id : undefined} value={typeof KillVerticalVelocityAfterStepUp === "object" && "value" in KillVerticalVelocityAfterStepUp ? KillVerticalVelocityAfterStepUp?.value : KillVerticalVelocityAfterStepUp} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EdgeDetectionDepth" id={typeof EdgeDetectionDepth === "object" && "id" in EdgeDetectionDepth ? EdgeDetectionDepth?.id : undefined} value={typeof EdgeDetectionDepth === "object" && "value" in EdgeDetectionDepth ? EdgeDetectionDepth?.value : EdgeDetectionDepth} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Speed" id={typeof Speed === "object" && "id" in Speed ? Speed?.id : undefined} value={typeof Speed === "object" && "value" in Speed ? Speed?.value : Speed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SlidingSpeed" id={typeof SlidingSpeed === "object" && "id" in SlidingSpeed ? SlidingSpeed?.id : undefined} value={typeof SlidingSpeed === "object" && "value" in SlidingSpeed ? SlidingSpeed?.value : SlidingSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AirSpeed" id={typeof AirSpeed === "object" && "id" in AirSpeed ? AirSpeed?.id : undefined} value={typeof AirSpeed === "object" && "value" in AirSpeed ? AirSpeed?.value : AirSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="TractionForce" id={typeof TractionForce === "object" && "id" in TractionForce ? TractionForce?.id : undefined} value={typeof TractionForce === "object" && "value" in TractionForce ? TractionForce?.value : TractionForce} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SlidingForce" id={typeof SlidingForce === "object" && "id" in SlidingForce ? SlidingForce?.id : undefined} value={typeof SlidingForce === "object" && "value" in SlidingForce ? SlidingForce?.value : SlidingForce} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="AirForce" id={typeof AirForce === "object" && "id" in AirForce ? AirForce?.id : undefined} value={typeof AirForce === "object" && "value" in AirForce ? AirForce?.value : AirForce} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaximumGlueForce" id={typeof MaximumGlueForce === "object" && "id" in MaximumGlueForce ? MaximumGlueForce?.id : undefined} value={typeof MaximumGlueForce === "object" && "value" in MaximumGlueForce ? MaximumGlueForce?.value : MaximumGlueForce} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaximumTractionSlope" id={typeof MaximumTractionSlope === "object" && "id" in MaximumTractionSlope ? MaximumTractionSlope?.id : undefined} value={typeof MaximumTractionSlope === "object" && "value" in MaximumTractionSlope ? MaximumTractionSlope?.value : MaximumTractionSlope} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaximumSupportSlope" id={typeof MaximumSupportSlope === "object" && "id" in MaximumSupportSlope ? MaximumSupportSlope?.id : undefined} value={typeof MaximumSupportSlope === "object" && "value" in MaximumSupportSlope ? MaximumSupportSlope?.value : MaximumSupportSlope} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="JumpSpeed" id={typeof JumpSpeed === "object" && "id" in JumpSpeed ? JumpSpeed?.id : undefined} value={typeof JumpSpeed === "object" && "value" in JumpSpeed ? JumpSpeed?.value : JumpSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SlidingJumpSpeed" id={typeof SlidingJumpSpeed === "object" && "id" in SlidingJumpSpeed ? SlidingJumpSpeed?.id : undefined} value={typeof SlidingJumpSpeed === "object" && "value" in SlidingJumpSpeed ? SlidingJumpSpeed?.value : SlidingJumpSpeed} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Gravity" id={typeof Gravity === "object" && "id" in Gravity ? Gravity?.id : undefined} value={typeof Gravity === "object" && "value" in Gravity ? Gravity?.value : Gravity} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.RootSpace`} name="GravitySpace" id={typeof GravitySpace === "object" && "id" in GravitySpace ? GravitySpace?.id : undefined} value={typeof GravitySpace === "object" && "value" in GravitySpace ? GravitySpace?.value : GravitySpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="DebugVisualDuration-ID" id={typeof DebugVisualDuration === "object" && "id" in DebugVisualDuration ? DebugVisualDuration?.id : undefined} value={typeof DebugVisualDuration === "object" && "value" in DebugVisualDuration ? DebugVisualDuration?.value : DebugVisualDuration} /* default: <i>null</i> */ idOnly />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="__height-ID" id={typeof __height === "object" && "id" in __height ? __height?.id : undefined} value={typeof __height === "object" && "value" in __height ? __height?.value : __height} /* default: 0 */ idOnly />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="__radius-ID" id={typeof __radius === "object" && "id" in __radius ? __radius?.id : undefined} value={typeof __radius === "object" && "value" in __radius ? __radius?.value : __radius} /* default: 0 */ idOnly />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="__mass-ID" id={typeof __mass === "object" && "id" in __mass ? __mass?.id : undefined} value={typeof __mass === "object" && "value" in __mass ? __mass?.value : __mass} /* default: 0 */ idOnly />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="__collideWithOtherCharacters-ID" id={typeof __collideWithOtherCharacters === "object" && "id" in __collideWithOtherCharacters ? __collideWithOtherCharacters?.id : undefined} value={typeof __collideWithOtherCharacters === "object" && "value" in __collideWithOtherCharacters ? __collideWithOtherCharacters?.value : __collideWithOtherCharacters} /* default: false */ idOnly />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="__ignoreRaycasts-ID" id={typeof __ignoreRaycasts === "object" && "id" in __ignoreRaycasts ? __ignoreRaycasts?.id : undefined} value={typeof __ignoreRaycasts === "object" && "value" in __ignoreRaycasts ? __ignoreRaycasts?.value : __ignoreRaycasts} /* default: false */ idOnly />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="__rootAtBottom-ID" id={typeof __rootAtBottom === "object" && "id" in __rootAtBottom ? __rootAtBottom?.id : undefined} value={typeof __rootAtBottom === "object" && "value" in __rootAtBottom ? __rootAtBottom?.value : __rootAtBottom} /* default: false */ idOnly />
        </Component>
      );
    };
    