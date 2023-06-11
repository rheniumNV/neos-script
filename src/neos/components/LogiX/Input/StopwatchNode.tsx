import { member, Member, Component } from "../../../core";
    
    export interface StopwatchNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
OnStart?: member<any>;
OnStop?: member<any>;
OnReset?: member<any>;
    }
    
    export function StopwatchNode(props: StopwatchNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
OnStart,
OnStop,
OnReset, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Input.StopwatchNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnStart" id={typeof OnStart === "object" && "id" in OnStart ? OnStart?.id : undefined} value={typeof OnStart === "object" && "value" in OnStart ? OnStart?.value : OnStart} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnStart === "object" && "isRaw" in OnStart && OnStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnStop" id={typeof OnStop === "object" && "id" in OnStop ? OnStop?.id : undefined} value={typeof OnStop === "object" && "value" in OnStop ? OnStop?.value : OnStop} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnStop === "object" && "isRaw" in OnStop && OnStop.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnReset" id={typeof OnReset === "object" && "id" in OnReset ? OnReset?.id : undefined} value={typeof OnReset === "object" && "value" in OnReset ? OnReset?.value : OnReset} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnReset === "object" && "isRaw" in OnReset && OnReset.isRaw ? true : undefined} />
        </Component>
      );
    };
    