import { member, Member, Component } from "../../../core";
    
    export interface RemoveAllLogixVisualsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
SearchRoot?: member<any>;
MoveUnder?: member<any>;
Traversal?: member<any>;
OnRemoved?: member<any>;
    }
    
    export function RemoveAllLogixVisuals(props: RemoveAllLogixVisualsInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
SearchRoot,
MoveUnder,
Traversal,
OnRemoved, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Meta.RemoveAllLogixVisuals" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="SearchRoot" id={typeof SearchRoot === "object" && "id" in SearchRoot ? SearchRoot?.id : undefined} value={typeof SearchRoot === "object" && "value" in SearchRoot ? SearchRoot?.value : SearchRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="MoveUnder" id={typeof MoveUnder === "object" && "id" in MoveUnder ? MoveUnder?.id : undefined} value={typeof MoveUnder === "object" && "value" in MoveUnder ? MoveUnder?.value : MoveUnder} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.LogiX.LogixTraversal]`} name="Traversal" id={typeof Traversal === "object" && "id" in Traversal ? Traversal?.id : undefined} value={typeof Traversal === "object" && "value" in Traversal ? Traversal?.value : Traversal} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnRemoved" id={typeof OnRemoved === "object" && "id" in OnRemoved ? OnRemoved?.id : undefined} value={typeof OnRemoved === "object" && "value" in OnRemoved ? OnRemoved?.value : OnRemoved} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    