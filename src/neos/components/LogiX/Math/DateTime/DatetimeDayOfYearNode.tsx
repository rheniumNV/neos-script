import { member, Member, Component } from "../../../../core";
    
    export interface DatetimeDayOfYearNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
DateTime?: member<any>;
    }
    
    export function DatetimeDayOfYearNode(props: DatetimeDayOfYearNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
DateTime, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Time.DatetimeDayOfYearNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.DateTime]`} name="DateTime" id={typeof DateTime === "object" && "id" in DateTime ? DateTime?.id : undefined} value={typeof DateTime === "object" && "value" in DateTime ? DateTime?.value : DateTime} /* default: ID0 */  isRaw={typeof DateTime === "object" && "isRaw" in DateTime && DateTime.isRaw ? true : undefined} />
        </Component>
      );
    };
    