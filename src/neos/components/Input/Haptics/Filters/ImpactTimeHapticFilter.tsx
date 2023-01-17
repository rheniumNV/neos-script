import { member, Member, Component } from "../../../../core";
    
    export interface ImpactTimeHapticFilterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
UseGlobalTime?: member<boolean>;
StartTime?: member<number>;
EndTime?: member<number>;
StartIntensity?: member<number>;
EndIntensity?: member<number>;
Power?: member<number>;
    }
    
    export function ImpactTimeHapticFilter(props: ImpactTimeHapticFilterInput){
      const { id, persistentId, updateOrder, Enabled,
UseGlobalTime,
StartTime,
EndTime,
StartIntensity,
EndIntensity,
Power, } = props;
    
      return (
        <Component type="FrooxEngine.ImpactTimeHapticFilter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseGlobalTime" id={typeof UseGlobalTime === "object" && "id" in UseGlobalTime ? UseGlobalTime?.id : undefined} value={typeof UseGlobalTime === "object" && "value" in UseGlobalTime ? UseGlobalTime?.value : UseGlobalTime} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StartTime" id={typeof StartTime === "object" && "id" in StartTime ? StartTime?.id : undefined} value={typeof StartTime === "object" && "value" in StartTime ? StartTime?.value : StartTime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EndTime" id={typeof EndTime === "object" && "id" in EndTime ? EndTime?.id : undefined} value={typeof EndTime === "object" && "value" in EndTime ? EndTime?.value : EndTime} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StartIntensity" id={typeof StartIntensity === "object" && "id" in StartIntensity ? StartIntensity?.id : undefined} value={typeof StartIntensity === "object" && "value" in StartIntensity ? StartIntensity?.value : StartIntensity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EndIntensity" id={typeof EndIntensity === "object" && "id" in EndIntensity ? EndIntensity?.id : undefined} value={typeof EndIntensity === "object" && "value" in EndIntensity ? EndIntensity?.value : EndIntensity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Power" id={typeof Power === "object" && "id" in Power ? Power?.id : undefined} value={typeof Power === "object" && "value" in Power ? Power?.value : Power} /* default: 0 */  />
        </Component>
      );
    };
    