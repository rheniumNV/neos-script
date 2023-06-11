import { member, Member, Component } from "../../core";
    
    export interface DynamicBoneSphereColliderGizmoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_target?: member<any>;
_sphereGizmo?: member<any>;
    }
    
    export function DynamicBoneSphereColliderGizmo(props: DynamicBoneSphereColliderGizmoInput){
      const { id, persistentId, updateOrder, Enabled,
_target,
_sphereGizmo, } = props;
    
      return (
        <Component type="FrooxEngine.DynamicBoneSphereColliderGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.DynamicBoneSphereCollider]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  isRaw={typeof _target === "object" && "isRaw" in _target && _target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SphereGizmo]`} name="_sphereGizmo" id={typeof _sphereGizmo === "object" && "id" in _sphereGizmo ? _sphereGizmo?.id : undefined} value={typeof _sphereGizmo === "object" && "value" in _sphereGizmo ? _sphereGizmo?.value : _sphereGizmo} /* default: ID0 */  isRaw={typeof _sphereGizmo === "object" && "isRaw" in _sphereGizmo && _sphereGizmo.isRaw ? true : undefined} />
        </Component>
      );
    };
    