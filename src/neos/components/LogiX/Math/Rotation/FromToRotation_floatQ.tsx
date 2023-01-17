import { member, Member, Component } from "../../../../core";
    
    export interface FromToRotation_floatQInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
From?: member<any>;
To?: member<any>;
    }
    
    export function FromToRotation_floatQ(props: FromToRotation_floatQInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
From,
To, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Quaternions.FromToRotation_floatQ" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="From" id={typeof From === "object" && "id" in From ? From?.id : undefined} value={typeof From === "object" && "value" in From ? From?.value : From} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="To" id={typeof To === "object" && "id" in To ? To?.id : undefined} value={typeof To === "object" && "value" in To ? To?.value : To} /* default: ID0 */  />
        </Component>
      );
    };
    