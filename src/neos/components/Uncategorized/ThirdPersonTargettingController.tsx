import { member, Member, Component } from "../../core";
    
    export interface ThirdPersonTargettingControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MinVerticalAngle?: member<number>;
MaxVerticalAngle?: member<number>;
    }
    
    export function ThirdPersonTargettingController(props: ThirdPersonTargettingControllerInput){
      const { id, persistentId, updateOrder, Enabled,
MinVerticalAngle,
MaxVerticalAngle, } = props;
    
      return (
        <Component type="FrooxEngine.ThirdPersonTargettingController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinVerticalAngle" id={typeof MinVerticalAngle === "object" && "id" in MinVerticalAngle ? MinVerticalAngle?.id : undefined} value={typeof MinVerticalAngle === "object" && "value" in MinVerticalAngle ? MinVerticalAngle?.value : MinVerticalAngle} /* default: 0 */  isRaw={typeof MinVerticalAngle === "object" && "isRaw" in MinVerticalAngle && MinVerticalAngle.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxVerticalAngle" id={typeof MaxVerticalAngle === "object" && "id" in MaxVerticalAngle ? MaxVerticalAngle?.id : undefined} value={typeof MaxVerticalAngle === "object" && "value" in MaxVerticalAngle ? MaxVerticalAngle?.value : MaxVerticalAngle} /* default: 0 */  isRaw={typeof MaxVerticalAngle === "object" && "isRaw" in MaxVerticalAngle && MaxVerticalAngle.isRaw ? true : undefined} />
        </Component>
      );
    };
    