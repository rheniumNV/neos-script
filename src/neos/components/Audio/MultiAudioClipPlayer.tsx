import { member, Member, Component } from "../../core";
    
    export interface MultiAudioClipPlayerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Tracks?: member<any>;
    }
    
    export function MultiAudioClipPlayer(props: MultiAudioClipPlayerInput){
      const { id, persistentId, updateOrder, Enabled,
Tracks, } = props;
    
      return (
        <Component type="FrooxEngine.MultiAudioClipPlayer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.MultiAudioClipPlayer+Track]`} name="Tracks" id={typeof Tracks === "object" && "id" in Tracks ? Tracks?.id : undefined} value={typeof Tracks === "object" && "value" in Tracks ? Tracks?.value : Tracks} /* default: FrooxEngine.SyncList`1[FrooxEngine.MultiAudioClipPlayer+Track] */  isRaw={typeof Tracks === "object" && "isRaw" in Tracks && Tracks.isRaw ? true : undefined} />
        </Component>
      );
    };
    