import { member, Member, Component } from "../../../core";
    
    export interface TweenValueNode_TInput {
        type:{T: {name: string},},
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
To?: member<any>;
From?: member<any>;
Duration?: member<any>;
CurvePreset?: member<any>;
ProportionalDuration?: member<any>;
Target?: member<any>;
OnStarted?: member<any>;
OnDone?: member<any>;
    }
    
    export function TweenValueNode_T(props: TweenValueNode_TInput){
      const {type:{T:{name: T},}, id, persistentId, updateOrder, Enabled,
_activeVisual,
To,
From,
Duration,
CurvePreset,
ProportionalDuration,
Target,
OnStarted,
OnDone, } = props;
    
      return (
        <Component type={`FrooxEngine.LogiX.Animation.Tweening.TweenValueNode\`1[${[T,]}]`} id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="To" id={typeof To === "object" && "id" in To ? To?.id : undefined} value={typeof To === "object" && "value" in To ? To?.value : To} /* default: null */  isRaw={typeof To === "object" && "isRaw" in To && To.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[${T}]`} name="From" id={typeof From === "object" && "id" in From ? From?.id : undefined} value={typeof From === "object" && "value" in From ? From?.value : From} /* default: null */  isRaw={typeof From === "object" && "isRaw" in From && From.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Duration" id={typeof Duration === "object" && "id" in Duration ? Duration?.id : undefined} value={typeof Duration === "object" && "value" in Duration ? Duration?.value : Duration} /* default: null */  isRaw={typeof Duration === "object" && "isRaw" in Duration && Duration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.CurvePreset]`} name="CurvePreset" id={typeof CurvePreset === "object" && "id" in CurvePreset ? CurvePreset?.id : undefined} value={typeof CurvePreset === "object" && "value" in CurvePreset ? CurvePreset?.value : CurvePreset} /* default: null */  isRaw={typeof CurvePreset === "object" && "isRaw" in CurvePreset && CurvePreset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="ProportionalDuration" id={typeof ProportionalDuration === "object" && "id" in ProportionalDuration ? ProportionalDuration?.id : undefined} value={typeof ProportionalDuration === "object" && "value" in ProportionalDuration ? ProportionalDuration?.value : ProportionalDuration} /* default: null */  isRaw={typeof ProportionalDuration === "object" && "isRaw" in ProportionalDuration && ProportionalDuration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IField\`1[${T}]]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: null */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnStarted" id={typeof OnStarted === "object" && "id" in OnStarted ? OnStarted?.id : undefined} value={typeof OnStarted === "object" && "value" in OnStarted ? OnStarted?.value : OnStarted} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnStarted === "object" && "isRaw" in OnStarted && OnStarted.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnDone" id={typeof OnDone === "object" && "id" in OnDone ? OnDone?.id : undefined} value={typeof OnDone === "object" && "value" in OnDone ? OnDone?.value : OnDone} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnDone === "object" && "isRaw" in OnDone && OnDone.isRaw ? true : undefined} />
        </Component>
      );
    };
    