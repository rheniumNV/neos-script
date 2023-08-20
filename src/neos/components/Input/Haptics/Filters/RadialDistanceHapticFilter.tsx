import { member, Member, Component } from "../../../../core";
    
    export interface RadialDistanceHapticFilterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
StartRadius?: member<number>;
EndRadius?: member<number>;
StartIntensity?: member<number>;
EndIntensity?: member<number>;
Power?: member<number>;
    }
    
    export function RadialDistanceHapticFilter(props: RadialDistanceHapticFilterInput){
      const { id, persistentId, updateOrder, Enabled,
StartRadius,
EndRadius,
StartIntensity,
EndIntensity,
Power, } = props;
    
      return (
        <Component type="FrooxEngine.RadialDistanceHapticFilter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StartRadius" id={typeof StartRadius === "object" && "id" in StartRadius ? StartRadius?.id : undefined} value={typeof StartRadius === "object" && "value" in StartRadius ? StartRadius?.value : StartRadius} /* default: 0 */  isRaw={typeof StartRadius === "object" && "isRaw" in StartRadius && StartRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EndRadius" id={typeof EndRadius === "object" && "id" in EndRadius ? EndRadius?.id : undefined} value={typeof EndRadius === "object" && "value" in EndRadius ? EndRadius?.value : EndRadius} /* default: 0 */  isRaw={typeof EndRadius === "object" && "isRaw" in EndRadius && EndRadius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StartIntensity" id={typeof StartIntensity === "object" && "id" in StartIntensity ? StartIntensity?.id : undefined} value={typeof StartIntensity === "object" && "value" in StartIntensity ? StartIntensity?.value : StartIntensity} /* default: 0 */  isRaw={typeof StartIntensity === "object" && "isRaw" in StartIntensity && StartIntensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EndIntensity" id={typeof EndIntensity === "object" && "id" in EndIntensity ? EndIntensity?.id : undefined} value={typeof EndIntensity === "object" && "value" in EndIntensity ? EndIntensity?.value : EndIntensity} /* default: 0 */  isRaw={typeof EndIntensity === "object" && "isRaw" in EndIntensity && EndIntensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Power" id={typeof Power === "object" && "id" in Power ? Power?.id : undefined} value={typeof Power === "object" && "value" in Power ? Power?.value : Power} /* default: 0 */  isRaw={typeof Power === "object" && "isRaw" in Power && Power.isRaw ? true : undefined} />
        </Component>
      );
    };
    