import { member, Member, Component } from "../../../core";
    
    export interface PlaybackSetLoopInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Target?: member<any>;
OnDone?: member<any>;
Loop?: member<any>;
    }
    
    export function PlaybackSetLoop(props: PlaybackSetLoopInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Target,
OnDone,
Loop, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Playback.PlaybackSetLoop" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IPlayable]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDone" id={typeof OnDone === "object" && "id" in OnDone ? OnDone?.id : undefined} value={typeof OnDone === "object" && "value" in OnDone ? OnDone?.value : OnDone} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Loop" id={typeof Loop === "object" && "id" in Loop ? Loop?.id : undefined} value={typeof Loop === "object" && "value" in Loop ? Loop?.value : Loop} /* default: ID0 */  />
        </Component>
      );
    };
    