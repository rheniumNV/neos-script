import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface HapticVolumeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Sensation?: member<any>;
Intensity?: member<number>;
    }
    
    export function HapticVolume(props: HapticVolumeInput){
      const { id, persistentId, updateOrder, Enabled,
Sensation,
Intensity, } = props;
    
      return (
        <Component type="FrooxEngine.HapticVolume" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.SensationClass]`} name="Sensation" id={typeof Sensation === "object" && "id" in Sensation ? Sensation?.id : undefined} value={typeof Sensation === "object" && "value" in Sensation ? Sensation?.value : Sensation} /* default: Force */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Intensity" id={typeof Intensity === "object" && "id" in Intensity ? Intensity?.id : undefined} value={typeof Intensity === "object" && "value" in Intensity ? Intensity?.value : Intensity} /* default: 0 */  />
        </Component>
      );
    };
    