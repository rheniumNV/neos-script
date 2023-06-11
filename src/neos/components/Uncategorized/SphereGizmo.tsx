import { member, Member, Component } from "../../core";
    
    export interface SphereGizmoInput {
        
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
TargetRadius?: member<any>;
RadiusSpace?: member<any>;
RimRadius?: member<number>;
RimRadiusDistanceScale?: member<number>;
_handles?: member<any>;
    }
    
    export function SphereGizmo(props: SphereGizmoInput){
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
TargetRadius,
RadiusSpace,
RimRadius,
RimRadiusDistanceScale,
_handles, } = props;
    
      return (
        <Component type="FrooxEngine.SphereGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
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
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[System.Single]]`} name="TargetRadius" id={typeof TargetRadius === "object" && "id" in TargetRadius ? TargetRadius?.id : undefined} value={typeof TargetRadius === "object" && "value" in TargetRadius ? TargetRadius?.value : TargetRadius} /* default: ID0 */  isRaw={typeof TargetRadius === "object" && "isRaw" in TargetRadius && TargetRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="RadiusSpace" id={typeof RadiusSpace === "object" && "id" in RadiusSpace ? RadiusSpace?.id : undefined} value={typeof RadiusSpace === "object" && "value" in RadiusSpace ? RadiusSpace?.value : RadiusSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof RadiusSpace === "object" && "isRaw" in RadiusSpace && RadiusSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RimRadius" id={typeof RimRadius === "object" && "id" in RimRadius ? RimRadius?.id : undefined} value={typeof RimRadius === "object" && "value" in RimRadius ? RimRadius?.value : RimRadius} /* default: 0 */  isRaw={typeof RimRadius === "object" && "isRaw" in RimRadius && RimRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RimRadiusDistanceScale" id={typeof RimRadiusDistanceScale === "object" && "id" in RimRadiusDistanceScale ? RimRadiusDistanceScale?.id : undefined} value={typeof RimRadiusDistanceScale === "object" && "value" in RimRadiusDistanceScale ? RimRadiusDistanceScale?.value : RimRadiusDistanceScale} /* default: 0 */  isRaw={typeof RimRadiusDistanceScale === "object" && "isRaw" in RimRadiusDistanceScale && RimRadiusDistanceScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.SphereGizmo+Handle]`} name="_handles" id={typeof _handles === "object" && "id" in _handles ? _handles?.id : undefined} value={typeof _handles === "object" && "value" in _handles ? _handles?.value : _handles} /* default: FrooxEngine.SyncList`1[FrooxEngine.SphereGizmo+Handle] */  isRaw={typeof _handles === "object" && "isRaw" in _handles && _handles.isRaw ? true : undefined} />
        </Component>
      );
    };
    