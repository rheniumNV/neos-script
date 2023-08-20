import { member, Member, Component } from "../../../../core";
    
    export interface AxisDistanceHapticFilterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Axis?: member<[number, number, number]>;
StartDistance?: member<number>;
EndDistance?: member<number>;
StartIntensity?: member<number>;
EndIntensity?: member<number>;
Power?: member<number>;
    }
    
    export function AxisDistanceHapticFilter(props: AxisDistanceHapticFilterInput){
      const { id, persistentId, updateOrder, Enabled,
Axis,
StartDistance,
EndDistance,
StartIntensity,
EndIntensity,
Power, } = props;
    
      return (
        <Component type="FrooxEngine.AxisDistanceHapticFilter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Axis" id={typeof Axis === "object" && "id" in Axis ? Axis?.id : undefined} value={typeof Axis === "object" && "value" in Axis ? Axis?.value : Axis} /* default: [0; 0; 0] */  isRaw={typeof Axis === "object" && "isRaw" in Axis && Axis.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StartDistance" id={typeof StartDistance === "object" && "id" in StartDistance ? StartDistance?.id : undefined} value={typeof StartDistance === "object" && "value" in StartDistance ? StartDistance?.value : StartDistance} /* default: 0 */  isRaw={typeof StartDistance === "object" && "isRaw" in StartDistance && StartDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EndDistance" id={typeof EndDistance === "object" && "id" in EndDistance ? EndDistance?.id : undefined} value={typeof EndDistance === "object" && "value" in EndDistance ? EndDistance?.value : EndDistance} /* default: 0 */  isRaw={typeof EndDistance === "object" && "isRaw" in EndDistance && EndDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StartIntensity" id={typeof StartIntensity === "object" && "id" in StartIntensity ? StartIntensity?.id : undefined} value={typeof StartIntensity === "object" && "value" in StartIntensity ? StartIntensity?.value : StartIntensity} /* default: 0 */  isRaw={typeof StartIntensity === "object" && "isRaw" in StartIntensity && StartIntensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EndIntensity" id={typeof EndIntensity === "object" && "id" in EndIntensity ? EndIntensity?.id : undefined} value={typeof EndIntensity === "object" && "value" in EndIntensity ? EndIntensity?.value : EndIntensity} /* default: 0 */  isRaw={typeof EndIntensity === "object" && "isRaw" in EndIntensity && EndIntensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Power" id={typeof Power === "object" && "id" in Power ? Power?.id : undefined} value={typeof Power === "object" && "value" in Power ? Power?.value : Power} /* default: 0 */  isRaw={typeof Power === "object" && "isRaw" in Power && Power.isRaw ? true : undefined} />
        </Component>
      );
    };
    