import { member, Member, Component } from "../../../core";
    
    export interface IsCharacterControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Collider?: member<any>;
    }
    
    export function IsCharacterController(props: IsCharacterControllerInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Collider, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Physics.IsCharacterController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.ICollider]`} name="Collider" id={typeof Collider === "object" && "id" in Collider ? Collider?.id : undefined} value={typeof Collider === "object" && "value" in Collider ? Collider?.value : Collider} /* default: ID0 */  />
        </Component>
      );
    };
    