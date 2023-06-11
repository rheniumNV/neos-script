import { member, Member, Component } from "../../core";
    
    export interface MaterialGizmoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_target?: member<any>;
_inspectorRoot?: member<any>;
    }
    
    export function MaterialGizmo(props: MaterialGizmoInput){
      const { id, persistentId, updateOrder, Enabled,
_target,
_inspectorRoot, } = props;
    
      return (
        <Component type="FrooxEngine.MaterialGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.MaterialProvider]`} name="_target" id={typeof _target === "object" && "id" in _target ? _target?.id : undefined} value={typeof _target === "object" && "value" in _target ? _target?.value : _target} /* default: ID0 */  isRaw={typeof _target === "object" && "isRaw" in _target && _target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.Slot]`} name="_inspectorRoot" id={typeof _inspectorRoot === "object" && "id" in _inspectorRoot ? _inspectorRoot?.id : undefined} value={typeof _inspectorRoot === "object" && "value" in _inspectorRoot ? _inspectorRoot?.value : _inspectorRoot} /* default: ID0 */  isRaw={typeof _inspectorRoot === "object" && "isRaw" in _inspectorRoot && _inspectorRoot.isRaw ? true : undefined} />
        </Component>
      );
    };
    