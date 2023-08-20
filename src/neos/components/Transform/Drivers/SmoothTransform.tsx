import { member, Member, Component } from "../../../core";
    
    export interface SmoothTransformInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
InterpolationSpace?: member<any>;
TargetPosition?: member<[number, number, number]>;
TargetRotation?: member<any>;
TargetScale?: member<[number, number, number]>;
Position?: member<any>;
Rotation?: member<any>;
Scale?: member<any>;
SmoothSpeed?: member<number>;
_updateIndex?: member<number>;
    }
    
    export function SmoothTransform(props: SmoothTransformInput){
      const { id, persistentId, updateOrder, Enabled,
InterpolationSpace,
TargetPosition,
TargetRotation,
TargetScale,
Position,
Rotation,
Scale,
SmoothSpeed,
_updateIndex, } = props;
    
      return (
        <Component type="FrooxEngine.SmoothTransform" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="InterpolationSpace" id={typeof InterpolationSpace === "object" && "id" in InterpolationSpace ? InterpolationSpace?.id : undefined} value={typeof InterpolationSpace === "object" && "value" in InterpolationSpace ? InterpolationSpace?.value : InterpolationSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof InterpolationSpace === "object" && "isRaw" in InterpolationSpace && InterpolationSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="TargetPosition" id={typeof TargetPosition === "object" && "id" in TargetPosition ? TargetPosition?.id : undefined} value={typeof TargetPosition === "object" && "value" in TargetPosition ? TargetPosition?.value : TargetPosition} /* default: [0; 0; 0] */  isRaw={typeof TargetPosition === "object" && "isRaw" in TargetPosition && TargetPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="TargetRotation" id={typeof TargetRotation === "object" && "id" in TargetRotation ? TargetRotation?.id : undefined} value={typeof TargetRotation === "object" && "value" in TargetRotation ? TargetRotation?.value : TargetRotation} /* default: [0; 0; 0; 1] */  isRaw={typeof TargetRotation === "object" && "isRaw" in TargetRotation && TargetRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="TargetScale" id={typeof TargetScale === "object" && "id" in TargetScale ? TargetScale?.id : undefined} value={typeof TargetScale === "object" && "value" in TargetScale ? TargetScale?.value : TargetScale} /* default: [0; 0; 0] */  isRaw={typeof TargetScale === "object" && "isRaw" in TargetScale && TargetScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="Position" id={typeof Position === "object" && "id" in Position ? Position?.id : undefined} value={typeof Position === "object" && "value" in Position ? Position?.value : Position} /* default: ID0 */  isRaw={typeof Position === "object" && "isRaw" in Position && Position.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="Rotation" id={typeof Rotation === "object" && "id" in Rotation ? Rotation?.id : undefined} value={typeof Rotation === "object" && "value" in Rotation ? Rotation?.value : Rotation} /* default: ID0 */  isRaw={typeof Rotation === "object" && "isRaw" in Rotation && Rotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="Scale" id={typeof Scale === "object" && "id" in Scale ? Scale?.id : undefined} value={typeof Scale === "object" && "value" in Scale ? Scale?.value : Scale} /* default: ID0 */  isRaw={typeof Scale === "object" && "isRaw" in Scale && Scale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SmoothSpeed" id={typeof SmoothSpeed === "object" && "id" in SmoothSpeed ? SmoothSpeed?.id : undefined} value={typeof SmoothSpeed === "object" && "value" in SmoothSpeed ? SmoothSpeed?.value : SmoothSpeed} /* default: 0 */  isRaw={typeof SmoothSpeed === "object" && "isRaw" in SmoothSpeed && SmoothSpeed.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="_updateIndex" id={typeof _updateIndex === "object" && "id" in _updateIndex ? _updateIndex?.id : undefined} value={typeof _updateIndex === "object" && "value" in _updateIndex ? _updateIndex?.value : _updateIndex} /* default: 0 */  isRaw={typeof _updateIndex === "object" && "isRaw" in _updateIndex && _updateIndex.isRaw ? true : undefined} />
        </Component>
      );
    };
    