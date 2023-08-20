import { member, Member, Component } from "../../core";
    
    export interface AudioReverbZoneInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MinDistance?: member<number>;
MaxDistance?: member<number>;
Room?: member<number>;
RoomHF?: member<number>;
RoomLF?: member<number>;
DecayTime?: member<number>;
DecayHFRatio?: member<number>;
Reflections?: member<number>;
ReflectionsDelay?: member<number>;
Reverb?: member<number>;
ReverbDelay?: member<number>;
HFReference?: member<number>;
LFReference?: member<number>;
Diffusion?: member<number>;
Density?: member<number>;
    }
    
    export function AudioReverbZone(props: AudioReverbZoneInput){
      const { id, persistentId, updateOrder, Enabled,
MinDistance,
MaxDistance,
Room,
RoomHF,
RoomLF,
DecayTime,
DecayHFRatio,
Reflections,
ReflectionsDelay,
Reverb,
ReverbDelay,
HFReference,
LFReference,
Diffusion,
Density, } = props;
    
      return (
        <Component type="FrooxEngine.AudioReverbZone" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinDistance" id={typeof MinDistance === "object" && "id" in MinDistance ? MinDistance?.id : undefined} value={typeof MinDistance === "object" && "value" in MinDistance ? MinDistance?.value : MinDistance} /* default: 0 */  isRaw={typeof MinDistance === "object" && "isRaw" in MinDistance && MinDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxDistance" id={typeof MaxDistance === "object" && "id" in MaxDistance ? MaxDistance?.id : undefined} value={typeof MaxDistance === "object" && "value" in MaxDistance ? MaxDistance?.value : MaxDistance} /* default: 0 */  isRaw={typeof MaxDistance === "object" && "isRaw" in MaxDistance && MaxDistance.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Room" id={typeof Room === "object" && "id" in Room ? Room?.id : undefined} value={typeof Room === "object" && "value" in Room ? Room?.value : Room} /* default: 0 */  isRaw={typeof Room === "object" && "isRaw" in Room && Room.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RoomHF" id={typeof RoomHF === "object" && "id" in RoomHF ? RoomHF?.id : undefined} value={typeof RoomHF === "object" && "value" in RoomHF ? RoomHF?.value : RoomHF} /* default: 0 */  isRaw={typeof RoomHF === "object" && "isRaw" in RoomHF && RoomHF.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="RoomLF" id={typeof RoomLF === "object" && "id" in RoomLF ? RoomLF?.id : undefined} value={typeof RoomLF === "object" && "value" in RoomLF ? RoomLF?.value : RoomLF} /* default: 0 */  isRaw={typeof RoomLF === "object" && "isRaw" in RoomLF && RoomLF.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DecayTime" id={typeof DecayTime === "object" && "id" in DecayTime ? DecayTime?.id : undefined} value={typeof DecayTime === "object" && "value" in DecayTime ? DecayTime?.value : DecayTime} /* default: 0 */  isRaw={typeof DecayTime === "object" && "isRaw" in DecayTime && DecayTime.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="DecayHFRatio" id={typeof DecayHFRatio === "object" && "id" in DecayHFRatio ? DecayHFRatio?.id : undefined} value={typeof DecayHFRatio === "object" && "value" in DecayHFRatio ? DecayHFRatio?.value : DecayHFRatio} /* default: 0 */  isRaw={typeof DecayHFRatio === "object" && "isRaw" in DecayHFRatio && DecayHFRatio.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Reflections" id={typeof Reflections === "object" && "id" in Reflections ? Reflections?.id : undefined} value={typeof Reflections === "object" && "value" in Reflections ? Reflections?.value : Reflections} /* default: 0 */  isRaw={typeof Reflections === "object" && "isRaw" in Reflections && Reflections.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ReflectionsDelay" id={typeof ReflectionsDelay === "object" && "id" in ReflectionsDelay ? ReflectionsDelay?.id : undefined} value={typeof ReflectionsDelay === "object" && "value" in ReflectionsDelay ? ReflectionsDelay?.value : ReflectionsDelay} /* default: 0 */  isRaw={typeof ReflectionsDelay === "object" && "isRaw" in ReflectionsDelay && ReflectionsDelay.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Reverb" id={typeof Reverb === "object" && "id" in Reverb ? Reverb?.id : undefined} value={typeof Reverb === "object" && "value" in Reverb ? Reverb?.value : Reverb} /* default: 0 */  isRaw={typeof Reverb === "object" && "isRaw" in Reverb && Reverb.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="ReverbDelay" id={typeof ReverbDelay === "object" && "id" in ReverbDelay ? ReverbDelay?.id : undefined} value={typeof ReverbDelay === "object" && "value" in ReverbDelay ? ReverbDelay?.value : ReverbDelay} /* default: 0 */  isRaw={typeof ReverbDelay === "object" && "isRaw" in ReverbDelay && ReverbDelay.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HFReference" id={typeof HFReference === "object" && "id" in HFReference ? HFReference?.id : undefined} value={typeof HFReference === "object" && "value" in HFReference ? HFReference?.value : HFReference} /* default: 0 */  isRaw={typeof HFReference === "object" && "isRaw" in HFReference && HFReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LFReference" id={typeof LFReference === "object" && "id" in LFReference ? LFReference?.id : undefined} value={typeof LFReference === "object" && "value" in LFReference ? LFReference?.value : LFReference} /* default: 0 */  isRaw={typeof LFReference === "object" && "isRaw" in LFReference && LFReference.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Diffusion" id={typeof Diffusion === "object" && "id" in Diffusion ? Diffusion?.id : undefined} value={typeof Diffusion === "object" && "value" in Diffusion ? Diffusion?.value : Diffusion} /* default: 0 */  isRaw={typeof Diffusion === "object" && "isRaw" in Diffusion && Diffusion.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Density" id={typeof Density === "object" && "id" in Density ? Density?.id : undefined} value={typeof Density === "object" && "value" in Density ? Density?.value : Density} /* default: 0 */  isRaw={typeof Density === "object" && "isRaw" in Density && Density.isRaw ? true : undefined} />
        </Component>
      );
    };
    