import { member, Member, Component } from "../../../core";
    
    export interface AudioExportableInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Audio?: member<any>;
    }
    
    export function AudioExportable(props: AudioExportableInput){
      const { id, persistentId, updateOrder, Enabled,
Audio, } = props;
    
      return (
        <Component type="FrooxEngine.AudioExportable" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="Audio" id={typeof Audio === "object" && "id" in Audio ? Audio?.id : undefined} value={typeof Audio === "object" && "value" in Audio ? Audio?.value : Audio} /* default: ID0 */  isRaw={typeof Audio === "object" && "isRaw" in Audio && Audio.isRaw ? true : undefined} />
        </Component>
      );
    };
    