import { member, Member, Component } from "../../core";
    
    export interface SlotGizmoButtonInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_worker?: member<any>;
_callback?: member<any>;
_gizmo?: member<any>;
_highlighted?: member<boolean>;
_buttonMaterial?: member<any>;
    }
    
    export function SlotGizmoButton(props: SlotGizmoButtonInput){
      const { id, persistentId, updateOrder, Enabled,
_worker,
_callback,
_gizmo,
_highlighted,
_buttonMaterial, } = props;
    
      return (
        <Component type="FrooxEngine.SlotGizmoButton" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Worker]`} name="_worker" id={typeof _worker === "object" && "id" in _worker ? _worker?.id : undefined} value={typeof _worker === "object" && "value" in _worker ? _worker?.value : _worker} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action]`} name="_callback" id={typeof _callback === "object" && "id" in _callback ? _callback?.id : undefined} value={typeof _callback === "object" && "value" in _callback ? _callback?.value : _callback} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.SlotGizmo]`} name="_gizmo" id={typeof _gizmo === "object" && "id" in _gizmo ? _gizmo?.id : undefined} value={typeof _gizmo === "object" && "value" in _gizmo ? _gizmo?.value : _gizmo} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_highlighted-ID" id={typeof _highlighted === "object" && "id" in _highlighted ? _highlighted?.id : undefined} value={typeof _highlighted === "object" && "value" in _highlighted ? _highlighted?.value : _highlighted} /* default: false */ idOnly />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.FresnelMaterial]`} name="_buttonMaterial" id={typeof _buttonMaterial === "object" && "id" in _buttonMaterial ? _buttonMaterial?.id : undefined} value={typeof _buttonMaterial === "object" && "value" in _buttonMaterial ? _buttonMaterial?.value : _buttonMaterial} /* default: ID0 */  />
        </Component>
      );
    };
    