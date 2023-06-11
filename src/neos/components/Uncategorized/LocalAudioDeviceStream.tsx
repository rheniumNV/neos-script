import { member, Member, Component } from "../../core";
    
    export interface LocalAudioDeviceStreamInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AudioDeviceIndex?: member<number>;
UseFilteredData?: member<boolean>;
    }
    
    export function LocalAudioDeviceStream(props: LocalAudioDeviceStreamInput){
      const { id, persistentId, updateOrder, Enabled,
AudioDeviceIndex,
UseFilteredData, } = props;
    
      return (
        <Component type="FrooxEngine.LocalAudioDeviceStream" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="AudioDeviceIndex" id={typeof AudioDeviceIndex === "object" && "id" in AudioDeviceIndex ? AudioDeviceIndex?.id : undefined} value={typeof AudioDeviceIndex === "object" && "value" in AudioDeviceIndex ? AudioDeviceIndex?.value : AudioDeviceIndex} /* default: 0 */  isRaw={typeof AudioDeviceIndex === "object" && "isRaw" in AudioDeviceIndex && AudioDeviceIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseFilteredData" id={typeof UseFilteredData === "object" && "id" in UseFilteredData ? UseFilteredData?.id : undefined} value={typeof UseFilteredData === "object" && "value" in UseFilteredData ? UseFilteredData?.value : UseFilteredData} /* default: false */  isRaw={typeof UseFilteredData === "object" && "isRaw" in UseFilteredData && UseFilteredData.isRaw ? true : undefined} />
        </Component>
      );
    };
    