import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface FirstPersonTargettingControllerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MinVerticalAngle?: member<number>;
MaxVerticalAngle?: member<number>;
    }
    
    export function FirstPersonTargettingController(props: FirstPersonTargettingControllerInput){
      const { id, persistentId, updateOrder, Enabled,
MinVerticalAngle,
MaxVerticalAngle, } = props;
    
      return (
        <Component type="FrooxEngine.FirstPersonTargettingController" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinVerticalAngle" id={typeof MinVerticalAngle === "object" && "id" in MinVerticalAngle ? MinVerticalAngle?.id : undefined} value={typeof MinVerticalAngle === "object" && "value" in MinVerticalAngle ? MinVerticalAngle?.value : MinVerticalAngle} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxVerticalAngle" id={typeof MaxVerticalAngle === "object" && "id" in MaxVerticalAngle ? MaxVerticalAngle?.id : undefined} value={typeof MaxVerticalAngle === "object" && "value" in MaxVerticalAngle ? MaxVerticalAngle?.value : MaxVerticalAngle} /* default: 0 */  />
        </Component>
      );
    };
    