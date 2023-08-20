import { member, Member, Component } from "../../core";
    
    export interface SlicingVolumeVisualizerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Material?: member<any>;
AutoScale?: member<boolean>;
_renderer?: member<any>;
_mesh?: member<any>;
_collider?: member<any>;
_scale?: member<any>;
Slicers?: member<any>;
_slicePlanes?: member<any>;
_highlights?: member<any>;
    }
    
    export function SlicingVolumeVisualizer(props: SlicingVolumeVisualizerInput){
      const { id, persistentId, updateOrder, Enabled,
Material,
AutoScale,
_renderer,
_mesh,
_collider,
_scale,
Slicers,
_slicePlanes,
_highlights, } = props;
    
      return (
        <Component type="FrooxEngine.SlicingVolumeVisualizer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.VolumeUnlitMaterial]`} name="Material" id={typeof Material === "object" && "id" in Material ? Material?.id : undefined} value={typeof Material === "object" && "value" in Material ? Material?.value : Material} /* default: ID0 */  isRaw={typeof Material === "object" && "isRaw" in Material && Material.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoScale" id={typeof AutoScale === "object" && "id" in AutoScale ? AutoScale?.id : undefined} value={typeof AutoScale === "object" && "value" in AutoScale ? AutoScale?.value : AutoScale} /* default: false */  isRaw={typeof AutoScale === "object" && "isRaw" in AutoScale && AutoScale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.MeshRenderer]`} name="_renderer" id={typeof _renderer === "object" && "id" in _renderer ? _renderer?.id : undefined} value={typeof _renderer === "object" && "value" in _renderer ? _renderer?.value : _renderer} /* default: ID0 */  isRaw={typeof _renderer === "object" && "isRaw" in _renderer && _renderer.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.BoxMesh]`} name="_mesh" id={typeof _mesh === "object" && "id" in _mesh ? _mesh?.id : undefined} value={typeof _mesh === "object" && "value" in _mesh ? _mesh?.value : _mesh} /* default: ID0 */  isRaw={typeof _mesh === "object" && "isRaw" in _mesh && _mesh.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.BoxCollider]`} name="_collider" id={typeof _collider === "object" && "id" in _collider ? _collider?.id : undefined} value={typeof _collider === "object" && "value" in _collider ? _collider?.value : _collider} /* default: ID0 */  isRaw={typeof _collider === "object" && "isRaw" in _collider && _collider.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_scale" id={typeof _scale === "object" && "id" in _scale ? _scale?.id : undefined} value={typeof _scale === "object" && "value" in _scale ? _scale?.value : _scale} /* default: ID0 */  isRaw={typeof _scale === "object" && "isRaw" in _scale && _scale.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRelayList\`1[FrooxEngine.VolumePlaneSlicer]`} name="Slicers" id={typeof Slicers === "object" && "id" in Slicers ? Slicers?.id : undefined} value={typeof Slicers === "object" && "value" in Slicers ? Slicers?.value : Slicers} /* default: FrooxEngine.SyncRelayList`1[FrooxEngine.VolumePlaneSlicer] */  isRaw={typeof Slicers === "object" && "isRaw" in Slicers && Slicers.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SyncList\`1[FrooxEngine.VolumeUnlitMaterial+SlicePlane]]`} name="_slicePlanes" id={typeof _slicePlanes === "object" && "id" in _slicePlanes ? _slicePlanes?.id : undefined} value={typeof _slicePlanes === "object" && "value" in _slicePlanes ? _slicePlanes?.value : _slicePlanes} /* default: ID0 */  isRaw={typeof _slicePlanes === "object" && "isRaw" in _slicePlanes && _slicePlanes.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SyncList\`1[FrooxEngine.VolumeUnlitMaterial+Highlight]]`} name="_highlights" id={typeof _highlights === "object" && "id" in _highlights ? _highlights?.id : undefined} value={typeof _highlights === "object" && "value" in _highlights ? _highlights?.value : _highlights} /* default: ID0 */  isRaw={typeof _highlights === "object" && "isRaw" in _highlights && _highlights.isRaw ? true : undefined} />
        </Component>
      );
    };
    