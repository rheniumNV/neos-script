import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface IsPlayingDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Playback?: member<any>;
    }
    
    export function IsPlayingDriver(props: IsPlayingDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Playback, } = props;
    
      return (
        <Component type="FrooxEngine.IsPlayingDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.SyncPlayback]`} name="Playback" id={typeof Playback === "object" && "id" in Playback ? Playback?.id : undefined} value={typeof Playback === "object" && "value" in Playback ? Playback?.value : Playback} /* default: ID0 */  />
        </Component>
      );
    };
    