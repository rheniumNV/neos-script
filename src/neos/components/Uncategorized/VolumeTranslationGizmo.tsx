import { member, Member, Component } from "../../core";
    
    export interface VolumeTranslationGizmoInput {
        
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
UseCustomVisual?: member<boolean>;
_customVisualRoot?: member<any>;
_visualRoot?: member<any>;
CubeSize?: member<number>;
CreateUndoSteps?: member<boolean>;
_cubeSize?: member<any>;
_colliderSize?: member<any>;
    }
    
    export function VolumeTranslationGizmo(props: VolumeTranslationGizmoInput){
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
UseCustomVisual,
_customVisualRoot,
_visualRoot,
CubeSize,
CreateUndoSteps,
_cubeSize,
_colliderSize, } = props;
    
      return (
        <Component type="FrooxEngine.VolumeTranslationGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
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
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseCustomVisual" id={typeof UseCustomVisual === "object" && "id" in UseCustomVisual ? UseCustomVisual?.id : undefined} value={typeof UseCustomVisual === "object" && "value" in UseCustomVisual ? UseCustomVisual?.value : UseCustomVisual} /* default: false */  isRaw={typeof UseCustomVisual === "object" && "isRaw" in UseCustomVisual && UseCustomVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_customVisualRoot" id={typeof _customVisualRoot === "object" && "id" in _customVisualRoot ? _customVisualRoot?.id : undefined} value={typeof _customVisualRoot === "object" && "value" in _customVisualRoot ? _customVisualRoot?.value : _customVisualRoot} /* default: ID0 */  isRaw={typeof _customVisualRoot === "object" && "isRaw" in _customVisualRoot && _customVisualRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_visualRoot" id={typeof _visualRoot === "object" && "id" in _visualRoot ? _visualRoot?.id : undefined} value={typeof _visualRoot === "object" && "value" in _visualRoot ? _visualRoot?.value : _visualRoot} /* default: ID0 */  isRaw={typeof _visualRoot === "object" && "isRaw" in _visualRoot && _visualRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CubeSize" id={typeof CubeSize === "object" && "id" in CubeSize ? CubeSize?.id : undefined} value={typeof CubeSize === "object" && "value" in CubeSize ? CubeSize?.value : CubeSize} /* default: 0 */  isRaw={typeof CubeSize === "object" && "isRaw" in CubeSize && CubeSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CreateUndoSteps" id={typeof CreateUndoSteps === "object" && "id" in CreateUndoSteps ? CreateUndoSteps?.id : undefined} value={typeof CreateUndoSteps === "object" && "value" in CreateUndoSteps ? CreateUndoSteps?.value : CreateUndoSteps} /* default: false */  isRaw={typeof CreateUndoSteps === "object" && "isRaw" in CreateUndoSteps && CreateUndoSteps.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_cubeSize" id={typeof _cubeSize === "object" && "id" in _cubeSize ? _cubeSize?.id : undefined} value={typeof _cubeSize === "object" && "value" in _cubeSize ? _cubeSize?.value : _cubeSize} /* default: ID0 */  isRaw={typeof _cubeSize === "object" && "isRaw" in _cubeSize && _cubeSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_colliderSize" id={typeof _colliderSize === "object" && "id" in _colliderSize ? _colliderSize?.id : undefined} value={typeof _colliderSize === "object" && "value" in _colliderSize ? _colliderSize?.value : _colliderSize} /* default: ID0 */  isRaw={typeof _colliderSize === "object" && "isRaw" in _colliderSize && _colliderSize.isRaw ? true : undefined} />
        </Component>
      );
    };
    