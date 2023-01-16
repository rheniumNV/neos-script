import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AudioOutputDeviceInfoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DeviceIndex?: member<number>;
DeviceName?: member<any>;
    }
    
    export function AudioOutputDeviceInfo(props: AudioOutputDeviceInfoInput){
      const { id, persistentId, updateOrder, Enabled,
DeviceIndex,
DeviceName, } = props;
    
      return (
        <Component type="FrooxEngine.AudioOutputDeviceInfo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="DeviceIndex" id={typeof DeviceIndex === "object" && "id" in DeviceIndex ? DeviceIndex?.id : undefined} value={typeof DeviceIndex === "object" && "value" in DeviceIndex ? DeviceIndex?.value : DeviceIndex} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="DeviceName" id={typeof DeviceName === "object" && "id" in DeviceName ? DeviceName?.id : undefined} value={typeof DeviceName === "object" && "value" in DeviceName ? DeviceName?.value : DeviceName} /* default: <i>null</i> */  />
        </Component>
      );
    };
    