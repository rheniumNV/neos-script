import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface SineHapticFilterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
UseGlobalTime?: member<boolean>;
DistanceScale?: member<any>;
AxisScale?: member<any>;
MinIntensity?: member<number>;
MaxIntensity?: member<number>;
Frequency?: member<number>;
    }
    
    export function SineHapticFilter(props: SineHapticFilterInput){
      const { id, persistentId, updateOrder, Enabled,
UseGlobalTime,
DistanceScale,
AxisScale,
MinIntensity,
MaxIntensity,
Frequency, } = props;
    
      return (
        <Component type="FrooxEngine.SineHapticFilter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseGlobalTime" id={typeof UseGlobalTime === "object" && "id" in UseGlobalTime ? UseGlobalTime?.id : undefined} value={typeof UseGlobalTime === "object" && "value" in UseGlobalTime ? UseGlobalTime?.value : UseGlobalTime} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[System.Single]]`} name="DistanceScale" id={typeof DistanceScale === "object" && "id" in DistanceScale ? DistanceScale?.id : undefined} value={typeof DistanceScale === "object" && "value" in DistanceScale ? DistanceScale?.value : DistanceScale} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float3]]`} name="AxisScale" id={typeof AxisScale === "object" && "id" in AxisScale ? AxisScale?.id : undefined} value={typeof AxisScale === "object" && "value" in AxisScale ? AxisScale?.value : AxisScale} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinIntensity" id={typeof MinIntensity === "object" && "id" in MinIntensity ? MinIntensity?.id : undefined} value={typeof MinIntensity === "object" && "value" in MinIntensity ? MinIntensity?.value : MinIntensity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxIntensity" id={typeof MaxIntensity === "object" && "id" in MaxIntensity ? MaxIntensity?.id : undefined} value={typeof MaxIntensity === "object" && "value" in MaxIntensity ? MaxIntensity?.value : MaxIntensity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Frequency" id={typeof Frequency === "object" && "id" in Frequency ? Frequency?.id : undefined} value={typeof Frequency === "object" && "value" in Frequency ? Frequency?.value : Frequency} /* default: 0 */  />
        </Component>
      );
    };
    