import { member, Member, Component } from "../../../core";
    
    export interface Div_Color_FloatInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
A?: member<any>;
B?: member<any>;
    }
    
    export function Div_Color_Float(props: Div_Color_FloatInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
A,
B, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.Div_Color_Float" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.color]`} name="A" id={typeof A === "object" && "id" in A ? A?.id : undefined} value={typeof A === "object" && "value" in A ? A?.value : A} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="B" id={typeof B === "object" && "id" in B ? B?.id : undefined} value={typeof B === "object" && "value" in B ? B?.value : B} /* default: ID0 */  />
        </Component>
      );
    };
    