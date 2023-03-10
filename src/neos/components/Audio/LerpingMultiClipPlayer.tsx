import { member, Member, Component } from "../../core";
    
    export interface LerpingMultiClipPlayerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Lerp?: member<number>;
Tracks?: member<any>;
    }
    
    export function LerpingMultiClipPlayer(props: LerpingMultiClipPlayerInput){
      const { id, persistentId, updateOrder, Enabled,
Lerp,
Tracks, } = props;
    
      return (
        <Component type="FrooxEngine.LerpingMultiClipPlayer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Lerp" id={typeof Lerp === "object" && "id" in Lerp ? Lerp?.id : undefined} value={typeof Lerp === "object" && "value" in Lerp ? Lerp?.value : Lerp} /* default: 0 */  />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.LerpingMultiClipPlayer+Track]`} name="Tracks" id={typeof Tracks === "object" && "id" in Tracks ? Tracks?.id : undefined} value={typeof Tracks === "object" && "value" in Tracks ? Tracks?.value : Tracks} /* default: FrooxEngine.SyncList`1[FrooxEngine.LerpingMultiClipPlayer+Track] */  />
        </Component>
      );
    };
    