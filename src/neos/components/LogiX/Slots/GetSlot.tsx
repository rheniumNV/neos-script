import { member, Member, Component } from "../../../core";
    
    export interface GetSlotInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Component?: member<any>;
    }
    
    export function GetSlot(props: GetSlotInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Component, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.WorldModel.GetSlot" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IComponent]`} name="Component" id={typeof Component === "object" && "id" in Component ? Component?.id : undefined} value={typeof Component === "object" && "value" in Component ? Component?.value : Component} /* default: ID0 */  />
        </Component>
      );
    };
    