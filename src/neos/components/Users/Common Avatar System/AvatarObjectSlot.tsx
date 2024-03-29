import { member, Member, Component } from "../../../core";
    
    export interface AvatarObjectSlotInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Equipped?: member<any>;
Node?: member<any>;
IsTracking?: member<boolean>;
IsActive?: member<boolean>;
DriveActive?: member<boolean>;
DriveScale?: member<boolean>;
Filters?: member<any>;
_autoSmoothing?: member<any>;
    }
    
    export function AvatarObjectSlot(props: AvatarObjectSlotInput){
      const { id, persistentId, updateOrder, Enabled,
Equipped,
Node,
IsTracking,
IsActive,
DriveActive,
DriveScale,
Filters,
_autoSmoothing, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarObjectSlot" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LinkRef\`1[FrooxEngine.CommonAvatar.IAvatarObject]`} name="Equipped" id={typeof Equipped === "object" && "id" in Equipped ? Equipped?.id : undefined} value={typeof Equipped === "object" && "value" in Equipped ? Equipped?.value : Equipped} /* default: ID0 */  isRaw={typeof Equipped === "object" && "isRaw" in Equipped && Equipped.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.BodyNode]`} name="Node" id={typeof Node === "object" && "id" in Node ? Node?.id : undefined} value={typeof Node === "object" && "value" in Node ? Node?.value : Node} /* default: NONE */  isRaw={typeof Node === "object" && "isRaw" in Node && Node.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsTracking" id={typeof IsTracking === "object" && "id" in IsTracking ? IsTracking?.id : undefined} value={typeof IsTracking === "object" && "value" in IsTracking ? IsTracking?.value : IsTracking} /* default: false */  isRaw={typeof IsTracking === "object" && "isRaw" in IsTracking && IsTracking.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsActive" id={typeof IsActive === "object" && "id" in IsActive ? IsActive?.id : undefined} value={typeof IsActive === "object" && "value" in IsActive ? IsActive?.value : IsActive} /* default: false */  isRaw={typeof IsActive === "object" && "isRaw" in IsActive && IsActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DriveActive" id={typeof DriveActive === "object" && "id" in DriveActive ? DriveActive?.id : undefined} value={typeof DriveActive === "object" && "value" in DriveActive ? DriveActive?.value : DriveActive} /* default: false */  isRaw={typeof DriveActive === "object" && "isRaw" in DriveActive && DriveActive.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="DriveScale" id={typeof DriveScale === "object" && "id" in DriveScale ? DriveScale?.id : undefined} value={typeof DriveScale === "object" && "value" in DriveScale ? DriveScale?.value : DriveScale} /* default: false */  isRaw={typeof DriveScale === "object" && "isRaw" in DriveScale && DriveScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.PrioritySyncRefList\`1[FrooxEngine.CommonAvatar.IAvatarPoseFilter]`} name="Filters" id={typeof Filters === "object" && "id" in Filters ? Filters?.id : undefined} value={typeof Filters === "object" && "value" in Filters ? Filters?.value : Filters} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.PrioritySyncRefList`1\[FrooxEngine\.CommonAvatar\.IAvatarPoseFilter],\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof Filters === "object" && "isRaw" in Filters && Filters.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.CommonAvatar.AvatarPoseSmoothLerp]`} name="_autoSmoothing" id={typeof _autoSmoothing === "object" && "id" in _autoSmoothing ? _autoSmoothing?.id : undefined} value={typeof _autoSmoothing === "object" && "value" in _autoSmoothing ? _autoSmoothing?.value : _autoSmoothing} /* default: ID0 */  isRaw={typeof _autoSmoothing === "object" && "isRaw" in _autoSmoothing && _autoSmoothing.isRaw ? true : undefined} />
        </Component>
      );
    };
    