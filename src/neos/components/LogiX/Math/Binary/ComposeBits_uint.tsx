import { member, Member, Component } from "../../../../core";
    
    export interface ComposeBits_uintInput {
        
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
Bit8?: member<any>;
Bit9?: member<any>;
Bit10?: member<any>;
Bit11?: member<any>;
Bit12?: member<any>;
Bit13?: member<any>;
Bit14?: member<any>;
Bit15?: member<any>;
Bit16?: member<any>;
Bit17?: member<any>;
Bit18?: member<any>;
Bit19?: member<any>;
Bit20?: member<any>;
Bit21?: member<any>;
Bit22?: member<any>;
Bit23?: member<any>;
Bit24?: member<any>;
Bit25?: member<any>;
Bit26?: member<any>;
Bit27?: member<any>;
Bit28?: member<any>;
Bit29?: member<any>;
Bit30?: member<any>;
Bit31?: member<any>;
    }
    
    export function ComposeBits_uint(props: ComposeBits_uintInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Bit0,
Bit1,
Bit2,
Bit3,
Bit4,
Bit5,
Bit6,
Bit7,
Bit8,
Bit9,
Bit10,
Bit11,
Bit12,
Bit13,
Bit14,
Bit15,
Bit16,
Bit17,
Bit18,
Bit19,
Bit20,
Bit21,
Bit22,
Bit23,
Bit24,
Bit25,
Bit26,
Bit27,
Bit28,
Bit29,
Bit30,
Bit31, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Binary.ComposeBits_uint" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit0" id={typeof Bit0 === "object" && "id" in Bit0 ? Bit0?.id : undefined} value={typeof Bit0 === "object" && "value" in Bit0 ? Bit0?.value : Bit0} /* default: ID0 */  isRaw={typeof Bit0 === "object" && "isRaw" in Bit0 && Bit0.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit1" id={typeof Bit1 === "object" && "id" in Bit1 ? Bit1?.id : undefined} value={typeof Bit1 === "object" && "value" in Bit1 ? Bit1?.value : Bit1} /* default: ID0 */  isRaw={typeof Bit1 === "object" && "isRaw" in Bit1 && Bit1.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit2" id={typeof Bit2 === "object" && "id" in Bit2 ? Bit2?.id : undefined} value={typeof Bit2 === "object" && "value" in Bit2 ? Bit2?.value : Bit2} /* default: ID0 */  isRaw={typeof Bit2 === "object" && "isRaw" in Bit2 && Bit2.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit3" id={typeof Bit3 === "object" && "id" in Bit3 ? Bit3?.id : undefined} value={typeof Bit3 === "object" && "value" in Bit3 ? Bit3?.value : Bit3} /* default: ID0 */  isRaw={typeof Bit3 === "object" && "isRaw" in Bit3 && Bit3.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit4" id={typeof Bit4 === "object" && "id" in Bit4 ? Bit4?.id : undefined} value={typeof Bit4 === "object" && "value" in Bit4 ? Bit4?.value : Bit4} /* default: ID0 */  isRaw={typeof Bit4 === "object" && "isRaw" in Bit4 && Bit4.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit5" id={typeof Bit5 === "object" && "id" in Bit5 ? Bit5?.id : undefined} value={typeof Bit5 === "object" && "value" in Bit5 ? Bit5?.value : Bit5} /* default: ID0 */  isRaw={typeof Bit5 === "object" && "isRaw" in Bit5 && Bit5.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit6" id={typeof Bit6 === "object" && "id" in Bit6 ? Bit6?.id : undefined} value={typeof Bit6 === "object" && "value" in Bit6 ? Bit6?.value : Bit6} /* default: ID0 */  isRaw={typeof Bit6 === "object" && "isRaw" in Bit6 && Bit6.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit7" id={typeof Bit7 === "object" && "id" in Bit7 ? Bit7?.id : undefined} value={typeof Bit7 === "object" && "value" in Bit7 ? Bit7?.value : Bit7} /* default: ID0 */  isRaw={typeof Bit7 === "object" && "isRaw" in Bit7 && Bit7.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit8" id={typeof Bit8 === "object" && "id" in Bit8 ? Bit8?.id : undefined} value={typeof Bit8 === "object" && "value" in Bit8 ? Bit8?.value : Bit8} /* default: ID0 */  isRaw={typeof Bit8 === "object" && "isRaw" in Bit8 && Bit8.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit9" id={typeof Bit9 === "object" && "id" in Bit9 ? Bit9?.id : undefined} value={typeof Bit9 === "object" && "value" in Bit9 ? Bit9?.value : Bit9} /* default: ID0 */  isRaw={typeof Bit9 === "object" && "isRaw" in Bit9 && Bit9.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit10" id={typeof Bit10 === "object" && "id" in Bit10 ? Bit10?.id : undefined} value={typeof Bit10 === "object" && "value" in Bit10 ? Bit10?.value : Bit10} /* default: ID0 */  isRaw={typeof Bit10 === "object" && "isRaw" in Bit10 && Bit10.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit11" id={typeof Bit11 === "object" && "id" in Bit11 ? Bit11?.id : undefined} value={typeof Bit11 === "object" && "value" in Bit11 ? Bit11?.value : Bit11} /* default: ID0 */  isRaw={typeof Bit11 === "object" && "isRaw" in Bit11 && Bit11.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit12" id={typeof Bit12 === "object" && "id" in Bit12 ? Bit12?.id : undefined} value={typeof Bit12 === "object" && "value" in Bit12 ? Bit12?.value : Bit12} /* default: ID0 */  isRaw={typeof Bit12 === "object" && "isRaw" in Bit12 && Bit12.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit13" id={typeof Bit13 === "object" && "id" in Bit13 ? Bit13?.id : undefined} value={typeof Bit13 === "object" && "value" in Bit13 ? Bit13?.value : Bit13} /* default: ID0 */  isRaw={typeof Bit13 === "object" && "isRaw" in Bit13 && Bit13.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit14" id={typeof Bit14 === "object" && "id" in Bit14 ? Bit14?.id : undefined} value={typeof Bit14 === "object" && "value" in Bit14 ? Bit14?.value : Bit14} /* default: ID0 */  isRaw={typeof Bit14 === "object" && "isRaw" in Bit14 && Bit14.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit15" id={typeof Bit15 === "object" && "id" in Bit15 ? Bit15?.id : undefined} value={typeof Bit15 === "object" && "value" in Bit15 ? Bit15?.value : Bit15} /* default: ID0 */  isRaw={typeof Bit15 === "object" && "isRaw" in Bit15 && Bit15.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit16" id={typeof Bit16 === "object" && "id" in Bit16 ? Bit16?.id : undefined} value={typeof Bit16 === "object" && "value" in Bit16 ? Bit16?.value : Bit16} /* default: ID0 */  isRaw={typeof Bit16 === "object" && "isRaw" in Bit16 && Bit16.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit17" id={typeof Bit17 === "object" && "id" in Bit17 ? Bit17?.id : undefined} value={typeof Bit17 === "object" && "value" in Bit17 ? Bit17?.value : Bit17} /* default: ID0 */  isRaw={typeof Bit17 === "object" && "isRaw" in Bit17 && Bit17.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit18" id={typeof Bit18 === "object" && "id" in Bit18 ? Bit18?.id : undefined} value={typeof Bit18 === "object" && "value" in Bit18 ? Bit18?.value : Bit18} /* default: ID0 */  isRaw={typeof Bit18 === "object" && "isRaw" in Bit18 && Bit18.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit19" id={typeof Bit19 === "object" && "id" in Bit19 ? Bit19?.id : undefined} value={typeof Bit19 === "object" && "value" in Bit19 ? Bit19?.value : Bit19} /* default: ID0 */  isRaw={typeof Bit19 === "object" && "isRaw" in Bit19 && Bit19.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit20" id={typeof Bit20 === "object" && "id" in Bit20 ? Bit20?.id : undefined} value={typeof Bit20 === "object" && "value" in Bit20 ? Bit20?.value : Bit20} /* default: ID0 */  isRaw={typeof Bit20 === "object" && "isRaw" in Bit20 && Bit20.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit21" id={typeof Bit21 === "object" && "id" in Bit21 ? Bit21?.id : undefined} value={typeof Bit21 === "object" && "value" in Bit21 ? Bit21?.value : Bit21} /* default: ID0 */  isRaw={typeof Bit21 === "object" && "isRaw" in Bit21 && Bit21.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit22" id={typeof Bit22 === "object" && "id" in Bit22 ? Bit22?.id : undefined} value={typeof Bit22 === "object" && "value" in Bit22 ? Bit22?.value : Bit22} /* default: ID0 */  isRaw={typeof Bit22 === "object" && "isRaw" in Bit22 && Bit22.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit23" id={typeof Bit23 === "object" && "id" in Bit23 ? Bit23?.id : undefined} value={typeof Bit23 === "object" && "value" in Bit23 ? Bit23?.value : Bit23} /* default: ID0 */  isRaw={typeof Bit23 === "object" && "isRaw" in Bit23 && Bit23.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit24" id={typeof Bit24 === "object" && "id" in Bit24 ? Bit24?.id : undefined} value={typeof Bit24 === "object" && "value" in Bit24 ? Bit24?.value : Bit24} /* default: ID0 */  isRaw={typeof Bit24 === "object" && "isRaw" in Bit24 && Bit24.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit25" id={typeof Bit25 === "object" && "id" in Bit25 ? Bit25?.id : undefined} value={typeof Bit25 === "object" && "value" in Bit25 ? Bit25?.value : Bit25} /* default: ID0 */  isRaw={typeof Bit25 === "object" && "isRaw" in Bit25 && Bit25.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit26" id={typeof Bit26 === "object" && "id" in Bit26 ? Bit26?.id : undefined} value={typeof Bit26 === "object" && "value" in Bit26 ? Bit26?.value : Bit26} /* default: ID0 */  isRaw={typeof Bit26 === "object" && "isRaw" in Bit26 && Bit26.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit27" id={typeof Bit27 === "object" && "id" in Bit27 ? Bit27?.id : undefined} value={typeof Bit27 === "object" && "value" in Bit27 ? Bit27?.value : Bit27} /* default: ID0 */  isRaw={typeof Bit27 === "object" && "isRaw" in Bit27 && Bit27.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit28" id={typeof Bit28 === "object" && "id" in Bit28 ? Bit28?.id : undefined} value={typeof Bit28 === "object" && "value" in Bit28 ? Bit28?.value : Bit28} /* default: ID0 */  isRaw={typeof Bit28 === "object" && "isRaw" in Bit28 && Bit28.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit29" id={typeof Bit29 === "object" && "id" in Bit29 ? Bit29?.id : undefined} value={typeof Bit29 === "object" && "value" in Bit29 ? Bit29?.value : Bit29} /* default: ID0 */  isRaw={typeof Bit29 === "object" && "isRaw" in Bit29 && Bit29.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit30" id={typeof Bit30 === "object" && "id" in Bit30 ? Bit30?.id : undefined} value={typeof Bit30 === "object" && "value" in Bit30 ? Bit30?.value : Bit30} /* default: ID0 */  isRaw={typeof Bit30 === "object" && "isRaw" in Bit30 && Bit30.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit31" id={typeof Bit31 === "object" && "id" in Bit31 ? Bit31?.id : undefined} value={typeof Bit31 === "object" && "value" in Bit31 ? Bit31?.value : Bit31} /* default: ID0 */  isRaw={typeof Bit31 === "object" && "isRaw" in Bit31 && Bit31.isRaw ? true : undefined} />
        </Component>
      );
    };
    