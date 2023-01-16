import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface PlaybackSetNormalizedPositionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Target?: member<any>;
OnDone?: member<any>;
NormalizedPosition?: member<any>;
    }
    
    export function PlaybackSetNormalizedPosition(props: PlaybackSetNormalizedPositionInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Target,
OnDone,
NormalizedPosition, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Playback.PlaybackSetNormalizedPosition" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IPlayable]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDone" id={typeof OnDone === "object" && "id" in OnDone ? OnDone?.id : undefined} value={typeof OnDone === "object" && "value" in OnDone ? OnDone?.value : OnDone} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="NormalizedPosition" id={typeof NormalizedPosition === "object" && "id" in NormalizedPosition ? NormalizedPosition?.id : undefined} value={typeof NormalizedPosition === "object" && "value" in NormalizedPosition ? NormalizedPosition?.value : NormalizedPosition} /* default: ID0 */  />
        </Component>
      );
    };
    