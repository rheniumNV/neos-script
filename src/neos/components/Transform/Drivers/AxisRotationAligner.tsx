import { member, Member, Component } from "../../../core";
    
    export interface AxisRotationAlignerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
LocalDirection?: member<[number, number, number]>;
TargetDirection?: member<[number, number, number]>;
DirectionSpace?: member<any>;
LocalRotation?: member<any>;
_rotation?: member<any>;
    }
    
    export function AxisRotationAligner(props: AxisRotationAlignerInput){
      const { id, persistentId, updateOrder, Enabled,
LocalDirection,
TargetDirection,
DirectionSpace,
LocalRotation,
_rotation, } = props;
    
      return (
        <Component type="FrooxEngine.AxisRotationAligner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="LocalDirection" id={typeof LocalDirection === "object" && "id" in LocalDirection ? LocalDirection?.id : undefined} value={typeof LocalDirection === "object" && "value" in LocalDirection ? LocalDirection?.value : LocalDirection} /* default: [0; 0; 0] */  isRaw={typeof LocalDirection === "object" && "isRaw" in LocalDirection && LocalDirection.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="TargetDirection" id={typeof TargetDirection === "object" && "id" in TargetDirection ? TargetDirection?.id : undefined} value={typeof TargetDirection === "object" && "value" in TargetDirection ? TargetDirection?.value : TargetDirection} /* default: [0; 0; 0] */  isRaw={typeof TargetDirection === "object" && "isRaw" in TargetDirection && TargetDirection.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="DirectionSpace" id={typeof DirectionSpace === "object" && "id" in DirectionSpace ? DirectionSpace?.id : undefined} value={typeof DirectionSpace === "object" && "value" in DirectionSpace ? DirectionSpace?.value : DirectionSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof DirectionSpace === "object" && "isRaw" in DirectionSpace && DirectionSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="LocalRotation" id={typeof LocalRotation === "object" && "id" in LocalRotation ? LocalRotation?.id : undefined} value={typeof LocalRotation === "object" && "value" in LocalRotation ? LocalRotation?.value : LocalRotation} /* default: [0; 0; 0; 1] */  isRaw={typeof LocalRotation === "object" && "isRaw" in LocalRotation && LocalRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rotation" id={typeof _rotation === "object" && "id" in _rotation ? _rotation?.id : undefined} value={typeof _rotation === "object" && "value" in _rotation ? _rotation?.value : _rotation} /* default: ID0 */  isRaw={typeof _rotation === "object" && "isRaw" in _rotation && _rotation.isRaw ? true : undefined} />
        </Component>
      );
    };
    