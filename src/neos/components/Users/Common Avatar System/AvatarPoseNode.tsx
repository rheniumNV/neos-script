import { member, Member, Component } from "../../../core";
    
    export interface AvatarPoseNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Node?: member<any>;
EquipOrderPriority?: member<number>;
RunAfterInputUpdate?: member<boolean>;
MutuallyExclusiveNodes?: member<any>;
IsTracking?: member<any>;
SourceIsTracking?: member<any>;
SourceIsActive?: member<any>;
_objectSlot?: member<any>;
_source?: member<any>;
_position?: member<any>;
_rotation?: member<any>;
_scale?: member<any>;
_active?: member<any>;
    }
    
    export function AvatarPoseNode(props: AvatarPoseNodeInput){
      const { id, persistentId, updateOrder, Enabled,
Node,
EquipOrderPriority,
RunAfterInputUpdate,
MutuallyExclusiveNodes,
IsTracking,
SourceIsTracking,
SourceIsActive,
_objectSlot,
_source,
_position,
_rotation,
_scale,
_active, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarPoseNode" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BodyNode]`} name="Node" id={typeof Node === "object" && "id" in Node ? Node?.id : undefined} value={typeof Node === "object" && "value" in Node ? Node?.value : Node} /* default: NONE */  isRaw={typeof Node === "object" && "isRaw" in Node && Node.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="EquipOrderPriority" id={typeof EquipOrderPriority === "object" && "id" in EquipOrderPriority ? EquipOrderPriority?.id : undefined} value={typeof EquipOrderPriority === "object" && "value" in EquipOrderPriority ? EquipOrderPriority?.value : EquipOrderPriority} /* default: 0 */  isRaw={typeof EquipOrderPriority === "object" && "isRaw" in EquipOrderPriority && EquipOrderPriority.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RunAfterInputUpdate" id={typeof RunAfterInputUpdate === "object" && "id" in RunAfterInputUpdate ? RunAfterInputUpdate?.id : undefined} value={typeof RunAfterInputUpdate === "object" && "value" in RunAfterInputUpdate ? RunAfterInputUpdate?.value : RunAfterInputUpdate} /* default: false */  isRaw={typeof RunAfterInputUpdate === "object" && "isRaw" in RunAfterInputUpdate && RunAfterInputUpdate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncFieldList\`1[FrooxEngine.BodyNode]`} name="MutuallyExclusiveNodes" id={typeof MutuallyExclusiveNodes === "object" && "id" in MutuallyExclusiveNodes ? MutuallyExclusiveNodes?.id : undefined} value={typeof MutuallyExclusiveNodes === "object" && "value" in MutuallyExclusiveNodes ? MutuallyExclusiveNodes?.value : MutuallyExclusiveNodes} /* default: FrooxEngine.SyncFieldList`1[FrooxEngine.BodyNode] */  isRaw={typeof MutuallyExclusiveNodes === "object" && "isRaw" in MutuallyExclusiveNodes && MutuallyExclusiveNodes.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="IsTracking" id={typeof IsTracking === "object" && "id" in IsTracking ? IsTracking?.id : undefined} value={typeof IsTracking === "object" && "value" in IsTracking ? IsTracking?.value : IsTracking} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof IsTracking === "object" && "isRaw" in IsTracking && IsTracking.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="SourceIsTracking" id={typeof SourceIsTracking === "object" && "id" in SourceIsTracking ? SourceIsTracking?.id : undefined} value={typeof SourceIsTracking === "object" && "value" in SourceIsTracking ? SourceIsTracking?.value : SourceIsTracking} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof SourceIsTracking === "object" && "isRaw" in SourceIsTracking && SourceIsTracking.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="SourceIsActive" id={typeof SourceIsActive === "object" && "id" in SourceIsActive ? SourceIsActive?.id : undefined} value={typeof SourceIsActive === "object" && "value" in SourceIsActive ? SourceIsActive?.value : SourceIsActive} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof SourceIsActive === "object" && "isRaw" in SourceIsActive && SourceIsActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarObjectSlot]`} name="_objectSlot" id={typeof _objectSlot === "object" && "id" in _objectSlot ? _objectSlot?.id : undefined} value={typeof _objectSlot === "object" && "value" in _objectSlot ? _objectSlot?.value : _objectSlot} /* default: ID0 */  isRaw={typeof _objectSlot === "object" && "isRaw" in _objectSlot && _objectSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_source" id={typeof _source === "object" && "id" in _source ? _source?.id : undefined} value={typeof _source === "object" && "value" in _source ? _source?.value : _source} /* default: ID0 */  isRaw={typeof _source === "object" && "isRaw" in _source && _source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_position" id={typeof _position === "object" && "id" in _position ? _position?.id : undefined} value={typeof _position === "object" && "value" in _position ? _position?.value : _position} /* default: ID0 */  isRaw={typeof _position === "object" && "isRaw" in _position && _position.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rotation" id={typeof _rotation === "object" && "id" in _rotation ? _rotation?.id : undefined} value={typeof _rotation === "object" && "value" in _rotation ? _rotation?.value : _rotation} /* default: ID0 */  isRaw={typeof _rotation === "object" && "isRaw" in _rotation && _rotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_scale" id={typeof _scale === "object" && "id" in _scale ? _scale?.id : undefined} value={typeof _scale === "object" && "value" in _scale ? _scale?.value : _scale} /* default: ID0 */  isRaw={typeof _scale === "object" && "isRaw" in _scale && _scale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_active" id={typeof _active === "object" && "id" in _active ? _active?.id : undefined} value={typeof _active === "object" && "value" in _active ? _active?.value : _active} /* default: ID0 */  isRaw={typeof _active === "object" && "isRaw" in _active && _active.isRaw ? true : undefined} />
        </Component>
      );
    };
    