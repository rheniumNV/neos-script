import { member, Member, Component } from "../../core";
    
    export interface AudioClipPlayerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Clip?: member<any>;
    }
    
    export function AudioClipPlayer(props: AudioClipPlayerInput){
      const { id, persistentId, updateOrder, Enabled,
Clip, } = props;
    
      return (
        <Component type="FrooxEngine.AudioClipPlayer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.AudioClip]`} name="Clip" id={typeof Clip === "object" && "id" in Clip ? Clip?.id : undefined} value={typeof Clip === "object" && "value" in Clip ? Clip?.value : Clip} /* default: ID0 */  />
        </Component>
      );
    };
    