import { member, Member, Component } from "../../core";
    
    export interface ConeGizmoInput {
        
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
TargetAngle?: member<any>;
TargetRadius?: member<any>;
TargetHeight?: member<any>;
TargetDirection?: member<any>;
TargetRotation?: member<any>;
DirectionSpace?: member<any>;
FixedAngle?: member<number>;
FixedHeight?: member<number>;
FixedDirection?: member<[number, number, number]>;
LineThickness?: member<number>;
MinHeight?: member<number>;
MaxHeight?: member<number>;
MinAngle?: member<number>;
MaxAngle?: member<number>;
_visualRoot?: member<any>;
_visualRot?: member<any>;
_handles?: member<any>;
_heightMesh?: member<any>;
_coneLineMesh?: member<any>;
    }
    
    export function ConeGizmo(props: ConeGizmoInput){
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
TargetAngle,
TargetRadius,
TargetHeight,
TargetDirection,
TargetRotation,
DirectionSpace,
FixedAngle,
FixedHeight,
FixedDirection,
LineThickness,
MinHeight,
MaxHeight,
MinAngle,
MaxAngle,
_visualRoot,
_visualRot,
_handles,
_heightMesh,
_coneLineMesh, } = props;
    
      return (
        <Component type="FrooxEngine.ConeGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.TransformRelayRef`} name="TargetSlot" id={typeof TargetSlot === "object" && "id" in TargetSlot ? TargetSlot?.id : undefined} value={typeof TargetSlot === "object" && "value" in TargetSlot ? TargetSlot?.value : TargetSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoPositionAtTargetSlot" id={typeof AutoPositionAtTargetSlot === "object" && "id" in AutoPositionAtTargetSlot ? AutoPositionAtTargetSlot?.id : undefined} value={typeof AutoPositionAtTargetSlot === "object" && "value" in AutoPositionAtTargetSlot ? AutoPositionAtTargetSlot?.value : AutoPositionAtTargetSlot} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Component]`} name="_interactingComponent-ID" id={typeof _interactingComponent === "object" && "id" in _interactingComponent ? _interactingComponent?.id : undefined} value={typeof _interactingComponent === "object" && "value" in _interactingComponent ? _interactingComponent?.value : _interactingComponent} /* default: ID0 */ idOnly />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.OverlayFresnelMaterial]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_toolPoint" id={typeof _toolPoint === "object" && "id" in _toolPoint ? _toolPoint?.id : undefined} value={typeof _toolPoint === "object" && "value" in _toolPoint ? _toolPoint?.value : _toolPoint} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_activePoint" id={typeof _activePoint === "object" && "id" in _activePoint ? _activePoint?.id : undefined} value={typeof _activePoint === "object" && "value" in _activePoint ? _activePoint?.value : _activePoint} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_lineRoot" id={typeof _lineRoot === "object" && "id" in _lineRoot ? _lineRoot?.id : undefined} value={typeof _lineRoot === "object" && "value" in _lineRoot ? _lineRoot?.value : _lineRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SegmentMesh]`} name="_lineSegment" id={typeof _lineSegment === "object" && "id" in _lineSegment ? _lineSegment?.id : undefined} value={typeof _lineSegment === "object" && "value" in _lineSegment ? _lineSegment?.value : _lineSegment} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_snapHighlight" id={typeof _snapHighlight === "object" && "id" in _snapHighlight ? _snapHighlight?.id : undefined} value={typeof _snapHighlight === "object" && "value" in _snapHighlight ? _snapHighlight?.value : _snapHighlight} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[System.Single]]`} name="TargetAngle" id={typeof TargetAngle === "object" && "id" in TargetAngle ? TargetAngle?.id : undefined} value={typeof TargetAngle === "object" && "value" in TargetAngle ? TargetAngle?.value : TargetAngle} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[System.Single]]`} name="TargetRadius" id={typeof TargetRadius === "object" && "id" in TargetRadius ? TargetRadius?.id : undefined} value={typeof TargetRadius === "object" && "value" in TargetRadius ? TargetRadius?.value : TargetRadius} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[System.Single]]`} name="TargetHeight" id={typeof TargetHeight === "object" && "id" in TargetHeight ? TargetHeight?.id : undefined} value={typeof TargetHeight === "object" && "value" in TargetHeight ? TargetHeight?.value : TargetHeight} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[BaseX.float3]]`} name="TargetDirection" id={typeof TargetDirection === "object" && "id" in TargetDirection ? TargetDirection?.id : undefined} value={typeof TargetDirection === "object" && "value" in TargetDirection ? TargetDirection?.value : TargetDirection} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[BaseX.floatQ]]`} name="TargetRotation" id={typeof TargetRotation === "object" && "id" in TargetRotation ? TargetRotation?.id : undefined} value={typeof TargetRotation === "object" && "value" in TargetRotation ? TargetRotation?.value : TargetRotation} /* default: ID0 */  />
