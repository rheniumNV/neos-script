import { member, Member, Component } from "../../../../core";
    
    export interface KeyReleasedInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Key?: member<any>;
    }
    
    export function KeyReleased(props: KeyReleasedInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Key, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Input.KeyReleased" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.Key]`} name="Key" id={typeof Key === "object" && "id" in Key ? Key?.id : undefined} value={typeof Key === "object" && "value" in Key ? Key?.value : Key} /* default: ID0 */  isRaw={typeof Key === "object" && "isRaw" in Key && Key.isRaw ? true : undefined} />
        </Component>
      );
    };
    