import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface SlotGizmoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
GizmoReplaced?: member<any>;
_isFolded?: member<boolean>;
_activeGizmo?: member<any>;
_targetSlot?: member<any>;
_positionDrive?: member<any>;
_scaleDrive?: member<any>;
_boundsMesh?: member<any>;
_boundsRoot?: member<any>;
_boundsRotation?: member<any>;
_boundsOffset?: member<any>;
_boundsActive?: member<any>;
_buttonsSlot?: member<any>;
_buttonsOffset?: member<any>;
_buttonsRotation?: member<any>;
_buttonsActive?: member<any>;
_nameText?: member<string>;
_nameOffset?: member<any>;
_nameRotation?: member<any>;
_nameActive?: member<any>;
_xPosSegment?: member<any>;
_yPosSegment?: member<any>;
_zPosSegment?: member<any>;
_rootAnchor?: member<any>;
_translationGizmo?: member<any>;
_rotationGizmo?: member<any>;
_scaleGizmo?: member<any>;
_isLocalSpace?: member<boolean>;
    }
    
    export function SlotGizmo(props: SlotGizmoInput){
      const { id, persistentId, updateOrder, Enabled,
GizmoReplaced,
_isFolded,
_activeGizmo,
_targetSlot,
_positionDrive,
_scaleDrive,
_boundsMesh,
_boundsRoot,
_boundsRotation,
_boundsOffset,
_boundsActive,
_buttonsSlot,
_buttonsOffset,
_buttonsRotation,
_buttonsActive,
_nameText,
_nameOffset,
_nameRotation,
_nameActive,
_xPosSegment,
_yPosSegment,
_zPosSegment,
_rootAnchor,
_translationGizmo,
_rotationGizmo,
_scaleGizmo,
_isLocalSpace, } = props;
    
      return (
        <Component type="FrooxEngine.SlotGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.SlotGizmo+SlotGizmoReplacement]`} name="GizmoReplaced" id={typeof GizmoReplaced === "object" && "id" in GizmoReplaced ? GizmoReplaced?.id : undefined} value={typeof GizmoReplaced === "object" && "value" in GizmoReplaced ? GizmoReplaced?.value : GizmoReplaced} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_isFolded" id={typeof _isFolded === "object" && "id" in _isFolded ? _isFolded?.id : undefined} value={typeof _isFolded === "object" && "value" in _isFolded ? _isFolded?.value : _isFolded} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Worker]`} name="_activeGizmo" id={typeof _activeGizmo === "object" && "id" in _activeGizmo ? _activeGizmo?.id : undefined} value={typeof _activeGizmo === "object" && "value" in _activeGizmo ? _activeGizmo?.value : _activeGizmo} /* default: ID0 */  />
<Member type={`FrooxEngine.TransformRelayRef`} name="_targetSlot" id={typeof _targetSlot === "object" && "id" in _targetSlot ? _targetSlot?.id : undefined} value={typeof _targetSlot === "object" && "value" in _targetSlot ? _targetSlot?.value : _targetSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_positionDrive" id={typeof _positionDrive === "object" && "id" in _positionDrive ? _positionDrive?.id : undefined} value={typeof _positionDrive === "object" && "value" in _positionDrive ? _positionDrive?.value : _positionDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_scaleDrive" id={typeof _scaleDrive === "object" && "id" in _scaleDrive ? _scaleDrive?.id : undefined} value={typeof _scaleDrive === "object" && "value" in _scaleDrive ? _scaleDrive?.value : _scaleDrive} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.TubeBoxMesh]`} name="_boundsMesh" id={typeof _boundsMesh === "object" && "id" in _boundsMesh ? _boundsMesh?.id : undefined} value={typeof _boundsMesh === "object" && "value" in _boundsMesh ? _boundsMesh?.value : _boundsMesh} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_boundsRoot" id={typeof _boundsRoot === "object" && "id" in _boundsRoot ? _boundsRoot?.id : undefined} value={typeof _boundsRoot === "object" && "value" in _boundsRoot ? _boundsRoot?.value : _boundsRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_boundsRotation" id={typeof _boundsRotation === "object" && "id" in _boundsRotation ? _boundsRotation?.id : undefined} value={typeof _boundsRotation === "object" && "value" in _boundsRotation ? _boundsRotation?.value : _boundsRotation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_boundsOffset" id={typeof _boundsOffset === "object" && "id" in _boundsOffset ? _boundsOffset?.id : undefined} value={typeof _boundsOffset === "object" && "value" in _boundsOffset ? _boundsOffset?.value : _boundsOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_boundsActive" id={typeof _boundsActive === "object" && "id" in _boundsActive ? _boundsActive?.id : undefined} value={typeof _boundsActive === "object" && "value" in _boundsActive ? _boundsActive?.value : _boundsActive} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_buttonsSlot" id={typeof _buttonsSlot === "object" && "id" in _buttonsSlot ? _buttonsSlot?.id : undefined} value={typeof _buttonsSlot === "object" && "value" in _buttonsSlot ? _buttonsSlot?.value : _buttonsSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_buttonsOffset" id={typeof _buttonsOffset === "object" && "id" in _buttonsOffset ? _buttonsOffset?.id : undefined} value={typeof _buttonsOffset === "object" && "value" in _buttonsOffset ? _buttonsOffset?.value : _buttonsOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_buttonsRotation" id={typeof _buttonsRotation === "object" && "id" in _buttonsRotation ? _buttonsRotation?.id : undefined} value={typeof _buttonsRotation === "object" && "value" in _buttonsRotation ? _buttonsRotation?.value : _buttonsRotation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_buttonsActive" id={typeof _buttonsActive === "object" && "id" in _buttonsActive ? _buttonsActive?.id : undefined} value={typeof _buttonsActive === "object" && "value" in _buttonsActive ? _buttonsActive?.value : _buttonsActive} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="_nameText" id={typeof _nameText === "object" && "id" in _nameText ? _nameText?.id : undefined} value={typeof _nameText === "object" && "value" in _nameText ? _nameText?.value : _nameText} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_nameOffset" id={typeof _nameOffset === "object" && "id" in _nameOffset ? _nameOffset?.id : undefined} value={typeof _nameOffset === "object" && "value" in _nameOffset ? _nameOffset?.value : _nameOffset} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_nameRotation" id={typeof _nameRotation === "object" && "id" in _nameRotation ? _nameRotation?.id : undefined} value={typeof _nameRotation === "object" && "value" in _nameRotation ? _nameRotation?.value : _nameRotation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Boolean]`} name="_nameActive" id={typeof _nameActive === "object" && "id" in _nameActive ? _nameActive?.id : undefined} value={typeof _nameActive === "object" && "value" in _nameActive ? _nameActive?.value : _nameActive} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SegmentMesh]`} name="_xPosSegment" id={typeof _xPosSegment === "object" && "id" in _xPosSegment ? _xPosSegment?.id : undefined} value={typeof _xPosSegment === "object" && "value" in _xPosSegment ? _xPosSegment?.value : _xPosSegment} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SegmentMesh]`} name="_yPosSegment" id={typeof _yPosSegment === "object" && "id" in _yPosSegment ? _yPosSegment?.id : undefined} value={typeof _yPosSegment === "object" && "value" in _yPosSegment ? _yPosSegment?.value : _yPosSegment} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SegmentMesh]`} name="_zPosSegment" id={typeof _zPosSegment === "object" && "id" in _zPosSegment ? _zPosSegment?.id : undefined} value={typeof _zPosSegment === "object" && "value" in _zPosSegment ? _zPosSegment?.value : _zPosSegment} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PointAnchor]`} name="_rootAnchor" id={typeof _rootAnchor === "object" && "id" in _rootAnchor ? _rootAnchor?.id : undefined} value={typeof _rootAnchor === "object" && "value" in _rootAnchor ? _rootAnchor?.value : _rootAnchor} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TranslationGizmo]`} name="_translationGizmo" id={typeof _translationGizmo === "object" && "id" in _translationGizmo ? _translationGizmo?.id : undefined} value={typeof _translationGizmo === "object" && "value" in _translationGizmo ? _translationGizmo?.value : _translationGizmo} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RotationGizmo]`} name="_rotationGizmo" id={typeof _rotationGizmo === "object" && "id" in _rotationGizmo ? _rotationGizmo?.id : undefined} value={typeof _rotationGizmo === "object" && "value" in _rotationGizmo ? _rotationGizmo?.value : _rotationGizmo} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ScaleGizmo]`} name="_scaleGizmo" id={typeof _scaleGizmo === "object" && "id" in _scaleGizmo ? _scaleGizmo?.id : undefined} value={typeof _scaleGizmo === "object" && "value" in _scaleGizmo ? _scaleGizmo?.value : _scaleGizmo} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_isLocalSpace" id={typeof _isLocalSpace === "object" && "id" in _isLocalSpace ? _isLocalSpace?.id : undefined} value={typeof _isLocalSpace === "object" && "value" in _isLocalSpace ? _isLocalSpace?.value : _isLocalSpace} /* default: false */  />
        </Component>
      );
    };
    