import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="SelectedDeviceIndex" id={typeof SelectedDeviceIndex === "object" && "id" in SelectedDeviceIndex ? SelectedDeviceIndex?.id : undefined} value={typeof SelectedDeviceIndex === "object" && "value" in SelectedDeviceIndex ? SelectedDeviceIndex?.value : SelectedDeviceIndex} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="SelectedDeviceName" id={typeof SelectedDeviceName === "object" && "id" in SelectedDeviceName ? SelectedDeviceName?.id : undefined} value={typeof SelectedDeviceName === "object" && "value" in SelectedDeviceName ? SelectedDeviceName?.value : SelectedDeviceName} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="_deviceButtonRoot" id={typeof _deviceButtonRoot === "object" && "id" in _deviceButtonRoot ? _deviceButtonRoot?.id : undefined} value={typeof _deviceButtonRoot === "object" && "value" in _deviceButtonRoot ? _deviceButtonRoot?.value : _deviceButtonRoot} /* default: ID0 */  />
        </Component>
      );
    };
    