import { member, Member, Component } from "../../../core";
    
    export interface StripRTF_TagsInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
String?: member<any>;
    }
    
    export function StripRTF_Tags(props: StripRTF_TagsInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
String, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.String.StripRTF_Tags" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.String]`} name="String" id={typeof String === "object" && "id" in String ? String?.id : undefined} value={typeof String === "object" && "value" in String ? String?.value : String} /* default: ID0 */  isRaw={typeof String === "object" && "isRaw" in String && String.isRaw ? true : undefined} />
        </Component>
      );
    };
    