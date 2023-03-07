import { member, Member, Component } from "../../core";
    
    export interface BoxGizmoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetSlot?: member<any>;
BoxCenterSpace?: member<any>;
BoxSizeSpace?: member<any>;
BoxSize?: member<any>;
BoxCenter?: member<any>;
LockOffset?: member<boolean>;
_vertices?: member<any>;
_edges?: member<any>;
_faces?: member<any>;
_sphereColliderRadii?: member<any>;
_material?: member<any>;
_handleSphere?: member<any>;
_visualRoot?: member<any>;
_visualPosition?: member<any>;
_visualRotation?: member<any>;
_visualScale?: member<any>;
_tubeBox?: member<any>;
    }
    
    export function BoxGizmo(props: BoxGizmoInput){
      const { id, persistentId, updateOrder, Enabled,
TargetSlot,
BoxCenterSpace,
BoxSizeSpace,
BoxSize,
BoxCenter,
LockOffset,
_vertices,
_edges,
_faces,
_sphereColliderRadii,
_material,
_handleSphere,
_visualRoot,
_visualPosition,
_visualRotation,
_visualScale,
_tubeBox, } = props;
    
      return (
        <Component type="FrooxEngine.BoxGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="TargetSlot" id={typeof TargetSlot === "object" && "id" in TargetSlot ? TargetSlot?.id : undefined} value={typeof TargetSlot === "object" && "value" in TargetSlot ? TargetSlot?.value : TargetSlot} /* default: ID0 */  />
<Member type={`FrooxEngine.RootSpace`} name="BoxCenterSpace" id={typeof BoxCenterSpace === "object" && "id" in BoxCenterSpace ? BoxCenterSpace?.id : undefined} value={typeof BoxCenterSpace === "object" && "value" in BoxCenterSpace ? BoxCenterSpace?.value : BoxCenterSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.RootSpace`} name="BoxSizeSpace" id={typeof BoxSizeSpace === "object" && "id" in BoxSizeSpace ? BoxSizeSpace?.id : undefined} value={typeof BoxSizeSpace === "object" && "value" in BoxSizeSpace ? BoxSizeSpace?.value : BoxSizeSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[BaseX.float3]]`} name="BoxSize" id={typeof BoxSize === "object" && "id" in BoxSize ? BoxSize?.id : undefined} value={typeof BoxSize === "object" && "value" in BoxSize ? BoxSize?.value : BoxSize} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[BaseX.float3]]`} name="BoxCenter" id={typeof BoxCenter === "object" && "id" in BoxCenter ? BoxCenter?.id : undefined} value={typeof BoxCenter === "object" && "value" in BoxCenter ? BoxCenter?.value : BoxCenter} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="LockOffset" id={typeof LockOffset === "object" && "id" in LockOffset ? LockOffset?.id : undefined} value={typeof LockOffset === "object" && "value" in LockOffset ? LockOffset?.value : LockOffset} /* default: false */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.FieldDrive\`1[BaseX.float3]]`} name="_vertices" id={typeof _vertices === "object" && "id" in _vertices ? _vertices?.id : undefined} value={typeof _vertices === "object" && "value" in _vertices ? _vertices?.value : _vertices} /* default: FrooxEngine.SyncList`1[FrooxEngine.FieldDrive`1[BaseX.float3]] */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.FieldDrive\`1[BaseX.float3]]`} name="_edges" id={typeof _edges === "object" && "id" in _edges ? _edges?.id : undefined} value={typeof _edges === "object" && "value" in _edges ? _edges?.value : _edges} /* default: FrooxEngine.SyncList`1[FrooxEngine.FieldDrive`1[BaseX.float3]] */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.FieldDrive\`1[BaseX.float3]]`} name="_faces" id={typeof _faces === "object" && "id" in _faces ? _faces?.id : undefined} value={typeof _faces === "object" && "value" in _faces ? _faces?.value : _faces} /* default: FrooxEngine.SyncList`1[FrooxEngine.FieldDrive`1[BaseX.float3]] */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.FieldDrive\`1[System.Single]]`} name="_sphereColliderRadii" id={typeof _sphereColliderRadii === "object" && "id" in _sphereColliderRadii ? _sphereColliderRadii?.id : undefined} value={typeof _sphereColliderRadii === "object" && "value" in _sphereColliderRadii ? _sphereColliderRadii?.value : _sphereColliderRadii} /* default: FrooxEngine.SyncList`1[FrooxEngine.FieldDrive`1[System.Single]] */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.OverlayFresnelMaterial]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IcoSphereMesh]`} name="_handleSphere" id={typeof _handleSphere === "object" && "id" in _handleSphere ? _handleSphere?.id : undefined} value={typeof _handleSphere === "object" && "value" in _handleSphere ? _handleSphere?.value : _handleSphere} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_visualRoot" id={typeof _visualRoot === "object" && "id" in _visualRoot ? _visualRoot?.id : undefined} value={typeof _visualRoot === "object" && "value" in _visualRoot ? _visualRoot?.value : _visualRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_visualPosition" id={typeof _visualPosition === "object" && "id" in _visualPosition ? _visualPosition?.id : undefined} value={typeof _visualPosition === "object" && "value" in _visualPosition ? _visualPosition?.value : _visualPosition} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_visualRotation" id={typeof _visualRotation === "object" && "id" in _visualRotation ? _visualRotation?.id : undefined} value={typeof _visualRotation === "object" && "value" in _visualRotation ? _visualRotation?.value : _visualRotation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_visualScale" id={typeof _visualScale === "object" && "id" in _visualScale ? _visualScale?.id : undefined} value={typeof _visualScale === "object" && "value" in _visualScale ? _visualScale?.value : _visualScale} /* default: ID0 */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.TubeBoxMesh]`} name="_tubeBox" id={typeof _tubeBox === "object" && "id" in _tubeBox ? _tubeBox?.id : undefined} value={typeof _tubeBox === "object" && "value" in _tubeBox ? _tubeBox?.value : _tubeBox} /* default: ID0 */  />
        </Component>
      );
    };
    