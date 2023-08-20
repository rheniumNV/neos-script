import { member, Member, Component } from "../../../core";
    
    export interface GlobalRotationToLocalInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Instance?: member<any>;
GlobalRotation?: member<[number, number, number, number]>;
    }
    
    export function GlobalRotationToLocal(props: GlobalRotationToLocalInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Instance,
GlobalRotation, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.GlobalRotationToLocal" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Instance" id={typeof Instance === "object" && "id" in Instance ? Instance?.id : undefined} value={typeof Instance === "object" && "value" in Instance ? Instance?.value : Instance} /* default: ID0 */  isRaw={typeof Instance === "object" && "isRaw" in Instance && Instance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.floatQ]`} name="GlobalRotation" id={typeof GlobalRotation === "object" && "id" in GlobalRotation ? GlobalRotation?.id : undefined} value={typeof GlobalRotation === "object" && "value" in GlobalRotation ? GlobalRotation?.value : GlobalRotation} /* default: ID0 */  isRaw={typeof GlobalRotation === "object" && "isRaw" in GlobalRotation && GlobalRotation.isRaw ? true : undefined} />
        </Component>
      );
    };
    