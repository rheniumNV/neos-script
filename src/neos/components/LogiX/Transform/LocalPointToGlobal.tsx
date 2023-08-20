import { member, Member, Component } from "../../../core";
    
    export interface LocalPointToGlobalInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Instance?: member<any>;
LocalPoint?: member<any>;
    }
    
    export function LocalPointToGlobal(props: LocalPointToGlobalInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Instance,
LocalPoint, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.LocalPointToGlobal" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Instance" id={typeof Instance === "object" && "id" in Instance ? Instance?.id : undefined} value={typeof Instance === "object" && "value" in Instance ? Instance?.value : Instance} /* default: ID0 */  isRaw={typeof Instance === "object" && "isRaw" in Instance && Instance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="LocalPoint" id={typeof LocalPoint === "object" && "id" in LocalPoint ? LocalPoint?.id : undefined} value={typeof LocalPoint === "object" && "value" in LocalPoint ? LocalPoint?.value : LocalPoint} /* default: ID0 */  isRaw={typeof LocalPoint === "object" && "isRaw" in LocalPoint && LocalPoint.isRaw ? true : undefined} />
        </Component>
      );
    };
    