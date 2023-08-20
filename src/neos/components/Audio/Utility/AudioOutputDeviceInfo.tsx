import { member, Member, Component } from "../../../core";
    
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="DeviceIndex" id={typeof DeviceIndex === "object" && "id" in DeviceIndex ? DeviceIndex?.id : undefined} value={typeof DeviceIndex === "object" && "value" in DeviceIndex ? DeviceIndex?.value : DeviceIndex} /* default: 0 */  isRaw={typeof DeviceIndex === "object" && "isRaw" in DeviceIndex && DeviceIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="DeviceName" id={typeof DeviceName === "object" && "id" in DeviceName ? DeviceName?.id : undefined} value={typeof DeviceName === "object" && "value" in DeviceName ? DeviceName?.value : DeviceName} /* default: <i>null</i> */  isRaw={typeof DeviceName === "object" && "isRaw" in DeviceName && DeviceName.isRaw ? true : undefined} />
        </Component>
      );
    };
    