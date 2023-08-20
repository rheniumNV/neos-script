import { member, Member, Component } from "../../../../core";
    
    export interface ComposeBits_byteInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Bit0?: member<any>;
Bit1?: member<any>;
Bit2?: member<any>;
Bit3?: member<any>;
Bit4?: member<any>;
Bit5?: member<any>;
Bit6?: member<any>;
Bit7?: member<any>;
    }
    
    export function ComposeBits_byte(props: ComposeBits_byteInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Bit0,
Bit1,
Bit2,
Bit3,
Bit4,
Bit5,
Bit6,
Bit7, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Binary.ComposeBits_byte" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit0" id={typeof Bit0 === "object" && "id" in Bit0 ? Bit0?.id : undefined} value={typeof Bit0 === "object" && "value" in Bit0 ? Bit0?.value : Bit0} /* default: ID0 */  isRaw={typeof Bit0 === "object" && "isRaw" in Bit0 && Bit0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit1" id={typeof Bit1 === "object" && "id" in Bit1 ? Bit1?.id : undefined} value={typeof Bit1 === "object" && "value" in Bit1 ? Bit1?.value : Bit1} /* default: ID0 */  isRaw={typeof Bit1 === "object" && "isRaw" in Bit1 && Bit1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit2" id={typeof Bit2 === "object" && "id" in Bit2 ? Bit2?.id : undefined} value={typeof Bit2 === "object" && "value" in Bit2 ? Bit2?.value : Bit2} /* default: ID0 */  isRaw={typeof Bit2 === "object" && "isRaw" in Bit2 && Bit2.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit3" id={typeof Bit3 === "object" && "id" in Bit3 ? Bit3?.id : undefined} value={typeof Bit3 === "object" && "value" in Bit3 ? Bit3?.value : Bit3} /* default: ID0 */  isRaw={typeof Bit3 === "object" && "isRaw" in Bit3 && Bit3.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit4" id={typeof Bit4 === "object" && "id" in Bit4 ? Bit4?.id : undefined} value={typeof Bit4 === "object" && "value" in Bit4 ? Bit4?.value : Bit4} /* default: ID0 */  isRaw={typeof Bit4 === "object" && "isRaw" in Bit4 && Bit4.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit5" id={typeof Bit5 === "object" && "id" in Bit5 ? Bit5?.id : undefined} value={typeof Bit5 === "object" && "value" in Bit5 ? Bit5?.value : Bit5} /* default: ID0 */  isRaw={typeof Bit5 === "object" && "isRaw" in Bit5 && Bit5.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit6" id={typeof Bit6 === "object" && "id" in Bit6 ? Bit6?.id : undefined} value={typeof Bit6 === "object" && "value" in Bit6 ? Bit6?.value : Bit6} /* default: ID0 */  isRaw={typeof Bit6 === "object" && "isRaw" in Bit6 && Bit6.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit7" id={typeof Bit7 === "object" && "id" in Bit7 ? Bit7?.id : undefined} value={typeof Bit7 === "object" && "value" in Bit7 ? Bit7?.value : Bit7} /* default: ID0 */  isRaw={typeof Bit7 === "object" && "isRaw" in Bit7 && Bit7.isRaw ? true : undefined} />
        </Component>
      );
    };
    