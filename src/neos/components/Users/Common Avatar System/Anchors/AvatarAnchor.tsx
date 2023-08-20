import { member, Member, Component } from "../../../../core";
    
    export interface AvatarAnchorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Highlight?: member<boolean>;
ParentSpace?: member<any>;
MinScale?: member<number>;
MaxScale?: member<number>;
PositionNode?: member<any>;
PositionReference?: member<any>;
RotationNode?: member<any>;
RotationReference?: member<any>;
PreserveUpOnEnter?: member<boolean>;
PreserveUpOnExit?: member<boolean>;
UnparentEverythingOnDestroy?: member<boolean>;
TransformRestoreMode?: member<any>;
RestoreNode?: member<any>;
RestoreReference?: member<any>;
Filters?: member<any>;
UserFilters?: member<any>;
UserAnchored?: member<any>;
UserStay?: member<any>;
UserReleased?: member<any>;
_originalSpace?: member<any>;
_originalPosition?: member<[number, number, number]>;
_originalRotation?: member<any>;
_originalScale?: member<number>;
_dummyObjectSlots?: member<any>;
    }
    
    export function AvatarAnchor(props: AvatarAnchorInput){
      const { id, persistentId, updateOrder, Enabled,
Highlight,
ParentSpace,
MinScale,
MaxScale,
PositionNode,
PositionReference,
RotationNode,
RotationReference,
PreserveUpOnEnter,
PreserveUpOnExit,
UnparentEverythingOnDestroy,
TransformRestoreMode,
RestoreNode,
RestoreReference,
Filters,
UserFilters,
UserAnchored,
UserStay,
UserReleased,
_originalSpace,
_originalPosition,
_originalRotation,
_originalScale,
_dummyObjectSlots, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarAnchor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Highlight" id={typeof Highlight === "object" && "id" in Highlight ? Highlight?.id : undefined} value={typeof Highlight === "object" && "value" in Highlight ? Highlight?.value : Highlight} /* default: false */  isRaw={typeof Highlight === "object" && "isRaw" in Highlight && Highlight.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="ParentSpace" id={typeof ParentSpace === "object" && "id" in ParentSpace ? ParentSpace?.id : undefined} value={typeof ParentSpace === "object" && "value" in ParentSpace ? ParentSpace?.value : ParentSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof ParentSpace === "object" && "isRaw" in ParentSpace && ParentSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinScale" id={typeof MinScale === "object" && "id" in MinScale ? MinScale?.id : undefined} value={typeof MinScale === "object" && "value" in MinScale ? MinScale?.value : MinScale} /* default: 0 */  isRaw={typeof MinScale === "object" && "isRaw" in MinScale && MinScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxScale" id={typeof MaxScale === "object" && "id" in MaxScale ? MaxScale?.id : undefined} value={typeof MaxScale === "object" && "value" in MaxScale ? MaxScale?.value : MaxScale} /* default: 0 */  isRaw={typeof MaxScale === "object" && "isRaw" in MaxScale && MaxScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`} name="PositionNode" id={typeof PositionNode === "object" && "id" in PositionNode ? PositionNode?.id : undefined} value={typeof PositionNode === "object" && "value" in PositionNode ? PositionNode?.value : PositionNode} /* default: None */  isRaw={typeof PositionNode === "object" && "isRaw" in PositionNode && PositionNode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="PositionReference" id={typeof PositionReference === "object" && "id" in PositionReference ? PositionReference?.id : undefined} value={typeof PositionReference === "object" && "value" in PositionReference ? PositionReference?.value : PositionReference} /* default: ID0 */  isRaw={typeof PositionReference === "object" && "isRaw" in PositionReference && PositionReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`} name="RotationNode" id={typeof RotationNode === "object" && "id" in RotationNode ? RotationNode?.id : undefined} value={typeof RotationNode === "object" && "value" in RotationNode ? RotationNode?.value : RotationNode} /* default: None */  isRaw={typeof RotationNode === "object" && "isRaw" in RotationNode && RotationNode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="RotationReference" id={typeof RotationReference === "object" && "id" in RotationReference ? RotationReference?.id : undefined} value={typeof RotationReference === "object" && "value" in RotationReference ? RotationReference?.value : RotationReference} /* default: ID0 */  isRaw={typeof RotationReference === "object" && "isRaw" in RotationReference && RotationReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PreserveUpOnEnter" id={typeof PreserveUpOnEnter === "object" && "id" in PreserveUpOnEnter ? PreserveUpOnEnter?.id : undefined} value={typeof PreserveUpOnEnter === "object" && "value" in PreserveUpOnEnter ? PreserveUpOnEnter?.value : PreserveUpOnEnter} /* default: false */  isRaw={typeof PreserveUpOnEnter === "object" && "isRaw" in PreserveUpOnEnter && PreserveUpOnEnter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PreserveUpOnExit" id={typeof PreserveUpOnExit === "object" && "id" in PreserveUpOnExit ? PreserveUpOnExit?.id : undefined} value={typeof PreserveUpOnExit === "object" && "value" in PreserveUpOnExit ? PreserveUpOnExit?.value : PreserveUpOnExit} /* default: false */  isRaw={typeof PreserveUpOnExit === "object" && "isRaw" in PreserveUpOnExit && PreserveUpOnExit.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UnparentEverythingOnDestroy" id={typeof UnparentEverythingOnDestroy === "object" && "id" in UnparentEverythingOnDestroy ? UnparentEverythingOnDestroy?.id : undefined} value={typeof UnparentEverythingOnDestroy === "object" && "value" in UnparentEverythingOnDestroy ? UnparentEverythingOnDestroy?.value : UnparentEverythingOnDestroy} /* default: false */  isRaw={typeof UnparentEverythingOnDestroy === "object" && "isRaw" in UnparentEverythingOnDestroy && UnparentEverythingOnDestroy.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CommonAvatar.AvatarAnchor+RestoreMode]`} name="TransformRestoreMode" id={typeof TransformRestoreMode === "object" && "id" in TransformRestoreMode ? TransformRestoreMode?.id : undefined} value={typeof TransformRestoreMode === "object" && "value" in TransformRestoreMode ? TransformRestoreMode?.value : TransformRestoreMode} /* default: None */  isRaw={typeof TransformRestoreMode === "object" && "isRaw" in TransformRestoreMode && TransformRestoreMode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`} name="RestoreNode" id={typeof RestoreNode === "object" && "id" in RestoreNode ? RestoreNode?.id : undefined} value={typeof RestoreNode === "object" && "value" in RestoreNode ? RestoreNode?.value : RestoreNode} /* default: None */  isRaw={typeof RestoreNode === "object" && "isRaw" in RestoreNode && RestoreNode.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="RestoreReference" id={typeof RestoreReference === "object" && "id" in RestoreReference ? RestoreReference?.id : undefined} value={typeof RestoreReference === "object" && "value" in RestoreReference ? RestoreReference?.value : RestoreReference} /* default: ID0 */  isRaw={typeof RestoreReference === "object" && "isRaw" in RestoreReference && RestoreReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.CommonAvatar.AvatarAnchor+BodyNodeFilters]`} name="Filters" id={typeof Filters === "object" && "id" in Filters ? Filters?.id : undefined} value={typeof Filters === "object" && "value" in Filters ? Filters?.value : Filters} /* default: FrooxEngine.SyncList`1[FrooxEngine.CommonAvatar.AvatarAnchor+BodyNodeFilters] */  isRaw={typeof Filters === "object" && "isRaw" in Filters && Filters.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.IAvatarAnchorUserFilter]`} name="UserFilters" id={typeof UserFilters === "object" && "id" in UserFilters ? UserFilters?.id : undefined} value={typeof UserFilters === "object" && "value" in UserFilters ? UserFilters?.value : UserFilters} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.IAvatarAnchorUserFilter] */  isRaw={typeof UserFilters === "object" && "isRaw" in UserFilters && UserFilters.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.CommonAvatar.AvatarAnchorUserEvent]`} name="UserAnchored" id={typeof UserAnchored === "object" && "id" in UserAnchored ? UserAnchored?.id : undefined} value={typeof UserAnchored === "object" && "value" in UserAnchored ? UserAnchored?.value : UserAnchored} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof UserAnchored === "object" && "isRaw" in UserAnchored && UserAnchored.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.CommonAvatar.AvatarAnchorUserEvent]`} name="UserStay" id={typeof UserStay === "object" && "id" in UserStay ? UserStay?.id : undefined} value={typeof UserStay === "object" && "value" in UserStay ? UserStay?.value : UserStay} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof UserStay === "object" && "isRaw" in UserStay && UserStay.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.CommonAvatar.AvatarAnchorUserEvent]`} name="UserReleased" id={typeof UserReleased === "object" && "id" in UserReleased ? UserReleased?.id : undefined} value={typeof UserReleased === "object" && "value" in UserReleased ? UserReleased?.value : UserReleased} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof UserReleased === "object" && "isRaw" in UserReleased && UserReleased.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_originalSpace" id={typeof _originalSpace === "object" && "id" in _originalSpace ? _originalSpace?.id : undefined} value={typeof _originalSpace === "object" && "value" in _originalSpace ? _originalSpace?.value : _originalSpace} /* default: ID0 */  isRaw={typeof _originalSpace === "object" && "isRaw" in _originalSpace && _originalSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_originalPosition" id={typeof _originalPosition === "object" && "id" in _originalPosition ? _originalPosition?.id : undefined} value={typeof _originalPosition === "object" && "value" in _originalPosition ? _originalPosition?.value : _originalPosition} /* default: [0; 0; 0] */  isRaw={typeof _originalPosition === "object" && "isRaw" in _originalPosition && _originalPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="_originalRotation" id={typeof _originalRotation === "object" && "id" in _originalRotation ? _originalRotation?.id : undefined} value={typeof _originalRotation === "object" && "value" in _originalRotation ? _originalRotation?.value : _originalRotation} /* default: [0; 0; 0; 1] */  isRaw={typeof _originalRotation === "object" && "isRaw" in _originalRotation && _originalRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_originalScale" id={typeof _originalScale === "object" && "id" in _originalScale ? _originalScale?.id : undefined} value={typeof _originalScale === "object" && "value" in _originalScale ? _originalScale?.value : _originalScale} /* default: 0 */  isRaw={typeof _originalScale === "object" && "isRaw" in _originalScale && _originalScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.CommonAvatar.AvatarObjectSlot]`} name="_dummyObjectSlots" id={typeof _dummyObjectSlots === "object" && "id" in _dummyObjectSlots ? _dummyObjectSlots?.id : undefined} value={typeof _dummyObjectSlots === "object" && "value" in _dummyObjectSlots ? _dummyObjectSlots?.value : _dummyObjectSlots} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.CommonAvatar.AvatarObjectSlot] */  isRaw={typeof _dummyObjectSlots === "object" && "isRaw" in _dummyObjectSlots && _dummyObjectSlots.isRaw ? true : undefined} />
        </Component>
      );
    };
    