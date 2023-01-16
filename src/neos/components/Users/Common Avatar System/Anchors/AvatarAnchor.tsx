import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Highlight" id={typeof Highlight === "object" && "id" in Highlight ? Highlight?.id : undefined} value={typeof Highlight === "object" && "value" in Highlight ? Highlight?.value : Highlight} /* default: false */  />
<Member type={`FrooxEngine.RootSpace`} name="ParentSpace" id={typeof ParentSpace === "object" && "id" in ParentSpace ? ParentSpace?.id : undefined} value={typeof ParentSpace === "object" && "value" in ParentSpace ? ParentSpace?.value : ParentSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinScale" id={typeof MinScale === "object" && "id" in MinScale ? MinScale?.id : undefined} value={typeof MinScale === "object" && "value" in MinScale ? MinScale?.value : MinScale} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxScale" id={typeof MaxScale === "object" && "id" in MaxScale ? MaxScale?.id : undefined} value={typeof MaxScale === "object" && "value" in MaxScale ? MaxScale?.value : MaxScale} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`} name="PositionNode" id={typeof PositionNode === "object" && "id" in PositionNode ? PositionNode?.id : undefined} value={typeof PositionNode === "object" && "value" in PositionNode ? PositionNode?.value : PositionNode} /* default: None */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="PositionReference" id={typeof PositionReference === "object" && "id" in PositionReference ? PositionReference?.id : undefined} value={typeof PositionReference === "object" && "value" in PositionReference ? PositionReference?.value : PositionReference} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`} name="RotationNode" id={typeof RotationNode === "object" && "id" in RotationNode ? RotationNode?.id : undefined} value={typeof RotationNode === "object" && "value" in RotationNode ? RotationNode?.value : RotationNode} /* default: None */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="RotationReference" id={typeof RotationReference === "object" && "id" in RotationReference ? RotationReference?.id : undefined} value={typeof RotationReference === "object" && "value" in RotationReference ? RotationReference?.value : RotationReference} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PreserveUpOnEnter" id={typeof PreserveUpOnEnter === "object" && "id" in PreserveUpOnEnter ? PreserveUpOnEnter?.id : undefined} value={typeof PreserveUpOnEnter === "object" && "value" in PreserveUpOnEnter ? PreserveUpOnEnter?.value : PreserveUpOnEnter} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="PreserveUpOnExit" id={typeof PreserveUpOnExit === "object" && "id" in PreserveUpOnExit ? PreserveUpOnExit?.id : undefined} value={typeof PreserveUpOnExit === "object" && "value" in PreserveUpOnExit ? PreserveUpOnExit?.value : PreserveUpOnExit} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UnparentEverythingOnDestroy" id={typeof UnparentEverythingOnDestroy === "object" && "id" in UnparentEverythingOnDestroy ? UnparentEverythingOnDestroy?.id : undefined} value={typeof UnparentEverythingOnDestroy === "object" && "value" in UnparentEverythingOnDestroy ? UnparentEverythingOnDestroy?.value : UnparentEverythingOnDestroy} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.CommonAvatar.AvatarAnchor+RestoreMode]`} name="TransformRestoreMode" id={typeof TransformRestoreMode === "object" && "id" in TransformRestoreMode ? TransformRestoreMode?.id : undefined} value={typeof TransformRestoreMode === "object" && "value" in TransformRestoreMode ? TransformRestoreMode?.value : TransformRestoreMode} /* default: None */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UserRoot+UserNode]`} name="RestoreNode" id={typeof RestoreNode === "object" && "id" in RestoreNode ? RestoreNode?.id : undefined} value={typeof RestoreNode === "object" && "value" in RestoreNode ? RestoreNode?.value : RestoreNode} /* default: None */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="RestoreReference" id={typeof RestoreReference === "object" && "id" in RestoreReference ? RestoreReference?.id : undefined} value={typeof RestoreReference === "object" && "value" in RestoreReference ? RestoreReference?.value : RestoreReference} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.CommonAvatar.AvatarAnchor+BodyNodeFilters]`} name="Filters" id={typeof Filters === "object" && "id" in Filters ? Filters?.id : undefined} value={typeof Filters === "object" && "value" in Filters ? Filters?.value : Filters} /* default: FrooxEngine.SyncList`1[FrooxEngine.CommonAvatar.AvatarAnchor+BodyNodeFilters] */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.IAvatarAnchorUserFilter]`} name="UserFilters" id={typeof UserFilters === "object" && "id" in UserFilters ? UserFilters?.id : undefined} value={typeof UserFilters === "object" && "value" in UserFilters ? UserFilters?.value : UserFilters} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.IAvatarAnchorUserFilter] */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.CommonAvatar.AvatarAnchorUserEvent]`} name="UserAnchored" id={typeof UserAnchored === "object" && "id" in UserAnchored ? UserAnchored?.id : undefined} value={typeof UserAnchored === "object" && "value" in UserAnchored ? UserAnchored?.value : UserAnchored} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.CommonAvatar.AvatarAnchorUserEvent]`} name="UserStay" id={typeof UserStay === "object" && "id" in UserStay ? UserStay?.id : undefined} value={typeof UserStay === "object" && "value" in UserStay ? UserStay?.value : UserStay} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.CommonAvatar.AvatarAnchorUserEvent]`} name="UserReleased" id={typeof UserReleased === "object" && "id" in UserReleased ? UserReleased?.id : undefined} value={typeof UserReleased === "object" && "value" in UserReleased ? UserReleased?.value : UserReleased} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_originalSpace" id={typeof _originalSpace === "object" && "id" in _originalSpace ? _originalSpace?.id : undefined} value={typeof _originalSpace === "object" && "value" in _originalSpace ? _originalSpace?.value : _originalSpace} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="_originalPosition" id={typeof _originalPosition === "object" && "id" in _originalPosition ? _originalPosition?.id : undefined} value={typeof _originalPosition === "object" && "value" in _originalPosition ? _originalPosition?.value : _originalPosition} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="_originalRotation" id={typeof _originalRotation === "object" && "id" in _originalRotation ? _originalRotation?.id : undefined} value={typeof _originalRotation === "object" && "value" in _originalRotation ? _originalRotation?.value : _originalRotation} /* default: [0; 0; 0; 1] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="_originalScale" id={typeof _originalScale === "object" && "id" in _originalScale ? _originalScale?.id : undefined} value={typeof _originalScale === "object" && "value" in _originalScale ? _originalScale?.value : _originalScale} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.CommonAvatar.AvatarObjectSlot]`} name="_dummyObjectSlots" id={typeof _dummyObjectSlots === "object" && "id" in _dummyObjectSlots ? _dummyObjectSlots?.id : undefined} value={typeof _dummyObjectSlots === "object" && "value" in _dummyObjectSlots ? _dummyObjectSlots?.value : _dummyObjectSlots} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.CommonAvatar.AvatarObjectSlot] */  />
        </Component>
      );
    };
    