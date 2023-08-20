import { member, Member, Component } from "../../../core";
    
    export interface RevealAllLogixVisualsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
SearchRoot?: member<any>;
Traversal?: member<any>;
OnRevealed?: member<any>;
    }
    
    export function RevealAllLogixVisuals(props: RevealAllLogixVisualsInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
SearchRoot,
Traversal,
OnRevealed, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Meta.RevealAllLogixVisuals" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="SearchRoot" id={typeof SearchRoot === "object" && "id" in SearchRoot ? SearchRoot?.id : undefined} value={typeof SearchRoot === "object" && "value" in SearchRoot ? SearchRoot?.value : SearchRoot} /* default: ID0 */  isRaw={typeof SearchRoot === "object" && "isRaw" in SearchRoot && SearchRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.LogiX.LogixTraversal]`} name="Traversal" id={typeof Traversal === "object" && "id" in Traversal ? Traversal?.id : undefined} value={typeof Traversal === "object" && "value" in Traversal ? Traversal?.value : Traversal} /* default: ID0 */  isRaw={typeof Traversal === "object" && "isRaw" in Traversal && Traversal.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnRevealed" id={typeof OnRevealed === "object" && "id" in OnRevealed ? OnRevealed?.id : undefined} value={typeof OnRevealed === "object" && "value" in OnRevealed ? OnRevealed?.value : OnRevealed} /* default: FrooxEngine.WorldDelegate */  isRaw={typeof OnRevealed === "object" && "isRaw" in OnRevealed && OnRevealed.isRaw ? true : undefined} />
        </Component>
      );
    };
    