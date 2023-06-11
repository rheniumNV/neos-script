import { member, Member, Component } from "../../../core";
    
    export interface WhileNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
LoopStart?: member<any>;
LoopIteration?: member<any>;
LoopEnd?: member<any>;
Condition?: member<any>;
    }
    
    export function WhileNode(props: WhileNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
LoopStart,
LoopIteration,
LoopEnd,
Condition, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.WhileNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="LoopStart" id={typeof LoopStart === "object" && "id" in LoopStart ? LoopStart?.id : undefined} value={typeof LoopStart === "object" && "value" in LoopStart ? LoopStart?.value : LoopStart} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof LoopStart === "object" && "isRaw" in LoopStart && LoopStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="LoopIteration" id={typeof LoopIteration === "object" && "id" in LoopIteration ? LoopIteration?.id : undefined} value={typeof LoopIteration === "object" && "value" in LoopIteration ? LoopIteration?.value : LoopIteration} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof LoopIteration === "object" && "isRaw" in LoopIteration && LoopIteration.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="LoopEnd" id={typeof LoopEnd === "object" && "id" in LoopEnd ? LoopEnd?.id : undefined} value={typeof LoopEnd === "object" && "value" in LoopEnd ? LoopEnd?.value : LoopEnd} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof LoopEnd === "object" && "isRaw" in LoopEnd && LoopEnd.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Condition" id={typeof Condition === "object" && "id" in Condition ? Condition?.id : undefined} value={typeof Condition === "object" && "value" in Condition ? Condition?.value : Condition} /* default: ID0 */  isRaw={typeof Condition === "object" && "isRaw" in Condition && Condition.isRaw ? true : undefined} />
        </Component>
      );
    };
    