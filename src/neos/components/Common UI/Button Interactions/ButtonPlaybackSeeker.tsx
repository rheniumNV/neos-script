import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ButtonPlaybackSeekerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Playback?: member<any>;
Vertical?: member<boolean>;
Continous?: member<boolean>;
    }
    
    export function ButtonPlaybackSeeker(props: ButtonPlaybackSeekerInput){
      const { id, persistentId, updateOrder, Enabled,
Playback,
Vertical,
Continous, } = props;
    
      return (
        <Component type="FrooxEngine.ButtonPlaybackSeeker" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IPlayable]`} name="Playback" id={typeof Playback === "object" && "id" in Playback ? Playback?.id : undefined} value={typeof Playback === "object" && "value" in Playback ? Playback?.value : Playback} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Vertical" id={typeof Vertical === "object" && "id" in Vertical ? Vertical?.id : undefined} value={typeof Vertical === "object" && "value" in Vertical ? Vertical?.value : Vertical} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Continous" id={typeof Continous === "object" && "id" in Continous ? Continous?.id : undefined} value={typeof Continous === "object" && "value" in Continous ? Continous?.value : Continous} /* default: false */  />
        </Component>
      );
    };
    