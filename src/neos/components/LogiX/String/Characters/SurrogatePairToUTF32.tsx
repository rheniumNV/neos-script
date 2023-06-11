import { member, Member, Component } from "../../../../core";
    
    export interface SurrogatePairToUTF32Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
HighSurrogate?: member<any>;
LowSurrogate?: member<any>;
    }
    
    export function SurrogatePairToUTF32(props: SurrogatePairToUTF32Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
HighSurrogate,
LowSurrogate, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.String.Characters.SurrogatePairToUTF32" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Char]`} name="HighSurrogate" id={typeof HighSurrogate === "object" && "id" in HighSurrogate ? HighSurrogate?.id : undefined} value={typeof HighSurrogate === "object" && "value" in HighSurrogate ? HighSurrogate?.value : HighSurrogate} /* default: ID0 */  isRaw={typeof HighSurrogate === "object" && "isRaw" in HighSurrogate && HighSurrogate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Char]`} name="LowSurrogate" id={typeof LowSurrogate === "object" && "id" in LowSurrogate ? LowSurrogate?.id : undefined} value={typeof LowSurrogate === "object" && "value" in LowSurrogate ? LowSurrogate?.value : LowSurrogate} /* default: ID0 */  isRaw={typeof LowSurrogate === "object" && "isRaw" in LowSurrogate && LowSurrogate.isRaw ? true : undefined} />
        </Component>
      );
    };
    