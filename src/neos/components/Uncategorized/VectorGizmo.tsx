import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface VectorGizmoInput {
        
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
VectorSpace?: member<any>;
TargetVector?: member<any>;
TargetRotation?: member<any>;
FixMagnitude?: member<boolean>;
FixedMagnitude?: member<number>;
VisualMagnitudeScale?: member<number>;
VisualThickness?: member<number>;
_colliderRotation?: member<any>;
_collider?: member<any>;
_mesh?: member<any>;
    }
    
    export function VectorGizmo(props: VectorGizmoInput){
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
VectorSpace,
TargetVector,
TargetRotation,
FixMagnitude,
FixedMagnitude,
VisualMagnitudeScale,
VisualThickness,
_colliderRotation,
_collider,
_mesh, } = props;
    
      return (
        <Component type="FrooxEngine.VectorGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
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
<Member type={`FrooxEngine.RootSpace`} name="VectorSpace" id={typeof VectorSpace === "object" && "id" in VectorSpace ? VectorSpace?.id : undefined} value={typeof VectorSpace === "object" && "value" in VectorSpace ? VectorSpace?.value : VectorSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[BaseX.float3]]`} name="TargetVector" id={typeof TargetVector === "object" && "id" in TargetVector ? TargetVector?.id : undefined} value={typeof TargetVector === "object" && "value" in TargetVector ? TargetVector?.value : TargetVector} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[BaseX.floatQ]]`} name="TargetRotation" id={typeof TargetRotation === "object" && "id" in TargetRotation ? TargetRotation?.id : undefined} value={typeof TargetRotation === "object" && "value" in TargetRotation ? TargetRotation?.value : TargetRotation} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FixMagnitude" id={typeof FixMagnitude === "object" && "id" in FixMagnitude ? FixMagnitude?.id : undefined} value={typeof FixMagnitude === "object" && "value" in FixMagnitude ? FixMagnitude?.value : FixMagnitude} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FixedMagnitude" id={typeof FixedMagnitude === "object" && "id" in FixedMagnitude ? FixedMagnitude?.id : undefined} value={typeof FixedMagnitude === "object" && "value" in FixedMagnitude ? FixedMagnitude?.value : FixedMagnitude} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VisualMagnitudeScale" id={typeof VisualMagnitudeScale === "object" && "id" in VisualMagnitudeScale ? VisualMagnitudeScale?.id : undefined} value={typeof VisualMagnitudeScale === "object" && "value" in VisualMagnitudeScale ? VisualMagnitudeScale?.value : VisualMagnitudeScale} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VisualThickness" id={typeof VisualThickness === "object" && "id" in VisualThickness ? VisualThickness?.id : undefined} value={typeof VisualThickness === "object" && "value" in VisualThickness ? VisualThickness?.value : VisualThickness} /* default: 0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_colliderRotation" id={typeof _colliderRotation === "object" && "id" in _colliderRotation ? _colliderRotation?.id : undefined} value={typeof _colliderRotation === "object" && "value" in _colliderRotation ? _colliderRotation?.value : _colliderRotation} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.CylinderCollider]`} name="_collider" id={typeof _collider === "object" && "id" in _collider ? _collider?.id : undefined} value={typeof _collider === "object" && "value" in _collider ? _collider?.value : _collider} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.ArrowMesh]`} name="_mesh" id={typeof _mesh === "object" && "id" in _mesh ? _mesh?.id : undefined} value={typeof _mesh === "object" && "value" in _mesh ? _mesh?.value : _mesh} /* default: ID0 */  />
        </Component>
      );
    };
    