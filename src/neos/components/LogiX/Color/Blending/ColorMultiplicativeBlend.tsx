import { member, Member, Component } from "../../../../core";
    
    export interface ColorMultiplicativeBlendInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Source?: member<any>;
Destination?: member<any>;
    }
    
    export function ColorMultiplicativeBlend(props: ColorMultiplicativeBlendInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Source,
Destination, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Color.ColorMultiplicativeBlend" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.color]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.color]`} name="Destination" id={typeof Destination === "object" && "id" in Destination ? Destination?.id : undefined} value={typeof Destination === "object" && "value" in Destination ? Destination?.value : Destination} /* default: ID0 */  />
        </Component>
      );
    };
    