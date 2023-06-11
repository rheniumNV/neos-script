import { member, Member, Component } from "../../../core";
    
    export interface GetComponentEnabledInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Component?: member<any>;
    }
    
    export function GetComponentEnabled(props: GetComponentEnabledInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Component, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Components.GetComponentEnabled" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.IComponent]`} name="Component" id={typeof Component === "object" && "id" in Component ? Component?.id : undefined} value={typeof Component === "object" && "value" in Component ? Component?.value : Component} /* default: ID0 */  isRaw={typeof Component === "object" && "isRaw" in Component && Component.isRaw ? true : undefined} />
        </Component>
      );
    };
    