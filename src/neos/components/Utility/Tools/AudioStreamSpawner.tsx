import { member, Member, Component } from "../../../core";
    
    export interface AudioStreamSpawnerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
BitrateKbps?: member<number>;
DeviceName?: member<any>;
_bitrateString?: member<any>;
    }
    
    export function AudioStreamSpawner(props: AudioStreamSpawnerInput){
      const { id, persistentId, updateOrder, Enabled,
BitrateKbps,
DeviceName,
_bitrateString, } = props;
    
      return (
        <Component type="FrooxEngine.AudioStreamSpawner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BitrateKbps" id={typeof BitrateKbps === "object" && "id" in BitrateKbps ? BitrateKbps?.id : undefined} value={typeof BitrateKbps === "object" && "value" in BitrateKbps ? BitrateKbps?.value : BitrateKbps} /* default: 0 */  isRaw={typeof BitrateKbps === "object" && "isRaw" in BitrateKbps && BitrateKbps.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="DeviceName" id={typeof DeviceName === "object" && "id" in DeviceName ? DeviceName?.id : undefined} value={typeof DeviceName === "object" && "value" in DeviceName ? DeviceName?.value : DeviceName} /* default: <i>null</i> */  isRaw={typeof DeviceName === "object" && "isRaw" in DeviceName && DeviceName.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_bitrateString" id={typeof _bitrateString === "object" && "id" in _bitrateString ? _bitrateString?.id : undefined} value={typeof _bitrateString === "object" && "value" in _bitrateString ? _bitrateString?.value : _bitrateString} /* default: <i>null</i> */  isRaw={typeof _bitrateString === "object" && "isRaw" in _bitrateString && _bitrateString.isRaw ? true : undefined} />
        </Component>
      );
    };
    