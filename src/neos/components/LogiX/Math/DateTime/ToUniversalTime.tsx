import { member, Member, Component } from "../../../../core";
    
    export interface ToUniversalTimeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
DateTime?: member<any>;
    }
    
    export function ToUniversalTime(props: ToUniversalTimeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
DateTime, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Time.ToUniversalTime" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.DateTime]`} name="DateTime" id={typeof DateTime === "object" && "id" in DateTime ? DateTime?.id : undefined} value={typeof DateTime === "object" && "value" in DateTime ? DateTime?.value : DateTime} /* default: ID0 */  />
        </Component>
      );
    };
    