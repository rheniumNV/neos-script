import { member, Member, Component } from "../../../core";
    
    export interface EndUndoBatchInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
OnEnd?: member<any>;
    }
    
    export function EndUndoBatch(props: EndUndoBatchInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
OnEnd, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Undo.EndUndoBatch" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnEnd" id={typeof OnEnd === "object" && "id" in OnEnd ? OnEnd?.id : undefined} value={typeof OnEnd === "object" && "value" in OnEnd ? OnEnd?.value : OnEnd} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnEnd === "object" && "isRaw" in OnEnd && OnEnd.isRaw ? true : undefined} />
        </Component>
      );
    };
    