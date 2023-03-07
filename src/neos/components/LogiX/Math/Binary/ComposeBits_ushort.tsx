import { member, Member, Component } from "../../../../core";
    
    export interface ComposeBits_ushortInput {
        
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
    }
    
    export function ComposeBits_ushort(props: ComposeBits_ushortInput){
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
Bit15, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Binary.ComposeBits_ushort" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit0" id={typeof Bit0 === "object" && "id" in Bit0 ? Bit0?.id : undefined} value={typeof Bit0 === "object" && "value" in Bit0 ? Bit0?.value : Bit0} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit1" id={typeof Bit1 === "object" && "id" in Bit1 ? Bit1?.id : undefined} value={typeof Bit1 === "object" && "value" in Bit1 ? Bit1?.value : Bit1} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit2" id={typeof Bit2 === "object" && "id" in Bit2 ? Bit2?.id : undefined} value={typeof Bit2 === "object" && "value" in Bit2 ? Bit2?.value : Bit2} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit3" id={typeof Bit3 === "object" && "id" in Bit3 ? Bit3?.id : undefined} value={typeof Bit3 === "object" && "value" in Bit3 ? Bit3?.value : Bit3} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit4" id={typeof Bit4 === "object" && "id" in Bit4 ? Bit4?.id : undefined} value={typeof Bit4 === "object" && "value" in Bit4 ? Bit4?.value : Bit4} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit5" id={typeof Bit5 === "object" && "id" in Bit5 ? Bit5?.id : undefined} value={typeof Bit5 === "object" && "value" in Bit5 ? Bit5?.value : Bit5} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit6" id={typeof Bit6 === "object" && "id" in Bit6 ? Bit6?.id : undefined} value={typeof Bit6 === "object" && "value" in Bit6 ? Bit6?.value : Bit6} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit7" id={typeof Bit7 === "object" && "id" in Bit7 ? Bit7?.id : undefined} value={typeof Bit7 === "object" && "value" in Bit7 ? Bit7?.value : Bit7} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit8" id={typeof Bit8 === "object" && "id" in Bit8 ? Bit8?.id : undefined} value={typeof Bit8 === "object" && "value" in Bit8 ? Bit8?.value : Bit8} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit9" id={typeof Bit9 === "object" && "id" in Bit9 ? Bit9?.id : undefined} value={typeof Bit9 === "object" && "value" in Bit9 ? Bit9?.value : Bit9} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit10" id={typeof Bit10 === "object" && "id" in Bit10 ? Bit10?.id : undefined} value={typeof Bit10 === "object" && "value" in Bit10 ? Bit10?.value : Bit10} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit11" id={typeof Bit11 === "object" && "id" in Bit11 ? Bit11?.id : undefined} value={typeof Bit11 === "object" && "value" in Bit11 ? Bit11?.value : Bit11} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit12" id={typeof Bit12 === "object" && "id" in Bit12 ? Bit12?.id : undefined} value={typeof Bit12 === "object" && "value" in Bit12 ? Bit12?.value : Bit12} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit13" id={typeof Bit13 === "object" && "id" in Bit13 ? Bit13?.id : undefined} value={typeof Bit13 === "object" && "value" in Bit13 ? Bit13?.value : Bit13} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit14" id={typeof Bit14 === "object" && "id" in Bit14 ? Bit14?.id : undefined} value={typeof Bit14 === "object" && "value" in Bit14 ? Bit14?.value : Bit14} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Bit15" id={typeof Bit15 === "object" && "id" in Bit15 ? Bit15?.id : undefined} value={typeof Bit15 === "object" && "value" in Bit15 ? Bit15?.value : Bit15} /* default: ID0 */  />
        </Component>
      );
    };
    