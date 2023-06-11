import { member, Member, Component } from "../../../core";
    
    export interface CubicLerp_DoubleInput {
        
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
    
    export function CubicLerp_Double(props: CubicLerp_DoubleInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
From,
FromTangent,
To,
ToTangent,
Lerp, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.CubicLerp_Double" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Double]`} name="From" id={typeof From === "object" && "id" in From ? From?.id : undefined} value={typeof From === "object" && "value" in From ? From?.value : From} /* default: ID0 */  isRaw={typeof From === "object" && "isRaw" in From && From.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Double]`} name="FromTangent" id={typeof FromTangent === "object" && "id" in FromTangent ? FromTangent?.id : undefined} value={typeof FromTangent === "object" && "value" in FromTangent ? FromTangent?.value : FromTangent} /* default: ID0 */  isRaw={typeof FromTangent === "object" && "isRaw" in FromTangent && FromTangent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Double]`} name="To" id={typeof To === "object" && "id" in To ? To?.id : undefined} value={typeof To === "object" && "value" in To ? To?.value : To} /* default: ID0 */  isRaw={typeof To === "object" && "isRaw" in To && To.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Double]`} name="ToTangent" id={typeof ToTangent === "object" && "id" in ToTangent ? ToTangent?.id : undefined} value={typeof ToTangent === "object" && "value" in ToTangent ? ToTangent?.value : ToTangent} /* default: ID0 */  isRaw={typeof ToTangent === "object" && "isRaw" in ToTangent && ToTangent.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Lerp" id={typeof Lerp === "object" && "id" in Lerp ? Lerp?.id : undefined} value={typeof Lerp === "object" && "value" in Lerp ? Lerp?.value : Lerp} /* default: ID0 */  isRaw={typeof Lerp === "object" && "isRaw" in Lerp && Lerp.isRaw ? true : undefined} />
        </Component>
      );
    };
    