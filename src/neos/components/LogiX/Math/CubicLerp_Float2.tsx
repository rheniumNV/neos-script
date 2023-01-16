import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface CubicLerp_Float2Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
From?: member<any>;
FromTangent?: member<any>;
To?: member<any>;
ToTangent?: member<any>;
Lerp?: member<any>;
    }
    
    export function CubicLerp_Float2(props: CubicLerp_Float2Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
From,
FromTangent,
To,
ToTangent,
Lerp, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.CubicLerp_Float2" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float2]`} name="From" id={typeof From === "object" && "id" in From ? From?.id : undefined} value={typeof From === "object" && "value" in From ? From?.value : From} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float2]`} name="FromTangent" id={typeof FromTangent === "object" && "id" in FromTangent ? FromTangent?.id : undefined} value={typeof FromTangent === "object" && "value" in FromTangent ? FromTangent?.value : FromTangent} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float2]`} name="To" id={typeof To === "object" && "id" in To ? To?.id : undefined} value={typeof To === "object" && "value" in To ? To?.value : To} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float2]`} name="ToTangent" id={typeof ToTangent === "object" && "id" in ToTangent ? ToTangent?.id : undefined} value={typeof ToTangent === "object" && "value" in ToTangent ? ToTangent?.value : ToTangent} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Lerp" id={typeof Lerp === "object" && "id" in Lerp ? Lerp?.id : undefined} value={typeof Lerp === "object" && "value" in Lerp ? Lerp?.value : Lerp} /* default: ID0 */  />
        </Component>
      );
    };
    