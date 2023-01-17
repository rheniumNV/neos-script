import { member, Member, Component } from "../../../core";
    
    export interface BodyNodeSlotInChildrenInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Source?: member<any>;
Node?: member<any>;
    }
    
    export function BodyNodeSlotInChildren(props: BodyNodeSlotInChildrenInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Source,
Node, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Avatar.BodyNodeSlotInChildren" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Slot]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.BodyNode]`} name="Node" id={typeof Node === "object" && "id" in Node ? Node?.id : undefined} value={typeof Node === "object" && "value" in Node ? Node?.value : Node} /* default: ID0 */  />
        </Component>
      );
    };
    