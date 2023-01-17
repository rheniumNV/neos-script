import { member, Member, Component } from "../../../core";
    
    export interface BlackBodyColorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Temperature?: member<any>;
    }
    
    export function BlackBodyColor(props: BlackBodyColorInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Temperature, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Color.BlackBodyColor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Temperature" id={typeof Temperature === "object" && "id" in Temperature ? Temperature?.id : undefined} value={typeof Temperature === "object" && "value" in Temperature ? Temperature?.value : Temperature} /* default: ID0 */  />
        </Component>
      );
    };
    