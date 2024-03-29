import { member, Member, Component } from "../../../core";
    
    export interface PlaybackWaitInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Target?: member<any>;
OnWaitBegin?: member<any>;
OnFinishedWaiting?: member<any>;
    }
    
    export function PlaybackWait(props: PlaybackWaitInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Target,
OnWaitBegin,
OnFinishedWaiting, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Playback.PlaybackWait" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IPlayable]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnWaitBegin" id={typeof OnWaitBegin === "object" && "id" in OnWaitBegin ? OnWaitBegin?.id : undefined} value={typeof OnWaitBegin === "object" && "value" in OnWaitBegin ? OnWaitBegin?.value : OnWaitBegin} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnWaitBegin === "object" && "isRaw" in OnWaitBegin && OnWaitBegin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnFinishedWaiting" id={typeof OnFinishedWaiting === "object" && "id" in OnFinishedWaiting ? OnFinishedWaiting?.id : undefined} value={typeof OnFinishedWaiting === "object" && "value" in OnFinishedWaiting ? OnFinishedWaiting?.value : OnFinishedWaiting} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnFinishedWaiting === "object" && "isRaw" in OnFinishedWaiting && OnFinishedWaiting.isRaw ? true : undefined} />
        </Component>
      );
    };
    