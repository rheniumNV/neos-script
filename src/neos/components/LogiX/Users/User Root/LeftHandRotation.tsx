import { member, Member, Component } from "../../../../core";
    
    export interface LeftHandRotationInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
UserRoot?: member<any>;
    }
    
    export function LeftHandRotation(props: LeftHandRotationInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
UserRoot, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.LeftHandRotation" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.UserRoot]`} name="UserRoot" id={typeof UserRoot === "object" && "id" in UserRoot ? UserRoot?.id : undefined} value={typeof UserRoot === "object" && "value" in UserRoot ? UserRoot?.value : UserRoot} /* default: ID0 */  />
        </Component>
      );
    };
    