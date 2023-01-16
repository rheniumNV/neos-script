import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface RotationGizmoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_xGizmo?: member<any>;
_yGizmo?: member<any>;
_zGizmo?: member<any>;
    }
    
    export function RotationGizmo(props: RotationGizmoInput){
      const { id, persistentId, updateOrder, Enabled,
_xGizmo,
_yGizmo,
_zGizmo, } = props;
    
      return (
        <Component type="FrooxEngine.RotationGizmo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AxisRotationGizmo]`} name="_xGizmo" id={typeof _xGizmo === "object" && "id" in _xGizmo ? _xGizmo?.id : undefined} value={typeof _xGizmo === "object" && "value" in _xGizmo ? _xGizmo?.value : _xGizmo} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AxisRotationGizmo]`} name="_yGizmo" id={typeof _yGizmo === "object" && "id" in _yGizmo ? _yGizmo?.id : undefined} value={typeof _yGizmo === "object" && "value" in _yGizmo ? _yGizmo?.value : _yGizmo} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AxisRotationGizmo]`} name="_zGizmo" id={typeof _zGizmo === "object" && "id" in _zGizmo ? _zGizmo?.id : undefined} value={typeof _zGizmo === "object" && "value" in _zGizmo ? _zGizmo?.value : _zGizmo} /* default: ID0 */  />
        </Component>
      );
    };
    