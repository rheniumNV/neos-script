import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface TimespanHoursNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
TimeSpan?: member<any>;
    }
    
    export function TimespanHoursNode(props: TimespanHoursNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
TimeSpan, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Math.Time.TimespanHoursNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.TimeSpan]`} name="TimeSpan" id={typeof TimeSpan === "object" && "id" in TimeSpan ? TimeSpan?.id : undefined} value={typeof TimeSpan === "object" && "value" in TimeSpan ? TimeSpan?.value : TimeSpan} /* default: ID0 */  />
        </Component>
      );
    };
    