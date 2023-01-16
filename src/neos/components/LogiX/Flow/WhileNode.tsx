import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="LoopStart" id={typeof LoopStart === "object" && "id" in LoopStart ? LoopStart?.id : undefined} value={typeof LoopStart === "object" && "value" in LoopStart ? LoopStart?.value : LoopStart} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="LoopIteration" id={typeof LoopIteration === "object" && "id" in LoopIteration ? LoopIteration?.id : undefined} value={typeof LoopIteration === "object" && "value" in LoopIteration ? LoopIteration?.value : LoopIteration} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="LoopEnd" id={typeof LoopEnd === "object" && "id" in LoopEnd ? LoopEnd?.id : undefined} value={typeof LoopEnd === "object" && "value" in LoopEnd ? LoopEnd?.value : LoopEnd} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Condition" id={typeof Condition === "object" && "id" in Condition ? Condition?.id : undefined} value={typeof Condition === "object" && "value" in Condition ? Condition?.value : Condition} /* default: ID0 */  />
        </Component>
      );
    };
    