import { member, Member, Component } from "../../../core";
    
    export interface ForNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
LoopStart?: member<any>;
LoopIteration?: member<any>;
LoopEnd?: member<any>;
Count?: member<any>;
Reverse?: member<any>;
    }
    
    export function ForNode(props: ForNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
LoopStart,
LoopIteration,
LoopEnd,
Count,
Reverse, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.ForNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="LoopStart" id={typeof LoopStart === "object" && "id" in LoopStart ? LoopStart?.id : undefined} value={typeof LoopStart === "object" && "value" in LoopStart ? LoopStart?.value : LoopStart} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof LoopStart === "object" && "isRaw" in LoopStart && LoopStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="LoopIteration" id={typeof LoopIteration === "object" && "id" in LoopIteration ? LoopIteration?.id : undefined} value={typeof LoopIteration === "object" && "value" in LoopIteration ? LoopIteration?.value : LoopIteration} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof LoopIteration === "object" && "isRaw" in LoopIteration && LoopIteration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="LoopEnd" id={typeof LoopEnd === "object" && "id" in LoopEnd ? LoopEnd?.id : undefined} value={typeof LoopEnd === "object" && "value" in LoopEnd ? LoopEnd?.value : LoopEnd} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof LoopEnd === "object" && "isRaw" in LoopEnd && LoopEnd.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Count" id={typeof Count === "object" && "id" in Count ? Count?.id : undefined} value={typeof Count === "object" && "value" in Count ? Count?.value : Count} /* default: ID0 */  isRaw={typeof Count === "object" && "isRaw" in Count && Count.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Reverse" id={typeof Reverse === "object" && "id" in Reverse ? Reverse?.id : undefined} value={typeof Reverse === "object" && "value" in Reverse ? Reverse?.value : Reverse} /* default: ID0 */  isRaw={typeof Reverse === "object" && "isRaw" in Reverse && Reverse.isRaw ? true : undefined} />
        </Component>
      );
    };
    