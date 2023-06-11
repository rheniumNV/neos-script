import { member, Member, Component } from "../../core";
    
    export interface TestSineWaveSourceInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Frequency?: member<number>;
Amplitude?: member<number>;
    }
    
    export function TestSineWaveSource(props: TestSineWaveSourceInput){
      const { id, persistentId, updateOrder, Enabled,
Frequency,
Amplitude, } = props;
    
      return (
        <Component type="FrooxEngine.TestSineWaveSource" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Frequency" id={typeof Frequency === "object" && "id" in Frequency ? Frequency?.id : undefined} value={typeof Frequency === "object" && "value" in Frequency ? Frequency?.value : Frequency} /* default: 0 */  isRaw={typeof Frequency === "object" && "isRaw" in Frequency && Frequency.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Amplitude" id={typeof Amplitude === "object" && "id" in Amplitude ? Amplitude?.id : undefined} value={typeof Amplitude === "object" && "value" in Amplitude ? Amplitude?.value : Amplitude} /* default: 0 */  isRaw={typeof Amplitude === "object" && "isRaw" in Amplitude && Amplitude.isRaw ? true : undefined} />
        </Component>
      );
    };
    