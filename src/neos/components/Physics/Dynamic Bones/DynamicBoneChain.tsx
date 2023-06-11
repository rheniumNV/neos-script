import { member, Member, Component } from "../../../core";
    
    export interface DynamicBoneChainInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Inertia?: member<number>;
InertiaForce?: member<number>;
Damping?: member<number>;
Elasticity?: member<number>;
Stiffness?: member<number>;
SimulateTerminalBones?: member<boolean>;
BaseBoneRadius?: member<number>;
DynamicPlayerCollision?: member<boolean>;
CollideWithOwnBody?: member<boolean>;
HandCollisionVibration?: member<any>;
CollideWithHead?: member<boolean>;
CollideWithBody?: member<boolean>;
CollideWithLeftHand?: member<boolean>;
CollideWithRightHand?: member<boolean>;
Gravity?: member<[number, number, number]>;
GravitySpace?: member<any>;
UseUserGravityDirection?: member<boolean>;
LocalForce?: member<[number, number, number]>;
GlobalStretch?: member<number>;
MaxStretchRatio?: member<number>;
CurrentStretchRatio?: member<any>;
StretchRestoreSpeed?: member<number>;
UseLocalUserSpace?: member<boolean>;
SimulationSpace?: member<any>;
StaticColliders?: member<any>;
VisualizeColliders?: member<boolean>;
VisualizeBones?: member<boolean>;
IsGrabbable?: member<boolean>;
ActiveUserRootOnly?: member<boolean>;
AllowSteal?: member<boolean>;
GrabPriority?: member<number>;
IgnoreGrabOnFirstBone?: member<boolean>;
GrabRadiusTolerance?: member<number>;
GrabReleaseDistance?: member<number>;
GrabSlipping?: member<boolean>;
GrabTerminalBones?: member<boolean>;
GrabVibration?: member<any>;
IgnoreOwnLeftHand?: member<boolean>;
IgnoreOwnRightHand?: member<boolean>;
EffectorTarget?: member<any>;
EffectorBoneIndex?: member<number>;
EffectorBoneOffset?: member<[number, number, number]>;
_activeGrabber?: member<any>;
Bones?: member<any>;
    }
    
    export function DynamicBoneChain(props: DynamicBoneChainInput){
      const { id, persistentId, updateOrder, Enabled,
Inertia,
InertiaForce,
Damping,
Elasticity,
Stiffness,
SimulateTerminalBones,
BaseBoneRadius,
DynamicPlayerCollision,
CollideWithOwnBody,
HandCollisionVibration,
CollideWithHead,
CollideWithBody,
CollideWithLeftHand,
CollideWithRightHand,
Gravity,
GravitySpace,
UseUserGravityDirection,
LocalForce,
GlobalStretch,
MaxStretchRatio,
CurrentStretchRatio,
StretchRestoreSpeed,
UseLocalUserSpace,
SimulationSpace,
StaticColliders,
VisualizeColliders,
VisualizeBones,
IsGrabbable,
ActiveUserRootOnly,
AllowSteal,
GrabPriority,
IgnoreGrabOnFirstBone,
GrabRadiusTolerance,
GrabReleaseDistance,
GrabSlipping,
GrabTerminalBones,
GrabVibration,
IgnoreOwnLeftHand,
IgnoreOwnRightHand,
EffectorTarget,
EffectorBoneIndex,
EffectorBoneOffset,
_activeGrabber,
Bones, } = props;
    
      return (
        <Component type="FrooxEngine.DynamicBoneChain" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Inertia" id={typeof Inertia === "object" && "id" in Inertia ? Inertia?.id : undefined} value={typeof Inertia === "object" && "value" in Inertia ? Inertia?.value : Inertia} /* default: 0 */  isRaw={typeof Inertia === "object" && "isRaw" in Inertia && Inertia.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="InertiaForce" id={typeof InertiaForce === "object" && "id" in InertiaForce ? InertiaForce?.id : undefined} value={typeof InertiaForce === "object" && "value" in InertiaForce ? InertiaForce?.value : InertiaForce} /* default: 0 */  isRaw={typeof InertiaForce === "object" && "isRaw" in InertiaForce && InertiaForce.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Damping" id={typeof Damping === "object" && "id" in Damping ? Damping?.id : undefined} value={typeof Damping === "object" && "value" in Damping ? Damping?.value : Damping} /* default: 0 */  isRaw={typeof Damping === "object" && "isRaw" in Damping && Damping.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Elasticity" id={typeof Elasticity === "object" && "id" in Elasticity ? Elasticity?.id : undefined} value={typeof Elasticity === "object" && "value" in Elasticity ? Elasticity?.value : Elasticity} /* default: 0 */  isRaw={typeof Elasticity === "object" && "isRaw" in Elasticity && Elasticity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Stiffness" id={typeof Stiffness === "object" && "id" in Stiffness ? Stiffness?.id : undefined} value={typeof Stiffness === "object" && "value" in Stiffness ? Stiffness?.value : Stiffness} /* default: 0 */  isRaw={typeof Stiffness === "object" && "isRaw" in Stiffness && Stiffness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="SimulateTerminalBones" id={typeof SimulateTerminalBones === "object" && "id" in SimulateTerminalBones ? SimulateTerminalBones?.id : undefined} value={typeof SimulateTerminalBones === "object" && "value" in SimulateTerminalBones ? SimulateTerminalBones?.value : SimulateTerminalBones} /* default: false */  isRaw={typeof SimulateTerminalBones === "object" && "isRaw" in SimulateTerminalBones && SimulateTerminalBones.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BaseBoneRadius" id={typeof BaseBoneRadius === "object" && "id" in BaseBoneRadius ? BaseBoneRadius?.id : undefined} value={typeof BaseBoneRadius === "object" && "value" in BaseBoneRadius ? BaseBoneRadius?.value : BaseBoneRadius} /* default: 0 */  isRaw={typeof BaseBoneRadius === "object" && "isRaw" in BaseBoneRadius && BaseBoneRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DynamicPlayerCollision" id={typeof DynamicPlayerCollision === "object" && "id" in DynamicPlayerCollision ? DynamicPlayerCollision?.id : undefined} value={typeof DynamicPlayerCollision === "object" && "value" in DynamicPlayerCollision ? DynamicPlayerCollision?.value : DynamicPlayerCollision} /* default: false */  isRaw={typeof DynamicPlayerCollision === "object" && "isRaw" in DynamicPlayerCollision && DynamicPlayerCollision.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CollideWithOwnBody" id={typeof CollideWithOwnBody === "object" && "id" in CollideWithOwnBody ? CollideWithOwnBody?.id : undefined} value={typeof CollideWithOwnBody === "object" && "value" in CollideWithOwnBody ? CollideWithOwnBody?.value : CollideWithOwnBody} /* default: false */  isRaw={typeof CollideWithOwnBody === "object" && "isRaw" in CollideWithOwnBody && CollideWithOwnBody.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="HandCollisionVibration" id={typeof HandCollisionVibration === "object" && "id" in HandCollisionVibration ? HandCollisionVibration?.id : undefined} value={typeof HandCollisionVibration === "object" && "value" in HandCollisionVibration ? HandCollisionVibration?.value : HandCollisionVibration} /* default: None */  isRaw={typeof HandCollisionVibration === "object" && "isRaw" in HandCollisionVibration && HandCollisionVibration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CollideWithHead" id={typeof CollideWithHead === "object" && "id" in CollideWithHead ? CollideWithHead?.id : undefined} value={typeof CollideWithHead === "object" && "value" in CollideWithHead ? CollideWithHead?.value : CollideWithHead} /* default: false */  isRaw={typeof CollideWithHead === "object" && "isRaw" in CollideWithHead && CollideWithHead.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CollideWithBody" id={typeof CollideWithBody === "object" && "id" in CollideWithBody ? CollideWithBody?.id : undefined} value={typeof CollideWithBody === "object" && "value" in CollideWithBody ? CollideWithBody?.value : CollideWithBody} /* default: false */  isRaw={typeof CollideWithBody === "object" && "isRaw" in CollideWithBody && CollideWithBody.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CollideWithLeftHand" id={typeof CollideWithLeftHand === "object" && "id" in CollideWithLeftHand ? CollideWithLeftHand?.id : undefined} value={typeof CollideWithLeftHand === "object" && "value" in CollideWithLeftHand ? CollideWithLeftHand?.value : CollideWithLeftHand} /* default: false */  isRaw={typeof CollideWithLeftHand === "object" && "isRaw" in CollideWithLeftHand && CollideWithLeftHand.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CollideWithRightHand" id={typeof CollideWithRightHand === "object" && "id" in CollideWithRightHand ? CollideWithRightHand?.id : undefined} value={typeof CollideWithRightHand === "object" && "value" in CollideWithRightHand ? CollideWithRightHand?.value : CollideWithRightHand} /* default: false */  isRaw={typeof CollideWithRightHand === "object" && "isRaw" in CollideWithRightHand && CollideWithRightHand.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Gravity" id={typeof Gravity === "object" && "id" in Gravity ? Gravity?.id : undefined} value={typeof Gravity === "object" && "value" in Gravity ? Gravity?.value : Gravity} /* default: [0; 0; 0] */  isRaw={typeof Gravity === "object" && "isRaw" in Gravity && Gravity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="GravitySpace" id={typeof GravitySpace === "object" && "id" in GravitySpace ? GravitySpace?.id : undefined} value={typeof GravitySpace === "object" && "value" in GravitySpace ? GravitySpace?.value : GravitySpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof GravitySpace === "object" && "isRaw" in GravitySpace && GravitySpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseUserGravityDirection" id={typeof UseUserGravityDirection === "object" && "id" in UseUserGravityDirection ? UseUserGravityDirection?.id : undefined} value={typeof UseUserGravityDirection === "object" && "value" in UseUserGravityDirection ? UseUserGravityDirection?.value : UseUserGravityDirection} /* default: false */  isRaw={typeof UseUserGravityDirection === "object" && "isRaw" in UseUserGravityDirection && UseUserGravityDirection.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LocalForce" id={typeof LocalForce === "object" && "id" in LocalForce ? LocalForce?.id : undefined} value={typeof LocalForce === "object" && "value" in LocalForce ? LocalForce?.value : LocalForce} /* default: [0; 0; 0] */  isRaw={typeof LocalForce === "object" && "isRaw" in LocalForce && LocalForce.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GlobalStretch" id={typeof GlobalStretch === "object" && "id" in GlobalStretch ? GlobalStretch?.id : undefined} value={typeof GlobalStretch === "object" && "value" in GlobalStretch ? GlobalStretch?.value : GlobalStretch} /* default: 0 */  isRaw={typeof GlobalStretch === "object" && "isRaw" in GlobalStretch && GlobalStretch.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxStretchRatio" id={typeof MaxStretchRatio === "object" && "id" in MaxStretchRatio ? MaxStretchRatio?.id : undefined} value={typeof MaxStretchRatio === "object" && "value" in MaxStretchRatio ? MaxStretchRatio?.value : MaxStretchRatio} /* default: 0 */  isRaw={typeof MaxStretchRatio === "object" && "isRaw" in MaxStretchRatio && MaxStretchRatio.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="CurrentStretchRatio" id={typeof CurrentStretchRatio === "object" && "id" in CurrentStretchRatio ? CurrentStretchRatio?.id : undefined} value={typeof CurrentStretchRatio === "object" && "value" in CurrentStretchRatio ? CurrentStretchRatio?.value : CurrentStretchRatio} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof CurrentStretchRatio === "object" && "isRaw" in CurrentStretchRatio && CurrentStretchRatio.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StretchRestoreSpeed" id={typeof StretchRestoreSpeed === "object" && "id" in StretchRestoreSpeed ? StretchRestoreSpeed?.id : undefined} value={typeof StretchRestoreSpeed === "object" && "value" in StretchRestoreSpeed ? StretchRestoreSpeed?.value : StretchRestoreSpeed} /* default: 0 */  isRaw={typeof StretchRestoreSpeed === "object" && "isRaw" in StretchRestoreSpeed && StretchRestoreSpeed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseLocalUserSpace" id={typeof UseLocalUserSpace === "object" && "id" in UseLocalUserSpace ? UseLocalUserSpace?.id : undefined} value={typeof UseLocalUserSpace === "object" && "value" in UseLocalUserSpace ? UseLocalUserSpace?.value : UseLocalUserSpace} /* default: false */  isRaw={typeof UseLocalUserSpace === "object" && "isRaw" in UseLocalUserSpace && UseLocalUserSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="SimulationSpace" id={typeof SimulationSpace === "object" && "id" in SimulationSpace ? SimulationSpace?.id : undefined} value={typeof SimulationSpace === "object" && "value" in SimulationSpace ? SimulationSpace?.value : SimulationSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof SimulationSpace === "object" && "isRaw" in SimulationSpace && SimulationSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.IDynamicBoneCollider]`} name="StaticColliders" id={typeof StaticColliders === "object" && "id" in StaticColliders ? StaticColliders?.id : undefined} value={typeof StaticColliders === "object" && "value" in StaticColliders ? StaticColliders?.value : StaticColliders} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.IDynamicBoneCollider] */  isRaw={typeof StaticColliders === "object" && "isRaw" in StaticColliders && StaticColliders.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="VisualizeColliders-ID" id={typeof VisualizeColliders === "object" && "id" in VisualizeColliders ? VisualizeColliders?.id : undefined} value={typeof VisualizeColliders === "object" && "value" in VisualizeColliders ? VisualizeColliders?.value : VisualizeColliders} /* default: false */ readOnly isRaw={typeof VisualizeColliders === "object" && "isRaw" in VisualizeColliders && VisualizeColliders.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="VisualizeBones-ID" id={typeof VisualizeBones === "object" && "id" in VisualizeBones ? VisualizeBones?.id : undefined} value={typeof VisualizeBones === "object" && "value" in VisualizeBones ? VisualizeBones?.value : VisualizeBones} /* default: false */ readOnly isRaw={typeof VisualizeBones === "object" && "isRaw" in VisualizeBones && VisualizeBones.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsGrabbable" id={typeof IsGrabbable === "object" && "id" in IsGrabbable ? IsGrabbable?.id : undefined} value={typeof IsGrabbable === "object" && "value" in IsGrabbable ? IsGrabbable?.value : IsGrabbable} /* default: false */  isRaw={typeof IsGrabbable === "object" && "isRaw" in IsGrabbable && IsGrabbable.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ActiveUserRootOnly" id={typeof ActiveUserRootOnly === "object" && "id" in ActiveUserRootOnly ? ActiveUserRootOnly?.id : undefined} value={typeof ActiveUserRootOnly === "object" && "value" in ActiveUserRootOnly ? ActiveUserRootOnly?.value : ActiveUserRootOnly} /* default: false */  isRaw={typeof ActiveUserRootOnly === "object" && "isRaw" in ActiveUserRootOnly && ActiveUserRootOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowSteal" id={typeof AllowSteal === "object" && "id" in AllowSteal ? AllowSteal?.id : undefined} value={typeof AllowSteal === "object" && "value" in AllowSteal ? AllowSteal?.value : AllowSteal} /* default: false */  isRaw={typeof AllowSteal === "object" && "isRaw" in AllowSteal && AllowSteal.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="GrabPriority" id={typeof GrabPriority === "object" && "id" in GrabPriority ? GrabPriority?.id : undefined} value={typeof GrabPriority === "object" && "value" in GrabPriority ? GrabPriority?.value : GrabPriority} /* default: 0 */  isRaw={typeof GrabPriority === "object" && "isRaw" in GrabPriority && GrabPriority.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreGrabOnFirstBone" id={typeof IgnoreGrabOnFirstBone === "object" && "id" in IgnoreGrabOnFirstBone ? IgnoreGrabOnFirstBone?.id : undefined} value={typeof IgnoreGrabOnFirstBone === "object" && "value" in IgnoreGrabOnFirstBone ? IgnoreGrabOnFirstBone?.value : IgnoreGrabOnFirstBone} /* default: false */  isRaw={typeof IgnoreGrabOnFirstBone === "object" && "isRaw" in IgnoreGrabOnFirstBone && IgnoreGrabOnFirstBone.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GrabRadiusTolerance" id={typeof GrabRadiusTolerance === "object" && "id" in GrabRadiusTolerance ? GrabRadiusTolerance?.id : undefined} value={typeof GrabRadiusTolerance === "object" && "value" in GrabRadiusTolerance ? GrabRadiusTolerance?.value : GrabRadiusTolerance} /* default: 0 */  isRaw={typeof GrabRadiusTolerance === "object" && "isRaw" in GrabRadiusTolerance && GrabRadiusTolerance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="GrabReleaseDistance" id={typeof GrabReleaseDistance === "object" && "id" in GrabReleaseDistance ? GrabReleaseDistance?.id : undefined} value={typeof GrabReleaseDistance === "object" && "value" in GrabReleaseDistance ? GrabReleaseDistance?.value : GrabReleaseDistance} /* default: 0 */  isRaw={typeof GrabReleaseDistance === "object" && "isRaw" in GrabReleaseDistance && GrabReleaseDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="GrabSlipping" id={typeof GrabSlipping === "object" && "id" in GrabSlipping ? GrabSlipping?.id : undefined} value={typeof GrabSlipping === "object" && "value" in GrabSlipping ? GrabSlipping?.value : GrabSlipping} /* default: false */  isRaw={typeof GrabSlipping === "object" && "isRaw" in GrabSlipping && GrabSlipping.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="GrabTerminalBones" id={typeof GrabTerminalBones === "object" && "id" in GrabTerminalBones ? GrabTerminalBones?.id : undefined} value={typeof GrabTerminalBones === "object" && "value" in GrabTerminalBones ? GrabTerminalBones?.value : GrabTerminalBones} /* default: false */  isRaw={typeof GrabTerminalBones === "object" && "isRaw" in GrabTerminalBones && GrabTerminalBones.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.VibratePreset]`} name="GrabVibration" id={typeof GrabVibration === "object" && "id" in GrabVibration ? GrabVibration?.id : undefined} value={typeof GrabVibration === "object" && "value" in GrabVibration ? GrabVibration?.value : GrabVibration} /* default: None */  isRaw={typeof GrabVibration === "object" && "isRaw" in GrabVibration && GrabVibration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreOwnLeftHand" id={typeof IgnoreOwnLeftHand === "object" && "id" in IgnoreOwnLeftHand ? IgnoreOwnLeftHand?.id : undefined} value={typeof IgnoreOwnLeftHand === "object" && "value" in IgnoreOwnLeftHand ? IgnoreOwnLeftHand?.value : IgnoreOwnLeftHand} /* default: false */  isRaw={typeof IgnoreOwnLeftHand === "object" && "isRaw" in IgnoreOwnLeftHand && IgnoreOwnLeftHand.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreOwnRightHand" id={typeof IgnoreOwnRightHand === "object" && "id" in IgnoreOwnRightHand ? IgnoreOwnRightHand?.id : undefined} value={typeof IgnoreOwnRightHand === "object" && "value" in IgnoreOwnRightHand ? IgnoreOwnRightHand?.value : IgnoreOwnRightHand} /* default: false */  isRaw={typeof IgnoreOwnRightHand === "object" && "isRaw" in IgnoreOwnRightHand && IgnoreOwnRightHand.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="EffectorTarget" id={typeof EffectorTarget === "object" && "id" in EffectorTarget ? EffectorTarget?.id : undefined} value={typeof EffectorTarget === "object" && "value" in EffectorTarget ? EffectorTarget?.value : EffectorTarget} /* default: ID0 */  isRaw={typeof EffectorTarget === "object" && "isRaw" in EffectorTarget && EffectorTarget.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="EffectorBoneIndex" id={typeof EffectorBoneIndex === "object" && "id" in EffectorBoneIndex ? EffectorBoneIndex?.id : undefined} value={typeof EffectorBoneIndex === "object" && "value" in EffectorBoneIndex ? EffectorBoneIndex?.value : EffectorBoneIndex} /* default: 0 */  isRaw={typeof EffectorBoneIndex === "object" && "isRaw" in EffectorBoneIndex && EffectorBoneIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="EffectorBoneOffset" id={typeof EffectorBoneOffset === "object" && "id" in EffectorBoneOffset ? EffectorBoneOffset?.id : undefined} value={typeof EffectorBoneOffset === "object" && "value" in EffectorBoneOffset ? EffectorBoneOffset?.value : EffectorBoneOffset} /* default: [0; 0; 0] */  isRaw={typeof EffectorBoneOffset === "object" && "isRaw" in EffectorBoneOffset && EffectorBoneOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Grabber]`} name="_activeGrabber" id={typeof _activeGrabber === "object" && "id" in _activeGrabber ? _activeGrabber?.id : undefined} value={typeof _activeGrabber === "object" && "value" in _activeGrabber ? _activeGrabber?.value : _activeGrabber} /* default: ID0 */  isRaw={typeof _activeGrabber === "object" && "isRaw" in _activeGrabber && _activeGrabber.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.DynamicBoneChain+Bone]`} name="Bones" id={typeof Bones === "object" && "id" in Bones ? Bones?.id : undefined} value={typeof Bones === "object" && "value" in Bones ? Bones?.value : Bones} /* default: FrooxEngine.SyncList`1[FrooxEngine.DynamicBoneChain+Bone] */  isRaw={typeof Bones === "object" && "isRaw" in Bones && Bones.isRaw ? true : undefined} />
        </Component>
      );
    };
    