import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AudioInputDeviceInfoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DeviceIndex?: member<number>;
DeviceName?: member<any>;
IsNeosDefault?: member<boolean>;
IsSystemDefault?: member<boolean>;
DeviceType?: member<any>;
    }
    
    export function AudioInputDeviceInfo(props: AudioInputDeviceInfoInput){
      const { id, persistentId, updateOrder, Enabled,
DeviceIndex,
DeviceName,
IsNeosDefault,
IsSystemDefault,
DeviceType, } = props;
    
      return (
        <Component type="FrooxEngine.AudioInputDeviceInfo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="DeviceIndex" id={typeof DeviceIndex === "object" && "id" in DeviceIndex ? DeviceIndex?.id : undefined} value={typeof DeviceIndex === "object" && "value" in DeviceIndex ? DeviceIndex?.value : DeviceIndex} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="DeviceName" id={typeof DeviceName === "object" && "id" in DeviceName ? DeviceName?.id : undefined} value={typeof DeviceName === "object" && "value" in DeviceName ? DeviceName?.value : DeviceName} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsNeosDefault" id={typeof IsNeosDefault === "object" && "id" in IsNeosDefault ? IsNeosDefault?.id : undefined} value={typeof IsNeosDefault === "object" && "value" in IsNeosDefault ? IsNeosDefault?.value : IsNeosDefault} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsSystemDefault" id={typeof IsSystemDefault === "object" && "id" in IsSystemDefault ? IsSystemDefault?.id : undefined} value={typeof IsSystemDefault === "object" && "value" in IsSystemDefault ? IsSystemDefault?.value : IsSystemDefault} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.AudioInputType]`} name="DeviceType" id={typeof DeviceType === "object" && "id" in DeviceType ? DeviceType?.id : undefined} value={typeof DeviceType === "object" && "value" in DeviceType ? DeviceType?.value : DeviceType} /* default: Unknown */  />
        </Component>
      );
    };
    