import { member, Member, Component } from "../../../core";
    
    export interface Construct_ColorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
R?: member<any>;
G?: member<any>;
B?: member<any>;
A?: member<any>;
    }
    
    export function Construct_Color(props: Construct_ColorInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
R,
G,
B,
A, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.Construct_Color" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="R" id={typeof R === "object" && "id" in R ? R?.id : undefined} value={typeof R === "object" && "value" in R ? R?.value : R} /* default: ID0 */  isRaw={typeof R === "object" && "isRaw" in R && R.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="G" id={typeof G === "object" && "id" in G ? G?.id : undefined} value={typeof G === "object" && "value" in G ? G?.value : G} /* default: ID0 */  isRaw={typeof G === "object" && "isRaw" in G && G.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="B" id={typeof B === "object" && "id" in B ? B?.id : undefined} value={typeof B === "object" && "value" in B ? B?.value : B} /* default: ID0 */  isRaw={typeof B === "object" && "isRaw" in B && B.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="A" id={typeof A === "object" && "id" in A ? A?.id : undefined} value={typeof A === "object" && "value" in A ? A?.value : A} /* default: ID0 */  isRaw={typeof A === "object" && "isRaw" in A && A.isRaw ? true : undefined} />
        </Component>
      );
    };
    