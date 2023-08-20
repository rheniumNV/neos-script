import { member, Member, Component } from "../../../../core";
    
    export interface TimespanSecondsNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
TimeSpan?: member<any>;
    }
    
    export function TimespanSecondsNode(props: TimespanSecondsNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
TimeSpan, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Time.TimespanSecondsNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.TimeSpan]`} name="TimeSpan" id={typeof TimeSpan === "object" && "id" in TimeSpan ? TimeSpan?.id : undefined} value={typeof TimeSpan === "object" && "value" in TimeSpan ? TimeSpan?.value : TimeSpan} /* default: ID0 */  isRaw={typeof TimeSpan === "object" && "isRaw" in TimeSpan && TimeSpan.isRaw ? true : undefined} />
        </Component>
      );
    };
    