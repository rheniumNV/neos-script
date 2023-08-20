import { member, Member, Component } from "../../../../core";
    
    export interface BooleanCounterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Booleans?: member<any>;
    }
    
    export function BooleanCounter(props: BooleanCounterInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Booleans, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Binary.BooleanCounter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.LogiX.Input\`1[System.Boolean]]`} name="Booleans" id={typeof Booleans === "object" && "id" in Booleans ? Booleans?.id : undefined} value={typeof Booleans === "object" && "value" in Booleans ? Booleans?.value : Booleans} /* default: FrooxEngine.SyncList`1[FrooxEngine.LogiX.Input`1[System.Boolean]] */  isRaw={typeof Booleans === "object" && "isRaw" in Booleans && Booleans.isRaw ? true : undefined} />
        </Component>
      );
    };
    