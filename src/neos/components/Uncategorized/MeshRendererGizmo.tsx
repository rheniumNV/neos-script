import { member, Member, Component } from "../../core";
    
    export interface MeshRendererGizmoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_target?: member<any>;
_meshCollider?: member<any>;
    }
    
    export function MeshRendererGizmo(props: MeshRendererGizmoInput){
      const { id, persistentId, updateOrder, Enabled,
_target,
_meshCollider, } = props;
    
      return (
        <Component type="FrooxEngine.MeshRendererGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.MeshRenderer]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  isRaw={typeof _target === "object" && "isRaw" in _target && _target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.MeshCollider]`} name="_meshCollider" id={typeof _meshCollider === "object" && "id" in _meshCollider ? _meshCollider?.id : undefined} value={typeof _meshCollider === "object" && "value" in _meshCollider ? _meshCollider?.value : _meshCollider} /* default: ID0 */  isRaw={typeof _meshCollider === "object" && "isRaw" in _meshCollider && _meshCollider.isRaw ? true : undefined} />
        </Component>
      );
    };
    