import { member, Member, Component } from "../../core";
    
    export interface AudioOutputDeviceSelectionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SelectedDeviceIndex?: member<number>;
SelectedDeviceName?: member<any>;
_deviceButtonRoot?: member<any>;
    }
    
    export function AudioOutputDeviceSelection(props: AudioOutputDeviceSelectionInput){
      const { id, persistentId, updateOrder, Enabled,
SelectedDeviceIndex,
SelectedDeviceName,
_deviceButtonRoot, } = props;
    
      return (
        <Component type="FrooxEngine.AudioOutputDeviceSelection" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="SelectedDeviceIndex" id={typeof SelectedDeviceIndex === "object" && "id" in SelectedDeviceIndex ? SelectedDeviceIndex?.id : undefined} value={typeof SelectedDeviceIndex === "object" && "value" in SelectedDeviceIndex ? SelectedDeviceIndex?.value : SelectedDeviceIndex} /* default: 0 */  isRaw={typeof SelectedDeviceIndex === "object" && "isRaw" in SelectedDeviceIndex && SelectedDeviceIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SelectedDeviceName" id={typeof SelectedDeviceName === "object" && "id" in SelectedDeviceName ? SelectedDeviceName?.id : undefined} value={typeof SelectedDeviceName === "object" && "value" in SelectedDeviceName ? SelectedDeviceName?.value : SelectedDeviceName} /* default: <i>null</i> */  isRaw={typeof SelectedDeviceName === "object" && "isRaw" in SelectedDeviceName && SelectedDeviceName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_deviceButtonRoot" id={typeof _deviceButtonRoot === "object" && "id" in _deviceButtonRoot ? _deviceButtonRoot?.id : undefined} value={typeof _deviceButtonRoot === "object" && "value" in _deviceButtonRoot ? _deviceButtonRoot?.value : _deviceButtonRoot} /* default: ID0 */  isRaw={typeof _deviceButtonRoot === "object" && "isRaw" in _deviceButtonRoot && _deviceButtonRoot.isRaw ? true : undefined} />
        </Component>
      );
    };
    