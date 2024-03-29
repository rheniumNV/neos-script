import { member, Member, Component } from "../../core";
    
    export interface AudioDeviceVolumeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AudioDeviceIndex?: member<number>;
Volume?: member<number>;
NormalizedVolume?: member<number>;
Smoothing?: member<number>;
Power?: member<number>;
    }
    
    export function AudioDeviceVolume(props: AudioDeviceVolumeInput){
      const { id, persistentId, updateOrder, Enabled,
AudioDeviceIndex,
Volume,
NormalizedVolume,
Smoothing,
Power, } = props;
    
      return (
        <Component type="FrooxEngine.AudioDeviceVolume" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="AudioDeviceIndex" id={typeof AudioDeviceIndex === "object" && "id" in AudioDeviceIndex ? AudioDeviceIndex?.id : undefined} value={typeof AudioDeviceIndex === "object" && "value" in AudioDeviceIndex ? AudioDeviceIndex?.value : AudioDeviceIndex} /* default: 0 */  isRaw={typeof AudioDeviceIndex === "object" && "isRaw" in AudioDeviceIndex && AudioDeviceIndex.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Volume" id={typeof Volume === "object" && "id" in Volume ? Volume?.id : undefined} value={typeof Volume === "object" && "value" in Volume ? Volume?.value : Volume} /* default: 0 */  isRaw={typeof Volume === "object" && "isRaw" in Volume && Volume.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalizedVolume" id={typeof NormalizedVolume === "object" && "id" in NormalizedVolume ? NormalizedVolume?.id : undefined} value={typeof NormalizedVolume === "object" && "value" in NormalizedVolume ? NormalizedVolume?.value : NormalizedVolume} /* default: 0 */  isRaw={typeof NormalizedVolume === "object" && "isRaw" in NormalizedVolume && NormalizedVolume.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Smoothing" id={typeof Smoothing === "object" && "id" in Smoothing ? Smoothing?.id : undefined} value={typeof Smoothing === "object" && "value" in Smoothing ? Smoothing?.value : Smoothing} /* default: 0 */  isRaw={typeof Smoothing === "object" && "isRaw" in Smoothing && Smoothing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Power" id={typeof Power === "object" && "id" in Power ? Power?.id : undefined} value={typeof Power === "object" && "value" in Power ? Power?.value : Power} /* default: 0 */  isRaw={typeof Power === "object" && "isRaw" in Power && Power.isRaw ? true : undefined} />
        </Component>
      );
    };
    