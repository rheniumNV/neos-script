import { member, Member, Component } from "../../../../core";
    
    export interface StringToUTF32Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
String?: member<any>;
Index?: member<any>;
    }
    
    export function StringToUTF32(props: StringToUTF32Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
String,
Index, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.String.Characters.StringToUTF32" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="String" id={typeof String === "object" && "id" in String ? String?.id : undefined} value={typeof String === "object" && "value" in String ? String?.value : String} /* default: ID0 */  isRaw={typeof String === "object" && "isRaw" in String && String.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Int32]`} name="Index" id={typeof Index === "object" && "id" in Index ? Index?.id : undefined} value={typeof Index === "object" && "value" in Index ? Index?.value : Index} /* default: ID0 */  isRaw={typeof Index === "object" && "isRaw" in Index && Index.isRaw ? true : undefined} />
        </Component>
      );
    };
    