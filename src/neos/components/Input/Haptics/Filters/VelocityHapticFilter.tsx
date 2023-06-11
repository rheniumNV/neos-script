import { member, Member, Component } from "../../../../core";
    
    export interface VelocityHapticFilterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
VelocitySmoothTime?: member<number>;
StartVelocity?: member<number>;
EndVelocity?: member<number>;
StartIntensity?: member<number>;
EndIntensity?: member<number>;
Power?: member<number>;
    }
    
    export function VelocityHapticFilter(props: VelocityHapticFilterInput){
      const { id, persistentId, updateOrder, Enabled,
VelocitySmoothTime,
StartVelocity,
EndVelocity,
StartIntensity,
EndIntensity,
Power, } = props;
    
      return (
        <Component type="FrooxEngine.VelocityHapticFilter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="VelocitySmoothTime" id={typeof VelocitySmoothTime === "object" && "id" in VelocitySmoothTime ? VelocitySmoothTime?.id : undefined} value={typeof VelocitySmoothTime === "object" && "value" in VelocitySmoothTime ? VelocitySmoothTime?.value : VelocitySmoothTime} /* default: 0 */  isRaw={typeof VelocitySmoothTime === "object" && "isRaw" in VelocitySmoothTime && VelocitySmoothTime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StartVelocity" id={typeof StartVelocity === "object" && "id" in StartVelocity ? StartVelocity?.id : undefined} value={typeof StartVelocity === "object" && "value" in StartVelocity ? StartVelocity?.value : StartVelocity} /* default: 0 */  isRaw={typeof StartVelocity === "object" && "isRaw" in StartVelocity && StartVelocity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EndVelocity" id={typeof EndVelocity === "object" && "id" in EndVelocity ? EndVelocity?.id : undefined} value={typeof EndVelocity === "object" && "value" in EndVelocity ? EndVelocity?.value : EndVelocity} /* default: 0 */  isRaw={typeof EndVelocity === "object" && "isRaw" in EndVelocity && EndVelocity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StartIntensity" id={typeof StartIntensity === "object" && "id" in StartIntensity ? StartIntensity?.id : undefined} value={typeof StartIntensity === "object" && "value" in StartIntensity ? StartIntensity?.value : StartIntensity} /* default: 0 */  isRaw={typeof StartIntensity === "object" && "isRaw" in StartIntensity && StartIntensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="EndIntensity" id={typeof EndIntensity === "object" && "id" in EndIntensity ? EndIntensity?.id : undefined} value={typeof EndIntensity === "object" && "value" in EndIntensity ? EndIntensity?.value : EndIntensity} /* default: 0 */  isRaw={typeof EndIntensity === "object" && "isRaw" in EndIntensity && EndIntensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Power" id={typeof Power === "object" && "id" in Power ? Power?.id : undefined} value={typeof Power === "object" && "value" in Power ? Power?.value : Power} /* default: 0 */  isRaw={typeof Power === "object" && "isRaw" in Power && Power.isRaw ? true : undefined} />
        </Component>
      );
    };
    