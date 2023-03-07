import { member, Member, Component } from "../../../core";
    
    export interface IfNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
True?: member<any>;
False?: member<any>;
Condition?: member<any>;
    }
    
    export function IfNode(props: IfNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
True,
False,
Condition, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.IfNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="True" id={typeof True === "object" && "id" in True ? True?.id : undefined} value={typeof True === "object" && "value" in True ? True?.value : True} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="False" id={typeof False === "object" && "id" in False ? False?.id : undefined} value={typeof False === "object" && "value" in False ? False?.value : False} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Condition" id={typeof Condition === "object" && "id" in Condition ? Condition?.id : undefined} value={typeof Condition === "object" && "value" in Condition ? Condition?.value : Condition} /* default: ID0 */  />
        </Component>
      );
    };
    