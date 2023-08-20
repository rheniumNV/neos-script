import { member, Member, Component } from "../../core";
    
    export interface ScaleGizmoInput {
        
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
TargetScale?: member<any>;
HandleLength?: member<number>;
_xSlot?: member<any>;
_ySlot?: member<any>;
_zSlot?: member<any>;
    }
    
    export function ScaleGizmo(props: ScaleGizmoInput){
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
TargetScale,
HandleLength,
_xSlot,
_ySlot,
_zSlot, } = props;
    
      return (
        <Component type="FrooxEngine.ScaleGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
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
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IField\`1[BaseX.float3]]`} name="TargetScale" id={typeof TargetScale === "object" && "id" in TargetScale ? TargetScale?.id : undefined} value={typeof TargetScale === "object" && "value" in TargetScale ? TargetScale?.value : TargetScale} /* default: ID0 */  isRaw={typeof TargetScale === "object" && "isRaw" in TargetScale && TargetScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HandleLength" id={typeof HandleLength === "object" && "id" in HandleLength ? HandleLength?.id : undefined} value={typeof HandleLength === "object" && "value" in HandleLength ? HandleLength?.value : HandleLength} /* default: 0 */  isRaw={typeof HandleLength === "object" && "isRaw" in HandleLength && HandleLength.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_xSlot" id={typeof _xSlot === "object" && "id" in _xSlot ? _xSlot?.id : undefined} value={typeof _xSlot === "object" && "value" in _xSlot ? _xSlot?.value : _xSlot} /* default: ID0 */  isRaw={typeof _xSlot === "object" && "isRaw" in _xSlot && _xSlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_ySlot" id={typeof _ySlot === "object" && "id" in _ySlot ? _ySlot?.id : undefined} value={typeof _ySlot === "object" && "value" in _ySlot ? _ySlot?.value : _ySlot} /* default: ID0 */  isRaw={typeof _ySlot === "object" && "isRaw" in _ySlot && _ySlot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_zSlot" id={typeof _zSlot === "object" && "id" in _zSlot ? _zSlot?.id : undefined} value={typeof _zSlot === "object" && "value" in _zSlot ? _zSlot?.value : _zSlot} /* default: ID0 */  isRaw={typeof _zSlot === "object" && "isRaw" in _zSlot && _zSlot.isRaw ? true : undefined} />
        </Component>
      );
    };
    