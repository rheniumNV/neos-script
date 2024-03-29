import { member, Member, Component } from "../../../core";
    
    export interface GlobalScaleToLocalInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Instance?: member<any>;
GlobalScale?: member<any>;
    }
    
    export function GlobalScaleToLocal(props: GlobalScaleToLocalInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Instance,
GlobalScale, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.GlobalScaleToLocal" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Instance" id={typeof Instance === "object" && "id" in Instance ? Instance?.id : undefined} value={typeof Instance === "object" && "value" in Instance ? Instance?.value : Instance} /* default: ID0 */  isRaw={typeof Instance === "object" && "isRaw" in Instance && Instance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="GlobalScale" id={typeof GlobalScale === "object" && "id" in GlobalScale ? GlobalScale?.id : undefined} value={typeof GlobalScale === "object" && "value" in GlobalScale ? GlobalScale?.value : GlobalScale} /* default: ID0 */  isRaw={typeof GlobalScale === "object" && "isRaw" in GlobalScale && GlobalScale.isRaw ? true : undefined} />
        </Component>
      );
    };
    