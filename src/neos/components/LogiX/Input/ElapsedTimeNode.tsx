import { member, Member, Component } from "../../../core";
    
    export interface ElapsedTimeNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
OnReset?: member<any>;
    }
    
    export function ElapsedTimeNode(props: ElapsedTimeNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
OnReset, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Input.ElapsedTimeNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnReset" id={typeof OnReset === "object" && "id" in OnReset ? OnReset?.id : undefined} value={typeof OnReset === "object" && "value" in OnReset ? OnReset?.value : OnReset} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnReset === "object" && "isRaw" in OnReset && OnReset.isRaw ? true : undefined} />
        </Component>
      );
    };
    