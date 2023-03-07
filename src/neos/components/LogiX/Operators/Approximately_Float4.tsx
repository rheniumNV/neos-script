import { member, Member, Component } from "../../../core";
    
    export interface Approximately_Float4Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
A?: member<any>;
B?: member<any>;
Epsilon?: member<any>;
    }
    
    export function Approximately_Float4(props: Approximately_Float4Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
A,
B,
Epsilon, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.Approximately_Float4" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float4]`} name="A" id={typeof A === "object" && "id" in A ? A?.id : undefined} value={typeof A === "object" && "value" in A ? A?.value : A} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float4]`} name="B" id={typeof B === "object" && "id" in B ? B?.id : undefined} value={typeof B === "object" && "value" in B ? B?.value : B} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Epsilon" id={typeof Epsilon === "object" && "id" in Epsilon ? Epsilon?.id : undefined} value={typeof Epsilon === "object" && "value" in Epsilon ? Epsilon?.value : Epsilon} /* default: ID0 */  />
        </Component>
      );
    };
    