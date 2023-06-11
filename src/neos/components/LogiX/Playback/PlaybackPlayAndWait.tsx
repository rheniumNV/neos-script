import { member, Member, Component } from "../../../core";
    
    export interface PlaybackPlayAndWaitInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Target?: member<any>;
OnStarted?: member<any>;
OnFinishedPlaying?: member<any>;
    }
    
    export function PlaybackPlayAndWait(props: PlaybackPlayAndWaitInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Target,
OnStarted,
OnFinishedPlaying, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Playback.PlaybackPlayAndWait" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IPlayable]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnStarted" id={typeof OnStarted === "object" && "id" in OnStarted ? OnStarted?.id : undefined} value={typeof OnStarted === "object" && "value" in OnStarted ? OnStarted?.value : OnStarted} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnStarted === "object" && "isRaw" in OnStarted && OnStarted.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnFinishedPlaying" id={typeof OnFinishedPlaying === "object" && "id" in OnFinishedPlaying ? OnFinishedPlaying?.id : undefined} value={typeof OnFinishedPlaying === "object" && "value" in OnFinishedPlaying ? OnFinishedPlaying?.value : OnFinishedPlaying} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnFinishedPlaying === "object" && "isRaw" in OnFinishedPlaying && OnFinishedPlaying.isRaw ? true : undefined} />
        </Component>
      );
    };
    