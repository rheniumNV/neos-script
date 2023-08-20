import { member, Member, Component } from "../../core";
    
    export interface PlaneTranslationGizmoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetSlot?: member<any>;
AutoPositionAtTargetSlot?: member<boolean>;
_interactingComponent?: member<any>;
_material?: member<any>;
_toolPoint?: member<any>;
_activePoint?: member<any>;
_lineRoot?: member<any>;
_lineSegment?: member<any>;
_snapHighlight?: member<any>;
PointSpace?: member<any>;
TargetPoint?: member<any>;
Normal?: member<[number, number, number]>;
NormalSpace?: member<any>;
UseCustomVisual?: member<boolean>;
_customVisualRoot?: member<any>;
HandleSize?: member<[number, number]>;
HandleOffset?: member<[number, number]>;
CreateUndoSteps?: member<boolean>;
_visualRoot?: member<any>;
_visualRotation?: member<any>;
_visualPosition?: member<any>;
_boxSize?: member<any>;
_linesRoot?: member<any>;
_line0?: member<any>;
_line1?: member<any>;
_collider?: member<any>;
    }
    
    export function PlaneTranslationGizmo(props: PlaneTranslationGizmoInput){
      const { id, persistentId, updateOrder, Enabled,
TargetSlot,
AutoPositionAtTargetSlot,
_interactingComponent,
_material,
_toolPoint,
_activePoint,
_lineRoot,
_lineSegment,
_snapHighlight,
PointSpace,
TargetPoint,
Normal,
NormalSpace,
UseCustomVisual,
_customVisualRoot,
HandleSize,
HandleOffset,
CreateUndoSteps,
_visualRoot,
_visualRotation,
_visualPosition,
_boxSize,
_linesRoot,
_line0,
_line1,
_collider, } = props;
    
      return (
        <Component type="FrooxEngine.PlaneTranslationGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TransformRelayRef`} name="TargetSlot" id={typeof TargetSlot === "object" && "id" in TargetSlot ? TargetSlot?.id : undefined} value={typeof TargetSlot === "object" && "value" in TargetSlot ? TargetSlot?.value : TargetSlot} /* default: ID0 */  isRaw={typeof TargetSlot === "object" && "isRaw" in TargetSlot && TargetSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoPositionAtTargetSlot" id={typeof AutoPositionAtTargetSlot === "object" && "id" in AutoPositionAtTargetSlot ? AutoPositionAtTargetSlot?.id : undefined} value={typeof AutoPositionAtTargetSlot === "object" && "value" in AutoPositionAtTargetSlot ? AutoPositionAtTargetSlot?.value : AutoPositionAtTargetSlot} /* default: false */  isRaw={typeof AutoPositionAtTargetSlot === "object" && "isRaw" in AutoPositionAtTargetSlot && AutoPositionAtTargetSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Component]`} name="_interactingComponent-ID" id={typeof _interactingComponent === "object" && "id" in _interactingComponent ? _interactingComponent?.id : undefined} value={typeof _interactingComponent === "object" && "value" in _interactingComponent ? _interactingComponent?.value : _interactingComponent} /* default: ID0 */ readOnly isRaw={typeof _interactingComponent === "object" && "isRaw" in _interactingComponent && _interactingComponent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.OverlayFresnelMaterial]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: ID0 */  isRaw={typeof _material === "object" && "isRaw" in _material && _material.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_toolPoint" id={typeof _toolPoint === "object" && "id" in _toolPoint ? _toolPoint?.id : undefined} value={typeof _toolPoint === "object" && "value" in _toolPoint ? _toolPoint?.value : _toolPoint} /* default: ID0 */  isRaw={typeof _toolPoint === "object" && "isRaw" in _toolPoint && _toolPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_activePoint" id={typeof _activePoint === "object" && "id" in _activePoint ? _activePoint?.id : undefined} value={typeof _activePoint === "object" && "value" in _activePoint ? _activePoint?.value : _activePoint} /* default: ID0 */  isRaw={typeof _activePoint === "object" && "isRaw" in _activePoint && _activePoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_lineRoot" id={typeof _lineRoot === "object" && "id" in _lineRoot ? _lineRoot?.id : undefined} value={typeof _lineRoot === "object" && "value" in _lineRoot ? _lineRoot?.value : _lineRoot} /* default: ID0 */  isRaw={typeof _lineRoot === "object" && "isRaw" in _lineRoot && _lineRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SegmentMesh]`} name="_lineSegment" id={typeof _lineSegment === "object" && "id" in _lineSegment ? _lineSegment?.id : undefined} value={typeof _lineSegment === "object" && "value" in _lineSegment ? _lineSegment?.value : _lineSegment} /* default: ID0 */  isRaw={typeof _lineSegment === "object" && "isRaw" in _lineSegment && _lineSegment.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_snapHighlight" id={typeof _snapHighlight === "object" && "id" in _snapHighlight ? _snapHighlight?.id : undefined} value={typeof _snapHighlight === "object" && "value" in _snapHighlight ? _snapHighlight?.value : _snapHighlight} /* default: ID0 */  isRaw={typeof _snapHighlight === "object" && "isRaw" in _snapHighlight && _snapHighlight.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="PointSpace" id={typeof PointSpace === "object" && "id" in PointSpace ? PointSpace?.id : undefined} value={typeof PointSpace === "object" && "value" in PointSpace ? PointSpace?.value : PointSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof PointSpace === "object" && "isRaw" in PointSpace && PointSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[BaseX.float3]]`} name="TargetPoint" id={typeof TargetPoint === "object" && "id" in TargetPoint ? TargetPoint?.id : undefined} value={typeof TargetPoint === "object" && "value" in TargetPoint ? TargetPoint?.value : TargetPoint} /* default: ID0 */  isRaw={typeof TargetPoint === "object" && "isRaw" in TargetPoint && TargetPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Normal" id={typeof Normal === "object" && "id" in Normal ? Normal?.id : undefined} value={typeof Normal === "object" && "value" in Normal ? Normal?.value : Normal} /* default: [0; 0; 0] */  isRaw={typeof Normal === "object" && "isRaw" in Normal && Normal.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="NormalSpace" id={typeof NormalSpace === "object" && "id" in NormalSpace ? NormalSpace?.id : undefined} value={typeof NormalSpace === "object" && "value" in NormalSpace ? NormalSpace?.value : NormalSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof NormalSpace === "object" && "isRaw" in NormalSpace && NormalSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseCustomVisual" id={typeof UseCustomVisual === "object" && "id" in UseCustomVisual ? UseCustomVisual?.id : undefined} value={typeof UseCustomVisual === "object" && "value" in UseCustomVisual ? UseCustomVisual?.value : UseCustomVisual} /* default: false */  isRaw={typeof UseCustomVisual === "object" && "isRaw" in UseCustomVisual && UseCustomVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_customVisualRoot" id={typeof _customVisualRoot === "object" && "id" in _customVisualRoot ? _customVisualRoot?.id : undefined} value={typeof _customVisualRoot === "object" && "value" in _customVisualRoot ? _customVisualRoot?.value : _customVisualRoot} /* default: ID0 */  isRaw={typeof _customVisualRoot === "object" && "isRaw" in _customVisualRoot && _customVisualRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="HandleSize" id={typeof HandleSize === "object" && "id" in HandleSize ? HandleSize?.id : undefined} value={typeof HandleSize === "object" && "value" in HandleSize ? HandleSize?.value : HandleSize} /* default: [0; 0] */  isRaw={typeof HandleSize === "object" && "isRaw" in HandleSize && HandleSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="HandleOffset" id={typeof HandleOffset === "object" && "id" in HandleOffset ? HandleOffset?.id : undefined} value={typeof HandleOffset === "object" && "value" in HandleOffset ? HandleOffset?.value : HandleOffset} /* default: [0; 0] */  isRaw={typeof HandleOffset === "object" && "isRaw" in HandleOffset && HandleOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CreateUndoSteps" id={typeof CreateUndoSteps === "object" && "id" in CreateUndoSteps ? CreateUndoSteps?.id : undefined} value={typeof CreateUndoSteps === "object" && "value" in CreateUndoSteps ? CreateUndoSteps?.value : CreateUndoSteps} /* default: false */  isRaw={typeof CreateUndoSteps === "object" && "isRaw" in CreateUndoSteps && CreateUndoSteps.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_visualRoot" id={typeof _visualRoot === "object" && "id" in _visualRoot ? _visualRoot?.id : undefined} value={typeof _visualRoot === "object" && "value" in _visualRoot ? _visualRoot?.value : _visualRoot} /* default: ID0 */  isRaw={typeof _visualRoot === "object" && "isRaw" in _visualRoot && _visualRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_visualRotation" id={typeof _visualRotation === "object" && "id" in _visualRotation ? _visualRotation?.id : undefined} value={typeof _visualRotation === "object" && "value" in _visualRotation ? _visualRotation?.value : _visualRotation} /* default: ID0 */  isRaw={typeof _visualRotation === "object" && "isRaw" in _visualRotation && _visualRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_visualPosition" id={typeof _visualPosition === "object" && "id" in _visualPosition ? _visualPosition?.id : undefined} value={typeof _visualPosition === "object" && "value" in _visualPosition ? _visualPosition?.value : _visualPosition} /* default: ID0 */  isRaw={typeof _visualPosition === "object" && "isRaw" in _visualPosition && _visualPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_boxSize" id={typeof _boxSize === "object" && "id" in _boxSize ? _boxSize?.id : undefined} value={typeof _boxSize === "object" && "value" in _boxSize ? _boxSize?.value : _boxSize} /* default: ID0 */  isRaw={typeof _boxSize === "object" && "isRaw" in _boxSize && _boxSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_linesRoot" id={typeof _linesRoot === "object" && "id" in _linesRoot ? _linesRoot?.id : undefined} value={typeof _linesRoot === "object" && "value" in _linesRoot ? _linesRoot?.value : _linesRoot} /* default: ID0 */  isRaw={typeof _linesRoot === "object" && "isRaw" in _linesRoot && _linesRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SegmentMesh]`} name="_line0" id={typeof _line0 === "object" && "id" in _line0 ? _line0?.id : undefined} value={typeof _line0 === "object" && "value" in _line0 ? _line0?.value : _line0} /* default: ID0 */  isRaw={typeof _line0 === "object" && "isRaw" in _line0 && _line0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SegmentMesh]`} name="_line1" id={typeof _line1 === "object" && "id" in _line1 ? _line1?.id : undefined} value={typeof _line1 === "object" && "value" in _line1 ? _line1?.value : _line1} /* default: ID0 */  isRaw={typeof _line1 === "object" && "isRaw" in _line1 && _line1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.BoxCollider]`} name="_collider" id={typeof _collider === "object" && "id" in _collider ? _collider?.id : undefined} value={typeof _collider === "object" && "value" in _collider ? _collider?.value : _collider} /* default: ID0 */  isRaw={typeof _collider === "object" && "isRaw" in _collider && _collider.isRaw ? true : undefined} />
        </Component>
      );
    };
    