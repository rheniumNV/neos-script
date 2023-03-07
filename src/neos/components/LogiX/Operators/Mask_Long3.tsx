import { member, Member, Component } from "../../../core";
    
    export interface Mask_Long3Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Ontrue?: member<any>;
Onfalse?: member<any>;
Mask?: member<any>;
    }
    
    export function Mask_Long3(props: Mask_Long3Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Ontrue,
Onfalse,
Mask, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.Mask_Long3" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.long3]`} name="Ontrue" id={typeof Ontrue === "object" && "id" in Ontrue ? Ontrue?.id : undefined} value={typeof Ontrue === "object" && "value" in Ontrue ? Ontrue?.value : Ontrue} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.long3]`} name="Onfalse" id={typeof Onfalse === "object" && "id" in Onfalse ? Onfalse?.id : undefined} value={typeof Onfalse === "object" && "value" in Onfalse ? Onfalse?.value : Onfalse} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.bool3]`} name="Mask" id={typeof Mask === "object" && "id" in Mask ? Mask?.id : undefined} value={typeof Mask === "object" && "value" in Mask ? Mask?.value : Mask} /* default: ID0 */  />
        </Component>
      );
    };
    