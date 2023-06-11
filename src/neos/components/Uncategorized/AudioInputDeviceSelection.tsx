import { member, Member, Component } from "../../core";
    
    export interface AudioInputDeviceSelectionInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SelectedDeviceIndex?: member<number>;
SelectedDeviceName?: member<any>;
UseFilteredData?: member<boolean>;
_deviceButtonRoot?: member<any>;
_audioStream?: member<any>;
_audioOutput?: member<any>;
_deviceVolume?: member<any>;
_volumeBar?: member<any>;
    }
    
    export function AudioInputDeviceSelection(props: AudioInputDeviceSelectionInput){
      const { id, persistentId, updateOrder, Enabled,
SelectedDeviceIndex,
SelectedDeviceName,
UseFilteredData,
_deviceButtonRoot,
_audioStream,
_audioOutput,
_deviceVolume,
_volumeBar, } = props;
    
      return (
        <Component type="FrooxEngine.AudioInputDeviceSelection" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="SelectedDeviceIndex" id={typeof SelectedDeviceIndex === "object" && "id" in SelectedDeviceIndex ? SelectedDeviceIndex?.id : undefined} value={typeof SelectedDeviceIndex === "object" && "value" in SelectedDeviceIndex ? SelectedDeviceIndex?.value : SelectedDeviceIndex} /* default: 0 */  isRaw={typeof SelectedDeviceIndex === "object" && "isRaw" in SelectedDeviceIndex && SelectedDeviceIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SelectedDeviceName" id={typeof SelectedDeviceName === "object" && "id" in SelectedDeviceName ? SelectedDeviceName?.id : undefined} value={typeof SelectedDeviceName === "object" && "value" in SelectedDeviceName ? SelectedDeviceName?.value : SelectedDeviceName} /* default: <i>null</i> */  isRaw={typeof SelectedDeviceName === "object" && "isRaw" in SelectedDeviceName && SelectedDeviceName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseFilteredData" id={typeof UseFilteredData === "object" && "id" in UseFilteredData ? UseFilteredData?.id : undefined} value={typeof UseFilteredData === "object" && "value" in UseFilteredData ? UseFilteredData?.value : UseFilteredData} /* default: false */  isRaw={typeof UseFilteredData === "object" && "isRaw" in UseFilteredData && UseFilteredData.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_deviceButtonRoot" id={typeof _deviceButtonRoot === "object" && "id" in _deviceButtonRoot ? _deviceButtonRoot?.id : undefined} value={typeof _deviceButtonRoot === "object" && "value" in _deviceButtonRoot ? _deviceButtonRoot?.value : _deviceButtonRoot} /* default: ID0 */  isRaw={typeof _deviceButtonRoot === "object" && "isRaw" in _deviceButtonRoot && _deviceButtonRoot.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.LocalAudioDeviceStream]`} name="_audioStream" id={typeof _audioStream === "object" && "id" in _audioStream ? _audioStream?.id : undefined} value={typeof _audioStream === "object" && "value" in _audioStream ? _audioStream?.value : _audioStream} /* default: ID0 */  isRaw={typeof _audioStream === "object" && "isRaw" in _audioStream && _audioStream.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.AudioOutput]`} name="_audioOutput" id={typeof _audioOutput === "object" && "id" in _audioOutput ? _audioOutput?.id : undefined} value={typeof _audioOutput === "object" && "value" in _audioOutput ? _audioOutput?.value : _audioOutput} /* default: ID0 */  isRaw={typeof _audioOutput === "object" && "isRaw" in _audioOutput && _audioOutput.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.VolumeMeter]`} name="_deviceVolume" id={typeof _deviceVolume === "object" && "id" in _deviceVolume ? _deviceVolume?.id : undefined} value={typeof _deviceVolume === "object" && "value" in _deviceVolume ? _deviceVolume?.value : _deviceVolume} /* default: ID0 */  isRaw={typeof _deviceVolume === "object" && "isRaw" in _deviceVolume && _deviceVolume.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.ProgressBar]`} name="_volumeBar" id={typeof _volumeBar === "object" && "id" in _volumeBar ? _volumeBar?.id : undefined} value={typeof _volumeBar === "object" && "value" in _volumeBar ? _volumeBar?.value : _volumeBar} /* default: ID0 */  isRaw={typeof _volumeBar === "object" && "isRaw" in _volumeBar && _volumeBar.isRaw ? true : undefined} />
        </Component>
      );
    };
    