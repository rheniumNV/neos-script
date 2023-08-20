import { member, Member, Component } from "../../core";
    
    export interface LaserInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_material?: member<any>;
_rayDriver?: member<any>;
_meshRenderer?: member<any>;
    }
    
    export function Laser(props: LaserInput){
      const { id, persistentId, updateOrder, Enabled,
_material,
_rayDriver,
_meshRenderer, } = props;
    
      return (
        <Component type="FrooxEngine.Laser" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.PBS_RimMetallic]`} name="_material" id={typeof _material === "object" && "id" in _material ? _material?.id : undefined} value={typeof _material === "object" && "value" in _material ? _material?.value : _material} /* default: ID0 */  isRaw={typeof _material === "object" && "isRaw" in _material && _material.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.RayDriver]`} name="_rayDriver" id={typeof _rayDriver === "object" && "id" in _rayDriver ? _rayDriver?.id : undefined} value={typeof _rayDriver === "object" && "value" in _rayDriver ? _rayDriver?.value : _rayDriver} /* default: ID0 */  isRaw={typeof _rayDriver === "object" && "isRaw" in _rayDriver && _rayDriver.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.MeshRenderer]`} name="_meshRenderer" id={typeof _meshRenderer === "object" && "id" in _meshRenderer ? _meshRenderer?.id : undefined} value={typeof _meshRenderer === "object" && "value" in _meshRenderer ? _meshRenderer?.value : _meshRenderer} /* default: ID0 */  isRaw={typeof _meshRenderer === "object" && "isRaw" in _meshRenderer && _meshRenderer.isRaw ? true : undefined} />
        </Component>
      );
    };
    