import { member, Member, Component } from "../../core";
    
    export interface ClassroomGrabbableInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Controller?: member<any>;
AlwaysLocal?: member<boolean>;
_data?: member<any>;
_position?: member<any>;
_rotation?: member<any>;
_scale?: member<any>;
_parent?: member<any>;
_originalPosition?: member<[number, number, number]>;
_originalRotation?: member<any>;
_originalScale?: member<[number, number, number]>;
_originalParent?: member<any>;
IsScalable?: member<boolean>;
    }
    
    export function ClassroomGrabbable(props: ClassroomGrabbableInput){
      const { id, persistentId, updateOrder, Enabled,
Controller,
AlwaysLocal,
_data,
_position,
_rotation,
_scale,
_parent,
_originalPosition,
_originalRotation,
_originalScale,
_originalParent,
IsScalable, } = props;
    
      return (
        <Component type="BusinessX.ClassroomGrabbable" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[BusinessX.ClassroomDatabaseController]`} name="Controller" id={typeof Controller === "object" && "id" in Controller ? Controller?.id : undefined} value={typeof Controller === "object" && "value" in Controller ? Controller?.value : Controller} /* default: ID0 */  isRaw={typeof Controller === "object" && "isRaw" in Controller && Controller.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AlwaysLocal" id={typeof AlwaysLocal === "object" && "id" in AlwaysLocal ? AlwaysLocal?.id : undefined} value={typeof AlwaysLocal === "object" && "value" in AlwaysLocal ? AlwaysLocal?.value : AlwaysLocal} /* default: false */  isRaw={typeof AlwaysLocal === "object" && "isRaw" in AlwaysLocal && AlwaysLocal.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[BusinessX.ClassroomGrabbable+UserData]`} name="_data" id={typeof _data === "object" && "id" in _data ? _data?.id : undefined} value={typeof _data === "object" && "value" in _data ? _data?.value : _data} /* default: FrooxEngine.SyncList`1[BusinessX.ClassroomGrabbable+UserData] */  isRaw={typeof _data === "object" && "isRaw" in _data && _data.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_position" id={typeof _position === "object" && "id" in _position ? _position?.id : undefined} value={typeof _position === "object" && "value" in _position ? _position?.value : _position} /* default: ID0 */  isRaw={typeof _position === "object" && "isRaw" in _position && _position.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rotation" id={typeof _rotation === "object" && "id" in _rotation ? _rotation?.id : undefined} value={typeof _rotation === "object" && "value" in _rotation ? _rotation?.value : _rotation} /* default: ID0 */  isRaw={typeof _rotation === "object" && "isRaw" in _rotation && _rotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_scale" id={typeof _scale === "object" && "id" in _scale ? _scale?.id : undefined} value={typeof _scale === "object" && "value" in _scale ? _scale?.value : _scale} /* default: ID0 */  isRaw={typeof _scale === "object" && "isRaw" in _scale && _scale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RefDrive\`1[FrooxEngine.Slot]`} name="_parent" id={typeof _parent === "object" && "id" in _parent ? _parent?.id : undefined} value={typeof _parent === "object" && "value" in _parent ? _parent?.value : _parent} /* default: ID0 */  isRaw={typeof _parent === "object" && "isRaw" in _parent && _parent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_originalPosition" id={typeof _originalPosition === "object" && "id" in _originalPosition ? _originalPosition?.id : undefined} value={typeof _originalPosition === "object" && "value" in _originalPosition ? _originalPosition?.value : _originalPosition} /* default: [0; 0; 0] */  isRaw={typeof _originalPosition === "object" && "isRaw" in _originalPosition && _originalPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="_originalRotation" id={typeof _originalRotation === "object" && "id" in _originalRotation ? _originalRotation?.id : undefined} value={typeof _originalRotation === "object" && "value" in _originalRotation ? _originalRotation?.value : _originalRotation} /* default: [0; 0; 0; 1] */  isRaw={typeof _originalRotation === "object" && "isRaw" in _originalRotation && _originalRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_originalScale" id={typeof _originalScale === "object" && "id" in _originalScale ? _originalScale?.id : undefined} value={typeof _originalScale === "object" && "value" in _originalScale ? _originalScale?.value : _originalScale} /* default: [0; 0; 0] */  isRaw={typeof _originalScale === "object" && "isRaw" in _originalScale && _originalScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_originalParent" id={typeof _originalParent === "object" && "id" in _originalParent ? _originalParent?.id : undefined} value={typeof _originalParent === "object" && "value" in _originalParent ? _originalParent?.value : _originalParent} /* default: ID0 */  isRaw={typeof _originalParent === "object" && "isRaw" in _originalParent && _originalParent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsScalable" id={typeof IsScalable === "object" && "id" in IsScalable ? IsScalable?.id : undefined} value={typeof IsScalable === "object" && "value" in IsScalable ? IsScalable?.value : IsScalable} /* default: false */  isRaw={typeof IsScalable === "object" && "isRaw" in IsScalable && IsScalable.isRaw ? true : undefined} />
        </Component>
      );
    };
    