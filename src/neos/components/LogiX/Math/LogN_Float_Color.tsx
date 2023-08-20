import { member, Member, Component } from "../../../core";
    
    export interface LogN_Float_ColorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
N?: member<any>;
Base?: member<any>;
    }
    
    export function LogN_Float_Color(props: LogN_Float_ColorInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
N,
Base, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.LogN_Float_Color" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="N" id={typeof N === "object" && "id" in N ? N?.id : undefined} value={typeof N === "object" && "value" in N ? N?.value : N} /* default: ID0 */  isRaw={typeof N === "object" && "isRaw" in N && N.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.color]`} name="Base" id={typeof Base === "object" && "id" in Base ? Base?.id : undefined} value={typeof Base === "object" && "value" in Base ? Base?.value : Base} /* default: ID0 */  isRaw={typeof Base === "object" && "isRaw" in Base && Base.isRaw ? true : undefined} />
        </Component>
      );
    };
    