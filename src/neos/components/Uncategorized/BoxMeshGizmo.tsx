import { member, Member, Component } from "../../core";
    
    export interface BoxMeshGizmoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_target?: member<any>;
_cubeGizmo?: member<any>;
    }
    
    export function BoxMeshGizmo(props: BoxMeshGizmoInput){
      const { id, persistentId, updateOrder, Enabled,
_target,
_cubeGizmo, } = props;
    
      return (
        <Component type="FrooxEngine.BoxMeshGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.BoxMesh]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  isRaw={typeof _target === "object" && "isRaw" in _target && _target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.BoxGizmo]`} name="_cubeGizmo" id={typeof _cubeGizmo === "object" && "id" in _cubeGizmo ? _cubeGizmo?.id : undefined} value={typeof _cubeGizmo === "object" && "value" in _cubeGizmo ? _cubeGizmo?.value : _cubeGizmo} /* default: ID0 */  isRaw={typeof _cubeGizmo === "object" && "isRaw" in _cubeGizmo && _cubeGizmo.isRaw ? true : undefined} />
        </Component>
      );
    };
    