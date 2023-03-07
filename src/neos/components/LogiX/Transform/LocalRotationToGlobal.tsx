import { member, Member, Component } from "../../../core";
    
    export interface LocalRotationToGlobalInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Instance?: member<any>;
LocalRotation?: member<[number, number, number, number]>;
    }
    
    export function LocalRotationToGlobal(props: LocalRotationToGlobalInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Instance,
LocalRotation, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.LocalRotationToGlobal" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Instance" id={typeof Instance === "object" && "id" in Instance ? Instance?.id : undefined} value={typeof Instance === "object" && "value" in Instance ? Instance?.value : Instance} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.floatQ]`} name="LocalRotation" id={typeof LocalRotation === "object" && "id" in LocalRotation ? LocalRotation?.id : undefined} value={typeof LocalRotation === "object" && "value" in LocalRotation ? LocalRotation?.value : LocalRotation} /* default: ID0 */  />
        </Component>
      );
    };
    