import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ProjectedRectSlotDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_position?: member<any>;
Target?: member<any>;
_rotation?: member<any>;
_scale?: member<any>;
_originalParent?: member<any>;
_lastTarget?: member<any>;
    }
    
    export function ProjectedRectSlotDriver(props: ProjectedRectSlotDriverInput){
      const { id, persistentId, updateOrder, Enabled,
_position,
Target,
_rotation,
_scale,
_originalParent,
_lastTarget, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.ProjectedRectSlotDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_position" id={typeof _position === "object" && "id" in _position ? _position?.id : undefined} value={typeof _position === "object" && "value" in _position ? _position?.value : _position} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="_rotation" id={typeof _rotation === "object" && "id" in _rotation ? _rotation?.id : undefined} value={typeof _rotation === "object" && "value" in _rotation ? _rotation?.value : _rotation} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="_scale" id={typeof _scale === "object" && "id" in _scale ? _scale?.id : undefined} value={typeof _scale === "object" && "value" in _scale ? _scale?.value : _scale} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_originalParent" id={typeof _originalParent === "object" && "id" in _originalParent ? _originalParent?.id : undefined} value={typeof _originalParent === "object" && "value" in _originalParent ? _originalParent?.value : _originalParent} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_lastTarget" id={typeof _lastTarget === "object" && "id" in _lastTarget ? _lastTarget?.id : undefined} value={typeof _lastTarget === "object" && "value" in _lastTarget ? _lastTarget?.value : _lastTarget} /* default: ID0 */  />
        </Component>
      );
    };
    