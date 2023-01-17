import { member, Member, Component } from "../../../core";
    
    export interface AudioDeviceIndexFinderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DeviceIndex?: member<number>;
DeviceName?: member<any>;
CaseSensitive?: member<boolean>;
AllowPartialMatch?: member<boolean>;
    }
    
    export function AudioDeviceIndexFinder(props: AudioDeviceIndexFinderInput){
      const { id, persistentId, updateOrder, Enabled,
DeviceIndex,
DeviceName,
CaseSensitive,
AllowPartialMatch, } = props;
    
      return (
        <Component type="FrooxEngine.AudioDeviceIndexFinder" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="DeviceIndex" id={typeof DeviceIndex === "object" && "id" in DeviceIndex ? DeviceIndex?.id : undefined} value={typeof DeviceIndex === "object" && "value" in DeviceIndex ? DeviceIndex?.value : DeviceIndex} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="DeviceName" id={typeof DeviceName === "object" && "id" in DeviceName ? DeviceName?.id : undefined} value={typeof DeviceName === "object" && "value" in DeviceName ? DeviceName?.value : DeviceName} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CaseSensitive" id={typeof CaseSensitive === "object" && "id" in CaseSensitive ? CaseSensitive?.id : undefined} value={typeof CaseSensitive === "object" && "value" in CaseSensitive ? CaseSensitive?.value : CaseSensitive} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowPartialMatch" id={typeof AllowPartialMatch === "object" && "id" in AllowPartialMatch ? AllowPartialMatch?.id : undefined} value={typeof AllowPartialMatch === "object" && "value" in AllowPartialMatch ? AllowPartialMatch?.value : AllowPartialMatch} /* default: false */  />
        </Component>
      );
    };
    