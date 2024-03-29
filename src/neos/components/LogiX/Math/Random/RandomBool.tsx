import { member, Member, Component } from "../../../../core";
    
    export interface RandomBoolInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Chance?: member<any>;
    }
    
    export function RandomBool(props: RandomBoolInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Chance, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.RandomBool" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Chance" id={typeof Chance === "object" && "id" in Chance ? Chance?.id : undefined} value={typeof Chance === "object" && "value" in Chance ? Chance?.value : Chance} /* default: ID0 */  isRaw={typeof Chance === "object" && "isRaw" in Chance && Chance.isRaw ? true : undefined} />
        </Component>
      );
    };
    