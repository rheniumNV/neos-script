import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ButtonAudioDeviceSetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DeviceIndex?: member<number>;
    }
    
    export function ButtonAudioDeviceSet(props: ButtonAudioDeviceSetInput){
      const { id, persistentId, updateOrder, Enabled,
DeviceIndex, } = props;
    
      return (
        <Component type="FrooxEngine.ButtonAudioDeviceSet" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="DeviceIndex" id={typeof DeviceIndex === "object" && "id" in DeviceIndex ? DeviceIndex?.id : undefined} value={typeof DeviceIndex === "object" && "value" in DeviceIndex ? DeviceIndex?.value : DeviceIndex} /* default: 0 */  />
        </Component>
      );
    };
    