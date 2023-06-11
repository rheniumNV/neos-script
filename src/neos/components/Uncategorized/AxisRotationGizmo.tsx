import { member, Member, Component } from "../../core";
    
    export interface AxisRotationGizmoInput {
        
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
Axis?: member<[number, number, number]>;
AxisSpace?: member<any>;
RotationSpace?: member<any>;
TargetRotation?: member<any>;
TargetValue?: member<any>;
CircleRadius?: member<number>;
CircleThickness?: member<number>;
_visualRoot?: member<any>;
_visualRot?: member<any>;
_circle?: member<any>;
_circleColliderMesh?: member<any>;
_referenceLine?: member<any>;
_linesRoot?: member<any>;
_line0?: member<any>;
_line1?: member<any>;
    }
    
    export function AxisRotationGizmo(props: AxisRotationGizmoInput){
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
Axis,
AxisSpace,
RotationSpace,
TargetRotation,
TargetValue,
CircleRadius,
CircleThickness,
_visualRoot,
_visualRot,
_circle,
_circleColliderMesh,
_referenceLine,
_linesRoot,
_line0,
_line1, } = props;
    
      return (
        <Component type="FrooxEngine.AxisRotationGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.TransformRelayRef`} name="TargetSlot" id={typeof TargetSlot === "object" && "id" in TargetSlot ? TargetSlot?.id : undefined} value={typeof TargetSlot === "object" && "value" in TargetSlot ? TargetSlot?.value : TargetSlot} /* default: ID0 */  isRaw={typeof TargetSlot === "object" && "isRaw" in TargetSlot && TargetSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoPositionAtTargetSlot" id={typeof AutoPositionAtTargetSlot === "object" && "id" in AutoPositionAtTargetSlot ? AutoPositionAtTargetSlot?.id : undefined} value={typeof AutoPositionAtTargetSlot === "object" && "value" in AutoPositionAtTargetSlot ? AutoPositionAtTargetSlot?.value : AutoPositionAtTargetSlot} /* default: false */  isRaw={typeof AutoPositionAtTargetSlot === "object" && "isRaw" in AutoPositionAtTargetSlot && AutoPositionAtTargetSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Component]`} name="_interactingComponent-ID" id={typeof _interactingComponent === "object" && "id" in _interactingComponent ? _interactingComponent?.id : undefined} value={typeof _interactingComponent === "object" && "value" in _interactingComponent ? _interactingComponent?.value : _interactingComponent} /* default: ID0 */ readOnly isRaw={typeof _interactingComponent === "object" && "isRaw" in _interactingComponent && _interactingComponent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.OverlayFresnelMaterial]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: ID0 */  isRaw={typeof _material === "object" && "isRaw" in _material && _material.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_toolPoint" id={typeof _toolPoint === "object" && "id" in _toolPoint ? _toolPoint?.id : undefined} value={typeof _toolPoint === "object" && "value" in _toolPoint ? _toolPoint?.value : _toolPoint} /* default: ID0 */  isRaw={typeof _toolPoint === "object" && "isRaw" in _toolPoint && _toolPoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_activePoint" id={typeof _activePoint === "object" && "id" in _activePoint ? _activePoint?.id : undefined} value={typeof _activePoint === "object" && "value" in _activePoint ? _activePoint?.value : _activePoint} /* default: ID0 */  isRaw={typeof _activePoint === "object" && "isRaw" in _activePoint && _activePoint.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_lineRoot" id={typeof _lineRoot === "object" && "id" in _lineRoot ? _lineRoot?.id : undefined} value={typeof _lineRoot === "object" && "value" in _lineRoot ? _lineRoot?.value : _lineRoot} /* default: ID0 */  isRaw={typeof _lineRoot === "object" && "isRaw" in _lineRoot && _lineRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SegmentMesh]`} name="_lineSegment" id={typeof _lineSegment === "object" && "id" in _lineSegment ? _lineSegment?.id : undefined} value={typeof _lineSegment === "object" && "value" in _lineSegment ? _lineSegment?.value : _lineSegment} /* default: ID0 */  isRaw={typeof _lineSegment === "object" && "isRaw" in _lineSegment && _lineSegment.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_snapHighlight" id={typeof _snapHighlight === "object" && "id" in _snapHighlight ? _snapHighlight?.id : undefined} value={typeof _snapHighlight === "object" && "value" in _snapHighlight ? _snapHighlight?.value : _snapHighlight} /* default: ID0 */  isRaw={typeof _snapHighlight === "object" && "isRaw" in _snapHighlight && _snapHighlight.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Axis" id={typeof Axis === "object" && "id" in Axis ? Axis?.id : undefined} value={typeof Axis === "object" && "value" in Axis ? Axis?.value : Axis} /* default: [0; 0; 0] */  isRaw={typeof Axis === "object" && "isRaw" in Axis && Axis.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="AxisSpace" id={typeof AxisSpace === "object" && "id" in AxisSpace ? AxisSpace?.id : undefined} value={typeof AxisSpace === "object" && "value" in AxisSpace ? AxisSpace?.value : AxisSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof AxisSpace === "object" && "isRaw" in AxisSpace && AxisSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="RotationSpace" id={typeof RotationSpace === "object" && "id" in RotationSpace ? RotationSpace?.id : undefined} value={typeof RotationSpace === "object" && "value" in RotationSpace ? RotationSpace?.value : RotationSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof RotationSpace === "object" && "isRaw" in RotationSpace && RotationSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[BaseX.floatQ]]`} name="TargetRotation" id={typeof TargetRotation === "object" && "id" in TargetRotation ? TargetRotation?.id : undefined} value={typeof TargetRotation === "object" && "value" in TargetRotation ? TargetRotation?.value : TargetRotation} /* default: ID0 */  isRaw={typeof TargetRotation === "object" && "isRaw" in TargetRotation && TargetRotation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[System.Single]]`} name="TargetValue" id={typeof TargetValue === "object" && "id" in TargetValue ? TargetValue?.id : undefined} value={typeof TargetValue === "object" && "value" in TargetValue ? TargetValue?.value : TargetValue} /* default: ID0 */  isRaw={typeof TargetValue === "object" && "isRaw" in TargetValue && TargetValue.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CircleRadius" id={typeof CircleRadius === "object" && "id" in CircleRadius ? CircleRadius?.id : undefined} value={typeof CircleRadius === "object" && "value" in CircleRadius ? CircleRadius?.value : CircleRadius} /* default: 0 */  isRaw={typeof CircleRadius === "object" && "isRaw" in CircleRadius && CircleRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="CircleThickness" id={typeof CircleThickness === "object" && "id" in CircleThickness ? CircleThickness?.id : undefined} value={typeof CircleThickness === "object" && "value" in CircleThickness ? CircleThickness?.value : CircleThickness} /* default: 0 */  isRaw={typeof CircleThickness === "object" && "isRaw" in CircleThickness && CircleThickness.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_visualRoot" id={typeof _visualRoot === "object" && "id" in _visualRoot ? _visualRoot?.id : undefined} value={typeof _visualRoot === "object" && "value" in _visualRoot ? _visualRoot?.value : _visualRoot} /* default: ID0 */  isRaw={typeof _visualRoot === "object" && "isRaw" in _visualRoot && _visualRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_visualRot" id={typeof _visualRot === "object" && "id" in _visualRot ? _visualRot?.id : undefined} value={typeof _visualRot === "object" && "value" in _visualRot ? _visualRot?.value : _visualRot} /* default: ID0 */  isRaw={typeof _visualRot === "object" && "isRaw" in _visualRot && _visualRot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.TorusMesh]`} name="_circle" id={typeof _circle === "object" && "id" in _circle ? _circle?.id : undefined} value={typeof _circle === "object" && "value" in _circle ? _circle?.value : _circle} /* default: ID0 */  isRaw={typeof _circle === "object" && "isRaw" in _circle && _circle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.TorusMesh]`} name="_circleColliderMesh" id={typeof _circleColliderMesh === "object" && "id" in _circleColliderMesh ? _circleColliderMesh?.id : undefined} value={typeof _circleColliderMesh === "object" && "value" in _circleColliderMesh ? _circleColliderMesh?.value : _circleColliderMesh} /* default: ID0 */  isRaw={typeof _circleColliderMesh === "object" && "isRaw" in _circleColliderMesh && _circleColliderMesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SegmentMesh]`} name="_referenceLine" id={typeof _referenceLine === "object" && "id" in _referenceLine ? _referenceLine?.id : undefined} value={typeof _referenceLine === "object" && "value" in _referenceLine ? _referenceLine?.value : _referenceLine} /* default: ID0 */  isRaw={typeof _referenceLine === "object" && "isRaw" in _referenceLine && _referenceLine.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_linesRoot" id={typeof _linesRoot === "object" && "id" in _linesRoot ? _linesRoot?.id : undefined} value={typeof _linesRoot === "object" && "value" in _linesRoot ? _linesRoot?.value : _linesRoot} /* default: ID0 */  isRaw={typeof _linesRoot === "object" && "isRaw" in _linesRoot && _linesRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SegmentMesh]`} name="_line0" id={typeof _line0 === "object" && "id" in _line0 ? _line0?.id : undefined} value={typeof _line0 === "object" && "value" in _line0 ? _line0?.value : _line0} /* default: ID0 */  isRaw={typeof _line0 === "object" && "isRaw" in _line0 && _line0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SegmentMesh]`} name="_line1" id={typeof _line1 === "object" && "id" in _line1 ? _line1?.id : undefined} value={typeof _line1 === "object" && "value" in _line1 ? _line1?.value : _line1} /* default: ID0 */  isRaw={typeof _line1 === "object" && "isRaw" in _line1 && _line1.isRaw ? true : undefined} />
        </Component>
      );
    };
    