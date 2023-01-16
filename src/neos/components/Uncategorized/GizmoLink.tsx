import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface GizmoLinkInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_worker?: member<any>;
_gizmo?: member<any>;
_type?: member<any>;
    }
    
    export function GizmoLink(props: GizmoLinkInput){
      const { id, persistentId, updateOrder, Enabled,
_worker,
_gizmo,
_type, } = props;
    
      return (
        <Component type="FrooxEngine.GizmoLink" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Worker]`} name="_worker" id={typeof _worker === "object" && "id" in _worker ? _worker?.id : undefined} value={typeof _worker === "object" && "value" in _worker ? _worker?.value : _worker} /* default: ID0 */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IComponentGizmo]`} name="_gizmo" id={typeof _gizmo === "object" && "id" in _gizmo ? _gizmo?.id : undefined} value={typeof _gizmo === "object" && "value" in _gizmo ? _gizmo?.value : _gizmo} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncType`} name="_type" id={typeof _type === "object" && "id" in _type ? _type?.id : undefined} value={typeof _type === "object" && "value" in _type ? _type?.value : _type} /* default: <i>null</i> */  />
        </Component>
      );
    };
    