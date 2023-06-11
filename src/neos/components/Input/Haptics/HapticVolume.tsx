import { member, Member, Component } from "../../../core";
    
    export interface HapticVolumeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Sensation?: member<any>;
Intensity?: member<number>;
SensationHints?: member<any>;
    }
    
    export function HapticVolume(props: HapticVolumeInput){
      const { id, persistentId, updateOrder, Enabled,
Sensation,
Intensity,
SensationHints, } = props;
    
      return (
        <Component type="FrooxEngine.HapticVolume" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.SensationClass]`} name="Sensation" id={typeof Sensation === "object" && "id" in Sensation ? Sensation?.id : undefined} value={typeof Sensation === "object" && "value" in Sensation ? Sensation?.value : Sensation} /* default: Force */  isRaw={typeof Sensation === "object" && "isRaw" in Sensation && Sensation.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Intensity" id={typeof Intensity === "object" && "id" in Intensity ? Intensity?.id : undefined} value={typeof Intensity === "object" && "value" in Intensity ? Intensity?.value : Intensity} /* default: 0 */  isRaw={typeof Intensity === "object" && "isRaw" in Intensity && Intensity.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncFieldList\`1[System.String]`} name="SensationHints" id={typeof SensationHints === "object" && "id" in SensationHints ? SensationHints?.id : undefined} value={typeof SensationHints === "object" && "value" in SensationHints ? SensationHints?.value : SensationHints} /* default: FrooxEngine.SyncFieldList`1[System.String] */  isRaw={typeof SensationHints === "object" && "isRaw" in SensationHints && SensationHints.isRaw ? true : undefined} />
        </Component>
      );
    };
    