<Member type={`FrooxEngine.RootSpace`} name="DirectionSpace" id={typeof DirectionSpace === "object" && "id" in DirectionSpace ? DirectionSpace?.id : undefined} value={typeof DirectionSpace === "object" && "value" in DirectionSpace ? DirectionSpace?.value : DirectionSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FixedAngle" id={typeof FixedAngle === "object" && "id" in FixedAngle ? FixedAngle?.id : undefined} value={typeof FixedAngle === "object" && "value" in FixedAngle ? FixedAngle?.value : FixedAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FixedHeight" id={typeof FixedHeight === "object" && "id" in FixedHeight ? FixedHeight?.id : undefined} value={typeof FixedHeight === "object" && "value" in FixedHeight ? FixedHeight?.value : FixedHeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="FixedDirection" id={typeof FixedDirection === "object" && "id" in FixedDirection ? FixedDirection?.id : undefined} value={typeof FixedDirection === "object" && "value" in FixedDirection ? FixedDirection?.value : FixedDirection} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LineThickness" id={typeof LineThickness === "object" && "id" in LineThickness ? LineThickness?.id : undefined} value={typeof LineThickness === "object" && "value" in LineThickness ? LineThickness?.value : LineThickness} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinHeight" id={typeof MinHeight === "object" && "id" in MinHeight ? MinHeight?.id : undefined} value={typeof MinHeight === "object" && "value" in MinHeight ? MinHeight?.value : MinHeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxHeight" id={typeof MaxHeight === "object" && "id" in MaxHeight ? MaxHeight?.id : undefined} value={typeof MaxHeight === "object" && "value" in MaxHeight ? MaxHeight?.value : MaxHeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinAngle" id={typeof MinAngle === "object" && "id" in MinAngle ? MinAngle?.id : undefined} value={typeof MinAngle === "object" && "value" in MinAngle ? MinAngle?.value : MinAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxAngle" id={typeof MaxAngle === "object" && "id" in MaxAngle ? MaxAngle?.id : undefined} value={typeof MaxAngle === "object" && "value" in MaxAngle ? MaxAngle?.value : MaxAngle} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_visualRoot" id={typeof _visualRoot === "object" && "id" in _visualRoot ? _visualRoot?.id : undefined} value={typeof _visualRoot === "object" && "value" in _visualRoot ? _visualRoot?.value : _visualRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_visualRot" id={typeof _visualRot === "object" && "id" in _visualRot ? _visualRot?.id : undefined} value={typeof _visualRot === "object" && "value" in _visualRot ? _visualRot?.value : _visualRot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.ConeGizmo+Handle]`} name="_handles" id={typeof _handles === "object" && "id" in _handles ? _handles?.id : undefined} value={typeof _handles === "object" && "value" in _handles ? _handles?.value : _handles} /* default: FrooxEngine.SyncList`1[FrooxEngine.ConeGizmo+Handle] */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SegmentMesh]`} name="_heightMesh" id={typeof _heightMesh === "object" && "id" in _heightMesh ? _heightMesh?.id : undefined} value={typeof _heightMesh === "object" && "value" in _heightMesh ? _heightMesh?.value : _heightMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SegmentMesh]`} name="_coneLineMesh" id={typeof _coneLineMesh === "object" && "id" in _coneLineMesh ? _coneLineMesh?.id : undefined} value={typeof _coneLineMesh === "object" && "value" in _coneLineMesh ? _coneLineMesh?.value : _coneLineMesh} /* default: ID0 */  />
        </Component>
      );
    };
    