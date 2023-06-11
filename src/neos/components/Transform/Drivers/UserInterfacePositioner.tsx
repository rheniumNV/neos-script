import { member, Member, Component } from "../../../core";
    
    export interface UserInterfacePositionerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetUser?: member<any>;
UseHead?: member<boolean>;
RotateVerticalOnly?: member<boolean>;
PositionSpeed?: member<number>;
RotationSpeed?: member<number>;
ActivationDistance?: member<number>;
ActivationAngle?: member<number>;
DeactivationDistance?: member<number>;
DeactivationAngle?: member<number>;
TargetPosition?: member<[number, number, number]>;
TargetRotation?: member<any>;
_position?: member<any>;
_rotation?: member<any>;
    }
    
    export function UserInterfacePositioner(props: UserInterfacePositionerInput){
      const { id, persistentId, updateOrder, Enabled,
TargetUser,
UseHead,
RotateVerticalOnly,
PositionSpeed,
RotationSpeed,
ActivationDistance,
ActivationAngle,
DeactivationDistance,
DeactivationAngle,
TargetPosition,
TargetRotation,
_position,
_rotation, } = props;
    
      return (
        <Component type="FrooxEngine.UserInterfacePositioner" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.UserRef`} name="TargetUser" id={typeof TargetUser === "object" && "id" in TargetUser ? TargetUser?.id : undefined} value={typeof TargetUser === "object" && "value" in TargetUser ? TargetUser?.value : TargetUser} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.UserRef,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof TargetUser === "object" && "isRaw" in TargetUser && TargetUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseHead" id={typeof UseHead === "object" && "id" in UseHead ? UseHead?.id : undefined} value={typeof UseHead === "object" && "value" in UseHead ? UseHead?.value : UseHead} /* default: false */  isRaw={typeof UseHead === "object" && "isRaw" in UseHead && UseHead.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RotateVerticalOnly" id={typeof RotateVerticalOnly === "object" && "id" in RotateVerticalOnly ? RotateVerticalOnly?.id : undefined} value={typeof RotateVerticalOnly === "object" && "value" in RotateVerticalOnly ? RotateVerticalOnly?.value : RotateVerticalOnly} /* default: false */  isRaw={typeof RotateVerticalOnly === "object" && "isRaw" in RotateVerticalOnly && RotateVerticalOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PositionSpeed" id={typeof PositionSpeed === "object" && "id" in PositionSpeed ? PositionSpeed?.id : undefined} value={typeof PositionSpeed === "object" && "value" in PositionSpeed ? PositionSpeed?.value : PositionSpeed} /* default: 0 */  isRaw={typeof PositionSpeed === "object" && "isRaw" in PositionSpeed && PositionSpeed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RotationSpeed" id={typeof RotationSpeed === "object" && "id" in RotationSpeed ? RotationSpeed?.id : undefined} value={typeof RotationSpeed === "object" && "value" in RotationSpeed ? RotationSpeed?.value : RotationSpeed} /* default: 0 */  isRaw={typeof RotationSpeed === "object" && "isRaw" in RotationSpeed && RotationSpeed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ActivationDistance" id={typeof ActivationDistance === "object" && "id" in ActivationDistance ? ActivationDistance?.id : undefined} value={typeof ActivationDistance === "object" && "value" in ActivationDistance ? ActivationDistance?.value : ActivationDistance} /* default: 0 */  isRaw={typeof ActivationDistance === "object" && "isRaw" in ActivationDistance && ActivationDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ActivationAngle" id={typeof ActivationAngle === "object" && "id" in ActivationAngle ? ActivationAngle?.id : undefined} value={typeof ActivationAngle === "object" && "value" in ActivationAngle ? ActivationAngle?.value : ActivationAngle} /* default: 0 */  isRaw={typeof ActivationAngle === "object" && "isRaw" in ActivationAngle && ActivationAngle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DeactivationDistance" id={typeof DeactivationDistance === "object" && "id" in DeactivationDistance ? DeactivationDistance?.id : undefined} value={typeof DeactivationDistance === "object" && "value" in DeactivationDistance ? DeactivationDistance?.value : DeactivationDistance} /* default: 0 */  isRaw={typeof DeactivationDistance === "object" && "isRaw" in DeactivationDistance && DeactivationDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DeactivationAngle" id={typeof DeactivationAngle === "object" && "id" in DeactivationAngle ? DeactivationAngle?.id : undefined} value={typeof DeactivationAngle === "object" && "value" in DeactivationAngle ? DeactivationAngle?.value : DeactivationAngle} /* default: 0 */  isRaw={typeof DeactivationAngle === "object" && "isRaw" in DeactivationAngle && DeactivationAngle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="TargetPosition" id={typeof TargetPosition === "object" && "id" in TargetPosition ? TargetPosition?.id : undefined} value={typeof TargetPosition === "object" && "value" in TargetPosition ? TargetPosition?.value : TargetPosition} /* default: [0; 0; 0] */  isRaw={typeof TargetPosition === "object" && "isRaw" in TargetPosition && TargetPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="TargetRotation" id={typeof TargetRotation === "object" && "id" in TargetRotation ? TargetRotation?.id : undefined} value={typeof TargetRotation === "object" && "value" in TargetRotation ? TargetRotation?.value : TargetRotation} /* default: [0; 0; 0; 1] */  isRaw={typeof TargetRotation === "object" && "isRaw" in TargetRotation && TargetRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_position" id={typeof _position === "object" && "id" in _position ? _position?.id : undefined} value={typeof _position === "object" && "value" in _position ? _position?.value : _position} /* default: ID0 */  isRaw={typeof _position === "object" && "isRaw" in _position && _position.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rotation" id={typeof _rotation === "object" && "id" in _rotation ? _rotation?.id : undefined} value={typeof _rotation === "object" && "value" in _rotation ? _rotation?.value : _rotation} /* default: ID0 */  isRaw={typeof _rotation === "object" && "isRaw" in _rotation && _rotation.isRaw ? true : undefined} />
        </Component>
      );
    };
    