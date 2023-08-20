import { member, Member, Component } from "../../../core";
    
    export interface SampleAnimationTrack_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Animation?: member<any>;
TrackIndex?: member<any>;
Time?: member<any>;
    }
    
    export function SampleAnimationTrack_T(props: SampleAnimationTrack_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
Animation,
TrackIndex,
Time, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Assets.SampleAnimationTrack\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Animation]`} name="Animation" id={typeof Animation === "object" && "id" in Animation ? Animation?.id : undefined} value={typeof Animation === "object" && "value" in Animation ? Animation?.value : Animation} /* default: null */  isRaw={typeof Animation === "object" && "isRaw" in Animation && Animation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="TrackIndex" id={typeof TrackIndex === "object" && "id" in TrackIndex ? TrackIndex?.id : undefined} value={typeof TrackIndex === "object" && "value" in TrackIndex ? TrackIndex?.value : TrackIndex} /* default: null */  isRaw={typeof TrackIndex === "object" && "isRaw" in TrackIndex && TrackIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Time" id={typeof Time === "object" && "id" in Time ? Time?.id : undefined} value={typeof Time === "object" && "value" in Time ? Time?.value : Time} /* default: null */  isRaw={typeof Time === "object" && "isRaw" in Time && Time.isRaw ? true : undefined} />
        </Component>
      );
    };
    