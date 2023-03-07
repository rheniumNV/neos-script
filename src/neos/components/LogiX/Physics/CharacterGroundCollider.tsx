import { member, Member, Component } from "../../../core";
    
    export interface CharacterGroundColliderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Character?: member<any>;
    }
    
    export function CharacterGroundCollider(props: CharacterGroundColliderInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Character, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Physics.CharacterGroundCollider" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.CharacterController]`} name="Character" id={typeof Character === "object" && "id" in Character ? Character?.id : undefined} value={typeof Character === "object" && "value" in Character ? Character?.value : Character} /* default: ID0 */  />
        </Component>
      );
    };
    