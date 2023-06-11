import { member, Member, Component } from "../../core";
    
    export interface EyeRotationDriverGizmoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_target?: member<any>;
_vectorGizmos?: member<any>;
_coneGizmos?: member<any>;
    }
    
    export function EyeRotationDriverGizmo(props: EyeRotationDriverGizmoInput){
      const { id, persistentId, updateOrder, Enabled,
_target,
_vectorGizmos,
_coneGizmos, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.EyeRotationDriverGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.CommonAvatar.EyeRotationDriver]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  isRaw={typeof _target === "object" && "isRaw" in _target && _target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.VectorGizmo]`} name="_vectorGizmos" id={typeof _vectorGizmos === "object" && "id" in _vectorGizmos ? _vectorGizmos?.id : undefined} value={typeof _vectorGizmos === "object" && "value" in _vectorGizmos ? _vectorGizmos?.value : _vectorGizmos} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.VectorGizmo] */  isRaw={typeof _vectorGizmos === "object" && "isRaw" in _vectorGizmos && _vectorGizmos.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.ConeGizmo]`} name="_coneGizmos" id={typeof _coneGizmos === "object" && "id" in _coneGizmos ? _coneGizmos?.id : undefined} value={typeof _coneGizmos === "object" && "value" in _coneGizmos ? _coneGizmos?.value : _coneGizmos} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.ConeGizmo] */  isRaw={typeof _coneGizmos === "object" && "isRaw" in _coneGizmos && _coneGizmos.isRaw ? true : undefined} />
        </Component>
      );
    };
    