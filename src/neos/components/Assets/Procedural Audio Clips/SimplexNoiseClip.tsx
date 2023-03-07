import { member, Member, Component } from "../../../core";
    
    export interface SimplexNoiseClipInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HighPriorityIntegration?: member<boolean>;
Frequency?: member<number>;
Amplitude?: member<number>;
Duration?: member<number>;
Offset?: member<number>;
    }
    
    export function SimplexNoiseClip(props: SimplexNoiseClipInput){
      const { id, persistentId, updateOrder, Enabled,
HighPriorityIntegration,
Frequency,
Amplitude,
Duration,
Offset, } = props;
    
      return (
        <Component type="FrooxEngine.SimplexNoiseClip" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="HighPriorityIntegration" id={typeof HighPriorityIntegration === "object" && "id" in HighPriorityIntegration ? HighPriorityIntegration?.id : undefined} value={typeof HighPriorityIntegration === "object" && "value" in HighPriorityIntegration ? HighPriorityIntegration?.value : HighPriorityIntegration} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Frequency" id={typeof Frequency === "object" && "id" in Frequency ? Frequency?.id : undefined} value={typeof Frequency === "object" && "value" in Frequency ? Frequency?.value : Frequency} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Amplitude" id={typeof Amplitude === "object" && "id" in Amplitude ? Amplitude?.id : undefined} value={typeof Amplitude === "object" && "value" in Amplitude ? Amplitude?.value : Amplitude} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Duration" id={typeof Duration === "object" && "id" in Duration ? Duration?.id : undefined} value={typeof Duration === "object" && "value" in Duration ? Duration?.value : Duration} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Offset" id={typeof Offset === "object" && "id" in Offset ? Offset?.id : undefined} value={typeof Offset === "object" && "value" in Offset ? Offset?.value : Offset} /* default: 0 */  />
        </Component>
      );
    };
    